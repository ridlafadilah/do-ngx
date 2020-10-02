import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import {
    HTTP_SERVICE, APIModel, signatureHeader,
    HttpFactoryService, API,
    SecurityResourceModel, OAUTH_INFO, oauthInfo } from '@dongkap/do-core';
import { AuthIndexedDBService } from '../storage/auth-indexeddb.service';
import { ProfileIndexedDBService } from '../storage/profile-indexeddb.service';
import { SettingsIndexedDBService } from '../storage/settings-indexeddb.service';

@Injectable()
export class AuthTokenService {

    constructor(@Inject(HTTP_SERVICE)private httpBaseService: HttpFactoryService,
        @Inject(OAUTH_INFO)private oauthResource: SecurityResourceModel,
        @Inject(API)private apiPath: APIModel,
        private router: Router,
        private authIndexedDB: AuthIndexedDBService,
        private profileIndexedDB: ProfileIndexedDBService,
        private settingsIndexedDB: SettingsIndexedDBService,
        private idle: Idle) {
        idle.setIdle(oauthResource['session_idle']);
        idle.setTimeout(oauthResource['session_timeout']);
        idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
        idle.onTimeout.subscribe(() => {
            /* console.log('[RIP] Session Timeout'); */
            this.logout();
        });
        idle.onIdleEnd.subscribe(() => {
            /* console.log('[RIP] Session Idle End'); */
        });
    }

    public login(username: string, password: string): Promise<any> {
        this.authIndexedDB.logout();
        return this.httpBaseService.
        HTTP_BASE(this.apiPath['auth']['token'],
            this.getAuthBody(username, password).toString(),
            this.getAuthHeader())
                .toPromise()
                .then((response: HttpResponse<any>) => {
                    this.idle.setIdle(response['expires_in']);
                    this.idle.watch();
                    /* console.log('[RIP] Session Idle Start'); */
                    /* console.log('[RIP] Session Timeout in '+response['expires_in']+' seconds'); */
                    this.authIndexedDB.loginStorage(response);
                    this.profileIndexedDB.loginStorage(response);
                    this.settingsIndexedDB.loginStorage(response);
                });
    }

    public refresh(): Observable<any> {
        return this.getBodyRefresh().pipe(switchMap((body: any) => {
            return this.httpBaseService.
            HTTP_BASE(this.apiPath['auth']['token'],
                body,
                this.getAuthHeader())
                .pipe(tap((response: any) => {
                    this.idle.setIdle(response['expires_in']);
                    this.authIndexedDB.logout();
                    this.authIndexedDB.loginStorage(response);
                }));
        }));
    }

    public logout() {
        this.idle.stop();
        this.authIndexedDB.logout();
        this.profileIndexedDB.logout();
        this.router.navigate(['/auth']);
    }

    public async isLogin(): Promise<boolean> {
        return await this.authIndexedDB.isLogin();
    }

    public oauthHeaders(request: HttpRequest<any>): Observable<HttpRequest<any>> {
        const result$: Subject<HttpRequest<any>> = new Subject<HttpRequest<any>>();
        let httpHeaders: HttpHeaders = request.headers ? request.headers : new HttpHeaders();
        httpHeaders = httpHeaders.has(signatureHeader.authorization) ?
                        httpHeaders.delete(signatureHeader.authorization) : httpHeaders;
        Promise.all([
            this.authIndexedDB.getEnc(oauthInfo.token_type),
            this.authIndexedDB.getEnc(oauthInfo.access_token)])
        .then((value: string[]) => {
            httpHeaders = httpHeaders.set(signatureHeader.authorization, value[0] + ' ' + value[1]);
            result$.next(request.clone({ headers: httpHeaders }));
        });
        return result$.asObservable();
    }

    private getAuthHeader(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' +
                btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
            'Accept': 'application/json',
        });
    }

    private getAuthBody(username: string, password: string): URLSearchParams {
        const body = new URLSearchParams();
        body.append('client_id', this.oauthResource['client_id']);
        body.append('grant_type', this.oauthResource['grant_type']);
        body.append('username', username);
        body.append('password', password);
        return body;
    }

    private getBodyRefresh(): Observable<String> {
        const result$: Subject<String> = new Subject<String>();
        this.authIndexedDB.getEnc(oauthInfo.refresh_token).then((value: string) => {
            const body: URLSearchParams = new URLSearchParams();
            body.append('client_id', this.oauthResource['client_id']);
            body.append('grant_type', 'refresh_token');
            body.append('refresh_token', value);
            result$.next(body.toString());
        });
        return result$.asObservable();
    }

}
