import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { API, EncryptionService, HTTP_SERVICE, OAUTH_INFO, Pattern, ResponseCode, } from '@dongkap/do-core';
import { DoToastrService } from '@dongkap/do-common';
var ForgotPageComponent = /** @class */ (function () {
    function ForgotPageComponent(router, route, toastr, translate, enc, httpBaseService, oauthResource, apiPath) {
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.translate = translate;
        this.enc = enc;
        this.httpBaseService = httpBaseService;
        this.oauthResource = oauthResource;
        this.apiPath = apiPath;
        this.buttonForgotPassword = false;
        this.progressBar = 25;
        this.patternPassword = Pattern.PASSWORD_MEDIUM;
        this.form = new FormGroup({
            newPassword: new FormControl(),
            confirmPassword: new FormControl(),
        });
        this.destroy$ = new Subject();
        if (this.route.snapshot.params['id'] !== null && this.route.snapshot.params['code'] !== null) {
            this.verificationId = this.route.snapshot.params['id'];
            this.verificationCode = this.route.snapshot.params['code'];
        }
        else {
            this.router.navigate(['/auth/login']);
        }
    }
    ForgotPageComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    };
    ForgotPageComponent.prototype.forgotPassword = function () {
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
            var newPassword = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['newPassword'].value);
            var confirmPassword = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['confirmPassword'].value);
            var data = {
                'verificationId': this.verificationId,
                'verificationCode': this.verificationCode,
                'newPassword': newPassword,
                'confirmPassword': confirmPassword,
            };
            var httpHeaders = new HttpHeaders({
                'Authorization': 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                'Content-Type': 'application/json',
                'Accept-Language': this.translate.currentLang,
            });
            this.buttonForgotPassword = true;
            this.httpBaseService.HTTP_BASE(this.apiPath['auth']['forgot-password'], data, httpHeaders)
                .pipe(takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response) {
                    _this.toastr.showI18n(response.respStatusMessage[response.respStatusCode]);
                    _this.progressBar = 90;
                    progressDOM_1.style.transform = 'translate3d(' + _this.progressBar + '%, 0px, 0px)';
                    progressDOM_1.getAttributeNode('data-progress-text').value = _this.progressBar + '%';
                    progressDOM_1.getAttributeNode('data-progress').value = _this.progressBar.toString();
                    _this.progressBar = 0;
                    if (response.respStatusCode === ResponseCode.OK_FORGOT_PASSWORD) {
                        _this.router.navigate(['/auth/login']);
                    }
                    else {
                        _this.form.reset();
                        _this.buttonForgotPassword = false;
                    }
                }
                else {
                    _this.form.reset();
                    _this.buttonForgotPassword = false;
                }
            }, function (error) {
                _this.buttonForgotPassword = false;
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
                        _this.responseError = error['respStatusMessage'][error['respStatusCode']];
                    }
                }
            });
        }
    };
    Object.defineProperty(ForgotPageComponent.prototype, "hasErrorNewPassword", {
        get: function () {
            if (this.form.controls['newPassword'].errors &&
                this.form.controls['newPassword'].invalid &&
                this.form.controls['newPassword'].touched) {
                this.errorMsgNewPassword = 'error.pattern.Password';
            }
            else {
                this.errorMsgNewPassword = null;
            }
            return (this.form.controls['newPassword'] &&
                this.form.controls['newPassword'].invalid &&
                this.form.controls['newPassword'].touched);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ForgotPageComponent.prototype, "hasSuccessNewPassword", {
        get: function () {
            return (this.form.controls['newPassword'] &&
                this.form.controls['newPassword'].valid &&
                this.form.controls['newPassword'].touched);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ForgotPageComponent.prototype, "hasErrorConfirmPassword", {
        get: function () {
            if (this.form.controls['confirmPassword'].errors &&
                this.form.controls['confirmPassword'].invalid &&
                this.form.controls['confirmPassword'].touched) {
                this.errorMsgConfirmPassword = 'error.equal.confirmPassword';
            }
            else {
                if (this.form.controls['newPassword'].value !== this.form.controls['confirmPassword'].value) {
                    this.errorMsgConfirmPassword = 'error.equal.confirmPassword';
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
    Object.defineProperty(ForgotPageComponent.prototype, "hasSuccessConfirmPassword", {
        get: function () {
            return (this.form.controls['confirmPassword'] &&
                this.form.controls['confirmPassword'].valid &&
                this.form.controls['confirmPassword'].touched);
        },
        enumerable: false,
        configurable: true
    });
    ForgotPageComponent.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute },
        { type: DoToastrService },
        { type: TranslateService },
        { type: EncryptionService },
        { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [API,] }] }
    ]; };
    ForgotPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-forgot-page',
                    template: "<h1 id=\"title\" class=\"title\">{{ 'Reset Password' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.reset-password' | translate }}</p>\n\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.reset-password' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"forgotPassword()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-newpassword\">{{ 'New Password' | translate }}* :</label>\n    <input [formControlName]=\"'newPassword'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [pattern]=\"patternPassword\"\n          [ngClass]=\"{\n            'status-danger': hasErrorNewPassword,\n            'status-success': hasSuccessNewPassword\n          }\"\n          name=\"newPassword\"\n          type=\"password\"\n          id=\"inputNewPassword\"\n          placeholder=\"{{ 'New Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"4\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorNewPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgNewPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-confirmpassword\">{{ 'Confirm Password' | translate }}* :</label>\n    <input [formControlName]=\"'confirmPassword'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [ngClass]=\"{\n            'status-danger': hasErrorConfirmPassword,\n            'status-success': hasSuccessConfirmPassword\n          }\"\n          name=\"confirmPassword\"\n          type=\"password\"\n          id=\"inputConfirmPassword\"\n          placeholder=\"{{ 'Confirm Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"5\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorConfirmPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgConfirmPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"form.invalid || buttonForgotPassword\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"form.invalid || buttonForgotPassword\">\n    {{ 'Reset Password' | translate }}\n  </button>\n</form>\n\n<section class=\"another-action\" aria-label=\"Sign in\">\n  {{ 'message.reset-password-footer' | translate}} <a class=\"text-link\" routerLink=\"/auth/login\" tabindex=\"-1\">{{ 'Login' | translate}}</a>\n</section>\n",
                    styles: [""]
                },] }
    ];
    ForgotPageComponent.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute },
        { type: DoToastrService },
        { type: TranslateService },
        { type: EncryptionService },
        { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [API,] }] }
    ]; };
    return ForgotPageComponent;
}());
export { ForgotPageComponent };
export function confirmPasswordValidator(form) {
    return function (control) {
        if (form.controls) {
            if (form.controls['newPassword'].value !== form.controls['confirmPassword'].value)
                return { equal: true };
        }
        return null;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9hdXRoL2ZvcmdvdC9mb3Jnb3QtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQWdDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUNMLEdBQUcsRUFDSCxpQkFBaUIsRUFDakIsWUFBWSxFQUNaLFVBQVUsRUFDVixPQUFPLEVBQ1AsWUFBWSxHQUNiLE1BQU0sa0JBQWtCLENBQUM7QUFLMUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJEO0lBeUJFLDZCQUFvQixNQUFjLEVBQ3hCLEtBQXFCLEVBQ3JCLE1BQXVCLEVBQ3ZCLFNBQTJCLEVBQzNCLEdBQXNCLEVBQ0QsZUFBbUMsRUFDckMsYUFBb0MsRUFDM0MsT0FBaUI7UUFQbkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNELG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQUNyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7UUFDM0MsWUFBTyxHQUFQLE9BQU8sQ0FBVTtRQXhCaEMseUJBQW9CLEdBQVksS0FBSyxDQUFDO1FBQ3JDLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRTFCLG9CQUFlLEdBQVcsT0FBTyxDQUFDLGVBQWUsQ0FBQztRQU9sRCxTQUFJLEdBQWMsSUFBSSxTQUFTLENBQUM7WUFDckMsV0FBVyxFQUFFLElBQUksV0FBVyxFQUFFO1lBQzlCLGVBQWUsRUFBRSxJQUFJLFdBQVcsRUFBRTtTQUNuQyxDQUFDLENBQUM7UUFFTyxhQUFRLEdBQWlCLElBQUksT0FBTyxFQUFPLENBQUM7UUFVcEQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDNUYsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1RDthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVNLDRDQUFjLEdBQXJCO1FBQUEsaUJBNkVDO1FBNUVDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN0QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtnQkFDbEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxjQUFjLENBQUMsQ0FBQztnQkFDL0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDdkUsQ0FBQyxDQUFDLENBQUM7WUFDSCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2dCQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLDZCQUE2QixFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUN0RixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUMxRSxDQUFDLENBQUMsQ0FBQztZQUNILElBQU0sYUFBVyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFnQixDQUFDO1lBQzVGLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUN0QixhQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUM7Z0JBQ2pGLGFBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztnQkFDbEYsYUFBVyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ25GO1lBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFFMUIsSUFBTSxXQUFXLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4SCxJQUFNLGVBQWUsR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEksSUFBTSxJQUFJLEdBQVE7Z0JBQ2hCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxjQUFjO2dCQUNyQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO2dCQUN6QyxhQUFhLEVBQUUsV0FBVztnQkFDMUIsaUJBQWlCLEVBQUUsZUFBZTthQUNuQyxDQUFDO1lBQ0YsSUFBTSxXQUFXLEdBQWdCLElBQUksV0FBVyxDQUFDO2dCQUMvQyxlQUFlLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUM3RyxjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVc7YUFDOUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztZQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQztpQkFDekYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzlCLFNBQVMsQ0FDUixVQUFDLFFBQXlCO2dCQUN4QixJQUFJLFFBQVEsRUFBRTtvQkFDWixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQzFFLEtBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO29CQUN0QixhQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxjQUFjLEdBQUcsS0FBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUM7b0JBQ2pGLGFBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztvQkFDbEYsYUFBVyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNsRixLQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztvQkFDckIsSUFBSSxRQUFRLENBQUMsY0FBYyxLQUFLLFlBQVksQ0FBQyxrQkFBa0IsRUFBRTt3QkFDL0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO3FCQUN2Qzt5QkFBTTt3QkFDTCxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNsQixLQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO3FCQUNuQztpQkFDRjtxQkFBTTtvQkFDTCxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNsQixLQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO2lCQUNuQztZQUNILENBQUMsRUFDRCxVQUFDLEtBQVU7Z0JBQ1QsS0FBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztnQkFDbEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7Z0JBQ3RCLGFBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGNBQWMsR0FBRyxLQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQztnQkFDakYsYUFBVyxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO2dCQUNsRixhQUFXLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2xGLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO29CQUNyRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDdkUsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7b0JBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO2dCQUMxRSxDQUFDLENBQUMsQ0FBQztnQkFDSCxLQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztnQkFFckIsSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLGlCQUFpQixDQUFDLEVBQUU7b0JBQ3pDLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7d0JBQzNCLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztxQkFDMUU7aUJBQ0Y7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0gsQ0FBQztJQUVELHNCQUFJLG9EQUFtQjthQUF2QjtZQUNFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTTtnQkFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTztnQkFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxFQUFFO2dCQUMzQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsd0JBQXdCLENBQUM7YUFDckQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQzthQUNqQztZQUNELE9BQU8sQ0FDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU87Z0JBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FDMUMsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBRUQsc0JBQUksc0RBQXFCO2FBQXpCO1lBQ0UsT0FBTyxDQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztnQkFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSztnQkFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUMxQyxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx3REFBdUI7YUFBM0I7WUFDRSxJQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTTtnQkFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPO2dCQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sRUFBRTtnQkFDL0MsSUFBSSxDQUFDLHVCQUF1QixHQUFHLDZCQUE2QixDQUFDO2FBQzlEO2lCQUFNO2dCQUNMLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxFQUFFO29CQUMzRixJQUFJLENBQUMsdUJBQXVCLEdBQUcsNkJBQTZCLENBQUM7b0JBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0YsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2lCQUNoRTtxQkFBTTtvQkFDTCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO2lCQUNyQzthQUNGO1lBQ0QsT0FBTyxDQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO2dCQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU87Z0JBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBTyxDQUM5QyxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwREFBeUI7YUFBN0I7WUFDRSxPQUFPLENBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSztnQkFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLENBQzlDLENBQUM7UUFDSixDQUFDOzs7T0FBQTs7Z0JBeEoyQixNQUFNO2dCQUNqQixjQUFjO2dCQUNiLGVBQWU7Z0JBQ1osZ0JBQWdCO2dCQUN0QixpQkFBaUI7Z0RBQzdCLE1BQU0sU0FBQyxZQUFZO2dEQUNuQixNQUFNLFNBQUMsVUFBVTtnREFDakIsTUFBTSxTQUFDLEdBQUc7OztnQkFoQ2QsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBRTFCLDR1RkFBeUM7O2lCQUM1Qzs7O2dCQXZCd0IsTUFBTTtnQkFBdEIsY0FBYztnQkFpQmQsZUFBZTtnQkFiZixnQkFBZ0I7Z0JBR3ZCLGlCQUFpQjtnREEwQ2QsTUFBTSxTQUFDLFlBQVk7Z0RBQ25CLE1BQU0sU0FBQyxVQUFVO2dEQUNqQixNQUFNLFNBQUMsR0FBRzs7SUFtSmYsMEJBQUM7Q0FBQSxBQW5MRCxJQW1MQztTQTlLWSxtQkFBbUI7QUFnTGhDLE1BQU0sVUFBVSx3QkFBd0IsQ0FBQyxJQUFlO0lBQ3RELE9BQU8sVUFBQyxPQUF3QjtRQUM5QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSztnQkFDN0UsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUM1QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvckZuLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7XG4gIEFQSSxcbiAgRW5jcnlwdGlvblNlcnZpY2UsXG4gIEhUVFBfU0VSVklDRSxcbiAgT0FVVEhfSU5GTyxcbiAgUGF0dGVybixcbiAgUmVzcG9uc2VDb2RlLFxufSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQVBJTW9kZWwgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEh0dHBGYWN0b3J5U2VydmljZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgU2VjdXJpdHlSZXNvdXJjZU1vZGVsIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBEb1RvYXN0clNlcnZpY2UgfSBmcm9tICdAZG9uZ2thcC9kby1jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2RvLWZvcmdvdC1wYWdlJyxcbiAgICBzdHlsZVVybHM6IFsnZm9yZ290LXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgICB0ZW1wbGF0ZVVybDogJ2ZvcmdvdC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRm9yZ290UGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIHJlc3BvbnNlRXJyb3I6IGFueTtcbiAgcHVibGljIGJ1dHRvbkZvcmdvdFBhc3N3b3JkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgcHJvZ3Jlc3NCYXI6IG51bWJlciA9IDI1O1xuXG4gIHB1YmxpYyBwYXR0ZXJuUGFzc3dvcmQ6IHN0cmluZyA9IFBhdHRlcm4uUEFTU1dPUkRfTUVESVVNO1xuICBwdWJsaWMgZXJyb3JNc2dOZXdQYXNzd29yZDogc3RyaW5nO1xuICBwdWJsaWMgZXJyb3JNc2dDb25maXJtUGFzc3dvcmQ6IHN0cmluZztcblxuICBwcml2YXRlIHZlcmlmaWNhdGlvbklkOiBzdHJpbmc7XG4gIHByaXZhdGUgdmVyaWZpY2F0aW9uQ29kZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBmb3JtOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICBuZXdQYXNzd29yZDogbmV3IEZvcm1Db250cm9sKCksXG4gICAgY29uZmlybVBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgfSk7XG5cbiAgcHJvdGVjdGVkIGRlc3Ryb3kkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHRvYXN0cjogRG9Ub2FzdHJTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZW5jOiBFbmNyeXB0aW9uU2VydmljZSxcbiAgICBASW5qZWN0KEhUVFBfU0VSVklDRSlwcml2YXRlIGh0dHBCYXNlU2VydmljZTogSHR0cEZhY3RvcnlTZXJ2aWNlLFxuICAgIEBJbmplY3QoT0FVVEhfSU5GTylwcml2YXRlIG9hdXRoUmVzb3VyY2U6IFNlY3VyaXR5UmVzb3VyY2VNb2RlbCxcbiAgICBASW5qZWN0KEFQSSlwcml2YXRlIGFwaVBhdGg6IEFQSU1vZGVsKSB7XG4gICAgaWYgKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydpZCddICE9PSBudWxsICYmIHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydjb2RlJ10gIT09IG51bGwpIHtcbiAgICAgIHRoaXMudmVyaWZpY2F0aW9uSWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snaWQnXTtcbiAgICAgIHRoaXMudmVyaWZpY2F0aW9uQ29kZSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydjb2RlJ107XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgvbG9naW4nXSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgZm9yZ290UGFzc3dvcmQoKSB7XG4gICAgaWYgKCF0aGlzLmZvcm0uaW52YWxpZCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhY2UtZG9uZScpLmZvckVhY2gocGFjZSA9PiB7XG4gICAgICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1kb25lIHBhY2UtZG9uZScsICdwYWNlLXJ1bm5pbmcnKTtcbiAgICAgICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWRvbmUnLCAncGFjZS1ydW5uaW5nJyk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWNlLWluYWN0aXZlJykuZm9yRWFjaChwYWNlID0+IHtcbiAgICAgICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWluYWN0aXZlIHBhY2UtaW5hY3RpdmUnLCAncGFjZS1hY3RpdmUnKTtcbiAgICAgICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWluYWN0aXZlJywgJ3BhY2UtYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHByb2dyZXNzRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGFjZS1wcm9ncmVzcycpLml0ZW0oMCkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAodGhpcy5wcm9ncmVzc0JhciA8IDM1KSB7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSAzNTtcbiAgICAgICAgcHJvZ3Jlc3NET00uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKCcgKyB0aGlzLnByb2dyZXNzQmFyICsgJyUsIDBweCwgMHB4KSc7XG4gICAgICAgIHByb2dyZXNzRE9NLmdldEF0dHJpYnV0ZU5vZGUoJ2RhdGEtcHJvZ3Jlc3MtdGV4dCcpLnZhbHVlID0gdGhpcy5wcm9ncmVzc0JhciArICclJztcbiAgICAgICAgcHJvZ3Jlc3NET00uZ2V0QXR0cmlidXRlTm9kZSgnZGF0YS1wcm9ncmVzcycpLnZhbHVlID0gdGhpcy5wcm9ncmVzc0Jhci50b1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJlc3BvbnNlRXJyb3IgPSBudWxsO1xuXG4gICAgICBjb25zdCBuZXdQYXNzd29yZDogc3RyaW5nID0gdGhpcy5lbmMuZW5jcnlwdEFFUyh0aGlzLm9hdXRoUmVzb3VyY2VbJ2Flc19rZXknXSwgdGhpcy5mb3JtLmNvbnRyb2xzWyduZXdQYXNzd29yZCddLnZhbHVlKTtcbiAgICAgIGNvbnN0IGNvbmZpcm1QYXNzd29yZDogc3RyaW5nID0gdGhpcy5lbmMuZW5jcnlwdEFFUyh0aGlzLm9hdXRoUmVzb3VyY2VbJ2Flc19rZXknXSwgdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS52YWx1ZSk7XG4gICAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICAgICd2ZXJpZmljYXRpb25JZCc6IHRoaXMudmVyaWZpY2F0aW9uSWQsXG4gICAgICAgICd2ZXJpZmljYXRpb25Db2RlJzogdGhpcy52ZXJpZmljYXRpb25Db2RlLFxuICAgICAgICAnbmV3UGFzc3dvcmQnOiBuZXdQYXNzd29yZCxcbiAgICAgICAgJ2NvbmZpcm1QYXNzd29yZCc6IGNvbmZpcm1QYXNzd29yZCxcbiAgICAgIH07XG4gICAgICBjb25zdCBodHRwSGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyAnICsgYnRvYSh0aGlzLm9hdXRoUmVzb3VyY2VbJ2NsaWVudF9pZCddICsgJzonICsgdGhpcy5vYXV0aFJlc291cmNlWydjbGllbnRfc2VjcmV0J10pLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogdGhpcy50cmFuc2xhdGUuY3VycmVudExhbmcsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuYnV0dG9uRm9yZ290UGFzc3dvcmQgPSB0cnVlO1xuICAgICAgdGhpcy5odHRwQmFzZVNlcnZpY2UuSFRUUF9CQVNFKHRoaXMuYXBpUGF0aFsnYXV0aCddWydmb3Jnb3QtcGFzc3dvcmQnXSwgZGF0YSwgaHR0cEhlYWRlcnMpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2U6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4ocmVzcG9uc2UucmVzcFN0YXR1c01lc3NhZ2VbcmVzcG9uc2UucmVzcFN0YXR1c0NvZGVdKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSA5MDtcbiAgICAgICAgICAgIHByb2dyZXNzRE9NLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgdGhpcy5wcm9ncmVzc0JhciArICclLCAwcHgsIDBweCknO1xuICAgICAgICAgICAgcHJvZ3Jlc3NET00uZ2V0QXR0cmlidXRlTm9kZSgnZGF0YS1wcm9ncmVzcy10ZXh0JykudmFsdWUgPSB0aGlzLnByb2dyZXNzQmFyICsgJyUnO1xuICAgICAgICAgICAgcHJvZ3Jlc3NET00uZ2V0QXR0cmlidXRlTm9kZSgnZGF0YS1wcm9ncmVzcycpLnZhbHVlID0gdGhpcy5wcm9ncmVzc0Jhci50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IDA7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzcFN0YXR1c0NvZGUgPT09IFJlc3BvbnNlQ29kZS5PS19GT1JHT1RfUEFTU1dPUkQpIHtcbiAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXV0aC9sb2dpbiddKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICB0aGlzLmJ1dHRvbkZvcmdvdFBhc3N3b3JkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5idXR0b25Gb3Jnb3RQYXNzd29yZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmJ1dHRvbkZvcmdvdFBhc3N3b3JkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IDg1O1xuICAgICAgICAgIHByb2dyZXNzRE9NLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgdGhpcy5wcm9ncmVzc0JhciArICclLCAwcHgsIDBweCknO1xuICAgICAgICAgIHByb2dyZXNzRE9NLmdldEF0dHJpYnV0ZU5vZGUoJ2RhdGEtcHJvZ3Jlc3MtdGV4dCcpLnZhbHVlID0gdGhpcy5wcm9ncmVzc0JhciArICclJztcbiAgICAgICAgICBwcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzJykudmFsdWUgPSB0aGlzLnByb2dyZXNzQmFyLnRvU3RyaW5nKCk7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhY2UtcnVubmluZycpLmZvckVhY2gocGFjZSA9PiB7XG4gICAgICAgICAgICBwYWNlLmNsYXNzTmFtZSA9IHBhY2UuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtcnVubmluZycsICdwYWNlLWRvbmUnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1hY3RpdmUnKS5mb3JFYWNoKHBhY2UgPT4ge1xuICAgICAgICAgICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWFjdGl2ZScsICdwYWNlLWluYWN0aXZlJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IDA7XG5cbiAgICAgICAgICBpZiAoIShlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSkge1xuICAgICAgICAgICAgaWYgKGVycm9yWydyZXNwU3RhdHVzQ29kZSddKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VFcnJvciA9IGVycm9yWydyZXNwU3RhdHVzTWVzc2FnZSddW2Vycm9yWydyZXNwU3RhdHVzQ29kZSddXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldCBoYXNFcnJvck5ld1Bhc3N3b3JkKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbJ25ld1Bhc3N3b3JkJ10uZXJyb3JzICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ25ld1Bhc3N3b3JkJ10uaW52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyduZXdQYXNzd29yZCddLnRvdWNoZWQpIHtcbiAgICAgIHRoaXMuZXJyb3JNc2dOZXdQYXNzd29yZCA9ICdlcnJvci5wYXR0ZXJuLlBhc3N3b3JkJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lcnJvck1zZ05ld1Bhc3N3b3JkID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snbmV3UGFzc3dvcmQnXSAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyduZXdQYXNzd29yZCddLmludmFsaWQgJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snbmV3UGFzc3dvcmQnXS50b3VjaGVkXG4gICAgKTtcbiAgfVxuXG4gIGdldCBoYXNTdWNjZXNzTmV3UGFzc3dvcmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snbmV3UGFzc3dvcmQnXSAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyduZXdQYXNzd29yZCddLnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ25ld1Bhc3N3b3JkJ10udG91Y2hlZFxuICAgICk7XG4gIH1cblxuICBnZXQgaGFzRXJyb3JDb25maXJtUGFzc3dvcmQoKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS5lcnJvcnMgJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10uaW52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS50b3VjaGVkKSB7XG4gICAgICB0aGlzLmVycm9yTXNnQ29uZmlybVBhc3N3b3JkID0gJ2Vycm9yLmVxdWFsLmNvbmZpcm1QYXNzd29yZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbJ25ld1Bhc3N3b3JkJ10udmFsdWUgIT09IHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10udmFsdWUpIHtcbiAgICAgICAgdGhpcy5lcnJvck1zZ0NvbmZpcm1QYXNzd29yZCA9ICdlcnJvci5lcXVhbC5jb25maXJtUGFzc3dvcmQnO1xuICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLnNldFZhbGlkYXRvcnMoW2NvbmZpcm1QYXNzd29yZFZhbGlkYXRvcih0aGlzLmZvcm0pXSk7XG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lcnJvck1zZ0NvbmZpcm1QYXNzd29yZCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLmludmFsaWQgJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10udG91Y2hlZFxuICAgICk7XG4gIH1cblxuICBnZXQgaGFzU3VjY2Vzc0NvbmZpcm1QYXNzd29yZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXSAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS50b3VjaGVkXG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maXJtUGFzc3dvcmRWYWxpZGF0b3IoZm9ybTogRm9ybUdyb3VwKTogVmFsaWRhdG9yRm4ge1xuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gfCBudWxsID0+IHtcbiAgICBpZiAoZm9ybS5jb250cm9scykge1xuICAgICAgaWYgKGZvcm0uY29udHJvbHNbJ25ld1Bhc3N3b3JkJ10udmFsdWUgIT09IGZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLnZhbHVlKVxuICAgICAgICAgIHJldHVybiB7IGVxdWFsOiB0cnVlIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xufVxuIl19