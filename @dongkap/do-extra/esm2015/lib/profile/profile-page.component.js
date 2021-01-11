import { Component, Injector, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { PROFILE_INDEXED_DB, ResponseCode, USER_INFO, UserInfo, Pattern, } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-common';
import { AuthIndexedDBService } from '@dongkap/do-auth';
export class ProfilePageComponent extends BaseFormComponent {
    constructor(injector, userService, profileIndexedDB, authIndexedDB) {
        super(injector, {
            'username': [{
                    value: null,
                    disabled: true,
                }],
            'name': [],
            'idNumber': [],
            'placeOfBirth': [],
            'dateOfBirth': [],
            'gender': [],
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
        this.apiSelectGender = this.api['master']['select-parameter'];
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
        this.onInit('profile', 'get-profile');
        Promise.all([
            this.profileIndexedDB.get('image-b64'),
            this.profileIndexedDB.get('image'),
        ]).then((value) => {
            if (value[0])
                this.image = value[0];
            else
                this.image = value[1];
        });
        this.paramSelectGender = [{
                key: 'parameterGroupCode',
                value: 'GENDER',
            }];
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
            this.formGroup.controls['idNumber'].setValue(success['idNumber']);
            if (success['gender']) {
                this.formGroup.controls['gender'].setValue({
                    label: success['gender'],
                    value: success['genderCode']
                });
            }
            this.formGroup.controls['placeOfBirth'].setValue(success['placeOfBirth']);
            if (success['dateOfBirth'])
                this.formGroup.get('dateOfBirth').setValue(success['dateOfBirth']);
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
            idNumber: this.formGroup.get('idNumber').value,
            placeOfBirth: this.formGroup.get('placeOfBirth').value,
            dateOfBirth: this.formGroup.get('dateOfBirth').value,
            gender: this.valueSelect('gender'),
            genderCode: this.valueSelectNonLabel('gender'),
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
        super.onSubmit(data, 'profile', 'change-profile')
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
ProfilePageComponent.ctorParameters = () => [
    { type: Injector },
    { type: UserInfo, decorators: [{ type: Inject, args: [USER_INFO,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [PROFILE_INDEXED_DB,] }] },
    { type: AuthIndexedDBService }
];
ProfilePageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-profile-page',
                template: "<do-page-outlet [header]=\"'Profile'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n      <form [formGroup]=\"formGroupImage\">\n        <do-image-upload\n          [radius]=\"50\"\n          [skeleton]=\"loadingForm\"\n          [image]=\"image\"\n          [uploadFn]=\"uploadFinished\"\n          (onUpload)=\"uploadImage($event)\"\n          formControlName=\"image\">\n        </do-image-upload>\n      </form>\n    </div>\n    <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'name'\"\n          [label]=\"'Name'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"name\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'email'\"\n          [label]=\"'Email'\"\n          [required]=\"true\"\n          [pattern]=\"patternEmail\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"email\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'username'\"\n          [label]=\"'Username'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"username\">\n        </do-input-text>\n        <div class=\"font-row\">\n          <div class=\"header\">\n            <div class=\"name bold\">{{'label.personal-info' | translate}}</div>\n          </div>\n          <do-input-text\n            [name]=\"'idNumber'\"\n            [label]=\"'ID Number'\"\n            [required]=\"true\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"idNumber\">\n          </do-input-text>\n          <do-select\n            [name]=\"'gender'\"\n            [label]=\"'Gender'\"\n            [required]=\"true\"\n            [api]=\"apiSelectGender\"\n            [queryParam]=\"paramSelectGender\"\n            [searchable]=\"false\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"gender\">\n          </do-select>\n          <do-input-text\n            [name]=\"'placeOfBirth'\"\n            [label]=\"'Place of Birth'\"\n            [required]=\"true\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"placeOfBirth\">\n          </do-input-text>\n          <do-datepicker\n            [name]=\"'dateOfBirth'\"\n            [label]=\"'Date of Birth'\"\n            [required]=\"true\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"dateOfBirth\">\n          </do-datepicker>\n        </div>\n        <div class=\"font-row\">\n          <div class=\"header\">\n            <div class=\"name bold\">{{'label.contact-person' | translate}}</div>\n          </div>\n          <do-input-text\n            [name]=\"'phoneNumber'\"\n            [label]=\"'Telephone'\"\n            [required]=\"true\"\n            [pattern]=\"patternPhoneNumber\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"phoneNumber\">\n          </do-input-text>\n          <do-textarea\n            [name]=\"'address'\"\n            [label]=\"'Address'\"\n            [required]=\"true\"\n            [minLength]=\"minLength\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"address\">\n          </do-textarea>\n          <do-select\n            [name]=\"'country'\"\n            [label]=\"'Country'\"\n            [api]=\"apiSelectCountry\"\n            [skeleton]=\"loadingForm\"\n            (onSelect)=\"onSelectCountry($event)\"\n            (onClear)=\"onClearCountry()\"\n            formControlName=\"country\">\n          </do-select>\n          <do-select\n            [name]=\"'province'\"\n            [label]=\"'Province'\"\n            [api]=\"apiSelectProvince\"\n            [queryParam]=\"paramSelectProvince\"\n            [skeleton]=\"loadingForm\"\n            (onSelect)=\"onSelectProvince($event)\"\n            (onClear)=\"onClearProvince()\"\n            formControlName=\"province\">\n          </do-select>\n          <do-select\n            [name]=\"'city'\"\n            [label]=\"'City'\"\n            [api]=\"apiSelectCity\"\n            [queryParam]=\"paramSelectCity\"\n            [skeleton]=\"loadingForm\"\n            (onSelect)=\"onSelectCity($event)\"\n            (onClear)=\"onClearCity()\"\n            formControlName=\"city\">\n          </do-select>\n          <do-select\n            [name]=\"'district'\"\n            [label]=\"'District'\"\n            [api]=\"apiSelectDistrict\"\n            [queryParam]=\"paramSelectDistrict\"\n            [skeleton]=\"loadingForm\"\n            (onSelect)=\"onSelectDistrict($event)\"\n            (onClear)=\"onClearDistrict()\"\n            formControlName=\"district\">\n          </do-select>\n          <do-select\n            [name]=\"'subDistrict'\"\n            [label]=\"'Sub District'\"\n            [api]=\"apiSelectSubDistrict\"\n            [queryParam]=\"paramSelectSubDistrict\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"subDistrict\">\n          </do-select>\n        </div>\n        <do-button-submit\n          (onSubmit)=\"onSubmit()\"\n          [name]=\"'Update Profile'\"\n          [disabledButton]=\"disabled\"\n          [formGroupButton]=\"formGroup\"\n          [skeleton]=\"loadingForm\">\n        </do-button-submit>\n      </form>\n    </div>\n  </div>\n</do-page-outlet>\n",
                styles: [".nb-theme-default :host .font-row{margin-top:2rem}.nb-theme-default :host .font-row:first-child{margin-bottom:2rem}.nb-theme-default :host .font-row .header{text-align:right;color:#8f9bb3;font-family:Open Sans,sans-serif;font-size:.9rem;font-weight:100;line-height:1rem;align-items:baseline}.nb-theme-default :host .font-row p{margin:0}.nb-theme-default :host .header{display:flex;flex-wrap:wrap;align-items:center;padding-bottom:1rem;margin-bottom:1rem;border-bottom:1px solid #edf1f7}.nb-theme-default :host .header:last-child{border-bottom:none}.nb-theme-default :host .header div:first-child{flex:2;-ms-flex:2 1 auto;line-height:1;align-items:flex-end}.nb-theme-default :host .header div:first-child h1,.nb-theme-default :host .header div:first-child h2,.nb-theme-default :host .header div:first-child h3,.nb-theme-default :host .header div:first-child h4,.nb-theme-default :host .header div:first-child h5,.nb-theme-default :host .header div:first-child h6{margin-bottom:0}.nb-theme-default :host .header .variants{flex:1;-ms-flex:1 1 auto;display:flex;justify-content:space-between;align-items:flex-end}.nb-theme-default :host .header .variants span{padding-right:1rem;padding-left:1rem}.nb-theme-default :host .header .detail{flex:1;display:flex}.nb-theme-dark :host .font-row{margin-top:2rem}.nb-theme-dark :host .font-row:first-child{margin-bottom:2rem}.nb-theme-dark :host .font-row .header{text-align:right;color:#8f9bb3;font-family:Open Sans,sans-serif;font-size:.9rem;font-weight:100;line-height:1rem;align-items:baseline}.nb-theme-dark :host .font-row p{margin:0}.nb-theme-dark :host .header{display:flex;flex-wrap:wrap;align-items:center;padding-bottom:1rem;margin-bottom:1rem;border-bottom:1px solid #151a30}.nb-theme-dark :host .header:last-child{border-bottom:none}.nb-theme-dark :host .header div:first-child{flex:2;-ms-flex:2 1 auto;line-height:1;align-items:flex-end}.nb-theme-dark :host .header div:first-child h1,.nb-theme-dark :host .header div:first-child h2,.nb-theme-dark :host .header div:first-child h3,.nb-theme-dark :host .header div:first-child h4,.nb-theme-dark :host .header div:first-child h5,.nb-theme-dark :host .header div:first-child h6{margin-bottom:0}.nb-theme-dark :host .header .variants{flex:1;-ms-flex:1 1 auto;display:flex;justify-content:space-between;align-items:flex-end}.nb-theme-dark :host .header .variants span{padding-right:1rem;padding-left:1rem}.nb-theme-dark :host .header .detail{flex:1;display:flex}.nb-theme-cosmic :host .font-row{margin-top:2rem}.nb-theme-cosmic :host .font-row:first-child{margin-bottom:2rem}.nb-theme-cosmic :host .font-row .header{text-align:right;color:#8f9bb3;font-family:Open Sans,sans-serif;font-size:.9rem;font-weight:100;line-height:1rem;align-items:baseline}.nb-theme-cosmic :host .font-row p{margin:0}.nb-theme-cosmic :host .header{display:flex;flex-wrap:wrap;align-items:center;padding-bottom:1rem;margin-bottom:1rem;border-bottom:1px solid #1b1b38}.nb-theme-cosmic :host .header:last-child{border-bottom:none}.nb-theme-cosmic :host .header div:first-child{flex:2;-ms-flex:2 1 auto;line-height:1;align-items:flex-end}.nb-theme-cosmic :host .header div:first-child h1,.nb-theme-cosmic :host .header div:first-child h2,.nb-theme-cosmic :host .header div:first-child h3,.nb-theme-cosmic :host .header div:first-child h4,.nb-theme-cosmic :host .header div:first-child h5,.nb-theme-cosmic :host .header div:first-child h6{margin-bottom:0}.nb-theme-cosmic :host .header .variants{flex:1;-ms-flex:1 1 auto;display:flex;justify-content:space-between;align-items:flex-end}.nb-theme-cosmic :host .header .variants span{padding-right:1rem;padding-left:1rem}.nb-theme-cosmic :host .header .detail{flex:1;display:flex}.nb-theme-corporate :host .font-row{margin-top:2rem}.nb-theme-corporate :host .font-row:first-child{margin-bottom:2rem}.nb-theme-corporate :host .font-row .header{text-align:right;color:#8f9bb3;font-family:Open Sans,sans-serif;font-size:.9rem;font-weight:100;line-height:1rem;align-items:baseline}.nb-theme-corporate :host .font-row p{margin:0}.nb-theme-corporate :host .header{display:flex;flex-wrap:wrap;align-items:center;padding-bottom:1rem;margin-bottom:1rem;border-bottom:1px solid #edf1f7}.nb-theme-corporate :host .header:last-child{border-bottom:none}.nb-theme-corporate :host .header div:first-child{flex:2;-ms-flex:2 1 auto;line-height:1;align-items:flex-end}.nb-theme-corporate :host .header div:first-child h1,.nb-theme-corporate :host .header div:first-child h2,.nb-theme-corporate :host .header div:first-child h3,.nb-theme-corporate :host .header div:first-child h4,.nb-theme-corporate :host .header div:first-child h5,.nb-theme-corporate :host .header div:first-child h6{margin-bottom:0}.nb-theme-corporate :host .header .variants{flex:1;-ms-flex:1 1 auto;display:flex;justify-content:space-between;align-items:flex-end}.nb-theme-corporate :host .header .variants span{padding-right:1rem;padding-left:1rem}.nb-theme-corporate :host .header .detail{flex:1;display:flex}"]
            },] }
];
ProfilePageComponent.ctorParameters = () => [
    { type: Injector },
    { type: UserInfo, decorators: [{ type: Inject, args: [USER_INFO,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [PROFILE_INDEXED_DB,] }] },
    { type: AuthIndexedDBService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWV4dHJhLyIsInNvdXJjZXMiOlsibGliL3Byb2ZpbGUvcHJvZmlsZS1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBR3ZELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLFlBQVksRUFDWixTQUFTLEVBQ1QsUUFBUSxFQUNSLE9BQU8sR0FDUixNQUFNLGtCQUFrQixDQUFDO0FBSTFCLE9BQU8sRUFBRSxpQkFBaUIsRUFBb0IsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU94RCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsaUJBQXNCO0lBNEI5RCxZQUNTLFFBQWtCLEVBQ0UsV0FBcUIsRUFDWixnQkFBeUMsRUFDckUsYUFBbUM7UUFDM0MsS0FBSyxDQUFDLFFBQVEsRUFDWjtZQUNFLFVBQVUsRUFBRSxDQUFDO29CQUNYLEtBQUssRUFBRSxJQUFJO29CQUNYLFFBQVEsRUFBRSxJQUFJO2lCQUNmLENBQUM7WUFDRixNQUFNLEVBQUUsRUFBRTtZQUNWLFVBQVUsRUFBRSxFQUFFO1lBQ2QsY0FBYyxFQUFFLEVBQUU7WUFDbEIsYUFBYSxFQUFFLEVBQUU7WUFDakIsUUFBUSxFQUFFLEVBQUU7WUFDWixPQUFPLEVBQUUsRUFBRTtZQUNYLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxTQUFT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LFNBQVMsQ0FBQyxRQUFRLEVBQUU7d0JBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNsRSxNQUFNO29CQUNSO3dCQUNFLE1BQU07aUJBQ1Q7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ2IsQ0FBQzs7O1lBbFVrQixRQUFRO1lBQ2UsUUFBUSx1QkFBL0MsTUFBTSxTQUFDLFNBQVM7NENBQ2hCLE1BQU0sU0FBQyxrQkFBa0I7WUFDSCxvQkFBb0I7OztZQXJDOUMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBRTNCLG94S0FBNEM7O2FBQzdDOzs7WUF2Qm1CLFFBQVE7WUFVMUIsUUFBUSx1QkE0Q0wsTUFBTSxTQUFDLFNBQVM7NENBQ2hCLE1BQU0sU0FBQyxrQkFBa0I7WUF0Q3JCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIFBST0ZJTEVfSU5ERVhFRF9EQixcbiAgUmVzcG9uc2VDb2RlLFxuICBVU0VSX0lORk8sXG4gIFVzZXJJbmZvLFxuICBQYXR0ZXJuLFxufSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEh0dHBCYXNlTW9kZWwgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgSW5kZXhlZERCRmFjdG9yeVNlcnZpY2UgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEJhc2VGb3JtQ29tcG9uZW50LCBTZWxlY3RQYXJhbU1vZGVsIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29tbW9uJztcbmltcG9ydCB7IEF1dGhJbmRleGVkREJTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tYXV0aCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLXByb2ZpbGUtcGFnZScsXG4gIHN0eWxlVXJsczogWycuL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZmlsZS1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZmlsZVBhZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlRm9ybUNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgaW1hZ2U6IHN0cmluZztcbiAgcHVibGljIGZvcm1Hcm91cEltYWdlOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyB1cGxvYWRGaW5pc2hlZDogYm9vbGVhbjtcbiAgcHVibGljIHBhdHRlcm5FbWFpbDogc3RyaW5nID0gUGF0dGVybi5FTUFJTDtcbiAgcHVibGljIHBhdHRlcm5QaG9uZU51bWJlcjogc3RyaW5nID0gUGF0dGVybi5QSE9ORV9OVU1CRVI7XG4gIHB1YmxpYyBtaW5MZW5ndGg6IG51bWJlciA9IDU7XG4gIHB1YmxpYyBkaXNhYmxlZFVwbG9hZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgcHJvdmlkZXI6IHN0cmluZyA9ICdsb2NhbCc7XG5cbiAgcHVibGljIGFwaVNlbGVjdEdlbmRlcjogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIHBhcmFtU2VsZWN0R2VuZGVyOiBTZWxlY3RQYXJhbU1vZGVsW107XG5cbiAgcHVibGljIGFwaVNlbGVjdENvdW50cnk6IEh0dHBCYXNlTW9kZWw7XG5cbiAgcHVibGljIGFwaVNlbGVjdFByb3ZpbmNlOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgcGFyYW1TZWxlY3RQcm92aW5jZTogU2VsZWN0UGFyYW1Nb2RlbFtdO1xuXG4gIHB1YmxpYyBhcGlTZWxlY3RDaXR5OiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgcGFyYW1TZWxlY3RDaXR5OiBTZWxlY3RQYXJhbU1vZGVsW107XG5cbiAgcHVibGljIGFwaVNlbGVjdERpc3RyaWN0OiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgcGFyYW1TZWxlY3REaXN0cmljdDogU2VsZWN0UGFyYW1Nb2RlbFtdO1xuXG4gIHB1YmxpYyBhcGlTZWxlY3RTdWJEaXN0cmljdDogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIHBhcmFtU2VsZWN0U3ViRGlzdHJpY3Q6IFNlbGVjdFBhcmFtTW9kZWxbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIEBJbmplY3QoVVNFUl9JTkZPKSBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VySW5mbyxcbiAgICBASW5qZWN0KFBST0ZJTEVfSU5ERVhFRF9EQikgcHJpdmF0ZSBwcm9maWxlSW5kZXhlZERCOiBJbmRleGVkREJGYWN0b3J5U2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhJbmRleGVkREI6IEF1dGhJbmRleGVkREJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsXG4gICAgICB7XG4gICAgICAgICd1c2VybmFtZSc6IFt7XG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgIH1dLFxuICAgICAgICAnbmFtZSc6IFtdLFxuICAgICAgICAnaWROdW1iZXInOiBbXSxcbiAgICAgICAgJ3BsYWNlT2ZCaXJ0aCc6IFtdLFxuICAgICAgICAnZGF0ZU9mQmlydGgnOiBbXSxcbiAgICAgICAgJ2dlbmRlcic6IFtdLFxuICAgICAgICAnZW1haWwnOiBbXSxcbiAgICAgICAgJ3Bob25lTnVtYmVyJzogW10sXG4gICAgICAgICdhZGRyZXNzJzogW251bGwsIFtWYWxpZGF0b3JzLm1pbkxlbmd0aCg1KV1dLFxuICAgICAgICAnY291bnRyeSc6IFtdLFxuICAgICAgICAncHJvdmluY2UnOiBbXSxcbiAgICAgICAgJ2NpdHknOiBbXSxcbiAgICAgICAgJ2Rpc3RyaWN0JzogW10sXG4gICAgICAgICdzdWJEaXN0cmljdCc6IFtdLFxuICAgICAgfSk7XG4gICAgdGhpcy5mb3JtR3JvdXBJbWFnZSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgJ2ltYWdlJzogW10sXG4gICAgfSk7XG4gICAgdGhpcy5hcGlTZWxlY3RHZW5kZXIgPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ3NlbGVjdC1wYXJhbWV0ZXInXTtcbiAgICB0aGlzLmFwaVNlbGVjdENvdW50cnkgPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ3NlbGVjdC1jb3VudHJ5J107XG4gICAgdGhpcy5hcGlTZWxlY3RQcm92aW5jZSA9IHRoaXMuYXBpWydtYXN0ZXInXVsnc2VsZWN0LXByb3ZpbmNlJ107XG4gICAgdGhpcy5hcGlTZWxlY3RDaXR5ID0gdGhpcy5hcGlbJ21hc3RlciddWydzZWxlY3QtY2l0eSddO1xuICAgIHRoaXMuYXBpU2VsZWN0RGlzdHJpY3QgPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ3NlbGVjdC1kaXN0cmljdCddO1xuICAgIHRoaXMuYXBpU2VsZWN0U3ViRGlzdHJpY3QgPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ3NlbGVjdC1zdWJkaXN0cmljdCddO1xuICAgIHRoaXMuYXV0aEluZGV4ZWREQi5nZXRFbmMoJ3Byb3ZpZGVyJykudGhlbigodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHZhbHVlICE9PSAnbG9jYWwnKSB7XG4gICAgICAgIHRoaXMucHJvdmlkZXIgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ2VtYWlsJ10uZGlzYWJsZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vbkluaXQoJ3Byb2ZpbGUnLCAnZ2V0LXByb2ZpbGUnKTtcbiAgICBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnByb2ZpbGVJbmRleGVkREIuZ2V0KCdpbWFnZS1iNjQnKSxcbiAgICAgIHRoaXMucHJvZmlsZUluZGV4ZWREQi5nZXQoJ2ltYWdlJyksXG4gICAgXSkudGhlbigodmFsdWU6IGFueVtdKSA9PiB7XG4gICAgICBpZiAodmFsdWVbMF0pXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB2YWx1ZVswXTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5pbWFnZSA9IHZhbHVlWzFdO1xuICAgIH0pO1xuICAgIHRoaXMucGFyYW1TZWxlY3RHZW5kZXIgPSBbe1xuICAgICAga2V5OiAncGFyYW1ldGVyR3JvdXBDb2RlJyxcbiAgICAgIHZhbHVlOiAnR0VOREVSJyxcbiAgICB9XTtcbiAgICB0aGlzLnBhcmFtU2VsZWN0UHJvdmluY2UgPSBbe1xuICAgICAga2V5OiAnY291bnRyeScsXG4gICAgICB2YWx1ZTogJ3VuZGVmaW5lZCcsXG4gICAgfV07XG4gICAgdGhpcy5wYXJhbVNlbGVjdENpdHkgPSBbe1xuICAgICAga2V5OiAncHJvdmluY2UnLFxuICAgICAgdmFsdWU6ICd1bmRlZmluZWQnLFxuICAgIH1dO1xuICAgIHRoaXMucGFyYW1TZWxlY3REaXN0cmljdCA9IFt7XG4gICAgICBrZXk6ICdjaXR5JyxcbiAgICAgIHZhbHVlOiAndW5kZWZpbmVkJyxcbiAgICB9XTtcbiAgICB0aGlzLnBhcmFtU2VsZWN0U3ViRGlzdHJpY3QgPSBbe1xuICAgICAga2V5OiAnZGlzdHJpY3QnLFxuICAgICAgdmFsdWU6ICd1bmRlZmluZWQnLFxuICAgIH1dO1xuICB9XG5cbiAgb25Jbml0KHNlcnZpY2VOYW1lOiBzdHJpbmcsIGFwaU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZ0Zvcm0gPSB0cnVlO1xuICAgIHRoaXMuZXhlYyhzZXJ2aWNlTmFtZSwgYXBpTmFtZSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChzdWNjZXNzOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ25hbWUnXS5zZXRWYWx1ZShzdWNjZXNzWyduYW1lJ10pO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWyd1c2VybmFtZSddLnNldFZhbHVlKHN1Y2Nlc3NbJ3VzZXJuYW1lJ10pO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydpZE51bWJlciddLnNldFZhbHVlKHN1Y2Nlc3NbJ2lkTnVtYmVyJ10pO1xuICAgICAgICAgIGlmIChzdWNjZXNzWydnZW5kZXInXSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ2dlbmRlciddLnNldFZhbHVlKHtcbiAgICAgICAgICAgICAgbGFiZWw6IHN1Y2Nlc3NbJ2dlbmRlciddLFxuICAgICAgICAgICAgICB2YWx1ZTogc3VjY2Vzc1snZ2VuZGVyQ29kZSddXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3BsYWNlT2ZCaXJ0aCddLnNldFZhbHVlKHN1Y2Nlc3NbJ3BsYWNlT2ZCaXJ0aCddKTtcbiAgICAgICAgICBpZiAoc3VjY2Vzc1snZGF0ZU9mQmlydGgnXSkgdGhpcy5mb3JtR3JvdXAuZ2V0KCdkYXRlT2ZCaXJ0aCcpLnNldFZhbHVlKHN1Y2Nlc3NbJ2RhdGVPZkJpcnRoJ10pO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydlbWFpbCddLnNldFZhbHVlKHN1Y2Nlc3NbJ2VtYWlsJ10pO1xuICAgICAgICAgIGlmIChzdWNjZXNzWydhZGRyZXNzJ10pIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydhZGRyZXNzJ10uc2V0VmFsdWUoc3VjY2Vzc1snYWRkcmVzcyddKTtcbiAgICAgICAgICBpZiAoc3VjY2Vzc1snY291bnRyeSddKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snY291bnRyeSddLnNldFZhbHVlKHtcbiAgICAgICAgICAgICAgbGFiZWw6IHN1Y2Nlc3NbJ2NvdW50cnknXSxcbiAgICAgICAgICAgICAgdmFsdWU6IHN1Y2Nlc3NbJ2NvdW50cnlDb2RlJ11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5wYXJhbVNlbGVjdFByb3ZpbmNlID0gW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAnY291bnRyeScsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN1Y2Nlc3NbJ2NvdW50cnlDb2RlJ10sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3VjY2Vzc1sncHJvdmluY2UnXSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3Byb3ZpbmNlJ10uc2V0VmFsdWUoe1xuICAgICAgICAgICAgICBsYWJlbDogc3VjY2Vzc1sncHJvdmluY2UnXSxcbiAgICAgICAgICAgICAgdmFsdWU6IHN1Y2Nlc3NbJ3Byb3ZpbmNlQ29kZSddXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucGFyYW1TZWxlY3RDaXR5ID0gW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAncHJvdmluY2UnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBzdWNjZXNzWydwcm92aW5jZUNvZGUnXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdWNjZXNzWydjaXR5J10pIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydjaXR5J10uc2V0VmFsdWUoe1xuICAgICAgICAgICAgICBsYWJlbDogc3VjY2Vzc1snY2l0eSddLFxuICAgICAgICAgICAgICB2YWx1ZTogc3VjY2Vzc1snY2l0eUNvZGUnXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnBhcmFtU2VsZWN0RGlzdHJpY3QgPSBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdjaXR5JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3VjY2Vzc1snY2l0eUNvZGUnXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdWNjZXNzWydkaXN0cmljdCddKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snZGlzdHJpY3QnXS5zZXRWYWx1ZSh7XG4gICAgICAgICAgICAgIGxhYmVsOiBzdWNjZXNzWydkaXN0cmljdCddLFxuICAgICAgICAgICAgICB2YWx1ZTogc3VjY2Vzc1snZGlzdHJpY3RDb2RlJ11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5wYXJhbVNlbGVjdFN1YkRpc3RyaWN0ID0gW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAnZGlzdHJpY3QnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBzdWNjZXNzWydkaXN0cmljdENvZGUnXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdWNjZXNzWydzdWJEaXN0cmljdCddKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snc3ViRGlzdHJpY3QnXS5zZXRWYWx1ZSh7XG4gICAgICAgICAgICAgIGxhYmVsOiBzdWNjZXNzWydzdWJEaXN0cmljdCddLFxuICAgICAgICAgICAgICB2YWx1ZTogc3VjY2Vzc1snc3ViRGlzdHJpY3RDb2RlJ11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3VjY2Vzc1sncGhvbmVOdW1iZXInXSkgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3Bob25lTnVtYmVyJ10uc2V0VmFsdWUoc3VjY2Vzc1sncGhvbmVOdW1iZXInXSk7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3NbJ21vYmlsZU51bWJlciddKSB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snbW9iaWxlTnVtYmVyJ10uc2V0VmFsdWUoc3VjY2Vzc1snbW9iaWxlTnVtYmVyJ10pO1xuICAgICAgICAgIHRoaXMuYXV0aEluZGV4ZWREQi5nZXRFbmMoJ3Byb3ZpZGVyJykudGhlbigodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSAnbG9jYWwnKSB7XG4gICAgICAgICAgICAgIHRoaXMucHJvdmlkZXIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ2VtYWlsJ10uZGlzYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLm1hcmtBc1ByaXN0aW5lKCk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gdHJ1ZTtcbiAgICAgICAgICBjb25zdCBlcnI6IEFwaUJhc2VSZXNwb25zZSA9IGVycm9yWydlcnJvciddO1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVyci5yZXNwU3RhdHVzTWVzc2FnZVtlcnIucmVzcFN0YXR1c0NvZGVdLCB0cnVlLCBudWxsLCAnZGFuZ2VyJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVyciBhcyBhbnksIHRydWUsIG51bGwsICdkYW5nZXInKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICApO1xuICB9XG5cbiAgb25TZWxlY3RDb3VudHJ5KHNlbGVjdDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wYXJhbVNlbGVjdFByb3ZpbmNlID0gW1xuICAgICAge1xuICAgICAgICBrZXk6ICdjb3VudHJ5JyxcbiAgICAgICAgdmFsdWU6IHNlbGVjdCA/IHNlbGVjdC52YWx1ZSA6ICd1bmRlZmluZWQnLFxuICAgICAgfSxcbiAgICBdO1xuICAgIHRoaXMub25DbGVhclByb3ZpbmNlKCk7XG4gIH1cbiAgb25TZWxlY3RQcm92aW5jZShzZWxlY3Q6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1TZWxlY3RDaXR5ID0gW1xuICAgICAge1xuICAgICAgICBrZXk6ICdwcm92aW5jZScsXG4gICAgICAgIHZhbHVlOiBzZWxlY3QgPyBzZWxlY3QudmFsdWUgOiAndW5kZWZpbmVkJyxcbiAgICAgIH0sXG4gICAgXTtcbiAgICB0aGlzLm9uQ2xlYXJQcm92aW5jZSgpO1xuICB9XG4gIG9uU2VsZWN0Q2l0eShzZWxlY3Q6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1TZWxlY3REaXN0cmljdCA9IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAnY2l0eScsXG4gICAgICAgIHZhbHVlOiBzZWxlY3QgPyBzZWxlY3QudmFsdWUgOiAndW5kZWZpbmVkJyxcbiAgICAgIH0sXG4gICAgXTtcbiAgICB0aGlzLm9uQ2xlYXJDaXR5KCk7XG4gIH1cbiAgb25TZWxlY3REaXN0cmljdChzZWxlY3Q6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1TZWxlY3RTdWJEaXN0cmljdCA9IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAnZGlzdHJpY3QnLFxuICAgICAgICB2YWx1ZTogc2VsZWN0ID8gc2VsZWN0LnZhbHVlIDogJ3VuZGVmaW5lZCcsXG4gICAgICB9LFxuICAgIF07XG4gICAgdGhpcy5vbkNsZWFyRGlzdHJpY3QoKTtcbiAgfVxuXG4gIG9uQ2xlYXJDb3VudHJ5KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xuICAgICAgJ3Byb3ZpbmNlJzogbnVsbCxcbiAgICAgICdjaXR5JzogbnVsbCxcbiAgICAgICdkaXN0cmljdCc6IG51bGwsXG4gICAgICAnc3ViRGlzdHJpY3QnOiBudWxsLFxuICAgIH0pO1xuICB9XG4gIG9uQ2xlYXJQcm92aW5jZSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHtcbiAgICAgICdjaXR5JzogbnVsbCxcbiAgICAgICdkaXN0cmljdCc6IG51bGwsXG4gICAgICAnc3ViRGlzdHJpY3QnOiBudWxsLFxuICAgIH0pO1xuICB9XG4gIG9uQ2xlYXJDaXR5KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xuICAgICAgJ2Rpc3RyaWN0JzogbnVsbCxcbiAgICAgICdzdWJEaXN0cmljdCc6IG51bGwsXG4gICAgfSk7XG4gIH1cbiAgb25DbGVhckRpc3RyaWN0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xuICAgICAgJ3N1YkRpc3RyaWN0JzogbnVsbCxcbiAgICB9KTtcbiAgfVxuXG4gIHVwbG9hZEltYWdlKGZpbGU6IGFueSkge1xuICAgIGNvbnN0IGRhdGE6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZGF0YS5hcHBlbmQoJ3Bob3RvJywgZmlsZSk7XG4gICAgdGhpcy5mb3JtR3JvdXBJbWFnZS5nZXQoJ2ltYWdlJykuZGlzYWJsZSgpO1xuICAgIHRoaXMuZXhlYygnZmlsZScsICdwaG90by1wcm9maWxlJywgZGF0YSkuc3Vic2NyaWJlKFxuICAgICAgICAoc3VjY2VzczogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy51c2VyU2VydmljZS51cGRhdGVQaG90b1VzZXIoZmlsZSwgc3VjY2Vzcy5yZXNwU3RhdHVzTWVzc2FnZVsnY2hlY2tzdW0nXSk7XG4gICAgICAgICAgdGhpcy51cGxvYWRGaW5pc2hlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXBJbWFnZS5tYXJrQXNQcmlzdGluZSgpO1xuICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKHN1Y2Nlc3MucmVzcFN0YXR1c01lc3NhZ2Vbc3VjY2Vzcy5yZXNwU3RhdHVzQ29kZV0sIHRydWUsIG51bGwsICdzdWNjZXNzJyk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcjogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXBJbWFnZS5nZXQoJ2ltYWdlJykuZW5hYmxlKCk7XG4gICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oZXJyb3IucmVzcFN0YXR1c01lc3NhZ2VbZXJyb3IucmVzcFN0YXR1c0NvZGVdLCB0cnVlLCBudWxsLCAnZGFuZ2VyJyk7XG4gICAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIHZhbHVlU2VsZWN0KHByb3A6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZS5sYWJlbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtR3JvdXAuZ2V0KHByb3ApLnZhbHVlLmxhYmVsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgdmFsdWVTZWxlY3ROb25MYWJlbChwcm9wOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5nZXQocHJvcCkudmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmZvcm1Hcm91cC5nZXQocHJvcCkudmFsdWUudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZS52YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICBuYW1lOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ25hbWUnKS52YWx1ZSxcbiAgICAgIGlkTnVtYmVyOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ2lkTnVtYmVyJykudmFsdWUsXG4gICAgICBwbGFjZU9mQmlydGg6IHRoaXMuZm9ybUdyb3VwLmdldCgncGxhY2VPZkJpcnRoJykudmFsdWUsXG4gICAgICBkYXRlT2ZCaXJ0aDogdGhpcy5mb3JtR3JvdXAuZ2V0KCdkYXRlT2ZCaXJ0aCcpLnZhbHVlLFxuICAgICAgZ2VuZGVyOiB0aGlzLnZhbHVlU2VsZWN0KCdnZW5kZXInKSxcbiAgICAgIGdlbmRlckNvZGU6IHRoaXMudmFsdWVTZWxlY3ROb25MYWJlbCgnZ2VuZGVyJyksXG4gICAgICBwaG9uZU51bWJlcjogdGhpcy5mb3JtR3JvdXAuZ2V0KCdwaG9uZU51bWJlcicpLnZhbHVlLFxuICAgICAgYWRkcmVzczogdGhpcy5mb3JtR3JvdXAuZ2V0KCdhZGRyZXNzJykudmFsdWUsXG4gICAgICBjb3VudHJ5OiB0aGlzLnZhbHVlU2VsZWN0KCdjb3VudHJ5JyksXG4gICAgICBjb3VudHJ5Q29kZTogdGhpcy52YWx1ZVNlbGVjdE5vbkxhYmVsKCdjb3VudHJ5JyksXG4gICAgICBwcm92aW5jZTogdGhpcy52YWx1ZVNlbGVjdCgncHJvdmluY2UnKSxcbiAgICAgIHByb3ZpbmNlQ29kZTogdGhpcy52YWx1ZVNlbGVjdE5vbkxhYmVsKCdwcm92aW5jZScpLFxuICAgICAgY2l0eTogdGhpcy52YWx1ZVNlbGVjdCgnY2l0eScpLFxuICAgICAgY2l0eUNvZGU6IHRoaXMudmFsdWVTZWxlY3ROb25MYWJlbCgnY2l0eScpLFxuICAgICAgZGlzdHJpY3Q6IHRoaXMudmFsdWVTZWxlY3QoJ2Rpc3RyaWN0JyksXG4gICAgICBkaXN0cmljdENvZGU6IHRoaXMudmFsdWVTZWxlY3ROb25MYWJlbCgnZGlzdHJpY3QnKSxcbiAgICAgIHN1YkRpc3RyaWN0OiB0aGlzLnZhbHVlU2VsZWN0KCdzdWJEaXN0cmljdCcpLFxuICAgICAgc3ViRGlzdHJpY3RDb2RlOiB0aGlzLnZhbHVlU2VsZWN0Tm9uTGFiZWwoJ3N1YkRpc3RyaWN0JyksXG4gICAgfTtcbiAgICBpZiAodGhpcy5wcm92aWRlciA9PT0gJ2xvY2FsJykge1xuICAgICAgZGF0YVsnZW1haWwnXSA9IHRoaXMuZm9ybUdyb3VwLmdldCgnZW1haWwnKS52YWx1ZTtcbiAgICB9XG4gICAgKHN1cGVyLm9uU3VibWl0KGRhdGEsICdwcm9maWxlJywgJ2NoYW5nZS1wcm9maWxlJykgYXMgT2JzZXJ2YWJsZTxBcGlCYXNlUmVzcG9uc2U+KVxuICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc3BvbnNlLnJlc3BTdGF0dXNDb2RlKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIFJlc3BvbnNlQ29kZS5FUlJfU0NSMDAwOC50b1N0cmluZygpOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snZW1haWwnXS5zZXRFcnJvcnMoe1xuICAgICAgICAgICAgICAgICAgICAgICdlbWFpbCc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgUmVzcG9uc2VDb2RlLkVSUl9TQ1IwMDA3QS50b1N0cmluZygpOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1sncGhvbmVOdW1iZXInXS5zZXRFcnJvcnMoe1xuICAgICAgICAgICAgICAgICAgICAgICdlcnJvci5wYXR0ZXJuLnBob25lTnVtYmVyJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSBSZXNwb25zZUNvZGUuT0tfU0NSMDA0LnRvU3RyaW5nKCk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UudXBkYXRlTmFtZVVzZXIodGhpcy5mb3JtR3JvdXAuZ2V0KCduYW1lJykudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gIH1cblxufVxuIl19