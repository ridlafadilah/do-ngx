import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardChildService } from '@dongkap/do-auth';
import { ParameterComponent } from './do-parameter.component';
import { ParameterListGroupPageComponent } from './group/list-group/parameter-list-group-page.component';
import { ParameterAddGroupPageComponent } from './group/add-group/parameter-add-group-page.component';
import { ParameterListDetailPageComponent } from './detail/parameter-list-detail-page.component';
import { ParameterDoDetailPageComponent } from './detail/do/parameter-do-detail-page.component';
const ɵ0 = {
    code: '#SYSCONF-PARAMETER-PAGE',
}, ɵ1 = {
    code: '#SYSCONF-PARAMETER-PAGE',
}, ɵ2 = {
    code: '#SYSCONF-PARAMETER-PAGE',
}, ɵ3 = {
    code: '#SYSCONF-PARAMETER-PAGE',
}, ɵ4 = {
    code: '#SYSCONF-PARAMETER-PAGE',
};
const routes = [{
        path: '',
        component: ParameterComponent,
        canActivateChild: [AuthGuardChildService],
        children: [
            {
                path: '',
                component: ParameterListGroupPageComponent,
                data: ɵ0,
            },
            {
                path: 'group',
                component: ParameterListGroupPageComponent,
                data: ɵ1,
            },
            {
                path: 'group/:action',
                component: ParameterAddGroupPageComponent,
                data: ɵ2,
            },
            {
                path: 'detail',
                component: ParameterListDetailPageComponent,
                data: ɵ3,
            },
            {
                path: 'detail/:action',
                component: ParameterDoDetailPageComponent,
                data: ɵ4,
            },
        ],
    }];
export class DoParameterRoutingModule {
}
DoParameterRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tcGFyYW1ldGVyLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tc3lzLyIsInNvdXJjZXMiOlsibGliL3BhcmFtZXRlci9kby1wYXJhbWV0ZXItcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDekcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDdEcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDakcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7V0FVcEY7SUFDSixJQUFJLEVBQUUseUJBQXlCO0NBQ2hDLE9BS0s7SUFDSixJQUFJLEVBQUUseUJBQXlCO0NBQ2hDLE9BS0s7SUFDSixJQUFJLEVBQUUseUJBQXlCO0NBQ2hDLE9BS0s7SUFDSixJQUFJLEVBQUUseUJBQXlCO0NBQ2hDLE9BS0s7SUFDSixJQUFJLEVBQUUseUJBQXlCO0NBQ2hDO0FBdENQLE1BQU0sTUFBTSxHQUFXLENBQUM7UUFDdEIsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsa0JBQWtCO1FBQzdCLGdCQUFnQixFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDekMsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLCtCQUErQjtnQkFDMUMsSUFBSSxJQUVIO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixTQUFTLEVBQUUsK0JBQStCO2dCQUMxQyxJQUFJLElBRUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxlQUFlO2dCQUNyQixTQUFTLEVBQUUsOEJBQThCO2dCQUN6QyxJQUFJLElBRUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLFNBQVMsRUFBRSxnQ0FBZ0M7Z0JBQzNDLElBQUksSUFFSDthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsU0FBUyxFQUFFLDhCQUE4QjtnQkFDekMsSUFBSSxJQUVIO2FBQ0Y7U0FDRjtLQUNGLENBQUMsQ0FBQztBQU1ILE1BQU0sT0FBTyx3QkFBd0I7OztZQUpwQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhHdWFyZENoaWxkU2VydmljZSB9IGZyb20gJ0Bkb25na2FwL2RvLWF1dGgnO1xuaW1wb3J0IHsgUGFyYW1ldGVyQ29tcG9uZW50IH0gZnJvbSAnLi9kby1wYXJhbWV0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBhcmFtZXRlckxpc3RHcm91cFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2dyb3VwL2xpc3QtZ3JvdXAvcGFyYW1ldGVyLWxpc3QtZ3JvdXAtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFyYW1ldGVyQWRkR3JvdXBQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9ncm91cC9hZGQtZ3JvdXAvcGFyYW1ldGVyLWFkZC1ncm91cC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXJhbWV0ZXJMaXN0RGV0YWlsUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vZGV0YWlsL3BhcmFtZXRlci1saXN0LWRldGFpbC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXJhbWV0ZXJEb0RldGFpbFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2RldGFpbC9kby9wYXJhbWV0ZXItZG8tZGV0YWlsLXBhZ2UuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbe1xuICBwYXRoOiAnJyxcbiAgY29tcG9uZW50OiBQYXJhbWV0ZXJDb21wb25lbnQsXG4gIGNhbkFjdGl2YXRlQ2hpbGQ6IFtBdXRoR3VhcmRDaGlsZFNlcnZpY2VdLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHBhdGg6ICcnLFxuICAgICAgY29tcG9uZW50OiBQYXJhbWV0ZXJMaXN0R3JvdXBQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI1NZU0NPTkYtUEFSQU1FVEVSLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdncm91cCcsXG4gICAgICBjb21wb25lbnQ6IFBhcmFtZXRlckxpc3RHcm91cFBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjU1lTQ09ORi1QQVJBTUVURVItUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ2dyb3VwLzphY3Rpb24nLFxuICAgICAgY29tcG9uZW50OiBQYXJhbWV0ZXJBZGRHcm91cFBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjU1lTQ09ORi1QQVJBTUVURVItUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ2RldGFpbCcsXG4gICAgICBjb21wb25lbnQ6IFBhcmFtZXRlckxpc3REZXRhaWxQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI1NZU0NPTkYtUEFSQU1FVEVSLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdkZXRhaWwvOmFjdGlvbicsXG4gICAgICBjb21wb25lbnQ6IFBhcmFtZXRlckRvRGV0YWlsUGFnZUNvbXBvbmVudCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogJyNTWVNDT05GLVBBUkFNRVRFUi1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn1dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9QYXJhbWV0ZXJSb3V0aW5nTW9kdWxlIHtcbn1cbiJdfQ==