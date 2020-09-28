import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { LayoutService } from './services/utils/layout.service';
import { AnalyticsService } from './services/utils/analytics.service';
import { StateService } from './services/utils/state.service';
import { SeoService } from './services/utils/seo.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslationService } from './services/security/translation.service';
import { HTTP_SERVICE } from './providers/http.provider';
import { HttpCommonService } from './services/utils/http-common.service';

export const CORE_PROVIDERS = [
  AnalyticsService,
  LayoutService,
  SeoService,
  StateService,
  { provide: HTTP_SERVICE, useClass: HttpCommonService},
];

export function createTranslateLoader(http: HttpClient) {
  return new TranslationService(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [],
  declarations: [],
})
export class NgxCoreModule {
  constructor(@Optional() @SkipSelf() parentModule: NgxCoreModule) {
    throwIfAlreadyLoaded(parentModule, 'NgxCoreModule');
  }

  static forRoot(): ModuleWithProviders<NgxCoreModule> {
    return {
      ngModule: NgxCoreModule,
      providers: [
        ...CORE_PROVIDERS,
        ...TranslateModule.forRoot({
              loader: {
                  provide: TranslateLoader,
                  useFactory: (createTranslateLoader),
                  deps: [HttpClient],
              },
            }).providers,
      ],
    };
  }
}
