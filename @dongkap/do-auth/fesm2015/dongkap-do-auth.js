import { Injector, ɵɵdefineInjectable, ɵɵinject, INJECTOR, Injectable, Inject, Component, Input, NgModule, LOCALE_ID } from '@angular/core';
import { NbDialogRef, NbDialogService, NbLayoutModule, NbCardModule, NbIconModule, NbCheckboxModule, NbAlertModule, NbInputModule, NbButtonModule, NbSpinnerModule, NbDialogModule } from '@nebular/theme';
import { Location, CommonModule, DatePipe } from '@angular/common';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpHeaders, HttpErrorResponse, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { oauthInfoModels, TypeDataOauth, oauthInfo, signatureHeader, HTTP_SERVICE, OAUTH_INFO, API, UserInfo, USER_INFO, EncryptionService, Pattern, ResponseCode, DateFormat, AUTH_INDEXED_DB, PROFILE_INDEXED_DB, SETTINGS_INDEXED_DB } from '@dongkap/do-core';
import { DoThemeModule } from '@dongkap/do-theme';
import { DoToastrService, DoToastrModule } from '@dongkap/do-common';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { Subject, of, combineLatest, from, BehaviorSubject, throwError, EMPTY } from 'rxjs';
import { __awaiter } from 'tslib';
import { takeUntil, switchMap, map, debounceTime, distinctUntilChanged, first, take, catchError, filter } from 'rxjs/operators';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';
import { IndexedDBService } from '@dongkap/do-storage';

class AuthIndexedDBService extends IndexedDBService {
    constructor(injector) {
        super(injector, 'do-core', 1, '#do-auth');
    }
    getEnc(key, storeName) {
        return __awaiter(this, void 0, void 0, function* () {
            const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
            return ((yield this.$dbPromise).get(storeName ? storeName : '#do-auth', keyEncrypted)).then((value) => {
                return this.enc.decryptAES(this.oauthResource['aes_key'], value);
            });
        });
    }
    putEnc(key, val, storeName) {
        return __awaiter(this, void 0, void 0, function* () {
            const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
            const valueEncrypted = this.enc.encryptAES(this.oauthResource['aes_key'], val);
            return (yield this.$dbPromise).put(storeName ? storeName : '#do-auth', valueEncrypted, keyEncrypted);
        });
    }
    removeEnc(key, storeName) {
        return __awaiter(this, void 0, void 0, function* () {
            const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
            return (yield this.$dbPromise).delete(storeName ? storeName : '#do-auth', keyEncrypted);
        });
    }
    getOfEnc(key, storeName) {
        const result$ = new Subject();
        this.getEnc(key, storeName).then((value) => {
            result$.next(value);
        });
        return result$.asObservable();
    }
    putOfEnc(key, val, storeName) {
        const result$ = new Subject();
        this.putEnc(key, val, storeName).then((value) => {
            result$.next(value);
        });
        return result$.asObservable();
    }
    removeOfEnc(key, storeName) {
        const result$ = new Subject();
        this.removeEnc(key, storeName).then((value) => {
            result$.next(value);
        });
        return result$.asObservable();
    }
    loginStorage(response) {
        oauthInfoModels.forEach(data => {
            if (response[data.key]) {
                if (data.type === TypeDataOauth.OAUTH) {
                    if (data.enc) {
                        this.putEnc(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                    }
                    else {
                        this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                    }
                }
            }
        });
    }
    logout() {
        oauthInfoModels.forEach(data => {
            if (data.enc) {
                if (data.type === TypeDataOauth.OAUTH) {
                    this.removeEnc(data.key).then();
                }
            }
        });
    }
    isLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.getEnc(oauthInfo.access_token))
                return true;
            oauthInfoModels.forEach(data => {
                this.removeEnc(data.key).then();
            });
            return false;
        });
    }
}
AuthIndexedDBService.ctorParameters = () => [
    { type: Injector }
];
AuthIndexedDBService.ɵprov = ɵɵdefineInjectable({ factory: function AuthIndexedDBService_Factory() { return new AuthIndexedDBService(ɵɵinject(INJECTOR)); }, token: AuthIndexedDBService, providedIn: "root" });
AuthIndexedDBService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
AuthIndexedDBService.ctorParameters = () => [
    { type: Injector }
];

class ProfileIndexedDBService extends IndexedDBService {
    constructor(injector) {
        super(injector, 'do-core', 1, '#do-profile');
    }
    loginStorage(response) {
        oauthInfoModels.forEach(data => {
            if (response[data.key]) {
                if (data.type === TypeDataOauth.PROFILE) {
                    this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                }
            }
        });
    }
    logout() {
        oauthInfoModels.forEach(data => {
            if (data.type === TypeDataOauth.PROFILE) {
                this.remove(data.key);
            }
        });
    }
}
ProfileIndexedDBService.ctorParameters = () => [
    { type: Injector }
];
ProfileIndexedDBService.ɵprov = ɵɵdefineInjectable({ factory: function ProfileIndexedDBService_Factory() { return new ProfileIndexedDBService(ɵɵinject(INJECTOR)); }, token: ProfileIndexedDBService, providedIn: "root" });
ProfileIndexedDBService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
ProfileIndexedDBService.ctorParameters = () => [
    { type: Injector }
];

class SettingsIndexedDBService extends IndexedDBService {
    constructor(injector) {
        super(injector, 'do-core', 1, '#do-settings');
        this.translate = injector.get(TranslateService);
    }
    loginStorage(response) {
        oauthInfoModels.forEach(data => {
            if (response[data.key]) {
                if (data.type === TypeDataOauth.SETTINGS) {
                    this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                    if (data.key === 'locale') {
                        this.translate.getTranslation(response[data.key]).subscribe((lang) => {
                            this.translate.use(response[data.key]);
                            this.translate.setTranslation(response[data.key], lang, true);
                        });
                    }
                }
            }
        });
    }
}
SettingsIndexedDBService.ctorParameters = () => [
    { type: Injector }
];
SettingsIndexedDBService.ɵprov = ɵɵdefineInjectable({ factory: function SettingsIndexedDBService_Factory() { return new SettingsIndexedDBService(ɵɵinject(INJECTOR)); }, token: SettingsIndexedDBService, providedIn: "root" });
SettingsIndexedDBService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
SettingsIndexedDBService.ctorParameters = () => [
    { type: Injector }
];

class AuthTokenService {
    constructor(httpBaseService, oauthResource, apiPath, router, authIndexedDB, profileIndexedDB, settingsIndexedDB, idle) {
        this.httpBaseService = httpBaseService;
        this.oauthResource = oauthResource;
        this.apiPath = apiPath;
        this.router = router;
        this.authIndexedDB = authIndexedDB;
        this.profileIndexedDB = profileIndexedDB;
        this.settingsIndexedDB = settingsIndexedDB;
        this.idle = idle;
        this.destroy$ = new Subject();
        idle.setIdle(oauthResource['session_idle']);
        idle.setTimeout(oauthResource['session_timeout']);
        idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
        idle.onTimeout.subscribe(() => {
            /* console.log('[DONGKAP] Session Timeout'); */
            this.logout();
        });
        idle.onIdleEnd.subscribe(() => {
            /* console.log('[DONGKAP] Session Idle End'); */
        });
    }
    ngOnDestroy() {
        clearInterval(this.timer);
        this.destroy$.next(true);
        this.destroy$.next();
        this.destroy$.complete();
    }
    login(username, password) {
        this.authIndexedDB.logout();
        return this.httpBaseService.
            HTTP_BASE(this.apiPath['auth']['token'], this.getAuthBody(username, password).toString(), this.getAuthHeader())
            .pipe(takeUntil(this.destroy$))
            .toPromise()
            .then((response) => {
            this.idle.setIdle(+response['expires_in']);
            this.idle.watch();
            /* console.log('[DONGKAP] Session Idle Start'); */
            /* console.log('[DONGKAP] Session Timeout in ' + response['expires_in'] + ' seconds'); */
            this.authIndexedDB.loginStorage(response);
            this.profileIndexedDB.loginStorage(response);
            this.settingsIndexedDB.loginStorage(response);
        });
    }
    refresh() {
        return this.getBodyRefresh().pipe(switchMap((body) => {
            return this.httpBaseService.
                HTTP_BASE(this.apiPath['auth']['token'], body, this.getAuthHeader())
                .pipe(takeUntil(this.destroy$))
                .pipe(map((response) => {
                this.idle.setIdle(response['expires_in']);
                this.authIndexedDB.logout();
                this.authIndexedDB.loginStorage(response);
            }));
        }));
    }
    logout() {
        this.timer = setInterval(() => {
            this.doLogout();
        }, 5000);
        this.httpBaseService.HTTP_AUTH(this.apiPath['security']['revoke'])
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.doLogout();
        });
    }
    doLogout() {
        this.authIndexedDB.logout();
        this.profileIndexedDB.logout();
        clearInterval(this.timer);
        this.idle.stop();
        this.router.navigate(['/auth']);
    }
    isLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.authIndexedDB.isLogin();
        });
    }
    oauthHeaders(request) {
        const result$ = new Subject();
        let httpHeaders = request.headers ? request.headers : new HttpHeaders();
        httpHeaders = httpHeaders.has(signatureHeader.authorization) ?
            httpHeaders.delete(signatureHeader.authorization) : httpHeaders;
        Promise.all([
            this.authIndexedDB.getEnc(oauthInfo.token_type),
            this.authIndexedDB.getEnc(oauthInfo.access_token)
        ])
            .then((value) => {
            httpHeaders = httpHeaders.set(signatureHeader.authorization, value[0] + ' ' + value[1]);
            result$.next(request.clone({ headers: httpHeaders }));
        });
        return result$.asObservable();
    }
    getAuthHeader() {
        return new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' +
                btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
            'Accept': 'application/json',
        });
    }
    getAuthBody(username, password) {
        const body = new URLSearchParams();
        body.append('client_id', this.oauthResource['client_id']);
        body.append('grant_type', this.oauthResource['grant_type']);
        body.append('username', username);
        body.append('password', password);
        return body;
    }
    getBodyRefresh() {
        const result$ = new Subject();
        this.authIndexedDB.getEnc(oauthInfo.refresh_token).then((value) => {
            const body = new URLSearchParams();
            body.append('client_id', this.oauthResource['client_id']);
            body.append('grant_type', 'refresh_token');
            body.append('refresh_token', value);
            result$.next(body.toString());
        });
        return result$.asObservable();
    }
}
AuthTokenService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
    { type: Router },
    { type: AuthIndexedDBService },
    { type: ProfileIndexedDBService },
    { type: SettingsIndexedDBService },
    { type: Idle }
];
AuthTokenService.decorators = [
    { type: Injectable }
];
AuthTokenService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
    { type: Router },
    { type: AuthIndexedDBService },
    { type: ProfileIndexedDBService },
    { type: SettingsIndexedDBService },
    { type: Idle }
];

class AuthGuardService {
    constructor(router, authTokenService, authService) {
        this.router = router;
        this.authTokenService = authTokenService;
        this.authService = authService;
    }
    canActivate(route, state) {
        const result$ = new Subject();
        this.authTokenService.isLogin().then((value) => {
            result$.next(value);
            if (!value) {
                this.router.navigate(['/auth']);
            }
            else {
                if (state.url !== '/auth/logout')
                    this.authService.loadPhotoUser();
            }
        });
        return result$.asObservable();
    }
}
AuthGuardService.ctorParameters = () => [
    { type: Router },
    { type: AuthTokenService },
    { type: UserInfo, decorators: [{ type: Inject, args: [USER_INFO,] }] }
];
AuthGuardService.decorators = [
    { type: Injectable }
];
AuthGuardService.ctorParameters = () => [
    { type: Router },
    { type: AuthTokenService },
    { type: UserInfo, decorators: [{ type: Inject, args: [USER_INFO,] }] }
];

class UnauthorizeGuardService {
    constructor(router, authTokenService) {
        this.router = router;
        this.authTokenService = authTokenService;
    }
    canActivate(route, state) {
        const result$ = new Subject();
        this.authTokenService.isLogin().then((value) => {
            result$.next(!value);
            if (value) {
                this.router.navigate(['/app']);
            }
        });
        return result$.asObservable();
    }
}
UnauthorizeGuardService.ctorParameters = () => [
    { type: Router },
    { type: AuthTokenService }
];
UnauthorizeGuardService.decorators = [
    { type: Injectable }
];
UnauthorizeGuardService.ctorParameters = () => [
    { type: Router },
    { type: AuthTokenService }
];

class AuthGuardChildService {
    constructor(router, authTokenService, enc, storage) {
        this.router = router;
        this.authTokenService = authTokenService;
        this.enc = enc;
        this.storage = storage;
    }
    canActivateChild(route, state) {
        const result$ = new Subject();
        this.authTokenService.isLogin().then((value) => {
            result$.next(value);
            if (route.data) {
                Promise.all([
                    this.storage.getEnc('menus'),
                    this.storage.getEnc('extras'),
                ]).then((strg) => {
                    if (!(strg[0].includes(route.data['code']) || strg[1].includes(route.data['code']))) {
                        this.router.navigate(['/app/home']);
                    }
                    return result$.asObservable();
                });
            }
            if (!value) {
                this.router.navigate(['/auth']);
            }
        });
        return result$.asObservable();
    }
}
AuthGuardChildService.ctorParameters = () => [
    { type: Router },
    { type: AuthTokenService },
    { type: EncryptionService },
    { type: AuthIndexedDBService }
];
AuthGuardChildService.decorators = [
    { type: Injectable }
];
AuthGuardChildService.ctorParameters = () => [
    { type: Router },
    { type: AuthTokenService },
    { type: EncryptionService },
    { type: AuthIndexedDBService }
];

class TermsConditionsComponent {
    constructor(ref) {
        this.ref = ref;
        this.action = 'Agree';
    }
    submit() {
        this.ref.close(true);
    }
}
TermsConditionsComponent.ctorParameters = () => [
    { type: NbDialogRef }
];
TermsConditionsComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-terms-conditions',
                template: "<nb-card [size]=\"'medium'\">\n  <nb-card-header>\n    <h2>\n      <strong>\n        {{ 'header.terms-conditions' | translate }}\n      </strong>\n    </h2>\n  </nb-card-header>\n  <nb-card-body>\n    <div [innerHTML]=\"content\"></div>\n  </nb-card-body>\n  <nb-card-footer>\n    <button\n      type=\"submit\"\n      status=\"primary\"\n      size=\"large\"\n      class=\"terms-button\"\n      (click)=\"submit()\"\n      nbButton>\n      {{ action | translate }}\n    </button>\n  </nb-card-footer>\n</nb-card>\n",
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.terms-button{width:100%}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.terms-button{width:100%}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.terms-button{width:100%}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.terms-button{width:100%}@media (max-width:767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.terms-button{font-size:.6rem}.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.terms-button{font-size:.6rem}.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.terms-button{font-size:.6rem}.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.terms-button{font-size:.6rem}}"]
            },] }
];
TermsConditionsComponent.ctorParameters = () => [
    { type: NbDialogRef }
];
TermsConditionsComponent.propDecorators = {
    content: [{ type: Input }],
    action: [{ type: Input }]
};

class LoginPageComponent {
    constructor(router, dialogService, translate, authTokenService, apiPath, httpBaseService, oauthResource, route) {
        this.router = router;
        this.dialogService = dialogService;
        this.translate = translate;
        this.authTokenService = authTokenService;
        this.apiPath = apiPath;
        this.httpBaseService = httpBaseService;
        this.oauthResource = oauthResource;
        this.buttonLogin = false;
        this.progressBar = 25;
        this.destroy$ = new Subject();
        this.form = new FormGroup({
            username: new FormControl(),
            password: new FormControl(),
        });
        this.urlAuthorizeGoogle = this.httpBaseService.API(this.apiPath['auth']['authorize']) +
            '/google?redirect_uri=' +
            `${document.getElementsByTagName('base')[0].href}auth/callback`;
        this.socialLinks = [
            {
                url: this.urlAuthorizeGoogle,
                target: '_self',
                icon: 'google',
            }
        ];
        if (route.snapshot.queryParams['error']) {
            console.log(route.snapshot.queryParams['error']);
            this.responseError = 'error.' + route.snapshot.queryParams['error'];
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    login() {
        if (!this.form.invalid) {
            document.querySelectorAll('.pace-done').forEach(pace => {
                pace.className = pace.className.replace('pace-done pace-done', 'pace-running');
                pace.className = pace.className.replace('pace-done', 'pace-running');
            });
            document.querySelectorAll('.pace-inactive').forEach(pace => {
                pace.className = pace.className.replace('pace-inactive pace-inactive', 'pace-active');
                pace.className = pace.className.replace('pace-inactive', 'pace-active');
            });
            const progressDOM = document.getElementsByClassName('pace-progress').item(0);
            if (this.progressBar < 35) {
                this.progressBar = 35;
                progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
            }
            this.buttonLogin = true;
            this.authTokenService.login(this.form.get('username').value, this.form.get('password').value)
                .then(() => {
                this.responseError = null;
                this.progressBar = 90;
                progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
                this.progressBar = 0;
                this.router.navigate(['/app/home']);
            })
                .catch((error) => {
                if (!(error instanceof HttpErrorResponse)) {
                    const response = error;
                    this.responseError = response.respStatusMessage[response.respStatusCode];
                }
                this.buttonLogin = false;
                this.progressBar = 85;
                progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
                document.querySelectorAll('.pace-running').forEach(pace => {
                    pace.className = pace.className.replace('pace-running', 'pace-done');
                });
                document.querySelectorAll('.pace-active').forEach(pace => {
                    pace.className = pace.className.replace('pace-active', 'pace-inactive');
                });
                this.progressBar = 0;
            });
            if (this.progressBar >= 35 && this.progressBar < 65) {
                this.progressBar = 65;
                progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
            }
        }
    }
    get hasErrorUsername() {
        return (this.form.controls['username'] &&
            this.form.controls['username'].invalid &&
            this.form.controls['username'].touched);
    }
    get hasSuccessUsername() {
        return (this.form.controls['username'] &&
            this.form.controls['username'].valid &&
            this.form.controls['username'].touched);
    }
    get hasErrorPassword() {
        return (this.form.controls['password'] &&
            this.form.controls['password'].invalid &&
            this.form.controls['password'].touched);
    }
    get hasSuccessPassword() {
        return (this.form.controls['password'] &&
            this.form.controls['password'].valid &&
            this.form.controls['password'].touched);
    }
    onClickTermsConditions() {
        const data = {
            'parameterCode': 'TERMS_CONDITIONS.DONGKAP'
        };
        const httpHeaders = new HttpHeaders({
            'Authorization': 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
            'Content-Type': 'application/json',
            'Accept-Language': this.translate.currentLang,
        });
        this.httpBaseService.HTTP_BASE(this.apiPath['openapi']['parameter'], data, httpHeaders)
            .pipe(takeUntil(this.destroy$))
            .subscribe((response) => {
            this.dialogService.open(TermsConditionsComponent, {
                context: {
                    content: response['parameterValue'],
                    action: 'Close',
                },
            });
        });
    }
}
LoginPageComponent.ctorParameters = () => [
    { type: Router },
    { type: NbDialogService },
    { type: TranslateService },
    { type: AuthTokenService },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: ActivatedRoute }
];
LoginPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-login-page',
                template: "<h1 id=\"title\" class=\"title\">{{ 'Login' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.login' | translate }}</p>\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.login' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError | translate }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"login()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\">{{ 'message.username-login' | translate }} :</label>\n    <input [formControlName]=\"'username'\"\n          [required]=\"true\"\n          [ngClass]=\"{\n            'status-danger': hasErrorUsername,\n            'status-success': hasSuccessUsername\n          }\"\n          name=\"username\"\n          id=\"inputUsername\"\n          placeholder=\"{{ 'message.username-login-placeholder' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"1\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorUsername\">\n      <span class=\"caption status-danger\">{{'error.username-login' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <span class=\"label-with-link\">\n      <label class=\"label\">{{ 'Password' | translate }} :</label>\n      <a class=\"forgot-password caption-2\" routerLink=\"/auth/forgot-password\" tabindex=\"-1\">{{ 'Forgot Password' | translate}}?</a>\n    </span>\n    <input [formControlName]=\"'password'\"\n          [required]=\"true\"\n          [ngClass]=\"{\n            'status-danger': hasErrorPassword,\n            'status-success': hasSuccessPassword\n          }\"\n          name=\"password\"\n          type=\"password\"\n          id=\"inputPassword\"\n          placeholder=\"{{ 'Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"2\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorPassword\">\n      <span class=\"caption status-danger\">{{ 'error.password' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"form.invalid || buttonLogin\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"form.invalid || buttonLogin\">\n    {{ 'Login' | translate }}\n  </button>\n</form>\n\n<section *ngIf=\"socialLinks && socialLinks.length > 0\" class=\"links\" aria-label=\"Social sign in\">\n  {{ 'message.login-footer-social' | translate}}:\n  <div class=\"socials\">\n    <ng-container *ngFor=\"let socialLink of socialLinks\">\n      <a *ngIf=\"socialLink.link\"\n         [routerLink]=\"socialLink.link\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n      <a *ngIf=\"socialLink.url\"\n         [attr.href]=\"socialLink.url\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n    </ng-container>\n  </div>\n</section>\n\n<section class=\"another-action\" aria-label=\"Register\">\n  {{ 'message.login-footer' | translate}} <a class=\"text-link\" routerLink=\"/auth/register\">{{ 'Register' | translate}}</a>\n</section>\n\n<section class=\"another-action\" aria-label=\"Terms and Conditions\">\n  <span class=\"terms-conditions\" (click)=\"onClickTermsConditions()\" tabindex=\"-1\">{{ 'message.terms-conditions' | translate}}</span>\n</section>\n",
                styles: [".terms-conditions{color:#36f;text-decoration:underline;font-size:inherit;font-style:inherit;font-weight:inherit;line-height:inherit;cursor:pointer}.terms-conditions:hover{color:#598bff}"]
            },] }
];
LoginPageComponent.ctorParameters = () => [
    { type: Router },
    { type: NbDialogService },
    { type: TranslateService },
    { type: AuthTokenService },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: ActivatedRoute }
];

class LogoutComponent {
    constructor(authTokenService) {
        this.authTokenService = authTokenService;
        this.authTokenService.logout();
    }
}
LogoutComponent.ctorParameters = () => [
    { type: AuthTokenService }
];
LogoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-logout',
                template: "<p class=\"sub-title\">{{ 'message.logout' | translate }}</p>\n<div class=\"spinner-area\" [nbSpinner]=\"true\" nbSpinnerSize=\"small\" nbSpinnerStatus=\"info\">",
                styles: [".nb-theme-default :host .sub-title{margin:1rem}.nb-theme-default :host .spinner-area{height:22px}.nb-theme-default :host ::ng-deep nb-spinner{background:0 0!important}.nb-theme-dark :host .sub-title{margin:1rem}.nb-theme-dark :host .spinner-area{height:22px}.nb-theme-dark :host ::ng-deep nb-spinner{background:0 0!important}.nb-theme-cosmic :host .sub-title{margin:1rem}.nb-theme-cosmic :host .spinner-area{height:22px}.nb-theme-cosmic :host ::ng-deep nb-spinner{background:0 0!important}.nb-theme-corporate :host .sub-title{margin:1rem}.nb-theme-corporate :host .spinner-area{height:22px}.nb-theme-corporate :host ::ng-deep nb-spinner{background:0 0!important}"]
            },] }
];
LogoutComponent.ctorParameters = () => [
    { type: AuthTokenService }
];

class AuthComponent {
    constructor(location) {
        this.location = location;
    }
    back() {
        this.location.back();
        return false;
    }
    ngOnDestroy() {
        this.alive = false;
    }
}
AuthComponent.ctorParameters = () => [
    { type: Location }
];
AuthComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-auth',
                template: "<nb-layout>\n    <nb-layout-column>\n        <nb-card>\n            <nb-card-header>\n                <nav class=\"navigation\">\n                    <a href=\"#\" (click)=\"back()\" class=\"link back-link\" aria-label=\"Back\" tabindex=\"-1\">\n                        <nb-icon icon=\"arrow-back\"></nb-icon>\n                    </a>\n                </nav>\n            </nb-card-header>\n            <nb-card-body>\n                <do-auth-block>\n                    <router-outlet></router-outlet>\n                </do-auth-block>\n            </nb-card-body>\n        </nb-card>\n    </nb-layout-column>\n</nb-layout>",
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host nb-card{margin:0;height:calc(100vh - 2 * 2.5rem)}:host .navigation .link{display:inline-block;text-decoration:none}:host .navigation .link nb-icon{font-size:2rem;vertical-align:middle}:host .links nb-icon{font-size:2.5rem}:host nb-card-body{display:flex;width:100%}:host do-auth-block{margin:auto}:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}@media (max-width:767.98px){:host nb-card{border-radius:0;height:100vh}:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}}"]
            },] }
];
AuthComponent.ctorParameters = () => [
    { type: Location }
];

class RegisterPageComponent {
    constructor(router, enc, toastr, dialogService, translate, httpBaseService, oauthResource, apiPath) {
        this.router = router;
        this.enc = enc;
        this.toastr = toastr;
        this.dialogService = dialogService;
        this.translate = translate;
        this.httpBaseService = httpBaseService;
        this.oauthResource = oauthResource;
        this.apiPath = apiPath;
        this.patternFullname = Pattern.FULLNAME;
        this.patternUsername = Pattern.USERNAME;
        this.patternEmail = Pattern.EMAIL;
        this.patternPassword = Pattern.PASSWORD_MEDIUM;
        this.minlengthUsername = 4;
        this.minlengthEmail = 5;
        this.form = new FormGroup({
            fullname: new FormControl(),
            username: new FormControl(),
            email: new FormControl(),
            password: new FormControl(),
            confirmPassword: new FormControl(),
            terms: new FormControl(),
            recaptcha: new FormControl(),
        });
        this.buttonRegister = false;
        this.progressBar = 25;
        this.isCheckUsername = true;
        this.isCheckEmail = true;
        this.destroy$ = new Subject();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    register() {
        if (!this.form.invalid) {
            document.querySelectorAll('.pace-done').forEach(pace => {
                pace.className = pace.className.replace('pace-done pace-done', 'pace-running');
                pace.className = pace.className.replace('pace-done', 'pace-running');
            });
            document.querySelectorAll('.pace-inactive').forEach(pace => {
                pace.className = pace.className.replace('pace-inactive pace-inactive', 'pace-active');
                pace.className = pace.className.replace('pace-inactive', 'pace-active');
            });
            const progressDOM = document.getElementsByClassName('pace-progress').item(0);
            if (this.progressBar < 35) {
                this.progressBar = 35;
                progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
            }
            this.responseError = null;
            const data = this.form.value;
            data['password'] = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['password'].value);
            data['confirmPassword'] = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['confirmPassword'].value);
            const httpHeaders = new HttpHeaders({
                'Authorization': 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                'Content-Type': 'application/json',
                'Accept-Language': this.translate.currentLang,
            });
            this.buttonRegister = true;
            this.httpBaseService.HTTP_BASE(this.apiPath['auth']['signup'], data, httpHeaders)
                .pipe(takeUntil(this.destroy$))
                .subscribe((response) => {
                if (response) {
                    this.toastr.showI18n(response.respStatusMessage[response.respStatusCode]);
                    this.progressBar = 90;
                    progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                    progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                    progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
                    this.progressBar = 0;
                    if (response.respStatusCode === ResponseCode.OK_REGISTERED) {
                        this.router.navigate(['/auth/login']);
                    }
                    else {
                        this.form.reset();
                        this.buttonRegister = false;
                    }
                }
                else {
                    this.form.reset();
                    this.buttonRegister = false;
                }
            }, (error) => {
                this.buttonRegister = false;
                this.progressBar = 85;
                progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
                document.querySelectorAll('.pace-running').forEach(pace => {
                    pace.className = pace.className.replace('pace-running', 'pace-done');
                });
                document.querySelectorAll('.pace-active').forEach(pace => {
                    pace.className = pace.className.replace('pace-active', 'pace-inactive');
                });
                this.progressBar = 0;
                if (!(error instanceof HttpErrorResponse)) {
                    if (error['respStatusCode']) {
                        switch (error['respStatusCode']) {
                            case ResponseCode.ERR_SCR0005.toString():
                                this.form.controls['password'].setErrors({
                                    'invalid': true,
                                });
                                break;
                            case ResponseCode.ERR_SCR0011.toString():
                                this.form.controls['confirmPassword'].setErrors({
                                    'equal': true,
                                });
                                break;
                            default:
                                break;
                        }
                        this.responseError = error['respStatusMessage'][error['respStatusCode']];
                    }
                }
                else {
                }
            });
        }
    }
    get hasErrorFullname() {
        if (this.form.controls['fullname'].errors && this.form.controls['fullname'].invalid && this.form.controls['fullname'].touched) {
            if (this.form.controls['fullname'].errors['required'])
                this.errorMsgFullname = 'error.fullname.required';
            else
                this.errorMsgFullname = 'error.fullname.invalid';
        }
        else {
            this.errorMsgFullname = null;
        }
        return (this.form.controls['fullname'] &&
            this.form.controls['fullname'].invalid &&
            this.form.controls['fullname'].touched);
    }
    get hasSuccessFullname() {
        return (this.form.controls['fullname'] &&
            this.form.controls['fullname'].valid &&
            this.form.controls['fullname'].touched);
    }
    get hasErrorUsername() {
        if (this.form.controls['username'].errors && this.form.controls['username'].invalid && this.form.controls['username'].touched) {
            if (this.form.controls['username'].errors['required'])
                this.errorMsgUsername = 'error.username.required';
            else if (this.form.controls['username'].errors['not-available']) {
                this.errorMsgUsername = 'error.username.not-available';
                this.paramMsgUsername = {
                    value: this.form.controls['username'].value,
                };
            }
            else if (this.form.controls['username'].errors['timeout'])
                this.errorMsgUsername = 'error.0';
            else if (this.form.controls['username'].errors['error'])
                this.errorMsgUsername = 'error.500';
            else
                this.errorMsgUsername = 'error.username.invalid';
        }
        else {
            if ((this.form.controls['username'].touched || this.form.controls['username'].dirty) && this.isCheckUsername) {
                this.isCheckUsername = false;
                this.form.controls['username'].setAsyncValidators([userValidator(this.oauthResource, this.httpBaseService, this.apiPath)]);
                this.form.controls['username'].updateValueAndValidity();
            }
            this.errorMsgUsername = null;
        }
        return (this.form.controls['username'] &&
            this.form.controls['username'].invalid &&
            this.form.controls['username'].touched);
    }
    get hasSuccessUsername() {
        return (this.form.controls['username'] &&
            this.form.controls['username'].valid &&
            this.form.controls['username'].touched);
    }
    get hasErrorEmail() {
        if (this.form.controls['email'].errors && this.form.controls['email'].invalid && this.form.controls['email'].touched) {
            if (this.form.controls['email'].errors['required'])
                this.errorMsgEmail = 'error.email.required';
            else if (this.form.controls['email'].errors['not-available']) {
                this.errorMsgEmail = 'error.email.not-available';
                this.paramMsgEmail = {
                    value: this.form.controls['email'].value,
                };
            }
            else if (this.form.controls['email'].errors['timeout'])
                this.errorMsgEmail = 'error.0';
            else if (this.form.controls['email'].errors['error'])
                this.errorMsgEmail = 'error.500';
            else
                this.errorMsgEmail = 'error.email.invalid';
        }
        else {
            if ((this.form.controls['email'].touched || this.form.controls['email'].dirty) && this.isCheckEmail) {
                this.isCheckEmail = false;
                this.form.controls['email'].setAsyncValidators([userValidator(this.oauthResource, this.httpBaseService, this.apiPath)]);
                this.form.controls['email'].updateValueAndValidity();
            }
            this.errorMsgEmail = null;
        }
        return (this.form.controls['email'] &&
            this.form.controls['email'].invalid &&
            this.form.controls['email'].touched);
    }
    get hasSuccessEmail() {
        return (this.form.controls['email'] &&
            this.form.controls['email'].valid &&
            this.form.controls['email'].touched);
    }
    get hasErrorPassword() {
        if (this.form.controls['password'].errors && this.form.controls['password'].invalid && this.form.controls['password'].touched) {
            this.errorMsgPassword = 'error.pattern.Password';
        }
        else {
            this.errorMsgPassword = null;
        }
        return (this.form.controls['password'] &&
            this.form.controls['password'].invalid &&
            this.form.controls['password'].touched);
    }
    get hasSuccessPassword() {
        return (this.form.controls['password'] &&
            this.form.controls['password'].valid &&
            this.form.controls['password'].touched);
    }
    get hasErrorConfirmPassword() {
        if (this.form.controls['confirmPassword'].errors &&
            this.form.controls['confirmPassword'].invalid &&
            this.form.controls['confirmPassword'].touched) {
            this.errorMsgConfirmPassword = 'error.equal.confirmPassword-register';
        }
        else {
            if (this.form.controls['password'].value !== this.form.controls['confirmPassword'].value) {
                this.errorMsgConfirmPassword = 'error.equal.confirmPassword-register';
                this.form.controls['confirmPassword'].setValidators([confirmPasswordValidator(this.form)]);
                this.form.controls['confirmPassword'].updateValueAndValidity();
            }
            else {
                this.errorMsgConfirmPassword = null;
            }
        }
        return (this.form.controls['confirmPassword'] &&
            this.form.controls['confirmPassword'].invalid &&
            this.form.controls['confirmPassword'].touched);
    }
    get hasSuccessConfirmPassword() {
        return (this.form.controls['confirmPassword'] &&
            this.form.controls['confirmPassword'].valid &&
            this.form.controls['confirmPassword'].touched);
    }
    onCheckedChange() {
        if (!this.form.controls['terms'].value) {
            this.form.controls['terms'].setValue(null);
        }
    }
    onClickTermsConditions() {
        const data = {
            'parameterCode': 'TERMS_CONDITIONS.DONGKAP'
        };
        const httpHeaders = new HttpHeaders({
            'Authorization': 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
            'Content-Type': 'application/json',
            'Accept-Language': this.translate.currentLang,
        });
        this.httpBaseService.HTTP_BASE(this.apiPath['openapi']['parameter'], data, httpHeaders)
            .pipe(takeUntil(this.destroy$))
            .subscribe((response) => {
            this.dialogService.open(TermsConditionsComponent, {
                context: {
                    content: response['parameterValue'],
                },
            })
                .onClose.subscribe((terms) => {
                if (terms) {
                    this.form.controls['terms'].setValue(true);
                }
            });
        });
    }
    onKeyDownUsername(event) {
        if (event.key) {
            if (!event.key.match(/[!@#$%^&*()?":{}|<>\[\];\\=~`]/g)) {
                if (([
                    'TAB',
                    'ESCAPE',
                    'ENTER',
                    'HOME',
                    'END',
                    'ARROWLEFT',
                    'ARROWRIGHT',
                    'ARROWUP',
                    'ARROWDOWN',
                    'PAGEUP',
                    'PAGEDOWN'
                ].indexOf(event.key.toUpperCase()) === -1) &&
                    !event.ctrlKey && !event.metaKey && !event.altKey)
                    this.isCheckUsername = true;
            }
        }
    }
    onKeyDownEmail(event) {
        if (event.key) {
            if (!event.key.match(/[!#$%^&*()?":{}|<>\[\];\\=~`]/g)) {
                if (([
                    'TAB',
                    'ESCAPE',
                    'ENTER',
                    'HOME',
                    'END',
                    'ARROWLEFT',
                    'ARROWRIGHT',
                    'ARROWUP',
                    'ARROWDOWN',
                    'PAGEUP',
                    'PAGEDOWN'
                ].indexOf(event.key.toUpperCase()) === -1) &&
                    !event.ctrlKey && !event.metaKey && !event.altKey)
                    this.isCheckEmail = true;
            }
        }
    }
}
RegisterPageComponent.ctorParameters = () => [
    { type: Router },
    { type: EncryptionService },
    { type: DoToastrService },
    { type: NbDialogService },
    { type: TranslateService },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] }
];
RegisterPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-register-page',
                template: "<h1 id=\"title\" class=\"title\">{{ 'Register' | translate }}</h1>\n\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.register' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"register()\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-name\">{{ 'Full name' | translate }}* :</label>\n    <input [formControlName]=\"'fullname'\"\n          [required]=\"true\"\n          minlength=\"4\"\n          maxlength=\"50\"\n          [pattern]=\"patternFullname\"\n          [ngClass]=\"{\n            'status-danger': hasErrorFullname,\n            'status-success': hasSuccessFullname\n          }\"\n          name=\"fullname\"\n          id=\"inputFullname\"\n          placeholder=\"{{ 'Full name' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"1\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorFullname\">\n      <span class=\"caption status-danger\">{{errorMsgFullname | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-username\">{{ 'Username' | translate }}* :</label>\n    <input [formControlName]=\"'username'\"\n          [required]=\"true\"\n          minlength=\"5\"\n          maxlength=\"20\"\n          [pattern]=\"patternUsername\"\n          [ngClass]=\"{\n            'status-danger': hasErrorUsername,\n            'status-success': hasSuccessUsername\n          }\"\n          name=\"username\"\n          id=\"inputUsername\"\n          (keydown)=\"onKeyDownUsername($event)\"\n          placeholder=\"{{ 'Username' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"2\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorUsername\">\n      <span class=\"caption status-danger\">{{errorMsgUsername | translate:paramMsgUsername}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-email\">{{ 'Email' | translate }}* :</label>\n    <input [formControlName]=\"'email'\"\n          [required]=\"true\"\n          minlength=\"5\"\n          maxlength=\"50\"\n          [pattern]=\"patternEmail\"\n          [ngClass]=\"{\n            'status-danger': hasErrorEmail,\n            'status-success': hasSuccessEmail\n          }\"\n          name=\"email\"\n          id=\"inputEmail\"\n          (keydown)=\"onKeyDownEmail($event)\"\n          placeholder=\"{{ 'Email' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"3\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorEmail\">\n      <span class=\"caption status-danger\">{{errorMsgEmail | translate:paramMsgEmail}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-password\">{{ 'Password' | translate }}* :</label>\n    <input [formControlName]=\"'password'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [pattern]=\"patternPassword\"\n          [ngClass]=\"{\n            'status-danger': hasErrorPassword,\n            'status-success': hasSuccessPassword\n          }\"\n          name=\"password\"\n          type=\"password\"\n          id=\"inputPassword\"\n          placeholder=\"{{ 'Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"4\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-confirmpassword\">{{ 'Confirm Password' | translate }}* :</label>\n    <input [formControlName]=\"'confirmPassword'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [ngClass]=\"{\n            'status-danger': hasErrorConfirmPassword,\n            'status-success': hasSuccessConfirmPassword\n          }\"\n          name=\"confirmPassword\"\n          type=\"password\"\n          id=\"inputConfirmPassword\"\n          placeholder=\"{{ 'Confirm Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"5\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorConfirmPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgConfirmPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group accept-group\">\n    <div class=\"terms-row row\">\n      <nb-checkbox\n        name=\"terms\"\n        [formControlName]=\"'terms'\"\n        [required]=\"true\"\n        (change)=\"onCheckedChange()\">\n        {{ 'message.terms-conditions-label' | translate}}\n      </nb-checkbox>\n      <span class=\"terms-conditions\" (click)=\"onClickTermsConditions()\" tabindex=\"-1\"><strong>{{ 'message.terms-conditions' | translate}}</strong></span>\n    </div>\n  </div>\n\n  <div class=\"form-control-group\" style=\"transform:scale(0.7);transform-origin:0;\">\n    <re-captcha\n      [formControlName]=\"'recaptcha'\"\n      required>\n    </re-captcha>\n  </div>\n\n  <button [disabled]=\"!form.valid || buttonRegister\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"!form.valid || buttonRegister\">\n    {{ 'Register' | translate }}\n  </button>\n</form>\n\n<section class=\"another-action\" aria-label=\"Sign in\">\n  {{ 'message.register-footer' | translate}} <a class=\"text-link\" routerLink=\"/auth/login\" tabindex=\"-1\">{{ 'Login' | translate}}</a>\n</section>\n",
                styles: [".terms-row{margin-left:0}.terms-conditions{padding:.1rem 0 0 .25rem;color:#36f;text-decoration:underline;font-size:inherit;font-style:inherit;font-weight:inherit;line-height:inherit;cursor:pointer}.terms-conditions:hover{color:#598bff}"]
            },] }
];
RegisterPageComponent.ctorParameters = () => [
    { type: Router },
    { type: EncryptionService },
    { type: DoToastrService },
    { type: NbDialogService },
    { type: TranslateService },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] }
];
function confirmPasswordValidator(form) {
    return (control) => {
        if (form.controls) {
            if (form.controls['password'].value !== form.controls['confirmPassword'].value)
                return { equal: true };
        }
        return null;
    };
}
function userValidator(oauthResource, httpBaseService, apiPath) {
    return (control) => {
        if (!control.valueChanges) {
            return of(null);
        }
        else {
            return control.valueChanges.pipe(debounceTime(500), distinctUntilChanged(), switchMap(() => {
                const validatorSubject$ = new Subject();
                const httpHeaders = new HttpHeaders({
                    'Authorization': 'Basic ' + btoa(oauthResource['client_id'] + ':' + oauthResource['client_secret']),
                    'Content-Type': 'application/json',
                });
                const data = {
                    'user': control.value,
                };
                let dataValidator;
                if (control.value) {
                    httpBaseService.HTTP_BASE(apiPath['auth']['check-user'], data, httpHeaders).subscribe((response) => {
                        if (response['respStatusCode'] === ResponseCode.OK_SCR012.toString()) {
                            validatorSubject$.next(null);
                        }
                        else {
                            dataValidator = {
                                error: true,
                            };
                            validatorSubject$.next(dataValidator);
                        }
                    }, (error) => {
                        if (!(error instanceof HttpErrorResponse)) {
                            dataValidator = {
                                error: true,
                            };
                        }
                        else {
                            if (error.status === 302) {
                                dataValidator = {
                                    'not-available': true,
                                };
                            }
                            else {
                                dataValidator = {
                                    timeout: true,
                                };
                            }
                        }
                        validatorSubject$.next(dataValidator);
                    });
                }
                return validatorSubject$.asObservable();
            })).pipe(first());
        }
    };
}

class RequestForgotPageComponent {
    constructor(router, toastr, translate, httpBaseService, oauthResource, apiPath) {
        this.router = router;
        this.toastr = toastr;
        this.translate = translate;
        this.httpBaseService = httpBaseService;
        this.oauthResource = oauthResource;
        this.apiPath = apiPath;
        this.buttonForgotPassword = false;
        this.progressBar = 25;
        this.patternEmail = Pattern.EMAIL;
        this.form = new FormGroup({
            email: new FormControl(),
        });
        this.destroy$ = new Subject();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    forgotPassword() {
        if (!this.form.invalid) {
            document.querySelectorAll('.pace-done').forEach(pace => {
                pace.className = pace.className.replace('pace-done pace-done', 'pace-running');
                pace.className = pace.className.replace('pace-done', 'pace-running');
            });
            document.querySelectorAll('.pace-inactive').forEach(pace => {
                pace.className = pace.className.replace('pace-inactive pace-inactive', 'pace-active');
                pace.className = pace.className.replace('pace-inactive', 'pace-active');
            });
            const progressDOM = document.getElementsByClassName('pace-progress').item(0);
            if (this.progressBar < 35) {
                this.progressBar = 35;
                progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
            }
            this.responseError = null;
            const urlForgotPassword = `${document.getElementsByTagName('base')[0].href}auth/forgot-password`;
            const data = {
                'email': this.form.controls['email'].value,
                'urlForgotPassword': urlForgotPassword,
            };
            const httpHeaders = new HttpHeaders({
                'Authorization': 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                'Content-Type': 'application/json',
                'Accept-Language': this.translate.currentLang,
            });
            this.buttonForgotPassword = true;
            this.httpBaseService.HTTP_BASE(this.apiPath['auth']['request-forgot-password'], data, httpHeaders)
                .pipe(takeUntil(this.destroy$))
                .subscribe((response) => {
                if (response) {
                    this.toastr.showI18n(response.respStatusMessage[response.respStatusCode]);
                    this.progressBar = 90;
                    progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                    progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                    progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
                    this.progressBar = 0;
                    if (response.respStatusCode === ResponseCode.OK_REQUEST_FORGOT_PASSWORD) {
                        this.router.navigate(['/auth/login']);
                    }
                    else {
                        this.form.reset();
                        this.buttonForgotPassword = false;
                    }
                }
                else {
                    this.form.reset();
                    this.buttonForgotPassword = false;
                }
            }, (error) => {
                this.buttonForgotPassword = false;
                this.progressBar = 85;
                progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
                document.querySelectorAll('.pace-running').forEach(pace => {
                    pace.className = pace.className.replace('pace-running', 'pace-done');
                });
                document.querySelectorAll('.pace-active').forEach(pace => {
                    pace.className = pace.className.replace('pace-active', 'pace-inactive');
                });
                this.progressBar = 0;
                if (!(error instanceof HttpErrorResponse)) {
                    if (error['respStatusCode']) {
                        this.responseError = error['respStatusMessage'][error['respStatusCode']];
                    }
                }
                else {
                }
            });
        }
    }
    get hasErrorEmail() {
        return (this.form.controls['email'] &&
            this.form.controls['email'].invalid &&
            this.form.controls['email'].touched);
    }
    get hasSuccessEmail() {
        return (this.form.controls['email'] &&
            this.form.controls['email'].valid &&
            this.form.controls['email'].touched);
    }
}
RequestForgotPageComponent.ctorParameters = () => [
    { type: Router },
    { type: DoToastrService },
    { type: TranslateService },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] }
];
RequestForgotPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-request-forgot-page',
                template: "<h1 id=\"title\" class=\"title\">{{ 'Forgot Password' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.forgot-password' | translate }}</p>\n\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.forgot' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"forgotPassword()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-name\">{{ 'message.email-forgot-password' | translate }} :</label>\n    <input [formControlName]=\"'email'\"\n          [required]=\"true\"\n          minlength=\"4\"\n          maxlength=\"50\"\n          [pattern]=\"patternEmail\"\n          [ngClass]=\"{\n            'status-danger': hasErrorEmail,\n            'status-success': hasSuccessEmail\n          }\"\n          name=\"email\"\n          id=\"inputEmail\"\n          placeholder=\"{{ 'Email' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"1\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorEmail\">\n      <span class=\"caption status-danger\">{{'error.pattern.email' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"form.invalid || buttonForgotPassword\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"form.invalid || buttonForgotPassword\">\n    {{ 'Send' | translate }}\n  </button>\n</form>\n\n<section class=\"sign-in-or-up\" aria-label=\"Sign in or sign up\">\n  <p><a class=\"text-link\" routerLink=\"/auth/login\">{{ 'message.forgot-password-link' | translate}}</a></p>\n  <p><a routerLink=\"/auth/register\" class=\"text-link\">{{ 'Register' | translate}}</a></p>\n</section>\n",
                styles: [""]
            },] }
];
RequestForgotPageComponent.ctorParameters = () => [
    { type: Router },
    { type: DoToastrService },
    { type: TranslateService },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] }
];

class ForgotPageComponent {
    constructor(router, route, toastr, translate, enc, httpBaseService, oauthResource, apiPath) {
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.translate = translate;
        this.enc = enc;
        this.httpBaseService = httpBaseService;
        this.oauthResource = oauthResource;
        this.apiPath = apiPath;
        this.buttonForgotPassword = false;
        this.progressBar = 25;
        this.patternPassword = Pattern.PASSWORD_MEDIUM;
        this.form = new FormGroup({
            newPassword: new FormControl(),
            confirmPassword: new FormControl(),
        });
        this.destroy$ = new Subject();
        if (this.route.snapshot.params['id'] !== null && this.route.snapshot.params['code'] !== null) {
            this.verificationId = this.route.snapshot.params['id'];
            this.verificationCode = this.route.snapshot.params['code'];
        }
        else {
            this.router.navigate(['/auth/login']);
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    forgotPassword() {
        if (!this.form.invalid) {
            document.querySelectorAll('.pace-done').forEach(pace => {
                pace.className = pace.className.replace('pace-done pace-done', 'pace-running');
                pace.className = pace.className.replace('pace-done', 'pace-running');
            });
            document.querySelectorAll('.pace-inactive').forEach(pace => {
                pace.className = pace.className.replace('pace-inactive pace-inactive', 'pace-active');
                pace.className = pace.className.replace('pace-inactive', 'pace-active');
            });
            const progressDOM = document.getElementsByClassName('pace-progress').item(0);
            if (this.progressBar < 35) {
                this.progressBar = 35;
                progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
            }
            this.responseError = null;
            const newPassword = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['newPassword'].value);
            const confirmPassword = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['confirmPassword'].value);
            const data = {
                'verificationId': this.verificationId,
                'verificationCode': this.verificationCode,
                'newPassword': newPassword,
                'confirmPassword': confirmPassword,
            };
            const httpHeaders = new HttpHeaders({
                'Authorization': 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                'Content-Type': 'application/json',
                'Accept-Language': this.translate.currentLang,
            });
            this.buttonForgotPassword = true;
            this.httpBaseService.HTTP_BASE(this.apiPath['auth']['forgot-password'], data, httpHeaders)
                .pipe(takeUntil(this.destroy$))
                .subscribe((response) => {
                if (response) {
                    this.toastr.showI18n(response.respStatusMessage[response.respStatusCode]);
                    this.progressBar = 90;
                    progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                    progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                    progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
                    this.progressBar = 0;
                    if (response.respStatusCode === ResponseCode.OK_FORGOT_PASSWORD) {
                        this.router.navigate(['/auth/login']);
                    }
                    else {
                        this.form.reset();
                        this.buttonForgotPassword = false;
                    }
                }
                else {
                    this.form.reset();
                    this.buttonForgotPassword = false;
                }
            }, (error) => {
                this.buttonForgotPassword = false;
                this.progressBar = 85;
                progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
                document.querySelectorAll('.pace-running').forEach(pace => {
                    pace.className = pace.className.replace('pace-running', 'pace-done');
                });
                document.querySelectorAll('.pace-active').forEach(pace => {
                    pace.className = pace.className.replace('pace-active', 'pace-inactive');
                });
                this.progressBar = 0;
                if (!(error instanceof HttpErrorResponse)) {
                    if (error['respStatusCode']) {
                        this.responseError = error['respStatusMessage'][error['respStatusCode']];
                    }
                }
            });
        }
    }
    get hasErrorNewPassword() {
        if (this.form.controls['newPassword'].errors &&
            this.form.controls['newPassword'].invalid &&
            this.form.controls['newPassword'].touched) {
            this.errorMsgNewPassword = 'error.pattern.Password';
        }
        else {
            this.errorMsgNewPassword = null;
        }
        return (this.form.controls['newPassword'] &&
            this.form.controls['newPassword'].invalid &&
            this.form.controls['newPassword'].touched);
    }
    get hasSuccessNewPassword() {
        return (this.form.controls['newPassword'] &&
            this.form.controls['newPassword'].valid &&
            this.form.controls['newPassword'].touched);
    }
    get hasErrorConfirmPassword() {
        if (this.form.controls['confirmPassword'].errors &&
            this.form.controls['confirmPassword'].invalid &&
            this.form.controls['confirmPassword'].touched) {
            this.errorMsgConfirmPassword = 'error.equal.confirmPassword';
        }
        else {
            if (this.form.controls['newPassword'].value !== this.form.controls['confirmPassword'].value) {
                this.errorMsgConfirmPassword = 'error.equal.confirmPassword';
                this.form.controls['confirmPassword'].setValidators([confirmPasswordValidator$1(this.form)]);
                this.form.controls['confirmPassword'].updateValueAndValidity();
            }
            else {
                this.errorMsgConfirmPassword = null;
            }
        }
        return (this.form.controls['confirmPassword'] &&
            this.form.controls['confirmPassword'].invalid &&
            this.form.controls['confirmPassword'].touched);
    }
    get hasSuccessConfirmPassword() {
        return (this.form.controls['confirmPassword'] &&
            this.form.controls['confirmPassword'].valid &&
            this.form.controls['confirmPassword'].touched);
    }
}
ForgotPageComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: DoToastrService },
    { type: TranslateService },
    { type: EncryptionService },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] }
];
ForgotPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-forgot-page',
                template: "<h1 id=\"title\" class=\"title\">{{ 'Reset Password' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.reset-password' | translate }}</p>\n\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.reset-password' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"forgotPassword()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-newpassword\">{{ 'New Password' | translate }}* :</label>\n    <input [formControlName]=\"'newPassword'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [pattern]=\"patternPassword\"\n          [ngClass]=\"{\n            'status-danger': hasErrorNewPassword,\n            'status-success': hasSuccessNewPassword\n          }\"\n          name=\"newPassword\"\n          type=\"password\"\n          id=\"inputNewPassword\"\n          placeholder=\"{{ 'New Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"4\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorNewPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgNewPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-confirmpassword\">{{ 'Confirm Password' | translate }}* :</label>\n    <input [formControlName]=\"'confirmPassword'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [ngClass]=\"{\n            'status-danger': hasErrorConfirmPassword,\n            'status-success': hasSuccessConfirmPassword\n          }\"\n          name=\"confirmPassword\"\n          type=\"password\"\n          id=\"inputConfirmPassword\"\n          placeholder=\"{{ 'Confirm Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"5\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorConfirmPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgConfirmPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"form.invalid || buttonForgotPassword\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"form.invalid || buttonForgotPassword\">\n    {{ 'Reset Password' | translate }}\n  </button>\n</form>\n\n<section class=\"another-action\" aria-label=\"Sign in\">\n  {{ 'message.reset-password-footer' | translate}} <a class=\"text-link\" routerLink=\"/auth/login\" tabindex=\"-1\">{{ 'Login' | translate}}</a>\n</section>\n",
                styles: [""]
            },] }
];
ForgotPageComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: DoToastrService },
    { type: TranslateService },
    { type: EncryptionService },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] }
];
function confirmPasswordValidator$1(form) {
    return (control) => {
        if (form.controls) {
            if (form.controls['newPassword'].value !== form.controls['confirmPassword'].value)
                return { equal: true };
        }
        return null;
    };
}

;
class OAuth2CallbackComponent {
    constructor(router, route, httpBaseService, oauthResource, apiPath, authIndexedDB, profileIndexedDB, settingsIndexedDB, idle) {
        this.router = router;
        this.httpBaseService = httpBaseService;
        this.oauthResource = oauthResource;
        this.apiPath = apiPath;
        this.authIndexedDB = authIndexedDB;
        this.profileIndexedDB = profileIndexedDB;
        this.settingsIndexedDB = settingsIndexedDB;
        this.idle = idle;
        this.destroy$ = new Subject();
        if (route.snapshot.queryParams['access_token']) {
            this.extractToken(route.snapshot.queryParams['access_token']);
        }
        else if (route.snapshot.queryParams['error']) {
            this.router.navigate(['/auth'], { queryParams: { error: route.snapshot.queryParams['error'] } });
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.next();
        this.destroy$.complete();
    }
    extractToken(accessToken) {
        return this.httpBaseService.
            HTTP_BASE(this.apiPath['auth']['extract-token'], this.getAuthBody(accessToken).toString(), this.getAuthHeader())
            .pipe(takeUntil(this.destroy$))
            .toPromise()
            .then((response) => {
            this.idle.setIdle(+response['expires_in']);
            this.idle.watch();
            /* console.log('[DONGKAP] Session Idle Start'); */
            /* console.log('[DONGKAP] Session Timeout in ' + response['expires_in'] + ' seconds'); */
            this.authIndexedDB.loginStorage(response);
            this.profileIndexedDB.loginStorage(response);
            this.settingsIndexedDB.loginStorage(response);
            this.router.navigate(['/app/home']);
        })
            .catch((error) => {
            this.router.navigate(['/auth']);
        });
    }
    getAuthBody(accessToken) {
        const body = new URLSearchParams();
        body.append('access_token', accessToken);
        return body;
    }
    getAuthHeader() {
        return new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' +
                btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
            'Accept': 'application/json',
        });
    }
}
OAuth2CallbackComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
    { type: AuthIndexedDBService },
    { type: ProfileIndexedDBService },
    { type: SettingsIndexedDBService },
    { type: Idle }
];
OAuth2CallbackComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-oauth2-callback',
                template: "<p class=\"sub-title\">{{ 'message.callback' | translate }}</p>\n<div class=\"spinner-area\" [nbSpinner]=\"true\" nbSpinnerSize=\"small\" nbSpinnerStatus=\"info\">",
                styles: [".nb-theme-default :host .sub-title{margin:1rem}.nb-theme-default :host .spinner-area{height:22px}.nb-theme-default :host ::ng-deep nb-spinner{background:0 0!important}.nb-theme-dark :host .sub-title{margin:1rem}.nb-theme-dark :host .spinner-area{height:22px}.nb-theme-dark :host ::ng-deep nb-spinner{background:0 0!important}.nb-theme-cosmic :host .sub-title{margin:1rem}.nb-theme-cosmic :host .spinner-area{height:22px}.nb-theme-cosmic :host ::ng-deep nb-spinner{background:0 0!important}.nb-theme-corporate :host .sub-title{margin:1rem}.nb-theme-corporate :host .spinner-area{height:22px}.nb-theme-corporate :host ::ng-deep nb-spinner{background:0 0!important}"]
            },] }
];
OAuth2CallbackComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
    { type: AuthIndexedDBService },
    { type: ProfileIndexedDBService },
    { type: SettingsIndexedDBService },
    { type: Idle }
];

const routes = [{
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '',
                component: LoginPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'login',
                component: LoginPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'register',
                component: RegisterPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'forgot-password',
                component: RequestForgotPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'forgot-password/:id/:code',
                component: ForgotPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'callback',
                component: OAuth2CallbackComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'logout',
                component: LogoutComponent,
                canActivate: [AuthGuardService],
            },
        ],
    }];
class DoAuthRoutingModule {
}
DoAuthRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];

class AuthBlockComponent {
}
AuthBlockComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-auth-block',
                template: `
    <ng-content></ng-content>
  `,
                styles: [":host{display:block;width:100%;max-width:35rem}:host ::ng-deep form{width:100%}:host ::ng-deep .label{display:block;margin-bottom:.5rem}:host ::ng-deep .forgot-password{text-decoration:none;margin-bottom:.5rem}:host ::ng-deep .caption{margin-top:.5rem}:host ::ng-deep .alert{text-align:center}:host ::ng-deep .title{margin-top:0;margin-bottom:.75rem;text-align:center}:host ::ng-deep .sub-title{margin-bottom:2rem;text-align:center}:host ::ng-deep .form-control-group{margin-bottom:2rem}:host ::ng-deep .form-control-group.accept-group{display:flex;justify-content:space-between;margin:2rem 0}:host ::ng-deep .label-with-link{display:flex;justify-content:space-between}:host ::ng-deep .links{text-align:center;margin-top:1.75rem}:host ::ng-deep .links .socials{margin-top:1.5rem}:host ::ng-deep .links .socials a{margin:0 1rem;text-decoration:none;vertical-align:middle}:host ::ng-deep .links .socials a.with-icon{font-size:2rem}:host ::ng-deep .another-action{margin-top:2rem;text-align:center}:host ::ng-deep .sign-in-or-up{margin-top:2rem;display:flex;justify-content:space-between}:host ::ng-deep nb-alert .alert-message,:host ::ng-deep nb-alert .alert-title{margin:0 0 .5rem}:host ::ng-deep nb-alert .alert-message-list{list-style-type:none;padding:0;margin:0}"]
            },] }
];

class DoLayoutAuthModule {
}
DoLayoutAuthModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AuthComponent,
                    AuthBlockComponent,
                ],
                imports: [
                    NbLayoutModule,
                    NbCardModule,
                    NbIconModule,
                    CommonModule,
                    HttpClientModule,
                    RouterModule,
                    DoThemeModule,
                ],
                exports: [
                    AuthComponent,
                    AuthBlockComponent,
                ],
            },] }
];

class AuthSignatureService {
    constructor(translate, enc, oauthResource, authStorage) {
        this.translate = translate;
        this.enc = enc;
        this.oauthResource = oauthResource;
        this.authStorage = authStorage;
    }
    signHeaders(req) {
        return combineLatest([
            this.key(),
            this.signature(this.getPath(req.url)),
        ]).pipe(take(1), switchMap((value) => {
            if (signatureHeader.signature) {
                let httpHeaders = req.headers ? req.headers : new HttpHeaders();
                httpHeaders.keys().forEach((key) => {
                    if (key === signatureHeader.key)
                        httpHeaders = httpHeaders.delete(signatureHeader.key);
                    if (key === signatureHeader.timestamp)
                        httpHeaders = httpHeaders.delete(signatureHeader.timestamp);
                    if (key === signatureHeader.signature)
                        httpHeaders = httpHeaders.delete(signatureHeader.signature);
                });
                httpHeaders = httpHeaders.set(signatureHeader.key, value[0]);
                httpHeaders = httpHeaders.set(signatureHeader.timestamp, this.timestamp());
                httpHeaders = httpHeaders.set(signatureHeader.signature, value[1]);
                return of(req.clone({ headers: httpHeaders }));
            }
            return of(req);
        }));
    }
    key() {
        return this.authStorage.getOfEnc(oauthInfo.public_key);
    }
    timestamp() {
        return Math.floor(new Date().getTime() / 1000).toString();
    }
    date() {
        return new DatePipe(this.translate.currentLang).transform(new Date(), DateFormat.DATE);
    }
    signature(url) {
        return combineLatest([
            this.key(),
            this.authStorage.getOfEnc(oauthInfo.access_token),
        ]).pipe(take(1), switchMap((value) => {
            const key = value[0] + ':' +
                this.timestamp() + ':' +
                // this.date() + ':' +
                url + ':' +
                value[1];
            return of(this.enc.getHmacSha256(this.oauthResource['private_key'], key));
        }));
    }
    getPath(url) {
        return '/' + url
            .replace(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*(:[0-9]{1,5})?(\/).*?/g, '');
    }
}
AuthSignatureService.ctorParameters = () => [
    { type: TranslateService },
    { type: EncryptionService },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: AuthIndexedDBService }
];
AuthSignatureService.decorators = [
    { type: Injectable }
];
AuthSignatureService.ctorParameters = () => [
    { type: TranslateService },
    { type: EncryptionService },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: AuthIndexedDBService }
];

class HttpInterceptorTokenService {
    constructor(authToken) {
        this.authToken = authToken;
        this.destroy$ = new Subject();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    intercept(req, next) {
        if (req.headers) {
            if (req.headers.has(signatureHeader.mark)) {
                return this.authToken.oauthHeaders(req).pipe(switchMap((reqAuth) => {
                    return next.handle(reqAuth);
                }));
            }
        }
        return next.handle(req).pipe(takeUntil(this.destroy$));
    }
}
HttpInterceptorTokenService.ctorParameters = () => [
    { type: AuthTokenService }
];
HttpInterceptorTokenService.decorators = [
    { type: Injectable }
];
HttpInterceptorTokenService.ctorParameters = () => [
    { type: AuthTokenService }
];

class HttpInterceptorSignatureService {
    constructor(authSignature, oauthResource) {
        this.authSignature = authSignature;
        this.oauthResource = oauthResource;
        this.destroy$ = new Subject();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    intercept(req, next) {
        if (req.headers) {
            if (req.headers.has(signatureHeader.mark) && this.oauthResource.signature) {
                return this.authSignature.signHeaders(req).pipe(switchMap((value) => {
                    return next.handle(value);
                }));
            }
        }
        return next.handle(req).pipe(takeUntil(this.destroy$));
    }
}
HttpInterceptorSignatureService.ctorParameters = () => [
    { type: AuthSignatureService },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] }
];
HttpInterceptorSignatureService.decorators = [
    { type: Injectable }
];
HttpInterceptorSignatureService.ctorParameters = () => [
    { type: AuthSignatureService },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] }
];

class AuthLanguageService {
    constructor(locale, settingsIndexedDB) {
        this.locale = locale;
        this.settingsIndexedDB = settingsIndexedDB;
    }
    getLocale(req) {
        return from(this.settingsIndexedDB.get('locale')).pipe(take(1), switchMap((value) => {
            let httpHeaders = req.headers ? req.headers : new HttpHeaders();
            const localeCode = value ?
                (value.match(new RegExp(Pattern.LOCALE, 'g')) ?
                    value :
                    this.locale) : this.locale;
            httpHeaders = httpHeaders.append('Accept-Language', localeCode);
            return of(req.clone({ headers: httpHeaders }));
        }));
    }
}
AuthLanguageService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: SettingsIndexedDBService }
];
AuthLanguageService.decorators = [
    { type: Injectable }
];
AuthLanguageService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: SettingsIndexedDBService }
];

class HttpInterceptorLangService {
    constructor(authLanguage) {
        this.authLanguage = authLanguage;
        this.destroy$ = new Subject();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    intercept(req, next) {
        if (req.headers) {
            if (req.headers.has(signatureHeader.mark)) {
                return this.authLanguage.getLocale(req).pipe(switchMap((value) => {
                    return next.handle(value);
                }));
            }
        }
        return next.handle(req).pipe(takeUntil(this.destroy$));
    }
}
HttpInterceptorLangService.ctorParameters = () => [
    { type: AuthLanguageService }
];
HttpInterceptorLangService.decorators = [
    { type: Injectable }
];
HttpInterceptorLangService.ctorParameters = () => [
    { type: AuthLanguageService }
];

class HttpErrorHandler {
    constructor(translate, authToken, authStorage, authSignature) {
        this.translate = translate;
        this.authToken = authToken;
        this.authStorage = authStorage;
        this.authSignature = authSignature;
        this.isRefreshingToken = false;
        this.refreshTokenSubject = new BehaviorSubject(null);
    }
    errorHandler(error, req, next) {
        let err = new HttpErrorResponse({
            error: error.error,
            headers: error.headers,
            status: error.status,
            statusText: error.statusText,
            url: error.url,
        });
        if (error.error instanceof ArrayBuffer) {
            const decodedString = String.fromCharCode.apply(null, new Uint8Array(error.error));
            err = new HttpErrorResponse({
                error: JSON.parse(decodedString),
                headers: error.headers,
                status: error.status,
                statusText: error.statusText,
                url: error.url,
            });
        }
        switch (err.status) {
            case 200:
            case 201:
            case 304:
                return EMPTY;
            case 400:
                return this.error400(err);
            case 401:
                return this.error401(err, req, next);
            case 404:
            case 403:
            case 500:
            case 504:
            case 0:
                return throwError(this.errorDefault(err));
            default:
                break;
        }
        return throwError(err);
    }
    errorDefault(error) {
        let err = {
            respStatusCode: error.status,
            respStatusMessage: {},
        };
        err.respStatusMessage[err.respStatusCode] = error.statusText;
        let msgKey = 'error.' + err.respStatusCode;
        if (error.error) {
            if (error.error['respStatusCode']) {
                err = error.error;
                msgKey = err.respStatusMessage[err.respStatusCode];
            }
        }
        this.translate.get(msgKey).subscribe((result) => {
            err.respStatusMessage[err.respStatusCode] = result;
        });
        return err;
    }
    error400(error) {
        if (error.error['respStatusCode']) {
            if (error.error['respStatusCode'] === 'invalid_grant') {
                switch (error.error['respStatusMessage']['invalid_grant']) {
                    case 'Bad credentials':
                    case 'User account is locked':
                    case 'User is disabled':
                    case 'User account has expired':
                    case 'User credentials have expired':
                        return throwError(this.errorDefault(error));
                    default:
                        this.authToken.logout();
                        return throwError(this.errorDefault(error));
                }
            }
            else {
                return throwError(this.errorDefault(error));
            }
        }
        return throwError(error);
    }
    error401(error, request, next) {
        if (error.error) {
            if (error.error['respStatusCode'] === 'invalid_token') {
                if (!this.isRefreshingToken) {
                    this.isRefreshingToken = true;
                    this.refreshTokenSubject.next(null);
                    return this.authToken.refresh().pipe(switchMap((response) => {
                        this.isRefreshingToken = false;
                        this.refreshTokenSubject.next(response);
                        return this.authToken.oauthHeaders(request).pipe(switchMap((req) => {
                            request = req;
                            return this.authSignature.signHeaders(request).pipe(switchMap((valReq) => {
                                return next.handle(valReq);
                            }));
                        }));
                    }), catchError((err) => {
                        return this.errorHandler(err, request, next);
                    }));
                }
                else {
                    const msg = error.error['respStatusMessage']['invalid_token'];
                    if (msg.includes('expired')) {
                        this.authToken.logout();
                    }
                    else {
                        return this.refreshTokenSubject.pipe(filter(response => response != null), take(1), switchMap(() => {
                            return this.authToken.oauthHeaders(request).pipe(switchMap((req) => {
                                request = req;
                                return this.authSignature.signHeaders(request).pipe(switchMap((valReq) => {
                                    return next.handle(valReq);
                                }));
                            }));
                        }));
                    }
                }
            }
        }
        return throwError(error);
    }
}

class HttpInterceptorErrorService extends HttpErrorHandler {
    constructor(translate, authToken, authStorage, authSignature) {
        super(translate, authToken, authStorage, authSignature);
        this.translate = translate;
        this.authToken = authToken;
        this.authStorage = authStorage;
        this.authSignature = authSignature;
        this.destroy$ = new Subject();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    intercept(req, next) {
        return next.handle(req).pipe(catchError(error => {
            if (error instanceof HttpErrorResponse) {
                return this.errorHandler(error, req, next);
            }
            else {
                return throwError(error);
            }
        })).pipe(takeUntil(this.destroy$));
    }
}
HttpInterceptorErrorService.ctorParameters = () => [
    { type: TranslateService },
    { type: AuthTokenService },
    { type: AuthIndexedDBService },
    { type: AuthSignatureService }
];
HttpInterceptorErrorService.decorators = [
    { type: Injectable }
];
HttpInterceptorErrorService.ctorParameters = () => [
    { type: TranslateService },
    { type: AuthTokenService },
    { type: AuthIndexedDBService },
    { type: AuthSignatureService }
];

class AuthUserService extends UserInfo {
    constructor(profileIndexedDB, authIndexedDB, apiPath, httpBaseService) {
        super();
        this.profileIndexedDB = profileIndexedDB;
        this.authIndexedDB = authIndexedDB;
        this.apiPath = apiPath;
        this.httpBaseService = httpBaseService;
        this.loaderUserSubject$ = new Subject();
    }
    loadPhotoUser() {
        Promise.all([
            this.profileIndexedDB.get('image-b64'),
            this.profileIndexedDB.get('image'),
            this.profileIndexedDB.get('name'),
            this.authIndexedDB.getEnc('provider'),
        ]).then((value) => {
            if (!value[0]) {
                if (value[3] === 'local') {
                    if (value[1] && value[2]) {
                        this.getImage(value[1], value[2]);
                    }
                    else {
                        this.httpBaseService.HTTP_AUTH(this.apiPath['profile']['get-profile'])
                            .subscribe((response) => {
                            Promise.all([
                                this.profileIndexedDB.put('name', response['name']),
                                this.profileIndexedDB.put('email', response['email']),
                                this.profileIndexedDB.put('image', response['image']),
                            ]).then(() => {
                                this.getImage(response['image'], response['name']);
                            });
                        });
                    }
                }
                else {
                    const user = {
                        name: value[2],
                        picture: value[1],
                    };
                    this.loaderUserSubject$.next(user);
                }
            }
            else {
                Promise.all([
                    this.profileIndexedDB.get('name'),
                    this.profileIndexedDB.get('image-b64'),
                ]).then((profile) => {
                    const user = {
                        name: profile[0],
                        picture: profile[1],
                    };
                    this.loaderUserSubject$.next(user);
                });
            }
        });
    }
    updatePhotoUser(file, checksum) {
        if (file && checksum) {
            let picture;
            const imageBlob = new Blob([file], {
                type: 'image/png',
            });
            this.profileIndexedDB.put(oauthInfo.image, checksum).then();
            this.profileIndexedDB.put('image-blob', imageBlob).then();
            this.profileIndexedDB.get('name').then((name) => {
                const reader = new FileReader();
                reader.readAsDataURL(imageBlob);
                reader.onloadend = () => {
                    picture = reader.result.toString();
                    const user = {
                        'name': name,
                        'picture': picture,
                    };
                    this.profileIndexedDB.put('image-b64', picture).then();
                    this.loaderUserSubject$.next(user);
                };
            });
        }
        else {
            this.loaderUserSubject$.next(null);
        }
        return this.loaderUserSubject$.asObservable();
    }
    updateNameUser(name) {
        this.profileIndexedDB.put('name', name).then();
        Promise.all([
            this.profileIndexedDB.get('image-b64'),
            this.profileIndexedDB.get('image'),
        ]).then((value) => {
            let picture;
            if (value[0])
                picture = value[0];
            else
                picture = value[1];
            const user = {
                'name': name,
                'picture': picture,
            };
            this.loaderUserSubject$.next(user);
        });
        return this.loaderUserSubject$.asObservable();
    }
    getUser() {
        return this.loaderUserSubject$.asObservable();
    }
    getImage(checksum, name) {
        if (checksum != null) {
            this.httpBaseService.HTTP_AUTH(this.apiPath['file']['vw-photo-profile'], null, null, null, [checksum], 'arraybuffer')
                .pipe(map((response) => {
                let picture;
                const imageBlob = new Blob([response], {
                    type: 'image/png',
                });
                this.profileIndexedDB.put('image-blob', imageBlob).then();
                const reader = new FileReader();
                reader.readAsDataURL(imageBlob);
                reader.onloadend = () => {
                    picture = reader.result.toString();
                    const user = {
                        'name': name,
                        'picture': picture,
                    };
                    this.profileIndexedDB.put('image-b64', picture).then();
                    this.loaderUserSubject$.next(user);
                };
            })).subscribe();
        }
    }
}
AuthUserService.ctorParameters = () => [
    { type: ProfileIndexedDBService },
    { type: AuthIndexedDBService },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] }
];
AuthUserService.decorators = [
    { type: Injectable }
];
AuthUserService.ctorParameters = () => [
    { type: ProfileIndexedDBService },
    { type: AuthIndexedDBService },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] }
];

const AUTH_PROVIDERS = [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorTokenService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorSignatureService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorLangService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorErrorService, multi: true },
    { provide: USER_INFO, useClass: AuthUserService },
    { provide: AUTH_INDEXED_DB, useClass: AuthIndexedDBService },
    { provide: PROFILE_INDEXED_DB, useClass: ProfileIndexedDBService },
    { provide: SETTINGS_INDEXED_DB, useClass: SettingsIndexedDBService },
    AuthGuardService,
    UnauthorizeGuardService,
    AuthTokenService,
    AuthGuardChildService,
    AuthSignatureService,
    AuthLanguageService,
];
const AUTH_COMPONENTS = [
    LoginPageComponent,
    LogoutComponent,
    RegisterPageComponent,
    RequestForgotPageComponent,
    ForgotPageComponent,
    TermsConditionsComponent,
    OAuth2CallbackComponent,
];
const AUTH_ENTRY_COMPONENTS = [
    TermsConditionsComponent,
];
class DoAuthModule {
    static forRoot() {
        return {
            ngModule: DoAuthModule,
            providers: [
                ...AUTH_PROVIDERS,
            ],
        };
    }
}
DoAuthModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ...AUTH_COMPONENTS,
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    TranslateModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    RecaptchaModule,
                    RecaptchaFormsModule,
                    NbCheckboxModule,
                    NbAlertModule,
                    NbInputModule,
                    NbButtonModule,
                    NbIconModule,
                    NbCardModule,
                    NbSpinnerModule,
                    NbDialogModule.forChild(),
                    DoThemeModule,
                    DoToastrModule.forRoot(),
                    DoLayoutAuthModule,
                    DoAuthRoutingModule,
                ],
                exports: [
                    ...AUTH_COMPONENTS,
                ],
                entryComponents: [
                    ...AUTH_ENTRY_COMPONENTS,
                ],
            },] }
];

class PageNotFoundComponent {
    constructor(location) {
        this.location = location;
    }
    goToHome() {
        this.location.back();
        return;
    }
}
PageNotFoundComponent.ctorParameters = () => [
    { type: Location }
];
PageNotFoundComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-404',
                template: "<div class=\"flex-centered\">\n  <h2 class=\"title\">404</h2>\n  <h2 class=\"title\">Page Not Found</h2>\n  <small class=\"sub-title\">The page you were looking for doesn't exist</small>\n  <button nbButton fullWidth (click)=\"goToHome()\" type=\"button\" class=\"home-button\">\n    Take me home\n  </button>\n</div>\n",
                styles: [".flex-centered{margin:auto}nb-card-body{display:flex}.title{text-align:center}.sub-title{text-align:center;display:block;margin-bottom:3rem}.home-button{margin-bottom:2rem}"]
            },] }
];
PageNotFoundComponent.ctorParameters = () => [
    { type: Location }
];

const routes$1 = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '404',
                component: PageNotFoundComponent,
            },
        ],
    },
];
class MiscellaneousRoutingModule {
}
MiscellaneousRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes$1)],
                exports: [RouterModule],
            },] }
];

class MiscellaneousModule {
}
MiscellaneousModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbButtonModule,
                    NbIconModule,
                    CommonModule,
                    DoThemeModule,
                    DoLayoutAuthModule,
                    MiscellaneousRoutingModule,
                ],
                declarations: [
                    PageNotFoundComponent,
                ],
            },] }
];

/*
 * Public API Surface of do-auth
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AuthGuardChildService, AuthGuardService, AuthIndexedDBService, AuthSignatureService, AuthTokenService, AuthUserService, DoAuthModule, MiscellaneousModule, PageNotFoundComponent, ProfileIndexedDBService, SettingsIndexedDBService, UnauthorizeGuardService, LoginPageComponent as ɵa, LogoutComponent as ɵb, RegisterPageComponent as ɵc, RequestForgotPageComponent as ɵd, ForgotPageComponent as ɵe, TermsConditionsComponent as ɵf, OAuth2CallbackComponent as ɵg, DoLayoutAuthModule as ɵh, AuthComponent as ɵi, AuthBlockComponent as ɵj, DoAuthRoutingModule as ɵk, HttpInterceptorTokenService as ɵl, HttpInterceptorSignatureService as ɵm, HttpInterceptorLangService as ɵn, AuthLanguageService as ɵo, HttpInterceptorErrorService as ɵp, HttpErrorHandler as ɵq, MiscellaneousRoutingModule as ɵr };
//# sourceMappingURL=dongkap-do-auth.js.map
