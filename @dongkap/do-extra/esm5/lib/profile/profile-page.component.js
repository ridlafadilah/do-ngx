import { __extends } from "tslib";
import { Component, Injector, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { PROFILE_INDEXED_DB, ResponseCode, USER_INFO, UserInfo, Pattern, } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-common';
import { AuthIndexedDBService } from '@dongkap/do-auth';
var ProfilePageComponent = /** @class */ (function (_super) {
    __extends(ProfilePageComponent, _super);
    function ProfilePageComponent(injector, userService, profileIndexedDB, authIndexedDB) {
        var _this = _super.call(this, injector, {
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
        }) || this;
        _this.injector = injector;
        _this.userService = userService;
        _this.profileIndexedDB = profileIndexedDB;
        _this.authIndexedDB = authIndexedDB;
        _this.patternEmail = Pattern.EMAIL;
        _this.patternPhoneNumber = Pattern.PHONE_NUMBER;
        _this.minLength = 5;
        _this.disabledUpload = false;
        _this.provider = 'local';
        _this.formGroupImage = _this.formBuilder.group({
            'image': [],
        });
        _this.apiSelectGender = _this.api['master']['select-parameter'];
        _this.apiSelectCountry = _this.api['master']['select-country'];
        _this.apiSelectProvince = _this.api['master']['select-province'];
        _this.apiSelectCity = _this.api['master']['select-city'];
        _this.apiSelectDistrict = _this.api['master']['select-district'];
        _this.apiSelectSubDistrict = _this.api['master']['select-subdistrict'];
        _this.authIndexedDB.getEnc('provider').then(function (value) {
            if (value !== 'local') {
                _this.provider = value;
                _this.formGroup.controls['email'].disable();
            }
        });
        return _this;
    }
    ProfilePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onInit('profile', 'get-profile');
        Promise.all([
            this.profileIndexedDB.get('image-b64'),
            this.profileIndexedDB.get('image'),
        ]).then(function (value) {
            if (value[0])
                _this.image = value[0];
            else
                _this.image = value[1];
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
    };
    ProfilePageComponent.prototype.onInit = function (serviceName, apiName) {
        var _this = this;
        this.loadingForm = true;
        this.exec(serviceName, apiName)
            .subscribe(function (success) {
            _this.loadingForm = false;
            _this.formGroup.controls['name'].setValue(success['name']);
            _this.formGroup.controls['username'].setValue(success['username']);
            _this.formGroup.controls['idNumber'].setValue(success['idNumber']);
            if (success['gender']) {
                _this.formGroup.controls['gender'].setValue({
                    label: success['gender'],
                    value: success['genderCode']
                });
            }
            _this.formGroup.controls['placeOfBirth'].setValue(success['placeOfBirth']);
            if (success['dateOfBirth'])
                _this.formGroup.get('dateOfBirth').setValue(success['dateOfBirth']);
            _this.formGroup.controls['email'].setValue(success['email']);
            if (success['address'])
                _this.formGroup.controls['address'].setValue(success['address']);
            if (success['country']) {
                _this.formGroup.controls['country'].setValue({
                    label: success['country'],
                    value: success['countryCode']
                });
                _this.paramSelectProvince = [
                    {
                        key: 'country',
                        value: success['countryCode'],
                    },
                ];
            }
            if (success['province']) {
                _this.formGroup.controls['province'].setValue({
                    label: success['province'],
                    value: success['provinceCode']
                });
                _this.paramSelectCity = [
                    {
                        key: 'province',
                        value: success['provinceCode'],
                    },
                ];
            }
            if (success['city']) {
                _this.formGroup.controls['city'].setValue({
                    label: success['city'],
                    value: success['cityCode']
                });
                _this.paramSelectDistrict = [
                    {
                        key: 'city',
                        value: success['cityCode'],
                    },
                ];
            }
            if (success['district']) {
                _this.formGroup.controls['district'].setValue({
                    label: success['district'],
                    value: success['districtCode']
                });
                _this.paramSelectSubDistrict = [
                    {
                        key: 'district',
                        value: success['districtCode'],
                    },
                ];
            }
            if (success['subDistrict']) {
                _this.formGroup.controls['subDistrict'].setValue({
                    label: success['subDistrict'],
                    value: success['subDistrictCode']
                });
            }
            if (success['phoneNumber'])
                _this.formGroup.controls['phoneNumber'].setValue(success['phoneNumber']);
            if (success['mobileNumber'])
                _this.formGroup.controls['mobileNumber'].setValue(success['mobileNumber']);
            _this.authIndexedDB.getEnc('provider').then(function (value) {
                if (value !== 'local') {
                    _this.provider = value;
                    _this.formGroup.controls['email'].disable();
                }
            });
            _this.formGroup.markAsPristine();
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
    ProfilePageComponent.prototype.onSelectCountry = function (select) {
        this.paramSelectProvince = [
            {
                key: 'country',
                value: select ? select.value : 'undefined',
            },
        ];
        this.onClearProvince();
    };
    ProfilePageComponent.prototype.onSelectProvince = function (select) {
        this.paramSelectCity = [
            {
                key: 'province',
                value: select ? select.value : 'undefined',
            },
        ];
        this.onClearProvince();
    };
    ProfilePageComponent.prototype.onSelectCity = function (select) {
        this.paramSelectDistrict = [
            {
                key: 'city',
                value: select ? select.value : 'undefined',
            },
        ];
        this.onClearCity();
    };
    ProfilePageComponent.prototype.onSelectDistrict = function (select) {
        this.paramSelectSubDistrict = [
            {
                key: 'district',
                value: select ? select.value : 'undefined',
            },
        ];
        this.onClearDistrict();
    };
    ProfilePageComponent.prototype.onClearCountry = function () {
        this.formGroup.patchValue({
            'province': null,
            'city': null,
            'district': null,
            'subDistrict': null,
        });
    };
    ProfilePageComponent.prototype.onClearProvince = function () {
        this.formGroup.patchValue({
            'city': null,
            'district': null,
            'subDistrict': null,
        });
    };
    ProfilePageComponent.prototype.onClearCity = function () {
        this.formGroup.patchValue({
            'district': null,
            'subDistrict': null,
        });
    };
    ProfilePageComponent.prototype.onClearDistrict = function () {
        this.formGroup.patchValue({
            'subDistrict': null,
        });
    };
    ProfilePageComponent.prototype.uploadImage = function (file) {
        var _this = this;
        var data = new FormData();
        data.append('photo', file);
        this.formGroupImage.get('image').disable();
        this.exec('file', 'photo-profile', data).subscribe(function (success) {
            _this.userService.updatePhotoUser(file, success.respStatusMessage['checksum']);
            _this.uploadFinished = true;
            _this.formGroupImage.markAsPristine();
            _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true, null, 'success');
        }, function (error) {
            _this.formGroupImage.get('image').enable();
            _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
    };
    ProfilePageComponent.prototype.valueSelect = function (prop) {
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
    };
    ProfilePageComponent.prototype.valueSelectNonLabel = function (prop) {
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
    };
    ProfilePageComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = {
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
        _super.prototype.onSubmit.call(this, data, 'profile', 'change-profile')
            .pipe(takeUntil(this.destroy$))
            .subscribe(function (response) {
            if (response) {
                switch (response.respStatusCode) {
                    case ResponseCode.ERR_SCR0008.toString():
                        _this.formGroup.controls['email'].setErrors({
                            'email': true,
                        });
                        break;
                    case ResponseCode.ERR_SCR0007A.toString():
                        _this.formGroup.controls['phoneNumber'].setErrors({
                            'error.pattern.phoneNumber': true,
                        });
                        break;
                    case ResponseCode.OK_SCR004.toString():
                        _this.userService.updateNameUser(_this.formGroup.get('name').value);
                        break;
                    default:
                        break;
                }
            }
        });
    };
    ProfilePageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: UserInfo, decorators: [{ type: Inject, args: [USER_INFO,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [PROFILE_INDEXED_DB,] }] },
        { type: AuthIndexedDBService }
    ]; };
    ProfilePageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-profile-page',
                    template: "<do-page-outlet [header]=\"'Profile'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n      <form [formGroup]=\"formGroupImage\">\n        <do-image-upload\n          [radius]=\"50\"\n          [skeleton]=\"loadingForm\"\n          [image]=\"image\"\n          [uploadFn]=\"uploadFinished\"\n          (onUpload)=\"uploadImage($event)\"\n          formControlName=\"image\">\n        </do-image-upload>\n      </form>\n    </div>\n    <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'name'\"\n          [label]=\"'Name'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"name\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'email'\"\n          [label]=\"'Email'\"\n          [required]=\"true\"\n          [pattern]=\"patternEmail\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"email\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'username'\"\n          [label]=\"'Username'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"username\">\n        </do-input-text>\n        <div class=\"font-row\">\n          <div class=\"header\">\n            <div class=\"name bold\">{{'label.personal-info' | translate}}</div>\n          </div>\n          <do-input-text\n            [name]=\"'idNumber'\"\n            [label]=\"'ID Number'\"\n            [required]=\"true\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"idNumber\">\n          </do-input-text>\n          <do-select\n            [name]=\"'gender'\"\n            [label]=\"'Gender'\"\n            [required]=\"true\"\n            [api]=\"apiSelectGender\"\n            [queryParam]=\"paramSelectGender\"\n            [searchable]=\"false\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"gender\">\n          </do-select>\n          <do-input-text\n            [name]=\"'placeOfBirth'\"\n            [label]=\"'Place of Birth'\"\n            [required]=\"true\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"placeOfBirth\">\n          </do-input-text>\n          <do-datepicker\n            [name]=\"'dateOfBirth'\"\n            [label]=\"'Date of Birth'\"\n            [required]=\"true\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"dateOfBirth\">\n          </do-datepicker>\n        </div>\n        <div class=\"font-row\">\n          <div class=\"header\">\n            <div class=\"name bold\">{{'label.contact-person' | translate}}</div>\n          </div>\n          <do-input-text\n            [name]=\"'phoneNumber'\"\n            [label]=\"'Telephone'\"\n            [required]=\"true\"\n            [pattern]=\"patternPhoneNumber\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"phoneNumber\">\n          </do-input-text>\n          <do-textarea\n            [name]=\"'address'\"\n            [label]=\"'Address'\"\n            [required]=\"true\"\n            [minLength]=\"minLength\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"address\">\n          </do-textarea>\n          <do-select\n            [name]=\"'country'\"\n            [label]=\"'Country'\"\n            [api]=\"apiSelectCountry\"\n            [skeleton]=\"loadingForm\"\n            (onSelect)=\"onSelectCountry($event)\"\n            (onClear)=\"onClearCountry()\"\n            formControlName=\"country\">\n          </do-select>\n          <do-select\n            [name]=\"'province'\"\n            [label]=\"'Province'\"\n            [api]=\"apiSelectProvince\"\n            [queryParam]=\"paramSelectProvince\"\n            [skeleton]=\"loadingForm\"\n            (onSelect)=\"onSelectProvince($event)\"\n            (onClear)=\"onClearProvince()\"\n            formControlName=\"province\">\n          </do-select>\n          <do-select\n            [name]=\"'city'\"\n            [label]=\"'City'\"\n            [api]=\"apiSelectCity\"\n            [queryParam]=\"paramSelectCity\"\n            [skeleton]=\"loadingForm\"\n            (onSelect)=\"onSelectCity($event)\"\n            (onClear)=\"onClearCity()\"\n            formControlName=\"city\">\n          </do-select>\n          <do-select\n            [name]=\"'district'\"\n            [label]=\"'District'\"\n            [api]=\"apiSelectDistrict\"\n            [queryParam]=\"paramSelectDistrict\"\n            [skeleton]=\"loadingForm\"\n            (onSelect)=\"onSelectDistrict($event)\"\n            (onClear)=\"onClearDistrict()\"\n            formControlName=\"district\">\n          </do-select>\n          <do-select\n            [name]=\"'subDistrict'\"\n            [label]=\"'Sub District'\"\n            [api]=\"apiSelectSubDistrict\"\n            [queryParam]=\"paramSelectSubDistrict\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"subDistrict\">\n          </do-select>\n        </div>\n        <do-button-submit\n          (onSubmit)=\"onSubmit()\"\n          [name]=\"'Update Profile'\"\n          [disabledButton]=\"disabled\"\n          [formGroupButton]=\"formGroup\"\n          [skeleton]=\"loadingForm\">\n        </do-button-submit>\n      </form>\n    </div>\n  </div>\n</do-page-outlet>\n",
                    styles: [".nb-theme-default :host .font-row{margin-top:2rem}.nb-theme-default :host .font-row:first-child{margin-bottom:2rem}.nb-theme-default :host .font-row .header{text-align:right;color:#8f9bb3;font-family:Open Sans,sans-serif;font-size:.9rem;font-weight:100;line-height:1rem;align-items:baseline}.nb-theme-default :host .font-row p{margin:0}.nb-theme-default :host .header{display:flex;flex-wrap:wrap;align-items:center;padding-bottom:1rem;margin-bottom:1rem;border-bottom:1px solid #edf1f7}.nb-theme-default :host .header:last-child{border-bottom:none}.nb-theme-default :host .header div:first-child{flex:2;-ms-flex:2 1 auto;line-height:1;align-items:flex-end}.nb-theme-default :host .header div:first-child h1,.nb-theme-default :host .header div:first-child h2,.nb-theme-default :host .header div:first-child h3,.nb-theme-default :host .header div:first-child h4,.nb-theme-default :host .header div:first-child h5,.nb-theme-default :host .header div:first-child h6{margin-bottom:0}.nb-theme-default :host .header .variants{flex:1;-ms-flex:1 1 auto;display:flex;justify-content:space-between;align-items:flex-end}.nb-theme-default :host .header .variants span{padding-right:1rem;padding-left:1rem}.nb-theme-default :host .header .detail{flex:1;display:flex}.nb-theme-dark :host .font-row{margin-top:2rem}.nb-theme-dark :host .font-row:first-child{margin-bottom:2rem}.nb-theme-dark :host .font-row .header{text-align:right;color:#8f9bb3;font-family:Open Sans,sans-serif;font-size:.9rem;font-weight:100;line-height:1rem;align-items:baseline}.nb-theme-dark :host .font-row p{margin:0}.nb-theme-dark :host .header{display:flex;flex-wrap:wrap;align-items:center;padding-bottom:1rem;margin-bottom:1rem;border-bottom:1px solid #151a30}.nb-theme-dark :host .header:last-child{border-bottom:none}.nb-theme-dark :host .header div:first-child{flex:2;-ms-flex:2 1 auto;line-height:1;align-items:flex-end}.nb-theme-dark :host .header div:first-child h1,.nb-theme-dark :host .header div:first-child h2,.nb-theme-dark :host .header div:first-child h3,.nb-theme-dark :host .header div:first-child h4,.nb-theme-dark :host .header div:first-child h5,.nb-theme-dark :host .header div:first-child h6{margin-bottom:0}.nb-theme-dark :host .header .variants{flex:1;-ms-flex:1 1 auto;display:flex;justify-content:space-between;align-items:flex-end}.nb-theme-dark :host .header .variants span{padding-right:1rem;padding-left:1rem}.nb-theme-dark :host .header .detail{flex:1;display:flex}.nb-theme-cosmic :host .font-row{margin-top:2rem}.nb-theme-cosmic :host .font-row:first-child{margin-bottom:2rem}.nb-theme-cosmic :host .font-row .header{text-align:right;color:#8f9bb3;font-family:Open Sans,sans-serif;font-size:.9rem;font-weight:100;line-height:1rem;align-items:baseline}.nb-theme-cosmic :host .font-row p{margin:0}.nb-theme-cosmic :host .header{display:flex;flex-wrap:wrap;align-items:center;padding-bottom:1rem;margin-bottom:1rem;border-bottom:1px solid #1b1b38}.nb-theme-cosmic :host .header:last-child{border-bottom:none}.nb-theme-cosmic :host .header div:first-child{flex:2;-ms-flex:2 1 auto;line-height:1;align-items:flex-end}.nb-theme-cosmic :host .header div:first-child h1,.nb-theme-cosmic :host .header div:first-child h2,.nb-theme-cosmic :host .header div:first-child h3,.nb-theme-cosmic :host .header div:first-child h4,.nb-theme-cosmic :host .header div:first-child h5,.nb-theme-cosmic :host .header div:first-child h6{margin-bottom:0}.nb-theme-cosmic :host .header .variants{flex:1;-ms-flex:1 1 auto;display:flex;justify-content:space-between;align-items:flex-end}.nb-theme-cosmic :host .header .variants span{padding-right:1rem;padding-left:1rem}.nb-theme-cosmic :host .header .detail{flex:1;display:flex}.nb-theme-corporate :host .font-row{margin-top:2rem}.nb-theme-corporate :host .font-row:first-child{margin-bottom:2rem}.nb-theme-corporate :host .font-row .header{text-align:right;color:#8f9bb3;font-family:Open Sans,sans-serif;font-size:.9rem;font-weight:100;line-height:1rem;align-items:baseline}.nb-theme-corporate :host .font-row p{margin:0}.nb-theme-corporate :host .header{display:flex;flex-wrap:wrap;align-items:center;padding-bottom:1rem;margin-bottom:1rem;border-bottom:1px solid #edf1f7}.nb-theme-corporate :host .header:last-child{border-bottom:none}.nb-theme-corporate :host .header div:first-child{flex:2;-ms-flex:2 1 auto;line-height:1;align-items:flex-end}.nb-theme-corporate :host .header div:first-child h1,.nb-theme-corporate :host .header div:first-child h2,.nb-theme-corporate :host .header div:first-child h3,.nb-theme-corporate :host .header div:first-child h4,.nb-theme-corporate :host .header div:first-child h5,.nb-theme-corporate :host .header div:first-child h6{margin-bottom:0}.nb-theme-corporate :host .header .variants{flex:1;-ms-flex:1 1 auto;display:flex;justify-content:space-between;align-items:flex-end}.nb-theme-corporate :host .header .variants span{padding-right:1rem;padding-left:1rem}.nb-theme-corporate :host .header .detail{flex:1;display:flex}"]
                },] }
    ];
    ProfilePageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: UserInfo, decorators: [{ type: Inject, args: [USER_INFO,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [PROFILE_INDEXED_DB,] }] },
        { type: AuthIndexedDBService }
    ]; };
    return ProfilePageComponent;
}(BaseFormComponent));
export { ProfilePageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWV4dHJhLyIsInNvdXJjZXMiOlsibGliL3Byb2ZpbGUvcHJvZmlsZS1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUd2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osU0FBUyxFQUNULFFBQVEsRUFDUixPQUFPLEdBQ1IsTUFBTSxrQkFBa0IsQ0FBQztBQUkxQixPQUFPLEVBQUUsaUJBQWlCLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFeEQ7SUFLMEMsd0NBQXNCO0lBNEI5RCw4QkFDUyxRQUFrQixFQUNFLFdBQXFCLEVBQ1osZ0JBQXlDLEVBQ3JFLGFBQW1DO1FBSjdDLFlBS0Usa0JBQU0sUUFBUSxFQUNaO1lBQ0UsVUFBVSxFQUFFLENBQUM7b0JBQ1gsS0FBSyxFQUFFLElBQUk7b0JBQ1gsUUFBUSxFQUFFLElBQUk7aUJBQ2YsQ0FBQztZQUNGLE1BQU0sRUFBRSxFQUFFO1lBQ1YsVUFBVSxFQUFFLEVBQUU7WUFDZCxjQUFjLEVBQUUsRUFBRTtZQUNsQixhQUFhLEVBQUUsRUFBRTtZQUNqQixRQUFRLEVBQUUsRUFBRTtZQUNaLE9BQU8sRUFBRSxFQUFFO1lBQ1gsYUFBYSxFQUFFLEVBQUU7WUFDakIsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLFNBQVMsRUFBRSxFQUFFO1lBQ2IsVUFBVSxFQUFFLEVBQUU7WUFDZCxNQUFNLEVBQUUsRUFBRTtZQUNWLFVBQVUsRUFBRSxFQUFFO1lBQ2QsYUFBYSxFQUFFLEVBQUU7U0FDbEIsQ0FBQyxTQWdCTDtRQXZDUSxjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ0UsaUJBQVcsR0FBWCxXQUFXLENBQVU7UUFDWixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO1FBQ3JFLG1CQUFhLEdBQWIsYUFBYSxDQUFzQjtRQTNCdEMsa0JBQVksR0FBVyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ3JDLHdCQUFrQixHQUFXLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDbEQsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixvQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxjQUFRLEdBQVcsT0FBTyxDQUFDO1FBNENoQyxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQzNDLE9BQU8sRUFBRSxFQUFFO1NBQ1osQ0FBQyxDQUFDO1FBQ0gsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDOUQsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM3RCxLQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9ELEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN2RCxLQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9ELEtBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDckUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBYTtZQUN2RCxJQUFJLEtBQUssS0FBSyxPQUFPLEVBQUU7Z0JBQ3JCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUM1QztRQUNILENBQUMsQ0FBQyxDQUFDOztJQUNMLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQUEsaUJBK0JDO1FBOUJDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDVixJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztZQUN0QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztTQUNuQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBWTtZQUNuQixJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O2dCQUV0QixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDO2dCQUN4QixHQUFHLEVBQUUsb0JBQW9CO2dCQUN6QixLQUFLLEVBQUUsUUFBUTthQUNoQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQztnQkFDMUIsR0FBRyxFQUFFLFNBQVM7Z0JBQ2QsS0FBSyxFQUFFLFdBQVc7YUFDbkIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDO2dCQUN0QixHQUFHLEVBQUUsVUFBVTtnQkFDZixLQUFLLEVBQUUsV0FBVzthQUNuQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQztnQkFDMUIsR0FBRyxFQUFFLE1BQU07Z0JBQ1gsS0FBSyxFQUFFLFdBQVc7YUFDbkIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHNCQUFzQixHQUFHLENBQUM7Z0JBQzdCLEdBQUcsRUFBRSxVQUFVO2dCQUNmLEtBQUssRUFBRSxXQUFXO2FBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxxQ0FBTSxHQUFOLFVBQU8sV0FBbUIsRUFBRSxPQUFlO1FBQTNDLGlCQTZGQztRQTVGQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUM7YUFDNUIsU0FBUyxDQUNSLFVBQUMsT0FBWTtZQUNYLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMxRCxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbEUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNyQixLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUM7b0JBQ3pDLEtBQUssRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDO29CQUN4QixLQUFLLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQztpQkFDN0IsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDMUUsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDO2dCQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUMvRixLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDNUQsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDO2dCQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN4RixJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDdEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDO29CQUMxQyxLQUFLLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQztvQkFDekIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUM7aUJBQzlCLENBQUMsQ0FBQztnQkFDSCxLQUFJLENBQUMsbUJBQW1CLEdBQUc7b0JBQ3pCO3dCQUNFLEdBQUcsRUFBRSxTQUFTO3dCQUNkLEtBQUssRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDO3FCQUM5QjtpQkFDRixDQUFDO2FBQ0g7WUFDRCxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDdkIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDO29CQUMzQyxLQUFLLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQztvQkFDMUIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUM7aUJBQy9CLENBQUMsQ0FBQztnQkFDSCxLQUFJLENBQUMsZUFBZSxHQUFHO29CQUNyQjt3QkFDRSxHQUFHLEVBQUUsVUFBVTt3QkFDZixLQUFLLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQztxQkFDL0I7aUJBQ0YsQ0FBQzthQUNIO1lBQ0QsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ25CLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQztvQkFDdkMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ3RCLEtBQUssRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDO2lCQUMzQixDQUFDLENBQUM7Z0JBQ0gsS0FBSSxDQUFDLG1CQUFtQixHQUFHO29CQUN6Qjt3QkFDRSxHQUFHLEVBQUUsTUFBTTt3QkFDWCxLQUFLLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQztxQkFDM0I7aUJBQ0YsQ0FBQzthQUNIO1lBQ0QsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3ZCLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQztvQkFDM0MsS0FBSyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUM7b0JBQzFCLEtBQUssRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDO2lCQUMvQixDQUFDLENBQUM7Z0JBQ0gsS0FBSSxDQUFDLHNCQUFzQixHQUFHO29CQUM1Qjt3QkFDRSxHQUFHLEVBQUUsVUFBVTt3QkFDZixLQUFLLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQztxQkFDL0I7aUJBQ0YsQ0FBQzthQUNIO1lBQ0QsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQzFCLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQztvQkFDOUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUM7b0JBQzdCLEtBQUssRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUM7aUJBQ2xDLENBQUMsQ0FBQzthQUNKO1lBQ0QsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDO2dCQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNwRyxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUM7Z0JBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3ZHLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQWE7Z0JBQ3ZELElBQUksS0FBSyxLQUFLLE9BQU8sRUFBRTtvQkFDckIsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQ3RCLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUM1QztZQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNsQyxDQUFDLEVBQ0QsVUFBQyxLQUF3QjtZQUN2QixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFNLEdBQUcsR0FBb0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVDLElBQUksR0FBRyxFQUFFO2dCQUNQLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQzthQUN2RjtpQkFBTTtnQkFDTCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQzthQUN4RDtRQUNILENBQUMsQ0FDRixDQUFDO0lBQ04sQ0FBQztJQUVELDhDQUFlLEdBQWYsVUFBZ0IsTUFBVztRQUN6QixJQUFJLENBQUMsbUJBQW1CLEdBQUc7WUFDekI7Z0JBQ0UsR0FBRyxFQUFFLFNBQVM7Z0JBQ2QsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsV0FBVzthQUMzQztTQUNGLENBQUM7UUFDRixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUNELCtDQUFnQixHQUFoQixVQUFpQixNQUFXO1FBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUc7WUFDckI7Z0JBQ0UsR0FBRyxFQUFFLFVBQVU7Z0JBQ2YsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsV0FBVzthQUMzQztTQUNGLENBQUM7UUFDRixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUNELDJDQUFZLEdBQVosVUFBYSxNQUFXO1FBQ3RCLElBQUksQ0FBQyxtQkFBbUIsR0FBRztZQUN6QjtnQkFDRSxHQUFHLEVBQUUsTUFBTTtnQkFDWCxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxXQUFXO2FBQzNDO1NBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QsK0NBQWdCLEdBQWhCLFVBQWlCLE1BQVc7UUFDMUIsSUFBSSxDQUFDLHNCQUFzQixHQUFHO1lBQzVCO2dCQUNFLEdBQUcsRUFBRSxVQUFVO2dCQUNmLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVc7YUFDM0M7U0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCw2Q0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7WUFDeEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsTUFBTSxFQUFFLElBQUk7WUFDWixVQUFVLEVBQUUsSUFBSTtZQUNoQixhQUFhLEVBQUUsSUFBSTtTQUNwQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsOENBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO1lBQ3hCLE1BQU0sRUFBRSxJQUFJO1lBQ1osVUFBVSxFQUFFLElBQUk7WUFDaEIsYUFBYSxFQUFFLElBQUk7U0FDcEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELDBDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztZQUN4QixVQUFVLEVBQUUsSUFBSTtZQUNoQixhQUFhLEVBQUUsSUFBSTtTQUNwQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsOENBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO1lBQ3hCLGFBQWEsRUFBRSxJQUFJO1NBQ3BCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwwQ0FBVyxHQUFYLFVBQVksSUFBUztRQUFyQixpQkFnQkM7UUFmQyxJQUFNLElBQUksR0FBYSxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQzlDLFVBQUMsT0FBd0I7WUFDdkIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzlFLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDckMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2pHLENBQUMsRUFDRCxVQUFDLEtBQXNCO1lBQ3JCLEtBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzFDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM1RixDQUFDLENBQ0osQ0FBQztJQUNKLENBQUM7SUFFRCwwQ0FBVyxHQUFYLFVBQVksSUFBWTtRQUN0QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNsQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ3hDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzthQUM3QztpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN2QztTQUNGO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVELGtEQUFtQixHQUFuQixVQUFvQixJQUFZO1FBQzlCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ2xDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDeEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2FBQzdDO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQUEsaUJBK0NDO1FBOUNDLElBQU0sSUFBSSxHQUFRO1lBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLO1lBQ3RDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLO1lBQzlDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLO1lBQ3RELFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLO1lBQ3BELE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztZQUNsQyxVQUFVLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQztZQUM5QyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSztZQUNwRCxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSztZQUM1QyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7WUFDcEMsV0FBVyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUM7WUFDaEQsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDO1lBQ3RDLFlBQVksRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDO1lBQ2xELElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUM5QixRQUFRLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztZQUMxQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7WUFDdEMsWUFBWSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUM7WUFDbEQsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1lBQzVDLGVBQWUsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDO1NBQ3pELENBQUM7UUFDRixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxFQUFFO1lBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDbkQ7UUFDQSxpQkFBTSxRQUFRLFlBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBaUM7YUFDekUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUyxDQUFDLFVBQUMsUUFBeUI7WUFDbkMsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osUUFBUSxRQUFRLENBQUMsY0FBYyxFQUFFO29CQUMvQixLQUFLLFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO3dCQUN0QyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUM7NEJBQ3pDLE9BQU8sRUFBRSxJQUFJO3lCQUNkLENBQUMsQ0FBQzt3QkFDSCxNQUFNO29CQUNSLEtBQUssWUFBWSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7d0JBQ3ZDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsQ0FBQzs0QkFDL0MsMkJBQTJCLEVBQUUsSUFBSTt5QkFDbEMsQ0FBQyxDQUFDO3dCQUNILE1BQU07b0JBQ1IsS0FBSyxZQUFZLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTt3QkFDcEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2xFLE1BQU07b0JBQ1I7d0JBQ0UsTUFBTTtpQkFDVDthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDYixDQUFDOztnQkFsVWtCLFFBQVE7Z0JBQ2UsUUFBUSx1QkFBL0MsTUFBTSxTQUFDLFNBQVM7Z0RBQ2hCLE1BQU0sU0FBQyxrQkFBa0I7Z0JBQ0gsb0JBQW9COzs7Z0JBckM5QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFFM0Isb3hLQUE0Qzs7aUJBQzdDOzs7Z0JBdkJtQixRQUFRO2dCQVUxQixRQUFRLHVCQTRDTCxNQUFNLFNBQUMsU0FBUztnREFDaEIsTUFBTSxTQUFDLGtCQUFrQjtnQkF0Q3JCLG9CQUFvQjs7SUF3VzdCLDJCQUFDO0NBQUEsQUF0V0QsQ0FLMEMsaUJBQWlCLEdBaVcxRDtTQWpXWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdG9yLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBQUk9GSUxFX0lOREVYRURfREIsXG4gIFJlc3BvbnNlQ29kZSxcbiAgVVNFUl9JTkZPLFxuICBVc2VySW5mbyxcbiAgUGF0dGVybixcbn0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBIdHRwQmFzZU1vZGVsIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBBcGlCYXNlUmVzcG9uc2UgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEluZGV4ZWREQkZhY3RvcnlTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBCYXNlRm9ybUNvbXBvbmVudCwgU2VsZWN0UGFyYW1Nb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvbW1vbic7XG5pbXBvcnQgeyBBdXRoSW5kZXhlZERCU2VydmljZSB9IGZyb20gJ0Bkb25na2FwL2RvLWF1dGgnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1wcm9maWxlLXBhZ2UnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9maWxlLXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZvcm1Db21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGltYWdlOiBzdHJpbmc7XG4gIHB1YmxpYyBmb3JtR3JvdXBJbWFnZTogRm9ybUdyb3VwO1xuICBwdWJsaWMgdXBsb2FkRmluaXNoZWQ6IGJvb2xlYW47XG4gIHB1YmxpYyBwYXR0ZXJuRW1haWw6IHN0cmluZyA9IFBhdHRlcm4uRU1BSUw7XG4gIHB1YmxpYyBwYXR0ZXJuUGhvbmVOdW1iZXI6IHN0cmluZyA9IFBhdHRlcm4uUEhPTkVfTlVNQkVSO1xuICBwdWJsaWMgbWluTGVuZ3RoOiBudW1iZXIgPSA1O1xuICBwdWJsaWMgZGlzYWJsZWRVcGxvYWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHByb3ZpZGVyOiBzdHJpbmcgPSAnbG9jYWwnO1xuXG4gIHB1YmxpYyBhcGlTZWxlY3RHZW5kZXI6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBwYXJhbVNlbGVjdEdlbmRlcjogU2VsZWN0UGFyYW1Nb2RlbFtdO1xuXG4gIHB1YmxpYyBhcGlTZWxlY3RDb3VudHJ5OiBIdHRwQmFzZU1vZGVsO1xuXG4gIHB1YmxpYyBhcGlTZWxlY3RQcm92aW5jZTogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIHBhcmFtU2VsZWN0UHJvdmluY2U6IFNlbGVjdFBhcmFtTW9kZWxbXTtcblxuICBwdWJsaWMgYXBpU2VsZWN0Q2l0eTogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIHBhcmFtU2VsZWN0Q2l0eTogU2VsZWN0UGFyYW1Nb2RlbFtdO1xuXG4gIHB1YmxpYyBhcGlTZWxlY3REaXN0cmljdDogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIHBhcmFtU2VsZWN0RGlzdHJpY3Q6IFNlbGVjdFBhcmFtTW9kZWxbXTtcblxuICBwdWJsaWMgYXBpU2VsZWN0U3ViRGlzdHJpY3Q6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBwYXJhbVNlbGVjdFN1YkRpc3RyaWN0OiBTZWxlY3RQYXJhbU1vZGVsW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBASW5qZWN0KFVTRVJfSU5GTykgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlckluZm8sXG4gICAgQEluamVjdChQUk9GSUxFX0lOREVYRURfREIpIHByaXZhdGUgcHJvZmlsZUluZGV4ZWREQjogSW5kZXhlZERCRmFjdG9yeVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoSW5kZXhlZERCOiBBdXRoSW5kZXhlZERCU2VydmljZSkge1xuICAgIHN1cGVyKGluamVjdG9yLFxuICAgICAge1xuICAgICAgICAndXNlcm5hbWUnOiBbe1xuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICB9XSxcbiAgICAgICAgJ25hbWUnOiBbXSxcbiAgICAgICAgJ2lkTnVtYmVyJzogW10sXG4gICAgICAgICdwbGFjZU9mQmlydGgnOiBbXSxcbiAgICAgICAgJ2RhdGVPZkJpcnRoJzogW10sXG4gICAgICAgICdnZW5kZXInOiBbXSxcbiAgICAgICAgJ2VtYWlsJzogW10sXG4gICAgICAgICdwaG9uZU51bWJlcic6IFtdLFxuICAgICAgICAnYWRkcmVzcyc6IFtudWxsLCBbVmFsaWRhdG9ycy5taW5MZW5ndGgoNSldXSxcbiAgICAgICAgJ2NvdW50cnknOiBbXSxcbiAgICAgICAgJ3Byb3ZpbmNlJzogW10sXG4gICAgICAgICdjaXR5JzogW10sXG4gICAgICAgICdkaXN0cmljdCc6IFtdLFxuICAgICAgICAnc3ViRGlzdHJpY3QnOiBbXSxcbiAgICAgIH0pO1xuICAgIHRoaXMuZm9ybUdyb3VwSW1hZ2UgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICdpbWFnZSc6IFtdLFxuICAgIH0pO1xuICAgIHRoaXMuYXBpU2VsZWN0R2VuZGVyID0gdGhpcy5hcGlbJ21hc3RlciddWydzZWxlY3QtcGFyYW1ldGVyJ107XG4gICAgdGhpcy5hcGlTZWxlY3RDb3VudHJ5ID0gdGhpcy5hcGlbJ21hc3RlciddWydzZWxlY3QtY291bnRyeSddO1xuICAgIHRoaXMuYXBpU2VsZWN0UHJvdmluY2UgPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ3NlbGVjdC1wcm92aW5jZSddO1xuICAgIHRoaXMuYXBpU2VsZWN0Q2l0eSA9IHRoaXMuYXBpWydtYXN0ZXInXVsnc2VsZWN0LWNpdHknXTtcbiAgICB0aGlzLmFwaVNlbGVjdERpc3RyaWN0ID0gdGhpcy5hcGlbJ21hc3RlciddWydzZWxlY3QtZGlzdHJpY3QnXTtcbiAgICB0aGlzLmFwaVNlbGVjdFN1YkRpc3RyaWN0ID0gdGhpcy5hcGlbJ21hc3RlciddWydzZWxlY3Qtc3ViZGlzdHJpY3QnXTtcbiAgICB0aGlzLmF1dGhJbmRleGVkREIuZ2V0RW5jKCdwcm92aWRlcicpLnRoZW4oKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gJ2xvY2FsJykge1xuICAgICAgICB0aGlzLnByb3ZpZGVyID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydlbWFpbCddLmRpc2FibGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMub25Jbml0KCdwcm9maWxlJywgJ2dldC1wcm9maWxlJyk7XG4gICAgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wcm9maWxlSW5kZXhlZERCLmdldCgnaW1hZ2UtYjY0JyksXG4gICAgICB0aGlzLnByb2ZpbGVJbmRleGVkREIuZ2V0KCdpbWFnZScpLFxuICAgIF0pLnRoZW4oKHZhbHVlOiBhbnlbXSkgPT4ge1xuICAgICAgaWYgKHZhbHVlWzBdKVxuICAgICAgICB0aGlzLmltYWdlID0gdmFsdWVbMF07XG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB2YWx1ZVsxXTtcbiAgICB9KTtcbiAgICB0aGlzLnBhcmFtU2VsZWN0R2VuZGVyID0gW3tcbiAgICAgIGtleTogJ3BhcmFtZXRlckdyb3VwQ29kZScsXG4gICAgICB2YWx1ZTogJ0dFTkRFUicsXG4gICAgfV07XG4gICAgdGhpcy5wYXJhbVNlbGVjdFByb3ZpbmNlID0gW3tcbiAgICAgIGtleTogJ2NvdW50cnknLFxuICAgICAgdmFsdWU6ICd1bmRlZmluZWQnLFxuICAgIH1dO1xuICAgIHRoaXMucGFyYW1TZWxlY3RDaXR5ID0gW3tcbiAgICAgIGtleTogJ3Byb3ZpbmNlJyxcbiAgICAgIHZhbHVlOiAndW5kZWZpbmVkJyxcbiAgICB9XTtcbiAgICB0aGlzLnBhcmFtU2VsZWN0RGlzdHJpY3QgPSBbe1xuICAgICAga2V5OiAnY2l0eScsXG4gICAgICB2YWx1ZTogJ3VuZGVmaW5lZCcsXG4gICAgfV07XG4gICAgdGhpcy5wYXJhbVNlbGVjdFN1YkRpc3RyaWN0ID0gW3tcbiAgICAgIGtleTogJ2Rpc3RyaWN0JyxcbiAgICAgIHZhbHVlOiAndW5kZWZpbmVkJyxcbiAgICB9XTtcbiAgfVxuXG4gIG9uSW5pdChzZXJ2aWNlTmFtZTogc3RyaW5nLCBhcGlOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmdGb3JtID0gdHJ1ZTtcbiAgICB0aGlzLmV4ZWMoc2VydmljZU5hbWUsIGFwaU5hbWUpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoc3VjY2VzczogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nRm9ybSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWyduYW1lJ10uc2V0VmFsdWUoc3VjY2Vzc1snbmFtZSddKTtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1sndXNlcm5hbWUnXS5zZXRWYWx1ZShzdWNjZXNzWyd1c2VybmFtZSddKTtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snaWROdW1iZXInXS5zZXRWYWx1ZShzdWNjZXNzWydpZE51bWJlciddKTtcbiAgICAgICAgICBpZiAoc3VjY2Vzc1snZ2VuZGVyJ10pIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydnZW5kZXInXS5zZXRWYWx1ZSh7XG4gICAgICAgICAgICAgIGxhYmVsOiBzdWNjZXNzWydnZW5kZXInXSxcbiAgICAgICAgICAgICAgdmFsdWU6IHN1Y2Nlc3NbJ2dlbmRlckNvZGUnXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydwbGFjZU9mQmlydGgnXS5zZXRWYWx1ZShzdWNjZXNzWydwbGFjZU9mQmlydGgnXSk7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3NbJ2RhdGVPZkJpcnRoJ10pIHRoaXMuZm9ybUdyb3VwLmdldCgnZGF0ZU9mQmlydGgnKS5zZXRWYWx1ZShzdWNjZXNzWydkYXRlT2ZCaXJ0aCddKTtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snZW1haWwnXS5zZXRWYWx1ZShzdWNjZXNzWydlbWFpbCddKTtcbiAgICAgICAgICBpZiAoc3VjY2Vzc1snYWRkcmVzcyddKSB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snYWRkcmVzcyddLnNldFZhbHVlKHN1Y2Nlc3NbJ2FkZHJlc3MnXSk7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3NbJ2NvdW50cnknXSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ2NvdW50cnknXS5zZXRWYWx1ZSh7XG4gICAgICAgICAgICAgIGxhYmVsOiBzdWNjZXNzWydjb3VudHJ5J10sXG4gICAgICAgICAgICAgIHZhbHVlOiBzdWNjZXNzWydjb3VudHJ5Q29kZSddXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucGFyYW1TZWxlY3RQcm92aW5jZSA9IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ2NvdW50cnknLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBzdWNjZXNzWydjb3VudHJ5Q29kZSddLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN1Y2Nlc3NbJ3Byb3ZpbmNlJ10pIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydwcm92aW5jZSddLnNldFZhbHVlKHtcbiAgICAgICAgICAgICAgbGFiZWw6IHN1Y2Nlc3NbJ3Byb3ZpbmNlJ10sXG4gICAgICAgICAgICAgIHZhbHVlOiBzdWNjZXNzWydwcm92aW5jZUNvZGUnXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnBhcmFtU2VsZWN0Q2l0eSA9IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ3Byb3ZpbmNlJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3VjY2Vzc1sncHJvdmluY2VDb2RlJ10sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3VjY2Vzc1snY2l0eSddKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snY2l0eSddLnNldFZhbHVlKHtcbiAgICAgICAgICAgICAgbGFiZWw6IHN1Y2Nlc3NbJ2NpdHknXSxcbiAgICAgICAgICAgICAgdmFsdWU6IHN1Y2Nlc3NbJ2NpdHlDb2RlJ11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5wYXJhbVNlbGVjdERpc3RyaWN0ID0gW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAnY2l0eScsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN1Y2Nlc3NbJ2NpdHlDb2RlJ10sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3VjY2Vzc1snZGlzdHJpY3QnXSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ2Rpc3RyaWN0J10uc2V0VmFsdWUoe1xuICAgICAgICAgICAgICBsYWJlbDogc3VjY2Vzc1snZGlzdHJpY3QnXSxcbiAgICAgICAgICAgICAgdmFsdWU6IHN1Y2Nlc3NbJ2Rpc3RyaWN0Q29kZSddXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucGFyYW1TZWxlY3RTdWJEaXN0cmljdCA9IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ2Rpc3RyaWN0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3VjY2Vzc1snZGlzdHJpY3RDb2RlJ10sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3VjY2Vzc1snc3ViRGlzdHJpY3QnXSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3N1YkRpc3RyaWN0J10uc2V0VmFsdWUoe1xuICAgICAgICAgICAgICBsYWJlbDogc3VjY2Vzc1snc3ViRGlzdHJpY3QnXSxcbiAgICAgICAgICAgICAgdmFsdWU6IHN1Y2Nlc3NbJ3N1YkRpc3RyaWN0Q29kZSddXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN1Y2Nlc3NbJ3Bob25lTnVtYmVyJ10pIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydwaG9uZU51bWJlciddLnNldFZhbHVlKHN1Y2Nlc3NbJ3Bob25lTnVtYmVyJ10pO1xuICAgICAgICAgIGlmIChzdWNjZXNzWydtb2JpbGVOdW1iZXInXSkgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ21vYmlsZU51bWJlciddLnNldFZhbHVlKHN1Y2Nlc3NbJ21vYmlsZU51bWJlciddKTtcbiAgICAgICAgICB0aGlzLmF1dGhJbmRleGVkREIuZ2V0RW5jKCdwcm92aWRlcicpLnRoZW4oKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJ2xvY2FsJykge1xuICAgICAgICAgICAgICB0aGlzLnByb3ZpZGVyID0gdmFsdWU7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydlbWFpbCddLmRpc2FibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5tYXJrQXNQcmlzdGluZSgpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nRm9ybSA9IHRydWU7XG4gICAgICAgICAgY29uc3QgZXJyOiBBcGlCYXNlUmVzcG9uc2UgPSBlcnJvclsnZXJyb3InXTtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihlcnIucmVzcFN0YXR1c01lc3NhZ2VbZXJyLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSwgbnVsbCwgJ2RhbmdlcicpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihlcnIgYXMgYW55LCB0cnVlLCBudWxsLCAnZGFuZ2VyJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgKTtcbiAgfVxuXG4gIG9uU2VsZWN0Q291bnRyeShzZWxlY3Q6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1TZWxlY3RQcm92aW5jZSA9IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAnY291bnRyeScsXG4gICAgICAgIHZhbHVlOiBzZWxlY3QgPyBzZWxlY3QudmFsdWUgOiAndW5kZWZpbmVkJyxcbiAgICAgIH0sXG4gICAgXTtcbiAgICB0aGlzLm9uQ2xlYXJQcm92aW5jZSgpO1xuICB9XG4gIG9uU2VsZWN0UHJvdmluY2Uoc2VsZWN0OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnBhcmFtU2VsZWN0Q2l0eSA9IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAncHJvdmluY2UnLFxuICAgICAgICB2YWx1ZTogc2VsZWN0ID8gc2VsZWN0LnZhbHVlIDogJ3VuZGVmaW5lZCcsXG4gICAgICB9LFxuICAgIF07XG4gICAgdGhpcy5vbkNsZWFyUHJvdmluY2UoKTtcbiAgfVxuICBvblNlbGVjdENpdHkoc2VsZWN0OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnBhcmFtU2VsZWN0RGlzdHJpY3QgPSBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ2NpdHknLFxuICAgICAgICB2YWx1ZTogc2VsZWN0ID8gc2VsZWN0LnZhbHVlIDogJ3VuZGVmaW5lZCcsXG4gICAgICB9LFxuICAgIF07XG4gICAgdGhpcy5vbkNsZWFyQ2l0eSgpO1xuICB9XG4gIG9uU2VsZWN0RGlzdHJpY3Qoc2VsZWN0OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnBhcmFtU2VsZWN0U3ViRGlzdHJpY3QgPSBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ2Rpc3RyaWN0JyxcbiAgICAgICAgdmFsdWU6IHNlbGVjdCA/IHNlbGVjdC52YWx1ZSA6ICd1bmRlZmluZWQnLFxuICAgICAgfSxcbiAgICBdO1xuICAgIHRoaXMub25DbGVhckRpc3RyaWN0KCk7XG4gIH1cblxuICBvbkNsZWFyQ291bnRyeSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHtcbiAgICAgICdwcm92aW5jZSc6IG51bGwsXG4gICAgICAnY2l0eSc6IG51bGwsXG4gICAgICAnZGlzdHJpY3QnOiBudWxsLFxuICAgICAgJ3N1YkRpc3RyaWN0JzogbnVsbCxcbiAgICB9KTtcbiAgfVxuICBvbkNsZWFyUHJvdmluY2UoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7XG4gICAgICAnY2l0eSc6IG51bGwsXG4gICAgICAnZGlzdHJpY3QnOiBudWxsLFxuICAgICAgJ3N1YkRpc3RyaWN0JzogbnVsbCxcbiAgICB9KTtcbiAgfVxuICBvbkNsZWFyQ2l0eSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHtcbiAgICAgICdkaXN0cmljdCc6IG51bGwsXG4gICAgICAnc3ViRGlzdHJpY3QnOiBudWxsLFxuICAgIH0pO1xuICB9XG4gIG9uQ2xlYXJEaXN0cmljdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHtcbiAgICAgICdzdWJEaXN0cmljdCc6IG51bGwsXG4gICAgfSk7XG4gIH1cblxuICB1cGxvYWRJbWFnZShmaWxlOiBhbnkpIHtcbiAgICBjb25zdCBkYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGRhdGEuYXBwZW5kKCdwaG90bycsIGZpbGUpO1xuICAgIHRoaXMuZm9ybUdyb3VwSW1hZ2UuZ2V0KCdpbWFnZScpLmRpc2FibGUoKTtcbiAgICB0aGlzLmV4ZWMoJ2ZpbGUnLCAncGhvdG8tcHJvZmlsZScsIGRhdGEpLnN1YnNjcmliZShcbiAgICAgICAgKHN1Y2Nlc3M6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UudXBkYXRlUGhvdG9Vc2VyKGZpbGUsIHN1Y2Nlc3MucmVzcFN0YXR1c01lc3NhZ2VbJ2NoZWNrc3VtJ10pO1xuICAgICAgICAgIHRoaXMudXBsb2FkRmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwSW1hZ2UubWFya0FzUHJpc3RpbmUoKTtcbiAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihzdWNjZXNzLnJlc3BTdGF0dXNNZXNzYWdlW3N1Y2Nlc3MucmVzcFN0YXR1c0NvZGVdLCB0cnVlLCBudWxsLCAnc3VjY2VzcycpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3I6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwSW1hZ2UuZ2V0KCdpbWFnZScpLmVuYWJsZSgpO1xuICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVycm9yLnJlc3BTdGF0dXNNZXNzYWdlW2Vycm9yLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSwgbnVsbCwgJ2RhbmdlcicpO1xuICAgICAgICB9LFxuICAgICk7XG4gIH1cblxuICB2YWx1ZVNlbGVjdChwcm9wOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5nZXQocHJvcCkudmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmZvcm1Hcm91cC5nZXQocHJvcCkudmFsdWUubGFiZWwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZS5sYWJlbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1Hcm91cC5nZXQocHJvcCkudmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHZhbHVlU2VsZWN0Tm9uTGFiZWwocHJvcDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuZ2V0KHByb3ApLnZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5mb3JtR3JvdXAuZ2V0KHByb3ApLnZhbHVlLnZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1Hcm91cC5nZXQocHJvcCkudmFsdWUudmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgbmFtZTogdGhpcy5mb3JtR3JvdXAuZ2V0KCduYW1lJykudmFsdWUsXG4gICAgICBpZE51bWJlcjogdGhpcy5mb3JtR3JvdXAuZ2V0KCdpZE51bWJlcicpLnZhbHVlLFxuICAgICAgcGxhY2VPZkJpcnRoOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ3BsYWNlT2ZCaXJ0aCcpLnZhbHVlLFxuICAgICAgZGF0ZU9mQmlydGg6IHRoaXMuZm9ybUdyb3VwLmdldCgnZGF0ZU9mQmlydGgnKS52YWx1ZSxcbiAgICAgIGdlbmRlcjogdGhpcy52YWx1ZVNlbGVjdCgnZ2VuZGVyJyksXG4gICAgICBnZW5kZXJDb2RlOiB0aGlzLnZhbHVlU2VsZWN0Tm9uTGFiZWwoJ2dlbmRlcicpLFxuICAgICAgcGhvbmVOdW1iZXI6IHRoaXMuZm9ybUdyb3VwLmdldCgncGhvbmVOdW1iZXInKS52YWx1ZSxcbiAgICAgIGFkZHJlc3M6IHRoaXMuZm9ybUdyb3VwLmdldCgnYWRkcmVzcycpLnZhbHVlLFxuICAgICAgY291bnRyeTogdGhpcy52YWx1ZVNlbGVjdCgnY291bnRyeScpLFxuICAgICAgY291bnRyeUNvZGU6IHRoaXMudmFsdWVTZWxlY3ROb25MYWJlbCgnY291bnRyeScpLFxuICAgICAgcHJvdmluY2U6IHRoaXMudmFsdWVTZWxlY3QoJ3Byb3ZpbmNlJyksXG4gICAgICBwcm92aW5jZUNvZGU6IHRoaXMudmFsdWVTZWxlY3ROb25MYWJlbCgncHJvdmluY2UnKSxcbiAgICAgIGNpdHk6IHRoaXMudmFsdWVTZWxlY3QoJ2NpdHknKSxcbiAgICAgIGNpdHlDb2RlOiB0aGlzLnZhbHVlU2VsZWN0Tm9uTGFiZWwoJ2NpdHknKSxcbiAgICAgIGRpc3RyaWN0OiB0aGlzLnZhbHVlU2VsZWN0KCdkaXN0cmljdCcpLFxuICAgICAgZGlzdHJpY3RDb2RlOiB0aGlzLnZhbHVlU2VsZWN0Tm9uTGFiZWwoJ2Rpc3RyaWN0JyksXG4gICAgICBzdWJEaXN0cmljdDogdGhpcy52YWx1ZVNlbGVjdCgnc3ViRGlzdHJpY3QnKSxcbiAgICAgIHN1YkRpc3RyaWN0Q29kZTogdGhpcy52YWx1ZVNlbGVjdE5vbkxhYmVsKCdzdWJEaXN0cmljdCcpLFxuICAgIH07XG4gICAgaWYgKHRoaXMucHJvdmlkZXIgPT09ICdsb2NhbCcpIHtcbiAgICAgIGRhdGFbJ2VtYWlsJ10gPSB0aGlzLmZvcm1Hcm91cC5nZXQoJ2VtYWlsJykudmFsdWU7XG4gICAgfVxuICAgIChzdXBlci5vblN1Ym1pdChkYXRhLCAncHJvZmlsZScsICdjaGFuZ2UtcHJvZmlsZScpIGFzIE9ic2VydmFibGU8QXBpQmFzZVJlc3BvbnNlPilcbiAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZXNwb25zZS5yZXNwU3RhdHVzQ29kZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBSZXNwb25zZUNvZGUuRVJSX1NDUjAwMDgudG9TdHJpbmcoKTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ2VtYWlsJ10uc2V0RXJyb3JzKHtcbiAgICAgICAgICAgICAgICAgICAgICAnZW1haWwnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIFJlc3BvbnNlQ29kZS5FUlJfU0NSMDAwN0EudG9TdHJpbmcoKTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3Bob25lTnVtYmVyJ10uc2V0RXJyb3JzKHtcbiAgICAgICAgICAgICAgICAgICAgICAnZXJyb3IucGF0dGVybi5waG9uZU51bWJlcic6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgUmVzcG9uc2VDb2RlLk9LX1NDUjAwNC50b1N0cmluZygpOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZU5hbWVVc2VyKHRoaXMuZm9ybUdyb3VwLmdldCgnbmFtZScpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==