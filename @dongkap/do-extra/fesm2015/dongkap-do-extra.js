import { Injector, Component, Inject, NgModule } from '@angular/core';
import { Validators, FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbThemeService, NbDialogRef, NbDialogService, NbCardModule, NbAlertModule, NbIconModule, NbDialogModule } from '@nebular/theme';
import { DoThemeModule } from '@dongkap/do-theme';
import { BaseFormComponent, BaseComponent, DoInputModule, DoCheckBoxModule, DoButtonModule, DoBaseModule, DoEditorModule, DoSelectModule, DoDatePickerModule, DoImageModule } from '@dongkap/do-common';
import { takeUntil } from 'rxjs/operators';
import { Pattern, EncryptionService, OAUTH_INFO, ResponseCode, UserInfo, USER_INFO, PROFILE_INDEXED_DB, SETTINGS_INDEXED_DB, AUTH_INDEXED_DB } from '@dongkap/do-core';
import { RouterModule } from '@angular/router';
import { AuthIndexedDBService, AuthTokenService, AuthGuardChildService } from '@dongkap/do-auth';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

class ChangePasswordPageComponent extends BaseFormComponent {
    constructor(injector) {
        super(injector, {
            'password': [],
            'newPassword': [],
            'confirmPassword': [],
        });
        this.injector = injector;
        this.passwordPattern = Pattern.PASSWORD_MEDIUM;
        this.enc = injector.get(EncryptionService);
        this.oauthResource = injector.get(OAUTH_INFO);
    }
    onSubmit() {
        const data = {
            password: this.enc.encryptAES(this.oauthResource['aes_key'], this.formGroup.get('password').value),
            newPassword: this.enc.encryptAES(this.oauthResource['aes_key'], this.formGroup.get('newPassword').value),
            confirmPassword: this.enc.encryptAES(this.oauthResource['aes_key'], this.formGroup.get('confirmPassword').value),
        };
        super.onSubmit(data, 'security', 'change-password')
            .pipe(takeUntil(this.destroy$))
            .subscribe((response) => {
            if (response) {
                switch (response.respStatusCode) {
                    case ResponseCode.ERR_SCR0002.toString():
                        this.formGroup.controls['password'].setErrors({
                            'incorrect': true,
                        });
                        break;
                    case ResponseCode.ERR_SCR0006.toString():
                        this.formGroup.controls['newPassword'].setErrors({
                            'equal': true,
                        });
                        break;
                    default:
                        break;
                }
            }
        });
    }
}
ChangePasswordPageComponent.ctorParameters = () => [
    { type: Injector }
];
ChangePasswordPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-change-password-page',
                template: "<do-page-outlet [header]=\"'Change Password'\">\n  <form [formGroup]=\"formGroup\" pagecontent>\n    <do-input-text\n      [name]=\"'password'\"\n      [label]=\"'Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      formControlName=\"password\">\n    </do-input-text>\n    <do-input-text\n      [name]=\"'newPassword'\"\n      [label]=\"'New Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      [pattern]=\"passwordPattern\"\n      xaValidateNotEqual=\"password\"\n      formControlName=\"newPassword\">\n    </do-input-text>\n    <do-input-text\n      [name]=\"'confirmPassword'\"\n      [label]=\"'Confirm Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      xaValidateEqual=\"newPassword\"\n      formControlName=\"confirmPassword\">\n    </do-input-text>\n    <do-button-submit\n      [disabledButton]=\"disabled\"\n      (onSubmit)=\"onSubmit()\"\n      [name]=\"'Update Password'\"\n      [formGroupButton]=\"formGroup\">\n    </do-button-submit>\n  </form>\n</do-page-outlet>\n",
                styles: [""]
            },] }
];
ChangePasswordPageComponent.ctorParameters = () => [
    { type: Injector }
];

class ExtraComponent {
}
ExtraComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-extra',
                template: `
    <router-outlet></router-outlet>
  `
            },] }
];

class ProfilePageComponent extends BaseFormComponent {
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

class SettingsPageComponent extends BaseFormComponent {
    constructor(injector, translate, themeService, settingsIndexedDB, authIndexedDB) {
        super(injector, {
            'locale': [],
            'theme': [],
        });
        this.injector = injector;
        this.translate = translate;
        this.themeService = themeService;
        this.settingsIndexedDB = settingsIndexedDB;
        this.authIndexedDB = authIndexedDB;
        this.dataTheme = [
            {
                selected: false,
            },
        ];
        this.apiSelectLocale = this.api['master']['select-all-locale'];
    }
    ngOnInit() {
        this.onInit('security', 'get-settings');
    }
    onInit(serviceName, apiName) {
        this.loadingForm = true;
        this.exec(serviceName, apiName)
            .subscribe((success) => {
            this.loadingForm = false;
            this.localeCode = success['localeCode'];
            this.localeIdentifier = success['localeIdentifier'];
            this.localeIcon = success['localeIcon'] ? success['localeIcon'] : '';
            this.formGroup.controls['locale'].setValue(this.localeIdentifier);
            let darkMode = [{
                    selected: false,
                }];
            if (success['theme'] === 'dark') {
                darkMode = [{
                        selected: true,
                    }];
            }
            this.formGroup.controls['theme'].setValue(darkMode);
            this.formGroup.markAsPristine();
        }, (error) => {
            this.loadingForm = true;
            if (error.respStatusMessage)
                this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
    }
    onSubmit() {
        if (this.formGroup.get('locale').value['value']) {
            this.localeCode = this.formGroup.get('locale').value['value'];
            this.localeIdentifier = this.formGroup.get('locale').value['label'];
            this.localeIcon = this.formGroup.get('locale').value['icon'];
        }
        const theme = this.formGroup.get('theme').value;
        const data = {
            'localeCode': this.localeCode,
            'localeIdentifier': this.localeIdentifier,
            'localeIcon': this.localeIcon,
            'theme': theme[0].selected ? 'dark' : 'default',
        };
        this.disabled = true;
        Promise.all([
            this.settingsIndexedDB.get('locale'),
            this.settingsIndexedDB.get('theme'),
        ]).then((current) => {
            if ((current[0] !== this.localeCode) || (current[1] !== data['theme'])) {
                this.exec('security', 'change-settings', data).subscribe((success) => {
                    if (success) {
                        if (success.respStatusCode === ResponseCode.OK_SCR002.toString()) {
                            if (theme) {
                                this.changeTheme(theme[0].selected);
                            }
                            if (current[0] !== this.localeCode) {
                                this.settingsIndexedDB.put('locale', this.localeCode).then(() => {
                                    this.http.HTTP_AUTH(this.api['security']['get-menus']).subscribe((menus) => {
                                        Promise.all([
                                            this.authIndexedDB.putEnc('menus', JSON.stringify(menus['main'])),
                                            this.authIndexedDB.putEnc('extras', JSON.stringify(menus['extra'])),
                                        ]).then(() => {
                                            this.translate.getTranslation(this.localeCode).subscribe((lang) => {
                                                this.translate.use(this.localeCode);
                                                this.translate.setTranslation(this.localeCode, lang, true);
                                                this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
                                                this.disabled = false;
                                                this.formGroup.markAsPristine();
                                            });
                                        });
                                    }, (error) => {
                                        this.toastr.showI18n('error.translate', false, null, 'warning');
                                    });
                                });
                            }
                        }
                    }
                }, (error) => {
                    this.disabled = false;
                    this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
                });
            }
        });
    }
    changeTheme(dark) {
        const theme = dark ? 'dark' : 'default';
        this.settingsIndexedDB.put('theme', theme).then();
        this.themeService.changeTheme(theme);
    }
}
SettingsPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: TranslateService },
    { type: NbThemeService },
    { type: undefined, decorators: [{ type: Inject, args: [SETTINGS_INDEXED_DB,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [AUTH_INDEXED_DB,] }] }
];
SettingsPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-settings-page',
                template: "<do-page-outlet [header]=\"'Settings'\">\n  <form [formGroup]=\"formGroup\" pagecontent>\n    <do-select\n      [name]=\"'locale'\"\n      [label]=\"'label.language'\"\n      [required]=\"true\"\n      [searchable]=\"false\"\n      [skeleton]=\"loadingForm\"\n      [api]=\"apiSelectLocale\"\n      formControlName=\"locale\">\n      <div *doContentSelect=\"let item\">\n        <span class=\"{{item.icon ? item.icon : localeIcon}}\"></span>\n        <span class=\"label-select\">{{item.label ? item.label : item}}</span>\n      </div>\n    </do-select>\n    <do-checkbox\n      [name]=\"'checkbox'\"\n      [label]=\"'label.dark-mode'\"\n      [data]=\"dataTheme\"\n      [skeleton]=\"loadingForm\"\n      formControlName=\"theme\">\n    </do-checkbox>\n    <do-button-submit\n      (onSubmit)=\"onSubmit()\"\n      [name]=\"'Update Settings'\"\n      [formGroupButton]=\"formGroup\"\n      [disabledButton]=\"disabled\"\n      [skeleton]=\"loadingForm\">\n    </do-button-submit>\n  </form>\n</do-page-outlet>\n",
                styles: [".label-select{padding-left:.5rem}"]
            },] }
];
SettingsPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: TranslateService },
    { type: NbThemeService },
    { type: undefined, decorators: [{ type: Inject, args: [SETTINGS_INDEXED_DB,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [AUTH_INDEXED_DB,] }] }
];

class DeactivatedPromptComponent {
    constructor(ref) {
        this.ref = ref;
        this.disabled = false;
    }
    submit(password) {
        this.disabled = true;
        this.ref.close(password);
    }
}
DeactivatedPromptComponent.ctorParameters = () => [
    { type: NbDialogRef }
];
DeactivatedPromptComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-deactivated-prompt',
                template: "<nb-card>\n  <nb-card-header>\n    <h6 class=\"text-danger deactivated-label\">\n        {{ 'Deactivate Account' | translate }}\n    </h6>\n  </nb-card-header>\n  <nb-card-body>\n    <p>\n      {{ 'message.deactivate-form' | translate }}\n    </p>\n    <p>\n      {{ 'message.input-password' | translate }}\n    </p>\n    <input\n      [(ngModel)]=\"password\"\n      type=\"password\"\n      nbInput\n      class=\"deactivated-password\"\n      placeholder=\"{{ 'Password' | translate }}\">\n  </nb-card-body>\n  <nb-card-footer>\n    <button\n      type=\"submit\"\n      status=\"danger\"\n      size=\"large\"\n      class=\"deactivated-button\"\n      [disabled]=\"!password || disabled\"\n      (click)=\"submit(password)\"\n      nbButton>\n      {{ 'message.button-deactivate' | translate }}\n    </button>\n  </nb-card-footer>\n</nb-card>\n",
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.deactivated-button{width:100%}.nb-theme-dark :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.deactivated-button{width:100%}.nb-theme-cosmic :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.deactivated-button{width:100%}.nb-theme-corporate :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.deactivated-button{width:100%}@media (max-width:767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.deactivated-button{font-size:.6rem}.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.deactivated-button{font-size:.6rem}.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.deactivated-button{font-size:.6rem}.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.deactivated-button{font-size:.6rem}}"]
            },] }
];
DeactivatedPromptComponent.ctorParameters = () => [
    { type: NbDialogRef }
];

class DeactivatedProviderPromptComponent {
    constructor(ref) {
        this.ref = ref;
        this.disabled = false;
        this.patternEmail = Pattern.EMAIL;
        this.form = new FormGroup({
            email: new FormControl(),
        });
    }
    submit() {
        this.disabled = true;
        this.ref.close(this.form.get('email').value);
    }
}
DeactivatedProviderPromptComponent.ctorParameters = () => [
    { type: NbDialogRef }
];
DeactivatedProviderPromptComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-deactivated-provider-prompt',
                template: "<nb-card>\n  <nb-card-header>\n    <h6 class=\"text-danger deactivated-label\">\n        {{ 'Deactivate Account' | translate }}\n    </h6>\n  </nb-card-header>\n  <nb-card-body>\n    <form [formGroup]=\"form\" aria-labelledby=\"title\">\n    <p>\n      {{ 'message.deactivate-form' | translate }}\n    </p>\n    <p>\n      {{ 'message.input-email' | translate }}\n    </p>\n    <input\n      [formControlName]=\"'email'\"\n      type=\"text\"\n      [required]=\"true\"\n      [pattern]=\"patternEmail\"\n      nbInput\n      class=\"deactivated-email\"\n      placeholder=\"Email\">\n    </form>\n  </nb-card-body>\n  <nb-card-footer>\n    <button\n      type=\"submit\"\n      status=\"danger\"\n      size=\"large\"\n      class=\"deactivated-button\"\n      [disabled]=\"!form.valid || disabled\"\n      (click)=\"submit()\"\n      nbButton>\n      {{ 'message.button-deactivate' | translate }}\n    </button>\n  </nb-card-footer>\n</nb-card>\n",
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host input.deactivated-email{max-width:unset;width:100%}.nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.deactivated-button{width:100%}.nb-theme-dark :host input.deactivated-email{max-width:unset;width:100%}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.deactivated-button{width:100%}.nb-theme-cosmic :host input.deactivated-email{max-width:unset;width:100%}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.deactivated-button{width:100%}.nb-theme-corporate :host input.deactivated-email{max-width:unset;width:100%}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.deactivated-button{width:100%}@media (max-width:767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.deactivated-button{font-size:.6rem}.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.deactivated-button{font-size:.6rem}.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.deactivated-button{font-size:.6rem}.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.deactivated-button{font-size:.6rem}}"]
            },] }
];
DeactivatedProviderPromptComponent.ctorParameters = () => [
    { type: NbDialogRef }
];

class SecurityPageComponent extends BaseFormComponent {
    constructor(injector, dialogService, authIndexedDB) {
        super(injector, {
            'password': [],
        });
        this.injector = injector;
        this.dialogService = dialogService;
        this.authIndexedDB = authIndexedDB;
        this.authProvider = true;
        this.enc = injector.get(EncryptionService);
        this.oauthResource = injector.get(OAUTH_INFO);
        this.authToken = injector.get(AuthTokenService);
        this.authIndexedDB.getEnc('provider').then((value) => {
            this.provider = {
                'value': value,
            };
            if (value === 'local') {
                this.authProvider = false;
            }
        });
    }
    onSubmit() {
        this.disabled = true;
        if (this.authProvider) {
            this.dialogService.open(DeactivatedProviderPromptComponent)
                .onClose.subscribe((email) => {
                if (email) {
                    this.disabled = true;
                    const data = {
                        'email': email,
                        'provider': this.provider['value'],
                    };
                    super.onSubmit(data, 'security', 'deactivated')
                        .pipe(takeUntil(this.destroy$))
                        .subscribe((response) => {
                        if (response) {
                            if (response.respStatusCode === ResponseCode.OK_SCR003.toString()) {
                                this.authToken.logout();
                            }
                        }
                    });
                }
                else {
                    this.disabled = false;
                }
            });
        }
        else {
            this.dialogService.open(DeactivatedPromptComponent)
                .onClose.subscribe((password) => {
                if (password) {
                    this.disabled = true;
                    const data = {
                        password: this.enc.encryptAES(this.oauthResource['aes_key'], password),
                    };
                    super.onSubmit(data, 'security', 'deactivated')
                        .pipe(takeUntil(this.destroy$))
                        .subscribe((response) => {
                        if (response) {
                            if (response.respStatusCode === ResponseCode.OK_SCR003.toString()) {
                                this.authToken.logout();
                            }
                        }
                    });
                }
                else {
                    this.disabled = false;
                }
            });
        }
    }
}
SecurityPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: NbDialogService },
    { type: AuthIndexedDBService }
];
SecurityPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-security-page',
                template: "<do-change-password-page *ngIf=\"!authProvider\"></do-change-password-page>\n<nb-card *ngIf=\"authProvider\">\n    <nb-card-body>\n        <div class=\"row\">\n            <nb-icon [status]=\"'info'\" [icon]=\"'google'\" class=\"icon-provider\"></nb-icon>\n            <p class=\"text-provider\">\n                {{ 'message.provider' | translate:provider}}\n            </p>\n        </div>\n    </nb-card-body>\n</nb-card>\n<nb-card>\n    <nb-card-body>\n        <div class=\"row\">\n            <div class=\"col-md-3 col-lg-3 col-xxxl-6\">\n                <button\n                    type=\"button\"\n                    status=\"danger\"\n                    size=\"large\"\n                    class=\"deactivated-button\"\n                    [disabled]=\"disabled\"\n                    (click)=\"onSubmit()\"\n                    nbButton>\n                    {{ 'Deactivate Account' | translate }}\n                </button>\n            </div>\n            <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n                <h6 class=\"text-danger deactivated-label\">\n                    {{ 'message.deactivated-account' | translate }}\n                </h6>\n            </div>\n        </div>\n    </nb-card-body>\n</nb-card>\n",
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host button.deactivated-button{width:100%;margin:.5rem 0}.nb-theme-default :host h6.deactivated-label{padding-top:10px;text-align:center}.nb-theme-default :host .icon-provider{margin:1rem 0 1rem 1.5rem}.nb-theme-default :host .text-provider{margin:1rem 1.5rem}@media (max-width:767.98px){.nb-theme-default :host .icon-provider{margin:1rem 0 1rem .5rem}.nb-theme-default :host .text-provider{margin:1rem 0 1rem .5rem}}.nb-theme-dark :host button.deactivated-button{width:100%;margin:.5rem 0}.nb-theme-dark :host h6.deactivated-label{padding-top:10px;text-align:center}.nb-theme-dark :host .icon-provider{margin:1rem 0 1rem 1.5rem}.nb-theme-dark :host .text-provider{margin:1rem 1.5rem}@media (max-width:767.98px){.nb-theme-dark :host .icon-provider{margin:1rem 0 1rem .5rem}.nb-theme-dark :host .text-provider{margin:1rem 0 1rem .5rem}}.nb-theme-cosmic :host button.deactivated-button{width:100%;margin:.5rem 0}.nb-theme-cosmic :host h6.deactivated-label{padding-top:10px;text-align:center}.nb-theme-cosmic :host .icon-provider{margin:1rem 0 1rem 1.5rem}.nb-theme-cosmic :host .text-provider{margin:1rem 1.5rem}@media (max-width:767.98px){.nb-theme-cosmic :host .icon-provider{margin:1rem 0 1rem .5rem}.nb-theme-cosmic :host .text-provider{margin:1rem 0 1rem .5rem}}.nb-theme-corporate :host button.deactivated-button{width:100%;margin:.5rem 0}.nb-theme-corporate :host h6.deactivated-label{padding-top:10px;text-align:center}.nb-theme-corporate :host .icon-provider{margin:1rem 0 1rem 1.5rem}.nb-theme-corporate :host .text-provider{margin:1rem 1.5rem}@media (max-width:767.98px){.nb-theme-corporate :host .icon-provider{margin:1rem 0 1rem .5rem}.nb-theme-corporate :host .text-provider{margin:1rem 0 1rem .5rem}}"]
            },] }
];
SecurityPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: NbDialogService },
    { type: AuthIndexedDBService }
];

class SystemPageComponent extends BaseFormComponent {
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

class TermsConditionsPageComponent extends BaseComponent {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        const data = {
            'parameterCode': 'TERMS_CONDITIONS.DONGKAP'
        };
        this.http.HTTP_AUTH(this.api['master']['parameter'], data)
            .pipe(takeUntil(this.destroy$))
            .subscribe((response) => {
            this.content = response['parameterValue'];
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
}
TermsConditionsPageComponent.ctorParameters = () => [
    { type: Injector }
];
TermsConditionsPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-terms-conditions-page',
                template: "<!-- https://www.privacypolicyonline.com/live.php?token=c7NdqfNju6oyhdnlrnLPdskC3Pft3FuH -->\n<do-page-outlet [header]=\"'header.terms-conditions'\">\n  <div [innerHTML]=\"content\" pagecontent></div>\n</do-page-outlet>\n",
                styles: [""]
            },] }
];
TermsConditionsPageComponent.ctorParameters = () => [
    { type: Injector }
];

class PrivacyPolicyPageComponent extends BaseComponent {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        const data = {
            'parameterCode': 'PRIVACY_POLICY.DONGKAP'
        };
        this.http.HTTP_AUTH(this.api['master']['parameter'], data)
            .pipe(takeUntil(this.destroy$))
            .subscribe((response) => {
            this.content = response['parameterValue'];
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
}
PrivacyPolicyPageComponent.ctorParameters = () => [
    { type: Injector }
];
PrivacyPolicyPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-privacy-policy-page-page',
                template: "<!-- https://www.privacypolicyonline.com/live.php?token=XnC0EXuhJuJgyXGsOZNL33fGEGwzLvlU -->\n<do-page-outlet [header]=\"'header.privacy-policy'\">\n  <div [innerHTML]=\"content\" pagecontent></div>\n</do-page-outlet>\n",
                styles: [""]
            },] }
];
PrivacyPolicyPageComponent.ctorParameters = () => [
    { type: Injector }
];

const ɵ0 = {
    code: '#PROFILE-PAGE',
}, ɵ1 = {
    code: '#SYSTEM-PAGE',
}, ɵ2 = {
    code: '#SECURITY-PAGE',
}, ɵ3 = {
    code: '#SETTINGS-PAGE',
}, ɵ4 = {
    code: '#SETTINGS-PAGE',
}, ɵ5 = {
    code: '#SETTINGS-PAGE',
};
const routes = [{
        path: '',
        component: ExtraComponent,
        canActivateChild: [AuthGuardChildService],
        children: [
            {
                path: 'profile',
                component: ProfilePageComponent,
                data: ɵ0,
            },
            {
                path: 'system',
                component: SystemPageComponent,
                data: ɵ1,
            },
            {
                path: 'security',
                component: SecurityPageComponent,
                data: ɵ2,
            },
            {
                path: 'settings',
                component: SettingsPageComponent,
                data: ɵ3,
            },
            {
                path: 'terms',
                component: TermsConditionsPageComponent,
                data: ɵ4,
            },
            {
                path: 'privacy-policy',
                component: PrivacyPolicyPageComponent,
                data: ɵ5,
            },
        ],
    }];
class DoExtraRoutingModule {
}
DoExtraRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];

class HomePageComponent {
    constructor(profileIndexedDB) {
        this.profileIndexedDB = profileIndexedDB;
    }
    ngOnInit() {
        this.name = this.profileIndexedDB.get('name');
    }
    ngOnDestroy() { }
}
HomePageComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PROFILE_INDEXED_DB,] }] }
];
HomePageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-home-page',
                template: "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <nb-card>\n      <div class=\"icon-container\">\n        <div class=\"icon status-primary\">\n          <i [ngClass]=\"'nb-home'\"></i>\n        </div>\n      </div>\n      <div class=\"details\">\n        <div class=\"title h5\">{{'Welcome' | translate}}</div>\n        <div class=\"paragraph-2\">{{'Hi' | translate}}, <strong>{{name | async}}</strong>!</div>\n      </div>\n    </nb-card>\n  </div>\n</div>\n",
                styles: [".nb-theme-default :host nb-card{flex-direction:row;align-items:center;height:6rem;overflow:visible}.nb-theme-default :host nb-card .icon-container{height:100%;padding:.625rem}.nb-theme-default :host nb-card .icon{display:flex;align-items:center;justify-content:center;width:5.75rem;height:4.75rem;font-size:3.75rem;border-radius:.25rem;transition:width .4s;transform:translate3d(0,0,0);-webkit-transform-style:preserve-3d;-webkit-backface-visibility:hidden;color:#fff}.nb-theme-default :host nb-card .icon.status-basic{background-image:linear-gradient(to right,#f7f9fc,#edf1f7)}.nb-theme-default :host nb-card .icon.status-basic:hover{background-image:linear-gradient(to right,#fff,#f7f9fc)}.nb-theme-default :host nb-card .icon.status-primary{background-image:linear-gradient(to right,#598bff,#36f)}.nb-theme-default :host nb-card .icon.status-primary:hover{background-image:linear-gradient(to right,#a6c1ff,#598bff)}.nb-theme-default :host nb-card .icon.status-success{background-image:linear-gradient(to right,#2ce69b,#00d68f)}.nb-theme-default :host nb-card .icon.status-success:hover{background-image:linear-gradient(to right,#8cfac7,#2ce69b)}.nb-theme-default :host nb-card .icon.status-warning{background-image:linear-gradient(to right,#ffc94d,#fa0)}.nb-theme-default :host nb-card .icon.status-warning:hover{background-image:linear-gradient(to right,#ffe59e,#ffc94d)}.nb-theme-default :host nb-card .icon.status-danger{background-image:linear-gradient(to right,#ff708d,#ff3d71)}.nb-theme-default :host nb-card .icon.status-danger:hover{background-image:linear-gradient(to right,#ffa8b4,#ff708d)}.nb-theme-default :host nb-card .icon.status-info{background-image:linear-gradient(to right,#42aaff,#0095ff)}.nb-theme-default :host nb-card .icon.status-info:hover{background-image:linear-gradient(to right,#94cbff,#42aaff)}.nb-theme-default :host nb-card .icon.status-control{background-image:linear-gradient(to right,#fff,#fff)}.nb-theme-default :host nb-card .icon.status-control:hover{background-image:linear-gradient(to right,#fff,#f7f9fc)}.nb-theme-default :host nb-card.off{color:#8f9bb3}.nb-theme-default :host nb-card.off .icon,.nb-theme-default :host nb-card.off .status,.nb-theme-default :host nb-card.off .title{color:#8f9bb3}.nb-theme-default :host nb-card.off .icon.status-basic{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-default :host nb-card.off .icon.status-primary{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-default :host nb-card.off .icon.status-success{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-default :host nb-card.off .icon.status-warning{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-default :host nb-card.off .icon.status-danger{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-default :host nb-card.off .icon.status-info{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-default :host nb-card.off .icon.status-control{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-default :host nb-card .details{display:flex;flex-direction:column;justify-content:center;height:100%;border-left:1px solid transparent}[dir=ltr] .nb-theme-default :host nb-card .details{padding:0 .5rem 0 .75rem}[dir=rtl] .nb-theme-default :host nb-card .details{padding:0 .75rem 0 .5rem}.nb-theme-default :host nb-card .title{margin:0}.nb-theme-default :host nb-card .status{text-transform:uppercase}.nb-theme-dark :host nb-card{flex-direction:row;align-items:center;height:6rem;overflow:visible}.nb-theme-dark :host nb-card .icon-container{height:100%;padding:.625rem}.nb-theme-dark :host nb-card .icon{display:flex;align-items:center;justify-content:center;width:5.75rem;height:4.75rem;font-size:3.75rem;border-radius:.25rem;transition:width .4s;transform:translate3d(0,0,0);-webkit-transform-style:preserve-3d;-webkit-backface-visibility:hidden;color:#fff}.nb-theme-dark :host nb-card .icon.status-basic{background-image:linear-gradient(to right,#f7f9fc,#edf1f7)}.nb-theme-dark :host nb-card .icon.status-basic:hover{background-image:linear-gradient(to right,#fff,#f7f9fc)}.nb-theme-dark :host nb-card .icon.status-primary{background-image:linear-gradient(to right,#598bff,#36f)}.nb-theme-dark :host nb-card .icon.status-primary:hover{background-image:linear-gradient(to right,#a6c1ff,#598bff)}.nb-theme-dark :host nb-card .icon.status-success{background-image:linear-gradient(to right,#2ce69b,#00d68f)}.nb-theme-dark :host nb-card .icon.status-success:hover{background-image:linear-gradient(to right,#8cfac7,#2ce69b)}.nb-theme-dark :host nb-card .icon.status-warning{background-image:linear-gradient(to right,#ffc94d,#fa0)}.nb-theme-dark :host nb-card .icon.status-warning:hover{background-image:linear-gradient(to right,#ffe59e,#ffc94d)}.nb-theme-dark :host nb-card .icon.status-danger{background-image:linear-gradient(to right,#ff708d,#ff3d71)}.nb-theme-dark :host nb-card .icon.status-danger:hover{background-image:linear-gradient(to right,#ffa8b4,#ff708d)}.nb-theme-dark :host nb-card .icon.status-info{background-image:linear-gradient(to right,#42aaff,#0095ff)}.nb-theme-dark :host nb-card .icon.status-info:hover{background-image:linear-gradient(to right,#94cbff,#42aaff)}.nb-theme-dark :host nb-card .icon.status-control{background-image:linear-gradient(to right,#fff,#fff)}.nb-theme-dark :host nb-card .icon.status-control:hover{background-image:linear-gradient(to right,#fff,#f7f9fc)}.nb-theme-dark :host nb-card.off{color:#8f9bb3}.nb-theme-dark :host nb-card.off .icon,.nb-theme-dark :host nb-card.off .status,.nb-theme-dark :host nb-card.off .title{color:#8f9bb3}.nb-theme-dark :host nb-card.off .icon.status-basic{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-dark :host nb-card.off .icon.status-primary{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-dark :host nb-card.off .icon.status-success{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-dark :host nb-card.off .icon.status-warning{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-dark :host nb-card.off .icon.status-danger{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-dark :host nb-card.off .icon.status-info{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-dark :host nb-card.off .icon.status-control{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-dark :host nb-card .details{display:flex;flex-direction:column;justify-content:center;height:100%;border-left:1px solid transparent}[dir=ltr] .nb-theme-dark :host nb-card .details{padding:0 .5rem 0 .75rem}[dir=rtl] .nb-theme-dark :host nb-card .details{padding:0 .75rem 0 .5rem}.nb-theme-dark :host nb-card .title{margin:0}.nb-theme-dark :host nb-card .status{text-transform:uppercase}.nb-theme-cosmic :host nb-card{flex-direction:row;align-items:center;height:6rem;overflow:visible}.nb-theme-cosmic :host nb-card .icon-container{height:100%;padding:.625rem}.nb-theme-cosmic :host nb-card .icon{display:flex;align-items:center;justify-content:center;width:5.75rem;height:4.75rem;font-size:3.75rem;border-radius:.25rem;transition:width .4s;transform:translate3d(0,0,0);-webkit-transform-style:preserve-3d;-webkit-backface-visibility:hidden;color:#fff}.nb-theme-cosmic :host nb-card .icon.status-basic{background-image:linear-gradient(to right,#f7f7fc,#f0f0fa)}.nb-theme-cosmic :host nb-card .icon.status-basic:hover{background-image:linear-gradient(to right,#fff,#f7f7fc)}.nb-theme-cosmic :host nb-card .icon.status-primary{background-image:linear-gradient(to right,#b18aff,#a16eff)}.nb-theme-cosmic :host nb-card .icon.status-primary:hover{background-image:linear-gradient(to right,#d5bfff,#b18aff)}.nb-theme-cosmic :host nb-card .icon.status-success{background-image:linear-gradient(to right,#2ce69b,#00d68f)}.nb-theme-cosmic :host nb-card .icon.status-success:hover{background-image:linear-gradient(to right,#8cfac7,#2ce69b)}.nb-theme-cosmic :host nb-card .icon.status-warning{background-image:linear-gradient(to right,#ffc94d,#fa0)}.nb-theme-cosmic :host nb-card .icon.status-warning:hover{background-image:linear-gradient(to right,#ffe59e,#ffc94d)}.nb-theme-cosmic :host nb-card .icon.status-danger{background-image:linear-gradient(to right,#ff708d,#ff3d71)}.nb-theme-cosmic :host nb-card .icon.status-danger:hover{background-image:linear-gradient(to right,#ffa8b4,#ff708d)}.nb-theme-cosmic :host nb-card .icon.status-info{background-image:linear-gradient(to right,#42aaff,#0095ff)}.nb-theme-cosmic :host nb-card .icon.status-info:hover{background-image:linear-gradient(to right,#94cbff,#42aaff)}.nb-theme-cosmic :host nb-card .icon.status-control{background-image:linear-gradient(to right,#fff,#fff)}.nb-theme-cosmic :host nb-card .icon.status-control:hover{background-image:linear-gradient(to right,#fff,#f7f7fc)}.nb-theme-cosmic :host nb-card.off{color:#b4b4db}.nb-theme-cosmic :host nb-card.off .icon,.nb-theme-cosmic :host nb-card.off .status,.nb-theme-cosmic :host nb-card.off .title{color:#b4b4db}.nb-theme-cosmic :host nb-card.off .icon.status-basic{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-cosmic :host nb-card.off .icon.status-primary{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-cosmic :host nb-card.off .icon.status-success{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-cosmic :host nb-card.off .icon.status-warning{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-cosmic :host nb-card.off .icon.status-danger{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-cosmic :host nb-card.off .icon.status-info{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-cosmic :host nb-card.off .icon.status-control{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-cosmic :host nb-card .details{display:flex;flex-direction:column;justify-content:center;height:100%;border-left:1px solid transparent}[dir=ltr] .nb-theme-cosmic :host nb-card .details{padding:0 .5rem 0 .75rem}[dir=rtl] .nb-theme-cosmic :host nb-card .details{padding:0 .75rem 0 .5rem}.nb-theme-cosmic :host nb-card .title{margin:0}.nb-theme-cosmic :host nb-card .status{text-transform:uppercase}.nb-theme-corporate :host nb-card{flex-direction:row;align-items:center;height:6rem;overflow:visible}.nb-theme-corporate :host nb-card .icon-container{height:100%;padding:.625rem}.nb-theme-corporate :host nb-card .icon{display:flex;align-items:center;justify-content:center;width:5.75rem;height:4.75rem;font-size:3.75rem;border-radius:.17rem;transition:width .4s;transform:translate3d(0,0,0);-webkit-transform-style:preserve-3d;-webkit-backface-visibility:hidden;color:#fff}.nb-theme-corporate :host nb-card .icon.status-basic{background-image:linear-gradient(to right,#f7f9fc,#edf1f7)}.nb-theme-corporate :host nb-card .icon.status-basic:hover{background-image:linear-gradient(to right,#fff,#f7f9fc)}.nb-theme-corporate :host nb-card .icon.status-primary{background-image:linear-gradient(to right,#598bff,#36f)}.nb-theme-corporate :host nb-card .icon.status-primary:hover{background-image:linear-gradient(to right,#a6c1ff,#598bff)}.nb-theme-corporate :host nb-card .icon.status-success{background-image:linear-gradient(to right,#2ce69b,#00d68f)}.nb-theme-corporate :host nb-card .icon.status-success:hover{background-image:linear-gradient(to right,#8cfac7,#2ce69b)}.nb-theme-corporate :host nb-card .icon.status-warning{background-image:linear-gradient(to right,#ffc94d,#fa0)}.nb-theme-corporate :host nb-card .icon.status-warning:hover{background-image:linear-gradient(to right,#ffe59e,#ffc94d)}.nb-theme-corporate :host nb-card .icon.status-danger{background-image:linear-gradient(to right,#ff708d,#ff3d71)}.nb-theme-corporate :host nb-card .icon.status-danger:hover{background-image:linear-gradient(to right,#ffa8b4,#ff708d)}.nb-theme-corporate :host nb-card .icon.status-info{background-image:linear-gradient(to right,#42aaff,#0095ff)}.nb-theme-corporate :host nb-card .icon.status-info:hover{background-image:linear-gradient(to right,#94cbff,#42aaff)}.nb-theme-corporate :host nb-card .icon.status-control{background-image:linear-gradient(to right,#fff,#fff)}.nb-theme-corporate :host nb-card .icon.status-control:hover{background-image:linear-gradient(to right,#fff,#f7f9fc)}.nb-theme-corporate :host nb-card.off{color:#8f9bb3}.nb-theme-corporate :host nb-card.off .icon,.nb-theme-corporate :host nb-card.off .status,.nb-theme-corporate :host nb-card.off .title{color:#8f9bb3}.nb-theme-corporate :host nb-card.off .icon.status-basic{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-corporate :host nb-card.off .icon.status-primary{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-corporate :host nb-card.off .icon.status-success{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-corporate :host nb-card.off .icon.status-warning{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-corporate :host nb-card.off .icon.status-danger{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-corporate :host nb-card.off .icon.status-info{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-corporate :host nb-card.off .icon.status-control{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-corporate :host nb-card .details{display:flex;flex-direction:column;justify-content:center;height:100%;border-left:1px solid transparent}[dir=ltr] .nb-theme-corporate :host nb-card .details{padding:0 .5rem 0 .75rem}[dir=rtl] .nb-theme-corporate :host nb-card .details{padding:0 .75rem 0 .5rem}.nb-theme-corporate :host nb-card .title{margin:0}.nb-theme-corporate :host nb-card .status{text-transform:uppercase}"]
            },] }
];
HomePageComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PROFILE_INDEXED_DB,] }] }
];

const EXTRA_COMPONENTS = [
    ExtraComponent,
    ChangePasswordPageComponent,
    DeactivatedPromptComponent,
    DeactivatedProviderPromptComponent,
    SecurityPageComponent,
    ProfilePageComponent,
    SystemPageComponent,
    SettingsPageComponent,
    HomePageComponent,
    TermsConditionsPageComponent,
    PrivacyPolicyPageComponent,
];
const EXTRA_ENTRY_COMPONENTS = [
    DeactivatedPromptComponent,
    DeactivatedProviderPromptComponent,
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
    DoEditorModule,
    DoSelectModule,
    DoDatePickerModule,
    DoImageModule,
    DoExtraRoutingModule,
];
class DoExtraModule {
}
DoExtraModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ...modules,
                ],
                declarations: [
                    ...EXTRA_COMPONENTS,
                ],
                entryComponents: [
                    ...EXTRA_ENTRY_COMPONENTS,
                ],
            },] }
];

/*
 * Public API Surface of do-extra
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DoExtraModule, HomePageComponent, DoExtraRoutingModule as ɵa, ExtraComponent as ɵb, ProfilePageComponent as ɵc, SystemPageComponent as ɵd, SecurityPageComponent as ɵe, SettingsPageComponent as ɵf, TermsConditionsPageComponent as ɵg, PrivacyPolicyPageComponent as ɵh, ChangePasswordPageComponent as ɵi, DeactivatedPromptComponent as ɵj, DeactivatedProviderPromptComponent as ɵk };
//# sourceMappingURL=dongkap-do-extra.js.map
