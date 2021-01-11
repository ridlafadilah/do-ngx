(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@nebular/theme'), require('@dongkap/do-theme'), require('@dongkap/do-common'), require('@angular/router'), require('@swimlane/ngx-datatable'), require('@dongkap/do-auth'), require('rxjs/operators'), require('@dongkap/do-core'), require('@angular/animations'), require('rxjs'), require('tree-ngx')) :
    typeof define === 'function' && define.amd ? define('@dongkap/do-sys', ['exports', '@angular/core', '@angular/forms', '@nebular/theme', '@dongkap/do-theme', '@dongkap/do-common', '@angular/router', '@swimlane/ngx-datatable', '@dongkap/do-auth', 'rxjs/operators', '@dongkap/do-core', '@angular/animations', 'rxjs', 'tree-ngx'], factory) :
    (global = global || self, factory((global.dongkap = global.dongkap || {}, global.dongkap['do-sys'] = {}), global.ng.core, global.ng.forms, global['@nebular/theme'], global['@dongkap/do-theme'], global['@dongkap/do-common'], global.ng.router, global['@swimlane/ngx-datatable'], global['@dongkap/do-auth'], global.rxjs.operators, global['@dongkap/do-core'], global.ng.animations, global.rxjs, global['tree-ngx']));
}(this, (function (exports, core, forms, theme, doTheme, doCommon, router, ngxDatatable, doAuth, operators, doCore, animations, rxjs, treeNgx) { 'use strict';

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

    var LocaleComponent = /** @class */ (function () {
        function LocaleComponent() {
        }
        LocaleComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-locale',
                        template: "\n    <router-outlet></router-outlet>\n  "
                    },] }
        ];
        return LocaleComponent;
    }());

    var LocaleService = /** @class */ (function () {
        function LocaleService() {
        }
        LocaleService.prototype.getLocale = function () {
            return this.locale;
        };
        LocaleService.prototype.setLocale = function (locale) {
            this.locale = locale;
        };
        LocaleService.decorators = [
            { type: core.Injectable }
        ];
        return LocaleService;
    }());

    var LocaleListPageComponent = /** @class */ (function (_super) {
        __extends(LocaleListPageComponent, _super);
        function LocaleListPageComponent(injector, router, localeService) {
            var _this = _super.call(this, injector, {
                'localeCode': [],
                'identifier': [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.localeService = localeService;
            _this.selectionType = ngxDatatable.SelectionType.single;
            _this.columns = [
                { name: 'Language Code', prop: 'localeCode', width: 125, frozenLeft: true },
                { name: 'Language', prop: 'identifier', width: 275, frozenLeft: true },
                { name: 'Icon', prop: 'icon', width: 75, frozenLeft: true, type: 'icon' },
                { name: 'System Default Language', prop: 'localeDefault', width: 175, frozenLeft: true },
                { name: 'Created', prop: 'createdBy' },
                { name: 'Created Date', prop: 'createdDate' },
                { name: 'Modified', prop: 'modifiedBy' },
                { name: 'Modified Date', prop: 'modifiedDate' },
                { name: 'Active', prop: 'active' },
            ];
            _this.expanded = false;
            _this.apiPath = _this.api['master']['datatable-locale'];
            _this.filters = [
                { controlName: 'localeCode', type: 'input' },
                { controlName: 'identifier', type: 'input' }
            ];
            return _this;
        }
        LocaleListPageComponent.prototype.ngOnInit = function () {
        };
        LocaleListPageComponent.prototype.onAddGroup = function () {
            this.router.navigate(['/app/sysconf/i18n', 'add']);
        };
        LocaleListPageComponent.prototype.onViewDetail = function (data) {
            this.localeService.setLocale(data);
            this.router.navigate(['/app/sysconf/i18n', 'edit']);
        };
        LocaleListPageComponent.prototype.onReset = function () {
            this.router.navigate(['/app/sysconf/i18n']);
        };
        LocaleListPageComponent.prototype.back = function () {
            this.router.navigate(['/app/sysconf/i18n']);
            return false;
        };
        LocaleListPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: LocaleService }
        ]; };
        LocaleListPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-locale-list-page',
                        template: "<do-page-outlet [header]=\"'i18n'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onAdd)=\"onAddGroup()\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'localeCode'\"\n            [label]=\"'Locale Code'\"\n            formControlName=\"localeCode\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'identifier'\"\n            [label]=\"'Identifier'\"\n            formControlName=\"identifier\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n",
                        styles: [""]
                    },] }
        ];
        LocaleListPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: LocaleService }
        ]; };
        return LocaleListPageComponent;
    }(doCommon.BaseFilterComponent));

    var DialogFlagComponent = /** @class */ (function () {
        function DialogFlagComponent(ref) {
            this.ref = ref;
            this.flags = ['ad', 'ae', 'af', 'ag', 'ai', 'al', 'am', 'ao', 'aq', 'ar', 'as',
                'at', 'au', 'aw', 'ax', 'az', 'ba', 'bb', 'bd', 'be', 'bf', 'bg',
                'bh', 'bi', 'bj', 'bl', 'bm', 'bn', 'bo', 'bq', 'br', 'bs', 'bt',
                'bv', 'bw', 'by', 'bz', 'ca', 'cc', 'cd', 'cf', 'cg', 'ch', 'ci',
                'ck', 'cl', 'cm', 'cn', 'co', 'cr', 'cu', 'cv', 'cw', 'cx', 'cy',
                'cz', 'de', 'dj', 'dk', 'dm', 'do', 'dz', 'ec', 'ee', 'eg', 'eh',
                'er', 'es-ca', 'es', 'et', 'eu', 'fi', 'fj', 'fk', 'fm', 'fo', 'fr',
                'ga', 'gb-eng', 'gb-nir', 'gb-sct', 'gb-wls', 'gb', 'gd', 'ge', 'gf',
                'gg', 'gh', 'gi', 'gl', 'gm', 'gn', 'gp', 'gq', 'gr', 'gs', 'gt',
                'gu', 'gw', 'gy', 'hk', 'hm', 'hn', 'hr', 'ht', 'hu', 'id', 'ie',
                'il', 'im', 'in', 'io', 'iq', 'ir', 'is', 'it', 'je', 'jm', 'jo',
                'jp', 'ke', 'kg', 'kh', 'ki', 'km', 'kn', 'kp', 'kr', 'kw', 'ky',
                'kz', 'la', 'lb', 'lc', 'li', 'lk', 'lr', 'ls', 'lt', 'lu', 'lv',
                'ly', 'ma', 'mc', 'md', 'me', 'mf', 'mg', 'mh', 'mk', 'ml', 'mm',
                'mn', 'mo', 'mp', 'mq', 'mr', 'ms', 'mt', 'mu', 'mv', 'mw', 'mx',
                'my', 'mz', 'na', 'nc', 'ne', 'nf', 'ng', 'ni', 'nl', 'no', 'np',
                'nr', 'nu', 'nz', 'om', 'pa', 'pe', 'pf', 'pg', 'ph', 'pk', 'pl',
                'pm', 'pn', 'pr', 'ps', 'pt', 'pw', 'py', 'qa', 're', 'ro', 'rs',
                'ru', 'rw', 'sa', 'sb', 'sc', 'sd', 'se', 'sg', 'sh', 'si', 'sj',
                'sk', 'sl', 'sm', 'sn', 'so', 'sr', 'ss', 'st', 'sv', 'sx', 'sy',
                'sz', 'tc', 'td', 'tf', 'tg', 'th', 'tj', 'tk', 'tl', 'tm', 'tn',
                'to', 'tr', 'tt', 'tv', 'tw', 'tz', 'ua', 'ug', 'um', 'un', 'us',
                'uy', 'uz', 'va', 'vc', 've', 'vg', 'vi', 'vn', 'vu', 'wf', 'ws',
                'xk', 'ye', 'yt', 'za', 'zm', 'zw'];
        }
        DialogFlagComponent.prototype.choose = function (flag) {
            this.ref.close('flag-icon flag-icon-' + flag);
        };
        DialogFlagComponent.ctorParameters = function () { return [
            { type: theme.NbDialogRef }
        ]; };
        DialogFlagComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-dialog-flag',
                        template: "<nb-card>\n  <nb-card-header>\n    {{ 'Choose Flag' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <span class=\"flag-icon flag-icon-{{flag}} choose-flag\" (click)=\"choose(flag)\" *ngFor=\"let flag of flags\"></span>\n  </nb-card-body>\n</nb-card>\n",
                        styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.deactivated-button{width:100%}.nb-theme-default :host .flag-icon{margin:.75rem}.nb-theme-default :host .choose-flag{cursor:pointer}.nb-theme-dark :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.deactivated-button{width:100%}.nb-theme-dark :host .flag-icon{margin:.75rem}.nb-theme-dark :host .choose-flag{cursor:pointer}.nb-theme-cosmic :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.deactivated-button{width:100%}.nb-theme-cosmic :host .flag-icon{margin:.75rem}.nb-theme-cosmic :host .choose-flag{cursor:pointer}.nb-theme-corporate :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.deactivated-button{width:100%}@media (max-width:767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.deactivated-button{font-size:.6rem}.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.deactivated-button{font-size:.6rem}.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.deactivated-button{font-size:.6rem}.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.deactivated-button{font-size:.6rem}}.nb-theme-corporate :host .flag-icon{margin:.75rem}.nb-theme-corporate :host .choose-flag{cursor:pointer}"]
                    },] }
        ];
        DialogFlagComponent.ctorParameters = function () { return [
            { type: theme.NbDialogRef }
        ]; };
        return DialogFlagComponent;
    }());

    var LocaleAddEditPageComponent = /** @class */ (function (_super) {
        __extends(LocaleAddEditPageComponent, _super);
        function LocaleAddEditPageComponent(injector, router, route, localeService, dialogService) {
            var _this = _super.call(this, injector, {
                'language': [],
                'icon': [],
                'default': [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.route = route;
            _this.localeService = localeService;
            _this.dialogService = dialogService;
            _this.action = 'Add';
            _this.dataDefault = [
                {
                    selected: false,
                },
            ];
            if (_this.localeService.getLocale() || (_this.route.snapshot.params['action'] === 'add')) {
                if ((_this.route.snapshot.params['action'] === 'edit')) {
                    _this.action = 'Edit';
                }
                _this.apiSelectLanguage = _this.api['master']['select-language'];
                if (_this.localeService.getLocale() && (_this.route.snapshot.params['action'] === 'edit')) {
                    if (_this.localeService.getLocale().localeDefault) {
                        _this.formGroup.get('default').setValue([{
                                selected: true,
                            }]);
                        _this.formGroup.get('default').disable();
                    }
                    else {
                        _this.formGroup.get('default').setValue([{
                                selected: false,
                            }]);
                    }
                    _this.formGroup.get('icon').setValue(_this.localeService.getLocale().icon);
                    _this.formGroup.get('language').setValue(_this.localeService.getLocale().identifier);
                    _this.formGroup.get('language').disable();
                }
            }
            else {
                _this.router.navigate(['/app/sysconf/i18n']);
            }
            return _this;
        }
        LocaleAddEditPageComponent.prototype.ngOnInit = function () { };
        LocaleAddEditPageComponent.prototype.onSearchFlag = function () {
            var _this = this;
            this.dialogService.open(DialogFlagComponent)
                .onClose.subscribe(function (flagIcon) {
                _this.formGroup.get('icon').setValue(flagIcon);
                _this.formGroup.get('icon').markAsDirty();
            });
        };
        LocaleAddEditPageComponent.prototype.onReset = function () {
            this.router.navigate(['/app/sysconf/i18n']);
        };
        LocaleAddEditPageComponent.prototype.onSubmit = function () {
            var _this = this;
            var localeDefault = this.formGroup.get('default').value;
            var data = {
                icon: this.formGroup.get('icon').value,
                localeDefault: (localeDefault ? true : false),
                localeCode: this.formGroup.get('language').value['value'] ?
                    this.formGroup.get('language').value['value'] : this.localeService.getLocale().localeCode,
                identifier: this.formGroup.get('language').value['label'] ?
                    this.formGroup.get('language').value['label'] : this.localeService.getLocale().identifier,
                localeEnabled: true,
            };
            _super.prototype.onSubmit.call(this, data, 'master', 'post-locale')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response.respStatusCode === doCore.ResponseCode.OK_SCR010.toString()) {
                    _this.router.navigate(['/app/sysconf/i18n']);
                }
            });
        };
        LocaleAddEditPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: LocaleService },
            { type: theme.NbDialogService }
        ]; };
        LocaleAddEditPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-locale-add-edit-page',
                        template: "<do-page-outlet [header]=\"'header.'+action+'-i18n'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <do-select\n          [name]=\"'language'\"\n          [label]=\"'Language'\"\n          [required]=\"true\"\n          [api]=\"apiSelectLanguage\"\n          formControlName=\"language\">\n        </do-select>\n        <do-input-icon\n          [name]=\"'icon'\"\n          [label]=\"'Icon'\"\n          [required]=\"true\"\n          [icon]=\"'search-outline'\"\n          [iconcursor]=\"true\"\n          [eva]=\"true\"\n          (clickIcon)=\"onSearchFlag()\"\n          formControlName=\"icon\">\n        </do-input-icon>\n        <do-checkbox\n          [name]=\"'checkbox'\"\n          [label]=\"'System Default Language'\"\n          [data]=\"dataDefault\"\n          formControlName=\"default\">\n        </do-checkbox>\n        <div class=\"form-group row\">\n          <div class=\"offset-sm-3 col-sm-9\">\n            <button\n              type=\"reset\"\n              status=\"danger\"\n              (click)=\"onReset()\"\n              class=\"reset-left\"\n              nbButton>\n              {{ 'Cancel' | translate}}\n            </button>\n            <button\n              type=\"submit\"\n              status=\"primary\"\n              (click)=\"onSubmit()\"\n              [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n              class=\"submit-right\"\n              nbButton>\n              {{ action | translate}}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</do-page-outlet>\n",
                        styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}"]
                    },] }
        ];
        LocaleAddEditPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: LocaleService },
            { type: theme.NbDialogService }
        ]; };
        return LocaleAddEditPageComponent;
    }(doCommon.BaseFormComponent));

    var ɵ0 = {
        code: '#SYSCONF-I18N-PAGE',
    }, ɵ1 = {
        code: '#SYSCONF-I18N-PAGE',
    };
    var routes = [{
            path: '',
            component: LocaleComponent,
            canActivateChild: [doAuth.AuthGuardChildService],
            children: [
                {
                    path: '',
                    component: LocaleListPageComponent,
                    data: ɵ0,
                },
                {
                    path: ':action',
                    component: LocaleAddEditPageComponent,
                    data: ɵ1,
                },
            ],
        }];
    var DoLocaleRoutingModule = /** @class */ (function () {
        function DoLocaleRoutingModule() {
        }
        DoLocaleRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forChild(routes)],
                        exports: [router.RouterModule],
                    },] }
        ];
        return DoLocaleRoutingModule;
    }());

    var components = [
        LocaleComponent,
        LocaleListPageComponent,
        LocaleAddEditPageComponent,
        DialogFlagComponent,
    ];
    var modules = [
        forms.FormsModule,
        forms.ReactiveFormsModule,
        theme.NbCardModule,
        theme.NbAlertModule,
        theme.NbIconModule,
        theme.NbDialogModule.forChild(),
        doTheme.DoThemeModule,
        doCommon.DoInputModule,
        doCommon.DoCheckBoxModule,
        doCommon.DoButtonModule,
        doCommon.DoBaseModule,
        doCommon.DoSelectModule,
        doCommon.DoTableModule,
        DoLocaleRoutingModule,
    ];
    var providers = [
        LocaleService,
    ];
    var entryComponents = [
        DialogFlagComponent,
    ];
    var DoLocaleModule = /** @class */ (function () {
        function DoLocaleModule() {
        }
        DoLocaleModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: __spread(modules),
                        declarations: __spread(components),
                        providers: __spread(providers),
                        entryComponents: __spread(entryComponents),
                    },] }
        ];
        return DoLocaleModule;
    }());

    var ParameterComponent = /** @class */ (function () {
        function ParameterComponent() {
        }
        ParameterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-parameter',
                        template: "\n    <router-outlet></router-outlet>\n  "
                    },] }
        ];
        return ParameterComponent;
    }());

    var ParameterService = /** @class */ (function () {
        function ParameterService() {
        }
        ParameterService.prototype.getParameter = function () {
            return this.parameter;
        };
        ParameterService.prototype.setParameter = function (parameter) {
            this.parameter = parameter;
        };
        ParameterService.prototype.getParameterGroup = function () {
            return this.parameterGroup;
        };
        ParameterService.prototype.setParameterGroup = function (parameterGroup) {
            this.parameterGroup = parameterGroup;
        };
        ParameterService.prototype.getLocales = function () {
            return this.locales;
        };
        ParameterService.prototype.setLocales = function (locales) {
            this.locales = locales;
        };
        ParameterService.decorators = [
            { type: core.Injectable }
        ];
        return ParameterService;
    }());

    var ParameterListGroupPageComponent = /** @class */ (function (_super) {
        __extends(ParameterListGroupPageComponent, _super);
        function ParameterListGroupPageComponent(injector, router, parameterService, dialogService) {
            var _this = _super.call(this, injector, {
                'parameterGroupCode': [],
                'parameterGroupName': [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.parameterService = parameterService;
            _this.dialogService = dialogService;
            _this.columns = [
                { name: 'Parameter Group Code', prop: 'parameterGroupCode', width: 220, frozenLeft: true },
                { name: 'Parameter Group Name', prop: 'parameterGroupName', width: 200, frozenLeft: true },
                { name: 'Created', prop: 'createdBy' },
                { name: 'Created Date', prop: 'createdDate' },
                { name: 'Modified', prop: 'modifiedBy' },
                { name: 'Modified Date', prop: 'modifiedDate' },
                { name: 'Active', prop: 'active' },
            ];
            _this.reload = false;
            _this.filters = [
                { controlName: 'parameterGroupCode', type: 'input' },
                { controlName: 'parameterGroupName', type: 'input' }
            ];
            _this.apiPath = _this.api['master']['datatable-parameter-group'];
            _this.apiPathLocale = _this.api['master']['all-locale'];
            _this.apiPathDelete = _this.api['master']['delete-parameter-group'];
            return _this;
        }
        ParameterListGroupPageComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.http.HTTP_AUTH(this.apiPathLocale).subscribe(function (value) {
                _this.parameterService.setLocales(value);
            });
        };
        ParameterListGroupPageComponent.prototype.onAddGroup = function () {
            this.router.navigate(['/app/sysconf/parameter/group', 'add']);
        };
        ParameterListGroupPageComponent.prototype.onViewDetail = function (data) {
            this.parameterService.setParameterGroup({
                parameterGroupCode: data['parameterGroupCode'],
                parameterGroupName: data['parameterGroupName'],
            });
            this.router.navigate(['/app/sysconf/parameter/detail']);
        };
        ParameterListGroupPageComponent.prototype.onDeleteGroup = function (data, dialog) {
            var _this = this;
            this.parameterGroupCodes = [];
            data.forEach(function (value) {
                _this.parameterGroupCodes.push(value.parameterGroupCode);
            });
            this.dialogService.open(dialog, { context: 'alert.delete' });
        };
        ParameterListGroupPageComponent.prototype.onDelete = function (ref) {
            var _this = this;
            this.disabled = true;
            this.http.HTTP_AUTH(this.apiPathDelete, this.parameterGroupCodes)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (success) {
                ref.close();
                _this.disabled = false;
                _this.reload = true;
                _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
            }, function (error) {
                _this.disabled = false;
                _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        };
        ParameterListGroupPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: ParameterService },
            { type: theme.NbDialogService }
        ]; };
        ParameterListGroupPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-parameter-list-group-page',
                        template: "<do-page-outlet [header]=\"'Parameter Group'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [reloadFn]=\"reload\"\n        (onAdd)=\"onAddGroup()\"\n        (onEdit)=\"onViewDetail($event)\"\n        (onDelete)=\"onDeleteGroup($event, dialogdelete)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'parameterGroupCode'\"\n            [label]=\"'Parameter Group Code'\"\n            formControlName=\"parameterGroupCode\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'parameterGroupName'\"\n            [label]=\"'Parameter Group Name'\"\n            formControlName=\"parameterGroupName\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n\n<ng-template #dialogdelete let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <div class=\"row\">\n        <button\n          type=\"reset\"\n          status=\"danger\"\n          (click)=\"ref.close()\"\n          class=\"reset-left\"\n          nbButton>\n          {{ 'Cancel' | translate}}\n        </button>\n        <button\n          type=\"submit\"\n          status=\"primary\"\n          (click)=\"onDelete(ref)\"\n          [disabled]=\"disabled\"\n          class=\"submit-right\"\n          nbButton>\n          {{ 'Delete' | translate}}\n        </button>\n      </div>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>",
                        styles: [".reset-left{margin-left:1rem;margin-right:.5rem}.submit-right{margin-left:.5rem}"]
                    },] }
        ];
        ParameterListGroupPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: ParameterService },
            { type: theme.NbDialogService }
        ]; };
        return ParameterListGroupPageComponent;
    }(doCommon.BaseFilterComponent));

    var ParameterAddGroupPageComponent = /** @class */ (function (_super) {
        __extends(ParameterAddGroupPageComponent, _super);
        function ParameterAddGroupPageComponent(injector, router) {
            var _this = _super.call(this, injector, {
                'parameterGroupCode': [],
                'parameterGroupName': [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            return _this;
        }
        ParameterAddGroupPageComponent.prototype.ngOnInit = function () { };
        ParameterAddGroupPageComponent.prototype.onReset = function () {
            this.router.navigate(['/app/sysconf/parameter']);
        };
        ParameterAddGroupPageComponent.prototype.onSubmit = function () {
            var _this = this;
            _super.prototype.onSubmit.call(this, this.formGroup.value, 'master', 'post-parameter-group')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response.respStatusCode === doCore.ResponseCode.OK_SCR009.toString()) {
                    _this.router.navigate(['/app/sysconf/parameter']);
                }
            });
        };
        ParameterAddGroupPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router }
        ]; };
        ParameterAddGroupPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-parameter-add-group-page',
                        template: "<do-page-outlet [header]=\"'Add Parameter Group'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'parameterGroupCode'\"\n          [label]=\"'Parameter Group Code'\"\n          [required]=\"true\"\n          formControlName=\"parameterGroupCode\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'parameterGroupName'\"\n          [label]=\"'Parameter Group Name'\"\n          [required]=\"true\"\n          formControlName=\"parameterGroupName\">\n        </do-input-text>\n        <div class=\"form-group row\">\n          <div class=\"offset-sm-3 col-sm-9\">\n            <button\n              type=\"reset\"\n              status=\"danger\"\n              (click)=\"onReset()\"\n              class=\"reset-left\"\n              nbButton>\n              {{ 'Cancel' | translate}}\n            </button>\n            <button\n              type=\"submit\"\n              status=\"primary\"\n              (click)=\"onSubmit()\"\n              [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n              class=\"submit-right\"\n              nbButton>\n              {{ 'Add' | translate}}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</do-page-outlet>\n",
                        styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}"]
                    },] }
        ];
        ParameterAddGroupPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router }
        ]; };
        return ParameterAddGroupPageComponent;
    }(doCommon.BaseFormComponent));

    var ParameterGroupModel = /** @class */ (function () {
        function ParameterGroupModel() {
        }
        return ParameterGroupModel;
    }());
    var ParameterModel = /** @class */ (function (_super) {
        __extends(ParameterModel, _super);
        function ParameterModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ParameterModel;
    }(ParameterGroupModel));
    var ParameterI18nModel = /** @class */ (function (_super) {
        __extends(ParameterI18nModel, _super);
        function ParameterI18nModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ParameterI18nModel;
    }(ParameterModel));

    var ParameterEditGroupCollapseComponent = /** @class */ (function () {
        function ParameterEditGroupCollapseComponent() {
            var _this = this;
            this.toggle = function () {
                _this.opened$.pipe(operators.take(1)).subscribe(function (x) { return _this.openedSubject.next(!x); });
            };
            this.openedSubject = new rxjs.ReplaySubject(1);
            this.openedSubject.next(false);
            this.opened$ = this.openedSubject.asObservable();
            this.openedState$ = this.opened$.pipe(operators.map(function (x) { return x ? 'expanded' : 'collapsed'; }));
        }
        ParameterEditGroupCollapseComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-parameter-edit-group-collapse, [do-parameter-edit-group-collapse]',
                        template: "<div class=\"row\"\n    [@openedState]=\"openedState$ | async\"\n    [ngClass]=\"openedState$ | async\">\n    <ng-content></ng-content>\n</div>",
                        animations: [
                            animations.trigger('openedState', [
                                animations.state('collapsed', animations.style({
                                    opacity: 0,
                                    overflow: 'hidden',
                                    height: '0px',
                                    minHeight: '0',
                                    padding: '0 0 0 1.25rem',
                                })),
                                animations.state('expanded', animations.style({
                                    opacity: 1,
                                    overflow: 'hidden',
                                    height: '*',
                                    padding: '0 1.25rem',
                                })),
                                animations.transition('collapsed <=> expanded', animations.animate('500ms ease-in-out')),
                            ]),
                        ],
                        styles: [""]
                    },] }
        ];
        ParameterEditGroupCollapseComponent.ctorParameters = function () { return []; };
        return ParameterEditGroupCollapseComponent;
    }());

    var ParameterListDetailPageComponent = /** @class */ (function (_super) {
        __extends(ParameterListDetailPageComponent, _super);
        function ParameterListDetailPageComponent(injector, router, parameterService) {
            var _this = _super.call(this, injector, {
                'parameterCode': [],
            }, {
                'parameterGroupCode': [],
                'parameterGroupName': [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.parameterService = parameterService;
            _this.selectionType = ngxDatatable.SelectionType.single;
            _this.columns = [
                { name: 'Parameter Code', prop: 'parameterCode', width: 350, frozenLeft: true },
                { name: 'Created', prop: 'createdBy' },
                { name: 'Created Date', prop: 'createdDate' },
                { name: 'Modified', prop: 'modifiedBy' },
                { name: 'Modified Date', prop: 'modifiedDate' },
                { name: 'Active', prop: 'active' },
            ];
            _this.parameterGroup = new ParameterGroupModel();
            _this.expanded = false;
            if (_this.parameterService.getParameterGroup()) {
                _this.apiPath = _this.api['master']['datatable-parameter'];
                _this.filters = [{ controlName: 'parameterCode', type: 'input' }];
                _this.parameterGroup = _this.parameterService.getParameterGroup();
                _this.keyword = {
                    parameterGroupCode: _this.parameterGroup.parameterGroupCode,
                };
                _this.formGroup.get('parameterGroupCode').setValue(_this.parameterGroup.parameterGroupCode);
                _this.formGroup.get('parameterGroupName').setValue(_this.parameterGroup.parameterGroupName);
            }
            else {
                _this.router.navigate(['/app/sysconf/parameter']);
            }
            return _this;
        }
        ParameterListDetailPageComponent.prototype.ngOnInit = function () {
        };
        ParameterListDetailPageComponent.prototype.onAddGroup = function (event) {
            this.parameterService.setParameter(null);
            this.router.navigate(['/app/sysconf/parameter/detail', 'add']);
        };
        ParameterListDetailPageComponent.prototype.onViewDetail = function (data) {
            this.parameterService.setParameter({
                parameterGroupCode: data['parameterGroupCode'],
                parameterGroupName: data['parameterGroupName'],
                parameterCode: data['parameterCode'],
            });
            this.router.navigate(['/app/sysconf/parameter/detail', 'edit']);
        };
        ParameterListDetailPageComponent.prototype.onReset = function () {
            this.router.navigate(['/app/sysconf/parameter']);
        };
        ParameterListDetailPageComponent.prototype.back = function () {
            this.router.navigate(['/app/sysconf/parameter']);
            return false;
        };
        ParameterListDetailPageComponent.prototype.doExpanded = function () {
            this.collapse.toggle();
            this.expanded = !this.expanded;
        };
        ParameterListDetailPageComponent.prototype.onSubmit = function () {
            _super.prototype.onSubmit.call(this, this.formGroup.value, 'master', 'post-parameter-group');
        };
        ParameterListDetailPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: ParameterService }
        ]; };
        ParameterListDetailPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-parameter-list-detail-page',
                        template: "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n        <nav class=\"navigation\">\n            <a href=\"#\" (click)=\"back()\" class=\"link back-link\" aria-label=\"Back\">\n                <nb-icon icon=\"arrow-back\"></nb-icon>\n            </a>\n            {{'Edit Parameter Group' | translate}}\n            <div class=\"link back-link parameter-expanded\">\n              <nb-icon\n                  [icon]=\"expanded ? 'arrow-upward-outline' : 'arrow-downward-outline'\"\n                  (click)=\"doExpanded()\">\n              </nb-icon>\n            </div>\n        </nav>\n      </nb-card-header>\n      <div do-parameter-edit-group-collapse #collapseparameter>\n        <nb-card-body>\n          <div class=\"row\">\n            <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n              <form [formGroup]=\"formGroup\">\n                <do-input-text\n                  [name]=\"'parameterGroupName'\"\n                  [label]=\"'Parameter Group Name'\"\n                  [required]=\"true\"\n                  formControlName=\"parameterGroupName\">\n                </do-input-text>\n                <div class=\"form-group row\">\n                  <div class=\"offset-sm-3 col-sm-9\">\n                    <button\n                      type=\"reset\"\n                      status=\"danger\"\n                      (click)=\"onReset()\"\n                      class=\"reset-left\"\n                      nbButton>\n                      {{ 'Cancel' | translate}}\n                    </button>\n                    <button\n                      type=\"submit\"\n                      status=\"primary\"\n                      (click)=\"onSubmit()\"\n                      [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n                      class=\"submit-right\"\n                      nbButton>\n                      {{ 'Edit' | translate}}\n                    </button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </nb-card-body>\n      </div>\n    </nb-card>\n  </div>\n</div>\n\n<do-page-outlet [url]=\"'/app/sysconf/parameter'\" [header]=\"'header.parameter'\" [param]=\"{value: parameterGroup.parameterGroupName}\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onAdd)=\"onAddGroup($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'parameterCode'\"\n            [label]=\"'Parameter Code'\"\n            formControlName=\"parameterCode\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n",
                        styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}.parameter-expanded{position:absolute;right:0;padding:0 1.75rem;cursor:pointer}"]
                    },] }
        ];
        ParameterListDetailPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: ParameterService }
        ]; };
        ParameterListDetailPageComponent.propDecorators = {
            collapse: [{ type: core.ViewChild, args: ['collapseparameter', { static: false },] }]
        };
        return ParameterListDetailPageComponent;
    }(doCommon.BaseFilterComponent));

    var ParameterDoDetailPageComponent = /** @class */ (function (_super) {
        __extends(ParameterDoDetailPageComponent, _super);
        function ParameterDoDetailPageComponent(injector, router, parameterService, route) {
            var _this = _super.call(this, injector, {
                'parameterCode': [],
                'en-US': [],
                'id-ID': [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.parameterService = parameterService;
            _this.route = route;
            _this.action = 'Add';
            _this.parameter = new ParameterModel();
            _this.parameterGroup = new ParameterGroupModel();
            _this.allLocales = [];
            _this.locales = [];
            _this.localeDefault = new doCore.LocaleModel();
            _this.isEdit = false;
            if (_this.parameterService.getParameterGroup()) {
                _this.parameterGroup = _this.parameterService.getParameterGroup();
                if ((_this.route.snapshot.params['action'] === 'edit')) {
                    if (_this.parameterService.getParameter()) {
                        _this.action = 'Edit';
                        _this.isEdit = true;
                        _this.parameter = _this.parameterService.getParameter();
                    }
                    else {
                        _this.router.navigate(['/app/sysconf/parameter']);
                    }
                }
                if (!_this.parameterService.getLocales()) {
                    _this.apiPathLocale = _this.api['master']['all-locale'];
                    _this.http.HTTP_AUTH(_this.apiPathLocale).subscribe(function (response) {
                        _this.parameterService.setLocales(response);
                        _this.splitLocale(response);
                    });
                }
                else {
                    _this.splitLocale(_this.parameterService.getLocales());
                }
                if (_this.isEdit) {
                    _this.formGroup.get('parameterCode').setValue(_this.parameter.parameterCode);
                    _this.formGroup.get('parameterCode').disable({ emitEvent: true });
                    _this.apiPathParameterI18n = _this.api['master']['all-parameter-i18n'];
                    _this.loadingForm = true;
                    _this.http.HTTP_AUTH(_this.apiPathParameterI18n, {
                        'parameterCode': _this.parameter.parameterCode,
                    }).subscribe(function (response) {
                        response.forEach(function (data) {
                            _this.formGroup.get(data.locale).setValue(data.parameterValue);
                            _this.loadingForm = false;
                        });
                    });
                }
            }
            else {
                _this.router.navigate(['/app/sysconf/parameter']);
            }
            return _this;
        }
        ParameterDoDetailPageComponent.prototype.splitLocale = function (values) {
            var _this = this;
            this.allLocales = values;
            values.forEach(function (data) {
                if (data.localeDefault) {
                    _this.localeDefault = data;
                }
                else {
                    _this.locales.push(data);
                }
                _this.formGroup.removeControl(data.localeCode);
                _this.formGroup.addControl(data.localeCode, new forms.FormControl());
            });
        };
        ParameterDoDetailPageComponent.prototype.ngOnInit = function () { };
        ParameterDoDetailPageComponent.prototype.onReset = function () {
            this.router.navigate(['/app/sysconf/parameter/detail']);
        };
        ParameterDoDetailPageComponent.prototype.onSubmit = function () {
            var _this = this;
            var data = this.formGroup.value;
            if (this.isEdit)
                data.parameterCode = this.parameter.parameterCode;
            data.parameterGroupCode = this.parameterGroup.parameterGroupCode;
            data.parameterValues = {};
            this.allLocales.forEach(function (value) {
                data.parameterValues[value.localeCode] = _this.formGroup.get(value.localeCode).value;
            });
            _super.prototype.onSubmit.call(this, data, 'master', 'post-parameter-i18n')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response.respStatusCode === doCore.ResponseCode.OK_SCR009.toString()) {
                    _this.router.navigate(['/app/sysconf/parameter/detail']);
                }
            });
        };
        ParameterDoDetailPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: ParameterService },
            { type: router.ActivatedRoute }
        ]; };
        ParameterDoDetailPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-parameter-do-detail-page',
                        template: "<do-page-outlet [header]=\"action + ' Parameter'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'parameterCode'\"\n          [label]=\"'Parameter Code'\"\n          [required]=\"!isEdit\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"parameterCode\">\n        </do-input-text>\n        <div class=\"header\">\n          <div class=\"form-group row\">\n            <label\n              for=\"Parameter Value\"\n              class=\"label col-sm-3 col-form-label\"\n              *ngIf=\"!loadingForm; else labelskeleton\">\n              {{'Parameter Value' | translate}}\n            </label>\n            <ng-template #labelskeleton>\n              <div class=\"col-sm-3\">\n                <div\n                  [ngClass]=\"{\n                    'label-skeleton': true,\n                    'skeleton': loadingForm\n                  }\">\n                </div>\n              </div>\n            </ng-template>\n            <div class=\"col-sm-9\">\n              <do-input-icon *ngIf=\"localeDefault.localeCode\"\n                [name]=\"localeDefault.localeCode\"\n                [nolabel]=\"true\"\n                [required]=\"true\"\n                [colLabel]=\"0\"\n                [colInput]=\"12\"\n                [icon]=\"'flag-icon flag-icon-' + localeDefault.icon\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"{{localeDefault.localeCode}}\">\n              </do-input-icon>\n            </div>\n          </div>\n        </div>\n        <do-input-icon *ngFor=\"let i18n of locales\"\n          [name]=\"i18n.localeCode\"\n          [nolabel]=\"true\"\n          [icon]=\"'flag-icon flag-icon-'+ i18n.icon\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"{{i18n.localeCode}}\">\n        </do-input-icon>\n        <div class=\"form-group row\">\n          <div class=\"offset-sm-3 col-sm-9\" *ngIf=\"!loadingForm; else buttonskeleton\">\n            <button\n              type=\"reset\"\n              status=\"danger\"\n              (click)=\"onReset()\"\n              class=\"reset-left\"\n              nbButton>\n              {{ 'Cancel' | translate}}\n            </button>\n            <button\n              type=\"submit\"\n              status=\"primary\"\n              (click)=\"onSubmit()\"\n              [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n              class=\"submit-right\"\n              nbButton>\n              {{ action | translate}}\n            </button>\n          </div>\n          <ng-template #buttonskeleton>\n            <div class=\"offset-sm-3 col-sm-9\">\n              <div\n                [ngClass]=\"{\n                  'button-skeleton': true,\n                  'skeleton': loadingForm\n                }\">\n              </div>\n            </div>\n          </ng-template>\n        </div>\n      </form>\n    </div>\n  </div>\n</do-page-outlet>\n",
                        styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}"]
                    },] }
        ];
        ParameterDoDetailPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: ParameterService },
            { type: router.ActivatedRoute }
        ]; };
        return ParameterDoDetailPageComponent;
    }(doCommon.BaseFormComponent));

    var ɵ0$1 = {
        code: '#SYSCONF-PARAMETER-PAGE',
    }, ɵ1$1 = {
        code: '#SYSCONF-PARAMETER-PAGE',
    }, ɵ2 = {
        code: '#SYSCONF-PARAMETER-PAGE',
    }, ɵ3 = {
        code: '#SYSCONF-PARAMETER-PAGE',
    }, ɵ4 = {
        code: '#SYSCONF-PARAMETER-PAGE',
    };
    var routes$1 = [{
            path: '',
            component: ParameterComponent,
            canActivateChild: [doAuth.AuthGuardChildService],
            children: [
                {
                    path: '',
                    component: ParameterListGroupPageComponent,
                    data: ɵ0$1,
                },
                {
                    path: 'group',
                    component: ParameterListGroupPageComponent,
                    data: ɵ1$1,
                },
                {
                    path: 'group/:action',
                    component: ParameterAddGroupPageComponent,
                    data: ɵ2,
                },
                {
                    path: 'detail',
                    component: ParameterListDetailPageComponent,
                    data: ɵ3,
                },
                {
                    path: 'detail/:action',
                    component: ParameterDoDetailPageComponent,
                    data: ɵ4,
                },
            ],
        }];
    var DoParameterRoutingModule = /** @class */ (function () {
        function DoParameterRoutingModule() {
        }
        DoParameterRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forChild(routes$1)],
                        exports: [router.RouterModule],
                    },] }
        ];
        return DoParameterRoutingModule;
    }());

    var components$1 = [
        ParameterComponent,
        ParameterListGroupPageComponent,
        ParameterAddGroupPageComponent,
        ParameterEditGroupCollapseComponent,
        ParameterListDetailPageComponent,
        ParameterDoDetailPageComponent,
    ];
    var modules$1 = [
        forms.FormsModule,
        forms.ReactiveFormsModule,
        theme.NbCardModule,
        theme.NbAlertModule,
        theme.NbIconModule,
        theme.NbDialogModule.forChild(),
        doTheme.DoThemeModule,
        doCommon.DoInputModule,
        doCommon.DoCheckBoxModule,
        doCommon.DoButtonModule,
        doCommon.DoBaseModule,
        doCommon.DoSelectModule,
        doCommon.DoTableModule,
        DoParameterRoutingModule,
    ];
    var providers$1 = [
        ParameterService,
    ];
    var DoParameterModule = /** @class */ (function () {
        function DoParameterModule() {
        }
        DoParameterModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: __spread(modules$1),
                        declarations: __spread(components$1),
                        providers: __spread(providers$1),
                    },] }
        ];
        return DoParameterModule;
    }());

    var MgmtUserComponent = /** @class */ (function () {
        function MgmtUserComponent() {
        }
        MgmtUserComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-mgmt-user',
                        template: "\n    <router-outlet></router-outlet>\n  "
                    },] }
        ];
        return MgmtUserComponent;
    }());

    var ManagementUserService = /** @class */ (function () {
        function ManagementUserService() {
        }
        ManagementUserService.prototype.getUser = function () {
            return this.user;
        };
        ManagementUserService.prototype.setUser = function (user) {
            this.user = user;
        };
        ManagementUserService.decorators = [
            { type: core.Injectable }
        ];
        return ManagementUserService;
    }());

    var MgmtEndUserListPageComponent = /** @class */ (function (_super) {
        __extends(MgmtEndUserListPageComponent, _super);
        function MgmtEndUserListPageComponent(injector, router, userService) {
            var _this = _super.call(this, injector, {
                'username': [],
                'name': [],
                'phoneNumber': [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.userService = userService;
            _this.selectionType = ngxDatatable.SelectionType.single;
            _this.columns = [
                { name: 'Username', prop: 'username', width: 125, frozenLeft: true },
                { name: 'Name', prop: 'name', width: 275, frozenLeft: true },
                { name: 'Email', prop: 'email', width: 225, frozenLeft: true },
                { name: 'Phone Number', prop: 'phoneNumber', width: 150, frozenLeft: true },
                { name: 'Created', prop: 'createdBy' },
                { name: 'Created Date', prop: 'createdDate' },
                { name: 'Modified', prop: 'modifiedBy' },
                { name: 'Modified Date', prop: 'modifiedDate' },
                { name: 'Active', prop: 'active' },
            ];
            _this.expanded = false;
            _this.apiPath = _this.api['security']['datatable-user'];
            _this.filters = [
                { controlName: 'username', type: 'input' },
                { controlName: 'name', type: 'input' },
                { controlName: 'phoneNumber', type: 'input' }
            ];
            _this.keyword = {
                authority: 'ROLE_END',
            };
            return _this;
        }
        MgmtEndUserListPageComponent.prototype.ngOnInit = function () { };
        MgmtEndUserListPageComponent.prototype.onViewDetail = function (data) {
            this.userService.setUser(data);
            this.router.navigate(['/app/mgmt/user/end/detail']);
        };
        MgmtEndUserListPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: ManagementUserService }
        ]; };
        MgmtEndUserListPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-mgmt-end-user-list-page',
                        template: "<do-page-outlet [header]=\"'header.user-management'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [add]=\"false\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'username'\"\n            [label]=\"'Username'\"\n            formControlName=\"username\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'name'\"\n            [label]=\"'Name'\"\n            formControlName=\"name\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'phoneNumber'\"\n            [label]=\"'Phone Number'\"\n            formControlName=\"phoneNumber\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n",
                        styles: [""]
                    },] }
        ];
        MgmtEndUserListPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: ManagementUserService }
        ]; };
        return MgmtEndUserListPageComponent;
    }(doCommon.BaseFilterComponent));

    var MgmtEndUserDetailPageComponent = /** @class */ (function (_super) {
        __extends(MgmtEndUserDetailPageComponent, _super);
        function MgmtEndUserDetailPageComponent(injector, router, userService) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.router = router;
            _this.userService = userService;
            _this.profile = {};
            _this.imageDefault = document.getElementsByTagName('base')[0].href + "/assets/images/avatars/default.png";
            return _this;
        }
        MgmtEndUserDetailPageComponent.prototype.ngOnInit = function () {
            this.onInit('security', 'get-profile-other');
        };
        MgmtEndUserDetailPageComponent.prototype.onInit = function (serviceName, apiName) {
            var _this = this;
            if (!this.userService.getUser()) {
                this.router.navigate(['/app/mgmt/user/end']);
                return;
            }
            this.loadingForm = true;
            var data = {
                username: this.userService.getUser().username,
            };
            this.exec(serviceName, apiName, data)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (success) {
                _this.loadingForm = false;
                _this.profile = success;
                if (success['image']) {
                    _this.image = success['image'];
                }
            }, function (error) {
                _this.loadingForm = true;
                var err = error['error'];
                if (err) {
                    _this.toastr.showI18n(err.respStatusMessage[err.respStatusCode], true, null, 'danger');
                }
                else {
                    _this.toastr.showI18n(err, true, null, 'danger');
                }
            });
        };
        MgmtEndUserDetailPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: ManagementUserService }
        ]; };
        MgmtEndUserDetailPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-mgmt-end-user-detail-page',
                        template: "<do-page-outlet [url]=\"'/app/mgmt/user/end'\" [header]=\"'header.user-profile'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n      <div class=\"photo-profile\"\n        [ngStyle]=\"{ \n          'background-image': 'url(' + (image? image: imageDefault) + ')'\n        }\">\n      </div>\n    </div>\n    <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n      <div class=\"split-row\">\n        <do-label-text\n          [label]=\"'Name'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.name\"\n          [skeleton]=\"loadingForm\">\n        </do-label-text>\n        <do-label-text\n          [label]=\"'ID Number'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.idNumber\"\n          [skeleton]=\"loadingForm\">\n        </do-label-text>\n        <do-label-text\n          [label]=\"'Gender'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.gender\"\n          [skeleton]=\"loadingForm\">\n        </do-label-text>\n        <do-label-text\n          [label]=\"'Place / Date of Birth'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.placeOfBirth ? (profile.placeOfBirth + ', ' + profile.dateOfBirth) : ''\"\n          [skeleton]=\"loadingForm\">\n        </do-label-text>\n      </div>\n      <div class=\"split-row\">\n        <do-label-text\n          [label]=\"'Username'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.username\"\n          [skeleton]=\"loadingForm\">\n        </do-label-text>\n        <do-label-text\n          [label]=\"'Email'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.email\"\n          [skeleton]=\"loadingForm\">\n        </do-label-text>\n        <do-label-text\n          [label]=\"'Phone Number'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.phoneNumber\"\n          [skeleton]=\"loadingForm\">\n        </do-label-text>\n        <do-label-text\n          [label]=\"'Address'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.address\"\n          [skeleton]=\"loadingForm\">\n        </do-label-text>\n        <do-label-text\n          [label]=\"'Country'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.country\"\n          [skeleton]=\"loadingForm\">\n        </do-label-text>\n      </div>\n    </div>\n  </div>\n</do-page-outlet>\n",
                        styles: [".nb-theme-default :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-default :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-dark :host .split-row{border-bottom:1px solid #151a30;margin-bottom:1rem}.nb-theme-dark :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-cosmic :host .split-row{border-bottom:1px solid #1b1b38;margin-bottom:1rem}.nb-theme-cosmic :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-corporate :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-corporate :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}"]
                    },] }
        ];
        MgmtEndUserDetailPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: ManagementUserService }
        ]; };
        return MgmtEndUserDetailPageComponent;
    }(doCommon.BaseFormComponent));

    var MgmtAdminListPageComponent = /** @class */ (function (_super) {
        __extends(MgmtAdminListPageComponent, _super);
        function MgmtAdminListPageComponent(injector, router, userService) {
            var _this = _super.call(this, injector, {
                'username': [],
                'name': [],
                'phoneNumber': [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.userService = userService;
            _this.selectionType = ngxDatatable.SelectionType.single;
            _this.columns = [
                { name: 'Username', prop: 'username', width: 125, frozenLeft: true },
                { name: 'Name', prop: 'name', width: 275, frozenLeft: true },
                { name: 'Email', prop: 'email', width: 225, frozenLeft: true },
                { name: 'Phone Number', prop: 'phoneNumber', width: 150, frozenLeft: true },
                { name: 'Created', prop: 'createdBy' },
                { name: 'Created Date', prop: 'createdDate' },
                { name: 'Modified', prop: 'modifiedBy' },
                { name: 'Modified Date', prop: 'modifiedDate' },
                { name: 'Active', prop: 'active' },
            ];
            _this.expanded = false;
            _this.apiPath = _this.api['security']['datatable-user'];
            _this.filters = [
                { controlName: 'username', type: 'input' },
                { controlName: 'name', type: 'input' },
                { controlName: 'phoneNumber', type: 'input' }
            ];
            _this.keyword = {
                authority: 'ROLE_ADMIN',
            };
            return _this;
        }
        MgmtAdminListPageComponent.prototype.ngOnInit = function () { };
        MgmtAdminListPageComponent.prototype.onViewDetail = function (data) {
            this.userService.setUser(data);
            this.router.navigate(['/app/mgmt/user/admin/detail']);
        };
        MgmtAdminListPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: ManagementUserService }
        ]; };
        MgmtAdminListPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-mgmt-admin-list-page',
                        template: "<do-page-outlet [header]=\"'header.admin-management'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [add]=\"false\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'username'\"\n            [label]=\"'Username'\"\n            formControlName=\"username\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'name'\"\n            [label]=\"'Name'\"\n            formControlName=\"name\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'phoneNumber'\"\n            [label]=\"'Phone Number'\"\n            formControlName=\"phoneNumber\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n",
                        styles: [""]
                    },] }
        ];
        MgmtAdminListPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: ManagementUserService }
        ]; };
        return MgmtAdminListPageComponent;
    }(doCommon.BaseFilterComponent));

    var MgmtAdminDetailPageComponent = /** @class */ (function (_super) {
        __extends(MgmtAdminDetailPageComponent, _super);
        function MgmtAdminDetailPageComponent(injector, router, userService) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.router = router;
            _this.userService = userService;
            _this.profile = {};
            _this.imageDefault = document.getElementsByTagName('base')[0].href + "/assets/images/avatars/default.png";
            return _this;
        }
        MgmtAdminDetailPageComponent.prototype.ngOnInit = function () {
            this.onInit('security', 'get-profile-system-other');
        };
        MgmtAdminDetailPageComponent.prototype.onInit = function (serviceName, apiName) {
            var _this = this;
            if (!this.userService.getUser()) {
                this.router.navigate(['/app/mgmt/user/admin']);
                return;
            }
            this.loadingForm = true;
            var data = {
                username: this.userService.getUser().username,
            };
            this.exec(serviceName, apiName, data)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (success) {
                _this.loadingForm = false;
                _this.profile = success;
                if (success['image']) {
                    _this.image = success['image'];
                }
            }, function (error) {
                _this.loadingForm = true;
                var err = error['error'];
                if (err) {
                    _this.toastr.showI18n(err.respStatusMessage[err.respStatusCode], true, null, 'danger');
                }
                else {
                    _this.toastr.showI18n(err, true, null, 'danger');
                }
            });
        };
        MgmtAdminDetailPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: ManagementUserService }
        ]; };
        MgmtAdminDetailPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-mgmt-admin-detail-page',
                        template: "<do-page-outlet [url]=\"'/app/mgmt/user/admin'\" [header]=\"'header.admin-profile'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n      <div class=\"photo-profile\"\n        [ngStyle]=\"{ \n          'background-image': 'url(' + (image? image: imageDefault) + ')'\n        }\">\n      </div>\n    </div>\n    <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n      <do-label-text\n        [label]=\"'Name'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.name\"\n        [skeleton]=\"loadingForm\">\n      </do-label-text>\n      <do-label-text\n        [label]=\"'Username'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.username\"\n        [skeleton]=\"loadingForm\">\n      </do-label-text>\n      <do-label-text\n        [label]=\"'Email'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.email\"\n        [skeleton]=\"loadingForm\">\n      </do-label-text>\n      <do-label-text\n        [label]=\"'Phone Number'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.phoneNumber\"\n        [skeleton]=\"loadingForm\">\n      </do-label-text>\n      <do-label-text\n        [label]=\"'Address'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.address\"\n        [skeleton]=\"loadingForm\">\n      </do-label-text>\n      <do-label-text\n        [label]=\"'Country'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.country\"\n        [skeleton]=\"loadingForm\">\n      </do-label-text>\n    </div>\n  </div>\n</do-page-outlet>\n",
                        styles: [".nb-theme-default :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-default :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-dark :host .split-row{border-bottom:1px solid #151a30;margin-bottom:1rem}.nb-theme-dark :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-cosmic :host .split-row{border-bottom:1px solid #1b1b38;margin-bottom:1rem}.nb-theme-cosmic :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-corporate :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-corporate :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}"]
                    },] }
        ];
        MgmtAdminDetailPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: ManagementUserService }
        ]; };
        return MgmtAdminDetailPageComponent;
    }(doCommon.BaseFormComponent));

    var ɵ0$2 = {
        code: '#MANAGEMENT-END-USER-PAGE',
    }, ɵ1$2 = {
        code: '#MANAGEMENT-END-USER-PAGE',
    }, ɵ2$1 = {
        code: '#MANAGEMENT-ADMIN-PAGE',
    }, ɵ3$1 = {
        code: '#MANAGEMENT-ADMIN-PAGE',
    };
    var routes$2 = [{
            path: '',
            component: MgmtUserComponent,
            canActivateChild: [doAuth.AuthGuardChildService],
            children: [
                {
                    path: 'end',
                    component: MgmtEndUserListPageComponent,
                    data: ɵ0$2,
                },
                {
                    path: 'end/detail',
                    component: MgmtEndUserDetailPageComponent,
                    data: ɵ1$2,
                },
                {
                    path: 'admin',
                    component: MgmtAdminListPageComponent,
                    data: ɵ2$1,
                },
                {
                    path: 'admin/detail',
                    component: MgmtAdminDetailPageComponent,
                    data: ɵ3$1,
                },
            ],
        }];
    var DoMgmtUserRoutingModule = /** @class */ (function () {
        function DoMgmtUserRoutingModule() {
        }
        DoMgmtUserRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forChild(routes$2)],
                        exports: [router.RouterModule],
                    },] }
        ];
        return DoMgmtUserRoutingModule;
    }());

    var components$2 = [
        MgmtUserComponent,
        MgmtEndUserListPageComponent,
        MgmtEndUserDetailPageComponent,
        MgmtAdminListPageComponent,
        MgmtAdminDetailPageComponent,
    ];
    var modules$2 = [
        forms.FormsModule,
        forms.ReactiveFormsModule,
        theme.NbCardModule,
        theme.NbAlertModule,
        theme.NbIconModule,
        theme.NbDialogModule.forChild(),
        doTheme.DoThemeModule,
        doCommon.DoInputModule,
        doCommon.DoButtonModule,
        doCommon.DoBaseModule,
        doCommon.DoTableModule,
        doCommon.DoLabelModule,
        DoMgmtUserRoutingModule,
    ];
    var providers$2 = [
        ManagementUserService,
    ];
    var entry_components = [];
    var DoMgmtUserModule = /** @class */ (function () {
        function DoMgmtUserModule() {
        }
        DoMgmtUserModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: __spread(modules$2),
                        declarations: __spread(components$2),
                        providers: __spread(providers$2),
                        entryComponents: __spread(entry_components),
                    },] }
        ];
        return DoMgmtUserModule;
    }());

    var MgmtRoleComponent = /** @class */ (function () {
        function MgmtRoleComponent() {
        }
        MgmtRoleComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-mgmt-role',
                        template: "\n    <router-outlet></router-outlet>\n  "
                    },] }
        ];
        return MgmtRoleComponent;
    }());

    var RoleService = /** @class */ (function () {
        function RoleService() {
        }
        RoleService.prototype.getRole = function () {
            return this.role;
        };
        RoleService.prototype.setRole = function (role) {
            this.role = role;
        };
        RoleService.decorators = [
            { type: core.Injectable }
        ];
        return RoleService;
    }());

    var RoleListPageComponent = /** @class */ (function (_super) {
        __extends(RoleListPageComponent, _super);
        function RoleListPageComponent(injector, router, roleService) {
            var _this = _super.call(this, injector, {
                'authority': [],
                'description': [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.roleService = roleService;
            _this.selectionType = ngxDatatable.SelectionType.single;
            _this.columns = [
                { name: 'Authority', prop: 'authority', width: 150, frozenLeft: true },
                { name: 'Description', prop: 'description', width: 275, frozenLeft: true },
                { name: 'Created', prop: 'createdBy' },
                { name: 'Created Date', prop: 'createdDate' },
                { name: 'Modified', prop: 'modifiedBy' },
                { name: 'Modified Date', prop: 'modifiedDate' },
                { name: 'Active', prop: 'active' },
            ];
            _this.expanded = false;
            _this.apiPath = _this.api['security']['datatable-role'];
            _this.filters = [
                { controlName: 'authority', type: 'input' },
                { controlName: 'description', type: 'input' }
            ];
            return _this;
        }
        RoleListPageComponent.prototype.ngOnInit = function () {
        };
        RoleListPageComponent.prototype.onAddGroup = function () {
            this.router.navigate(['/app/mgmt/role', 'add']);
        };
        RoleListPageComponent.prototype.onViewDetail = function (data) {
            this.roleService.setRole(data);
            this.router.navigate(['/app/mgmt/role', 'edit']);
        };
        RoleListPageComponent.prototype.onReset = function () {
            this.router.navigate(['/app/mgmt/role']);
        };
        RoleListPageComponent.prototype.back = function () {
            this.router.navigate(['/app/mgmt/role']);
            return false;
        };
        RoleListPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: RoleService }
        ]; };
        RoleListPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-role-list-page',
                        template: "<do-page-outlet [header]=\"'header.role-management'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onAdd)=\"onAddGroup()\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'authority'\"\n            [label]=\"'Authority'\"\n            formControlName=\"authority\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'description'\"\n            [label]=\"'Description'\"\n            formControlName=\"description\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n",
                        styles: [""]
                    },] }
        ];
        RoleListPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: RoleService }
        ]; };
        return RoleListPageComponent;
    }(doCommon.BaseFilterComponent));

    ;
    var RoleAddEditPageComponent = /** @class */ (function (_super) {
        __extends(RoleAddEditPageComponent, _super);
        function RoleAddEditPageComponent(injector, router, route, roleService) {
            var _this = _super.call(this, injector, {
                'authority': [],
                'description': [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.route = route;
            _this.roleService = roleService;
            _this.action = 'Add';
            _this.dataDefault = [
                {
                    selected: false,
                },
            ];
            if ((_this.route.snapshot.params['action'] === 'edit')) {
                _this.action = 'Edit';
                if (!_this.roleService.getRole()) {
                    _this.router.navigate(['/app/mgmt/role']);
                }
            }
            if (_this.roleService.getRole() && (_this.route.snapshot.params['action'] === 'edit')) {
                _this.formGroup.get('authority').setValue(_this.roleService.getRole().authority);
                _this.formGroup.get('description').setValue(_this.roleService.getRole().description);
            }
            return _this;
        }
        RoleAddEditPageComponent.prototype.ngOnInit = function () { };
        RoleAddEditPageComponent.prototype.onReset = function () {
            this.router.navigate(['/app/mgmt/role']);
        };
        RoleAddEditPageComponent.prototype.onSubmit = function () {
            var _this = this;
            var data = {
                authority: this.formGroup.get('authority').value,
                description: this.formGroup.get('description').value,
            };
            _super.prototype.onSubmit.call(this, data, 'security', 'post-role')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response.respStatusCode === doCore.ResponseCode.OK_DEFAULT.toString()) {
                    _this.router.navigate(['/app/mgmt/role']);
                }
            });
        };
        RoleAddEditPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: RoleService }
        ]; };
        RoleAddEditPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-language-add-edit-page',
                        template: "<do-page-outlet [header]=\"'header.'+action+'-role'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'authority'\"\n          [label]=\"'Authority'\"\n          [required]=\"true\"\n          formControlName=\"authority\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'description'\"\n          [label]=\"'Description'\"\n          [required]=\"true\"\n          formControlName=\"description\">\n        </do-input-text>\n        <div class=\"form-group row\">\n          <div class=\"offset-sm-3 col-sm-9\">\n            <button\n              type=\"reset\"\n              status=\"danger\"\n              (click)=\"onReset()\"\n              class=\"reset-left\"\n              nbButton>\n              {{ 'Cancel' | translate}}\n            </button>\n            <button\n              type=\"submit\"\n              status=\"primary\"\n              (click)=\"onSubmit()\"\n              [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n              class=\"submit-right\"\n              nbButton>\n              {{ action | translate}}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</do-page-outlet>\n",
                        styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}"]
                    },] }
        ];
        RoleAddEditPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: RoleService }
        ]; };
        return RoleAddEditPageComponent;
    }(doCommon.BaseFormComponent));

    var ɵ0$3 = {
        code: '#MANAGEMENT-ROLE-PAGE',
    }, ɵ1$3 = {
        code: '#MANAGEMENT-ROLE-PAGE',
    };
    var routes$3 = [{
            path: '',
            component: MgmtRoleComponent,
            canActivateChild: [doAuth.AuthGuardChildService],
            children: [
                {
                    path: '',
                    component: RoleListPageComponent,
                    data: ɵ0$3,
                },
                {
                    path: ':action',
                    component: RoleAddEditPageComponent,
                    data: ɵ1$3,
                },
            ],
        }];
    var DoMgmtRoleRoutingModule = /** @class */ (function () {
        function DoMgmtRoleRoutingModule() {
        }
        DoMgmtRoleRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forChild(routes$3)],
                        exports: [router.RouterModule],
                    },] }
        ];
        return DoMgmtRoleRoutingModule;
    }());

    var components$3 = [
        MgmtRoleComponent,
        RoleListPageComponent,
        RoleAddEditPageComponent,
    ];
    var modules$3 = [
        forms.FormsModule,
        forms.ReactiveFormsModule,
        theme.NbCardModule,
        theme.NbAlertModule,
        theme.NbIconModule,
        theme.NbDialogModule.forChild(),
        doTheme.DoThemeModule,
        doCommon.DoInputModule,
        doCommon.DoCheckBoxModule,
        doCommon.DoButtonModule,
        doCommon.DoBaseModule,
        doCommon.DoSelectModule,
        doCommon.DoTableModule,
        DoMgmtRoleRoutingModule,
    ];
    var providers$3 = [
        RoleService,
    ];
    var DoMgmtRoleModule = /** @class */ (function () {
        function DoMgmtRoleModule() {
        }
        DoMgmtRoleModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: __spread(modules$3),
                        declarations: __spread(components$3),
                        providers: __spread(providers$3),
                    },] }
        ];
        return DoMgmtRoleModule;
    }());

    var MgmtMenuComponent = /** @class */ (function () {
        function MgmtMenuComponent() {
        }
        MgmtMenuComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-mgmt-menu',
                        template: "\n    <router-outlet></router-outlet>\n  "
                    },] }
        ];
        return MgmtMenuComponent;
    }());

    var DialogIconComponent = /** @class */ (function () {
        function DialogIconComponent(ref, iconsLibrary) {
            this.ref = ref;
            this.evaIcons = [];
            this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
                .filter(function (icon) { return icon.indexOf('outline') !== -1; });
        }
        DialogIconComponent.prototype.choose = function (icon) {
            this.ref.close(icon);
        };
        DialogIconComponent.ctorParameters = function () { return [
            { type: theme.NbDialogRef },
            { type: theme.NbIconLibraries }
        ]; };
        DialogIconComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-dialog-icon',
                        template: "<nb-card>\n  <nb-card-header>\n    {{ 'Choose Icon' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <nb-icon *ngFor=\"let icon of evaIcons\" class=\"choose-icon\" (click)=\"choose(icon)\" [icon]=\"icon\" pack=\"eva\"></nb-icon>\n  </nb-card-body>\n</nb-card>\n",
                        styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host .choose-icon{margin:.75rem;cursor:pointer}.nb-theme-dark :host .choose-icon{margin:.75rem;cursor:pointer}.nb-theme-cosmic :host .choose-icon{margin:.75rem;cursor:pointer}.nb-theme-corporate :host .choose-icon{margin:.75rem;cursor:pointer}"]
                    },] }
        ];
        DialogIconComponent.ctorParameters = function () { return [
            { type: theme.NbDialogRef },
            { type: theme.NbIconLibraries }
        ]; };
        return DialogIconComponent;
    }());

    var MainMenuPageComponent = /** @class */ (function (_super) {
        __extends(MainMenuPageComponent, _super);
        function MainMenuPageComponent(injector, dialogService) {
            var _this = _super.call(this, injector, {
                'id': [],
                'en-US': [],
                'id-ID': [],
                'root': [{
                        value: [{ selected: true }],
                        disabled: false,
                    }],
                'code': [{
                        value: 'N/A',
                        disabled: false,
                    }],
                'icon': [],
                'link': [{
                        value: '#',
                        disabled: false,
                    }],
                'home': [{
                        value: [{ selected: false }],
                        disabled: false,
                    }],
                'group': [{
                        value: [{ selected: false }],
                        disabled: false,
                    }],
                'parent': [],
                'order': [],
            }) || this;
            _this.injector = injector;
            _this.dialogService = dialogService;
            _this.nodeItems = [];
            _this.options = {
                mode: treeNgx.TreeMode.NoSelect,
                checkboxes: false,
                alwaysEmitSelected: true
            };
            _this.allLocales = [];
            _this.locales = [];
            _this.localeDefault = new doCore.LocaleModel();
            _this.action = 'Add';
            _this.dialogAction = 'Edit';
            _this.loadLocale = false;
            _this.title = null;
            _this.apiSelectParent = _this.api['security']['select-main-menus'];
            _this.isRoot = true;
            _this.isGroup = false;
            return _this;
        }
        Object.defineProperty(MainMenuPageComponent.prototype, "isRoot", {
            get: function () { return this.root; },
            set: function (root) {
                this.root = root;
                if (root) {
                    this.formGroup.get('icon').enable();
                    this.formGroup.get('parent').disable();
                    this.formGroup.get('parent').setValue(null);
                }
                else {
                    this.formGroup.get('icon').disable();
                    this.formGroup.get('icon').setValue(null);
                    this.formGroup.get('parent').enable();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MainMenuPageComponent.prototype, "isGroup", {
            get: function () { return this.group; },
            set: function (group) {
                this.group = group;
                if (group) {
                    this.formGroup.get('root').disable();
                    this.formGroup.get('home').disable();
                    this.formGroup.get('code').disable();
                    this.formGroup.get('link').disable();
                    this.formGroup.get('icon').disable();
                    this.formGroup.get('parent').disable();
                    this.formGroup.get('root').setValue([{ selected: false }]);
                    this.formGroup.get('home').setValue([{ selected: false }]);
                    this.formGroup.get('code').setValue('N/A');
                    this.formGroup.get('link').setValue('#');
                    this.formGroup.get('icon').setValue(null);
                    this.formGroup.get('parent').setValue(null);
                }
                else {
                    this.formGroup.get('root').enable();
                    this.formGroup.get('home').enable();
                    this.formGroup.get('code').enable();
                    this.formGroup.get('link').enable();
                    if (this.isRoot)
                        this.formGroup.get('icon').enable();
                    if (!this.isRoot)
                        this.formGroup.get('parent').enable();
                }
            },
            enumerable: false,
            configurable: true
        });
        MainMenuPageComponent.prototype.ngOnInit = function () { };
        MainMenuPageComponent.prototype.onCheckedRoot = function (event) {
            this.isRoot = event[0].selected;
        };
        MainMenuPageComponent.prototype.onCheckedGroup = function (event) {
            this.isGroup = event[0].selected;
        };
        MainMenuPageComponent.prototype.loadDataMenu = function () {
            var _this = this;
            if (!this.loadLocale) {
                this.loadingForm = true;
                this.http.HTTP_AUTH(this.api['master']['all-locale']).subscribe(function (response) {
                    _this.splitLocale(response);
                    _this.loadLocale = true;
                    _this.loadingForm = false;
                });
            }
            return this.http.HTTP_AUTH(this.api['security']['get-tree-menus'], null, null, null, ['main']).pipe(operators.map(function (response) {
                _this.nodeItems = [];
                _this.nodeItems = __spread(_this.nodeItems, response);
                _this.onReset();
                if (_this.loadLocale)
                    _this.loadingForm = false;
            }));
        };
        MainMenuPageComponent.prototype.splitLocale = function (values) {
            var _this = this;
            this.allLocales = values;
            values.forEach(function (data) {
                if (data.localeDefault) {
                    _this.localeDefault = data;
                }
                else {
                    _this.locales.push(data);
                }
                _this.formGroup.removeControl(data.localeCode);
                _this.formGroup.addControl(data.localeCode, new forms.FormControl());
            });
        };
        MainMenuPageComponent.prototype.onSearchIcon = function () {
            var _this = this;
            this.dialogService.open(DialogIconComponent)
                .onClose.subscribe(function (icon) {
                _this.formGroup.get('icon').setValue(icon);
                _this.formGroup.get('icon').markAsDirty();
            });
        };
        MainMenuPageComponent.prototype.onSelectNode = function (node) {
            var _this = this;
            if (node.item) {
                this.action = 'Edit';
                this.dialogAction = this.action;
                this.isRoot = node.item['level'] === 0 ? true : false;
                this.isGroup = node.item['group'];
                this.allLocales.forEach(function (locale) {
                    _this.formGroup.get(locale.localeCode).setValue(node.item['i18n'][locale.localeCode]);
                    if (locale.localeDefault) {
                        _this.title = node.item['i18n'][locale.localeCode];
                    }
                });
                this.formGroup.get('group').setValue([{ selected: this.isGroup }]);
                this.formGroup.get('root').setValue([{ selected: this.isRoot }]);
                this.formGroup.get('home').setValue([{ selected: node.item['home'] }]);
                this.formGroup.get('id').setValue(node['id']);
                this.formGroup.get('code').setValue(node.item['code']);
                this.formGroup.get('link').setValue(node.item['link']);
                this.formGroup.get('icon').setValue(node.item['icon']);
                this.formGroup.get('order').setValue(node.item['ordering']);
                if (node.item['parentMenu'])
                    this.formGroup.get('parent').setValue({
                        label: node.item['parentMenu']['title'],
                        value: node.item['parentMenu']['id'],
                    });
            }
        };
        MainMenuPageComponent.prototype.onDeleteTree = function (node, context, dialog) {
            this.dialogAction = 'Delete';
            this.node = node;
            this.context = context;
            this.dialogService.open(dialog, { context: 'alert.delete' });
        };
        MainMenuPageComponent.prototype.onSubmit = function (dialog) {
            var _this = this;
            var id = null;
            var code = 'N/A';
            var icon = null;
            var link = '#';
            var type = 'main';
            var ordering = 0;
            var home = false;
            var group = false;
            var level = 1;
            var leaf = true;
            var i18n = {};
            var parentMenu = null;
            if (this.formGroup.get('id').value)
                id = this.formGroup.get('id').value;
            if (this.formGroup.get('code').value)
                code = this.formGroup.get('code').value;
            if (this.formGroup.get('icon').value)
                icon = this.formGroup.get('icon').value;
            if (this.formGroup.get('link').value)
                link = this.formGroup.get('link').value;
            if (this.formGroup.get('order').value)
                ordering = +this.formGroup.get('order').value;
            if (this.formGroup.get('home').value) {
                if (this.formGroup.get('home').value[0]['selected']) {
                    home = true;
                }
            }
            if (this.formGroup.get('root').value) {
                if (this.formGroup.get('root').value[0]['selected']) {
                    level = 0;
                    leaf = false;
                }
            }
            this.allLocales.forEach(function (locale) {
                i18n[locale.localeCode] = _this.formGroup.get(locale.localeCode).value;
            });
            if (this.formGroup.get('parent').value) {
                if (this.formGroup.get('parent').value['value']) {
                    parentMenu = {
                        id: this.formGroup.get('parent').value['value'],
                    };
                }
            }
            if (this.formGroup.get('group').value) {
                if (this.formGroup.get('group').value[0]['selected']) {
                    group = true;
                    home = false;
                    leaf = false;
                    level = 0;
                    parentMenu = null;
                }
            }
            this.data = {
                'id': id,
                'code': code,
                'icon': icon,
                'link': link,
                'type': type,
                'level': level,
                'ordering': ordering,
                'home': home,
                'group': group,
                'leaf': leaf,
                'i18n': i18n,
                'parentMenu': parentMenu,
            };
            if (this.action === 'Edit') {
                this.dialogService.open(dialog, { context: 'alert.edit' });
            }
            else {
                this.postMenu();
            }
        };
        MainMenuPageComponent.prototype.onSubmitDialog = function (ref) {
            if (this.dialogAction === 'Delete') {
                this.deleteTreeMenu(ref);
            }
            else {
                this.postMenu(ref);
            }
        };
        MainMenuPageComponent.prototype.onReset = function () {
            var _this = this;
            this.disabled = false;
            this.isRoot = true;
            this.isGroup = false;
            this.title = null;
            this.action = 'Add';
            this.allLocales.forEach(function (locale) {
                _this.formGroup.get(locale.localeCode).setValue(null);
            });
            this.formGroup.get('group').setValue([{ selected: this.isGroup }]);
            this.formGroup.get('root').setValue([{ selected: this.isRoot }]);
            this.formGroup.get('home').setValue([{ selected: false }]);
            this.formGroup.get('id').setValue(null);
            this.formGroup.get('code').setValue('N/A');
            this.formGroup.get('link').setValue('#');
            this.formGroup.get('icon').setValue(null);
            this.formGroup.get('order').setValue(null);
            this.formGroup.get('parent').setValue(null);
        };
        MainMenuPageComponent.prototype.deleteTreeMenu = function (ref) {
            var _this = this;
            this.disabled = true;
            this.http.HTTP_AUTH(this.api['security']['delete-menu'], null, null, null, [this.node['id']]).subscribe(function (success) {
                ref.close();
                _this.context.delete();
                _this.disabled = false;
                _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
                _this.loadDataMenu().subscribe(function () {
                    _this.loadingForm = false;
                });
            }, function (error) {
                _this.disabled = false;
                _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        };
        MainMenuPageComponent.prototype.postMenu = function (ref) {
            var _this = this;
            _super.prototype.onSubmit.call(this, this.data, 'security', 'post-menus')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response.respStatusCode === doCore.ResponseCode.OK_DEFAULT.toString()) {
                    _this.loadDataMenu().subscribe(function () {
                        _this.loadingForm = false;
                    });
                }
                if (_this.action === 'Edit')
                    ref.close();
            });
        };
        MainMenuPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: theme.NbDialogService }
        ]; };
        MainMenuPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-main-menu-page',
                        template: "<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n    <tree-ngx\n      [nodeItems]=\"nodeItems\"\n      [options]=\"options\"\n      #treeMain>\n      <ng-template #nodeNameTemplate let-node=\"node\" let-context=\"context\">\n        <span\n          class=\"node-action\"\n          [ngClass]=\"{\n            'node-action': !node.item.group,\n            'node-action-group': node.item.group\n          }\"\n          [class.active]=\"context.active\"\n          (click)=\"onSelectNode(node)\">\n          {{node.name}}\n        </span>\n        <span class=\"tree-action\">\n          <nb-icon\n              class=\"action-trash\"\n              icon=\"close-square-outline\"\n              (click)=\"onDeleteTree(node, context, dialogprocess)\">\n          </nb-icon>\n        </span>\n      </ng-template>\n    </tree-ngx>\n  </div>\n  <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n    <form [formGroup]=\"formGroup\">\n      <div class=\"row\">\n        <label\n          for=\"Title\"\n          class=\"label col-sm-3 col-form-label\"\n          *ngIf=\"!loadingForm; else labelskeleton\">\n          {{'Title' | translate}}\n        </label>\n        <ng-template #labelskeleton>\n          <div class=\"col-sm-3\">\n            <div\n              [ngClass]=\"{\n                'label-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n        <div class=\"col-sm-9\" *ngIf=\"loadLocale; else inputSkeleton\">\n          <do-input-icon\n            [name]=\"localeDefault.localeCode\"\n            [nolabel]=\"true\"\n            [required]=\"true\"\n            [colLabel]=\"0\"\n            [colInput]=\"12\"\n            [icon]=\"'flag-icon flag-icon-' + localeDefault.icon\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"{{localeDefault.localeCode}}\">\n          </do-input-icon>\n        </div>\n        <ng-template #inputSkeleton>\n          <div class=\"col-sm-9\">\n            <div\n              [ngClass]=\"{\n                'input-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n      </div>\n      <do-input-icon *ngFor=\"let i18n of locales\"\n        [name]=\"i18n.localeCode\"\n        [nolabel]=\"true\"\n        [icon]=\"'flag-icon flag-icon-'+ i18n.icon\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"{{i18n.localeCode}}\">\n      </do-input-icon>\n      <do-checkbox\n        [name]=\"'group'\"\n        [label]=\"'Group'\"\n        [skeleton]=\"loadingForm\"\n        [warnMessage]=\"'warn.group-menu'\"\n        (onChecked)=\"onCheckedGroup($event)\"\n        formControlName=\"group\">\n      </do-checkbox>\n      <do-checkbox\n        [name]=\"'root'\"\n        [label]=\"'Root'\"\n        [skeleton]=\"loadingForm\"\n        (onChecked)=\"onCheckedRoot($event)\"\n        formControlName=\"root\"\n        *ngIf=\"!isGroup\">\n      </do-checkbox>\n      <do-checkbox\n        [name]=\"'home'\"\n        [label]=\"'Home'\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"home\"\n        *ngIf=\"!isGroup\">\n      </do-checkbox>\n      <do-input-text\n        [name]=\"'code'\"\n        [label]=\"'Code'\"\n        [capslock]=\"true\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"code\"\n        *ngIf=\"!isGroup\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'link'\"\n        [label]=\"'Link'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"link\"\n        *ngIf=\"!isGroup\">\n      </do-input-text>\n      <do-input-icon\n        [name]=\"'icon'\"\n        [label]=\"'Icon'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        [icon]=\"'search-outline'\"\n        [iconcursor]=\"true\"\n        [eva]=\"true\"\n        (clickIcon)=\"onSearchIcon()\"\n        formControlName=\"icon\"\n        *ngIf=\"(isRoot && !isGroup)\">\n      </do-input-icon>\n      <do-select\n        [name]=\"'parent'\"\n        [label]=\"'Parent Menu'\"\n        [api]=\"apiSelectParent\"\n        [searchable]=\"false\"\n        [skeleton]=\"loadingForm\"\n        [required]=\"true\"\n        formControlName=\"parent\"\n        *ngIf=\"(!isRoot && !isGroup)\">\n      </do-select>\n      <do-input-text\n        [name]=\"'order'\"\n        [label]=\"'Order'\"\n        [required]=\"true\"\n        [type]=\"'number'\"\n        [max]=\"999\"\n        [maxLength]=\"3\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"order\">\n      </do-input-text>\n      <div class=\"form-group row\">\n        <div class=\"offset-sm-3 col-sm-9\" *ngIf=\"!loadingForm; else buttonSkeleton\">\n          <button\n            type=\"button\"\n            status=\"danger\"\n            (click)=\"onReset()\"\n            class=\"reset-left\"\n            nbButton>\n            {{ 'Reset' | translate}}\n          </button>\n          <button\n            type=\"submit\"\n            status=\"primary\"\n            (click)=\"onSubmit(dialogprocess)\"\n            [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n            class=\"submit-right\"\n            nbButton>\n            {{ action | translate}}\n          </button>\n        </div>\n        <ng-template #buttonSkeleton>\n          <div class=\"offset-sm-3 col-sm-9\">\n            <div\n              [ngClass]=\"{\n                'button-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </form>\n  </div>\n</div>\n\n<ng-template #dialogprocess let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"{{dialogAction === 'Delete' ? 'danger' : 'warning'}}\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <div class=\"row\">\n        <button\n          type=\"reset\"\n          status=\"danger\"\n          (click)=\"ref.close()\"\n          class=\"reset-left-dialog\"\n          nbButton>\n          {{ 'Cancel' | translate}}\n        </button>\n        <button\n          type=\"submit\"\n          status=\"primary\"\n          (click)=\"onSubmitDialog(ref)\"\n          [disabled]=\"disabled\"\n          class=\"submit-right-dialog\"\n          nbButton>\n          {{ dialogAction | translate}}\n        </button>\n      </div>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".tree-ngx{display:flex;flex:1 1 auto;flex-direction:column;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.node{display:flex;flex:1 1 auto;flex-direction:column}.node-children{display:flex;flex:1 1 auto}.node-name{display:inline-block;padding:5px 0 5px 7px}.node-name.markSelected{padding:5px 0 5px 2px;border-left:5px solid #269}.node-name .active{cursor:pointer}.node-offset{display:flex;margin-left:20px}.node-icon-wrapper{position:relative;display:inline-block;width:25px;height:17px;top:1px;left:6px}.node-icon-wrapper.disabled{cursor:default}.collapsable{cursor:pointer}.node-container{display:inline-block}.nodeDisabled{opacity:.6}.node-checkbox:disabled{cursor:auto}.collapsible-wrapper{display:flex;overflow:hidden}.collapsible-wrapper:after{content:'';height:25px;transition:height .3s linear,max-height linear .3s;max-height:0}.collapsible{transition:margin-bottom .3s cubic-bezier(0,0,0,1);margin-bottom:0;max-height:1000000px}.collapsible-wrapper.collapsed>.collapsible{margin-bottom:-20000px;transition:margin-bottom .3s cubic-bezier(1,0,1,1),visibility .3s,max-height .3s;visibility:hidden;max-height:0}.collapsible-wrapper.collapsed:after{height:0;transition:height .3s linear;max-height:25px}.arrow-down{position:absolute;width:0;height:0;left:3px;top:6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #455a64}.arrow-down.collapse-empty{border-top:7px solid #ccc}.arrow-right{position:absolute;width:0;height:0;left:8px;top:3px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #455a64}.node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.node-action-group{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#8f9bb3;border-radius:0;cursor:pointer}.node-action-group:hover{background-color:transparent;color:#598bff;cursor:pointer}.tree-action{margin-left:.5rem;cursor:pointer}.action-trash:hover{color:#ff708d}.reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}.reset-left-dialog{margin-left:1rem;margin-right:.5rem}.submit-right-dialog{margin-left:.5rem}"]
                    },] }
        ];
        MainMenuPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: theme.NbDialogService }
        ]; };
        return MainMenuPageComponent;
    }(doCommon.BaseFormComponent));

    var ExtraMenuPageComponent = /** @class */ (function (_super) {
        __extends(ExtraMenuPageComponent, _super);
        function ExtraMenuPageComponent(injector, dialogService) {
            var _this = _super.call(this, injector, {
                'id': [],
                'en-US': [],
                'id-ID': [],
                'code': [{
                        value: 'N/A',
                        disabled: false,
                    }],
                'link': [{
                        value: '#',
                        disabled: false,
                    }],
                'order': [],
            }) || this;
            _this.injector = injector;
            _this.dialogService = dialogService;
            _this.nodeItems = [];
            _this.options = {
                mode: treeNgx.TreeMode.NoSelect,
                checkboxes: false,
                alwaysEmitSelected: true
            };
            _this.allLocales = [];
            _this.locales = [];
            _this.localeDefault = new doCore.LocaleModel();
            _this.action = 'Add';
            _this.dialogAction = 'Edit';
            _this.loadLocale = false;
            _this.title = null;
            return _this;
        }
        ExtraMenuPageComponent.prototype.ngOnInit = function () { };
        ExtraMenuPageComponent.prototype.loadDataMenu = function () {
            var _this = this;
            if (!this.loadLocale) {
                this.loadingForm = true;
                this.http.HTTP_AUTH(this.api['master']['all-locale']).subscribe(function (response) {
                    _this.splitLocale(response);
                    _this.loadLocale = true;
                    _this.loadingForm = false;
                });
            }
            return this.http.HTTP_AUTH(this.api['security']['get-tree-menus'], null, null, null, ['extra']).pipe(operators.map(function (response) {
                _this.nodeItems = [];
                _this.nodeItems = __spread(_this.nodeItems, response);
                _this.onReset();
                if (_this.loadLocale)
                    _this.loadingForm = false;
            }));
        };
        ExtraMenuPageComponent.prototype.splitLocale = function (values) {
            var _this = this;
            this.allLocales = values;
            values.forEach(function (data) {
                if (data.localeDefault) {
                    _this.localeDefault = data;
                }
                else {
                    _this.locales.push(data);
                }
                _this.formGroup.removeControl(data.localeCode);
                _this.formGroup.addControl(data.localeCode, new forms.FormControl());
            });
        };
        ExtraMenuPageComponent.prototype.onSearchIcon = function () {
            var _this = this;
            this.dialogService.open(DialogIconComponent)
                .onClose.subscribe(function (icon) {
                _this.formGroup.get('icon').setValue(icon);
                _this.formGroup.get('icon').markAsDirty();
            });
        };
        ExtraMenuPageComponent.prototype.onSelectNode = function (node) {
            var _this = this;
            if (node.item) {
                this.action = 'Edit';
                this.dialogAction = this.action;
                this.allLocales.forEach(function (locale) {
                    _this.formGroup.get(locale.localeCode).setValue(node.item['i18n'][locale.localeCode]);
                });
                this.formGroup.get('id').setValue(node['id']);
                this.formGroup.get('code').setValue(node.item['code']);
                this.formGroup.get('link').setValue(node.item['link']);
                this.formGroup.get('order').setValue(node.item['ordering']);
            }
        };
        ExtraMenuPageComponent.prototype.onDeleteTree = function (node, context, dialog) {
            this.dialogAction = 'Delete';
            this.node = node;
            this.context = context;
            this.dialogService.open(dialog, { context: 'alert.delete' });
        };
        ExtraMenuPageComponent.prototype.onSubmit = function (dialog) {
            var _this = this;
            var id = null;
            var code = 'N/A';
            var link = '#';
            var ordering = 0;
            var type = 'extra';
            var icon = null;
            var home = false;
            var group = false;
            var level = 0;
            var leaf = false;
            var i18n = {};
            var parentMenu = null;
            if (this.formGroup.get('id').value)
                id = this.formGroup.get('id').value;
            if (this.formGroup.get('code').value)
                code = this.formGroup.get('code').value;
            if (this.formGroup.get('link').value)
                link = this.formGroup.get('link').value;
            if (this.formGroup.get('order').value)
                ordering = +this.formGroup.get('order').value;
            this.allLocales.forEach(function (locale) {
                i18n[locale.localeCode] = _this.formGroup.get(locale.localeCode).value;
            });
            this.data = {
                'id': id,
                'code': code,
                'icon': icon,
                'link': link,
                'type': type,
                'level': level,
                'ordering': ordering,
                'home': home,
                'group': group,
                'leaf': leaf,
                'i18n': i18n,
                'parentMenu': parentMenu,
            };
            if (this.action === 'Edit') {
                this.dialogService.open(dialog, { context: 'alert.edit' });
            }
            else {
                this.postMenu();
            }
        };
        ExtraMenuPageComponent.prototype.onSubmitDialog = function (ref) {
            if (this.dialogAction === 'Delete') {
                this.deleteTreeMenu(ref);
            }
            else {
                this.postMenu(ref);
            }
        };
        ExtraMenuPageComponent.prototype.onReset = function () {
            var _this = this;
            this.disabled = false;
            this.title = null;
            this.action = 'Add';
            this.allLocales.forEach(function (locale) {
                _this.formGroup.get(locale.localeCode).setValue(null);
            });
            this.formGroup.get('id').setValue(null);
            this.formGroup.get('code').setValue('N/A');
            this.formGroup.get('link').setValue('#');
            this.formGroup.get('order').setValue(null);
        };
        ExtraMenuPageComponent.prototype.deleteTreeMenu = function (ref) {
            var _this = this;
            this.disabled = true;
            this.http.HTTP_AUTH(this.api['security']['delete-menu'], null, null, null, [this.node['id']]).subscribe(function (success) {
                ref.close();
                _this.context.delete();
                _this.disabled = false;
                _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
                _this.loadDataMenu().subscribe(function () {
                    _this.loadingForm = false;
                });
            }, function (error) {
                _this.disabled = false;
                _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        };
        ExtraMenuPageComponent.prototype.postMenu = function (ref) {
            var _this = this;
            _super.prototype.onSubmit.call(this, this.data, 'security', 'post-menus')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response.respStatusCode === doCore.ResponseCode.OK_DEFAULT.toString()) {
                    _this.loadDataMenu().subscribe(function () {
                        _this.loadingForm = false;
                    });
                }
                if (_this.action === 'Edit')
                    ref.close();
            });
        };
        ExtraMenuPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: theme.NbDialogService }
        ]; };
        ExtraMenuPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-extra-menu-page',
                        template: "<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n    <tree-ngx\n      [nodeItems]=\"nodeItems\"\n      [options]=\"options\"\n      #treeExtra>\n      <ng-template #nodeNameTemplate let-node=\"node\" let-context=\"context\">\n        <span\n          class=\"node-action\"\n          [class.active]=\"context.active\"\n          (click)=\"onSelectNode(node)\">\n          {{node.name}}\n        </span>\n        <span class=\"tree-action\">\n          <nb-icon\n              class=\"action-trash\"\n              icon=\"close-square-outline\"\n              (click)=\"onDeleteTree(node, context, dialogprocessextra)\">\n          </nb-icon>\n        </span>\n      </ng-template>\n    </tree-ngx>\n  </div>\n  <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n    <form [formGroup]=\"formGroup\">\n      <div class=\"row\">\n        <label\n          for=\"Title\"\n          class=\"label col-sm-3 col-form-label\"\n          *ngIf=\"!loadingForm; else labelskeleton\">\n          {{'Title' | translate}}\n        </label>\n        <ng-template #labelskeleton>\n          <div class=\"col-sm-3\">\n            <div\n              [ngClass]=\"{\n                'label-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n        <div class=\"col-sm-9\" *ngIf=\"loadLocale; else inputSkeleton\">\n          <do-input-icon\n            [name]=\"localeDefault.localeCode\"\n            [nolabel]=\"true\"\n            [required]=\"true\"\n            [colLabel]=\"0\"\n            [colInput]=\"12\"\n            [icon]=\"'flag-icon flag-icon-' + localeDefault.icon\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"{{localeDefault.localeCode}}\">\n          </do-input-icon>\n        </div>\n        <ng-template #inputSkeleton>\n          <div class=\"col-sm-9\">\n            <div\n              [ngClass]=\"{\n                'input-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n      </div>\n      <do-input-icon *ngFor=\"let i18n of locales\"\n        [name]=\"i18n.localeCode\"\n        [nolabel]=\"true\"\n        [icon]=\"'flag-icon flag-icon-'+ i18n.icon\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"{{i18n.localeCode}}\">\n      </do-input-icon>\n      <do-input-text\n        [name]=\"'code'\"\n        [label]=\"'Code'\"\n        [capslock]=\"true\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"code\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'link'\"\n        [label]=\"'Link'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"link\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'order'\"\n        [label]=\"'Order'\"\n        [required]=\"true\"\n        [type]=\"'number'\"\n        [max]=\"99\"\n        [maxLength]=\"2\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"order\">\n      </do-input-text>\n      <div class=\"form-group row\">\n        <div class=\"offset-sm-3 col-sm-9\" *ngIf=\"!loadingForm; else buttonSkeleton\">\n          <button\n            type=\"button\"\n            status=\"danger\"\n            (click)=\"onReset()\"\n            class=\"reset-left\"\n            nbButton>\n            {{ 'Reset' | translate}}\n          </button>\n          <button\n            type=\"submit\"\n            status=\"primary\"\n            (click)=\"onSubmit(dialogprocessextra)\"\n            [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n            class=\"submit-right\"\n            nbButton>\n            {{ action | translate}}\n          </button>\n        </div>\n        <ng-template #buttonSkeleton>\n          <div class=\"offset-sm-3 col-sm-9\">\n            <div\n              [ngClass]=\"{\n                'button-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </form>\n  </div>\n</div>\n\n<ng-template #dialogprocessextra let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"{{dialogAction === 'Delete' ? 'danger' : 'warning'}}\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <div class=\"row\">\n        <button\n          type=\"reset\"\n          status=\"danger\"\n          (click)=\"ref.close()\"\n          class=\"reset-left-dialog\"\n          nbButton>\n          {{ 'Cancel' | translate}}\n        </button>\n        <button\n          type=\"submit\"\n          status=\"primary\"\n          (click)=\"onSubmitDialog(ref)\"\n          [disabled]=\"disabled\"\n          class=\"submit-right-dialog\"\n          nbButton>\n          {{ dialogAction | translate}}\n        </button>\n      </div>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".tree-ngx{display:flex;flex:1 1 auto;flex-direction:column;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.node{display:flex;flex:1 1 auto;flex-direction:column}.node-children{display:flex;flex:1 1 auto}.node-name{display:inline-block;padding:5px 0 5px 7px}.node-name.markSelected{padding:5px 0 5px 2px;border-left:5px solid #269}.node-name .active{cursor:pointer}.node-offset{display:flex;margin-left:20px}.node-icon-wrapper{position:relative;display:inline-block;width:25px;height:17px;top:1px;left:6px}.node-icon-wrapper.disabled{cursor:default}.collapsable{cursor:pointer}.node-container{display:inline-block}.nodeDisabled{opacity:.6}.node-checkbox:disabled{cursor:auto}.collapsible-wrapper{display:flex;overflow:hidden}.collapsible-wrapper:after{content:'';height:25px;transition:height .3s linear,max-height linear .3s;max-height:0}.collapsible{transition:margin-bottom .3s cubic-bezier(0,0,0,1);margin-bottom:0;max-height:1000000px}.collapsible-wrapper.collapsed>.collapsible{margin-bottom:-20000px;transition:margin-bottom .3s cubic-bezier(1,0,1,1),visibility .3s,max-height .3s;visibility:hidden;max-height:0}.collapsible-wrapper.collapsed:after{height:0;transition:height .3s linear;max-height:25px}.arrow-down{position:absolute;width:0;height:0;left:3px;top:6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #455a64}.arrow-down.collapse-empty{border-top:7px solid #ccc}.arrow-right{position:absolute;width:0;height:0;left:8px;top:3px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #455a64}.node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.tree-action{margin-left:.5rem;cursor:pointer}.action-trash:hover{color:#ff708d}.reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}.reset-left-dialog{margin-left:1rem;margin-right:.5rem}.submit-right-dialog{margin-left:.5rem}"]
                    },] }
        ];
        ExtraMenuPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: theme.NbDialogService }
        ]; };
        return ExtraMenuPageComponent;
    }(doCommon.BaseFormComponent));

    var MenuListPageComponent = /** @class */ (function (_super) {
        __extends(MenuListPageComponent, _super);
        function MenuListPageComponent(injector) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.loading = false;
            _this.tab = 'main';
            _this.destroy$ = new rxjs.Subject();
            return _this;
        }
        MenuListPageComponent.prototype.ngOnInit = function () {
        };
        MenuListPageComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.next();
            this.destroy$.complete();
        };
        MenuListPageComponent.prototype.toggleLoadingAnimation = function (event) {
            var _this = this;
            this.tab = event.tabId;
            this.loading = true;
            if (this.tab === 'main') {
                this.mainMenu.loadDataMenu()
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function () {
                    _this.loading = false;
                });
            }
            else {
                this.extraMenu.loadDataMenu()
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function () {
                    _this.loading = false;
                });
            }
        };
        MenuListPageComponent.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        MenuListPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-menu-list-page',
                        template: "<do-page-outlet [header]=\"'header.menu-management'\">\n  <nb-tabset fullWidth (changeTab)=\"toggleLoadingAnimation($event)\" pagecontent>\n    <nb-tab tabId=\"main\" tabTitle=\"{{'tab.main-menu' | translate}}\">\n      <do-main-menu-page #mainMenu></do-main-menu-page>\n    </nb-tab>\n    <nb-tab tabId=\"extra\" tabTitle=\"{{'tab.extra-menu' | translate}}\" [lazyLoad]=\"true\">\n      <do-extra-menu-page #extraMenu></do-extra-menu-page>\n    </nb-tab>\n  </nb-tabset>\n</do-page-outlet>\n",
                        styles: [".nb-theme-default :host nb-tab{flex:1;padding:1.5rem .25rem!important}.nb-theme-dark :host nb-tab{flex:1;padding:1.5rem .25rem!important}.nb-theme-cosmic :host nb-tab{flex:1;padding:1.5rem .25rem!important}.nb-theme-corporate :host nb-tab{flex:1;padding:1.5rem .25rem!important}"]
                    },] }
        ];
        MenuListPageComponent.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        MenuListPageComponent.propDecorators = {
            mainMenu: [{ type: core.ViewChild, args: ['mainMenu', { static: true },] }],
            extraMenu: [{ type: core.ViewChild, args: ['extraMenu', { static: true },] }]
        };
        return MenuListPageComponent;
    }(doCommon.BaseComponent));

    var ɵ0$4 = {
        code: '#MANAGEMENT-MENU-PAGE',
    };
    var routes$4 = [{
            path: '',
            component: MgmtMenuComponent,
            canActivateChild: [doAuth.AuthGuardChildService],
            children: [
                {
                    path: '',
                    component: MenuListPageComponent,
                    data: ɵ0$4,
                },
            ],
        }];
    var DoMgmtMenuRoutingModule = /** @class */ (function () {
        function DoMgmtMenuRoutingModule() {
        }
        DoMgmtMenuRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forChild(routes$4)],
                        exports: [router.RouterModule],
                    },] }
        ];
        return DoMgmtMenuRoutingModule;
    }());

    var components$4 = [
        MgmtMenuComponent,
        MenuListPageComponent,
        MainMenuPageComponent,
        ExtraMenuPageComponent,
        DialogIconComponent,
    ];
    var entryComponents$1 = [
        DialogIconComponent,
    ];
    var modules$4 = [
        forms.FormsModule,
        forms.ReactiveFormsModule,
        theme.NbCardModule,
        theme.NbAlertModule,
        theme.NbIconModule,
        theme.NbDialogModule.forChild(),
        doTheme.DoThemeModule,
        doCommon.DoInputModule,
        doCommon.DoCheckBoxModule,
        doCommon.DoButtonModule,
        doCommon.DoBaseModule,
        doCommon.DoSelectModule,
        doCommon.DoTableModule,
        theme.NbTabsetModule,
        theme.NbSpinnerModule,
        treeNgx.TreeNgxModule,
        DoMgmtMenuRoutingModule,
    ];
    var providers$4 = [];
    var DoMgmtMenuModule = /** @class */ (function () {
        function DoMgmtMenuModule() {
        }
        DoMgmtMenuModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: __spread(modules$4),
                        declarations: __spread(components$4),
                        providers: __spread(providers$4),
                        entryComponents: __spread(entryComponents$1)
                    },] }
        ];
        return DoMgmtMenuModule;
    }());

    var MgmtFunctionComponent = /** @class */ (function () {
        function MgmtFunctionComponent() {
        }
        MgmtFunctionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-mgmt-function',
                        template: "\n    <router-outlet></router-outlet>\n  "
                    },] }
        ];
        return MgmtFunctionComponent;
    }());

    var FunctionControlService = /** @class */ (function () {
        function FunctionControlService() {
        }
        FunctionControlService.prototype.getRole = function () {
            return this.role;
        };
        FunctionControlService.prototype.setRole = function (role) {
            this.role = role;
        };
        FunctionControlService.decorators = [
            { type: core.Injectable }
        ];
        return FunctionControlService;
    }());

    var FunctionMainPageComponent = /** @class */ (function (_super) {
        __extends(FunctionMainPageComponent, _super);
        function FunctionMainPageComponent(injector, dialogService, functionControlService) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.dialogService = dialogService;
            _this.functionControlService = functionControlService;
            _this.nodeItems = [];
            _this.options = {
                mode: treeNgx.TreeMode.MultiSelect,
                checkboxes: true,
                alwaysEmitSelected: true,
            };
            _this.title = null;
            _this.datas = [];
            return _this;
        }
        FunctionMainPageComponent.prototype.ngOnInit = function () { };
        FunctionMainPageComponent.prototype.loadDataMenu = function () {
            var _this = this;
            this.disabled = true;
            return this.http.HTTP_AUTH(this.api['security']['get-function-menus'], null, null, null, ['main', this.functionControlService.getRole().authority]).pipe(operators.map(function (response) {
                _this.datas = [];
                _this.nodeItems = [];
                _this.nodeItems = __spread(_this.nodeItems, response);
            }));
        };
        FunctionMainPageComponent.prototype.onSelect = function (datas) {
            if (this.datas.length > 0 && this.datas.length !== datas.length)
                this.disabled = false;
            this.datas = [];
            this.datas = __spread(this.datas, datas);
        };
        FunctionMainPageComponent.prototype.onSubmit = function (dialog) {
            this.dialogService.open(dialog, { context: 'alert.edit' });
        };
        FunctionMainPageComponent.prototype.onSubmitDialog = function (ref) {
            this.postFunction(ref);
        };
        FunctionMainPageComponent.prototype.postFunction = function (ref) {
            var _this = this;
            var data = {
                type: 'main',
            };
            var menus = [];
            data['authority'] = this.functionControlService.getRole().authority;
            this.datas.forEach(function (val) {
                menus.push(val['id']);
                if (val['parentMenu']['id']) {
                    if (!menus.includes(val['parentMenu']['id'])) {
                        menus.push(val['parentMenu']['id']);
                    }
                }
            });
            data['menus'] = menus;
            _super.prototype.onSubmit.call(this, data, 'security', 'post-functions')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response.respStatusCode === doCore.ResponseCode.OK_DEFAULT.toString()) {
                    _this.loadDataMenu().subscribe();
                }
                ref.close();
            });
        };
        FunctionMainPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: theme.NbDialogService },
            { type: FunctionControlService }
        ]; };
        FunctionMainPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-function-main-page',
                        template: "<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n    <div class=\"row save-function\">\n      <button\n        [size]=\"'medium'\"\n        [shape]=\"'rectangle'\"\n        [status]=\"'danger'\"\n        [appearance]=\"'ghost'\"\n        (click)=\"loadDataMenu().subscribe()\"\n        nbButton>\n        <nb-icon [status]=\"'danger'\" icon=\"corner-up-left\" pack=\"eva\"></nb-icon>\n        {{'Reset' | translate}}\n      </button>\n      <button\n        [size]=\"'medium'\"\n        [shape]=\"'rectangle'\"\n        [status]=\"'primary'\"\n        [appearance]=\"'ghost'\"\n        [disabled]=\"disabled\"\n        [ngClass]=\"{\n          'submit-right': true\n        }\"\n        (click)=\"onSubmit(dialogprocess)\"\n        nbButton>\n        <nb-icon [status]=\"(disabled ? 'basic' : 'primary')\" icon=\"save\" pack=\"eva\"></nb-icon>\n        {{'Save' | translate}}\n      </button>\n    </div>\n    <tree-ngx\n      (selectedItems)=\"onSelect($event)\"\n      [nodeItems]=\"nodeItems\"\n      [options]=\"options\"\n      #treeMain>\n      <ng-template #nodeNameTemplate let-node=\"node\" let-context=\"context\">\n        <span\n          class=\"node-action\"\n          [ngClass]=\"{\n            'node-action': !node.item.group,\n            'node-action-group': node.item.group\n          }\">\n          {{node.name}}\n        </span>\n      </ng-template>\n    </tree-ngx>\n  </div>\n</div>\n\n<ng-template #dialogprocess let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"{{'warning'}}\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <div class=\"row\">\n        <button\n          type=\"reset\"\n          status=\"danger\"\n          (click)=\"ref.close()\"\n          class=\"reset-left-dialog\"\n          nbButton>\n          {{ 'Cancel' | translate}}\n        </button>\n        <button\n          type=\"submit\"\n          status=\"primary\"\n          (click)=\"onSubmitDialog(ref)\"\n          [disabled]=\"disabled\"\n          class=\"submit-right-dialog\"\n          nbButton>\n          {{ 'Submit' | translate}}\n        </button>\n      </div>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".tree-ngx{display:flex;flex:1 1 auto;flex-direction:column;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.node{display:flex;flex:1 1 auto;flex-direction:column}.node-children{display:flex;flex:1 1 auto}.node-name{display:inline-block;padding:5px 0 5px 7px}.node-name.markSelected{padding:5px 0 5px 2px;border-left:5px solid #269}.node-name .active{cursor:pointer}.node-offset{display:flex;margin-left:20px}.node-icon-wrapper{position:relative;display:inline-block;width:25px;height:17px;top:1px;left:6px}.node-icon-wrapper.disabled{cursor:default}.collapsable{cursor:pointer}.node-container{display:inline-block}.nodeDisabled{opacity:.6}.node-checkbox:disabled{cursor:auto}.collapsible-wrapper{display:flex;overflow:hidden}.collapsible-wrapper:after{content:'';height:25px;transition:height .3s linear,max-height linear .3s;max-height:0}.collapsible{transition:margin-bottom .3s cubic-bezier(0,0,0,1);margin-bottom:0;max-height:1000000px}.collapsible-wrapper.collapsed>.collapsible{margin-bottom:-20000px;transition:margin-bottom .3s cubic-bezier(1,0,1,1),visibility .3s,max-height .3s;visibility:hidden;max-height:0}.collapsible-wrapper.collapsed:after{height:0;transition:height .3s linear;max-height:25px}.arrow-down{position:absolute;width:0;height:0;left:3px;top:6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #455a64}.arrow-down.collapse-empty{border-top:7px solid #ccc}.arrow-right{position:absolute;width:0;height:0;left:8px;top:3px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #455a64}.node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0}.node-action-group{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#8f9bb3;border-radius:0}.tree-action{margin-left:.5rem;cursor:pointer}.reset-left{margin-right:.25rem}.submit-right{margin-left:.5rem}.reset-left-dialog{margin-left:1rem;margin-right:.5rem}.submit-right-dialog{margin-left:.5rem}.save-function{margin:0 0 1rem 2rem}"]
                    },] }
        ];
        FunctionMainPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: theme.NbDialogService },
            { type: FunctionControlService }
        ]; };
        return FunctionMainPageComponent;
    }(doCommon.BaseFormComponent));

    var FunctionExtraPageComponent = /** @class */ (function (_super) {
        __extends(FunctionExtraPageComponent, _super);
        function FunctionExtraPageComponent(injector, dialogService, functionControlService) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.dialogService = dialogService;
            _this.functionControlService = functionControlService;
            _this.nodeItems = [];
            _this.options = {
                mode: treeNgx.TreeMode.MultiSelect,
                checkboxes: true,
                alwaysEmitSelected: true,
            };
            _this.title = null;
            _this.datas = [];
            return _this;
        }
        FunctionExtraPageComponent.prototype.ngOnInit = function () { };
        FunctionExtraPageComponent.prototype.loadDataMenu = function () {
            var _this = this;
            this.disabled = true;
            return this.http.HTTP_AUTH(this.api['security']['get-function-menus'], null, null, null, ['extra', this.functionControlService.getRole().authority]).pipe(operators.map(function (response) {
                _this.datas = [];
                _this.nodeItems = [];
                _this.nodeItems = __spread(_this.nodeItems, response);
            }));
        };
        FunctionExtraPageComponent.prototype.onSelect = function (datas) {
            if (this.datas.length > 0 && this.datas.length !== datas.length)
                this.disabled = false;
            this.datas = [];
            this.datas = __spread(this.datas, datas);
        };
        FunctionExtraPageComponent.prototype.onSubmit = function (dialog) {
            this.dialogService.open(dialog, { context: 'alert.edit' });
        };
        FunctionExtraPageComponent.prototype.onSubmitDialog = function (ref) {
            this.postFunction(ref);
        };
        FunctionExtraPageComponent.prototype.postFunction = function (ref) {
            var _this = this;
            var data = {
                type: 'extra',
            };
            var menus = [];
            data['authority'] = this.functionControlService.getRole().authority;
            this.datas.forEach(function (val) {
                menus.push(val['id']);
                if (val['parentMenu']['id']) {
                    if (!menus.includes(val['parentMenu']['id'])) {
                        menus.push(val['parentMenu']['id']);
                    }
                }
            });
            data['menus'] = menus;
            _super.prototype.onSubmit.call(this, data, 'security', 'post-functions')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response.respStatusCode === doCore.ResponseCode.OK_DEFAULT.toString()) {
                    _this.loadDataMenu().subscribe();
                }
                ref.close();
            });
        };
        FunctionExtraPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: theme.NbDialogService },
            { type: FunctionControlService }
        ]; };
        FunctionExtraPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-function-extra-page',
                        template: "<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n    <div class=\"row save-function\">\n      <button\n        [size]=\"'medium'\"\n        [shape]=\"'rectangle'\"\n        [status]=\"'danger'\"\n        [appearance]=\"'ghost'\"\n        (click)=\"loadDataMenu().subscribe()\"\n        nbButton>\n        <nb-icon [status]=\"'danger'\" icon=\"corner-up-left\" pack=\"eva\"></nb-icon>\n        {{'Reset' | translate}}\n      </button>\n      <button\n        [size]=\"'medium'\"\n        [shape]=\"'rectangle'\"\n        [status]=\"'primary'\"\n        [appearance]=\"'ghost'\"\n        [disabled]=\"disabled\"\n        [ngClass]=\"{\n          'submit-right': true\n        }\"\n        (click)=\"onSubmit(dialogprocess)\"\n        nbButton>\n        <nb-icon [status]=\"(disabled ? 'basic' : 'primary')\" icon=\"save\" pack=\"eva\"></nb-icon>\n        {{'Save' | translate}}\n      </button>\n    </div>\n    <tree-ngx\n      (selectedItems)=\"onSelect($event)\"\n      [nodeItems]=\"nodeItems\"\n      [options]=\"options\"\n      #treeExtra>\n      <ng-template #nodeNameTemplate let-node=\"node\" let-context=\"context\">\n        <span\n          class=\"node-action\"\n          [ngClass]=\"{\n            'node-action': !node.item.group\n          }\">\n          {{node.name}}\n        </span>\n      </ng-template>\n    </tree-ngx>\n  </div>\n</div>\n\n<ng-template #dialogprocess let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"{{'warning'}}\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <div class=\"row\">\n        <button\n          type=\"reset\"\n          status=\"danger\"\n          (click)=\"ref.close()\"\n          class=\"reset-left-dialog\"\n          nbButton>\n          {{ 'Cancel' | translate}}\n        </button>\n        <button\n          type=\"submit\"\n          status=\"primary\"\n          (click)=\"onSubmitDialog(ref)\"\n          [disabled]=\"disabled\"\n          class=\"submit-right-dialog\"\n          nbButton>\n          {{ 'Submit' | translate}}\n        </button>\n      </div>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".tree-ngx{display:flex;flex:1 1 auto;flex-direction:column;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.node{display:flex;flex:1 1 auto;flex-direction:column}.node-children{display:flex;flex:1 1 auto}.node-name{display:inline-block;padding:5px 0 5px 7px}.node-name.markSelected{padding:5px 0 5px 2px;border-left:5px solid #269}.node-name .active{cursor:pointer}.node-offset{display:flex;margin-left:20px}.node-icon-wrapper{position:relative;display:inline-block;width:25px;height:17px;top:1px;left:6px}.node-icon-wrapper.disabled{cursor:default}.collapsable{cursor:pointer}.node-container{display:inline-block}.nodeDisabled{opacity:.6}.node-checkbox:disabled{cursor:auto}.collapsible-wrapper{display:flex;overflow:hidden}.collapsible-wrapper:after{content:'';height:25px;transition:height .3s linear,max-height linear .3s;max-height:0}.collapsible{transition:margin-bottom .3s cubic-bezier(0,0,0,1);margin-bottom:0;max-height:1000000px}.collapsible-wrapper.collapsed>.collapsible{margin-bottom:-20000px;transition:margin-bottom .3s cubic-bezier(1,0,1,1),visibility .3s,max-height .3s;visibility:hidden;max-height:0}.collapsible-wrapper.collapsed:after{height:0;transition:height .3s linear;max-height:25px}.arrow-down{position:absolute;width:0;height:0;left:3px;top:6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #455a64}.arrow-down.collapse-empty{border-top:7px solid #ccc}.arrow-right{position:absolute;width:0;height:0;left:8px;top:3px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #455a64}.node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0}.tree-action{margin-left:.5rem}.reset-left{margin-right:.25rem}.submit-right{margin-left:.5rem}.reset-left-dialog{margin-left:1rem;margin-right:.5rem}.submit-right-dialog{margin-left:.5rem}.save-function{margin:0 0 1rem 2rem}"]
                    },] }
        ];
        FunctionExtraPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: theme.NbDialogService },
            { type: FunctionControlService }
        ]; };
        return FunctionExtraPageComponent;
    }(doCommon.BaseFormComponent));

    var FunctionEditorPageComponent = /** @class */ (function (_super) {
        __extends(FunctionEditorPageComponent, _super);
        function FunctionEditorPageComponent(injector, router, functionControlService) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.router = router;
            _this.functionControlService = functionControlService;
            _this.loading = false;
            _this.tab = 'main';
            _this.destroy$ = new rxjs.Subject();
            if (functionControlService.getRole()) {
                _this.title = functionControlService.getRole().description;
            }
            else {
                _this.router.navigate(['/app/mgmt/function/control']);
            }
            return _this;
        }
        FunctionEditorPageComponent.prototype.ngOnInit = function () {
        };
        FunctionEditorPageComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.next();
            this.destroy$.complete();
        };
        FunctionEditorPageComponent.prototype.toggleLoadingAnimation = function (event) {
            var _this = this;
            if (!this.functionControlService.getRole()) {
                this.router.navigate(['/app/mgmt/function/control']);
                return;
            }
            this.tab = event.tabId;
            this.loading = true;
            if (this.tab === 'main') {
                this.mainMenu.loadDataMenu()
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function () {
                    _this.loading = false;
                });
            }
            else {
                this.extraMenu.loadDataMenu()
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function () {
                    _this.loading = false;
                });
            }
        };
        FunctionEditorPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: FunctionControlService }
        ]; };
        FunctionEditorPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-function-editor-page',
                        template: "<do-page-outlet [header]=\"'header.function-control'\" [param]=\"{value: title}\">\n  <nb-tabset fullWidth (changeTab)=\"toggleLoadingAnimation($event)\" pagecontent>\n    <nb-tab tabId=\"main\" tabTitle=\"{{'tab.main-menu' | translate}}\" [nbSpinner]=\"loading\" nbSpinnerStatus=\"info\" nbSpinnerSize=\"giant\">\n      <do-function-main-page #mainFunction></do-function-main-page>\n    </nb-tab>\n    <nb-tab tabId=\"extra\" tabTitle=\"{{'tab.extra-menu' | translate}}\" [lazyLoad]=\"true\" [nbSpinner]=\"loading\" nbSpinnerStatus=\"info\" nbSpinnerSize=\"giant\">\n      <do-function-extra-page #extraFunction></do-function-extra-page>\n    </nb-tab>\n  </nb-tabset>\n</do-page-outlet>\n",
                        styles: [".nb-theme-default :host nb-tab{flex:1;padding:1.5rem .25rem!important}.nb-theme-dark :host nb-tab{flex:1;padding:1.5rem .25rem!important}.nb-theme-cosmic :host nb-tab{flex:1;padding:1.5rem .25rem!important}.nb-theme-corporate :host nb-tab{flex:1;padding:1.5rem .25rem!important}"]
                    },] }
        ];
        FunctionEditorPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: FunctionControlService }
        ]; };
        FunctionEditorPageComponent.propDecorators = {
            mainMenu: [{ type: core.ViewChild, args: ['mainFunction', { static: true },] }],
            extraMenu: [{ type: core.ViewChild, args: ['extraFunction', { static: true },] }]
        };
        return FunctionEditorPageComponent;
    }(doCommon.BaseComponent));

    var FunctionListPageComponent = /** @class */ (function (_super) {
        __extends(FunctionListPageComponent, _super);
        function FunctionListPageComponent(injector, router, functionControlService) {
            var _this = _super.call(this, injector, {
                'authority': [],
                'description': [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.functionControlService = functionControlService;
            _this.selectionType = ngxDatatable.SelectionType.single;
            _this.columns = [
                { name: 'Authority', prop: 'authority' },
                { name: 'Description', prop: 'description' },
            ];
            _this.expanded = false;
            _this.apiPath = _this.api['security']['datatable-role'];
            _this.filters = [
                { controlName: 'authority', type: 'input' },
                { controlName: 'description', type: 'input' }
            ];
            return _this;
        }
        FunctionListPageComponent.prototype.ngOnInit = function () { };
        FunctionListPageComponent.prototype.onViewDetail = function (data) {
            this.functionControlService.setRole(data);
            this.router.navigate(['/app/mgmt/function/control', 'edit']);
        };
        FunctionListPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: FunctionControlService }
        ]; };
        FunctionListPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-function-list-page',
                        template: "<do-page-outlet [header]=\"'header.function-control-list'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [add]=\"false\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'authority'\"\n            [label]=\"'Authority'\"\n            formControlName=\"authority\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'description'\"\n            [label]=\"'Description'\"\n            formControlName=\"description\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n",
                        styles: [""]
                    },] }
        ];
        FunctionListPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: FunctionControlService }
        ]; };
        return FunctionListPageComponent;
    }(doCommon.BaseFilterComponent));

    var ɵ0$5 = {
        code: '#MANAGEMENT-FUNCTION-CONTROL-PAGE',
    }, ɵ1$4 = {
        code: '#MANAGEMENT-FUNCTION-CONTROL-PAGE',
    };
    var routes$5 = [{
            path: '',
            component: MgmtFunctionComponent,
            canActivateChild: [doAuth.AuthGuardChildService],
            children: [
                {
                    path: '',
                    component: FunctionListPageComponent,
                    data: ɵ0$5,
                },
                {
                    path: ':action',
                    component: FunctionEditorPageComponent,
                    data: ɵ1$4,
                },
            ],
        }];
    var DoMgmtFunctionRoutingModule = /** @class */ (function () {
        function DoMgmtFunctionRoutingModule() {
        }
        DoMgmtFunctionRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forChild(routes$5)],
                        exports: [router.RouterModule],
                    },] }
        ];
        return DoMgmtFunctionRoutingModule;
    }());

    var components$5 = [
        MgmtFunctionComponent,
        FunctionListPageComponent,
        FunctionEditorPageComponent,
        FunctionMainPageComponent,
        FunctionExtraPageComponent,
    ];
    var modules$5 = [
        forms.FormsModule,
        forms.ReactiveFormsModule,
        theme.NbCardModule,
        theme.NbAlertModule,
        theme.NbIconModule,
        theme.NbDialogModule.forChild(),
        theme.NbTabsetModule,
        theme.NbSpinnerModule,
        treeNgx.TreeNgxModule,
        doTheme.DoThemeModule,
        doCommon.DoInputModule,
        doCommon.DoCheckBoxModule,
        doCommon.DoButtonModule,
        doCommon.DoBaseModule,
        doCommon.DoSelectModule,
        doCommon.DoTableModule,
        DoMgmtFunctionRoutingModule,
    ];
    var providers$5 = [
        FunctionControlService,
    ];
    var DoMgmtFunctionModule = /** @class */ (function () {
        function DoMgmtFunctionModule() {
        }
        DoMgmtFunctionModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: __spread(modules$5),
                        declarations: __spread(components$5),
                        providers: __spread(providers$5),
                    },] }
        ];
        return DoMgmtFunctionModule;
    }());

    exports.DoLocaleModule = DoLocaleModule;
    exports.DoMgmtFunctionModule = DoMgmtFunctionModule;
    exports.DoMgmtMenuModule = DoMgmtMenuModule;
    exports.DoMgmtRoleModule = DoMgmtRoleModule;
    exports.DoMgmtUserModule = DoMgmtUserModule;
    exports.DoParameterModule = DoParameterModule;
    exports.ɵa = DoLocaleRoutingModule;
    exports.ɵb = LocaleComponent;
    exports.ɵba = DoMgmtMenuRoutingModule;
    exports.ɵbb = MgmtMenuComponent;
    exports.ɵbc = MenuListPageComponent;
    exports.ɵbd = MainMenuPageComponent;
    exports.ɵbe = ExtraMenuPageComponent;
    exports.ɵbf = DialogIconComponent;
    exports.ɵbg = DoMgmtFunctionRoutingModule;
    exports.ɵbh = MgmtFunctionComponent;
    exports.ɵbi = FunctionListPageComponent;
    exports.ɵbj = FunctionControlService;
    exports.ɵbk = FunctionEditorPageComponent;
    exports.ɵbl = FunctionMainPageComponent;
    exports.ɵbm = FunctionExtraPageComponent;
    exports.ɵc = LocaleListPageComponent;
    exports.ɵd = LocaleService;
    exports.ɵe = LocaleAddEditPageComponent;
    exports.ɵf = DialogFlagComponent;
    exports.ɵg = DoParameterRoutingModule;
    exports.ɵh = ParameterComponent;
    exports.ɵi = ParameterListGroupPageComponent;
    exports.ɵj = ParameterService;
    exports.ɵk = ParameterAddGroupPageComponent;
    exports.ɵl = ParameterListDetailPageComponent;
    exports.ɵm = ParameterDoDetailPageComponent;
    exports.ɵn = ParameterEditGroupCollapseComponent;
    exports.ɵo = DoMgmtUserRoutingModule;
    exports.ɵp = MgmtUserComponent;
    exports.ɵq = MgmtEndUserListPageComponent;
    exports.ɵr = ManagementUserService;
    exports.ɵs = MgmtEndUserDetailPageComponent;
    exports.ɵt = MgmtAdminListPageComponent;
    exports.ɵu = MgmtAdminDetailPageComponent;
    exports.ɵv = DoMgmtRoleRoutingModule;
    exports.ɵw = MgmtRoleComponent;
    exports.ɵx = RoleListPageComponent;
    exports.ɵy = RoleService;
    exports.ɵz = RoleAddEditPageComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=dongkap-do-sys.umd.js.map
