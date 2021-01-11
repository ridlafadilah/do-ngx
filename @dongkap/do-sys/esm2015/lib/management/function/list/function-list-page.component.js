import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionType } from '@swimlane/ngx-datatable';
import { BaseFilterComponent } from '@dongkap/do-common';
import { FunctionControlService } from '../services/function-control.service';
export class FunctionListPageComponent extends BaseFilterComponent {
    constructor(injector, router, functionControlService) {
        super(injector, {
            'authority': [],
            'description': [],
        });
        this.injector = injector;
        this.router = router;
        this.functionControlService = functionControlService;
        this.selectionType = SelectionType.single;
        this.columns = [
            { name: 'Authority', prop: 'authority' },
            { name: 'Description', prop: 'description' },
        ];
        this.expanded = false;
        this.apiPath = this.api['security']['datatable-role'];
        this.filters = [
            { controlName: 'authority', type: 'input' },
            { controlName: 'description', type: 'input' }
        ];
    }
    ngOnInit() { }
    onViewDetail(data) {
        this.functionControlService.setRole(data);
        this.router.navigate(['/app/mgmt/function/control', 'edit']);
    }
}
FunctionListPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: FunctionControlService }
];
FunctionListPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-function-list-page',
                template: "<do-page-outlet [header]=\"'header.function-control-list'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [add]=\"false\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'authority'\"\n            [label]=\"'Authority'\"\n            formControlName=\"authority\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'description'\"\n            [label]=\"'Description'\"\n            formControlName=\"description\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n",
                styles: [""]
            },] }
];
FunctionListPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: FunctionControlService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24tbGlzdC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9tYW5hZ2VtZW50L2Z1bmN0aW9uL2xpc3QvZnVuY3Rpb24tbGlzdC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXhELE9BQU8sRUFBRSxtQkFBbUIsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQU85RSxNQUFNLE9BQU8seUJBQTBCLFNBQVEsbUJBQXdCO0lBVXJFLFlBQW1CLFFBQWtCLEVBQVUsTUFBYyxFQUFVLHNCQUE4QztRQUNuSCxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ2QsV0FBVyxFQUFFLEVBQUU7WUFDZixhQUFhLEVBQUUsRUFBRTtTQUNsQixDQUFDLENBQUM7UUFKYyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFQOUcsa0JBQWEsR0FBa0IsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUNwRCxZQUFPLEdBQXNCO1lBQ2xDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQ3hDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1NBQzdDLENBQUM7UUFDSyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBTy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUMzQyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtTQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELFFBQVEsS0FBVSxDQUFDO0lBRW5CLFlBQVksQ0FBQyxJQUFJO1FBQ2YsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLDRCQUE0QixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7O1lBaEI0QixRQUFRO1lBQWtCLE1BQU07WUFBa0Msc0JBQXNCOzs7WUFmdEgsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBRWpDLHcvQkFBa0Q7O2FBQ25EOzs7WUFabUIsUUFBUTtZQUVuQixNQUFNO1lBSU4sc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2VsZWN0aW9uVHlwZSB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcbmltcG9ydCB7IEh0dHBCYXNlTW9kZWwgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEJhc2VGaWx0ZXJDb21wb25lbnQsIERhdGF0YWJsZUNvbHVtbiB9IGZyb20gJ0Bkb25na2FwL2RvLWNvbW1vbic7XG5pbXBvcnQgeyBGdW5jdGlvbkNvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZnVuY3Rpb24tY29udHJvbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tZnVuY3Rpb24tbGlzdC1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vZnVuY3Rpb24tbGlzdC1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9mdW5jdGlvbi1saXN0LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBGdW5jdGlvbkxpc3RQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZpbHRlckNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgYXBpUGF0aDogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIHNlbGVjdGlvblR5cGU6IFNlbGVjdGlvblR5cGUgPSBTZWxlY3Rpb25UeXBlLnNpbmdsZTtcbiAgcHVibGljIGNvbHVtbnM6IERhdGF0YWJsZUNvbHVtbltdID0gW1xuICAgIHsgbmFtZTogJ0F1dGhvcml0eScsIHByb3A6ICdhdXRob3JpdHknIH0sXG4gICAgeyBuYW1lOiAnRGVzY3JpcHRpb24nLCBwcm9wOiAnZGVzY3JpcHRpb24nIH0sXG4gIF07XG4gIHB1YmxpYyBleHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZnVuY3Rpb25Db250cm9sU2VydmljZTogRnVuY3Rpb25Db250cm9sU2VydmljZSkge1xuICAgIHN1cGVyKGluamVjdG9yLCB7XG4gICAgICAnYXV0aG9yaXR5JzogW10sXG4gICAgICAnZGVzY3JpcHRpb24nOiBbXSxcbiAgICB9KTtcbiAgICB0aGlzLmFwaVBhdGggPSB0aGlzLmFwaVsnc2VjdXJpdHknXVsnZGF0YXRhYmxlLXJvbGUnXTtcbiAgICB0aGlzLmZpbHRlcnMgPSBbXG4gICAgICB7IGNvbnRyb2xOYW1lOiAnYXV0aG9yaXR5JywgdHlwZTogJ2lucHV0JyB9LFxuICAgICAgeyBjb250cm9sTmFtZTogJ2Rlc2NyaXB0aW9uJywgdHlwZTogJ2lucHV0JyB9XTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBvblZpZXdEZXRhaWwoZGF0YSk6IHZvaWQge1xuICAgIHRoaXMuZnVuY3Rpb25Db250cm9sU2VydmljZS5zZXRSb2xlKGRhdGEpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9tZ210L2Z1bmN0aW9uL2NvbnRyb2wnLCAnZWRpdCddKTtcbiAgfVxuXG59XG4iXX0=