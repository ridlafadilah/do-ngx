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
export const CORE_PROVIDERS = [
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
export class DoCoreModule {
    constructor(parentModule) {
        throwIfAlreadyLoaded(parentModule, 'DoCoreModule');
    }
    static forRoot() {
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
DoCoreModule.ctorParameters = () => [
    { type: DoCoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
DoCoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                exports: [],
                declarations: [],
            },] }
];
DoCoreModule.ctorParameters = () => [
    { type: DoCoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb3JlLyIsInNvdXJjZXMiOlsibGliL2RvLWNvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFbEYsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHO0lBQzVCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsVUFBVTtJQUNWLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUM7SUFDckQsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBQztDQUN4RCxDQUFDO0FBRUYsTUFBTSxVQUFVLHFCQUFxQixDQUFDLElBQWdCO0lBQ3BELE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDakUsQ0FBQztBQVNELE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLFlBQW9DLFlBQTBCO1FBQzVELG9CQUFvQixDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNULEdBQUcsY0FBYztnQkFDakIsR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDO29CQUNyQixNQUFNLEVBQUU7d0JBQ0osT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFVBQVUsRUFBRSxDQUFDLHFCQUFxQixDQUFDO3dCQUNuQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUM7cUJBQ3JCO2lCQUNGLENBQUMsQ0FBQyxTQUFTO2FBQ2pCO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWxCaUQsWUFBWSx1QkFBakQsUUFBUSxZQUFJLFFBQVE7OztZQVJsQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsWUFBWSxFQUFFLEVBQUU7YUFDakI7OztZQUVtRCxZQUFZLHVCQUFqRCxRQUFRLFlBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9ySGFuZGxlciwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBUcmFuc2xhdGVMb2FkZXIsIFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5pbXBvcnQgeyB0aHJvd0lmQWxyZWFkeUxvYWRlZCB9IGZyb20gJy4vbW9kdWxlLWltcG9ydC1ndWFyZCc7XG5pbXBvcnQgeyBMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy91dGlscy9sYXlvdXQuc2VydmljZSc7XG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy91dGlscy9hbmFseXRpY3Muc2VydmljZSc7XG5pbXBvcnQgeyBTdGF0ZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3V0aWxzL3N0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VvU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXRpbHMvc2VvLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy91dGlscy90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEhUVFBfU0VSVklDRSB9IGZyb20gJy4vcHJvdmlkZXJzL2h0dHAucHJvdmlkZXInO1xuaW1wb3J0IHsgSHR0cENvbW1vblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3V0aWxzL2h0dHAtY29tbW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXJyb3JIYW5kbGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZXJyb3ItaGFuZGxlci5zZXJ2aWNlJztcbmltcG9ydCB7IEVuY3J5cHRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZWN1cml0eS9lbmNyeXB0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VzdG9tUHJlbG9hZGluZ1N0cmF0ZWd5IH0gZnJvbSAnLi9zZXJ2aWNlcy9wcmVsb2FkaW5nLXN0cmF0ZWd5LnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgQ09SRV9QUk9WSURFUlMgPSBbXG4gIEFuYWx5dGljc1NlcnZpY2UsXG4gIExheW91dFNlcnZpY2UsXG4gIFNlb1NlcnZpY2UsXG4gIFN0YXRlU2VydmljZSxcbiAgQ3VzdG9tUHJlbG9hZGluZ1N0cmF0ZWd5LFxuICBFbmNyeXB0aW9uU2VydmljZSxcbiAgeyBwcm92aWRlOiBIVFRQX1NFUlZJQ0UsIHVzZUNsYXNzOiBIdHRwQ29tbW9uU2VydmljZX0sXG4gIHsgcHJvdmlkZTogRXJyb3JIYW5kbGVyLCB1c2VDbGFzczogRXJyb3JIYW5kbGVyU2VydmljZX0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJhbnNsYXRlTG9hZGVyKGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblNlcnZpY2UoaHR0cCwgJy4vYXNzZXRzL2kxOG4vJywgJy5qc29uJyk7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBEb0NvcmVNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IERvQ29yZU1vZHVsZSkge1xuICAgIHRocm93SWZBbHJlYWR5TG9hZGVkKHBhcmVudE1vZHVsZSwgJ0RvQ29yZU1vZHVsZScpO1xuICB9XG5cbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxEb0NvcmVNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERvQ29yZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAuLi5DT1JFX1BST1ZJREVSUyxcbiAgICAgICAgLi4uVHJhbnNsYXRlTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgICAgICAgICBsb2FkZXI6IHtcbiAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlcixcbiAgICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IChjcmVhdGVUcmFuc2xhdGVMb2FkZXIpLFxuICAgICAgICAgICAgICAgICAgZGVwczogW0h0dHBDbGllbnRdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSkucHJvdmlkZXJzLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=