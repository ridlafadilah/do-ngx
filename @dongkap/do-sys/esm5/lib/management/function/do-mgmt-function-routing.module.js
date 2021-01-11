import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardChildService } from '@dongkap/do-auth';
import { MgmtFunctionComponent } from './do-mgmt-function.component';
import { FunctionEditorPageComponent } from './editor/editor/function-editor-page.component';
import { FunctionListPageComponent } from './list/function-list-page.component';
var ɵ0 = {
    code: '#MANAGEMENT-FUNCTION-CONTROL-PAGE',
}, ɵ1 = {
    code: '#MANAGEMENT-FUNCTION-CONTROL-PAGE',
};
var routes = [{
        path: '',
        component: MgmtFunctionComponent,
        canActivateChild: [AuthGuardChildService],
        children: [
            {
                path: '',
                component: FunctionListPageComponent,
                data: ɵ0,
            },
            {
                path: ':action',
                component: FunctionEditorPageComponent,
                data: ɵ1,
            },
        ],
    }];
var DoMgmtFunctionRoutingModule = /** @class */ (function () {
    function DoMgmtFunctionRoutingModule() {
    }
    DoMgmtFunctionRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] }
    ];
    return DoMgmtFunctionRoutingModule;
}());
export { DoMgmtFunctionRoutingModule };
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWdtdC1mdW5jdGlvbi1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9tYW5hZ2VtZW50L2Z1bmN0aW9uL2RvLW1nbXQtZnVuY3Rpb24tcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDN0YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scUNBQXFDLENBQUM7U0FVcEU7SUFDSixJQUFJLEVBQUUsbUNBQW1DO0NBQzFDLE9BS0s7SUFDSixJQUFJLEVBQUUsbUNBQW1DO0NBQzFDO0FBakJQLElBQU0sTUFBTSxHQUFXLENBQUM7UUFDdEIsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUscUJBQXFCO1FBQ2hDLGdCQUFnQixFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDekMsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLHlCQUF5QjtnQkFDcEMsSUFBSSxJQUVIO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixTQUFTLEVBQUUsMkJBQTJCO2dCQUN0QyxJQUFJLElBRUg7YUFDRjtTQUNGO0tBQ0YsQ0FBQyxDQUFDO0FBRUg7SUFBQTtJQUtBLENBQUM7O2dCQUxBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCOztJQUVELGtDQUFDO0NBQUEsQUFMRCxJQUtDO1NBRFksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhHdWFyZENoaWxkU2VydmljZSB9IGZyb20gJ0Bkb25na2FwL2RvLWF1dGgnO1xuaW1wb3J0IHsgTWdtdEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9kby1tZ210LWZ1bmN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGdW5jdGlvbkVkaXRvclBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2VkaXRvci9lZGl0b3IvZnVuY3Rpb24tZWRpdG9yLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEZ1bmN0aW9uTGlzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2xpc3QvZnVuY3Rpb24tbGlzdC1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW3tcbiAgcGF0aDogJycsXG4gIGNvbXBvbmVudDogTWdtdEZ1bmN0aW9uQ29tcG9uZW50LFxuICBjYW5BY3RpdmF0ZUNoaWxkOiBbQXV0aEd1YXJkQ2hpbGRTZXJ2aWNlXSxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBwYXRoOiAnJyxcbiAgICAgIGNvbXBvbmVudDogRnVuY3Rpb25MaXN0UGFnZUNvbXBvbmVudCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogJyNNQU5BR0VNRU5ULUZVTkNUSU9OLUNPTlRST0wtUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJzphY3Rpb24nLFxuICAgICAgY29tcG9uZW50OiBGdW5jdGlvbkVkaXRvclBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjTUFOQUdFTUVOVC1GVU5DVElPTi1DT05UUk9MLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxufV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBEb01nbXRGdW5jdGlvblJvdXRpbmdNb2R1bGUge1xufVxuIl19