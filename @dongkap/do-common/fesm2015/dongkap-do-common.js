import { EventEmitter, Component, ViewEncapsulation, Input, Output, ElementRef, Directive, HostListener, Attribute, forwardRef, Injectable, NgModule, HostBinding, Optional, Self, Inject, LOCALE_ID, ChangeDetectorRef, Injector, ViewChild, ContentChild, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { NgControl, NG_VALIDATORS, FormsModule, Validators, ReactiveFormsModule, NG_VALUE_ACCESSOR, FormGroup, FormBuilder } from '@angular/forms';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule, formatDate, DatePipe } from '@angular/common';
import { NbGlobalPhysicalPosition, NbToastrService, NbCardModule, NbIconModule, NbSelectModule, NbCheckboxModule, NbInputModule, NbRadioModule, NbButtonModule, NbCalendarSize, NbDateService, NbDatepickerModule } from '@nebular/theme';
import { Router } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartModule } from 'angular2-chartjs';
import * as echarts from 'echarts';
import { DateFormat, Environment, ENVIRONMENT, HTTP_SERVICE, HttpMethod, LayoutService, DatePattern, API } from '@dongkap/do-core';
import { CKEditorModule } from 'ng2-ckeditor';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { latLng, tileLayer, marker, icon } from 'leaflet';
import { delay, switchMap, takeUntil, map, catchError, take } from 'rxjs/operators';
import { NgSelectModule } from '@ng-select/ng-select';
import { Subject, of, ReplaySubject } from 'rxjs';
import { SortType, SelectionType, ColumnMode, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { NbMomentDateModule } from '@nebular/moment';
import { DomSanitizer } from '@angular/platform-browser';
import { TreeMode, TreeNgxModule } from 'tree-ngx';

class DoPageOutletComponent {
    constructor(router) {
        this.router = router;
        this.width = 12;
        this.selectChange = new EventEmitter();
    }
    back() {
        this.router.navigate([this.url]);
        return false;
    }
    onChangeSelect(event) {
        this.selected = event;
        this.selectChange.emit(event);
    }
}
DoPageOutletComponent.ctorParameters = () => [
    { type: Router }
];
DoPageOutletComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-page-outlet',
                template: "<div class=\"row\">\n  <div class=\"col-lg-{{width}}\">\n    <nb-card>\n      <nb-card-header>\n        <nav class=\"navigation\">\n            <a href=\"#\" (click)=\"back()\" class=\"link back-link\" aria-label=\"Back\" *ngIf=\"url\">\n                <nb-icon icon=\"arrow-back\"></nb-icon>\n            </a>\n            {{header | translate:param}}\n        </nav>\n        <nb-select *ngIf=\"dataSelect\" [selected]=\"selected\" (selectedChange)=\"onChangeSelect($event)\">\n          <nb-option *ngFor=\"let data of dataSelect\" [value]=\"data\">{{ data }}</nb-option>\n        </nb-select>\n      </nb-card-header>\n      <nb-card-body>\n        <ng-content select=\"[pagecontent]\"></ng-content>        \n      </nb-card-body>\n      <ng-content select=\"[pagefooter]\"></ng-content>\n    </nb-card>\n  </div>\n</div>\n    ",
                encapsulation: ViewEncapsulation.None,
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */nb-card-header{display:flex;align-items:center;justify-content:space-between;padding-top:.5rem;padding-bottom:.5rem}.skeleton{-webkit-animation:1.7s linear infinite loading;animation:1.7s linear infinite loading;border-radius:.25rem;background:#dedfe1;background-image:linear-gradient(to right,#dedfe1 0,#f2f3f5 20%,#dedfe1 40%,#dedfe1 100%)}@-webkit-keyframes loading{0%{background-position:-100px}100%{background-position:380px}}@keyframes loading{0%{background-position:-100px}100%{background-position:380px}}.navigation .link{display:inline-block}.navigation .link nb-icon{color:#36f;font-size:1.25rem;vertical-align:middle;margin-right:.25rem}.input-skeleton,.label-skeleton{width:100%;height:2.5rem;line-height:1.5rem;padding:.4375rem 1.125rem}.button-skeleton{width:50%;height:2.5rem;line-height:1rem;padding:.625rem 1.125rem}"]
            },] }
];
DoPageOutletComponent.ctorParameters = () => [
    { type: Router }
];
DoPageOutletComponent.propDecorators = {
    header: [{ type: Input }],
    url: [{ type: Input }],
    width: [{ type: Input }],
    dataSelect: [{ type: Input }],
    selected: [{ type: Input }],
    param: [{ type: Input }],
    selectChange: [{ type: Output }]
};

class DoContainerOutletComponent {
    constructor() {
        this.label = '';
        this.colLabel = 3;
        this.colContent = 9;
        this.nolabel = false;
        this.required = false;
        this.hasErrors = false;
        this.errorMessages = [];
        this.skeleton = false;
    }
}
DoContainerOutletComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-container-outlet',
                template: "<div class=\"form-group row\">\n  <label\n    *ngIf=\"(!skeleton || nolabel);else labelskeleton\"\n    for=\"{{name}}\"\n    class=\"label col-sm-{{colLabel}} col-form-label\">\n    {{label | translate}}{{ (!nolabel) ? ((required) ? ' *' : '') : '' }}\n  </label>\n  <ng-template #labelskeleton>\n    <div class=\"col-sm-{{colLabel}}\">\n      <label\n        class=\"label col-form-label\"\n        [ngClass]=\"{\n          'label-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </label>\n    </div>\n  </ng-template>\n  <ng-content></ng-content>\n  <div class=\"offset-sm-{{colLabel}} col-sm-{{colContent}}\">\n    <do-warn-message *ngIf=\"!skeleton\" [warnMessage]=\"warnMessage\"></do-warn-message>\n    <do-error-message [hasErrors]=\"hasErrors\" [errorMessages]=\"errorMessages\" [param]=\"paramError\">\n    </do-error-message>\n  </div>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            },] }
];
DoContainerOutletComponent.propDecorators = {
    name: [{ type: Input }],
    label: [{ type: Input }],
    colLabel: [{ type: Input }],
    colContent: [{ type: Input }],
    nolabel: [{ type: Input }],
    required: [{ type: Input }],
    hasErrors: [{ type: Input }],
    errorMessages: [{ type: Input }],
    warnMessage: [{ type: Input }],
    paramError: [{ type: Input }],
    skeleton: [{ type: Input }]
};

class DoWarnMessageComponent {
}
DoWarnMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-warn-message',
                template: "<div *ngIf=\"warnMessage\">\n    <span class=\"caption status-warning warn-message\">{{warnMessage | translate}}</span>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".warn-message{font-style:italic}"]
            },] }
];
DoWarnMessageComponent.propDecorators = {
    warnMessage: [{ type: Input }],
    param: [{ type: Input }]
};

class DoErrorMessageComponent {
    constructor() {
        this.hasErrors = false;
        this.errorMessages = [];
    }
}
DoErrorMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-error-message',
                template: "<div *ngIf=\"hasErrors\">\n  <div *ngFor=\"let message of errorMessages\">\n    <span class=\"caption status-danger\">{{message | translate:param}}</span>\n  </div>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            },] }
];
DoErrorMessageComponent.propDecorators = {
    hasErrors: [{ type: Input }],
    errorMessages: [{ type: Input }],
    param: [{ type: Input }]
};

class CurrencyMaskDirective {
    constructor(ngControl, el) {
        this.ngControl = ngControl;
        this.el = el;
        this.prefix = 'Rp';
        this.decimalSeparator = '.';
        this.thousandsSeparator = ',';
        this.suffix = ',-';
        this.padding = 5;
    }
    onFocus(value, event) {
        value = value ? value : this.prefix.concat(' ');
        value = this.onLeave(value.replace(this.suffix, ''));
        event.target.toNumber = this.toNumber(value);
        this.ngControl.valueAccessor.writeValue(value);
    }
    onBlur(value, event) {
        value = value.replace(/\D/g, '') ? this.onLeave(value).concat(this.suffix) : '';
        event.target.toNumber = this.toNumber(value);
        this.ngControl.valueAccessor.writeValue(value);
    }
    onModelChange(value) {
        value = this.toNumber(value);
        value = value.replace(new RegExp('[^0-9|^' + this.decimalSeparator + '|^-]', 'g'), '');
        if (value.toString().match(new RegExp('^\-?[0-9]*(' + this.decimalSeparator + '[0-9]*)?$', 'g'))) {
            let { val, frac } = this.onInputChange(value);
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
    }
    onKeyDown(event) {
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
    }
    onLeave(value) {
        const { val, frac } = this.onInputChange(value);
        let fraction = '';
        if (frac) {
            if (parseInt(frac, 10) > 0) {
                fraction = this.decimalSeparator + this.pad(frac, this.padding).substring(0, this.padding);
            }
        }
        return this.onTransform(val, fraction);
    }
    onInputChange(value) {
        const [val = '', fraction = ''] = (value || '').split(this.decimalSeparator);
        return { val: val, frac: fraction };
    }
    onTransform(val, fraction) {
        val = val.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return val + fraction;
    }
    toNumber(val) {
        return val
            .replace(this.prefix, '')
            .replace(' ', '')
            .replace(this.suffix, '')
            .replace(new RegExp(this.thousandsSeparator, 'g'), '');
    }
    pad(val, size) {
        while (val.length < size)
            val = val + '0';
        return val;
    }
}
CurrencyMaskDirective.ctorParameters = () => [
    { type: NgControl },
    { type: ElementRef }
];
CurrencyMaskDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[doCurrency]',
            },] }
];
CurrencyMaskDirective.ctorParameters = () => [
    { type: NgControl },
    { type: ElementRef }
];
CurrencyMaskDirective.propDecorators = {
    prefix: [{ type: Input, args: ['prefix',] }],
    decimalSeparator: [{ type: Input, args: ['decimal',] }],
    thousandsSeparator: [{ type: Input, args: ['thousand',] }],
    suffix: [{ type: Input, args: ['suffix',] }],
    padding: [{ type: Input, args: ['padding',] }],
    onFocus: [{ type: HostListener, args: ['focus', ['$event.target.value', '$event'],] }],
    onBlur: [{ type: HostListener, args: ['blur', ['$event.target.value', '$event'],] }],
    onModelChange: [{ type: HostListener, args: ['ngModelChange', ['$event'],] }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};

class EqualValidator {
    constructor(validateEqual) {
        this.validateEqual = validateEqual;
    }
    validate(c) {
        const v = c.value;
        const e = c.root.get(this.validateEqual);
        if (e && v !== e.value && v) {
            return { equal: false };
        }
        return null;
    }
}
EqualValidator.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['doValidateEqual',] }] }
];
EqualValidator.decorators = [
    { type: Directive, args: [{
                selector: '[doValidateEqual][formControlName],[doValidateEqual][formControl],[doValidateEqual][ngModel]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true },
                ],
            },] }
];
EqualValidator.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['doValidateEqual',] }] }
];

class NotEqualValidator {
    constructor(validateNotEqual) {
        this.validateNotEqual = validateNotEqual;
    }
    validate(c) {
        const v = c.value;
        const e = c.root.get(this.validateNotEqual);
        if (e && v === e.value && v) {
            return { equal: true };
        }
        return null;
    }
}
NotEqualValidator.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['doValidateNotEqual',] }] }
];
NotEqualValidator.decorators = [
    { type: Directive, args: [{
                selector: '[doValidateNotEqual][formControlName],[doValidateNotEqual][formControl],[doValidateNotEqual][ngModel]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NotEqualValidator), multi: true },
                ],
            },] }
];
NotEqualValidator.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['doValidateNotEqual',] }] }
];

class DoToastrService {
    constructor(toastrService, translate) {
        this.toastrService = toastrService;
        this.translate = translate;
        this.status = 'success';
        this.position = NbGlobalPhysicalPosition.TOP_RIGHT;
        this.duration = 5000;
        this.hasIcon = true;
        this.destroyByClick = true;
        this.preventDuplicates = false;
    }
    show(content, title, status, position, duration, hasIcon, destroyByClick) {
        if (!title)
            title = this.title(status);
        this.build(content, title, status, position, duration, hasIcon, destroyByClick);
    }
    showI18n(content, contentHasI18n, title, status, position, duration, hasIcon, destroyByClick) {
        if (!title)
            title = this.title(status);
        this.translate.get(title).subscribe((resultTitle) => {
            title = resultTitle;
            if (contentHasI18n) {
                this.build(content, title, status, position, duration, hasIcon, destroyByClick);
            }
            else {
                this.translate.get(content).subscribe((resultContent) => {
                    this.build(resultContent, title, status, position, duration, hasIcon, destroyByClick);
                });
            }
        });
    }
    build(content, title, status, position, duration, hasIcon, destroyByClick) {
        this.toastrService.show(content, title, {
            status: status ? status : this.status,
            position: position ? position : this.position,
            duration: duration ? duration : this.duration,
            hasIcon: hasIcon ? hasIcon : this.hasIcon,
            destroyByClick: destroyByClick ? destroyByClick : this.destroyByClick,
            preventDuplicates: this.preventDuplicates,
        });
    }
    title(status) {
        let title = 'Success';
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
    }
}
DoToastrService.ctorParameters = () => [
    { type: NbToastrService },
    { type: TranslateService }
];
DoToastrService.decorators = [
    { type: Injectable }
];
DoToastrService.ctorParameters = () => [
    { type: NbToastrService },
    { type: TranslateService }
];

const TOASTR_COMPONENTS = [];
const TOASTR_PROVIDERS = [
    DoToastrService,
];
class DoToastrModule {
    static forRoot() {
        return {
            ngModule: DoToastrModule,
            providers: [
                ...TOASTR_PROVIDERS,
            ],
        };
    }
}
DoToastrModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule,
                ],
                declarations: [
                    ...TOASTR_COMPONENTS,
                ],
                exports: [
                    ...TOASTR_COMPONENTS,
                ],
            },] }
];

class DragDropDirective {
    constructor() {
        this.onFileDropped = new EventEmitter();
        this.opacity = '0.7';
        this.background = '#f7f9fc';
        this.styleOpacity = '0.7';
    }
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#edf1f7';
        this.styleOpacity = '0.5';
        this.opacity = this.styleOpacity;
    }
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f7f9fc';
        this.styleOpacity = '0.7';
        this.opacity = this.styleOpacity;
    }
    ondrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f7f9fc';
        this.styleOpacity = '0.7';
        this.opacity = this.styleOpacity;
        const files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.onFileDropped.emit(files);
        }
    }
    onMouseOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f7f9fc';
        this.styleOpacity = '0.5';
        this.opacity = this.styleOpacity;
    }
    onMouseLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f7f9fc';
        this.styleOpacity = '0.7';
        this.opacity = this.styleOpacity;
    }
}
DragDropDirective.decorators = [
    { type: Directive, args: [{
                selector: '[doDragDrop]',
            },] }
];
DragDropDirective.propDecorators = {
    onFileDropped: [{ type: Output }],
    opacity: [{ type: Input }],
    background: [{ type: HostBinding, args: ['style.background-color',] }],
    styleOpacity: [{ type: HostBinding, args: ['style.opacity',] }],
    onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
    onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }],
    ondrop: [{ type: HostListener, args: ['drop', ['$event'],] }],
    onMouseOver: [{ type: HostListener, args: ['mouseover', ['$event'],] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }]
};

const BASE_COMPONENTS = [
    DoPageOutletComponent,
    DoContainerOutletComponent,
    DoWarnMessageComponent,
    DoErrorMessageComponent,
];
const BASE_DIRECTIVES = [
    CurrencyMaskDirective,
    EqualValidator,
    NotEqualValidator,
    DragDropDirective,
];
class DoBaseModule {
}
DoBaseModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    TranslateModule,
                    NbCardModule,
                    NbIconModule,
                    NbSelectModule,
                    DoToastrModule.forRoot(),
                ],
                declarations: [
                    ...BASE_COMPONENTS,
                    ...BASE_DIRECTIVES,
                ],
                exports: [
                    ...BASE_COMPONENTS,
                    ...BASE_DIRECTIVES,
                    TranslateModule,
                ],
            },] }
];

const CALENDAR_COMPONENTS = [];
class DoCalendarModule {
}
DoCalendarModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule,
                ],
                declarations: [
                    ...CALENDAR_COMPONENTS,
                ],
                exports: [
                    ...CALENDAR_COMPONENTS,
                ],
            },] }
];

class DoChartComponent {
    constructor() {
        this.options = {};
    }
    set optionsFn(options) {
        this.options = options;
    }
}
DoChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-chart',
                template: "<div echarts [options]=\"options\" class=\"echart\"></div>",
                styles: [".nb-theme-default :host do-chart{display:block;height:28.875rem;width:100%}.nb-theme-default :host ::ng-deep .echart{height:100%;width:100%}.nb-theme-dark :host do-chart{display:block;height:28.875rem;width:100%}.nb-theme-dark :host ::ng-deep .echart{height:100%;width:100%}.nb-theme-cosmic :host do-chart{display:block;height:28.875rem;width:100%}.nb-theme-cosmic :host ::ng-deep .echart{height:100%;width:100%}.nb-theme-corporate :host do-chart{display:block;height:28.875rem;width:100%}.nb-theme-corporate :host ::ng-deep .echart{height:100%;width:100%}"]
            },] }
];
DoChartComponent.propDecorators = {
    optionsFn: [{ type: Input }],
    options: [{ type: Input }]
};

const CHART_COMPONENTS = [
    DoChartComponent,
];
class DoChartsGraphModule {
}
DoChartsGraphModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    NgxChartsModule,
                    ChartModule,
                    NgxEchartsModule.forRoot({
                        echarts,
                    }),
                ],
                declarations: [
                    ...CHART_COMPONENTS,
                ],
                exports: [
                    ...CHART_COMPONENTS,
                ],
            },] }
];

class DoValidatorAccessor {
    constructor(ngControl) {
        this.ngControl = ngControl;
        this.label = '';
        this.nolabel = false;
        this.disabled = false;
        this.required = false;
        this.onChange = (_) => { };
        this.onTouched = (_) => { };
        ngControl && (ngControl.valueAccessor = this);
    }
    onInit() { }
    ngOnInit() {
        this.onInit();
        const control = this.ngControl.control;
        const validators = control.validator ? [control.validator] : [];
        if (this.ngControl.control.errors) {
            this.required = this.ngControl.control.errors['required'];
        }
        if (this.required) {
            validators.push(Validators.required);
        }
        if (this.pattern) {
            validators.push(Validators.pattern(this.pattern));
        }
        control.setValidators(validators);
        control.updateValueAndValidity();
    }
    validate(c) {
        const validators = [];
        if (this.required) {
            validators.push(Validators.required);
        }
        if (this.pattern) {
            validators.push(Validators.pattern(this.pattern));
        }
        return validators;
    }
    get hasErrors() {
        return (!this.disabled &&
            this.ngControl.control &&
            this.ngControl.control.invalid &&
            this.ngControl.touched);
    }
    get hasSuccess() {
        return (!this.disabled &&
            this.ngControl.control &&
            this.ngControl.control.valid &&
            this.ngControl.touched);
    }
    get errorMessages() {
        const errors = [];
        if (this.ngControl.errors)
            Object.keys(this.ngControl.errors).forEach(property => {
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
                        errors.push('error.'.concat(property).concat('.').concat(this.name));
                        break;
                }
            });
        return errors;
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
DoValidatorAccessor.ctorParameters = () => [
    { type: NgControl }
];
DoValidatorAccessor.decorators = [
    { type: Directive }
];
DoValidatorAccessor.ctorParameters = () => [
    { type: NgControl }
];
DoValidatorAccessor.propDecorators = {
    name: [{ type: Input }],
    pattern: [{ type: Input }],
    label: [{ type: Input }],
    nolabel: [{ type: Input }],
    disabled: [{ type: Input }],
    required: [{ type: Input }],
    paramError: [{ type: Input }],
    warnMessage: [{ type: Input }]
};

class DoValueAccessor extends DoValidatorAccessor {
    constructor(ngControl, locale) {
        super(ngControl);
        this.ngControl = ngControl;
        this.locale = locale;
        this.format = DateFormat.DATE;
        this.skeleton = false;
    }
    get value() { return this._value; }
    set value(value) {
        if (this._value !== value) {
            this._value = value;
            if (value instanceof Date)
                this.onChange(formatDate(value, this.format, this.locale));
            else
                this.onChange(value);
            const control = this.ngControl.control;
            if (control) {
                control.updateValueAndValidity();
                control.markAsTouched();
                control.markAsDirty();
            }
        }
    }
    writeValue(value) {
        this._value = value;
        this.onChange(this.value);
        const control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsUntouched();
            control.markAsPristine();
        }
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(isDisabled) { this.disabled = isDisabled; }
}
DoValueAccessor.ctorParameters = () => [
    { type: NgControl },
    { type: String }
];
DoValueAccessor.decorators = [
    { type: Directive }
];
DoValueAccessor.ctorParameters = () => [
    { type: NgControl },
    { type: String }
];
DoValueAccessor.propDecorators = {
    format: [{ type: Input }],
    skeleton: [{ type: Input }]
};

class DoCheckboxComponent extends DoValueAccessor {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.onChecked = new EventEmitter();
    }
    onCheckedChange() {
        if (!this.value) {
            this.value = this.data;
        }
        if (Array.isArray(this.value).valueOf()) {
            let isChecked = false;
            Array.from(this.value).forEach((value) => {
                if (value.selected) {
                    isChecked = value.selected;
                }
            });
            if (this.required) {
                if (!isChecked) {
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
    }
}
DoCheckboxComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
DoCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-checkbox',
                template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <nb-checkbox\n      [ngClass]=\"{\n        'status-danger': hasErrors\n      }\"\n      *ngFor=\"let item of (value || data)\"\n      [disabled]=\"item.disabled || disabled\"\n      [checked]=\"item.selected\"\n      [(ngModel)]=\"item.selected\"\n      (change)=\"onCheckedChange()\">\n      {{item.name | translate}}\n    </nb-checkbox>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                styles: [""]
            },] }
];
DoCheckboxComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
DoCheckboxComponent.propDecorators = {
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    data: [{ type: Input }],
    onChecked: [{ type: Output }]
};

const CHECKBOX_COMPONENTS = [
    DoCheckboxComponent,
];
class DoCheckBoxModule {
}
DoCheckBoxModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    NbCheckboxModule,
                    TranslateModule,
                    DoBaseModule,
                ],
                declarations: [
                    ...CHECKBOX_COMPONENTS,
                ],
                exports: [
                    ...CHECKBOX_COMPONENTS,
                    NbCheckboxModule,
                ],
            },] }
];

class TinyMCEComponent extends DoValueAccessor {
    constructor(ngControl, locale, element) {
        super(ngControl, locale);
        this.locale = locale;
        this.element = element;
        this.colLabel = 3;
        this.colInput = 9;
        this.plugins = ['link', 'paste', 'table'];
        this.height = 320;
        this.id = 'tinyMce';
    }
    editorChange(element) {
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
    }
}
TinyMCEComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: ElementRef }
];
TinyMCEComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-tiny-mce',
                template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <do-mce-core\n      [id]=\"id\"\n      [name]=\"name\"\n      [required]=\"required\"\n      [readonly]=\"disabled\"\n      [plugins]=\"plugins\"\n      [height]=\"height\"\n      [value]=\"value\"\n      [(ngModel)]=\"value\"\n      (change)=\"onChange($event)\"\n      (focus)=\"onTouched($event)\"\n      (editorchange)=\"editorChange($event.target.contentAreaContainer)\"\n      (focus)=\"editorChange($event.target.contentAreaContainer)\"\n      (blur)=\"editorChange($event.target.contentAreaContainer)\">\n    </do-mce-core>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'skeleton': skeleton\n        }\"\n        [ngStyle]=\"{ \n          'width':  '100%',\n          'height':  height + 'px'\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: [".tox-edit-area.status-danger{border:1px solid #ff3d71!important;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #fde6e8}"]
            },] }
];
TinyMCEComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: ElementRef }
];
TinyMCEComponent.propDecorators = {
    placeholder: [{ type: Input }],
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    plugins: [{ type: Input }],
    height: [{ type: Input }],
    id: [{ type: Input }]
};

class CaldeiraKnabbenEditorComponent extends DoValueAccessor {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.minLength = 0;
        this.maxLength = 100;
        this.height = 320;
        this.config = {
            skin: 'bootstrapck',
            height: this.height,
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
            removeButtons: `Source,Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,
                    PasteText,PasteFromWord,Undo,Redo,Find,Replace,SelectAll,Scayt,
                    Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,
                    HiddenField,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,
                    Outdent,Indent,CreateDiv,Blockquote,BidiLtr,BidiRtl,Language,Unlink,
                    Anchor,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,
                    Iframe,Maximize,ShowBlocks,About`,
        };
    }
    editorChange(element) {
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
    }
    ngOnDestroy() { }
}
CaldeiraKnabbenEditorComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
CaldeiraKnabbenEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-ckeditor',
                template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <ckeditor\n        [config]=\"config\"\n        [readonly]=\"disabled\"\n        [required]=\"required\"\n        [(ngModel)]=\"value\"\n        (change)=\"onChange($event)\"\n        (blur)=\"onTouched($event)\"\n        (blur)=\"editorChange($event.editor.ui.contentsElement)\"\n        (focus)=\"editorChange($event.editor.ui.contentsElement)\"\n        (editorChange)=\"editorChange($event.editor.ui.contentsElement)\"\n        debounce=\"500\"\n        #ckeditor>\n    </ckeditor>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'skeleton': skeleton\n        }\"\n        [ngStyle]=\"{ \n          'width':  '100%',\n          'height':  height + 'px'\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: [".cke_contents.status-danger{border:1px solid #ff3d71!important;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #fde6e8}"]
            },] }
];
CaldeiraKnabbenEditorComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
CaldeiraKnabbenEditorComponent.propDecorators = {
    placeholder: [{ type: Input }],
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    minLength: [{ type: Input }],
    maxLength: [{ type: Input }],
    height: [{ type: Input }],
    config: [{ type: Input }]
};

class MCECoreComponent {
    constructor(host, envi) {
        this.host = host;
        this.envi = envi;
        this.plugins = ['link', 'paste', 'table'];
        this.height = 320;
        this.id = 'tinyMce';
        this.readonly = false;
        this.change = new EventEmitter();
        this.editorchange = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.onChange = (_) => { };
        this.onTouched = (_) => { };
    }
    ngAfterViewInit() {
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
            setup: editor => {
                this.editor = editor;
                editor.on('keyup', (event) => {
                    this.value = editor.getContent();
                    this.change.emit(this.value);
                    this.editorchange.emit(event);
                });
                editor.on('focus', (event) => {
                    this.focus.emit(event);
                });
                editor.on('blur', (event) => {
                    this.blur.emit(event);
                });
            },
            init_instance_callback: (editor) => {
                editor && this.value && this.editor.setContent(this.value);
            },
        });
    }
    ngOnDestroy() {
        tinymce.remove(this.editor);
    }
    get value() { return this._value; }
    set value(value) {
        if (this._value !== value) {
            this._value = value;
            this.onChange(value);
        }
    }
    writeValue(value) {
        if (value) {
            this._value = value;
            this.onChange(this.value);
        }
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
}
MCECoreComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Environment, decorators: [{ type: Inject, args: [ENVIRONMENT,] }] }
];
MCECoreComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-mce-core',
                template: '<div id="{{id}}"></div>',
                encapsulation: ViewEncapsulation.None,
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => MCECoreComponent),
                        multi: true,
                    }]
            },] }
];
MCECoreComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Environment, decorators: [{ type: Inject, args: [ENVIRONMENT,] }] }
];
MCECoreComponent.propDecorators = {
    plugins: [{ type: Input }],
    height: [{ type: Input }],
    id: [{ type: Input }],
    readonly: [{ type: Input }],
    _value: [{ type: Input, args: ['value',] }],
    change: [{ type: Output }],
    editorchange: [{ type: Output }],
    focus: [{ type: Output }],
    blur: [{ type: Output }]
};

class DoTextareaComponent extends DoValueAccessor {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.minLength = 0;
        this.maxLength = 250;
        this.height = 120;
    }
    onInit() {
        this.paramError = {
            value: this.minLength,
        };
    }
    ngOnDestroy() { }
}
DoTextareaComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
DoTextareaComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-textarea',
                template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <textarea \n      id=\"{{name}}\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [required]=\"required\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': hasSuccess\n      }\"\n      [ngStyle]=\"{ \n        'width':  '100%',\n        'height':  height + 'px'\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onTouched($event.target.value)\"\n      [(ngModel)]=\"value\"\n      nbInput fullWidth>\n    </textarea>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'skeleton': skeleton\n        }\"\n        [ngStyle]=\"{ \n          'width':  '100%',\n          'height':  height + 'px'\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            },] }
];
DoTextareaComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
DoTextareaComponent.propDecorators = {
    placeholder: [{ type: Input }],
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    minLength: [{ type: Input }],
    maxLength: [{ type: Input }],
    height: [{ type: Input }]
};

const EDITOR_COMPONENTS = [
    MCECoreComponent,
    TinyMCEComponent,
    CaldeiraKnabbenEditorComponent,
    DoTextareaComponent,
];
class DoEditorModule {
}
DoEditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CKEditorModule,
                    TranslateModule,
                    NbInputModule,
                    DoBaseModule,
                ],
                declarations: [
                    ...EDITOR_COMPONENTS,
                ],
                exports: [
                    ...EDITOR_COMPONENTS,
                ],
            },] }
];

class DoInputTextComponent extends DoValueAccessor {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.minLength = 0;
        this.maxLength = 100;
        this.min = 0;
        this.max = 999;
        this.step = 1;
        this.capslock = false;
        this.type = 'text';
    }
    onKeyUp(event) {
        if (this.capslock) {
            this.value = this.value.toUpperCase();
        }
    }
    onKeyDown(event) {
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
    }
}
DoInputTextComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
DoInputTextComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-input-text',
                template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"{{type}}\"\n      id=\"{{name}}\"\n      [step]=\"step\"\n      [pattern]=\"pattern\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required),\n        'input-capslock': capslock\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onTouched($event.target.value)\"\n      (keydown)=\"onKeyDown($event)\"\n      (keypress)=\"onKeyUp($event)\"\n      [(ngModel)]=\"value\"\n      #input nbInput fullWidth>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: [".input-capslock{text-transform:uppercase}"]
            },] }
];
DoInputTextComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
DoInputTextComponent.propDecorators = {
    placeholder: [{ type: Input }],
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    minLength: [{ type: Input }],
    maxLength: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    step: [{ type: Input }],
    capslock: [{ type: Input }],
    type: [{ type: Input }]
};

class DoInputCurrencyComponent extends DoValueAccessor {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.minLength = 0;
        this.maxLength = 100;
        this.prefix = 'Rp';
        this.decimalSeparator = '.';
        this.thousandsSeparator = ',';
        this.suffix = ',-';
        this.padding = 5;
    }
    writeValue(value) {
        this._value = value ? this.transform(value) : value;
        this.onChange(this.value);
        const control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsTouched();
            control.markAsDirty();
        }
    }
    transform(value) {
        const { val, frac } = this.toNumber(value);
        const v = val.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return this.prefix.concat(' ').concat(v).concat(frac).concat(this.suffix);
    }
    toNumber(value) {
        const [val = '', frac = ''] = (value || '').split(this.decimalSeparator);
        let fraction = '';
        if (frac) {
            if (parseInt(frac, 10) > 0) {
                fraction = this.decimalSeparator + this.pad(frac, this.padding).substring(0, this.padding);
            }
        }
        return { val: val, frac: fraction };
    }
    pad(val, size) {
        while (val.length < size)
            val = val + '0';
        return val;
    }
}
DoInputCurrencyComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
DoInputCurrencyComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-input-currency',
                template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"text\"\n      id=\"{{name}}\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled || skeleton\"\n      [ngClass]=\"{\n        'skeleton': skeleton,\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.toNumber)\"\n      (change)=\"onChange($event.target.toNumber)\"\n      (blur)=\"onTouched($event.target.toNumber)\"\n      [(ngModel)]=\"value\"\n      doCurrency\n      [prefix]=\"prefix\"\n      [decimal]=\"decimalSeparator\"\n      [thousand]=\"thousandsSeparator\"\n      [suffix]=\"suffix\"\n      [padding]=\"padding\"\n      #input nbInput fullWidth>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            },] }
];
DoInputCurrencyComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
DoInputCurrencyComponent.propDecorators = {
    placeholder: [{ type: Input }],
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    minLength: [{ type: Input }],
    maxLength: [{ type: Input }],
    prefix: [{ type: Input, args: ['prefix',] }],
    decimalSeparator: [{ type: Input, args: ['decimal',] }],
    thousandsSeparator: [{ type: Input, args: ['thousand',] }],
    suffix: [{ type: Input, args: ['suffix',] }],
    padding: [{ type: Input, args: ['padding',] }]
};

class DoInputIconComponent extends DoValueAccessor {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.minLength = 0;
        this.maxLength = 100;
        this.type = 'text';
        this.iconcursor = false;
        this.eva = false;
        this.icon = 'search-outline';
        this.clickIcon = new EventEmitter();
        this.focus = new EventEmitter();
    }
    onClickIcon() {
        if (this.iconcursor)
            this.clickIcon.emit(this.value);
    }
    onFocus(value) {
        this.focus.emit(value);
        this.onTouched(value);
    }
}
DoInputIconComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
DoInputIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-input-icon',
                template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}} input-group\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"{{type}}\"\n      id=\"{{name}}\"\n      [pattern]=\"pattern\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onFocus($event.target.value)\"\n      [(ngModel)]=\"value\"\n      #input nbInput fullWidth>\n      <div\n        class=\"xinput-icon\"\n        [ngStyle]=\"{\n          'cursor': iconcursor ? 'pointer' : 'unset'\n        }\">\n        <span class=\"{{icon}}\" *ngIf=\"!eva\"></span>\n        <nb-icon class=\"xinput-icon-hover\" icon=\"{{icon}}\" (click)=\"onClickIcon()\" *ngIf=\"eva\"></nb-icon>\n      </div>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: ["nb-icon{color:#8f9bb3}.xinput-icon{position:absolute;right:0;margin:.6rem 1.5rem 0 0}.xinput-icon-hover:hover{color:#598bff}"]
            },] }
];
DoInputIconComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
DoInputIconComponent.propDecorators = {
    placeholder: [{ type: Input }],
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    minLength: [{ type: Input }],
    maxLength: [{ type: Input }],
    type: [{ type: Input }],
    iconcursor: [{ type: Input }],
    eva: [{ type: Input }],
    icon: [{ type: Input }],
    clickIcon: [{ type: Output }],
    focus: [{ type: Output }]
};

class DoInputBaseIconComponent extends DoValueAccessor {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.minLength = 0;
        this.maxLength = 100;
        this.iconcursor = false;
        this.icon = 'search-outline';
        this.type = 'text';
        this.clickIcon = new EventEmitter();
        this.focus = new EventEmitter();
    }
    onClickIcon() {
        if (this.iconcursor)
            this.clickIcon.emit(this.value);
    }
    onFocus(value) {
        this.focus.emit(value);
        this.onTouched(value);
    }
}
DoInputBaseIconComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
DoInputBaseIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-input-base-icon',
                template: "<div class=\"input-group\">\n  <input\n    type=\"{{type}}\"\n    id=\"{{name}}\"\n    [pattern]=\"pattern\"\n    [minLength]=\"minLength\"\n    [maxLength]=\"maxLength\"\n    [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [ngClass]=\"{\n      'status-danger': hasErrors,\n      'status-success': hasSuccess\n    }\"\n    (input)=\"onChange($event.target.value)\"\n    (change)=\"onChange($event.target.value)\"\n    (blur)=\"onTouched($event.target.value)\"\n    (focus)=\"onFocus($event.target.value)\"\n    [(ngModel)]=\"value\"\n    #input nbInput fullWidth>\n  <div\n    class=\"input-icon\"\n    [ngStyle]=\"{\n      'cursor': iconcursor ? 'pointer' : 'unset'\n    }\">\n    <nb-icon class=\"input-icon-hover\" icon=\"{{icon}}\" (click)=\"onClickIcon()\"></nb-icon>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["nb-icon{color:#8f9bb3}.input-icon{position:absolute;right:0;padding:10px}.input-icon-hover:hover{color:#598bff}"]
            },] }
];
DoInputBaseIconComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
DoInputBaseIconComponent.propDecorators = {
    placeholder: [{ type: Input }],
    minLength: [{ type: Input }],
    maxLength: [{ type: Input }],
    iconcursor: [{ type: Input }],
    icon: [{ type: Input }],
    type: [{ type: Input }],
    clickIcon: [{ type: Output }],
    focus: [{ type: Output }]
};

const INPUT_COMPONENTS = [
    DoInputTextComponent,
    DoInputBaseIconComponent,
    DoInputIconComponent,
    DoInputCurrencyComponent,
];
class DoInputModule {
}
DoInputModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    NbInputModule,
                    NbIconModule,
                    TranslateModule,
                    DoBaseModule,
                ],
                declarations: [
                    ...INPUT_COMPONENTS,
                ],
                exports: [
                    ...INPUT_COMPONENTS,
                    NbInputModule,
                ],
            },] }
];

class DoMapsLeafletComponent {
    constructor() {
        this.defaultLatLng = latLng({ lat: -2.3641701, lng: 117.7690927 });
        this.zoom = 4.5;
        this.height = 25;
        this.options = {
            layers: [
                tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Civilians Emergency Report' }),
            ],
            zoom: this.zoom,
            center: this.defaultLatLng,
        };
        this.layers = [];
        this.onMarkerClick = new EventEmitter();
    }
    set markersFn(markers) {
        if (markers) {
            this.layers = [];
            markers.forEach(marker$1 => {
                this.layers.push(marker(marker$1.mark, {
                    icon: icon({
                        iconUrl: `${document.getElementsByTagName('base')[0].href}assets/map/marker-icon.png`,
                        shadowUrl: `${document.getElementsByTagName('base')[0].href}assets/map/marker-shadow.png`,
                        iconSize: [27.5, 40],
                        iconAnchor: [20, 40],
                        popupAnchor: [0, -40],
                        className: marker$1.className,
                    }),
                    title: marker$1.title,
                    alt: marker$1.alt,
                }).on('click', this.markerClick.bind(this)));
            });
        }
    }
    ngOnInit() {
    }
    markerClick(event) {
        const latlng = event.latlng;
        const title = event.target.options.title;
        const alt = event.target.options.alt;
        this.onMarkerClick.emit({
            mark: latlng,
            title: title,
            alt: alt,
        });
        delay(200);
        this.map.setView([latlng.lat, latlng.lng], 15);
    }
    onMapReady(map) {
        this.map = map;
    }
}
DoMapsLeafletComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-maps-leaflet',
                template: "<div\n  id=\"leafletmap\"\n  [ngStyle]=\"{\n    'height': height + 'rem'\n  }\"\n  leaflet\n  [leafletOptions]=\"options\"\n  [leafletLayers]=\"layers\"\n  (leafletMapReady)=\"onMapReady($event)\">\n</div>",
                styles: [".nb-theme-default :host ::ng-deep .leaflet-bottom,.nb-theme-default :host ::ng-deep .leaflet-top{z-index:997}.nb-theme-default :host ::ng-deep .leaflet-container{width:100%;height:36.5625rem}.nb-theme-default :host ::ng-deep .pulse{-webkit-animation:1s ease-out infinite pulsate;animation:1s ease-out infinite pulsate;opacity:0}@-webkit-keyframes pulsate{0%,100%{opacity:0}50%{opacity:1}}.nb-theme-dark :host ::ng-deep .leaflet-bottom,.nb-theme-dark :host ::ng-deep .leaflet-top{z-index:997}.nb-theme-dark :host ::ng-deep .leaflet-container{width:100%;height:36.5625rem}.nb-theme-dark :host ::ng-deep .pulse{-webkit-animation:1s ease-out infinite pulsate;animation:1s ease-out infinite pulsate;opacity:0}.nb-theme-cosmic :host ::ng-deep .leaflet-bottom,.nb-theme-cosmic :host ::ng-deep .leaflet-top{z-index:997}.nb-theme-cosmic :host ::ng-deep .leaflet-container{width:100%;height:36.5625rem}.nb-theme-cosmic :host ::ng-deep .pulse{-webkit-animation:1s ease-out infinite pulsate;animation:1s ease-out infinite pulsate;opacity:0}.nb-theme-corporate :host ::ng-deep .leaflet-bottom,.nb-theme-corporate :host ::ng-deep .leaflet-top{z-index:997}.nb-theme-corporate :host ::ng-deep .leaflet-container{width:100%;height:36.5625rem}.nb-theme-corporate :host ::ng-deep .pulse{-webkit-animation:1s ease-out infinite pulsate;animation:1s ease-out infinite pulsate;opacity:0}@keyframes pulsate{0%,100%{opacity:0}50%{opacity:1}}"]
            },] }
];
DoMapsLeafletComponent.propDecorators = {
    height: [{ type: Input }],
    options: [{ type: Input }],
    layers: [{ type: Input }],
    markersFn: [{ type: Input }],
    onMarkerClick: [{ type: Output }]
};

class DoMapsAgmComponent {
    constructor() {
        this.lat = -2.3641701;
        this.lng = 117.7690927;
    }
}
DoMapsAgmComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-maps-agm',
                template: "<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>",
                styles: [".nb-theme-default :host ::ng-deep agm-map{width:100%;height:36.5625rem}.nb-theme-dark :host ::ng-deep agm-map{width:100%;height:36.5625rem}.nb-theme-cosmic :host ::ng-deep agm-map{width:100%;height:36.5625rem}.nb-theme-corporate :host ::ng-deep agm-map{width:100%;height:36.5625rem}"]
            },] }
];

const MAPS_COMPONENTS = [
    DoMapsLeafletComponent,
    DoMapsAgmComponent,
];
class DoMapsModule {
}
DoMapsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    AgmCoreModule.forRoot({
                        apiKey: 'AIzaSyB3ctAGo_z3FNOVWquijMGBgesM1XlRa-Y',
                        libraries: ['places'],
                    }),
                    LeafletModule.forRoot(),
                    NbCardModule,
                ],
                declarations: [
                    ...MAPS_COMPONENTS,
                ],
                exports: [
                    ...MAPS_COMPONENTS,
                ],
            },] }
];

const PROGRESS_COMPONENTS = [];
class DoProgressModule {
}
DoProgressModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule,
                ],
                declarations: [
                    ...PROGRESS_COMPONENTS,
                ],
                exports: [
                    ...PROGRESS_COMPONENTS,
                ],
            },] }
];

class DoRadioComponent extends DoValueAccessor {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
    }
    onInit() {
        if (!this.value && this.data)
            this.value = this.data[0].value;
    }
}
DoRadioComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
DoRadioComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-radio',
                template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <nb-radio-group\n      [(value)]=\"value\"\n      [name]=\"name\"\n      [disabled]=\"disabled\"\n      #radiogroup>\n      <nb-radio *ngFor=\"let item of data\"\n        [value]=\"item.value\">\n        {{item.name | translate}}\n      </nb-radio>\n    </nb-radio-group>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            },] }
];
DoRadioComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
DoRadioComponent.propDecorators = {
    placeholder: [{ type: Input }],
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    data: [{ type: Input }]
};

const RADIO_COMPONENTS = [
    DoRadioComponent,
];
class DoRadioModule {
}
DoRadioModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    TranslateModule,
                    NbRadioModule,
                    DoBaseModule,
                ],
                declarations: [
                    ...RADIO_COMPONENTS,
                ],
                exports: [
                    ...RADIO_COMPONENTS,
                ],
            },] }
];

class ContentSelectDirective {
}
ContentSelectDirective.decorators = [
    { type: Directive, args: [{
                selector: '[doContentSelect]',
            },] }
];

class DoSelectComponent extends DoValueAccessor {
    constructor(ngControl, locale, injector) {
        super(ngControl, locale);
        this.locale = locale;
        this.injector = injector;
        this.colLabel = 3;
        this.colInput = 9;
        this.items = [];
        this.multiple = false;
        this.loading = false;
        this.addTag = false;
        this.closeOnSelect = true;
        this.clearable = true;
        this.searchable = true;
        this.hideSelected = true;
        this.minTermLength = 2;
        this.maxTermLength = 50;
        this.limit = 50;
        this.offsetNextLoad = this.limit - 35;
        this.onSelect = new EventEmitter();
        this.onClear = new EventEmitter();
        this.notFoundText = 'select.notfound';
        this.typeToSearchText = 'select.typesearch';
        this.virtualScroll = true;
        this.paramSearch = { value: this.minTermLength };
        this.typeahead$ = new Subject();
        this.destroy$ = new Subject();
        this.total = 0;
        this.totalRecord = 0;
        this.http = injector.get(HTTP_SERVICE);
        this.cdref = injector.get(ChangeDetectorRef);
    }
    get value() { return this._value; }
    set value(value) {
        if (this._value !== value) {
            this._value = value;
            this.onChange(value);
            this.onSelect.emit(value);
            const control = this.ngControl.control;
            if (control) {
                control.updateValueAndValidity();
                control.markAsTouched();
                control.markAsDirty();
            }
        }
    }
    onInit() {
        this.paramSearch = { value: this.minTermLength };
        if (this.api) {
            this.fetchSearch().subscribe((items) => {
                this.fetchMore(items);
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
        this.typeahead$.next(null);
        this.typeahead$.complete();
        this.typeahead$.unsubscribe();
    }
    onOpen() {
        if (this.api) {
            if (this.loading)
                return;
            this.total = 0;
            this.items = [];
            if (!this.searchable) {
                this.fetchNone().subscribe((items) => {
                    this.fetchMore(items);
                });
            }
        }
    }
    onClose() {
        if (this.api) {
            this.reset();
        }
    }
    onScroll({ end }, search) {
        if (!this.loading) {
            if ((Number(end) + this.offsetNextLoad) >= this.total && this.total > 0 && this.total < this.totalRecord) {
                if (this.searchable && search) {
                    this.typeahead$.next(search);
                }
                else {
                    this.fetchNone().subscribe((items) => {
                        this.fetchMore(items);
                    });
                }
            }
        }
    }
    onScrollToEnd(search) {
        if (!this.loading) {
            if (this.total < this.totalRecord) {
                if (this.searchable && search) {
                    this.typeahead$.next(search);
                }
                else {
                    this.fetchNone().subscribe((items) => {
                        this.fetchMore(items);
                    });
                }
            }
        }
    }
    doClear() {
        this.onClear.emit(true);
    }
    reset() {
        this.total = 0;
        this.items = [];
        this.loading = false;
    }
    fetchMore(items) {
        this.items = [...this.items, ...items];
        this.cdref.detectChanges();
        this.loading = false;
    }
    fetchSearch() {
        return this.typeahead$.pipe(switchMap((term) => {
            if (term) {
                if (term.length > this.maxTermLength) {
                    return of([]);
                }
                return this.getRequest(this.total, term);
            }
            else
                return of([]);
        })).pipe(takeUntil(this.destroy$));
    }
    fetchNone() {
        return this.getRequest(this.total).pipe(takeUntil(this.destroy$));
    }
    getRequest(offset, search) {
        let body;
        if (this.api.method === HttpMethod.POST) {
            body = {
                offset: offset ? offset : 0,
                limit: this.limit,
                keyword: {
                    _label: search,
                },
            };
            if (this.queryParam) {
                this.queryParam.forEach((result) => {
                    body['keyword'][result.key] = result.value;
                });
            }
        }
        this.loading = true;
        return this.http.HTTP_AUTH(this.api, body)
            .pipe(map((response) => {
            this.totalRecord = Number(response.totalRecord);
            this.total = this.total + Number(response.totalFiltered);
            return response['data'];
        }), catchError(() => of([])));
    }
    onKeyDown(event, term) {
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
    }
}
DoSelectComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: Injector }
];
DoSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-select',
                template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <ng-select\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [items]=\"items\"\n      [typeahead]=\"typeahead$\"\n      [multiple]=\"multiple\"\n      [loading]=\"loading\"\n      [notFoundText]=\"notFoundText | translate\"\n      [addTag]=\"addTag\"\n      [closeOnSelect]=\"closeOnSelect\"\n      [clearable]=\"required? false: clearable\"\n      [searchable]=\"searchable\"\n      [hideSelected]=\"hideSelected\"\n      [minTermLength]=\"minTermLength\"\n      [virtualScroll]=\"virtualScroll\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      (keydown)=\"onKeyDown($event, select.searchTerm)\"\n      (scroll)=\"onScroll($event, select.searchTerm)\"\n      (scrollToEnd)=\"onScrollToEnd(select.searchTerm)\"\n      (open)=\"onOpen()\"\n      (close)=\"onClose()\"\n      (clear)=\"doClear()\"\n      (change)=\"onChange($event)\"\n      (focus)=\"onTouched($event)\"\n      (blur)=\"onTouched($event)\"\n      [(ngModel)]=\"value\"\n      [ngClass]=\"{'required': required}\"\n      appendTo=\"body\"\n      typeToSearchText=\"{{typeToSearchText | translate:paramSearch}}\"\n      #select>\n        <ng-template *ngIf=\"contentTemplate\" ng-label-tmp let-item=\"item\">\n          <ng-container *ngTemplateOutlet=\"contentTemplate; context: {$implicit: item}\"></ng-container>\n        </ng-template>\n        <ng-template *ngIf=\"contentTemplate\" ng-option-tmp let-item=\"item\">\n          <ng-container *ngTemplateOutlet=\"contentTemplate; context: {$implicit: item}\"></ng-container>\n        </ng-template>\n    </ng-select>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: ["ng-select.ng-invalid.ng-touched .ng-select-container{border-color:#ff3d71}ng-select.ng-invalid.ng-touched:focus{border-color:#ff3d71;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #fde6e8}ng-select.ng-valid.ng-touched.required .ng-select-container{border-color:#00d68f}ng-select.ng-valid.ng-touched.required:focus{border-color:#00d68f;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #e4e9f2}body{font-size:1rem;font-weight:400;line-height:1.5;position:relative;font-family:Open Sans,sans-serif}.ng-select .ng-select-container{border-radius:.25rem;line-height:1.5rem;align-items:center;background-color:#f7f9fc;color:#1a2138;font-family:Open Sans,sans-serif;border:1px solid #edf1f7}"]
            },] }
];
DoSelectComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: Injector }
];
DoSelectComponent.propDecorators = {
    placeholder: [{ type: Input }],
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    items: [{ type: Input }],
    multiple: [{ type: Input }],
    loading: [{ type: Input }],
    addTag: [{ type: Input }],
    closeOnSelect: [{ type: Input }],
    clearable: [{ type: Input }],
    searchable: [{ type: Input }],
    hideSelected: [{ type: Input }],
    minTermLength: [{ type: Input }],
    maxTermLength: [{ type: Input }],
    api: [{ type: Input }],
    limit: [{ type: Input }],
    offsetNextLoad: [{ type: Input }],
    queryParam: [{ type: Input }],
    onSelect: [{ type: Output }],
    onClear: [{ type: Output }],
    select: [{ type: ViewChild, args: ['select', { static: false },] }],
    contentTemplate: [{ type: ContentChild, args: [ContentSelectDirective, { static: false, read: TemplateRef },] }]
};

const SELECT_COMPONENTS = [
    DoSelectComponent,
];
const SELECT_DIRECTIVES = [
    ContentSelectDirective,
];
class DoSelectModule {
}
DoSelectModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    NgSelectModule,
                    TranslateModule,
                    DoBaseModule,
                ],
                declarations: [
                    ...SELECT_COMPONENTS,
                    ...SELECT_DIRECTIVES,
                ],
                exports: [
                    ...SELECT_COMPONENTS,
                    ...SELECT_DIRECTIVES,
                ],
            },] }
];

const SPINNER_COMPONENTS = [];
class DoSpinnerModule {
}
DoSpinnerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule,
                ],
                declarations: [
                    ...SPINNER_COMPONENTS,
                ],
                exports: [
                    ...SPINNER_COMPONENTS,
                ],
            },] }
];

class DoDatatableComponent {
    constructor(locale, layout, injector) {
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
        this.sortType = SortType.single;
        this.selectionType = SelectionType.checkbox;
        this.columnMode = ColumnMode.force;
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
        this.onAdd = new EventEmitter();
        this.onEdit = new EventEmitter();
        this.onDelete = new EventEmitter();
        this.onSearch = new EventEmitter();
        this.onFilter = new EventEmitter();
        this.onButtonCell = new EventEmitter();
        this.isDelete = false;
        this.destroy$ = new Subject();
        this.pageOffset = 0;
        this.http = injector.get(HTTP_SERVICE);
        this.cdref = injector.get(ChangeDetectorRef);
    }
    set filterFn(keyword) {
        this.keywordParam = keyword;
        this._keyword = keyword;
        this.count = 0;
        this.offset = 0;
    }
    set filterDoFetchFn(keyword) {
        if (keyword) {
            this.keywordParam = keyword;
            this._keyword = keyword;
        }
        this.count = 0;
        this.offset = 0;
        this.fetch();
    }
    set reloadFn(reload) {
        if (reload) {
            this.count = 0;
            this.offset = 0;
            this.fetch();
        }
    }
    ngOnInit() {
        if (this.startWithOpenData) {
            this.fetch();
        }
        this.layout.onChangeLayoutSize().pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.datatable.recalculate();
            this.cdref.detectChanges();
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    doSearch(search) {
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
    }
    doFilter(search) {
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
            this.filters.forEach(filter => {
                switch (filter.type) {
                    case 'input':
                    case 'datepicker':
                    case 'radio':
                        this._keyword[filter.controlName] = search[filter.controlName];
                        break;
                    case 'select':
                        this._keyword[filter.controlName] = search[filter.controlName].label;
                        break;
                    case 'checkbox':
                        this._keyword[filter.controlName] = search[filter.controlName].name;
                        break;
                    default:
                        break;
                }
            });
            this.count = 0;
            this.offset = 0;
            this.fetch();
        }
    }
    doAdd(add) {
        this.onAdd.emit(add);
    }
    doEdit(row) {
        this.onEdit.emit(row);
    }
    doDelete() {
        this.onDelete.emit(this.selected);
    }
    onKeyDown(event) {
        if (event.key.toUpperCase() === 'ENTER') {
            this.doSearch(this._search);
        }
    }
    fetch() {
        if (this.api) {
            this.externalPaging = true;
            this.externalSorting = true;
            this.getRequest().subscribe(rows => {
                this.rows = rows;
                this.cdref.detectChanges();
            });
        }
    }
    setPage(page) {
        this.pageOffset = page.offset * this.limit;
        this.fetch();
    }
    onSort(order) {
        if (order) {
            if (Array.isArray(order.sorts)) {
                order.sorts.forEach(sort => {
                    if (sort['dir'] === 'asc') {
                        this.sort = { asc: [sort['prop']] };
                    }
                    else {
                        this.sort = { desc: [sort['prop']] };
                    }
                });
            }
        }
        this.fetch();
    }
    onSelect({ selected }) {
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
    }
    onClickButton(event) {
        this.onButtonCell.emit(event);
    }
    getRequest() {
        const body = {
            offset: this.pageOffset,
            limit: this.limit,
            keyword: this._keyword,
            order: this.sort,
        };
        this.loadingIndicator = true;
        return this.http.HTTP_AUTH(this.api, body)
            .pipe(map((response) => {
            this.count = Number(response.totalRecord);
            this.loadingIndicator = false;
            return response['data'];
        }), catchError(() => {
            this.loadingIndicator = false;
            this.count = 0;
            return of([]);
        }));
    }
}
DoDatatableComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: LayoutService },
    { type: Injector }
];
DoDatatableComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-datatable',
                template: "<do-datatable-header\n    [header]=\"header\"\n    [add]=\"add\"\n    [delete]=\"isDelete\"\n    [filter]=\"filter\"\n    [formGroupFilter]=\"formGroupFilter\"\n    (onSearch)=\"doSearch($event)\"\n    (onFilter)=\"doFilter($event)\"\n    (onAdd)=\"doAdd($event)\"\n    (onDelete)=\"doDelete()\">\n    <ng-content></ng-content>\n</do-datatable-header>\n<do-datatable-base\n    [rows]=\"rows\"\n    [columns]=\"columns\"\n    [selected]=\"selected\"\n    [limit]=\"limit\"\n    [count]=\"count\"\n    [offset]=\"offset\"\n    [externalPaging]=\"externalPaging\"\n    [externalSorting]=\"externalSorting\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [scrollbarH]=\"scrollbarH\"\n    [scrollbarV]=\"scrollbarV\"\n    [reorderable]=\"reorderable\"\n    [sortType]=\"sortType\"\n    [messages]=\"messages\"\n    [selectionType]=\"selectionType\"\n    [columnMode]=\"columnMode\"\n    [headerHeight]=\"headerHeight\"\n    [footerHeight]=\"footerHeight\"\n    [rowHeight]=\"rowHeight\"\n    [header]=\"header\"\n    [column]=\"column\"\n    [footer]=\"footer\"\n    [add]=\"add\"\n    [edit]=\"edit\"\n    [delete]=\"delete\"\n    [filter]=\"filter\"\n    [startWithOpenData]=\"startWithOpenData\"\n    (page)=\"setPage($event)\"\n    (sort)=\"onSort($event)\"\n    (select)=\"onSelect($event)\"\n    (activate)=\"doEdit($event)\"\n    (onButtonCell)=\"onClickButton($event)\">\n</do-datatable-base>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
DoDatatableComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: LayoutService },
    { type: Injector }
];
DoDatatableComponent.propDecorators = {
    rows: [{ type: Input }],
    columns: [{ type: Input }],
    filters: [{ type: Input }],
    selected: [{ type: Input }],
    limit: [{ type: Input }],
    count: [{ type: Input }],
    offset: [{ type: Input }],
    externalPaging: [{ type: Input }],
    externalSorting: [{ type: Input }],
    loadingIndicator: [{ type: Input }],
    scrollbarH: [{ type: Input }],
    scrollbarV: [{ type: Input }],
    reorderable: [{ type: Input }],
    sortType: [{ type: Input }],
    messages: [{ type: Input }],
    selectionType: [{ type: Input }],
    columnMode: [{ type: Input }],
    headerHeight: [{ type: Input }],
    footerHeight: [{ type: Input }],
    rowHeight: [{ type: Input }],
    header: [{ type: Input }],
    column: [{ type: Input }],
    footer: [{ type: Input }],
    add: [{ type: Input }],
    edit: [{ type: Input }],
    delete: [{ type: Input }],
    filter: [{ type: Input }],
    api: [{ type: Input }],
    startWithOpenData: [{ type: Input }],
    filterEvent: [{ type: Input }],
    formGroupFilter: [{ type: Input }],
    sort: [{ type: Input }],
    onAdd: [{ type: Output }],
    onEdit: [{ type: Output }],
    onDelete: [{ type: Output }],
    onSearch: [{ type: Output }],
    onFilter: [{ type: Output }],
    onButtonCell: [{ type: Output }],
    datatable: [{ type: ViewChild, args: ['datatable', { static: false },] }],
    filterFn: [{ type: Input }],
    filterDoFetchFn: [{ type: Input }],
    reloadFn: [{ type: Input }]
};

class DoDatatableCollapseComponent {
    constructor() {
        this.toggle = () => {
            this.opened$.pipe(take(1)).subscribe(x => this.openedSubject.next(!x));
        };
        this.openedSubject = new ReplaySubject(1);
        this.openedSubject.next(false);
        this.opened$ = this.openedSubject.asObservable();
        this.openedState$ = this.opened$.pipe(map(x => x ? 'expanded' : 'collapsed'));
    }
}
DoDatatableCollapseComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-datatable-collapse, [do-datatable-collapse]',
                template: "<div\n    [@openedState]=\"openedState$ | async\"\n    [ngClass]=\"openedState$ | async\">\n    <ng-content></ng-content>\n</div>",
                animations: [
                    trigger('openedState', [
                        state('collapsed', style({
                            opacity: 0,
                            overflow: 'hidden',
                            height: '0px',
                            minHeight: '0',
                            padding: '0 0 0 0.5rem',
                        })),
                        state('expanded', style({
                            opacity: 1,
                            overflow: 'hidden',
                            height: '*',
                            padding: '1.5rem 0 0.5rem 0.5rem',
                            'border-bottom': '1px solid #d1d4d7',
                        })),
                        transition('collapsed <=> expanded', animate('500ms ease-in-out')),
                    ]),
                ],
                styles: [""]
            },] }
];
DoDatatableCollapseComponent.ctorParameters = () => [];

class DoDatatableHeaderComponent {
    constructor() {
        this.header = true;
        this.footer = true;
        this.add = true;
        this.edit = true;
        this.delete = false;
        this.filter = true;
        this.onSearch = new EventEmitter();
        this.onFilter = new EventEmitter();
        this.onAdd = new EventEmitter();
        this.onDelete = new EventEmitter();
        this.showFilter = false;
        this.disabledButtonFilter = true;
    }
    ngOnDestroy() { }
    doSearch(search) {
        if (this.showFilter)
            this.doFilterFunnel();
        this.onSearch.emit(search);
    }
    doFilterFunnel() {
        this._search = undefined;
        this.collapse.toggle();
        this.showFilter = !this.showFilter;
        if (!this.showFilter) {
            this.formGroupFilter.reset();
        }
        else {
            this.formGroupFilter.valueChanges.subscribe(val => {
                this.disabledButtonFilter = false;
            });
        }
    }
    doFilter() {
        this.onFilter.emit(this.formGroupFilter.value);
    }
    doAdd() {
        this.onAdd.emit(true);
    }
    doDelete() {
        this.onDelete.emit(true);
    }
    onKeyDown(event) {
        if (event.key.toUpperCase() === 'ENTER') {
            this.doSearch(this._search);
        }
    }
    onFocusSearch() {
        if (this.showFilter)
            this.doFilterFunnel();
    }
}
DoDatatableHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-datatable-header',
                template: "<div class=\"header-datatable\" *ngIf=\"header\">\n    <div class=\"header-action\" *ngIf=\"add\">\n        <nb-icon\n            class=\"action-add\"\n            icon=\"file-add\"\n            (click)=\"doAdd()\">\n        </nb-icon>\n    </div>\n    <div class=\"header-action\" *ngIf=\"delete\">\n        <nb-icon\n            class=\"action-trash\"\n            icon=\"trash-2\"\n            (click)=\"doDelete()\">\n        </nb-icon>\n    </div>\n    <div class=\"header-filter\" *ngIf=\"filter\">\n        <do-input-base-icon\n            [name]=\"'_filter.datatable'\"\n            [placeholder]=\"'datatable.typesearch'\"\n            [iconcursor]=\"true\"\n            [(ngModel)]=\"_search\"\n            (clickIcon)=\"doSearch($event)\"\n            (keydown)=\"onKeyDown($event)\"\n            (focus)=\"onFocusSearch()\">\n        </do-input-base-icon>\n    </div>\n    <div class=\"filter-funnel\" *ngIf=\"filter && formGroupFilter\">\n        <nb-icon\n            class=\"filter-icon-funnel\"\n            [icon]=\"showFilter ? 'arrow-upward-outline' : 'funnel'\"\n            (click)=\"doFilterFunnel()\">\n        </nb-icon>\n    </div>\n</div>\n<div *ngIf=\"filter && formGroupFilter\" do-datatable-collapse #collapse>\n    <ng-content></ng-content>\n    <div class=\"form-group row\">\n        <div class=\"offset-sm-3 col-sm-9\">\n          <button\n            type=\"submit\"\n            status=\"primary\"\n            (click)=\"doFilter()\"\n            nbButton>\n            {{ 'Search' | translate}}\n          </button>\n        </div>\n    </div>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".header-datatable{width:100%;display:flex;padding-bottom:.3rem}.header-filter{width:100%}.filter-funnel{right:0;padding:10px 5px;cursor:pointer}.filter-icon-funnel:hover{color:#ffc94d}.header-action{left:0;padding:10px 5px;cursor:pointer}.action-add:hover{color:#598bff}.action-trash:hover{color:#ff708d}"]
            },] }
];
DoDatatableHeaderComponent.propDecorators = {
    header: [{ type: Input }],
    footer: [{ type: Input }],
    add: [{ type: Input }],
    edit: [{ type: Input }],
    delete: [{ type: Input }],
    filter: [{ type: Input }],
    formGroupFilter: [{ type: Input }],
    onSearch: [{ type: Output }],
    onFilter: [{ type: Output }],
    onAdd: [{ type: Output }],
    onDelete: [{ type: Output }],
    collapse: [{ type: ViewChild, args: ['collapse', { static: false },] }]
};

class DoDatatableBaseComponent {
    constructor(locale, injector) {
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
        this.sortType = SortType.single;
        this.selectionType = SelectionType.checkbox;
        this.columnMode = ColumnMode.force;
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
        this.page = new EventEmitter();
        this.sort = new EventEmitter();
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.onButtonCell = new EventEmitter();
    }
    setPage(page) {
        this.page.emit(page);
    }
    onSort(order) {
        this.sort.emit(order);
    }
    onSelect(selected) {
        this.select.emit(selected);
    }
    onActivate(event) {
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
    }
    sanitizedValue(value) {
        return value !== null && value !== undefined ? this.stripHtml(value) : value;
    }
    stripHtml(html) {
        if (!html.replace) {
            return html;
        }
        return html.replace(/<\/?[^>]+(>|$)/g, '');
    }
    onClickButton(event) {
        this.onButtonCell.emit(event);
    }
}
DoDatatableBaseComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: Injector }
];
DoDatatableBaseComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-datatable-base',
                template: "<ngx-datatable\n    class=\"do\"\n    [rows]=\"rows\"\n    [columns]=\"columns\"\n    [selected]=\"selected\"\n    [limit]=\"limit\"\n    [count]=\"count\"\n    [offset]=\"offset\"\n    [externalPaging]=\"externalPaging\"\n    [externalSorting]=\"externalSorting\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [scrollbarH]=\"scrollbarH\"\n    [scrollbarV]=\"scrollbarV\"\n    [reorderable]=\"reorderable\"\n    [sortType]=\"sortType\"\n    [selectionType]=\"selectionType\"\n    [columnMode]=\"columnMode\"\n    [headerHeight]=\"headerHeight\"\n    [footerHeight]=\"footerHeight\"\n    [rowHeight]=\"rowHeight\"\n    (page)=\"setPage($event)\"\n    (sort)=\"onSort($event)\"\n    (select)=\"onSelect($event)\"\n    (activate)=\"onActivate($event)\"\n    #datatable>\n    <div *ngIf=\"column\">\n        <ngx-datatable-column *ngIf=\"selectionType === 'checkbox'\"\n            [width]=\"30\"\n            [sortable]=\"false\"\n            [canAutoResize]=\"false\"\n            [draggable]=\"false\"\n            [resizeable]=\"false\"\n            [headerCheckboxable]=\"true\"\n            [checkboxable]=\"true\"\n            [frozenLeft]=\"true\">\n        </ngx-datatable-column>\n        <ngx-datatable-column *ngFor=\"let col of columns\"\n            [prop]=\"col.prop\"\n            [name]=\"col.name | translate\"\n            [sortable]=\"col.sortable\"\n            [canAutoResize]=\"col.canAutoResize\"\n            [draggable]=\"col.draggable\"\n            [resizeable]=\"col.resizeable\"\n            [width]=\"col.width\"\n            [frozenLeft]=\"col.frozenLeft\"\n            [frozenRight]=\"col.frozenRight\">\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                <span *ngIf=\"!col.cellTemplate && !col.type\" [title]=\"sanitizedValue(value)\" [innerHTML]=\"value\"></span>\n                <span *ngIf=\"!col.cellTemplate && col.type === 'prefix'\" [title]=\"sanitizedValue(value)\" [innerHTML]=\"value + ' ' + col.prefix\"></span>\n                <span *ngIf=\"!col.cellTemplate && col.type === 'html'\" [title]=\"sanitizedValue(value)\" [innerHTML]=\"value\"></span>\n                <span *ngIf=\"!col.cellTemplate && col.type === 'icon'\" [title]=\"sanitizedValue(value)\"><span class=\"{{value}}\"></span></span>\n                <button\n                    *ngIf=\"!col.cellTemplate && col.type === 'button'\"\n                    [status]=\"col.buttonStatus ? col.buttonStatus : 'primary'\"\n                    (click)=\"onClickButton(value)\"\n                    [size]=\"'tiny'\"\n                    nbButton>\n                    {{ col.button | translate }}\n                </button>\n            </ng-template>\n        </ngx-datatable-column>\n    </div>\n    <ngx-datatable-footer *ngIf=\"footer\">\n        <ng-template\n            ngx-datatable-footer-template\n            let-rowCount=\"rowCount\"\n            let-pageSize=\"pageSize\"\n            let-selectedCount=\"selectedCount\"\n            let-curPage=\"curPage\"\n            let-offset=\"offset\"\n            let-isVisible=\"isVisible\">\n            <div class=\"page-count\">\n                <div> {{ selectedCount }} {{ 'Selected' | translate }} | {{ count }} {{ 'Total' | translate }} </div>\n            </div>\n            <datatable-pager\n                [pagerLeftArrowIcon]=\"'datatable-icon-left'\"\n                [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n                [pagerPreviousIcon]=\"'datatable-icon-prev'\"\n                [pagerNextIcon]=\"'datatable-icon-skip'\"\n                [page]=\"curPage\"\n                [size]=\"pageSize\"\n                [count]=\"rowCount\"\n                [hidden]=\"!((rowCount / pageSize) > 1)\"\n                (change)=\"datatable.onFooterPage($event)\">\n            </datatable-pager>\n        </ng-template>\n    </ngx-datatable-footer>\n</ngx-datatable>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".ngx-datatable.material{background:#fff;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.ngx-datatable.material.striped .datatable-row-odd{background:#eee}.ngx-datatable.material.multi-click-selection .datatable-body-row.active,.ngx-datatable.material.multi-click-selection .datatable-body-row.active .datatable-row-group,.ngx-datatable.material.multi-selection .datatable-body-row.active,.ngx-datatable.material.multi-selection .datatable-body-row.active .datatable-row-group,.ngx-datatable.material.single-selection .datatable-body-row.active,.ngx-datatable.material.single-selection .datatable-body-row.active .datatable-row-group{background-color:#304ffe;color:#fff}.ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover,.ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover .datatable-row-group,.ngx-datatable.material.multi-selection .datatable-body-row.active:hover,.ngx-datatable.material.multi-selection .datatable-body-row.active:hover .datatable-row-group,.ngx-datatable.material.single-selection .datatable-body-row.active:hover,.ngx-datatable.material.single-selection .datatable-body-row.active:hover .datatable-row-group{background-color:#193ae4;color:#fff}.ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus,.ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus .datatable-row-group,.ngx-datatable.material.multi-selection .datatable-body-row.active:focus,.ngx-datatable.material.multi-selection .datatable-body-row.active:focus .datatable-row-group,.ngx-datatable.material.single-selection .datatable-body-row.active:focus,.ngx-datatable.material.single-selection .datatable-body-row.active:focus .datatable-row-group{background-color:#2041ef;color:#fff}.ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover,.ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#eee;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus,.ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus .datatable-row-group{background-color:#ddd}.ngx-datatable.material.cell-selection .datatable-body-cell:hover,.ngx-datatable.material.cell-selection .datatable-body-cell:hover .datatable-row-group{background-color:#eee;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.material.cell-selection .datatable-body-cell:focus,.ngx-datatable.material.cell-selection .datatable-body-cell:focus .datatable-row-group{background-color:#ddd}.ngx-datatable.material.cell-selection .datatable-body-cell.active,.ngx-datatable.material.cell-selection .datatable-body-cell.active .datatable-row-group{background-color:#304ffe;color:#fff}.ngx-datatable.material.cell-selection .datatable-body-cell.active:hover,.ngx-datatable.material.cell-selection .datatable-body-cell.active:hover .datatable-row-group{background-color:#193ae4;color:#fff}.ngx-datatable.material.cell-selection .datatable-body-cell.active:focus,.ngx-datatable.material.cell-selection .datatable-body-cell.active:focus .datatable-row-group{background-color:#2041ef;color:#fff}.ngx-datatable.material .empty-row{height:50px;text-align:left;padding:.5rem 1.2rem;vertical-align:top;border-top:0}.ngx-datatable.material .loading-row{text-align:left;padding:.5rem 1.2rem;vertical-align:top;border-top:0}.ngx-datatable.material .datatable-body .datatable-row-left,.ngx-datatable.material .datatable-header .datatable-row-left{background-color:#fff;background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.ngx-datatable.material .datatable-body .datatable-row-right,.ngx-datatable.material .datatable-header .datatable-row-right{background-position:0 0;background-color:#fff;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==)}.ngx-datatable.material .datatable-header{border-bottom:1px solid rgba(0,0,0,.12)}.ngx-datatable.material .datatable-header .datatable-header-cell{text-align:left;padding:.9rem 1.2rem;background-color:#fff;color:rgba(0,0,0,.54);vertical-align:bottom;font-size:12px;font-weight:500}.ngx-datatable.material .datatable-header .datatable-header-cell .datatable-header-cell-wrapper{position:relative}.ngx-datatable.material .datatable-header .datatable-header-cell.longpress .draggable::after{transition:transform .4s,opacity .4s;opacity:.5;transform:scale(1)}.ngx-datatable.material .datatable-header .datatable-header-cell .draggable::after{content:' ';position:absolute;top:50%;left:50%;margin:-30px 0 0 -30px;height:60px;width:60px;background:#eee;border-radius:100%;opacity:1;filter:none;transform:scale(0);z-index:9999;pointer-events:none}.ngx-datatable.material .datatable-header .datatable-header-cell.dragging .resize-handle{border-right:none}.ngx-datatable.material .datatable-header .resize-handle{border-right:1px solid #eee}.ngx-datatable.material .datatable-body{position:relative}.ngx-datatable.material .datatable-body .datatable-row-detail{background:#f5f5f5;padding:10px}.ngx-datatable.material .datatable-body .datatable-group-header{background:#f5f5f5;border-bottom:1px solid #d9d8d9;border-top:1px solid #d9d8d9}.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-cell,.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-group-cell{text-align:left;padding:.9rem 1.2rem;vertical-align:top;border-top:0;color:rgba(0,0,0,.87);transition:width .3s;font-size:14px;font-weight:400}.ngx-datatable.material .datatable-body .progress-linear{display:block;position:-webkit-sticky;position:sticky;width:100%;height:5px;padding:0;margin:0;top:0}.ngx-datatable.material .datatable-body .progress-linear .container{display:block;position:relative;overflow:hidden;width:100%;height:5px;transform:translate(0,0) scale(1,1);background-color:#aad1f9}.ngx-datatable.material .datatable-body .progress-linear .container .bar{transition:transform .2s linear;-webkit-animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;background-color:#106cc8;position:absolute;left:0;top:0;bottom:0;width:100%;height:5px}.ngx-datatable.material .datatable-footer{border-top:1px solid rgba(0,0,0,.12);font-size:12px;font-weight:400;color:rgba(0,0,0,.54)}.ngx-datatable.material .datatable-footer .page-count{line-height:50px;height:50px;padding:0 1.2rem}.ngx-datatable.material .datatable-footer .datatable-pager{margin:0 10px}.ngx-datatable.material .datatable-footer .datatable-pager li{vertical-align:middle}.ngx-datatable.material .datatable-footer .datatable-pager li.disabled a{color:rgba(0,0,0,.26)!important;background-color:transparent!important}.ngx-datatable.material .datatable-footer .datatable-pager li.active a{background-color:rgba(158,158,158,.2);font-weight:700}.ngx-datatable.material .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0 6px;border-radius:3px;margin:6px 3px;text-align:center;color:rgba(0,0,0,.54);text-decoration:none;vertical-align:bottom}.ngx-datatable.material .datatable-footer .datatable-pager a:hover{color:rgba(0,0,0,.75);background-color:rgba(158,158,158,.2)}.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-skip{font-size:20px;line-height:20px;padding:0 3px}.ngx-datatable.material .datatable-summary-row .datatable-body-row,.ngx-datatable.material .datatable-summary-row .datatable-body-row:hover{background-color:#ddd}.ngx-datatable.material .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}.datatable-checkbox{position:relative;margin:0;cursor:pointer;vertical-align:middle;display:inline-block;box-sizing:border-box;padding:0}.datatable-checkbox input[type=checkbox]{position:relative;margin:0 1rem 0 0;cursor:pointer;outline:0}.datatable-checkbox input[type=checkbox]:before{transition:.3s ease-in-out;content:'';position:absolute;left:0;z-index:1;width:1rem;height:1rem;border:2px solid #f2f2f2}.datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#009688;border-top-style:none;border-right-style:none}.datatable-checkbox input[type=checkbox]:after{content:'';position:absolute;top:0;left:0;width:1rem;height:1rem;background:#fff;cursor:pointer}@-webkit-keyframes query{0%{opacity:1;transform:translateX(35%) scale(.3,1)}100%{opacity:0;transform:translateX(-50%) scale(0,1)}}@keyframes query{0%{opacity:1;transform:translateX(35%) scale(.3,1)}100%{opacity:0;transform:translateX(-50%) scale(0,1)}}.ngx-datatable.bootstrap{box-shadow:none;font-size:13px}.ngx-datatable.bootstrap .datatable-header{height:unset!important}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell{vertical-align:bottom;padding:.75rem;border-bottom:1px solid #d1d4d7}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.ngx-datatable.bootstrap .datatable-body .datatable-body-row{vertical-align:top;border-top:1px solid #d1d4d7}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.datatable-row-even{background-color:rgba(0,0,0,.05)}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.active{background-color:#1483ff;color:#fff}.ngx-datatable.bootstrap .datatable-body .datatable-body-row .datatable-body-cell{padding:.75rem;text-align:left;vertical-align:top}.ngx-datatable.bootstrap .datatable-body .empty-row{position:relative;padding:.75rem 1.25rem;margin-bottom:0}.ngx-datatable.bootstrap .datatable-footer{background:#424242;color:#ededed;margin-top:-1px}.ngx-datatable.bootstrap .datatable-footer .page-count{line-height:50px;height:50px;padding:0 1.2rem}.ngx-datatable.bootstrap .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li{margin:10px 0}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a,.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#545454;font-weight:700}.ngx-datatable.bootstrap .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;text-decoration:none;vertical-align:bottom;color:#ededed}.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip{font-size:18px;line-height:27px;padding:0 3px}.ngx-datatable.bootstrap .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}.ngx-datatable.dark{box-shadow:none;background:#1b1e27;border:1px solid #2f3646;color:#fff;font-size:13px}.ngx-datatable.dark .datatable-header{background:#181b24;color:#72809b}.ngx-datatable.dark .datatable-header .datatable-header-cell{text-align:left;padding:.5rem 1.2rem;font-weight:700}.ngx-datatable.dark .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.ngx-datatable.dark .datatable-body{background:#1a1e28}.ngx-datatable.dark .datatable-body .datatable-body-row{border-top:1px solid #2f3646}.ngx-datatable.dark .datatable-body .datatable-body-row .datatable-body-cell{text-align:left;padding:.5rem 1.2rem;vertical-align:top}.ngx-datatable.dark .datatable-body .datatable-body-row:hover{background:#171b24;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.dark .datatable-body .datatable-body-row:focus{background-color:#232837}.ngx-datatable.dark .datatable-body .datatable-body-row.active{background-color:#1483ff;color:#fff}.ngx-datatable.dark .datatable-footer{background:#232837;color:#72809b;margin-top:-1px}.ngx-datatable.dark .datatable-footer .page-count{line-height:50px;height:50px;padding:0 1.2rem}.ngx-datatable.dark .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.ngx-datatable.dark .datatable-footer .datatable-pager ul li{margin:10px 0}.ngx-datatable.dark .datatable-footer .datatable-pager ul li:not(.disabled).active a,.ngx-datatable.dark .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#455066;font-weight:700}.ngx-datatable.dark .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;text-decoration:none;vertical-align:bottom;color:#72809b}.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-skip{font-size:18px;line-height:27px;padding:0 3px}.ngx-datatable.dark .datatable-summary-row .datatable-body-row,.ngx-datatable.dark .datatable-summary-row .datatable-body-row:hover{background-color:#14171f}.ngx-datatable.dark .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}.ngx-datatable.do{box-shadow:none;font-size:13px}.ngx-datatable.do .datatable-header{height:unset!important}.ngx-datatable.do .datatable-header .datatable-header-cell{vertical-align:bottom;padding:.75rem;border-bottom:1px solid #d1d4d7}.ngx-datatable.do .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.ngx-datatable.do .datatable-header .datatable-header-cell .datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#36f;border-top-style:none;border-right-style:none}.ngx-datatable.do .datatable-header .datatable-row-left{background-color:#fff;background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.ngx-datatable.do .datatable-header .datatable-row-right{background-color:#fff;background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==)}.ngx-datatable.do .datatable-body .datatable-body-row{vertical-align:top}.ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even,.ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even .datatable-row-left,.ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even .datatable-row-right{background-color:#f2f2f2}.ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-left,.ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-right{background-color:#fff}.ngx-datatable.do .datatable-body .datatable-body-row .datatable-row-left{background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.ngx-datatable.do .datatable-body .datatable-body-row .datatable-row-right{background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==)}.ngx-datatable.do .datatable-body .datatable-body-row.active{background-color:#36f;color:#fff}.ngx-datatable.do .datatable-body .datatable-body-row.active .datatable-row-left,.ngx-datatable.do .datatable-body .datatable-body-row.active .datatable-row-right{background-color:#36f}.ngx-datatable.do .datatable-body .datatable-body-row:hover,.ngx-datatable.do .datatable-body .datatable-body-row:hover .datatable-row-group{cursor:pointer;border-bottom:.025rem solid #7899ff;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.do .datatable-body .datatable-body-row .datatable-body-cell{padding:.75rem;text-align:left;vertical-align:top}.ngx-datatable.do .datatable-body .datatable-body-row .datatable-body-cell .datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#36f;border-top-style:none;border-right-style:none}.ngx-datatable.do .datatable-body .empty-row{position:relative;padding:.75rem 1.25rem;margin-bottom:0}.ngx-datatable.do .datatable-body .progress-linear{display:block;width:100%;height:5px;padding:0;margin:0;position:absolute}.ngx-datatable.do .datatable-body .progress-linear .container{display:block;position:relative;overflow:hidden;width:100%;height:5px;transform:translate(0,0) scale(1,1);background-color:#aad1f9}.ngx-datatable.do .datatable-body .progress-linear .container .bar{transition:transform .2s linear;-webkit-animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;background-color:#106cc8;position:absolute;left:0;top:0;bottom:0;width:100%;height:5px}.ngx-datatable.do .datatable-footer{background:#f2f2f2;color:#5a5a5a;margin-top:-1px}.ngx-datatable.do .datatable-footer .page-count{padding:.7rem}.ngx-datatable.do .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.ngx-datatable.do .datatable-footer .datatable-pager ul li{margin:10px 0}.ngx-datatable.do .datatable-footer .datatable-pager ul li:not(.disabled).active a,.ngx-datatable.do .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#c1c1c1;font-weight:700}.ngx-datatable.do .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;text-decoration:none;vertical-align:bottom;color:#5a5a5a}.ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-skip{line-height:27px;padding:0 .2rem}.ngx-datatable.do .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}"]
            },] }
];
DoDatatableBaseComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: Injector }
];
DoDatatableBaseComponent.propDecorators = {
    rows: [{ type: Input }],
    columns: [{ type: Input }],
    selected: [{ type: Input }],
    limit: [{ type: Input }],
    count: [{ type: Input }],
    offset: [{ type: Input }],
    externalPaging: [{ type: Input }],
    externalSorting: [{ type: Input }],
    loadingIndicator: [{ type: Input }],
    scrollbarH: [{ type: Input }],
    scrollbarV: [{ type: Input }],
    reorderable: [{ type: Input }],
    sortType: [{ type: Input }],
    messages: [{ type: Input }],
    selectionType: [{ type: Input }],
    columnMode: [{ type: Input }],
    headerHeight: [{ type: Input }],
    footerHeight: [{ type: Input }],
    rowHeight: [{ type: Input }],
    header: [{ type: Input }],
    column: [{ type: Input }],
    footer: [{ type: Input }],
    add: [{ type: Input }],
    edit: [{ type: Input }],
    delete: [{ type: Input }],
    filter: [{ type: Input }],
    startWithOpenData: [{ type: Input }],
    page: [{ type: Output }],
    sort: [{ type: Output }],
    select: [{ type: Output }],
    activate: [{ type: Output }],
    onButtonCell: [{ type: Output }]
};

class DoButtonSubmitComponent {
    constructor() {
        this.formGroupButton = new FormGroup({});
        this.disabledButton = false;
        this.colLabel = 3;
        this.colButton = 9;
        this.type = 'submit';
        this.status = 'primary';
        this.skeleton = false;
        this.onSubmit = new EventEmitter();
    }
    click(event) {
        this.onSubmit.emit(event);
    }
}
DoButtonSubmitComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-button-submit',
                template: "<div class=\"form-group row\">\n  <div class=\"offset-sm-{{colLabel}} col-sm-{{colButton}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <button\n      type=\"{{type}}\"\n      status=\"{{status}}\"\n      (click)=\"click($event)\"\n      [disabled]=\"formGroupButton.invalid || formGroupButton.pristine || disabledButton\"\n      nbButton>\n      {{ name | translate}}\n    </button>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"offset-sm-{{colLabel}} col-sm-{{colButton}}\">\n      <div\n        [ngClass]=\"{\n          'button-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            },] }
];
DoButtonSubmitComponent.propDecorators = {
    formGroupButton: [{ type: Input }],
    name: [{ type: Input }],
    disabledButton: [{ type: Input }],
    colLabel: [{ type: Input }],
    colButton: [{ type: Input }],
    type: [{ type: Input }],
    status: [{ type: Input }],
    skeleton: [{ type: Input }],
    onSubmit: [{ type: Output }]
};

const BUTTON_COMPONENTS = [
    DoButtonSubmitComponent,
];
class DoButtonModule {
}
DoButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    NbButtonModule,
                    TranslateModule,
                    DoBaseModule,
                ],
                declarations: [
                    ...BUTTON_COMPONENTS,
                ],
                exports: [
                    ...BUTTON_COMPONENTS,
                    NbButtonModule,
                ],
            },] }
];

const TABLE_COMPONENTS = [
    DoDatatableComponent,
    DoDatatableBaseComponent,
    DoDatatableHeaderComponent,
    DoDatatableCollapseComponent,
];
class DoTableModule {
}
DoTableModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    TranslateModule,
                    NbButtonModule,
                    NbIconModule,
                    NgxDatatableModule,
                    DoBaseModule,
                    DoInputModule,
                    DoButtonModule,
                ],
                declarations: [
                    ...TABLE_COMPONENTS,
                ],
                exports: [
                    ...TABLE_COMPONENTS,
                ],
            },] }
];

class DoDatePickerComponent extends DoValueAccessor {
    constructor(ngControl, dateService, locale, datePipe) {
        super(ngControl, locale);
        this.dateService = dateService;
        this.locale = locale;
        this.datePipe = datePipe;
        this.colLabel = 3;
        this.colInput = 9;
        this.size = NbCalendarSize.MEDIUM;
        this.pattern = DatePattern.SLASH;
    }
    writeValue(value) {
        if (value) {
            if (String(value).match(this.pattern)) {
                const dateParse = this.parse(value);
                if (!isNaN(Date.parse(dateParse))) {
                    this._value = new Date(dateParse);
                    this.onChange(value);
                }
            }
            const control = this.ngControl.control;
            if (control) {
                control.updateValueAndValidity();
                control.markAsUntouched();
                control.markAsPristine();
            }
        }
    }
    parse(value) {
        const year = String(value).split('/')[2];
        const month = String(value).split('/')[1];
        const day = String(value).split('/')[0];
        return year + '/' + month + '/' + day;
    }
}
DoDatePickerComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: NbDateService },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: DatePipe }
];
DoDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-datepicker',
                template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      id=\"{{name}}\"\n      [pattern]=\"pattern\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled || skeleton\"\n      [ngClass]=\"{\n        'skeleton': skeleton,\n        'status-danger': hasErrors,\n        'status-success': hasSuccess\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      [(ngModel)]=\"value\"\n      [nbDatepicker]=\"ngxdatepicker\"\n      #input nbInput fullWidth>\n      <nb-datepicker\n        [format]=\"format\"\n        [size]=\"size\"\n        [min]=\"min\"\n        [max]=\"max\"\n        #ngxdatepicker>\n      </nb-datepicker>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                styles: [""]
            },] }
];
DoDatePickerComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: NbDateService },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: DatePipe }
];
DoDatePickerComponent.propDecorators = {
    placeholder: [{ type: Input }],
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    size: [{ type: Input }]
};

const DATEPICKER_COMPONENTS = [
    DoDatePickerComponent,
];
class DoDatePickerModule {
}
DoDatePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    NbInputModule,
                    NbDatepickerModule,
                    NbMomentDateModule,
                    NbDateFnsDateModule.forRoot({
                        parseOptions: { awareOfUnicodeTokens: true },
                        formatOptions: { awareOfUnicodeTokens: true },
                    }),
                    TranslateModule,
                    DoBaseModule,
                ],
                declarations: [
                    ...DATEPICKER_COMPONENTS,
                ],
                exports: [
                    ...DATEPICKER_COMPONENTS,
                ],
            },] }
];

class ImageUploadComponent extends DoValueAccessor {
    constructor(ngControl, locale, dom) {
        super(ngControl, locale);
        this.locale = locale;
        this.dom = dom;
        this.onUpload = new EventEmitter();
        this.onPreview = new EventEmitter();
        this.height = 225;
        this.width = 225;
        this.radius = 0;
        this.buttonUpload = true;
        this.skeleton = false;
        this.opacity = '0.5';
        this.imageDefault = `${document.getElementsByTagName('base')[0].href}/assets/images/avatars/default.png`;
    }
    set uploadFn(finish) {
        if (finish) {
            this.ngControl.control.markAsPristine();
            this.ngControl.control.markAsUntouched();
        }
    }
    writeValue(value) {
        if (value instanceof File) {
            this.opacity = '0.8';
            this.image = URL.createObjectURL(value);
            this._value = value;
        }
        this.onChange(this.value);
        const control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsTouched();
            control.markAsDirty();
        }
    }
    upload(files) {
        this.opacity = '0.8';
        for (let index = 0; index < files.length; index++) {
            this.value = files[index];
        }
        this.image = URL.createObjectURL(this.value);
        this.onPreview.emit(this.value);
    }
    doUpload() {
        this.onUpload.emit(this.value);
    }
    ngOnDestroy() { }
    onInit() {
        if (!this.image) {
            this.image = this.imageDefault;
        }
    }
}
ImageUploadComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: DomSanitizer }
];
ImageUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-image-upload',
                template: "<div class=\"body-upload\">\n  <div *ngIf=\"!skeleton; else contentskeleton\"\n    class=\"upload-container\"\n    (click)=\"img.click()\"\n    doDragDrop\n    [opacity]=\"opacity\"\n    (onFileDropped)=\"upload($event)\"\n    [ngStyle]=\"{ \n      'background-image': 'url(' + (image? image: imageDefault) + ')',\n      'height':  height + 'px',\n      'width':  width + 'px',\n      'border-radius':  radius + '%'\n    }\">\n    <input\n      hidden\n      type=\"file\"\n      accept=\"image/png, image/jpeg, image/jpg\"\n      (change)=\"upload($event.target.files)\"\n      #img>\n  </div>\n  <ng-template #contentskeleton>\n    <div\n      class=\"upload-container\"\n      [ngStyle]=\"{ \n        'background-image': 'url(' + image + ')',\n        'height':  height + 'px',\n        'width':  width + 'px',\n        'border-radius':  radius + '%'\n      }\">\n    </div>\n  </ng-template>\n  <button *ngIf=\"buttonUpload\"\n    class=\"upload-bg\"\n    [size]=\"'small'\"\n    [shape]=\"'round'\"\n    [status]=\"'primary'\"\n    [disabled]=\"ngControl.pristine || disabled\"\n    (click)=\"doUpload()\"\n    nbButton\n    [ngStyle]=\"{ \n      'top': 'calc('+height+'px + 0.157rem)'\n    }\">\n    <nb-icon class=\"upload-icon\" icon=\"cloud-upload-outline\" pack=\"eva\"></nb-icon>\n    {{ 'Upload' | translate}}\n  </button>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".upload-container{background-repeat:no-repeat;background-color:#f7f9fc;background-size:cover;margin:20px auto;border:2px dashed #d9dde5}.upload-container:hover{cursor:pointer}.body-upload{padding:15px}.upload-bg{position:absolute;left:50%;transform:translate(-50%);z-index:2}.nb-theme-default [nbButton].appearance-filled.status-primary[disabled]{background-color:#edf1f7;border-color:transparent;color:rgba(143,155,179,.48)}.upload-icon{font-size:5rem}"]
            },] }
];
ImageUploadComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: DomSanitizer }
];
ImageUploadComponent.propDecorators = {
    onUpload: [{ type: Output }],
    onPreview: [{ type: Output }],
    image: [{ type: Input }],
    height: [{ type: Input }],
    width: [{ type: Input }],
    radius: [{ type: Input }],
    buttonUpload: [{ type: Input }],
    skeleton: [{ type: Input }],
    uploadFn: [{ type: Input }]
};

const IMAGE_COMPONENTS = [
    ImageUploadComponent,
];
class DoImageModule {
}
DoImageModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    NbButtonModule,
                    NbIconModule,
                    DoBaseModule,
                ],
                declarations: [
                    ...IMAGE_COMPONENTS,
                ],
                exports: [
                    ...IMAGE_COMPONENTS,
                ],
            },] }
];

class DoTreeComponent {
    constructor() {
        this.nodeItems = [{}];
        this.options = {
            mode: TreeMode.MultiSelect,
            checkboxes: true,
            alwaysEmitSelected: true
        };
        this.onSelect = new EventEmitter();
    }
    set nodeItemsFn(nodeItems) {
        this.nodeItems = nodeItems;
    }
    ngOnInit() { }
    onSelectedItems(event) {
        this.onSelect.emit(event);
    }
}
DoTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-tree',
                template: "<tree-ngx\n  (selectedItems)=\"onSelectedItems($event)\"\n  [nodeItems]=\"nodeItems\"\n  [options]=\"options\"\n  #treengx>\n</tree-ngx>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".tree-ngx{display:flex;flex:1 1 auto;flex-direction:column;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.node{display:flex;flex:1 1 auto;flex-direction:column}.node-children{display:flex;flex:1 1 auto}.node-name{display:inline-block;padding:5px 0 5px 7px}.node-name.markSelected{padding:5px 0 5px 2px;border-left:5px solid #269}.node-name .active{cursor:pointer}.node-offset{display:flex;margin-left:20px}.node-icon-wrapper{position:relative;display:inline-block;width:25px;height:17px;top:1px;left:6px}.node-icon-wrapper.disabled{cursor:default}.collapsable{cursor:pointer}.node-container{display:inline-block}.nodeDisabled{opacity:.6}.node-checkbox:disabled{cursor:auto}.collapsible-wrapper{display:flex;overflow:hidden}.collapsible-wrapper:after{content:'';height:25px;transition:height .3s linear,max-height linear .3s;max-height:0}.collapsible{transition:margin-bottom .3s cubic-bezier(0,0,0,1);margin-bottom:0;max-height:1000000px}.collapsible-wrapper.collapsed>.collapsible{margin-bottom:-20000px;transition:margin-bottom .3s cubic-bezier(1,0,1,1),visibility .3s,max-height .3s;visibility:hidden;max-height:0}.collapsible-wrapper.collapsed:after{height:0;transition:height .3s linear;max-height:25px}.arrow-down{position:absolute;width:0;height:0;left:3px;top:6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #455a64}.arrow-down.collapse-empty{border-top:7px solid #ccc}.arrow-right{position:absolute;width:0;height:0;left:8px;top:3px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #455a64}.node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}"]
            },] }
];
DoTreeComponent.propDecorators = {
    nodeItemsFn: [{ type: Input }],
    nodeItems: [{ type: Input }],
    options: [{ type: Input }],
    onSelect: [{ type: Output }]
};

const TREE_COMPONENTS = [
    DoTreeComponent,
];
class DoTreeModule {
}
DoTreeModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    NbIconModule,
                    TranslateModule,
                    TreeNgxModule,
                    DoBaseModule,
                ],
                declarations: [
                    ...TREE_COMPONENTS,
                ],
                exports: [
                    ...TREE_COMPONENTS,
                ],
            },] }
];

class DoLabelTextComponent {
    constructor() {
        this.colLabel = 3;
        this.colContent = 9;
        this.skeleton = false;
        this.content = '';
        this.label = '';
        this.nolabel = false;
        this.required = false;
    }
}
DoLabelTextComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-label-text',
                template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colContent\"\n  [required]=\"required\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colContent}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <span class=\"label-content\">{{content | translate}}</span>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colContent}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: [".label-content{color:#777c86;font-family:Open Sans,sans-serif;font-size:.75rem;font-weight:600}"]
            },] }
];
DoLabelTextComponent.ctorParameters = () => [];
DoLabelTextComponent.propDecorators = {
    colLabel: [{ type: Input }],
    colContent: [{ type: Input }],
    skeleton: [{ type: Input }],
    name: [{ type: Input }],
    content: [{ type: Input }],
    label: [{ type: Input }],
    nolabel: [{ type: Input }],
    required: [{ type: Input }],
    paramError: [{ type: Input }]
};

const LABEL_COMPONENTS = [
    DoLabelTextComponent,
];
class DoLabelModule {
}
DoLabelModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    NbIconModule,
                    TranslateModule,
                    DoBaseModule,
                ],
                declarations: [
                    ...LABEL_COMPONENTS,
                ],
                exports: [
                    ...LABEL_COMPONENTS,
                ],
            },] }
];

const COMMON_MODULES = [
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
class DoCommonModule {
}
DoCommonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    ...COMMON_MODULES,
                ],
                exports: [
                    ...COMMON_MODULES,
                ],
            },] }
];

class BaseComponent {
    constructor(injector) {
        this.injector = injector;
        this.api = injector.get(API);
        this.http = injector.get(HTTP_SERVICE);
    }
    exec(serviceName, apiName, body, headers, params, pathVariable, responseType) {
        return this.http.HTTP_AUTH(this.api[serviceName][apiName], body, headers, params, pathVariable, responseType);
    }
}

class BaseFormComponent extends BaseComponent {
    constructor(injector, controlsConfig) {
        super(injector);
        this.injector = injector;
        this.submitSubject$ = new Subject();
        this.destroy$ = new Subject();
        this.disabled = false;
        this.loadingForm = false;
        this.formBuilder = injector.get(FormBuilder);
        if (controlsConfig)
            this.formGroup = this.formBuilder.group(controlsConfig);
        this.toastr = injector.get(DoToastrService);
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
        this.onDestroy();
    }
    onSubmit(body, serviceName, apiName, disableToastr) {
        this.disabled = true;
        this.exec(serviceName, apiName, body ? body : this.formGroup.value)
            .subscribe((success) => {
            this.submitSubject$.next(success);
            this.formGroup.markAsPristine();
            this.disabled = false;
            if (!disableToastr)
                this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
        }, (error) => {
            this.submitSubject$.next(error);
            this.disabled = false;
            if (!disableToastr)
                this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
        return this.submitSubject$.asObservable();
    }
    onDestroy() { }
    onReset() { }
}

class BaseFilterComponent extends BaseFormComponent {
    constructor(injector, filtersConfig, controlsConfig) {
        super(injector, controlsConfig);
        this.injector = injector;
        this.rows = [];
        if (filtersConfig)
            this.formGroupFilter = this.formBuilder.group(filtersConfig);
    }
    doFilterAdvanced(keyword) {
        this.keyword = keyword;
    }
}

function fadeIn() {
    return [
        transition(':enter', [
            style({ opacity: 0 }),
            animate('400ms ease-in', style({ opacity: 1 })),
        ]),
    ];
}

class SelectResponseModel {
    constructor() {
        this.disabled = false;
    }
}
class SelectParamModel {
}

class Page {
}
class DatatableParamModel {
}
class DatatableFilter {
    constructor() {
        this.type = 'input';
    }
}

class LeafletModel {
    constructor() {
        this.title = '';
        this.alt = '';
    }
}

/*
 * Public API Surface of do-common
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BaseComponent, BaseFilterComponent, BaseFormComponent, DatatableFilter, DatatableParamModel, DoBaseModule, DoButtonModule, DoCalendarModule, DoChartsGraphModule, DoCheckBoxModule, DoCommonModule, DoDatePickerModule, DoEditorModule, DoImageModule, DoInputModule, DoLabelModule, DoMapsModule, DoProgressModule, DoRadioModule, DoSelectModule, DoSpinnerModule, DoTableModule, DoToastrModule, DoToastrService, DoTreeModule, LeafletModel, Page, SelectParamModel, SelectResponseModel, fadeIn, BASE_COMPONENTS as ɵa, BASE_DIRECTIVES as ɵb, EqualValidator as ɵba, NotEqualValidator as ɵbb, DragDropDirective as ɵbc, DoInputTextComponent as ɵbd, DoValueAccessor as ɵbe, DoValidatorAccessor as ɵbf, DoInputBaseIconComponent as ɵbg, DoInputIconComponent as ɵbh, DoInputCurrencyComponent as ɵbi, DoButtonSubmitComponent as ɵbj, DoDatePickerComponent as ɵbk, DoCheckboxComponent as ɵbl, DoRadioComponent as ɵbm, MCECoreComponent as ɵbn, TinyMCEComponent as ɵbo, CaldeiraKnabbenEditorComponent as ɵbp, DoTextareaComponent as ɵbq, DoChartComponent as ɵbr, DoMapsLeafletComponent as ɵbs, DoMapsAgmComponent as ɵbt, DoSelectComponent as ɵbu, ContentSelectDirective as ɵbv, DoDatatableComponent as ɵbw, DoDatatableBaseComponent as ɵbx, DoDatatableHeaderComponent as ɵby, DoDatatableCollapseComponent as ɵbz, CALENDAR_COMPONENTS as ɵc, ImageUploadComponent as ɵca, DoTreeComponent as ɵcb, DoLabelTextComponent as ɵcc, CHART_COMPONENTS as ɵd, CHECKBOX_COMPONENTS as ɵe, BUTTON_COMPONENTS as ɵf, DATEPICKER_COMPONENTS as ɵg, EDITOR_COMPONENTS as ɵh, INPUT_COMPONENTS as ɵi, MAPS_COMPONENTS as ɵj, PROGRESS_COMPONENTS as ɵk, RADIO_COMPONENTS as ɵl, SELECT_COMPONENTS as ɵm, SELECT_DIRECTIVES as ɵn, SPINNER_COMPONENTS as ɵo, TABLE_COMPONENTS as ɵp, TOASTR_COMPONENTS as ɵq, TOASTR_PROVIDERS as ɵr, IMAGE_COMPONENTS as ɵs, TREE_COMPONENTS as ɵt, LABEL_COMPONENTS as ɵu, DoPageOutletComponent as ɵv, DoContainerOutletComponent as ɵw, DoWarnMessageComponent as ɵx, DoErrorMessageComponent as ɵy, CurrencyMaskDirective as ɵz };
//# sourceMappingURL=dongkap-do-common.js.map
