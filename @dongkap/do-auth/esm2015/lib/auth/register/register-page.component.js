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
export class RegisterPageComponent {
    constructor(router, enc, toastr, dialogService, translate, httpBaseService, oauthResource, apiPath) {
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
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    register() {
        if (!this.form.invalid) {
            document.querySelectorAll('.pace-done').forEach(pace => {
                pace.className = pace.className.replace('pace-done pace-done', 'pace-running');
                pace.className = pace.className.replace('pace-done', 'pace-running');
            });
            document.querySelectorAll('.pace-inactive').forEach(pace => {
                pace.className = pace.className.replace('pace-inactive pace-inactive', 'pace-active');
                pace.className = pace.className.replace('pace-inactive', 'pace-active');
            });
            const progressDOM = document.getElementsByClassName('pace-progress').item(0);
            if (this.progressBar < 35) {
                this.progressBar = 35;
                progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
            }
            this.responseError = null;
            const data = this.form.value;
            data['password'] = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['password'].value);
            data['confirmPassword'] = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['confirmPassword'].value);
            const httpHeaders = new HttpHeaders({
                'Authorization': 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                'Content-Type': 'application/json',
                'Accept-Language': this.translate.currentLang,
            });
            this.buttonRegister = true;
            this.httpBaseService.HTTP_BASE(this.apiPath['auth']['signup'], data, httpHeaders)
                .pipe(takeUntil(this.destroy$))
                .subscribe((response) => {
                if (response) {
                    this.toastr.showI18n(response.respStatusMessage[response.respStatusCode]);
                    this.progressBar = 90;
                    progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                    progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                    progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
                    this.progressBar = 0;
                    if (response.respStatusCode === ResponseCode.OK_REGISTERED) {
                        this.router.navigate(['/auth/login']);
                    }
                    else {
                        this.form.reset();
                        this.buttonRegister = false;
                    }
                }
                else {
                    this.form.reset();
                    this.buttonRegister = false;
                }
            }, (error) => {
                this.buttonRegister = false;
                this.progressBar = 85;
                progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
                document.querySelectorAll('.pace-running').forEach(pace => {
                    pace.className = pace.className.replace('pace-running', 'pace-done');
                });
                document.querySelectorAll('.pace-active').forEach(pace => {
                    pace.className = pace.className.replace('pace-active', 'pace-inactive');
                });
                this.progressBar = 0;
                if (!(error instanceof HttpErrorResponse)) {
                    if (error['respStatusCode']) {
                        switch (error['respStatusCode']) {
                            case ResponseCode.ERR_SCR0005.toString():
                                this.form.controls['password'].setErrors({
                                    'invalid': true,
                                });
                                break;
                            case ResponseCode.ERR_SCR0011.toString():
                                this.form.controls['confirmPassword'].setErrors({
                                    'equal': true,
                                });
                                break;
                            default:
                                break;
                        }
                        this.responseError = error['respStatusMessage'][error['respStatusCode']];
                    }
                }
                else {
                }
            });
        }
    }
    get hasErrorFullname() {
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
    }
    get hasSuccessFullname() {
        return (this.form.controls['fullname'] &&
            this.form.controls['fullname'].valid &&
            this.form.controls['fullname'].touched);
    }
    get hasErrorUsername() {
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
    }
    get hasSuccessUsername() {
        return (this.form.controls['username'] &&
            this.form.controls['username'].valid &&
            this.form.controls['username'].touched);
    }
    get hasErrorEmail() {
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
    }
    get hasSuccessEmail() {
        return (this.form.controls['email'] &&
            this.form.controls['email'].valid &&
            this.form.controls['email'].touched);
    }
    get hasErrorPassword() {
        if (this.form.controls['password'].errors && this.form.controls['password'].invalid && this.form.controls['password'].touched) {
            this.errorMsgPassword = 'error.pattern.Password';
        }
        else {
            this.errorMsgPassword = null;
        }
        return (this.form.controls['password'] &&
            this.form.controls['password'].invalid &&
            this.form.controls['password'].touched);
    }
    get hasSuccessPassword() {
        return (this.form.controls['password'] &&
            this.form.controls['password'].valid &&
            this.form.controls['password'].touched);
    }
    get hasErrorConfirmPassword() {
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
    }
    get hasSuccessConfirmPassword() {
        return (this.form.controls['confirmPassword'] &&
            this.form.controls['confirmPassword'].valid &&
            this.form.controls['confirmPassword'].touched);
    }
    onCheckedChange() {
        if (!this.form.controls['terms'].value) {
            this.form.controls['terms'].setValue(null);
        }
    }
    onClickTermsConditions() {
        const data = {
            'parameterCode': 'TERMS_CONDITIONS.DONGKAP'
        };
        const httpHeaders = new HttpHeaders({
            'Authorization': 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
            'Content-Type': 'application/json',
            'Accept-Language': this.translate.currentLang,
        });
        this.httpBaseService.HTTP_BASE(this.apiPath['openapi']['parameter'], data, httpHeaders)
            .pipe(takeUntil(this.destroy$))
            .subscribe((response) => {
            this.dialogService.open(TermsConditionsComponent, {
                context: {
                    content: response['parameterValue'],
                },
            })
                .onClose.subscribe((terms) => {
                if (terms) {
                    this.form.controls['terms'].setValue(true);
                }
            });
        });
    }
    onKeyDownUsername(event) {
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
    }
    onKeyDownEmail(event) {
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
    }
}
RegisterPageComponent.ctorParameters = () => [
    { type: Router },
    { type: EncryptionService },
    { type: DoToastrService },
    { type: NbDialogService },
    { type: TranslateService },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] }
];
RegisterPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-register-page',
                template: "<h1 id=\"title\" class=\"title\">{{ 'Register' | translate }}</h1>\n\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.register' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"register()\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-name\">{{ 'Full name' | translate }}* :</label>\n    <input [formControlName]=\"'fullname'\"\n          [required]=\"true\"\n          minlength=\"4\"\n          maxlength=\"50\"\n          [pattern]=\"patternFullname\"\n          [ngClass]=\"{\n            'status-danger': hasErrorFullname,\n            'status-success': hasSuccessFullname\n          }\"\n          name=\"fullname\"\n          id=\"inputFullname\"\n          placeholder=\"{{ 'Full name' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"1\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorFullname\">\n      <span class=\"caption status-danger\">{{errorMsgFullname | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-username\">{{ 'Username' | translate }}* :</label>\n    <input [formControlName]=\"'username'\"\n          [required]=\"true\"\n          minlength=\"5\"\n          maxlength=\"20\"\n          [pattern]=\"patternUsername\"\n          [ngClass]=\"{\n            'status-danger': hasErrorUsername,\n            'status-success': hasSuccessUsername\n          }\"\n          name=\"username\"\n          id=\"inputUsername\"\n          (keydown)=\"onKeyDownUsername($event)\"\n          placeholder=\"{{ 'Username' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"2\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorUsername\">\n      <span class=\"caption status-danger\">{{errorMsgUsername | translate:paramMsgUsername}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-email\">{{ 'Email' | translate }}* :</label>\n    <input [formControlName]=\"'email'\"\n          [required]=\"true\"\n          minlength=\"5\"\n          maxlength=\"50\"\n          [pattern]=\"patternEmail\"\n          [ngClass]=\"{\n            'status-danger': hasErrorEmail,\n            'status-success': hasSuccessEmail\n          }\"\n          name=\"email\"\n          id=\"inputEmail\"\n          (keydown)=\"onKeyDownEmail($event)\"\n          placeholder=\"{{ 'Email' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"3\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorEmail\">\n      <span class=\"caption status-danger\">{{errorMsgEmail | translate:paramMsgEmail}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-password\">{{ 'Password' | translate }}* :</label>\n    <input [formControlName]=\"'password'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [pattern]=\"patternPassword\"\n          [ngClass]=\"{\n            'status-danger': hasErrorPassword,\n            'status-success': hasSuccessPassword\n          }\"\n          name=\"password\"\n          type=\"password\"\n          id=\"inputPassword\"\n          placeholder=\"{{ 'Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"4\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-confirmpassword\">{{ 'Confirm Password' | translate }}* :</label>\n    <input [formControlName]=\"'confirmPassword'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [ngClass]=\"{\n            'status-danger': hasErrorConfirmPassword,\n            'status-success': hasSuccessConfirmPassword\n          }\"\n          name=\"confirmPassword\"\n          type=\"password\"\n          id=\"inputConfirmPassword\"\n          placeholder=\"{{ 'Confirm Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"5\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorConfirmPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgConfirmPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group accept-group\">\n    <div class=\"terms-row row\">\n      <nb-checkbox\n        name=\"terms\"\n        [formControlName]=\"'terms'\"\n        [required]=\"true\"\n        (change)=\"onCheckedChange()\">\n        {{ 'message.terms-conditions-label' | translate}}\n      </nb-checkbox>\n      <span class=\"terms-conditions\" (click)=\"onClickTermsConditions()\" tabindex=\"-1\"><strong>{{ 'message.terms-conditions' | translate}}</strong></span>\n    </div>\n  </div>\n\n  <div class=\"form-control-group\" style=\"transform:scale(0.7);transform-origin:0;\">\n    <re-captcha\n      [formControlName]=\"'recaptcha'\"\n      required>\n    </re-captcha>\n  </div>\n\n  <button [disabled]=\"!form.valid || buttonRegister\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"!form.valid || buttonRegister\">\n    {{ 'Register' | translate }}\n  </button>\n</form>\n\n<section class=\"another-action\" aria-label=\"Sign in\">\n  {{ 'message.register-footer' | translate}} <a class=\"text-link\" routerLink=\"/auth/login\" tabindex=\"-1\">{{ 'Login' | translate}}</a>\n</section>\n",
                styles: [".terms-row{margin-left:0}.terms-conditions{padding:.1rem 0 0 .25rem;color:#36f;text-decoration:underline;font-size:inherit;font-style:inherit;font-weight:inherit;line-height:inherit;cursor:pointer}.terms-conditions:hover{color:#598bff}"]
            },] }
];
RegisterPageComponent.ctorParameters = () => [
    { type: Router },
    { type: EncryptionService },
    { type: DoToastrService },
    { type: NbDialogService },
    { type: TranslateService },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] }
];
export function confirmPasswordValidator(form) {
    return (control) => {
        if (form.controls) {
            if (form.controls['password'].value !== form.controls['confirmPassword'].value)
                return { equal: true };
        }
        return null;
    };
}
export function userValidator(oauthResource, httpBaseService, apiPath) {
    return (control) => {
        if (!control.valueChanges) {
            return of(null);
        }
        else {
            return control.valueChanges.pipe(debounceTime(500), distinctUntilChanged(), switchMap(() => {
                const validatorSubject$ = new Subject();
                const httpHeaders = new HttpHeaders({
                    'Authorization': 'Basic ' + btoa(oauthResource['client_id'] + ':' + oauthResource['client_secret']),
                    'Content-Type': 'application/json',
                });
                const data = {
                    'user': control.value,
                };
                let dataValidator;
                if (control.value) {
                    httpBaseService.HTTP_BASE(apiPath['auth']['check-user'], data, httpHeaders).subscribe((response) => {
                        if (response['respStatusCode'] === ResponseCode.OK_SCR012.toString()) {
                            validatorSubject$.next(null);
                        }
                        else {
                            dataValidator = {
                                error: true,
                            };
                            validatorSubject$.next(dataValidator);
                        }
                    }, (error) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXItcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXItcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUNMLFNBQVMsRUFDVCxXQUFXLEdBSVosTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25DLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUNMLEdBQUcsRUFDSCxpQkFBaUIsRUFDakIsWUFBWSxFQUNaLFVBQVUsRUFDVixPQUFPLEVBQ1AsWUFBWSxHQUNiLE1BQU0sa0JBQWtCLENBQUM7QUFLMUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBTzFGLE1BQU0sT0FBTyxxQkFBcUI7SUFrQ2hDLFlBQW9CLE1BQWMsRUFDeEIsR0FBc0IsRUFDdEIsTUFBdUIsRUFDdkIsYUFBOEIsRUFDOUIsU0FBMkIsRUFDTixlQUFtQyxFQUNyQyxhQUFvQyxFQUMzQyxPQUFpQjtRQVBuQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3hCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQUM5QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUNOLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQUNyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7UUFDM0MsWUFBTyxHQUFQLE9BQU8sQ0FBVTtRQXZDaEMsb0JBQWUsR0FBVyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQzNDLG9CQUFlLEdBQVcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUMzQyxpQkFBWSxHQUFXLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDckMsb0JBQWUsR0FBVyxPQUFPLENBQUMsZUFBZSxDQUFDO1FBUWxELHNCQUFpQixHQUFXLENBQUMsQ0FBQztRQUM5QixtQkFBYyxHQUFXLENBQUMsQ0FBQztRQUUzQixTQUFJLEdBQWMsSUFBSSxTQUFTLENBQUM7WUFDckMsUUFBUSxFQUFFLElBQUksV0FBVyxFQUFFO1lBQzNCLFFBQVEsRUFBRSxJQUFJLFdBQVcsRUFBRTtZQUMzQixLQUFLLEVBQUUsSUFBSSxXQUFXLEVBQUU7WUFDeEIsUUFBUSxFQUFFLElBQUksV0FBVyxFQUFFO1lBQzNCLGVBQWUsRUFBRSxJQUFJLFdBQVcsRUFBRTtZQUNsQyxLQUFLLEVBQUUsSUFBSSxXQUFXLEVBQUU7WUFDeEIsU0FBUyxFQUFFLElBQUksV0FBVyxFQUFFO1NBQzdCLENBQUMsQ0FBQztRQUdJLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQy9CLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTNCLGFBQVEsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQVV0RCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0sUUFBUTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN0QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNyRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLGNBQWMsQ0FBQyxDQUFDO2dCQUMvRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUN2RSxDQUFDLENBQUMsQ0FBQztZQUNILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDekQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFDdEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDMUUsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBZ0IsQ0FBQztZQUM1RixJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxFQUFFO2dCQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztnQkFDdEIsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDO2dCQUNqRixXQUFXLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7Z0JBQ2xGLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNuRjtZQUVELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLE1BQU0sSUFBSSxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxSCxNQUFNLFdBQVcsR0FBZ0IsSUFBSSxXQUFXLENBQUM7Z0JBQy9DLGVBQWUsRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQzdHLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVzthQUM5QyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLENBQUM7aUJBQ2hGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUM5QixTQUFTLENBQ1IsQ0FBQyxRQUF5QixFQUFFLEVBQUU7Z0JBQzVCLElBQUksUUFBUSxFQUFFO29CQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFDMUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7b0JBQ3RCLFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQztvQkFDakYsV0FBVyxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO29CQUNsRixXQUFXLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ2xGLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO29CQUNyQixJQUFJLFFBQVEsQ0FBQyxjQUFjLEtBQUssWUFBWSxDQUFDLGFBQWEsRUFBRTt3QkFDMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO3FCQUN2Qzt5QkFBTTt3QkFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNsQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztxQkFDN0I7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDbEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7aUJBQzdCO1lBQ0gsQ0FBQyxFQUNELENBQUMsS0FBVSxFQUFFLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUN0QixXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUM7Z0JBQ2pGLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztnQkFDbEYsV0FBVyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNsRixRQUFRLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUN4RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDdkUsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDdkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7Z0JBQzFFLENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO2dCQUVyQixJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksaUJBQWlCLENBQUMsRUFBRTtvQkFDekMsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsRUFBRTt3QkFDM0IsUUFBUSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsRUFBRTs0QkFDL0IsS0FBSyxZQUFZLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTtnQ0FDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDO29DQUN2QyxTQUFTLEVBQUUsSUFBSTtpQ0FDaEIsQ0FBQyxDQUFDO2dDQUNILE1BQU07NEJBQ1IsS0FBSyxZQUFZLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTtnQ0FDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxTQUFTLENBQUM7b0NBQzlDLE9BQU8sRUFBRSxJQUFJO2lDQUNkLENBQUMsQ0FBQztnQ0FDSCxNQUFNOzRCQUNSO2dDQUNFLE1BQU07eUJBQ1Q7d0JBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO3FCQUMxRTtpQkFDRjtxQkFBTTtpQkFDTjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDSCxDQUFDO0lBRUQsSUFBSSxnQkFBZ0I7UUFDbEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUM3SCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyx5QkFBeUIsQ0FBQzs7Z0JBRWxELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyx3QkFBd0IsQ0FBQztTQUNwRDthQUFNO1lBQ0wsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztTQUM5QjtRQUNELE9BQU8sQ0FDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTztZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQ3ZDLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyxDQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FDdkMsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQzdILElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLHlCQUF5QixDQUFDO2lCQUMvQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFBRTtnQkFDL0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLDhCQUE4QixDQUFDO2dCQUN2RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUc7b0JBQ3RCLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLO2lCQUM1QyxDQUFDO2FBQ0g7aUJBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUN6RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO2lCQUMvQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ3JELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUM7O2dCQUVwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsd0JBQXdCLENBQUM7U0FDcEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDNUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzSCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2FBQ3pEO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztTQUM5QjtRQUNELE9BQU8sQ0FDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTztZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQ3ZDLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyxDQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FDckMsQ0FBQztJQUNOLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ3BILElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxzQkFBc0IsQ0FBQztpQkFDekMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQzVELElBQUksQ0FBQyxhQUFhLEdBQUcsMkJBQTJCLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUc7b0JBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLO2lCQUN6QyxDQUFDO2FBQ0g7aUJBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztpQkFDNUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNsRCxJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQzs7Z0JBRWpDLElBQUksQ0FBQyxhQUFhLEdBQUcscUJBQXFCLENBQUM7U0FDOUM7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDbkcsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4SCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2FBQ3REO1lBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDM0I7UUFDRCxPQUFPLENBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU87WUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUNwQyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksZUFBZTtRQUNqQixPQUFPLENBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUs7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUNsQyxDQUFDO0lBQ04sQ0FBQztJQUVELElBQUksZ0JBQWdCO1FBQ2xCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDN0gsSUFBSSxDQUFDLGdCQUFnQixHQUFHLHdCQUF3QixDQUFDO1NBQ2xEO2FBQU07WUFDTCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxDQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPO1lBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FDdkMsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLGtCQUFrQjtRQUNwQixPQUFPLENBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUs7WUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUN2QyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksdUJBQXVCO1FBQ3pCLElBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFNO1lBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBTztZQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUMvQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsc0NBQXNDLENBQUM7U0FDdkU7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxFQUFFO2dCQUN4RixJQUFJLENBQUMsdUJBQXVCLEdBQUcsc0NBQXNDLENBQUM7Z0JBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0YsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2FBQ2hFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUM7YUFDckM7U0FDRjtRQUNELE9BQU8sQ0FDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU87WUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLENBQzlDLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSx5QkFBeUI7UUFDM0IsT0FBTyxDQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSztZQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FDOUMsQ0FBQztJQUNKLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBRUQsc0JBQXNCO1FBQ3BCLE1BQU0sSUFBSSxHQUFRO1lBQ2hCLGVBQWUsRUFBRSwwQkFBMEI7U0FDNUMsQ0FBQztRQUNGLE1BQU0sV0FBVyxHQUFnQixJQUFJLFdBQVcsQ0FBQztZQUMvQyxlQUFlLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdHLGNBQWMsRUFBRSxrQkFBa0I7WUFDbEMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXO1NBQzlDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQzthQUN0RixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtnQkFDaEQsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQUM7aUJBQ3BDO2FBQ0EsQ0FBQztpQkFDRCxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBYSxFQUFFLEVBQUU7Z0JBQ3JDLElBQUksS0FBSyxFQUFFO29CQUNULElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDNUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlCQUFpQixDQUFDLEtBQW9CO1FBQ3BDLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxFQUFFO2dCQUN2RCxJQUFJLENBQUM7b0JBQ0gsS0FBSztvQkFDTCxRQUFRO29CQUNSLE9BQU87b0JBQ1AsTUFBTTtvQkFDTixLQUFLO29CQUNMLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixTQUFTO29CQUNULFdBQVc7b0JBQ1gsUUFBUTtvQkFDUixVQUFVO2lCQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDdEQsQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO29CQUM3QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQzthQUNqQztTQUNGO0lBQ0gsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFvQjtRQUNqQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsRUFBRTtnQkFDdEQsSUFBSSxDQUFDO29CQUNILEtBQUs7b0JBQ0wsUUFBUTtvQkFDUixPQUFPO29CQUNQLE1BQU07b0JBQ04sS0FBSztvQkFDTCxXQUFXO29CQUNYLFlBQVk7b0JBQ1osU0FBUztvQkFDVCxXQUFXO29CQUNYLFFBQVE7b0JBQ1IsVUFBVTtpQkFBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ3RELENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtvQkFDL0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7YUFDNUI7U0FDRjtJQUNILENBQUM7OztZQXRVMkIsTUFBTTtZQUNuQixpQkFBaUI7WUFDZCxlQUFlO1lBQ1IsZUFBZTtZQUNuQixnQkFBZ0I7NENBQ2xDLE1BQU0sU0FBQyxZQUFZOzRDQUNuQixNQUFNLFNBQUMsVUFBVTs0Q0FDakIsTUFBTSxTQUFDLEdBQUc7OztZQTlDZCxTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtnQkFFNUIsNjBMQUEyQzs7YUFDOUM7OztZQXhCUSxNQUFNO1lBT2IsaUJBQWlCO1lBVVYsZUFBZTtZQWJmLGVBQWU7WUFEZixnQkFBZ0I7NENBNkRwQixNQUFNLFNBQUMsWUFBWTs0Q0FDbkIsTUFBTSxTQUFDLFVBQVU7NENBQ2pCLE1BQU0sU0FBQyxHQUFHOztBQW1VZixNQUFNLFVBQVUsd0JBQXdCLENBQUMsSUFBZTtJQUN0RCxPQUFPLENBQUMsT0FBd0IsRUFBaUMsRUFBRTtRQUNqRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSztnQkFDMUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUM1QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sVUFBVSxhQUFhLENBQzNCLGFBQW9DLEVBQ3BDLGVBQW1DLEVBQ25DLE9BQWlCO0lBQ2pCLE9BQU8sQ0FBQyxPQUF3QixFQUFFLEVBQUU7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDekIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNMLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQzlCLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsb0JBQW9CLEVBQUUsRUFDdEIsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDYixNQUFNLGlCQUFpQixHQUFpQixJQUFJLE9BQU8sRUFBbUIsQ0FBQztnQkFDdkUsTUFBTSxXQUFXLEdBQWdCLElBQUksV0FBVyxDQUFDO29CQUMvQyxlQUFlLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxHQUFHLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDbkcsY0FBYyxFQUFFLGtCQUFrQjtpQkFDbkMsQ0FBQyxDQUFDO2dCQUNILE1BQU0sSUFBSSxHQUFRO29CQUNoQixNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUs7aUJBQ3RCLENBQUM7Z0JBQ0YsSUFBSSxhQUFrQixDQUFDO2dCQUN2QixJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUM7b0JBQ2hCLGVBQWUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQ25GLENBQUMsUUFBYSxFQUFFLEVBQUU7d0JBQ2hCLElBQUksUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUssWUFBWSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRTs0QkFDcEUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUM5Qjs2QkFBTTs0QkFDTCxhQUFhLEdBQUc7Z0NBQ2QsS0FBSyxFQUFFLElBQUk7NkJBQ1osQ0FBQzs0QkFDRixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7eUJBQ3ZDO29CQUNILENBQUMsRUFDRCxDQUFDLEtBQVUsRUFBRSxFQUFFO3dCQUNiLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxpQkFBaUIsQ0FBQyxFQUFFOzRCQUN6QyxhQUFhLEdBQUc7Z0NBQ2QsS0FBSyxFQUFFLElBQUk7NkJBQ1osQ0FBQzt5QkFDSDs2QkFBTTs0QkFDTCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO2dDQUN4QixhQUFhLEdBQUc7b0NBQ2QsZUFBZSxFQUFFLElBQUk7aUNBQ3RCLENBQUM7NkJBQ0g7aUNBQU07Z0NBQ0wsYUFBYSxHQUFHO29DQUNkLE9BQU8sRUFBRSxJQUFJO2lDQUNkLENBQUM7NkJBQ0g7eUJBQ0Y7d0JBQ0QsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUN4QyxDQUFDLENBQUMsQ0FBQztpQkFDTjtnQkFDRCxPQUFPLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDckI7SUFDSCxDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgRm9ybUdyb3VwLFxuICBGb3JtQ29udHJvbCxcbiAgVmFsaWRhdG9yRm4sXG4gIEFic3RyYWN0Q29udHJvbCxcbiAgQXN5bmNWYWxpZGF0b3JGbixcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaXJzdCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBOYkRpYWxvZ1NlcnZpY2UgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQge1xuICBBUEksXG4gIEVuY3J5cHRpb25TZXJ2aWNlLFxuICBIVFRQX1NFUlZJQ0UsXG4gIE9BVVRIX0lORk8sXG4gIFBhdHRlcm4sXG4gIFJlc3BvbnNlQ29kZSxcbn0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBBcGlCYXNlUmVzcG9uc2UgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEFQSU1vZGVsIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBIdHRwRmFjdG9yeVNlcnZpY2UgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IFNlY3VyaXR5UmVzb3VyY2VNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgRG9Ub2FzdHJTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29tbW9uJztcbmltcG9ydCB7IFRlcm1zQ29uZGl0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4uL3Rlcm1zLWNvbmRpdGlvbnMvdGVybXMtY29uZGl0aW9ucy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2RvLXJlZ2lzdGVyLXBhZ2UnLFxuICAgIHN0eWxlVXJsczogWydyZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgdGVtcGxhdGVVcmw6ICdyZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICBwdWJsaWMgcGF0dGVybkZ1bGxuYW1lOiBzdHJpbmcgPSBQYXR0ZXJuLkZVTExOQU1FO1xuICBwdWJsaWMgcGF0dGVyblVzZXJuYW1lOiBzdHJpbmcgPSBQYXR0ZXJuLlVTRVJOQU1FO1xuICBwdWJsaWMgcGF0dGVybkVtYWlsOiBzdHJpbmcgPSBQYXR0ZXJuLkVNQUlMO1xuICBwdWJsaWMgcGF0dGVyblBhc3N3b3JkOiBzdHJpbmcgPSBQYXR0ZXJuLlBBU1NXT1JEX01FRElVTTtcbiAgcHVibGljIGVycm9yTXNnRnVsbG5hbWU6IHN0cmluZztcbiAgcHVibGljIGVycm9yTXNnVXNlcm5hbWU6IHN0cmluZztcbiAgcHVibGljIGVycm9yTXNnRW1haWw6IHN0cmluZztcbiAgcHVibGljIGVycm9yTXNnUGFzc3dvcmQ6IHN0cmluZztcbiAgcHVibGljIGVycm9yTXNnQ29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XG4gIHB1YmxpYyBwYXJhbU1zZ1VzZXJuYW1lOiBhbnk7XG4gIHB1YmxpYyBwYXJhbU1zZ0VtYWlsOiBhbnk7XG4gIHB1YmxpYyBtaW5sZW5ndGhVc2VybmFtZTogbnVtYmVyID0gNDtcbiAgcHVibGljIG1pbmxlbmd0aEVtYWlsOiBudW1iZXIgPSA1O1xuXG4gIHB1YmxpYyBmb3JtOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICBmdWxsbmFtZTogbmV3IEZvcm1Db250cm9sKCksXG4gICAgdXNlcm5hbWU6IG5ldyBGb3JtQ29udHJvbCgpLFxuICAgIGVtYWlsOiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgICBwYXNzd29yZDogbmV3IEZvcm1Db250cm9sKCksXG4gICAgY29uZmlybVBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgICB0ZXJtczogbmV3IEZvcm1Db250cm9sKCksXG4gICAgcmVjYXB0Y2hhOiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgfSk7XG5cbiAgcHVibGljIHJlc3BvbnNlRXJyb3I6IGFueTtcbiAgcHVibGljIGJ1dHRvblJlZ2lzdGVyOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgcHJvZ3Jlc3NCYXI6IG51bWJlciA9IDI1O1xuICBwcml2YXRlIGlzQ2hlY2tVc2VybmFtZTogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgaXNDaGVja0VtYWlsOiBib29sZWFuID0gdHJ1ZTtcblxuICBwcm90ZWN0ZWQgZGVzdHJveSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZW5jOiBFbmNyeXB0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIHRvYXN0cjogRG9Ub2FzdHJTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogTmJEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIEBJbmplY3QoSFRUUF9TRVJWSUNFKXByaXZhdGUgaHR0cEJhc2VTZXJ2aWNlOiBIdHRwRmFjdG9yeVNlcnZpY2UsXG4gICAgQEluamVjdChPQVVUSF9JTkZPKXByaXZhdGUgb2F1dGhSZXNvdXJjZTogU2VjdXJpdHlSZXNvdXJjZU1vZGVsLFxuICAgIEBJbmplY3QoQVBJKXByaXZhdGUgYXBpUGF0aDogQVBJTW9kZWwpIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95JC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyKCkge1xuICAgIGlmICghdGhpcy5mb3JtLmludmFsaWQpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWNlLWRvbmUnKS5mb3JFYWNoKHBhY2UgPT4ge1xuICAgICAgICBwYWNlLmNsYXNzTmFtZSA9IHBhY2UuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtZG9uZSBwYWNlLWRvbmUnLCAncGFjZS1ydW5uaW5nJyk7XG4gICAgICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1kb25lJywgJ3BhY2UtcnVubmluZycpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1pbmFjdGl2ZScpLmZvckVhY2gocGFjZSA9PiB7XG4gICAgICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1pbmFjdGl2ZSBwYWNlLWluYWN0aXZlJywgJ3BhY2UtYWN0aXZlJyk7XG4gICAgICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1pbmFjdGl2ZScsICdwYWNlLWFjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBwcm9ncmVzc0RPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhY2UtcHJvZ3Jlc3MnKS5pdGVtKDApIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NCYXIgPCAzNSkge1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gMzU7XG4gICAgICAgIHByb2dyZXNzRE9NLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgdGhpcy5wcm9ncmVzc0JhciArICclLCAwcHgsIDBweCknO1xuICAgICAgICBwcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzLXRleHQnKS52YWx1ZSA9IHRoaXMucHJvZ3Jlc3NCYXIgKyAnJSc7XG4gICAgICAgIHByb2dyZXNzRE9NLmdldEF0dHJpYnV0ZU5vZGUoJ2RhdGEtcHJvZ3Jlc3MnKS52YWx1ZSA9IHRoaXMucHJvZ3Jlc3NCYXIudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZXNwb25zZUVycm9yID0gbnVsbDtcbiAgICAgIGNvbnN0IGRhdGE6IGFueSA9IHRoaXMuZm9ybS52YWx1ZTtcbiAgICAgIGRhdGFbJ3Bhc3N3b3JkJ10gPSB0aGlzLmVuYy5lbmNyeXB0QUVTKHRoaXMub2F1dGhSZXNvdXJjZVsnYWVzX2tleSddLCB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10udmFsdWUpO1xuICAgICAgZGF0YVsnY29uZmlybVBhc3N3b3JkJ10gPSB0aGlzLmVuYy5lbmNyeXB0QUVTKHRoaXMub2F1dGhSZXNvdXJjZVsnYWVzX2tleSddLCB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLnZhbHVlKTtcbiAgICAgIGNvbnN0IGh0dHBIZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljICcgKyBidG9hKHRoaXMub2F1dGhSZXNvdXJjZVsnY2xpZW50X2lkJ10gKyAnOicgKyB0aGlzLm9hdXRoUmVzb3VyY2VbJ2NsaWVudF9zZWNyZXQnXSksXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiB0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZyxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5idXR0b25SZWdpc3RlciA9IHRydWU7XG4gICAgICB0aGlzLmh0dHBCYXNlU2VydmljZS5IVFRQX0JBU0UodGhpcy5hcGlQYXRoWydhdXRoJ11bJ3NpZ251cCddLCBkYXRhLCBodHRwSGVhZGVycylcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZTogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihyZXNwb25zZS5yZXNwU3RhdHVzTWVzc2FnZVtyZXNwb25zZS5yZXNwU3RhdHVzQ29kZV0pO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IDkwO1xuICAgICAgICAgICAgcHJvZ3Jlc3NET00uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKCcgKyB0aGlzLnByb2dyZXNzQmFyICsgJyUsIDBweCwgMHB4KSc7XG4gICAgICAgICAgICBwcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzLXRleHQnKS52YWx1ZSA9IHRoaXMucHJvZ3Jlc3NCYXIgKyAnJSc7XG4gICAgICAgICAgICBwcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzJykudmFsdWUgPSB0aGlzLnByb2dyZXNzQmFyLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gMDtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXNwU3RhdHVzQ29kZSA9PT0gUmVzcG9uc2VDb2RlLk9LX1JFR0lTVEVSRUQpIHtcbiAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXV0aC9sb2dpbiddKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICB0aGlzLmJ1dHRvblJlZ2lzdGVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5idXR0b25SZWdpc3RlciA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmJ1dHRvblJlZ2lzdGVyID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IDg1O1xuICAgICAgICAgIHByb2dyZXNzRE9NLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgdGhpcy5wcm9ncmVzc0JhciArICclLCAwcHgsIDBweCknO1xuICAgICAgICAgIHByb2dyZXNzRE9NLmdldEF0dHJpYnV0ZU5vZGUoJ2RhdGEtcHJvZ3Jlc3MtdGV4dCcpLnZhbHVlID0gdGhpcy5wcm9ncmVzc0JhciArICclJztcbiAgICAgICAgICBwcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzJykudmFsdWUgPSB0aGlzLnByb2dyZXNzQmFyLnRvU3RyaW5nKCk7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhY2UtcnVubmluZycpLmZvckVhY2gocGFjZSA9PiB7XG4gICAgICAgICAgICBwYWNlLmNsYXNzTmFtZSA9IHBhY2UuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtcnVubmluZycsICdwYWNlLWRvbmUnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1hY3RpdmUnKS5mb3JFYWNoKHBhY2UgPT4ge1xuICAgICAgICAgICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWFjdGl2ZScsICdwYWNlLWluYWN0aXZlJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IDA7XG5cbiAgICAgICAgICBpZiAoIShlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSkge1xuICAgICAgICAgICAgaWYgKGVycm9yWydyZXNwU3RhdHVzQ29kZSddKSB7XG4gICAgICAgICAgICAgIHN3aXRjaCAoZXJyb3JbJ3Jlc3BTdGF0dXNDb2RlJ10pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFJlc3BvbnNlQ29kZS5FUlJfU0NSMDAwNS50b1N0cmluZygpOlxuICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddLnNldEVycm9ycyh7XG4gICAgICAgICAgICAgICAgICAgICdpbnZhbGlkJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBSZXNwb25zZUNvZGUuRVJSX1NDUjAwMTEudG9TdHJpbmcoKTpcbiAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10uc2V0RXJyb3JzKHtcbiAgICAgICAgICAgICAgICAgICAgJ2VxdWFsJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VFcnJvciA9IGVycm9yWydyZXNwU3RhdHVzTWVzc2FnZSddW2Vycm9yWydyZXNwU3RhdHVzQ29kZSddXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGhhc0Vycm9yRnVsbG5hbWUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1snZnVsbG5hbWUnXS5lcnJvcnMgJiYgdGhpcy5mb3JtLmNvbnRyb2xzWydmdWxsbmFtZSddLmludmFsaWQgJiYgdGhpcy5mb3JtLmNvbnRyb2xzWydmdWxsbmFtZSddLnRvdWNoZWQpIHtcbiAgICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbJ2Z1bGxuYW1lJ10uZXJyb3JzWydyZXF1aXJlZCddKVxuICAgICAgICB0aGlzLmVycm9yTXNnRnVsbG5hbWUgPSAnZXJyb3IuZnVsbG5hbWUucmVxdWlyZWQnO1xuICAgICAgZWxzZVxuICAgICAgICB0aGlzLmVycm9yTXNnRnVsbG5hbWUgPSAnZXJyb3IuZnVsbG5hbWUuaW52YWxpZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXJyb3JNc2dGdWxsbmFtZSA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2Z1bGxuYW1lJ10gJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snZnVsbG5hbWUnXS5pbnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2Z1bGxuYW1lJ10udG91Y2hlZFxuICAgICk7XG4gIH1cblxuICBnZXQgaGFzU3VjY2Vzc0Z1bGxuYW1lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2Z1bGxuYW1lJ10gJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snZnVsbG5hbWUnXS52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydmdWxsbmFtZSddLnRvdWNoZWRcbiAgICApO1xuICB9XG5cbiAgZ2V0IGhhc0Vycm9yVXNlcm5hbWUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXS5lcnJvcnMgJiYgdGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddLmludmFsaWQgJiYgdGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddLnRvdWNoZWQpIHtcbiAgICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ10uZXJyb3JzWydyZXF1aXJlZCddKVxuICAgICAgICB0aGlzLmVycm9yTXNnVXNlcm5hbWUgPSAnZXJyb3IudXNlcm5hbWUucmVxdWlyZWQnO1xuICAgICAgZWxzZSBpZiAodGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddLmVycm9yc1snbm90LWF2YWlsYWJsZSddKSB7XG4gICAgICAgIHRoaXMuZXJyb3JNc2dVc2VybmFtZSA9ICdlcnJvci51c2VybmFtZS5ub3QtYXZhaWxhYmxlJztcbiAgICAgICAgdGhpcy5wYXJhbU1zZ1VzZXJuYW1lID0ge1xuICAgICAgICAgIHZhbHVlOiB0aGlzLmZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ10udmFsdWUsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXS5lcnJvcnNbJ3RpbWVvdXQnXSlcbiAgICAgICAgdGhpcy5lcnJvck1zZ1VzZXJuYW1lID0gJ2Vycm9yLjAnO1xuICAgICAgZWxzZSBpZiAodGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddLmVycm9yc1snZXJyb3InXSlcbiAgICAgICAgdGhpcy5lcnJvck1zZ1VzZXJuYW1lID0gJ2Vycm9yLjUwMCc7XG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuZXJyb3JNc2dVc2VybmFtZSA9ICdlcnJvci51c2VybmFtZS5pbnZhbGlkJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCh0aGlzLmZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ10udG91Y2hlZCB8fCB0aGlzLmZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ10uZGlydHkpICYmIHRoaXMuaXNDaGVja1VzZXJuYW1lKSB7XG4gICAgICAgIHRoaXMuaXNDaGVja1VzZXJuYW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXS5zZXRBc3luY1ZhbGlkYXRvcnMoW3VzZXJWYWxpZGF0b3IodGhpcy5vYXV0aFJlc291cmNlLCB0aGlzLmh0dHBCYXNlU2VydmljZSwgdGhpcy5hcGlQYXRoKV0pO1xuICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ10udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5lcnJvck1zZ1VzZXJuYW1lID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXSAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddLmludmFsaWQgJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXS50b3VjaGVkXG4gICAgKTtcbiAgfVxuXG4gIGdldCBoYXNTdWNjZXNzVXNlcm5hbWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXSAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddLnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ10udG91Y2hlZFxuICAgICAgKTtcbiAgfVxuXG4gIGdldCBoYXNFcnJvckVtYWlsKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbJ2VtYWlsJ10uZXJyb3JzICYmIHRoaXMuZm9ybS5jb250cm9sc1snZW1haWwnXS5pbnZhbGlkICYmIHRoaXMuZm9ybS5jb250cm9sc1snZW1haWwnXS50b3VjaGVkKSB7XG4gICAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzWydlbWFpbCddLmVycm9yc1sncmVxdWlyZWQnXSlcbiAgICAgICAgdGhpcy5lcnJvck1zZ0VtYWlsID0gJ2Vycm9yLmVtYWlsLnJlcXVpcmVkJztcbiAgICAgIGVsc2UgaWYgKHRoaXMuZm9ybS5jb250cm9sc1snZW1haWwnXS5lcnJvcnNbJ25vdC1hdmFpbGFibGUnXSkge1xuICAgICAgICB0aGlzLmVycm9yTXNnRW1haWwgPSAnZXJyb3IuZW1haWwubm90LWF2YWlsYWJsZSc7XG4gICAgICAgIHRoaXMucGFyYW1Nc2dFbWFpbCA9IHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy5mb3JtLmNvbnRyb2xzWydlbWFpbCddLnZhbHVlLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmZvcm0uY29udHJvbHNbJ2VtYWlsJ10uZXJyb3JzWyd0aW1lb3V0J10pXG4gICAgICAgIHRoaXMuZXJyb3JNc2dFbWFpbCA9ICdlcnJvci4wJztcbiAgICAgIGVsc2UgaWYgKHRoaXMuZm9ybS5jb250cm9sc1snZW1haWwnXS5lcnJvcnNbJ2Vycm9yJ10pXG4gICAgICAgIHRoaXMuZXJyb3JNc2dFbWFpbCA9ICdlcnJvci41MDAnO1xuICAgICAgZWxzZVxuICAgICAgICB0aGlzLmVycm9yTXNnRW1haWwgPSAnZXJyb3IuZW1haWwuaW52YWxpZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgodGhpcy5mb3JtLmNvbnRyb2xzWydlbWFpbCddLnRvdWNoZWQgfHwgdGhpcy5mb3JtLmNvbnRyb2xzWydlbWFpbCddLmRpcnR5KSAmJiB0aGlzLmlzQ2hlY2tFbWFpbCkge1xuICAgICAgICB0aGlzLmlzQ2hlY2tFbWFpbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2VtYWlsJ10uc2V0QXN5bmNWYWxpZGF0b3JzKFt1c2VyVmFsaWRhdG9yKHRoaXMub2F1dGhSZXNvdXJjZSwgdGhpcy5odHRwQmFzZVNlcnZpY2UsIHRoaXMuYXBpUGF0aCldKTtcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydlbWFpbCddLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZXJyb3JNc2dFbWFpbCA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2VtYWlsJ10gJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snZW1haWwnXS5pbnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2VtYWlsJ10udG91Y2hlZFxuICAgICk7XG4gIH1cblxuICBnZXQgaGFzU3VjY2Vzc0VtYWlsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2VtYWlsJ10gJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snZW1haWwnXS52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydlbWFpbCddLnRvdWNoZWRcbiAgICAgICk7XG4gIH1cblxuICBnZXQgaGFzRXJyb3JQYXNzd29yZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddLmVycm9ycyAmJiB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10uaW52YWxpZCAmJiB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10udG91Y2hlZCkge1xuICAgICAgdGhpcy5lcnJvck1zZ1Bhc3N3b3JkID0gJ2Vycm9yLnBhdHRlcm4uUGFzc3dvcmQnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm9yTXNnUGFzc3dvcmQgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10uaW52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddLnRvdWNoZWRcbiAgICApO1xuICB9XG5cbiAgZ2V0IGhhc1N1Y2Nlc3NQYXNzd29yZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10udmFsaWQgJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS50b3VjaGVkXG4gICAgKTtcbiAgfVxuXG4gIGdldCBoYXNFcnJvckNvbmZpcm1QYXNzd29yZCgpOiBib29sZWFuIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLmVycm9ycyAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS5pbnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLnRvdWNoZWQpIHtcbiAgICAgIHRoaXMuZXJyb3JNc2dDb25maXJtUGFzc3dvcmQgPSAnZXJyb3IuZXF1YWwuY29uZmlybVBhc3N3b3JkLXJlZ2lzdGVyJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS52YWx1ZSAhPT0gdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS52YWx1ZSkge1xuICAgICAgICB0aGlzLmVycm9yTXNnQ29uZmlybVBhc3N3b3JkID0gJ2Vycm9yLmVxdWFsLmNvbmZpcm1QYXNzd29yZC1yZWdpc3Rlcic7XG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10uc2V0VmFsaWRhdG9ycyhbY29uZmlybVBhc3N3b3JkVmFsaWRhdG9yKHRoaXMuZm9ybSldKTtcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVycm9yTXNnQ29uZmlybVBhc3N3b3JkID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10gJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10uaW52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS50b3VjaGVkXG4gICAgKTtcbiAgfVxuXG4gIGdldCBoYXNTdWNjZXNzQ29uZmlybVBhc3N3b3JkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLnRvdWNoZWRcbiAgICApO1xuICB9XG5cbiAgb25DaGVja2VkQ2hhbmdlKCl7XG4gICAgaWYgKCF0aGlzLmZvcm0uY29udHJvbHNbJ3Rlcm1zJ10udmFsdWUpIHtcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndGVybXMnXS5zZXRWYWx1ZShudWxsKTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrVGVybXNDb25kaXRpb25zKCl7XG4gICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgJ3BhcmFtZXRlckNvZGUnOiAnVEVSTVNfQ09ORElUSU9OUy5ET05HS0FQJ1xuICAgIH07XG4gICAgY29uc3QgaHR0cEhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljICcgKyBidG9hKHRoaXMub2F1dGhSZXNvdXJjZVsnY2xpZW50X2lkJ10gKyAnOicgKyB0aGlzLm9hdXRoUmVzb3VyY2VbJ2NsaWVudF9zZWNyZXQnXSksXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IHRoaXMudHJhbnNsYXRlLmN1cnJlbnRMYW5nLFxuICAgIH0pO1xuICAgIHRoaXMuaHR0cEJhc2VTZXJ2aWNlLkhUVFBfQkFTRSh0aGlzLmFwaVBhdGhbJ29wZW5hcGknXVsncGFyYW1ldGVyJ10sIGRhdGEsIGh0dHBIZWFkZXJzKVxuICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihUZXJtc0NvbmRpdGlvbnNDb21wb25lbnQsIHtcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlWydwYXJhbWV0ZXJWYWx1ZSddLFxuICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAub25DbG9zZS5zdWJzY3JpYmUoKHRlcm1zOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHRlcm1zKSB7XG4gICAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyd0ZXJtcyddLnNldFZhbHVlKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uS2V5RG93blVzZXJuYW1lKGV2ZW50OiBLZXlib2FyZEV2ZW50KXtcbiAgICBpZiAoZXZlbnQua2V5KSB7XG4gICAgICBpZiAoIWV2ZW50LmtleS5tYXRjaCgvWyFAIyQlXiYqKCk/XCI6e318PD5cXFtcXF07XFxcXD1+YF0vZykpIHtcbiAgICAgICAgaWYgKChbXG4gICAgICAgICAgJ1RBQicsXG4gICAgICAgICAgJ0VTQ0FQRScsXG4gICAgICAgICAgJ0VOVEVSJyxcbiAgICAgICAgICAnSE9NRScsXG4gICAgICAgICAgJ0VORCcsXG4gICAgICAgICAgJ0FSUk9XTEVGVCcsXG4gICAgICAgICAgJ0FSUk9XUklHSFQnLFxuICAgICAgICAgICdBUlJPV1VQJyxcbiAgICAgICAgICAnQVJST1dET1dOJyxcbiAgICAgICAgICAnUEFHRVVQJyxcbiAgICAgICAgICAnUEFHRURPV04nXS5pbmRleE9mKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpKSA9PT0gLTEpICYmXG4gICAgICAgICFldmVudC5jdHJsS2V5ICYmICFldmVudC5tZXRhS2V5ICYmICFldmVudC5hbHRLZXkpXG4gICAgICAgICAgICB0aGlzLmlzQ2hlY2tVc2VybmFtZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duRW1haWwoZXZlbnQ6IEtleWJvYXJkRXZlbnQpe1xuICAgIGlmIChldmVudC5rZXkpIHtcbiAgICAgIGlmICghZXZlbnQua2V5Lm1hdGNoKC9bISMkJV4mKigpP1wiOnt9fDw+XFxbXFxdO1xcXFw9fmBdL2cpKSB7XG4gICAgICAgIGlmICgoW1xuICAgICAgICAgICdUQUInLFxuICAgICAgICAgICdFU0NBUEUnLFxuICAgICAgICAgICdFTlRFUicsXG4gICAgICAgICAgJ0hPTUUnLFxuICAgICAgICAgICdFTkQnLFxuICAgICAgICAgICdBUlJPV0xFRlQnLFxuICAgICAgICAgICdBUlJPV1JJR0hUJyxcbiAgICAgICAgICAnQVJST1dVUCcsXG4gICAgICAgICAgJ0FSUk9XRE9XTicsXG4gICAgICAgICAgJ1BBR0VVUCcsXG4gICAgICAgICAgJ1BBR0VET1dOJ10uaW5kZXhPZihldmVudC5rZXkudG9VcHBlckNhc2UoKSkgPT09IC0xKSAmJlxuICAgICAgICAhZXZlbnQuY3RybEtleSAmJiAhZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuYWx0S2V5KVxuICAgICAgICAgIHRoaXMuaXNDaGVja0VtYWlsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlybVBhc3N3b3JkVmFsaWRhdG9yKGZvcm06IEZvcm1Hcm91cCk6IFZhbGlkYXRvckZuIHtcbiAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgbnVsbCA9PiB7XG4gICAgaWYgKGZvcm0uY29udHJvbHMpIHtcbiAgICAgIGlmIChmb3JtLmNvbnRyb2xzWydwYXNzd29yZCddLnZhbHVlICE9PSBmb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS52YWx1ZSlcbiAgICAgICAgICByZXR1cm4geyBlcXVhbDogdHJ1ZSB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZXJWYWxpZGF0b3IoXG4gIG9hdXRoUmVzb3VyY2U6IFNlY3VyaXR5UmVzb3VyY2VNb2RlbCxcbiAgaHR0cEJhc2VTZXJ2aWNlOiBIdHRwRmFjdG9yeVNlcnZpY2UsXG4gIGFwaVBhdGg6IEFQSU1vZGVsKTogQXN5bmNWYWxpZGF0b3JGbiB7XG4gIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSA9PiB7XG4gICAgaWYgKCFjb250cm9sLnZhbHVlQ2hhbmdlcykge1xuICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDUwMCksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsaWRhdG9yU3ViamVjdCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PEFwaUJhc2VSZXNwb25zZT4oKTtcbiAgICAgICAgICBjb25zdCBodHRwSGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgJyArIGJ0b2Eob2F1dGhSZXNvdXJjZVsnY2xpZW50X2lkJ10gKyAnOicgKyBvYXV0aFJlc291cmNlWydjbGllbnRfc2VjcmV0J10pLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICAgICAgICAndXNlcic6IGNvbnRyb2wudmFsdWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBsZXQgZGF0YVZhbGlkYXRvcjogYW55O1xuICAgICAgICAgIGlmIChjb250cm9sLnZhbHVlKXtcbiAgICAgICAgICAgIGh0dHBCYXNlU2VydmljZS5IVFRQX0JBU0UoYXBpUGF0aFsnYXV0aCddWydjaGVjay11c2VyJ10sIGRhdGEsIGh0dHBIZWFkZXJzKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlWydyZXNwU3RhdHVzQ29kZSddID09PSBSZXNwb25zZUNvZGUuT0tfU0NSMDEyLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvclN1YmplY3QkLm5leHQobnVsbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGRhdGFWYWxpZGF0b3IgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvclN1YmplY3QkLm5leHQoZGF0YVZhbGlkYXRvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgICBkYXRhVmFsaWRhdG9yID0ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDMwMikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhVmFsaWRhdG9yID0ge1xuICAgICAgICAgICAgICAgICAgICAgICdub3QtYXZhaWxhYmxlJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFWYWxpZGF0b3IgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yU3ViamVjdCQubmV4dChkYXRhVmFsaWRhdG9yKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB2YWxpZGF0b3JTdWJqZWN0JC5hc09ic2VydmFibGUoKTtcbiAgICAgICAgfSkpLnBpcGUoZmlyc3QoKSk7XG4gICAgfVxuICB9O1xufVxuIl19