import { __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { NbCheckboxModule, NbAlertModule, NbInputModule, NbButtonModule, NbIconModule, NbDialogModule, NbCardModule, NbSpinnerModule, } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { AUTH_INDEXED_DB, PROFILE_INDEXED_DB, SETTINGS_INDEXED_DB, USER_INFO } from '@dongkap/do-core';
import { DoThemeModule } from '@dongkap/do-theme';
import { DoToastrModule } from '@dongkap/do-common';
import { AuthGuardService } from './services/auth-guard.service';
import { UnauthorizeGuardService } from './services/unauth-guard.service';
import { AuthTokenService } from './services/auth-token.service';
import { AuthGuardChildService } from './services/auth-guard-child.service';
import { LoginPageComponent } from './auth/login/login-page.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { DoAuthRoutingModule } from './do-auth-routing.module';
import { DoLayoutAuthModule } from './layout/do-layout-auth.module';
import { AuthSignatureService } from './services/auth-signature.service';
import { HttpInterceptorTokenService } from './services/http-interceptor-token.service';
import { HttpInterceptorSignatureService } from './services/http-interceptor-signature.service';
import { HttpInterceptorLangService } from './services/http-interceptor-lang.service';
import { HttpInterceptorErrorService } from './services/http-interceptor-error.service';
import { AuthUserService } from './services/auth-user.service';
import { AuthIndexedDBService } from './storage/auth-indexeddb.service';
import { ProfileIndexedDBService } from './storage/profile-indexeddb.service';
import { SettingsIndexedDBService } from './storage/settings-indexeddb.service';
import { AuthLanguageService } from './services/auth-lang.service';
import { RegisterPageComponent } from './auth/register/register-page.component';
import { RequestForgotPageComponent } from './auth/forgot/request-forgot-page.component';
import { ForgotPageComponent } from './auth/forgot/forgot-page.component';
import { TermsConditionsComponent } from './auth/terms-conditions/terms-conditions.component';
import { OAuth2CallbackComponent } from './auth/oauth2/oauth2-callback.component';
var AUTH_PROVIDERS = [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorTokenService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorSignatureService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorLangService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorErrorService, multi: true },
    { provide: USER_INFO, useClass: AuthUserService },
    { provide: AUTH_INDEXED_DB, useClass: AuthIndexedDBService },
    { provide: PROFILE_INDEXED_DB, useClass: ProfileIndexedDBService },
    { provide: SETTINGS_INDEXED_DB, useClass: SettingsIndexedDBService },
    AuthGuardService,
    UnauthorizeGuardService,
    AuthTokenService,
    AuthGuardChildService,
    AuthSignatureService,
    AuthLanguageService,
];
var AUTH_COMPONENTS = [
    LoginPageComponent,
    LogoutComponent,
    RegisterPageComponent,
    RequestForgotPageComponent,
    ForgotPageComponent,
    TermsConditionsComponent,
    OAuth2CallbackComponent,
];
var AUTH_ENTRY_COMPONENTS = [
    TermsConditionsComponent,
];
var DoAuthModule = /** @class */ (function () {
    function DoAuthModule() {
    }
    DoAuthModule.forRoot = function () {
        return {
            ngModule: DoAuthModule,
            providers: __spread(AUTH_PROVIDERS),
        };
    };
    DoAuthModule.decorators = [
        { type: NgModule, args: [{
                    declarations: __spread(AUTH_COMPONENTS),
                    imports: [
                        CommonModule,
                        FormsModule,
                        TranslateModule,
                        ReactiveFormsModule,
                        HttpClientModule,
                        RecaptchaModule,
                        RecaptchaFormsModule,
                        NbCheckboxModule,
                        NbAlertModule,
                        NbInputModule,
                        NbButtonModule,
                        NbIconModule,
                        NbCardModule,
                        NbSpinnerModule,
                        NbDialogModule.forChild(),
                        DoThemeModule,
                        DoToastrModule.forRoot(),
                        DoLayoutAuthModule,
                        DoAuthRoutingModule,
                    ],
                    exports: __spread(AUTH_COMPONENTS),
                    entryComponents: __spread(AUTH_ENTRY_COMPONENTS),
                },] }
    ];
    return DoAuthModule;
}());
export { DoAuthModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1hdXRoLyIsInNvdXJjZXMiOlsibGliL2RvLWF1dGgubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixhQUFhLEVBQ2IsY0FBYyxFQUNkLFlBQVksRUFDWixjQUFjLEVBQ2QsWUFBWSxFQUNaLGVBQWUsR0FDaEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdkcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSxPQUFP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RUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsZUFBZTt3QkFDZixtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixvQkFBb0I7d0JBQ3BCLGdCQUFnQjt3QkFDaEIsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsY0FBYyxDQUFDLFFBQVEsRUFBRTt3QkFDekIsYUFBYTt3QkFDYixjQUFjLENBQUMsT0FBTyxFQUFFO3dCQUN4QixrQkFBa0I7d0JBQ2xCLG1CQUFtQjtxQkFDcEI7b0JBQ0QsT0FBTyxXQUNGLGVBQWUsQ0FDbkI7b0JBQ0QsZUFBZSxXQUNWLHFCQUFxQixDQUN6QjtpQkFDRjs7SUFVRCxtQkFBQztDQUFBLEFBekNELElBeUNDO1NBVFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBOYkNoZWNrYm94TW9kdWxlLFxuICBOYkFsZXJ0TW9kdWxlLFxuICBOYklucHV0TW9kdWxlLFxuICBOYkJ1dHRvbk1vZHVsZSxcbiAgTmJJY29uTW9kdWxlLFxuICBOYkRpYWxvZ01vZHVsZSxcbiAgTmJDYXJkTW9kdWxlLFxuICBOYlNwaW5uZXJNb2R1bGUsXG59IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBSZWNhcHRjaGFGb3Jtc01vZHVsZSwgUmVjYXB0Y2hhTW9kdWxlIH0gZnJvbSAnbmctcmVjYXB0Y2hhJztcbmltcG9ydCB7IEFVVEhfSU5ERVhFRF9EQiwgUFJPRklMRV9JTkRFWEVEX0RCLCBTRVRUSU5HU19JTkRFWEVEX0RCLCBVU0VSX0lORk8gfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IERvVGhlbWVNb2R1bGUgfSBmcm9tICdAZG9uZ2thcC9kby10aGVtZSc7XG5pbXBvcnQgeyBEb1RvYXN0ck1vZHVsZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvbW1vbic7XG5pbXBvcnQgeyBBdXRoR3VhcmRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoLWd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgVW5hdXRob3JpemVHdWFyZFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3VuYXV0aC1ndWFyZC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhUb2tlblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGgtdG9rZW4uc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoR3VhcmRDaGlsZFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGgtZ3VhcmQtY2hpbGQuc2VydmljZSc7XG5pbXBvcnQgeyBMb2dpblBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2F1dGgvbG9naW4vbG9naW4tcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9nb3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hdXRoL2xvZ291dC9sb2dvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IERvQXV0aFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2RvLWF1dGgtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgRG9MYXlvdXRBdXRoTW9kdWxlIH0gZnJvbSAnLi9sYXlvdXQvZG8tbGF5b3V0LWF1dGgubW9kdWxlJztcbmltcG9ydCB7IEF1dGhTaWduYXR1cmVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoLXNpZ25hdHVyZS5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvclRva2VuU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaHR0cC1pbnRlcmNlcHRvci10b2tlbi5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvclNpZ25hdHVyZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2h0dHAtaW50ZXJjZXB0b3Itc2lnbmF0dXJlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yTGFuZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2h0dHAtaW50ZXJjZXB0b3ItbGFuZy5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvckVycm9yU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaHR0cC1pbnRlcmNlcHRvci1lcnJvci5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhVc2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXV0aC11c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aEluZGV4ZWREQlNlcnZpY2UgfSBmcm9tICcuL3N0b3JhZ2UvYXV0aC1pbmRleGVkZGIuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9maWxlSW5kZXhlZERCU2VydmljZSB9IGZyb20gJy4vc3RvcmFnZS9wcm9maWxlLWluZGV4ZWRkYi5zZXJ2aWNlJztcbmltcG9ydCB7IFNldHRpbmdzSW5kZXhlZERCU2VydmljZSB9IGZyb20gJy4vc3RvcmFnZS9zZXR0aW5ncy1pbmRleGVkZGIuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoLWxhbmcuc2VydmljZSc7XG5pbXBvcnQgeyBSZWdpc3RlclBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXItcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVxdWVzdEZvcmdvdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2F1dGgvZm9yZ290L3JlcXVlc3QtZm9yZ290LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcmdvdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2F1dGgvZm9yZ290L2ZvcmdvdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXJtc0NvbmRpdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL2F1dGgvdGVybXMtY29uZGl0aW9ucy90ZXJtcy1jb25kaXRpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPQXV0aDJDYWxsYmFja0NvbXBvbmVudCB9IGZyb20gJy4vYXV0aC9vYXV0aDIvb2F1dGgyLWNhbGxiYWNrLmNvbXBvbmVudCc7XG5cbmNvbnN0IEFVVEhfUFJPVklERVJTID0gW1xuICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSHR0cEludGVyY2VwdG9yVG9rZW5TZXJ2aWNlLCBtdWx0aTogdHJ1ZX0sXG4gIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBIdHRwSW50ZXJjZXB0b3JTaWduYXR1cmVTZXJ2aWNlLCBtdWx0aTogdHJ1ZX0sXG4gIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBIdHRwSW50ZXJjZXB0b3JMYW5nU2VydmljZSwgbXVsdGk6IHRydWV9LFxuICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSHR0cEludGVyY2VwdG9yRXJyb3JTZXJ2aWNlLCBtdWx0aTogdHJ1ZX0sXG4gIHsgcHJvdmlkZTogVVNFUl9JTkZPLCB1c2VDbGFzczogQXV0aFVzZXJTZXJ2aWNlIH0sXG4gIHsgcHJvdmlkZTogQVVUSF9JTkRFWEVEX0RCLCB1c2VDbGFzczogQXV0aEluZGV4ZWREQlNlcnZpY2UgfSxcbiAgeyBwcm92aWRlOiBQUk9GSUxFX0lOREVYRURfREIsIHVzZUNsYXNzOiBQcm9maWxlSW5kZXhlZERCU2VydmljZSB9LFxuICB7IHByb3ZpZGU6IFNFVFRJTkdTX0lOREVYRURfREIsIHVzZUNsYXNzOiBTZXR0aW5nc0luZGV4ZWREQlNlcnZpY2UgfSxcbiAgQXV0aEd1YXJkU2VydmljZSxcbiAgVW5hdXRob3JpemVHdWFyZFNlcnZpY2UsXG4gIEF1dGhUb2tlblNlcnZpY2UsXG4gIEF1dGhHdWFyZENoaWxkU2VydmljZSxcbiAgQXV0aFNpZ25hdHVyZVNlcnZpY2UsXG4gIEF1dGhMYW5ndWFnZVNlcnZpY2UsXG5dO1xuXG5jb25zdCBBVVRIX0NPTVBPTkVOVFMgPSBbXG4gIExvZ2luUGFnZUNvbXBvbmVudCxcbiAgTG9nb3V0Q29tcG9uZW50LFxuICBSZWdpc3RlclBhZ2VDb21wb25lbnQsXG4gIFJlcXVlc3RGb3Jnb3RQYWdlQ29tcG9uZW50LFxuICBGb3Jnb3RQYWdlQ29tcG9uZW50LFxuICBUZXJtc0NvbmRpdGlvbnNDb21wb25lbnQsXG4gIE9BdXRoMkNhbGxiYWNrQ29tcG9uZW50LFxuXTtcblxuY29uc3QgQVVUSF9FTlRSWV9DT01QT05FTlRTID0gW1xuICBUZXJtc0NvbmRpdGlvbnNDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5BVVRIX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBSZWNhcHRjaGFNb2R1bGUsXG4gICAgUmVjYXB0Y2hhRm9ybXNNb2R1bGUsXG4gICAgTmJDaGVja2JveE1vZHVsZSxcbiAgICBOYkFsZXJ0TW9kdWxlLFxuICAgIE5iSW5wdXRNb2R1bGUsXG4gICAgTmJCdXR0b25Nb2R1bGUsXG4gICAgTmJJY29uTW9kdWxlLFxuICAgIE5iQ2FyZE1vZHVsZSxcbiAgICBOYlNwaW5uZXJNb2R1bGUsXG4gICAgTmJEaWFsb2dNb2R1bGUuZm9yQ2hpbGQoKSxcbiAgICBEb1RoZW1lTW9kdWxlLFxuICAgIERvVG9hc3RyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBEb0xheW91dEF1dGhNb2R1bGUsXG4gICAgRG9BdXRoUm91dGluZ01vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLkFVVEhfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgLi4uQVVUSF9FTlRSWV9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEb0F1dGhNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPERvQXV0aE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRG9BdXRoTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLkFVVEhfUFJPVklERVJTLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=