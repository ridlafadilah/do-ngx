import { NgModule } from '@angular/core';
import { NbButtonModule, NbIconModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { DoThemeModule } from '@dongkap/do-theme';
import { DoLayoutAuthModule } from './layout/do-layout-auth.module';
import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { PageNotFoundComponent } from './miscellaneous/404/404.component';
var MiscellaneousModule = /** @class */ (function () {
    function MiscellaneousModule() {
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
    return MiscellaneousModule;
}());
export { MiscellaneousModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzY2VsbGFuZW91cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1hdXRoLyIsInNvdXJjZXMiOlsibGliL21pc2NlbGxhbmVvdXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRTFFO0lBQUE7SUFhbUMsQ0FBQzs7Z0JBYm5DLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsY0FBYzt3QkFDZCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixrQkFBa0I7d0JBQ2xCLDBCQUEwQjtxQkFDM0I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHFCQUFxQjtxQkFDdEI7aUJBQ0Y7O0lBQ2tDLDBCQUFDO0NBQUEsQUFicEMsSUFhb0M7U0FBdkIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5iQnV0dG9uTW9kdWxlLCBOYkljb25Nb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEb1RoZW1lTW9kdWxlIH0gZnJvbSAnQGRvbmdrYXAvZG8tdGhlbWUnO1xuaW1wb3J0IHsgRG9MYXlvdXRBdXRoTW9kdWxlIH0gZnJvbSAnLi9sYXlvdXQvZG8tbGF5b3V0LWF1dGgubW9kdWxlJztcbmltcG9ydCB7IE1pc2NlbGxhbmVvdXNSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9taXNjZWxsYW5lb3VzLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IFBhZ2VOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vbWlzY2VsbGFuZW91cy80MDQvNDA0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYkJ1dHRvbk1vZHVsZSxcbiAgICBOYkljb25Nb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIERvVGhlbWVNb2R1bGUsXG4gICAgRG9MYXlvdXRBdXRoTW9kdWxlLFxuICAgIE1pc2NlbGxhbmVvdXNSb3V0aW5nTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBQYWdlTm90Rm91bmRDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE1pc2NlbGxhbmVvdXNNb2R1bGUgeyB9XG4iXX0=