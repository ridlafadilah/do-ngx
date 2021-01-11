import { __read, __spread } from "tslib";
import { ErrorHandler, NgModule, Optional, SkipSelf } from '@angular/core';
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
import { ErrorHandlerService } from './services/error-handler.service';
import { EncryptionService } from './services/security/encryption.service';
import { CustomPreloadingStrategy } from './services/preloading-strategy.service';
export var CORE_PROVIDERS = [
    AnalyticsService,
    LayoutService,
    SeoService,
    StateService,
    CustomPreloadingStrategy,
    EncryptionService,
    { provide: HTTP_SERVICE, useClass: HttpCommonService },
    { provide: ErrorHandler, useClass: ErrorHandlerService },
];
export function createTranslateLoader(http) {
    return new TranslationService(http, './assets/i18n/', '.json');
}
var DoCoreModule = /** @class */ (function () {
    function DoCoreModule(parentModule) {
        throwIfAlreadyLoaded(parentModule, 'DoCoreModule');
    }
    DoCoreModule.forRoot = function () {
        return {
            ngModule: DoCoreModule,
            providers: __spread(CORE_PROVIDERS, TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [HttpClient],
                },
            }).providers),
        };
    };
    DoCoreModule.ctorParameters = function () { return [
        { type: DoCoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    DoCoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    exports: [],
                    declarations: [],
                },] }
    ];
    DoCoreModule.ctorParameters = function () { return [
        { type: DoCoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return DoCoreModule;
}());
export { DoCoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb3JlLyIsInNvdXJjZXMiOlsibGliL2RvLWNvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRWxGLE1BQU0sQ0FBQyxJQUFNLGNBQWMsR0FBRztJQUM1QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFVBQVU7SUFDVixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFDO0lBQ3JELEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUM7Q0FDeEQsQ0FBQztBQUVGLE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxJQUFnQjtJQUNwRCxPQUFPLElBQUksa0JBQWtCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2pFLENBQUM7QUFFRDtJQVFFLHNCQUFvQyxZQUEwQjtRQUM1RCxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVNLG9CQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxXQUNKLGNBQWMsRUFDZCxlQUFlLENBQUMsT0FBTyxDQUFDO2dCQUNyQixNQUFNLEVBQUU7b0JBQ0osT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFVBQVUsRUFBRSxDQUFDLHFCQUFxQixDQUFDO29CQUNuQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUM7aUJBQ3JCO2FBQ0YsQ0FBQyxDQUFDLFNBQVMsQ0FDakI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBbEJpRCxZQUFZLHVCQUFqRCxRQUFRLFlBQUksUUFBUTs7O2dCQVJsQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsWUFBWSxFQUFFLEVBQUU7aUJBQ2pCOzs7Z0JBRW1ELFlBQVksdUJBQWpELFFBQVEsWUFBSSxRQUFROztJQW1CbkMsbUJBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQXBCWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXJyb3JIYW5kbGVyLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFRyYW5zbGF0ZUxvYWRlciwgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmltcG9ydCB7IHRocm93SWZBbHJlYWR5TG9hZGVkIH0gZnJvbSAnLi9tb2R1bGUtaW1wb3J0LWd1YXJkJztcbmltcG9ydCB7IExheW91dFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3V0aWxzL2xheW91dC5zZXJ2aWNlJztcbmltcG9ydCB7IEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3V0aWxzL2FuYWx5dGljcy5zZXJ2aWNlJztcbmltcG9ydCB7IFN0YXRlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXRpbHMvc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBTZW9TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy91dGlscy9zZW8uc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3V0aWxzL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgSFRUUF9TRVJWSUNFIH0gZnJvbSAnLi9wcm92aWRlcnMvaHR0cC5wcm92aWRlcic7XG5pbXBvcnQgeyBIdHRwQ29tbW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXRpbHMvaHR0cC1jb21tb24uc2VydmljZSc7XG5pbXBvcnQgeyBFcnJvckhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9lcnJvci1oYW5kbGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRW5jcnlwdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3NlY3VyaXR5L2VuY3J5cHRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDdXN0b21QcmVsb2FkaW5nU3RyYXRlZ3kgfSBmcm9tICcuL3NlcnZpY2VzL3ByZWxvYWRpbmctc3RyYXRlZ3kuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBDT1JFX1BST1ZJREVSUyA9IFtcbiAgQW5hbHl0aWNzU2VydmljZSxcbiAgTGF5b3V0U2VydmljZSxcbiAgU2VvU2VydmljZSxcbiAgU3RhdGVTZXJ2aWNlLFxuICBDdXN0b21QcmVsb2FkaW5nU3RyYXRlZ3ksXG4gIEVuY3J5cHRpb25TZXJ2aWNlLFxuICB7IHByb3ZpZGU6IEhUVFBfU0VSVklDRSwgdXNlQ2xhc3M6IEh0dHBDb21tb25TZXJ2aWNlfSxcbiAgeyBwcm92aWRlOiBFcnJvckhhbmRsZXIsIHVzZUNsYXNzOiBFcnJvckhhbmRsZXJTZXJ2aWNlfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUcmFuc2xhdGVMb2FkZXIoaHR0cDogSHR0cENsaWVudCkge1xuICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU2VydmljZShodHRwLCAnLi9hc3NldHMvaTE4bi8nLCAnLmpzb24nKTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW10sXG59KVxuZXhwb3J0IGNsYXNzIERvQ29yZU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogRG9Db3JlTW9kdWxlKSB7XG4gICAgdGhyb3dJZkFscmVhZHlMb2FkZWQocGFyZW50TW9kdWxlLCAnRG9Db3JlTW9kdWxlJyk7XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPERvQ29yZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRG9Db3JlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLkNPUkVfUFJPVklERVJTLFxuICAgICAgICAuLi5UcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgICAgICAgIGxvYWRlcjoge1xuICAgICAgICAgICAgICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxuICAgICAgICAgICAgICAgICAgdXNlRmFjdG9yeTogKGNyZWF0ZVRyYW5zbGF0ZUxvYWRlciksXG4gICAgICAgICAgICAgICAgICBkZXBzOiBbSHR0cENsaWVudF0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KS5wcm92aWRlcnMsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==