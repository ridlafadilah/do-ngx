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
var routes = [{
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
var DoAuthRoutingModule = /** @class */ (function () {
    function DoAuthRoutingModule() {
    }
    DoAuthRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] }
    ];
    return DoAuthRoutingModule;
}());
export { DoAuthRoutingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tYXV0aC1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWF1dGgvIiwic291cmNlcyI6WyJsaWIvZG8tYXV0aC1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRWxGLElBQU0sTUFBTSxHQUFXLENBQUM7UUFDdEIsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsYUFBYTtRQUN4QixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixTQUFTLEVBQUUsa0JBQWtCO2dCQUM3QixXQUFXLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUN2QztZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLFNBQVMsRUFBRSxrQkFBa0I7Z0JBQzdCLFdBQVcsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3ZDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSxxQkFBcUI7Z0JBQ2hDLFdBQVcsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3ZDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsU0FBUyxFQUFFLDBCQUEwQjtnQkFDckMsV0FBVyxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDdkM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsMkJBQTJCO2dCQUNqQyxTQUFTLEVBQUUsbUJBQW1CO2dCQUM5QixXQUFXLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUN2QztZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsdUJBQXVCO2dCQUNsQyxXQUFXLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUN2QztZQUNEO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLFNBQVMsRUFBRSxlQUFlO2dCQUMxQixXQUFXLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUNoQztTQUNGO0tBQ0YsQ0FBQyxDQUFDO0FBRUg7SUFBQTtJQUtBLENBQUM7O2dCQUxBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCOztJQUVELDBCQUFDO0NBQUEsQUFMRCxJQUtDO1NBRFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXV0aENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0L2F1dGguY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYXV0aC9sb2dpbi9sb2dpbi1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVbmF1dGhvcml6ZUd1YXJkU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdW5hdXRoLWd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nb3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hdXRoL2xvZ291dC9sb2dvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEF1dGhHdWFyZFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGgtZ3VhcmQuc2VydmljZSc7XG5pbXBvcnQgeyBSZWdpc3RlclBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXItcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVxdWVzdEZvcmdvdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2F1dGgvZm9yZ290L3JlcXVlc3QtZm9yZ290LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcmdvdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2F1dGgvZm9yZ290L2ZvcmdvdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPQXV0aDJDYWxsYmFja0NvbXBvbmVudCB9IGZyb20gJy4vYXV0aC9vYXV0aDIvb2F1dGgyLWNhbGxiYWNrLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW3tcbiAgcGF0aDogJycsXG4gIGNvbXBvbmVudDogQXV0aENvbXBvbmVudCxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBwYXRoOiAnJyxcbiAgICAgIGNvbXBvbmVudDogTG9naW5QYWdlQ29tcG9uZW50LFxuICAgICAgY2FuQWN0aXZhdGU6IFtVbmF1dGhvcml6ZUd1YXJkU2VydmljZV0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnbG9naW4nLFxuICAgICAgY29tcG9uZW50OiBMb2dpblBhZ2VDb21wb25lbnQsXG4gICAgICBjYW5BY3RpdmF0ZTogW1VuYXV0aG9yaXplR3VhcmRTZXJ2aWNlXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdyZWdpc3RlcicsXG4gICAgICBjb21wb25lbnQ6IFJlZ2lzdGVyUGFnZUNvbXBvbmVudCxcbiAgICAgIGNhbkFjdGl2YXRlOiBbVW5hdXRob3JpemVHdWFyZFNlcnZpY2VdLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ2ZvcmdvdC1wYXNzd29yZCcsXG4gICAgICBjb21wb25lbnQ6IFJlcXVlc3RGb3Jnb3RQYWdlQ29tcG9uZW50LFxuICAgICAgY2FuQWN0aXZhdGU6IFtVbmF1dGhvcml6ZUd1YXJkU2VydmljZV0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnZm9yZ290LXBhc3N3b3JkLzppZC86Y29kZScsXG4gICAgICBjb21wb25lbnQ6IEZvcmdvdFBhZ2VDb21wb25lbnQsXG4gICAgICBjYW5BY3RpdmF0ZTogW1VuYXV0aG9yaXplR3VhcmRTZXJ2aWNlXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdjYWxsYmFjaycsXG4gICAgICBjb21wb25lbnQ6IE9BdXRoMkNhbGxiYWNrQ29tcG9uZW50LFxuICAgICAgY2FuQWN0aXZhdGU6IFtVbmF1dGhvcml6ZUd1YXJkU2VydmljZV0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnbG9nb3V0JyxcbiAgICAgIGNvbXBvbmVudDogTG9nb3V0Q29tcG9uZW50LFxuICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRTZXJ2aWNlXSxcbiAgICB9LFxuICBdLFxufV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBEb0F1dGhSb3V0aW5nTW9kdWxlIHtcbn1cbiJdfQ==