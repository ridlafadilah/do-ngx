import { __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NbCardModule } from '@nebular/theme';
import { DoMapsLeafletComponent } from './leaflet/do-maps-leaflet.component';
import { DoMapsAgmComponent } from './agm/do-maps-agm.component';
export var MAPS_COMPONENTS = [
    DoMapsLeafletComponent,
    DoMapsAgmComponent,
];
var DoMapsModule = /** @class */ (function () {
    function DoMapsModule() {
    }
    DoMapsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        AgmCoreModule.forRoot({
                            apiKey: 'AIzaSyB3ctAGo_z3FNOVWquijMGBgesM1XlRa-Y',
                            libraries: ['places'],
                        }),
                        LeafletModule.forRoot(),
                        NbCardModule,
                    ],
                    declarations: __spread(MAPS_COMPONENTS),
                    exports: __spread(MAPS_COMPONENTS),
                },] }
    ];
    return DoMapsModule;
}());
export { DoMapsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWFwcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb21tb24vIiwic291cmNlcyI6WyJsaWIvbWFwcy9kby1tYXBzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVqRSxNQUFNLENBQUMsSUFBTSxlQUFlLEdBQUc7SUFDN0Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtDQUNuQixDQUFDO0FBRUY7SUFBQTtJQWtCNEIsQ0FBQzs7Z0JBbEI1QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxhQUFhLENBQUMsT0FBTyxDQUFDOzRCQUNwQixNQUFNLEVBQUUseUNBQXlDOzRCQUNqRCxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7eUJBQ3RCLENBQUM7d0JBQ0YsYUFBYSxDQUFDLE9BQU8sRUFBRTt3QkFDdkIsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLFdBQ1AsZUFBZSxDQUNuQjtvQkFDRCxPQUFPLFdBQ0YsZUFBZSxDQUNuQjtpQkFDRjs7SUFDMkIsbUJBQUM7Q0FBQSxBQWxCN0IsSUFrQjZCO1NBQWhCLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWdtQ29yZU1vZHVsZSB9IGZyb20gJ0BhZ20vY29yZSc7XG5pbXBvcnQgeyBMZWFmbGV0TW9kdWxlIH0gZnJvbSAnQGFzeW1tZXRyaWsvbmd4LWxlYWZsZXQnO1xuaW1wb3J0IHsgTmJDYXJkTW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgRG9NYXBzTGVhZmxldENvbXBvbmVudCB9IGZyb20gJy4vbGVhZmxldC9kby1tYXBzLWxlYWZsZXQuY29tcG9uZW50JztcbmltcG9ydCB7IERvTWFwc0FnbUNvbXBvbmVudCB9IGZyb20gJy4vYWdtL2RvLW1hcHMtYWdtLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBNQVBTX0NPTVBPTkVOVFMgPSBbXG4gIERvTWFwc0xlYWZsZXRDb21wb25lbnQsXG4gIERvTWFwc0FnbUNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgQWdtQ29yZU1vZHVsZS5mb3JSb290KHtcbiAgICAgIGFwaUtleTogJ0FJemFTeUIzY3RBR29fejNGTk9WV3F1aWpNR0JnZXNNMVhsUmEtWScsXG4gICAgICBsaWJyYXJpZXM6IFsncGxhY2VzJ10sXG4gICAgfSksXG4gICAgTGVhZmxldE1vZHVsZS5mb3JSb290KCksXG4gICAgTmJDYXJkTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5NQVBTX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5NQVBTX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERvTWFwc01vZHVsZSB7IH1cbiJdfQ==