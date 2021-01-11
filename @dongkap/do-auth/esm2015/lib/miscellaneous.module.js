import { NgModule } from '@angular/core';
import { NbButtonModule, NbIconModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { DoThemeModule } from '@dongkap/do-theme';
import { DoLayoutAuthModule } from './layout/do-layout-auth.module';
import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { PageNotFoundComponent } from './miscellaneous/404/404.component';
export class MiscellaneousModule {
}
MiscellaneousModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbButtonModule,
                    NbIconModule,
                    CommonModule,
                    DoThemeModule,
                    DoLayoutAuthModule,
                    MiscellaneousRoutingModule,
                ],
                declarations: [
                    PageNotFoundComponent,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzY2VsbGFuZW91cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1hdXRoLyIsInNvdXJjZXMiOlsibGliL21pc2NlbGxhbmVvdXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBZTFFLE1BQU0sT0FBTyxtQkFBbUI7OztZQWIvQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGNBQWM7b0JBQ2QsWUFBWTtvQkFDWixZQUFZO29CQUNaLGFBQWE7b0JBQ2Isa0JBQWtCO29CQUNsQiwwQkFBMEI7aUJBQzNCO2dCQUNELFlBQVksRUFBRTtvQkFDWixxQkFBcUI7aUJBQ3RCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmJCdXR0b25Nb2R1bGUsIE5iSWNvbk1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERvVGhlbWVNb2R1bGUgfSBmcm9tICdAZG9uZ2thcC9kby10aGVtZSc7XG5pbXBvcnQgeyBEb0xheW91dEF1dGhNb2R1bGUgfSBmcm9tICcuL2xheW91dC9kby1sYXlvdXQtYXV0aC5tb2R1bGUnO1xuaW1wb3J0IHsgTWlzY2VsbGFuZW91c1JvdXRpbmdNb2R1bGUgfSBmcm9tICcuL21pc2NlbGxhbmVvdXMtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgUGFnZU5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9taXNjZWxsYW5lb3VzLzQwNC80MDQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5iQnV0dG9uTW9kdWxlLFxuICAgIE5iSWNvbk1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRG9UaGVtZU1vZHVsZSxcbiAgICBEb0xheW91dEF1dGhNb2R1bGUsXG4gICAgTWlzY2VsbGFuZW91c1JvdXRpbmdNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFBhZ2VOb3RGb3VuZENvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTWlzY2VsbGFuZW91c01vZHVsZSB7IH1cbiJdfQ==