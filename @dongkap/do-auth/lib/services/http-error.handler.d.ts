import { HttpErrorResponse, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiBaseResponse } from '@dongkap/do-core';
import { AuthTokenService } from './auth-token.service';
import { AuthSignatureService } from './auth-signature.service';
import { AuthIndexedDBService } from '../storage/auth-indexeddb.service';
export declare class HttpErrorHandler {
    protected translate: TranslateService;
    protected authToken: AuthTokenService;
    protected authStorage: AuthIndexedDBService;
    protected authSignature: AuthSignatureService;
    protected isRefreshingToken: boolean;
    protected refreshTokenSubject: BehaviorSubject<any>;
    constructor(translate: TranslateService, authToken: AuthTokenService, authStorage: AuthIndexedDBService, authSignature: AuthSignatureService);
    protected errorHandler(error: HttpErrorResponse, req: HttpRequest<any>, next: HttpHandler): Observable<any>;
    protected errorDefault(error: any | HttpErrorResponse): ApiBaseResponse;
    protected error400(error: HttpErrorResponse): Observable<HttpEvent<any>>;
    protected error401(error: HttpErrorResponse, request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
