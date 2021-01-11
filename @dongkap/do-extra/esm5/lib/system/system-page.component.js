import { __extends } from "tslib";
import { Component, Injector, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { PROFILE_INDEXED_DB, ResponseCode, USER_INFO, UserInfo, Pattern, } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-common';
import { AuthIndexedDBService } from '@dongkap/do-auth';
var SystemPageComponent = /** @class */ (function (_super) {
    __extends(SystemPageComponent, _super);
    function SystemPageComponent(injector, userService, profileIndexedDB, authIndexedDB) {
        var _this = _super.call(this, injector, {
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
    SystemPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onInit('profile', 'get-profile-system');
        Promise.all([
            this.profileIndexedDB.get('image-b64'),
            this.profileIndexedDB.get('image'),
        ]).then(function (value) {
            if (value[0])
                _this.image = value[0];
            else
                _this.image = value[1];
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
    };
    SystemPageComponent.prototype.onInit = function (serviceName, apiName) {
        var _this = this;
        this.loadingForm = true;
        this.exec(serviceName, apiName)
            .subscribe(function (success) {
            _this.loadingForm = false;
            _this.formGroup.controls['name'].setValue(success['name']);
            _this.formGroup.controls['username'].setValue(success['username']);
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
    SystemPageComponent.prototype.onSelectCountry = function (select) {
        this.paramSelectProvince = [
            {
                key: 'country',
                value: select ? select.value : 'undefined',
            },
        ];
        this.onClearProvince();
    };
    SystemPageComponent.prototype.onSelectProvince = function (select) {
        this.paramSelectCity = [
            {
                key: 'province',
                value: select ? select.value : 'undefined',
            },
        ];
        this.onClearProvince();
    };
    SystemPageComponent.prototype.onSelectCity = function (select) {
        this.paramSelectDistrict = [
            {
                key: 'city',
                value: select ? select.value : 'undefined',
            },
        ];
        this.onClearCity();
    };
    SystemPageComponent.prototype.onSelectDistrict = function (select) {
        this.paramSelectSubDistrict = [
            {
                key: 'district',
                value: select ? select.value : 'undefined',
            },
        ];
        this.onClearDistrict();
    };
    SystemPageComponent.prototype.onClearCountry = function () {
        this.formGroup.patchValue({
            'province': null,
            'city': null,
            'district': null,
            'subDistrict': null,
        });
    };
    SystemPageComponent.prototype.onClearProvince = function () {
        this.formGroup.patchValue({
            'city': null,
            'district': null,
            'subDistrict': null,
        });
    };
    SystemPageComponent.prototype.onClearCity = function () {
        this.formGroup.patchValue({
            'district': null,
            'subDistrict': null,
        });
    };
    SystemPageComponent.prototype.onClearDistrict = function () {
        this.formGroup.patchValue({
            'subDistrict': null,
        });
    };
    SystemPageComponent.prototype.uploadImage = function (file) {
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
    SystemPageComponent.prototype.valueSelect = function (prop) {
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
    SystemPageComponent.prototype.valueSelectNonLabel = function (prop) {
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
    SystemPageComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = {
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
        _super.prototype.onSubmit.call(this, data, 'profile', 'change-profile-system')
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
    SystemPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: UserInfo, decorators: [{ type: Inject, args: [USER_INFO,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [PROFILE_INDEXED_DB,] }] },
        { type: AuthIndexedDBService }
    ]; };
    SystemPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-system-page',
                    template: "<do-page-outlet [header]=\"'Profile'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n      <form [formGroup]=\"formGroupImage\">\n        <do-image-upload\n          [radius]=\"50\"\n          [skeleton]=\"loadingForm\"\n          [image]=\"image\"\n          [uploadFn]=\"uploadFinished\"\n          (onUpload)=\"uploadImage($event)\"\n          formControlName=\"image\">\n        </do-image-upload>\n      </form>\n    </div>\n    <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'name'\"\n          [label]=\"'Name'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"name\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'email'\"\n          [label]=\"'Email'\"\n          [required]=\"true\"\n          [pattern]=\"patternEmail\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"email\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'username'\"\n          [label]=\"'Username'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"username\">\n        </do-input-text>\n        <div class=\"font-row\">\n          <div class=\"header\">\n            <div class=\"name bold\">{{'label.contact-person' | translate}}</div>\n          </div>\n          <do-input-text\n            [name]=\"'phoneNumber'\"\n            [label]=\"'Telephone'\"\n            [required]=\"true\"\n            [pattern]=\"patternPhoneNumber\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"phoneNumber\">\n          </do-input-text>\n          <do-textarea\n            [name]=\"'address'\"\n            [label]=\"'Address'\"\n            [required]=\"true\"\n            [minLength]=\"minLength\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"address\">\n          </do-textarea>\n          <do-select\n            [name]=\"'country'\"\n            [label]=\"'Country'\"\n            [api]=\"apiSelectCountry\"\n            [skeleton]=\"loadingForm\"\n            (onSelect)=\"onSelectCountry($event)\"\n            (onClear)=\"onClearCountry()\"\n            formControlName=\"country\">\n          </do-select>\n          <do-select\n            [name]=\"'province'\"\n            [label]=\"'Province'\"\n            [api]=\"apiSelectProvince\"\n            [queryParam]=\"paramSelectProvince\"\n            [skeleton]=\"loadingForm\"\n            (onSelect)=\"onSelectProvince($event)\"\n            (onClear)=\"onClearProvince()\"\n            formControlName=\"province\">\n          </do-select>\n          <do-select\n            [name]=\"'city'\"\n            [label]=\"'City'\"\n            [api]=\"apiSelectCity\"\n            [queryParam]=\"paramSelectCity\"\n            [skeleton]=\"loadingForm\"\n            (onSelect)=\"onSelectCity($event)\"\n            (onClear)=\"onClearCity()\"\n            formControlName=\"city\">\n          </do-select>\n          <do-select\n            [name]=\"'district'\"\n            [label]=\"'District'\"\n            [api]=\"apiSelectDistrict\"\n            [queryParam]=\"paramSelectDistrict\"\n            [skeleton]=\"loadingForm\"\n            (onSelect)=\"onSelectDistrict($event)\"\n            (onClear)=\"onClearDistrict()\"\n            formControlName=\"district\">\n          </do-select>\n          <do-select\n            [name]=\"'subDistrict'\"\n            [label]=\"'Sub District'\"\n            [api]=\"apiSelectSubDistrict\"\n            [queryParam]=\"paramSelectSubDistrict\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"subDistrict\">\n          </do-select>\n        </div>\n        <do-button-submit\n          (onSubmit)=\"onSubmit()\"\n          [name]=\"'Update Profile'\"\n          [disabledButton]=\"disabled\"\n          [formGroupButton]=\"formGroup\"\n          [skeleton]=\"loadingForm\">\n        </do-button-submit>\n      </form>\n    </div>\n  </div>\n</do-page-outlet>\n",
                    styles: [".nb-theme-default :host .font-row{margin-top:2rem}.nb-theme-default :host .font-row:first-child{margin-bottom:2rem}.nb-theme-default :host .font-row .header{text-align:right;color:#8f9bb3;font-family:Open Sans,sans-serif;font-size:.9rem;font-weight:100;line-height:1rem;align-items:baseline}.nb-theme-default :host .font-row p{margin:0}.nb-theme-default :host .header{display:flex;flex-wrap:wrap;align-items:center;padding-bottom:1rem;margin-bottom:1rem;border-bottom:1px solid #edf1f7}.nb-theme-default :host .header:last-child{border-bottom:none}.nb-theme-default :host .header div:first-child{flex:2;-ms-flex:2 1 auto;line-height:1;align-items:flex-end}.nb-theme-default :host .header div:first-child h1,.nb-theme-default :host .header div:first-child h2,.nb-theme-default :host .header div:first-child h3,.nb-theme-default :host .header div:first-child h4,.nb-theme-default :host .header div:first-child h5,.nb-theme-default :host .header div:first-child h6{margin-bottom:0}.nb-theme-default :host .header .variants{flex:1;-ms-flex:1 1 auto;display:flex;justify-content:space-between;align-items:flex-end}.nb-theme-default :host .header .variants span{padding-right:1rem;padding-left:1rem}.nb-theme-default :host .header .detail{flex:1;display:flex}.nb-theme-dark :host .font-row{margin-top:2rem}.nb-theme-dark :host .font-row:first-child{margin-bottom:2rem}.nb-theme-dark :host .font-row .header{text-align:right;color:#8f9bb3;font-family:Open Sans,sans-serif;font-size:.9rem;font-weight:100;line-height:1rem;align-items:baseline}.nb-theme-dark :host .font-row p{margin:0}.nb-theme-dark :host .header{display:flex;flex-wrap:wrap;align-items:center;padding-bottom:1rem;margin-bottom:1rem;border-bottom:1px solid #151a30}.nb-theme-dark :host .header:last-child{border-bottom:none}.nb-theme-dark :host .header div:first-child{flex:2;-ms-flex:2 1 auto;line-height:1;align-items:flex-end}.nb-theme-dark :host .header div:first-child h1,.nb-theme-dark :host .header div:first-child h2,.nb-theme-dark :host .header div:first-child h3,.nb-theme-dark :host .header div:first-child h4,.nb-theme-dark :host .header div:first-child h5,.nb-theme-dark :host .header div:first-child h6{margin-bottom:0}.nb-theme-dark :host .header .variants{flex:1;-ms-flex:1 1 auto;display:flex;justify-content:space-between;align-items:flex-end}.nb-theme-dark :host .header .variants span{padding-right:1rem;padding-left:1rem}.nb-theme-dark :host .header .detail{flex:1;display:flex}.nb-theme-cosmic :host .font-row{margin-top:2rem}.nb-theme-cosmic :host .font-row:first-child{margin-bottom:2rem}.nb-theme-cosmic :host .font-row .header{text-align:right;color:#8f9bb3;font-family:Open Sans,sans-serif;font-size:.9rem;font-weight:100;line-height:1rem;align-items:baseline}.nb-theme-cosmic :host .font-row p{margin:0}.nb-theme-cosmic :host .header{display:flex;flex-wrap:wrap;align-items:center;padding-bottom:1rem;margin-bottom:1rem;border-bottom:1px solid #1b1b38}.nb-theme-cosmic :host .header:last-child{border-bottom:none}.nb-theme-cosmic :host .header div:first-child{flex:2;-ms-flex:2 1 auto;line-height:1;align-items:flex-end}.nb-theme-cosmic :host .header div:first-child h1,.nb-theme-cosmic :host .header div:first-child h2,.nb-theme-cosmic :host .header div:first-child h3,.nb-theme-cosmic :host .header div:first-child h4,.nb-theme-cosmic :host .header div:first-child h5,.nb-theme-cosmic :host .header div:first-child h6{margin-bottom:0}.nb-theme-cosmic :host .header .variants{flex:1;-ms-flex:1 1 auto;display:flex;justify-content:space-between;align-items:flex-end}.nb-theme-cosmic :host .header .variants span{padding-right:1rem;padding-left:1rem}.nb-theme-cosmic :host .header .detail{flex:1;display:flex}.nb-theme-corporate :host .font-row{margin-top:2rem}.nb-theme-corporate :host .font-row:first-child{margin-bottom:2rem}.nb-theme-corporate :host .font-row .header{text-align:right;color:#8f9bb3;font-family:Open Sans,sans-serif;font-size:.9rem;font-weight:100;line-height:1rem;align-items:baseline}.nb-theme-corporate :host .font-row p{margin:0}.nb-theme-corporate :host .header{display:flex;flex-wrap:wrap;align-items:center;padding-bottom:1rem;margin-bottom:1rem;border-bottom:1px solid #edf1f7}.nb-theme-corporate :host .header:last-child{border-bottom:none}.nb-theme-corporate :host .header div:first-child{flex:2;-ms-flex:2 1 auto;line-height:1;align-items:flex-end}.nb-theme-corporate :host .header div:first-child h1,.nb-theme-corporate :host .header div:first-child h2,.nb-theme-corporate :host .header div:first-child h3,.nb-theme-corporate :host .header div:first-child h4,.nb-theme-corporate :host .header div:first-child h5,.nb-theme-corporate :host .header div:first-child h6{margin-bottom:0}.nb-theme-corporate :host .header .variants{flex:1;-ms-flex:1 1 auto;display:flex;justify-content:space-between;align-items:flex-end}.nb-theme-corporate :host .header .variants span{padding-right:1rem;padding-left:1rem}.nb-theme-corporate :host .header .detail{flex:1;display:flex}"]
                },] }
    ];
    SystemPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: UserInfo, decorators: [{ type: Inject, args: [USER_INFO,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [PROFILE_INDEXED_DB,] }] },
        { type: AuthIndexedDBService }
    ]; };
    return SystemPageComponent;
}(BaseFormComponent));
export { SystemPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tZXh0cmEvIiwic291cmNlcyI6WyJsaWIvc3lzdGVtL3N5c3RlbS1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUd2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osU0FBUyxFQUNULFFBQVEsRUFDUixPQUFPLEdBQ1IsTUFBTSxrQkFBa0IsQ0FBQztBQUkxQixPQUFPLEVBQUUsaUJBQWlCLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFeEQ7SUFLeUMsdUNBQXNCO0lBeUI3RCw2QkFDUyxRQUFrQixFQUNFLFdBQXFCLEVBQ1osZ0JBQXlDLEVBQ3JFLGFBQW1DO1FBSjdDLFlBS0Usa0JBQU0sUUFBUSxFQUNaO1lBQ0UsVUFBVSxFQUFFLENBQUM7b0JBQ1gsS0FBSyxFQUFFLElBQUk7b0JBQ1gsUUFBUSxFQUFFLElBQUk7aUJBQ2YsQ0FBQztZQUNGLE1BQU0sRUFBRSxFQUFFO1lBQ1YsT0FBTyxFQUFFLEVBQUU7WUFDWCxhQUFhLEVBQUUsRUFBRTtZQUNqQixTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsU0FBUyxFQUFFLEVBQUU7WUFDYixVQUFVLEVBQUUsRUFBRTtZQUNkLE1BQU0sRUFBRSxFQUFFO1lBQ1YsVUFBVSxFQUFFLEVBQUU7WUFDZCxhQUFhLEVBQUUsRUFBRTtTQUNsQixD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QyxLQUFLLENBQUMsQ0FBQzt3QkFDbEUsTUFBTTtvQkFDUjt3QkFDRSxNQUFNO2lCQUNUO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNiLENBQUM7O2dCQTNTa0IsUUFBUTtnQkFDZSxRQUFRLHVCQUEvQyxNQUFNLFNBQUMsU0FBUztnREFDaEIsTUFBTSxTQUFDLGtCQUFrQjtnQkFDSCxvQkFBb0I7OztnQkFsQzlDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUUxQixpaElBQTJDOztpQkFDNUM7OztnQkF2Qm1CLFFBQVE7Z0JBVTFCLFFBQVEsdUJBeUNMLE1BQU0sU0FBQyxTQUFTO2dEQUNoQixNQUFNLFNBQUMsa0JBQWtCO2dCQW5DckIsb0JBQW9COztJQThVN0IsMEJBQUM7Q0FBQSxBQTVVRCxDQUt5QyxpQkFBaUIsR0F1VXpEO1NBdlVZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIFBST0ZJTEVfSU5ERVhFRF9EQixcbiAgUmVzcG9uc2VDb2RlLFxuICBVU0VSX0lORk8sXG4gIFVzZXJJbmZvLFxuICBQYXR0ZXJuLFxufSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEh0dHBCYXNlTW9kZWwgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgSW5kZXhlZERCRmFjdG9yeVNlcnZpY2UgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEJhc2VGb3JtQ29tcG9uZW50LCBTZWxlY3RQYXJhbU1vZGVsIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29tbW9uJztcbmltcG9ydCB7IEF1dGhJbmRleGVkREJTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tYXV0aCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLXN5c3RlbS1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3lzdGVtLXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3N5c3RlbS1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3lzdGVtUGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGb3JtQ29tcG9uZW50PGFueT4gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBpbWFnZTogc3RyaW5nO1xuICBwdWJsaWMgZm9ybUdyb3VwSW1hZ2U6IEZvcm1Hcm91cDtcbiAgcHVibGljIHVwbG9hZEZpbmlzaGVkOiBib29sZWFuO1xuICBwdWJsaWMgcGF0dGVybkVtYWlsOiBzdHJpbmcgPSBQYXR0ZXJuLkVNQUlMO1xuICBwdWJsaWMgcGF0dGVyblBob25lTnVtYmVyOiBzdHJpbmcgPSBQYXR0ZXJuLlBIT05FX05VTUJFUjtcbiAgcHVibGljIG1pbkxlbmd0aDogbnVtYmVyID0gNTtcbiAgcHVibGljIGRpc2FibGVkVXBsb2FkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBwcm92aWRlcjogc3RyaW5nID0gJ2xvY2FsJztcblxuICBwdWJsaWMgYXBpU2VsZWN0Q291bnRyeTogSHR0cEJhc2VNb2RlbDtcblxuICBwdWJsaWMgYXBpU2VsZWN0UHJvdmluY2U6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBwYXJhbVNlbGVjdFByb3ZpbmNlOiBTZWxlY3RQYXJhbU1vZGVsW107XG5cbiAgcHVibGljIGFwaVNlbGVjdENpdHk6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBwYXJhbVNlbGVjdENpdHk6IFNlbGVjdFBhcmFtTW9kZWxbXTtcblxuICBwdWJsaWMgYXBpU2VsZWN0RGlzdHJpY3Q6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBwYXJhbVNlbGVjdERpc3RyaWN0OiBTZWxlY3RQYXJhbU1vZGVsW107XG5cbiAgcHVibGljIGFwaVNlbGVjdFN1YkRpc3RyaWN0OiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgcGFyYW1TZWxlY3RTdWJEaXN0cmljdDogU2VsZWN0UGFyYW1Nb2RlbFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgQEluamVjdChVU0VSX0lORk8pIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJJbmZvLFxuICAgIEBJbmplY3QoUFJPRklMRV9JTkRFWEVEX0RCKSBwcml2YXRlIHByb2ZpbGVJbmRleGVkREI6IEluZGV4ZWREQkZhY3RvcnlTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aEluZGV4ZWREQjogQXV0aEluZGV4ZWREQlNlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3RvcixcbiAgICAgIHtcbiAgICAgICAgJ3VzZXJuYW1lJzogW3tcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgfV0sXG4gICAgICAgICduYW1lJzogW10sXG4gICAgICAgICdlbWFpbCc6IFtdLFxuICAgICAgICAncGhvbmVOdW1iZXInOiBbXSxcbiAgICAgICAgJ2FkZHJlc3MnOiBbbnVsbCwgW1ZhbGlkYXRvcnMubWluTGVuZ3RoKDUpXV0sXG4gICAgICAgICdjb3VudHJ5JzogW10sXG4gICAgICAgICdwcm92aW5jZSc6IFtdLFxuICAgICAgICAnY2l0eSc6IFtdLFxuICAgICAgICAnZGlzdHJpY3QnOiBbXSxcbiAgICAgICAgJ3N1YkRpc3RyaWN0JzogW10sXG4gICAgICB9KTtcbiAgICB0aGlzLmZvcm1Hcm91cEltYWdlID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAnaW1hZ2UnOiBbXSxcbiAgICB9KTtcbiAgICB0aGlzLmFwaVNlbGVjdENvdW50cnkgPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ3NlbGVjdC1jb3VudHJ5J107XG4gICAgdGhpcy5hcGlTZWxlY3RQcm92aW5jZSA9IHRoaXMuYXBpWydtYXN0ZXInXVsnc2VsZWN0LXByb3ZpbmNlJ107XG4gICAgdGhpcy5hcGlTZWxlY3RDaXR5ID0gdGhpcy5hcGlbJ21hc3RlciddWydzZWxlY3QtY2l0eSddO1xuICAgIHRoaXMuYXBpU2VsZWN0RGlzdHJpY3QgPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ3NlbGVjdC1kaXN0cmljdCddO1xuICAgIHRoaXMuYXBpU2VsZWN0U3ViRGlzdHJpY3QgPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ3NlbGVjdC1zdWJkaXN0cmljdCddO1xuICAgIHRoaXMuYXV0aEluZGV4ZWREQi5nZXRFbmMoJ3Byb3ZpZGVyJykudGhlbigodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHZhbHVlICE9PSAnbG9jYWwnKSB7XG4gICAgICAgIHRoaXMucHJvdmlkZXIgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ2VtYWlsJ10uZGlzYWJsZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vbkluaXQoJ3Byb2ZpbGUnLCAnZ2V0LXByb2ZpbGUtc3lzdGVtJyk7XG4gICAgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wcm9maWxlSW5kZXhlZERCLmdldCgnaW1hZ2UtYjY0JyksXG4gICAgICB0aGlzLnByb2ZpbGVJbmRleGVkREIuZ2V0KCdpbWFnZScpLFxuICAgIF0pLnRoZW4oKHZhbHVlOiBhbnlbXSkgPT4ge1xuICAgICAgaWYgKHZhbHVlWzBdKVxuICAgICAgICB0aGlzLmltYWdlID0gdmFsdWVbMF07XG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB2YWx1ZVsxXTtcbiAgICB9KTtcbiAgICB0aGlzLnBhcmFtU2VsZWN0UHJvdmluY2UgPSBbe1xuICAgICAga2V5OiAnY291bnRyeScsXG4gICAgICB2YWx1ZTogJ3VuZGVmaW5lZCcsXG4gICAgfV07XG4gICAgdGhpcy5wYXJhbVNlbGVjdENpdHkgPSBbe1xuICAgICAga2V5OiAncHJvdmluY2UnLFxuICAgICAgdmFsdWU6ICd1bmRlZmluZWQnLFxuICAgIH1dO1xuICAgIHRoaXMucGFyYW1TZWxlY3REaXN0cmljdCA9IFt7XG4gICAgICBrZXk6ICdjaXR5JyxcbiAgICAgIHZhbHVlOiAndW5kZWZpbmVkJyxcbiAgICB9XTtcbiAgICB0aGlzLnBhcmFtU2VsZWN0U3ViRGlzdHJpY3QgPSBbe1xuICAgICAga2V5OiAnZGlzdHJpY3QnLFxuICAgICAgdmFsdWU6ICd1bmRlZmluZWQnLFxuICAgIH1dO1xuICB9XG5cbiAgb25Jbml0KHNlcnZpY2VOYW1lOiBzdHJpbmcsIGFwaU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZ0Zvcm0gPSB0cnVlO1xuICAgIHRoaXMuZXhlYyhzZXJ2aWNlTmFtZSwgYXBpTmFtZSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChzdWNjZXNzOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ25hbWUnXS5zZXRWYWx1ZShzdWNjZXNzWyduYW1lJ10pO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWyd1c2VybmFtZSddLnNldFZhbHVlKHN1Y2Nlc3NbJ3VzZXJuYW1lJ10pO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydlbWFpbCddLnNldFZhbHVlKHN1Y2Nlc3NbJ2VtYWlsJ10pO1xuICAgICAgICAgIGlmIChzdWNjZXNzWydhZGRyZXNzJ10pIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydhZGRyZXNzJ10uc2V0VmFsdWUoc3VjY2Vzc1snYWRkcmVzcyddKTtcbiAgICAgICAgICBpZiAoc3VjY2Vzc1snY291bnRyeSddKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snY291bnRyeSddLnNldFZhbHVlKHtcbiAgICAgICAgICAgICAgbGFiZWw6IHN1Y2Nlc3NbJ2NvdW50cnknXSxcbiAgICAgICAgICAgICAgdmFsdWU6IHN1Y2Nlc3NbJ2NvdW50cnlDb2RlJ11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5wYXJhbVNlbGVjdFByb3ZpbmNlID0gW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAnY291bnRyeScsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN1Y2Nlc3NbJ2NvdW50cnlDb2RlJ10sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3VjY2Vzc1sncHJvdmluY2UnXSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3Byb3ZpbmNlJ10uc2V0VmFsdWUoe1xuICAgICAgICAgICAgICBsYWJlbDogc3VjY2Vzc1sncHJvdmluY2UnXSxcbiAgICAgICAgICAgICAgdmFsdWU6IHN1Y2Nlc3NbJ3Byb3ZpbmNlQ29kZSddXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucGFyYW1TZWxlY3RDaXR5ID0gW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAncHJvdmluY2UnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBzdWNjZXNzWydwcm92aW5jZUNvZGUnXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdWNjZXNzWydjaXR5J10pIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydjaXR5J10uc2V0VmFsdWUoe1xuICAgICAgICAgICAgICBsYWJlbDogc3VjY2Vzc1snY2l0eSddLFxuICAgICAgICAgICAgICB2YWx1ZTogc3VjY2Vzc1snY2l0eUNvZGUnXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnBhcmFtU2VsZWN0RGlzdHJpY3QgPSBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdjaXR5JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3VjY2Vzc1snY2l0eUNvZGUnXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdWNjZXNzWydkaXN0cmljdCddKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snZGlzdHJpY3QnXS5zZXRWYWx1ZSh7XG4gICAgICAgICAgICAgIGxhYmVsOiBzdWNjZXNzWydkaXN0cmljdCddLFxuICAgICAgICAgICAgICB2YWx1ZTogc3VjY2Vzc1snZGlzdHJpY3RDb2RlJ11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5wYXJhbVNlbGVjdFN1YkRpc3RyaWN0ID0gW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAnZGlzdHJpY3QnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBzdWNjZXNzWydkaXN0cmljdENvZGUnXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdWNjZXNzWydzdWJEaXN0cmljdCddKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snc3ViRGlzdHJpY3QnXS5zZXRWYWx1ZSh7XG4gICAgICAgICAgICAgIGxhYmVsOiBzdWNjZXNzWydzdWJEaXN0cmljdCddLFxuICAgICAgICAgICAgICB2YWx1ZTogc3VjY2Vzc1snc3ViRGlzdHJpY3RDb2RlJ11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3VjY2Vzc1sncGhvbmVOdW1iZXInXSkgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3Bob25lTnVtYmVyJ10uc2V0VmFsdWUoc3VjY2Vzc1sncGhvbmVOdW1iZXInXSk7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3NbJ21vYmlsZU51bWJlciddKSB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snbW9iaWxlTnVtYmVyJ10uc2V0VmFsdWUoc3VjY2Vzc1snbW9iaWxlTnVtYmVyJ10pO1xuICAgICAgICAgIHRoaXMuYXV0aEluZGV4ZWREQi5nZXRFbmMoJ3Byb3ZpZGVyJykudGhlbigodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSAnbG9jYWwnKSB7XG4gICAgICAgICAgICAgIHRoaXMucHJvdmlkZXIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ2VtYWlsJ10uZGlzYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLm1hcmtBc1ByaXN0aW5lKCk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gdHJ1ZTtcbiAgICAgICAgICBjb25zdCBlcnI6IEFwaUJhc2VSZXNwb25zZSA9IGVycm9yWydlcnJvciddO1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVyci5yZXNwU3RhdHVzTWVzc2FnZVtlcnIucmVzcFN0YXR1c0NvZGVdLCB0cnVlLCBudWxsLCAnZGFuZ2VyJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVyciBhcyBhbnksIHRydWUsIG51bGwsICdkYW5nZXInKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICApO1xuICB9XG5cbiAgb25TZWxlY3RDb3VudHJ5KHNlbGVjdDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wYXJhbVNlbGVjdFByb3ZpbmNlID0gW1xuICAgICAge1xuICAgICAgICBrZXk6ICdjb3VudHJ5JyxcbiAgICAgICAgdmFsdWU6IHNlbGVjdCA/IHNlbGVjdC52YWx1ZSA6ICd1bmRlZmluZWQnLFxuICAgICAgfSxcbiAgICBdO1xuICAgIHRoaXMub25DbGVhclByb3ZpbmNlKCk7XG4gIH1cbiAgb25TZWxlY3RQcm92aW5jZShzZWxlY3Q6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1TZWxlY3RDaXR5ID0gW1xuICAgICAge1xuICAgICAgICBrZXk6ICdwcm92aW5jZScsXG4gICAgICAgIHZhbHVlOiBzZWxlY3QgPyBzZWxlY3QudmFsdWUgOiAndW5kZWZpbmVkJyxcbiAgICAgIH0sXG4gICAgXTtcbiAgICB0aGlzLm9uQ2xlYXJQcm92aW5jZSgpO1xuICB9XG4gIG9uU2VsZWN0Q2l0eShzZWxlY3Q6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1TZWxlY3REaXN0cmljdCA9IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAnY2l0eScsXG4gICAgICAgIHZhbHVlOiBzZWxlY3QgPyBzZWxlY3QudmFsdWUgOiAndW5kZWZpbmVkJyxcbiAgICAgIH0sXG4gICAgXTtcbiAgICB0aGlzLm9uQ2xlYXJDaXR5KCk7XG4gIH1cbiAgb25TZWxlY3REaXN0cmljdChzZWxlY3Q6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1TZWxlY3RTdWJEaXN0cmljdCA9IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAnZGlzdHJpY3QnLFxuICAgICAgICB2YWx1ZTogc2VsZWN0ID8gc2VsZWN0LnZhbHVlIDogJ3VuZGVmaW5lZCcsXG4gICAgICB9LFxuICAgIF07XG4gICAgdGhpcy5vbkNsZWFyRGlzdHJpY3QoKTtcbiAgfVxuXG4gIG9uQ2xlYXJDb3VudHJ5KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xuICAgICAgJ3Byb3ZpbmNlJzogbnVsbCxcbiAgICAgICdjaXR5JzogbnVsbCxcbiAgICAgICdkaXN0cmljdCc6IG51bGwsXG4gICAgICAnc3ViRGlzdHJpY3QnOiBudWxsLFxuICAgIH0pO1xuICB9XG4gIG9uQ2xlYXJQcm92aW5jZSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHtcbiAgICAgICdjaXR5JzogbnVsbCxcbiAgICAgICdkaXN0cmljdCc6IG51bGwsXG4gICAgICAnc3ViRGlzdHJpY3QnOiBudWxsLFxuICAgIH0pO1xuICB9XG4gIG9uQ2xlYXJDaXR5KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xuICAgICAgJ2Rpc3RyaWN0JzogbnVsbCxcbiAgICAgICdzdWJEaXN0cmljdCc6IG51bGwsXG4gICAgfSk7XG4gIH1cbiAgb25DbGVhckRpc3RyaWN0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xuICAgICAgJ3N1YkRpc3RyaWN0JzogbnVsbCxcbiAgICB9KTtcbiAgfVxuXG4gIHVwbG9hZEltYWdlKGZpbGU6IGFueSkge1xuICAgIGNvbnN0IGRhdGE6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZGF0YS5hcHBlbmQoJ3Bob3RvJywgZmlsZSk7XG4gICAgdGhpcy5mb3JtR3JvdXBJbWFnZS5nZXQoJ2ltYWdlJykuZGlzYWJsZSgpO1xuICAgIHRoaXMuZXhlYygnZmlsZScsICdwaG90by1wcm9maWxlJywgZGF0YSkuc3Vic2NyaWJlKFxuICAgICAgICAoc3VjY2VzczogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy51c2VyU2VydmljZS51cGRhdGVQaG90b1VzZXIoZmlsZSwgc3VjY2Vzcy5yZXNwU3RhdHVzTWVzc2FnZVsnY2hlY2tzdW0nXSk7XG4gICAgICAgICAgdGhpcy51cGxvYWRGaW5pc2hlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXBJbWFnZS5tYXJrQXNQcmlzdGluZSgpO1xuICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKHN1Y2Nlc3MucmVzcFN0YXR1c01lc3NhZ2Vbc3VjY2Vzcy5yZXNwU3RhdHVzQ29kZV0sIHRydWUsIG51bGwsICdzdWNjZXNzJyk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcjogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXBJbWFnZS5nZXQoJ2ltYWdlJykuZW5hYmxlKCk7XG4gICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oZXJyb3IucmVzcFN0YXR1c01lc3NhZ2VbZXJyb3IucmVzcFN0YXR1c0NvZGVdLCB0cnVlLCBudWxsLCAnZGFuZ2VyJyk7XG4gICAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIHZhbHVlU2VsZWN0KHByb3A6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZS5sYWJlbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtR3JvdXAuZ2V0KHByb3ApLnZhbHVlLmxhYmVsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgdmFsdWVTZWxlY3ROb25MYWJlbChwcm9wOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5nZXQocHJvcCkudmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmZvcm1Hcm91cC5nZXQocHJvcCkudmFsdWUudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZS52YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICBuYW1lOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ25hbWUnKS52YWx1ZSxcbiAgICAgIHBob25lTnVtYmVyOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ3Bob25lTnVtYmVyJykudmFsdWUsXG4gICAgICBhZGRyZXNzOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ2FkZHJlc3MnKS52YWx1ZSxcbiAgICAgIGNvdW50cnk6IHRoaXMudmFsdWVTZWxlY3QoJ2NvdW50cnknKSxcbiAgICAgIGNvdW50cnlDb2RlOiB0aGlzLnZhbHVlU2VsZWN0Tm9uTGFiZWwoJ2NvdW50cnknKSxcbiAgICAgIHByb3ZpbmNlOiB0aGlzLnZhbHVlU2VsZWN0KCdwcm92aW5jZScpLFxuICAgICAgcHJvdmluY2VDb2RlOiB0aGlzLnZhbHVlU2VsZWN0Tm9uTGFiZWwoJ3Byb3ZpbmNlJyksXG4gICAgICBjaXR5OiB0aGlzLnZhbHVlU2VsZWN0KCdjaXR5JyksXG4gICAgICBjaXR5Q29kZTogdGhpcy52YWx1ZVNlbGVjdE5vbkxhYmVsKCdjaXR5JyksXG4gICAgICBkaXN0cmljdDogdGhpcy52YWx1ZVNlbGVjdCgnZGlzdHJpY3QnKSxcbiAgICAgIGRpc3RyaWN0Q29kZTogdGhpcy52YWx1ZVNlbGVjdE5vbkxhYmVsKCdkaXN0cmljdCcpLFxuICAgICAgc3ViRGlzdHJpY3Q6IHRoaXMudmFsdWVTZWxlY3QoJ3N1YkRpc3RyaWN0JyksXG4gICAgICBzdWJEaXN0cmljdENvZGU6IHRoaXMudmFsdWVTZWxlY3ROb25MYWJlbCgnc3ViRGlzdHJpY3QnKSxcbiAgICB9O1xuICAgIGlmICh0aGlzLnByb3ZpZGVyID09PSAnbG9jYWwnKSB7XG4gICAgICBkYXRhWydlbWFpbCddID0gdGhpcy5mb3JtR3JvdXAuZ2V0KCdlbWFpbCcpLnZhbHVlO1xuICAgIH1cbiAgICAoc3VwZXIub25TdWJtaXQoZGF0YSwgJ3Byb2ZpbGUnLCAnY2hhbmdlLXByb2ZpbGUtc3lzdGVtJykgYXMgT2JzZXJ2YWJsZTxBcGlCYXNlUmVzcG9uc2U+KVxuICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc3BvbnNlLnJlc3BTdGF0dXNDb2RlKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIFJlc3BvbnNlQ29kZS5FUlJfU0NSMDAwOC50b1N0cmluZygpOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snZW1haWwnXS5zZXRFcnJvcnMoe1xuICAgICAgICAgICAgICAgICAgICAgICdlbWFpbCc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgUmVzcG9uc2VDb2RlLkVSUl9TQ1IwMDA3QS50b1N0cmluZygpOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1sncGhvbmVOdW1iZXInXS5zZXRFcnJvcnMoe1xuICAgICAgICAgICAgICAgICAgICAgICdlcnJvci5wYXR0ZXJuLnBob25lTnVtYmVyJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSBSZXNwb25zZUNvZGUuT0tfU0NSMDA0LnRvU3RyaW5nKCk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UudXBkYXRlTmFtZVVzZXIodGhpcy5mb3JtR3JvdXAuZ2V0KCduYW1lJykudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gIH1cblxufVxuIl19