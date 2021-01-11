import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { API, EncryptionService, HTTP_SERVICE, OAUTH_INFO, Pattern, ResponseCode, } from '@dongkap/do-core';
import { DoToastrService } from '@dongkap/do-common';
export class ForgotPageComponent {
    constructor(router, route, toastr, translate, enc, httpBaseService, oauthResource, apiPath) {
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
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    forgotPassword() {
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
            const newPassword = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['newPassword'].value);
            const confirmPassword = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['confirmPassword'].value);
            const data = {
                'verificationId': this.verificationId,
                'verificationCode': this.verificationCode,
                'newPassword': newPassword,
                'confirmPassword': confirmPassword,
            };
            const httpHeaders = new HttpHeaders({
                'Authorization': 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                'Content-Type': 'application/json',
                'Accept-Language': this.translate.currentLang,
            });
            this.buttonForgotPassword = true;
            this.httpBaseService.HTTP_BASE(this.apiPath['auth']['forgot-password'], data, httpHeaders)
                .pipe(takeUntil(this.destroy$))
                .subscribe((response) => {
                if (response) {
                    this.toastr.showI18n(response.respStatusMessage[response.respStatusCode]);
                    this.progressBar = 90;
                    progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                    progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                    progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
                    this.progressBar = 0;
                    if (response.respStatusCode === ResponseCode.OK_FORGOT_PASSWORD) {
                        this.router.navigate(['/auth/login']);
                    }
                    else {
                        this.form.reset();
                        this.buttonForgotPassword = false;
                    }
                }
                else {
                    this.form.reset();
                    this.buttonForgotPassword = false;
                }
            }, (error) => {
                this.buttonForgotPassword = false;
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
                        this.responseError = error['respStatusMessage'][error['respStatusCode']];
                    }
                }
            });
        }
    }
    get hasErrorNewPassword() {
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
    }
    get hasSuccessNewPassword() {
        return (this.form.controls['newPassword'] &&
            this.form.controls['newPassword'].valid &&
            this.form.controls['newPassword'].touched);
    }
    get hasErrorConfirmPassword() {
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
    }
    get hasSuccessConfirmPassword() {
        return (this.form.controls['confirmPassword'] &&
            this.form.controls['confirmPassword'].valid &&
            this.form.controls['confirmPassword'].touched);
    }
}
ForgotPageComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: DoToastrService },
    { type: TranslateService },
    { type: EncryptionService },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] }
];
ForgotPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-forgot-page',
                template: "<h1 id=\"title\" class=\"title\">{{ 'Reset Password' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.reset-password' | translate }}</p>\n\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.reset-password' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"forgotPassword()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-newpassword\">{{ 'New Password' | translate }}* :</label>\n    <input [formControlName]=\"'newPassword'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [pattern]=\"patternPassword\"\n          [ngClass]=\"{\n            'status-danger': hasErrorNewPassword,\n            'status-success': hasSuccessNewPassword\n          }\"\n          name=\"newPassword\"\n          type=\"password\"\n          id=\"inputNewPassword\"\n          placeholder=\"{{ 'New Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"4\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorNewPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgNewPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-confirmpassword\">{{ 'Confirm Password' | translate }}* :</label>\n    <input [formControlName]=\"'confirmPassword'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [ngClass]=\"{\n            'status-danger': hasErrorConfirmPassword,\n            'status-success': hasSuccessConfirmPassword\n          }\"\n          name=\"confirmPassword\"\n          type=\"password\"\n          id=\"inputConfirmPassword\"\n          placeholder=\"{{ 'Confirm Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"5\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorConfirmPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgConfirmPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"form.invalid || buttonForgotPassword\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"form.invalid || buttonForgotPassword\">\n    {{ 'Reset Password' | translate }}\n  </button>\n</form>\n\n<section class=\"another-action\" aria-label=\"Sign in\">\n  {{ 'message.reset-password-footer' | translate}} <a class=\"text-link\" routerLink=\"/auth/login\" tabindex=\"-1\">{{ 'Login' | translate}}</a>\n</section>\n",
                styles: [""]
            },] }
];
ForgotPageComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: DoToastrService },
    { type: TranslateService },
    { type: EncryptionService },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] }
];
export function confirmPasswordValidator(form) {
    return (control) => {
        if (form.controls) {
            if (form.controls['newPassword'].value !== form.controls['confirmPassword'].value)
                return { equal: true };
        }
        return null;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9hdXRoL2ZvcmdvdC9mb3Jnb3QtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQWdDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUNMLEdBQUcsRUFDSCxpQkFBaUIsRUFDakIsWUFBWSxFQUNaLFVBQVUsRUFDVixPQUFPLEVBQ1AsWUFBWSxHQUNiLE1BQU0sa0JBQWtCLENBQUM7QUFLMUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBT3JELE1BQU0sT0FBTyxtQkFBbUI7SUFvQjlCLFlBQW9CLE1BQWMsRUFDeEIsS0FBcUIsRUFDckIsTUFBdUIsRUFDdkIsU0FBMkIsRUFDM0IsR0FBc0IsRUFDRCxlQUFtQyxFQUNyQyxhQUFvQyxFQUMzQyxPQUFpQjtRQVBuQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ0Qsb0JBQWUsR0FBZixlQUFlLENBQW9CO1FBQ3JDLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQUMzQyxZQUFPLEdBQVAsT0FBTyxDQUFVO1FBeEJoQyx5QkFBb0IsR0FBWSxLQUFLLENBQUM7UUFDckMsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFFMUIsb0JBQWUsR0FBVyxPQUFPLENBQUMsZUFBZSxDQUFDO1FBT2xELFNBQUksR0FBYyxJQUFJLFNBQVMsQ0FBQztZQUNyQyxXQUFXLEVBQUUsSUFBSSxXQUFXLEVBQUU7WUFDOUIsZUFBZSxFQUFFLElBQUksV0FBVyxFQUFFO1NBQ25DLENBQUMsQ0FBQztRQUVPLGFBQVEsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQVVwRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRTtZQUM1RixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVEO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0sY0FBYztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdEIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDckQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxjQUFjLENBQUMsQ0FBQztnQkFDL0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDdkUsQ0FBQyxDQUFDLENBQUM7WUFDSCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsNkJBQTZCLEVBQUUsYUFBYSxDQUFDLENBQUM7Z0JBQ3RGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQzFFLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQWdCLENBQUM7WUFDNUYsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsRUFBRTtnQkFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7Z0JBQ3RCLFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQztnQkFDakYsV0FBVyxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO2dCQUNsRixXQUFXLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDbkY7WUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUUxQixNQUFNLFdBQVcsR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hILE1BQU0sZUFBZSxHQUFXLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoSSxNQUFNLElBQUksR0FBUTtnQkFDaEIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGNBQWM7Z0JBQ3JDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ3pDLGFBQWEsRUFBRSxXQUFXO2dCQUMxQixpQkFBaUIsRUFBRSxlQUFlO2FBQ25DLENBQUM7WUFDRixNQUFNLFdBQVcsR0FBZ0IsSUFBSSxXQUFXLENBQUM7Z0JBQy9DLGVBQWUsRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQzdHLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVzthQUM5QyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDO2lCQUN6RixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDOUIsU0FBUyxDQUNSLENBQUMsUUFBeUIsRUFBRSxFQUFFO2dCQUM1QixJQUFJLFFBQVEsRUFBRTtvQkFDWixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQzFFLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO29CQUN0QixXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUM7b0JBQ2pGLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztvQkFDbEYsV0FBVyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNsRixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztvQkFDckIsSUFBSSxRQUFRLENBQUMsY0FBYyxLQUFLLFlBQVksQ0FBQyxrQkFBa0IsRUFBRTt3QkFDL0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO3FCQUN2Qzt5QkFBTTt3QkFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNsQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO3FCQUNuQztpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNsQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO2lCQUNuQztZQUNILENBQUMsRUFDRCxDQUFDLEtBQVUsRUFBRSxFQUFFO2dCQUNiLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUN0QixXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUM7Z0JBQ2pGLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztnQkFDbEYsV0FBVyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNsRixRQUFRLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUN4RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDdkUsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDdkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7Z0JBQzFFLENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO2dCQUVyQixJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksaUJBQWlCLENBQUMsRUFBRTtvQkFDekMsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsRUFBRTt3QkFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO3FCQUMxRTtpQkFDRjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDSCxDQUFDO0lBRUQsSUFBSSxtQkFBbUI7UUFDckIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNO1lBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU87WUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQzNDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyx3QkFBd0IsQ0FBQztTQUNyRDthQUFNO1lBQ0wsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztTQUNqQztRQUNELE9BQU8sQ0FDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTztZQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQzFDLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxxQkFBcUI7UUFDdkIsT0FBTyxDQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FDMUMsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLHVCQUF1QjtRQUN6QixJQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTTtZQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU87WUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDL0MsSUFBSSxDQUFDLHVCQUF1QixHQUFHLDZCQUE2QixDQUFDO1NBQzlEO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssRUFBRTtnQkFDM0YsSUFBSSxDQUFDLHVCQUF1QixHQUFHLDZCQUE2QixDQUFDO2dCQUM3RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNGLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzthQUNoRTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO2FBQ3JDO1NBQ0Y7UUFDRCxPQUFPLENBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPO1lBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBTyxDQUM5QyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUkseUJBQXlCO1FBQzNCLE9BQU8sQ0FDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUs7WUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLENBQzlDLENBQUM7SUFDSixDQUFDOzs7WUF4SjJCLE1BQU07WUFDakIsY0FBYztZQUNiLGVBQWU7WUFDWixnQkFBZ0I7WUFDdEIsaUJBQWlCOzRDQUM3QixNQUFNLFNBQUMsWUFBWTs0Q0FDbkIsTUFBTSxTQUFDLFVBQVU7NENBQ2pCLE1BQU0sU0FBQyxHQUFHOzs7WUFoQ2QsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBRTFCLDR1RkFBeUM7O2FBQzVDOzs7WUF2QndCLE1BQU07WUFBdEIsY0FBYztZQWlCZCxlQUFlO1lBYmYsZ0JBQWdCO1lBR3ZCLGlCQUFpQjs0Q0EwQ2QsTUFBTSxTQUFDLFlBQVk7NENBQ25CLE1BQU0sU0FBQyxVQUFVOzRDQUNqQixNQUFNLFNBQUMsR0FBRzs7QUFxSmYsTUFBTSxVQUFVLHdCQUF3QixDQUFDLElBQWU7SUFDdEQsT0FBTyxDQUFDLE9BQXdCLEVBQWlDLEVBQUU7UUFDakUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUs7Z0JBQzdFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDNUI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JGbiwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQge1xuICBBUEksXG4gIEVuY3J5cHRpb25TZXJ2aWNlLFxuICBIVFRQX1NFUlZJQ0UsXG4gIE9BVVRIX0lORk8sXG4gIFBhdHRlcm4sXG4gIFJlc3BvbnNlQ29kZSxcbn0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBBcGlCYXNlUmVzcG9uc2UgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEFQSU1vZGVsIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBIdHRwRmFjdG9yeVNlcnZpY2UgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IFNlY3VyaXR5UmVzb3VyY2VNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgRG9Ub2FzdHJTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkby1mb3Jnb3QtcGFnZScsXG4gICAgc3R5bGVVcmxzOiBbJ2ZvcmdvdC1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgdGVtcGxhdGVVcmw6ICdmb3Jnb3QtcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEZvcmdvdFBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyByZXNwb25zZUVycm9yOiBhbnk7XG4gIHB1YmxpYyBidXR0b25Gb3Jnb3RQYXNzd29yZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHByb2dyZXNzQmFyOiBudW1iZXIgPSAyNTtcblxuICBwdWJsaWMgcGF0dGVyblBhc3N3b3JkOiBzdHJpbmcgPSBQYXR0ZXJuLlBBU1NXT1JEX01FRElVTTtcbiAgcHVibGljIGVycm9yTXNnTmV3UGFzc3dvcmQ6IHN0cmluZztcbiAgcHVibGljIGVycm9yTXNnQ29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSB2ZXJpZmljYXRpb25JZDogc3RyaW5nO1xuICBwcml2YXRlIHZlcmlmaWNhdGlvbkNvZGU6IHN0cmluZztcblxuICBwdWJsaWMgZm9ybTogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgbmV3UGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbCgpLFxuICAgIGNvbmZpcm1QYXNzd29yZDogbmV3IEZvcm1Db250cm9sKCksXG4gIH0pO1xuXG4gIHByb3RlY3RlZCBkZXN0cm95JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSB0b2FzdHI6IERvVG9hc3RyU2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIGVuYzogRW5jcnlwdGlvblNlcnZpY2UsXG4gICAgQEluamVjdChIVFRQX1NFUlZJQ0UpcHJpdmF0ZSBodHRwQmFzZVNlcnZpY2U6IEh0dHBGYWN0b3J5U2VydmljZSxcbiAgICBASW5qZWN0KE9BVVRIX0lORk8pcHJpdmF0ZSBvYXV0aFJlc291cmNlOiBTZWN1cml0eVJlc291cmNlTW9kZWwsXG4gICAgQEluamVjdChBUEkpcHJpdmF0ZSBhcGlQYXRoOiBBUElNb2RlbCkge1xuICAgIGlmICh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snaWQnXSAhPT0gbnVsbCAmJiB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snY29kZSddICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnZlcmlmaWNhdGlvbklkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2lkJ107XG4gICAgICB0aGlzLnZlcmlmaWNhdGlvbkNvZGUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snY29kZSddO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hdXRoL2xvZ2luJ10pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95JC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIGZvcmdvdFBhc3N3b3JkKCkge1xuICAgIGlmICghdGhpcy5mb3JtLmludmFsaWQpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWNlLWRvbmUnKS5mb3JFYWNoKHBhY2UgPT4ge1xuICAgICAgICBwYWNlLmNsYXNzTmFtZSA9IHBhY2UuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtZG9uZSBwYWNlLWRvbmUnLCAncGFjZS1ydW5uaW5nJyk7XG4gICAgICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1kb25lJywgJ3BhY2UtcnVubmluZycpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1pbmFjdGl2ZScpLmZvckVhY2gocGFjZSA9PiB7XG4gICAgICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1pbmFjdGl2ZSBwYWNlLWluYWN0aXZlJywgJ3BhY2UtYWN0aXZlJyk7XG4gICAgICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1pbmFjdGl2ZScsICdwYWNlLWFjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBwcm9ncmVzc0RPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhY2UtcHJvZ3Jlc3MnKS5pdGVtKDApIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NCYXIgPCAzNSkge1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gMzU7XG4gICAgICAgIHByb2dyZXNzRE9NLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgdGhpcy5wcm9ncmVzc0JhciArICclLCAwcHgsIDBweCknO1xuICAgICAgICBwcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzLXRleHQnKS52YWx1ZSA9IHRoaXMucHJvZ3Jlc3NCYXIgKyAnJSc7XG4gICAgICAgIHByb2dyZXNzRE9NLmdldEF0dHJpYnV0ZU5vZGUoJ2RhdGEtcHJvZ3Jlc3MnKS52YWx1ZSA9IHRoaXMucHJvZ3Jlc3NCYXIudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZXNwb25zZUVycm9yID0gbnVsbDtcblxuICAgICAgY29uc3QgbmV3UGFzc3dvcmQ6IHN0cmluZyA9IHRoaXMuZW5jLmVuY3J5cHRBRVModGhpcy5vYXV0aFJlc291cmNlWydhZXNfa2V5J10sIHRoaXMuZm9ybS5jb250cm9sc1snbmV3UGFzc3dvcmQnXS52YWx1ZSk7XG4gICAgICBjb25zdCBjb25maXJtUGFzc3dvcmQ6IHN0cmluZyA9IHRoaXMuZW5jLmVuY3J5cHRBRVModGhpcy5vYXV0aFJlc291cmNlWydhZXNfa2V5J10sIHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10udmFsdWUpO1xuICAgICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgICAndmVyaWZpY2F0aW9uSWQnOiB0aGlzLnZlcmlmaWNhdGlvbklkLFxuICAgICAgICAndmVyaWZpY2F0aW9uQ29kZSc6IHRoaXMudmVyaWZpY2F0aW9uQ29kZSxcbiAgICAgICAgJ25ld1Bhc3N3b3JkJzogbmV3UGFzc3dvcmQsXG4gICAgICAgICdjb25maXJtUGFzc3dvcmQnOiBjb25maXJtUGFzc3dvcmQsXG4gICAgICB9O1xuICAgICAgY29uc3QgaHR0cEhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgJyArIGJ0b2EodGhpcy5vYXV0aFJlc291cmNlWydjbGllbnRfaWQnXSArICc6JyArIHRoaXMub2F1dGhSZXNvdXJjZVsnY2xpZW50X3NlY3JldCddKSxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IHRoaXMudHJhbnNsYXRlLmN1cnJlbnRMYW5nLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmJ1dHRvbkZvcmdvdFBhc3N3b3JkID0gdHJ1ZTtcbiAgICAgIHRoaXMuaHR0cEJhc2VTZXJ2aWNlLkhUVFBfQkFTRSh0aGlzLmFwaVBhdGhbJ2F1dGgnXVsnZm9yZ290LXBhc3N3b3JkJ10sIGRhdGEsIGh0dHBIZWFkZXJzKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKHJlc3BvbnNlLnJlc3BTdGF0dXNNZXNzYWdlW3Jlc3BvbnNlLnJlc3BTdGF0dXNDb2RlXSk7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gOTA7XG4gICAgICAgICAgICBwcm9ncmVzc0RPTS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArIHRoaXMucHJvZ3Jlc3NCYXIgKyAnJSwgMHB4LCAwcHgpJztcbiAgICAgICAgICAgIHByb2dyZXNzRE9NLmdldEF0dHJpYnV0ZU5vZGUoJ2RhdGEtcHJvZ3Jlc3MtdGV4dCcpLnZhbHVlID0gdGhpcy5wcm9ncmVzc0JhciArICclJztcbiAgICAgICAgICAgIHByb2dyZXNzRE9NLmdldEF0dHJpYnV0ZU5vZGUoJ2RhdGEtcHJvZ3Jlc3MnKS52YWx1ZSA9IHRoaXMucHJvZ3Jlc3NCYXIudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSAwO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3BTdGF0dXNDb2RlID09PSBSZXNwb25zZUNvZGUuT0tfRk9SR09UX1BBU1NXT1JEKSB7XG4gICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgvbG9naW4nXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgICAgdGhpcy5idXR0b25Gb3Jnb3RQYXNzd29yZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uRm9yZ290UGFzc3dvcmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5idXR0b25Gb3Jnb3RQYXNzd29yZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSA4NTtcbiAgICAgICAgICBwcm9ncmVzc0RPTS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArIHRoaXMucHJvZ3Jlc3NCYXIgKyAnJSwgMHB4LCAwcHgpJztcbiAgICAgICAgICBwcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzLXRleHQnKS52YWx1ZSA9IHRoaXMucHJvZ3Jlc3NCYXIgKyAnJSc7XG4gICAgICAgICAgcHJvZ3Jlc3NET00uZ2V0QXR0cmlidXRlTm9kZSgnZGF0YS1wcm9ncmVzcycpLnZhbHVlID0gdGhpcy5wcm9ncmVzc0Jhci50b1N0cmluZygpO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWNlLXJ1bm5pbmcnKS5mb3JFYWNoKHBhY2UgPT4ge1xuICAgICAgICAgICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLXJ1bm5pbmcnLCAncGFjZS1kb25lJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhY2UtYWN0aXZlJykuZm9yRWFjaChwYWNlID0+IHtcbiAgICAgICAgICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1hY3RpdmUnLCAncGFjZS1pbmFjdGl2ZScpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSAwO1xuXG4gICAgICAgICAgaWYgKCEoZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkpIHtcbiAgICAgICAgICAgIGlmIChlcnJvclsncmVzcFN0YXR1c0NvZGUnXSkge1xuICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlRXJyb3IgPSBlcnJvclsncmVzcFN0YXR1c01lc3NhZ2UnXVtlcnJvclsncmVzcFN0YXR1c0NvZGUnXV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXQgaGFzRXJyb3JOZXdQYXNzd29yZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzWyduZXdQYXNzd29yZCddLmVycm9ycyAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyduZXdQYXNzd29yZCddLmludmFsaWQgJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snbmV3UGFzc3dvcmQnXS50b3VjaGVkKSB7XG4gICAgICB0aGlzLmVycm9yTXNnTmV3UGFzc3dvcmQgPSAnZXJyb3IucGF0dGVybi5QYXNzd29yZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXJyb3JNc2dOZXdQYXNzd29yZCA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ25ld1Bhc3N3b3JkJ10gJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snbmV3UGFzc3dvcmQnXS5pbnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ25ld1Bhc3N3b3JkJ10udG91Y2hlZFxuICAgICk7XG4gIH1cblxuICBnZXQgaGFzU3VjY2Vzc05ld1Bhc3N3b3JkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ25ld1Bhc3N3b3JkJ10gJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snbmV3UGFzc3dvcmQnXS52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyduZXdQYXNzd29yZCddLnRvdWNoZWRcbiAgICApO1xuICB9XG5cbiAgZ2V0IGhhc0Vycm9yQ29uZmlybVBhc3N3b3JkKCk6IGJvb2xlYW4ge1xuICAgIGlmIChcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10uZXJyb3JzICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLmludmFsaWQgJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10udG91Y2hlZCkge1xuICAgICAgdGhpcy5lcnJvck1zZ0NvbmZpcm1QYXNzd29yZCA9ICdlcnJvci5lcXVhbC5jb25maXJtUGFzc3dvcmQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzWyduZXdQYXNzd29yZCddLnZhbHVlICE9PSB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLnZhbHVlKSB7XG4gICAgICAgIHRoaXMuZXJyb3JNc2dDb25maXJtUGFzc3dvcmQgPSAnZXJyb3IuZXF1YWwuY29uZmlybVBhc3N3b3JkJztcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS5zZXRWYWxpZGF0b3JzKFtjb25maXJtUGFzc3dvcmRWYWxpZGF0b3IodGhpcy5mb3JtKV0pO1xuICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZXJyb3JNc2dDb25maXJtUGFzc3dvcmQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXSAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS5pbnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLnRvdWNoZWRcbiAgICApO1xuICB9XG5cbiAgZ2V0IGhhc1N1Y2Nlc3NDb25maXJtUGFzc3dvcmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10gJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10udmFsaWQgJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10udG91Y2hlZFxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlybVBhc3N3b3JkVmFsaWRhdG9yKGZvcm06IEZvcm1Hcm91cCk6IFZhbGlkYXRvckZuIHtcbiAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgbnVsbCA9PiB7XG4gICAgaWYgKGZvcm0uY29udHJvbHMpIHtcbiAgICAgIGlmIChmb3JtLmNvbnRyb2xzWyduZXdQYXNzd29yZCddLnZhbHVlICE9PSBmb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS52YWx1ZSlcbiAgICAgICAgICByZXR1cm4geyBlcXVhbDogdHJ1ZSB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cbiJdfQ==