import { NgModule, ModuleWithProviders } from '@angular/core';
import {
  NbCheckboxModule,
  NbAlertModule,
  NbInputModule,
  NbButtonModule,
  NbIconModule,
} from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { AUTH_INDEXED_DB, PROFILE_INDEXED_DB, SETTINGS_INDEXED_DB, USER_INFO } from '@dongkap/do-core';
import { DoThemeModule } from '@dongkap/do-theme';
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
import { ForgotPageComponent } from './auth/forgot/forgot-page.component';

const AUTH_PROVIDERS = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorTokenService, multi: true},
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorSignatureService, multi: true},
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorLangService, multi: true},
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorErrorService, multi: true},
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
  ForgotPageComponent,
];

@NgModule({
  declarations: [
    ...AUTH_COMPONENTS,
  ],
  imports: [
    NbCheckboxModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    DoThemeModule,
    DoLayoutAuthModule,
    DoAuthRoutingModule,
  ],
  exports: [
    ...AUTH_COMPONENTS,
  ],
})
export class DoAuthModule {
  static forRoot(): ModuleWithProviders<DoAuthModule> {
    return {
      ngModule: DoAuthModule,
      providers: [
        ...AUTH_PROVIDERS,
      ],
    };
  }
}
