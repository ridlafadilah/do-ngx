import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardChildService } from '@dongkap/do-auth';
import { MgmtRoleComponent } from './do-mgmt-role.component';
import { RoleListPageComponent } from './list/role-list-page.component';
import { RoleAddEditPageComponent } from './add-edit/role-add-edit-page.component';
var ɵ0 = {
    code: '#MANAGEMENT-ROLE-PAGE',
}, ɵ1 = {
    code: '#MANAGEMENT-ROLE-PAGE',
};
var routes = [{
        path: '',
        component: MgmtRoleComponent,
        canActivateChild: [AuthGuardChildService],
        children: [
            {
                path: '',
                component: RoleListPageComponent,
                data: ɵ0,
            },
            {
                path: ':action',
                component: RoleAddEditPageComponent,
                data: ɵ1,
            },
        ],
    }];
var DoMgmtRoleRoutingModule = /** @class */ (function () {
    function DoMgmtRoleRoutingModule() {
    }
    DoMgmtRoleRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] }
    ];
    return DoMgmtRoleRoutingModule;
}());
export { DoMgmtRoleRoutingModule };
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWdtdC1yb2xlLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tc3lzLyIsInNvdXJjZXMiOlsibGliL21hbmFnZW1lbnQvcm9sZS9kby1tZ210LXJvbGUtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUNBQXlDLENBQUM7U0FVdkU7SUFDSixJQUFJLEVBQUUsdUJBQXVCO0NBQzlCLE9BS0s7SUFDSixJQUFJLEVBQUUsdUJBQXVCO0NBQzlCO0FBakJQLElBQU0sTUFBTSxHQUFXLENBQUM7UUFDdEIsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsaUJBQWlCO1FBQzVCLGdCQUFnQixFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDekMsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLHFCQUFxQjtnQkFDaEMsSUFBSSxJQUVIO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixTQUFTLEVBQUUsd0JBQXdCO2dCQUNuQyxJQUFJLElBRUg7YUFDRjtTQUNGO0tBQ0YsQ0FBQyxDQUFDO0FBRUg7SUFBQTtJQUtBLENBQUM7O2dCQUxBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCOztJQUVELDhCQUFDO0NBQUEsQUFMRCxJQUtDO1NBRFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhHdWFyZENoaWxkU2VydmljZSB9IGZyb20gJ0Bkb25na2FwL2RvLWF1dGgnO1xuaW1wb3J0IHsgTWdtdFJvbGVDb21wb25lbnQgfSBmcm9tICcuL2RvLW1nbXQtcm9sZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm9sZUxpc3RQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9saXN0L3JvbGUtbGlzdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb2xlQWRkRWRpdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2FkZC1lZGl0L3JvbGUtYWRkLWVkaXQtcGFnZS5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFt7XG4gIHBhdGg6ICcnLFxuICBjb21wb25lbnQ6IE1nbXRSb2xlQ29tcG9uZW50LFxuICBjYW5BY3RpdmF0ZUNoaWxkOiBbQXV0aEd1YXJkQ2hpbGRTZXJ2aWNlXSxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBwYXRoOiAnJyxcbiAgICAgIGNvbXBvbmVudDogUm9sZUxpc3RQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI01BTkFHRU1FTlQtUk9MRS1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnOmFjdGlvbicsXG4gICAgICBjb21wb25lbnQ6IFJvbGVBZGRFZGl0UGFnZUNvbXBvbmVudCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogJyNNQU5BR0VNRU5ULVJPTEUtUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIERvTWdtdFJvbGVSb3V0aW5nTW9kdWxlIHtcbn1cbiJdfQ==