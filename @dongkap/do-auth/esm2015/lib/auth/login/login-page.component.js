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
export class LoginPageComponent {
    constructor(router, dialogService, translate, authTokenService, apiPath, httpBaseService, oauthResource, route) {
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
            `${document.getElementsByTagName('base')[0].href}auth/callback`;
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
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    login() {
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
            this.buttonLogin = true;
            this.authTokenService.login(this.form.get('username').value, this.form.get('password').value)
                .then(() => {
                this.responseError = null;
                this.progressBar = 90;
                progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
                this.progressBar = 0;
                this.router.navigate(['/app/home']);
            })
                .catch((error) => {
                if (!(error instanceof HttpErrorResponse)) {
                    const response = error;
                    this.responseError = response.respStatusMessage[response.respStatusCode];
                }
                this.buttonLogin = false;
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
            });
            if (this.progressBar >= 35 && this.progressBar < 65) {
                this.progressBar = 65;
                progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
            }
        }
    }
    get hasErrorUsername() {
        return (this.form.controls['username'] &&
            this.form.controls['username'].invalid &&
            this.form.controls['username'].touched);
    }
    get hasSuccessUsername() {
        return (this.form.controls['username'] &&
            this.form.controls['username'].valid &&
            this.form.controls['username'].touched);
    }
    get hasErrorPassword() {
        return (this.form.controls['password'] &&
            this.form.controls['password'].invalid &&
            this.form.controls['password'].touched);
    }
    get hasSuccessPassword() {
        return (this.form.controls['password'] &&
            this.form.controls['password'].valid &&
            this.form.controls['password'].touched);
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
                    action: 'Close',
                },
            });
        });
    }
}
LoginPageComponent.ctorParameters = () => [
    { type: Router },
    { type: NbDialogService },
    { type: TranslateService },
    { type: AuthTokenService },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: ActivatedRoute }
];
LoginPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-login-page',
                template: "<h1 id=\"title\" class=\"title\">{{ 'Login' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.login' | translate }}</p>\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.login' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError | translate }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"login()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\">{{ 'message.username-login' | translate }} :</label>\n    <input [formControlName]=\"'username'\"\n          [required]=\"true\"\n          [ngClass]=\"{\n            'status-danger': hasErrorUsername,\n            'status-success': hasSuccessUsername\n          }\"\n          name=\"username\"\n          id=\"inputUsername\"\n          placeholder=\"{{ 'message.username-login-placeholder' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"1\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorUsername\">\n      <span class=\"caption status-danger\">{{'error.username-login' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <span class=\"label-with-link\">\n      <label class=\"label\">{{ 'Password' | translate }} :</label>\n      <a class=\"forgot-password caption-2\" routerLink=\"/auth/forgot-password\" tabindex=\"-1\">{{ 'Forgot Password' | translate}}?</a>\n    </span>\n    <input [formControlName]=\"'password'\"\n          [required]=\"true\"\n          [ngClass]=\"{\n            'status-danger': hasErrorPassword,\n            'status-success': hasSuccessPassword\n          }\"\n          name=\"password\"\n          type=\"password\"\n          id=\"inputPassword\"\n          placeholder=\"{{ 'Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"2\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorPassword\">\n      <span class=\"caption status-danger\">{{ 'error.password' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"form.invalid || buttonLogin\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"form.invalid || buttonLogin\">\n    {{ 'Login' | translate }}\n  </button>\n</form>\n\n<section *ngIf=\"socialLinks && socialLinks.length > 0\" class=\"links\" aria-label=\"Social sign in\">\n  {{ 'message.login-footer-social' | translate}}:\n  <div class=\"socials\">\n    <ng-container *ngFor=\"let socialLink of socialLinks\">\n      <a *ngIf=\"socialLink.link\"\n         [routerLink]=\"socialLink.link\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n      <a *ngIf=\"socialLink.url\"\n         [attr.href]=\"socialLink.url\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n    </ng-container>\n  </div>\n</section>\n\n<section class=\"another-action\" aria-label=\"Register\">\n  {{ 'message.login-footer' | translate}} <a class=\"text-link\" routerLink=\"/auth/register\">{{ 'Register' | translate}}</a>\n</section>\n\n<section class=\"another-action\" aria-label=\"Terms and Conditions\">\n  <span class=\"terms-conditions\" (click)=\"onClickTermsConditions()\" tabindex=\"-1\">{{ 'message.terms-conditions' | translate}}</span>\n</section>\n",
                styles: [".terms-conditions{color:#36f;text-decoration:underline;font-size:inherit;font-style:inherit;font-weight:inherit;line-height:inherit;cursor:pointer}.terms-conditions:hover{color:#598bff}"]
            },] }
];
LoginPageComponent.ctorParameters = () => [
    { type: Router },
    { type: NbDialogService },
    { type: TranslateService },
    { type: AuthTokenService },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: ActivatedRoute }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGgvbG9naW4vbG9naW4tcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsR0FBRyxFQUNILFlBQVksRUFDWixVQUFVLEdBQ1gsTUFBTSxrQkFBa0IsQ0FBQztBQUsxQixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFPMUYsTUFBTSxPQUFPLGtCQUFrQjtJQXdCN0IsWUFDVSxNQUFjLEVBQ2QsYUFBOEIsRUFDOUIsU0FBMkIsRUFDM0IsZ0JBQWtDLEVBQ3JCLE9BQWlCLEVBQ1IsZUFBbUMsRUFDdEMsYUFBb0MsRUFDL0QsS0FBcUI7UUFQYixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQWlCO1FBQzlCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FB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QUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQWhJaUIsTUFBTTtZQUNDLGVBQWU7WUFDbkIsZ0JBQWdCO1lBQ1QsZ0JBQWdCOzRDQUN6QyxNQUFNLFNBQUMsR0FBRzs0Q0FDVixNQUFNLFNBQUMsWUFBWTs0Q0FDbkIsTUFBTSxTQUFDLFVBQVU7WUFDWCxjQUFjOzs7WUFyQ3hCLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZUFBZTtnQkFFekIscTJIQUF3Qzs7YUFDM0M7OztZQXZCd0IsTUFBTTtZQUt0QixlQUFlO1lBRmYsZ0JBQWdCO1lBWWhCLGdCQUFnQjs0Q0FzQ3BCLE1BQU0sU0FBQyxHQUFHOzRDQUNWLE1BQU0sU0FBQyxZQUFZOzRDQUNuQixNQUFNLFNBQUMsVUFBVTtZQXZEYixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgTmJBdXRoU29jaWFsTGluayB9IGZyb20gJ0BuZWJ1bGFyL2F1dGgnO1xuaW1wb3J0IHsgTmJEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHtcbiAgQVBJLFxuICBIVFRQX1NFUlZJQ0UsXG4gIE9BVVRIX0lORk8sXG59IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQXBpQmFzZVJlc3BvbnNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBBUElNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgSHR0cEZhY3RvcnlTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBTZWN1cml0eVJlc291cmNlTW9kZWwgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEF1dGhUb2tlblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLXRva2VuLnNlcnZpY2UnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVGVybXNDb25kaXRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi4vdGVybXMtY29uZGl0aW9ucy90ZXJtcy1jb25kaXRpb25zLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZG8tbG9naW4tcGFnZScsXG4gICAgc3R5bGVVcmxzOiBbJ2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgICB0ZW1wbGF0ZVVybDogJ2xvZ2luLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpblBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyByZXNwb25zZUVycm9yOiBhbnk7XG4gIHB1YmxpYyBidXR0b25Mb2dpbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHByb2dyZXNzQmFyOiBudW1iZXIgPSAyNTtcbiAgcHJvdGVjdGVkIGRlc3Ryb3kkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgcHVibGljIGZvcm06IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xuICAgIHVzZXJuYW1lOiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgICBwYXNzd29yZDogbmV3IEZvcm1Db250cm9sKCksXG4gIH0pO1xuXG4gIHByaXZhdGUgdXJsQXV0aG9yaXplR29vZ2xlOiBzdHJpbmcgPSB0aGlzLmh0dHBCYXNlU2VydmljZS5BUEkodGhpcy5hcGlQYXRoWydhdXRoJ11bJ2F1dGhvcml6ZSddKSArXG4gICAgJy9nb29nbGU/cmVkaXJlY3RfdXJpPScgK1xuICAgIGAke2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYXNlJylbMF0uaHJlZn1hdXRoL2NhbGxiYWNrYDtcblxuICBwdWJsaWMgc29jaWFsTGlua3M6IE5iQXV0aFNvY2lhbExpbmtbXSA9IFtcbiAgICB7XG4gICAgICB1cmw6IHRoaXMudXJsQXV0aG9yaXplR29vZ2xlLFxuICAgICAgdGFyZ2V0OiAnX3NlbGYnLFxuICAgICAgaWNvbjogJ2dvb2dsZScsXG4gICAgfVxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBOYkRpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoVG9rZW5TZXJ2aWNlOiBBdXRoVG9rZW5TZXJ2aWNlLFxuICAgIEBJbmplY3QoQVBJKSBwcml2YXRlIGFwaVBhdGg6IEFQSU1vZGVsLFxuICAgIEBJbmplY3QoSFRUUF9TRVJWSUNFKSBwcml2YXRlIGh0dHBCYXNlU2VydmljZTogSHR0cEZhY3RvcnlTZXJ2aWNlLFxuICAgIEBJbmplY3QoT0FVVEhfSU5GTylwcml2YXRlIG9hdXRoUmVzb3VyY2U6IFNlY3VyaXR5UmVzb3VyY2VNb2RlbCxcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICBpZiAocm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbJ2Vycm9yJ10pIHtcbiAgICAgIGNvbnNvbGUubG9nKHJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zWydlcnJvciddKTtcbiAgICAgIHRoaXMucmVzcG9uc2VFcnJvciA9ICdlcnJvci4nICsgcm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbJ2Vycm9yJ107XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgbG9naW4oKSB7XG4gICAgaWYgKCF0aGlzLmZvcm0uaW52YWxpZCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhY2UtZG9uZScpLmZvckVhY2gocGFjZSA9PiB7XG4gICAgICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1kb25lIHBhY2UtZG9uZScsICdwYWNlLXJ1bm5pbmcnKTtcbiAgICAgICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWRvbmUnLCAncGFjZS1ydW5uaW5nJyk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWNlLWluYWN0aXZlJykuZm9yRWFjaChwYWNlID0+IHtcbiAgICAgICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWluYWN0aXZlIHBhY2UtaW5hY3RpdmUnLCAncGFjZS1hY3RpdmUnKTtcbiAgICAgICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWluYWN0aXZlJywgJ3BhY2UtYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHByb2dyZXNzRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGFjZS1wcm9ncmVzcycpLml0ZW0oMCkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAodGhpcy5wcm9ncmVzc0JhciA8IDM1KSB7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSAzNTtcbiAgICAgICAgcHJvZ3Jlc3NET00uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKCcgKyB0aGlzLnByb2dyZXNzQmFyICsgJyUsIDBweCwgMHB4KSc7XG4gICAgICAgIHByb2dyZXNzRE9NLmdldEF0dHJpYnV0ZU5vZGUoJ2RhdGEtcHJvZ3Jlc3MtdGV4dCcpLnZhbHVlID0gdGhpcy5wcm9ncmVzc0JhciArICclJztcbiAgICAgICAgcHJvZ3Jlc3NET00uZ2V0QXR0cmlidXRlTm9kZSgnZGF0YS1wcm9ncmVzcycpLnZhbHVlID0gdGhpcy5wcm9ncmVzc0Jhci50b1N0cmluZygpO1xuICAgICAgfVxuICAgICAgdGhpcy5idXR0b25Mb2dpbiA9IHRydWU7XG4gICAgICB0aGlzLmF1dGhUb2tlblNlcnZpY2UubG9naW4oXG4gICAgICAgIHRoaXMuZm9ybS5nZXQoJ3VzZXJuYW1lJykudmFsdWUsXG4gICAgICAgIHRoaXMuZm9ybS5nZXQoJ3Bhc3N3b3JkJykudmFsdWUpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlc3BvbnNlRXJyb3IgPSBudWxsO1xuICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSA5MDtcbiAgICAgICAgICBwcm9ncmVzc0RPTS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArIHRoaXMucHJvZ3Jlc3NCYXIgKyAnJSwgMHB4LCAwcHgpJztcbiAgICAgICAgICBwcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzLXRleHQnKS52YWx1ZSA9IHRoaXMucHJvZ3Jlc3NCYXIgKyAnJSc7XG4gICAgICAgICAgcHJvZ3Jlc3NET00uZ2V0QXR0cmlidXRlTm9kZSgnZGF0YS1wcm9ncmVzcycpLnZhbHVlID0gdGhpcy5wcm9ncmVzc0Jhci50b1N0cmluZygpO1xuICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSAwO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9ob21lJ10pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoIShlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2U6IEFwaUJhc2VSZXNwb25zZSA9ICg8QXBpQmFzZVJlc3BvbnNlPiBlcnJvcik7XG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlRXJyb3IgPSByZXNwb25zZS5yZXNwU3RhdHVzTWVzc2FnZVtyZXNwb25zZS5yZXNwU3RhdHVzQ29kZV07XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuYnV0dG9uTG9naW4gPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gODU7XG4gICAgICAgICAgcHJvZ3Jlc3NET00uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKCcgKyB0aGlzLnByb2dyZXNzQmFyICsgJyUsIDBweCwgMHB4KSc7XG4gICAgICAgICAgcHJvZ3Jlc3NET00uZ2V0QXR0cmlidXRlTm9kZSgnZGF0YS1wcm9ncmVzcy10ZXh0JykudmFsdWUgPSB0aGlzLnByb2dyZXNzQmFyICsgJyUnO1xuICAgICAgICAgIHByb2dyZXNzRE9NLmdldEF0dHJpYnV0ZU5vZGUoJ2RhdGEtcHJvZ3Jlc3MnKS52YWx1ZSA9IHRoaXMucHJvZ3Jlc3NCYXIudG9TdHJpbmcoKTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1ydW5uaW5nJykuZm9yRWFjaChwYWNlID0+IHtcbiAgICAgICAgICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1ydW5uaW5nJywgJ3BhY2UtZG9uZScpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWNlLWFjdGl2ZScpLmZvckVhY2gocGFjZSA9PiB7XG4gICAgICAgICAgICBwYWNlLmNsYXNzTmFtZSA9IHBhY2UuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtYWN0aXZlJywgJ3BhY2UtaW5hY3RpdmUnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gMDtcbiAgICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5wcm9ncmVzc0JhciA+PSAzNSAmJiB0aGlzLnByb2dyZXNzQmFyIDwgNjUpIHtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IDY1O1xuICAgICAgICBwcm9ncmVzc0RPTS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArIHRoaXMucHJvZ3Jlc3NCYXIgKyAnJSwgMHB4LCAwcHgpJztcbiAgICAgICAgcHJvZ3Jlc3NET00uZ2V0QXR0cmlidXRlTm9kZSgnZGF0YS1wcm9ncmVzcy10ZXh0JykudmFsdWUgPSB0aGlzLnByb2dyZXNzQmFyICsgJyUnO1xuICAgICAgICBwcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzJykudmFsdWUgPSB0aGlzLnByb2dyZXNzQmFyLnRvU3RyaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IGhhc0Vycm9yVXNlcm5hbWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXSAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddLmludmFsaWQgJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXS50b3VjaGVkXG4gICAgKTtcbiAgfVxuXG4gIGdldCBoYXNTdWNjZXNzVXNlcm5hbWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXSAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddLnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ10udG91Y2hlZFxuICAgICk7XG4gIH1cblxuICBnZXQgaGFzRXJyb3JQYXNzd29yZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10uaW52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddLnRvdWNoZWRcbiAgICApO1xuICB9XG5cbiAgZ2V0IGhhc1N1Y2Nlc3NQYXNzd29yZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10udmFsaWQgJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS50b3VjaGVkXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNsaWNrVGVybXNDb25kaXRpb25zKCkge1xuICAgIGNvbnN0IGRhdGE6IGFueSA9IHtcbiAgICAgICdwYXJhbWV0ZXJDb2RlJzogJ1RFUk1TX0NPTkRJVElPTlMuRE9OR0tBUCdcbiAgICB9O1xuICAgIGNvbnN0IGh0dHBIZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyAnICsgYnRvYSh0aGlzLm9hdXRoUmVzb3VyY2VbJ2NsaWVudF9pZCddICsgJzonICsgdGhpcy5vYXV0aFJlc291cmNlWydjbGllbnRfc2VjcmV0J10pLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiB0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZyxcbiAgICB9KTtcbiAgICB0aGlzLmh0dHBCYXNlU2VydmljZS5IVFRQX0JBU0UodGhpcy5hcGlQYXRoWydvcGVuYXBpJ11bJ3BhcmFtZXRlciddLCBkYXRhLCBodHRwSGVhZGVycylcbiAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oVGVybXNDb25kaXRpb25zQ29tcG9uZW50LCB7XG4gICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICBjb250ZW50OiByZXNwb25zZVsncGFyYW1ldGVyVmFsdWUnXSxcbiAgICAgICAgICBhY3Rpb246ICdDbG9zZScsXG4gICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==