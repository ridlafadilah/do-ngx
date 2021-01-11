import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardChildService } from '@dongkap/do-auth';
import { MgmtUserComponent } from './do-mgmt-user.component';
import { MgmtEndUserListPageComponent } from './end-user/list/mgmt-end-user-list-page.component';
import { MgmtEndUserDetailPageComponent } from './end-user/detail/mgmt-end-user-detail-page.component';
import { MgmtAdminListPageComponent } from './admin/list/mgmt-admin-list-page.component';
import { MgmtAdminDetailPageComponent } from './admin/detail/mgmt-admin-detail-page.component';
var ɵ0 = {
    code: '#MANAGEMENT-END-USER-PAGE',
}, ɵ1 = {
    code: '#MANAGEMENT-END-USER-PAGE',
}, ɵ2 = {
    code: '#MANAGEMENT-ADMIN-PAGE',
}, ɵ3 = {
    code: '#MANAGEMENT-ADMIN-PAGE',
};
var routes = [{
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
var DoMgmtUserRoutingModule = /** @class */ (function () {
    function DoMgmtUserRoutingModule() {
    }
    DoMgmtUserRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] }
    ];
    return DoMgmtUserRoutingModule;
}());
export { DoMgmtUserRoutingModule };
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWdtdC11c2VyLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tc3lzLyIsInNvdXJjZXMiOlsibGliL21hbmFnZW1lbnQvdXNlci9kby1tZ210LXVzZXItcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDakcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDdkcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDekYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saURBQWlELENBQUM7U0FVbkY7SUFDSixJQUFJLEVBQUUsMkJBQTJCO0NBQ2xDLE9BS0s7SUFDSixJQUFJLEVBQUUsMkJBQTJCO0NBQ2xDLE9BS0s7SUFDSixJQUFJLEVBQUUsd0JBQXdCO0NBQy9CLE9BS0s7SUFDSixJQUFJLEVBQUUsd0JBQXdCO0NBQy9CO0FBL0JQLElBQU0sTUFBTSxHQUFXLENBQUM7UUFDdEIsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsaUJBQWlCO1FBQzVCLGdCQUFnQixFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDekMsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsU0FBUyxFQUFFLDRCQUE0QjtnQkFDdkMsSUFBSSxJQUVIO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsU0FBUyxFQUFFLDhCQUE4QjtnQkFDekMsSUFBSSxJQUVIO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixTQUFTLEVBQUUsMEJBQTBCO2dCQUNyQyxJQUFJLElBRUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxjQUFjO2dCQUNwQixTQUFTLEVBQUUsNEJBQTRCO2dCQUN2QyxJQUFJLElBRUg7YUFDRjtTQUNGO0tBQ0YsQ0FBQyxDQUFDO0FBRUg7SUFBQTtJQUtBLENBQUM7O2dCQUxBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCOztJQUVELDhCQUFDO0NBQUEsQUFMRCxJQUtDO1NBRFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhHdWFyZENoaWxkU2VydmljZSB9IGZyb20gJ0Bkb25na2FwL2RvLWF1dGgnO1xuaW1wb3J0IHsgTWdtdFVzZXJDb21wb25lbnQgfSBmcm9tICcuL2RvLW1nbXQtdXNlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWdtdEVuZFVzZXJMaXN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vZW5kLXVzZXIvbGlzdC9tZ210LWVuZC11c2VyLWxpc3QtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWdtdEVuZFVzZXJEZXRhaWxQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9lbmQtdXNlci9kZXRhaWwvbWdtdC1lbmQtdXNlci1kZXRhaWwtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWdtdEFkbWluTGlzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2FkbWluL2xpc3QvbWdtdC1hZG1pbi1saXN0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE1nbXRBZG1pbkRldGFpbFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2FkbWluL2RldGFpbC9tZ210LWFkbWluLWRldGFpbC1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW3tcbiAgcGF0aDogJycsXG4gIGNvbXBvbmVudDogTWdtdFVzZXJDb21wb25lbnQsXG4gIGNhbkFjdGl2YXRlQ2hpbGQ6IFtBdXRoR3VhcmRDaGlsZFNlcnZpY2VdLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHBhdGg6ICdlbmQnLFxuICAgICAgY29tcG9uZW50OiBNZ210RW5kVXNlckxpc3RQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI01BTkFHRU1FTlQtRU5ELVVTRVItUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ2VuZC9kZXRhaWwnLFxuICAgICAgY29tcG9uZW50OiBNZ210RW5kVXNlckRldGFpbFBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjTUFOQUdFTUVOVC1FTkQtVVNFUi1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnYWRtaW4nLFxuICAgICAgY29tcG9uZW50OiBNZ210QWRtaW5MaXN0UGFnZUNvbXBvbmVudCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogJyNNQU5BR0VNRU5ULUFETUlOLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdhZG1pbi9kZXRhaWwnLFxuICAgICAgY29tcG9uZW50OiBNZ210QWRtaW5EZXRhaWxQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI01BTkFHRU1FTlQtQURNSU4tUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIERvTWdtdFVzZXJSb3V0aW5nTW9kdWxlIHtcbn1cbiJdfQ==