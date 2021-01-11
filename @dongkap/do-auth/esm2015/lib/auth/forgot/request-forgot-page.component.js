import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { API, HTTP_SERVICE, OAUTH_INFO, Pattern, ResponseCode, } from '@dongkap/do-core';
import { DoToastrService } from '@dongkap/do-common';
export class RequestForgotPageComponent {
    constructor(router, toastr, translate, httpBaseService, oauthResource, apiPath) {
        this.router = router;
        this.toastr = toastr;
        this.translate = translate;
        this.httpBaseService = httpBaseService;
        this.oauthResource = oauthResource;
        this.apiPath = apiPath;
        this.buttonForgotPassword = false;
        this.progressBar = 25;
        this.patternEmail = Pattern.EMAIL;
        this.form = new FormGroup({
            email: new FormControl(),
        });
        this.destroy$ = new Subject();
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
            const urlForgotPassword = `${document.getElementsByTagName('base')[0].href}auth/forgot-password`;
            const data = {
                'email': this.form.controls['email'].value,
                'urlForgotPassword': urlForgotPassword,
            };
            const httpHeaders = new HttpHeaders({
                'Authorization': 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                'Content-Type': 'application/json',
                'Accept-Language': this.translate.currentLang,
            });
            this.buttonForgotPassword = true;
            this.httpBaseService.HTTP_BASE(this.apiPath['auth']['request-forgot-password'], data, httpHeaders)
                .pipe(takeUntil(this.destroy$))
                .subscribe((response) => {
                if (response) {
                    this.toastr.showI18n(response.respStatusMessage[response.respStatusCode]);
                    this.progressBar = 90;
                    progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                    progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                    progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
                    this.progressBar = 0;
                    if (response.respStatusCode === ResponseCode.OK_REQUEST_FORGOT_PASSWORD) {
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
                else {
                }
            });
        }
    }
    get hasErrorEmail() {
        return (this.form.controls['email'] &&
            this.form.controls['email'].invalid &&
            this.form.controls['email'].touched);
    }
    get hasSuccessEmail() {
        return (this.form.controls['email'] &&
            this.form.controls['email'].valid &&
            this.form.controls['email'].touched);
    }
}
RequestForgotPageComponent.ctorParameters = () => [
    { type: Router },
    { type: DoToastrService },
    { type: TranslateService },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] }
];
RequestForgotPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-request-forgot-page',
                template: "<h1 id=\"title\" class=\"title\">{{ 'Forgot Password' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.forgot-password' | translate }}</p>\n\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.forgot' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"forgotPassword()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-name\">{{ 'message.email-forgot-password' | translate }} :</label>\n    <input [formControlName]=\"'email'\"\n          [required]=\"true\"\n          minlength=\"4\"\n          maxlength=\"50\"\n          [pattern]=\"patternEmail\"\n          [ngClass]=\"{\n            'status-danger': hasErrorEmail,\n            'status-success': hasSuccessEmail\n          }\"\n          name=\"email\"\n          id=\"inputEmail\"\n          placeholder=\"{{ 'Email' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"1\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorEmail\">\n      <span class=\"caption status-danger\">{{'error.pattern.email' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"form.invalid || buttonForgotPassword\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"form.invalid || buttonForgotPassword\">\n    {{ 'Send' | translate }}\n  </button>\n</form>\n\n<section class=\"sign-in-or-up\" aria-label=\"Sign in or sign up\">\n  <p><a class=\"text-link\" routerLink=\"/auth/login\">{{ 'message.forgot-password-link' | translate}}</a></p>\n  <p><a routerLink=\"/auth/register\" class=\"text-link\">{{ 'Register' | translate}}</a></p>\n</section>\n",
                styles: [""]
            },] }
];
RequestForgotPageComponent.ctorParameters = () => [
    { type: Router },
    { type: DoToastrService },
    { type: TranslateService },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1mb3Jnb3QtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGgvZm9yZ290L3JlcXVlc3QtZm9yZ290LXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsR0FBRyxFQUNILFlBQVksRUFDWixVQUFVLEVBQ1YsT0FBTyxFQUNQLFlBQVksR0FDYixNQUFNLGtCQUFrQixDQUFDO0FBSzFCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU9yRCxNQUFNLE9BQU8sMEJBQTBCO0lBY3JDLFlBQW9CLE1BQWMsRUFDeEIsTUFBdUIsRUFDdkIsU0FBMkIsRUFDTixlQUFtQyxFQUNyQyxhQUFvQyxFQUMzQyxPQUFpQjtRQUxuQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQ04sb0JBQWUsR0FBZixlQUFlLENBQW9CO1FBQ3JDLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQUMzQyxZQUFPLEdBQVAsT0FBTyxDQUFVO1FBaEJo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dCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7XG4gIEFQSSxcbiAgSFRUUF9TRVJWSUNFLFxuICBPQVVUSF9JTkZPLFxuICBQYXR0ZXJuLFxuICBSZXNwb25zZUNvZGUsXG59IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQXBpQmFzZVJlc3BvbnNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBBUElNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgSHR0cEZhY3RvcnlTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBTZWN1cml0eVJlc291cmNlTW9kZWwgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IERvVG9hc3RyU2VydmljZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZG8tcmVxdWVzdC1mb3Jnb3QtcGFnZScsXG4gICAgc3R5bGVVcmxzOiBbJ3JlcXVlc3QtZm9yZ290LXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgICB0ZW1wbGF0ZVVybDogJ3JlcXVlc3QtZm9yZ290LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0Rm9yZ290UGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIHJlc3BvbnNlRXJyb3I6IGFueTtcbiAgcHVibGljIGJ1dHRvbkZvcmdvdFBhc3N3b3JkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgcHJvZ3Jlc3NCYXI6IG51bWJlciA9IDI1O1xuXG4gIHB1YmxpYyBwYXR0ZXJuRW1haWw6IHN0cmluZyA9IFBhdHRlcm4uRU1BSUw7XG5cbiAgcHVibGljIGZvcm06IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xuICAgIGVtYWlsOiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgfSk7XG5cbiAgcHJvdGVjdGVkIGRlc3Ryb3kkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHRvYXN0cjogRG9Ub2FzdHJTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIEBJbmplY3QoSFRUUF9TRVJWSUNFKXByaXZhdGUgaHR0cEJhc2VTZXJ2aWNlOiBIdHRwRmFjdG9yeVNlcnZpY2UsXG4gICAgQEluamVjdChPQVVUSF9JTkZPKXByaXZhdGUgb2F1dGhSZXNvdXJjZTogU2VjdXJpdHlSZXNvdXJjZU1vZGVsLFxuICAgIEBJbmplY3QoQVBJKXByaXZhdGUgYXBpUGF0aDogQVBJTW9kZWwpIHt9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgZm9yZ290UGFzc3dvcmQoKSB7XG4gICAgaWYgKCF0aGlzLmZvcm0uaW52YWxpZCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhY2UtZG9uZScpLmZvckVhY2gocGFjZSA9PiB7XG4gICAgICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1kb25lIHBhY2UtZG9uZScsICdwYWNlLXJ1bm5pbmcnKTtcbiAgICAgICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWRvbmUnLCAncGFjZS1ydW5uaW5nJyk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWNlLWluYWN0aXZlJykuZm9yRWFjaChwYWNlID0+IHtcbiAgICAgICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWluYWN0aXZlIHBhY2UtaW5hY3RpdmUnLCAncGFjZS1hY3RpdmUnKTtcbiAgICAgICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWluYWN0aXZlJywgJ3BhY2UtYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHByb2dyZXNzRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGFjZS1wcm9ncmVzcycpLml0ZW0oMCkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAodGhpcy5wcm9ncmVzc0JhciA8IDM1KSB7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSAzNTtcbiAgICAgICAgcHJvZ3Jlc3NET00uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKCcgKyB0aGlzLnByb2dyZXNzQmFyICsgJyUsIDBweCwgMHB4KSc7XG4gICAgICAgIHByb2dyZXNzRE9NLmdldEF0dHJpYnV0ZU5vZGUoJ2RhdGEtcHJvZ3Jlc3MtdGV4dCcpLnZhbHVlID0gdGhpcy5wcm9ncmVzc0JhciArICclJztcbiAgICAgICAgcHJvZ3Jlc3NET00uZ2V0QXR0cmlidXRlTm9kZSgnZGF0YS1wcm9ncmVzcycpLnZhbHVlID0gdGhpcy5wcm9ncmVzc0Jhci50b1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJlc3BvbnNlRXJyb3IgPSBudWxsO1xuXG4gICAgICBjb25zdCB1cmxGb3Jnb3RQYXNzd29yZDogc3RyaW5nID0gYCR7ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Jhc2UnKVswXS5ocmVmfWF1dGgvZm9yZ290LXBhc3N3b3JkYDtcbiAgICAgIGNvbnN0IGRhdGE6IGFueSA9IHtcbiAgICAgICAgJ2VtYWlsJzogdGhpcy5mb3JtLmNvbnRyb2xzWydlbWFpbCddLnZhbHVlLFxuICAgICAgICAndXJsRm9yZ290UGFzc3dvcmQnOiB1cmxGb3Jnb3RQYXNzd29yZCxcbiAgICAgIH07XG4gICAgICBjb25zdCBodHRwSGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyAnICsgYnRvYSh0aGlzLm9hdXRoUmVzb3VyY2VbJ2NsaWVudF9pZCddICsgJzonICsgdGhpcy5vYXV0aFJlc291cmNlWydjbGllbnRfc2VjcmV0J10pLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogdGhpcy50cmFuc2xhdGUuY3VycmVudExhbmcsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuYnV0dG9uRm9yZ290UGFzc3dvcmQgPSB0cnVlO1xuICAgICAgdGhpcy5odHRwQmFzZVNlcnZpY2UuSFRUUF9CQVNFKHRoaXMuYXBpUGF0aFsnYXV0aCddWydyZXF1ZXN0LWZvcmdvdC1wYXNzd29yZCddLCBkYXRhLCBodHRwSGVhZGVycylcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZTogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihyZXNwb25zZS5yZXNwU3RhdHVzTWVzc2FnZVtyZXNwb25zZS5yZXNwU3RhdHVzQ29kZV0pO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IDkwO1xuICAgICAgICAgICAgcHJvZ3Jlc3NET00uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKCcgKyB0aGlzLnByb2dyZXNzQmFyICsgJyUsIDBweCwgMHB4KSc7XG4gICAgICAgICAgICBwcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzLXRleHQnKS52YWx1ZSA9IHRoaXMucHJvZ3Jlc3NCYXIgKyAnJSc7XG4gICAgICAgICAgICBwcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzJykudmFsdWUgPSB0aGlzLnByb2dyZXNzQmFyLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gMDtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXNwU3RhdHVzQ29kZSA9PT0gUmVzcG9uc2VDb2RlLk9LX1JFUVVFU1RfRk9SR09UX1BBU1NXT1JEKSB7XG4gICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgvbG9naW4nXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgICAgdGhpcy5idXR0b25Gb3Jnb3RQYXNzd29yZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uRm9yZ290UGFzc3dvcmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5idXR0b25Gb3Jnb3RQYXNzd29yZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSA4NTtcbiAgICAgICAgICBwcm9ncmVzc0RPTS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArIHRoaXMucHJvZ3Jlc3NCYXIgKyAnJSwgMHB4LCAwcHgpJztcbiAgICAgICAgICBwcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzLXRleHQnKS52YWx1ZSA9IHRoaXMucHJvZ3Jlc3NCYXIgKyAnJSc7XG4gICAgICAgICAgcHJvZ3Jlc3NET00uZ2V0QXR0cmlidXRlTm9kZSgnZGF0YS1wcm9ncmVzcycpLnZhbHVlID0gdGhpcy5wcm9ncmVzc0Jhci50b1N0cmluZygpO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWNlLXJ1bm5pbmcnKS5mb3JFYWNoKHBhY2UgPT4ge1xuICAgICAgICAgICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLXJ1bm5pbmcnLCAncGFjZS1kb25lJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhY2UtYWN0aXZlJykuZm9yRWFjaChwYWNlID0+IHtcbiAgICAgICAgICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1hY3RpdmUnLCAncGFjZS1pbmFjdGl2ZScpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSAwO1xuXG4gICAgICAgICAgaWYgKCEoZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkpIHtcbiAgICAgICAgICAgIGlmIChlcnJvclsncmVzcFN0YXR1c0NvZGUnXSkge1xuICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlRXJyb3IgPSBlcnJvclsncmVzcFN0YXR1c01lc3NhZ2UnXVtlcnJvclsncmVzcFN0YXR1c0NvZGUnXV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldCBoYXNFcnJvckVtYWlsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2VtYWlsJ10gJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snZW1haWwnXS5pbnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2VtYWlsJ10udG91Y2hlZFxuICAgICk7XG4gIH1cblxuICBnZXQgaGFzU3VjY2Vzc0VtYWlsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2VtYWlsJ10gJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snZW1haWwnXS52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydlbWFpbCddLnRvdWNoZWRcbiAgICApO1xuICB9XG5cbn1cbiJdfQ==