import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardChildService } from '@dongkap/do-auth';
import { MgmtUserComponent } from './do-mgmt-user.component';
import { MgmtEndUserListPageComponent } from './end-user/list/mgmt-end-user-list-page.component';
import { MgmtEndUserDetailPageComponent } from './end-user/detail/mgmt-end-user-detail-page.component';
import { MgmtAdminListPageComponent } from './admin/list/mgmt-admin-list-page.component';
import { MgmtAdminDetailPageComponent } from './admin/detail/mgmt-admin-detail-page.component';
const ɵ0 = {
    code: '#MANAGEMENT-END-USER-PAGE',
}, ɵ1 = {
    code: '#MANAGEMENT-END-USER-PAGE',
}, ɵ2 = {
    code: '#MANAGEMENT-ADMIN-PAGE',
}, ɵ3 = {
    code: '#MANAGEMENT-ADMIN-PAGE',
};
const routes = [{
        path: '',
        component: MgmtUserComponent,
        canActivateChild: [AuthGuardChildService],
        children: [
            {
                path: 'end',
                component: MgmtEndUserListPageComponent,
                data: ɵ0,
            },
            {
                path: 'end/detail',
                component: MgmtEndUserDetailPageComponent,
                data: ɵ1,
            },
            {
                path: 'admin',
                component: MgmtAdminListPageComponent,
                data: ɵ2,
            },
            {
                path: 'admin/detail',
                component: MgmtAdminDetailPageComponent,
                data: ɵ3,
            },
        ],
    }];
export class DoMgmtUserRoutingModule {
}
DoMgmtUserRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWdtdC11c2VyLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tc3lzLyIsInNvdXJjZXMiOlsibGliL21hbmFnZW1lbnQvdXNlci9kby1tZ210LXVzZXItcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDakcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDdkcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDekYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saURBQWlELENBQUM7V0FVbkY7SUFDSixJQUFJLEVBQUUsMkJBQTJCO0NBQ2xDLE9BS0s7SUFDSixJQUFJLEVBQUUsMkJBQTJCO0NBQ2xDLE9BS0s7SUFDSixJQUFJLEVBQUUsd0JBQXdCO0NBQy9CLE9BS0s7SUFDSixJQUFJLEVBQUUsd0JBQXdCO0NBQy9CO0FBL0JQLE1BQU0sTUFBTSxHQUFXLENBQUM7UUFDdEIsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsaUJBQWlCO1FBQzVCLGdCQUFnQixFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDekMsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsU0FBUyxFQUFFLDRCQUE0QjtnQkFDdkMsSUFBSSxJQUVIO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsU0FBUyxFQUFFLDhCQUE4QjtnQkFDekMsSUFBSSxJQUVIO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixTQUFTLEVBQUUsMEJBQTBCO2dCQUNyQyxJQUFJLElBRUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxjQUFjO2dCQUNwQixTQUFTLEVBQUUsNEJBQTRCO2dCQUN2QyxJQUFJLElBRUg7YUFDRjtTQUNGO0tBQ0YsQ0FBQyxDQUFDO0FBTUgsTUFBTSxPQUFPLHVCQUF1Qjs7O1lBSm5DLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkQ2hpbGRTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tYXV0aCc7XG5pbXBvcnQgeyBNZ210VXNlckNvbXBvbmVudCB9IGZyb20gJy4vZG8tbWdtdC11c2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZ210RW5kVXNlckxpc3RQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9lbmQtdXNlci9saXN0L21nbXQtZW5kLXVzZXItbGlzdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZ210RW5kVXNlckRldGFpbFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2VuZC11c2VyL2RldGFpbC9tZ210LWVuZC11c2VyLWRldGFpbC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZ210QWRtaW5MaXN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYWRtaW4vbGlzdC9tZ210LWFkbWluLWxpc3QtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWdtdEFkbWluRGV0YWlsUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYWRtaW4vZGV0YWlsL21nbXQtYWRtaW4tZGV0YWlsLXBhZ2UuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbe1xuICBwYXRoOiAnJyxcbiAgY29tcG9uZW50OiBNZ210VXNlckNvbXBvbmVudCxcbiAgY2FuQWN0aXZhdGVDaGlsZDogW0F1dGhHdWFyZENoaWxkU2VydmljZV0sXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgcGF0aDogJ2VuZCcsXG4gICAgICBjb21wb25lbnQ6IE1nbXRFbmRVc2VyTGlzdFBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjTUFOQUdFTUVOVC1FTkQtVVNFUi1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnZW5kL2RldGFpbCcsXG4gICAgICBjb21wb25lbnQ6IE1nbXRFbmRVc2VyRGV0YWlsUGFnZUNvbXBvbmVudCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogJyNNQU5BR0VNRU5ULUVORC1VU0VSLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdhZG1pbicsXG4gICAgICBjb21wb25lbnQ6IE1nbXRBZG1pbkxpc3RQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI01BTkFHRU1FTlQtQURNSU4tUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ2FkbWluL2RldGFpbCcsXG4gICAgICBjb21wb25lbnQ6IE1nbXRBZG1pbkRldGFpbFBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjTUFOQUdFTUVOVC1BRE1JTi1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn1dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9NZ210VXNlclJvdXRpbmdNb2R1bGUge1xufVxuIl19