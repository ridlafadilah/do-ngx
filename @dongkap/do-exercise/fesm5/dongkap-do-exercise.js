import { Component, NgModule } from '@angular/core';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbButtonModule } from '@nebular/theme';
import { DoThemeModule } from '@dongkap/do-theme';
import { DoCommonModule } from '@dongkap/do-common';
import { RouterModule } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { TreeMode } from 'tree-ngx';
import { DatePattern, HttpMethod } from '@dongkap/do-core';

var DoExerciseComponent = /** @class */ (function () {
    function DoExerciseComponent() {
    }
    DoExerciseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-exercise-outlet',
                    template: "\n    <router-outlet></router-outlet>\n  "
                },] }
    ];
    return DoExerciseComponent;
}());

var ExerciseComponent = /** @class */ (function () {
    function ExerciseComponent(formBuilder, _d) {
        var _this = this;
        this.formBuilder = formBuilder;
        this._d = _d;
        this.dataCheckbox = [
            {
                name: 'Check Box 1',
                selected: false,
            },
            {
                name: 'Check Box 2',
                selected: false,
            },
        ];
        this.dataCheckboxEdited = [
            {
                name: 'Check Box 1',
                selected: true,
            },
            {
                name: 'Check Box 2',
                selected: false,
            },
        ];
        this.dataRadio = [
            {
                name: 'Radio 1',
                value: 'Radio 1',
            },
            {
                name: 'Radio 2',
                value: 'Radio 2',
            },
        ];
        this.dataStaticSelect = [
            {
                'label': 'Data',
                'value': '1',
                'disabled': false,
            },
            {
                'label': 'true',
                'value': '2',
                'disabled': false,
            },
            {
                'label': 'number',
                'value': '3',
                'disabled': false,
            },
        ];
        this.minLength = 5;
        this.pattern = DatePattern.SLASH;
        this.rows = [];
        this.columns = [
            { name: 'Name', prop: 'name', width: 150, frozenLeft: true },
            { name: 'Gender', prop: 'gender', width: 50, frozenLeft: true },
            { name: 'Age', prop: 'age', width: 25, frozenLeft: true },
            { name: 'Company', prop: 'company', width: 200 },
        ];
        this.apiDatatable = {
            server: {
                protocol: 'http',
                host: 'localhost',
                port: 4242,
            },
            path: '/assets/data/datatable.json',
            method: HttpMethod.GET,
        };
        this.apiSelect = {
            server: {
                protocol: 'http',
                host: 'localhost',
                port: 4242,
            },
            path: '/assets/data/select.json',
            method: HttpMethod.GET,
        };
        this.options = {
            mode: TreeMode.MultiSelect,
            checkboxes: true,
            alwaysEmitSelected: false,
        };
        this.nodeItems = [{
                id: '0',
                name: 'Heros',
                children: [
                    {
                        id: '1',
                        name: 'Batman',
                        item: {
                            phrase: 'I am the batman'
                        }
                    },
                    {
                        id: '2',
                        name: 'Superman',
                        item: {
                            phrase: 'Man of steel'
                        }
                    }
                ],
                expanded: false
            },
            {
                id: '3',
                name: 'Villains',
                selected: true,
                children: [
                    {
                        id: '4',
                        name: 'Joker',
                        item: {
                            phrase: 'Why so serius'
                        },
                        selected: false,
                    },
                    {
                        id: '5',
                        name: 'Lex luthor',
                        item: {
                            phrase: 'I am the villain of this story'
                        },
                        selected: true,
                    }
                ]
            }];
        this.formGroupFilter = this.formBuilder.group({
            'name': [],
            'gender': [],
            'company': [],
        });
        this.filters = [
            { controlName: 'name', type: 'input' },
            { controlName: 'gender', type: 'input' },
            { controlName: 'company', type: 'input' }
        ];
        this.formGroup = this.formBuilder.group({
            'image': [],
            'username': [{
                    value: 'username',
                    disabled: true,
                }],
            'currency': ['124124.124'],
            'date': [{
                    value: '31/12/2019',
                    disabled: false,
                }],
            'checkbox': [this.dataCheckboxEdited],
            'radio': [{
                    value: 'Radio 2',
                    disabled: false,
                }],
            'searchSelect': [],
            'staticSelect': [{
                    label: 'number',
                }],
            'textarea': [{
                    value: 'Textarea',
                    disabled: false,
                },
                [Validators.minLength(this.minLength)]],
            'ckeditor': [{
                    value: '<p>CKEditor</p>',
                    disabled: false,
                }],
            'tinyMCE': [{
                    value: '<p>TinyMCE</p>',
                    disabled: false,
                }],
        });
        this.fetchDatatable(function (data) {
            _this.rows = data;
        });
    }
    ExerciseComponent.prototype.ngOnInit = function () {
    };
    ExerciseComponent.prototype.doFilterAdvanced = function (keyword) {
        this.keyword = keyword;
    };
    ExerciseComponent.prototype.fetchDatatable = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/datatable.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    ExerciseComponent.prototype.onSubmit = function () {
        console.log(this.formGroup.value);
    };
    ExerciseComponent.prototype.uploadImage = function (file) {
        console.log(file);
    };
    ExerciseComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: DomSanitizer }
    ]; };
    ExerciseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-exercise',
                    template: "<do-page-outlet [header]=\"'Exercise'\">\n  <div pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-datatable\n        [api]=\"apiDatatable\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'name'\"\n            [label]=\"'Name'\"\n            formControlName=\"name\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'gender'\"\n            [label]=\"'Gender'\"\n            formControlName=\"gender\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'company'\"\n            [label]=\"'Company'\"\n            formControlName=\"company\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-tree [nodeItems]=\"nodeItems\" [options]=\"options\"></do-tree>\n    </div>\n    <form [formGroup]=\"formGroup\">\n      <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n        <do-image-upload\n          [radius]=\"50\"\n          [required]=\"false\"\n          (onUpload)=\"uploadImage($event)\"\n          formControlName=\"image\">\n        </do-image-upload>\n      </div>\n      <do-input-text\n        [name]=\"'username'\"\n        [label]=\"'Username'\"\n        [required]=\"true\"\n        formControlName=\"username\">\n      </do-input-text>\n      <do-input-currency\n        [name]=\"'currency'\"\n        [label]=\"'Currency'\"\n        [required]=\"true\"\n        formControlName=\"currency\">\n      </do-input-currency>\n      <do-datepicker\n        [name]=\"'date'\"\n        [label]=\"'Date'\"\n        [required]=\"true\"\n        [pattern]=\"pattern\"\n        formControlName=\"date\">\n      </do-datepicker>\n      <do-checkbox\n        [name]=\"'checkbox'\"\n        [label]=\"'Checkbox'\"\n        [required]=\"true\"\n        [data]=\"dataCheckbox\"\n        formControlName=\"checkbox\">\n      </do-checkbox>\n      <do-radio\n        [name]=\"'radio'\"\n        [label]=\"'Radio'\"\n        [data]=\"dataRadio\"\n        [required]=\"true\"\n        formControlName=\"radio\">\n      </do-radio>\n      <do-select\n        [name]=\"'searchSelect'\"\n        [label]=\"'Search Select'\"\n        [api]=\"apiSelect\"\n        formControlName=\"searchSelect\">\n      </do-select>\n      <do-select\n        [name]=\"'staticSelect'\"\n        [label]=\"'Static Select'\"\n        [required]=\"true\"\n        [items]=\"dataStaticSelect\"\n        formControlName=\"staticSelect\">\n      </do-select>\n      <do-textarea\n        [name]=\"'textarea'\"\n        [label]=\"'Textarea'\"\n        [minLength]=\"minLength\"\n        [required]=\"true\"\n        formControlName=\"textarea\">\n      </do-textarea>\n      <do-ckeditor\n        [name]=\"'ckeditor'\"\n        [label]=\"'CKEditor'\"\n        [required]=\"true\"\n        formControlName=\"ckeditor\">\n      </do-ckeditor>\n      <do-tiny-mce\n        [id]=\"'tinyMCE01'\"\n        [name]=\"'tinyMCE'\"\n        [label]=\"'TinyMCE'\"\n        [required]=\"true\"\n        formControlName=\"tinyMCE\">\n      </do-tiny-mce>\n      <div class=\"form-group row\">\n        <div class=\"offset-sm-3 col-sm-9\">\n          <button\n            type=\"submit\"\n            nbButton\n            status=\"primary\"\n            (click)=\"onSubmit()\"\n            [disabled]=\"formGroup.invalid\">\n            Submit\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</do-page-outlet>\n",
                    styles: [""]
                },] }
    ];
    ExerciseComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: DomSanitizer }
    ]; };
    return ExerciseComponent;
}());

var routes = [
    {
        path: '',
        component: DoExerciseComponent,
        children: [
            {
                path: 'exercise',
                component: ExerciseComponent,
            },
        ],
    },
];
var DoExerciseRoutingModule = /** @class */ (function () {
    function DoExerciseRoutingModule() {
    }
    DoExerciseRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] }
    ];
    return DoExerciseRoutingModule;
}());

var DoExerciseModule = /** @class */ (function () {
    function DoExerciseModule() {
    }
    DoExerciseModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        NbCardModule,
                        NbButtonModule,
                        DoThemeModule,
                        DoCommonModule,
                        DoExerciseRoutingModule,
                    ],
                    declarations: [
                        DoExerciseComponent,
                        ExerciseComponent,
                    ],
                },] }
    ];
    return DoExerciseModule;
}());

/*
 * Public API Surface of do-exercise
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DoExerciseModule, ExerciseComponent, DoExerciseRoutingModule as ɵa, DoExerciseComponent as ɵb };
//# sourceMappingURL=dongkap-do-exercise.js.map
