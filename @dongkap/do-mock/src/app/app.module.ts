/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';

import { MockModule } from './@mock/mock.module';
import { API, ENVIRONMENT, NgxCoreModule, OAUTH_INFO } from '@dongkap/ngx-core';
import { NgxThemeModule } from '@dongkap/ngx-theme';
import { environment } from '../environments/environment';
import { apiPath } from '../configs/api.config';
import { oauthResource } from '../configs/security.config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    NgxCoreModule.forRoot(),
    NgxThemeModule.forRoot(),
    MockModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: LOCALE_ID, useValue: environment.locale,
    },
    {
      provide: LocationStrategy, useClass: PathLocationStrategy,
    },
    {
      provide: APP_BASE_HREF, useValue: environment.basePath,
    },
    {
      provide: ENVIRONMENT, useValue: environment,
    },
    {
      provide: API, useValue: apiPath,
    },
  ],
})
export class AppModule {
}
