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
const AUTH_PROVIDERS = [
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
const AUTH_COMPONENTS = [
    LoginPageComponent,
    LogoutComponent,
    RegisterPageComponent,
    RequestForgotPageComponent,
    ForgotPageComponent,
    TermsConditionsComponent,
    OAuth2CallbackComponent,
];
const AUTH_ENTRY_COMPONENTS = [
    TermsConditionsComponent,
];
export class DoAuthModule {
    static forRoot() {
        return {
            ngModule: DoAuthModule,
            providers: [
                ...AUTH_PROVIDERS,
            ],
        };
    }
}
DoAuthModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ...AUTH_COMPONENTS,
                ],
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
                exports: [
                    ...AUTH_COMPONENTS,
                ],
                entryComponents: [
                    ...AUTH_ENTRY_COMPONENTS,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1hdXRoLyIsInNvdXJjZXMiOlsibGliL2RvLWF1dGgubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLGFBQWEsRUFDYixjQUFjLEVBQ2QsWUFBWSxFQUNaLGNBQWMsRUFDZCxZQUFZLEVBQ1osZUFBZSxHQUNoQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN2RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzVFLE9BQU8s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QUFHLGVBQWU7aUJBQ25CO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsZUFBZTtvQkFDZixtQkFBbUI7b0JBQ25CLGdCQUFnQjtvQkFDaEIsZUFBZTtvQkFDZixvQkFBb0I7b0JBQ3BCLGdCQUFnQjtvQkFDaEIsYUFBYTtvQkFDYixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsWUFBWTtvQkFDWixZQUFZO29CQUNaLGVBQWU7b0JBQ2YsY0FBYyxDQUFDLFFBQVEsRUFBRTtvQkFDekIsYUFBYTtvQkFDYixjQUFjLENBQUMsT0FBTyxFQUFFO29CQUN4QixrQkFBa0I7b0JBQ2xCLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLEdBQUcsZUFBZTtpQkFDbkI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLEdBQUcscUJBQXFCO2lCQUN6QjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE5iQ2hlY2tib3hNb2R1bGUsXG4gIE5iQWxlcnRNb2R1bGUsXG4gIE5iSW5wdXRNb2R1bGUsXG4gIE5iQnV0dG9uTW9kdWxlLFxuICBOYkljb25Nb2R1bGUsXG4gIE5iRGlhbG9nTW9kdWxlLFxuICBOYkNhcmRNb2R1bGUsXG4gIE5iU3Bpbm5lck1vZHVsZSxcbn0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IFJlY2FwdGNoYUZvcm1zTW9kdWxlLCBSZWNhcHRjaGFNb2R1bGUgfSBmcm9tICduZy1yZWNhcHRjaGEnO1xuaW1wb3J0IHsgQVVUSF9JTkRFWEVEX0RCLCBQUk9GSUxFX0lOREVYRURfREIsIFNFVFRJTkdTX0lOREVYRURfREIsIFVTRVJfSU5GTyB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgRG9UaGVtZU1vZHVsZSB9IGZyb20gJ0Bkb25na2FwL2RvLXRoZW1lJztcbmltcG9ydCB7IERvVG9hc3RyTW9kdWxlIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29tbW9uJztcbmltcG9ydCB7IEF1dGhHdWFyZFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGgtZ3VhcmQuc2VydmljZSc7XG5pbXBvcnQgeyBVbmF1dGhvcml6ZUd1YXJkU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdW5hdXRoLWd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFRva2VuU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXV0aC10b2tlbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhHdWFyZENoaWxkU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXV0aC1ndWFyZC1jaGlsZC5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2luUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYXV0aC9sb2dpbi9sb2dpbi1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dvdXRDb21wb25lbnQgfSBmcm9tICcuL2F1dGgvbG9nb3V0L2xvZ291dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9BdXRoUm91dGluZ01vZHVsZSB9IGZyb20gJy4vZG8tYXV0aC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBEb0xheW91dEF1dGhNb2R1bGUgfSBmcm9tICcuL2xheW91dC9kby1sYXlvdXQtYXV0aC5tb2R1bGUnO1xuaW1wb3J0IHsgQXV0aFNpZ25hdHVyZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGgtc2lnbmF0dXJlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9odHRwLWludGVyY2VwdG9yLXRva2VuLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yU2lnbmF0dXJlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaHR0cC1pbnRlcmNlcHRvci1zaWduYXR1cmUuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwSW50ZXJjZXB0b3JMYW5nU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaHR0cC1pbnRlcmNlcHRvci1sYW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9odHRwLWludGVyY2VwdG9yLWVycm9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoLXVzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoSW5kZXhlZERCU2VydmljZSB9IGZyb20gJy4vc3RvcmFnZS9hdXRoLWluZGV4ZWRkYi5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2ZpbGVJbmRleGVkREJTZXJ2aWNlIH0gZnJvbSAnLi9zdG9yYWdlL3Byb2ZpbGUtaW5kZXhlZGRiLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2V0dGluZ3NJbmRleGVkREJTZXJ2aWNlIH0gZnJvbSAnLi9zdG9yYWdlL3NldHRpbmdzLWluZGV4ZWRkYi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGgtbGFuZy5zZXJ2aWNlJztcbmltcG9ydCB7IFJlZ2lzdGVyUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXF1ZXN0Rm9yZ290UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYXV0aC9mb3Jnb3QvcmVxdWVzdC1mb3Jnb3QtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9yZ290UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYXV0aC9mb3Jnb3QvZm9yZ290LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFRlcm1zQ29uZGl0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vYXV0aC90ZXJtcy1jb25kaXRpb25zL3Rlcm1zLWNvbmRpdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IE9BdXRoMkNhbGxiYWNrQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRoL29hdXRoMi9vYXV0aDItY2FsbGJhY2suY29tcG9uZW50JztcblxuY29uc3QgQVVUSF9QUk9WSURFUlMgPSBbXG4gIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBIdHRwSW50ZXJjZXB0b3JUb2tlblNlcnZpY2UsIG11bHRpOiB0cnVlfSxcbiAgeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IEh0dHBJbnRlcmNlcHRvclNpZ25hdHVyZVNlcnZpY2UsIG11bHRpOiB0cnVlfSxcbiAgeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IEh0dHBJbnRlcmNlcHRvckxhbmdTZXJ2aWNlLCBtdWx0aTogdHJ1ZX0sXG4gIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBIdHRwSW50ZXJjZXB0b3JFcnJvclNlcnZpY2UsIG11bHRpOiB0cnVlfSxcbiAgeyBwcm92aWRlOiBVU0VSX0lORk8sIHVzZUNsYXNzOiBBdXRoVXNlclNlcnZpY2UgfSxcbiAgeyBwcm92aWRlOiBBVVRIX0lOREVYRURfREIsIHVzZUNsYXNzOiBBdXRoSW5kZXhlZERCU2VydmljZSB9LFxuICB7IHByb3ZpZGU6IFBST0ZJTEVfSU5ERVhFRF9EQiwgdXNlQ2xhc3M6IFByb2ZpbGVJbmRleGVkREJTZXJ2aWNlIH0sXG4gIHsgcHJvdmlkZTogU0VUVElOR1NfSU5ERVhFRF9EQiwgdXNlQ2xhc3M6IFNldHRpbmdzSW5kZXhlZERCU2VydmljZSB9LFxuICBBdXRoR3VhcmRTZXJ2aWNlLFxuICBVbmF1dGhvcml6ZUd1YXJkU2VydmljZSxcbiAgQXV0aFRva2VuU2VydmljZSxcbiAgQXV0aEd1YXJkQ2hpbGRTZXJ2aWNlLFxuICBBdXRoU2lnbmF0dXJlU2VydmljZSxcbiAgQXV0aExhbmd1YWdlU2VydmljZSxcbl07XG5cbmNvbnN0IEFVVEhfQ09NUE9ORU5UUyA9IFtcbiAgTG9naW5QYWdlQ29tcG9uZW50LFxuICBMb2dvdXRDb21wb25lbnQsXG4gIFJlZ2lzdGVyUGFnZUNvbXBvbmVudCxcbiAgUmVxdWVzdEZvcmdvdFBhZ2VDb21wb25lbnQsXG4gIEZvcmdvdFBhZ2VDb21wb25lbnQsXG4gIFRlcm1zQ29uZGl0aW9uc0NvbXBvbmVudCxcbiAgT0F1dGgyQ2FsbGJhY2tDb21wb25lbnQsXG5dO1xuXG5jb25zdCBBVVRIX0VOVFJZX0NPTVBPTkVOVFMgPSBbXG4gIFRlcm1zQ29uZGl0aW9uc0NvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLkFVVEhfQ09NUE9ORU5UUyxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIFJlY2FwdGNoYU1vZHVsZSxcbiAgICBSZWNhcHRjaGFGb3Jtc01vZHVsZSxcbiAgICBOYkNoZWNrYm94TW9kdWxlLFxuICAgIE5iQWxlcnRNb2R1bGUsXG4gICAgTmJJbnB1dE1vZHVsZSxcbiAgICBOYkJ1dHRvbk1vZHVsZSxcbiAgICBOYkljb25Nb2R1bGUsXG4gICAgTmJDYXJkTW9kdWxlLFxuICAgIE5iU3Bpbm5lck1vZHVsZSxcbiAgICBOYkRpYWxvZ01vZHVsZS5mb3JDaGlsZCgpLFxuICAgIERvVGhlbWVNb2R1bGUsXG4gICAgRG9Ub2FzdHJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIERvTGF5b3V0QXV0aE1vZHVsZSxcbiAgICBEb0F1dGhSb3V0aW5nTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uQVVUSF9DT01QT05FTlRTLFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAuLi5BVVRIX0VOVFJZX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERvQXV0aE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8RG9BdXRoTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEb0F1dGhNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgLi4uQVVUSF9QUk9WSURFUlMsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==