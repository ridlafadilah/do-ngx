import { Component, Injector, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { PROFILE_INDEXED_DB, ResponseCode, USER_INFO, UserInfo, Pattern, } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-common';
import { AuthIndexedDBService } from '@dongkap/do-auth';
export class SystemPageComponent extends BaseFormComponent {
    constructor(injector, userService, profileIndexedDB, authIndexedDB) {
        super(injector, {
            'username': [{
                    value: null,
                    disabled: true,
                }],
            'name': [],
            'email': [],
            'phoneNumber': [],
            'address': [null, [Validators.minLength(5)]],
            'country': [],
            'province': [],
            'city': [],
            'district': [],
            'subDistrict': [],
        });
        this.injector = injector;
        this.userService = userService;
        this.profileIndexedDB = profileIndexedDB;
        this.authIndexedDB = authIndexedDB;
        this.patternEmail = Pattern.EMAIL;
        this.patternPhoneNumber = Pattern.PHONE_NUMBER;
        this.minLength = 5;
        this.disabledUpload = false;
        this.provider = 'local';
        this.formGroupImage = this.formBuilder.group({
            'image': [],
        });
        this.apiSelectCountry = this.api['master']['select-country'];
        this.apiSelectProvince = this.api['master']['select-province'];
        this.apiSelectCity = this.api['master']['select-city'];
        this.apiSelectDistrict = this.api['master']['select-district'];
        this.apiSelectSubDistrict = this.api['master']['select-subdistrict'];
        this.authIndexedDB.getEnc('provider').then((value) => {
            if (value !== 'local') {
                this.provider = value;
                this.formGroup.controls['email'].disable();
            }
        });
    }
    ngOnInit() {
        this.onInit('profile', 'get-profile-system');
        Promise.all([
            this.profileIndexedDB.get('image-b64'),
            this.profileIndexedDB.get('image'),
        ]).then((value) => {
            if (value[0])
                this.image = value[0];
            else
                this.image = value[1];
        });
        this.paramSelectProvince = [{
                key: 'country',
                value: 'undefined',
            }];
        this.paramSelectCity = [{
                key: 'province',
                value: 'undefined',
            }];
        this.paramSelectDistrict = [{
                key: 'city',
                value: 'undefined',
            }];
        this.paramSelectSubDistrict = [{
                key: 'district',
                value: 'undefined',
            }];
    }
    onInit(serviceName, apiName) {
        this.loadingForm = true;
        this.exec(serviceName, apiName)
            .subscribe((success) => {
            this.loadingForm = false;
            this.formGroup.controls['name'].setValue(success['name']);
            this.formGroup.controls['username'].setValue(success['username']);
            this.formGroup.controls['email'].setValue(success['email']);
            if (success['address'])
                this.formGroup.controls['address'].setValue(success['address']);
            if (success['country']) {
                this.formGroup.controls['country'].setValue({
                    label: success['country'],
                    value: success['countryCode']
                });
                this.paramSelectProvince = [
                    {
                        key: 'country',
                        value: success['countryCode'],
                    },
                ];
            }
            if (success['province']) {
                this.formGroup.controls['province'].setValue({
                    label: success['province'],
                    value: success['provinceCode']
                });
                this.paramSelectCity = [
                    {
                        key: 'province',
                        value: success['provinceCode'],
                    },
                ];
            }
            if (success['city']) {
                this.formGroup.controls['city'].setValue({
                    label: success['city'],
                    value: success['cityCode']
                });
                this.paramSelectDistrict = [
                    {
                        key: 'city',
                        value: success['cityCode'],
                    },
                ];
            }
            if (success['district']) {
                this.formGroup.controls['district'].setValue({
                    label: success['district'],
                    value: success['districtCode']
                });
                this.paramSelectSubDistrict = [
                    {
                        key: 'district',
                        value: success['districtCode'],
                    },
                ];
            }
            if (success['subDistrict']) {
                this.formGroup.controls['subDistrict'].setValue({
                    label: success['subDistrict'],
                    value: success['subDistrictCode']
                });
            }
            if (success['phoneNumber'])
                this.formGroup.controls['phoneNumber'].setValue(success['phoneNumber']);
            if (success['mobileNumber'])
                this.formGroup.controls['mobileNumber'].setValue(success['mobileNumber']);
            this.authIndexedDB.getEnc('provider').then((value) => {
                if (value !== 'local') {
                    this.provider = value;
                    this.formGroup.controls['email'].disable();
                }
            });
            this.formGroup.markAsPristine();
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
    onSelectCountry(select) {
        this.paramSelectProvince = [
            {
                key: 'country',
                value: select ? select.value : 'undefined',
            },
        ];
        this.onClearProvince();
    }
    onSelectProvince(select) {
        this.paramSelectCity = [
            {
                key: 'province',
                value: select ? select.value : 'undefined',
            },
        ];
        this.onClearProvince();
    }
    onSelectCity(select) {
        this.paramSelectDistrict = [
            {
                key: 'city',
                value: select ? select.value : 'undefined',
            },
        ];
        this.onClearCity();
    }
    onSelectDistrict(select) {
        this.paramSelectSubDistrict = [
            {
                key: 'district',
                value: select ? select.value : 'undefined',
            },
        ];
        this.onClearDistrict();
    }
    onClearCountry() {
        this.formGroup.patchValue({
            'province': null,
            'city': null,
            'district': null,
            'subDistrict': null,
        });
    }
    onClearProvince() {
        this.formGroup.patchValue({
            'city': null,
            'district': null,
            'subDistrict': null,
        });
    }
    onClearCity() {
        this.formGroup.patchValue({
            'district': null,
            'subDistrict': null,
        });
    }
    onClearDistrict() {
        this.formGroup.patchValue({
            'subDistrict': null,
        });
    }
    uploadImage(file) {
        const data = new FormData();
        data.append('photo', file);
        this.formGroupImage.get('image').disable();
        this.exec('file', 'photo-profile', data).subscribe((success) => {
            this.userService.updatePhotoUser(file, success.respStatusMessage['checksum']);
            this.uploadFinished = true;
            this.formGroupImage.markAsPristine();
            this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true, null, 'success');
        }, (error) => {
            this.formGroupImage.get('image').enable();
            this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
    }
    valueSelect(prop) {
        if (this.formGroup.get(prop).value) {
            if (this.formGroup.get(prop).value.label) {
                return this.formGroup.get(prop).value.label;
            }
            else {
                return this.formGroup.get(prop).value;
            }
        }
        else {
            return null;
        }
    }
    valueSelectNonLabel(prop) {
        if (this.formGroup.get(prop).value) {
            if (this.formGroup.get(prop).value.value) {
                return this.formGroup.get(prop).value.value;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }
    onSubmit() {
        const data = {
            name: this.formGroup.get('name').value,
            phoneNumber: this.formGroup.get('phoneNumber').value,
            address: this.formGroup.get('address').value,
            country: this.valueSelect('country'),
            countryCode: this.valueSelectNonLabel('country'),
            province: this.valueSelect('province'),
            provinceCode: this.valueSelectNonLabel('province'),
            city: this.valueSelect('city'),
            cityCode: this.valueSelectNonLabel('city'),
            district: this.valueSelect('district'),
            districtCode: this.valueSelectNonLabel('district'),
            subDistrict: this.valueSelect('subDistrict'),
            subDistrictCode: this.valueSelectNonLabel('subDistrict'),
        };
        if (this.provider === 'local') {
            data['email'] = this.formGroup.get('email').value;
        }
        super.onSubmit(data, 'profile', 'change-profile-system')
            .pipe(takeUntil(this.destroy$))
            .subscribe((response) => {
            if (response) {
                switch (response.respStatusCode) {
                    case ResponseCode.ERR_SCR0008.toString():
                        this.formGroup.controls['email'].setErrors({
                            'email': true,
                        });
                        break;
                    case ResponseCode.ERR_SCR0007A.toString():
                        this.formGroup.controls['phoneNumber'].setErrors({
                            'error.pattern.phoneNumber': true,
                        });
                        break;
                    case ResponseCode.OK_SCR004.toString():
                        this.userService.updateNameUser(this.formGroup.get('name').value);
                        break;
                    default:
                        break;
                }
            }
        });
    }
}
SystemPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: UserInfo, decorators: [{ type: Inject, args: [USER_INFO,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [PROFILE_INDEXED_DB,] }] },
    { type: AuthIndexedDBService }
];
SystemPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-system-page',
                template: "<do-page-outlet [header]=\"'Profile'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n      <form [formGroup]=\"formGroupImage\">\n        <do-image-upload\n          [radius]=\"50\"\n          [skeleton]=\"loadingForm\"\n          [image]=\"image\"\n          [uploadFn]=\"uploadFinished\"\n          (onUpload)=\"uploadImage($event)\"\n          formControlName=\"image\">\n        </do-image-upload>\n      </form>\n    </div>\n    <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'name'\"\n          [label]=\"'Name'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"name\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'email'\"\n          [label]=\"'Email'\"\n          [required]=\"true\"\n          [pattern]=\"patternEmail\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"email\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'username'\"\n          [label]=\"'Username'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"username\">\n        </do-input-text>\n        <div class=\"font-row\">\n          <div class=\"header\">\n            <div class=\"name bold\">{{'label.contact-person' | translate}}</div>\n          </div>\n          <do-input-text\n            [name]=\"'phoneNumber'\"\n            [label]=\"'Telephone'\"\n            [required]=\"true\"\n            [pattern]=\"patternPhoneNumber\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"phoneNumber\">\n          </do-input-text>\n          <do-textarea\n            [name]=\"'address'\"\n            [label]=\"'Address'\"\n            [required]=\"true\"\n            [minLength]=\"minLength\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"address\">\n          </do-textarea>\n          <do-select\n            [name]=\"'country'\"\n            [label]=\"'Country'\"\n            [api]=\"apiSelectCountry\"\n            [skeleton]=\"loadingForm\"\n            (onSelect)=\"onSelectCountry($event)\"\n            (onClear)=\"onClearCountry()\"\n            formControlName=\"country\">\n          </do-select>\n          <do-select\n            [name]=\"'province'\"\n            [label]=\"'Province'\"\n            [api]=\"apiSelectProvince\"\n            [queryParam]=\"paramSelectProvince\"\n            [skeleton]=\"loadingForm\"\n            (onSelect)=\"onSelectProvince($event)\"\n            (onClear)=\"onClearProvince()\"\n            formControlName=\"province\">\n          </do-select>\n          <do-select\n            [name]=\"'city'\"\n            [label]=\"'City'\"\n            [api]=\"apiSelectCity\"\n            [queryParam]=\"paramSelectCity\"\n            [skeleton]=\"loadingForm\"\n            (onSelect)=\"onSelectCity($event)\"\n            (onClear)=\"onClearCity()\"\n            formControlName=\"city\">\n          </do-select>\n          <do-select\n            [name]=\"'district'\"\n            [label]=\"'District'\"\n            [api]=\"apiSelectDistrict\"\n            [queryParam]=\"paramSelectDistrict\"\n            [skeleton]=\"loadingForm\"\n            (onSelect)=\"onSelectDistrict($event)\"\n            (onClear)=\"onClearDistrict()\"\n            formControlName=\"district\">\n          </do-select>\n          <do-select\n            [name]=\"'subDistrict'\"\n            [label]=\"'Sub District'\"\n            [api]=\"apiSelectSubDistrict\"\n            [queryParam]=\"paramSelectSubDistrict\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"subDistrict\">\n          </do-select>\n        </div>\n        <do-button-submit\n          (onSubmit)=\"onSubmit()\"\n          [name]=\"'Update Profile'\"\n          [disabledButton]=\"disabled\"\n          [formGroupButton]=\"formGroup\"\n          [skeleton]=\"loadingForm\">\n        </do-button-submit>\n      </form>\n    </div>\n  </div>\n</do-page-outlet>\n",
                styles: [".nb-theme-default :host .font-row{margin-top:2rem}.nb-theme-default :host .font-row:first-child{margin-bottom:2rem}.nb-theme-default :host .font-row .header{text-align:right;color:#8f9bb3;font-family:Open Sans,sans-serif;font-size:.9rem;font-weight:100;line-height:1rem;align-items:baseline}.nb-theme-default :host .font-row p{margin:0}.nb-theme-default :host .header{display:flex;flex-wrap:wrap;align-items:center;padding-bottom:1rem;margin-bottom:1rem;border-bottom:1px solid #edf1f7}.nb-theme-default :host .header:last-child{border-bottom:none}.nb-theme-default :host .header div:first-child{flex:2;-ms-flex:2 1 auto;line-height:1;align-items:flex-end}.nb-theme-default :host .header div:first-child h1,.nb-theme-default :host .header div:first-child h2,.nb-theme-default :host .header div:first-child h3,.nb-theme-default :host .header div:first-child h4,.nb-theme-default :host .header div:first-child h5,.nb-theme-default :host .header div:first-child h6{margin-bottom:0}.nb-theme-default :host .header .variants{flex:1;-ms-flex:1 1 auto;display:flex;justify-content:space-between;align-items:flex-end}.nb-theme-default :host .header .variants span{padding-right:1rem;padding-left:1rem}.nb-theme-default :host .header .detail{flex:1;display:flex}.nb-theme-dark :host .font-row{margin-top:2rem}.nb-theme-dark :host .font-row:first-child{margin-bottom:2rem}.nb-theme-dark :host .font-row .header{text-align:right;color:#8f9bb3;font-family:Open Sans,sans-serif;font-size:.9rem;font-weight:100;line-height:1rem;align-items:baseline}.nb-theme-dark :host .font-row p{margin:0}.nb-theme-dark :host .header{display:flex;flex-wrap:wrap;align-items:center;padding-bottom:1rem;margin-bottom:1rem;border-bottom:1px solid #151a30}.nb-theme-dark :host .header:last-child{border-bottom:none}.nb-theme-dark :host .header div:first-child{flex:2;-ms-flex:2 1 auto;line-height:1;align-items:flex-end}.nb-theme-dark :host .header div:first-child h1,.nb-theme-dark :host .header div:first-child h2,.nb-theme-dark :host .header div:first-child h3,.nb-theme-dark :host .header div:first-child h4,.nb-theme-dark :host .header div:first-child h5,.nb-theme-dark :host .header div:first-child h6{margin-bottom:0}.nb-theme-dark :host .header .variants{flex:1;-ms-flex:1 1 auto;display:flex;justify-content:space-between;align-items:flex-end}.nb-theme-dark :host .header .variants span{padding-right:1rem;padding-left:1rem}.nb-theme-dark :host .header .detail{flex:1;display:flex}.nb-theme-cosmic :host .font-row{margin-top:2rem}.nb-theme-cosmic :host .font-row:first-child{margin-bottom:2rem}.nb-theme-cosmic :host .font-row .header{text-align:right;color:#8f9bb3;font-family:Open Sans,sans-serif;font-size:.9rem;font-weight:100;line-height:1rem;align-items:baseline}.nb-theme-cosmic :host .font-row p{margin:0}.nb-theme-cosmic :host .header{display:flex;flex-wrap:wrap;align-items:center;padding-bottom:1rem;margin-bottom:1rem;border-bottom:1px solid #1b1b38}.nb-theme-cosmic :host .header:last-child{border-bottom:none}.nb-theme-cosmic :host .header div:first-child{flex:2;-ms-flex:2 1 auto;line-height:1;align-items:flex-end}.nb-theme-cosmic :host .header div:first-child h1,.nb-theme-cosmic :host .header div:first-child h2,.nb-theme-cosmic :host .header div:first-child h3,.nb-theme-cosmic :host .header div:first-child h4,.nb-theme-cosmic :host .header div:first-child h5,.nb-theme-cosmic :host .header div:first-child h6{margin-bottom:0}.nb-theme-cosmic :host .header .variants{flex:1;-ms-flex:1 1 auto;display:flex;justify-content:space-between;align-items:flex-end}.nb-theme-cosmic :host .header .variants span{padding-right:1rem;padding-left:1rem}.nb-theme-cosmic :host .header .detail{flex:1;display:flex}.nb-theme-corporate :host .font-row{margin-top:2rem}.nb-theme-corporate :host .font-row:first-child{margin-bottom:2rem}.nb-theme-corporate :host .font-row .header{text-align:right;color:#8f9bb3;font-family:Open Sans,sans-serif;font-size:.9rem;font-weight:100;line-height:1rem;align-items:baseline}.nb-theme-corporate :host .font-row p{margin:0}.nb-theme-corporate :host .header{display:flex;flex-wrap:wrap;align-items:center;padding-bottom:1rem;margin-bottom:1rem;border-bottom:1px solid #edf1f7}.nb-theme-corporate :host .header:last-child{border-bottom:none}.nb-theme-corporate :host .header div:first-child{flex:2;-ms-flex:2 1 auto;line-height:1;align-items:flex-end}.nb-theme-corporate :host .header div:first-child h1,.nb-theme-corporate :host .header div:first-child h2,.nb-theme-corporate :host .header div:first-child h3,.nb-theme-corporate :host .header div:first-child h4,.nb-theme-corporate :host .header div:first-child h5,.nb-theme-corporate :host .header div:first-child h6{margin-bottom:0}.nb-theme-corporate :host .header .variants{flex:1;-ms-flex:1 1 auto;display:flex;justify-content:space-between;align-items:flex-end}.nb-theme-corporate :host .header .variants span{padding-right:1rem;padding-left:1rem}.nb-theme-corporate :host .header .detail{flex:1;display:flex}"]
            },] }
];
SystemPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: UserInfo, decorators: [{ type: Inject, args: [USER_INFO,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [PROFILE_INDEXED_DB,] }] },
    { type: AuthIndexedDBService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tZXh0cmEvIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL3N5c3RlbS1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBR3ZELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLFlBQVksRUFDWixTQUFTLEVBQ1QsUUFBUSxFQUNSLE9BQU8sR0FDUixNQUFNLGtCQUFrQixDQUFDO0FBSTFCLE9BQU8sRUFBRSxpQkFBaUIsRUFBb0IsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU94RCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsaUJBQXNCO0lBeUI3RCxZQUNTLFFBQWtCLEVBQ0UsV0FBcUIsRUFDWixnQkFBeUMsRUFDckUsYUFBbUM7UUFDM0MsS0FBSyxDQUFDLFFBQVEsRUFDWjtZQUNFLFVBQVUsRUFBRSxDQUFDO29CQUNYLEtBQUssRUFBRSxJQUFJO29CQUNYLFFBQVEsRUFBRSxJQUFJO2lCQUNmLENBQUM7WUFDRixNQUFNLEVBQUUsRUFBRTtZQUNWLE9BQU8sRUFBRSxFQUFFO1lBQ1gsYUFBYSxFQUFFLEVBQUU7WUFDakIsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLFNBQVMsRUFBRSxFQUFFO1lBQ2IsVUFBVSxFQUFFLEVBQUU7WUFDZCxNQUFNLEVBQUUsRUFBRTtZQUNWLFVBQVUsRUFBRSxFQUFFO1lBQ2QsYUFBYSxFQUFF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QU07aUJBQ1Q7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ2IsQ0FBQzs7O1lBM1NrQixRQUFRO1lBQ2UsUUFBUSx1QkFBL0MsTUFBTSxTQUFDLFNBQVM7NENBQ2hCLE1BQU0sU0FBQyxrQkFBa0I7WUFDSCxvQkFBb0I7OztZQWxDOUMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBRTFCLGloSUFBMkM7O2FBQzVDOzs7WUF2Qm1CLFFBQVE7WUFVMUIsUUFBUSx1QkF5Q0wsTUFBTSxTQUFDLFNBQVM7NENBQ2hCLE1BQU0sU0FBQyxrQkFBa0I7WUFuQ3JCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIFBST0ZJTEVfSU5ERVhFRF9EQixcbiAgUmVzcG9uc2VDb2RlLFxuICBVU0VSX0lORk8sXG4gIFVzZXJJbmZvLFxuICBQYXR0ZXJuLFxufSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEh0dHBCYXNlTW9kZWwgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgSW5kZXhlZERCRmFjdG9yeVNlcnZpY2UgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEJhc2VGb3JtQ29tcG9uZW50LCBTZWxlY3RQYXJhbU1vZGVsIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29tbW9uJztcbmltcG9ydCB7IEF1dGhJbmRleGVkREJTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tYXV0aCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLXN5c3RlbS1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3lzdGVtLXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3N5c3RlbS1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3lzdGVtUGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGb3JtQ29tcG9uZW50PGFueT4gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBpbWFnZTogc3RyaW5nO1xuICBwdWJsaWMgZm9ybUdyb3VwSW1hZ2U6IEZvcm1Hcm91cDtcbiAgcHVibGljIHVwbG9hZEZpbmlzaGVkOiBib29sZWFuO1xuICBwdWJsaWMgcGF0dGVybkVtYWlsOiBzdHJpbmcgPSBQYXR0ZXJuLkVNQUlMO1xuICBwdWJsaWMgcGF0dGVyblBob25lTnVtYmVyOiBzdHJpbmcgPSBQYXR0ZXJuLlBIT05FX05VTUJFUjtcbiAgcHVibGljIG1pbkxlbmd0aDogbnVtYmVyID0gNTtcbiAgcHVibGljIGRpc2FibGVkVXBsb2FkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBwcm92aWRlcjogc3RyaW5nID0gJ2xvY2FsJztcblxuICBwdWJsaWMgYXBpU2VsZWN0Q291bnRyeTogSHR0cEJhc2VNb2RlbDtcblxuICBwdWJsaWMgYXBpU2VsZWN0UHJvdmluY2U6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBwYXJhbVNlbGVjdFByb3ZpbmNlOiBTZWxlY3RQYXJhbU1vZGVsW107XG5cbiAgcHVibGljIGFwaVNlbGVjdENpdHk6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBwYXJhbVNlbGVjdENpdHk6IFNlbGVjdFBhcmFtTW9kZWxbXTtcblxuICBwdWJsaWMgYXBpU2VsZWN0RGlzdHJpY3Q6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBwYXJhbVNlbGVjdERpc3RyaWN0OiBTZWxlY3RQYXJhbU1vZGVsW107XG5cbiAgcHVibGljIGFwaVNlbGVjdFN1YkRpc3RyaWN0OiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgcGFyYW1TZWxlY3RTdWJEaXN0cmljdDogU2VsZWN0UGFyYW1Nb2RlbFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgQEluamVjdChVU0VSX0lORk8pIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJJbmZvLFxuICAgIEBJbmplY3QoUFJPRklMRV9JTkRFWEVEX0RCKSBwcml2YXRlIHByb2ZpbGVJbmRleGVkREI6IEluZGV4ZWREQkZhY3RvcnlTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aEluZGV4ZWREQjogQXV0aEluZGV4ZWREQlNlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3RvcixcbiAgICAgIHtcbiAgICAgICAgJ3VzZXJuYW1lJzogW3tcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgfV0sXG4gICAgICAgICduYW1lJzogW10sXG4gICAgICAgICdlbWFpbCc6IFtdLFxuICAgICAgICAncGhvbmVOdW1iZXInOiBbXSxcbiAgICAgICAgJ2FkZHJlc3MnOiBbbnVsbCwgW1ZhbGlkYXRvcnMubWluTGVuZ3RoKDUpXV0sXG4gICAgICAgICdjb3VudHJ5JzogW10sXG4gICAgICAgICdwcm92aW5jZSc6IFtdLFxuICAgICAgICAnY2l0eSc6IFtdLFxuICAgICAgICAnZGlzdHJpY3QnOiBbXSxcbiAgICAgICAgJ3N1YkRpc3RyaWN0JzogW10sXG4gICAgICB9KTtcbiAgICB0aGlzLmZvcm1Hcm91cEltYWdlID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAnaW1hZ2UnOiBbXSxcbiAgICB9KTtcbiAgICB0aGlzLmFwaVNlbGVjdENvdW50cnkgPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ3NlbGVjdC1jb3VudHJ5J107XG4gICAgdGhpcy5hcGlTZWxlY3RQcm92aW5jZSA9IHRoaXMuYXBpWydtYXN0ZXInXVsnc2VsZWN0LXByb3ZpbmNlJ107XG4gICAgdGhpcy5hcGlTZWxlY3RDaXR5ID0gdGhpcy5hcGlbJ21hc3RlciddWydzZWxlY3QtY2l0eSddO1xuICAgIHRoaXMuYXBpU2VsZWN0RGlzdHJpY3QgPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ3NlbGVjdC1kaXN0cmljdCddO1xuICAgIHRoaXMuYXBpU2VsZWN0U3ViRGlzdHJpY3QgPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ3NlbGVjdC1zdWJkaXN0cmljdCddO1xuICAgIHRoaXMuYXV0aEluZGV4ZWREQi5nZXRFbmMoJ3Byb3ZpZGVyJykudGhlbigodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHZhbHVlICE9PSAnbG9jYWwnKSB7XG4gICAgICAgIHRoaXMucHJvdmlkZXIgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ2VtYWlsJ10uZGlzYWJsZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vbkluaXQoJ3Byb2ZpbGUnLCAnZ2V0LXByb2ZpbGUtc3lzdGVtJyk7XG4gICAgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wcm9maWxlSW5kZXhlZERCLmdldCgnaW1hZ2UtYjY0JyksXG4gICAgICB0aGlzLnByb2ZpbGVJbmRleGVkREIuZ2V0KCdpbWFnZScpLFxuICAgIF0pLnRoZW4oKHZhbHVlOiBhbnlbXSkgPT4ge1xuICAgICAgaWYgKHZhbHVlWzBdKVxuICAgICAgICB0aGlzLmltYWdlID0gdmFsdWVbMF07XG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB2YWx1ZVsxXTtcbiAgICB9KTtcbiAgICB0aGlzLnBhcmFtU2VsZWN0UHJvdmluY2UgPSBbe1xuICAgICAga2V5OiAnY291bnRyeScsXG4gICAgICB2YWx1ZTogJ3VuZGVmaW5lZCcsXG4gICAgfV07XG4gICAgdGhpcy5wYXJhbVNlbGVjdENpdHkgPSBbe1xuICAgICAga2V5OiAncHJvdmluY2UnLFxuICAgICAgdmFsdWU6ICd1bmRlZmluZWQnLFxuICAgIH1dO1xuICAgIHRoaXMucGFyYW1TZWxlY3REaXN0cmljdCA9IFt7XG4gICAgICBrZXk6ICdjaXR5JyxcbiAgICAgIHZhbHVlOiAndW5kZWZpbmVkJyxcbiAgICB9XTtcbiAgICB0aGlzLnBhcmFtU2VsZWN0U3ViRGlzdHJpY3QgPSBbe1xuICAgICAga2V5OiAnZGlzdHJpY3QnLFxuICAgICAgdmFsdWU6ICd1bmRlZmluZWQnLFxuICAgIH1dO1xuICB9XG5cbiAgb25Jbml0KHNlcnZpY2VOYW1lOiBzdHJpbmcsIGFwaU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZ0Zvcm0gPSB0cnVlO1xuICAgIHRoaXMuZXhlYyhzZXJ2aWNlTmFtZSwgYXBpTmFtZSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChzdWNjZXNzOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ25hbWUnXS5zZXRWYWx1ZShzdWNjZXNzWyduYW1lJ10pO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWyd1c2VybmFtZSddLnNldFZhbHVlKHN1Y2Nlc3NbJ3VzZXJuYW1lJ10pO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydlbWFpbCddLnNldFZhbHVlKHN1Y2Nlc3NbJ2VtYWlsJ10pO1xuICAgICAgICAgIGlmIChzdWNjZXNzWydhZGRyZXNzJ10pIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydhZGRyZXNzJ10uc2V0VmFsdWUoc3VjY2Vzc1snYWRkcmVzcyddKTtcbiAgICAgICAgICBpZiAoc3VjY2Vzc1snY291bnRyeSddKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snY291bnRyeSddLnNldFZhbHVlKHtcbiAgICAgICAgICAgICAgbGFiZWw6IHN1Y2Nlc3NbJ2NvdW50cnknXSxcbiAgICAgICAgICAgICAgdmFsdWU6IHN1Y2Nlc3NbJ2NvdW50cnlDb2RlJ11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5wYXJhbVNlbGVjdFByb3ZpbmNlID0gW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAnY291bnRyeScsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN1Y2Nlc3NbJ2NvdW50cnlDb2RlJ10sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3VjY2Vzc1sncHJvdmluY2UnXSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3Byb3ZpbmNlJ10uc2V0VmFsdWUoe1xuICAgICAgICAgICAgICBsYWJlbDogc3VjY2Vzc1sncHJvdmluY2UnXSxcbiAgICAgICAgICAgICAgdmFsdWU6IHN1Y2Nlc3NbJ3Byb3ZpbmNlQ29kZSddXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucGFyYW1TZWxlY3RDaXR5ID0gW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAncHJvdmluY2UnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBzdWNjZXNzWydwcm92aW5jZUNvZGUnXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdWNjZXNzWydjaXR5J10pIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydjaXR5J10uc2V0VmFsdWUoe1xuICAgICAgICAgICAgICBsYWJlbDogc3VjY2Vzc1snY2l0eSddLFxuICAgICAgICAgICAgICB2YWx1ZTogc3VjY2Vzc1snY2l0eUNvZGUnXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnBhcmFtU2VsZWN0RGlzdHJpY3QgPSBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdjaXR5JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3VjY2Vzc1snY2l0eUNvZGUnXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdWNjZXNzWydkaXN0cmljdCddKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snZGlzdHJpY3QnXS5zZXRWYWx1ZSh7XG4gICAgICAgICAgICAgIGxhYmVsOiBzdWNjZXNzWydkaXN0cmljdCddLFxuICAgICAgICAgICAgICB2YWx1ZTogc3VjY2Vzc1snZGlzdHJpY3RDb2RlJ11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5wYXJhbVNlbGVjdFN1YkRpc3RyaWN0ID0gW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAnZGlzdHJpY3QnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBzdWNjZXNzWydkaXN0cmljdENvZGUnXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdWNjZXNzWydzdWJEaXN0cmljdCddKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snc3ViRGlzdHJpY3QnXS5zZXRWYWx1ZSh7XG4gICAgICAgICAgICAgIGxhYmVsOiBzdWNjZXNzWydzdWJEaXN0cmljdCddLFxuICAgICAgICAgICAgICB2YWx1ZTogc3VjY2Vzc1snc3ViRGlzdHJpY3RDb2RlJ11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3VjY2Vzc1sncGhvbmVOdW1iZXInXSkgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3Bob25lTnVtYmVyJ10uc2V0VmFsdWUoc3VjY2Vzc1sncGhvbmVOdW1iZXInXSk7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3NbJ21vYmlsZU51bWJlciddKSB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snbW9iaWxlTnVtYmVyJ10uc2V0VmFsdWUoc3VjY2Vzc1snbW9iaWxlTnVtYmVyJ10pO1xuICAgICAgICAgIHRoaXMuYXV0aEluZGV4ZWREQi5nZXRFbmMoJ3Byb3ZpZGVyJykudGhlbigodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSAnbG9jYWwnKSB7XG4gICAgICAgICAgICAgIHRoaXMucHJvdmlkZXIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ2VtYWlsJ10uZGlzYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLm1hcmtBc1ByaXN0aW5lKCk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gdHJ1ZTtcbiAgICAgICAgICBjb25zdCBlcnI6IEFwaUJhc2VSZXNwb25zZSA9IGVycm9yWydlcnJvciddO1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVyci5yZXNwU3RhdHVzTWVzc2FnZVtlcnIucmVzcFN0YXR1c0NvZGVdLCB0cnVlLCBudWxsLCAnZGFuZ2VyJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVyciBhcyBhbnksIHRydWUsIG51bGwsICdkYW5nZXInKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICApO1xuICB9XG5cbiAgb25TZWxlY3RDb3VudHJ5KHNlbGVjdDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wYXJhbVNlbGVjdFByb3ZpbmNlID0gW1xuICAgICAge1xuICAgICAgICBrZXk6ICdjb3VudHJ5JyxcbiAgICAgICAgdmFsdWU6IHNlbGVjdCA/IHNlbGVjdC52YWx1ZSA6ICd1bmRlZmluZWQnLFxuICAgICAgfSxcbiAgICBdO1xuICAgIHRoaXMub25DbGVhclByb3ZpbmNlKCk7XG4gIH1cbiAgb25TZWxlY3RQcm92aW5jZShzZWxlY3Q6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1TZWxlY3RDaXR5ID0gW1xuICAgICAge1xuICAgICAgICBrZXk6ICdwcm92aW5jZScsXG4gICAgICAgIHZhbHVlOiBzZWxlY3QgPyBzZWxlY3QudmFsdWUgOiAndW5kZWZpbmVkJyxcbiAgICAgIH0sXG4gICAgXTtcbiAgICB0aGlzLm9uQ2xlYXJQcm92aW5jZSgpO1xuICB9XG4gIG9uU2VsZWN0Q2l0eShzZWxlY3Q6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1TZWxlY3REaXN0cmljdCA9IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAnY2l0eScsXG4gICAgICAgIHZhbHVlOiBzZWxlY3QgPyBzZWxlY3QudmFsdWUgOiAndW5kZWZpbmVkJyxcbiAgICAgIH0sXG4gICAgXTtcbiAgICB0aGlzLm9uQ2xlYXJDaXR5KCk7XG4gIH1cbiAgb25TZWxlY3REaXN0cmljdChzZWxlY3Q6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1TZWxlY3RTdWJEaXN0cmljdCA9IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAnZGlzdHJpY3QnLFxuICAgICAgICB2YWx1ZTogc2VsZWN0ID8gc2VsZWN0LnZhbHVlIDogJ3VuZGVmaW5lZCcsXG4gICAgICB9LFxuICAgIF07XG4gICAgdGhpcy5vbkNsZWFyRGlzdHJpY3QoKTtcbiAgfVxuXG4gIG9uQ2xlYXJDb3VudHJ5KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xuICAgICAgJ3Byb3ZpbmNlJzogbnVsbCxcbiAgICAgICdjaXR5JzogbnVsbCxcbiAgICAgICdkaXN0cmljdCc6IG51bGwsXG4gICAgICAnc3ViRGlzdHJpY3QnOiBudWxsLFxuICAgIH0pO1xuICB9XG4gIG9uQ2xlYXJQcm92aW5jZSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHtcbiAgICAgICdjaXR5JzogbnVsbCxcbiAgICAgICdkaXN0cmljdCc6IG51bGwsXG4gICAgICAnc3ViRGlzdHJpY3QnOiBudWxsLFxuICAgIH0pO1xuICB9XG4gIG9uQ2xlYXJDaXR5KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xuICAgICAgJ2Rpc3RyaWN0JzogbnVsbCxcbiAgICAgICdzdWJEaXN0cmljdCc6IG51bGwsXG4gICAgfSk7XG4gIH1cbiAgb25DbGVhckRpc3RyaWN0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xuICAgICAgJ3N1YkRpc3RyaWN0JzogbnVsbCxcbiAgICB9KTtcbiAgfVxuXG4gIHVwbG9hZEltYWdlKGZpbGU6IGFueSkge1xuICAgIGNvbnN0IGRhdGE6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZGF0YS5hcHBlbmQoJ3Bob3RvJywgZmlsZSk7XG4gICAgdGhpcy5mb3JtR3JvdXBJbWFnZS5nZXQoJ2ltYWdlJykuZGlzYWJsZSgpO1xuICAgIHRoaXMuZXhlYygnZmlsZScsICdwaG90by1wcm9maWxlJywgZGF0YSkuc3Vic2NyaWJlKFxuICAgICAgICAoc3VjY2VzczogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy51c2VyU2VydmljZS51cGRhdGVQaG90b1VzZXIoZmlsZSwgc3VjY2Vzcy5yZXNwU3RhdHVzTWVzc2FnZVsnY2hlY2tzdW0nXSk7XG4gICAgICAgICAgdGhpcy51cGxvYWRGaW5pc2hlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXBJbWFnZS5tYXJrQXNQcmlzdGluZSgpO1xuICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKHN1Y2Nlc3MucmVzcFN0YXR1c01lc3NhZ2Vbc3VjY2Vzcy5yZXNwU3RhdHVzQ29kZV0sIHRydWUsIG51bGwsICdzdWNjZXNzJyk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcjogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXBJbWFnZS5nZXQoJ2ltYWdlJykuZW5hYmxlKCk7XG4gICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oZXJyb3IucmVzcFN0YXR1c01lc3NhZ2VbZXJyb3IucmVzcFN0YXR1c0NvZGVdLCB0cnVlLCBudWxsLCAnZGFuZ2VyJyk7XG4gICAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIHZhbHVlU2VsZWN0KHByb3A6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZS5sYWJlbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtR3JvdXAuZ2V0KHByb3ApLnZhbHVlLmxhYmVsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgdmFsdWVTZWxlY3ROb25MYWJlbChwcm9wOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5nZXQocHJvcCkudmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmZvcm1Hcm91cC5nZXQocHJvcCkudmFsdWUudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZS52YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICBuYW1lOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ25hbWUnKS52YWx1ZSxcbiAgICAgIHBob25lTnVtYmVyOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ3Bob25lTnVtYmVyJykudmFsdWUsXG4gICAgICBhZGRyZXNzOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ2FkZHJlc3MnKS52YWx1ZSxcbiAgICAgIGNvdW50cnk6IHRoaXMudmFsdWVTZWxlY3QoJ2NvdW50cnknKSxcbiAgICAgIGNvdW50cnlDb2RlOiB0aGlzLnZhbHVlU2VsZWN0Tm9uTGFiZWwoJ2NvdW50cnknKSxcbiAgICAgIHByb3ZpbmNlOiB0aGlzLnZhbHVlU2VsZWN0KCdwcm92aW5jZScpLFxuICAgICAgcHJvdmluY2VDb2RlOiB0aGlzLnZhbHVlU2VsZWN0Tm9uTGFiZWwoJ3Byb3ZpbmNlJyksXG4gICAgICBjaXR5OiB0aGlzLnZhbHVlU2VsZWN0KCdjaXR5JyksXG4gICAgICBjaXR5Q29kZTogdGhpcy52YWx1ZVNlbGVjdE5vbkxhYmVsKCdjaXR5JyksXG4gICAgICBkaXN0cmljdDogdGhpcy52YWx1ZVNlbGVjdCgnZGlzdHJpY3QnKSxcbiAgICAgIGRpc3RyaWN0Q29kZTogdGhpcy52YWx1ZVNlbGVjdE5vbkxhYmVsKCdkaXN0cmljdCcpLFxuICAgICAgc3ViRGlzdHJpY3Q6IHRoaXMudmFsdWVTZWxlY3QoJ3N1YkRpc3RyaWN0JyksXG4gICAgICBzdWJEaXN0cmljdENvZGU6IHRoaXMudmFsdWVTZWxlY3ROb25MYWJlbCgnc3ViRGlzdHJpY3QnKSxcbiAgICB9O1xuICAgIGlmICh0aGlzLnByb3ZpZGVyID09PSAnbG9jYWwnKSB7XG4gICAgICBkYXRhWydlbWFpbCddID0gdGhpcy5mb3JtR3JvdXAuZ2V0KCdlbWFpbCcpLnZhbHVlO1xuICAgIH1cbiAgICAoc3VwZXIub25TdWJtaXQoZGF0YSwgJ3Byb2ZpbGUnLCAnY2hhbmdlLXByb2ZpbGUtc3lzdGVtJykgYXMgT2JzZXJ2YWJsZTxBcGlCYXNlUmVzcG9uc2U+KVxuICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc3BvbnNlLnJlc3BTdGF0dXNDb2RlKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIFJlc3BvbnNlQ29kZS5FUlJfU0NSMDAwOC50b1N0cmluZygpOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snZW1haWwnXS5zZXRFcnJvcnMoe1xuICAgICAgICAgICAgICAgICAgICAgICdlbWFpbCc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgUmVzcG9uc2VDb2RlLkVSUl9TQ1IwMDA3QS50b1N0cmluZygpOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1sncGhvbmVOdW1iZXInXS5zZXRFcnJvcnMoe1xuICAgICAgICAgICAgICAgICAgICAgICdlcnJvci5wYXR0ZXJuLnBob25lTnVtYmVyJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSBSZXNwb25zZUNvZGUuT0tfU0NSMDA0LnRvU3RyaW5nKCk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UudXBkYXRlTmFtZVVzZXIodGhpcy5mb3JtR3JvdXAuZ2V0KCduYW1lJykudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gIH1cblxufVxuIl19