import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NbCardModule } from '@nebular/theme';
import { DoMapsLeafletComponent } from './leaflet/do-maps-leaflet.component';
import { DoMapsAgmComponent } from './agm/do-maps-agm.component';
export const MAPS_COMPONENTS = [
    DoMapsLeafletComponent,
    DoMapsAgmComponent,
];
export class DoMapsModule {
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
                declarations: [
                    ...MAPS_COMPONENTS,
                ],
                exports: [
                    ...MAPS_COMPONENTS,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWFwcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb21tb24vIiwic291cmNlcyI6WyJsaWIvbWFwcy9kby1tYXBzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRWpFLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRztJQUM3QixzQkFBc0I7SUFDdEIsa0JBQWtCO0NBQ25CLENBQUM7QUFvQkYsTUFBTSxPQUFPLFlBQVk7OztZQWxCeEIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsYUFBYSxDQUFDLE9BQU8sQ0FBQzt3QkFDcEIsTUFBTSxFQUFFLHlDQUF5Qzt3QkFDakQsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDO3FCQUN0QixDQUFDO29CQUNGLGFBQWEsQ0FBQyxPQUFPLEVBQUU7b0JBQ3ZCLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLEdBQUcsZUFBZTtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLEdBQUcsZUFBZTtpQkFDbkI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBZ21Db3JlTW9kdWxlIH0gZnJvbSAnQGFnbS9jb3JlJztcbmltcG9ydCB7IExlYWZsZXRNb2R1bGUgfSBmcm9tICdAYXN5bW1ldHJpay9uZ3gtbGVhZmxldCc7XG5pbXBvcnQgeyBOYkNhcmRNb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBEb01hcHNMZWFmbGV0Q29tcG9uZW50IH0gZnJvbSAnLi9sZWFmbGV0L2RvLW1hcHMtbGVhZmxldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9NYXBzQWdtQ29tcG9uZW50IH0gZnJvbSAnLi9hZ20vZG8tbWFwcy1hZ20uY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IE1BUFNfQ09NUE9ORU5UUyA9IFtcbiAgRG9NYXBzTGVhZmxldENvbXBvbmVudCxcbiAgRG9NYXBzQWdtQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBBZ21Db3JlTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgYXBpS2V5OiAnQUl6YVN5QjNjdEFHb196M0ZOT1ZXcXVpak1HQmdlc00xWGxSYS1ZJyxcbiAgICAgIGxpYnJhcmllczogWydwbGFjZXMnXSxcbiAgICB9KSxcbiAgICBMZWFmbGV0TW9kdWxlLmZvclJvb3QoKSxcbiAgICBOYkNhcmRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLk1BUFNfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLk1BUFNfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9NYXBzTW9kdWxlIHsgfVxuIl19