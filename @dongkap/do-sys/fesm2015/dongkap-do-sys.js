import { Component, Injectable, Injector, NgModule, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { NbDialogRef, NbDialogService, NbCardModule, NbAlertModule, NbIconModule, NbDialogModule, NbIconLibraries, NbTabsetModule, NbSpinnerModule } from '@nebular/theme';
import { DoThemeModule } from '@dongkap/do-theme';
import { BaseFilterComponent, BaseFormComponent, DoInputModule, DoCheckBoxModule, DoButtonModule, DoBaseModule, DoSelectModule, DoTableModule, DoLabelModule, BaseComponent } from '@dongkap/do-common';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { SelectionType } from '@swimlane/ngx-datatable';
import { AuthGuardChildService } from '@dongkap/do-auth';
import { takeUntil, take, map } from 'rxjs/operators';
import { ResponseCode, LocaleModel } from '@dongkap/do-core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ReplaySubject, Subject } from 'rxjs';
import { TreeMode, TreeNgxModule } from 'tree-ngx';

class LocaleComponent {
}
LocaleComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-locale',
                template: `
    <router-outlet></router-outlet>
  `
            },] }
];

class LocaleService {
    getLocale() {
        return this.locale;
    }
    setLocale(locale) {
        this.locale = locale;
    }
}
LocaleService.decorators = [
    { type: Injectable }
];

class LocaleListPageComponent extends BaseFilterComponent {
    constructor(injector, router, localeService) {
        super(injector, {
            'localeCode': [],
            'identifier': [],
        });
        this.injector = injector;
        this.router = router;
        this.localeService = localeService;
        this.selectionType = SelectionType.single;
        this.columns = [
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
        this.expanded = false;
        this.apiPath = this.api['master']['datatable-locale'];
        this.filters = [
            { controlName: 'localeCode', type: 'input' },
            { controlName: 'identifier', type: 'input' }
        ];
    }
    ngOnInit() {
    }
    onAddGroup() {
        this.router.navigate(['/app/sysconf/i18n', 'add']);
    }
    onViewDetail(data) {
        this.localeService.setLocale(data);
        this.router.navigate(['/app/sysconf/i18n', 'edit']);
    }
    onReset() {
        this.router.navigate(['/app/sysconf/i18n']);
    }
    back() {
        this.router.navigate(['/app/sysconf/i18n']);
        return false;
    }
}
LocaleListPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: LocaleService }
];
LocaleListPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-locale-list-page',
                template: "<do-page-outlet [header]=\"'i18n'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onAdd)=\"onAddGroup()\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'localeCode'\"\n            [label]=\"'Locale Code'\"\n            formControlName=\"localeCode\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'identifier'\"\n            [label]=\"'Identifier'\"\n            formControlName=\"identifier\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n",
                styles: [""]
            },] }
];
LocaleListPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: LocaleService }
];

class DialogFlagComponent {
    constructor(ref) {
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
    choose(flag) {
        this.ref.close('flag-icon flag-icon-' + flag);
    }
}
DialogFlagComponent.ctorParameters = () => [
    { type: NbDialogRef }
];
DialogFlagComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-dialog-flag',
                template: "<nb-card>\n  <nb-card-header>\n    {{ 'Choose Flag' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <span class=\"flag-icon flag-icon-{{flag}} choose-flag\" (click)=\"choose(flag)\" *ngFor=\"let flag of flags\"></span>\n  </nb-card-body>\n</nb-card>\n",
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.deactivated-button{width:100%}.nb-theme-default :host .flag-icon{margin:.75rem}.nb-theme-default :host .choose-flag{cursor:pointer}.nb-theme-dark :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.deactivated-button{width:100%}.nb-theme-dark :host .flag-icon{margin:.75rem}.nb-theme-dark :host .choose-flag{cursor:pointer}.nb-theme-cosmic :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.deactivated-button{width:100%}.nb-theme-cosmic :host .flag-icon{margin:.75rem}.nb-theme-cosmic :host .choose-flag{cursor:pointer}.nb-theme-corporate :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.deactivated-button{width:100%}@media (max-width:767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.deactivated-button{font-size:.6rem}.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.deactivated-button{font-size:.6rem}.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.deactivated-button{font-size:.6rem}.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.deactivated-button{font-size:.6rem}}.nb-theme-corporate :host .flag-icon{margin:.75rem}.nb-theme-corporate :host .choose-flag{cursor:pointer}"]
            },] }
];
DialogFlagComponent.ctorParameters = () => [
    { type: NbDialogRef }
];

class LocaleAddEditPageComponent extends BaseFormComponent {
    constructor(injector, router, route, localeService, dialogService) {
        super(injector, {
            'language': [],
            'icon': [],
            'default': [],
        });
        this.injector = injector;
        this.router = router;
        this.route = route;
        this.localeService = localeService;
        this.dialogService = dialogService;
        this.action = 'Add';
        this.dataDefault = [
            {
                selected: false,
            },
        ];
        if (this.localeService.getLocale() || (this.route.snapshot.params['action'] === 'add')) {
            if ((this.route.snapshot.params['action'] === 'edit')) {
                this.action = 'Edit';
            }
            this.apiSelectLanguage = this.api['master']['select-language'];
            if (this.localeService.getLocale() && (this.route.snapshot.params['action'] === 'edit')) {
                if (this.localeService.getLocale().localeDefault) {
                    this.formGroup.get('default').setValue([{
                            selected: true,
                        }]);
                    this.formGroup.get('default').disable();
                }
                else {
                    this.formGroup.get('default').setValue([{
                            selected: false,
                        }]);
                }
                this.formGroup.get('icon').setValue(this.localeService.getLocale().icon);
                this.formGroup.get('language').setValue(this.localeService.getLocale().identifier);
                this.formGroup.get('language').disable();
            }
        }
        else {
            this.router.navigate(['/app/sysconf/i18n']);
        }
    }
    ngOnInit() { }
    onSearchFlag() {
        this.dialogService.open(DialogFlagComponent)
            .onClose.subscribe((flagIcon) => {
            this.formGroup.get('icon').setValue(flagIcon);
            this.formGroup.get('icon').markAsDirty();
        });
    }
    onReset() {
        this.router.navigate(['/app/sysconf/i18n']);
    }
    onSubmit() {
        const localeDefault = this.formGroup.get('default').value;
        const data = {
            icon: this.formGroup.get('icon').value,
            localeDefault: (localeDefault ? true : false),
            localeCode: this.formGroup.get('language').value['value'] ?
                this.formGroup.get('language').value['value'] : this.localeService.getLocale().localeCode,
            identifier: this.formGroup.get('language').value['label'] ?
                this.formGroup.get('language').value['label'] : this.localeService.getLocale().identifier,
            localeEnabled: true,
        };
        super.onSubmit(data, 'master', 'post-locale')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_SCR010.toString()) {
                this.router.navigate(['/app/sysconf/i18n']);
            }
        });
    }
}
LocaleAddEditPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ActivatedRoute },
    { type: LocaleService },
    { type: NbDialogService }
];
LocaleAddEditPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-locale-add-edit-page',
                template: "<do-page-outlet [header]=\"'header.'+action+'-i18n'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <do-select\n          [name]=\"'language'\"\n          [label]=\"'Language'\"\n          [required]=\"true\"\n          [api]=\"apiSelectLanguage\"\n          formControlName=\"language\">\n        </do-select>\n        <do-input-icon\n          [name]=\"'icon'\"\n          [label]=\"'Icon'\"\n          [required]=\"true\"\n          [icon]=\"'search-outline'\"\n          [iconcursor]=\"true\"\n          [eva]=\"true\"\n          (clickIcon)=\"onSearchFlag()\"\n          formControlName=\"icon\">\n        </do-input-icon>\n        <do-checkbox\n          [name]=\"'checkbox'\"\n          [label]=\"'System Default Language'\"\n          [data]=\"dataDefault\"\n          formControlName=\"default\">\n        </do-checkbox>\n        <div class=\"form-group row\">\n          <div class=\"offset-sm-3 col-sm-9\">\n            <button\n              type=\"reset\"\n              status=\"danger\"\n              (click)=\"onReset()\"\n              class=\"reset-left\"\n              nbButton>\n              {{ 'Cancel' | translate}}\n            </button>\n            <button\n              type=\"submit\"\n              status=\"primary\"\n              (click)=\"onSubmit()\"\n              [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n              class=\"submit-right\"\n              nbButton>\n              {{ action | translate}}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</do-page-outlet>\n",
                styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}"]
            },] }
];
LocaleAddEditPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ActivatedRoute },
    { type: LocaleService },
    { type: NbDialogService }
];

const ɵ0 = {
    code: '#SYSCONF-I18N-PAGE',
}, ɵ1 = {
    code: '#SYSCONF-I18N-PAGE',
};
const routes = [{
        path: '',
        component: LocaleComponent,
        canActivateChild: [AuthGuardChildService],
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
class DoLocaleRoutingModule {
}
DoLocaleRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];

const components = [
    LocaleComponent,
    LocaleListPageComponent,
    LocaleAddEditPageComponent,
    DialogFlagComponent,
];
const modules = [
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbDialogModule.forChild(),
    DoThemeModule,
    DoInputModule,
    DoCheckBoxModule,
    DoButtonModule,
    DoBaseModule,
    DoSelectModule,
    DoTableModule,
    DoLocaleRoutingModule,
];
const providers = [
    LocaleService,
];
const entryComponents = [
    DialogFlagComponent,
];
class DoLocaleModule {
}
DoLocaleModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ...modules,
                ],
                declarations: [
                    ...components,
                ],
                providers: [
                    ...providers,
                ],
                entryComponents: [
                    ...entryComponents,
                ],
            },] }
];

class ParameterComponent {
}
ParameterComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-parameter',
                template: `
    <router-outlet></router-outlet>
  `
            },] }
];

class ParameterService {
    getParameter() {
        return this.parameter;
    }
    setParameter(parameter) {
        this.parameter = parameter;
    }
    getParameterGroup() {
        return this.parameterGroup;
    }
    setParameterGroup(parameterGroup) {
        this.parameterGroup = parameterGroup;
    }
    getLocales() {
        return this.locales;
    }
    setLocales(locales) {
        this.locales = locales;
    }
}
ParameterService.decorators = [
    { type: Injectable }
];

class ParameterListGroupPageComponent extends BaseFilterComponent {
    constructor(injector, router, parameterService, dialogService) {
        super(injector, {
            'parameterGroupCode': [],
            'parameterGroupName': [],
        });
        this.injector = injector;
        this.router = router;
        this.parameterService = parameterService;
        this.dialogService = dialogService;
        this.columns = [
            { name: 'Parameter Group Code', prop: 'parameterGroupCode', width: 220, frozenLeft: true },
            { name: 'Parameter Group Name', prop: 'parameterGroupName', width: 200, frozenLeft: true },
            { name: 'Created', prop: 'createdBy' },
            { name: 'Created Date', prop: 'createdDate' },
            { name: 'Modified', prop: 'modifiedBy' },
            { name: 'Modified Date', prop: 'modifiedDate' },
            { name: 'Active', prop: 'active' },
        ];
        this.reload = false;
        this.filters = [
            { controlName: 'parameterGroupCode', type: 'input' },
            { controlName: 'parameterGroupName', type: 'input' }
        ];
        this.apiPath = this.api['master']['datatable-parameter-group'];
        this.apiPathLocale = this.api['master']['all-locale'];
        this.apiPathDelete = this.api['master']['delete-parameter-group'];
    }
    ngOnInit() {
        this.http.HTTP_AUTH(this.apiPathLocale).subscribe(value => {
            this.parameterService.setLocales(value);
        });
    }
    onAddGroup() {
        this.router.navigate(['/app/sysconf/parameter/group', 'add']);
    }
    onViewDetail(data) {
        this.parameterService.setParameterGroup({
            parameterGroupCode: data['parameterGroupCode'],
            parameterGroupName: data['parameterGroupName'],
        });
        this.router.navigate(['/app/sysconf/parameter/detail']);
    }
    onDeleteGroup(data, dialog) {
        this.parameterGroupCodes = [];
        data.forEach(value => {
            this.parameterGroupCodes.push(value.parameterGroupCode);
        });
        this.dialogService.open(dialog, { context: 'alert.delete' });
    }
    onDelete(ref) {
        this.disabled = true;
        this.http.HTTP_AUTH(this.apiPathDelete, this.parameterGroupCodes)
            .pipe(takeUntil(this.destroy$))
            .subscribe((success) => {
            ref.close();
            this.disabled = false;
            this.reload = true;
            this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
        }, (error) => {
            this.disabled = false;
            this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
    }
}
ParameterListGroupPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ParameterService },
    { type: NbDialogService }
];
ParameterListGroupPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-parameter-list-group-page',
                template: "<do-page-outlet [header]=\"'Parameter Group'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [reloadFn]=\"reload\"\n        (onAdd)=\"onAddGroup()\"\n        (onEdit)=\"onViewDetail($event)\"\n        (onDelete)=\"onDeleteGroup($event, dialogdelete)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'parameterGroupCode'\"\n            [label]=\"'Parameter Group Code'\"\n            formControlName=\"parameterGroupCode\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'parameterGroupName'\"\n            [label]=\"'Parameter Group Name'\"\n            formControlName=\"parameterGroupName\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n\n<ng-template #dialogdelete let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <div class=\"row\">\n        <button\n          type=\"reset\"\n          status=\"danger\"\n          (click)=\"ref.close()\"\n          class=\"reset-left\"\n          nbButton>\n          {{ 'Cancel' | translate}}\n        </button>\n        <button\n          type=\"submit\"\n          status=\"primary\"\n          (click)=\"onDelete(ref)\"\n          [disabled]=\"disabled\"\n          class=\"submit-right\"\n          nbButton>\n          {{ 'Delete' | translate}}\n        </button>\n      </div>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>",
                styles: [".reset-left{margin-left:1rem;margin-right:.5rem}.submit-right{margin-left:.5rem}"]
            },] }
];
ParameterListGroupPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ParameterService },
    { type: NbDialogService }
];

class ParameterAddGroupPageComponent extends BaseFormComponent {
    constructor(injector, router) {
        super(injector, {
            'parameterGroupCode': [],
            'parameterGroupName': [],
        });
        this.injector = injector;
        this.router = router;
    }
    ngOnInit() { }
    onReset() {
        this.router.navigate(['/app/sysconf/parameter']);
    }
    onSubmit() {
        super.onSubmit(this.formGroup.value, 'master', 'post-parameter-group')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_SCR009.toString()) {
                this.router.navigate(['/app/sysconf/parameter']);
            }
        });
    }
}
ParameterAddGroupPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router }
];
ParameterAddGroupPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-parameter-add-group-page',
                template: "<do-page-outlet [header]=\"'Add Parameter Group'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'parameterGroupCode'\"\n          [label]=\"'Parameter Group Code'\"\n          [required]=\"true\"\n          formControlName=\"parameterGroupCode\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'parameterGroupName'\"\n          [label]=\"'Parameter Group Name'\"\n          [required]=\"true\"\n          formControlName=\"parameterGroupName\">\n        </do-input-text>\n        <div class=\"form-group row\">\n          <div class=\"offset-sm-3 col-sm-9\">\n            <button\n              type=\"reset\"\n              status=\"danger\"\n              (click)=\"onReset()\"\n              class=\"reset-left\"\n              nbButton>\n              {{ 'Cancel' | translate}}\n            </button>\n            <button\n              type=\"submit\"\n              status=\"primary\"\n              (click)=\"onSubmit()\"\n              [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n              class=\"submit-right\"\n              nbButton>\n              {{ 'Add' | translate}}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</do-page-outlet>\n",
                styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}"]
            },] }
];
ParameterAddGroupPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router }
];

class ParameterGroupModel {
}
class ParameterModel extends ParameterGroupModel {
}
class ParameterI18nModel extends ParameterModel {
}

class ParameterEditGroupCollapseComponent {
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
ParameterEditGroupCollapseComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-parameter-edit-group-collapse, [do-parameter-edit-group-collapse]',
                template: "<div class=\"row\"\n    [@openedState]=\"openedState$ | async\"\n    [ngClass]=\"openedState$ | async\">\n    <ng-content></ng-content>\n</div>",
                animations: [
                    trigger('openedState', [
                        state('collapsed', style({
                            opacity: 0,
                            overflow: 'hidden',
                            height: '0px',
                            minHeight: '0',
                            padding: '0 0 0 1.25rem',
                        })),
                        state('expanded', style({
                            opacity: 1,
                            overflow: 'hidden',
                            height: '*',
                            padding: '0 1.25rem',
                        })),
                        transition('collapsed <=> expanded', animate('500ms ease-in-out')),
                    ]),
                ],
                styles: [""]
            },] }
];
ParameterEditGroupCollapseComponent.ctorParameters = () => [];

class ParameterListDetailPageComponent extends BaseFilterComponent {
    constructor(injector, router, parameterService) {
        super(injector, {
            'parameterCode': [],
        }, {
            'parameterGroupCode': [],
            'parameterGroupName': [],
        });
        this.injector = injector;
        this.router = router;
        this.parameterService = parameterService;
        this.selectionType = SelectionType.single;
        this.columns = [
            { name: 'Parameter Code', prop: 'parameterCode', width: 350, frozenLeft: true },
            { name: 'Created', prop: 'createdBy' },
            { name: 'Created Date', prop: 'createdDate' },
            { name: 'Modified', prop: 'modifiedBy' },
            { name: 'Modified Date', prop: 'modifiedDate' },
            { name: 'Active', prop: 'active' },
        ];
        this.parameterGroup = new ParameterGroupModel();
        this.expanded = false;
        if (this.parameterService.getParameterGroup()) {
            this.apiPath = this.api['master']['datatable-parameter'];
            this.filters = [{ controlName: 'parameterCode', type: 'input' }];
            this.parameterGroup = this.parameterService.getParameterGroup();
            this.keyword = {
                parameterGroupCode: this.parameterGroup.parameterGroupCode,
            };
            this.formGroup.get('parameterGroupCode').setValue(this.parameterGroup.parameterGroupCode);
            this.formGroup.get('parameterGroupName').setValue(this.parameterGroup.parameterGroupName);
        }
        else {
            this.router.navigate(['/app/sysconf/parameter']);
        }
    }
    ngOnInit() {
    }
    onAddGroup(event) {
        this.parameterService.setParameter(null);
        this.router.navigate(['/app/sysconf/parameter/detail', 'add']);
    }
    onViewDetail(data) {
        this.parameterService.setParameter({
            parameterGroupCode: data['parameterGroupCode'],
            parameterGroupName: data['parameterGroupName'],
            parameterCode: data['parameterCode'],
        });
        this.router.navigate(['/app/sysconf/parameter/detail', 'edit']);
    }
    onReset() {
        this.router.navigate(['/app/sysconf/parameter']);
    }
    back() {
        this.router.navigate(['/app/sysconf/parameter']);
        return false;
    }
    doExpanded() {
        this.collapse.toggle();
        this.expanded = !this.expanded;
    }
    onSubmit() {
        super.onSubmit(this.formGroup.value, 'master', 'post-parameter-group');
    }
}
ParameterListDetailPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ParameterService }
];
ParameterListDetailPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-parameter-list-detail-page',
                template: "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n        <nav class=\"navigation\">\n            <a href=\"#\" (click)=\"back()\" class=\"link back-link\" aria-label=\"Back\">\n                <nb-icon icon=\"arrow-back\"></nb-icon>\n            </a>\n            {{'Edit Parameter Group' | translate}}\n            <div class=\"link back-link parameter-expanded\">\n              <nb-icon\n                  [icon]=\"expanded ? 'arrow-upward-outline' : 'arrow-downward-outline'\"\n                  (click)=\"doExpanded()\">\n              </nb-icon>\n            </div>\n        </nav>\n      </nb-card-header>\n      <div do-parameter-edit-group-collapse #collapseparameter>\n        <nb-card-body>\n          <div class=\"row\">\n            <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n              <form [formGroup]=\"formGroup\">\n                <do-input-text\n                  [name]=\"'parameterGroupName'\"\n                  [label]=\"'Parameter Group Name'\"\n                  [required]=\"true\"\n                  formControlName=\"parameterGroupName\">\n                </do-input-text>\n                <div class=\"form-group row\">\n                  <div class=\"offset-sm-3 col-sm-9\">\n                    <button\n                      type=\"reset\"\n                      status=\"danger\"\n                      (click)=\"onReset()\"\n                      class=\"reset-left\"\n                      nbButton>\n                      {{ 'Cancel' | translate}}\n                    </button>\n                    <button\n                      type=\"submit\"\n                      status=\"primary\"\n                      (click)=\"onSubmit()\"\n                      [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n                      class=\"submit-right\"\n                      nbButton>\n                      {{ 'Edit' | translate}}\n                    </button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </nb-card-body>\n      </div>\n    </nb-card>\n  </div>\n</div>\n\n<do-page-outlet [url]=\"'/app/sysconf/parameter'\" [header]=\"'header.parameter'\" [param]=\"{value: parameterGroup.parameterGroupName}\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onAdd)=\"onAddGroup($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'parameterCode'\"\n            [label]=\"'Parameter Code'\"\n            formControlName=\"parameterCode\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n",
                styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}.parameter-expanded{position:absolute;right:0;padding:0 1.75rem;cursor:pointer}"]
            },] }
];
ParameterListDetailPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ParameterService }
];
ParameterListDetailPageComponent.propDecorators = {
    collapse: [{ type: ViewChild, args: ['collapseparameter', { static: false },] }]
};

class ParameterDoDetailPageComponent extends BaseFormComponent {
    constructor(injector, router, parameterService, route) {
        super(injector, {
            'parameterCode': [],
            'en-US': [],
            'id-ID': [],
        });
        this.injector = injector;
        this.router = router;
        this.parameterService = parameterService;
        this.route = route;
        this.action = 'Add';
        this.parameter = new ParameterModel();
        this.parameterGroup = new ParameterGroupModel();
        this.allLocales = [];
        this.locales = [];
        this.localeDefault = new LocaleModel();
        this.isEdit = false;
        if (this.parameterService.getParameterGroup()) {
            this.parameterGroup = this.parameterService.getParameterGroup();
            if ((this.route.snapshot.params['action'] === 'edit')) {
                if (this.parameterService.getParameter()) {
                    this.action = 'Edit';
                    this.isEdit = true;
                    this.parameter = this.parameterService.getParameter();
                }
                else {
                    this.router.navigate(['/app/sysconf/parameter']);
                }
            }
            if (!this.parameterService.getLocales()) {
                this.apiPathLocale = this.api['master']['all-locale'];
                this.http.HTTP_AUTH(this.apiPathLocale).subscribe(response => {
                    this.parameterService.setLocales(response);
                    this.splitLocale(response);
                });
            }
            else {
                this.splitLocale(this.parameterService.getLocales());
            }
            if (this.isEdit) {
                this.formGroup.get('parameterCode').setValue(this.parameter.parameterCode);
                this.formGroup.get('parameterCode').disable({ emitEvent: true });
                this.apiPathParameterI18n = this.api['master']['all-parameter-i18n'];
                this.loadingForm = true;
                this.http.HTTP_AUTH(this.apiPathParameterI18n, {
                    'parameterCode': this.parameter.parameterCode,
                }).subscribe((response) => {
                    response.forEach(data => {
                        this.formGroup.get(data.locale).setValue(data.parameterValue);
                        this.loadingForm = false;
                    });
                });
            }
        }
        else {
            this.router.navigate(['/app/sysconf/parameter']);
        }
    }
    splitLocale(values) {
        this.allLocales = values;
        values.forEach(data => {
            if (data.localeDefault) {
                this.localeDefault = data;
            }
            else {
                this.locales.push(data);
            }
            this.formGroup.removeControl(data.localeCode);
            this.formGroup.addControl(data.localeCode, new FormControl());
        });
    }
    ngOnInit() { }
    onReset() {
        this.router.navigate(['/app/sysconf/parameter/detail']);
    }
    onSubmit() {
        const data = this.formGroup.value;
        if (this.isEdit)
            data.parameterCode = this.parameter.parameterCode;
        data.parameterGroupCode = this.parameterGroup.parameterGroupCode;
        data.parameterValues = {};
        this.allLocales.forEach(value => {
            data.parameterValues[value.localeCode] = this.formGroup.get(value.localeCode).value;
        });
        super.onSubmit(data, 'master', 'post-parameter-i18n')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_SCR009.toString()) {
                this.router.navigate(['/app/sysconf/parameter/detail']);
            }
        });
    }
}
ParameterDoDetailPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ParameterService },
    { type: ActivatedRoute }
];
ParameterDoDetailPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-parameter-do-detail-page',
                template: "<do-page-outlet [header]=\"action + ' Parameter'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'parameterCode'\"\n          [label]=\"'Parameter Code'\"\n          [required]=\"!isEdit\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"parameterCode\">\n        </do-input-text>\n        <div class=\"header\">\n          <div class=\"form-group row\">\n            <label\n              for=\"Parameter Value\"\n              class=\"label col-sm-3 col-form-label\"\n              *ngIf=\"!loadingForm; else labelskeleton\">\n              {{'Parameter Value' | translate}}\n            </label>\n            <ng-template #labelskeleton>\n              <div class=\"col-sm-3\">\n                <div\n                  [ngClass]=\"{\n                    'label-skeleton': true,\n                    'skeleton': loadingForm\n                  }\">\n                </div>\n              </div>\n            </ng-template>\n            <div class=\"col-sm-9\">\n              <do-input-icon *ngIf=\"localeDefault.localeCode\"\n                [name]=\"localeDefault.localeCode\"\n                [nolabel]=\"true\"\n                [required]=\"true\"\n                [colLabel]=\"0\"\n                [colInput]=\"12\"\n                [icon]=\"'flag-icon flag-icon-' + localeDefault.icon\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"{{localeDefault.localeCode}}\">\n              </do-input-icon>\n            </div>\n          </div>\n        </div>\n        <do-input-icon *ngFor=\"let i18n of locales\"\n          [name]=\"i18n.localeCode\"\n          [nolabel]=\"true\"\n          [icon]=\"'flag-icon flag-icon-'+ i18n.icon\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"{{i18n.localeCode}}\">\n        </do-input-icon>\n        <div class=\"form-group row\">\n          <div class=\"offset-sm-3 col-sm-9\" *ngIf=\"!loadingForm; else buttonskeleton\">\n            <button\n              type=\"reset\"\n              status=\"danger\"\n              (click)=\"onReset()\"\n              class=\"reset-left\"\n              nbButton>\n              {{ 'Cancel' | translate}}\n            </button>\n            <button\n              type=\"submit\"\n              status=\"primary\"\n              (click)=\"onSubmit()\"\n              [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n              class=\"submit-right\"\n              nbButton>\n              {{ action | translate}}\n            </button>\n          </div>\n          <ng-template #buttonskeleton>\n            <div class=\"offset-sm-3 col-sm-9\">\n              <div\n                [ngClass]=\"{\n                  'button-skeleton': true,\n                  'skeleton': loadingForm\n                }\">\n              </div>\n            </div>\n          </ng-template>\n        </div>\n      </form>\n    </div>\n  </div>\n</do-page-outlet>\n",
                styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}"]
            },] }
];
ParameterDoDetailPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ParameterService },
    { type: ActivatedRoute }
];

const ɵ0$1 = {
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
const routes$1 = [{
        path: '',
        component: ParameterComponent,
        canActivateChild: [AuthGuardChildService],
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
class DoParameterRoutingModule {
}
DoParameterRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes$1)],
                exports: [RouterModule],
            },] }
];

const components$1 = [
    ParameterComponent,
    ParameterListGroupPageComponent,
    ParameterAddGroupPageComponent,
    ParameterEditGroupCollapseComponent,
    ParameterListDetailPageComponent,
    ParameterDoDetailPageComponent,
];
const modules$1 = [
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbDialogModule.forChild(),
    DoThemeModule,
    DoInputModule,
    DoCheckBoxModule,
    DoButtonModule,
    DoBaseModule,
    DoSelectModule,
    DoTableModule,
    DoParameterRoutingModule,
];
const providers$1 = [
    ParameterService,
];
class DoParameterModule {
}
DoParameterModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ...modules$1,
                ],
                declarations: [
                    ...components$1,
                ],
                providers: [
                    ...providers$1,
                ],
            },] }
];

class MgmtUserComponent {
}
MgmtUserComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-mgmt-user',
                template: `
    <router-outlet></router-outlet>
  `
            },] }
];

class ManagementUserService {
    getUser() {
        return this.user;
    }
    setUser(user) {
        this.user = user;
    }
}
ManagementUserService.decorators = [
    { type: Injectable }
];

class MgmtEndUserListPageComponent extends BaseFilterComponent {
    constructor(injector, router, userService) {
        super(injector, {
            'username': [],
            'name': [],
            'phoneNumber': [],
        });
        this.injector = injector;
        this.router = router;
        this.userService = userService;
        this.selectionType = SelectionType.single;
        this.columns = [
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
        this.expanded = false;
        this.apiPath = this.api['security']['datatable-user'];
        this.filters = [
            { controlName: 'username', type: 'input' },
            { controlName: 'name', type: 'input' },
            { controlName: 'phoneNumber', type: 'input' }
        ];
        this.keyword = {
            authority: 'ROLE_END',
        };
    }
    ngOnInit() { }
    onViewDetail(data) {
        this.userService.setUser(data);
        this.router.navigate(['/app/mgmt/user/end/detail']);
    }
}
MgmtEndUserListPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ManagementUserService }
];
MgmtEndUserListPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-mgmt-end-user-list-page',
                template: "<do-page-outlet [header]=\"'header.user-management'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [add]=\"false\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'username'\"\n            [label]=\"'Username'\"\n            formControlName=\"username\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'name'\"\n            [label]=\"'Name'\"\n            formControlName=\"name\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'phoneNumber'\"\n            [label]=\"'Phone Number'\"\n            formControlName=\"phoneNumber\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n",
                styles: [""]
            },] }
];
MgmtEndUserListPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ManagementUserService }
];

class MgmtEndUserDetailPageComponent extends BaseFormComponent {
    constructor(injector, router, userService) {
        super(injector);
        this.injector = injector;
        this.router = router;
        this.userService = userService;
        this.profile = {};
        this.imageDefault = `${document.getElementsByTagName('base')[0].href}/assets/images/avatars/default.png`;
    }
    ngOnInit() {
        this.onInit('security', 'get-profile-other');
    }
    onInit(serviceName, apiName) {
        if (!this.userService.getUser()) {
            this.router.navigate(['/app/mgmt/user/end']);
            return;
        }
        this.loadingForm = true;
        const data = {
            username: this.userService.getUser().username,
        };
        this.exec(serviceName, apiName, data)
            .pipe(takeUntil(this.destroy$))
            .subscribe((success) => {
            this.loadingForm = false;
            this.profile = success;
            if (success['image']) {
                this.image = success['image'];
            }
        }, (error) => {
            this.loadingForm = true;
            const err = error['error'];
            if (err) {
                this.toastr.showI18n(err.respStatusMessage[err.respStatusCode], true, null, 'danger');
            }
            else {
                this.toastr.showI18n(err, true, null, 'danger');
            }
        });
    }
}
MgmtEndUserDetailPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ManagementUserService }
];
MgmtEndUserDetailPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-mgmt-end-user-detail-page',
                template: "<do-page-outlet [url]=\"'/app/mgmt/user/end'\" [header]=\"'header.user-profile'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n      <div class=\"photo-profile\"\n        [ngStyle]=\"{ \n          'background-image': 'url(' + (image? image: imageDefault) + ')'\n        }\">\n      </div>\n    </div>\n    <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n      <div class=\"split-row\">\n        <do-label-text\n          [label]=\"'Name'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.name\"\n          [skeleton]=\"loadingForm\">\n        </do-label-text>\n        <do-label-text\n          [label]=\"'ID Number'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.idNumber\"\n          [skeleton]=\"loadingForm\">\n        </do-label-text>\n        <do-label-text\n          [label]=\"'Gender'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.gender\"\n          [skeleton]=\"loadingForm\">\n        </do-label-text>\n        <do-label-text\n          [label]=\"'Place / Date of Birth'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.placeOfBirth ? (profile.placeOfBirth + ', ' + profile.dateOfBirth) : ''\"\n          [skeleton]=\"loadingForm\">\n        </do-label-text>\n      </div>\n      <div class=\"split-row\">\n        <do-label-text\n          [label]=\"'Username'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.username\"\n          [skeleton]=\"loadingForm\">\n        </do-label-text>\n        <do-label-text\n          [label]=\"'Email'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.email\"\n          [skeleton]=\"loadingForm\">\n        </do-label-text>\n        <do-label-text\n          [label]=\"'Phone Number'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.phoneNumber\"\n          [skeleton]=\"loadingForm\">\n        </do-label-text>\n        <do-label-text\n          [label]=\"'Address'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.address\"\n          [skeleton]=\"loadingForm\">\n        </do-label-text>\n        <do-label-text\n          [label]=\"'Country'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.country\"\n          [skeleton]=\"loadingForm\">\n        </do-label-text>\n      </div>\n    </div>\n  </div>\n</do-page-outlet>\n",
                styles: [".nb-theme-default :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-default :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-dark :host .split-row{border-bottom:1px solid #151a30;margin-bottom:1rem}.nb-theme-dark :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-cosmic :host .split-row{border-bottom:1px solid #1b1b38;margin-bottom:1rem}.nb-theme-cosmic :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-corporate :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-corporate :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}"]
            },] }
];
MgmtEndUserDetailPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ManagementUserService }
];

class MgmtAdminListPageComponent extends BaseFilterComponent {
    constructor(injector, router, userService) {
        super(injector, {
            'username': [],
            'name': [],
            'phoneNumber': [],
        });
        this.injector = injector;
        this.router = router;
        this.userService = userService;
        this.selectionType = SelectionType.single;
        this.columns = [
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
        this.expanded = false;
        this.apiPath = this.api['security']['datatable-user'];
        this.filters = [
            { controlName: 'username', type: 'input' },
            { controlName: 'name', type: 'input' },
            { controlName: 'phoneNumber', type: 'input' }
        ];
        this.keyword = {
            authority: 'ROLE_ADMIN',
        };
    }
    ngOnInit() { }
    onViewDetail(data) {
        this.userService.setUser(data);
        this.router.navigate(['/app/mgmt/user/admin/detail']);
    }
}
MgmtAdminListPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ManagementUserService }
];
MgmtAdminListPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-mgmt-admin-list-page',
                template: "<do-page-outlet [header]=\"'header.admin-management'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [add]=\"false\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'username'\"\n            [label]=\"'Username'\"\n            formControlName=\"username\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'name'\"\n            [label]=\"'Name'\"\n            formControlName=\"name\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'phoneNumber'\"\n            [label]=\"'Phone Number'\"\n            formControlName=\"phoneNumber\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n",
                styles: [""]
            },] }
];
MgmtAdminListPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ManagementUserService }
];

class MgmtAdminDetailPageComponent extends BaseFormComponent {
    constructor(injector, router, userService) {
        super(injector);
        this.injector = injector;
        this.router = router;
        this.userService = userService;
        this.profile = {};
        this.imageDefault = `${document.getElementsByTagName('base')[0].href}/assets/images/avatars/default.png`;
    }
    ngOnInit() {
        this.onInit('security', 'get-profile-system-other');
    }
    onInit(serviceName, apiName) {
        if (!this.userService.getUser()) {
            this.router.navigate(['/app/mgmt/user/admin']);
            return;
        }
        this.loadingForm = true;
        const data = {
            username: this.userService.getUser().username,
        };
        this.exec(serviceName, apiName, data)
            .pipe(takeUntil(this.destroy$))
            .subscribe((success) => {
            this.loadingForm = false;
            this.profile = success;
            if (success['image']) {
                this.image = success['image'];
            }
        }, (error) => {
            this.loadingForm = true;
            const err = error['error'];
            if (err) {
                this.toastr.showI18n(err.respStatusMessage[err.respStatusCode], true, null, 'danger');
            }
            else {
                this.toastr.showI18n(err, true, null, 'danger');
            }
        });
    }
}
MgmtAdminDetailPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ManagementUserService }
];
MgmtAdminDetailPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-mgmt-admin-detail-page',
                template: "<do-page-outlet [url]=\"'/app/mgmt/user/admin'\" [header]=\"'header.admin-profile'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n      <div class=\"photo-profile\"\n        [ngStyle]=\"{ \n          'background-image': 'url(' + (image? image: imageDefault) + ')'\n        }\">\n      </div>\n    </div>\n    <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n      <do-label-text\n        [label]=\"'Name'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.name\"\n        [skeleton]=\"loadingForm\">\n      </do-label-text>\n      <do-label-text\n        [label]=\"'Username'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.username\"\n        [skeleton]=\"loadingForm\">\n      </do-label-text>\n      <do-label-text\n        [label]=\"'Email'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.email\"\n        [skeleton]=\"loadingForm\">\n      </do-label-text>\n      <do-label-text\n        [label]=\"'Phone Number'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.phoneNumber\"\n        [skeleton]=\"loadingForm\">\n      </do-label-text>\n      <do-label-text\n        [label]=\"'Address'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.address\"\n        [skeleton]=\"loadingForm\">\n      </do-label-text>\n      <do-label-text\n        [label]=\"'Country'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.country\"\n        [skeleton]=\"loadingForm\">\n      </do-label-text>\n    </div>\n  </div>\n</do-page-outlet>\n",
                styles: [".nb-theme-default :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-default :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-dark :host .split-row{border-bottom:1px solid #151a30;margin-bottom:1rem}.nb-theme-dark :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-cosmic :host .split-row{border-bottom:1px solid #1b1b38;margin-bottom:1rem}.nb-theme-cosmic :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-corporate :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-corporate :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}"]
            },] }
];
MgmtAdminDetailPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ManagementUserService }
];

const ɵ0$2 = {
    code: '#MANAGEMENT-END-USER-PAGE',
}, ɵ1$2 = {
    code: '#MANAGEMENT-END-USER-PAGE',
}, ɵ2$1 = {
    code: '#MANAGEMENT-ADMIN-PAGE',
}, ɵ3$1 = {
    code: '#MANAGEMENT-ADMIN-PAGE',
};
const routes$2 = [{
        path: '',
        component: MgmtUserComponent,
        canActivateChild: [AuthGuardChildService],
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
class DoMgmtUserRoutingModule {
}
DoMgmtUserRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes$2)],
                exports: [RouterModule],
            },] }
];

const components$2 = [
    MgmtUserComponent,
    MgmtEndUserListPageComponent,
    MgmtEndUserDetailPageComponent,
    MgmtAdminListPageComponent,
    MgmtAdminDetailPageComponent,
];
const modules$2 = [
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbDialogModule.forChild(),
    DoThemeModule,
    DoInputModule,
    DoButtonModule,
    DoBaseModule,
    DoTableModule,
    DoLabelModule,
    DoMgmtUserRoutingModule,
];
const providers$2 = [
    ManagementUserService,
];
const entry_components = [];
class DoMgmtUserModule {
}
DoMgmtUserModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ...modules$2,
                ],
                declarations: [
                    ...components$2,
                ],
                providers: [
                    ...providers$2,
                ],
                entryComponents: [
                    ...entry_components,
                ],
            },] }
];

class MgmtRoleComponent {
}
MgmtRoleComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-mgmt-role',
                template: `
    <router-outlet></router-outlet>
  `
            },] }
];

class RoleService {
    getRole() {
        return this.role;
    }
    setRole(role) {
        this.role = role;
    }
}
RoleService.decorators = [
    { type: Injectable }
];

class RoleListPageComponent extends BaseFilterComponent {
    constructor(injector, router, roleService) {
        super(injector, {
            'authority': [],
            'description': [],
        });
        this.injector = injector;
        this.router = router;
        this.roleService = roleService;
        this.selectionType = SelectionType.single;
        this.columns = [
            { name: 'Authority', prop: 'authority', width: 150, frozenLeft: true },
            { name: 'Description', prop: 'description', width: 275, frozenLeft: true },
            { name: 'Created', prop: 'createdBy' },
            { name: 'Created Date', prop: 'createdDate' },
            { name: 'Modified', prop: 'modifiedBy' },
            { name: 'Modified Date', prop: 'modifiedDate' },
            { name: 'Active', prop: 'active' },
        ];
        this.expanded = false;
        this.apiPath = this.api['security']['datatable-role'];
        this.filters = [
            { controlName: 'authority', type: 'input' },
            { controlName: 'description', type: 'input' }
        ];
    }
    ngOnInit() {
    }
    onAddGroup() {
        this.router.navigate(['/app/mgmt/role', 'add']);
    }
    onViewDetail(data) {
        this.roleService.setRole(data);
        this.router.navigate(['/app/mgmt/role', 'edit']);
    }
    onReset() {
        this.router.navigate(['/app/mgmt/role']);
    }
    back() {
        this.router.navigate(['/app/mgmt/role']);
        return false;
    }
}
RoleListPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: RoleService }
];
RoleListPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-role-list-page',
                template: "<do-page-outlet [header]=\"'header.role-management'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onAdd)=\"onAddGroup()\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'authority'\"\n            [label]=\"'Authority'\"\n            formControlName=\"authority\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'description'\"\n            [label]=\"'Description'\"\n            formControlName=\"description\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n",
                styles: [""]
            },] }
];
RoleListPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: RoleService }
];

;
class RoleAddEditPageComponent extends BaseFormComponent {
    constructor(injector, router, route, roleService) {
        super(injector, {
            'authority': [],
            'description': [],
        });
        this.injector = injector;
        this.router = router;
        this.route = route;
        this.roleService = roleService;
        this.action = 'Add';
        this.dataDefault = [
            {
                selected: false,
            },
        ];
        if ((this.route.snapshot.params['action'] === 'edit')) {
            this.action = 'Edit';
            if (!this.roleService.getRole()) {
                this.router.navigate(['/app/mgmt/role']);
            }
        }
        if (this.roleService.getRole() && (this.route.snapshot.params['action'] === 'edit')) {
            this.formGroup.get('authority').setValue(this.roleService.getRole().authority);
            this.formGroup.get('description').setValue(this.roleService.getRole().description);
        }
    }
    ngOnInit() { }
    onReset() {
        this.router.navigate(['/app/mgmt/role']);
    }
    onSubmit() {
        const data = {
            authority: this.formGroup.get('authority').value,
            description: this.formGroup.get('description').value,
        };
        super.onSubmit(data, 'security', 'post-role')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                this.router.navigate(['/app/mgmt/role']);
            }
        });
    }
}
RoleAddEditPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ActivatedRoute },
    { type: RoleService }
];
RoleAddEditPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-language-add-edit-page',
                template: "<do-page-outlet [header]=\"'header.'+action+'-role'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'authority'\"\n          [label]=\"'Authority'\"\n          [required]=\"true\"\n          formControlName=\"authority\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'description'\"\n          [label]=\"'Description'\"\n          [required]=\"true\"\n          formControlName=\"description\">\n        </do-input-text>\n        <div class=\"form-group row\">\n          <div class=\"offset-sm-3 col-sm-9\">\n            <button\n              type=\"reset\"\n              status=\"danger\"\n              (click)=\"onReset()\"\n              class=\"reset-left\"\n              nbButton>\n              {{ 'Cancel' | translate}}\n            </button>\n            <button\n              type=\"submit\"\n              status=\"primary\"\n              (click)=\"onSubmit()\"\n              [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n              class=\"submit-right\"\n              nbButton>\n              {{ action | translate}}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</do-page-outlet>\n",
                styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}"]
            },] }
];
RoleAddEditPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ActivatedRoute },
    { type: RoleService }
];

const ɵ0$3 = {
    code: '#MANAGEMENT-ROLE-PAGE',
}, ɵ1$3 = {
    code: '#MANAGEMENT-ROLE-PAGE',
};
const routes$3 = [{
        path: '',
        component: MgmtRoleComponent,
        canActivateChild: [AuthGuardChildService],
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
class DoMgmtRoleRoutingModule {
}
DoMgmtRoleRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes$3)],
                exports: [RouterModule],
            },] }
];

const components$3 = [
    MgmtRoleComponent,
    RoleListPageComponent,
    RoleAddEditPageComponent,
];
const modules$3 = [
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbDialogModule.forChild(),
    DoThemeModule,
    DoInputModule,
    DoCheckBoxModule,
    DoButtonModule,
    DoBaseModule,
    DoSelectModule,
    DoTableModule,
    DoMgmtRoleRoutingModule,
];
const providers$3 = [
    RoleService,
];
class DoMgmtRoleModule {
}
DoMgmtRoleModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ...modules$3,
                ],
                declarations: [
                    ...components$3,
                ],
                providers: [
                    ...providers$3,
                ],
            },] }
];

class MgmtMenuComponent {
}
MgmtMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-mgmt-menu',
                template: `
    <router-outlet></router-outlet>
  `
            },] }
];

class DialogIconComponent {
    constructor(ref, iconsLibrary) {
        this.ref = ref;
        this.evaIcons = [];
        this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
            .filter(icon => icon.indexOf('outline') !== -1);
    }
    choose(icon) {
        this.ref.close(icon);
    }
}
DialogIconComponent.ctorParameters = () => [
    { type: NbDialogRef },
    { type: NbIconLibraries }
];
DialogIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-dialog-icon',
                template: "<nb-card>\n  <nb-card-header>\n    {{ 'Choose Icon' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <nb-icon *ngFor=\"let icon of evaIcons\" class=\"choose-icon\" (click)=\"choose(icon)\" [icon]=\"icon\" pack=\"eva\"></nb-icon>\n  </nb-card-body>\n</nb-card>\n",
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host .choose-icon{margin:.75rem;cursor:pointer}.nb-theme-dark :host .choose-icon{margin:.75rem;cursor:pointer}.nb-theme-cosmic :host .choose-icon{margin:.75rem;cursor:pointer}.nb-theme-corporate :host .choose-icon{margin:.75rem;cursor:pointer}"]
            },] }
];
DialogIconComponent.ctorParameters = () => [
    { type: NbDialogRef },
    { type: NbIconLibraries }
];

class MainMenuPageComponent extends BaseFormComponent {
    constructor(injector, dialogService) {
        super(injector, {
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
        });
        this.injector = injector;
        this.dialogService = dialogService;
        this.nodeItems = [];
        this.options = {
            mode: TreeMode.NoSelect,
            checkboxes: false,
            alwaysEmitSelected: true
        };
        this.allLocales = [];
        this.locales = [];
        this.localeDefault = new LocaleModel();
        this.action = 'Add';
        this.dialogAction = 'Edit';
        this.loadLocale = false;
        this.title = null;
        this.apiSelectParent = this.api['security']['select-main-menus'];
        this.isRoot = true;
        this.isGroup = false;
    }
    set isRoot(root) {
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
    }
    get isRoot() { return this.root; }
    set isGroup(group) {
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
    }
    get isGroup() { return this.group; }
    ngOnInit() { }
    onCheckedRoot(event) {
        this.isRoot = event[0].selected;
    }
    onCheckedGroup(event) {
        this.isGroup = event[0].selected;
    }
    loadDataMenu() {
        if (!this.loadLocale) {
            this.loadingForm = true;
            this.http.HTTP_AUTH(this.api['master']['all-locale']).subscribe(response => {
                this.splitLocale(response);
                this.loadLocale = true;
                this.loadingForm = false;
            });
        }
        return this.http.HTTP_AUTH(this.api['security']['get-tree-menus'], null, null, null, ['main']).pipe(map((response) => {
            this.nodeItems = [];
            this.nodeItems = [...this.nodeItems, ...response];
            this.onReset();
            if (this.loadLocale)
                this.loadingForm = false;
        }));
    }
    splitLocale(values) {
        this.allLocales = values;
        values.forEach(data => {
            if (data.localeDefault) {
                this.localeDefault = data;
            }
            else {
                this.locales.push(data);
            }
            this.formGroup.removeControl(data.localeCode);
            this.formGroup.addControl(data.localeCode, new FormControl());
        });
    }
    onSearchIcon() {
        this.dialogService.open(DialogIconComponent)
            .onClose.subscribe((icon) => {
            this.formGroup.get('icon').setValue(icon);
            this.formGroup.get('icon').markAsDirty();
        });
    }
    onSelectNode(node) {
        if (node.item) {
            this.action = 'Edit';
            this.dialogAction = this.action;
            this.isRoot = node.item['level'] === 0 ? true : false;
            this.isGroup = node.item['group'];
            this.allLocales.forEach(locale => {
                this.formGroup.get(locale.localeCode).setValue(node.item['i18n'][locale.localeCode]);
                if (locale.localeDefault) {
                    this.title = node.item['i18n'][locale.localeCode];
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
    }
    onDeleteTree(node, context, dialog) {
        this.dialogAction = 'Delete';
        this.node = node;
        this.context = context;
        this.dialogService.open(dialog, { context: 'alert.delete' });
    }
    onSubmit(dialog) {
        let id = null;
        let code = 'N/A';
        let icon = null;
        let link = '#';
        const type = 'main';
        let ordering = 0;
        let home = false;
        let group = false;
        let level = 1;
        let leaf = true;
        const i18n = {};
        let parentMenu = null;
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
        this.allLocales.forEach(locale => {
            i18n[locale.localeCode] = this.formGroup.get(locale.localeCode).value;
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
    }
    onSubmitDialog(ref) {
        if (this.dialogAction === 'Delete') {
            this.deleteTreeMenu(ref);
        }
        else {
            this.postMenu(ref);
        }
    }
    onReset() {
        this.disabled = false;
        this.isRoot = true;
        this.isGroup = false;
        this.title = null;
        this.action = 'Add';
        this.allLocales.forEach(locale => {
            this.formGroup.get(locale.localeCode).setValue(null);
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
    }
    deleteTreeMenu(ref) {
        this.disabled = true;
        this.http.HTTP_AUTH(this.api['security']['delete-menu'], null, null, null, [this.node['id']]).subscribe((success) => {
            ref.close();
            this.context.delete();
            this.disabled = false;
            this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
            this.loadDataMenu().subscribe(() => {
                this.loadingForm = false;
            });
        }, (error) => {
            this.disabled = false;
            this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
    }
    postMenu(ref) {
        super.onSubmit(this.data, 'security', 'post-menus')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                this.loadDataMenu().subscribe(() => {
                    this.loadingForm = false;
                });
            }
            if (this.action === 'Edit')
                ref.close();
        });
    }
}
MainMenuPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: NbDialogService }
];
MainMenuPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-main-menu-page',
                template: "<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n    <tree-ngx\n      [nodeItems]=\"nodeItems\"\n      [options]=\"options\"\n      #treeMain>\n      <ng-template #nodeNameTemplate let-node=\"node\" let-context=\"context\">\n        <span\n          class=\"node-action\"\n          [ngClass]=\"{\n            'node-action': !node.item.group,\n            'node-action-group': node.item.group\n          }\"\n          [class.active]=\"context.active\"\n          (click)=\"onSelectNode(node)\">\n          {{node.name}}\n        </span>\n        <span class=\"tree-action\">\n          <nb-icon\n              class=\"action-trash\"\n              icon=\"close-square-outline\"\n              (click)=\"onDeleteTree(node, context, dialogprocess)\">\n          </nb-icon>\n        </span>\n      </ng-template>\n    </tree-ngx>\n  </div>\n  <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n    <form [formGroup]=\"formGroup\">\n      <div class=\"row\">\n        <label\n          for=\"Title\"\n          class=\"label col-sm-3 col-form-label\"\n          *ngIf=\"!loadingForm; else labelskeleton\">\n          {{'Title' | translate}}\n        </label>\n        <ng-template #labelskeleton>\n          <div class=\"col-sm-3\">\n            <div\n              [ngClass]=\"{\n                'label-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n        <div class=\"col-sm-9\" *ngIf=\"loadLocale; else inputSkeleton\">\n          <do-input-icon\n            [name]=\"localeDefault.localeCode\"\n            [nolabel]=\"true\"\n            [required]=\"true\"\n            [colLabel]=\"0\"\n            [colInput]=\"12\"\n            [icon]=\"'flag-icon flag-icon-' + localeDefault.icon\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"{{localeDefault.localeCode}}\">\n          </do-input-icon>\n        </div>\n        <ng-template #inputSkeleton>\n          <div class=\"col-sm-9\">\n            <div\n              [ngClass]=\"{\n                'input-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n      </div>\n      <do-input-icon *ngFor=\"let i18n of locales\"\n        [name]=\"i18n.localeCode\"\n        [nolabel]=\"true\"\n        [icon]=\"'flag-icon flag-icon-'+ i18n.icon\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"{{i18n.localeCode}}\">\n      </do-input-icon>\n      <do-checkbox\n        [name]=\"'group'\"\n        [label]=\"'Group'\"\n        [skeleton]=\"loadingForm\"\n        [warnMessage]=\"'warn.group-menu'\"\n        (onChecked)=\"onCheckedGroup($event)\"\n        formControlName=\"group\">\n      </do-checkbox>\n      <do-checkbox\n        [name]=\"'root'\"\n        [label]=\"'Root'\"\n        [skeleton]=\"loadingForm\"\n        (onChecked)=\"onCheckedRoot($event)\"\n        formControlName=\"root\"\n        *ngIf=\"!isGroup\">\n      </do-checkbox>\n      <do-checkbox\n        [name]=\"'home'\"\n        [label]=\"'Home'\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"home\"\n        *ngIf=\"!isGroup\">\n      </do-checkbox>\n      <do-input-text\n        [name]=\"'code'\"\n        [label]=\"'Code'\"\n        [capslock]=\"true\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"code\"\n        *ngIf=\"!isGroup\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'link'\"\n        [label]=\"'Link'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"link\"\n        *ngIf=\"!isGroup\">\n      </do-input-text>\n      <do-input-icon\n        [name]=\"'icon'\"\n        [label]=\"'Icon'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        [icon]=\"'search-outline'\"\n        [iconcursor]=\"true\"\n        [eva]=\"true\"\n        (clickIcon)=\"onSearchIcon()\"\n        formControlName=\"icon\"\n        *ngIf=\"(isRoot && !isGroup)\">\n      </do-input-icon>\n      <do-select\n        [name]=\"'parent'\"\n        [label]=\"'Parent Menu'\"\n        [api]=\"apiSelectParent\"\n        [searchable]=\"false\"\n        [skeleton]=\"loadingForm\"\n        [required]=\"true\"\n        formControlName=\"parent\"\n        *ngIf=\"(!isRoot && !isGroup)\">\n      </do-select>\n      <do-input-text\n        [name]=\"'order'\"\n        [label]=\"'Order'\"\n        [required]=\"true\"\n        [type]=\"'number'\"\n        [max]=\"999\"\n        [maxLength]=\"3\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"order\">\n      </do-input-text>\n      <div class=\"form-group row\">\n        <div class=\"offset-sm-3 col-sm-9\" *ngIf=\"!loadingForm; else buttonSkeleton\">\n          <button\n            type=\"button\"\n            status=\"danger\"\n            (click)=\"onReset()\"\n            class=\"reset-left\"\n            nbButton>\n            {{ 'Reset' | translate}}\n          </button>\n          <button\n            type=\"submit\"\n            status=\"primary\"\n            (click)=\"onSubmit(dialogprocess)\"\n            [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n            class=\"submit-right\"\n            nbButton>\n            {{ action | translate}}\n          </button>\n        </div>\n        <ng-template #buttonSkeleton>\n          <div class=\"offset-sm-3 col-sm-9\">\n            <div\n              [ngClass]=\"{\n                'button-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </form>\n  </div>\n</div>\n\n<ng-template #dialogprocess let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"{{dialogAction === 'Delete' ? 'danger' : 'warning'}}\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <div class=\"row\">\n        <button\n          type=\"reset\"\n          status=\"danger\"\n          (click)=\"ref.close()\"\n          class=\"reset-left-dialog\"\n          nbButton>\n          {{ 'Cancel' | translate}}\n        </button>\n        <button\n          type=\"submit\"\n          status=\"primary\"\n          (click)=\"onSubmitDialog(ref)\"\n          [disabled]=\"disabled\"\n          class=\"submit-right-dialog\"\n          nbButton>\n          {{ dialogAction | translate}}\n        </button>\n      </div>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".tree-ngx{display:flex;flex:1 1 auto;flex-direction:column;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.node{display:flex;flex:1 1 auto;flex-direction:column}.node-children{display:flex;flex:1 1 auto}.node-name{display:inline-block;padding:5px 0 5px 7px}.node-name.markSelected{padding:5px 0 5px 2px;border-left:5px solid #269}.node-name .active{cursor:pointer}.node-offset{display:flex;margin-left:20px}.node-icon-wrapper{position:relative;display:inline-block;width:25px;height:17px;top:1px;left:6px}.node-icon-wrapper.disabled{cursor:default}.collapsable{cursor:pointer}.node-container{display:inline-block}.nodeDisabled{opacity:.6}.node-checkbox:disabled{cursor:auto}.collapsible-wrapper{display:flex;overflow:hidden}.collapsible-wrapper:after{content:'';height:25px;transition:height .3s linear,max-height linear .3s;max-height:0}.collapsible{transition:margin-bottom .3s cubic-bezier(0,0,0,1);margin-bottom:0;max-height:1000000px}.collapsible-wrapper.collapsed>.collapsible{margin-bottom:-20000px;transition:margin-bottom .3s cubic-bezier(1,0,1,1),visibility .3s,max-height .3s;visibility:hidden;max-height:0}.collapsible-wrapper.collapsed:after{height:0;transition:height .3s linear;max-height:25px}.arrow-down{position:absolute;width:0;height:0;left:3px;top:6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #455a64}.arrow-down.collapse-empty{border-top:7px solid #ccc}.arrow-right{position:absolute;width:0;height:0;left:8px;top:3px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #455a64}.node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.node-action-group{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#8f9bb3;border-radius:0;cursor:pointer}.node-action-group:hover{background-color:transparent;color:#598bff;cursor:pointer}.tree-action{margin-left:.5rem;cursor:pointer}.action-trash:hover{color:#ff708d}.reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}.reset-left-dialog{margin-left:1rem;margin-right:.5rem}.submit-right-dialog{margin-left:.5rem}"]
            },] }
];
MainMenuPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: NbDialogService }
];

class ExtraMenuPageComponent extends BaseFormComponent {
    constructor(injector, dialogService) {
        super(injector, {
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
        });
        this.injector = injector;
        this.dialogService = dialogService;
        this.nodeItems = [];
        this.options = {
            mode: TreeMode.NoSelect,
            checkboxes: false,
            alwaysEmitSelected: true
        };
        this.allLocales = [];
        this.locales = [];
        this.localeDefault = new LocaleModel();
        this.action = 'Add';
        this.dialogAction = 'Edit';
        this.loadLocale = false;
        this.title = null;
    }
    ngOnInit() { }
    loadDataMenu() {
        if (!this.loadLocale) {
            this.loadingForm = true;
            this.http.HTTP_AUTH(this.api['master']['all-locale']).subscribe(response => {
                this.splitLocale(response);
                this.loadLocale = true;
                this.loadingForm = false;
            });
        }
        return this.http.HTTP_AUTH(this.api['security']['get-tree-menus'], null, null, null, ['extra']).pipe(map((response) => {
            this.nodeItems = [];
            this.nodeItems = [...this.nodeItems, ...response];
            this.onReset();
            if (this.loadLocale)
                this.loadingForm = false;
        }));
    }
    splitLocale(values) {
        this.allLocales = values;
        values.forEach(data => {
            if (data.localeDefault) {
                this.localeDefault = data;
            }
            else {
                this.locales.push(data);
            }
            this.formGroup.removeControl(data.localeCode);
            this.formGroup.addControl(data.localeCode, new FormControl());
        });
    }
    onSearchIcon() {
        this.dialogService.open(DialogIconComponent)
            .onClose.subscribe((icon) => {
            this.formGroup.get('icon').setValue(icon);
            this.formGroup.get('icon').markAsDirty();
        });
    }
    onSelectNode(node) {
        if (node.item) {
            this.action = 'Edit';
            this.dialogAction = this.action;
            this.allLocales.forEach(locale => {
                this.formGroup.get(locale.localeCode).setValue(node.item['i18n'][locale.localeCode]);
            });
            this.formGroup.get('id').setValue(node['id']);
            this.formGroup.get('code').setValue(node.item['code']);
            this.formGroup.get('link').setValue(node.item['link']);
            this.formGroup.get('order').setValue(node.item['ordering']);
        }
    }
    onDeleteTree(node, context, dialog) {
        this.dialogAction = 'Delete';
        this.node = node;
        this.context = context;
        this.dialogService.open(dialog, { context: 'alert.delete' });
    }
    onSubmit(dialog) {
        let id = null;
        let code = 'N/A';
        let link = '#';
        let ordering = 0;
        const type = 'extra';
        const icon = null;
        const home = false;
        const group = false;
        const level = 0;
        const leaf = false;
        const i18n = {};
        const parentMenu = null;
        if (this.formGroup.get('id').value)
            id = this.formGroup.get('id').value;
        if (this.formGroup.get('code').value)
            code = this.formGroup.get('code').value;
        if (this.formGroup.get('link').value)
            link = this.formGroup.get('link').value;
        if (this.formGroup.get('order').value)
            ordering = +this.formGroup.get('order').value;
        this.allLocales.forEach(locale => {
            i18n[locale.localeCode] = this.formGroup.get(locale.localeCode).value;
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
    }
    onSubmitDialog(ref) {
        if (this.dialogAction === 'Delete') {
            this.deleteTreeMenu(ref);
        }
        else {
            this.postMenu(ref);
        }
    }
    onReset() {
        this.disabled = false;
        this.title = null;
        this.action = 'Add';
        this.allLocales.forEach(locale => {
            this.formGroup.get(locale.localeCode).setValue(null);
        });
        this.formGroup.get('id').setValue(null);
        this.formGroup.get('code').setValue('N/A');
        this.formGroup.get('link').setValue('#');
        this.formGroup.get('order').setValue(null);
    }
    deleteTreeMenu(ref) {
        this.disabled = true;
        this.http.HTTP_AUTH(this.api['security']['delete-menu'], null, null, null, [this.node['id']]).subscribe((success) => {
            ref.close();
            this.context.delete();
            this.disabled = false;
            this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
            this.loadDataMenu().subscribe(() => {
                this.loadingForm = false;
            });
        }, (error) => {
            this.disabled = false;
            this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
    }
    postMenu(ref) {
        super.onSubmit(this.data, 'security', 'post-menus')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                this.loadDataMenu().subscribe(() => {
                    this.loadingForm = false;
                });
            }
            if (this.action === 'Edit')
                ref.close();
        });
    }
}
ExtraMenuPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: NbDialogService }
];
ExtraMenuPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-extra-menu-page',
                template: "<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n    <tree-ngx\n      [nodeItems]=\"nodeItems\"\n      [options]=\"options\"\n      #treeExtra>\n      <ng-template #nodeNameTemplate let-node=\"node\" let-context=\"context\">\n        <span\n          class=\"node-action\"\n          [class.active]=\"context.active\"\n          (click)=\"onSelectNode(node)\">\n          {{node.name}}\n        </span>\n        <span class=\"tree-action\">\n          <nb-icon\n              class=\"action-trash\"\n              icon=\"close-square-outline\"\n              (click)=\"onDeleteTree(node, context, dialogprocessextra)\">\n          </nb-icon>\n        </span>\n      </ng-template>\n    </tree-ngx>\n  </div>\n  <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n    <form [formGroup]=\"formGroup\">\n      <div class=\"row\">\n        <label\n          for=\"Title\"\n          class=\"label col-sm-3 col-form-label\"\n          *ngIf=\"!loadingForm; else labelskeleton\">\n          {{'Title' | translate}}\n        </label>\n        <ng-template #labelskeleton>\n          <div class=\"col-sm-3\">\n            <div\n              [ngClass]=\"{\n                'label-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n        <div class=\"col-sm-9\" *ngIf=\"loadLocale; else inputSkeleton\">\n          <do-input-icon\n            [name]=\"localeDefault.localeCode\"\n            [nolabel]=\"true\"\n            [required]=\"true\"\n            [colLabel]=\"0\"\n            [colInput]=\"12\"\n            [icon]=\"'flag-icon flag-icon-' + localeDefault.icon\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"{{localeDefault.localeCode}}\">\n          </do-input-icon>\n        </div>\n        <ng-template #inputSkeleton>\n          <div class=\"col-sm-9\">\n            <div\n              [ngClass]=\"{\n                'input-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n      </div>\n      <do-input-icon *ngFor=\"let i18n of locales\"\n        [name]=\"i18n.localeCode\"\n        [nolabel]=\"true\"\n        [icon]=\"'flag-icon flag-icon-'+ i18n.icon\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"{{i18n.localeCode}}\">\n      </do-input-icon>\n      <do-input-text\n        [name]=\"'code'\"\n        [label]=\"'Code'\"\n        [capslock]=\"true\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"code\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'link'\"\n        [label]=\"'Link'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"link\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'order'\"\n        [label]=\"'Order'\"\n        [required]=\"true\"\n        [type]=\"'number'\"\n        [max]=\"99\"\n        [maxLength]=\"2\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"order\">\n      </do-input-text>\n      <div class=\"form-group row\">\n        <div class=\"offset-sm-3 col-sm-9\" *ngIf=\"!loadingForm; else buttonSkeleton\">\n          <button\n            type=\"button\"\n            status=\"danger\"\n            (click)=\"onReset()\"\n            class=\"reset-left\"\n            nbButton>\n            {{ 'Reset' | translate}}\n          </button>\n          <button\n            type=\"submit\"\n            status=\"primary\"\n            (click)=\"onSubmit(dialogprocessextra)\"\n            [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n            class=\"submit-right\"\n            nbButton>\n            {{ action | translate}}\n          </button>\n        </div>\n        <ng-template #buttonSkeleton>\n          <div class=\"offset-sm-3 col-sm-9\">\n            <div\n              [ngClass]=\"{\n                'button-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </form>\n  </div>\n</div>\n\n<ng-template #dialogprocessextra let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"{{dialogAction === 'Delete' ? 'danger' : 'warning'}}\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <div class=\"row\">\n        <button\n          type=\"reset\"\n          status=\"danger\"\n          (click)=\"ref.close()\"\n          class=\"reset-left-dialog\"\n          nbButton>\n          {{ 'Cancel' | translate}}\n        </button>\n        <button\n          type=\"submit\"\n          status=\"primary\"\n          (click)=\"onSubmitDialog(ref)\"\n          [disabled]=\"disabled\"\n          class=\"submit-right-dialog\"\n          nbButton>\n          {{ dialogAction | translate}}\n        </button>\n      </div>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".tree-ngx{display:flex;flex:1 1 auto;flex-direction:column;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.node{display:flex;flex:1 1 auto;flex-direction:column}.node-children{display:flex;flex:1 1 auto}.node-name{display:inline-block;padding:5px 0 5px 7px}.node-name.markSelected{padding:5px 0 5px 2px;border-left:5px solid #269}.node-name .active{cursor:pointer}.node-offset{display:flex;margin-left:20px}.node-icon-wrapper{position:relative;display:inline-block;width:25px;height:17px;top:1px;left:6px}.node-icon-wrapper.disabled{cursor:default}.collapsable{cursor:pointer}.node-container{display:inline-block}.nodeDisabled{opacity:.6}.node-checkbox:disabled{cursor:auto}.collapsible-wrapper{display:flex;overflow:hidden}.collapsible-wrapper:after{content:'';height:25px;transition:height .3s linear,max-height linear .3s;max-height:0}.collapsible{transition:margin-bottom .3s cubic-bezier(0,0,0,1);margin-bottom:0;max-height:1000000px}.collapsible-wrapper.collapsed>.collapsible{margin-bottom:-20000px;transition:margin-bottom .3s cubic-bezier(1,0,1,1),visibility .3s,max-height .3s;visibility:hidden;max-height:0}.collapsible-wrapper.collapsed:after{height:0;transition:height .3s linear;max-height:25px}.arrow-down{position:absolute;width:0;height:0;left:3px;top:6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #455a64}.arrow-down.collapse-empty{border-top:7px solid #ccc}.arrow-right{position:absolute;width:0;height:0;left:8px;top:3px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #455a64}.node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.tree-action{margin-left:.5rem;cursor:pointer}.action-trash:hover{color:#ff708d}.reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}.reset-left-dialog{margin-left:1rem;margin-right:.5rem}.submit-right-dialog{margin-left:.5rem}"]
            },] }
];
ExtraMenuPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: NbDialogService }
];

class MenuListPageComponent extends BaseComponent {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.loading = false;
        this.tab = 'main';
        this.destroy$ = new Subject();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.next();
        this.destroy$.complete();
    }
    toggleLoadingAnimation(event) {
        this.tab = event.tabId;
        this.loading = true;
        if (this.tab === 'main') {
            this.mainMenu.loadDataMenu()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.loading = false;
            });
        }
        else {
            this.extraMenu.loadDataMenu()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.loading = false;
            });
        }
    }
}
MenuListPageComponent.ctorParameters = () => [
    { type: Injector }
];
MenuListPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-menu-list-page',
                template: "<do-page-outlet [header]=\"'header.menu-management'\">\n  <nb-tabset fullWidth (changeTab)=\"toggleLoadingAnimation($event)\" pagecontent>\n    <nb-tab tabId=\"main\" tabTitle=\"{{'tab.main-menu' | translate}}\">\n      <do-main-menu-page #mainMenu></do-main-menu-page>\n    </nb-tab>\n    <nb-tab tabId=\"extra\" tabTitle=\"{{'tab.extra-menu' | translate}}\" [lazyLoad]=\"true\">\n      <do-extra-menu-page #extraMenu></do-extra-menu-page>\n    </nb-tab>\n  </nb-tabset>\n</do-page-outlet>\n",
                styles: [".nb-theme-default :host nb-tab{flex:1;padding:1.5rem .25rem!important}.nb-theme-dark :host nb-tab{flex:1;padding:1.5rem .25rem!important}.nb-theme-cosmic :host nb-tab{flex:1;padding:1.5rem .25rem!important}.nb-theme-corporate :host nb-tab{flex:1;padding:1.5rem .25rem!important}"]
            },] }
];
MenuListPageComponent.ctorParameters = () => [
    { type: Injector }
];
MenuListPageComponent.propDecorators = {
    mainMenu: [{ type: ViewChild, args: ['mainMenu', { static: true },] }],
    extraMenu: [{ type: ViewChild, args: ['extraMenu', { static: true },] }]
};

const ɵ0$4 = {
    code: '#MANAGEMENT-MENU-PAGE',
};
const routes$4 = [{
        path: '',
        component: MgmtMenuComponent,
        canActivateChild: [AuthGuardChildService],
        children: [
            {
                path: '',
                component: MenuListPageComponent,
                data: ɵ0$4,
            },
        ],
    }];
class DoMgmtMenuRoutingModule {
}
DoMgmtMenuRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes$4)],
                exports: [RouterModule],
            },] }
];

const components$4 = [
    MgmtMenuComponent,
    MenuListPageComponent,
    MainMenuPageComponent,
    ExtraMenuPageComponent,
    DialogIconComponent,
];
const entryComponents$1 = [
    DialogIconComponent,
];
const modules$4 = [
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbDialogModule.forChild(),
    DoThemeModule,
    DoInputModule,
    DoCheckBoxModule,
    DoButtonModule,
    DoBaseModule,
    DoSelectModule,
    DoTableModule,
    NbTabsetModule,
    NbSpinnerModule,
    TreeNgxModule,
    DoMgmtMenuRoutingModule,
];
const providers$4 = [];
class DoMgmtMenuModule {
}
DoMgmtMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ...modules$4,
                ],
                declarations: [
                    ...components$4,
                ],
                providers: [
                    ...providers$4,
                ],
                entryComponents: [
                    ...entryComponents$1,
                ]
            },] }
];

class MgmtFunctionComponent {
}
MgmtFunctionComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-mgmt-function',
                template: `
    <router-outlet></router-outlet>
  `
            },] }
];

class FunctionControlService {
    getRole() {
        return this.role;
    }
    setRole(role) {
        this.role = role;
    }
}
FunctionControlService.decorators = [
    { type: Injectable }
];

class FunctionMainPageComponent extends BaseFormComponent {
    constructor(injector, dialogService, functionControlService) {
        super(injector);
        this.injector = injector;
        this.dialogService = dialogService;
        this.functionControlService = functionControlService;
        this.nodeItems = [];
        this.options = {
            mode: TreeMode.MultiSelect,
            checkboxes: true,
            alwaysEmitSelected: true,
        };
        this.title = null;
        this.datas = [];
    }
    ngOnInit() { }
    loadDataMenu() {
        this.disabled = true;
        return this.http.HTTP_AUTH(this.api['security']['get-function-menus'], null, null, null, ['main', this.functionControlService.getRole().authority]).pipe(map((response) => {
            this.datas = [];
            this.nodeItems = [];
            this.nodeItems = [...this.nodeItems, ...response];
        }));
    }
    onSelect(datas) {
        if (this.datas.length > 0 && this.datas.length !== datas.length)
            this.disabled = false;
        this.datas = [];
        this.datas = [...this.datas, ...datas];
    }
    onSubmit(dialog) {
        this.dialogService.open(dialog, { context: 'alert.edit' });
    }
    onSubmitDialog(ref) {
        this.postFunction(ref);
    }
    postFunction(ref) {
        const data = {
            type: 'main',
        };
        const menus = [];
        data['authority'] = this.functionControlService.getRole().authority;
        this.datas.forEach(val => {
            menus.push(val['id']);
            if (val['parentMenu']['id']) {
                if (!menus.includes(val['parentMenu']['id'])) {
                    menus.push(val['parentMenu']['id']);
                }
            }
        });
        data['menus'] = menus;
        super.onSubmit(data, 'security', 'post-functions')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                this.loadDataMenu().subscribe();
            }
            ref.close();
        });
    }
}
FunctionMainPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: NbDialogService },
    { type: FunctionControlService }
];
FunctionMainPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-function-main-page',
                template: "<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n    <div class=\"row save-function\">\n      <button\n        [size]=\"'medium'\"\n        [shape]=\"'rectangle'\"\n        [status]=\"'danger'\"\n        [appearance]=\"'ghost'\"\n        (click)=\"loadDataMenu().subscribe()\"\n        nbButton>\n        <nb-icon [status]=\"'danger'\" icon=\"corner-up-left\" pack=\"eva\"></nb-icon>\n        {{'Reset' | translate}}\n      </button>\n      <button\n        [size]=\"'medium'\"\n        [shape]=\"'rectangle'\"\n        [status]=\"'primary'\"\n        [appearance]=\"'ghost'\"\n        [disabled]=\"disabled\"\n        [ngClass]=\"{\n          'submit-right': true\n        }\"\n        (click)=\"onSubmit(dialogprocess)\"\n        nbButton>\n        <nb-icon [status]=\"(disabled ? 'basic' : 'primary')\" icon=\"save\" pack=\"eva\"></nb-icon>\n        {{'Save' | translate}}\n      </button>\n    </div>\n    <tree-ngx\n      (selectedItems)=\"onSelect($event)\"\n      [nodeItems]=\"nodeItems\"\n      [options]=\"options\"\n      #treeMain>\n      <ng-template #nodeNameTemplate let-node=\"node\" let-context=\"context\">\n        <span\n          class=\"node-action\"\n          [ngClass]=\"{\n            'node-action': !node.item.group,\n            'node-action-group': node.item.group\n          }\">\n          {{node.name}}\n        </span>\n      </ng-template>\n    </tree-ngx>\n  </div>\n</div>\n\n<ng-template #dialogprocess let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"{{'warning'}}\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <div class=\"row\">\n        <button\n          type=\"reset\"\n          status=\"danger\"\n          (click)=\"ref.close()\"\n          class=\"reset-left-dialog\"\n          nbButton>\n          {{ 'Cancel' | translate}}\n        </button>\n        <button\n          type=\"submit\"\n          status=\"primary\"\n          (click)=\"onSubmitDialog(ref)\"\n          [disabled]=\"disabled\"\n          class=\"submit-right-dialog\"\n          nbButton>\n          {{ 'Submit' | translate}}\n        </button>\n      </div>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".tree-ngx{display:flex;flex:1 1 auto;flex-direction:column;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.node{display:flex;flex:1 1 auto;flex-direction:column}.node-children{display:flex;flex:1 1 auto}.node-name{display:inline-block;padding:5px 0 5px 7px}.node-name.markSelected{padding:5px 0 5px 2px;border-left:5px solid #269}.node-name .active{cursor:pointer}.node-offset{display:flex;margin-left:20px}.node-icon-wrapper{position:relative;display:inline-block;width:25px;height:17px;top:1px;left:6px}.node-icon-wrapper.disabled{cursor:default}.collapsable{cursor:pointer}.node-container{display:inline-block}.nodeDisabled{opacity:.6}.node-checkbox:disabled{cursor:auto}.collapsible-wrapper{display:flex;overflow:hidden}.collapsible-wrapper:after{content:'';height:25px;transition:height .3s linear,max-height linear .3s;max-height:0}.collapsible{transition:margin-bottom .3s cubic-bezier(0,0,0,1);margin-bottom:0;max-height:1000000px}.collapsible-wrapper.collapsed>.collapsible{margin-bottom:-20000px;transition:margin-bottom .3s cubic-bezier(1,0,1,1),visibility .3s,max-height .3s;visibility:hidden;max-height:0}.collapsible-wrapper.collapsed:after{height:0;transition:height .3s linear;max-height:25px}.arrow-down{position:absolute;width:0;height:0;left:3px;top:6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #455a64}.arrow-down.collapse-empty{border-top:7px solid #ccc}.arrow-right{position:absolute;width:0;height:0;left:8px;top:3px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #455a64}.node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0}.node-action-group{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#8f9bb3;border-radius:0}.tree-action{margin-left:.5rem;cursor:pointer}.reset-left{margin-right:.25rem}.submit-right{margin-left:.5rem}.reset-left-dialog{margin-left:1rem;margin-right:.5rem}.submit-right-dialog{margin-left:.5rem}.save-function{margin:0 0 1rem 2rem}"]
            },] }
];
FunctionMainPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: NbDialogService },
    { type: FunctionControlService }
];

class FunctionExtraPageComponent extends BaseFormComponent {
    constructor(injector, dialogService, functionControlService) {
        super(injector);
        this.injector = injector;
        this.dialogService = dialogService;
        this.functionControlService = functionControlService;
        this.nodeItems = [];
        this.options = {
            mode: TreeMode.MultiSelect,
            checkboxes: true,
            alwaysEmitSelected: true,
        };
        this.title = null;
        this.datas = [];
    }
    ngOnInit() { }
    loadDataMenu() {
        this.disabled = true;
        return this.http.HTTP_AUTH(this.api['security']['get-function-menus'], null, null, null, ['extra', this.functionControlService.getRole().authority]).pipe(map((response) => {
            this.datas = [];
            this.nodeItems = [];
            this.nodeItems = [...this.nodeItems, ...response];
        }));
    }
    onSelect(datas) {
        if (this.datas.length > 0 && this.datas.length !== datas.length)
            this.disabled = false;
        this.datas = [];
        this.datas = [...this.datas, ...datas];
    }
    onSubmit(dialog) {
        this.dialogService.open(dialog, { context: 'alert.edit' });
    }
    onSubmitDialog(ref) {
        this.postFunction(ref);
    }
    postFunction(ref) {
        const data = {
            type: 'extra',
        };
        const menus = [];
        data['authority'] = this.functionControlService.getRole().authority;
        this.datas.forEach(val => {
            menus.push(val['id']);
            if (val['parentMenu']['id']) {
                if (!menus.includes(val['parentMenu']['id'])) {
                    menus.push(val['parentMenu']['id']);
                }
            }
        });
        data['menus'] = menus;
        super.onSubmit(data, 'security', 'post-functions')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                this.loadDataMenu().subscribe();
            }
            ref.close();
        });
    }
}
FunctionExtraPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: NbDialogService },
    { type: FunctionControlService }
];
FunctionExtraPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-function-extra-page',
                template: "<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n    <div class=\"row save-function\">\n      <button\n        [size]=\"'medium'\"\n        [shape]=\"'rectangle'\"\n        [status]=\"'danger'\"\n        [appearance]=\"'ghost'\"\n        (click)=\"loadDataMenu().subscribe()\"\n        nbButton>\n        <nb-icon [status]=\"'danger'\" icon=\"corner-up-left\" pack=\"eva\"></nb-icon>\n        {{'Reset' | translate}}\n      </button>\n      <button\n        [size]=\"'medium'\"\n        [shape]=\"'rectangle'\"\n        [status]=\"'primary'\"\n        [appearance]=\"'ghost'\"\n        [disabled]=\"disabled\"\n        [ngClass]=\"{\n          'submit-right': true\n        }\"\n        (click)=\"onSubmit(dialogprocess)\"\n        nbButton>\n        <nb-icon [status]=\"(disabled ? 'basic' : 'primary')\" icon=\"save\" pack=\"eva\"></nb-icon>\n        {{'Save' | translate}}\n      </button>\n    </div>\n    <tree-ngx\n      (selectedItems)=\"onSelect($event)\"\n      [nodeItems]=\"nodeItems\"\n      [options]=\"options\"\n      #treeExtra>\n      <ng-template #nodeNameTemplate let-node=\"node\" let-context=\"context\">\n        <span\n          class=\"node-action\"\n          [ngClass]=\"{\n            'node-action': !node.item.group\n          }\">\n          {{node.name}}\n        </span>\n      </ng-template>\n    </tree-ngx>\n  </div>\n</div>\n\n<ng-template #dialogprocess let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"{{'warning'}}\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <div class=\"row\">\n        <button\n          type=\"reset\"\n          status=\"danger\"\n          (click)=\"ref.close()\"\n          class=\"reset-left-dialog\"\n          nbButton>\n          {{ 'Cancel' | translate}}\n        </button>\n        <button\n          type=\"submit\"\n          status=\"primary\"\n          (click)=\"onSubmitDialog(ref)\"\n          [disabled]=\"disabled\"\n          class=\"submit-right-dialog\"\n          nbButton>\n          {{ 'Submit' | translate}}\n        </button>\n      </div>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".tree-ngx{display:flex;flex:1 1 auto;flex-direction:column;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.node{display:flex;flex:1 1 auto;flex-direction:column}.node-children{display:flex;flex:1 1 auto}.node-name{display:inline-block;padding:5px 0 5px 7px}.node-name.markSelected{padding:5px 0 5px 2px;border-left:5px solid #269}.node-name .active{cursor:pointer}.node-offset{display:flex;margin-left:20px}.node-icon-wrapper{position:relative;display:inline-block;width:25px;height:17px;top:1px;left:6px}.node-icon-wrapper.disabled{cursor:default}.collapsable{cursor:pointer}.node-container{display:inline-block}.nodeDisabled{opacity:.6}.node-checkbox:disabled{cursor:auto}.collapsible-wrapper{display:flex;overflow:hidden}.collapsible-wrapper:after{content:'';height:25px;transition:height .3s linear,max-height linear .3s;max-height:0}.collapsible{transition:margin-bottom .3s cubic-bezier(0,0,0,1);margin-bottom:0;max-height:1000000px}.collapsible-wrapper.collapsed>.collapsible{margin-bottom:-20000px;transition:margin-bottom .3s cubic-bezier(1,0,1,1),visibility .3s,max-height .3s;visibility:hidden;max-height:0}.collapsible-wrapper.collapsed:after{height:0;transition:height .3s linear;max-height:25px}.arrow-down{position:absolute;width:0;height:0;left:3px;top:6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #455a64}.arrow-down.collapse-empty{border-top:7px solid #ccc}.arrow-right{position:absolute;width:0;height:0;left:8px;top:3px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #455a64}.node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0}.tree-action{margin-left:.5rem}.reset-left{margin-right:.25rem}.submit-right{margin-left:.5rem}.reset-left-dialog{margin-left:1rem;margin-right:.5rem}.submit-right-dialog{margin-left:.5rem}.save-function{margin:0 0 1rem 2rem}"]
            },] }
];
FunctionExtraPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: NbDialogService },
    { type: FunctionControlService }
];

class FunctionEditorPageComponent extends BaseComponent {
    constructor(injector, router, functionControlService) {
        super(injector);
        this.injector = injector;
        this.router = router;
        this.functionControlService = functionControlService;
        this.loading = false;
        this.tab = 'main';
        this.destroy$ = new Subject();
        if (functionControlService.getRole()) {
            this.title = functionControlService.getRole().description;
        }
        else {
            this.router.navigate(['/app/mgmt/function/control']);
        }
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.next();
        this.destroy$.complete();
    }
    toggleLoadingAnimation(event) {
        if (!this.functionControlService.getRole()) {
            this.router.navigate(['/app/mgmt/function/control']);
            return;
        }
        this.tab = event.tabId;
        this.loading = true;
        if (this.tab === 'main') {
            this.mainMenu.loadDataMenu()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.loading = false;
            });
        }
        else {
            this.extraMenu.loadDataMenu()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.loading = false;
            });
        }
    }
}
FunctionEditorPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: FunctionControlService }
];
FunctionEditorPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-function-editor-page',
                template: "<do-page-outlet [header]=\"'header.function-control'\" [param]=\"{value: title}\">\n  <nb-tabset fullWidth (changeTab)=\"toggleLoadingAnimation($event)\" pagecontent>\n    <nb-tab tabId=\"main\" tabTitle=\"{{'tab.main-menu' | translate}}\" [nbSpinner]=\"loading\" nbSpinnerStatus=\"info\" nbSpinnerSize=\"giant\">\n      <do-function-main-page #mainFunction></do-function-main-page>\n    </nb-tab>\n    <nb-tab tabId=\"extra\" tabTitle=\"{{'tab.extra-menu' | translate}}\" [lazyLoad]=\"true\" [nbSpinner]=\"loading\" nbSpinnerStatus=\"info\" nbSpinnerSize=\"giant\">\n      <do-function-extra-page #extraFunction></do-function-extra-page>\n    </nb-tab>\n  </nb-tabset>\n</do-page-outlet>\n",
                styles: [".nb-theme-default :host nb-tab{flex:1;padding:1.5rem .25rem!important}.nb-theme-dark :host nb-tab{flex:1;padding:1.5rem .25rem!important}.nb-theme-cosmic :host nb-tab{flex:1;padding:1.5rem .25rem!important}.nb-theme-corporate :host nb-tab{flex:1;padding:1.5rem .25rem!important}"]
            },] }
];
FunctionEditorPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: FunctionControlService }
];
FunctionEditorPageComponent.propDecorators = {
    mainMenu: [{ type: ViewChild, args: ['mainFunction', { static: true },] }],
    extraMenu: [{ type: ViewChild, args: ['extraFunction', { static: true },] }]
};

class FunctionListPageComponent extends BaseFilterComponent {
    constructor(injector, router, functionControlService) {
        super(injector, {
            'authority': [],
            'description': [],
        });
        this.injector = injector;
        this.router = router;
        this.functionControlService = functionControlService;
        this.selectionType = SelectionType.single;
        this.columns = [
            { name: 'Authority', prop: 'authority' },
            { name: 'Description', prop: 'description' },
        ];
        this.expanded = false;
        this.apiPath = this.api['security']['datatable-role'];
        this.filters = [
            { controlName: 'authority', type: 'input' },
            { controlName: 'description', type: 'input' }
        ];
    }
    ngOnInit() { }
    onViewDetail(data) {
        this.functionControlService.setRole(data);
        this.router.navigate(['/app/mgmt/function/control', 'edit']);
    }
}
FunctionListPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: FunctionControlService }
];
FunctionListPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-function-list-page',
                template: "<do-page-outlet [header]=\"'header.function-control-list'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [add]=\"false\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'authority'\"\n            [label]=\"'Authority'\"\n            formControlName=\"authority\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'description'\"\n            [label]=\"'Description'\"\n            formControlName=\"description\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n",
                styles: [""]
            },] }
];
FunctionListPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: FunctionControlService }
];

const ɵ0$5 = {
    code: '#MANAGEMENT-FUNCTION-CONTROL-PAGE',
}, ɵ1$4 = {
    code: '#MANAGEMENT-FUNCTION-CONTROL-PAGE',
};
const routes$5 = [{
        path: '',
        component: MgmtFunctionComponent,
        canActivateChild: [AuthGuardChildService],
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
class DoMgmtFunctionRoutingModule {
}
DoMgmtFunctionRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes$5)],
                exports: [RouterModule],
            },] }
];

const components$5 = [
    MgmtFunctionComponent,
    FunctionListPageComponent,
    FunctionEditorPageComponent,
    FunctionMainPageComponent,
    FunctionExtraPageComponent,
];
const modules$5 = [
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbDialogModule.forChild(),
    NbTabsetModule,
    NbSpinnerModule,
    TreeNgxModule,
    DoThemeModule,
    DoInputModule,
    DoCheckBoxModule,
    DoButtonModule,
    DoBaseModule,
    DoSelectModule,
    DoTableModule,
    DoMgmtFunctionRoutingModule,
];
const providers$5 = [
    FunctionControlService,
];
class DoMgmtFunctionModule {
}
DoMgmtFunctionModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ...modules$5,
                ],
                declarations: [
                    ...components$5,
                ],
                providers: [
                    ...providers$5,
                ],
            },] }
];

/*
 * Public API Surface of do-sys
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DoLocaleModule, DoMgmtFunctionModule, DoMgmtMenuModule, DoMgmtRoleModule, DoMgmtUserModule, DoParameterModule, DoLocaleRoutingModule as ɵa, LocaleComponent as ɵb, DoMgmtMenuRoutingModule as ɵba, MgmtMenuComponent as ɵbb, MenuListPageComponent as ɵbc, MainMenuPageComponent as ɵbd, ExtraMenuPageComponent as ɵbe, DialogIconComponent as ɵbf, DoMgmtFunctionRoutingModule as ɵbg, MgmtFunctionComponent as ɵbh, FunctionListPageComponent as ɵbi, FunctionControlService as ɵbj, FunctionEditorPageComponent as ɵbk, FunctionMainPageComponent as ɵbl, FunctionExtraPageComponent as ɵbm, LocaleListPageComponent as ɵc, LocaleService as ɵd, LocaleAddEditPageComponent as ɵe, DialogFlagComponent as ɵf, DoParameterRoutingModule as ɵg, ParameterComponent as ɵh, ParameterListGroupPageComponent as ɵi, ParameterService as ɵj, ParameterAddGroupPageComponent as ɵk, ParameterListDetailPageComponent as ɵl, ParameterDoDetailPageComponent as ɵm, ParameterEditGroupCollapseComponent as ɵn, DoMgmtUserRoutingModule as ɵo, MgmtUserComponent as ɵp, MgmtEndUserListPageComponent as ɵq, ManagementUserService as ɵr, MgmtEndUserDetailPageComponent as ɵs, MgmtAdminListPageComponent as ɵt, MgmtAdminDetailPageComponent as ɵu, DoMgmtRoleRoutingModule as ɵv, MgmtRoleComponent as ɵw, RoleListPageComponent as ɵx, RoleService as ɵy, RoleAddEditPageComponent as ɵz };
//# sourceMappingURL=dongkap-do-sys.js.map
