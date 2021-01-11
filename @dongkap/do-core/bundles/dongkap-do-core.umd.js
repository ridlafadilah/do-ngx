(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('@ngx-translate/core'), require('rxjs'), require('rxjs/operators'), require('@angular/router'), require('@nebular/theme'), require('@ngx-translate/http-loader'), require('crypto-js')) :
    typeof define === 'function' && define.amd ? define('@dongkap/do-core', ['exports', '@angular/core', '@angular/common', '@angular/common/http', '@ngx-translate/core', 'rxjs', 'rxjs/operators', '@angular/router', '@nebular/theme', '@ngx-translate/http-loader', 'crypto-js'], factory) :
    (global = global || self, factory((global.dongkap = global.dongkap || {}, global.dongkap['do-core'] = {}), global.ng.core, global.ng.common, global.ng.common.http, global['@ngx-translate/core'], global.rxjs, global.rxjs.operators, global.ng.router, global['@nebular/theme'], global['@ngx-translate/http-loader'], global['crypto-js']));
}(this, (function (exports, core, common, http, core$1, rxjs, operators, router, theme, httpLoader, cryptoJs) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    function __exportStar(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    function throwIfAlreadyLoaded(parentModule, moduleName) {
        if (parentModule) {
            throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
        }
    }

    var LayoutService = /** @class */ (function () {
        function LayoutService() {
            this.layoutSize$ = new rxjs.Subject();
            this.layoutSizeChange$ = this.layoutSize$.pipe(operators.shareReplay({ refCount: true }));
        }
        LayoutService.prototype.changeLayoutSize = function () {
            this.layoutSize$.next();
        };
        LayoutService.prototype.onChangeLayoutSize = function () {
            return this.layoutSizeChange$.pipe(operators.delay(1));
        };
        LayoutService.prototype.onSafeChangeLayoutSize = function () {
            return this.layoutSizeChange$.pipe(operators.debounceTime(350));
        };
        LayoutService.decorators = [
            { type: core.Injectable }
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
                this.router.events.pipe(operators.filter(function (event) { return event instanceof router.NavigationEnd; }))
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
            { type: common.Location },
            { type: router.Router }
        ]; };
        AnalyticsService.decorators = [
            { type: core.Injectable }
        ];
        AnalyticsService.ctorParameters = function () { return [
            { type: common.Location },
            { type: router.Router }
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
            this.layoutState$ = new rxjs.BehaviorSubject(this.layouts[0]);
            this.sidebarState$ = new rxjs.BehaviorSubject(this.sidebars[0]);
            this.alive = true;
            directionService.onDirectionChange()
                .pipe(operators.takeWhile(function () { return _this.alive; }))
                .subscribe(function (direction) { return _this.updateSidebarIcons(direction); });
            this.updateSidebarIcons(directionService.getDirection());
        }
        StateService.prototype.ngOnDestroy = function () {
            this.alive = false;
        };
        StateService.prototype.updateSidebarIcons = function (direction) {
            var _a = __read(this.sidebars, 2), startSidebar = _a[0], endSidebar = _a[1];
            var isLtr = direction === theme.NbLayoutDirection.LTR;
            var startIconClass = isLtr ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right';
            var endIconClass = isLtr ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
            startSidebar.icon = startIconClass;
            endSidebar.icon = endIconClass;
        };
        StateService.prototype.setLayoutState = function (state) {
            this.layoutState$.next(state);
        };
        StateService.prototype.getLayoutStates = function () {
            return rxjs.of(this.layouts);
        };
        StateService.prototype.onLayoutState = function () {
            return this.layoutState$.asObservable();
        };
        StateService.prototype.setSidebarState = function (state) {
            this.sidebarState$.next(state);
        };
        StateService.prototype.getSidebarStates = function () {
            return rxjs.of(this.sidebars);
        };
        StateService.prototype.onSidebarState = function () {
            return this.sidebarState$.asObservable();
        };
        StateService.ctorParameters = function () { return [
            { type: theme.NbLayoutDirectionService }
        ]; };
        StateService.decorators = [
            { type: core.Injectable }
        ];
        StateService.ctorParameters = function () { return [
            { type: theme.NbLayoutDirectionService }
        ]; };
        return StateService;
    }());

    var SeoService = /** @class */ (function () {
        function SeoService(router, document, platformId) {
            this.router = router;
            this.destroy$ = new rxjs.Subject();
            this.isBrowser = common.isPlatformBrowser(platformId);
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
            this.router.events.pipe(operators.filter(function (event) { return event instanceof router.NavigationEnd; }), operators.takeUntil(this.destroy$))
                .subscribe(function () {
                _this.linkCanonical.setAttribute('href', _this.getCanonicalUrl());
            });
        };
        SeoService.prototype.getCanonicalUrl = function () {
            return this.dom.location.origin + this.dom.location.pathname;
        };
        SeoService.ctorParameters = function () { return [
            { type: router.Router },
            { type: undefined, decorators: [{ type: core.Inject, args: [theme.NB_DOCUMENT,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
        ]; };
        SeoService.decorators = [
            { type: core.Injectable }
        ];
        SeoService.ctorParameters = function () { return [
            { type: router.Router },
            { type: undefined, decorators: [{ type: core.Inject, args: [theme.NB_DOCUMENT,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
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
    }(httpLoader.TranslateHttpLoader));

    var HTTP_SERVICE = new core.InjectionToken('Http Service');

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
    })(exports.ResponseCode || (exports.ResponseCode = {}));

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


    (function (HttpMethod) {
        HttpMethod["POST"] = "POST";
        HttpMethod["GET"] = "GET";
        HttpMethod["PUT"] = "PUT";
        HttpMethod["DELETE"] = "DELETE";
    })(exports.HttpMethod || (exports.HttpMethod = {}));
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

    (function (TypeDataOauth) {
        TypeDataOauth["OAUTH"] = "oauth";
        TypeDataOauth["PROFILE"] = "profile";
        TypeDataOauth["SETTINGS"] = "settings";
        TypeDataOauth["LOCALSTORAGE"] = "localstorage";
    })(exports.TypeDataOauth || (exports.TypeDataOauth = {}));
    var oauthInfoModels = [
        { key: oauthInfo.access_token, enc: true, type: exports.TypeDataOauth.OAUTH, string: true },
        { key: oauthInfo.refresh_token, enc: true, type: exports.TypeDataOauth.OAUTH, string: true },
        { key: oauthInfo.token_type, enc: true, type: exports.TypeDataOauth.OAUTH, string: true },
        { key: oauthInfo.public_key, enc: true, type: exports.TypeDataOauth.OAUTH, string: true },
        { key: oauthInfo.expires_in, enc: true, type: exports.TypeDataOauth.OAUTH, string: false },
        { key: oauthInfo.authority, enc: true, type: exports.TypeDataOauth.OAUTH, string: true },
        { key: oauthInfo.provider, enc: true, type: exports.TypeDataOauth.OAUTH, string: true },
        { key: oauthInfo.menus, enc: true, type: exports.TypeDataOauth.OAUTH, string: false },
        { key: oauthInfo.extras, enc: true, type: exports.TypeDataOauth.OAUTH, string: false },
        { key: oauthInfo.name, enc: false, type: exports.TypeDataOauth.PROFILE, string: true },
        { key: oauthInfo.email, enc: false, type: exports.TypeDataOauth.PROFILE, string: true },
        { key: oauthInfo.image, enc: false, type: exports.TypeDataOauth.PROFILE, string: true },
        { key: oauthInfo.locale, enc: false, type: exports.TypeDataOauth.SETTINGS, string: true },
        { key: oauthInfo.theme, enc: false, type: exports.TypeDataOauth.SETTINGS, string: true },
        { key: oauthInfo.server_date, enc: false, type: exports.TypeDataOauth.SETTINGS, string: true },
    ];
    var signatureHeader = {
        authorization: 'Authorization',
        signature: 'X-DONGKAP-Signature',
        timestamp: 'X-DONGKAP-Timestamp',
        key: 'X-DONGKAP-Key',
        mark: 'X-DONGKAP-Mark',
    };


    (function (DatePattern) {
        DatePattern["SLASH"] = "^(?:(?:31(\\/)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$";
        DatePattern["DASH"] = "^(?:(?:31(-)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(-)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(-)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(-)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$";
        DatePattern["DOT"] = "^(?:(?:31(\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$";
    })(exports.DatePattern || (exports.DatePattern = {}));

    (function (DateFormat) {
        DateFormat["DATE"] = "dd/MM/yyyy";
        DateFormat["DATETIME"] = "dd/MM/yyyy HH:mm:ss.S";
    })(exports.DateFormat || (exports.DateFormat = {}));


    (function (Pattern) {
        Pattern["FULLNAME"] = "(^[a-zA-Z]{1}([.])(?: [a-zA-Z]+)*)?([a-zA-Z ][a-zA-Z]+)*$";
        Pattern["EMAIL"] = ".+@.+..+";
        Pattern["USERNAME"] = "[a-z0-9.]*$";
        Pattern["PHONE_NUMBER"] = "^(([+]([0-9]{1,2}))|([0-9]{1}))([0-9]{2}-?)([0-9]{4}-?)([0-9]{1,6}-?)$";
        Pattern["PASSWORD_MEDIUM"] = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])([@$!%*?&]*)[A-Za-z0-9@$!%*?&]{8,}$";
        Pattern["PASSWORD_STRONG"] = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$";
        Pattern["LOCALE"] = "^en-US$|^id-ID$";
    })(exports.Pattern || (exports.Pattern = {}));

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
                headers = new http.HttpHeaders().append(signatureHeader.mark, 'true');
            responseType = responseType ? responseType : 'json';
            return this.HTTP_BASE(api, body, headers, params, pathVariable, responseType);
        };
        HttpCommonService.prototype.HTTP_BASE = function (api, body, headers, params, pathVariable, responseType) {
            var response = null;
            responseType = responseType ? responseType : 'json';
            switch (api.method) {
                case exports.HttpMethod.POST:
                    response = this.POST(this.API(api, pathVariable), body, headers, params, responseType);
                    break;
                case exports.HttpMethod.PUT:
                    response = this.PUT(this.API(api, pathVariable), body, headers, params);
                    break;
                case exports.HttpMethod.DELETE:
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
            { type: http.HttpClient }
        ]; };
        HttpCommonService.ɵprov = core.ɵɵdefineInjectable({ factory: function HttpCommonService_Factory() { return new HttpCommonService(core.ɵɵinject(http.HttpClient)); }, token: HttpCommonService, providedIn: "root" });
        HttpCommonService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        HttpCommonService.ctorParameters = function () { return [
            { type: http.HttpClient }
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
                    return rxjs.EMPTY;
                }
                else if (error.message.includes('mousedown') || error.message.includes('mousemove') ||
                    error.message.includes('mouseup') || error.message.includes('mouseout') ||
                    error.message.includes('mousewheel') || error.message.includes('DOMMouseScroll') ||
                    error.message.includes('dblclick') || error.message.includes('touchstart') ||
                    error.message.includes('touchmove') || error.message.includes('touchend')) {
                    return rxjs.EMPTY;
                }
            }
            throw error;
        };
        ErrorHandlerService.decorators = [
            { type: core.Injectable }
        ];
        return ErrorHandlerService;
    }());

    var EncryptionService = /** @class */ (function () {
        function EncryptionService() {
            this.ivSize = 128;
        }
        EncryptionService.prototype.getHmacSha256 = function (secret, message, hex) {
            var hash = cryptoJs.HmacSHA256(message, secret);
            if (hex)
                return cryptoJs.enc.Hex.stringify(hash).toUpperCase();
            return cryptoJs.enc.Base64.stringify(hash);
        };
        EncryptionService.prototype.encryptAES = function (secretKey, message) {
            var iv = cryptoJs.lib.WordArray.random(this.ivSize / 8);
            var key = cryptoJs.enc.Utf8.parse(secretKey);
            var encrypted = cryptoJs.AES.encrypt(message, key, {
                iv: iv,
                padding: cryptoJs.pad.Pkcs7,
                mode: cryptoJs.mode.CBC,
            });
            var encryptMessage = iv.toString() + encrypted.toString();
            return encryptMessage;
        };
        EncryptionService.prototype.decryptAES = function (secretKey, encryptMessage) {
            if (encryptMessage) {
                var iv = cryptoJs.enc.Hex.parse(encryptMessage.substr(0, 32));
                var key = cryptoJs.enc.Utf8.parse(secretKey);
                var encrypted = encryptMessage.substring(32);
                var decrypted = cryptoJs.AES.decrypt(encrypted, key, {
                    iv: iv,
                    padding: cryptoJs.pad.Pkcs7,
                    mode: cryptoJs.mode.CBC,
                });
                try {
                    return decrypted.toString(cryptoJs.enc.Utf8);
                }
                catch (error) {
                    return null;
                }
            }
            return null;
        };
        EncryptionService.decorators = [
            { type: core.Injectable }
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
                return rxjs.EMPTY;
            }
        };
        CustomPreloadingStrategy.decorators = [
            { type: core.Injectable }
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
        { provide: core.ErrorHandler, useClass: ErrorHandlerService },
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
                providers: __spread(CORE_PROVIDERS, core$1.TranslateModule.forRoot({
                    loader: {
                        provide: core$1.TranslateLoader,
                        useFactory: (createTranslateLoader),
                        deps: [http.HttpClient],
                    },
                }).providers),
            };
        };
        DoCoreModule.ctorParameters = function () { return [
            { type: DoCoreModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] }
        ]; };
        DoCoreModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        exports: [],
                        declarations: [],
                    },] }
        ];
        DoCoreModule.ctorParameters = function () { return [
            { type: DoCoreModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] }
        ]; };
        return DoCoreModule;
    }());

    var OAUTH_INFO = new core.InjectionToken('OAUTH INFO Resource');
    var USER_INFO = new core.InjectionToken('USER INFO Resource');

    var API = new core.InjectionToken('API');

    var ENVIRONMENT = new core.InjectionToken('Environment Config');

    var AUTH_INDEXED_DB = new core.InjectionToken('Auth IndexedDB Resource');
    var PROFILE_INDEXED_DB = new core.InjectionToken('Profile IndexedDB Resource');
    var SETTINGS_INDEXED_DB = new core.InjectionToken('Settings IndexedDB Resource');
    var PANIC_INDEXED_DB = new core.InjectionToken('Panic IndexedDB Resource');

    exports.API = API;
    exports.AUTH_INDEXED_DB = AUTH_INDEXED_DB;
    exports.AnalyticsService = AnalyticsService;
    exports.CORE_PROVIDERS = CORE_PROVIDERS;
    exports.CustomPreloadingStrategy = CustomPreloadingStrategy;
    exports.DoCoreModule = DoCoreModule;
    exports.ENVIRONMENT = ENVIRONMENT;
    exports.EncryptionService = EncryptionService;
    exports.Environment = Environment;
    exports.ErrorHandlerService = ErrorHandlerService;
    exports.HTTP_SERVICE = HTTP_SERVICE;
    exports.HostModel = HostModel;
    exports.HttpCommonService = HttpCommonService;
    exports.LayoutService = LayoutService;
    exports.LocaleModel = LocaleModel;
    exports.OAUTH_INFO = OAUTH_INFO;
    exports.PANIC_INDEXED_DB = PANIC_INDEXED_DB;
    exports.PROFILE_INDEXED_DB = PROFILE_INDEXED_DB;
    exports.RoleModel = RoleModel;
    exports.SETTINGS_INDEXED_DB = SETTINGS_INDEXED_DB;
    exports.SeoService = SeoService;
    exports.StateService = StateService;
    exports.TranslationService = TranslationService;
    exports.USER_INFO = USER_INFO;
    exports.UserData = UserData;
    exports.UserInfo = UserInfo;
    exports.createTranslateLoader = createTranslateLoader;
    exports.oauthInfo = oauthInfo;
    exports.oauthInfoModels = oauthInfoModels;
    exports.signatureHeader = signatureHeader;
    exports.ɵa = HttpAbstractService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=dongkap-do-core.umd.js.map
