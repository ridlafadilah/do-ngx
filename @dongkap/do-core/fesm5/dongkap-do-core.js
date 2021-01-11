import { __read, __extends, __spread } from 'tslib';
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
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}

var LayoutService = /** @class */ (function () {
    function LayoutService() {
        this.layoutSize$ = new Subject();
        this.layoutSizeChange$ = this.layoutSize$.pipe(shareReplay({ refCount: true }));
    }
    LayoutService.prototype.changeLayoutSize = function () {
        this.layoutSize$.next();
    };
    LayoutService.prototype.onChangeLayoutSize = function () {
        return this.layoutSizeChange$.pipe(delay(1));
    };
    LayoutService.prototype.onSafeChangeLayoutSize = function () {
        return this.layoutSizeChange$.pipe(debounceTime(350));
    };
    LayoutService.decorators = [
        { type: Injectable }
    ];
    return LayoutService;
}());

var AnalyticsService = /** @class */ (function () {
    function AnalyticsService(location, router) {
        this.location = location;
        this.router = router;
        this.enabled = false;
    }
    AnalyticsService.prototype.trackPageViews = function () {
        var _this = this;
        if (this.enabled) {
            this.router.events.pipe(filter(function (event) { return event instanceof NavigationEnd; }))
                .subscribe(function () {
                ga('send', { hitType: 'pageview', page: _this.location.path() });
            });
        }
    };
    AnalyticsService.prototype.trackEvent = function (eventName) {
        if (this.enabled) {
            ga('send', 'event', eventName);
        }
    };
    AnalyticsService.ctorParameters = function () { return [
        { type: Location },
        { type: Router }
    ]; };
    AnalyticsService.decorators = [
        { type: Injectable }
    ];
    AnalyticsService.ctorParameters = function () { return [
        { type: Location },
        { type: Router }
    ]; };
    return AnalyticsService;
}());

var StateService = /** @class */ (function () {
    function StateService(directionService) {
        var _this = this;
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
            .pipe(takeWhile(function () { return _this.alive; }))
            .subscribe(function (direction) { return _this.updateSidebarIcons(direction); });
        this.updateSidebarIcons(directionService.getDirection());
    }
    StateService.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    StateService.prototype.updateSidebarIcons = function (direction) {
        var _a = __read(this.sidebars, 2), startSidebar = _a[0], endSidebar = _a[1];
        var isLtr = direction === NbLayoutDirection.LTR;
        var startIconClass = isLtr ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right';
        var endIconClass = isLtr ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
        startSidebar.icon = startIconClass;
        endSidebar.icon = endIconClass;
    };
    StateService.prototype.setLayoutState = function (state) {
        this.layoutState$.next(state);
    };
    StateService.prototype.getLayoutStates = function () {
        return of(this.layouts);
    };
    StateService.prototype.onLayoutState = function () {
        return this.layoutState$.asObservable();
    };
    StateService.prototype.setSidebarState = function (state) {
        this.sidebarState$.next(state);
    };
    StateService.prototype.getSidebarStates = function () {
        return of(this.sidebars);
    };
    StateService.prototype.onSidebarState = function () {
        return this.sidebarState$.asObservable();
    };
    StateService.ctorParameters = function () { return [
        { type: NbLayoutDirectionService }
    ]; };
    StateService.decorators = [
        { type: Injectable }
    ];
    StateService.ctorParameters = function () { return [
        { type: NbLayoutDirectionService }
    ]; };
    return StateService;
}());

var SeoService = /** @class */ (function () {
    function SeoService(router, document, platformId) {
        this.router = router;
        this.destroy$ = new Subject();
        this.isBrowser = isPlatformBrowser(platformId);
        this.dom = document;
        if (this.isBrowser) {
            this.createCanonicalTag();
        }
    }
    SeoService.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    SeoService.prototype.createCanonicalTag = function () {
        this.linkCanonical = this.dom.createElement('link');
        this.linkCanonical.setAttribute('rel', 'canonical');
        this.dom.head.appendChild(this.linkCanonical);
        this.linkCanonical.setAttribute('href', this.getCanonicalUrl());
    };
    SeoService.prototype.trackCanonicalChanges = function () {
        var _this = this;
        if (!this.isBrowser) {
            return;
        }
        this.router.events.pipe(filter(function (event) { return event instanceof NavigationEnd; }), takeUntil(this.destroy$))
            .subscribe(function () {
            _this.linkCanonical.setAttribute('href', _this.getCanonicalUrl());
        });
    };
    SeoService.prototype.getCanonicalUrl = function () {
        return this.dom.location.origin + this.dom.location.pathname;
    };
    SeoService.ctorParameters = function () { return [
        { type: Router },
        { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    SeoService.decorators = [
        { type: Injectable }
    ];
    SeoService.ctorParameters = function () { return [
        { type: Router },
        { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return SeoService;
}());

var TranslationService = /** @class */ (function (_super) {
    __extends(TranslationService, _super);
    function TranslationService(http, prefix, suffix) {
        return _super.call(this, http, prefix, suffix) || this;
    }
    TranslationService.prototype.getTranslation = function (lang) {
        return _super.prototype.getTranslation.call(this, lang);
    };
    return TranslationService;
}(TranslateHttpLoader));

var HTTP_SERVICE = new InjectionToken('Http Service');

var HttpAbstractService = /** @class */ (function () {
    function HttpAbstractService() {
    }
    HttpAbstractService.prototype.API = function (api, pathVariable) {
        var url = api.server.protocol +
            '://' +
            api.server.host +
            ((api.server.port) ? ':' + api.server.port : '') +
            api.path;
        if (pathVariable)
            pathVariable.forEach(function (path) {
                url = url + '/' + path;
            });
        return url;
    };
    return HttpAbstractService;
}());

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

var Environment = /** @class */ (function () {
    function Environment() {
        this.production = true;
        this.locale = 'en-US';
        this.basePath = '/';
    }
    return Environment;
}());
var Server = /** @class */ (function () {
    function Server() {
        this.protocol = 'http';
    }
    return Server;
}());

var HttpMethod;
(function (HttpMethod) {
    HttpMethod["POST"] = "POST";
    HttpMethod["GET"] = "GET";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["DELETE"] = "DELETE";
})(HttpMethod || (HttpMethod = {}));
var HostModel = /** @class */ (function () {
    function HostModel() {
        this.protocol = 'https';
    }
    return HostModel;
}());

var LocaleModel = /** @class */ (function () {
    function LocaleModel() {
    }
    return LocaleModel;
}());

var RoleModel = /** @class */ (function () {
    function RoleModel() {
    }
    return RoleModel;
}());

var UserData = /** @class */ (function () {
    function UserData() {
    }
    return UserData;
}());
var UserInfo = /** @class */ (function () {
    function UserInfo() {
    }
    return UserInfo;
}());

var oauthInfo = {
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
var oauthInfoModels = [
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
var signatureHeader = {
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

var HttpCommonService = /** @class */ (function (_super) {
    __extends(HttpCommonService, _super);
    function HttpCommonService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    HttpCommonService.prototype.HTTP_AUTH = function (api, body, headers, params, pathVariable, responseType) {
        if (headers) {
            headers = headers.append(signatureHeader.mark, 'true');
        }
        else
            headers = new HttpHeaders().append(signatureHeader.mark, 'true');
        responseType = responseType ? responseType : 'json';
        return this.HTTP_BASE(api, body, headers, params, pathVariable, responseType);
    };
    HttpCommonService.prototype.HTTP_BASE = function (api, body, headers, params, pathVariable, responseType) {
        var response = null;
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
    };
    HttpCommonService.prototype.GET = function (url, headers, params, responseType) {
        return this.http.get(url, { headers: headers, params: params, responseType: responseType });
    };
    HttpCommonService.prototype.POST = function (url, body, headers, params, responseType) {
        return this.http.post(url, body, { headers: headers, params: params, responseType: responseType });
    };
    HttpCommonService.prototype.PUT = function (url, body, headers, params) {
        return this.http.put(url, body, { headers: headers, params: params });
    };
    HttpCommonService.prototype.DELETE = function (url, headers, params) {
        return this.http.delete(url, { headers: headers, params: params });
    };
    HttpCommonService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    HttpCommonService.ɵprov = ɵɵdefineInjectable({ factory: function HttpCommonService_Factory() { return new HttpCommonService(ɵɵinject(HttpClient)); }, token: HttpCommonService, providedIn: "root" });
    HttpCommonService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    HttpCommonService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    return HttpCommonService;
}(HttpAbstractService));

var ErrorHandlerService = /** @class */ (function () {
    function ErrorHandlerService() {
    }
    ErrorHandlerService.prototype.handleError = function (error) {
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
    };
    ErrorHandlerService.decorators = [
        { type: Injectable }
    ];
    return ErrorHandlerService;
}());

var EncryptionService = /** @class */ (function () {
    function EncryptionService() {
        this.ivSize = 128;
    }
    EncryptionService.prototype.getHmacSha256 = function (secret, message, hex) {
        var hash = HmacSHA256(message, secret);
        if (hex)
            return enc.Hex.stringify(hash).toUpperCase();
        return enc.Base64.stringify(hash);
    };
    EncryptionService.prototype.encryptAES = function (secretKey, message) {
        var iv = lib.WordArray.random(this.ivSize / 8);
        var key = enc.Utf8.parse(secretKey);
        var encrypted = AES.encrypt(message, key, {
            iv: iv,
            padding: pad.Pkcs7,
            mode: mode.CBC,
        });
        var encryptMessage = iv.toString() + encrypted.toString();
        return encryptMessage;
    };
    EncryptionService.prototype.decryptAES = function (secretKey, encryptMessage) {
        if (encryptMessage) {
            var iv = enc.Hex.parse(encryptMessage.substr(0, 32));
            var key = enc.Utf8.parse(secretKey);
            var encrypted = encryptMessage.substring(32);
            var decrypted = AES.decrypt(encrypted, key, {
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
    };
    EncryptionService.decorators = [
        { type: Injectable }
    ];
    return EncryptionService;
}());

var CustomPreloadingStrategy = /** @class */ (function () {
    function CustomPreloadingStrategy() {
        this.preloadedModules = [];
    }
    CustomPreloadingStrategy.prototype.preload = function (route, load) {
        if (route.data && route.data['preload']) {
            this.preloadedModules.push(route.path);
            return load();
        }
        else {
            return EMPTY;
        }
    };
    CustomPreloadingStrategy.decorators = [
        { type: Injectable }
    ];
    return CustomPreloadingStrategy;
}());

var CORE_PROVIDERS = [
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
var DoCoreModule = /** @class */ (function () {
    function DoCoreModule(parentModule) {
        throwIfAlreadyLoaded(parentModule, 'DoCoreModule');
    }
    DoCoreModule.forRoot = function () {
        return {
            ngModule: DoCoreModule,
            providers: __spread(CORE_PROVIDERS, TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [HttpClient],
                },
            }).providers),
        };
    };
    DoCoreModule.ctorParameters = function () { return [
        { type: DoCoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    DoCoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    exports: [],
                    declarations: [],
                },] }
    ];
    DoCoreModule.ctorParameters = function () { return [
        { type: DoCoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return DoCoreModule;
}());

var OAUTH_INFO = new InjectionToken('OAUTH INFO Resource');
var USER_INFO = new InjectionToken('USER INFO Resource');

var API = new InjectionToken('API');

var ENVIRONMENT = new InjectionToken('Environment Config');

var AUTH_INDEXED_DB = new InjectionToken('Auth IndexedDB Resource');
var PROFILE_INDEXED_DB = new InjectionToken('Profile IndexedDB Resource');
var SETTINGS_INDEXED_DB = new InjectionToken('Settings IndexedDB Resource');
var PANIC_INDEXED_DB = new InjectionToken('Panic IndexedDB Resource');

/*
 * Public API Surface of do-core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { API, AUTH_INDEXED_DB, AnalyticsService, CORE_PROVIDERS, CustomPreloadingStrategy, DateFormat, DatePattern, DoCoreModule, ENVIRONMENT, EncryptionService, Environment, ErrorHandlerService, HTTP_SERVICE, HostModel, HttpCommonService, HttpMethod, LayoutService, LocaleModel, OAUTH_INFO, PANIC_INDEXED_DB, PROFILE_INDEXED_DB, Pattern, ResponseCode, RoleModel, SETTINGS_INDEXED_DB, SeoService, StateService, TranslationService, TypeDataOauth, USER_INFO, UserData, UserInfo, createTranslateLoader, oauthInfo, oauthInfoModels, signatureHeader, HttpAbstractService as ɵa };
//# sourceMappingURL=dongkap-do-core.js.map
