import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { HttpErrorHandler } from './http-error.handler';
import { AuthTokenService } from './auth-token.service';
import { AuthSignatureService } from './auth-signature.service';
import { AuthIndexedDBService } from '../storage/auth-indexeddb.service';
export declare class HttpInterceptorErrorService extends HttpErrorHandler implements HttpInterceptor, OnDestroy {
    translate: TranslateService;
    authToken: AuthTokenService;
    authStorage: AuthIndexedDBService;
    authSignature: AuthSignatureService;
    constructor(translate: TranslateService, authToken: AuthTokenService, authStorage: AuthIndexedDBService, authSignature: AuthSignatureService);
    private destroy$;
    ngOnDestroy(): void;
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
