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
const ɵ0 = {
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
const routes = [{
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
export class DoExtraRoutingModule {
}
DoExtraRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZXh0cmEtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1leHRyYS8iLCJzb3VyY2VzIjpbImxpYi9kby1leHRyYS1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdkYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7V0FVaEY7SUFDSixJQUFJLEVBQUUsZUFBZTtDQUN0QixPQUtLO0lBQ0osSUFBSSxFQUFFLGNBQWM7Q0FDckIsT0FLSztJQUNKLElBQUksRUFBRSxnQkFBZ0I7Q0FDdkIsT0FLSztJQUNKLElBQUksRUFBRSxnQkFBZ0I7Q0FDdkIsT0FLSztJQUNKLElBQUksRUFBRSxnQkFBZ0I7Q0FDdkIsT0FLSztJQUNKLElBQUksRUFBRSxnQkFBZ0I7Q0FDdkI7QUE3Q1AsTUFBTSxNQUFNLEdBQVcsQ0FBQztRQUN0QixJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLGdCQUFnQixFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDekMsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsU0FBUyxFQUFFLG9CQUFvQjtnQkFDL0IsSUFBSSxJQUVIO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxTQUFTLEVBQUUsbUJBQW1CO2dCQUM5QixJQUFJLElBRUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUscUJBQXFCO2dCQUNoQyxJQUFJLElBRUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUscUJBQXFCO2dCQUNoQyxJQUFJLElBRUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLFNBQVMsRUFBRSw0QkFBNEI7Z0JBQ3ZDLElBQUksSUFFSDthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsU0FBUyxFQUFFLDBCQUEwQjtnQkFDckMsSUFBSSxJQUVIO2FBQ0Y7U0FDRjtLQUNGLENBQUMsQ0FBQztBQU1ILE1BQU0sT0FBTyxvQkFBb0I7OztZQUpoQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhHdWFyZENoaWxkU2VydmljZSB9IGZyb20gJ0Bkb25na2FwL2RvLWF1dGgnO1xuaW1wb3J0IHsgRXh0cmFDb21wb25lbnQgfSBmcm9tICcuL2RvLWV4dHJhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9maWxlUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvZmlsZS9wcm9maWxlLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFNldHRpbmdzUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vc2V0dGluZ3Mvc2V0dGluZ3MtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VjdXJpdHlQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9zZWN1cml0eS9zZWN1cml0eS1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTeXN0ZW1QYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9zeXN0ZW0vc3lzdGVtLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFRlcm1zQ29uZGl0aW9uc1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Rlcm1zL3Rlcm1zLWNvbmRpdGlvbnMtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpdmFjeVBvbGljeVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LXBhZ2UuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbe1xuICBwYXRoOiAnJyxcbiAgY29tcG9uZW50OiBFeHRyYUNvbXBvbmVudCxcbiAgY2FuQWN0aXZhdGVDaGlsZDogW0F1dGhHdWFyZENoaWxkU2VydmljZV0sXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgcGF0aDogJ3Byb2ZpbGUnLFxuICAgICAgY29tcG9uZW50OiBQcm9maWxlUGFnZUNvbXBvbmVudCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogJyNQUk9GSUxFLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdzeXN0ZW0nLFxuICAgICAgY29tcG9uZW50OiBTeXN0ZW1QYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI1NZU1RFTS1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnc2VjdXJpdHknLFxuICAgICAgY29tcG9uZW50OiBTZWN1cml0eVBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjU0VDVVJJVFktUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ3NldHRpbmdzJyxcbiAgICAgIGNvbXBvbmVudDogU2V0dGluZ3NQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI1NFVFRJTkdTLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICd0ZXJtcycsXG4gICAgICBjb21wb25lbnQ6IFRlcm1zQ29uZGl0aW9uc1BhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjU0VUVElOR1MtUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ3ByaXZhY3ktcG9saWN5JyxcbiAgICAgIGNvbXBvbmVudDogUHJpdmFjeVBvbGljeVBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjU0VUVElOR1MtUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIERvRXh0cmFSb3V0aW5nTW9kdWxlIHtcbn1cbiJdfQ==