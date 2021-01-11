(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@nebular/theme'), require('@angular/common'), require('@angular/forms'), require('@angular/common/http'), require('@ngx-translate/core'), require('ng-recaptcha'), require('@dongkap/do-core'), require('@dongkap/do-theme'), require('@dongkap/do-common'), require('@angular/router'), require('rxjs'), require('rxjs/operators'), require('@ng-idle/core'), require('@dongkap/do-storage')) :
    typeof define === 'function' && define.amd ? define('@dongkap/do-auth', ['exports', '@angular/core', '@nebular/theme', '@angular/common', '@angular/forms', '@angular/common/http', '@ngx-translate/core', 'ng-recaptcha', '@dongkap/do-core', '@dongkap/do-theme', '@dongkap/do-common', '@angular/router', 'rxjs', 'rxjs/operators', '@ng-idle/core', '@dongkap/do-storage'], factory) :
    (global = global || self, factory((global.dongkap = global.dongkap || {}, global.dongkap['do-auth'] = {}), global.ng.core, global['@nebular/theme'], global.ng.common, global.ng.forms, global.ng.common.http, global['@ngx-translate/core'], global['ng-recaptcha'], global['@dongkap/do-core'], global['@dongkap/do-theme'], global['@dongkap/do-common'], global.ng.router, global.rxjs, global.rxjs.operators, global['@ng-idle/core'], global['@dongkap/do-storage']));
}(this, (function (exports, core, theme, common, forms, http, core$1, ngRecaptcha, doCore, doTheme, doCommon, router, rxjs, operators, core$2, doStorage) { 'use strict';

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

    var AuthIndexedDBService = /** @class */ (function (_super) {
        __extends(AuthIndexedDBService, _super);
        function AuthIndexedDBService(injector) {
            return _super.call(this, injector, 'do-core', 1, '#do-auth') || this;
        }
        AuthIndexedDBService.prototype.getEnc = function (key, storeName) {
            return __awaiter(this, void 0, void 0, function () {
                var keyEncrypted;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
                            return [4 /*yield*/, this.$dbPromise];
                        case 1: return [2 /*return*/, ((_a.sent()).get(storeName ? storeName : '#do-auth', keyEncrypted)).then(function (value) {
                                return _this.enc.decryptAES(_this.oauthResource['aes_key'], value);
                            })];
                    }
                });
            });
        };
        AuthIndexedDBService.prototype.putEnc = function (key, val, storeName) {
            return __awaiter(this, void 0, void 0, function () {
                var keyEncrypted, valueEncrypted;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
                            valueEncrypted = this.enc.encryptAES(this.oauthResource['aes_key'], val);
                            return [4 /*yield*/, this.$dbPromise];
                        case 1: return [2 /*return*/, (_a.sent()).put(storeName ? storeName : '#do-auth', valueEncrypted, keyEncrypted)];
                    }
                });
            });
        };
        AuthIndexedDBService.prototype.removeEnc = function (key, storeName) {
            return __awaiter(this, void 0, void 0, function () {
                var keyEncrypted;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
                            return [4 /*yield*/, this.$dbPromise];
                        case 1: return [2 /*return*/, (_a.sent()).delete(storeName ? storeName : '#do-auth', keyEncrypted)];
                    }
                });
            });
        };
        AuthIndexedDBService.prototype.getOfEnc = function (key, storeName) {
            var result$ = new rxjs.Subject();
            this.getEnc(key, storeName).then(function (value) {
                result$.next(value);
            });
            return result$.asObservable();
        };
        AuthIndexedDBService.prototype.putOfEnc = function (key, val, storeName) {
            var result$ = new rxjs.Subject();
            this.putEnc(key, val, storeName).then(function (value) {
                result$.next(value);
            });
            return result$.asObservable();
        };
        AuthIndexedDBService.prototype.removeOfEnc = function (key, storeName) {
            var result$ = new rxjs.Subject();
            this.removeEnc(key, storeName).then(function (value) {
                result$.next(value);
            });
            return result$.asObservable();
        };
        AuthIndexedDBService.prototype.loginStorage = function (response) {
            var _this = this;
            doCore.oauthInfoModels.forEach(function (data) {
                if (response[data.key]) {
                    if (data.type === doCore.TypeDataOauth.OAUTH) {
                        if (data.enc) {
                            _this.putEnc(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                        }
                        else {
                            _this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                        }
                    }
                }
            });
        };
        AuthIndexedDBService.prototype.logout = function () {
            var _this = this;
            doCore.oauthInfoModels.forEach(function (data) {
                if (data.enc) {
                    if (data.type === doCore.TypeDataOauth.OAUTH) {
                        _this.removeEnc(data.key).then();
                    }
                }
            });
        };
        AuthIndexedDBService.prototype.isLogin = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getEnc(doCore.oauthInfo.access_token)];
                        case 1:
                            if (_a.sent())
                                return [2 /*return*/, true];
                            doCore.oauthInfoModels.forEach(function (data) {
                                _this.removeEnc(data.key).then();
                            });
                            return [2 /*return*/, false];
                    }
                });
            });
        };
        AuthIndexedDBService.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        AuthIndexedDBService.ɵprov = core.ɵɵdefineInjectable({ factory: function AuthIndexedDBService_Factory() { return new AuthIndexedDBService(core.ɵɵinject(core.INJECTOR)); }, token: AuthIndexedDBService, providedIn: "root" });
        AuthIndexedDBService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        AuthIndexedDBService.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        return AuthIndexedDBService;
    }(doStorage.IndexedDBService));

    var ProfileIndexedDBService = /** @class */ (function (_super) {
        __extends(ProfileIndexedDBService, _super);
        function ProfileIndexedDBService(injector) {
            return _super.call(this, injector, 'do-core', 1, '#do-profile') || this;
        }
        ProfileIndexedDBService.prototype.loginStorage = function (response) {
            var _this = this;
            doCore.oauthInfoModels.forEach(function (data) {
                if (response[data.key]) {
                    if (data.type === doCore.TypeDataOauth.PROFILE) {
                        _this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                    }
                }
            });
        };
        ProfileIndexedDBService.prototype.logout = function () {
            var _this = this;
            doCore.oauthInfoModels.forEach(function (data) {
                if (data.type === doCore.TypeDataOauth.PROFILE) {
                    _this.remove(data.key);
                }
            });
        };
        ProfileIndexedDBService.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        ProfileIndexedDBService.ɵprov = core.ɵɵdefineInjectable({ factory: function ProfileIndexedDBService_Factory() { return new ProfileIndexedDBService(core.ɵɵinject(core.INJECTOR)); }, token: ProfileIndexedDBService, providedIn: "root" });
        ProfileIndexedDBService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        ProfileIndexedDBService.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        return ProfileIndexedDBService;
    }(doStorage.IndexedDBService));

    var SettingsIndexedDBService = /** @class */ (function (_super) {
        __extends(SettingsIndexedDBService, _super);
        function SettingsIndexedDBService(injector) {
            var _this = _super.call(this, injector, 'do-core', 1, '#do-settings') || this;
            _this.translate = injector.get(core$1.TranslateService);
            return _this;
        }
        SettingsIndexedDBService.prototype.loginStorage = function (response) {
            var _this = this;
            doCore.oauthInfoModels.forEach(function (data) {
                if (response[data.key]) {
                    if (data.type === doCore.TypeDataOauth.SETTINGS) {
                        _this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                        if (data.key === 'locale') {
                            _this.translate.getTranslation(response[data.key]).subscribe(function (lang) {
                                _this.translate.use(response[data.key]);
                                _this.translate.setTranslation(response[data.key], lang, true);
                            });
                        }
                    }
                }
            });
        };
        SettingsIndexedDBService.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        SettingsIndexedDBService.ɵprov = core.ɵɵdefineInjectable({ factory: function SettingsIndexedDBService_Factory() { return new SettingsIndexedDBService(core.ɵɵinject(core.INJECTOR)); }, token: SettingsIndexedDBService, providedIn: "root" });
        SettingsIndexedDBService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        SettingsIndexedDBService.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        return SettingsIndexedDBService;
    }(doStorage.IndexedDBService));

    var AuthTokenService = /** @class */ (function () {
        function AuthTokenService(httpBaseService, oauthResource, apiPath, router, authIndexedDB, profileIndexedDB, settingsIndexedDB, idle) {
            var _this = this;
            this.httpBaseService = httpBaseService;
            this.oauthResource = oauthResource;
            this.apiPath = apiPath;
            this.router = router;
            this.authIndexedDB = authIndexedDB;
            this.profileIndexedDB = profileIndexedDB;
            this.settingsIndexedDB = settingsIndexedDB;
            this.idle = idle;
            this.destroy$ = new rxjs.Subject();
            idle.setIdle(oauthResource['session_idle']);
            idle.setTimeout(oauthResource['session_timeout']);
            idle.setInterrupts(core$2.DEFAULT_INTERRUPTSOURCES);
            idle.onTimeout.subscribe(function () {
                /* console.log('[DONGKAP] Session Timeout'); */
                _this.logout();
            });
            idle.onIdleEnd.subscribe(function () {
                /* console.log('[DONGKAP] Session Idle End'); */
            });
        }
        AuthTokenService.prototype.ngOnDestroy = function () {
            clearInterval(this.timer);
            this.destroy$.next(true);
            this.destroy$.next();
            this.destroy$.complete();
        };
        AuthTokenService.prototype.login = function (username, password) {
            var _this = this;
            this.authIndexedDB.logout();
            return this.httpBaseService.
                HTTP_BASE(this.apiPath['auth']['token'], this.getAuthBody(username, password).toString(), this.getAuthHeader())
                .pipe(operators.takeUntil(this.destroy$))
                .toPromise()
                .then(function (response) {
                _this.idle.setIdle(+response['expires_in']);
                _this.idle.watch();
                /* console.log('[DONGKAP] Session Idle Start'); */
                /* console.log('[DONGKAP] Session Timeout in ' + response['expires_in'] + ' seconds'); */
                _this.authIndexedDB.loginStorage(response);
                _this.profileIndexedDB.loginStorage(response);
                _this.settingsIndexedDB.loginStorage(response);
            });
        };
        AuthTokenService.prototype.refresh = function () {
            var _this = this;
            return this.getBodyRefresh().pipe(operators.switchMap(function (body) {
                return _this.httpBaseService.
                    HTTP_BASE(_this.apiPath['auth']['token'], body, _this.getAuthHeader())
                    .pipe(operators.takeUntil(_this.destroy$))
                    .pipe(operators.map(function (response) {
                    _this.idle.setIdle(response['expires_in']);
                    _this.authIndexedDB.logout();
                    _this.authIndexedDB.loginStorage(response);
                }));
            }));
        };
        AuthTokenService.prototype.logout = function () {
            var _this = this;
            this.timer = setInterval(function () {
                _this.doLogout();
            }, 5000);
            this.httpBaseService.HTTP_AUTH(this.apiPath['security']['revoke'])
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function () {
                _this.doLogout();
            });
        };
        AuthTokenService.prototype.doLogout = function () {
            this.authIndexedDB.logout();
            this.profileIndexedDB.logout();
            clearInterval(this.timer);
            this.idle.stop();
            this.router.navigate(['/auth']);
        };
        AuthTokenService.prototype.isLogin = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.authIndexedDB.isLogin()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        AuthTokenService.prototype.oauthHeaders = function (request) {
            var result$ = new rxjs.Subject();
            var httpHeaders = request.headers ? request.headers : new http.HttpHeaders();
            httpHeaders = httpHeaders.has(doCore.signatureHeader.authorization) ?
                httpHeaders.delete(doCore.signatureHeader.authorization) : httpHeaders;
            Promise.all([
                this.authIndexedDB.getEnc(doCore.oauthInfo.token_type),
                this.authIndexedDB.getEnc(doCore.oauthInfo.access_token)
            ])
                .then(function (value) {
                httpHeaders = httpHeaders.set(doCore.signatureHeader.authorization, value[0] + ' ' + value[1]);
                result$.next(request.clone({ headers: httpHeaders }));
            });
            return result$.asObservable();
        };
        AuthTokenService.prototype.getAuthHeader = function () {
            return new http.HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' +
                    btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                'Accept': 'application/json',
            });
        };
        AuthTokenService.prototype.getAuthBody = function (username, password) {
            var body = new URLSearchParams();
            body.append('client_id', this.oauthResource['client_id']);
            body.append('grant_type', this.oauthResource['grant_type']);
            body.append('username', username);
            body.append('password', password);
            return body;
        };
        AuthTokenService.prototype.getBodyRefresh = function () {
            var _this = this;
            var result$ = new rxjs.Subject();
            this.authIndexedDB.getEnc(doCore.oauthInfo.refresh_token).then(function (value) {
                var body = new URLSearchParams();
                body.append('client_id', _this.oauthResource['client_id']);
                body.append('grant_type', 'refresh_token');
                body.append('refresh_token', value);
                result$.next(body.toString());
            });
            return result$.asObservable();
        };
        AuthTokenService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.HTTP_SERVICE,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.OAUTH_INFO,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.API,] }] },
            { type: router.Router },
            { type: AuthIndexedDBService },
            { type: ProfileIndexedDBService },
            { type: SettingsIndexedDBService },
            { type: core$2.Idle }
        ]; };
        AuthTokenService.decorators = [
            { type: core.Injectable }
        ];
        AuthTokenService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.HTTP_SERVICE,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.OAUTH_INFO,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.API,] }] },
            { type: router.Router },
            { type: AuthIndexedDBService },
            { type: ProfileIndexedDBService },
            { type: SettingsIndexedDBService },
            { type: core$2.Idle }
        ]; };
        return AuthTokenService;
    }());

    var AuthGuardService = /** @class */ (function () {
        function AuthGuardService(router, authTokenService, authService) {
            this.router = router;
            this.authTokenService = authTokenService;
            this.authService = authService;
        }
        AuthGuardService.prototype.canActivate = function (route, state) {
            var _this = this;
            var result$ = new rxjs.Subject();
            this.authTokenService.isLogin().then(function (value) {
                result$.next(value);
                if (!value) {
                    _this.router.navigate(['/auth']);
                }
                else {
                    if (state.url !== '/auth/logout')
                        _this.authService.loadPhotoUser();
                }
            });
            return result$.asObservable();
        };
        AuthGuardService.ctorParameters = function () { return [
            { type: router.Router },
            { type: AuthTokenService },
            { type: doCore.UserInfo, decorators: [{ type: core.Inject, args: [doCore.USER_INFO,] }] }
        ]; };
        AuthGuardService.decorators = [
            { type: core.Injectable }
        ];
        AuthGuardService.ctorParameters = function () { return [
            { type: router.Router },
            { type: AuthTokenService },
            { type: doCore.UserInfo, decorators: [{ type: core.Inject, args: [doCore.USER_INFO,] }] }
        ]; };
        return AuthGuardService;
    }());

    var UnauthorizeGuardService = /** @class */ (function () {
        function UnauthorizeGuardService(router, authTokenService) {
            this.router = router;
            this.authTokenService = authTokenService;
        }
        UnauthorizeGuardService.prototype.canActivate = function (route, state) {
            var _this = this;
            var result$ = new rxjs.Subject();
            this.authTokenService.isLogin().then(function (value) {
                result$.next(!value);
                if (value) {
                    _this.router.navigate(['/app']);
                }
            });
            return result$.asObservable();
        };
        UnauthorizeGuardService.ctorParameters = function () { return [
            { type: router.Router },
            { type: AuthTokenService }
        ]; };
        UnauthorizeGuardService.decorators = [
            { type: core.Injectable }
        ];
        UnauthorizeGuardService.ctorParameters = function () { return [
            { type: router.Router },
            { type: AuthTokenService }
        ]; };
        return UnauthorizeGuardService;
    }());

    var AuthGuardChildService = /** @class */ (function () {
        function AuthGuardChildService(router, authTokenService, enc, storage) {
            this.router = router;
            this.authTokenService = authTokenService;
            this.enc = enc;
            this.storage = storage;
        }
        AuthGuardChildService.prototype.canActivateChild = function (route, state) {
            var _this = this;
            var result$ = new rxjs.Subject();
            this.authTokenService.isLogin().then(function (value) {
                result$.next(value);
                if (route.data) {
                    Promise.all([
                        _this.storage.getEnc('menus'),
                        _this.storage.getEnc('extras'),
                    ]).then(function (strg) {
                        if (!(strg[0].includes(route.data['code']) || strg[1].includes(route.data['code']))) {
                            _this.router.navigate(['/app/home']);
                        }
                        return result$.asObservable();
                    });
                }
                if (!value) {
                    _this.router.navigate(['/auth']);
                }
            });
            return result$.asObservable();
        };
        AuthGuardChildService.ctorParameters = function () { return [
            { type: router.Router },
            { type: AuthTokenService },
            { type: doCore.EncryptionService },
            { type: AuthIndexedDBService }
        ]; };
        AuthGuardChildService.decorators = [
            { type: core.Injectable }
        ];
        AuthGuardChildService.ctorParameters = function () { return [
            { type: router.Router },
            { type: AuthTokenService },
            { type: doCore.EncryptionService },
            { type: AuthIndexedDBService }
        ]; };
        return AuthGuardChildService;
    }());

    var TermsConditionsComponent = /** @class */ (function () {
        function TermsConditionsComponent(ref) {
            this.ref = ref;
            this.action = 'Agree';
        }
        TermsConditionsComponent.prototype.submit = function () {
            this.ref.close(true);
        };
        TermsConditionsComponent.ctorParameters = function () { return [
            { type: theme.NbDialogRef }
        ]; };
        TermsConditionsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-terms-conditions',
                        template: "<nb-card [size]=\"'medium'\">\n  <nb-card-header>\n    <h2>\n      <strong>\n        {{ 'header.terms-conditions' | translate }}\n      </strong>\n    </h2>\n  </nb-card-header>\n  <nb-card-body>\n    <div [innerHTML]=\"content\"></div>\n  </nb-card-body>\n  <nb-card-footer>\n    <button\n      type=\"submit\"\n      status=\"primary\"\n      size=\"large\"\n      class=\"terms-button\"\n      (click)=\"submit()\"\n      nbButton>\n      {{ action | translate }}\n    </button>\n  </nb-card-footer>\n</nb-card>\n",
                        styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.terms-button{width:100%}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.terms-button{width:100%}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.terms-button{width:100%}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.terms-button{width:100%}@media (max-width:767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.terms-button{font-size:.6rem}.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.terms-button{font-size:.6rem}.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.terms-button{font-size:.6rem}.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.terms-button{font-size:.6rem}}"]
                    },] }
        ];
        TermsConditionsComponent.ctorParameters = function () { return [
            { type: theme.NbDialogRef }
        ]; };
        TermsConditionsComponent.propDecorators = {
            content: [{ type: core.Input }],
            action: [{ type: core.Input }]
        };
        return TermsConditionsComponent;
    }());

    var LoginPageComponent = /** @class */ (function () {
        function LoginPageComponent(router, dialogService, translate, authTokenService, apiPath, httpBaseService, oauthResource, route) {
            this.router = router;
            this.dialogService = dialogService;
            this.translate = translate;
            this.authTokenService = authTokenService;
            this.apiPath = apiPath;
            this.httpBaseService = httpBaseService;
            this.oauthResource = oauthResource;
            this.buttonLogin = false;
            this.progressBar = 25;
            this.destroy$ = new rxjs.Subject();
            this.form = new forms.FormGroup({
                username: new forms.FormControl(),
                password: new forms.FormControl(),
            });
            this.urlAuthorizeGoogle = this.httpBaseService.API(this.apiPath['auth']['authorize']) +
                '/google?redirect_uri=' +
                (document.getElementsByTagName('base')[0].href + "auth/callback");
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
        LoginPageComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        LoginPageComponent.prototype.login = function () {
            var _this = this;
            if (!this.form.invalid) {
                document.querySelectorAll('.pace-done').forEach(function (pace) {
                    pace.className = pace.className.replace('pace-done pace-done', 'pace-running');
                    pace.className = pace.className.replace('pace-done', 'pace-running');
                });
                document.querySelectorAll('.pace-inactive').forEach(function (pace) {
                    pace.className = pace.className.replace('pace-inactive pace-inactive', 'pace-active');
                    pace.className = pace.className.replace('pace-inactive', 'pace-active');
                });
                var progressDOM_1 = document.getElementsByClassName('pace-progress').item(0);
                if (this.progressBar < 35) {
                    this.progressBar = 35;
                    progressDOM_1.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                    progressDOM_1.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                    progressDOM_1.getAttributeNode('data-progress').value = this.progressBar.toString();
                }
                this.buttonLogin = true;
                this.authTokenService.login(this.form.get('username').value, this.form.get('password').value)
                    .then(function () {
                    _this.responseError = null;
                    _this.progressBar = 90;
                    progressDOM_1.style.transform = 'translate3d(' + _this.progressBar + '%, 0px, 0px)';
                    progressDOM_1.getAttributeNode('data-progress-text').value = _this.progressBar + '%';
                    progressDOM_1.getAttributeNode('data-progress').value = _this.progressBar.toString();
                    _this.progressBar = 0;
                    _this.router.navigate(['/app/home']);
                })
                    .catch(function (error) {
                    if (!(error instanceof http.HttpErrorResponse)) {
                        var response = error;
                        _this.responseError = response.respStatusMessage[response.respStatusCode];
                    }
                    _this.buttonLogin = false;
                    _this.progressBar = 85;
                    progressDOM_1.style.transform = 'translate3d(' + _this.progressBar + '%, 0px, 0px)';
                    progressDOM_1.getAttributeNode('data-progress-text').value = _this.progressBar + '%';
                    progressDOM_1.getAttributeNode('data-progress').value = _this.progressBar.toString();
                    document.querySelectorAll('.pace-running').forEach(function (pace) {
                        pace.className = pace.className.replace('pace-running', 'pace-done');
                    });
                    document.querySelectorAll('.pace-active').forEach(function (pace) {
                        pace.className = pace.className.replace('pace-active', 'pace-inactive');
                    });
                    _this.progressBar = 0;
                });
                if (this.progressBar >= 35 && this.progressBar < 65) {
                    this.progressBar = 65;
                    progressDOM_1.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                    progressDOM_1.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                    progressDOM_1.getAttributeNode('data-progress').value = this.progressBar.toString();
                }
            }
        };
        Object.defineProperty(LoginPageComponent.prototype, "hasErrorUsername", {
            get: function () {
                return (this.form.controls['username'] &&
                    this.form.controls['username'].invalid &&
                    this.form.controls['username'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoginPageComponent.prototype, "hasSuccessUsername", {
            get: function () {
                return (this.form.controls['username'] &&
                    this.form.controls['username'].valid &&
                    this.form.controls['username'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoginPageComponent.prototype, "hasErrorPassword", {
            get: function () {
                return (this.form.controls['password'] &&
                    this.form.controls['password'].invalid &&
                    this.form.controls['password'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoginPageComponent.prototype, "hasSuccessPassword", {
            get: function () {
                return (this.form.controls['password'] &&
                    this.form.controls['password'].valid &&
                    this.form.controls['password'].touched);
            },
            enumerable: false,
            configurable: true
        });
        LoginPageComponent.prototype.onClickTermsConditions = function () {
            var _this = this;
            var data = {
                'parameterCode': 'TERMS_CONDITIONS.DONGKAP'
            };
            var httpHeaders = new http.HttpHeaders({
                'Authorization': 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                'Content-Type': 'application/json',
                'Accept-Language': this.translate.currentLang,
            });
            this.httpBaseService.HTTP_BASE(this.apiPath['openapi']['parameter'], data, httpHeaders)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                _this.dialogService.open(TermsConditionsComponent, {
                    context: {
                        content: response['parameterValue'],
                        action: 'Close',
                    },
                });
            });
        };
        LoginPageComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: theme.NbDialogService },
            { type: core$1.TranslateService },
            { type: AuthTokenService },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.API,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.HTTP_SERVICE,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.OAUTH_INFO,] }] },
            { type: router.ActivatedRoute }
        ]; };
        LoginPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-login-page',
                        template: "<h1 id=\"title\" class=\"title\">{{ 'Login' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.login' | translate }}</p>\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.login' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError | translate }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"login()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\">{{ 'message.username-login' | translate }} :</label>\n    <input [formControlName]=\"'username'\"\n          [required]=\"true\"\n          [ngClass]=\"{\n            'status-danger': hasErrorUsername,\n            'status-success': hasSuccessUsername\n          }\"\n          name=\"username\"\n          id=\"inputUsername\"\n          placeholder=\"{{ 'message.username-login-placeholder' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"1\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorUsername\">\n      <span class=\"caption status-danger\">{{'error.username-login' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <span class=\"label-with-link\">\n      <label class=\"label\">{{ 'Password' | translate }} :</label>\n      <a class=\"forgot-password caption-2\" routerLink=\"/auth/forgot-password\" tabindex=\"-1\">{{ 'Forgot Password' | translate}}?</a>\n    </span>\n    <input [formControlName]=\"'password'\"\n          [required]=\"true\"\n          [ngClass]=\"{\n            'status-danger': hasErrorPassword,\n            'status-success': hasSuccessPassword\n          }\"\n          name=\"password\"\n          type=\"password\"\n          id=\"inputPassword\"\n          placeholder=\"{{ 'Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"2\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorPassword\">\n      <span class=\"caption status-danger\">{{ 'error.password' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"form.invalid || buttonLogin\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"form.invalid || buttonLogin\">\n    {{ 'Login' | translate }}\n  </button>\n</form>\n\n<section *ngIf=\"socialLinks && socialLinks.length > 0\" class=\"links\" aria-label=\"Social sign in\">\n  {{ 'message.login-footer-social' | translate}}:\n  <div class=\"socials\">\n    <ng-container *ngFor=\"let socialLink of socialLinks\">\n      <a *ngIf=\"socialLink.link\"\n         [routerLink]=\"socialLink.link\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n      <a *ngIf=\"socialLink.url\"\n         [attr.href]=\"socialLink.url\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n    </ng-container>\n  </div>\n</section>\n\n<section class=\"another-action\" aria-label=\"Register\">\n  {{ 'message.login-footer' | translate}} <a class=\"text-link\" routerLink=\"/auth/register\">{{ 'Register' | translate}}</a>\n</section>\n\n<section class=\"another-action\" aria-label=\"Terms and Conditions\">\n  <span class=\"terms-conditions\" (click)=\"onClickTermsConditions()\" tabindex=\"-1\">{{ 'message.terms-conditions' | translate}}</span>\n</section>\n",
                        styles: [".terms-conditions{color:#36f;text-decoration:underline;font-size:inherit;font-style:inherit;font-weight:inherit;line-height:inherit;cursor:pointer}.terms-conditions:hover{color:#598bff}"]
                    },] }
        ];
        LoginPageComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: theme.NbDialogService },
            { type: core$1.TranslateService },
            { type: AuthTokenService },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.API,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.HTTP_SERVICE,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.OAUTH_INFO,] }] },
            { type: router.ActivatedRoute }
        ]; };
        return LoginPageComponent;
    }());

    var LogoutComponent = /** @class */ (function () {
        function LogoutComponent(authTokenService) {
            this.authTokenService = authTokenService;
            this.authTokenService.logout();
        }
        LogoutComponent.ctorParameters = function () { return [
            { type: AuthTokenService }
        ]; };
        LogoutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-logout',
                        template: "<p class=\"sub-title\">{{ 'message.logout' | translate }}</p>\n<div class=\"spinner-area\" [nbSpinner]=\"true\" nbSpinnerSize=\"small\" nbSpinnerStatus=\"info\">",
                        styles: [".nb-theme-default :host .sub-title{margin:1rem}.nb-theme-default :host .spinner-area{height:22px}.nb-theme-default :host ::ng-deep nb-spinner{background:0 0!important}.nb-theme-dark :host .sub-title{margin:1rem}.nb-theme-dark :host .spinner-area{height:22px}.nb-theme-dark :host ::ng-deep nb-spinner{background:0 0!important}.nb-theme-cosmic :host .sub-title{margin:1rem}.nb-theme-cosmic :host .spinner-area{height:22px}.nb-theme-cosmic :host ::ng-deep nb-spinner{background:0 0!important}.nb-theme-corporate :host .sub-title{margin:1rem}.nb-theme-corporate :host .spinner-area{height:22px}.nb-theme-corporate :host ::ng-deep nb-spinner{background:0 0!important}"]
                    },] }
        ];
        LogoutComponent.ctorParameters = function () { return [
            { type: AuthTokenService }
        ]; };
        return LogoutComponent;
    }());

    var AuthComponent = /** @class */ (function () {
        function AuthComponent(location) {
            this.location = location;
        }
        AuthComponent.prototype.back = function () {
            this.location.back();
            return false;
        };
        AuthComponent.prototype.ngOnDestroy = function () {
            this.alive = false;
        };
        AuthComponent.ctorParameters = function () { return [
            { type: common.Location }
        ]; };
        AuthComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-auth',
                        template: "<nb-layout>\n    <nb-layout-column>\n        <nb-card>\n            <nb-card-header>\n                <nav class=\"navigation\">\n                    <a href=\"#\" (click)=\"back()\" class=\"link back-link\" aria-label=\"Back\" tabindex=\"-1\">\n                        <nb-icon icon=\"arrow-back\"></nb-icon>\n                    </a>\n                </nav>\n            </nb-card-header>\n            <nb-card-body>\n                <do-auth-block>\n                    <router-outlet></router-outlet>\n                </do-auth-block>\n            </nb-card-body>\n        </nb-card>\n    </nb-layout-column>\n</nb-layout>",
                        styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host nb-card{margin:0;height:calc(100vh - 2 * 2.5rem)}:host .navigation .link{display:inline-block;text-decoration:none}:host .navigation .link nb-icon{font-size:2rem;vertical-align:middle}:host .links nb-icon{font-size:2.5rem}:host nb-card-body{display:flex;width:100%}:host do-auth-block{margin:auto}:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}@media (max-width:767.98px){:host nb-card{border-radius:0;height:100vh}:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}}"]
                    },] }
        ];
        AuthComponent.ctorParameters = function () { return [
            { type: common.Location }
        ]; };
        return AuthComponent;
    }());

    var RegisterPageComponent = /** @class */ (function () {
        function RegisterPageComponent(router, enc, toastr, dialogService, translate, httpBaseService, oauthResource, apiPath) {
            this.router = router;
            this.enc = enc;
            this.toastr = toastr;
            this.dialogService = dialogService;
            this.translate = translate;
            this.httpBaseService = httpBaseService;
            this.oauthResource = oauthResource;
            this.apiPath = apiPath;
            this.patternFullname = doCore.Pattern.FULLNAME;
            this.patternUsername = doCore.Pattern.USERNAME;
            this.patternEmail = doCore.Pattern.EMAIL;
            this.patternPassword = doCore.Pattern.PASSWORD_MEDIUM;
            this.minlengthUsername = 4;
            this.minlengthEmail = 5;
            this.form = new forms.FormGroup({
                fullname: new forms.FormControl(),
                username: new forms.FormControl(),
                email: new forms.FormControl(),
                password: new forms.FormControl(),
                confirmPassword: new forms.FormControl(),
                terms: new forms.FormControl(),
                recaptcha: new forms.FormControl(),
            });
            this.buttonRegister = false;
            this.progressBar = 25;
            this.isCheckUsername = true;
            this.isCheckEmail = true;
            this.destroy$ = new rxjs.Subject();
        }
        RegisterPageComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        RegisterPageComponent.prototype.register = function () {
            var _this = this;
            if (!this.form.invalid) {
                document.querySelectorAll('.pace-done').forEach(function (pace) {
                    pace.className = pace.className.replace('pace-done pace-done', 'pace-running');
                    pace.className = pace.className.replace('pace-done', 'pace-running');
                });
                document.querySelectorAll('.pace-inactive').forEach(function (pace) {
                    pace.className = pace.className.replace('pace-inactive pace-inactive', 'pace-active');
                    pace.className = pace.className.replace('pace-inactive', 'pace-active');
                });
                var progressDOM_1 = document.getElementsByClassName('pace-progress').item(0);
                if (this.progressBar < 35) {
                    this.progressBar = 35;
                    progressDOM_1.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                    progressDOM_1.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                    progressDOM_1.getAttributeNode('data-progress').value = this.progressBar.toString();
                }
                this.responseError = null;
                var data = this.form.value;
                data['password'] = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['password'].value);
                data['confirmPassword'] = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['confirmPassword'].value);
                var httpHeaders = new http.HttpHeaders({
                    'Authorization': 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                    'Content-Type': 'application/json',
                    'Accept-Language': this.translate.currentLang,
                });
                this.buttonRegister = true;
                this.httpBaseService.HTTP_BASE(this.apiPath['auth']['signup'], data, httpHeaders)
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function (response) {
                    if (response) {
                        _this.toastr.showI18n(response.respStatusMessage[response.respStatusCode]);
                        _this.progressBar = 90;
                        progressDOM_1.style.transform = 'translate3d(' + _this.progressBar + '%, 0px, 0px)';
                        progressDOM_1.getAttributeNode('data-progress-text').value = _this.progressBar + '%';
                        progressDOM_1.getAttributeNode('data-progress').value = _this.progressBar.toString();
                        _this.progressBar = 0;
                        if (response.respStatusCode === doCore.ResponseCode.OK_REGISTERED) {
                            _this.router.navigate(['/auth/login']);
                        }
                        else {
                            _this.form.reset();
                            _this.buttonRegister = false;
                        }
                    }
                    else {
                        _this.form.reset();
                        _this.buttonRegister = false;
                    }
                }, function (error) {
                    _this.buttonRegister = false;
                    _this.progressBar = 85;
                    progressDOM_1.style.transform = 'translate3d(' + _this.progressBar + '%, 0px, 0px)';
                    progressDOM_1.getAttributeNode('data-progress-text').value = _this.progressBar + '%';
                    progressDOM_1.getAttributeNode('data-progress').value = _this.progressBar.toString();
                    document.querySelectorAll('.pace-running').forEach(function (pace) {
                        pace.className = pace.className.replace('pace-running', 'pace-done');
                    });
                    document.querySelectorAll('.pace-active').forEach(function (pace) {
                        pace.className = pace.className.replace('pace-active', 'pace-inactive');
                    });
                    _this.progressBar = 0;
                    if (!(error instanceof http.HttpErrorResponse)) {
                        if (error['respStatusCode']) {
                            switch (error['respStatusCode']) {
                                case doCore.ResponseCode.ERR_SCR0005.toString():
                                    _this.form.controls['password'].setErrors({
                                        'invalid': true,
                                    });
                                    break;
                                case doCore.ResponseCode.ERR_SCR0011.toString():
                                    _this.form.controls['confirmPassword'].setErrors({
                                        'equal': true,
                                    });
                                    break;
                                default:
                                    break;
                            }
                            _this.responseError = error['respStatusMessage'][error['respStatusCode']];
                        }
                    }
                    else {
                    }
                });
            }
        };
        Object.defineProperty(RegisterPageComponent.prototype, "hasErrorFullname", {
            get: function () {
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
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RegisterPageComponent.prototype, "hasSuccessFullname", {
            get: function () {
                return (this.form.controls['fullname'] &&
                    this.form.controls['fullname'].valid &&
                    this.form.controls['fullname'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RegisterPageComponent.prototype, "hasErrorUsername", {
            get: function () {
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
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RegisterPageComponent.prototype, "hasSuccessUsername", {
            get: function () {
                return (this.form.controls['username'] &&
                    this.form.controls['username'].valid &&
                    this.form.controls['username'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RegisterPageComponent.prototype, "hasErrorEmail", {
            get: function () {
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
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RegisterPageComponent.prototype, "hasSuccessEmail", {
            get: function () {
                return (this.form.controls['email'] &&
                    this.form.controls['email'].valid &&
                    this.form.controls['email'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RegisterPageComponent.prototype, "hasErrorPassword", {
            get: function () {
                if (this.form.controls['password'].errors && this.form.controls['password'].invalid && this.form.controls['password'].touched) {
                    this.errorMsgPassword = 'error.pattern.Password';
                }
                else {
                    this.errorMsgPassword = null;
                }
                return (this.form.controls['password'] &&
                    this.form.controls['password'].invalid &&
                    this.form.controls['password'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RegisterPageComponent.prototype, "hasSuccessPassword", {
            get: function () {
                return (this.form.controls['password'] &&
                    this.form.controls['password'].valid &&
                    this.form.controls['password'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RegisterPageComponent.prototype, "hasErrorConfirmPassword", {
            get: function () {
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
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RegisterPageComponent.prototype, "hasSuccessConfirmPassword", {
            get: function () {
                return (this.form.controls['confirmPassword'] &&
                    this.form.controls['confirmPassword'].valid &&
                    this.form.controls['confirmPassword'].touched);
            },
            enumerable: false,
            configurable: true
        });
        RegisterPageComponent.prototype.onCheckedChange = function () {
            if (!this.form.controls['terms'].value) {
                this.form.controls['terms'].setValue(null);
            }
        };
        RegisterPageComponent.prototype.onClickTermsConditions = function () {
            var _this = this;
            var data = {
                'parameterCode': 'TERMS_CONDITIONS.DONGKAP'
            };
            var httpHeaders = new http.HttpHeaders({
                'Authorization': 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                'Content-Type': 'application/json',
                'Accept-Language': this.translate.currentLang,
            });
            this.httpBaseService.HTTP_BASE(this.apiPath['openapi']['parameter'], data, httpHeaders)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                _this.dialogService.open(TermsConditionsComponent, {
                    context: {
                        content: response['parameterValue'],
                    },
                })
                    .onClose.subscribe(function (terms) {
                    if (terms) {
                        _this.form.controls['terms'].setValue(true);
                    }
                });
            });
        };
        RegisterPageComponent.prototype.onKeyDownUsername = function (event) {
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
        };
        RegisterPageComponent.prototype.onKeyDownEmail = function (event) {
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
        };
        RegisterPageComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: doCore.EncryptionService },
            { type: doCommon.DoToastrService },
            { type: theme.NbDialogService },
            { type: core$1.TranslateService },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.HTTP_SERVICE,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.OAUTH_INFO,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.API,] }] }
        ]; };
        RegisterPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-register-page',
                        template: "<h1 id=\"title\" class=\"title\">{{ 'Register' | translate }}</h1>\n\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.register' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"register()\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-name\">{{ 'Full name' | translate }}* :</label>\n    <input [formControlName]=\"'fullname'\"\n          [required]=\"true\"\n          minlength=\"4\"\n          maxlength=\"50\"\n          [pattern]=\"patternFullname\"\n          [ngClass]=\"{\n            'status-danger': hasErrorFullname,\n            'status-success': hasSuccessFullname\n          }\"\n          name=\"fullname\"\n          id=\"inputFullname\"\n          placeholder=\"{{ 'Full name' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"1\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorFullname\">\n      <span class=\"caption status-danger\">{{errorMsgFullname | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-username\">{{ 'Username' | translate }}* :</label>\n    <input [formControlName]=\"'username'\"\n          [required]=\"true\"\n          minlength=\"5\"\n          maxlength=\"20\"\n          [pattern]=\"patternUsername\"\n          [ngClass]=\"{\n            'status-danger': hasErrorUsername,\n            'status-success': hasSuccessUsername\n          }\"\n          name=\"username\"\n          id=\"inputUsername\"\n          (keydown)=\"onKeyDownUsername($event)\"\n          placeholder=\"{{ 'Username' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"2\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorUsername\">\n      <span class=\"caption status-danger\">{{errorMsgUsername | translate:paramMsgUsername}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-email\">{{ 'Email' | translate }}* :</label>\n    <input [formControlName]=\"'email'\"\n          [required]=\"true\"\n          minlength=\"5\"\n          maxlength=\"50\"\n          [pattern]=\"patternEmail\"\n          [ngClass]=\"{\n            'status-danger': hasErrorEmail,\n            'status-success': hasSuccessEmail\n          }\"\n          name=\"email\"\n          id=\"inputEmail\"\n          (keydown)=\"onKeyDownEmail($event)\"\n          placeholder=\"{{ 'Email' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"3\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorEmail\">\n      <span class=\"caption status-danger\">{{errorMsgEmail | translate:paramMsgEmail}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-password\">{{ 'Password' | translate }}* :</label>\n    <input [formControlName]=\"'password'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [pattern]=\"patternPassword\"\n          [ngClass]=\"{\n            'status-danger': hasErrorPassword,\n            'status-success': hasSuccessPassword\n          }\"\n          name=\"password\"\n          type=\"password\"\n          id=\"inputPassword\"\n          placeholder=\"{{ 'Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"4\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-confirmpassword\">{{ 'Confirm Password' | translate }}* :</label>\n    <input [formControlName]=\"'confirmPassword'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [ngClass]=\"{\n            'status-danger': hasErrorConfirmPassword,\n            'status-success': hasSuccessConfirmPassword\n          }\"\n          name=\"confirmPassword\"\n          type=\"password\"\n          id=\"inputConfirmPassword\"\n          placeholder=\"{{ 'Confirm Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"5\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorConfirmPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgConfirmPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group accept-group\">\n    <div class=\"terms-row row\">\n      <nb-checkbox\n        name=\"terms\"\n        [formControlName]=\"'terms'\"\n        [required]=\"true\"\n        (change)=\"onCheckedChange()\">\n        {{ 'message.terms-conditions-label' | translate}}\n      </nb-checkbox>\n      <span class=\"terms-conditions\" (click)=\"onClickTermsConditions()\" tabindex=\"-1\"><strong>{{ 'message.terms-conditions' | translate}}</strong></span>\n    </div>\n  </div>\n\n  <div class=\"form-control-group\" style=\"transform:scale(0.7);transform-origin:0;\">\n    <re-captcha\n      [formControlName]=\"'recaptcha'\"\n      required>\n    </re-captcha>\n  </div>\n\n  <button [disabled]=\"!form.valid || buttonRegister\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"!form.valid || buttonRegister\">\n    {{ 'Register' | translate }}\n  </button>\n</form>\n\n<section class=\"another-action\" aria-label=\"Sign in\">\n  {{ 'message.register-footer' | translate}} <a class=\"text-link\" routerLink=\"/auth/login\" tabindex=\"-1\">{{ 'Login' | translate}}</a>\n</section>\n",
                        styles: [".terms-row{margin-left:0}.terms-conditions{padding:.1rem 0 0 .25rem;color:#36f;text-decoration:underline;font-size:inherit;font-style:inherit;font-weight:inherit;line-height:inherit;cursor:pointer}.terms-conditions:hover{color:#598bff}"]
                    },] }
        ];
        RegisterPageComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: doCore.EncryptionService },
            { type: doCommon.DoToastrService },
            { type: theme.NbDialogService },
            { type: core$1.TranslateService },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.HTTP_SERVICE,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.OAUTH_INFO,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.API,] }] }
        ]; };
        return RegisterPageComponent;
    }());
    function confirmPasswordValidator(form) {
        return function (control) {
            if (form.controls) {
                if (form.controls['password'].value !== form.controls['confirmPassword'].value)
                    return { equal: true };
            }
            return null;
        };
    }
    function userValidator(oauthResource, httpBaseService, apiPath) {
        return function (control) {
            if (!control.valueChanges) {
                return rxjs.of(null);
            }
            else {
                return control.valueChanges.pipe(operators.debounceTime(500), operators.distinctUntilChanged(), operators.switchMap(function () {
                    var validatorSubject$ = new rxjs.Subject();
                    var httpHeaders = new http.HttpHeaders({
                        'Authorization': 'Basic ' + btoa(oauthResource['client_id'] + ':' + oauthResource['client_secret']),
                        'Content-Type': 'application/json',
                    });
                    var data = {
                        'user': control.value,
                    };
                    var dataValidator;
                    if (control.value) {
                        httpBaseService.HTTP_BASE(apiPath['auth']['check-user'], data, httpHeaders).subscribe(function (response) {
                            if (response['respStatusCode'] === doCore.ResponseCode.OK_SCR012.toString()) {
                                validatorSubject$.next(null);
                            }
                            else {
                                dataValidator = {
                                    error: true,
                                };
                                validatorSubject$.next(dataValidator);
                            }
                        }, function (error) {
                            if (!(error instanceof http.HttpErrorResponse)) {
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
                })).pipe(operators.first());
            }
        };
    }

    var RequestForgotPageComponent = /** @class */ (function () {
        function RequestForgotPageComponent(router, toastr, translate, httpBaseService, oauthResource, apiPath) {
            this.router = router;
            this.toastr = toastr;
            this.translate = translate;
            this.httpBaseService = httpBaseService;
            this.oauthResource = oauthResource;
            this.apiPath = apiPath;
            this.buttonForgotPassword = false;
            this.progressBar = 25;
            this.patternEmail = doCore.Pattern.EMAIL;
            this.form = new forms.FormGroup({
                email: new forms.FormControl(),
            });
            this.destroy$ = new rxjs.Subject();
        }
        RequestForgotPageComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        RequestForgotPageComponent.prototype.forgotPassword = function () {
            var _this = this;
            if (!this.form.invalid) {
                document.querySelectorAll('.pace-done').forEach(function (pace) {
                    pace.className = pace.className.replace('pace-done pace-done', 'pace-running');
                    pace.className = pace.className.replace('pace-done', 'pace-running');
                });
                document.querySelectorAll('.pace-inactive').forEach(function (pace) {
                    pace.className = pace.className.replace('pace-inactive pace-inactive', 'pace-active');
                    pace.className = pace.className.replace('pace-inactive', 'pace-active');
                });
                var progressDOM_1 = document.getElementsByClassName('pace-progress').item(0);
                if (this.progressBar < 35) {
                    this.progressBar = 35;
                    progressDOM_1.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                    progressDOM_1.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                    progressDOM_1.getAttributeNode('data-progress').value = this.progressBar.toString();
                }
                this.responseError = null;
                var urlForgotPassword = document.getElementsByTagName('base')[0].href + "auth/forgot-password";
                var data = {
                    'email': this.form.controls['email'].value,
                    'urlForgotPassword': urlForgotPassword,
                };
                var httpHeaders = new http.HttpHeaders({
                    'Authorization': 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                    'Content-Type': 'application/json',
                    'Accept-Language': this.translate.currentLang,
                });
                this.buttonForgotPassword = true;
                this.httpBaseService.HTTP_BASE(this.apiPath['auth']['request-forgot-password'], data, httpHeaders)
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function (response) {
                    if (response) {
                        _this.toastr.showI18n(response.respStatusMessage[response.respStatusCode]);
                        _this.progressBar = 90;
                        progressDOM_1.style.transform = 'translate3d(' + _this.progressBar + '%, 0px, 0px)';
                        progressDOM_1.getAttributeNode('data-progress-text').value = _this.progressBar + '%';
                        progressDOM_1.getAttributeNode('data-progress').value = _this.progressBar.toString();
                        _this.progressBar = 0;
                        if (response.respStatusCode === doCore.ResponseCode.OK_REQUEST_FORGOT_PASSWORD) {
                            _this.router.navigate(['/auth/login']);
                        }
                        else {
                            _this.form.reset();
                            _this.buttonForgotPassword = false;
                        }
                    }
                    else {
                        _this.form.reset();
                        _this.buttonForgotPassword = false;
                    }
                }, function (error) {
                    _this.buttonForgotPassword = false;
                    _this.progressBar = 85;
                    progressDOM_1.style.transform = 'translate3d(' + _this.progressBar + '%, 0px, 0px)';
                    progressDOM_1.getAttributeNode('data-progress-text').value = _this.progressBar + '%';
                    progressDOM_1.getAttributeNode('data-progress').value = _this.progressBar.toString();
                    document.querySelectorAll('.pace-running').forEach(function (pace) {
                        pace.className = pace.className.replace('pace-running', 'pace-done');
                    });
                    document.querySelectorAll('.pace-active').forEach(function (pace) {
                        pace.className = pace.className.replace('pace-active', 'pace-inactive');
                    });
                    _this.progressBar = 0;
                    if (!(error instanceof http.HttpErrorResponse)) {
                        if (error['respStatusCode']) {
                            _this.responseError = error['respStatusMessage'][error['respStatusCode']];
                        }
                    }
                    else {
                    }
                });
            }
        };
        Object.defineProperty(RequestForgotPageComponent.prototype, "hasErrorEmail", {
            get: function () {
                return (this.form.controls['email'] &&
                    this.form.controls['email'].invalid &&
                    this.form.controls['email'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RequestForgotPageComponent.prototype, "hasSuccessEmail", {
            get: function () {
                return (this.form.controls['email'] &&
                    this.form.controls['email'].valid &&
                    this.form.controls['email'].touched);
            },
            enumerable: false,
            configurable: true
        });
        RequestForgotPageComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: doCommon.DoToastrService },
            { type: core$1.TranslateService },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.HTTP_SERVICE,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.OAUTH_INFO,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.API,] }] }
        ]; };
        RequestForgotPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-request-forgot-page',
                        template: "<h1 id=\"title\" class=\"title\">{{ 'Forgot Password' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.forgot-password' | translate }}</p>\n\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.forgot' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"forgotPassword()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-name\">{{ 'message.email-forgot-password' | translate }} :</label>\n    <input [formControlName]=\"'email'\"\n          [required]=\"true\"\n          minlength=\"4\"\n          maxlength=\"50\"\n          [pattern]=\"patternEmail\"\n          [ngClass]=\"{\n            'status-danger': hasErrorEmail,\n            'status-success': hasSuccessEmail\n          }\"\n          name=\"email\"\n          id=\"inputEmail\"\n          placeholder=\"{{ 'Email' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"1\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorEmail\">\n      <span class=\"caption status-danger\">{{'error.pattern.email' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"form.invalid || buttonForgotPassword\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"form.invalid || buttonForgotPassword\">\n    {{ 'Send' | translate }}\n  </button>\n</form>\n\n<section class=\"sign-in-or-up\" aria-label=\"Sign in or sign up\">\n  <p><a class=\"text-link\" routerLink=\"/auth/login\">{{ 'message.forgot-password-link' | translate}}</a></p>\n  <p><a routerLink=\"/auth/register\" class=\"text-link\">{{ 'Register' | translate}}</a></p>\n</section>\n",
                        styles: [""]
                    },] }
        ];
        RequestForgotPageComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: doCommon.DoToastrService },
            { type: core$1.TranslateService },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.HTTP_SERVICE,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.OAUTH_INFO,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.API,] }] }
        ]; };
        return RequestForgotPageComponent;
    }());

    var ForgotPageComponent = /** @class */ (function () {
        function ForgotPageComponent(router, route, toastr, translate, enc, httpBaseService, oauthResource, apiPath) {
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
            this.patternPassword = doCore.Pattern.PASSWORD_MEDIUM;
            this.form = new forms.FormGroup({
                newPassword: new forms.FormControl(),
                confirmPassword: new forms.FormControl(),
            });
            this.destroy$ = new rxjs.Subject();
            if (this.route.snapshot.params['id'] !== null && this.route.snapshot.params['code'] !== null) {
                this.verificationId = this.route.snapshot.params['id'];
                this.verificationCode = this.route.snapshot.params['code'];
            }
            else {
                this.router.navigate(['/auth/login']);
            }
        }
        ForgotPageComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        ForgotPageComponent.prototype.forgotPassword = function () {
            var _this = this;
            if (!this.form.invalid) {
                document.querySelectorAll('.pace-done').forEach(function (pace) {
                    pace.className = pace.className.replace('pace-done pace-done', 'pace-running');
                    pace.className = pace.className.replace('pace-done', 'pace-running');
                });
                document.querySelectorAll('.pace-inactive').forEach(function (pace) {
                    pace.className = pace.className.replace('pace-inactive pace-inactive', 'pace-active');
                    pace.className = pace.className.replace('pace-inactive', 'pace-active');
                });
                var progressDOM_1 = document.getElementsByClassName('pace-progress').item(0);
                if (this.progressBar < 35) {
                    this.progressBar = 35;
                    progressDOM_1.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                    progressDOM_1.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                    progressDOM_1.getAttributeNode('data-progress').value = this.progressBar.toString();
                }
                this.responseError = null;
                var newPassword = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['newPassword'].value);
                var confirmPassword = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['confirmPassword'].value);
                var data = {
                    'verificationId': this.verificationId,
                    'verificationCode': this.verificationCode,
                    'newPassword': newPassword,
                    'confirmPassword': confirmPassword,
                };
                var httpHeaders = new http.HttpHeaders({
                    'Authorization': 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                    'Content-Type': 'application/json',
                    'Accept-Language': this.translate.currentLang,
                });
                this.buttonForgotPassword = true;
                this.httpBaseService.HTTP_BASE(this.apiPath['auth']['forgot-password'], data, httpHeaders)
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function (response) {
                    if (response) {
                        _this.toastr.showI18n(response.respStatusMessage[response.respStatusCode]);
                        _this.progressBar = 90;
                        progressDOM_1.style.transform = 'translate3d(' + _this.progressBar + '%, 0px, 0px)';
                        progressDOM_1.getAttributeNode('data-progress-text').value = _this.progressBar + '%';
                        progressDOM_1.getAttributeNode('data-progress').value = _this.progressBar.toString();
                        _this.progressBar = 0;
                        if (response.respStatusCode === doCore.ResponseCode.OK_FORGOT_PASSWORD) {
                            _this.router.navigate(['/auth/login']);
                        }
                        else {
                            _this.form.reset();
                            _this.buttonForgotPassword = false;
                        }
                    }
                    else {
                        _this.form.reset();
                        _this.buttonForgotPassword = false;
                    }
                }, function (error) {
                    _this.buttonForgotPassword = false;
                    _this.progressBar = 85;
                    progressDOM_1.style.transform = 'translate3d(' + _this.progressBar + '%, 0px, 0px)';
                    progressDOM_1.getAttributeNode('data-progress-text').value = _this.progressBar + '%';
                    progressDOM_1.getAttributeNode('data-progress').value = _this.progressBar.toString();
                    document.querySelectorAll('.pace-running').forEach(function (pace) {
                        pace.className = pace.className.replace('pace-running', 'pace-done');
                    });
                    document.querySelectorAll('.pace-active').forEach(function (pace) {
                        pace.className = pace.className.replace('pace-active', 'pace-inactive');
                    });
                    _this.progressBar = 0;
                    if (!(error instanceof http.HttpErrorResponse)) {
                        if (error['respStatusCode']) {
                            _this.responseError = error['respStatusMessage'][error['respStatusCode']];
                        }
                    }
                });
            }
        };
        Object.defineProperty(ForgotPageComponent.prototype, "hasErrorNewPassword", {
            get: function () {
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
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ForgotPageComponent.prototype, "hasSuccessNewPassword", {
            get: function () {
                return (this.form.controls['newPassword'] &&
                    this.form.controls['newPassword'].valid &&
                    this.form.controls['newPassword'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ForgotPageComponent.prototype, "hasErrorConfirmPassword", {
            get: function () {
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
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ForgotPageComponent.prototype, "hasSuccessConfirmPassword", {
            get: function () {
                return (this.form.controls['confirmPassword'] &&
                    this.form.controls['confirmPassword'].valid &&
                    this.form.controls['confirmPassword'].touched);
            },
            enumerable: false,
            configurable: true
        });
        ForgotPageComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: doCommon.DoToastrService },
            { type: core$1.TranslateService },
            { type: doCore.EncryptionService },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.HTTP_SERVICE,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.OAUTH_INFO,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.API,] }] }
        ]; };
        ForgotPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-forgot-page',
                        template: "<h1 id=\"title\" class=\"title\">{{ 'Reset Password' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.reset-password' | translate }}</p>\n\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.reset-password' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"forgotPassword()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-newpassword\">{{ 'New Password' | translate }}* :</label>\n    <input [formControlName]=\"'newPassword'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [pattern]=\"patternPassword\"\n          [ngClass]=\"{\n            'status-danger': hasErrorNewPassword,\n            'status-success': hasSuccessNewPassword\n          }\"\n          name=\"newPassword\"\n          type=\"password\"\n          id=\"inputNewPassword\"\n          placeholder=\"{{ 'New Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"4\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorNewPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgNewPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-confirmpassword\">{{ 'Confirm Password' | translate }}* :</label>\n    <input [formControlName]=\"'confirmPassword'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [ngClass]=\"{\n            'status-danger': hasErrorConfirmPassword,\n            'status-success': hasSuccessConfirmPassword\n          }\"\n          name=\"confirmPassword\"\n          type=\"password\"\n          id=\"inputConfirmPassword\"\n          placeholder=\"{{ 'Confirm Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"5\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorConfirmPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgConfirmPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"form.invalid || buttonForgotPassword\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"form.invalid || buttonForgotPassword\">\n    {{ 'Reset Password' | translate }}\n  </button>\n</form>\n\n<section class=\"another-action\" aria-label=\"Sign in\">\n  {{ 'message.reset-password-footer' | translate}} <a class=\"text-link\" routerLink=\"/auth/login\" tabindex=\"-1\">{{ 'Login' | translate}}</a>\n</section>\n",
                        styles: [""]
                    },] }
        ];
        ForgotPageComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: doCommon.DoToastrService },
            { type: core$1.TranslateService },
            { type: doCore.EncryptionService },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.HTTP_SERVICE,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.OAUTH_INFO,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.API,] }] }
        ]; };
        return ForgotPageComponent;
    }());
    function confirmPasswordValidator$1(form) {
        return function (control) {
            if (form.controls) {
                if (form.controls['newPassword'].value !== form.controls['confirmPassword'].value)
                    return { equal: true };
            }
            return null;
        };
    }

    ;
    var OAuth2CallbackComponent = /** @class */ (function () {
        function OAuth2CallbackComponent(router, route, httpBaseService, oauthResource, apiPath, authIndexedDB, profileIndexedDB, settingsIndexedDB, idle) {
            this.router = router;
            this.httpBaseService = httpBaseService;
            this.oauthResource = oauthResource;
            this.apiPath = apiPath;
            this.authIndexedDB = authIndexedDB;
            this.profileIndexedDB = profileIndexedDB;
            this.settingsIndexedDB = settingsIndexedDB;
            this.idle = idle;
            this.destroy$ = new rxjs.Subject();
            if (route.snapshot.queryParams['access_token']) {
                this.extractToken(route.snapshot.queryParams['access_token']);
            }
            else if (route.snapshot.queryParams['error']) {
                this.router.navigate(['/auth'], { queryParams: { error: route.snapshot.queryParams['error'] } });
            }
        }
        OAuth2CallbackComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.next();
            this.destroy$.complete();
        };
        OAuth2CallbackComponent.prototype.extractToken = function (accessToken) {
            var _this = this;
            return this.httpBaseService.
                HTTP_BASE(this.apiPath['auth']['extract-token'], this.getAuthBody(accessToken).toString(), this.getAuthHeader())
                .pipe(operators.takeUntil(this.destroy$))
                .toPromise()
                .then(function (response) {
                _this.idle.setIdle(+response['expires_in']);
                _this.idle.watch();
                /* console.log('[DONGKAP] Session Idle Start'); */
                /* console.log('[DONGKAP] Session Timeout in ' + response['expires_in'] + ' seconds'); */
                _this.authIndexedDB.loginStorage(response);
                _this.profileIndexedDB.loginStorage(response);
                _this.settingsIndexedDB.loginStorage(response);
                _this.router.navigate(['/app/home']);
            })
                .catch(function (error) {
                _this.router.navigate(['/auth']);
            });
        };
        OAuth2CallbackComponent.prototype.getAuthBody = function (accessToken) {
            var body = new URLSearchParams();
            body.append('access_token', accessToken);
            return body;
        };
        OAuth2CallbackComponent.prototype.getAuthHeader = function () {
            return new http.HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' +
                    btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                'Accept': 'application/json',
            });
        };
        OAuth2CallbackComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.HTTP_SERVICE,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.OAUTH_INFO,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.API,] }] },
            { type: AuthIndexedDBService },
            { type: ProfileIndexedDBService },
            { type: SettingsIndexedDBService },
            { type: core$2.Idle }
        ]; };
        OAuth2CallbackComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-oauth2-callback',
                        template: "<p class=\"sub-title\">{{ 'message.callback' | translate }}</p>\n<div class=\"spinner-area\" [nbSpinner]=\"true\" nbSpinnerSize=\"small\" nbSpinnerStatus=\"info\">",
                        styles: [".nb-theme-default :host .sub-title{margin:1rem}.nb-theme-default :host .spinner-area{height:22px}.nb-theme-default :host ::ng-deep nb-spinner{background:0 0!important}.nb-theme-dark :host .sub-title{margin:1rem}.nb-theme-dark :host .spinner-area{height:22px}.nb-theme-dark :host ::ng-deep nb-spinner{background:0 0!important}.nb-theme-cosmic :host .sub-title{margin:1rem}.nb-theme-cosmic :host .spinner-area{height:22px}.nb-theme-cosmic :host ::ng-deep nb-spinner{background:0 0!important}.nb-theme-corporate :host .sub-title{margin:1rem}.nb-theme-corporate :host .spinner-area{height:22px}.nb-theme-corporate :host ::ng-deep nb-spinner{background:0 0!important}"]
                    },] }
        ];
        OAuth2CallbackComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.HTTP_SERVICE,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.OAUTH_INFO,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.API,] }] },
            { type: AuthIndexedDBService },
            { type: ProfileIndexedDBService },
            { type: SettingsIndexedDBService },
            { type: core$2.Idle }
        ]; };
        return OAuth2CallbackComponent;
    }());

    var routes = [{
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
    var DoAuthRoutingModule = /** @class */ (function () {
        function DoAuthRoutingModule() {
        }
        DoAuthRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forChild(routes)],
                        exports: [router.RouterModule],
                    },] }
        ];
        return DoAuthRoutingModule;
    }());

    var AuthBlockComponent = /** @class */ (function () {
        function AuthBlockComponent() {
        }
        AuthBlockComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-auth-block',
                        template: "\n    <ng-content></ng-content>\n  ",
                        styles: [":host{display:block;width:100%;max-width:35rem}:host ::ng-deep form{width:100%}:host ::ng-deep .label{display:block;margin-bottom:.5rem}:host ::ng-deep .forgot-password{text-decoration:none;margin-bottom:.5rem}:host ::ng-deep .caption{margin-top:.5rem}:host ::ng-deep .alert{text-align:center}:host ::ng-deep .title{margin-top:0;margin-bottom:.75rem;text-align:center}:host ::ng-deep .sub-title{margin-bottom:2rem;text-align:center}:host ::ng-deep .form-control-group{margin-bottom:2rem}:host ::ng-deep .form-control-group.accept-group{display:flex;justify-content:space-between;margin:2rem 0}:host ::ng-deep .label-with-link{display:flex;justify-content:space-between}:host ::ng-deep .links{text-align:center;margin-top:1.75rem}:host ::ng-deep .links .socials{margin-top:1.5rem}:host ::ng-deep .links .socials a{margin:0 1rem;text-decoration:none;vertical-align:middle}:host ::ng-deep .links .socials a.with-icon{font-size:2rem}:host ::ng-deep .another-action{margin-top:2rem;text-align:center}:host ::ng-deep .sign-in-or-up{margin-top:2rem;display:flex;justify-content:space-between}:host ::ng-deep nb-alert .alert-message,:host ::ng-deep nb-alert .alert-title{margin:0 0 .5rem}:host ::ng-deep nb-alert .alert-message-list{list-style-type:none;padding:0;margin:0}"]
                    },] }
        ];
        return AuthBlockComponent;
    }());

    var DoLayoutAuthModule = /** @class */ (function () {
        function DoLayoutAuthModule() {
        }
        DoLayoutAuthModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            AuthComponent,
                            AuthBlockComponent,
                        ],
                        imports: [
                            theme.NbLayoutModule,
                            theme.NbCardModule,
                            theme.NbIconModule,
                            common.CommonModule,
                            http.HttpClientModule,
                            router.RouterModule,
                            doTheme.DoThemeModule,
                        ],
                        exports: [
                            AuthComponent,
                            AuthBlockComponent,
                        ],
                    },] }
        ];
        return DoLayoutAuthModule;
    }());

    var AuthSignatureService = /** @class */ (function () {
        function AuthSignatureService(translate, enc, oauthResource, authStorage) {
            this.translate = translate;
            this.enc = enc;
            this.oauthResource = oauthResource;
            this.authStorage = authStorage;
        }
        AuthSignatureService.prototype.signHeaders = function (req) {
            var _this = this;
            return rxjs.combineLatest([
                this.key(),
                this.signature(this.getPath(req.url)),
            ]).pipe(operators.take(1), operators.switchMap(function (value) {
                if (doCore.signatureHeader.signature) {
                    var httpHeaders_1 = req.headers ? req.headers : new http.HttpHeaders();
                    httpHeaders_1.keys().forEach(function (key) {
                        if (key === doCore.signatureHeader.key)
                            httpHeaders_1 = httpHeaders_1.delete(doCore.signatureHeader.key);
                        if (key === doCore.signatureHeader.timestamp)
                            httpHeaders_1 = httpHeaders_1.delete(doCore.signatureHeader.timestamp);
                        if (key === doCore.signatureHeader.signature)
                            httpHeaders_1 = httpHeaders_1.delete(doCore.signatureHeader.signature);
                    });
                    httpHeaders_1 = httpHeaders_1.set(doCore.signatureHeader.key, value[0]);
                    httpHeaders_1 = httpHeaders_1.set(doCore.signatureHeader.timestamp, _this.timestamp());
                    httpHeaders_1 = httpHeaders_1.set(doCore.signatureHeader.signature, value[1]);
                    return rxjs.of(req.clone({ headers: httpHeaders_1 }));
                }
                return rxjs.of(req);
            }));
        };
        AuthSignatureService.prototype.key = function () {
            return this.authStorage.getOfEnc(doCore.oauthInfo.public_key);
        };
        AuthSignatureService.prototype.timestamp = function () {
            return Math.floor(new Date().getTime() / 1000).toString();
        };
        AuthSignatureService.prototype.date = function () {
            return new common.DatePipe(this.translate.currentLang).transform(new Date(), doCore.DateFormat.DATE);
        };
        AuthSignatureService.prototype.signature = function (url) {
            var _this = this;
            return rxjs.combineLatest([
                this.key(),
                this.authStorage.getOfEnc(doCore.oauthInfo.access_token),
            ]).pipe(operators.take(1), operators.switchMap(function (value) {
                var key = value[0] + ':' +
                    _this.timestamp() + ':' +
                    // this.date() + ':' +
                    url + ':' +
                    value[1];
                return rxjs.of(_this.enc.getHmacSha256(_this.oauthResource['private_key'], key));
            }));
        };
        AuthSignatureService.prototype.getPath = function (url) {
            return '/' + url
                .replace(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*(:[0-9]{1,5})?(\/).*?/g, '');
        };
        AuthSignatureService.ctorParameters = function () { return [
            { type: core$1.TranslateService },
            { type: doCore.EncryptionService },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.OAUTH_INFO,] }] },
            { type: AuthIndexedDBService }
        ]; };
        AuthSignatureService.decorators = [
            { type: core.Injectable }
        ];
        AuthSignatureService.ctorParameters = function () { return [
            { type: core$1.TranslateService },
            { type: doCore.EncryptionService },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.OAUTH_INFO,] }] },
            { type: AuthIndexedDBService }
        ]; };
        return AuthSignatureService;
    }());

    var HttpInterceptorTokenService = /** @class */ (function () {
        function HttpInterceptorTokenService(authToken) {
            this.authToken = authToken;
            this.destroy$ = new rxjs.Subject();
        }
        HttpInterceptorTokenService.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        HttpInterceptorTokenService.prototype.intercept = function (req, next) {
            if (req.headers) {
                if (req.headers.has(doCore.signatureHeader.mark)) {
                    return this.authToken.oauthHeaders(req).pipe(operators.switchMap(function (reqAuth) {
                        return next.handle(reqAuth);
                    }));
                }
            }
            return next.handle(req).pipe(operators.takeUntil(this.destroy$));
        };
        HttpInterceptorTokenService.ctorParameters = function () { return [
            { type: AuthTokenService }
        ]; };
        HttpInterceptorTokenService.decorators = [
            { type: core.Injectable }
        ];
        HttpInterceptorTokenService.ctorParameters = function () { return [
            { type: AuthTokenService }
        ]; };
        return HttpInterceptorTokenService;
    }());

    var HttpInterceptorSignatureService = /** @class */ (function () {
        function HttpInterceptorSignatureService(authSignature, oauthResource) {
            this.authSignature = authSignature;
            this.oauthResource = oauthResource;
            this.destroy$ = new rxjs.Subject();
        }
        HttpInterceptorSignatureService.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        HttpInterceptorSignatureService.prototype.intercept = function (req, next) {
            if (req.headers) {
                if (req.headers.has(doCore.signatureHeader.mark) && this.oauthResource.signature) {
                    return this.authSignature.signHeaders(req).pipe(operators.switchMap(function (value) {
                        return next.handle(value);
                    }));
                }
            }
            return next.handle(req).pipe(operators.takeUntil(this.destroy$));
        };
        HttpInterceptorSignatureService.ctorParameters = function () { return [
            { type: AuthSignatureService },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.OAUTH_INFO,] }] }
        ]; };
        HttpInterceptorSignatureService.decorators = [
            { type: core.Injectable }
        ];
        HttpInterceptorSignatureService.ctorParameters = function () { return [
            { type: AuthSignatureService },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.OAUTH_INFO,] }] }
        ]; };
        return HttpInterceptorSignatureService;
    }());

    var AuthLanguageService = /** @class */ (function () {
        function AuthLanguageService(locale, settingsIndexedDB) {
            this.locale = locale;
            this.settingsIndexedDB = settingsIndexedDB;
        }
        AuthLanguageService.prototype.getLocale = function (req) {
            var _this = this;
            return rxjs.from(this.settingsIndexedDB.get('locale')).pipe(operators.take(1), operators.switchMap(function (value) {
                var httpHeaders = req.headers ? req.headers : new http.HttpHeaders();
                var localeCode = value ?
                    (value.match(new RegExp(doCore.Pattern.LOCALE, 'g')) ?
                        value :
                        _this.locale) : _this.locale;
                httpHeaders = httpHeaders.append('Accept-Language', localeCode);
                return rxjs.of(req.clone({ headers: httpHeaders }));
            }));
        };
        AuthLanguageService.ctorParameters = function () { return [
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] },
            { type: SettingsIndexedDBService }
        ]; };
        AuthLanguageService.decorators = [
            { type: core.Injectable }
        ];
        AuthLanguageService.ctorParameters = function () { return [
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] },
            { type: SettingsIndexedDBService }
        ]; };
        return AuthLanguageService;
    }());

    var HttpInterceptorLangService = /** @class */ (function () {
        function HttpInterceptorLangService(authLanguage) {
            this.authLanguage = authLanguage;
            this.destroy$ = new rxjs.Subject();
        }
        HttpInterceptorLangService.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        HttpInterceptorLangService.prototype.intercept = function (req, next) {
            if (req.headers) {
                if (req.headers.has(doCore.signatureHeader.mark)) {
                    return this.authLanguage.getLocale(req).pipe(operators.switchMap(function (value) {
                        return next.handle(value);
                    }));
                }
            }
            return next.handle(req).pipe(operators.takeUntil(this.destroy$));
        };
        HttpInterceptorLangService.ctorParameters = function () { return [
            { type: AuthLanguageService }
        ]; };
        HttpInterceptorLangService.decorators = [
            { type: core.Injectable }
        ];
        HttpInterceptorLangService.ctorParameters = function () { return [
            { type: AuthLanguageService }
        ]; };
        return HttpInterceptorLangService;
    }());

    var HttpErrorHandler = /** @class */ (function () {
        function HttpErrorHandler(translate, authToken, authStorage, authSignature) {
            this.translate = translate;
            this.authToken = authToken;
            this.authStorage = authStorage;
            this.authSignature = authSignature;
            this.isRefreshingToken = false;
            this.refreshTokenSubject = new rxjs.BehaviorSubject(null);
        }
        HttpErrorHandler.prototype.errorHandler = function (error, req, next) {
            var err = new http.HttpErrorResponse({
                error: error.error,
                headers: error.headers,
                status: error.status,
                statusText: error.statusText,
                url: error.url,
            });
            if (error.error instanceof ArrayBuffer) {
                var decodedString = String.fromCharCode.apply(null, new Uint8Array(error.error));
                err = new http.HttpErrorResponse({
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
                    return rxjs.EMPTY;
                case 400:
                    return this.error400(err);
                case 401:
                    return this.error401(err, req, next);
                case 404:
                case 403:
                case 500:
                case 504:
                case 0:
                    return rxjs.throwError(this.errorDefault(err));
                default:
                    break;
            }
            return rxjs.throwError(err);
        };
        HttpErrorHandler.prototype.errorDefault = function (error) {
            var err = {
                respStatusCode: error.status,
                respStatusMessage: {},
            };
            err.respStatusMessage[err.respStatusCode] = error.statusText;
            var msgKey = 'error.' + err.respStatusCode;
            if (error.error) {
                if (error.error['respStatusCode']) {
                    err = error.error;
                    msgKey = err.respStatusMessage[err.respStatusCode];
                }
            }
            this.translate.get(msgKey).subscribe(function (result) {
                err.respStatusMessage[err.respStatusCode] = result;
            });
            return err;
        };
        HttpErrorHandler.prototype.error400 = function (error) {
            if (error.error['respStatusCode']) {
                if (error.error['respStatusCode'] === 'invalid_grant') {
                    switch (error.error['respStatusMessage']['invalid_grant']) {
                        case 'Bad credentials':
                        case 'User account is locked':
                        case 'User is disabled':
                        case 'User account has expired':
                        case 'User credentials have expired':
                            return rxjs.throwError(this.errorDefault(error));
                        default:
                            this.authToken.logout();
                            return rxjs.throwError(this.errorDefault(error));
                    }
                }
                else {
                    return rxjs.throwError(this.errorDefault(error));
                }
            }
            return rxjs.throwError(error);
        };
        HttpErrorHandler.prototype.error401 = function (error, request, next) {
            var _this = this;
            if (error.error) {
                if (error.error['respStatusCode'] === 'invalid_token') {
                    if (!this.isRefreshingToken) {
                        this.isRefreshingToken = true;
                        this.refreshTokenSubject.next(null);
                        return this.authToken.refresh().pipe(operators.switchMap(function (response) {
                            _this.isRefreshingToken = false;
                            _this.refreshTokenSubject.next(response);
                            return _this.authToken.oauthHeaders(request).pipe(operators.switchMap(function (req) {
                                request = req;
                                return _this.authSignature.signHeaders(request).pipe(operators.switchMap(function (valReq) {
                                    return next.handle(valReq);
                                }));
                            }));
                        }), operators.catchError(function (err) {
                            return _this.errorHandler(err, request, next);
                        }));
                    }
                    else {
                        var msg = error.error['respStatusMessage']['invalid_token'];
                        if (msg.includes('expired')) {
                            this.authToken.logout();
                        }
                        else {
                            return this.refreshTokenSubject.pipe(operators.filter(function (response) { return response != null; }), operators.take(1), operators.switchMap(function () {
                                return _this.authToken.oauthHeaders(request).pipe(operators.switchMap(function (req) {
                                    request = req;
                                    return _this.authSignature.signHeaders(request).pipe(operators.switchMap(function (valReq) {
                                        return next.handle(valReq);
                                    }));
                                }));
                            }));
                        }
                    }
                }
            }
            return rxjs.throwError(error);
        };
        return HttpErrorHandler;
    }());

    var HttpInterceptorErrorService = /** @class */ (function (_super) {
        __extends(HttpInterceptorErrorService, _super);
        function HttpInterceptorErrorService(translate, authToken, authStorage, authSignature) {
            var _this = _super.call(this, translate, authToken, authStorage, authSignature) || this;
            _this.translate = translate;
            _this.authToken = authToken;
            _this.authStorage = authStorage;
            _this.authSignature = authSignature;
            _this.destroy$ = new rxjs.Subject();
            return _this;
        }
        HttpInterceptorErrorService.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        HttpInterceptorErrorService.prototype.intercept = function (req, next) {
            var _this = this;
            return next.handle(req).pipe(operators.catchError(function (error) {
                if (error instanceof http.HttpErrorResponse) {
                    return _this.errorHandler(error, req, next);
                }
                else {
                    return rxjs.throwError(error);
                }
            })).pipe(operators.takeUntil(this.destroy$));
        };
        HttpInterceptorErrorService.ctorParameters = function () { return [
            { type: core$1.TranslateService },
            { type: AuthTokenService },
            { type: AuthIndexedDBService },
            { type: AuthSignatureService }
        ]; };
        HttpInterceptorErrorService.decorators = [
            { type: core.Injectable }
        ];
        HttpInterceptorErrorService.ctorParameters = function () { return [
            { type: core$1.TranslateService },
            { type: AuthTokenService },
            { type: AuthIndexedDBService },
            { type: AuthSignatureService }
        ]; };
        return HttpInterceptorErrorService;
    }(HttpErrorHandler));

    var AuthUserService = /** @class */ (function (_super) {
        __extends(AuthUserService, _super);
        function AuthUserService(profileIndexedDB, authIndexedDB, apiPath, httpBaseService) {
            var _this = _super.call(this) || this;
            _this.profileIndexedDB = profileIndexedDB;
            _this.authIndexedDB = authIndexedDB;
            _this.apiPath = apiPath;
            _this.httpBaseService = httpBaseService;
            _this.loaderUserSubject$ = new rxjs.Subject();
            return _this;
        }
        AuthUserService.prototype.loadPhotoUser = function () {
            var _this = this;
            Promise.all([
                this.profileIndexedDB.get('image-b64'),
                this.profileIndexedDB.get('image'),
                this.profileIndexedDB.get('name'),
                this.authIndexedDB.getEnc('provider'),
            ]).then(function (value) {
                if (!value[0]) {
                    if (value[3] === 'local') {
                        if (value[1] && value[2]) {
                            _this.getImage(value[1], value[2]);
                        }
                        else {
                            _this.httpBaseService.HTTP_AUTH(_this.apiPath['profile']['get-profile'])
                                .subscribe(function (response) {
                                Promise.all([
                                    _this.profileIndexedDB.put('name', response['name']),
                                    _this.profileIndexedDB.put('email', response['email']),
                                    _this.profileIndexedDB.put('image', response['image']),
                                ]).then(function () {
                                    _this.getImage(response['image'], response['name']);
                                });
                            });
                        }
                    }
                    else {
                        var user = {
                            name: value[2],
                            picture: value[1],
                        };
                        _this.loaderUserSubject$.next(user);
                    }
                }
                else {
                    Promise.all([
                        _this.profileIndexedDB.get('name'),
                        _this.profileIndexedDB.get('image-b64'),
                    ]).then(function (profile) {
                        var user = {
                            name: profile[0],
                            picture: profile[1],
                        };
                        _this.loaderUserSubject$.next(user);
                    });
                }
            });
        };
        AuthUserService.prototype.updatePhotoUser = function (file, checksum) {
            var _this = this;
            if (file && checksum) {
                var picture_1;
                var imageBlob_1 = new Blob([file], {
                    type: 'image/png',
                });
                this.profileIndexedDB.put(doCore.oauthInfo.image, checksum).then();
                this.profileIndexedDB.put('image-blob', imageBlob_1).then();
                this.profileIndexedDB.get('name').then(function (name) {
                    var reader = new FileReader();
                    reader.readAsDataURL(imageBlob_1);
                    reader.onloadend = function () {
                        picture_1 = reader.result.toString();
                        var user = {
                            'name': name,
                            'picture': picture_1,
                        };
                        _this.profileIndexedDB.put('image-b64', picture_1).then();
                        _this.loaderUserSubject$.next(user);
                    };
                });
            }
            else {
                this.loaderUserSubject$.next(null);
            }
            return this.loaderUserSubject$.asObservable();
        };
        AuthUserService.prototype.updateNameUser = function (name) {
            var _this = this;
            this.profileIndexedDB.put('name', name).then();
            Promise.all([
                this.profileIndexedDB.get('image-b64'),
                this.profileIndexedDB.get('image'),
            ]).then(function (value) {
                var picture;
                if (value[0])
                    picture = value[0];
                else
                    picture = value[1];
                var user = {
                    'name': name,
                    'picture': picture,
                };
                _this.loaderUserSubject$.next(user);
            });
            return this.loaderUserSubject$.asObservable();
        };
        AuthUserService.prototype.getUser = function () {
            return this.loaderUserSubject$.asObservable();
        };
        AuthUserService.prototype.getImage = function (checksum, name) {
            var _this = this;
            if (checksum != null) {
                this.httpBaseService.HTTP_AUTH(this.apiPath['file']['vw-photo-profile'], null, null, null, [checksum], 'arraybuffer')
                    .pipe(operators.map(function (response) {
                    var picture;
                    var imageBlob = new Blob([response], {
                        type: 'image/png',
                    });
                    _this.profileIndexedDB.put('image-blob', imageBlob).then();
                    var reader = new FileReader();
                    reader.readAsDataURL(imageBlob);
                    reader.onloadend = function () {
                        picture = reader.result.toString();
                        var user = {
                            'name': name,
                            'picture': picture,
                        };
                        _this.profileIndexedDB.put('image-b64', picture).then();
                        _this.loaderUserSubject$.next(user);
                    };
                })).subscribe();
            }
        };
        AuthUserService.ctorParameters = function () { return [
            { type: ProfileIndexedDBService },
            { type: AuthIndexedDBService },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.API,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.HTTP_SERVICE,] }] }
        ]; };
        AuthUserService.decorators = [
            { type: core.Injectable }
        ];
        AuthUserService.ctorParameters = function () { return [
            { type: ProfileIndexedDBService },
            { type: AuthIndexedDBService },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.API,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.HTTP_SERVICE,] }] }
        ]; };
        return AuthUserService;
    }(doCore.UserInfo));

    var AUTH_PROVIDERS = [
        { provide: http.HTTP_INTERCEPTORS, useClass: HttpInterceptorTokenService, multi: true },
        { provide: http.HTTP_INTERCEPTORS, useClass: HttpInterceptorSignatureService, multi: true },
        { provide: http.HTTP_INTERCEPTORS, useClass: HttpInterceptorLangService, multi: true },
        { provide: http.HTTP_INTERCEPTORS, useClass: HttpInterceptorErrorService, multi: true },
        { provide: doCore.USER_INFO, useClass: AuthUserService },
        { provide: doCore.AUTH_INDEXED_DB, useClass: AuthIndexedDBService },
        { provide: doCore.PROFILE_INDEXED_DB, useClass: ProfileIndexedDBService },
        { provide: doCore.SETTINGS_INDEXED_DB, useClass: SettingsIndexedDBService },
        AuthGuardService,
        UnauthorizeGuardService,
        AuthTokenService,
        AuthGuardChildService,
        AuthSignatureService,
        AuthLanguageService,
    ];
    var AUTH_COMPONENTS = [
        LoginPageComponent,
        LogoutComponent,
        RegisterPageComponent,
        RequestForgotPageComponent,
        ForgotPageComponent,
        TermsConditionsComponent,
        OAuth2CallbackComponent,
    ];
    var AUTH_ENTRY_COMPONENTS = [
        TermsConditionsComponent,
    ];
    var DoAuthModule = /** @class */ (function () {
        function DoAuthModule() {
        }
        DoAuthModule.forRoot = function () {
            return {
                ngModule: DoAuthModule,
                providers: __spread(AUTH_PROVIDERS),
            };
        };
        DoAuthModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: __spread(AUTH_COMPONENTS),
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            core$1.TranslateModule,
                            forms.ReactiveFormsModule,
                            http.HttpClientModule,
                            ngRecaptcha.RecaptchaModule,
                            ngRecaptcha.RecaptchaFormsModule,
                            theme.NbCheckboxModule,
                            theme.NbAlertModule,
                            theme.NbInputModule,
                            theme.NbButtonModule,
                            theme.NbIconModule,
                            theme.NbCardModule,
                            theme.NbSpinnerModule,
                            theme.NbDialogModule.forChild(),
                            doTheme.DoThemeModule,
                            doCommon.DoToastrModule.forRoot(),
                            DoLayoutAuthModule,
                            DoAuthRoutingModule,
                        ],
                        exports: __spread(AUTH_COMPONENTS),
                        entryComponents: __spread(AUTH_ENTRY_COMPONENTS),
                    },] }
        ];
        return DoAuthModule;
    }());

    var PageNotFoundComponent = /** @class */ (function () {
        function PageNotFoundComponent(location) {
            this.location = location;
        }
        PageNotFoundComponent.prototype.goToHome = function () {
            this.location.back();
            return;
        };
        PageNotFoundComponent.ctorParameters = function () { return [
            { type: common.Location }
        ]; };
        PageNotFoundComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-404',
                        template: "<div class=\"flex-centered\">\n  <h2 class=\"title\">404</h2>\n  <h2 class=\"title\">Page Not Found</h2>\n  <small class=\"sub-title\">The page you were looking for doesn't exist</small>\n  <button nbButton fullWidth (click)=\"goToHome()\" type=\"button\" class=\"home-button\">\n    Take me home\n  </button>\n</div>\n",
                        styles: [".flex-centered{margin:auto}nb-card-body{display:flex}.title{text-align:center}.sub-title{text-align:center;display:block;margin-bottom:3rem}.home-button{margin-bottom:2rem}"]
                    },] }
        ];
        PageNotFoundComponent.ctorParameters = function () { return [
            { type: common.Location }
        ]; };
        return PageNotFoundComponent;
    }());

    var routes$1 = [
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
    var MiscellaneousRoutingModule = /** @class */ (function () {
        function MiscellaneousRoutingModule() {
        }
        MiscellaneousRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forChild(routes$1)],
                        exports: [router.RouterModule],
                    },] }
        ];
        return MiscellaneousRoutingModule;
    }());

    var MiscellaneousModule = /** @class */ (function () {
        function MiscellaneousModule() {
        }
        MiscellaneousModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            theme.NbButtonModule,
                            theme.NbIconModule,
                            common.CommonModule,
                            doTheme.DoThemeModule,
                            DoLayoutAuthModule,
                            MiscellaneousRoutingModule,
                        ],
                        declarations: [
                            PageNotFoundComponent,
                        ],
                    },] }
        ];
        return MiscellaneousModule;
    }());

    exports.AuthGuardChildService = AuthGuardChildService;
    exports.AuthGuardService = AuthGuardService;
    exports.AuthIndexedDBService = AuthIndexedDBService;
    exports.AuthSignatureService = AuthSignatureService;
    exports.AuthTokenService = AuthTokenService;
    exports.AuthUserService = AuthUserService;
    exports.DoAuthModule = DoAuthModule;
    exports.MiscellaneousModule = MiscellaneousModule;
    exports.PageNotFoundComponent = PageNotFoundComponent;
    exports.ProfileIndexedDBService = ProfileIndexedDBService;
    exports.SettingsIndexedDBService = SettingsIndexedDBService;
    exports.UnauthorizeGuardService = UnauthorizeGuardService;
    exports.ɵa = LoginPageComponent;
    exports.ɵb = LogoutComponent;
    exports.ɵc = RegisterPageComponent;
    exports.ɵd = RequestForgotPageComponent;
    exports.ɵe = ForgotPageComponent;
    exports.ɵf = TermsConditionsComponent;
    exports.ɵg = OAuth2CallbackComponent;
    exports.ɵh = DoLayoutAuthModule;
    exports.ɵi = AuthComponent;
    exports.ɵj = AuthBlockComponent;
    exports.ɵk = DoAuthRoutingModule;
    exports.ɵl = HttpInterceptorTokenService;
    exports.ɵm = HttpInterceptorSignatureService;
    exports.ɵn = HttpInterceptorLangService;
    exports.ɵo = AuthLanguageService;
    exports.ɵp = HttpInterceptorErrorService;
    exports.ɵq = HttpErrorHandler;
    exports.ɵr = MiscellaneousRoutingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=dongkap-do-auth.umd.js.map
