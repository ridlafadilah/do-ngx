(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@ngx-translate/core'), require('@angular/common'), require('@nebular/theme'), require('@angular/router'), require('@swimlane/ngx-charts'), require('ngx-echarts'), require('angular2-chartjs'), require('echarts'), require('@dongkap/do-core'), require('ng2-ckeditor'), require('@agm/core'), require('@asymmetrik/ngx-leaflet'), require('leaflet'), require('rxjs/operators'), require('@ng-select/ng-select'), require('rxjs'), require('@swimlane/ngx-datatable'), require('@angular/animations'), require('@nebular/date-fns'), require('@nebular/moment'), require('@angular/platform-browser'), require('tree-ngx')) :
    typeof define === 'function' && define.amd ? define('@dongkap/do-common', ['exports', '@angular/core', '@angular/forms', '@ngx-translate/core', '@angular/common', '@nebular/theme', '@angular/router', '@swimlane/ngx-charts', 'ngx-echarts', 'angular2-chartjs', 'echarts', '@dongkap/do-core', 'ng2-ckeditor', '@agm/core', '@asymmetrik/ngx-leaflet', 'leaflet', 'rxjs/operators', '@ng-select/ng-select', 'rxjs', '@swimlane/ngx-datatable', '@angular/animations', '@nebular/date-fns', '@nebular/moment', '@angular/platform-browser', 'tree-ngx'], factory) :
    (global = global || self, factory((global.dongkap = global.dongkap || {}, global.dongkap['do-common'] = {}), global.ng.core, global.ng.forms, global['@ngx-translate/core'], global.ng.common, global['@nebular/theme'], global.ng.router, global['@swimlane/ngx-charts'], global['ngx-echarts'], global['angular2-chartjs'], global.echarts, global['@dongkap/do-core'], global['ng2-ckeditor'], global['@agm/core'], global['@asymmetrik/ngx-leaflet'], global.leaflet, global.rxjs.operators, global['@ng-select/ng-select'], global.rxjs, global['@swimlane/ngx-datatable'], global.ng.animations, global['@nebular/date-fns'], global['@nebular/moment'], global.ng.platformBrowser, global['tree-ngx']));
}(this, (function (exports, core, forms, core$1, common, theme, router, ngxCharts, ngxEcharts, angular2Chartjs, echarts, doCore, ng2Ckeditor, core$2, ngxLeaflet, leaflet, operators, ngSelect, rxjs, ngxDatatable, animations, dateFns, moment, platformBrowser, treeNgx) { 'use strict';

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

    var DoPageOutletComponent = /** @class */ (function () {
        function DoPageOutletComponent(router) {
            this.router = router;
            this.width = 12;
            this.selectChange = new core.EventEmitter();
        }
        DoPageOutletComponent.prototype.back = function () {
            this.router.navigate([this.url]);
            return false;
        };
        DoPageOutletComponent.prototype.onChangeSelect = function (event) {
            this.selected = event;
            this.selectChange.emit(event);
        };
        DoPageOutletComponent.ctorParameters = function () { return [
            { type: router.Router }
        ]; };
        DoPageOutletComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-page-outlet',
                        template: "<div class=\"row\">\n  <div class=\"col-lg-{{width}}\">\n    <nb-card>\n      <nb-card-header>\n        <nav class=\"navigation\">\n            <a href=\"#\" (click)=\"back()\" class=\"link back-link\" aria-label=\"Back\" *ngIf=\"url\">\n                <nb-icon icon=\"arrow-back\"></nb-icon>\n            </a>\n            {{header | translate:param}}\n        </nav>\n        <nb-select *ngIf=\"dataSelect\" [selected]=\"selected\" (selectedChange)=\"onChangeSelect($event)\">\n          <nb-option *ngFor=\"let data of dataSelect\" [value]=\"data\">{{ data }}</nb-option>\n        </nb-select>\n      </nb-card-header>\n      <nb-card-body>\n        <ng-content select=\"[pagecontent]\"></ng-content>        \n      </nb-card-body>\n      <ng-content select=\"[pagefooter]\"></ng-content>\n    </nb-card>\n  </div>\n</div>\n    ",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */nb-card-header{display:flex;align-items:center;justify-content:space-between;padding-top:.5rem;padding-bottom:.5rem}.skeleton{-webkit-animation:1.7s linear infinite loading;animation:1.7s linear infinite loading;border-radius:.25rem;background:#dedfe1;background-image:linear-gradient(to right,#dedfe1 0,#f2f3f5 20%,#dedfe1 40%,#dedfe1 100%)}@-webkit-keyframes loading{0%{background-position:-100px}100%{background-position:380px}}@keyframes loading{0%{background-position:-100px}100%{background-position:380px}}.navigation .link{display:inline-block}.navigation .link nb-icon{color:#36f;font-size:1.25rem;vertical-align:middle;margin-right:.25rem}.input-skeleton,.label-skeleton{width:100%;height:2.5rem;line-height:1.5rem;padding:.4375rem 1.125rem}.button-skeleton{width:50%;height:2.5rem;line-height:1rem;padding:.625rem 1.125rem}"]
                    },] }
        ];
        DoPageOutletComponent.ctorParameters = function () { return [
            { type: router.Router }
        ]; };
        DoPageOutletComponent.propDecorators = {
            header: [{ type: core.Input }],
            url: [{ type: core.Input }],
            width: [{ type: core.Input }],
            dataSelect: [{ type: core.Input }],
            selected: [{ type: core.Input }],
            param: [{ type: core.Input }],
            selectChange: [{ type: core.Output }]
        };
        return DoPageOutletComponent;
    }());

    var DoContainerOutletComponent = /** @class */ (function () {
        function DoContainerOutletComponent() {
            this.label = '';
            this.colLabel = 3;
            this.colContent = 9;
            this.nolabel = false;
            this.required = false;
            this.hasErrors = false;
            this.errorMessages = [];
            this.skeleton = false;
        }
        DoContainerOutletComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-container-outlet',
                        template: "<div class=\"form-group row\">\n  <label\n    *ngIf=\"(!skeleton || nolabel);else labelskeleton\"\n    for=\"{{name}}\"\n    class=\"label col-sm-{{colLabel}} col-form-label\">\n    {{label | translate}}{{ (!nolabel) ? ((required) ? ' *' : '') : '' }}\n  </label>\n  <ng-template #labelskeleton>\n    <div class=\"col-sm-{{colLabel}}\">\n      <label\n        class=\"label col-form-label\"\n        [ngClass]=\"{\n          'label-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </label>\n    </div>\n  </ng-template>\n  <ng-content></ng-content>\n  <div class=\"offset-sm-{{colLabel}} col-sm-{{colContent}}\">\n    <do-warn-message *ngIf=\"!skeleton\" [warnMessage]=\"warnMessage\"></do-warn-message>\n    <do-error-message [hasErrors]=\"hasErrors\" [errorMessages]=\"errorMessages\" [param]=\"paramError\">\n    </do-error-message>\n  </div>\n</div>",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [""]
                    },] }
        ];
        DoContainerOutletComponent.propDecorators = {
            name: [{ type: core.Input }],
            label: [{ type: core.Input }],
            colLabel: [{ type: core.Input }],
            colContent: [{ type: core.Input }],
            nolabel: [{ type: core.Input }],
            required: [{ type: core.Input }],
            hasErrors: [{ type: core.Input }],
            errorMessages: [{ type: core.Input }],
            warnMessage: [{ type: core.Input }],
            paramError: [{ type: core.Input }],
            skeleton: [{ type: core.Input }]
        };
        return DoContainerOutletComponent;
    }());

    var DoWarnMessageComponent = /** @class */ (function () {
        function DoWarnMessageComponent() {
        }
        DoWarnMessageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-warn-message',
                        template: "<div *ngIf=\"warnMessage\">\n    <span class=\"caption status-warning warn-message\">{{warnMessage | translate}}</span>\n</div>",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".warn-message{font-style:italic}"]
                    },] }
        ];
        DoWarnMessageComponent.propDecorators = {
            warnMessage: [{ type: core.Input }],
            param: [{ type: core.Input }]
        };
        return DoWarnMessageComponent;
    }());

    var DoErrorMessageComponent = /** @class */ (function () {
        function DoErrorMessageComponent() {
            this.hasErrors = false;
            this.errorMessages = [];
        }
        DoErrorMessageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-error-message',
                        template: "<div *ngIf=\"hasErrors\">\n  <div *ngFor=\"let message of errorMessages\">\n    <span class=\"caption status-danger\">{{message | translate:param}}</span>\n  </div>\n</div>",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [""]
                    },] }
        ];
        DoErrorMessageComponent.propDecorators = {
            hasErrors: [{ type: core.Input }],
            errorMessages: [{ type: core.Input }],
            param: [{ type: core.Input }]
        };
        return DoErrorMessageComponent;
    }());

    var CurrencyMaskDirective = /** @class */ (function () {
        function CurrencyMaskDirective(ngControl, el) {
            this.ngControl = ngControl;
            this.el = el;
            this.prefix = 'Rp';
            this.decimalSeparator = '.';
            this.thousandsSeparator = ',';
            this.suffix = ',-';
            this.padding = 5;
        }
        CurrencyMaskDirective.prototype.onFocus = function (value, event) {
            value = value ? value : this.prefix.concat(' ');
            value = this.onLeave(value.replace(this.suffix, ''));
            event.target.toNumber = this.toNumber(value);
            this.ngControl.valueAccessor.writeValue(value);
        };
        CurrencyMaskDirective.prototype.onBlur = function (value, event) {
            value = value.replace(/\D/g, '') ? this.onLeave(value).concat(this.suffix) : '';
            event.target.toNumber = this.toNumber(value);
            this.ngControl.valueAccessor.writeValue(value);
        };
        CurrencyMaskDirective.prototype.onModelChange = function (value) {
            value = this.toNumber(value);
            value = value.replace(new RegExp('[^0-9|^' + this.decimalSeparator + '|^-]', 'g'), '');
            if (value.toString().match(new RegExp('^\-?[0-9]*(' + this.decimalSeparator + '[0-9]*)?$', 'g'))) {
                var _a = this.onInputChange(value), val = _a.val, frac = _a.frac;
                if (value.toString().match(new RegExp('^\-?[0-9]*$', 'g'))) {
                    val = (!isNaN(parseInt(val, 10)) && val !== '-0') ? parseInt(val, 10).toString() : val;
                    value = this.onTransform(val, frac);
                    this.value = this.prefix.concat(' ').concat(value);
                }
                if (value.toString().match(new RegExp('^(\-?[0-9])*[' + this.decimalSeparator + '][0-9]*$', 'g')) &&
                    !value.toString().startsWith(this.decimalSeparator, 0)) {
                    frac = frac.substring(0, this.padding);
                    frac = this.decimalSeparator.concat(frac);
                    value = this.onTransform(val, frac);
                    this.value = this.prefix.concat(' ').concat(value);
                }
                this.el.nativeElement.toNumber = this.toNumber(this.prefix.concat(' ').concat(this.onTransform(val, (parseInt(frac.replace(this.decimalSeparator, ''), 10) > 0) ?
                    this.pad(frac, this.padding + 1).substring(0, this.padding + 1) :
                    '')));
            }
            this.ngControl.valueAccessor.writeValue(this.value);
        };
        CurrencyMaskDirective.prototype.onKeyDown = function (event) {
            if (event.key) {
                if (['DELETE', 'BACKSPACE', 'TAB', 'ESCAPE',
                    'ENTER', 'DECIMAL POINT', 'PERIOD', 'DASH'].indexOf(event.key.toUpperCase()) !== -1 ||
                    (event.key.toUpperCase() === 'A' && event.ctrlKey === true) || // Allow: Ctrl+A
                    (event.key.toUpperCase() === 'C' && event.ctrlKey === true) || // Allow: Ctrl+C
                    (event.key.toUpperCase() === 'V' && event.ctrlKey === true) || // Allow: Ctrl+V
                    (event.key.toUpperCase() === 'X' && event.ctrlKey === true) || // Allow: Ctrl+X
                    (event.key.toUpperCase() === 'A' && event.metaKey === true) || // Cmd+A (Mac)
                    (event.key.toUpperCase() === 'C' && event.metaKey === true) || // Cmd+C (Mac)
                    (event.key.toUpperCase() === 'V' && event.metaKey === true) || // Cmd+V (Mac)
                    (event.key.toUpperCase() === 'X' && event.metaKey === true) || // Cmd+X (Mac)
                    (event.key.toUpperCase() === 'END') ||
                    (event.key.toUpperCase() === 'HOME') ||
                    (event.key.toUpperCase() === 'ARROWLEFT') ||
                    (event.key.toUpperCase() === 'ARROWRIGHT') || (event.key.match(/[0-9.,\-]/g))) {
                    return; // let it happen, don't do anything
                }
            }
            // Ensure that it is a number and stop the keypress
            /*
            if ((event.shiftKey || (event.key.match(/[0-9.,\-+]/g)))) {
                event.preventDefault();
            }
            */
        };
        CurrencyMaskDirective.prototype.onLeave = function (value) {
            var _a = this.onInputChange(value), val = _a.val, frac = _a.frac;
            var fraction = '';
            if (frac) {
                if (parseInt(frac, 10) > 0) {
                    fraction = this.decimalSeparator + this.pad(frac, this.padding).substring(0, this.padding);
                }
            }
            return this.onTransform(val, fraction);
        };
        CurrencyMaskDirective.prototype.onInputChange = function (value) {
            var _a = __read((value || '').split(this.decimalSeparator), 2), _b = _a[0], val = _b === void 0 ? '' : _b, _c = _a[1], fraction = _c === void 0 ? '' : _c;
            return { val: val, frac: fraction };
        };
        CurrencyMaskDirective.prototype.onTransform = function (val, fraction) {
            val = val.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
            return val + fraction;
        };
        CurrencyMaskDirective.prototype.toNumber = function (val) {
            return val
                .replace(this.prefix, '')
                .replace(' ', '')
                .replace(this.suffix, '')
                .replace(new RegExp(this.thousandsSeparator, 'g'), '');
        };
        CurrencyMaskDirective.prototype.pad = function (val, size) {
            while (val.length < size)
                val = val + '0';
            return val;
        };
        CurrencyMaskDirective.ctorParameters = function () { return [
            { type: forms.NgControl },
            { type: core.ElementRef }
        ]; };
        CurrencyMaskDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'input[doCurrency]',
                    },] }
        ];
        CurrencyMaskDirective.ctorParameters = function () { return [
            { type: forms.NgControl },
            { type: core.ElementRef }
        ]; };
        CurrencyMaskDirective.propDecorators = {
            prefix: [{ type: core.Input, args: ['prefix',] }],
            decimalSeparator: [{ type: core.Input, args: ['decimal',] }],
            thousandsSeparator: [{ type: core.Input, args: ['thousand',] }],
            suffix: [{ type: core.Input, args: ['suffix',] }],
            padding: [{ type: core.Input, args: ['padding',] }],
            onFocus: [{ type: core.HostListener, args: ['focus', ['$event.target.value', '$event'],] }],
            onBlur: [{ type: core.HostListener, args: ['blur', ['$event.target.value', '$event'],] }],
            onModelChange: [{ type: core.HostListener, args: ['ngModelChange', ['$event'],] }],
            onKeyDown: [{ type: core.HostListener, args: ['keydown', ['$event'],] }]
        };
        return CurrencyMaskDirective;
    }());

    var EqualValidator = /** @class */ (function () {
        function EqualValidator(validateEqual) {
            this.validateEqual = validateEqual;
        }
        EqualValidator.prototype.validate = function (c) {
            var v = c.value;
            var e = c.root.get(this.validateEqual);
            if (e && v !== e.value && v) {
                return { equal: false };
            }
            return null;
        };
        EqualValidator.ctorParameters = function () { return [
            { type: String, decorators: [{ type: core.Attribute, args: ['doValidateEqual',] }] }
        ]; };
        EqualValidator.decorators = [
            { type: core.Directive, args: [{
                        selector: '[doValidateEqual][formControlName],[doValidateEqual][formControl],[doValidateEqual][ngModel]',
                        providers: [
                            { provide: forms.NG_VALIDATORS, useExisting: core.forwardRef(function () { return EqualValidator; }), multi: true },
                        ],
                    },] }
        ];
        EqualValidator.ctorParameters = function () { return [
            { type: String, decorators: [{ type: core.Attribute, args: ['doValidateEqual',] }] }
        ]; };
        return EqualValidator;
    }());

    var NotEqualValidator = /** @class */ (function () {
        function NotEqualValidator(validateNotEqual) {
            this.validateNotEqual = validateNotEqual;
        }
        NotEqualValidator.prototype.validate = function (c) {
            var v = c.value;
            var e = c.root.get(this.validateNotEqual);
            if (e && v === e.value && v) {
                return { equal: true };
            }
            return null;
        };
        NotEqualValidator.ctorParameters = function () { return [
            { type: String, decorators: [{ type: core.Attribute, args: ['doValidateNotEqual',] }] }
        ]; };
        NotEqualValidator.decorators = [
            { type: core.Directive, args: [{
                        selector: '[doValidateNotEqual][formControlName],[doValidateNotEqual][formControl],[doValidateNotEqual][ngModel]',
                        providers: [
                            { provide: forms.NG_VALIDATORS, useExisting: core.forwardRef(function () { return NotEqualValidator; }), multi: true },
                        ],
                    },] }
        ];
        NotEqualValidator.ctorParameters = function () { return [
            { type: String, decorators: [{ type: core.Attribute, args: ['doValidateNotEqual',] }] }
        ]; };
        return NotEqualValidator;
    }());

    var DoToastrService = /** @class */ (function () {
        function DoToastrService(toastrService, translate) {
            this.toastrService = toastrService;
            this.translate = translate;
            this.status = 'success';
            this.position = theme.NbGlobalPhysicalPosition.TOP_RIGHT;
            this.duration = 5000;
            this.hasIcon = true;
            this.destroyByClick = true;
            this.preventDuplicates = false;
        }
        DoToastrService.prototype.show = function (content, title, status, position, duration, hasIcon, destroyByClick) {
            if (!title)
                title = this.title(status);
            this.build(content, title, status, position, duration, hasIcon, destroyByClick);
        };
        DoToastrService.prototype.showI18n = function (content, contentHasI18n, title, status, position, duration, hasIcon, destroyByClick) {
            var _this = this;
            if (!title)
                title = this.title(status);
            this.translate.get(title).subscribe(function (resultTitle) {
                title = resultTitle;
                if (contentHasI18n) {
                    _this.build(content, title, status, position, duration, hasIcon, destroyByClick);
                }
                else {
                    _this.translate.get(content).subscribe(function (resultContent) {
                        _this.build(resultContent, title, status, position, duration, hasIcon, destroyByClick);
                    });
                }
            });
        };
        DoToastrService.prototype.build = function (content, title, status, position, duration, hasIcon, destroyByClick) {
            this.toastrService.show(content, title, {
                status: status ? status : this.status,
                position: position ? position : this.position,
                duration: duration ? duration : this.duration,
                hasIcon: hasIcon ? hasIcon : this.hasIcon,
                destroyByClick: destroyByClick ? destroyByClick : this.destroyByClick,
                preventDuplicates: this.preventDuplicates,
            });
        };
        DoToastrService.prototype.title = function (status) {
            var title = 'Success';
            switch (status) {
                case 'primary':
                    title = 'Notification';
                    break;
                case 'warning':
                    title = 'Warning';
                    break;
                case 'danger':
                    title = 'Failure';
                    break;
                case 'info':
                    title = 'Information';
                    break;
                default:
                    break;
            }
            return title;
        };
        DoToastrService.ctorParameters = function () { return [
            { type: theme.NbToastrService },
            { type: core$1.TranslateService }
        ]; };
        DoToastrService.decorators = [
            { type: core.Injectable }
        ];
        DoToastrService.ctorParameters = function () { return [
            { type: theme.NbToastrService },
            { type: core$1.TranslateService }
        ]; };
        return DoToastrService;
    }());

    var TOASTR_COMPONENTS = [];
    var TOASTR_PROVIDERS = [
        DoToastrService,
    ];
    var DoToastrModule = /** @class */ (function () {
        function DoToastrModule() {
        }
        DoToastrModule.forRoot = function () {
            return {
                ngModule: DoToastrModule,
                providers: __spread(TOASTR_PROVIDERS),
            };
        };
        DoToastrModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule,
                        ],
                        declarations: __spread(TOASTR_COMPONENTS),
                        exports: __spread(TOASTR_COMPONENTS),
                    },] }
        ];
        return DoToastrModule;
    }());

    var DragDropDirective = /** @class */ (function () {
        function DragDropDirective() {
            this.onFileDropped = new core.EventEmitter();
            this.opacity = '0.7';
            this.background = '#f7f9fc';
            this.styleOpacity = '0.7';
        }
        DragDropDirective.prototype.onDragOver = function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            this.background = '#edf1f7';
            this.styleOpacity = '0.5';
            this.opacity = this.styleOpacity;
        };
        DragDropDirective.prototype.onDragLeave = function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            this.background = '#f7f9fc';
            this.styleOpacity = '0.7';
            this.opacity = this.styleOpacity;
        };
        DragDropDirective.prototype.ondrop = function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            this.background = '#f7f9fc';
            this.styleOpacity = '0.7';
            this.opacity = this.styleOpacity;
            var files = evt.dataTransfer.files;
            if (files.length > 0) {
                this.onFileDropped.emit(files);
            }
        };
        DragDropDirective.prototype.onMouseOver = function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            this.background = '#f7f9fc';
            this.styleOpacity = '0.5';
            this.opacity = this.styleOpacity;
        };
        DragDropDirective.prototype.onMouseLeave = function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            this.background = '#f7f9fc';
            this.styleOpacity = '0.7';
            this.opacity = this.styleOpacity;
        };
        DragDropDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[doDragDrop]',
                    },] }
        ];
        DragDropDirective.propDecorators = {
            onFileDropped: [{ type: core.Output }],
            opacity: [{ type: core.Input }],
            background: [{ type: core.HostBinding, args: ['style.background-color',] }],
            styleOpacity: [{ type: core.HostBinding, args: ['style.opacity',] }],
            onDragOver: [{ type: core.HostListener, args: ['dragover', ['$event'],] }],
            onDragLeave: [{ type: core.HostListener, args: ['dragleave', ['$event'],] }],
            ondrop: [{ type: core.HostListener, args: ['drop', ['$event'],] }],
            onMouseOver: [{ type: core.HostListener, args: ['mouseover', ['$event'],] }],
            onMouseLeave: [{ type: core.HostListener, args: ['mouseleave', ['$event'],] }]
        };
        return DragDropDirective;
    }());

    var BASE_COMPONENTS = [
        DoPageOutletComponent,
        DoContainerOutletComponent,
        DoWarnMessageComponent,
        DoErrorMessageComponent,
    ];
    var BASE_DIRECTIVES = [
        CurrencyMaskDirective,
        EqualValidator,
        NotEqualValidator,
        DragDropDirective,
    ];
    var DoBaseModule = /** @class */ (function () {
        function DoBaseModule() {
        }
        DoBaseModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            core$1.TranslateModule,
                            theme.NbCardModule,
                            theme.NbIconModule,
                            theme.NbSelectModule,
                            DoToastrModule.forRoot(),
                        ],
                        declarations: __spread(BASE_COMPONENTS, BASE_DIRECTIVES),
                        exports: __spread(BASE_COMPONENTS, BASE_DIRECTIVES, [
                            core$1.TranslateModule,
                        ]),
                    },] }
        ];
        return DoBaseModule;
    }());

    var CALENDAR_COMPONENTS = [];
    var DoCalendarModule = /** @class */ (function () {
        function DoCalendarModule() {
        }
        DoCalendarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule,
                        ],
                        declarations: __spread(CALENDAR_COMPONENTS),
                        exports: __spread(CALENDAR_COMPONENTS),
                    },] }
        ];
        return DoCalendarModule;
    }());

    var DoChartComponent = /** @class */ (function () {
        function DoChartComponent() {
            this.options = {};
        }
        Object.defineProperty(DoChartComponent.prototype, "optionsFn", {
            set: function (options) {
                this.options = options;
            },
            enumerable: false,
            configurable: true
        });
        DoChartComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-chart',
                        template: "<div echarts [options]=\"options\" class=\"echart\"></div>",
                        styles: [".nb-theme-default :host do-chart{display:block;height:28.875rem;width:100%}.nb-theme-default :host ::ng-deep .echart{height:100%;width:100%}.nb-theme-dark :host do-chart{display:block;height:28.875rem;width:100%}.nb-theme-dark :host ::ng-deep .echart{height:100%;width:100%}.nb-theme-cosmic :host do-chart{display:block;height:28.875rem;width:100%}.nb-theme-cosmic :host ::ng-deep .echart{height:100%;width:100%}.nb-theme-corporate :host do-chart{display:block;height:28.875rem;width:100%}.nb-theme-corporate :host ::ng-deep .echart{height:100%;width:100%}"]
                    },] }
        ];
        DoChartComponent.propDecorators = {
            optionsFn: [{ type: core.Input }],
            options: [{ type: core.Input }]
        };
        return DoChartComponent;
    }());

    var CHART_COMPONENTS = [
        DoChartComponent,
    ];
    var DoChartsGraphModule = /** @class */ (function () {
        function DoChartsGraphModule() {
        }
        DoChartsGraphModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            ngxCharts.NgxChartsModule,
                            angular2Chartjs.ChartModule,
                            ngxEcharts.NgxEchartsModule.forRoot({
                                echarts: echarts,
                            }),
                        ],
                        declarations: __spread(CHART_COMPONENTS),
                        exports: __spread(CHART_COMPONENTS),
                    },] }
        ];
        return DoChartsGraphModule;
    }());

    var DoValidatorAccessor = /** @class */ (function () {
        function DoValidatorAccessor(ngControl) {
            this.ngControl = ngControl;
            this.label = '';
            this.nolabel = false;
            this.disabled = false;
            this.required = false;
            this.onChange = function (_) { };
            this.onTouched = function (_) { };
            ngControl && (ngControl.valueAccessor = this);
        }
        DoValidatorAccessor.prototype.onInit = function () { };
        DoValidatorAccessor.prototype.ngOnInit = function () {
            this.onInit();
            var control = this.ngControl.control;
            var validators = control.validator ? [control.validator] : [];
            if (this.ngControl.control.errors) {
                this.required = this.ngControl.control.errors['required'];
            }
            if (this.required) {
                validators.push(forms.Validators.required);
            }
            if (this.pattern) {
                validators.push(forms.Validators.pattern(this.pattern));
            }
            control.setValidators(validators);
            control.updateValueAndValidity();
        };
        DoValidatorAccessor.prototype.validate = function (c) {
            var validators = [];
            if (this.required) {
                validators.push(forms.Validators.required);
            }
            if (this.pattern) {
                validators.push(forms.Validators.pattern(this.pattern));
            }
            return validators;
        };
        Object.defineProperty(DoValidatorAccessor.prototype, "hasErrors", {
            get: function () {
                return (!this.disabled &&
                    this.ngControl.control &&
                    this.ngControl.control.invalid &&
                    this.ngControl.touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DoValidatorAccessor.prototype, "hasSuccess", {
            get: function () {
                return (!this.disabled &&
                    this.ngControl.control &&
                    this.ngControl.control.valid &&
                    this.ngControl.touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DoValidatorAccessor.prototype, "errorMessages", {
            get: function () {
                var _this = this;
                var errors = [];
                if (this.ngControl.errors)
                    Object.keys(this.ngControl.errors).forEach(function (property) {
                        switch (property) {
                            case 'required':
                                errors.push('error.required');
                                break;
                            case 'email':
                                errors.push('error.pattern.email');
                                break;
                            case 'minlength':
                                errors.push('error.minlength');
                                break;
                            default:
                                errors.push('error.'.concat(property).concat('.').concat(_this.name));
                                break;
                        }
                    });
                return errors;
            },
            enumerable: false,
            configurable: true
        });
        DoValidatorAccessor.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        DoValidatorAccessor.ctorParameters = function () { return [
            { type: forms.NgControl }
        ]; };
        DoValidatorAccessor.decorators = [
            { type: core.Directive }
        ];
        DoValidatorAccessor.ctorParameters = function () { return [
            { type: forms.NgControl }
        ]; };
        DoValidatorAccessor.propDecorators = {
            name: [{ type: core.Input }],
            pattern: [{ type: core.Input }],
            label: [{ type: core.Input }],
            nolabel: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            required: [{ type: core.Input }],
            paramError: [{ type: core.Input }],
            warnMessage: [{ type: core.Input }]
        };
        return DoValidatorAccessor;
    }());

    var DoValueAccessor = /** @class */ (function (_super) {
        __extends(DoValueAccessor, _super);
        function DoValueAccessor(ngControl, locale) {
            var _this = _super.call(this, ngControl) || this;
            _this.ngControl = ngControl;
            _this.locale = locale;
            _this.format = doCore.DateFormat.DATE;
            _this.skeleton = false;
            return _this;
        }
        Object.defineProperty(DoValueAccessor.prototype, "value", {
            get: function () { return this._value; },
            set: function (value) {
                if (this._value !== value) {
                    this._value = value;
                    if (value instanceof Date)
                        this.onChange(common.formatDate(value, this.format, this.locale));
                    else
                        this.onChange(value);
                    var control = this.ngControl.control;
                    if (control) {
                        control.updateValueAndValidity();
                        control.markAsTouched();
                        control.markAsDirty();
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        DoValueAccessor.prototype.writeValue = function (value) {
            this._value = value;
            this.onChange(this.value);
            var control = this.ngControl.control;
            if (control) {
                control.updateValueAndValidity();
                control.markAsUntouched();
                control.markAsPristine();
            }
        };
        DoValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
        DoValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        DoValueAccessor.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
        DoValueAccessor.ctorParameters = function () { return [
            { type: forms.NgControl },
            { type: String }
        ]; };
        DoValueAccessor.decorators = [
            { type: core.Directive }
        ];
        DoValueAccessor.ctorParameters = function () { return [
            { type: forms.NgControl },
            { type: String }
        ]; };
        DoValueAccessor.propDecorators = {
            format: [{ type: core.Input }],
            skeleton: [{ type: core.Input }]
        };
        return DoValueAccessor;
    }(DoValidatorAccessor));

    var DoCheckboxComponent = /** @class */ (function (_super) {
        __extends(DoCheckboxComponent, _super);
        function DoCheckboxComponent(ngControl, locale) {
            var _this = _super.call(this, ngControl, locale) || this;
            _this.locale = locale;
            _this.colLabel = 3;
            _this.colInput = 9;
            _this.onChecked = new core.EventEmitter();
            return _this;
        }
        DoCheckboxComponent.prototype.onCheckedChange = function () {
            if (!this.value) {
                this.value = this.data;
            }
            if (Array.isArray(this.value).valueOf()) {
                var isChecked_1 = false;
                Array.from(this.value).forEach(function (value) {
                    if (value.selected) {
                        isChecked_1 = value.selected;
                    }
                });
                if (this.required) {
                    if (!isChecked_1) {
                        this.ngControl.control.setErrors({
                            'required': true,
                        });
                    }
                    else {
                        this.ngControl.control.setErrors(null);
                    }
                }
                this.ngControl.control.markAsTouched();
                this.ngControl.control.markAsDirty();
            }
            this.onChecked.emit(this.value);
        };
        DoCheckboxComponent.ctorParameters = function () { return [
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
        ]; };
        DoCheckboxComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-checkbox',
                        template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <nb-checkbox\n      [ngClass]=\"{\n        'status-danger': hasErrors\n      }\"\n      *ngFor=\"let item of (value || data)\"\n      [disabled]=\"item.disabled || disabled\"\n      [checked]=\"item.selected\"\n      [(ngModel)]=\"item.selected\"\n      (change)=\"onCheckedChange()\">\n      {{item.name | translate}}\n    </nb-checkbox>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                        styles: [""]
                    },] }
        ];
        DoCheckboxComponent.ctorParameters = function () { return [
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
        ]; };
        DoCheckboxComponent.propDecorators = {
            colLabel: [{ type: core.Input }],
            colInput: [{ type: core.Input }],
            data: [{ type: core.Input }],
            onChecked: [{ type: core.Output }]
        };
        return DoCheckboxComponent;
    }(DoValueAccessor));

    var CHECKBOX_COMPONENTS = [
        DoCheckboxComponent,
    ];
    var DoCheckBoxModule = /** @class */ (function () {
        function DoCheckBoxModule() {
        }
        DoCheckBoxModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            theme.NbCheckboxModule,
                            core$1.TranslateModule,
                            DoBaseModule,
                        ],
                        declarations: __spread(CHECKBOX_COMPONENTS),
                        exports: __spread(CHECKBOX_COMPONENTS, [
                            theme.NbCheckboxModule,
                        ]),
                    },] }
        ];
        return DoCheckBoxModule;
    }());

    var TinyMCEComponent = /** @class */ (function (_super) {
        __extends(TinyMCEComponent, _super);
        function TinyMCEComponent(ngControl, locale, element) {
            var _this = _super.call(this, ngControl, locale) || this;
            _this.locale = locale;
            _this.element = element;
            _this.colLabel = 3;
            _this.colInput = 9;
            _this.plugins = ['link', 'paste', 'table'];
            _this.height = 320;
            _this.id = 'tinyMce';
            return _this;
        }
        TinyMCEComponent.prototype.editorChange = function (element) {
            if (!element) {
                element = this.element.nativeElement;
                element = element.getElementsByClassName('tox-edit-area').item(0);
            }
            if (this.ngControl.invalid) {
                if (!element.getAttribute('class').endsWith('status-danger'))
                    element.setAttribute('class', element.getAttribute('class').concat(' status-danger'));
                this.ngControl.control.markAsTouched();
            }
            else {
                if (element.getAttribute('class').endsWith('status-danger')) {
                    element.setAttribute('class', element.getAttribute('class').replace('status-danger', ''));
                }
            }
        };
        TinyMCEComponent.ctorParameters = function () { return [
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] },
            { type: core.ElementRef }
        ]; };
        TinyMCEComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-tiny-mce',
                        template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <do-mce-core\n      [id]=\"id\"\n      [name]=\"name\"\n      [required]=\"required\"\n      [readonly]=\"disabled\"\n      [plugins]=\"plugins\"\n      [height]=\"height\"\n      [value]=\"value\"\n      [(ngModel)]=\"value\"\n      (change)=\"onChange($event)\"\n      (focus)=\"onTouched($event)\"\n      (editorchange)=\"editorChange($event.target.contentAreaContainer)\"\n      (focus)=\"editorChange($event.target.contentAreaContainer)\"\n      (blur)=\"editorChange($event.target.contentAreaContainer)\">\n    </do-mce-core>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'skeleton': skeleton\n        }\"\n        [ngStyle]=\"{ \n          'width':  '100%',\n          'height':  height + 'px'\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".tox-edit-area.status-danger{border:1px solid #ff3d71!important;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #fde6e8}"]
                    },] }
        ];
        TinyMCEComponent.ctorParameters = function () { return [
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] },
            { type: core.ElementRef }
        ]; };
        TinyMCEComponent.propDecorators = {
            placeholder: [{ type: core.Input }],
            colLabel: [{ type: core.Input }],
            colInput: [{ type: core.Input }],
            plugins: [{ type: core.Input }],
            height: [{ type: core.Input }],
            id: [{ type: core.Input }]
        };
        return TinyMCEComponent;
    }(DoValueAccessor));

    var CaldeiraKnabbenEditorComponent = /** @class */ (function (_super) {
        __extends(CaldeiraKnabbenEditorComponent, _super);
        function CaldeiraKnabbenEditorComponent(ngControl, locale) {
            var _this = _super.call(this, ngControl, locale) || this;
            _this.locale = locale;
            _this.colLabel = 3;
            _this.colInput = 9;
            _this.minLength = 0;
            _this.maxLength = 100;
            _this.height = 320;
            _this.config = {
                skin: 'bootstrapck',
                height: _this.height,
                allowedContent: false,
                forcePasteAsPlainText: true,
                font_names: 'Open Sans;sans-serif;Arial;Times New Roman;Verdana',
                toolbarGroups: [
                    { name: 'document', groups: ['mode', 'document', 'doctools'] },
                    { name: 'clipboard', groups: ['clipboard', 'undo'] },
                    { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
                    { name: 'forms', groups: ['forms'] },
                    '/',
                    { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
                    { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
                    { name: 'links', groups: ['links'] },
                    { name: 'insert', groups: ['insert'] },
                    '/',
                    { name: 'styles', groups: ['styles'] },
                    { name: 'colors', groups: ['colors'] },
                    { name: 'tools', groups: ['tools'] },
                    { name: 'others', groups: ['others'] },
                    { name: 'about', groups: ['about'] },
                ],
                removeButtons: "Source,Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,\n                    PasteText,PasteFromWord,Undo,Redo,Find,Replace,SelectAll,Scayt,\n                    Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,\n                    HiddenField,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,\n                    Outdent,Indent,CreateDiv,Blockquote,BidiLtr,BidiRtl,Language,Unlink,\n                    Anchor,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,\n                    Iframe,Maximize,ShowBlocks,About",
            };
            return _this;
        }
        CaldeiraKnabbenEditorComponent.prototype.editorChange = function (element) {
            if (element) {
                if (this.ngControl.invalid) {
                    if (!element.getAttribute('class').endsWith('status-danger'))
                        element.setAttribute('class', element.getAttribute('class').concat(' status-danger'));
                    this.ngControl.control.markAsTouched();
                }
                else {
                    if (element.getAttribute('class').endsWith('status-danger')) {
                        element.setAttribute('class', element.getAttribute('class').replace('status-danger', ''));
                    }
                }
            }
        };
        CaldeiraKnabbenEditorComponent.prototype.ngOnDestroy = function () { };
        CaldeiraKnabbenEditorComponent.ctorParameters = function () { return [
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
        ]; };
        CaldeiraKnabbenEditorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-ckeditor',
                        template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <ckeditor\n        [config]=\"config\"\n        [readonly]=\"disabled\"\n        [required]=\"required\"\n        [(ngModel)]=\"value\"\n        (change)=\"onChange($event)\"\n        (blur)=\"onTouched($event)\"\n        (blur)=\"editorChange($event.editor.ui.contentsElement)\"\n        (focus)=\"editorChange($event.editor.ui.contentsElement)\"\n        (editorChange)=\"editorChange($event.editor.ui.contentsElement)\"\n        debounce=\"500\"\n        #ckeditor>\n    </ckeditor>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'skeleton': skeleton\n        }\"\n        [ngStyle]=\"{ \n          'width':  '100%',\n          'height':  height + 'px'\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".cke_contents.status-danger{border:1px solid #ff3d71!important;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #fde6e8}"]
                    },] }
        ];
        CaldeiraKnabbenEditorComponent.ctorParameters = function () { return [
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
        ]; };
        CaldeiraKnabbenEditorComponent.propDecorators = {
            placeholder: [{ type: core.Input }],
            colLabel: [{ type: core.Input }],
            colInput: [{ type: core.Input }],
            minLength: [{ type: core.Input }],
            maxLength: [{ type: core.Input }],
            height: [{ type: core.Input }],
            config: [{ type: core.Input }]
        };
        return CaldeiraKnabbenEditorComponent;
    }(DoValueAccessor));

    var MCECoreComponent = /** @class */ (function () {
        function MCECoreComponent(host, envi) {
            this.host = host;
            this.envi = envi;
            this.plugins = ['link', 'paste', 'table'];
            this.height = 320;
            this.id = 'tinyMce';
            this.readonly = false;
            this.change = new core.EventEmitter();
            this.editorchange = new core.EventEmitter();
            this.focus = new core.EventEmitter();
            this.blur = new core.EventEmitter();
            this.onChange = function (_) { };
            this.onTouched = function (_) { };
        }
        MCECoreComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            tinymce.init({
                selector: '#' + this.id,
                target: this.host.nativeElement,
                plugins: this.plugins,
                menu: {
                    file: { title: 'File', items: 'newdocument restoredraft | preview | print ' },
                    edit: { title: 'Edit', items: 'undo redo | cut copy paste | selectall | searchreplace' },
                    view: { title: 'View', items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen' },
                    insert: { title: 'Insert', items: 'image link media template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime' },
                    format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align | forecolor backcolor | removeformat' },
                    tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | code wordcount' },
                    table: { title: 'Table', items: 'inserttable | cell row column | tableprops deletetable' },
                    help: { title: 'Help', items: 'help' }
                },
                toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
                    'bullist numlist outdent indent | link image | print preview media fullpage | ' +
                    'forecolor backcolor emoticons | help',
                height: this.height,
                readonly: this.readonly,
                setup: function (editor) {
                    _this.editor = editor;
                    editor.on('keyup', function (event) {
                        _this.value = editor.getContent();
                        _this.change.emit(_this.value);
                        _this.editorchange.emit(event);
                    });
                    editor.on('focus', function (event) {
                        _this.focus.emit(event);
                    });
                    editor.on('blur', function (event) {
                        _this.blur.emit(event);
                    });
                },
                init_instance_callback: function (editor) {
                    editor && _this.value && _this.editor.setContent(_this.value);
                },
            });
        };
        MCECoreComponent.prototype.ngOnDestroy = function () {
            tinymce.remove(this.editor);
        };
        Object.defineProperty(MCECoreComponent.prototype, "value", {
            get: function () { return this._value; },
            set: function (value) {
                if (this._value !== value) {
                    this._value = value;
                    this.onChange(value);
                }
            },
            enumerable: false,
            configurable: true
        });
        MCECoreComponent.prototype.writeValue = function (value) {
            if (value) {
                this._value = value;
                this.onChange(this.value);
            }
        };
        MCECoreComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
        MCECoreComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        MCECoreComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: doCore.Environment, decorators: [{ type: core.Inject, args: [doCore.ENVIRONMENT,] }] }
        ]; };
        MCECoreComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-mce-core',
                        template: '<div id="{{id}}"></div>',
                        encapsulation: core.ViewEncapsulation.None,
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return MCECoreComponent; }),
                                multi: true,
                            }]
                    },] }
        ];
        MCECoreComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: doCore.Environment, decorators: [{ type: core.Inject, args: [doCore.ENVIRONMENT,] }] }
        ]; };
        MCECoreComponent.propDecorators = {
            plugins: [{ type: core.Input }],
            height: [{ type: core.Input }],
            id: [{ type: core.Input }],
            readonly: [{ type: core.Input }],
            _value: [{ type: core.Input, args: ['value',] }],
            change: [{ type: core.Output }],
            editorchange: [{ type: core.Output }],
            focus: [{ type: core.Output }],
            blur: [{ type: core.Output }]
        };
        return MCECoreComponent;
    }());

    var DoTextareaComponent = /** @class */ (function (_super) {
        __extends(DoTextareaComponent, _super);
        function DoTextareaComponent(ngControl, locale) {
            var _this = _super.call(this, ngControl, locale) || this;
            _this.locale = locale;
            _this.colLabel = 3;
            _this.colInput = 9;
            _this.minLength = 0;
            _this.maxLength = 250;
            _this.height = 120;
            return _this;
        }
        DoTextareaComponent.prototype.onInit = function () {
            this.paramError = {
                value: this.minLength,
            };
        };
        DoTextareaComponent.prototype.ngOnDestroy = function () { };
        DoTextareaComponent.ctorParameters = function () { return [
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
        ]; };
        DoTextareaComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-textarea',
                        template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <textarea \n      id=\"{{name}}\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [required]=\"required\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': hasSuccess\n      }\"\n      [ngStyle]=\"{ \n        'width':  '100%',\n        'height':  height + 'px'\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onTouched($event.target.value)\"\n      [(ngModel)]=\"value\"\n      nbInput fullWidth>\n    </textarea>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'skeleton': skeleton\n        }\"\n        [ngStyle]=\"{ \n          'width':  '100%',\n          'height':  height + 'px'\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [""]
                    },] }
        ];
        DoTextareaComponent.ctorParameters = function () { return [
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
        ]; };
        DoTextareaComponent.propDecorators = {
            placeholder: [{ type: core.Input }],
            colLabel: [{ type: core.Input }],
            colInput: [{ type: core.Input }],
            minLength: [{ type: core.Input }],
            maxLength: [{ type: core.Input }],
            height: [{ type: core.Input }]
        };
        return DoTextareaComponent;
    }(DoValueAccessor));

    var EDITOR_COMPONENTS = [
        MCECoreComponent,
        TinyMCEComponent,
        CaldeiraKnabbenEditorComponent,
        DoTextareaComponent,
    ];
    var DoEditorModule = /** @class */ (function () {
        function DoEditorModule() {
        }
        DoEditorModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            ng2Ckeditor.CKEditorModule,
                            core$1.TranslateModule,
                            theme.NbInputModule,
                            DoBaseModule,
                        ],
                        declarations: __spread(EDITOR_COMPONENTS),
                        exports: __spread(EDITOR_COMPONENTS),
                    },] }
        ];
        return DoEditorModule;
    }());

    var DoInputTextComponent = /** @class */ (function (_super) {
        __extends(DoInputTextComponent, _super);
        function DoInputTextComponent(ngControl, locale) {
            var _this = _super.call(this, ngControl, locale) || this;
            _this.locale = locale;
            _this.colLabel = 3;
            _this.colInput = 9;
            _this.minLength = 0;
            _this.maxLength = 100;
            _this.min = 0;
            _this.max = 999;
            _this.step = 1;
            _this.capslock = false;
            _this.type = 'text';
            return _this;
        }
        DoInputTextComponent.prototype.onKeyUp = function (event) {
            if (this.capslock) {
                this.value = this.value.toUpperCase();
            }
        };
        DoInputTextComponent.prototype.onKeyDown = function (event) {
            if (this.type === 'number') {
                if (event.key.toUpperCase() === 'E')
                    return false;
                if (this.step >= 1 && event.key === '.')
                    return false;
                if (this.min >= 0 && event.key === '-')
                    return false;
                if (this.value) {
                    if (this.value.length >= this.maxLength) {
                        if (['DELETE', 'BACKSPACE', 'TAB', 'ESCAPE', 'ENTER'].indexOf(event.key.toUpperCase()) !== -1 ||
                            (event.key.toUpperCase() === 'A' && event.ctrlKey === true) || // Allow: Ctrl+A
                            (event.key.toUpperCase() === 'C' && event.ctrlKey === true) || // Allow: Ctrl+C
                            (event.key.toUpperCase() === 'X' && event.ctrlKey === true) || // Allow: Ctrl+X
                            (event.key.toUpperCase() === 'A' && event.metaKey === true) || // Cmd+A (Mac)
                            (event.key.toUpperCase() === 'C' && event.metaKey === true) || // Cmd+C (Mac)
                            (event.key.toUpperCase() === 'X' && event.metaKey === true) || // Cmd+X (Mac)
                            (event.key.toUpperCase() === 'END') ||
                            (event.key.toUpperCase() === 'HOME') ||
                            (event.key.toUpperCase() === 'ARROWLEFT') ||
                            (event.key.toUpperCase() === 'ARROWRIGHT')) {
                            return true;
                        }
                        return false;
                    }
                }
                return true;
            }
            return true;
        };
        DoInputTextComponent.ctorParameters = function () { return [
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
        ]; };
        DoInputTextComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-input-text',
                        template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"{{type}}\"\n      id=\"{{name}}\"\n      [step]=\"step\"\n      [pattern]=\"pattern\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required),\n        'input-capslock': capslock\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onTouched($event.target.value)\"\n      (keydown)=\"onKeyDown($event)\"\n      (keypress)=\"onKeyUp($event)\"\n      [(ngModel)]=\"value\"\n      #input nbInput fullWidth>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".input-capslock{text-transform:uppercase}"]
                    },] }
        ];
        DoInputTextComponent.ctorParameters = function () { return [
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
        ]; };
        DoInputTextComponent.propDecorators = {
            placeholder: [{ type: core.Input }],
            colLabel: [{ type: core.Input }],
            colInput: [{ type: core.Input }],
            minLength: [{ type: core.Input }],
            maxLength: [{ type: core.Input }],
            min: [{ type: core.Input }],
            max: [{ type: core.Input }],
            step: [{ type: core.Input }],
            capslock: [{ type: core.Input }],
            type: [{ type: core.Input }]
        };
        return DoInputTextComponent;
    }(DoValueAccessor));

    var DoInputCurrencyComponent = /** @class */ (function (_super) {
        __extends(DoInputCurrencyComponent, _super);
        function DoInputCurrencyComponent(ngControl, locale) {
            var _this = _super.call(this, ngControl, locale) || this;
            _this.locale = locale;
            _this.colLabel = 3;
            _this.colInput = 9;
            _this.minLength = 0;
            _this.maxLength = 100;
            _this.prefix = 'Rp';
            _this.decimalSeparator = '.';
            _this.thousandsSeparator = ',';
            _this.suffix = ',-';
            _this.padding = 5;
            return _this;
        }
        DoInputCurrencyComponent.prototype.writeValue = function (value) {
            this._value = value ? this.transform(value) : value;
            this.onChange(this.value);
            var control = this.ngControl.control;
            if (control) {
                control.updateValueAndValidity();
                control.markAsTouched();
                control.markAsDirty();
            }
        };
        DoInputCurrencyComponent.prototype.transform = function (value) {
            var _a = this.toNumber(value), val = _a.val, frac = _a.frac;
            var v = val.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
            return this.prefix.concat(' ').concat(v).concat(frac).concat(this.suffix);
        };
        DoInputCurrencyComponent.prototype.toNumber = function (value) {
            var _a = __read((value || '').split(this.decimalSeparator), 2), _b = _a[0], val = _b === void 0 ? '' : _b, _c = _a[1], frac = _c === void 0 ? '' : _c;
            var fraction = '';
            if (frac) {
                if (parseInt(frac, 10) > 0) {
                    fraction = this.decimalSeparator + this.pad(frac, this.padding).substring(0, this.padding);
                }
            }
            return { val: val, frac: fraction };
        };
        DoInputCurrencyComponent.prototype.pad = function (val, size) {
            while (val.length < size)
                val = val + '0';
            return val;
        };
        DoInputCurrencyComponent.ctorParameters = function () { return [
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
        ]; };
        DoInputCurrencyComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-input-currency',
                        template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"text\"\n      id=\"{{name}}\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled || skeleton\"\n      [ngClass]=\"{\n        'skeleton': skeleton,\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.toNumber)\"\n      (change)=\"onChange($event.target.toNumber)\"\n      (blur)=\"onTouched($event.target.toNumber)\"\n      [(ngModel)]=\"value\"\n      doCurrency\n      [prefix]=\"prefix\"\n      [decimal]=\"decimalSeparator\"\n      [thousand]=\"thousandsSeparator\"\n      [suffix]=\"suffix\"\n      [padding]=\"padding\"\n      #input nbInput fullWidth>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [""]
                    },] }
        ];
        DoInputCurrencyComponent.ctorParameters = function () { return [
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
        ]; };
        DoInputCurrencyComponent.propDecorators = {
            placeholder: [{ type: core.Input }],
            colLabel: [{ type: core.Input }],
            colInput: [{ type: core.Input }],
            minLength: [{ type: core.Input }],
            maxLength: [{ type: core.Input }],
            prefix: [{ type: core.Input, args: ['prefix',] }],
            decimalSeparator: [{ type: core.Input, args: ['decimal',] }],
            thousandsSeparator: [{ type: core.Input, args: ['thousand',] }],
            suffix: [{ type: core.Input, args: ['suffix',] }],
            padding: [{ type: core.Input, args: ['padding',] }]
        };
        return DoInputCurrencyComponent;
    }(DoValueAccessor));

    var DoInputIconComponent = /** @class */ (function (_super) {
        __extends(DoInputIconComponent, _super);
        function DoInputIconComponent(ngControl, locale) {
            var _this = _super.call(this, ngControl, locale) || this;
            _this.locale = locale;
            _this.colLabel = 3;
            _this.colInput = 9;
            _this.minLength = 0;
            _this.maxLength = 100;
            _this.type = 'text';
            _this.iconcursor = false;
            _this.eva = false;
            _this.icon = 'search-outline';
            _this.clickIcon = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DoInputIconComponent.prototype.onClickIcon = function () {
            if (this.iconcursor)
                this.clickIcon.emit(this.value);
        };
        DoInputIconComponent.prototype.onFocus = function (value) {
            this.focus.emit(value);
            this.onTouched(value);
        };
        DoInputIconComponent.ctorParameters = function () { return [
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
        ]; };
        DoInputIconComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-input-icon',
                        template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}} input-group\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"{{type}}\"\n      id=\"{{name}}\"\n      [pattern]=\"pattern\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onFocus($event.target.value)\"\n      [(ngModel)]=\"value\"\n      #input nbInput fullWidth>\n      <div\n        class=\"xinput-icon\"\n        [ngStyle]=\"{\n          'cursor': iconcursor ? 'pointer' : 'unset'\n        }\">\n        <span class=\"{{icon}}\" *ngIf=\"!eva\"></span>\n        <nb-icon class=\"xinput-icon-hover\" icon=\"{{icon}}\" (click)=\"onClickIcon()\" *ngIf=\"eva\"></nb-icon>\n      </div>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: ["nb-icon{color:#8f9bb3}.xinput-icon{position:absolute;right:0;margin:.6rem 1.5rem 0 0}.xinput-icon-hover:hover{color:#598bff}"]
                    },] }
        ];
        DoInputIconComponent.ctorParameters = function () { return [
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
        ]; };
        DoInputIconComponent.propDecorators = {
            placeholder: [{ type: core.Input }],
            colLabel: [{ type: core.Input }],
            colInput: [{ type: core.Input }],
            minLength: [{ type: core.Input }],
            maxLength: [{ type: core.Input }],
            type: [{ type: core.Input }],
            iconcursor: [{ type: core.Input }],
            eva: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            clickIcon: [{ type: core.Output }],
            focus: [{ type: core.Output }]
        };
        return DoInputIconComponent;
    }(DoValueAccessor));

    var DoInputBaseIconComponent = /** @class */ (function (_super) {
        __extends(DoInputBaseIconComponent, _super);
        function DoInputBaseIconComponent(ngControl, locale) {
            var _this = _super.call(this, ngControl, locale) || this;
            _this.locale = locale;
            _this.minLength = 0;
            _this.maxLength = 100;
            _this.iconcursor = false;
            _this.icon = 'search-outline';
            _this.type = 'text';
            _this.clickIcon = new core.EventEmitter();
            _this.focus = new core.EventEmitter();
            return _this;
        }
        DoInputBaseIconComponent.prototype.onClickIcon = function () {
            if (this.iconcursor)
                this.clickIcon.emit(this.value);
        };
        DoInputBaseIconComponent.prototype.onFocus = function (value) {
            this.focus.emit(value);
            this.onTouched(value);
        };
        DoInputBaseIconComponent.ctorParameters = function () { return [
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
        ]; };
        DoInputBaseIconComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-input-base-icon',
                        template: "<div class=\"input-group\">\n  <input\n    type=\"{{type}}\"\n    id=\"{{name}}\"\n    [pattern]=\"pattern\"\n    [minLength]=\"minLength\"\n    [maxLength]=\"maxLength\"\n    [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [ngClass]=\"{\n      'status-danger': hasErrors,\n      'status-success': hasSuccess\n    }\"\n    (input)=\"onChange($event.target.value)\"\n    (change)=\"onChange($event.target.value)\"\n    (blur)=\"onTouched($event.target.value)\"\n    (focus)=\"onFocus($event.target.value)\"\n    [(ngModel)]=\"value\"\n    #input nbInput fullWidth>\n  <div\n    class=\"input-icon\"\n    [ngStyle]=\"{\n      'cursor': iconcursor ? 'pointer' : 'unset'\n    }\">\n    <nb-icon class=\"input-icon-hover\" icon=\"{{icon}}\" (click)=\"onClickIcon()\"></nb-icon>\n  </div>\n</div>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: ["nb-icon{color:#8f9bb3}.input-icon{position:absolute;right:0;padding:10px}.input-icon-hover:hover{color:#598bff}"]
                    },] }
        ];
        DoInputBaseIconComponent.ctorParameters = function () { return [
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
        ]; };
        DoInputBaseIconComponent.propDecorators = {
            placeholder: [{ type: core.Input }],
            minLength: [{ type: core.Input }],
            maxLength: [{ type: core.Input }],
            iconcursor: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            type: [{ type: core.Input }],
            clickIcon: [{ type: core.Output }],
            focus: [{ type: core.Output }]
        };
        return DoInputBaseIconComponent;
    }(DoValueAccessor));

    var INPUT_COMPONENTS = [
        DoInputTextComponent,
        DoInputBaseIconComponent,
        DoInputIconComponent,
        DoInputCurrencyComponent,
    ];
    var DoInputModule = /** @class */ (function () {
        function DoInputModule() {
        }
        DoInputModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            theme.NbInputModule,
                            theme.NbIconModule,
                            core$1.TranslateModule,
                            DoBaseModule,
                        ],
                        declarations: __spread(INPUT_COMPONENTS),
                        exports: __spread(INPUT_COMPONENTS, [
                            theme.NbInputModule,
                        ]),
                    },] }
        ];
        return DoInputModule;
    }());

    var DoMapsLeafletComponent = /** @class */ (function () {
        function DoMapsLeafletComponent() {
            this.defaultLatLng = leaflet.latLng({ lat: -2.3641701, lng: 117.7690927 });
            this.zoom = 4.5;
            this.height = 25;
            this.options = {
                layers: [
                    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Civilians Emergency Report' }),
                ],
                zoom: this.zoom,
                center: this.defaultLatLng,
            };
            this.layers = [];
            this.onMarkerClick = new core.EventEmitter();
        }
        Object.defineProperty(DoMapsLeafletComponent.prototype, "markersFn", {
            set: function (markers) {
                var _this = this;
                if (markers) {
                    this.layers = [];
                    markers.forEach(function (marker$1) {
                        _this.layers.push(leaflet.marker(marker$1.mark, {
                            icon: leaflet.icon({
                                iconUrl: document.getElementsByTagName('base')[0].href + "assets/map/marker-icon.png",
                                shadowUrl: document.getElementsByTagName('base')[0].href + "assets/map/marker-shadow.png",
                                iconSize: [27.5, 40],
                                iconAnchor: [20, 40],
                                popupAnchor: [0, -40],
                                className: marker$1.className,
                            }),
                            title: marker$1.title,
                            alt: marker$1.alt,
                        }).on('click', _this.markerClick.bind(_this)));
                    });
                }
            },
            enumerable: false,
            configurable: true
        });
        DoMapsLeafletComponent.prototype.ngOnInit = function () {
        };
        DoMapsLeafletComponent.prototype.markerClick = function (event) {
            var latlng = event.latlng;
            var title = event.target.options.title;
            var alt = event.target.options.alt;
            this.onMarkerClick.emit({
                mark: latlng,
                title: title,
                alt: alt,
            });
            operators.delay(200);
            this.map.setView([latlng.lat, latlng.lng], 15);
        };
        DoMapsLeafletComponent.prototype.onMapReady = function (map) {
            this.map = map;
        };
        DoMapsLeafletComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-maps-leaflet',
                        template: "<div\n  id=\"leafletmap\"\n  [ngStyle]=\"{\n    'height': height + 'rem'\n  }\"\n  leaflet\n  [leafletOptions]=\"options\"\n  [leafletLayers]=\"layers\"\n  (leafletMapReady)=\"onMapReady($event)\">\n</div>",
                        styles: [".nb-theme-default :host ::ng-deep .leaflet-bottom,.nb-theme-default :host ::ng-deep .leaflet-top{z-index:997}.nb-theme-default :host ::ng-deep .leaflet-container{width:100%;height:36.5625rem}.nb-theme-default :host ::ng-deep .pulse{-webkit-animation:1s ease-out infinite pulsate;animation:1s ease-out infinite pulsate;opacity:0}@-webkit-keyframes pulsate{0%,100%{opacity:0}50%{opacity:1}}.nb-theme-dark :host ::ng-deep .leaflet-bottom,.nb-theme-dark :host ::ng-deep .leaflet-top{z-index:997}.nb-theme-dark :host ::ng-deep .leaflet-container{width:100%;height:36.5625rem}.nb-theme-dark :host ::ng-deep .pulse{-webkit-animation:1s ease-out infinite pulsate;animation:1s ease-out infinite pulsate;opacity:0}.nb-theme-cosmic :host ::ng-deep .leaflet-bottom,.nb-theme-cosmic :host ::ng-deep .leaflet-top{z-index:997}.nb-theme-cosmic :host ::ng-deep .leaflet-container{width:100%;height:36.5625rem}.nb-theme-cosmic :host ::ng-deep .pulse{-webkit-animation:1s ease-out infinite pulsate;animation:1s ease-out infinite pulsate;opacity:0}.nb-theme-corporate :host ::ng-deep .leaflet-bottom,.nb-theme-corporate :host ::ng-deep .leaflet-top{z-index:997}.nb-theme-corporate :host ::ng-deep .leaflet-container{width:100%;height:36.5625rem}.nb-theme-corporate :host ::ng-deep .pulse{-webkit-animation:1s ease-out infinite pulsate;animation:1s ease-out infinite pulsate;opacity:0}@keyframes pulsate{0%,100%{opacity:0}50%{opacity:1}}"]
                    },] }
        ];
        DoMapsLeafletComponent.propDecorators = {
            height: [{ type: core.Input }],
            options: [{ type: core.Input }],
            layers: [{ type: core.Input }],
            markersFn: [{ type: core.Input }],
            onMarkerClick: [{ type: core.Output }]
        };
        return DoMapsLeafletComponent;
    }());

    var DoMapsAgmComponent = /** @class */ (function () {
        function DoMapsAgmComponent() {
            this.lat = -2.3641701;
            this.lng = 117.7690927;
        }
        DoMapsAgmComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-maps-agm',
                        template: "<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>",
                        styles: [".nb-theme-default :host ::ng-deep agm-map{width:100%;height:36.5625rem}.nb-theme-dark :host ::ng-deep agm-map{width:100%;height:36.5625rem}.nb-theme-cosmic :host ::ng-deep agm-map{width:100%;height:36.5625rem}.nb-theme-corporate :host ::ng-deep agm-map{width:100%;height:36.5625rem}"]
                    },] }
        ];
        return DoMapsAgmComponent;
    }());

    var MAPS_COMPONENTS = [
        DoMapsLeafletComponent,
        DoMapsAgmComponent,
    ];
    var DoMapsModule = /** @class */ (function () {
        function DoMapsModule() {
        }
        DoMapsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            core$2.AgmCoreModule.forRoot({
                                apiKey: 'AIzaSyB3ctAGo_z3FNOVWquijMGBgesM1XlRa-Y',
                                libraries: ['places'],
                            }),
                            ngxLeaflet.LeafletModule.forRoot(),
                            theme.NbCardModule,
                        ],
                        declarations: __spread(MAPS_COMPONENTS),
                        exports: __spread(MAPS_COMPONENTS),
                    },] }
        ];
        return DoMapsModule;
    }());

    var PROGRESS_COMPONENTS = [];
    var DoProgressModule = /** @class */ (function () {
        function DoProgressModule() {
        }
        DoProgressModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule,
                        ],
                        declarations: __spread(PROGRESS_COMPONENTS),
                        exports: __spread(PROGRESS_COMPONENTS),
                    },] }
        ];
        return DoProgressModule;
    }());

    var DoRadioComponent = /** @class */ (function (_super) {
        __extends(DoRadioComponent, _super);
        function DoRadioComponent(ngControl, locale) {
            var _this = _super.call(this, ngControl, locale) || this;
            _this.locale = locale;
            _this.colLabel = 3;
            _this.colInput = 9;
            return _this;
        }
        DoRadioComponent.prototype.onInit = function () {
            if (!this.value && this.data)
                this.value = this.data[0].value;
        };
        DoRadioComponent.ctorParameters = function () { return [
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
        ]; };
        DoRadioComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-radio',
                        template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <nb-radio-group\n      [(value)]=\"value\"\n      [name]=\"name\"\n      [disabled]=\"disabled\"\n      #radiogroup>\n      <nb-radio *ngFor=\"let item of data\"\n        [value]=\"item.value\">\n        {{item.name | translate}}\n      </nb-radio>\n    </nb-radio-group>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [""]
                    },] }
        ];
        DoRadioComponent.ctorParameters = function () { return [
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
        ]; };
        DoRadioComponent.propDecorators = {
            placeholder: [{ type: core.Input }],
            colLabel: [{ type: core.Input }],
            colInput: [{ type: core.Input }],
            data: [{ type: core.Input }]
        };
        return DoRadioComponent;
    }(DoValueAccessor));

    var RADIO_COMPONENTS = [
        DoRadioComponent,
    ];
    var DoRadioModule = /** @class */ (function () {
        function DoRadioModule() {
        }
        DoRadioModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            core$1.TranslateModule,
                            theme.NbRadioModule,
                            DoBaseModule,
                        ],
                        declarations: __spread(RADIO_COMPONENTS),
                        exports: __spread(RADIO_COMPONENTS),
                    },] }
        ];
        return DoRadioModule;
    }());

    var ContentSelectDirective = /** @class */ (function () {
        function ContentSelectDirective() {
        }
        ContentSelectDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[doContentSelect]',
                    },] }
        ];
        return ContentSelectDirective;
    }());

    var DoSelectComponent = /** @class */ (function (_super) {
        __extends(DoSelectComponent, _super);
        function DoSelectComponent(ngControl, locale, injector) {
            var _this = _super.call(this, ngControl, locale) || this;
            _this.locale = locale;
            _this.injector = injector;
            _this.colLabel = 3;
            _this.colInput = 9;
            _this.items = [];
            _this.multiple = false;
            _this.loading = false;
            _this.addTag = false;
            _this.closeOnSelect = true;
            _this.clearable = true;
            _this.searchable = true;
            _this.hideSelected = true;
            _this.minTermLength = 2;
            _this.maxTermLength = 50;
            _this.limit = 50;
            _this.offsetNextLoad = _this.limit - 35;
            _this.onSelect = new core.EventEmitter();
            _this.onClear = new core.EventEmitter();
            _this.notFoundText = 'select.notfound';
            _this.typeToSearchText = 'select.typesearch';
            _this.virtualScroll = true;
            _this.paramSearch = { value: _this.minTermLength };
            _this.typeahead$ = new rxjs.Subject();
            _this.destroy$ = new rxjs.Subject();
            _this.total = 0;
            _this.totalRecord = 0;
            _this.http = injector.get(doCore.HTTP_SERVICE);
            _this.cdref = injector.get(core.ChangeDetectorRef);
            return _this;
        }
        Object.defineProperty(DoSelectComponent.prototype, "value", {
            get: function () { return this._value; },
            set: function (value) {
                if (this._value !== value) {
                    this._value = value;
                    this.onChange(value);
                    this.onSelect.emit(value);
                    var control = this.ngControl.control;
                    if (control) {
                        control.updateValueAndValidity();
                        control.markAsTouched();
                        control.markAsDirty();
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        DoSelectComponent.prototype.onInit = function () {
            var _this = this;
            this.paramSearch = { value: this.minTermLength };
            if (this.api) {
                this.fetchSearch().subscribe(function (items) {
                    _this.fetchMore(items);
                });
            }
        };
        DoSelectComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
            this.typeahead$.next(null);
            this.typeahead$.complete();
            this.typeahead$.unsubscribe();
        };
        DoSelectComponent.prototype.onOpen = function () {
            var _this = this;
            if (this.api) {
                if (this.loading)
                    return;
                this.total = 0;
                this.items = [];
                if (!this.searchable) {
                    this.fetchNone().subscribe(function (items) {
                        _this.fetchMore(items);
                    });
                }
            }
        };
        DoSelectComponent.prototype.onClose = function () {
            if (this.api) {
                this.reset();
            }
        };
        DoSelectComponent.prototype.onScroll = function (_a, search) {
            var _this = this;
            var end = _a.end;
            if (!this.loading) {
                if ((Number(end) + this.offsetNextLoad) >= this.total && this.total > 0 && this.total < this.totalRecord) {
                    if (this.searchable && search) {
                        this.typeahead$.next(search);
                    }
                    else {
                        this.fetchNone().subscribe(function (items) {
                            _this.fetchMore(items);
                        });
                    }
                }
            }
        };
        DoSelectComponent.prototype.onScrollToEnd = function (search) {
            var _this = this;
            if (!this.loading) {
                if (this.total < this.totalRecord) {
                    if (this.searchable && search) {
                        this.typeahead$.next(search);
                    }
                    else {
                        this.fetchNone().subscribe(function (items) {
                            _this.fetchMore(items);
                        });
                    }
                }
            }
        };
        DoSelectComponent.prototype.doClear = function () {
            this.onClear.emit(true);
        };
        DoSelectComponent.prototype.reset = function () {
            this.total = 0;
            this.items = [];
            this.loading = false;
        };
        DoSelectComponent.prototype.fetchMore = function (items) {
            this.items = __spread(this.items, items);
            this.cdref.detectChanges();
            this.loading = false;
        };
        DoSelectComponent.prototype.fetchSearch = function () {
            var _this = this;
            return this.typeahead$.pipe(operators.switchMap(function (term) {
                if (term) {
                    if (term.length > _this.maxTermLength) {
                        return rxjs.of([]);
                    }
                    return _this.getRequest(_this.total, term);
                }
                else
                    return rxjs.of([]);
            })).pipe(operators.takeUntil(this.destroy$));
        };
        DoSelectComponent.prototype.fetchNone = function () {
            return this.getRequest(this.total).pipe(operators.takeUntil(this.destroy$));
        };
        DoSelectComponent.prototype.getRequest = function (offset, search) {
            var _this = this;
            var body;
            if (this.api.method === doCore.HttpMethod.POST) {
                body = {
                    offset: offset ? offset : 0,
                    limit: this.limit,
                    keyword: {
                        _label: search,
                    },
                };
                if (this.queryParam) {
                    this.queryParam.forEach(function (result) {
                        body['keyword'][result.key] = result.value;
                    });
                }
            }
            this.loading = true;
            return this.http.HTTP_AUTH(this.api, body)
                .pipe(operators.map(function (response) {
                _this.totalRecord = Number(response.totalRecord);
                _this.total = _this.total + Number(response.totalFiltered);
                return response['data'];
            }), operators.catchError(function () { return rxjs.of([]); }));
        };
        DoSelectComponent.prototype.onKeyDown = function (event, term) {
            if (event.key) {
                if (['DELETE', 'BACKSPACE', 'TAB', 'ESCAPE', 'ENTER', 'DECIMAL POINT', 'PERIOD', 'DASH'].indexOf(event.key.toUpperCase()) !== -1 ||
                    (event.key.toUpperCase() === 'A' && event.ctrlKey === true) || // Allow: Ctrl+A
                    (event.key.toUpperCase() === 'C' && event.ctrlKey === true) || // Allow: Ctrl+C
                    (event.key.toUpperCase() === 'V' && event.ctrlKey === true) || // Allow: Ctrl+V
                    (event.key.toUpperCase() === 'X' && event.ctrlKey === true) || // Allow: Ctrl+X
                    (event.key.toUpperCase() === 'A' && event.metaKey === true) || // Cmd+A (Mac)
                    (event.key.toUpperCase() === 'C' && event.metaKey === true) || // Cmd+C (Mac)
                    (event.key.toUpperCase() === 'V' && event.metaKey === true) || // Cmd+V (Mac)
                    (event.key.toUpperCase() === 'X' && event.metaKey === true) || // Cmd+X (Mac)
                    (event.key.toUpperCase() === 'END') ||
                    (event.key.toUpperCase() === 'HOME') ||
                    (event.key.toUpperCase() === 'ARROWLEFT') ||
                    (event.key.toUpperCase() === 'ARROWRIGHT') ||
                    (event.key.toUpperCase() === 'ARROWDOWN') ||
                    (event.key.toUpperCase() === 'ARROWUP') || (!event.key.match(/[!@#$%^&*()?":{}|<>\[\];\\=~`]/g))) {
                    if (!(event.ctrlKey === true ||
                        event.metaKey === true ||
                        event.altKey === true ||
                        (event.key.toUpperCase() === 'END') ||
                        (event.key.toUpperCase() === 'HOME') ||
                        (event.key.toUpperCase() === 'ARROWLEFT') ||
                        (event.key.toUpperCase() === 'ARROWRIGHT') ||
                        (event.key.toUpperCase() === 'ARROWDOWN') ||
                        (event.key.toUpperCase() === 'ARROWUP'))) {
                        this.reset();
                    }
                    if (term) {
                        if (term.length > this.maxTermLength) {
                            return false;
                        }
                    }
                    return true;
                }
            }
            return false;
        };
        DoSelectComponent.ctorParameters = function () { return [
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] },
            { type: core.Injector }
        ]; };
        DoSelectComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-select',
                        template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <ng-select\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [items]=\"items\"\n      [typeahead]=\"typeahead$\"\n      [multiple]=\"multiple\"\n      [loading]=\"loading\"\n      [notFoundText]=\"notFoundText | translate\"\n      [addTag]=\"addTag\"\n      [closeOnSelect]=\"closeOnSelect\"\n      [clearable]=\"required? false: clearable\"\n      [searchable]=\"searchable\"\n      [hideSelected]=\"hideSelected\"\n      [minTermLength]=\"minTermLength\"\n      [virtualScroll]=\"virtualScroll\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      (keydown)=\"onKeyDown($event, select.searchTerm)\"\n      (scroll)=\"onScroll($event, select.searchTerm)\"\n      (scrollToEnd)=\"onScrollToEnd(select.searchTerm)\"\n      (open)=\"onOpen()\"\n      (close)=\"onClose()\"\n      (clear)=\"doClear()\"\n      (change)=\"onChange($event)\"\n      (focus)=\"onTouched($event)\"\n      (blur)=\"onTouched($event)\"\n      [(ngModel)]=\"value\"\n      [ngClass]=\"{'required': required}\"\n      appendTo=\"body\"\n      typeToSearchText=\"{{typeToSearchText | translate:paramSearch}}\"\n      #select>\n        <ng-template *ngIf=\"contentTemplate\" ng-label-tmp let-item=\"item\">\n          <ng-container *ngTemplateOutlet=\"contentTemplate; context: {$implicit: item}\"></ng-container>\n        </ng-template>\n        <ng-template *ngIf=\"contentTemplate\" ng-option-tmp let-item=\"item\">\n          <ng-container *ngTemplateOutlet=\"contentTemplate; context: {$implicit: item}\"></ng-container>\n        </ng-template>\n    </ng-select>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: ["ng-select.ng-invalid.ng-touched .ng-select-container{border-color:#ff3d71}ng-select.ng-invalid.ng-touched:focus{border-color:#ff3d71;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #fde6e8}ng-select.ng-valid.ng-touched.required .ng-select-container{border-color:#00d68f}ng-select.ng-valid.ng-touched.required:focus{border-color:#00d68f;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #e4e9f2}body{font-size:1rem;font-weight:400;line-height:1.5;position:relative;font-family:Open Sans,sans-serif}.ng-select .ng-select-container{border-radius:.25rem;line-height:1.5rem;align-items:center;background-color:#f7f9fc;color:#1a2138;font-family:Open Sans,sans-serif;border:1px solid #edf1f7}"]
                    },] }
        ];
        DoSelectComponent.ctorParameters = function () { return [
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] },
            { type: core.Injector }
        ]; };
        DoSelectComponent.propDecorators = {
            placeholder: [{ type: core.Input }],
            colLabel: [{ type: core.Input }],
            colInput: [{ type: core.Input }],
            items: [{ type: core.Input }],
            multiple: [{ type: core.Input }],
            loading: [{ type: core.Input }],
            addTag: [{ type: core.Input }],
            closeOnSelect: [{ type: core.Input }],
            clearable: [{ type: core.Input }],
            searchable: [{ type: core.Input }],
            hideSelected: [{ type: core.Input }],
            minTermLength: [{ type: core.Input }],
            maxTermLength: [{ type: core.Input }],
            api: [{ type: core.Input }],
            limit: [{ type: core.Input }],
            offsetNextLoad: [{ type: core.Input }],
            queryParam: [{ type: core.Input }],
            onSelect: [{ type: core.Output }],
            onClear: [{ type: core.Output }],
            select: [{ type: core.ViewChild, args: ['select', { static: false },] }],
            contentTemplate: [{ type: core.ContentChild, args: [ContentSelectDirective, { static: false, read: core.TemplateRef },] }]
        };
        return DoSelectComponent;
    }(DoValueAccessor));

    var SELECT_COMPONENTS = [
        DoSelectComponent,
    ];
    var SELECT_DIRECTIVES = [
        ContentSelectDirective,
    ];
    var DoSelectModule = /** @class */ (function () {
        function DoSelectModule() {
        }
        DoSelectModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            ngSelect.NgSelectModule,
                            core$1.TranslateModule,
                            DoBaseModule,
                        ],
                        declarations: __spread(SELECT_COMPONENTS, SELECT_DIRECTIVES),
                        exports: __spread(SELECT_COMPONENTS, SELECT_DIRECTIVES),
                    },] }
        ];
        return DoSelectModule;
    }());

    var SPINNER_COMPONENTS = [];
    var DoSpinnerModule = /** @class */ (function () {
        function DoSpinnerModule() {
        }
        DoSpinnerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule,
                        ],
                        declarations: __spread(SPINNER_COMPONENTS),
                        exports: __spread(SPINNER_COMPONENTS),
                    },] }
        ];
        return DoSpinnerModule;
    }());

    var DoDatatableComponent = /** @class */ (function () {
        function DoDatatableComponent(locale, layout, injector) {
            this.locale = locale;
            this.layout = layout;
            this.injector = injector;
            this.rows = [];
            this.columns = [];
            this.filters = [];
            this.selected = [];
            this.limit = 10;
            this.count = 0;
            this.offset = 0;
            this.externalPaging = false;
            this.externalSorting = false;
            this.loadingIndicator = false;
            this.scrollbarH = true;
            this.scrollbarV = false;
            this.reorderable = true;
            this.sortType = ngxDatatable.SortType.single;
            this.selectionType = ngxDatatable.SelectionType.checkbox;
            this.columnMode = ngxDatatable.ColumnMode.force;
            this.headerHeight = 40;
            this.footerHeight = 'auto';
            this.rowHeight = 'auto';
            this.header = true;
            this.column = true;
            this.footer = true;
            this.add = true;
            this.edit = true;
            this.delete = true;
            this.filter = true;
            this.startWithOpenData = true;
            this.filterEvent = false;
            this.onAdd = new core.EventEmitter();
            this.onEdit = new core.EventEmitter();
            this.onDelete = new core.EventEmitter();
            this.onSearch = new core.EventEmitter();
            this.onFilter = new core.EventEmitter();
            this.onButtonCell = new core.EventEmitter();
            this.isDelete = false;
            this.destroy$ = new rxjs.Subject();
            this.pageOffset = 0;
            this.http = injector.get(doCore.HTTP_SERVICE);
            this.cdref = injector.get(core.ChangeDetectorRef);
        }
        Object.defineProperty(DoDatatableComponent.prototype, "filterFn", {
            set: function (keyword) {
                this.keywordParam = keyword;
                this._keyword = keyword;
                this.count = 0;
                this.offset = 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DoDatatableComponent.prototype, "filterDoFetchFn", {
            set: function (keyword) {
                if (keyword) {
                    this.keywordParam = keyword;
                    this._keyword = keyword;
                }
                this.count = 0;
                this.offset = 0;
                this.fetch();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DoDatatableComponent.prototype, "reloadFn", {
            set: function (reload) {
                if (reload) {
                    this.count = 0;
                    this.offset = 0;
                    this.fetch();
                }
            },
            enumerable: false,
            configurable: true
        });
        DoDatatableComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.startWithOpenData) {
                this.fetch();
            }
            this.layout.onChangeLayoutSize().pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.datatable.recalculate();
                _this.cdref.detectChanges();
            });
        };
        DoDatatableComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        DoDatatableComponent.prototype.doSearch = function (search) {
            this.onSearch.emit(search);
            if (this.keywordParam) {
                this._keyword = this.keywordParam;
                this._keyword['_all'] = search;
            }
            else {
                this._keyword = {
                    '_all': search,
                };
            }
            this.count = 0;
            this.offset = 0;
            this.fetch();
        };
        DoDatatableComponent.prototype.doFilter = function (search) {
            var _this = this;
            if (this.filterEvent) {
                this.onFilter.emit(search);
            }
            else {
                if (this.keywordParam) {
                    this._keyword = this.keywordParam;
                }
                else {
                    this._keyword = {};
                }
                this.filters.forEach(function (filter) {
                    switch (filter.type) {
                        case 'input':
                        case 'datepicker':
                        case 'radio':
                            _this._keyword[filter.controlName] = search[filter.controlName];
                            break;
                        case 'select':
                            _this._keyword[filter.controlName] = search[filter.controlName].label;
                            break;
                        case 'checkbox':
                            _this._keyword[filter.controlName] = search[filter.controlName].name;
                            break;
                        default:
                            break;
                    }
                });
                this.count = 0;
                this.offset = 0;
                this.fetch();
            }
        };
        DoDatatableComponent.prototype.doAdd = function (add) {
            this.onAdd.emit(add);
        };
        DoDatatableComponent.prototype.doEdit = function (row) {
            this.onEdit.emit(row);
        };
        DoDatatableComponent.prototype.doDelete = function () {
            this.onDelete.emit(this.selected);
        };
        DoDatatableComponent.prototype.onKeyDown = function (event) {
            if (event.key.toUpperCase() === 'ENTER') {
                this.doSearch(this._search);
            }
        };
        DoDatatableComponent.prototype.fetch = function () {
            var _this = this;
            if (this.api) {
                this.externalPaging = true;
                this.externalSorting = true;
                this.getRequest().subscribe(function (rows) {
                    _this.rows = rows;
                    _this.cdref.detectChanges();
                });
            }
        };
        DoDatatableComponent.prototype.setPage = function (page) {
            this.pageOffset = page.offset * this.limit;
            this.fetch();
        };
        DoDatatableComponent.prototype.onSort = function (order) {
            var _this = this;
            if (order) {
                if (Array.isArray(order.sorts)) {
                    order.sorts.forEach(function (sort) {
                        if (sort['dir'] === 'asc') {
                            _this.sort = { asc: [sort['prop']] };
                        }
                        else {
                            _this.sort = { desc: [sort['prop']] };
                        }
                    });
                }
            }
            this.fetch();
        };
        DoDatatableComponent.prototype.onSelect = function (_a) {
            var selected = _a.selected;
            if (Array.isArray(selected)) {
                if (selected.length > 0) {
                    if (this.delete)
                        this.isDelete = true;
                }
                else {
                    this.isDelete = false;
                }
                this.selected = selected;
            }
            else {
                this.isDelete = false;
            }
        };
        DoDatatableComponent.prototype.onClickButton = function (event) {
            this.onButtonCell.emit(event);
        };
        DoDatatableComponent.prototype.getRequest = function () {
            var _this = this;
            var body = {
                offset: this.pageOffset,
                limit: this.limit,
                keyword: this._keyword,
                order: this.sort,
            };
            this.loadingIndicator = true;
            return this.http.HTTP_AUTH(this.api, body)
                .pipe(operators.map(function (response) {
                _this.count = Number(response.totalRecord);
                _this.loadingIndicator = false;
                return response['data'];
            }), operators.catchError(function () {
                _this.loadingIndicator = false;
                _this.count = 0;
                return rxjs.of([]);
            }));
        };
        DoDatatableComponent.ctorParameters = function () { return [
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] },
            { type: doCore.LayoutService },
            { type: core.Injector }
        ]; };
        DoDatatableComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-datatable',
                        template: "<do-datatable-header\n    [header]=\"header\"\n    [add]=\"add\"\n    [delete]=\"isDelete\"\n    [filter]=\"filter\"\n    [formGroupFilter]=\"formGroupFilter\"\n    (onSearch)=\"doSearch($event)\"\n    (onFilter)=\"doFilter($event)\"\n    (onAdd)=\"doAdd($event)\"\n    (onDelete)=\"doDelete()\">\n    <ng-content></ng-content>\n</do-datatable-header>\n<do-datatable-base\n    [rows]=\"rows\"\n    [columns]=\"columns\"\n    [selected]=\"selected\"\n    [limit]=\"limit\"\n    [count]=\"count\"\n    [offset]=\"offset\"\n    [externalPaging]=\"externalPaging\"\n    [externalSorting]=\"externalSorting\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [scrollbarH]=\"scrollbarH\"\n    [scrollbarV]=\"scrollbarV\"\n    [reorderable]=\"reorderable\"\n    [sortType]=\"sortType\"\n    [messages]=\"messages\"\n    [selectionType]=\"selectionType\"\n    [columnMode]=\"columnMode\"\n    [headerHeight]=\"headerHeight\"\n    [footerHeight]=\"footerHeight\"\n    [rowHeight]=\"rowHeight\"\n    [header]=\"header\"\n    [column]=\"column\"\n    [footer]=\"footer\"\n    [add]=\"add\"\n    [edit]=\"edit\"\n    [delete]=\"delete\"\n    [filter]=\"filter\"\n    [startWithOpenData]=\"startWithOpenData\"\n    (page)=\"setPage($event)\"\n    (sort)=\"onSort($event)\"\n    (select)=\"onSelect($event)\"\n    (activate)=\"doEdit($event)\"\n    (onButtonCell)=\"onClickButton($event)\">\n</do-datatable-base>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [""]
                    },] }
        ];
        DoDatatableComponent.ctorParameters = function () { return [
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] },
            { type: doCore.LayoutService },
            { type: core.Injector }
        ]; };
        DoDatatableComponent.propDecorators = {
            rows: [{ type: core.Input }],
            columns: [{ type: core.Input }],
            filters: [{ type: core.Input }],
            selected: [{ type: core.Input }],
            limit: [{ type: core.Input }],
            count: [{ type: core.Input }],
            offset: [{ type: core.Input }],
            externalPaging: [{ type: core.Input }],
            externalSorting: [{ type: core.Input }],
            loadingIndicator: [{ type: core.Input }],
            scrollbarH: [{ type: core.Input }],
            scrollbarV: [{ type: core.Input }],
            reorderable: [{ type: core.Input }],
            sortType: [{ type: core.Input }],
            messages: [{ type: core.Input }],
            selectionType: [{ type: core.Input }],
            columnMode: [{ type: core.Input }],
            headerHeight: [{ type: core.Input }],
            footerHeight: [{ type: core.Input }],
            rowHeight: [{ type: core.Input }],
            header: [{ type: core.Input }],
            column: [{ type: core.Input }],
            footer: [{ type: core.Input }],
            add: [{ type: core.Input }],
            edit: [{ type: core.Input }],
            delete: [{ type: core.Input }],
            filter: [{ type: core.Input }],
            api: [{ type: core.Input }],
            startWithOpenData: [{ type: core.Input }],
            filterEvent: [{ type: core.Input }],
            formGroupFilter: [{ type: core.Input }],
            sort: [{ type: core.Input }],
            onAdd: [{ type: core.Output }],
            onEdit: [{ type: core.Output }],
            onDelete: [{ type: core.Output }],
            onSearch: [{ type: core.Output }],
            onFilter: [{ type: core.Output }],
            onButtonCell: [{ type: core.Output }],
            datatable: [{ type: core.ViewChild, args: ['datatable', { static: false },] }],
            filterFn: [{ type: core.Input }],
            filterDoFetchFn: [{ type: core.Input }],
            reloadFn: [{ type: core.Input }]
        };
        return DoDatatableComponent;
    }());

    var DoDatatableCollapseComponent = /** @class */ (function () {
        function DoDatatableCollapseComponent() {
            var _this = this;
            this.toggle = function () {
                _this.opened$.pipe(operators.take(1)).subscribe(function (x) { return _this.openedSubject.next(!x); });
            };
            this.openedSubject = new rxjs.ReplaySubject(1);
            this.openedSubject.next(false);
            this.opened$ = this.openedSubject.asObservable();
            this.openedState$ = this.opened$.pipe(operators.map(function (x) { return x ? 'expanded' : 'collapsed'; }));
        }
        DoDatatableCollapseComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-datatable-collapse, [do-datatable-collapse]',
                        template: "<div\n    [@openedState]=\"openedState$ | async\"\n    [ngClass]=\"openedState$ | async\">\n    <ng-content></ng-content>\n</div>",
                        animations: [
                            animations.trigger('openedState', [
                                animations.state('collapsed', animations.style({
                                    opacity: 0,
                                    overflow: 'hidden',
                                    height: '0px',
                                    minHeight: '0',
                                    padding: '0 0 0 0.5rem',
                                })),
                                animations.state('expanded', animations.style({
                                    opacity: 1,
                                    overflow: 'hidden',
                                    height: '*',
                                    padding: '1.5rem 0 0.5rem 0.5rem',
                                    'border-bottom': '1px solid #d1d4d7',
                                })),
                                animations.transition('collapsed <=> expanded', animations.animate('500ms ease-in-out')),
                            ]),
                        ],
                        styles: [""]
                    },] }
        ];
        DoDatatableCollapseComponent.ctorParameters = function () { return []; };
        return DoDatatableCollapseComponent;
    }());

    var DoDatatableHeaderComponent = /** @class */ (function () {
        function DoDatatableHeaderComponent() {
            this.header = true;
            this.footer = true;
            this.add = true;
            this.edit = true;
            this.delete = false;
            this.filter = true;
            this.onSearch = new core.EventEmitter();
            this.onFilter = new core.EventEmitter();
            this.onAdd = new core.EventEmitter();
            this.onDelete = new core.EventEmitter();
            this.showFilter = false;
            this.disabledButtonFilter = true;
        }
        DoDatatableHeaderComponent.prototype.ngOnDestroy = function () { };
        DoDatatableHeaderComponent.prototype.doSearch = function (search) {
            if (this.showFilter)
                this.doFilterFunnel();
            this.onSearch.emit(search);
        };
        DoDatatableHeaderComponent.prototype.doFilterFunnel = function () {
            var _this = this;
            this._search = undefined;
            this.collapse.toggle();
            this.showFilter = !this.showFilter;
            if (!this.showFilter) {
                this.formGroupFilter.reset();
            }
            else {
                this.formGroupFilter.valueChanges.subscribe(function (val) {
                    _this.disabledButtonFilter = false;
                });
            }
        };
        DoDatatableHeaderComponent.prototype.doFilter = function () {
            this.onFilter.emit(this.formGroupFilter.value);
        };
        DoDatatableHeaderComponent.prototype.doAdd = function () {
            this.onAdd.emit(true);
        };
        DoDatatableHeaderComponent.prototype.doDelete = function () {
            this.onDelete.emit(true);
        };
        DoDatatableHeaderComponent.prototype.onKeyDown = function (event) {
            if (event.key.toUpperCase() === 'ENTER') {
                this.doSearch(this._search);
            }
        };
        DoDatatableHeaderComponent.prototype.onFocusSearch = function () {
            if (this.showFilter)
                this.doFilterFunnel();
        };
        DoDatatableHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-datatable-header',
                        template: "<div class=\"header-datatable\" *ngIf=\"header\">\n    <div class=\"header-action\" *ngIf=\"add\">\n        <nb-icon\n            class=\"action-add\"\n            icon=\"file-add\"\n            (click)=\"doAdd()\">\n        </nb-icon>\n    </div>\n    <div class=\"header-action\" *ngIf=\"delete\">\n        <nb-icon\n            class=\"action-trash\"\n            icon=\"trash-2\"\n            (click)=\"doDelete()\">\n        </nb-icon>\n    </div>\n    <div class=\"header-filter\" *ngIf=\"filter\">\n        <do-input-base-icon\n            [name]=\"'_filter.datatable'\"\n            [placeholder]=\"'datatable.typesearch'\"\n            [iconcursor]=\"true\"\n            [(ngModel)]=\"_search\"\n            (clickIcon)=\"doSearch($event)\"\n            (keydown)=\"onKeyDown($event)\"\n            (focus)=\"onFocusSearch()\">\n        </do-input-base-icon>\n    </div>\n    <div class=\"filter-funnel\" *ngIf=\"filter && formGroupFilter\">\n        <nb-icon\n            class=\"filter-icon-funnel\"\n            [icon]=\"showFilter ? 'arrow-upward-outline' : 'funnel'\"\n            (click)=\"doFilterFunnel()\">\n        </nb-icon>\n    </div>\n</div>\n<div *ngIf=\"filter && formGroupFilter\" do-datatable-collapse #collapse>\n    <ng-content></ng-content>\n    <div class=\"form-group row\">\n        <div class=\"offset-sm-3 col-sm-9\">\n          <button\n            type=\"submit\"\n            status=\"primary\"\n            (click)=\"doFilter()\"\n            nbButton>\n            {{ 'Search' | translate}}\n          </button>\n        </div>\n    </div>\n</div>",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".header-datatable{width:100%;display:flex;padding-bottom:.3rem}.header-filter{width:100%}.filter-funnel{right:0;padding:10px 5px;cursor:pointer}.filter-icon-funnel:hover{color:#ffc94d}.header-action{left:0;padding:10px 5px;cursor:pointer}.action-add:hover{color:#598bff}.action-trash:hover{color:#ff708d}"]
                    },] }
        ];
        DoDatatableHeaderComponent.propDecorators = {
            header: [{ type: core.Input }],
            footer: [{ type: core.Input }],
            add: [{ type: core.Input }],
            edit: [{ type: core.Input }],
            delete: [{ type: core.Input }],
            filter: [{ type: core.Input }],
            formGroupFilter: [{ type: core.Input }],
            onSearch: [{ type: core.Output }],
            onFilter: [{ type: core.Output }],
            onAdd: [{ type: core.Output }],
            onDelete: [{ type: core.Output }],
            collapse: [{ type: core.ViewChild, args: ['collapse', { static: false },] }]
        };
        return DoDatatableHeaderComponent;
    }());

    var DoDatatableBaseComponent = /** @class */ (function () {
        function DoDatatableBaseComponent(locale, injector) {
            this.locale = locale;
            this.injector = injector;
            this.rows = [];
            this.columns = [];
            this.selected = [];
            this.limit = 10;
            this.count = 0;
            this.offset = 0;
            this.externalPaging = false;
            this.externalSorting = false;
            this.loadingIndicator = false;
            this.scrollbarH = false;
            this.scrollbarV = false;
            this.reorderable = true;
            this.sortType = ngxDatatable.SortType.single;
            this.selectionType = ngxDatatable.SelectionType.checkbox;
            this.columnMode = ngxDatatable.ColumnMode.force;
            this.headerHeight = 40;
            this.footerHeight = 'auto';
            this.rowHeight = 'auto';
            this.header = false;
            this.column = false;
            this.footer = false;
            this.add = true;
            this.edit = true;
            this.delete = false;
            this.filter = true;
            this.startWithOpenData = true;
            this.page = new core.EventEmitter();
            this.sort = new core.EventEmitter();
            this.select = new core.EventEmitter();
            this.activate = new core.EventEmitter();
            this.onButtonCell = new core.EventEmitter();
        }
        DoDatatableBaseComponent.prototype.setPage = function (page) {
            this.page.emit(page);
        };
        DoDatatableBaseComponent.prototype.onSort = function (order) {
            this.sort.emit(order);
        };
        DoDatatableBaseComponent.prototype.onSelect = function (selected) {
            this.select.emit(selected);
        };
        DoDatatableBaseComponent.prototype.onActivate = function (event) {
            if (event.type === 'click') {
                if (this.selectionType === 'checkbox') {
                    if (event.cellIndex > 0) {
                        this.activate.emit(event.row);
                    }
                }
                else {
                    this.activate.emit(event.row);
                }
            }
        };
        DoDatatableBaseComponent.prototype.sanitizedValue = function (value) {
            return value !== null && value !== undefined ? this.stripHtml(value) : value;
        };
        DoDatatableBaseComponent.prototype.stripHtml = function (html) {
            if (!html.replace) {
                return html;
            }
            return html.replace(/<\/?[^>]+(>|$)/g, '');
        };
        DoDatatableBaseComponent.prototype.onClickButton = function (event) {
            this.onButtonCell.emit(event);
        };
        DoDatatableBaseComponent.ctorParameters = function () { return [
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] },
            { type: core.Injector }
        ]; };
        DoDatatableBaseComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-datatable-base',
                        template: "<ngx-datatable\n    class=\"do\"\n    [rows]=\"rows\"\n    [columns]=\"columns\"\n    [selected]=\"selected\"\n    [limit]=\"limit\"\n    [count]=\"count\"\n    [offset]=\"offset\"\n    [externalPaging]=\"externalPaging\"\n    [externalSorting]=\"externalSorting\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [scrollbarH]=\"scrollbarH\"\n    [scrollbarV]=\"scrollbarV\"\n    [reorderable]=\"reorderable\"\n    [sortType]=\"sortType\"\n    [selectionType]=\"selectionType\"\n    [columnMode]=\"columnMode\"\n    [headerHeight]=\"headerHeight\"\n    [footerHeight]=\"footerHeight\"\n    [rowHeight]=\"rowHeight\"\n    (page)=\"setPage($event)\"\n    (sort)=\"onSort($event)\"\n    (select)=\"onSelect($event)\"\n    (activate)=\"onActivate($event)\"\n    #datatable>\n    <div *ngIf=\"column\">\n        <ngx-datatable-column *ngIf=\"selectionType === 'checkbox'\"\n            [width]=\"30\"\n            [sortable]=\"false\"\n            [canAutoResize]=\"false\"\n            [draggable]=\"false\"\n            [resizeable]=\"false\"\n            [headerCheckboxable]=\"true\"\n            [checkboxable]=\"true\"\n            [frozenLeft]=\"true\">\n        </ngx-datatable-column>\n        <ngx-datatable-column *ngFor=\"let col of columns\"\n            [prop]=\"col.prop\"\n            [name]=\"col.name | translate\"\n            [sortable]=\"col.sortable\"\n            [canAutoResize]=\"col.canAutoResize\"\n            [draggable]=\"col.draggable\"\n            [resizeable]=\"col.resizeable\"\n            [width]=\"col.width\"\n            [frozenLeft]=\"col.frozenLeft\"\n            [frozenRight]=\"col.frozenRight\">\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                <span *ngIf=\"!col.cellTemplate && !col.type\" [title]=\"sanitizedValue(value)\" [innerHTML]=\"value\"></span>\n                <span *ngIf=\"!col.cellTemplate && col.type === 'prefix'\" [title]=\"sanitizedValue(value)\" [innerHTML]=\"value + ' ' + col.prefix\"></span>\n                <span *ngIf=\"!col.cellTemplate && col.type === 'html'\" [title]=\"sanitizedValue(value)\" [innerHTML]=\"value\"></span>\n                <span *ngIf=\"!col.cellTemplate && col.type === 'icon'\" [title]=\"sanitizedValue(value)\"><span class=\"{{value}}\"></span></span>\n                <button\n                    *ngIf=\"!col.cellTemplate && col.type === 'button'\"\n                    [status]=\"col.buttonStatus ? col.buttonStatus : 'primary'\"\n                    (click)=\"onClickButton(value)\"\n                    [size]=\"'tiny'\"\n                    nbButton>\n                    {{ col.button | translate }}\n                </button>\n            </ng-template>\n        </ngx-datatable-column>\n    </div>\n    <ngx-datatable-footer *ngIf=\"footer\">\n        <ng-template\n            ngx-datatable-footer-template\n            let-rowCount=\"rowCount\"\n            let-pageSize=\"pageSize\"\n            let-selectedCount=\"selectedCount\"\n            let-curPage=\"curPage\"\n            let-offset=\"offset\"\n            let-isVisible=\"isVisible\">\n            <div class=\"page-count\">\n                <div> {{ selectedCount }} {{ 'Selected' | translate }} | {{ count }} {{ 'Total' | translate }} </div>\n            </div>\n            <datatable-pager\n                [pagerLeftArrowIcon]=\"'datatable-icon-left'\"\n                [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n                [pagerPreviousIcon]=\"'datatable-icon-prev'\"\n                [pagerNextIcon]=\"'datatable-icon-skip'\"\n                [page]=\"curPage\"\n                [size]=\"pageSize\"\n                [count]=\"rowCount\"\n                [hidden]=\"!((rowCount / pageSize) > 1)\"\n                (change)=\"datatable.onFooterPage($event)\">\n            </datatable-pager>\n        </ng-template>\n    </ngx-datatable-footer>\n</ngx-datatable>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".ngx-datatable.material{background:#fff;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.ngx-datatable.material.striped .datatable-row-odd{background:#eee}.ngx-datatable.material.multi-click-selection .datatable-body-row.active,.ngx-datatable.material.multi-click-selection .datatable-body-row.active .datatable-row-group,.ngx-datatable.material.multi-selection .datatable-body-row.active,.ngx-datatable.material.multi-selection .datatable-body-row.active .datatable-row-group,.ngx-datatable.material.single-selection .datatable-body-row.active,.ngx-datatable.material.single-selection .datatable-body-row.active .datatable-row-group{background-color:#304ffe;color:#fff}.ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover,.ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover .datatable-row-group,.ngx-datatable.material.multi-selection .datatable-body-row.active:hover,.ngx-datatable.material.multi-selection .datatable-body-row.active:hover .datatable-row-group,.ngx-datatable.material.single-selection .datatable-body-row.active:hover,.ngx-datatable.material.single-selection .datatable-body-row.active:hover .datatable-row-group{background-color:#193ae4;color:#fff}.ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus,.ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus .datatable-row-group,.ngx-datatable.material.multi-selection .datatable-body-row.active:focus,.ngx-datatable.material.multi-selection .datatable-body-row.active:focus .datatable-row-group,.ngx-datatable.material.single-selection .datatable-body-row.active:focus,.ngx-datatable.material.single-selection .datatable-body-row.active:focus .datatable-row-group{background-color:#2041ef;color:#fff}.ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover,.ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#eee;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus,.ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus .datatable-row-group{background-color:#ddd}.ngx-datatable.material.cell-selection .datatable-body-cell:hover,.ngx-datatable.material.cell-selection .datatable-body-cell:hover .datatable-row-group{background-color:#eee;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.material.cell-selection .datatable-body-cell:focus,.ngx-datatable.material.cell-selection .datatable-body-cell:focus .datatable-row-group{background-color:#ddd}.ngx-datatable.material.cell-selection .datatable-body-cell.active,.ngx-datatable.material.cell-selection .datatable-body-cell.active .datatable-row-group{background-color:#304ffe;color:#fff}.ngx-datatable.material.cell-selection .datatable-body-cell.active:hover,.ngx-datatable.material.cell-selection .datatable-body-cell.active:hover .datatable-row-group{background-color:#193ae4;color:#fff}.ngx-datatable.material.cell-selection .datatable-body-cell.active:focus,.ngx-datatable.material.cell-selection .datatable-body-cell.active:focus .datatable-row-group{background-color:#2041ef;color:#fff}.ngx-datatable.material .empty-row{height:50px;text-align:left;padding:.5rem 1.2rem;vertical-align:top;border-top:0}.ngx-datatable.material .loading-row{text-align:left;padding:.5rem 1.2rem;vertical-align:top;border-top:0}.ngx-datatable.material .datatable-body .datatable-row-left,.ngx-datatable.material .datatable-header .datatable-row-left{background-color:#fff;background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.ngx-datatable.material .datatable-body .datatable-row-right,.ngx-datatable.material .datatable-header .datatable-row-right{background-position:0 0;background-color:#fff;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==)}.ngx-datatable.material .datatable-header{border-bottom:1px solid rgba(0,0,0,.12)}.ngx-datatable.material .datatable-header .datatable-header-cell{text-align:left;padding:.9rem 1.2rem;background-color:#fff;color:rgba(0,0,0,.54);vertical-align:bottom;font-size:12px;font-weight:500}.ngx-datatable.material .datatable-header .datatable-header-cell .datatable-header-cell-wrapper{position:relative}.ngx-datatable.material .datatable-header .datatable-header-cell.longpress .draggable::after{transition:transform .4s,opacity .4s;opacity:.5;transform:scale(1)}.ngx-datatable.material .datatable-header .datatable-header-cell .draggable::after{content:' ';position:absolute;top:50%;left:50%;margin:-30px 0 0 -30px;height:60px;width:60px;background:#eee;border-radius:100%;opacity:1;filter:none;transform:scale(0);z-index:9999;pointer-events:none}.ngx-datatable.material .datatable-header .datatable-header-cell.dragging .resize-handle{border-right:none}.ngx-datatable.material .datatable-header .resize-handle{border-right:1px solid #eee}.ngx-datatable.material .datatable-body{position:relative}.ngx-datatable.material .datatable-body .datatable-row-detail{background:#f5f5f5;padding:10px}.ngx-datatable.material .datatable-body .datatable-group-header{background:#f5f5f5;border-bottom:1px solid #d9d8d9;border-top:1px solid #d9d8d9}.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-cell,.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-group-cell{text-align:left;padding:.9rem 1.2rem;vertical-align:top;border-top:0;color:rgba(0,0,0,.87);transition:width .3s;font-size:14px;font-weight:400}.ngx-datatable.material .datatable-body .progress-linear{display:block;position:-webkit-sticky;position:sticky;width:100%;height:5px;padding:0;margin:0;top:0}.ngx-datatable.material .datatable-body .progress-linear .container{display:block;position:relative;overflow:hidden;width:100%;height:5px;transform:translate(0,0) scale(1,1);background-color:#aad1f9}.ngx-datatable.material .datatable-body .progress-linear .container .bar{transition:transform .2s linear;-webkit-animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;background-color:#106cc8;position:absolute;left:0;top:0;bottom:0;width:100%;height:5px}.ngx-datatable.material .datatable-footer{border-top:1px solid rgba(0,0,0,.12);font-size:12px;font-weight:400;color:rgba(0,0,0,.54)}.ngx-datatable.material .datatable-footer .page-count{line-height:50px;height:50px;padding:0 1.2rem}.ngx-datatable.material .datatable-footer .datatable-pager{margin:0 10px}.ngx-datatable.material .datatable-footer .datatable-pager li{vertical-align:middle}.ngx-datatable.material .datatable-footer .datatable-pager li.disabled a{color:rgba(0,0,0,.26)!important;background-color:transparent!important}.ngx-datatable.material .datatable-footer .datatable-pager li.active a{background-color:rgba(158,158,158,.2);font-weight:700}.ngx-datatable.material .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0 6px;border-radius:3px;margin:6px 3px;text-align:center;color:rgba(0,0,0,.54);text-decoration:none;vertical-align:bottom}.ngx-datatable.material .datatable-footer .datatable-pager a:hover{color:rgba(0,0,0,.75);background-color:rgba(158,158,158,.2)}.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-skip{font-size:20px;line-height:20px;padding:0 3px}.ngx-datatable.material .datatable-summary-row .datatable-body-row,.ngx-datatable.material .datatable-summary-row .datatable-body-row:hover{background-color:#ddd}.ngx-datatable.material .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}.datatable-checkbox{position:relative;margin:0;cursor:pointer;vertical-align:middle;display:inline-block;box-sizing:border-box;padding:0}.datatable-checkbox input[type=checkbox]{position:relative;margin:0 1rem 0 0;cursor:pointer;outline:0}.datatable-checkbox input[type=checkbox]:before{transition:.3s ease-in-out;content:'';position:absolute;left:0;z-index:1;width:1rem;height:1rem;border:2px solid #f2f2f2}.datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#009688;border-top-style:none;border-right-style:none}.datatable-checkbox input[type=checkbox]:after{content:'';position:absolute;top:0;left:0;width:1rem;height:1rem;background:#fff;cursor:pointer}@-webkit-keyframes query{0%{opacity:1;transform:translateX(35%) scale(.3,1)}100%{opacity:0;transform:translateX(-50%) scale(0,1)}}@keyframes query{0%{opacity:1;transform:translateX(35%) scale(.3,1)}100%{opacity:0;transform:translateX(-50%) scale(0,1)}}.ngx-datatable.bootstrap{box-shadow:none;font-size:13px}.ngx-datatable.bootstrap .datatable-header{height:unset!important}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell{vertical-align:bottom;padding:.75rem;border-bottom:1px solid #d1d4d7}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.ngx-datatable.bootstrap .datatable-body .datatable-body-row{vertical-align:top;border-top:1px solid #d1d4d7}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.datatable-row-even{background-color:rgba(0,0,0,.05)}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.active{background-color:#1483ff;color:#fff}.ngx-datatable.bootstrap .datatable-body .datatable-body-row .datatable-body-cell{padding:.75rem;text-align:left;vertical-align:top}.ngx-datatable.bootstrap .datatable-body .empty-row{position:relative;padding:.75rem 1.25rem;margin-bottom:0}.ngx-datatable.bootstrap .datatable-footer{background:#424242;color:#ededed;margin-top:-1px}.ngx-datatable.bootstrap .datatable-footer .page-count{line-height:50px;height:50px;padding:0 1.2rem}.ngx-datatable.bootstrap .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li{margin:10px 0}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a,.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#545454;font-weight:700}.ngx-datatable.bootstrap .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;text-decoration:none;vertical-align:bottom;color:#ededed}.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip{font-size:18px;line-height:27px;padding:0 3px}.ngx-datatable.bootstrap .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}.ngx-datatable.dark{box-shadow:none;background:#1b1e27;border:1px solid #2f3646;color:#fff;font-size:13px}.ngx-datatable.dark .datatable-header{background:#181b24;color:#72809b}.ngx-datatable.dark .datatable-header .datatable-header-cell{text-align:left;padding:.5rem 1.2rem;font-weight:700}.ngx-datatable.dark .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.ngx-datatable.dark .datatable-body{background:#1a1e28}.ngx-datatable.dark .datatable-body .datatable-body-row{border-top:1px solid #2f3646}.ngx-datatable.dark .datatable-body .datatable-body-row .datatable-body-cell{text-align:left;padding:.5rem 1.2rem;vertical-align:top}.ngx-datatable.dark .datatable-body .datatable-body-row:hover{background:#171b24;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.dark .datatable-body .datatable-body-row:focus{background-color:#232837}.ngx-datatable.dark .datatable-body .datatable-body-row.active{background-color:#1483ff;color:#fff}.ngx-datatable.dark .datatable-footer{background:#232837;color:#72809b;margin-top:-1px}.ngx-datatable.dark .datatable-footer .page-count{line-height:50px;height:50px;padding:0 1.2rem}.ngx-datatable.dark .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.ngx-datatable.dark .datatable-footer .datatable-pager ul li{margin:10px 0}.ngx-datatable.dark .datatable-footer .datatable-pager ul li:not(.disabled).active a,.ngx-datatable.dark .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#455066;font-weight:700}.ngx-datatable.dark .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;text-decoration:none;vertical-align:bottom;color:#72809b}.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-skip{font-size:18px;line-height:27px;padding:0 3px}.ngx-datatable.dark .datatable-summary-row .datatable-body-row,.ngx-datatable.dark .datatable-summary-row .datatable-body-row:hover{background-color:#14171f}.ngx-datatable.dark .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}.ngx-datatable.do{box-shadow:none;font-size:13px}.ngx-datatable.do .datatable-header{height:unset!important}.ngx-datatable.do .datatable-header .datatable-header-cell{vertical-align:bottom;padding:.75rem;border-bottom:1px solid #d1d4d7}.ngx-datatable.do .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.ngx-datatable.do .datatable-header .datatable-header-cell .datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#36f;border-top-style:none;border-right-style:none}.ngx-datatable.do .datatable-header .datatable-row-left{background-color:#fff;background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.ngx-datatable.do .datatable-header .datatable-row-right{background-color:#fff;background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==)}.ngx-datatable.do .datatable-body .datatable-body-row{vertical-align:top}.ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even,.ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even .datatable-row-left,.ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even .datatable-row-right{background-color:#f2f2f2}.ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-left,.ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-right{background-color:#fff}.ngx-datatable.do .datatable-body .datatable-body-row .datatable-row-left{background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.ngx-datatable.do .datatable-body .datatable-body-row .datatable-row-right{background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==)}.ngx-datatable.do .datatable-body .datatable-body-row.active{background-color:#36f;color:#fff}.ngx-datatable.do .datatable-body .datatable-body-row.active .datatable-row-left,.ngx-datatable.do .datatable-body .datatable-body-row.active .datatable-row-right{background-color:#36f}.ngx-datatable.do .datatable-body .datatable-body-row:hover,.ngx-datatable.do .datatable-body .datatable-body-row:hover .datatable-row-group{cursor:pointer;border-bottom:.025rem solid #7899ff;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.do .datatable-body .datatable-body-row .datatable-body-cell{padding:.75rem;text-align:left;vertical-align:top}.ngx-datatable.do .datatable-body .datatable-body-row .datatable-body-cell .datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#36f;border-top-style:none;border-right-style:none}.ngx-datatable.do .datatable-body .empty-row{position:relative;padding:.75rem 1.25rem;margin-bottom:0}.ngx-datatable.do .datatable-body .progress-linear{display:block;width:100%;height:5px;padding:0;margin:0;position:absolute}.ngx-datatable.do .datatable-body .progress-linear .container{display:block;position:relative;overflow:hidden;width:100%;height:5px;transform:translate(0,0) scale(1,1);background-color:#aad1f9}.ngx-datatable.do .datatable-body .progress-linear .container .bar{transition:transform .2s linear;-webkit-animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;background-color:#106cc8;position:absolute;left:0;top:0;bottom:0;width:100%;height:5px}.ngx-datatable.do .datatable-footer{background:#f2f2f2;color:#5a5a5a;margin-top:-1px}.ngx-datatable.do .datatable-footer .page-count{padding:.7rem}.ngx-datatable.do .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.ngx-datatable.do .datatable-footer .datatable-pager ul li{margin:10px 0}.ngx-datatable.do .datatable-footer .datatable-pager ul li:not(.disabled).active a,.ngx-datatable.do .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#c1c1c1;font-weight:700}.ngx-datatable.do .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;text-decoration:none;vertical-align:bottom;color:#5a5a5a}.ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-skip{line-height:27px;padding:0 .2rem}.ngx-datatable.do .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}"]
                    },] }
        ];
        DoDatatableBaseComponent.ctorParameters = function () { return [
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] },
            { type: core.Injector }
        ]; };
        DoDatatableBaseComponent.propDecorators = {
            rows: [{ type: core.Input }],
            columns: [{ type: core.Input }],
            selected: [{ type: core.Input }],
            limit: [{ type: core.Input }],
            count: [{ type: core.Input }],
            offset: [{ type: core.Input }],
            externalPaging: [{ type: core.Input }],
            externalSorting: [{ type: core.Input }],
            loadingIndicator: [{ type: core.Input }],
            scrollbarH: [{ type: core.Input }],
            scrollbarV: [{ type: core.Input }],
            reorderable: [{ type: core.Input }],
            sortType: [{ type: core.Input }],
            messages: [{ type: core.Input }],
            selectionType: [{ type: core.Input }],
            columnMode: [{ type: core.Input }],
            headerHeight: [{ type: core.Input }],
            footerHeight: [{ type: core.Input }],
            rowHeight: [{ type: core.Input }],
            header: [{ type: core.Input }],
            column: [{ type: core.Input }],
            footer: [{ type: core.Input }],
            add: [{ type: core.Input }],
            edit: [{ type: core.Input }],
            delete: [{ type: core.Input }],
            filter: [{ type: core.Input }],
            startWithOpenData: [{ type: core.Input }],
            page: [{ type: core.Output }],
            sort: [{ type: core.Output }],
            select: [{ type: core.Output }],
            activate: [{ type: core.Output }],
            onButtonCell: [{ type: core.Output }]
        };
        return DoDatatableBaseComponent;
    }());

    var DoButtonSubmitComponent = /** @class */ (function () {
        function DoButtonSubmitComponent() {
            this.formGroupButton = new forms.FormGroup({});
            this.disabledButton = false;
            this.colLabel = 3;
            this.colButton = 9;
            this.type = 'submit';
            this.status = 'primary';
            this.skeleton = false;
            this.onSubmit = new core.EventEmitter();
        }
        DoButtonSubmitComponent.prototype.click = function (event) {
            this.onSubmit.emit(event);
        };
        DoButtonSubmitComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-button-submit',
                        template: "<div class=\"form-group row\">\n  <div class=\"offset-sm-{{colLabel}} col-sm-{{colButton}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <button\n      type=\"{{type}}\"\n      status=\"{{status}}\"\n      (click)=\"click($event)\"\n      [disabled]=\"formGroupButton.invalid || formGroupButton.pristine || disabledButton\"\n      nbButton>\n      {{ name | translate}}\n    </button>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"offset-sm-{{colLabel}} col-sm-{{colButton}}\">\n      <div\n        [ngClass]=\"{\n          'button-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</div>",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [""]
                    },] }
        ];
        DoButtonSubmitComponent.propDecorators = {
            formGroupButton: [{ type: core.Input }],
            name: [{ type: core.Input }],
            disabledButton: [{ type: core.Input }],
            colLabel: [{ type: core.Input }],
            colButton: [{ type: core.Input }],
            type: [{ type: core.Input }],
            status: [{ type: core.Input }],
            skeleton: [{ type: core.Input }],
            onSubmit: [{ type: core.Output }]
        };
        return DoButtonSubmitComponent;
    }());

    var BUTTON_COMPONENTS = [
        DoButtonSubmitComponent,
    ];
    var DoButtonModule = /** @class */ (function () {
        function DoButtonModule() {
        }
        DoButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            theme.NbButtonModule,
                            core$1.TranslateModule,
                            DoBaseModule,
                        ],
                        declarations: __spread(BUTTON_COMPONENTS),
                        exports: __spread(BUTTON_COMPONENTS, [
                            theme.NbButtonModule,
                        ]),
                    },] }
        ];
        return DoButtonModule;
    }());

    var TABLE_COMPONENTS = [
        DoDatatableComponent,
        DoDatatableBaseComponent,
        DoDatatableHeaderComponent,
        DoDatatableCollapseComponent,
    ];
    var DoTableModule = /** @class */ (function () {
        function DoTableModule() {
        }
        DoTableModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            core$1.TranslateModule,
                            theme.NbButtonModule,
                            theme.NbIconModule,
                            ngxDatatable.NgxDatatableModule,
                            DoBaseModule,
                            DoInputModule,
                            DoButtonModule,
                        ],
                        declarations: __spread(TABLE_COMPONENTS),
                        exports: __spread(TABLE_COMPONENTS),
                    },] }
        ];
        return DoTableModule;
    }());

    var DoDatePickerComponent = /** @class */ (function (_super) {
        __extends(DoDatePickerComponent, _super);
        function DoDatePickerComponent(ngControl, dateService, locale, datePipe) {
            var _this = _super.call(this, ngControl, locale) || this;
            _this.dateService = dateService;
            _this.locale = locale;
            _this.datePipe = datePipe;
            _this.colLabel = 3;
            _this.colInput = 9;
            _this.size = theme.NbCalendarSize.MEDIUM;
            _this.pattern = doCore.DatePattern.SLASH;
            return _this;
        }
        DoDatePickerComponent.prototype.writeValue = function (value) {
            if (value) {
                if (String(value).match(this.pattern)) {
                    var dateParse = this.parse(value);
                    if (!isNaN(Date.parse(dateParse))) {
                        this._value = new Date(dateParse);
                        this.onChange(value);
                    }
                }
                var control = this.ngControl.control;
                if (control) {
                    control.updateValueAndValidity();
                    control.markAsUntouched();
                    control.markAsPristine();
                }
            }
        };
        DoDatePickerComponent.prototype.parse = function (value) {
            var year = String(value).split('/')[2];
            var month = String(value).split('/')[1];
            var day = String(value).split('/')[0];
            return year + '/' + month + '/' + day;
        };
        DoDatePickerComponent.ctorParameters = function () { return [
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
            { type: theme.NbDateService },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] },
            { type: common.DatePipe }
        ]; };
        DoDatePickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-datepicker',
                        template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      id=\"{{name}}\"\n      [pattern]=\"pattern\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled || skeleton\"\n      [ngClass]=\"{\n        'skeleton': skeleton,\n        'status-danger': hasErrors,\n        'status-success': hasSuccess\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      [(ngModel)]=\"value\"\n      [nbDatepicker]=\"ngxdatepicker\"\n      #input nbInput fullWidth>\n      <nb-datepicker\n        [format]=\"format\"\n        [size]=\"size\"\n        [min]=\"min\"\n        [max]=\"max\"\n        #ngxdatepicker>\n      </nb-datepicker>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                        styles: [""]
                    },] }
        ];
        DoDatePickerComponent.ctorParameters = function () { return [
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
            { type: theme.NbDateService },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] },
            { type: common.DatePipe }
        ]; };
        DoDatePickerComponent.propDecorators = {
            placeholder: [{ type: core.Input }],
            colLabel: [{ type: core.Input }],
            colInput: [{ type: core.Input }],
            min: [{ type: core.Input }],
            max: [{ type: core.Input }],
            size: [{ type: core.Input }]
        };
        return DoDatePickerComponent;
    }(DoValueAccessor));

    var DATEPICKER_COMPONENTS = [
        DoDatePickerComponent,
    ];
    var DoDatePickerModule = /** @class */ (function () {
        function DoDatePickerModule() {
        }
        DoDatePickerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            theme.NbInputModule,
                            theme.NbDatepickerModule,
                            moment.NbMomentDateModule,
                            dateFns.NbDateFnsDateModule.forRoot({
                                parseOptions: { awareOfUnicodeTokens: true },
                                formatOptions: { awareOfUnicodeTokens: true },
                            }),
                            core$1.TranslateModule,
                            DoBaseModule,
                        ],
                        declarations: __spread(DATEPICKER_COMPONENTS),
                        exports: __spread(DATEPICKER_COMPONENTS),
                    },] }
        ];
        return DoDatePickerModule;
    }());

    var ImageUploadComponent = /** @class */ (function (_super) {
        __extends(ImageUploadComponent, _super);
        function ImageUploadComponent(ngControl, locale, dom) {
            var _this = _super.call(this, ngControl, locale) || this;
            _this.locale = locale;
            _this.dom = dom;
            _this.onUpload = new core.EventEmitter();
            _this.onPreview = new core.EventEmitter();
            _this.height = 225;
            _this.width = 225;
            _this.radius = 0;
            _this.buttonUpload = true;
            _this.skeleton = false;
            _this.opacity = '0.5';
            _this.imageDefault = document.getElementsByTagName('base')[0].href + "/assets/images/avatars/default.png";
            return _this;
        }
        Object.defineProperty(ImageUploadComponent.prototype, "uploadFn", {
            set: function (finish) {
                if (finish) {
                    this.ngControl.control.markAsPristine();
                    this.ngControl.control.markAsUntouched();
                }
            },
            enumerable: false,
            configurable: true
        });
        ImageUploadComponent.prototype.writeValue = function (value) {
            if (value instanceof File) {
                this.opacity = '0.8';
                this.image = URL.createObjectURL(value);
                this._value = value;
            }
            this.onChange(this.value);
            var control = this.ngControl.control;
            if (control) {
                control.updateValueAndValidity();
                control.markAsTouched();
                control.markAsDirty();
            }
        };
        ImageUploadComponent.prototype.upload = function (files) {
            this.opacity = '0.8';
            for (var index = 0; index < files.length; index++) {
                this.value = files[index];
            }
            this.image = URL.createObjectURL(this.value);
            this.onPreview.emit(this.value);
        };
        ImageUploadComponent.prototype.doUpload = function () {
            this.onUpload.emit(this.value);
        };
        ImageUploadComponent.prototype.ngOnDestroy = function () { };
        ImageUploadComponent.prototype.onInit = function () {
            if (!this.image) {
                this.image = this.imageDefault;
            }
        };
        ImageUploadComponent.ctorParameters = function () { return [
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] },
            { type: platformBrowser.DomSanitizer }
        ]; };
        ImageUploadComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-image-upload',
                        template: "<div class=\"body-upload\">\n  <div *ngIf=\"!skeleton; else contentskeleton\"\n    class=\"upload-container\"\n    (click)=\"img.click()\"\n    doDragDrop\n    [opacity]=\"opacity\"\n    (onFileDropped)=\"upload($event)\"\n    [ngStyle]=\"{ \n      'background-image': 'url(' + (image? image: imageDefault) + ')',\n      'height':  height + 'px',\n      'width':  width + 'px',\n      'border-radius':  radius + '%'\n    }\">\n    <input\n      hidden\n      type=\"file\"\n      accept=\"image/png, image/jpeg, image/jpg\"\n      (change)=\"upload($event.target.files)\"\n      #img>\n  </div>\n  <ng-template #contentskeleton>\n    <div\n      class=\"upload-container\"\n      [ngStyle]=\"{ \n        'background-image': 'url(' + image + ')',\n        'height':  height + 'px',\n        'width':  width + 'px',\n        'border-radius':  radius + '%'\n      }\">\n    </div>\n  </ng-template>\n  <button *ngIf=\"buttonUpload\"\n    class=\"upload-bg\"\n    [size]=\"'small'\"\n    [shape]=\"'round'\"\n    [status]=\"'primary'\"\n    [disabled]=\"ngControl.pristine || disabled\"\n    (click)=\"doUpload()\"\n    nbButton\n    [ngStyle]=\"{ \n      'top': 'calc('+height+'px + 0.157rem)'\n    }\">\n    <nb-icon class=\"upload-icon\" icon=\"cloud-upload-outline\" pack=\"eva\"></nb-icon>\n    {{ 'Upload' | translate}}\n  </button>\n</div>",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".upload-container{background-repeat:no-repeat;background-color:#f7f9fc;background-size:cover;margin:20px auto;border:2px dashed #d9dde5}.upload-container:hover{cursor:pointer}.body-upload{padding:15px}.upload-bg{position:absolute;left:50%;transform:translate(-50%);z-index:2}.nb-theme-default [nbButton].appearance-filled.status-primary[disabled]{background-color:#edf1f7;border-color:transparent;color:rgba(143,155,179,.48)}.upload-icon{font-size:5rem}"]
                    },] }
        ];
        ImageUploadComponent.ctorParameters = function () { return [
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] },
            { type: platformBrowser.DomSanitizer }
        ]; };
        ImageUploadComponent.propDecorators = {
            onUpload: [{ type: core.Output }],
            onPreview: [{ type: core.Output }],
            image: [{ type: core.Input }],
            height: [{ type: core.Input }],
            width: [{ type: core.Input }],
            radius: [{ type: core.Input }],
            buttonUpload: [{ type: core.Input }],
            skeleton: [{ type: core.Input }],
            uploadFn: [{ type: core.Input }]
        };
        return ImageUploadComponent;
    }(DoValueAccessor));

    var IMAGE_COMPONENTS = [
        ImageUploadComponent,
    ];
    var DoImageModule = /** @class */ (function () {
        function DoImageModule() {
        }
        DoImageModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            theme.NbButtonModule,
                            theme.NbIconModule,
                            DoBaseModule,
                        ],
                        declarations: __spread(IMAGE_COMPONENTS),
                        exports: __spread(IMAGE_COMPONENTS),
                    },] }
        ];
        return DoImageModule;
    }());

    var DoTreeComponent = /** @class */ (function () {
        function DoTreeComponent() {
            this.nodeItems = [{}];
            this.options = {
                mode: treeNgx.TreeMode.MultiSelect,
                checkboxes: true,
                alwaysEmitSelected: true
            };
            this.onSelect = new core.EventEmitter();
        }
        Object.defineProperty(DoTreeComponent.prototype, "nodeItemsFn", {
            set: function (nodeItems) {
                this.nodeItems = nodeItems;
            },
            enumerable: false,
            configurable: true
        });
        DoTreeComponent.prototype.ngOnInit = function () { };
        DoTreeComponent.prototype.onSelectedItems = function (event) {
            this.onSelect.emit(event);
        };
        DoTreeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-tree',
                        template: "<tree-ngx\n  (selectedItems)=\"onSelectedItems($event)\"\n  [nodeItems]=\"nodeItems\"\n  [options]=\"options\"\n  #treengx>\n</tree-ngx>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".tree-ngx{display:flex;flex:1 1 auto;flex-direction:column;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.node{display:flex;flex:1 1 auto;flex-direction:column}.node-children{display:flex;flex:1 1 auto}.node-name{display:inline-block;padding:5px 0 5px 7px}.node-name.markSelected{padding:5px 0 5px 2px;border-left:5px solid #269}.node-name .active{cursor:pointer}.node-offset{display:flex;margin-left:20px}.node-icon-wrapper{position:relative;display:inline-block;width:25px;height:17px;top:1px;left:6px}.node-icon-wrapper.disabled{cursor:default}.collapsable{cursor:pointer}.node-container{display:inline-block}.nodeDisabled{opacity:.6}.node-checkbox:disabled{cursor:auto}.collapsible-wrapper{display:flex;overflow:hidden}.collapsible-wrapper:after{content:'';height:25px;transition:height .3s linear,max-height linear .3s;max-height:0}.collapsible{transition:margin-bottom .3s cubic-bezier(0,0,0,1);margin-bottom:0;max-height:1000000px}.collapsible-wrapper.collapsed>.collapsible{margin-bottom:-20000px;transition:margin-bottom .3s cubic-bezier(1,0,1,1),visibility .3s,max-height .3s;visibility:hidden;max-height:0}.collapsible-wrapper.collapsed:after{height:0;transition:height .3s linear;max-height:25px}.arrow-down{position:absolute;width:0;height:0;left:3px;top:6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #455a64}.arrow-down.collapse-empty{border-top:7px solid #ccc}.arrow-right{position:absolute;width:0;height:0;left:8px;top:3px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #455a64}.node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}"]
                    },] }
        ];
        DoTreeComponent.propDecorators = {
            nodeItemsFn: [{ type: core.Input }],
            nodeItems: [{ type: core.Input }],
            options: [{ type: core.Input }],
            onSelect: [{ type: core.Output }]
        };
        return DoTreeComponent;
    }());

    var TREE_COMPONENTS = [
        DoTreeComponent,
    ];
    var DoTreeModule = /** @class */ (function () {
        function DoTreeModule() {
        }
        DoTreeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            theme.NbIconModule,
                            core$1.TranslateModule,
                            treeNgx.TreeNgxModule,
                            DoBaseModule,
                        ],
                        declarations: __spread(TREE_COMPONENTS),
                        exports: __spread(TREE_COMPONENTS),
                    },] }
        ];
        return DoTreeModule;
    }());

    var DoLabelTextComponent = /** @class */ (function () {
        function DoLabelTextComponent() {
            this.colLabel = 3;
            this.colContent = 9;
            this.skeleton = false;
            this.content = '';
            this.label = '';
            this.nolabel = false;
            this.required = false;
        }
        DoLabelTextComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'do-label-text',
                        template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colContent\"\n  [required]=\"required\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colContent}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <span class=\"label-content\">{{content | translate}}</span>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colContent}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".label-content{color:#777c86;font-family:Open Sans,sans-serif;font-size:.75rem;font-weight:600}"]
                    },] }
        ];
        DoLabelTextComponent.ctorParameters = function () { return []; };
        DoLabelTextComponent.propDecorators = {
            colLabel: [{ type: core.Input }],
            colContent: [{ type: core.Input }],
            skeleton: [{ type: core.Input }],
            name: [{ type: core.Input }],
            content: [{ type: core.Input }],
            label: [{ type: core.Input }],
            nolabel: [{ type: core.Input }],
            required: [{ type: core.Input }],
            paramError: [{ type: core.Input }]
        };
        return DoLabelTextComponent;
    }());

    var LABEL_COMPONENTS = [
        DoLabelTextComponent,
    ];
    var DoLabelModule = /** @class */ (function () {
        function DoLabelModule() {
        }
        DoLabelModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            theme.NbIconModule,
                            core$1.TranslateModule,
                            DoBaseModule,
                        ],
                        declarations: __spread(LABEL_COMPONENTS),
                        exports: __spread(LABEL_COMPONENTS),
                    },] }
        ];
        return DoLabelModule;
    }());

    var COMMON_MODULES = [
        DoBaseModule,
        DoInputModule,
        DoButtonModule,
        DoDatePickerModule,
        DoCheckBoxModule,
        DoRadioModule,
        DoEditorModule,
        DoCalendarModule,
        DoChartsGraphModule,
        DoMapsModule,
        DoProgressModule,
        DoSelectModule,
        DoSpinnerModule,
        DoTableModule,
        DoImageModule,
        DoTreeModule,
        DoLabelModule,
    ];
    var DoCommonModule = /** @class */ (function () {
        function DoCommonModule() {
        }
        DoCommonModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [],
                        imports: __spread(COMMON_MODULES),
                        exports: __spread(COMMON_MODULES),
                    },] }
        ];
        return DoCommonModule;
    }());

    var BaseComponent = /** @class */ (function () {
        function BaseComponent(injector) {
            this.injector = injector;
            this.api = injector.get(doCore.API);
            this.http = injector.get(doCore.HTTP_SERVICE);
        }
        BaseComponent.prototype.exec = function (serviceName, apiName, body, headers, params, pathVariable, responseType) {
            return this.http.HTTP_AUTH(this.api[serviceName][apiName], body, headers, params, pathVariable, responseType);
        };
        return BaseComponent;
    }());

    var BaseFormComponent = /** @class */ (function (_super) {
        __extends(BaseFormComponent, _super);
        function BaseFormComponent(injector, controlsConfig) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.submitSubject$ = new rxjs.Subject();
            _this.destroy$ = new rxjs.Subject();
            _this.disabled = false;
            _this.loadingForm = false;
            _this.formBuilder = injector.get(forms.FormBuilder);
            if (controlsConfig)
                _this.formGroup = _this.formBuilder.group(controlsConfig);
            _this.toastr = injector.get(DoToastrService);
            return _this;
        }
        BaseFormComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
            this.onDestroy();
        };
        BaseFormComponent.prototype.onSubmit = function (body, serviceName, apiName, disableToastr) {
            var _this = this;
            this.disabled = true;
            this.exec(serviceName, apiName, body ? body : this.formGroup.value)
                .subscribe(function (success) {
                _this.submitSubject$.next(success);
                _this.formGroup.markAsPristine();
                _this.disabled = false;
                if (!disableToastr)
                    _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
            }, function (error) {
                _this.submitSubject$.next(error);
                _this.disabled = false;
                if (!disableToastr)
                    _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
            return this.submitSubject$.asObservable();
        };
        BaseFormComponent.prototype.onDestroy = function () { };
        BaseFormComponent.prototype.onReset = function () { };
        return BaseFormComponent;
    }(BaseComponent));

    var BaseFilterComponent = /** @class */ (function (_super) {
        __extends(BaseFilterComponent, _super);
        function BaseFilterComponent(injector, filtersConfig, controlsConfig) {
            var _this = _super.call(this, injector, controlsConfig) || this;
            _this.injector = injector;
            _this.rows = [];
            if (filtersConfig)
                _this.formGroupFilter = _this.formBuilder.group(filtersConfig);
            return _this;
        }
        BaseFilterComponent.prototype.doFilterAdvanced = function (keyword) {
            this.keyword = keyword;
        };
        return BaseFilterComponent;
    }(BaseFormComponent));

    function fadeIn() {
        return [
            animations.transition(':enter', [
                animations.style({ opacity: 0 }),
                animations.animate('400ms ease-in', animations.style({ opacity: 1 })),
            ]),
        ];
    }

    var SelectResponseModel = /** @class */ (function () {
        function SelectResponseModel() {
            this.disabled = false;
        }
        return SelectResponseModel;
    }());
    var SelectParamModel = /** @class */ (function () {
        function SelectParamModel() {
        }
        return SelectParamModel;
    }());

    var Page = /** @class */ (function () {
        function Page() {
        }
        return Page;
    }());
    var DatatableParamModel = /** @class */ (function () {
        function DatatableParamModel() {
        }
        return DatatableParamModel;
    }());
    var DatatableFilter = /** @class */ (function () {
        function DatatableFilter() {
            this.type = 'input';
        }
        return DatatableFilter;
    }());

    var LeafletModel = /** @class */ (function () {
        function LeafletModel() {
            this.title = '';
            this.alt = '';
        }
        return LeafletModel;
    }());

    exports.BaseComponent = BaseComponent;
    exports.BaseFilterComponent = BaseFilterComponent;
    exports.BaseFormComponent = BaseFormComponent;
    exports.DatatableFilter = DatatableFilter;
    exports.DatatableParamModel = DatatableParamModel;
    exports.DoBaseModule = DoBaseModule;
    exports.DoButtonModule = DoButtonModule;
    exports.DoCalendarModule = DoCalendarModule;
    exports.DoChartsGraphModule = DoChartsGraphModule;
    exports.DoCheckBoxModule = DoCheckBoxModule;
    exports.DoCommonModule = DoCommonModule;
    exports.DoDatePickerModule = DoDatePickerModule;
    exports.DoEditorModule = DoEditorModule;
    exports.DoImageModule = DoImageModule;
    exports.DoInputModule = DoInputModule;
    exports.DoLabelModule = DoLabelModule;
    exports.DoMapsModule = DoMapsModule;
    exports.DoProgressModule = DoProgressModule;
    exports.DoRadioModule = DoRadioModule;
    exports.DoSelectModule = DoSelectModule;
    exports.DoSpinnerModule = DoSpinnerModule;
    exports.DoTableModule = DoTableModule;
    exports.DoToastrModule = DoToastrModule;
    exports.DoToastrService = DoToastrService;
    exports.DoTreeModule = DoTreeModule;
    exports.LeafletModel = LeafletModel;
    exports.Page = Page;
    exports.SelectParamModel = SelectParamModel;
    exports.SelectResponseModel = SelectResponseModel;
    exports.fadeIn = fadeIn;
    exports.ɵa = BASE_COMPONENTS;
    exports.ɵb = BASE_DIRECTIVES;
    exports.ɵba = EqualValidator;
    exports.ɵbb = NotEqualValidator;
    exports.ɵbc = DragDropDirective;
    exports.ɵbd = DoInputTextComponent;
    exports.ɵbe = DoValueAccessor;
    exports.ɵbf = DoValidatorAccessor;
    exports.ɵbg = DoInputBaseIconComponent;
    exports.ɵbh = DoInputIconComponent;
    exports.ɵbi = DoInputCurrencyComponent;
    exports.ɵbj = DoButtonSubmitComponent;
    exports.ɵbk = DoDatePickerComponent;
    exports.ɵbl = DoCheckboxComponent;
    exports.ɵbm = DoRadioComponent;
    exports.ɵbn = MCECoreComponent;
    exports.ɵbo = TinyMCEComponent;
    exports.ɵbp = CaldeiraKnabbenEditorComponent;
    exports.ɵbq = DoTextareaComponent;
    exports.ɵbr = DoChartComponent;
    exports.ɵbs = DoMapsLeafletComponent;
    exports.ɵbt = DoMapsAgmComponent;
    exports.ɵbu = DoSelectComponent;
    exports.ɵbv = ContentSelectDirective;
    exports.ɵbw = DoDatatableComponent;
    exports.ɵbx = DoDatatableBaseComponent;
    exports.ɵby = DoDatatableHeaderComponent;
    exports.ɵbz = DoDatatableCollapseComponent;
    exports.ɵc = CALENDAR_COMPONENTS;
    exports.ɵca = ImageUploadComponent;
    exports.ɵcb = DoTreeComponent;
    exports.ɵcc = DoLabelTextComponent;
    exports.ɵd = CHART_COMPONENTS;
    exports.ɵe = CHECKBOX_COMPONENTS;
    exports.ɵf = BUTTON_COMPONENTS;
    exports.ɵg = DATEPICKER_COMPONENTS;
    exports.ɵh = EDITOR_COMPONENTS;
    exports.ɵi = INPUT_COMPONENTS;
    exports.ɵj = MAPS_COMPONENTS;
    exports.ɵk = PROGRESS_COMPONENTS;
    exports.ɵl = RADIO_COMPONENTS;
    exports.ɵm = SELECT_COMPONENTS;
    exports.ɵn = SELECT_DIRECTIVES;
    exports.ɵo = SPINNER_COMPONENTS;
    exports.ɵp = TABLE_COMPONENTS;
    exports.ɵq = TOASTR_COMPONENTS;
    exports.ɵr = TOASTR_PROVIDERS;
    exports.ɵs = IMAGE_COMPONENTS;
    exports.ɵt = TREE_COMPONENTS;
    exports.ɵu = LABEL_COMPONENTS;
    exports.ɵv = DoPageOutletComponent;
    exports.ɵw = DoContainerOutletComponent;
    exports.ɵx = DoWarnMessageComponent;
    exports.ɵy = DoErrorMessageComponent;
    exports.ɵz = CurrencyMaskDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=dongkap-do-common.umd.js.map
