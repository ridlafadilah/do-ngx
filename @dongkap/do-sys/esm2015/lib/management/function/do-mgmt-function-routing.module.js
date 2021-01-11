import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardChildService } from '@dongkap/do-auth';
import { MgmtFunctionComponent } from './do-mgmt-function.component';
import { FunctionEditorPageComponent } from './editor/editor/function-editor-page.component';
import { FunctionListPageComponent } from './list/function-list-page.component';
const ɵ0 = {
    code: '#MANAGEMENT-FUNCTION-CONTROL-PAGE',
}, ɵ1 = {
    code: '#MANAGEMENT-FUNCTION-CONTROL-PAGE',
};
const routes = [{
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
export class DoMgmtFunctionRoutingModule {
}
DoMgmtFunctionRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWdtdC1mdW5jdGlvbi1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9tYW5hZ2VtZW50L2Z1bmN0aW9uL2RvLW1nbXQtZnVuY3Rpb24tcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDN0YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scUNBQXFDLENBQUM7V0FVcEU7SUFDSixJQUFJLEVBQUUsbUNBQW1DO0NBQzFDLE9BS0s7SUFDSixJQUFJLEVBQUUsbUNBQW1DO0NBQzFDO0FBakJQLE1BQU0sTUFBTSxHQUFXLENBQUM7UUFDdEIsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUscUJBQXFCO1FBQ2hDLGdCQUFnQixFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDekMsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLHlCQUF5QjtnQkFDcEMsSUFBSSxJQUVIO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixTQUFTLEVBQUUsMkJBQTJCO2dCQUN0QyxJQUFJLElBRUg7YUFDRjtTQUNGO0tBQ0YsQ0FBQyxDQUFDO0FBTUgsTUFBTSxPQUFPLDJCQUEyQjs7O1lBSnZDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkQ2hpbGRTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tYXV0aCc7XG5pbXBvcnQgeyBNZ210RnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2RvLW1nbXQtZnVuY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEZ1bmN0aW9uRWRpdG9yUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vZWRpdG9yL2VkaXRvci9mdW5jdGlvbi1lZGl0b3ItcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRnVuY3Rpb25MaXN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vbGlzdC9mdW5jdGlvbi1saXN0LXBhZ2UuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbe1xuICBwYXRoOiAnJyxcbiAgY29tcG9uZW50OiBNZ210RnVuY3Rpb25Db21wb25lbnQsXG4gIGNhbkFjdGl2YXRlQ2hpbGQ6IFtBdXRoR3VhcmRDaGlsZFNlcnZpY2VdLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHBhdGg6ICcnLFxuICAgICAgY29tcG9uZW50OiBGdW5jdGlvbkxpc3RQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI01BTkFHRU1FTlQtRlVOQ1RJT04tQ09OVFJPTC1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnOmFjdGlvbicsXG4gICAgICBjb21wb25lbnQ6IEZ1bmN0aW9uRWRpdG9yUGFnZUNvbXBvbmVudCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogJyNNQU5BR0VNRU5ULUZVTkNUSU9OLUNPTlRST0wtUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIERvTWdtdEZ1bmN0aW9uUm91dGluZ01vZHVsZSB7XG59XG4iXX0=