import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { TreeMode } from 'tree-ngx';
import { DatePattern, HttpMethod } from '@dongkap/do-core';
export class ExerciseComponent {
    constructor(formBuilder, _d) {
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
        this.fetchDatatable((data) => {
            this.rows = data;
        });
    }
    ngOnInit() {
    }
    doFilterAdvanced(keyword) {
        this.keyword = keyword;
    }
    fetchDatatable(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/datatable.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    onSubmit() {
        console.log(this.formGroup.value);
    }
    uploadImage(file) {
        console.log(file);
    }
}
ExerciseComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: DomSanitizer }
];
ExerciseComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-exercise',
                template: "<do-page-outlet [header]=\"'Exercise'\">\n  <div pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-datatable\n        [api]=\"apiDatatable\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'name'\"\n            [label]=\"'Name'\"\n            formControlName=\"name\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'gender'\"\n            [label]=\"'Gender'\"\n            formControlName=\"gender\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'company'\"\n            [label]=\"'Company'\"\n            formControlName=\"company\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-tree [nodeItems]=\"nodeItems\" [options]=\"options\"></do-tree>\n    </div>\n    <form [formGroup]=\"formGroup\">\n      <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n        <do-image-upload\n          [radius]=\"50\"\n          [required]=\"false\"\n          (onUpload)=\"uploadImage($event)\"\n          formControlName=\"image\">\n        </do-image-upload>\n      </div>\n      <do-input-text\n        [name]=\"'username'\"\n        [label]=\"'Username'\"\n        [required]=\"true\"\n        formControlName=\"username\">\n      </do-input-text>\n      <do-input-currency\n        [name]=\"'currency'\"\n        [label]=\"'Currency'\"\n        [required]=\"true\"\n        formControlName=\"currency\">\n      </do-input-currency>\n      <do-datepicker\n        [name]=\"'date'\"\n        [label]=\"'Date'\"\n        [required]=\"true\"\n        [pattern]=\"pattern\"\n        formControlName=\"date\">\n      </do-datepicker>\n      <do-checkbox\n        [name]=\"'checkbox'\"\n        [label]=\"'Checkbox'\"\n        [required]=\"true\"\n        [data]=\"dataCheckbox\"\n        formControlName=\"checkbox\">\n      </do-checkbox>\n      <do-radio\n        [name]=\"'radio'\"\n        [label]=\"'Radio'\"\n        [data]=\"dataRadio\"\n        [required]=\"true\"\n        formControlName=\"radio\">\n      </do-radio>\n      <do-select\n        [name]=\"'searchSelect'\"\n        [label]=\"'Search Select'\"\n        [api]=\"apiSelect\"\n        formControlName=\"searchSelect\">\n      </do-select>\n      <do-select\n        [name]=\"'staticSelect'\"\n        [label]=\"'Static Select'\"\n        [required]=\"true\"\n        [items]=\"dataStaticSelect\"\n        formControlName=\"staticSelect\">\n      </do-select>\n      <do-textarea\n        [name]=\"'textarea'\"\n        [label]=\"'Textarea'\"\n        [minLength]=\"minLength\"\n        [required]=\"true\"\n        formControlName=\"textarea\">\n      </do-textarea>\n      <do-ckeditor\n        [name]=\"'ckeditor'\"\n        [label]=\"'CKEditor'\"\n        [required]=\"true\"\n        formControlName=\"ckeditor\">\n      </do-ckeditor>\n      <do-tiny-mce\n        [id]=\"'tinyMCE01'\"\n        [name]=\"'tinyMCE'\"\n        [label]=\"'TinyMCE'\"\n        [required]=\"true\"\n        formControlName=\"tinyMCE\">\n      </do-tiny-mce>\n      <div class=\"form-group row\">\n        <div class=\"offset-sm-3 col-sm-9\">\n          <button\n            type=\"submit\"\n            nbButton\n            status=\"primary\"\n            (click)=\"onSubmit()\"\n            [disabled]=\"formGroup.invalid\">\n            Submit\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</do-page-outlet>\n",
                styles: [""]
            },] }
];
ExerciseComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: DomSanitizer }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlcmNpc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tZXhlcmNpc2UvIiwic291cmNlcyI6WyJsaWIvZXhlcmNpc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQVFwQyxPQUFPLEVBQUUsV0FBVyxFQUFpQixVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU8xRSxNQUFNLE9BQU8saUJBQWlCO0lBc0k1QixZQUFvQixXQUF3QixFQUNuQyxFQUFnQjtRQURMLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ25DLE9BQUUsR0FBRixFQUFFLENBQWM7UUFwSXpCLGlCQUFZLEdBQW9CO1lBQzlCO2dCQUNFLElBQUksRUFBRSxhQUFhO2dCQUNuQixRQUFRLEVBQUUsS0FBSzthQUNoQjtZQUNEO2dCQUNFLElBQUksRUFBRSxhQUFhO2dCQUNuQixRQUFRLEVBQUUsS0FBSzthQUNoQjtTQUNGLENBQUM7UUFDRix1QkFBa0IsR0FBb0I7WUFDcEM7Z0JBQ0UsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsUUFBUSxFQUFFLEtBQUs7YUFDaEI7U0FDRixDQUFDO1FBQ0YsY0FBUyxHQUFpQjtZQUN4QjtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixLQUFLLEVBQUUsU0FBUzthQUNqQjtZQUNEO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1NBQ0YsQ0FBQztRQUNGLHFC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WSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgVGFibGVDb2x1bW4gfSBmcm9tICdAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZSc7XG5pbXBvcnQgeyBUcmVlTW9kZSB9IGZyb20gJ3RyZWUtbmd4JztcbmltcG9ydCB7XG4gIFJhZGlvTW9kZWwsXG4gIENoZWNrYm94TW9kZWwsXG4gIFNlbGVjdFJlc3BvbnNlTW9kZWwsXG4gIEtleXdvcmQsXG4gIERhdGF0YWJsZUZpbHRlcixcbn0gZnJvbSAnQGRvbmdrYXAvZG8tY29tbW9uJztcbmltcG9ydCB7IERhdGVQYXR0ZXJuLCBIdHRwQmFzZU1vZGVsLCBIdHRwTWV0aG9kIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWV4ZXJjaXNlJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhlcmNpc2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4ZXJjaXNlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRXhlcmNpc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICBkYXRhQ2hlY2tib3g6IENoZWNrYm94TW9kZWxbXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnQ2hlY2sgQm94IDEnLFxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0NoZWNrIEJveCAyJyxcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICB9LFxuICBdO1xuICBkYXRhQ2hlY2tib3hFZGl0ZWQ6IENoZWNrYm94TW9kZWxbXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnQ2hlY2sgQm94IDEnLFxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ2hlY2sgQm94IDInLFxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgIH0sXG4gIF07XG4gIGRhdGFSYWRpbzogUmFkaW9Nb2RlbFtdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdSYWRpbyAxJyxcbiAgICAgIHZhbHVlOiAnUmFkaW8gMScsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUmFkaW8gMicsXG4gICAgICB2YWx1ZTogJ1JhZGlvIDInLFxuICAgIH0sXG4gIF07XG4gIGRhdGFTdGF0aWNTZWxlY3Q6IFNlbGVjdFJlc3BvbnNlTW9kZWxbXSA9IFtcbiAgICB7XG4gICAgICAnbGFiZWwnOiAnRGF0YScsXG4gICAgICAndmFsdWUnOiAnMScsXG4gICAgICAnZGlzYWJsZWQnOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICdsYWJlbCc6ICd0cnVlJyxcbiAgICAgICd2YWx1ZSc6ICcyJyxcbiAgICAgICdkaXNhYmxlZCc6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgJ2xhYmVsJzogJ251bWJlcicsXG4gICAgICAndmFsdWUnOiAnMycsXG4gICAgICAnZGlzYWJsZWQnOiBmYWxzZSxcbiAgICB9LFxuICBdO1xuICBtaW5MZW5ndGg6IG51bWJlciA9IDU7XG4gIHBhdHRlcm46IHN0cmluZyA9IERhdGVQYXR0ZXJuLlNMQVNIO1xuXG4gIHJvd3M6IGFueVtdID0gW107XG4gIGNvbHVtbnM6IFRhYmxlQ29sdW1uW10gPSBbXG4gICAgeyBuYW1lOiAnTmFtZScsIHByb3A6ICduYW1lJywgd2lkdGg6IDE1MCwgZnJvemVuTGVmdDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ0dlbmRlcicsIHByb3A6ICdnZW5kZXInLCB3aWR0aDogNTAsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdBZ2UnLCBwcm9wOiAnYWdlJywgd2lkdGg6IDI1LCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnQ29tcGFueScsIHByb3A6ICdjb21wYW55Jywgd2lkdGg6IDIwMCB9LFxuICBdO1xuICBhcGlEYXRhdGFibGU6IEh0dHBCYXNlTW9kZWwgPSB7XG4gICAgc2VydmVyOiB7XG4gICAgICBwcm90b2NvbDogJ2h0dHAnLFxuICAgICAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gICAgICBwb3J0OiA0MjQyLFxuICAgIH0sXG4gICAgcGF0aDogJy9hc3NldHMvZGF0YS9kYXRhdGFibGUuanNvbicsXG4gICAgbWV0aG9kOiBIdHRwTWV0aG9kLkdFVCxcbiAgfTtcbiAgYXBpU2VsZWN0OiBIdHRwQmFzZU1vZGVsID0ge1xuICAgIHNlcnZlcjoge1xuICAgICAgcHJvdG9jb2w6ICdodHRwJyxcbiAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICAgICAgcG9ydDogNDI0MixcbiAgICB9LFxuICAgIHBhdGg6ICcvYXNzZXRzL2RhdGEvc2VsZWN0Lmpzb24nLFxuICAgIG1ldGhvZDogSHR0cE1ldGhvZC5HRVQsXG4gIH07XG4gIGZvcm1Hcm91cEZpbHRlcjogRm9ybUdyb3VwO1xuICBmaWx0ZXJzOiBEYXRhdGFibGVGaWx0ZXJbXTtcbiAga2V5d29yZDogS2V5d29yZDtcbiAgb3B0aW9uczogYW55ID0ge1xuICAgIG1vZGU6IFRyZWVNb2RlLk11bHRpU2VsZWN0LFxuICAgIGNoZWNrYm94ZXM6IHRydWUsXG4gICAgYWx3YXlzRW1pdFNlbGVjdGVkOiBmYWxzZSxcbiAgfTtcbiAgbm9kZUl0ZW1zOiBhbnlbXSA9IFt7XG4gICAgaWQ6ICcwJyxcbiAgICBuYW1lOiAnSGVyb3MnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAnMScsXG4gICAgICAgIG5hbWU6ICdCYXRtYW4nLFxuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgcGhyYXNlOiAnSSBhbSB0aGUgYmF0bWFuJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJzInLFxuICAgICAgICBuYW1lOiAnU3VwZXJtYW4nLFxuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgcGhyYXNlOiAnTWFuIG9mIHN0ZWVsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICBleHBhbmRlZDogZmFsc2VcbiAgfSxcbiAge1xuICAgIGlkOiAnMycsXG4gICAgbmFtZTogJ1ZpbGxhaW5zJyxcbiAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBpZDogJzQnLFxuICAgICAgICBuYW1lOiAnSm9rZXInLFxuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgcGhyYXNlOiAnV2h5IHNvIHNlcml1cydcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICc1JyxcbiAgICAgICAgbmFtZTogJ0xleCBsdXRob3InLFxuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgcGhyYXNlOiAnSSBhbSB0aGUgdmlsbGFpbiBvZiB0aGlzIHN0b3J5J1xuICAgICAgICB9LFxuICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgIH1cbiAgICBdXG4gIH1dO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHVibGljIF9kOiBEb21TYW5pdGl6ZXIpIHtcbiAgICAgIHRoaXMuZm9ybUdyb3VwRmlsdGVyID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICduYW1lJzogW10sXG4gICAgICAgICdnZW5kZXInOiBbXSxcbiAgICAgICAgJ2NvbXBhbnknOiBbXSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5maWx0ZXJzID0gW1xuICAgICAgICB7IGNvbnRyb2xOYW1lOiAnbmFtZScsIHR5cGU6ICdpbnB1dCcgfSxcbiAgICAgICAgeyBjb250cm9sTmFtZTogJ2dlbmRlcicsIHR5cGU6ICdpbnB1dCcgfSxcbiAgICAgICAgeyBjb250cm9sTmFtZTogJ2NvbXBhbnknLCB0eXBlOiAnaW5wdXQnIH1dO1xuICAgICAgdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgJ2ltYWdlJzogW10sXG4gICAgICAgICd1c2VybmFtZSc6IFt7XG4gICAgICAgICAgdmFsdWU6ICd1c2VybmFtZScsXG4gICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgIH1dLFxuICAgICAgICAnY3VycmVuY3knOiBbJzEyNDEyNC4xMjQnXSxcbiAgICAgICAgJ2RhdGUnOiBbe1xuICAgICAgICAgIHZhbHVlOiAnMzEvMTIvMjAxOScsXG4gICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICB9XSxcbiAgICAgICAgJ2NoZWNrYm94JzogW3RoaXMuZGF0YUNoZWNrYm94RWRpdGVkXSxcbiAgICAgICAgJ3JhZGlvJzogW3tcbiAgICAgICAgICB2YWx1ZTogJ1JhZGlvIDInLFxuICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgfV0sXG4gICAgICAgICdzZWFyY2hTZWxlY3QnOiBbXSxcbiAgICAgICAgJ3N0YXRpY1NlbGVjdCc6IFt7XG4gICAgICAgICAgICBsYWJlbDogJ251bWJlcicsXG4gICAgICAgIH1dLFxuICAgICAgICAndGV4dGFyZWEnOiBbe1xuICAgICAgICAgIHZhbHVlOiAnVGV4dGFyZWEnLFxuICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgW1ZhbGlkYXRvcnMubWluTGVuZ3RoKHRoaXMubWluTGVuZ3RoKV1dLFxuICAgICAgICAnY2tlZGl0b3InOiBbe1xuICAgICAgICAgIHZhbHVlOiAnPHA+Q0tFZGl0b3I8L3A+JyxcbiAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIH1dLFxuICAgICAgICAndGlueU1DRSc6IFt7XG4gICAgICAgICAgdmFsdWU6ICc8cD5UaW55TUNFPC9wPicsXG4gICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICB9XSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5mZXRjaERhdGF0YWJsZSgoZGF0YTogYW55W10pID0+IHtcbiAgICAgICAgdGhpcy5yb3dzID0gZGF0YTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZG9GaWx0ZXJBZHZhbmNlZChrZXl3b3JkOiBLZXl3b3JkKSB7XG4gICAgdGhpcy5rZXl3b3JkID0ga2V5d29yZDtcbiAgfVxuXG4gIGZldGNoRGF0YXRhYmxlKGNiKSB7XG4gICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgcmVxLm9wZW4oJ0dFVCcsIGBhc3NldHMvZGF0YS9kYXRhdGFibGUuanNvbmApO1xuXG4gICAgcmVxLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGNiKEpTT04ucGFyc2UocmVxLnJlc3BvbnNlKSk7XG4gICAgfTtcblxuICAgIHJlcS5zZW5kKCk7XG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XG4gIH1cblxuICB1cGxvYWRJbWFnZShmaWxlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhmaWxlKTtcbiAgfVxuXG59XG4iXX0=