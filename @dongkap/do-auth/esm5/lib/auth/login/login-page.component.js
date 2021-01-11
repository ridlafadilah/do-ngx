import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { NbDialogService } from '@nebular/theme';
import { API, HTTP_SERVICE, OAUTH_INFO, } from '@dongkap/do-core';
import { AuthTokenService } from '../../services/auth-token.service';
import { takeUntil } from 'rxjs/operators';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions.component';
var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(router, dialogService, translate, authTokenService, apiPath, httpBaseService, oauthResource, route) {
        this.router = router;
        this.dialogService = dialogService;
        this.translate = translate;
        this.authTokenService = authTokenService;
        this.apiPath = apiPath;
        this.httpBaseService = httpBaseService;
        this.oauthResource = oauthResource;
        this.buttonLogin = false;
        this.progressBar = 25;
        this.destroy$ = new Subject();
        this.form = new FormGroup({
            username: new FormControl(),
            password: new FormControl(),
        });
        this.urlAuthorizeGoogle = this.httpBaseService.API(this.apiPath['auth']['authorize']) +
            '/google?redirect_uri=' +
            (document.getElementsByTagName('base')[0].href + "auth/callback");
        this.socialLinks = [
            {
                url: this.urlAuthorizeGoogle,
                target: '_self',
                icon: 'google',
            }
        ];
        if (route.snapshot.queryParams['error']) {
            console.log(route.snapshot.queryParams['error']);
            this.responseError = 'error.' + route.snapshot.queryParams['error'];
        }
    }
    LoginPageComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    };
    LoginPageComponent.prototype.login = function () {
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
            this.buttonLogin = true;
            this.authTokenService.login(this.form.get('username').value, this.form.get('password').value)
                .then(function () {
                _this.responseError = null;
                _this.progressBar = 90;
                progressDOM_1.style.transform = 'translate3d(' + _this.progressBar + '%, 0px, 0px)';
                progressDOM_1.getAttributeNode('data-progress-text').value = _this.progressBar + '%';
                progressDOM_1.getAttributeNode('data-progress').value = _this.progressBar.toString();
                _this.progressBar = 0;
                _this.router.navigate(['/app/home']);
            })
                .catch(function (error) {
                if (!(error instanceof HttpErrorResponse)) {
                    var response = error;
                    _this.responseError = response.respStatusMessage[response.respStatusCode];
                }
                _this.buttonLogin = false;
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
            });
            if (this.progressBar >= 35 && this.progressBar < 65) {
                this.progressBar = 65;
                progressDOM_1.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                progressDOM_1.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                progressDOM_1.getAttributeNode('data-progress').value = this.progressBar.toString();
            }
        }
    };
    Object.defineProperty(LoginPageComponent.prototype, "hasErrorUsername", {
        get: function () {
            return (this.form.controls['username'] &&
                this.form.controls['username'].invalid &&
                this.form.controls['username'].touched);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginPageComponent.prototype, "hasSuccessUsername", {
        get: function () {
            return (this.form.controls['username'] &&
                this.form.controls['username'].valid &&
                this.form.controls['username'].touched);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginPageComponent.prototype, "hasErrorPassword", {
        get: function () {
            return (this.form.controls['password'] &&
                this.form.controls['password'].invalid &&
                this.form.controls['password'].touched);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginPageComponent.prototype, "hasSuccessPassword", {
        get: function () {
            return (this.form.controls['password'] &&
                this.form.controls['password'].valid &&
                this.form.controls['password'].touched);
        },
        enumerable: false,
        configurable: true
    });
    LoginPageComponent.prototype.onClickTermsConditions = function () {
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
                    action: 'Close',
                },
            });
        });
    };
    LoginPageComponent.ctorParameters = function () { return [
        { type: Router },
        { type: NbDialogService },
        { type: TranslateService },
        { type: AuthTokenService },
        { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
        { type: ActivatedRoute }
    ]; };
    LoginPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-login-page',
                    template: "<h1 id=\"title\" class=\"title\">{{ 'Login' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.login' | translate }}</p>\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.login' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError | translate }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"login()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\">{{ 'message.username-login' | translate }} :</label>\n    <input [formControlName]=\"'username'\"\n          [required]=\"true\"\n          [ngClass]=\"{\n            'status-danger': hasErrorUsername,\n            'status-success': hasSuccessUsername\n          }\"\n          name=\"username\"\n          id=\"inputUsername\"\n          placeholder=\"{{ 'message.username-login-placeholder' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"1\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorUsername\">\n      <span class=\"caption status-danger\">{{'error.username-login' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <span class=\"label-with-link\">\n      <label class=\"label\">{{ 'Password' | translate }} :</label>\n      <a class=\"forgot-password caption-2\" routerLink=\"/auth/forgot-password\" tabindex=\"-1\">{{ 'Forgot Password' | translate}}?</a>\n    </span>\n    <input [formControlName]=\"'password'\"\n          [required]=\"true\"\n          [ngClass]=\"{\n            'status-danger': hasErrorPassword,\n            'status-success': hasSuccessPassword\n          }\"\n          name=\"password\"\n          type=\"password\"\n          id=\"inputPassword\"\n          placeholder=\"{{ 'Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"2\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorPassword\">\n      <span class=\"caption status-danger\">{{ 'error.password' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"form.invalid || buttonLogin\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"form.invalid || buttonLogin\">\n    {{ 'Login' | translate }}\n  </button>\n</form>\n\n<section *ngIf=\"socialLinks && socialLinks.length > 0\" class=\"links\" aria-label=\"Social sign in\">\n  {{ 'message.login-footer-social' | translate}}:\n  <div class=\"socials\">\n    <ng-container *ngFor=\"let socialLink of socialLinks\">\n      <a *ngIf=\"socialLink.link\"\n         [routerLink]=\"socialLink.link\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n      <a *ngIf=\"socialLink.url\"\n         [attr.href]=\"socialLink.url\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n    </ng-container>\n  </div>\n</section>\n\n<section class=\"another-action\" aria-label=\"Register\">\n  {{ 'message.login-footer' | translate}} <a class=\"text-link\" routerLink=\"/auth/register\">{{ 'Register' | translate}}</a>\n</section>\n\n<section class=\"another-action\" aria-label=\"Terms and Conditions\">\n  <span class=\"terms-conditions\" (click)=\"onClickTermsConditions()\" tabindex=\"-1\">{{ 'message.terms-conditions' | translate}}</span>\n</section>\n",
                    styles: [".terms-conditions{color:#36f;text-decoration:underline;font-size:inherit;font-style:inherit;font-weight:inherit;line-height:inherit;cursor:pointer}.terms-conditions:hover{color:#598bff}"]
                },] }
    ];
    LoginPageComponent.ctorParameters = function () { return [
        { type: Router },
        { type: NbDialogService },
        { type: TranslateService },
        { type: AuthTokenService },
        { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
        { type: ActivatedRoute }
    ]; };
    return LoginPageComponent;
}());
export { LoginPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGgvbG9naW4vbG9naW4tcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsR0FBRyxFQUNILFlBQVksRUFDWixVQUFVLEdBQ1gsTUFBTSxrQkFBa0IsQ0FBQztBQUsxQixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFMUY7SUE2QkUsNEJBQ1UsTUFBYyxFQUNkLGFBQThCLEVBQzlCLFNBQTJCLEVBQzNCLGdCQUFrQyxFQUNyQixPQUFpQixFQUNSLGVBQW1DLEVBQ3RDLGFBQW9DLEVBQy9ELEtBQXFCO1FBUGIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQUM5QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixxQkFBZ0IsR0FBaEIs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bkMsTUFBTSxFQUFFLE9BQU87aUJBQ2hCO2FBQ0EsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFoSWlCLE1BQU07Z0JBQ0MsZUFBZTtnQkFDbkIsZ0JBQWdCO2dCQUNULGdCQUFnQjtnREFDekMsTUFBTSxTQUFDLEdBQUc7Z0RBQ1YsTUFBTSxTQUFDLFlBQVk7Z0RBQ25CLE1BQU0sU0FBQyxVQUFVO2dCQUNYLGNBQWM7OztnQkFyQ3hCLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZUFBZTtvQkFFekIscTJIQUF3Qzs7aUJBQzNDOzs7Z0JBdkJ3QixNQUFNO2dCQUt0QixlQUFlO2dCQUZmLGdCQUFnQjtnQkFZaEIsZ0JBQWdCO2dEQXNDcEIsTUFBTSxTQUFDLEdBQUc7Z0RBQ1YsTUFBTSxTQUFDLFlBQVk7Z0RBQ25CLE1BQU0sU0FBQyxVQUFVO2dCQXZEYixjQUFjOztJQW1MdkIseUJBQUM7Q0FBQSxBQWhLRCxJQWdLQztTQTNKWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBOYkF1dGhTb2NpYWxMaW5rIH0gZnJvbSAnQG5lYnVsYXIvYXV0aCc7XG5pbXBvcnQgeyBOYkRpYWxvZ1NlcnZpY2UgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQge1xuICBBUEksXG4gIEhUVFBfU0VSVklDRSxcbiAgT0FVVEhfSU5GTyxcbn0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBBcGlCYXNlUmVzcG9uc2UgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEFQSU1vZGVsIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBIdHRwRmFjdG9yeVNlcnZpY2UgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IFNlY3VyaXR5UmVzb3VyY2VNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQXV0aFRva2VuU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGgtdG9rZW4uc2VydmljZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUZXJtc0NvbmRpdGlvbnNDb21wb25lbnQgfSBmcm9tICcuLi90ZXJtcy1jb25kaXRpb25zL3Rlcm1zLWNvbmRpdGlvbnMuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkby1sb2dpbi1wYWdlJyxcbiAgICBzdHlsZVVybHM6IFsnbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICAgIHRlbXBsYXRlVXJsOiAnbG9naW4tcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIHJlc3BvbnNlRXJyb3I6IGFueTtcbiAgcHVibGljIGJ1dHRvbkxvZ2luOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgcHJvZ3Jlc3NCYXI6IG51bWJlciA9IDI1O1xuICBwcm90ZWN0ZWQgZGVzdHJveSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBwdWJsaWMgZm9ybTogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgdXNlcm5hbWU6IG5ldyBGb3JtQ29udHJvbCgpLFxuICAgIHBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgfSk7XG5cbiAgcHJpdmF0ZSB1cmxBdXRob3JpemVHb29nbGU6IHN0cmluZyA9IHRoaXMuaHR0cEJhc2VTZXJ2aWNlLkFQSSh0aGlzLmFwaVBhdGhbJ2F1dGgnXVsnYXV0aG9yaXplJ10pICtcbiAgICAnL2dvb2dsZT9yZWRpcmVjdF91cmk9JyArXG4gICAgYCR7ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Jhc2UnKVswXS5ocmVmfWF1dGgvY2FsbGJhY2tgO1xuXG4gIHB1YmxpYyBzb2NpYWxMaW5rczogTmJBdXRoU29jaWFsTGlua1tdID0gW1xuICAgIHtcbiAgICAgIHVybDogdGhpcy51cmxBdXRob3JpemVHb29nbGUsXG4gICAgICB0YXJnZXQ6ICdfc2VsZicsXG4gICAgICBpY29uOiAnZ29vZ2xlJyxcbiAgICB9XG4gIF07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IE5iRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhUb2tlblNlcnZpY2U6IEF1dGhUb2tlblNlcnZpY2UsXG4gICAgQEluamVjdChBUEkpIHByaXZhdGUgYXBpUGF0aDogQVBJTW9kZWwsXG4gICAgQEluamVjdChIVFRQX1NFUlZJQ0UpIHByaXZhdGUgaHR0cEJhc2VTZXJ2aWNlOiBIdHRwRmFjdG9yeVNlcnZpY2UsXG4gICAgQEluamVjdChPQVVUSF9JTkZPKXByaXZhdGUgb2F1dGhSZXNvdXJjZTogU2VjdXJpdHlSZXNvdXJjZU1vZGVsLFxuICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIGlmIChyb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1snZXJyb3InXSkge1xuICAgICAgY29uc29sZS5sb2cocm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbJ2Vycm9yJ10pO1xuICAgICAgdGhpcy5yZXNwb25zZUVycm9yID0gJ2Vycm9yLicgKyByb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1snZXJyb3InXTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZGVzdHJveSQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dpbigpIHtcbiAgICBpZiAoIXRoaXMuZm9ybS5pbnZhbGlkKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1kb25lJykuZm9yRWFjaChwYWNlID0+IHtcbiAgICAgICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWRvbmUgcGFjZS1kb25lJywgJ3BhY2UtcnVubmluZycpO1xuICAgICAgICBwYWNlLmNsYXNzTmFtZSA9IHBhY2UuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtZG9uZScsICdwYWNlLXJ1bm5pbmcnKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhY2UtaW5hY3RpdmUnKS5mb3JFYWNoKHBhY2UgPT4ge1xuICAgICAgICBwYWNlLmNsYXNzTmFtZSA9IHBhY2UuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtaW5hY3RpdmUgcGFjZS1pbmFjdGl2ZScsICdwYWNlLWFjdGl2ZScpO1xuICAgICAgICBwYWNlLmNsYXNzTmFtZSA9IHBhY2UuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtaW5hY3RpdmUnLCAncGFjZS1hY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcHJvZ3Jlc3NET00gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWNlLXByb2dyZXNzJykuaXRlbSgwKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmICh0aGlzLnByb2dyZXNzQmFyIDwgMzUpIHtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IDM1O1xuICAgICAgICBwcm9ncmVzc0RPTS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArIHRoaXMucHJvZ3Jlc3NCYXIgKyAnJSwgMHB4LCAwcHgpJztcbiAgICAgICAgcHJvZ3Jlc3NET00uZ2V0QXR0cmlidXRlTm9kZSgnZGF0YS1wcm9ncmVzcy10ZXh0JykudmFsdWUgPSB0aGlzLnByb2dyZXNzQmFyICsgJyUnO1xuICAgICAgICBwcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzJykudmFsdWUgPSB0aGlzLnByb2dyZXNzQmFyLnRvU3RyaW5nKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmJ1dHRvbkxvZ2luID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXV0aFRva2VuU2VydmljZS5sb2dpbihcbiAgICAgICAgdGhpcy5mb3JtLmdldCgndXNlcm5hbWUnKS52YWx1ZSxcbiAgICAgICAgdGhpcy5mb3JtLmdldCgncGFzc3dvcmQnKS52YWx1ZSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVzcG9uc2VFcnJvciA9IG51bGw7XG4gICAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IDkwO1xuICAgICAgICAgIHByb2dyZXNzRE9NLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgdGhpcy5wcm9ncmVzc0JhciArICclLCAwcHgsIDBweCknO1xuICAgICAgICAgIHByb2dyZXNzRE9NLmdldEF0dHJpYnV0ZU5vZGUoJ2RhdGEtcHJvZ3Jlc3MtdGV4dCcpLnZhbHVlID0gdGhpcy5wcm9ncmVzc0JhciArICclJztcbiAgICAgICAgICBwcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzJykudmFsdWUgPSB0aGlzLnByb2dyZXNzQmFyLnRvU3RyaW5nKCk7XG4gICAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IDA7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL2hvbWUnXSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgIGlmICghKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZTogQXBpQmFzZVJlc3BvbnNlID0gKDxBcGlCYXNlUmVzcG9uc2U+IGVycm9yKTtcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2VFcnJvciA9IHJlc3BvbnNlLnJlc3BTdGF0dXNNZXNzYWdlW3Jlc3BvbnNlLnJlc3BTdGF0dXNDb2RlXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5idXR0b25Mb2dpbiA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSA4NTtcbiAgICAgICAgICBwcm9ncmVzc0RPTS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArIHRoaXMucHJvZ3Jlc3NCYXIgKyAnJSwgMHB4LCAwcHgpJztcbiAgICAgICAgICBwcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzLXRleHQnKS52YWx1ZSA9IHRoaXMucHJvZ3Jlc3NCYXIgKyAnJSc7XG4gICAgICAgICAgcHJvZ3Jlc3NET00uZ2V0QXR0cmlidXRlTm9kZSgnZGF0YS1wcm9ncmVzcycpLnZhbHVlID0gdGhpcy5wcm9ncmVzc0Jhci50b1N0cmluZygpO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWNlLXJ1bm5pbmcnKS5mb3JFYWNoKHBhY2UgPT4ge1xuICAgICAgICAgICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLXJ1bm5pbmcnLCAncGFjZS1kb25lJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhY2UtYWN0aXZlJykuZm9yRWFjaChwYWNlID0+IHtcbiAgICAgICAgICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1hY3RpdmUnLCAncGFjZS1pbmFjdGl2ZScpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSAwO1xuICAgICAgICB9KTtcbiAgICAgIGlmICh0aGlzLnByb2dyZXNzQmFyID49IDM1ICYmIHRoaXMucHJvZ3Jlc3NCYXIgPCA2NSkge1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gNjU7XG4gICAgICAgIHByb2dyZXNzRE9NLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgdGhpcy5wcm9ncmVzc0JhciArICclLCAwcHgsIDBweCknO1xuICAgICAgICBwcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzLXRleHQnKS52YWx1ZSA9IHRoaXMucHJvZ3Jlc3NCYXIgKyAnJSc7XG4gICAgICAgIHByb2dyZXNzRE9NLmdldEF0dHJpYnV0ZU5vZGUoJ2RhdGEtcHJvZ3Jlc3MnKS52YWx1ZSA9IHRoaXMucHJvZ3Jlc3NCYXIudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXQgaGFzRXJyb3JVc2VybmFtZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ10uaW52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddLnRvdWNoZWRcbiAgICApO1xuICB9XG5cbiAgZ2V0IGhhc1N1Y2Nlc3NVc2VybmFtZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ10udmFsaWQgJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXS50b3VjaGVkXG4gICAgKTtcbiAgfVxuXG4gIGdldCBoYXNFcnJvclBhc3N3b3JkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10gJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS5pbnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10udG91Y2hlZFxuICAgICk7XG4gIH1cblxuICBnZXQgaGFzU3VjY2Vzc1Bhc3N3b3JkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10gJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddLnRvdWNoZWRcbiAgICApO1xuICB9XG5cbiAgcHVibGljIG9uQ2xpY2tUZXJtc0NvbmRpdGlvbnMoKSB7XG4gICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgJ3BhcmFtZXRlckNvZGUnOiAnVEVSTVNfQ09ORElUSU9OUy5ET05HS0FQJ1xuICAgIH07XG4gICAgY29uc3QgaHR0cEhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljICcgKyBidG9hKHRoaXMub2F1dGhSZXNvdXJjZVsnY2xpZW50X2lkJ10gKyAnOicgKyB0aGlzLm9hdXRoUmVzb3VyY2VbJ2NsaWVudF9zZWNyZXQnXSksXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IHRoaXMudHJhbnNsYXRlLmN1cnJlbnRMYW5nLFxuICAgIH0pO1xuICAgIHRoaXMuaHR0cEJhc2VTZXJ2aWNlLkhUVFBfQkFTRSh0aGlzLmFwaVBhdGhbJ29wZW5hcGknXVsncGFyYW1ldGVyJ10sIGRhdGEsIGh0dHBIZWFkZXJzKVxuICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihUZXJtc0NvbmRpdGlvbnNDb21wb25lbnQsIHtcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlWydwYXJhbWV0ZXJWYWx1ZSddLFxuICAgICAgICAgIGFjdGlvbjogJ0Nsb3NlJyxcbiAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19