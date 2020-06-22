import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { LayoutService } from './services/utils/layout.service';
import { AnalyticsService } from './services/utils/analytics.service';
import { StateService } from './services/utils/state.service';
import { SeoService } from './services/utils/seo.service';

export const CORE_PROVIDERS = [
  AnalyticsService,
  LayoutService,
  SeoService,
  StateService,
];

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
      ],
    };
  }
}
