import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { LayoutService } from './services/utils/layout.service';
import { AnalyticsService } from './services/utils/analytics.service';
import { StateService } from './services/utils/state.service';
import { SeoService } from './services/utils/seo.service';
import { TranslationService } from './services/utils/translation.service';
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
export class DoCoreModule {
  constructor(@Optional() @SkipSelf() parentModule: DoCoreModule) {
    throwIfAlreadyLoaded(parentModule, 'DoCoreModule');
  }

  static forRoot(): ModuleWithProviders<DoCoreModule> {
    return {
      ngModule: DoCoreModule,
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
