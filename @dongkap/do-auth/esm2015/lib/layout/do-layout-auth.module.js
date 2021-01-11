import { NgModule } from '@angular/core';
import { NbCardModule, NbLayoutModule, NbIconModule, } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DoThemeModule } from '@dongkap/do-theme';
import { AuthComponent } from './auth.component';
import { AuthBlockComponent } from './auth-block/auth-block.component';
export class DoLayoutAuthModule {
}
DoLayoutAuthModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AuthComponent,
                    AuthBlockComponent,
                ],
                imports: [
                    NbLayoutModule,
                    NbCardModule,
                    NbIconModule,
                    CommonModule,
                    HttpClientModule,
                    RouterModule,
                    DoThemeModule,
                ],
                exports: [
                    AuthComponent,
                    AuthBlockComponent,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbGF5b3V0LWF1dGgubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQvZG8tbGF5b3V0LWF1dGgubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLFlBQVksRUFDWixjQUFjLEVBQ2QsWUFBWSxHQUNiLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBcUJ2RSxNQUFNLE9BQU8sa0JBQWtCOzs7WUFuQjlCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osYUFBYTtvQkFDYixrQkFBa0I7aUJBQ25CO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxjQUFjO29CQUNkLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsWUFBWTtvQkFDWixhQUFhO2lCQUNkO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxhQUFhO29CQUNiLGtCQUFrQjtpQkFDbkI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBOYkNhcmRNb2R1bGUsXG4gIE5iTGF5b3V0TW9kdWxlLFxuICBOYkljb25Nb2R1bGUsXG59IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERvVGhlbWVNb2R1bGUgfSBmcm9tICdAZG9uZ2thcC9kby10aGVtZSc7XG5pbXBvcnQgeyBBdXRoQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoQmxvY2tDb21wb25lbnQgfSBmcm9tICcuL2F1dGgtYmxvY2svYXV0aC1ibG9jay5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBdXRoQ29tcG9uZW50LFxuICAgIEF1dGhCbG9ja0NvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIE5iTGF5b3V0TW9kdWxlLFxuICAgIE5iQ2FyZE1vZHVsZSxcbiAgICBOYkljb25Nb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIERvVGhlbWVNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBdXRoQ29tcG9uZW50LFxuICAgIEF1dGhCbG9ja0NvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9MYXlvdXRBdXRoTW9kdWxlIHt9XG4iXX0=