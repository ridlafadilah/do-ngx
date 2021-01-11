import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './layout/auth.component';
import { LoginPageComponent } from './auth/login/login-page.component';
import { UnauthorizeGuardService } from './services/unauth-guard.service';
import { LogoutComponent } from './auth/logout/logout.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RegisterPageComponent } from './auth/register/register-page.component';
import { RequestForgotPageComponent } from './auth/forgot/request-forgot-page.component';
import { ForgotPageComponent } from './auth/forgot/forgot-page.component';
import { OAuth2CallbackComponent } from './auth/oauth2/oauth2-callback.component';
const routes = [{
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '',
                component: LoginPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'login',
                component: LoginPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'register',
                component: RegisterPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'forgot-password',
                component: RequestForgotPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'forgot-password/:id/:code',
                component: ForgotPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'callback',
                component: OAuth2CallbackComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'logout',
                component: LogoutComponent,
                canActivate: [AuthGuardService],
            },
        ],
    }];
export class DoAuthRoutingModule {
}
DoAuthRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tYXV0aC1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWF1dGgvIiwic291cmNlcyI6WyJsaWIvZG8tYXV0aC1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRWxGLE1BQU0sTUFBTSxHQUFXLENBQUM7UUFDdEIsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsYUFBYTtRQUN4QixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixTQUFTLEVBQUUsa0JBQWtCO2dCQUM3QixXQUFXLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUN2QztZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLFNBQVMsRUFBRSxrQkFBa0I7Z0JBQzdCLFdBQVcsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3ZDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSxxQkFBcUI7Z0JBQ2hDLFdBQVcsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3ZDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsU0FBUyxFQUFFLDBCQUEwQjtnQkFDckMsV0FBVyxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDdkM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsMkJBQTJCO2dCQUNqQyxTQUFTLEVBQUUsbUJBQW1CO2dCQUM5QixXQUFXLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUN2QztZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsdUJBQXVCO2dCQUNsQyxXQUFXLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUN2QztZQUNEO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLFNBQVMsRUFBRSxlQUFlO2dCQUMxQixXQUFXLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUNoQztTQUNGO0tBQ0YsQ0FBQyxDQUFDO0FBTUgsTUFBTSxPQUFPLG1CQUFtQjs7O1lBSi9CLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBdXRoQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQvYXV0aC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9naW5QYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRoL2xvZ2luL2xvZ2luLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFVuYXV0aG9yaXplR3VhcmRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy91bmF1dGgtZ3VhcmQuc2VydmljZSc7XG5pbXBvcnQgeyBMb2dvdXRDb21wb25lbnQgfSBmcm9tICcuL2F1dGgvbG9nb3V0L2xvZ291dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aEd1YXJkU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXV0aC1ndWFyZC5zZXJ2aWNlJztcbmltcG9ydCB7IFJlZ2lzdGVyUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXF1ZXN0Rm9yZ290UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYXV0aC9mb3Jnb3QvcmVxdWVzdC1mb3Jnb3QtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9yZ290UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYXV0aC9mb3Jnb3QvZm9yZ290LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE9BdXRoMkNhbGxiYWNrQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRoL29hdXRoMi9vYXV0aDItY2FsbGJhY2suY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbe1xuICBwYXRoOiAnJyxcbiAgY29tcG9uZW50OiBBdXRoQ29tcG9uZW50LFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHBhdGg6ICcnLFxuICAgICAgY29tcG9uZW50OiBMb2dpblBhZ2VDb21wb25lbnQsXG4gICAgICBjYW5BY3RpdmF0ZTogW1VuYXV0aG9yaXplR3VhcmRTZXJ2aWNlXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdsb2dpbicsXG4gICAgICBjb21wb25lbnQ6IExvZ2luUGFnZUNvbXBvbmVudCxcbiAgICAgIGNhbkFjdGl2YXRlOiBbVW5hdXRob3JpemVHdWFyZFNlcnZpY2VdLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ3JlZ2lzdGVyJyxcbiAgICAgIGNvbXBvbmVudDogUmVnaXN0ZXJQYWdlQ29tcG9uZW50LFxuICAgICAgY2FuQWN0aXZhdGU6IFtVbmF1dGhvcml6ZUd1YXJkU2VydmljZV0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnZm9yZ290LXBhc3N3b3JkJyxcbiAgICAgIGNvbXBvbmVudDogUmVxdWVzdEZvcmdvdFBhZ2VDb21wb25lbnQsXG4gICAgICBjYW5BY3RpdmF0ZTogW1VuYXV0aG9yaXplR3VhcmRTZXJ2aWNlXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdmb3Jnb3QtcGFzc3dvcmQvOmlkLzpjb2RlJyxcbiAgICAgIGNvbXBvbmVudDogRm9yZ290UGFnZUNvbXBvbmVudCxcbiAgICAgIGNhbkFjdGl2YXRlOiBbVW5hdXRob3JpemVHdWFyZFNlcnZpY2VdLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ2NhbGxiYWNrJyxcbiAgICAgIGNvbXBvbmVudDogT0F1dGgyQ2FsbGJhY2tDb21wb25lbnQsXG4gICAgICBjYW5BY3RpdmF0ZTogW1VuYXV0aG9yaXplR3VhcmRTZXJ2aWNlXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdsb2dvdXQnLFxuICAgICAgY29tcG9uZW50OiBMb2dvdXRDb21wb25lbnQsXG4gICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZFNlcnZpY2VdLFxuICAgIH0sXG4gIF0sXG59XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIERvQXV0aFJvdXRpbmdNb2R1bGUge1xufVxuIl19