import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardChildService } from '@dongkap/do-auth';
import { ExtraComponent } from './do-extra.component';
import { ProfilePageComponent } from './profile/profile-page.component';
import { SettingsPageComponent } from './settings/settings-page.component';
import { SecurityPageComponent } from './security/security-page.component';
import { SystemPageComponent } from './system/system-page.component';
import { TermsConditionsPageComponent } from './terms/terms-conditions-page.component';
import { PrivacyPolicyPageComponent } from './privacy-policy/privacy-policy-page.component';
var ɵ0 = {
    code: '#PROFILE-PAGE',
}, ɵ1 = {
    code: '#SYSTEM-PAGE',
}, ɵ2 = {
    code: '#SECURITY-PAGE',
}, ɵ3 = {
    code: '#SETTINGS-PAGE',
}, ɵ4 = {
    code: '#SETTINGS-PAGE',
}, ɵ5 = {
    code: '#SETTINGS-PAGE',
};
var routes = [{
        path: '',
        component: ExtraComponent,
        canActivateChild: [AuthGuardChildService],
        children: [
            {
                path: 'profile',
                component: ProfilePageComponent,
                data: ɵ0,
            },
            {
                path: 'system',
                component: SystemPageComponent,
                data: ɵ1,
            },
            {
                path: 'security',
                component: SecurityPageComponent,
                data: ɵ2,
            },
            {
                path: 'settings',
                component: SettingsPageComponent,
                data: ɵ3,
            },
            {
                path: 'terms',
                component: TermsConditionsPageComponent,
                data: ɵ4,
            },
            {
                path: 'privacy-policy',
                component: PrivacyPolicyPageComponent,
                data: ɵ5,
            },
        ],
    }];
var DoExtraRoutingModule = /** @class */ (function () {
    function DoExtraRoutingModule() {
    }
    DoExtraRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] }
    ];
    return DoExtraRoutingModule;
}());
export { DoExtraRoutingModule };
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZXh0cmEtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1leHRyYS8iLCJzb3VyY2VzIjpbImxpYi9kby1leHRyYS1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdkYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7U0FVaEY7SUFDSixJQUFJLEVBQUUsZUFBZTtDQUN0QixPQUtLO0lBQ0osSUFBSSxFQUFFLGNBQWM7Q0FDckIsT0FLSztJQUNKLElBQUksRUFBRSxnQkFBZ0I7Q0FDdkIsT0FLSztJQUNKLElBQUksRUFBRSxnQkFBZ0I7Q0FDdkIsT0FLSztJQUNKLElBQUksRUFBRSxnQkFBZ0I7Q0FDdkIsT0FLSztJQUNKLElBQUksRUFBRSxnQkFBZ0I7Q0FDdkI7QUE3Q1AsSUFBTSxNQUFNLEdBQVcsQ0FBQztRQUN0QixJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLGdCQUFnQixFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDekMsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsU0FBUyxFQUFFLG9CQUFvQjtnQkFDL0IsSUFBSSxJQUVIO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxTQUFTLEVBQUUsbUJBQW1CO2dCQUM5QixJQUFJLElBRUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUscUJBQXFCO2dCQUNoQyxJQUFJLElBRUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUscUJBQXFCO2dCQUNoQyxJQUFJLElBRUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLFNBQVMsRUFBRSw0QkFBNEI7Z0JBQ3ZDLElBQUksSUFFSDthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsU0FBUyxFQUFFLDBCQUEwQjtnQkFDckMsSUFBSSxJQUVIO2FBQ0Y7U0FDRjtLQUNGLENBQUMsQ0FBQztBQUVIO0lBQUE7SUFLQSxDQUFDOztnQkFMQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4Qjs7SUFFRCwyQkFBQztDQUFBLEFBTEQsSUFLQztTQURZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoR3VhcmRDaGlsZFNlcnZpY2UgfSBmcm9tICdAZG9uZ2thcC9kby1hdXRoJztcbmltcG9ydCB7IEV4dHJhQ29tcG9uZW50IH0gZnJvbSAnLi9kby1leHRyYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZmlsZVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGUvcHJvZmlsZS1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZXR0aW5nc1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL3NldHRpbmdzL3NldHRpbmdzLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFNlY3VyaXR5UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vc2VjdXJpdHkvc2VjdXJpdHktcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3lzdGVtUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vc3lzdGVtL3N5c3RlbS1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXJtc0NvbmRpdGlvbnNQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90ZXJtcy90ZXJtcy1jb25kaXRpb25zLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFByaXZhY3lQb2xpY3lQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW3tcbiAgcGF0aDogJycsXG4gIGNvbXBvbmVudDogRXh0cmFDb21wb25lbnQsXG4gIGNhbkFjdGl2YXRlQ2hpbGQ6IFtBdXRoR3VhcmRDaGlsZFNlcnZpY2VdLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHBhdGg6ICdwcm9maWxlJyxcbiAgICAgIGNvbXBvbmVudDogUHJvZmlsZVBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjUFJPRklMRS1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnc3lzdGVtJyxcbiAgICAgIGNvbXBvbmVudDogU3lzdGVtUGFnZUNvbXBvbmVudCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogJyNTWVNURU0tUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ3NlY3VyaXR5JyxcbiAgICAgIGNvbXBvbmVudDogU2VjdXJpdHlQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI1NFQ1VSSVRZLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdzZXR0aW5ncycsXG4gICAgICBjb21wb25lbnQ6IFNldHRpbmdzUGFnZUNvbXBvbmVudCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogJyNTRVRUSU5HUy1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAndGVybXMnLFxuICAgICAgY29tcG9uZW50OiBUZXJtc0NvbmRpdGlvbnNQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI1NFVFRJTkdTLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdwcml2YWN5LXBvbGljeScsXG4gICAgICBjb21wb25lbnQ6IFByaXZhY3lQb2xpY3lQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI1NFVFRJTkdTLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxufV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBEb0V4dHJhUm91dGluZ01vZHVsZSB7XG59XG4iXX0=