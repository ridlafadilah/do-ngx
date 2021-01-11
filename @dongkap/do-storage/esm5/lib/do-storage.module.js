import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageMaskService } from './services/storage-mask.service';
import { STORAGE_SERVICE } from './providers/storage.provider';
var DoStorageModule = /** @class */ (function () {
    function DoStorageModule() {
    }
    DoStorageModule.forRoot = function () {
        return {
            ngModule: DoStorageModule,
            providers: [
                { provide: STORAGE_SERVICE, useClass: StorageMaskService },
            ],
        };
    };
    DoStorageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    exports: [],
                    declarations: [],
                },] }
    ];
    return DoStorageModule;
}());
export { DoStorageModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tc3RvcmFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1zdG9yYWdlLyIsInNvdXJjZXMiOlsibGliL2RvLXN0b3JhZ2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFL0Q7SUFBQTtJQWdCQSxDQUFDO0lBUlEsdUJBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRTthQUMzRDtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFmRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsWUFBWSxFQUFFLEVBQUU7aUJBQ2pCOztJQVVELHNCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FUWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdG9yYWdlTWFza1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3N0b3JhZ2UtbWFzay5zZXJ2aWNlJztcbmltcG9ydCB7IFNUT1JBR0VfU0VSVklDRSB9IGZyb20gJy4vcHJvdmlkZXJzL3N0b3JhZ2UucHJvdmlkZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9TdG9yYWdlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxEb1N0b3JhZ2VNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERvU3RvcmFnZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IFNUT1JBR0VfU0VSVklDRSwgdXNlQ2xhc3M6IFN0b3JhZ2VNYXNrU2VydmljZSB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=