import { ErrorHandler, ModuleWithProviders } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LayoutService } from './services/utils/layout.service';
import { AnalyticsService } from './services/utils/analytics.service';
import { StateService } from './services/utils/state.service';
import { SeoService } from './services/utils/seo.service';
import { TranslationService } from './services/utils/translation.service';
import { HttpCommonService } from './services/utils/http-common.service';
import { ErrorHandlerService } from './services/error-handler.service';
import { EncryptionService } from './services/security/encryption.service';
import { CustomPreloadingStrategy } from './services/preloading-strategy.service';
export declare const CORE_PROVIDERS: (typeof LayoutService | typeof AnalyticsService | typeof StateService | typeof SeoService | typeof EncryptionService | typeof CustomPreloadingStrategy | {
    provide: import("@angular/core").InjectionToken<import("..").HttpFactoryService>;
    useClass: typeof HttpCommonService;
} | {
    provide: typeof ErrorHandler;
    useClass: typeof ErrorHandlerService;
})[];
export declare function createTranslateLoader(http: HttpClient): TranslationService;
export declare class DoCoreModule {
    constructor(parentModule: DoCoreModule);
    static forRoot(): ModuleWithProviders<DoCoreModule>;
}
