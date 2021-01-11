import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NbButtonModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { DoBaseModule } from '../base/do-base.module';
import { DoButtonSubmitComponent } from './submit/do-button-submit.component';
export const BUTTON_COMPONENTS = [
    DoButtonSubmitComponent,
];
export class DoButtonModule {
}
DoButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    NbButtonModule,
                    TranslateModule,
                    DoBaseModule,
                ],
                declarations: [
                    ...BUTTON_COMPONENTS,
                ],
                exports: [
                    ...BUTTON_COMPONENTS,
                    NbButtonModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9idXR0b24vZG8tYnV0dG9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUU5RSxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRztJQUMvQix1QkFBdUI7Q0FDeEIsQ0FBQztBQWlCRixNQUFNLE9BQU8sY0FBYzs7O1lBZjFCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixjQUFjO29CQUNkLGVBQWU7b0JBQ2YsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osR0FBRyxpQkFBaUI7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxHQUFHLGlCQUFpQjtvQkFDcEIsY0FBYztpQkFDZjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgTmJCdXR0b25Nb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRG9CYXNlTW9kdWxlIH0gZnJvbSAnLi4vYmFzZS9kby1iYXNlLm1vZHVsZSc7XG5pbXBvcnQgeyBEb0J1dHRvblN1Ym1pdENvbXBvbmVudCB9IGZyb20gJy4vc3VibWl0L2RvLWJ1dHRvbi1zdWJtaXQuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IEJVVFRPTl9DT01QT05FTlRTID0gW1xuICBEb0J1dHRvblN1Ym1pdENvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTmJCdXR0b25Nb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIERvQmFzZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uQlVUVE9OX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5CVVRUT05fQ09NUE9ORU5UUyxcbiAgICBOYkJ1dHRvbk1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9CdXR0b25Nb2R1bGUgeyB9XG4iXX0=