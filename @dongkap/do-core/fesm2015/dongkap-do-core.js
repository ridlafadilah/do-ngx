import { Injectable, Inject, PLATFORM_ID, InjectionToken, ɵɵdefineInjectable, ɵɵinject, ErrorHandler, Optional, SkipSelf, NgModule } from '@angular/core';
import { Location, isPlatformBrowser, CommonModule } from '@angular/common';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Subject, BehaviorSubject, of, EMPTY } from 'rxjs';
import { shareReplay, delay, debounceTime, filter, takeWhile, takeUntil } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { NbLayoutDirection, NbLayoutDirectionService, NB_DOCUMENT } from '@nebular/theme';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HmacSHA256, enc, lib, AES, pad, mode } from 'crypto-js';

function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}

class LayoutService {
    constructor() {
        this.layoutSize$ = new Subject();
        this.layoutSizeChange$ = this.layoutSize$.pipe(shareReplay({ refCount: true }));
    }
    changeLayoutSize() {
        this.layoutSize$.next();
    }
    onChangeLayoutSize() {
        return this.layoutSizeChange$.pipe(delay(1));
    }
    onSafeChangeLayoutSize() {
        return this.layoutSizeChange$.pipe(debounceTime(350));
    }
}
LayoutService.decorators = [
    { type: Injectable }
];

class AnalyticsService {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.enabled = false;
    }
    trackPageViews() {
        if (this.enabled) {
            this.router.events.pipe(filter((event) => event instanceof NavigationEnd))
                .subscribe(() => {
                ga('send', { hitType: 'pageview', page: this.location.path() });
            });
        }
    }
    trackEvent(eventName) {
        if (this.enabled) {
            ga('send', 'event', eventName);
        }
    }
}
AnalyticsService.ctorParameters = () => [
    { type: Location },
    { type: Router }
];
AnalyticsService.decorators = [
    { type: Injectable }
];
AnalyticsService.ctorParameters = () => [
    { type: Location },
    { type: Router }
];

class StateService {
    constructor(directionService) {
        this.layouts = [
            {
                name: 'One Column',
                icon: 'nb-layout-default',
                id: 'one-column',
                selected: true,
            },
            {
                name: 'Two Column',
                icon: 'nb-layout-two-column',
                id: 'two-column',
            },
            {
                name: 'Center Column',
                icon: 'nb-layout-centre',
                id: 'center-column',
            },
        ];
        this.sidebars = [
            {
                name: 'Sidebar at layout start',
                icon: 'nb-layout-sidebar-left',
                id: 'start',
                selected: true,
            },
            {
                name: 'Sidebar at layout end',
                icon: 'nb-layout-sidebar-right',
                id: 'end',
            },
        ];
        this.layoutState$ = new BehaviorSubject(this.layouts[0]);
        this.sidebarState$ = new BehaviorSubject(this.sidebars[0]);
        this.alive = true;
        directionService.onDirectionChange()
            .pipe(takeWhile(() => this.alive))
            .subscribe(direction => this.updateSidebarIcons(direction));
        this.updateSidebarIcons(directionService.getDirection());
    }
    ngOnDestroy() {
        this.alive = false;
    }
    updateSidebarIcons(direction) {
        const [startSidebar, endSidebar] = this.sidebars;
        const isLtr = direction === NbLayoutDirection.LTR;
        const startIconClass = isLtr ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right';
        const endIconClass = isLtr ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
        startSidebar.icon = startIconClass;
        endSidebar.icon = endIconClass;
    }
    setLayoutState(state) {
        this.layoutState$.next(state);
    }
    getLayoutStates() {
        return of(this.layouts);
    }
    onLayoutState() {
        return this.layoutState$.asObservable();
    }
    setSidebarState(state) {
        this.sidebarState$.next(state);
    }
    getSidebarStates() {
        return of(this.sidebars);
    }
    onSidebarState() {
        return this.sidebarState$.asObservable();
    }
}
StateService.ctorParameters = () => [
    { type: NbLayoutDirectionService }
];
StateService.decorators = [
    { type: Injectable }
];
StateService.ctorParameters = () => [
    { type: NbLayoutDirectionService }
];

class SeoService {
    constructor(router, document, platformId) {
        this.router = router;
        this.destroy$ = new Subject();
        this.isBrowser = isPlatformBrowser(platformId);
        this.dom = document;
        if (this.isBrowser) {
            this.createCanonicalTag();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    createCanonicalTag() {
        this.linkCanonical = this.dom.createElement('link');
        this.linkCanonical.setAttribute('rel', 'canonical');
        this.dom.head.appendChild(this.linkCanonical);
        this.linkCanonical.setAttribute('href', this.getCanonicalUrl());
    }
    trackCanonicalChanges() {
        if (!this.isBrowser) {
            return;
        }
        this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntil(this.destroy$))
            .subscribe(() => {
            this.linkCanonical.setAttribute('href', this.getCanonicalUrl());
        });
    }
    getCanonicalUrl() {
        return this.dom.location.origin + this.dom.location.pathname;
    }
}
SeoService.ctorParameters = () => [
    { type: Router },
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
SeoService.decorators = [
    { type: Injectable }
];
SeoService.ctorParameters = () => [
    { type: Router },
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];

class TranslationService extends TranslateHttpLoader {
    constructor(http, prefix, suffix) {
        super(http, prefix, suffix);
    }
    getTranslation(lang) {
        return super.getTranslation(lang);
    }
}

const HTTP_SERVICE = new InjectionToken('Http Service');

class HttpAbstractService {
    API(api, pathVariable) {
        let url = api.server.protocol +
            '://' +
            api.server.host +
            ((api.server.port) ? ':' + api.server.port : '') +
            api.path;
        if (pathVariable)
            pathVariable.forEach(path => {
                url = url + '/' + path;
            });
        return url;
    }
}

var ResponseCode;
(function (ResponseCode) {
    ResponseCode["ERR_XXAKEY"] = "ERR_XXAKEY";
    ResponseCode["ERR_XXATIMESTAMP"] = "ERR_XXATIMESTAMP";
    ResponseCode["ERR_XXASIGNATURE"] = "ERR_XXASIGNATURE";
    ResponseCode["ERR_UNAUTHORIZED"] = "ERR_UNAUTHORIZED";
    ResponseCode["ERR_SYS0001"] = "ERR_SYS0001";
    ResponseCode["ERR_SYS0002"] = "ERR_SYS0002";
    ResponseCode["ERR_SYS0500"] = "ERR_SYS0500";
    ResponseCode["ERR_SYS0404"] = "ERR_SYS0404";
    ResponseCode["ERR_SYS0501"] = "ERR_SYS0501";
    ResponseCode["ERR_SYS0502"] = "ERR_SYS0502";
    ResponseCode["ERR_SYS0302"] = "ERR_SYS0302";
    ResponseCode["ERR_SCR0001"] = "ERR_SCR0001";
    ResponseCode["ERR_SCR0002"] = "ERR_SCR0002";
    ResponseCode["ERR_SCR0003"] = "ERR_SCR0003";
    ResponseCode["ERR_SCR0004"] = "ERR_SCR0004";
    ResponseCode["ERR_SCR0005"] = "ERR_SCR0005";
    ResponseCode["ERR_SCR0006"] = "ERR_SCR0006";
    ResponseCode["ERR_SCR0007A"] = "ERR_SCR0007A";
    ResponseCode["ERR_SCR0007B"] = "ERR_SCR0007B";
    ResponseCode["ERR_SCR0008"] = "ERR_SCR0008";
    ResponseCode["ERR_SCR0009"] = "ERR_SCR0009";
    ResponseCode["ERR_SCR0010"] = "ERR_SCR0010";
    ResponseCode["ERR_SCR0011"] = "ERR_SCR0011";
    ResponseCode["ERR_SCR0012"] = "ERR_SCR0012";
    ResponseCode["OK_DEFAULT"] = "OK_DEFAULT";
    ResponseCode["OK_INSERTED"] = "OK_INSERTED";
    ResponseCode["OK_UPDATED"] = "OK_UPDATED";
    ResponseCode["OK_DELETED"] = "OK_DELETED";
    ResponseCode["OK_LOGOUT"] = "OK_LOGOUT";
    ResponseCode["OK_REGISTERED"] = "OK_REGISTERED";
    ResponseCode["OK_REQUEST_FORGOT_PASSWORD"] = "OK_REQUEST_FORGOT_PASSWORD";
    ResponseCode["OK_FORGOT_PASSWORD"] = "OK_FORGOT_PASSWORD";
    ResponseCode["OK_SCR001"] = "OK_SCR001";
    ResponseCode["OK_SCR002"] = "OK_SCR002";
    ResponseCode["OK_SCR003"] = "OK_SCR003";
    ResponseCode["OK_SCR004"] = "OK_SCR004";
    ResponseCode["OK_SCR005"] = "OK_SCR005";
    ResponseCode["OK_SCR006"] = "OK_SCR006";
    ResponseCode["OK_SCR007"] = "OK_SCR007";
    ResponseCode["OK_SCR008"] = "OK_SCR008";
    ResponseCode["OK_SCR009"] = "OK_SCR009";
    ResponseCode["OK_SCR010"] = "OK_SCR010";
    ResponseCode["OK_SCR011"] = "OK_SCR011";
    ResponseCode["OK_SCR012"] = "OK_SCR012";
})(ResponseCode || (ResponseCode = {}));

class Environment {
    constructor() {
        this.production = true;
        this.locale = 'en-US';
        this.basePath = '/';
    }
}
class Server {
    constructor() {
        this.protocol = 'http';
    }
}

var HttpMethod;
(function (HttpMethod) {
    HttpMethod["POST"] = "POST";
    HttpMethod["GET"] = "GET";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["DELETE"] = "DELETE";
})(HttpMethod || (HttpMethod = {}));
class HostModel {
    constructor() {
        this.protocol = 'https';
    }
}

class LocaleModel {
}

class RoleModel {
}

class UserData {
}
class UserInfo {
}

const oauthInfo = {
    access_token: 'access_token',
    refresh_token: 'refresh_token',
    token_type: 'token_type',
    public_key: 'xrkey',
    expires_in: 'expires_in',
    authority: 'authority',
    provider: 'provider',
    image: 'image',
    email: 'email',
    menus: 'menus',
    extras: 'extras',
    server_date: 'server_date',
    locale: 'locale',
    theme: 'theme',
    name: 'name',
};
var TypeDataOauth;
(function (TypeDataOauth) {
    TypeDataOauth["OAUTH"] = "oauth";
    TypeDataOauth["PROFILE"] = "profile";
    TypeDataOauth["SETTINGS"] = "settings";
    TypeDataOauth["LOCALSTORAGE"] = "localstorage";
})(TypeDataOauth || (TypeDataOauth = {}));
const oauthInfoModels = [
    { key: oauthInfo.access_token, enc: true, type: TypeDataOauth.OAUTH, string: true },
    { key: oauthInfo.refresh_token, enc: true, type: TypeDataOauth.OAUTH, string: true },
    { key: oauthInfo.token_type, enc: true, type: TypeDataOauth.OAUTH, string: true },
    { key: oauthInfo.public_key, enc: true, type: TypeDataOauth.OAUTH, string: true },
    { key: oauthInfo.expires_in, enc: true, type: TypeDataOauth.OAUTH, string: false },
    { key: oauthInfo.authority, enc: true, type: TypeDataOauth.OAUTH, string: true },
    { key: oauthInfo.provider, enc: true, type: TypeDataOauth.OAUTH, string: true },
    { key: oauthInfo.menus, enc: true, type: TypeDataOauth.OAUTH, string: false },
    { key: oauthInfo.extras, enc: true, type: TypeDataOauth.OAUTH, string: false },
    { key: oauthInfo.name, enc: false, type: TypeDataOauth.PROFILE, string: true },
    { key: oauthInfo.email, enc: false, type: TypeDataOauth.PROFILE, string: true },
    { key: oauthInfo.image, enc: false, type: TypeDataOauth.PROFILE, string: true },
    { key: oauthInfo.locale, enc: false, type: TypeDataOauth.SETTINGS, string: true },
    { key: oauthInfo.theme, enc: false, type: TypeDataOauth.SETTINGS, string: true },
    { key: oauthInfo.server_date, enc: false, type: TypeDataOauth.SETTINGS, string: true },
];
const signatureHeader = {
    authorization: 'Authorization',
    signature: 'X-DONGKAP-Signature',
    timestamp: 'X-DONGKAP-Timestamp',
    key: 'X-DONGKAP-Key',
    mark: 'X-DONGKAP-Mark',
};

var DatePattern;
(function (DatePattern) {
    DatePattern["SLASH"] = "^(?:(?:31(\\/)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$";
    DatePattern["DASH"] = "^(?:(?:31(-)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(-)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(-)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(-)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$";
    DatePattern["DOT"] = "^(?:(?:31(\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$";
})(DatePattern || (DatePattern = {}));
var DateFormat;
(function (DateFormat) {
    DateFormat["DATE"] = "dd/MM/yyyy";
    DateFormat["DATETIME"] = "dd/MM/yyyy HH:mm:ss.S";
})(DateFormat || (DateFormat = {}));

var Pattern;
(function (Pattern) {
    Pattern["FULLNAME"] = "(^[a-zA-Z]{1}([.])(?: [a-zA-Z]+)*)?([a-zA-Z ][a-zA-Z]+)*$";
    Pattern["EMAIL"] = ".+@.+..+";
    Pattern["USERNAME"] = "[a-z0-9.]*$";
    Pattern["PHONE_NUMBER"] = "^(([+]([0-9]{1,2}))|([0-9]{1}))([0-9]{2}-?)([0-9]{4}-?)([0-9]{1,6}-?)$";
    Pattern["PASSWORD_MEDIUM"] = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])([@$!%*?&]*)[A-Za-z0-9@$!%*?&]{8,}$";
    Pattern["PASSWORD_STRONG"] = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$";
    Pattern["LOCALE"] = "^en-US$|^id-ID$";
})(Pattern || (Pattern = {}));

class HttpCommonService extends HttpAbstractService {
    constructor(http) {
        super();
        this.http = http;
    }
    HTTP_AUTH(api, body, headers, params, pathVariable, responseType) {
        if (headers) {
            headers = headers.append(signatureHeader.mark, 'true');
        }
        else
            headers = new HttpHeaders().append(signatureHeader.mark, 'true');
        responseType = responseType ? responseType : 'json';
        return this.HTTP_BASE(api, body, headers, params, pathVariable, responseType);
    }
    HTTP_BASE(api, body, headers, params, pathVariable, responseType) {
        let response = null;
        responseType = responseType ? responseType : 'json';
        switch (api.method) {
            case HttpMethod.POST:
                response = this.POST(this.API(api, pathVariable), body, headers, params, responseType);
                break;
            case HttpMethod.PUT:
                response = this.PUT(this.API(api, pathVariable), body, headers, params);
                break;
            case HttpMethod.DELETE:
                response = this.DELETE(this.API(api, pathVariable), headers, params);
                break;
            default:
                response = this.GET(this.API(api, pathVariable), headers, params, responseType);
                break;
        }
        return response;
    }
    GET(url, headers, params, responseType) {
        return this.http.get(url, { headers: headers, params: params, responseType: responseType });
    }
    POST(url, body, headers, params, responseType) {
        return this.http.post(url, body, { headers: headers, params: params, responseType: responseType });
    }
    PUT(url, body, headers, params) {
        return this.http.put(url, body, { headers: headers, params: params });
    }
    DELETE(url, headers, params) {
        return this.http.delete(url, { headers: headers, params: params });
    }
}
HttpCommonService.ctorParameters = () => [
    { type: HttpClient }
];
HttpCommonService.ɵprov = ɵɵdefineInjectable({ factory: function HttpCommonService_Factory() { return new HttpCommonService(ɵɵinject(HttpClient)); }, token: HttpCommonService, providedIn: "root" });
HttpCommonService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
HttpCommonService.ctorParameters = () => [
    { type: HttpClient }
];

class ErrorHandlerService {
    handleError(error) {
        if (error.message) {
            if (error.message.includes('No loader found for file')) {
                // this.notification.show('DICOM', 'File Not Support', NbComponentStatus.DANGER);
                return EMPTY;
            }
            else if (error.message.includes('mousedown') || error.message.includes('mousemove') ||
                error.message.includes('mouseup') || error.message.includes('mouseout') ||
                error.message.includes('mousewheel') || error.message.includes('DOMMouseScroll') ||
                error.message.includes('dblclick') || error.message.includes('touchstart') ||
                error.message.includes('touchmove') || error.message.includes('touchend')) {
                return EMPTY;
            }
        }
        throw error;
    }
}
ErrorHandlerService.decorators = [
    { type: Injectable }
];

class EncryptionService {
    constructor() {
        this.ivSize = 128;
    }
    getHmacSha256(secret, message, hex) {
        const hash = HmacSHA256(message, secret);
        if (hex)
            return enc.Hex.stringify(hash).toUpperCase();
        return enc.Base64.stringify(hash);
    }
    encryptAES(secretKey, message) {
        const iv = lib.WordArray.random(this.ivSize / 8);
        const key = enc.Utf8.parse(secretKey);
        const encrypted = AES.encrypt(message, key, {
            iv: iv,
            padding: pad.Pkcs7,
            mode: mode.CBC,
        });
        const encryptMessage = iv.toString() + encrypted.toString();
        return encryptMessage;
    }
    decryptAES(secretKey, encryptMessage) {
        if (encryptMessage) {
            const iv = enc.Hex.parse(encryptMessage.substr(0, 32));
            const key = enc.Utf8.parse(secretKey);
            const encrypted = encryptMessage.substring(32);
            const decrypted = AES.decrypt(encrypted, key, {
                iv: iv,
                padding: pad.Pkcs7,
                mode: mode.CBC,
            });
            try {
                return decrypted.toString(enc.Utf8);
            }
            catch (error) {
                return null;
            }
        }
        return null;
    }
}
EncryptionService.decorators = [
    { type: Injectable }
];

class CustomPreloadingStrategy {
    constructor() {
        this.preloadedModules = [];
    }
    preload(route, load) {
        if (route.data && route.data['preload']) {
            this.preloadedModules.push(route.path);
            return load();
        }
        else {
            return EMPTY;
        }
    }
}
CustomPreloadingStrategy.decorators = [
    { type: Injectable }
];

const CORE_PROVIDERS = [
    AnalyticsService,
    LayoutService,
    SeoService,
    StateService,
    CustomPreloadingStrategy,
    EncryptionService,
    { provide: HTTP_SERVICE, useClass: HttpCommonService },
    { provide: ErrorHandler, useClass: ErrorHandlerService },
];
function createTranslateLoader(http) {
    return new TranslationService(http, './assets/i18n/', '.json');
}
class DoCoreModule {
    constructor(parentModule) {
        throwIfAlreadyLoaded(parentModule, 'DoCoreModule');
    }
    static forRoot() {
        return {
            ngModule: DoCoreModule,
            providers: [
                ...CORE_PROVIDERS,
                ...TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (createTranslateLoader),
                        deps: [HttpClient],
                    },
                }).providers,
            ],
        };
    }
}
DoCoreModule.ctorParameters = () => [
    { type: DoCoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
DoCoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                exports: [],
                declarations: [],
            },] }
];
DoCoreModule.ctorParameters = () => [
    { type: DoCoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

const OAUTH_INFO = new InjectionToken('OAUTH INFO Resource');
const USER_INFO = new InjectionToken('USER INFO Resource');

const API = new InjectionToken('API');

const ENVIRONMENT = new InjectionToken('Environment Config');

const AUTH_INDEXED_DB = new InjectionToken('Auth IndexedDB Resource');
const PROFILE_INDEXED_DB = new InjectionToken('Profile IndexedDB Resource');
const SETTINGS_INDEXED_DB = new InjectionToken('Settings IndexedDB Resource');
const PANIC_INDEXED_DB = new InjectionToken('Panic IndexedDB Resource');

/*
 * Public API Surface of do-core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { API, AUTH_INDEXED_DB, AnalyticsService, CORE_PROVIDERS, CustomPreloadingStrategy, DateFormat, DatePattern, DoCoreModule, ENVIRONMENT, EncryptionService, Environment, ErrorHandlerService, HTTP_SERVICE, HostModel, HttpCommonService, HttpMethod, LayoutService, LocaleModel, OAUTH_INFO, PANIC_INDEXED_DB, PROFILE_INDEXED_DB, Pattern, ResponseCode, RoleModel, SETTINGS_INDEXED_DB, SeoService, StateService, TranslationService, TypeDataOauth, USER_INFO, UserData, UserInfo, createTranslateLoader, oauthInfo, oauthInfoModels, signatureHeader, HttpAbstractService as ɵa };
//# sourceMappingURL=dongkap-do-core.js.map
