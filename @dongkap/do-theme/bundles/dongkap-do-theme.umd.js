(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@nebular/theme'), require('@nebular/eva-icons'), require('@ngx-translate/core'), require('@angular/router'), require('@angular/service-worker'), require('rxjs/operators'), require('rxjs'), require('@dongkap/do-core')) :
    typeof define === 'function' && define.amd ? define('@dongkap/do-theme', ['exports', '@angular/core', '@angular/common', '@nebular/theme', '@nebular/eva-icons', '@ngx-translate/core', '@angular/router', '@angular/service-worker', 'rxjs/operators', 'rxjs', '@dongkap/do-core'], factory) :
    (global = global || self, factory((global.dongkap = global.dongkap || {}, global.dongkap['do-theme'] = {}), global.ng.core, global.ng.common, global['@nebular/theme'], global['@nebular/eva-icons'], global['@ngx-translate/core'], global.ng.router, global.ng.serviceWorker, global.rxjs.operators, global.rxjs, global['@dongkap/do-core']));
}(this, (function (exports, core, common, theme, evaIcons, core$1, router, serviceWorker, operators, rxjs, doCore) { 'use strict';

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

    var FooterComponent = /** @class */ (function () {
        function FooterComponent() {
            this.year = (new Date()).getFullYear();
        }
        FooterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-footer',
                        template: "\n  <span class=\"created-by\">\u00A9 {{year}} {{ 'Dongkap' | translate }}</span>\n  <a [routerLink]=\"'/app/user/terms'\">{{ 'message.terms-conditions' | translate }}</a>\n  <a [routerLink]=\"'/app/user/privacy-policy'\">{{ 'message.privacy-policy' | translate }}</a>\n  ",
                        styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host{width:100%;display:flex}.nb-theme-default :host a{padding:0 0 0 1rem;color:#8f9bb3;transition:color .1s ease-out}.nb-theme-default :host a:hover{color:#222b45}.nb-theme-dark :host{width:100%;display:flex}.nb-theme-dark :host a{padding:0 0 0 1rem;color:#8f9bb3;transition:color .1s ease-out}.nb-theme-dark :host a:hover{color:#fff}.nb-theme-cosmic :host{width:100%;display:flex}.nb-theme-cosmic :host a{padding:0 0 0 1rem;color:#b4b4db;transition:color .1s ease-out}.nb-theme-cosmic :host a:hover{color:#fff}.nb-theme-corporate :host{width:100%;display:flex}.nb-theme-corporate :host a{padding:0 0 0 1rem;color:#8f9bb3;transition:color .1s ease-out}.nb-theme-corporate :host a:hover{color:#222b45}"]
                    },] }
        ];
        return FooterComponent;
    }());

    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent(sidebarService, themeService, layoutService, breakpointService, translate, router, userService, authIndexedDB, profileIndexedDB, http, api, oauthResource, swPush) {
            var _this = this;
            this.sidebarService = sidebarService;
            this.themeService = themeService;
            this.layoutService = layoutService;
            this.breakpointService = breakpointService;
            this.translate = translate;
            this.router = router;
            this.userService = userService;
            this.authIndexedDB = authIndexedDB;
            this.profileIndexedDB = profileIndexedDB;
            this.http = http;
            this.api = api;
            this.oauthResource = oauthResource;
            this.swPush = swPush;
            this.destroy$ = new rxjs.Subject();
            this.userPictureOnly = false;
            this.themes = [
                {
                    value: 'default',
                    name: 'Light',
                },
                {
                    value: 'dark',
                    name: 'Dark',
                },
                {
                    value: 'cosmic',
                    name: 'Cosmic',
                },
                {
                    value: 'corporate',
                    name: 'Corporate',
                },
            ];
            this.currentTheme = 'default';
            this.userMenu = [];
            this.setMenu();
            this.translate.onTranslationChange.pipe(operators.takeUntil(this.destroy$))
                .subscribe(function () {
                _this.setMenu();
            });
            Promise.all([
                this.profileIndexedDB.get('name'),
                this.profileIndexedDB.get('image-b64'),
            ]).then(function (value) {
                if (!_this.user) {
                    _this.user = {
                        name: value[0],
                        picture: value[1],
                    };
                }
            });
            if (this.swPush.isEnabled) {
                this.swPush.subscription.subscribe(function (subscription) {
                    if (subscription === null) {
                        _this.swPush.requestSubscription({ serverPublicKey: _this.oauthResource.vapid })
                            .then(function (pushSubscription) {
                            var sub = JSON.parse(JSON.stringify(pushSubscription));
                            _this.http.HTTP_AUTH(_this.api['notification']['push-subscribe'], sub)
                                .subscribe(function (response) { });
                        });
                    }
                });
                this.swPush.messages.subscribe(function (message) {
                    var data = JSON.parse(message.notification.data);
                    console.log(data);
                });
                this.swPush.notificationClicks.subscribe(function (_a) {
                    var action = _a.action, notification = _a.notification;
                    console.log(action);
                    console.log(notification);
                });
            }
        }
        HeaderComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.currentTheme = this.themeService.currentTheme;
            this.userService.getUser()
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (user) { return _this.user = user; });
            var xl = this.breakpointService.getBreakpointsMap().xl;
            this.themeService.onMediaQueryChange()
                .pipe(operators.map(function (_a) {
                var _b = __read(_a, 2), currentBreakpoint = _b[1];
                return currentBreakpoint.width < xl;
            }), operators.takeUntil(this.destroy$))
                .subscribe(function (isLessThanXl) { return _this.userPictureOnly = isLessThanXl; });
            this.themeService.onThemeChange()
                .pipe(operators.map(function (_a) {
                var name = _a.name;
                return name;
            }), operators.takeUntil(this.destroy$))
                .subscribe(function (themeName) { return _this.currentTheme = themeName; });
        };
        HeaderComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        HeaderComponent.prototype.setMenu = function () {
            var _this = this;
            this.userMenu = [];
            this.userMenu.push({ title: '' });
            this.authIndexedDB.getEnc('extras').then(function (value) {
                var extras = JSON.parse(value);
                if (extras) {
                    extras.forEach(function (extra) {
                        _this.userMenu.push({ title: extra.title, link: extra.link });
                    });
                }
                _this.translate.get('Logout').subscribe(function (result) {
                    _this.userMenu.push({ title: result, link: '/auth/logout' });
                });
                _this.userMenu.splice(0, 1);
            });
        };
        HeaderComponent.prototype.changeTheme = function (themeName) {
            this.themeService.changeTheme(themeName);
        };
        HeaderComponent.prototype.toggleSidebar = function () {
            this.sidebarService.toggle(true, 'menu-sidebar');
            this.layoutService.changeLayoutSize();
            return false;
        };
        HeaderComponent.prototype.navigateHome = function () {
            this.router.navigate(['/app/home']);
            return false;
        };
        HeaderComponent.ctorParameters = function () { return [
            { type: theme.NbSidebarService },
            { type: theme.NbThemeService },
            { type: doCore.LayoutService },
            { type: theme.NbMediaBreakpointsService },
            { type: core$1.TranslateService },
            { type: router.Router },
            { type: doCore.UserInfo, decorators: [{ type: core.Inject, args: [doCore.USER_INFO,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.AUTH_INDEXED_DB,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.PROFILE_INDEXED_DB,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.HTTP_SERVICE,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.API,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.OAUTH_INFO,] }] },
            { type: serviceWorker.SwPush }
        ]; };
        HeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-header',
                        template: "<div class=\"header-container\">\n  <div class=\"logo-container\">\n    <a (click)=\"toggleSidebar()\" href=\"#\" class=\"sidebar-toggle\">\n      <nb-icon icon=\"menu-2-outline\"></nb-icon>\n    </a>\n    <a class=\"logo\" href=\"#\" (click)=\"navigateHome()\">\n      <nb-action class=\"icon-logo\" icon=\"home-outline\"></nb-action>\n      <span class=\"title-logo\">{{ 'Dongkap' | translate }}</span>\n    </a>\n  </div>\n</div>\n\n<div class=\"header-container\">\n  <nb-actions size=\"small\">\n\n    <nb-action class=\"control-item\">\n      <nb-search type=\"rotate-layout\"></nb-search>\n    </nb-action>\n    <nb-action class=\"control-item\" icon=\"bell-outline\"></nb-action>\n    <nb-action class=\"user-action\" >\n      <nb-user [nbContextMenu]=\"userMenu\"\n               [onlyPicture]=\"userPictureOnly\"\n               [name]=\"user?.name\"\n               [picture]=\"user?.picture\">\n      </nb-user>\n    </nb-action>\n  </nb-actions>\n</div>\n",
                        styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host{display:flex;justify-content:space-between;width:100%}.nb-theme-default :host .logo-container{display:flex;align-items:center}.nb-theme-default :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-default :host nb-user{cursor:pointer}.nb-theme-default :host ::ng-deep nb-search button{padding:0!important}.nb-theme-default :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-default :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-default :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-default :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-default :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-default :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-default :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-default :host .header-container .logo{border-right:1px solid #edf1f7}.nb-theme-default :host .icon-logo{display:none}@media (max-width:767.98px){.nb-theme-default :host .control-item{border:none;padding-left:5px}.nb-theme-default :host .user-action{border:none;padding:0}.nb-theme-default :host .title-logo{display:none}.nb-theme-default :host .icon-logo{display:unset}}@media (max-width:575.98px){.nb-theme-default :host nb-select{display:none}}.nb-theme-dark :host{display:flex;justify-content:space-between;width:100%}.nb-theme-dark :host .logo-container{display:flex;align-items:center}.nb-theme-dark :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-dark :host nb-user{cursor:pointer}.nb-theme-dark :host ::ng-deep nb-search button{padding:0!important}.nb-theme-dark :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-dark :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-dark :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-dark :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-dark :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-dark :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-dark :host .header-container .logo{border-left:1px solid #151a30}[dir=rtl] .nb-theme-dark :host .header-container .logo{border-right:1px solid #151a30}.nb-theme-dark :host .icon-logo{display:none}@media (max-width:767.98px){.nb-theme-dark :host .control-item{border:none;padding-left:5px}.nb-theme-dark :host .user-action{border:none;padding:0}.nb-theme-dark :host .title-logo{display:none}.nb-theme-dark :host .icon-logo{display:unset}}@media (max-width:575.98px){.nb-theme-dark :host nb-select{display:none}}.nb-theme-cosmic :host{display:flex;justify-content:space-between;width:100%}.nb-theme-cosmic :host .logo-container{display:flex;align-items:center}.nb-theme-cosmic :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-cosmic :host nb-user{cursor:pointer}.nb-theme-cosmic :host ::ng-deep nb-search button{padding:0!important}.nb-theme-cosmic :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-cosmic :host .header-container .sidebar-toggle{text-decoration:none;color:#b4b4db}[dir=ltr] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-cosmic :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-cosmic :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-cosmic :host .header-container .logo{border-left:1px solid #1b1b38}[dir=rtl] .nb-theme-cosmic :host .header-container .logo{border-right:1px solid #1b1b38}.nb-theme-cosmic :host .icon-logo{display:none}@media (max-width:767.98px){.nb-theme-cosmic :host .control-item{border:none;padding-left:5px}.nb-theme-cosmic :host .user-action{border:none;padding:0}.nb-theme-cosmic :host .title-logo{display:none}.nb-theme-cosmic :host .icon-logo{display:unset}}@media (max-width:575.98px){.nb-theme-cosmic :host nb-select{display:none}}.nb-theme-corporate :host{display:flex;justify-content:space-between;width:100%}.nb-theme-corporate :host .logo-container{display:flex;align-items:center}.nb-theme-corporate :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-corporate :host nb-user{cursor:pointer}.nb-theme-corporate :host ::ng-deep nb-search button{padding:0!important}.nb-theme-corporate :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-corporate :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-corporate :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-corporate :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-corporate :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-corporate :host .header-container .logo{border-right:1px solid #edf1f7}.nb-theme-corporate :host .icon-logo{display:none}@media (max-width:767.98px){.nb-theme-corporate :host .control-item{border:none;padding-left:5px}.nb-theme-corporate :host .user-action{border:none;padding:0}.nb-theme-corporate :host .title-logo{display:none}.nb-theme-corporate :host .icon-logo{display:unset}}@media (max-width:575.98px){.nb-theme-corporate :host nb-select{display:none}}"]
                    },] }
        ];
        HeaderComponent.ctorParameters = function () { return [
            { type: theme.NbSidebarService },
            { type: theme.NbThemeService },
            { type: doCore.LayoutService },
            { type: theme.NbMediaBreakpointsService },
            { type: core$1.TranslateService },
            { type: router.Router },
            { type: doCore.UserInfo, decorators: [{ type: core.Inject, args: [doCore.USER_INFO,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.AUTH_INDEXED_DB,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.PROFILE_INDEXED_DB,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.HTTP_SERVICE,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.API,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [doCore.OAUTH_INFO,] }] },
            { type: serviceWorker.SwPush }
        ]; };
        return HeaderComponent;
    }());

    var SearchInputComponent = /** @class */ (function () {
        function SearchInputComponent() {
            this.search = new core.EventEmitter();
            this.isInputShown = false;
        }
        SearchInputComponent.prototype.showInput = function () {
            this.isInputShown = true;
            this.input.nativeElement.focus();
        };
        SearchInputComponent.prototype.hideInput = function () {
            this.isInputShown = false;
        };
        SearchInputComponent.prototype.onInput = function (val) {
            this.search.emit(val);
        };
        SearchInputComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-search-input',
                        template: "\n    <i class=\"control-icon ion ion-ios-search\"\n       (click)=\"showInput()\"></i>\n    <input placeholder=\"Type your search request here...\"\n           #input\n           [class.hidden]=\"!isInputShown\"\n           (blur)=\"hideInput()\"\n           (input)=\"onInput($event)\">\n  ",
                        styles: [":host{display:flex;align-items:center}:host i.control-icon::before{font-size:2.3rem}:host i.control-icon:hover{cursor:pointer}:host input{border:none;outline:0;margin-left:1rem;width:15rem;transition:width .2s}:host input.hidden{width:0;margin:0}:host ::ng-deep search-input input{background:0 0}"]
                    },] }
        ];
        SearchInputComponent.propDecorators = {
            input: [{ type: core.ViewChild, args: ['input', { static: true },] }],
            search: [{ type: core.Output }]
        };
        return SearchInputComponent;
    }());

    var CapitalizePipe = /** @class */ (function () {
        function CapitalizePipe() {
        }
        CapitalizePipe.prototype.transform = function (input) {
            return input && input.length
                ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
                : input;
        };
        CapitalizePipe.decorators = [
            { type: core.Pipe, args: [{ name: 'ngxCapitalize' },] }
        ];
        return CapitalizePipe;
    }());

    var PluralPipe = /** @class */ (function () {
        function PluralPipe() {
        }
        PluralPipe.prototype.transform = function (input, label, pluralLabel) {
            if (pluralLabel === void 0) { pluralLabel = ''; }
            input = input || 0;
            return input === 1
                ? input + " " + label
                : pluralLabel
                    ? input + " " + pluralLabel
                    : input + " " + label + "s";
        };
        PluralPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'ngxPlural' },] }
        ];
        return PluralPipe;
    }());

    var RoundPipe = /** @class */ (function () {
        function RoundPipe() {
        }
        RoundPipe.prototype.transform = function (input) {
            return Math.round(input);
        };
        RoundPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'ngxRound' },] }
        ];
        return RoundPipe;
    }());

    var TimingPipe = /** @class */ (function () {
        function TimingPipe() {
        }
        TimingPipe.prototype.transform = function (time) {
            if (time) {
                var minutes = Math.floor(time / 60);
                var seconds = Math.floor(time % 60);
                return "" + this.initZero(minutes) + minutes + ":" + this.initZero(seconds) + seconds;
            }
            return '00:00';
        };
        TimingPipe.prototype.initZero = function (time) {
            return time < 10 ? '0' : '';
        };
        TimingPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'timing' },] }
        ];
        return TimingPipe;
    }());

    var NumberWithCommasPipe = /** @class */ (function () {
        function NumberWithCommasPipe() {
        }
        NumberWithCommasPipe.prototype.transform = function (input) {
            return new Intl.NumberFormat().format(input);
        };
        NumberWithCommasPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'ngxNumberWithCommas' },] }
        ];
        return NumberWithCommasPipe;
    }());

    var OneColumnLayoutComponent = /** @class */ (function () {
        function OneColumnLayoutComponent() {
        }
        OneColumnLayoutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-one-column-layout',
                        template: "\n    <nb-layout windowMode>\n      <nb-layout-header fixed>\n        <do-header></do-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <do-footer></do-footer>\n      </nb-layout-footer>\n    </nb-layout>\n  ",
                        styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}"]
                    },] }
        ];
        return OneColumnLayoutComponent;
    }());

    var TwoColumnsLayoutComponent = /** @class */ (function () {
        function TwoColumnsLayoutComponent() {
        }
        TwoColumnsLayoutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-two-columns-layout',
                        template: "\n    <nb-layout windowMode>\n      <nb-layout-header fixed>\n        <do-header></do-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <do-footer></do-footer>\n      </nb-layout-footer>\n\n    </nb-layout>\n  ",
                        styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}"]
                    },] }
        ];
        return TwoColumnsLayoutComponent;
    }());

    var ThreeColumnsLayoutComponent = /** @class */ (function () {
        function ThreeColumnsLayoutComponent() {
        }
        ThreeColumnsLayoutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-three-columns-layout',
                        template: "\n    <nb-layout windowMode>\n      <nb-layout-header fixed>\n        <do-header></do-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <do-footer></do-footer>\n      </nb-layout-footer>\n    </nb-layout>\n  ",
                        styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}"]
                    },] }
        ];
        return ThreeColumnsLayoutComponent;
    }());

    var baseThemeVariables = theme.DEFAULT_THEME.variables;
    var DEFAULT_THEME = {
        name: 'default',
        base: 'default',
        variables: {
            temperature: {
                arcFill: [
                    baseThemeVariables.primary,
                    baseThemeVariables.primary,
                    baseThemeVariables.primary,
                    baseThemeVariables.primary,
                    baseThemeVariables.primary,
                ],
                arcEmpty: baseThemeVariables.bg2,
                thumbBg: baseThemeVariables.bg2,
                thumbBorder: baseThemeVariables.primary,
            },
            solar: {
                gradientLeft: baseThemeVariables.primary,
                gradientRight: baseThemeVariables.primary,
                shadowColor: 'rgba(0, 0, 0, 0)',
                secondSeriesFill: baseThemeVariables.bg2,
                radius: ['80%', '90%'],
            },
            traffic: {
                tooltipBg: baseThemeVariables.bg,
                tooltipBorderColor: baseThemeVariables.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
                tooltipTextColor: baseThemeVariables.fgText,
                tooltipFontWeight: 'normal',
                yAxisSplitLine: baseThemeVariables.separator,
                lineBg: baseThemeVariables.border4,
                lineShadowBlur: '1',
                itemColor: baseThemeVariables.border4,
                itemBorderColor: baseThemeVariables.border4,
                itemEmphasisBorderColor: baseThemeVariables.primary,
                shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
                shadowLineShadow: 'rgba(0, 0, 0, 0)',
                gradFrom: baseThemeVariables.bg2,
                gradTo: baseThemeVariables.bg2,
            },
            electricity: {
                tooltipBg: baseThemeVariables.bg,
                tooltipLineColor: baseThemeVariables.fgText,
                tooltipLineWidth: '0',
                tooltipBorderColor: baseThemeVariables.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
                tooltipTextColor: baseThemeVariables.fgText,
                tooltipFontWeight: 'normal',
                axisLineColor: baseThemeVariables.border3,
                xAxisTextColor: baseThemeVariables.fg,
                yAxisSplitLine: baseThemeVariables.separator,
                itemBorderColor: baseThemeVariables.primary,
                lineStyle: 'solid',
                lineWidth: '4',
                lineGradFrom: baseThemeVariables.primary,
                lineGradTo: baseThemeVariables.primary,
                lineShadow: 'rgba(0, 0, 0, 0)',
                areaGradFrom: baseThemeVariables.bg2,
                areaGradTo: baseThemeVariables.bg2,
                shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            },
            bubbleMap: {
                titleColor: baseThemeVariables.fgText,
                areaColor: baseThemeVariables.bg4,
                areaHoverColor: baseThemeVariables.fgHighlight,
                areaBorderColor: baseThemeVariables.border5,
            },
            profitBarAnimationEchart: {
                textColor: baseThemeVariables.fgText,
                firstAnimationBarColor: baseThemeVariables.primary,
                secondAnimationBarColor: baseThemeVariables.success,
                splitLineStyleOpacity: '1',
                splitLineStyleWidth: '1',
                splitLineStyleColor: baseThemeVariables.separator,
                tooltipTextColor: baseThemeVariables.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '16',
                tooltipBg: baseThemeVariables.bg,
                tooltipBorderColor: baseThemeVariables.border2,
                tooltipBorderWidth: '1',
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
            trafficBarEchart: {
                gradientFrom: baseThemeVariables.warningLight,
                gradientTo: baseThemeVariables.warning,
                shadow: baseThemeVariables.warningLight,
                shadowBlur: '0',
                axisTextColor: baseThemeVariables.fgText,
                axisFontSize: '12',
                tooltipBg: baseThemeVariables.bg,
                tooltipBorderColor: baseThemeVariables.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
                tooltipTextColor: baseThemeVariables.fgText,
                tooltipFontWeight: 'normal',
            },
            countryOrders: {
                countryBorderColor: baseThemeVariables.border4,
                countryFillColor: baseThemeVariables.bg3,
                countryBorderWidth: '1',
                hoveredCountryBorderColor: baseThemeVariables.primary,
                hoveredCountryFillColor: baseThemeVariables.primaryLight,
                hoveredCountryBorderWidth: '1',
                chartAxisLineColor: baseThemeVariables.border4,
                chartAxisTextColor: baseThemeVariables.fg,
                chartAxisFontSize: '16',
                chartGradientTo: baseThemeVariables.primary,
                chartGradientFrom: baseThemeVariables.primaryLight,
                chartAxisSplitLine: baseThemeVariables.separator,
                chartShadowLineColor: baseThemeVariables.primaryLight,
                chartLineBottomShadowColor: baseThemeVariables.primary,
                chartInnerLineColor: baseThemeVariables.bg2,
            },
            echarts: {
                bg: baseThemeVariables.bg,
                textColor: baseThemeVariables.fgText,
                axisLineColor: baseThemeVariables.fgText,
                splitLineColor: baseThemeVariables.separator,
                itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
                tooltipBackgroundColor: baseThemeVariables.primary,
                areaOpacity: '0.7',
            },
            chartjs: {
                axisLineColor: baseThemeVariables.separator,
                textColor: baseThemeVariables.fgText,
            },
            orders: {
                tooltipBg: baseThemeVariables.bg,
                tooltipLineColor: 'rgba(0, 0, 0, 0)',
                tooltipLineWidth: '0',
                tooltipBorderColor: baseThemeVariables.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
                tooltipTextColor: baseThemeVariables.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '20',
                axisLineColor: baseThemeVariables.border4,
                axisFontSize: '16',
                axisTextColor: baseThemeVariables.fg,
                yAxisSplitLine: baseThemeVariables.separator,
                itemBorderColor: baseThemeVariables.primary,
                lineStyle: 'solid',
                lineWidth: '4',
                // first line
                firstAreaGradFrom: baseThemeVariables.bg3,
                firstAreaGradTo: baseThemeVariables.bg3,
                firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
                // second line
                secondLineGradFrom: baseThemeVariables.primary,
                secondLineGradTo: baseThemeVariables.primary,
                secondAreaGradFrom: 'rgba(51, 102, 255, 0.2)',
                secondAreaGradTo: 'rgba(51, 102, 255, 0)',
                secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
                // third line
                thirdLineGradFrom: baseThemeVariables.success,
                thirdLineGradTo: baseThemeVariables.successLight,
                thirdAreaGradFrom: 'rgba(0, 214, 143, 0.2)',
                thirdAreaGradTo: 'rgba(0, 214, 143, 0)',
                thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            },
            profit: {
                bg: baseThemeVariables.bg,
                textColor: baseThemeVariables.fgText,
                axisLineColor: baseThemeVariables.border4,
                splitLineColor: baseThemeVariables.separator,
                areaOpacity: '1',
                axisFontSize: '16',
                axisTextColor: baseThemeVariables.fg,
                // first bar
                firstLineGradFrom: baseThemeVariables.bg3,
                firstLineGradTo: baseThemeVariables.bg3,
                firstLineShadow: 'rgba(0, 0, 0, 0)',
                // second bar
                secondLineGradFrom: baseThemeVariables.primary,
                secondLineGradTo: baseThemeVariables.primary,
                secondLineShadow: 'rgba(0, 0, 0, 0)',
                // third bar
                thirdLineGradFrom: baseThemeVariables.success,
                thirdLineGradTo: baseThemeVariables.successLight,
                thirdLineShadow: 'rgba(0, 0, 0, 0)',
            },
            orderProfitLegend: {
                firstItem: baseThemeVariables.success,
                secondItem: baseThemeVariables.primary,
                thirdItem: baseThemeVariables.bg3,
            },
            visitors: {
                tooltipBg: baseThemeVariables.bg,
                tooltipLineColor: 'rgba(0, 0, 0, 0)',
                tooltipLineWidth: '1',
                tooltipBorderColor: baseThemeVariables.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
                tooltipTextColor: baseThemeVariables.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '20',
                axisLineColor: baseThemeVariables.border4,
                axisFontSize: '16',
                axisTextColor: baseThemeVariables.fg,
                yAxisSplitLine: baseThemeVariables.separator,
                itemBorderColor: baseThemeVariables.primary,
                lineStyle: 'dotted',
                lineWidth: '6',
                lineGradFrom: '#ffffff',
                lineGradTo: '#ffffff',
                lineShadow: 'rgba(0, 0, 0, 0)',
                areaGradFrom: baseThemeVariables.primary,
                areaGradTo: baseThemeVariables.primaryLight,
                innerLineStyle: 'solid',
                innerLineWidth: '1',
                innerAreaGradFrom: baseThemeVariables.success,
                innerAreaGradTo: baseThemeVariables.success,
            },
            visitorsLegend: {
                firstIcon: baseThemeVariables.success,
                secondIcon: baseThemeVariables.primary,
            },
            visitorsPie: {
                firstPieGradientLeft: baseThemeVariables.success,
                firstPieGradientRight: baseThemeVariables.success,
                firstPieShadowColor: 'rgba(0, 0, 0, 0)',
                firstPieRadius: ['70%', '90%'],
                secondPieGradientLeft: baseThemeVariables.warning,
                secondPieGradientRight: baseThemeVariables.warningLight,
                secondPieShadowColor: 'rgba(0, 0, 0, 0)',
                secondPieRadius: ['60%', '97%'],
                shadowOffsetX: '0',
                shadowOffsetY: '0',
            },
            visitorsPieLegend: {
                firstSection: baseThemeVariables.warning,
                secondSection: baseThemeVariables.success,
            },
            earningPie: {
                radius: ['65%', '100%'],
                center: ['50%', '50%'],
                fontSize: '22',
                firstPieGradientLeft: baseThemeVariables.success,
                firstPieGradientRight: baseThemeVariables.success,
                firstPieShadowColor: 'rgba(0, 0, 0, 0)',
                secondPieGradientLeft: baseThemeVariables.primary,
                secondPieGradientRight: baseThemeVariables.primary,
                secondPieShadowColor: 'rgba(0, 0, 0, 0)',
                thirdPieGradientLeft: baseThemeVariables.warning,
                thirdPieGradientRight: baseThemeVariables.warning,
                thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
            },
            earningLine: {
                gradFrom: baseThemeVariables.primary,
                gradTo: baseThemeVariables.primary,
                tooltipTextColor: baseThemeVariables.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '16',
                tooltipBg: baseThemeVariables.bg,
                tooltipBorderColor: baseThemeVariables.border2,
                tooltipBorderWidth: '1',
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
        },
    };

    var baseThemeVariables$1 = theme.COSMIC_THEME.variables;
    var COSMIC_THEME = {
        name: 'cosmic',
        base: 'cosmic',
        variables: {
            temperature: {
                arcFill: ['#2ec7fe', '#31ffad', '#7bff24', '#fff024', '#f7bd59'],
                arcEmpty: baseThemeVariables$1.bg2,
                thumbBg: '#ffffff',
                thumbBorder: '#ffffff',
            },
            solar: {
                gradientLeft: baseThemeVariables$1.primary,
                gradientRight: baseThemeVariables$1.primary,
                shadowColor: 'rgba(0, 0, 0, 0)',
                secondSeriesFill: baseThemeVariables$1.bg2,
                radius: ['70%', '90%'],
            },
            traffic: {
                tooltipBg: baseThemeVariables$1.bg,
                tooltipBorderColor: baseThemeVariables$1.border2,
                tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(50, 50, 89); border-radius: 10px; padding: 4px 16px;',
                tooltipTextColor: baseThemeVariables$1.fgText,
                tooltipFontWeight: 'normal',
                yAxisSplitLine: baseThemeVariables$1.separator,
                lineBg: baseThemeVariables$1.border2,
                lineShadowBlur: '14',
                itemColor: baseThemeVariables$1.border2,
                itemBorderColor: baseThemeVariables$1.border2,
                itemEmphasisBorderColor: baseThemeVariables$1.primary,
                shadowLineDarkBg: baseThemeVariables$1.border3,
                shadowLineShadow: baseThemeVariables$1.border3,
                gradFrom: baseThemeVariables$1.bg,
                gradTo: baseThemeVariables$1.bg2,
            },
            electricity: {
                tooltipBg: baseThemeVariables$1.bg,
                tooltipLineColor: baseThemeVariables$1.fgText,
                tooltipLineWidth: '0',
                tooltipBorderColor: baseThemeVariables$1.border2,
                tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
                tooltipTextColor: baseThemeVariables$1.fgText,
                tooltipFontWeight: 'normal',
                axisLineColor: baseThemeVariables$1.border3,
                xAxisTextColor: baseThemeVariables$1.fg,
                yAxisSplitLine: baseThemeVariables$1.separator,
                itemBorderColor: baseThemeVariables$1.border2,
                lineStyle: 'dotted',
                lineWidth: '6',
                lineGradFrom: baseThemeVariables$1.success,
                lineGradTo: baseThemeVariables$1.warning,
                lineShadow: baseThemeVariables$1.bg4,
                areaGradFrom: baseThemeVariables$1.bg2,
                areaGradTo: baseThemeVariables$1.bg3,
                shadowLineDarkBg: baseThemeVariables$1.bg3,
            },
            bubbleMap: {
                titleColor: baseThemeVariables$1.fgText,
                areaColor: baseThemeVariables$1.bg4,
                areaHoverColor: baseThemeVariables$1.fgHighlight,
                areaBorderColor: baseThemeVariables$1.border5,
            },
            profitBarAnimationEchart: {
                textColor: baseThemeVariables$1.fgText,
                firstAnimationBarColor: baseThemeVariables$1.primary,
                secondAnimationBarColor: baseThemeVariables$1.success,
                splitLineStyleOpacity: '1',
                splitLineStyleWidth: '1',
                splitLineStyleColor: baseThemeVariables$1.border2,
                tooltipTextColor: baseThemeVariables$1.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '16',
                tooltipBg: baseThemeVariables$1.bg,
                tooltipBorderColor: baseThemeVariables$1.border2,
                tooltipBorderWidth: '1',
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
            trafficBarEchart: {
                gradientFrom: baseThemeVariables$1.warningLight,
                gradientTo: baseThemeVariables$1.warning,
                shadow: baseThemeVariables$1.warningLight,
                shadowBlur: '5',
                axisTextColor: baseThemeVariables$1.fgText,
                axisFontSize: '12',
                tooltipBg: baseThemeVariables$1.bg,
                tooltipBorderColor: baseThemeVariables$1.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
                tooltipTextColor: baseThemeVariables$1.fgText,
                tooltipFontWeight: 'normal',
            },
            countryOrders: {
                countryBorderColor: baseThemeVariables$1.border4,
                countryFillColor: baseThemeVariables$1.bg3,
                countryBorderWidth: '1',
                hoveredCountryBorderColor: baseThemeVariables$1.primary,
                hoveredCountryFillColor: baseThemeVariables$1.primaryLight,
                hoveredCountryBorderWidth: '1',
                chartAxisLineColor: baseThemeVariables$1.border4,
                chartAxisTextColor: baseThemeVariables$1.fg,
                chartAxisFontSize: '16',
                chartGradientTo: baseThemeVariables$1.primary,
                chartGradientFrom: baseThemeVariables$1.primaryLight,
                chartAxisSplitLine: baseThemeVariables$1.separator,
                chartShadowLineColor: baseThemeVariables$1.primaryLight,
                chartLineBottomShadowColor: baseThemeVariables$1.primary,
                chartInnerLineColor: baseThemeVariables$1.bg2,
            },
            echarts: {
                bg: baseThemeVariables$1.bg,
                textColor: baseThemeVariables$1.fgText,
                axisLineColor: baseThemeVariables$1.fgText,
                splitLineColor: baseThemeVariables$1.separator,
                itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
                tooltipBackgroundColor: baseThemeVariables$1.primary,
                areaOpacity: '1',
            },
            chartjs: {
                axisLineColor: baseThemeVariables$1.separator,
                textColor: baseThemeVariables$1.fgText,
            },
            orders: {
                tooltipBg: baseThemeVariables$1.bg,
                tooltipLineColor: 'rgba(0, 0, 0, 0)',
                tooltipLineWidth: '0',
                tooltipBorderColor: baseThemeVariables$1.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
                tooltipTextColor: baseThemeVariables$1.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '20',
                axisLineColor: baseThemeVariables$1.border4,
                axisFontSize: '16',
                axisTextColor: baseThemeVariables$1.fg,
                yAxisSplitLine: baseThemeVariables$1.separator,
                itemBorderColor: baseThemeVariables$1.primary,
                lineStyle: 'solid',
                lineWidth: '4',
                // first line
                firstAreaGradFrom: baseThemeVariables$1.bg2,
                firstAreaGradTo: baseThemeVariables$1.bg2,
                firstShadowLineDarkBg: baseThemeVariables$1.bg2,
                // second line
                secondLineGradFrom: baseThemeVariables$1.primary,
                secondLineGradTo: baseThemeVariables$1.primary,
                secondAreaGradFrom: 'rgba(161, 110, 255, 0.8)',
                secondAreaGradTo: 'rgba(161, 110, 255, 0.5)',
                secondShadowLineDarkBg: baseThemeVariables$1.primary,
                // third line
                thirdLineGradFrom: baseThemeVariables$1.success,
                thirdLineGradTo: baseThemeVariables$1.successLight,
                thirdAreaGradFrom: 'rgba(0, 214, 143, 0.7)',
                thirdAreaGradTo: 'rgba(0, 214, 143, 0.4)',
                thirdShadowLineDarkBg: baseThemeVariables$1.success,
            },
            profit: {
                bg: baseThemeVariables$1.bg,
                textColor: baseThemeVariables$1.fgText,
                axisLineColor: baseThemeVariables$1.border4,
                splitLineColor: baseThemeVariables$1.separator,
                areaOpacity: '1',
                axisFontSize: '16',
                axisTextColor: baseThemeVariables$1.fg,
                // first bar
                firstLineGradFrom: baseThemeVariables$1.bg2,
                firstLineGradTo: baseThemeVariables$1.bg2,
                firstLineShadow: 'rgba(0, 0, 0, 0)',
                // second bar
                secondLineGradFrom: baseThemeVariables$1.primary,
                secondLineGradTo: baseThemeVariables$1.primary,
                secondLineShadow: 'rgba(0, 0, 0, 0)',
                // third bar
                thirdLineGradFrom: baseThemeVariables$1.success,
                thirdLineGradTo: baseThemeVariables$1.successLight,
                thirdLineShadow: 'rgba(0, 0, 0, 0)',
            },
            orderProfitLegend: {
                firstItem: baseThemeVariables$1.success,
                secondItem: baseThemeVariables$1.primary,
                thirdItem: baseThemeVariables$1.bg2,
            },
            visitors: {
                tooltipBg: baseThemeVariables$1.bg,
                tooltipLineColor: 'rgba(0, 0, 0, 0)',
                tooltipLineWidth: '1',
                tooltipBorderColor: baseThemeVariables$1.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
                tooltipTextColor: baseThemeVariables$1.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '20',
                axisLineColor: baseThemeVariables$1.border4,
                axisFontSize: '16',
                axisTextColor: baseThemeVariables$1.fg,
                yAxisSplitLine: baseThemeVariables$1.separator,
                itemBorderColor: baseThemeVariables$1.primary,
                lineStyle: 'dotted',
                lineWidth: '6',
                lineGradFrom: '#ffffff',
                lineGradTo: '#ffffff',
                lineShadow: 'rgba(0, 0, 0, 0)',
                areaGradFrom: baseThemeVariables$1.primary,
                areaGradTo: baseThemeVariables$1.primaryLight,
                innerLineStyle: 'solid',
                innerLineWidth: '1',
                innerAreaGradFrom: baseThemeVariables$1.success,
                innerAreaGradTo: baseThemeVariables$1.success,
            },
            visitorsLegend: {
                firstIcon: baseThemeVariables$1.success,
                secondIcon: baseThemeVariables$1.primary,
            },
            visitorsPie: {
                firstPieGradientLeft: baseThemeVariables$1.success,
                firstPieGradientRight: baseThemeVariables$1.successLight,
                firstPieShadowColor: 'rgba(0, 0, 0, 0)',
                firstPieRadius: ['70%', '90%'],
                secondPieGradientLeft: baseThemeVariables$1.warning,
                secondPieGradientRight: baseThemeVariables$1.warningLight,
                secondPieShadowColor: 'rgba(0, 0, 0, 0)',
                secondPieRadius: ['60%', '95%'],
                shadowOffsetX: '0',
                shadowOffsetY: '3',
            },
            visitorsPieLegend: {
                firstSection: baseThemeVariables$1.warning,
                secondSection: baseThemeVariables$1.success,
            },
            earningPie: {
                radius: ['65%', '100%'],
                center: ['50%', '50%'],
                fontSize: '22',
                firstPieGradientLeft: baseThemeVariables$1.success,
                firstPieGradientRight: baseThemeVariables$1.success,
                firstPieShadowColor: 'rgba(0, 0, 0, 0)',
                secondPieGradientLeft: baseThemeVariables$1.primary,
                secondPieGradientRight: baseThemeVariables$1.primary,
                secondPieShadowColor: 'rgba(0, 0, 0, 0)',
                thirdPieGradientLeft: baseThemeVariables$1.warning,
                thirdPieGradientRight: baseThemeVariables$1.warning,
                thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
            },
            earningLine: {
                gradFrom: baseThemeVariables$1.primary,
                gradTo: baseThemeVariables$1.primary,
                tooltipTextColor: baseThemeVariables$1.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '16',
                tooltipBg: baseThemeVariables$1.bg,
                tooltipBorderColor: baseThemeVariables$1.border2,
                tooltipBorderWidth: '1',
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
        },
    };

    var baseThemeVariables$2 = theme.CORPORATE_THEME.variables;
    var CORPORATE_THEME = {
        name: 'corporate',
        base: 'corporate',
        variables: {
            temperature: {
                arcFill: ['#ffa36b', '#ffa36b', '#ff9e7a', '#ff9888', '#ff8ea0'],
                arcEmpty: baseThemeVariables$2.bg2,
                thumbBg: baseThemeVariables$2.bg2,
                thumbBorder: '#ffa36b',
            },
            solar: {
                gradientLeft: baseThemeVariables$2.primary,
                gradientRight: baseThemeVariables$2.primary,
                shadowColor: 'rgba(0, 0, 0, 0)',
                secondSeriesFill: baseThemeVariables$2.bg2,
                radius: ['80%', '90%'],
            },
            traffic: {
                tooltipBg: baseThemeVariables$2.bg,
                tooltipBorderColor: baseThemeVariables$2.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
                tooltipTextColor: baseThemeVariables$2.fgText,
                tooltipFontWeight: 'normal',
                yAxisSplitLine: 'rgba(0, 0, 0, 0)',
                lineBg: baseThemeVariables$2.primary,
                lineShadowBlur: '0',
                itemColor: baseThemeVariables$2.border4,
                itemBorderColor: baseThemeVariables$2.border4,
                itemEmphasisBorderColor: baseThemeVariables$2.primaryLight,
                shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
                shadowLineShadow: 'rgba(0, 0, 0, 0)',
                gradFrom: baseThemeVariables$2.bg,
                gradTo: baseThemeVariables$2.bg,
            },
            electricity: {
                tooltipBg: baseThemeVariables$2.bg,
                tooltipLineColor: baseThemeVariables$2.fgText,
                tooltipLineWidth: '0',
                tooltipBorderColor: baseThemeVariables$2.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
                tooltipTextColor: baseThemeVariables$2.fgText,
                tooltipFontWeight: 'normal',
                axisLineColor: baseThemeVariables$2.border3,
                xAxisTextColor: baseThemeVariables$2.fg,
                yAxisSplitLine: baseThemeVariables$2.separator,
                itemBorderColor: baseThemeVariables$2.primary,
                lineStyle: 'solid',
                lineWidth: '4',
                lineGradFrom: baseThemeVariables$2.primary,
                lineGradTo: baseThemeVariables$2.primary,
                lineShadow: 'rgba(0, 0, 0, 0)',
                areaGradFrom: 'rgba(0, 0, 0, 0)',
                areaGradTo: 'rgba(0, 0, 0, 0)',
                shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            },
            bubbleMap: {
                titleColor: baseThemeVariables$2.fgText,
                areaColor: baseThemeVariables$2.bg4,
                areaHoverColor: baseThemeVariables$2.fgHighlight,
                areaBorderColor: baseThemeVariables$2.border5,
            },
            profitBarAnimationEchart: {
                textColor: baseThemeVariables$2.fgText,
                firstAnimationBarColor: baseThemeVariables$2.primary,
                secondAnimationBarColor: baseThemeVariables$2.success,
                splitLineStyleOpacity: '1',
                splitLineStyleWidth: '1',
                splitLineStyleColor: baseThemeVariables$2.separator,
                tooltipTextColor: baseThemeVariables$2.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '16',
                tooltipBg: baseThemeVariables$2.bg,
                tooltipBorderColor: baseThemeVariables$2.border2,
                tooltipBorderWidth: '1',
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
            trafficBarEchart: {
                gradientFrom: baseThemeVariables$2.warningLight,
                gradientTo: baseThemeVariables$2.warning,
                shadow: baseThemeVariables$2.warningLight,
                shadowBlur: '0',
                axisTextColor: baseThemeVariables$2.fgText,
                axisFontSize: '12',
                tooltipBg: baseThemeVariables$2.bg,
                tooltipBorderColor: baseThemeVariables$2.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
                tooltipTextColor: baseThemeVariables$2.fgText,
                tooltipFontWeight: 'normal',
            },
            countryOrders: {
                countryBorderColor: baseThemeVariables$2.border4,
                countryFillColor: baseThemeVariables$2.bg4,
                countryBorderWidth: '1',
                hoveredCountryBorderColor: baseThemeVariables$2.primary,
                hoveredCountryFillColor: baseThemeVariables$2.primaryLight,
                hoveredCountryBorderWidth: '1',
                chartAxisLineColor: baseThemeVariables$2.border4,
                chartAxisTextColor: baseThemeVariables$2.fg,
                chartAxisFontSize: '16',
                chartGradientTo: baseThemeVariables$2.primary,
                chartGradientFrom: baseThemeVariables$2.primaryLight,
                chartAxisSplitLine: baseThemeVariables$2.separator,
                chartShadowLineColor: baseThemeVariables$2.primaryLight,
                chartLineBottomShadowColor: baseThemeVariables$2.primary,
                chartInnerLineColor: baseThemeVariables$2.bg2,
            },
            echarts: {
                bg: baseThemeVariables$2.bg,
                textColor: baseThemeVariables$2.fgText,
                axisLineColor: baseThemeVariables$2.fgText,
                splitLineColor: baseThemeVariables$2.separator,
                itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
                tooltipBackgroundColor: baseThemeVariables$2.primary,
                areaOpacity: '0.7',
            },
            chartjs: {
                axisLineColor: baseThemeVariables$2.separator,
                textColor: baseThemeVariables$2.fgText,
            },
            orders: {
                tooltipBg: baseThemeVariables$2.bg,
                tooltipLineColor: 'rgba(0, 0, 0, 0)',
                tooltipLineWidth: '0',
                tooltipBorderColor: baseThemeVariables$2.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
                tooltipTextColor: baseThemeVariables$2.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '20',
                axisLineColor: baseThemeVariables$2.border4,
                axisFontSize: '16',
                axisTextColor: baseThemeVariables$2.fg,
                yAxisSplitLine: baseThemeVariables$2.separator,
                itemBorderColor: baseThemeVariables$2.primary,
                lineStyle: 'solid',
                lineWidth: '4',
                // first line
                firstAreaGradFrom: baseThemeVariables$2.bg3,
                firstAreaGradTo: baseThemeVariables$2.bg3,
                firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
                // second line
                secondLineGradFrom: baseThemeVariables$2.primary,
                secondLineGradTo: baseThemeVariables$2.primary,
                secondAreaGradFrom: 'rgba(0, 0, 0, 0)',
                secondAreaGradTo: 'rgba(0, 0, 0, 0)',
                secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
                // third line
                thirdLineGradFrom: baseThemeVariables$2.success,
                thirdLineGradTo: baseThemeVariables$2.successLight,
                thirdAreaGradFrom: 'rgba(0, 0, 0, 0)',
                thirdAreaGradTo: 'rgba(0, 0, 0, 0)',
                thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            },
            profit: {
                bg: baseThemeVariables$2.bg,
                textColor: baseThemeVariables$2.fgText,
                axisLineColor: baseThemeVariables$2.border4,
                splitLineColor: baseThemeVariables$2.separator,
                areaOpacity: '1',
                axisFontSize: '16',
                axisTextColor: baseThemeVariables$2.fg,
                // first bar
                firstLineGradFrom: baseThemeVariables$2.bg3,
                firstLineGradTo: baseThemeVariables$2.bg3,
                firstLineShadow: 'rgba(0, 0, 0, 0)',
                // second bar
                secondLineGradFrom: baseThemeVariables$2.primary,
                secondLineGradTo: baseThemeVariables$2.primary,
                secondLineShadow: 'rgba(0, 0, 0, 0)',
                // third bar
                thirdLineGradFrom: baseThemeVariables$2.success,
                thirdLineGradTo: baseThemeVariables$2.success,
                thirdLineShadow: 'rgba(0, 0, 0, 0)',
            },
            orderProfitLegend: {
                firstItem: baseThemeVariables$2.success,
                secondItem: baseThemeVariables$2.primary,
                thirdItem: baseThemeVariables$2.bg3,
            },
            visitors: {
                tooltipBg: baseThemeVariables$2.bg,
                tooltipLineColor: 'rgba(0, 0, 0, 0)',
                tooltipLineWidth: '1',
                tooltipBorderColor: baseThemeVariables$2.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
                tooltipTextColor: baseThemeVariables$2.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '20',
                axisLineColor: baseThemeVariables$2.border4,
                axisFontSize: '16',
                axisTextColor: baseThemeVariables$2.fg,
                yAxisSplitLine: baseThemeVariables$2.separator,
                itemBorderColor: baseThemeVariables$2.primary,
                lineStyle: 'dotted',
                lineWidth: '6',
                lineGradFrom: '#ffffff',
                lineGradTo: '#ffffff',
                lineShadow: 'rgba(0, 0, 0, 0)',
                areaGradFrom: baseThemeVariables$2.primary,
                areaGradTo: baseThemeVariables$2.primaryLight,
                innerLineStyle: 'solid',
                innerLineWidth: '1',
                innerAreaGradFrom: baseThemeVariables$2.success,
                innerAreaGradTo: baseThemeVariables$2.success,
            },
            visitorsLegend: {
                firstIcon: baseThemeVariables$2.success,
                secondIcon: baseThemeVariables$2.primary,
            },
            visitorsPie: {
                firstPieGradientLeft: baseThemeVariables$2.success,
                firstPieGradientRight: baseThemeVariables$2.success,
                firstPieShadowColor: 'rgba(0, 0, 0, 0)',
                firstPieRadius: ['65%', '90%'],
                secondPieGradientLeft: baseThemeVariables$2.warning,
                secondPieGradientRight: baseThemeVariables$2.warningLight,
                secondPieShadowColor: 'rgba(0, 0, 0, 0)',
                secondPieRadius: ['63%', '92%'],
                shadowOffsetX: '-4',
                shadowOffsetY: '-4',
            },
            visitorsPieLegend: {
                firstSection: baseThemeVariables$2.warning,
                secondSection: baseThemeVariables$2.success,
            },
            earningPie: {
                radius: ['65%', '100%'],
                center: ['50%', '50%'],
                fontSize: '22',
                firstPieGradientLeft: baseThemeVariables$2.success,
                firstPieGradientRight: baseThemeVariables$2.success,
                firstPieShadowColor: 'rgba(0, 0, 0, 0)',
                secondPieGradientLeft: baseThemeVariables$2.primary,
                secondPieGradientRight: baseThemeVariables$2.primary,
                secondPieShadowColor: 'rgba(0, 0, 0, 0)',
                thirdPieGradientLeft: baseThemeVariables$2.warning,
                thirdPieGradientRight: baseThemeVariables$2.warning,
                thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
            },
            earningLine: {
                gradFrom: baseThemeVariables$2.primary,
                gradTo: baseThemeVariables$2.primary,
                tooltipTextColor: baseThemeVariables$2.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '16',
                tooltipBg: baseThemeVariables$2.bg,
                tooltipBorderColor: baseThemeVariables$2.border2,
                tooltipBorderWidth: '1',
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
        },
    };

    var baseThemeVariables$3 = theme.DARK_THEME.variables;
    var DARK_THEME = {
        name: 'dark',
        base: 'dark',
        variables: {
            temperature: {
                arcFill: [
                    baseThemeVariables$3.primary,
                    baseThemeVariables$3.primary,
                    baseThemeVariables$3.primary,
                    baseThemeVariables$3.primary,
                    baseThemeVariables$3.primary,
                ],
                arcEmpty: baseThemeVariables$3.bg2,
                thumbBg: baseThemeVariables$3.bg2,
                thumbBorder: baseThemeVariables$3.primary,
            },
            solar: {
                gradientLeft: baseThemeVariables$3.primary,
                gradientRight: baseThemeVariables$3.primary,
                shadowColor: 'rgba(0, 0, 0, 0)',
                secondSeriesFill: baseThemeVariables$3.bg2,
                radius: ['80%', '90%'],
            },
            traffic: {
                tooltipBg: baseThemeVariables$3.bg,
                tooltipBorderColor: baseThemeVariables$3.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
                tooltipTextColor: baseThemeVariables$3.fgText,
                tooltipFontWeight: 'normal',
                yAxisSplitLine: baseThemeVariables$3.separator,
                lineBg: baseThemeVariables$3.border4,
                lineShadowBlur: '1',
                itemColor: baseThemeVariables$3.border4,
                itemBorderColor: baseThemeVariables$3.border4,
                itemEmphasisBorderColor: baseThemeVariables$3.primary,
                shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
                shadowLineShadow: 'rgba(0, 0, 0, 0)',
                gradFrom: baseThemeVariables$3.bg2,
                gradTo: baseThemeVariables$3.bg2,
            },
            electricity: {
                tooltipBg: baseThemeVariables$3.bg,
                tooltipLineColor: baseThemeVariables$3.fgText,
                tooltipLineWidth: '0',
                tooltipBorderColor: baseThemeVariables$3.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
                tooltipTextColor: baseThemeVariables$3.fgText,
                tooltipFontWeight: 'normal',
                axisLineColor: baseThemeVariables$3.border3,
                xAxisTextColor: baseThemeVariables$3.fg,
                yAxisSplitLine: baseThemeVariables$3.separator,
                itemBorderColor: baseThemeVariables$3.primary,
                lineStyle: 'solid',
                lineWidth: '4',
                lineGradFrom: baseThemeVariables$3.primary,
                lineGradTo: baseThemeVariables$3.primary,
                lineShadow: 'rgba(0, 0, 0, 0)',
                areaGradFrom: baseThemeVariables$3.bg2,
                areaGradTo: baseThemeVariables$3.bg2,
                shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            },
            bubbleMap: {
                titleColor: baseThemeVariables$3.fgText,
                areaColor: baseThemeVariables$3.bg4,
                areaHoverColor: baseThemeVariables$3.fgHighlight,
                areaBorderColor: baseThemeVariables$3.border5,
            },
            profitBarAnimationEchart: {
                textColor: baseThemeVariables$3.fgText,
                firstAnimationBarColor: baseThemeVariables$3.primary,
                secondAnimationBarColor: baseThemeVariables$3.success,
                splitLineStyleOpacity: '1',
                splitLineStyleWidth: '1',
                splitLineStyleColor: baseThemeVariables$3.separator,
                tooltipTextColor: baseThemeVariables$3.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '16',
                tooltipBg: baseThemeVariables$3.bg,
                tooltipBorderColor: baseThemeVariables$3.border2,
                tooltipBorderWidth: '1',
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
            trafficBarEchart: {
                gradientFrom: baseThemeVariables$3.warningLight,
                gradientTo: baseThemeVariables$3.warning,
                shadow: baseThemeVariables$3.warningLight,
                shadowBlur: '0',
                axisTextColor: baseThemeVariables$3.fgText,
                axisFontSize: '12',
                tooltipBg: baseThemeVariables$3.bg,
                tooltipBorderColor: baseThemeVariables$3.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
                tooltipTextColor: baseThemeVariables$3.fgText,
                tooltipFontWeight: 'normal',
            },
            countryOrders: {
                countryBorderColor: baseThemeVariables$3.border4,
                countryFillColor: baseThemeVariables$3.bg3,
                countryBorderWidth: '1',
                hoveredCountryBorderColor: baseThemeVariables$3.primary,
                hoveredCountryFillColor: baseThemeVariables$3.primaryLight,
                hoveredCountryBorderWidth: '1',
                chartAxisLineColor: baseThemeVariables$3.border4,
                chartAxisTextColor: baseThemeVariables$3.fg,
                chartAxisFontSize: '16',
                chartGradientTo: baseThemeVariables$3.primary,
                chartGradientFrom: baseThemeVariables$3.primaryLight,
                chartAxisSplitLine: baseThemeVariables$3.separator,
                chartShadowLineColor: baseThemeVariables$3.primaryLight,
                chartLineBottomShadowColor: baseThemeVariables$3.primary,
                chartInnerLineColor: baseThemeVariables$3.bg2,
            },
            echarts: {
                bg: baseThemeVariables$3.bg,
                textColor: baseThemeVariables$3.fgText,
                axisLineColor: baseThemeVariables$3.fgText,
                splitLineColor: baseThemeVariables$3.separator,
                itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
                tooltipBackgroundColor: baseThemeVariables$3.primary,
                areaOpacity: '0.7',
            },
            chartjs: {
                axisLineColor: baseThemeVariables$3.separator,
                textColor: baseThemeVariables$3.fgText,
            },
            orders: {
                tooltipBg: baseThemeVariables$3.bg,
                tooltipLineColor: 'rgba(0, 0, 0, 0)',
                tooltipLineWidth: '0',
                tooltipBorderColor: baseThemeVariables$3.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
                tooltipTextColor: baseThemeVariables$3.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '20',
                axisLineColor: baseThemeVariables$3.border4,
                axisFontSize: '16',
                axisTextColor: baseThemeVariables$3.fg,
                yAxisSplitLine: baseThemeVariables$3.separator,
                itemBorderColor: baseThemeVariables$3.primary,
                lineStyle: 'solid',
                lineWidth: '4',
                // first line
                firstAreaGradFrom: baseThemeVariables$3.bg3,
                firstAreaGradTo: baseThemeVariables$3.bg3,
                firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
                // second line
                secondLineGradFrom: baseThemeVariables$3.primary,
                secondLineGradTo: baseThemeVariables$3.primary,
                secondAreaGradFrom: 'rgba(51, 102, 255, 0.2)',
                secondAreaGradTo: 'rgba(51, 102, 255, 0)',
                secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
                // third line
                thirdLineGradFrom: baseThemeVariables$3.success,
                thirdLineGradTo: baseThemeVariables$3.successLight,
                thirdAreaGradFrom: 'rgba(0, 214, 143, 0.2)',
                thirdAreaGradTo: 'rgba(0, 214, 143, 0)',
                thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            },
            profit: {
                bg: baseThemeVariables$3.bg,
                textColor: baseThemeVariables$3.fgText,
                axisLineColor: baseThemeVariables$3.border4,
                splitLineColor: baseThemeVariables$3.separator,
                areaOpacity: '1',
                axisFontSize: '16',
                axisTextColor: baseThemeVariables$3.fg,
                // first bar
                firstLineGradFrom: baseThemeVariables$3.bg3,
                firstLineGradTo: baseThemeVariables$3.bg3,
                firstLineShadow: 'rgba(0, 0, 0, 0)',
                // second bar
                secondLineGradFrom: baseThemeVariables$3.primary,
                secondLineGradTo: baseThemeVariables$3.primary,
                secondLineShadow: 'rgba(0, 0, 0, 0)',
                // third bar
                thirdLineGradFrom: baseThemeVariables$3.success,
                thirdLineGradTo: baseThemeVariables$3.successLight,
                thirdLineShadow: 'rgba(0, 0, 0, 0)',
            },
            orderProfitLegend: {
                firstItem: baseThemeVariables$3.success,
                secondItem: baseThemeVariables$3.primary,
                thirdItem: baseThemeVariables$3.bg3,
            },
            visitors: {
                tooltipBg: baseThemeVariables$3.bg,
                tooltipLineColor: 'rgba(0, 0, 0, 0)',
                tooltipLineWidth: '0',
                tooltipBorderColor: baseThemeVariables$3.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
                tooltipTextColor: baseThemeVariables$3.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '20',
                axisLineColor: baseThemeVariables$3.border4,
                axisFontSize: '16',
                axisTextColor: baseThemeVariables$3.fg,
                yAxisSplitLine: baseThemeVariables$3.separator,
                itemBorderColor: baseThemeVariables$3.primary,
                lineStyle: 'dotted',
                lineWidth: '6',
                lineGradFrom: '#ffffff',
                lineGradTo: '#ffffff',
                lineShadow: 'rgba(0, 0, 0, 0)',
                areaGradFrom: baseThemeVariables$3.primary,
                areaGradTo: baseThemeVariables$3.primaryLight,
                innerLineStyle: 'solid',
                innerLineWidth: '1',
                innerAreaGradFrom: baseThemeVariables$3.success,
                innerAreaGradTo: baseThemeVariables$3.success,
            },
            visitorsLegend: {
                firstIcon: baseThemeVariables$3.success,
                secondIcon: baseThemeVariables$3.primary,
            },
            visitorsPie: {
                firstPieGradientLeft: baseThemeVariables$3.success,
                firstPieGradientRight: baseThemeVariables$3.success,
                firstPieShadowColor: 'rgba(0, 0, 0, 0)',
                firstPieRadius: ['70%', '90%'],
                secondPieGradientLeft: baseThemeVariables$3.warning,
                secondPieGradientRight: baseThemeVariables$3.warningLight,
                secondPieShadowColor: 'rgba(0, 0, 0, 0)',
                secondPieRadius: ['60%', '97%'],
                shadowOffsetX: '0',
                shadowOffsetY: '0',
            },
            visitorsPieLegend: {
                firstSection: baseThemeVariables$3.warning,
                secondSection: baseThemeVariables$3.success,
            },
            earningPie: {
                radius: ['65%', '100%'],
                center: ['50%', '50%'],
                fontSize: '22',
                firstPieGradientLeft: baseThemeVariables$3.success,
                firstPieGradientRight: baseThemeVariables$3.success,
                firstPieShadowColor: 'rgba(0, 0, 0, 0)',
                secondPieGradientLeft: baseThemeVariables$3.primary,
                secondPieGradientRight: baseThemeVariables$3.primary,
                secondPieShadowColor: 'rgba(0, 0, 0, 0)',
                thirdPieGradientLeft: baseThemeVariables$3.warning,
                thirdPieGradientRight: baseThemeVariables$3.warning,
                thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
            },
            earningLine: {
                gradFrom: baseThemeVariables$3.primary,
                gradTo: baseThemeVariables$3.primary,
                tooltipTextColor: baseThemeVariables$3.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '16',
                tooltipBg: baseThemeVariables$3.bg,
                tooltipBorderColor: baseThemeVariables$3.border2,
                tooltipBorderWidth: '1',
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
        },
    };

    var NB_MODULES = [
        router.RouterModule,
        core$1.TranslateModule,
        theme.NbLayoutModule,
        theme.NbMenuModule,
        theme.NbUserModule,
        theme.NbActionsModule,
        theme.NbSearchModule,
        theme.NbSidebarModule,
        theme.NbContextMenuModule,
        theme.NbButtonModule,
        theme.NbSelectModule,
        theme.NbIconModule,
        evaIcons.NbEvaIconsModule,
    ];
    var THEME_COMPONENTS = [
        HeaderComponent,
        FooterComponent,
        SearchInputComponent,
        OneColumnLayoutComponent,
        ThreeColumnsLayoutComponent,
        TwoColumnsLayoutComponent,
    ];
    var THEME_PIPES = [
        CapitalizePipe,
        PluralPipe,
        RoundPipe,
        TimingPipe,
        NumberWithCommasPipe,
    ];
    var DoThemeModule = /** @class */ (function () {
        function DoThemeModule() {
        }
        DoThemeModule.forRoot = function () {
            return {
                ngModule: DoThemeModule,
                providers: __spread(theme.NbThemeModule.forRoot({
                    name: 'default',
                }, [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME]).providers),
            };
        };
        DoThemeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: __spread([common.CommonModule], NB_MODULES),
                        exports: __spread([common.CommonModule], THEME_PIPES, THEME_COMPONENTS),
                        declarations: __spread(THEME_COMPONENTS, THEME_PIPES),
                    },] }
        ];
        return DoThemeModule;
    }());

    exports.CORPORATE_THEME = CORPORATE_THEME;
    exports.COSMIC_THEME = COSMIC_THEME;
    exports.CapitalizePipe = CapitalizePipe;
    exports.DARK_THEME = DARK_THEME;
    exports.DEFAULT_THEME = DEFAULT_THEME;
    exports.DoThemeModule = DoThemeModule;
    exports.FooterComponent = FooterComponent;
    exports.HeaderComponent = HeaderComponent;
    exports.NumberWithCommasPipe = NumberWithCommasPipe;
    exports.OneColumnLayoutComponent = OneColumnLayoutComponent;
    exports.PluralPipe = PluralPipe;
    exports.RoundPipe = RoundPipe;
    exports.SearchInputComponent = SearchInputComponent;
    exports.ThreeColumnsLayoutComponent = ThreeColumnsLayoutComponent;
    exports.TimingPipe = TimingPipe;
    exports.TwoColumnsLayoutComponent = TwoColumnsLayoutComponent;
    exports.ɵa = NB_MODULES;
    exports.ɵb = THEME_COMPONENTS;
    exports.ɵc = THEME_PIPES;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=dongkap-do-theme.umd.js.map
