import { __extends } from "tslib";
import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionType } from '@swimlane/ngx-datatable';
import { BaseFilterComponent } from '@dongkap/do-common';
import { FunctionControlService } from '../services/function-control.service';
var FunctionListPageComponent = /** @class */ (function (_super) {
    __extends(FunctionListPageComponent, _super);
    function FunctionListPageComponent(injector, router, functionControlService) {
        var _this = _super.call(this, injector, {
            'authority': [],
            'description': [],
        }) || this;
        _this.injector = injector;
        _this.router = router;
        _this.functionControlService = functionControlService;
        _this.selectionType = SelectionType.single;
        _this.columns = [
            { name: 'Authority', prop: 'authority' },
            { name: 'Description', prop: 'description' },
        ];
        _this.expanded = false;
        _this.apiPath = _this.api['security']['datatable-role'];
        _this.filters = [
            { controlName: 'authority', type: 'input' },
            { controlName: 'description', type: 'input' }
        ];
        return _this;
    }
    FunctionListPageComponent.prototype.ngOnInit = function () { };
    FunctionListPageComponent.prototype.onViewDetail = function (data) {
        this.functionControlService.setRole(data);
        this.router.navigate(['/app/mgmt/function/control', 'edit']);
    };
    FunctionListPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: FunctionControlService }
    ]; };
    FunctionListPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-function-list-page',
                    template: "<do-page-outlet [header]=\"'header.function-control-list'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [add]=\"false\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'authority'\"\n            [label]=\"'Authority'\"\n            formControlName=\"authority\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'description'\"\n            [label]=\"'Description'\"\n            formControlName=\"description\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n",
                    styles: [""]
                },] }
    ];
    FunctionListPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: FunctionControlService }
    ]; };
    return FunctionListPageComponent;
}(BaseFilterComponent));
export { FunctionListPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24tbGlzdC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9tYW5hZ2VtZW50L2Z1bmN0aW9uL2xpc3QvZnVuY3Rpb24tbGlzdC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFDMUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFOUU7SUFLK0MsNkNBQXdCO0lBVXJFLG1DQUFtQixRQUFrQixFQUFVLE1BQWMsRUFBVSxzQkFBOEM7UUFBckgsWUFDRSxrQkFBTSxRQUFRLEVBQUU7WUFDZCxXQUFXLEVBQUUsRUFBRTtZQUNmLGFBQWEsRUFBRSxFQUFFO1NBQ2xCLENBQUMsU0FLSDtRQVRrQixjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFQOUcsbUJBQWEsR0FBa0IsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUNwRCxhQUFPLEdBQXNCO1lBQ2xDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQ3hDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1NBQzdDLENBQUM7UUFDSyxjQUFRLEdBQVksS0FBSyxDQUFDO1FBTy9CLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RELEtBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUMzQyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtTQUFDLENBQUM7O0lBQ25ELENBQUM7SUFFRCw0Q0FBUSxHQUFSLGNBQWtCLENBQUM7SUFFbkIsZ0RBQVksR0FBWixVQUFhLElBQUk7UUFDZixJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsNEJBQTRCLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDOztnQkFoQjRCLFFBQVE7Z0JBQWtCLE1BQU07Z0JBQWtDLHNCQUFzQjs7O2dCQWZ0SCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFFakMsdy9CQUFrRDs7aUJBQ25EOzs7Z0JBWm1CLFFBQVE7Z0JBRW5CLE1BQU07Z0JBSU4sc0JBQXNCOztJQW1DL0IsZ0NBQUM7Q0FBQSxBQWpDRCxDQUsrQyxtQkFBbUIsR0E0QmpFO1NBNUJZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNlbGVjdGlvblR5cGUgfSBmcm9tICdAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZSc7XG5pbXBvcnQgeyBIdHRwQmFzZU1vZGVsIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBCYXNlRmlsdGVyQ29tcG9uZW50LCBEYXRhdGFibGVDb2x1bW4gfSBmcm9tICdAZG9uZ2thcC9kby1jb21tb24nO1xuaW1wb3J0IHsgRnVuY3Rpb25Db250cm9sU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Z1bmN0aW9uLWNvbnRyb2wuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWZ1bmN0aW9uLWxpc3QtcGFnZScsXG4gIHN0eWxlVXJsczogWycuL2Z1bmN0aW9uLWxpc3QtcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZnVuY3Rpb24tbGlzdC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRnVuY3Rpb25MaXN0UGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGaWx0ZXJDb21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGFwaVBhdGg6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBzZWxlY3Rpb25UeXBlOiBTZWxlY3Rpb25UeXBlID0gU2VsZWN0aW9uVHlwZS5zaW5nbGU7XG4gIHB1YmxpYyBjb2x1bW5zOiBEYXRhdGFibGVDb2x1bW5bXSA9IFtcbiAgICB7IG5hbWU6ICdBdXRob3JpdHknLCBwcm9wOiAnYXV0aG9yaXR5JyB9LFxuICAgIHsgbmFtZTogJ0Rlc2NyaXB0aW9uJywgcHJvcDogJ2Rlc2NyaXB0aW9uJyB9LFxuICBdO1xuICBwdWJsaWMgZXhwYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGZ1bmN0aW9uQ29udHJvbFNlcnZpY2U6IEZ1bmN0aW9uQ29udHJvbFNlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3Rvciwge1xuICAgICAgJ2F1dGhvcml0eSc6IFtdLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogW10sXG4gICAgfSk7XG4gICAgdGhpcy5hcGlQYXRoID0gdGhpcy5hcGlbJ3NlY3VyaXR5J11bJ2RhdGF0YWJsZS1yb2xlJ107XG4gICAgdGhpcy5maWx0ZXJzID0gW1xuICAgICAgeyBjb250cm9sTmFtZTogJ2F1dGhvcml0eScsIHR5cGU6ICdpbnB1dCcgfSxcbiAgICAgIHsgY29udHJvbE5hbWU6ICdkZXNjcmlwdGlvbicsIHR5cGU6ICdpbnB1dCcgfV07XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XG5cbiAgb25WaWV3RGV0YWlsKGRhdGEpOiB2b2lkIHtcbiAgICB0aGlzLmZ1bmN0aW9uQ29udHJvbFNlcnZpY2Uuc2V0Um9sZShkYXRhKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvbWdtdC9mdW5jdGlvbi9jb250cm9sJywgJ2VkaXQnXSk7XG4gIH1cblxufVxuIl19