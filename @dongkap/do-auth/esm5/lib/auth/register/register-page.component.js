import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, } from '@angular/forms';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, first, switchMap, takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { NbDialogService } from '@nebular/theme';
import { API, EncryptionService, HTTP_SERVICE, OAUTH_INFO, Pattern, ResponseCode, } from '@dongkap/do-core';
import { DoToastrService } from '@dongkap/do-common';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions.component';
var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent(router, enc, toastr, dialogService, translate, httpBaseService, oauthResource, apiPath) {
        this.router = router;
        this.enc = enc;
        this.toastr = toastr;
        this.dialogService = dialogService;
        this.translate = translate;
        this.httpBaseService = httpBaseService;
        this.oauthResource = oauthResource;
        this.apiPath = apiPath;
        this.patternFullname = Pattern.FULLNAME;
        this.patternUsername = Pattern.USERNAME;
        this.patternEmail = Pattern.EMAIL;
        this.patternPassword = Pattern.PASSWORD_MEDIUM;
        this.minlengthUsername = 4;
        this.minlengthEmail = 5;
        this.form = new FormGroup({
            fullname: new FormControl(),
            username: new FormControl(),
            email: new FormControl(),
            password: new FormControl(),
            confirmPassword: new FormControl(),
            terms: new FormControl(),
            recaptcha: new FormControl(),
        });
        this.buttonRegister = false;
        this.progressBar = 25;
        this.isCheckUsername = true;
        this.isCheckEmail = true;
        this.destroy$ = new Subject();
    }
    RegisterPageComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    };
    RegisterPageComponent.prototype.register = function () {
        var _this = this;
        if (!this.form.invalid) {
            document.querySelectorAll('.pace-done').forEach(function (pace) {
                pace.className = pace.className.replace('pace-done pace-done', 'pace-running');
                pace.className = pace.className.replace('pace-done', 'pace-running');
            });
            document.querySelectorAll('.pace-inactive').forEach(function (pace) {
                pace.className = pace.className.replace('pace-inactive pace-inactive', 'pace-active');
                pace.className = pace.className.replace('pace-inactive', 'pace-active');
            });
            var progressDOM_1 = document.getElementsByClassName('pace-progress').item(0);
            if (this.progressBar < 35) {
                this.progressBar = 35;
                progressDOM_1.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                progressDOM_1.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                progressDOM_1.getAttributeNode('data-progress').value = this.progressBar.toString();
            }
            this.responseError = null;
            var data = this.form.value;
            data['password'] = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['password'].value);
            data['confirmPassword'] = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['confirmPassword'].value);
            var httpHeaders = new HttpHeaders({
                'Authorization': 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                'Content-Type': 'application/json',
                'Accept-Language': this.translate.currentLang,
            });
            this.buttonRegister = true;
            this.httpBaseService.HTTP_BASE(this.apiPath['auth']['signup'], data, httpHeaders)
                .pipe(takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response) {
                    _this.toastr.showI18n(response.respStatusMessage[response.respStatusCode]);
                    _this.progressBar = 90;
                    progressDOM_1.style.transform = 'translate3d(' + _this.progressBar + '%, 0px, 0px)';
                    progressDOM_1.getAttributeNode('data-progress-text').value = _this.progressBar + '%';
                    progressDOM_1.getAttributeNode('data-progress').value = _this.progressBar.toString();
                    _this.progressBar = 0;
                    if (response.respStatusCode === ResponseCode.OK_REGISTERED) {
                        _this.router.navigate(['/auth/login']);
                    }
                    else {
                        _this.form.reset();
                        _this.buttonRegister = false;
                    }
                }
                else {
                    _this.form.reset();
                    _this.buttonRegister = false;
                }
            }, function (error) {
                _this.buttonRegister = false;
                _this.progressBar = 85;
                progressDOM_1.style.transform = 'translate3d(' + _this.progressBar + '%, 0px, 0px)';
                progressDOM_1.getAttributeNode('data-progress-text').value = _this.progressBar + '%';
                progressDOM_1.getAttributeNode('data-progress').value = _this.progressBar.toString();
                document.querySelectorAll('.pace-running').forEach(function (pace) {
                    pace.className = pace.className.replace('pace-running', 'pace-done');
                });
                document.querySelectorAll('.pace-active').forEach(function (pace) {
                    pace.className = pace.className.replace('pace-active', 'pace-inactive');
                });
                _this.progressBar = 0;
                if (!(error instanceof HttpErrorResponse)) {
                    if (error['respStatusCode']) {
                        switch (error['respStatusCode']) {
                            case ResponseCode.ERR_SCR0005.toString():
                                _this.form.controls['password'].setErrors({
                                    'invalid': true,
                                });
                                break;
                            case ResponseCode.ERR_SCR0011.toString():
                                _this.form.controls['confirmPassword'].setErrors({
                                    'equal': true,
                                });
                                break;
                            default:
                                break;
                        }
                        _this.responseError = error['respStatusMessage'][error['respStatusCode']];
                    }
                }
                else {
                }
            });
        }
    };
    Object.defineProperty(RegisterPageComponent.prototype, "hasErrorFullname", {
        get: function () {
            if (this.form.controls['fullname'].errors && this.form.controls['fullname'].invalid && this.form.controls['fullname'].touched) {
                if (this.form.controls['fullname'].errors['required'])
                    this.errorMsgFullname = 'error.fullname.required';
                else
                    this.errorMsgFullname = 'error.fullname.invalid';
            }
            else {
                this.errorMsgFullname = null;
            }
            return (this.form.controls['fullname'] &&
                this.form.controls['fullname'].invalid &&
                this.form.controls['fullname'].touched);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterPageComponent.prototype, "hasSuccessFullname", {
        get: function () {
            return (this.form.controls['fullname'] &&
                this.form.controls['fullname'].valid &&
                this.form.controls['fullname'].touched);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterPageComponent.prototype, "hasErrorUsername", {
        get: function () {
            if (this.form.controls['username'].errors && this.form.controls['username'].invalid && this.form.controls['username'].touched) {
                if (this.form.controls['username'].errors['required'])
                    this.errorMsgUsername = 'error.username.required';
                else if (this.form.controls['username'].errors['not-available']) {
                    this.errorMsgUsername = 'error.username.not-available';
                    this.paramMsgUsername = {
                        value: this.form.controls['username'].value,
                    };
                }
                else if (this.form.controls['username'].errors['timeout'])
                    this.errorMsgUsername = 'error.0';
                else if (this.form.controls['username'].errors['error'])
                    this.errorMsgUsername = 'error.500';
                else
                    this.errorMsgUsername = 'error.username.invalid';
            }
            else {
                if ((this.form.controls['username'].touched || this.form.controls['username'].dirty) && this.isCheckUsername) {
                    this.isCheckUsername = false;
                    this.form.controls['username'].setAsyncValidators([userValidator(this.oauthResource, this.httpBaseService, this.apiPath)]);
                    this.form.controls['username'].updateValueAndValidity();
                }
                this.errorMsgUsername = null;
            }
            return (this.form.controls['username'] &&
                this.form.controls['username'].invalid &&
                this.form.controls['username'].touched);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterPageComponent.prototype, "hasSuccessUsername", {
        get: function () {
            return (this.form.controls['username'] &&
                this.form.controls['username'].valid &&
                this.form.controls['username'].touched);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterPageComponent.prototype, "hasErrorEmail", {
        get: function () {
            if (this.form.controls['email'].errors && this.form.controls['email'].invalid && this.form.controls['email'].touched) {
                if (this.form.controls['email'].errors['required'])
                    this.errorMsgEmail = 'error.email.required';
                else if (this.form.controls['email'].errors['not-available']) {
                    this.errorMsgEmail = 'error.email.not-available';
                    this.paramMsgEmail = {
                        value: this.form.controls['email'].value,
                    };
                }
                else if (this.form.controls['email'].errors['timeout'])
                    this.errorMsgEmail = 'error.0';
                else if (this.form.controls['email'].errors['error'])
                    this.errorMsgEmail = 'error.500';
                else
                    this.errorMsgEmail = 'error.email.invalid';
            }
            else {
                if ((this.form.controls['email'].touched || this.form.controls['email'].dirty) && this.isCheckEmail) {
                    this.isCheckEmail = false;
                    this.form.controls['email'].setAsyncValidators([userValidator(this.oauthResource, this.httpBaseService, this.apiPath)]);
                    this.form.controls['email'].updateValueAndValidity();
                }
                this.errorMsgEmail = null;
            }
            return (this.form.controls['email'] &&
                this.form.controls['email'].invalid &&
                this.form.controls['email'].touched);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterPageComponent.prototype, "hasSuccessEmail", {
        get: function () {
            return (this.form.controls['email'] &&
                this.form.controls['email'].valid &&
                this.form.controls['email'].touched);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterPageComponent.prototype, "hasErrorPassword", {
        get: function () {
            if (this.form.controls['password'].errors && this.form.controls['password'].invalid && this.form.controls['password'].touched) {
                this.errorMsgPassword = 'error.pattern.Password';
            }
            else {
                this.errorMsgPassword = null;
            }
            return (this.form.controls['password'] &&
                this.form.controls['password'].invalid &&
                this.form.controls['password'].touched);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterPageComponent.prototype, "hasSuccessPassword", {
        get: function () {
            return (this.form.controls['password'] &&
                this.form.controls['password'].valid &&
                this.form.controls['password'].touched);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterPageComponent.prototype, "hasErrorConfirmPassword", {
        get: function () {
            if (this.form.controls['confirmPassword'].errors &&
                this.form.controls['confirmPassword'].invalid &&
                this.form.controls['confirmPassword'].touched) {
                this.errorMsgConfirmPassword = 'error.equal.confirmPassword-register';
            }
            else {
                if (this.form.controls['password'].value !== this.form.controls['confirmPassword'].value) {
                    this.errorMsgConfirmPassword = 'error.equal.confirmPassword-register';
                    this.form.controls['confirmPassword'].setValidators([confirmPasswordValidator(this.form)]);
                    this.form.controls['confirmPassword'].updateValueAndValidity();
                }
                else {
                    this.errorMsgConfirmPassword = null;
                }
            }
            return (this.form.controls['confirmPassword'] &&
                this.form.controls['confirmPassword'].invalid &&
                this.form.controls['confirmPassword'].touched);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterPageComponent.prototype, "hasSuccessConfirmPassword", {
        get: function () {
            return (this.form.controls['confirmPassword'] &&
                this.form.controls['confirmPassword'].valid &&
                this.form.controls['confirmPassword'].touched);
        },
        enumerable: false,
        configurable: true
    });
    RegisterPageComponent.prototype.onCheckedChange = function () {
        if (!this.form.controls['terms'].value) {
            this.form.controls['terms'].setValue(null);
        }
    };
    RegisterPageComponent.prototype.onClickTermsConditions = function () {
        var _this = this;
        var data = {
            'parameterCode': 'TERMS_CONDITIONS.DONGKAP'
        };
        var httpHeaders = new HttpHeaders({
            'Authorization': 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
            'Content-Type': 'application/json',
            'Accept-Language': this.translate.currentLang,
        });
        this.httpBaseService.HTTP_BASE(this.apiPath['openapi']['parameter'], data, httpHeaders)
            .pipe(takeUntil(this.destroy$))
            .subscribe(function (response) {
            _this.dialogService.open(TermsConditionsComponent, {
                context: {
                    content: response['parameterValue'],
                },
            })
                .onClose.subscribe(function (terms) {
                if (terms) {
                    _this.form.controls['terms'].setValue(true);
                }
            });
        });
    };
    RegisterPageComponent.prototype.onKeyDownUsername = function (event) {
        if (event.key) {
            if (!event.key.match(/[!@#$%^&*()?":{}|<>\[\];\\=~`]/g)) {
                if (([
                    'TAB',
                    'ESCAPE',
                    'ENTER',
                    'HOME',
                    'END',
                    'ARROWLEFT',
                    'ARROWRIGHT',
                    'ARROWUP',
                    'ARROWDOWN',
                    'PAGEUP',
                    'PAGEDOWN'
                ].indexOf(event.key.toUpperCase()) === -1) &&
                    !event.ctrlKey && !event.metaKey && !event.altKey)
                    this.isCheckUsername = true;
            }
        }
    };
    RegisterPageComponent.prototype.onKeyDownEmail = function (event) {
        if (event.key) {
            if (!event.key.match(/[!#$%^&*()?":{}|<>\[\];\\=~`]/g)) {
                if (([
                    'TAB',
                    'ESCAPE',
                    'ENTER',
                    'HOME',
                    'END',
                    'ARROWLEFT',
                    'ARROWRIGHT',
                    'ARROWUP',
                    'ARROWDOWN',
                    'PAGEUP',
                    'PAGEDOWN'
                ].indexOf(event.key.toUpperCase()) === -1) &&
                    !event.ctrlKey && !event.metaKey && !event.altKey)
                    this.isCheckEmail = true;
            }
        }
    };
    RegisterPageComponent.ctorParameters = function () { return [
        { type: Router },
        { type: EncryptionService },
        { type: DoToastrService },
        { type: NbDialogService },
        { type: TranslateService },
        { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [API,] }] }
    ]; };
    RegisterPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-register-page',
                    template: "<h1 id=\"title\" class=\"title\">{{ 'Register' | translate }}</h1>\n\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.register' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"register()\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-name\">{{ 'Full name' | translate }}* :</label>\n    <input [formControlName]=\"'fullname'\"\n          [required]=\"true\"\n          minlength=\"4\"\n          maxlength=\"50\"\n          [pattern]=\"patternFullname\"\n          [ngClass]=\"{\n            'status-danger': hasErrorFullname,\n            'status-success': hasSuccessFullname\n          }\"\n          name=\"fullname\"\n          id=\"inputFullname\"\n          placeholder=\"{{ 'Full name' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"1\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorFullname\">\n      <span class=\"caption status-danger\">{{errorMsgFullname | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-username\">{{ 'Username' | translate }}* :</label>\n    <input [formControlName]=\"'username'\"\n          [required]=\"true\"\n          minlength=\"5\"\n          maxlength=\"20\"\n          [pattern]=\"patternUsername\"\n          [ngClass]=\"{\n            'status-danger': hasErrorUsername,\n            'status-success': hasSuccessUsername\n          }\"\n          name=\"username\"\n          id=\"inputUsername\"\n          (keydown)=\"onKeyDownUsername($event)\"\n          placeholder=\"{{ 'Username' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"2\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorUsername\">\n      <span class=\"caption status-danger\">{{errorMsgUsername | translate:paramMsgUsername}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-email\">{{ 'Email' | translate }}* :</label>\n    <input [formControlName]=\"'email'\"\n          [required]=\"true\"\n          minlength=\"5\"\n          maxlength=\"50\"\n          [pattern]=\"patternEmail\"\n          [ngClass]=\"{\n            'status-danger': hasErrorEmail,\n            'status-success': hasSuccessEmail\n          }\"\n          name=\"email\"\n          id=\"inputEmail\"\n          (keydown)=\"onKeyDownEmail($event)\"\n          placeholder=\"{{ 'Email' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"3\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorEmail\">\n      <span class=\"caption status-danger\">{{errorMsgEmail | translate:paramMsgEmail}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-password\">{{ 'Password' | translate }}* :</label>\n    <input [formControlName]=\"'password'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [pattern]=\"patternPassword\"\n          [ngClass]=\"{\n            'status-danger': hasErrorPassword,\n            'status-success': hasSuccessPassword\n          }\"\n          name=\"password\"\n          type=\"password\"\n          id=\"inputPassword\"\n          placeholder=\"{{ 'Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"4\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-confirmpassword\">{{ 'Confirm Password' | translate }}* :</label>\n    <input [formControlName]=\"'confirmPassword'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [ngClass]=\"{\n            'status-danger': hasErrorConfirmPassword,\n            'status-success': hasSuccessConfirmPassword\n          }\"\n          name=\"confirmPassword\"\n          type=\"password\"\n          id=\"inputConfirmPassword\"\n          placeholder=\"{{ 'Confirm Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"5\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorConfirmPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgConfirmPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group accept-group\">\n    <div class=\"terms-row row\">\n      <nb-checkbox\n        name=\"terms\"\n        [formControlName]=\"'terms'\"\n        [required]=\"true\"\n        (change)=\"onCheckedChange()\">\n        {{ 'message.terms-conditions-label' | translate}}\n      </nb-checkbox>\n      <span class=\"terms-conditions\" (click)=\"onClickTermsConditions()\" tabindex=\"-1\"><strong>{{ 'message.terms-conditions' | translate}}</strong></span>\n    </div>\n  </div>\n\n  <div class=\"form-control-group\" style=\"transform:scale(0.7);transform-origin:0;\">\n    <re-captcha\n      [formControlName]=\"'recaptcha'\"\n      required>\n    </re-captcha>\n  </div>\n\n  <button [disabled]=\"!form.valid || buttonRegister\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"!form.valid || buttonRegister\">\n    {{ 'Register' | translate }}\n  </button>\n</form>\n\n<section class=\"another-action\" aria-label=\"Sign in\">\n  {{ 'message.register-footer' | translate}} <a class=\"text-link\" routerLink=\"/auth/login\" tabindex=\"-1\">{{ 'Login' | translate}}</a>\n</section>\n",
                    styles: [".terms-row{margin-left:0}.terms-conditions{padding:.1rem 0 0 .25rem;color:#36f;text-decoration:underline;font-size:inherit;font-style:inherit;font-weight:inherit;line-height:inherit;cursor:pointer}.terms-conditions:hover{color:#598bff}"]
                },] }
    ];
    RegisterPageComponent.ctorParameters = function () { return [
        { type: Router },
        { type: EncryptionService },
        { type: DoToastrService },
        { type: NbDialogService },
        { type: TranslateService },
        { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [API,] }] }
    ]; };
    return RegisterPageComponent;
}());
export { RegisterPageComponent };
export function confirmPasswordValidator(form) {
    return function (control) {
        if (form.controls) {
            if (form.controls['password'].value !== form.controls['confirmPassword'].value)
                return { equal: true };
        }
        return null;
    };
}
export function userValidator(oauthResource, httpBaseService, apiPath) {
    return function (control) {
        if (!control.valueChanges) {
            return of(null);
        }
        else {
            return control.valueChanges.pipe(debounceTime(500), distinctUntilChanged(), switchMap(function () {
                var validatorSubject$ = new Subject();
                var httpHeaders = new HttpHeaders({
                    'Authorization': 'Basic ' + btoa(oauthResource['client_id'] + ':' + oauthResource['client_secret']),
                    'Content-Type': 'application/json',
                });
                var data = {
                    'user': control.value,
                };
                var dataValidator;
                if (control.value) {
                    httpBaseService.HTTP_BASE(apiPath['auth']['check-user'], data, httpHeaders).subscribe(function (response) {
                        if (response['respStatusCode'] === ResponseCode.OK_SCR012.toString()) {
                            validatorSubject$.next(null);
                        }
                        else {
                            dataValidator = {
                                error: true,
                            };
                            validatorSubject$.next(dataValidator);
                        }
                    }, function (error) {
                        if (!(error instanceof HttpErrorResponse)) {
                            dataValidator = {
                                error: true,
                            };
                        }
                        else {
                            if (error.status === 302) {
                                dataValidator = {
                                    'not-available': true,
                                };
                            }
                            else {
                                dataValidator = {
                                    timeout: true,
                                };
                            }
                        }
                        validatorSubject$.next(dataValidator);
                    });
                }
                return validatorSubject$.asObservable();
            })).pipe(first());
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXItcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXItcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUNMLFNBQVMsRUFDVCxXQUFXLEdBSVosTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25DLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUNMLEdBQUcsRUFDSCxpQkFBaUIsRUFDakIsWUFBWSxFQUNaLFVBQVUsRUFDVixPQUFPLEVBQ1AsWUFBWSxHQUNiLE1BQU0sa0JBQWtCLENBQUM7QUFLMUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRTFGO0lBdUNFLCtCQUFvQixNQUFjLEVBQ3hCLEdBQXNCLEVBQ3RCLE1BQXVCLEVBQ3ZCLGFBQThCLEVBQzlCLFNBQTJCLEVBQ04sZUFBbUMsRUFDckMsYUFBb0MsRUFDM0MsT0FBaUI7UUFQbkIsV0FBTSxHQUFO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Q0wsYUFBYSxHQUFHO2dDQUNkLEtBQUssRUFBRSxJQUFJOzZCQUNaLENBQUM7NEJBQ0YsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO3lCQUN2QztvQkFDSCxDQUFDLEVBQ0QsVUFBQyxLQUFVO3dCQUNULElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxpQkFBaUIsQ0FBQyxFQUFFOzRCQUN6QyxhQUFhLEdBQUc7Z0NBQ2QsS0FBSyxFQUFFLElBQUk7NkJBQ1osQ0FBQzt5QkFDSDs2QkFBTTs0QkFDTCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO2dDQUN4QixhQUFhLEdBQUc7b0NBQ2QsZUFBZSxFQUFFLElBQUk7aUNBQ3RCLENBQUM7NkJBQ0g7aUNBQU07Z0NBQ0wsYUFBYSxHQUFHO29DQUNkLE9BQU8sRUFBRSxJQUFJO2lDQUNkLENBQUM7NkJBQ0g7eUJBQ0Y7d0JBQ0QsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUN4QyxDQUFDLENBQUMsQ0FBQztpQkFDTjtnQkFDRCxPQUFPLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDckI7SUFDSCxDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgRm9ybUdyb3VwLFxuICBGb3JtQ29udHJvbCxcbiAgVmFsaWRhdG9yRm4sXG4gIEFic3RyYWN0Q29udHJvbCxcbiAgQXN5bmNWYWxpZGF0b3JGbixcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaXJzdCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBOYkRpYWxvZ1NlcnZpY2UgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQge1xuICBBUEksXG4gIEVuY3J5cHRpb25TZXJ2aWNlLFxuICBIVFRQX1NFUlZJQ0UsXG4gIE9BVVRIX0lORk8sXG4gIFBhdHRlcm4sXG4gIFJlc3BvbnNlQ29kZSxcbn0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBBcGlCYXNlUmVzcG9uc2UgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEFQSU1vZGVsIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBIdHRwRmFjdG9yeVNlcnZpY2UgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IFNlY3VyaXR5UmVzb3VyY2VNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgRG9Ub2FzdHJTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29tbW9uJztcbmltcG9ydCB7IFRlcm1zQ29uZGl0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4uL3Rlcm1zLWNvbmRpdGlvbnMvdGVybXMtY29uZGl0aW9ucy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2RvLXJlZ2lzdGVyLXBhZ2UnLFxuICAgIHN0eWxlVXJsczogWydyZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgdGVtcGxhdGVVcmw6ICdyZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICBwdWJsaWMgcGF0dGVybkZ1bGxuYW1lOiBzdHJpbmcgPSBQYXR0ZXJuLkZVTExOQU1FO1xuICBwdWJsaWMgcGF0dGVyblVzZXJuYW1lOiBzdHJpbmcgPSBQYXR0ZXJuLlVTRVJOQU1FO1xuICBwdWJsaWMgcGF0dGVybkVtYWlsOiBzdHJpbmcgPSBQYXR0ZXJuLkVNQUlMO1xuICBwdWJsaWMgcGF0dGVyblBhc3N3b3JkOiBzdHJpbmcgPSBQYXR0ZXJuLlBBU1NXT1JEX01FRElVTTtcbiAgcHVibGljIGVycm9yTXNnRnVsbG5hbWU6IHN0cmluZztcbiAgcHVibGljIGVycm9yTXNnVXNlcm5hbWU6IHN0cmluZztcbiAgcHVibGljIGVycm9yTXNnRW1haWw6IHN0cmluZztcbiAgcHVibGljIGVycm9yTXNnUGFzc3dvcmQ6IHN0cmluZztcbiAgcHVibGljIGVycm9yTXNnQ29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XG4gIHB1YmxpYyBwYXJhbU1zZ1VzZXJuYW1lOiBhbnk7XG4gIHB1YmxpYyBwYXJhbU1zZ0VtYWlsOiBhbnk7XG4gIHB1YmxpYyBtaW5sZW5ndGhVc2VybmFtZTogbnVtYmVyID0gNDtcbiAgcHVibGljIG1pbmxlbmd0aEVtYWlsOiBudW1iZXIgPSA1O1xuXG4gIHB1YmxpYyBmb3JtOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICBmdWxsbmFtZTogbmV3IEZvcm1Db250cm9sKCksXG4gICAgdXNlcm5hbWU6IG5ldyBGb3JtQ29udHJvbCgpLFxuICAgIGVtYWlsOiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgICBwYXNzd29yZDogbmV3IEZvcm1Db250cm9sKCksXG4gICAgY29uZmlybVBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgICB0ZXJtczogbmV3IEZvcm1Db250cm9sKCksXG4gICAgcmVjYXB0Y2hhOiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgfSk7XG5cbiAgcHVibGljIHJlc3BvbnNlRXJyb3I6IGFueTtcbiAgcHVibGljIGJ1dHRvblJlZ2lzdGVyOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgcHJvZ3Jlc3NCYXI6IG51bWJlciA9IDI1O1xuICBwcml2YXRlIGlzQ2hlY2tVc2VybmFtZTogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgaXNDaGVja0VtYWlsOiBib29sZWFuID0gdHJ1ZTtcblxuICBwcm90ZWN0ZWQgZGVzdHJveSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZW5jOiBFbmNyeXB0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIHRvYXN0cjogRG9Ub2FzdHJTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogTmJEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIEBJbmplY3QoSFRUUF9TRVJWSUNFKXByaXZhdGUgaHR0cEJhc2VTZXJ2aWNlOiBIdHRwRmFjdG9yeVNlcnZpY2UsXG4gICAgQEluamVjdChPQVVUSF9JTkZPKXByaXZhdGUgb2F1dGhSZXNvdXJjZTogU2VjdXJpdHlSZXNvdXJjZU1vZGVsLFxuICAgIEBJbmplY3QoQVBJKXByaXZhdGUgYXBpUGF0aDogQVBJTW9kZWwpIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95JC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyKCkge1xuICAgIGlmICghdGhpcy5mb3JtLmludmFsaWQpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWNlLWRvbmUnKS5mb3JFYWNoKHBhY2UgPT4ge1xuICAgICAgICBwYWNlLmNsYXNzTmFtZSA9IHBhY2UuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtZG9uZSBwYWNlLWRvbmUnLCAncGFjZS1ydW5uaW5nJyk7XG4gICAgICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1kb25lJywgJ3BhY2UtcnVubmluZycpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1pbmFjdGl2ZScpLmZvckVhY2gocGFjZSA9PiB7XG4gICAgICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1pbmFjdGl2ZSBwYWNlLWluYWN0aXZlJywgJ3BhY2UtYWN0aXZlJyk7XG4gICAgICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1pbmFjdGl2ZScsICdwYWNlLWFjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBwcm9ncmVzc0RPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhY2UtcHJvZ3Jlc3MnKS5pdGVtKDApIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NCYXIgPCAzNSkge1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gMzU7XG4gICAgICAgIHByb2dyZXNzRE9NLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgdGhpcy5wcm9ncmVzc0JhciArICclLCAwcHgsIDBweCknO1xuICAgICAgICBwcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzLXRleHQnKS52YWx1ZSA9IHRoaXMucHJvZ3Jlc3NCYXIgKyAnJSc7XG4gICAgICAgIHByb2dyZXNzRE9NLmdldEF0dHJpYnV0ZU5vZGUoJ2RhdGEtcHJvZ3Jlc3MnKS52YWx1ZSA9IHRoaXMucHJvZ3Jlc3NCYXIudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZXNwb25zZUVycm9yID0gbnVsbDtcbiAgICAgIGNvbnN0IGRhdGE6IGFueSA9IHRoaXMuZm9ybS52YWx1ZTtcbiAgICAgIGRhdGFbJ3Bhc3N3b3JkJ10gPSB0aGlzLmVuYy5lbmNyeXB0QUVTKHRoaXMub2F1dGhSZXNvdXJjZVsnYWVzX2tleSddLCB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10udmFsdWUpO1xuICAgICAgZGF0YVsnY29uZmlybVBhc3N3b3JkJ10gPSB0aGlzLmVuYy5lbmNyeXB0QUVTKHRoaXMub2F1dGhSZXNvdXJjZVsnYWVzX2tleSddLCB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLnZhbHVlKTtcbiAgICAgIGNvbnN0IGh0dHBIZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljICcgKyBidG9hKHRoaXMub2F1dGhSZXNvdXJjZVsnY2xpZW50X2lkJ10gKyAnOicgKyB0aGlzLm9hdXRoUmVzb3VyY2VbJ2NsaWVudF9zZWNyZXQnXSksXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiB0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZyxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5idXR0b25SZWdpc3RlciA9IHRydWU7XG4gICAgICB0aGlzLmh0dHBCYXNlU2VydmljZS5IVFRQX0JBU0UodGhpcy5hcGlQYXRoWydhdXRoJ11bJ3NpZ251cCddLCBkYXRhLCBodHRwSGVhZGVycylcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZTogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihyZXNwb25zZS5yZXNwU3RhdHVzTWVzc2FnZVtyZXNwb25zZS5yZXNwU3RhdHVzQ29kZV0pO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IDkwO1xuICAgICAgICAgICAgcHJvZ3Jlc3NET00uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKCcgKyB0aGlzLnByb2dyZXNzQmFyICsgJyUsIDBweCwgMHB4KSc7XG4gICAgICAgICAgICBwcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzLXRleHQnKS52YWx1ZSA9IHRoaXMucHJvZ3Jlc3NCYXIgKyAnJSc7XG4gICAgICAgICAgICBwcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzJykudmFsdWUgPSB0aGlzLnByb2dyZXNzQmFyLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gMDtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXNwU3RhdHVzQ29kZSA9PT0gUmVzcG9uc2VDb2RlLk9LX1JFR0lTVEVSRUQpIHtcbiAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXV0aC9sb2dpbiddKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICB0aGlzLmJ1dHRvblJlZ2lzdGVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5idXR0b25SZWdpc3RlciA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmJ1dHRvblJlZ2lzdGVyID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IDg1O1xuICAgICAgICAgIHByb2dyZXNzRE9NLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgdGhpcy5wcm9ncmVzc0JhciArICclLCAwcHgsIDBweCknO1xuICAgICAgICAgIHByb2dyZXNzRE9NLmdldEF0dHJpYnV0ZU5vZGUoJ2RhdGEtcHJvZ3Jlc3MtdGV4dCcpLnZhbHVlID0gdGhpcy5wcm9ncmVzc0JhciArICclJztcbiAgICAgICAgICBwcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzJykudmFsdWUgPSB0aGlzLnByb2dyZXNzQmFyLnRvU3RyaW5nKCk7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhY2UtcnVubmluZycpLmZvckVhY2gocGFjZSA9PiB7XG4gICAgICAgICAgICBwYWNlLmNsYXNzTmFtZSA9IHBhY2UuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtcnVubmluZycsICdwYWNlLWRvbmUnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1hY3RpdmUnKS5mb3JFYWNoKHBhY2UgPT4ge1xuICAgICAgICAgICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWFjdGl2ZScsICdwYWNlLWluYWN0aXZlJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IDA7XG5cbiAgICAgICAgICBpZiAoIShlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSkge1xuICAgICAgICAgICAgaWYgKGVycm9yWydyZXNwU3RhdHVzQ29kZSddKSB7XG4gICAgICAgICAgICAgIHN3aXRjaCAoZXJyb3JbJ3Jlc3BTdGF0dXNDb2RlJ10pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFJlc3BvbnNlQ29kZS5FUlJfU0NSMDAwNS50b1N0cmluZygpOlxuICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddLnNldEVycm9ycyh7XG4gICAgICAgICAgICAgICAgICAgICdpbnZhbGlkJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBSZXNwb25zZUNvZGUuRVJSX1NDUjAwMTEudG9TdHJpbmcoKTpcbiAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10uc2V0RXJyb3JzKHtcbiAgICAgICAgICAgICAgICAgICAgJ2VxdWFsJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VFcnJvciA9IGVycm9yWydyZXNwU3RhdHVzTWVzc2FnZSddW2Vycm9yWydyZXNwU3RhdHVzQ29kZSddXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGhhc0Vycm9yRnVsbG5hbWUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1snZnVsbG5hbWUnXS5lcnJvcnMgJiYgdGhpcy5mb3JtLmNvbnRyb2xzWydmdWxsbmFtZSddLmludmFsaWQgJiYgdGhpcy5mb3JtLmNvbnRyb2xzWydmdWxsbmFtZSddLnRvdWNoZWQpIHtcbiAgICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbJ2Z1bGxuYW1lJ10uZXJyb3JzWydyZXF1aXJlZCddKVxuICAgICAgICB0aGlzLmVycm9yTXNnRnVsbG5hbWUgPSAnZXJyb3IuZnVsbG5hbWUucmVxdWlyZWQnO1xuICAgICAgZWxzZVxuICAgICAgICB0aGlzLmVycm9yTXNnRnVsbG5hbWUgPSAnZXJyb3IuZnVsbG5hbWUuaW52YWxpZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXJyb3JNc2dGdWxsbmFtZSA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2Z1bGxuYW1lJ10gJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snZnVsbG5hbWUnXS5pbnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2Z1bGxuYW1lJ10udG91Y2hlZFxuICAgICk7XG4gIH1cblxuICBnZXQgaGFzU3VjY2Vzc0Z1bGxuYW1lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2Z1bGxuYW1lJ10gJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snZnVsbG5hbWUnXS52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydmdWxsbmFtZSddLnRvdWNoZWRcbiAgICApO1xuICB9XG5cbiAgZ2V0IGhhc0Vycm9yVXNlcm5hbWUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXS5lcnJvcnMgJiYgdGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddLmludmFsaWQgJiYgdGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddLnRvdWNoZWQpIHtcbiAgICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ10uZXJyb3JzWydyZXF1aXJlZCddKVxuICAgICAgICB0aGlzLmVycm9yTXNnVXNlcm5hbWUgPSAnZXJyb3IudXNlcm5hbWUucmVxdWlyZWQnO1xuICAgICAgZWxzZSBpZiAodGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddLmVycm9yc1snbm90LWF2YWlsYWJsZSddKSB7XG4gICAgICAgIHRoaXMuZXJyb3JNc2dVc2VybmFtZSA9ICdlcnJvci51c2VybmFtZS5ub3QtYXZhaWxhYmxlJztcbiAgICAgICAgdGhpcy5wYXJhbU1zZ1VzZXJuYW1lID0ge1xuICAgICAgICAgIHZhbHVlOiB0aGlzLmZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ10udmFsdWUsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXS5lcnJvcnNbJ3RpbWVvdXQnXSlcbiAgICAgICAgdGhpcy5lcnJvck1zZ1VzZXJuYW1lID0gJ2Vycm9yLjAnO1xuICAgICAgZWxzZSBpZiAodGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddLmVycm9yc1snZXJyb3InXSlcbiAgICAgICAgdGhpcy5lcnJvck1zZ1VzZXJuYW1lID0gJ2Vycm9yLjUwMCc7XG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuZXJyb3JNc2dVc2VybmFtZSA9ICdlcnJvci51c2VybmFtZS5pbnZhbGlkJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCh0aGlzLmZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ10udG91Y2hlZCB8fCB0aGlzLmZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ10uZGlydHkpICYmIHRoaXMuaXNDaGVja1VzZXJuYW1lKSB7XG4gICAgICAgIHRoaXMuaXNDaGVja1VzZXJuYW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXS5zZXRBc3luY1ZhbGlkYXRvcnMoW3VzZXJWYWxpZGF0b3IodGhpcy5vYXV0aFJlc291cmNlLCB0aGlzLmh0dHBCYXNlU2VydmljZSwgdGhpcy5hcGlQYXRoKV0pO1xuICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ10udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5lcnJvck1zZ1VzZXJuYW1lID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXSAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddLmludmFsaWQgJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXS50b3VjaGVkXG4gICAgKTtcbiAgfVxuXG4gIGdldCBoYXNTdWNjZXNzVXNlcm5hbWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXSAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddLnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ10udG91Y2hlZFxuICAgICAgKTtcbiAgfVxuXG4gIGdldCBoYXNFcnJvckVtYWlsKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbJ2VtYWlsJ10uZXJyb3JzICYmIHRoaXMuZm9ybS5jb250cm9sc1snZW1haWwnXS5pbnZhbGlkICYmIHRoaXMuZm9ybS5jb250cm9sc1snZW1haWwnXS50b3VjaGVkKSB7XG4gICAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzWydlbWFpbCddLmVycm9yc1sncmVxdWlyZWQnXSlcbiAgICAgICAgdGhpcy5lcnJvck1zZ0VtYWlsID0gJ2Vycm9yLmVtYWlsLnJlcXVpcmVkJztcbiAgICAgIGVsc2UgaWYgKHRoaXMuZm9ybS5jb250cm9sc1snZW1haWwnXS5lcnJvcnNbJ25vdC1hdmFpbGFibGUnXSkge1xuICAgICAgICB0aGlzLmVycm9yTXNnRW1haWwgPSAnZXJyb3IuZW1haWwubm90LWF2YWlsYWJsZSc7XG4gICAgICAgIHRoaXMucGFyYW1Nc2dFbWFpbCA9IHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy5mb3JtLmNvbnRyb2xzWydlbWFpbCddLnZhbHVlLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmZvcm0uY29udHJvbHNbJ2VtYWlsJ10uZXJyb3JzWyd0aW1lb3V0J10pXG4gICAgICAgIHRoaXMuZXJyb3JNc2dFbWFpbCA9ICdlcnJvci4wJztcbiAgICAgIGVsc2UgaWYgKHRoaXMuZm9ybS5jb250cm9sc1snZW1haWwnXS5lcnJvcnNbJ2Vycm9yJ10pXG4gICAgICAgIHRoaXMuZXJyb3JNc2dFbWFpbCA9ICdlcnJvci41MDAnO1xuICAgICAgZWxzZVxuICAgICAgICB0aGlzLmVycm9yTXNnRW1haWwgPSAnZXJyb3IuZW1haWwuaW52YWxpZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgodGhpcy5mb3JtLmNvbnRyb2xzWydlbWFpbCddLnRvdWNoZWQgfHwgdGhpcy5mb3JtLmNvbnRyb2xzWydlbWFpbCddLmRpcnR5KSAmJiB0aGlzLmlzQ2hlY2tFbWFpbCkge1xuICAgICAgICB0aGlzLmlzQ2hlY2tFbWFpbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2VtYWlsJ10uc2V0QXN5bmNWYWxpZGF0b3JzKFt1c2VyVmFsaWRhdG9yKHRoaXMub2F1dGhSZXNvdXJjZSwgdGhpcy5odHRwQmFzZVNlcnZpY2UsIHRoaXMuYXBpUGF0aCldKTtcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydlbWFpbCddLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZXJyb3JNc2dFbWFpbCA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2VtYWlsJ10gJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snZW1haWwnXS5pbnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2VtYWlsJ10udG91Y2hlZFxuICAgICk7XG4gIH1cblxuICBnZXQgaGFzU3VjY2Vzc0VtYWlsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2VtYWlsJ10gJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snZW1haWwnXS52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydlbWFpbCddLnRvdWNoZWRcbiAgICAgICk7XG4gIH1cblxuICBnZXQgaGFzRXJyb3JQYXNzd29yZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddLmVycm9ycyAmJiB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10uaW52YWxpZCAmJiB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10udG91Y2hlZCkge1xuICAgICAgdGhpcy5lcnJvck1zZ1Bhc3N3b3JkID0gJ2Vycm9yLnBhdHRlcm4uUGFzc3dvcmQnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm9yTXNnUGFzc3dvcmQgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10uaW52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddLnRvdWNoZWRcbiAgICApO1xuICB9XG5cbiAgZ2V0IGhhc1N1Y2Nlc3NQYXNzd29yZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10udmFsaWQgJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS50b3VjaGVkXG4gICAgKTtcbiAgfVxuXG4gIGdldCBoYXNFcnJvckNvbmZpcm1QYXNzd29yZCgpOiBib29sZWFuIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLmVycm9ycyAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS5pbnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLnRvdWNoZWQpIHtcbiAgICAgIHRoaXMuZXJyb3JNc2dDb25maXJtUGFzc3dvcmQgPSAnZXJyb3IuZXF1YWwuY29uZmlybVBhc3N3b3JkLXJlZ2lzdGVyJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS52YWx1ZSAhPT0gdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS52YWx1ZSkge1xuICAgICAgICB0aGlzLmVycm9yTXNnQ29uZmlybVBhc3N3b3JkID0gJ2Vycm9yLmVxdWFsLmNvbmZpcm1QYXNzd29yZC1yZWdpc3Rlcic7XG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10uc2V0VmFsaWRhdG9ycyhbY29uZmlybVBhc3N3b3JkVmFsaWRhdG9yKHRoaXMuZm9ybSldKTtcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVycm9yTXNnQ29uZmlybVBhc3N3b3JkID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10gJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10uaW52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS50b3VjaGVkXG4gICAgKTtcbiAgfVxuXG4gIGdldCBoYXNTdWNjZXNzQ29uZmlybVBhc3N3b3JkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLnRvdWNoZWRcbiAgICApO1xuICB9XG5cbiAgb25DaGVja2VkQ2hhbmdlKCl7XG4gICAgaWYgKCF0aGlzLmZvcm0uY29udHJvbHNbJ3Rlcm1zJ10udmFsdWUpIHtcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndGVybXMnXS5zZXRWYWx1ZShudWxsKTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrVGVybXNDb25kaXRpb25zKCl7XG4gICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgJ3BhcmFtZXRlckNvZGUnOiAnVEVSTVNfQ09ORElUSU9OUy5ET05HS0FQJ1xuICAgIH07XG4gICAgY29uc3QgaHR0cEhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljICcgKyBidG9hKHRoaXMub2F1dGhSZXNvdXJjZVsnY2xpZW50X2lkJ10gKyAnOicgKyB0aGlzLm9hdXRoUmVzb3VyY2VbJ2NsaWVudF9zZWNyZXQnXSksXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IHRoaXMudHJhbnNsYXRlLmN1cnJlbnRMYW5nLFxuICAgIH0pO1xuICAgIHRoaXMuaHR0cEJhc2VTZXJ2aWNlLkhUVFBfQkFTRSh0aGlzLmFwaVBhdGhbJ29wZW5hcGknXVsncGFyYW1ldGVyJ10sIGRhdGEsIGh0dHBIZWFkZXJzKVxuICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihUZXJtc0NvbmRpdGlvbnNDb21wb25lbnQsIHtcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlWydwYXJhbWV0ZXJWYWx1ZSddLFxuICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAub25DbG9zZS5zdWJzY3JpYmUoKHRlcm1zOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHRlcm1zKSB7XG4gICAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyd0ZXJtcyddLnNldFZhbHVlKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uS2V5RG93blVzZXJuYW1lKGV2ZW50OiBLZXlib2FyZEV2ZW50KXtcbiAgICBpZiAoZXZlbnQua2V5KSB7XG4gICAgICBpZiAoIWV2ZW50LmtleS5tYXRjaCgvWyFAIyQlXiYqKCk/XCI6e318PD5cXFtcXF07XFxcXD1+YF0vZykpIHtcbiAgICAgICAgaWYgKChbXG4gICAgICAgICAgJ1RBQicsXG4gICAgICAgICAgJ0VTQ0FQRScsXG4gICAgICAgICAgJ0VOVEVSJyxcbiAgICAgICAgICAnSE9NRScsXG4gICAgICAgICAgJ0VORCcsXG4gICAgICAgICAgJ0FSUk9XTEVGVCcsXG4gICAgICAgICAgJ0FSUk9XUklHSFQnLFxuICAgICAgICAgICdBUlJPV1VQJyxcbiAgICAgICAgICAnQVJST1dET1dOJyxcbiAgICAgICAgICAnUEFHRVVQJyxcbiAgICAgICAgICAnUEFHRURPV04nXS5pbmRleE9mKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpKSA9PT0gLTEpICYmXG4gICAgICAgICFldmVudC5jdHJsS2V5ICYmICFldmVudC5tZXRhS2V5ICYmICFldmVudC5hbHRLZXkpXG4gICAgICAgICAgICB0aGlzLmlzQ2hlY2tVc2VybmFtZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duRW1haWwoZXZlbnQ6IEtleWJvYXJkRXZlbnQpe1xuICAgIGlmIChldmVudC5rZXkpIHtcbiAgICAgIGlmICghZXZlbnQua2V5Lm1hdGNoKC9bISMkJV4mKigpP1wiOnt9fDw+XFxbXFxdO1xcXFw9fmBdL2cpKSB7XG4gICAgICAgIGlmICgoW1xuICAgICAgICAgICdUQUInLFxuICAgICAgICAgICdFU0NBUEUnLFxuICAgICAgICAgICdFTlRFUicsXG4gICAgICAgICAgJ0hPTUUnLFxuICAgICAgICAgICdFTkQnLFxuICAgICAgICAgICdBUlJPV0xFRlQnLFxuICAgICAgICAgICdBUlJPV1JJR0hUJyxcbiAgICAgICAgICAnQVJST1dVUCcsXG4gICAgICAgICAgJ0FSUk9XRE9XTicsXG4gICAgICAgICAgJ1BBR0VVUCcsXG4gICAgICAgICAgJ1BBR0VET1dOJ10uaW5kZXhPZihldmVudC5rZXkudG9VcHBlckNhc2UoKSkgPT09IC0xKSAmJlxuICAgICAgICAhZXZlbnQuY3RybEtleSAmJiAhZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuYWx0S2V5KVxuICAgICAgICAgIHRoaXMuaXNDaGVja0VtYWlsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlybVBhc3N3b3JkVmFsaWRhdG9yKGZvcm06IEZvcm1Hcm91cCk6IFZhbGlkYXRvckZuIHtcbiAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgbnVsbCA9PiB7XG4gICAgaWYgKGZvcm0uY29udHJvbHMpIHtcbiAgICAgIGlmIChmb3JtLmNvbnRyb2xzWydwYXNzd29yZCddLnZhbHVlICE9PSBmb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS52YWx1ZSlcbiAgICAgICAgICByZXR1cm4geyBlcXVhbDogdHJ1ZSB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZXJWYWxpZGF0b3IoXG4gIG9hdXRoUmVzb3VyY2U6IFNlY3VyaXR5UmVzb3VyY2VNb2RlbCxcbiAgaHR0cEJhc2VTZXJ2aWNlOiBIdHRwRmFjdG9yeVNlcnZpY2UsXG4gIGFwaVBhdGg6IEFQSU1vZGVsKTogQXN5bmNWYWxpZGF0b3JGbiB7XG4gIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSA9PiB7XG4gICAgaWYgKCFjb250cm9sLnZhbHVlQ2hhbmdlcykge1xuICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDUwMCksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsaWRhdG9yU3ViamVjdCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PEFwaUJhc2VSZXNwb25zZT4oKTtcbiAgICAgICAgICBjb25zdCBodHRwSGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgJyArIGJ0b2Eob2F1dGhSZXNvdXJjZVsnY2xpZW50X2lkJ10gKyAnOicgKyBvYXV0aFJlc291cmNlWydjbGllbnRfc2VjcmV0J10pLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICAgICAgICAndXNlcic6IGNvbnRyb2wudmFsdWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBsZXQgZGF0YVZhbGlkYXRvcjogYW55O1xuICAgICAgICAgIGlmIChjb250cm9sLnZhbHVlKXtcbiAgICAgICAgICAgIGh0dHBCYXNlU2VydmljZS5IVFRQX0JBU0UoYXBpUGF0aFsnYXV0aCddWydjaGVjay11c2VyJ10sIGRhdGEsIGh0dHBIZWFkZXJzKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlWydyZXNwU3RhdHVzQ29kZSddID09PSBSZXNwb25zZUNvZGUuT0tfU0NSMDEyLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvclN1YmplY3QkLm5leHQobnVsbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGRhdGFWYWxpZGF0b3IgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvclN1YmplY3QkLm5leHQoZGF0YVZhbGlkYXRvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgICBkYXRhVmFsaWRhdG9yID0ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDMwMikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhVmFsaWRhdG9yID0ge1xuICAgICAgICAgICAgICAgICAgICAgICdub3QtYXZhaWxhYmxlJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFWYWxpZGF0b3IgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yU3ViamVjdCQubmV4dChkYXRhVmFsaWRhdG9yKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB2YWxpZGF0b3JTdWJqZWN0JC5hc09ic2VydmFibGUoKTtcbiAgICAgICAgfSkpLnBpcGUoZmlyc3QoKSk7XG4gICAgfVxuICB9O1xufVxuIl19