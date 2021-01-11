import { OnDestroy } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Idle } from '@ng-idle/core';
import { APIModel, HttpFactoryService, SecurityResourceModel } from '@dongkap/do-core';
import { AuthIndexedDBService } from '../storage/auth-indexeddb.service';
import { ProfileIndexedDBService } from '../storage/profile-indexeddb.service';
import { SettingsIndexedDBService } from '../storage/settings-indexeddb.service';
export declare class AuthTokenService implements OnDestroy {
    private httpBaseService;
    private oauthResource;
    private apiPath;
    private router;
    private authIndexedDB;
    private profileIndexedDB;
    private settingsIndexedDB;
    private idle;
    private timer;
    protected destroy$: Subject<any>;
    constructor(httpBaseService: HttpFactoryService, oauthResource: SecurityResourceModel, apiPath: APIModel, router: Router, authIndexedDB: AuthIndexedDBService, profileIndexedDB: ProfileIndexedDBService, settingsIndexedDB: SettingsIndexedDBService, idle: Idle);
    ngOnDestroy(): void;
    login(username: string, password: string): Promise<any>;
    refresh(): Observable<any>;
    logout(): void;
    private doLogout;
    isLogin(): Promise<boolean>;
    oauthHeaders(request: HttpRequest<any>): Observable<HttpRequest<any>>;
    private getAuthHeader;
    private getAuthBody;
    private getBodyRefresh;
}
