import { __extends } from "tslib";
import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionType } from '@swimlane/ngx-datatable';
import { BaseFilterComponent } from '@dongkap/do-common';
import { RoleService } from '../services/role.service';
var RoleListPageComponent = /** @class */ (function (_super) {
    __extends(RoleListPageComponent, _super);
    function RoleListPageComponent(injector, router, roleService) {
        var _this = _super.call(this, injector, {
            'authority': [],
            'description': [],
        }) || this;
        _this.injector = injector;
        _this.router = router;
        _this.roleService = roleService;
        _this.selectionType = SelectionType.single;
        _this.columns = [
            { name: 'Authority', prop: 'authority', width: 150, frozenLeft: true },
            { name: 'Description', prop: 'description', width: 275, frozenLeft: true },
            { name: 'Created', prop: 'createdBy' },
            { name: 'Created Date', prop: 'createdDate' },
            { name: 'Modified', prop: 'modifiedBy' },
            { name: 'Modified Date', prop: 'modifiedDate' },
            { name: 'Active', prop: 'active' },
        ];
        _this.expanded = false;
        _this.apiPath = _this.api['security']['datatable-role'];
        _this.filters = [
            { controlName: 'authority', type: 'input' },
            { controlName: 'description', type: 'input' }
        ];
        return _this;
    }
    RoleListPageComponent.prototype.ngOnInit = function () {
    };
    RoleListPageComponent.prototype.onAddGroup = function () {
        this.router.navigate(['/app/mgmt/role', 'add']);
    };
    RoleListPageComponent.prototype.onViewDetail = function (data) {
        this.roleService.setRole(data);
        this.router.navigate(['/app/mgmt/role', 'edit']);
    };
    RoleListPageComponent.prototype.onReset = function () {
        this.router.navigate(['/app/mgmt/role']);
    };
    RoleListPageComponent.prototype.back = function () {
        this.router.navigate(['/app/mgmt/role']);
        return false;
    };
    RoleListPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: RoleService }
    ]; };
    RoleListPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-role-list-page',
                    template: "<do-page-outlet [header]=\"'header.role-management'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onAdd)=\"onAddGroup()\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'authority'\"\n            [label]=\"'Authority'\"\n            formControlName=\"authority\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'description'\"\n            [label]=\"'Description'\"\n            formControlName=\"description\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n",
                    styles: [""]
                },] }
    ];
    RoleListPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: RoleService }
    ]; };
    return RoleListPageComponent;
}(BaseFilterComponent));
export { RoleListPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS1saXN0LXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tc3lzLyIsInNvdXJjZXMiOlsibGliL21hbmFnZW1lbnQvcm9sZS9saXN0L3JvbGUtbGlzdC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXZEO0lBSzJDLHlDQUF3QjtJQWVqRSwrQkFBbUIsUUFBa0IsRUFBVSxNQUFjLEVBQVUsV0FBd0I7UUFBL0YsWUFDRSxrQkFBTSxRQUFRLEVBQUU7WUFDZCxXQUFXLEVBQUUsRUFBRTtZQUNmLGFBQWEsRUFBRSxFQUFFO1NBQ2xCLENBQUMsU0FLSDtRQVRrQixjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBWnhGLG1CQUFhLEdBQWtCLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDcEQsYUFBTyxHQUFzQjtZQUNsQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDdEUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO1lBQzFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQ3RDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQzdDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQ3hDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO1lBQy9DLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO1NBQ25DLENBQUM7UUFDSyxjQUFRLEdBQVksS0FBSyxDQUFDO1FBTy9CLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RELEtBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUMzQyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtTQUFDLENBQUM7O0lBQ25ELENBQUM7SUFFRCx3Q0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDBDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELDRDQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCx1Q0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELG9DQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUN6QyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dCQTlCNEIsUUFBUTtnQkFBa0IsTUFBTTtnQkFBdUIsV0FBVzs7O2dCQXBCaEcsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBRTdCLDIvQkFBOEM7O2lCQUMvQzs7O2dCQVptQixRQUFRO2dCQUVuQixNQUFNO2dCQUlOLFdBQVc7O0lBc0RwQiw0QkFBQztDQUFBLEFBcERELENBSzJDLG1CQUFtQixHQStDN0Q7U0EvQ1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2VsZWN0aW9uVHlwZSB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcbmltcG9ydCB7IEh0dHBCYXNlTW9kZWwgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEJhc2VGaWx0ZXJDb21wb25lbnQsIERhdGF0YWJsZUNvbHVtbiB9IGZyb20gJ0Bkb25na2FwL2RvLWNvbW1vbic7XG5pbXBvcnQgeyBSb2xlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3JvbGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLXJvbGUtbGlzdC1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vcm9sZS1saXN0LXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3JvbGUtbGlzdC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUm9sZUxpc3RQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZpbHRlckNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgYXBpUGF0aDogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIHNlbGVjdGlvblR5cGU6IFNlbGVjdGlvblR5cGUgPSBTZWxlY3Rpb25UeXBlLnNpbmdsZTtcbiAgcHVibGljIGNvbHVtbnM6IERhdGF0YWJsZUNvbHVtbltdID0gW1xuICAgIHsgbmFtZTogJ0F1dGhvcml0eScsIHByb3A6ICdhdXRob3JpdHknLCB3aWR0aDogMTUwLCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnRGVzY3JpcHRpb24nLCBwcm9wOiAnZGVzY3JpcHRpb24nLCB3aWR0aDogMjc1LCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnQ3JlYXRlZCcsIHByb3A6ICdjcmVhdGVkQnknIH0sXG4gICAgeyBuYW1lOiAnQ3JlYXRlZCBEYXRlJywgcHJvcDogJ2NyZWF0ZWREYXRlJyB9LFxuICAgIHsgbmFtZTogJ01vZGlmaWVkJywgcHJvcDogJ21vZGlmaWVkQnknIH0sXG4gICAgeyBuYW1lOiAnTW9kaWZpZWQgRGF0ZScsIHByb3A6ICdtb2RpZmllZERhdGUnIH0sXG4gICAgeyBuYW1lOiAnQWN0aXZlJywgcHJvcDogJ2FjdGl2ZScgfSxcbiAgXTtcbiAgcHVibGljIGV4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb2xlU2VydmljZTogUm9sZVNlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3Rvciwge1xuICAgICAgJ2F1dGhvcml0eSc6IFtdLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogW10sXG4gICAgfSk7XG4gICAgdGhpcy5hcGlQYXRoID0gdGhpcy5hcGlbJ3NlY3VyaXR5J11bJ2RhdGF0YWJsZS1yb2xlJ107XG4gICAgdGhpcy5maWx0ZXJzID0gW1xuICAgICAgeyBjb250cm9sTmFtZTogJ2F1dGhvcml0eScsIHR5cGU6ICdpbnB1dCcgfSxcbiAgICAgIHsgY29udHJvbE5hbWU6ICdkZXNjcmlwdGlvbicsIHR5cGU6ICdpbnB1dCcgfV07XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG9uQWRkR3JvdXAoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL21nbXQvcm9sZScsICdhZGQnXSk7XG4gIH1cblxuICBvblZpZXdEZXRhaWwoZGF0YSk6IHZvaWQge1xuICAgIHRoaXMucm9sZVNlcnZpY2Uuc2V0Um9sZShkYXRhKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvbWdtdC9yb2xlJywgJ2VkaXQnXSk7XG4gIH1cblxuICBvblJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9tZ210L3JvbGUnXSk7XG4gIH1cblxuICBiYWNrKCk6IGJvb2xlYW4ge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9tZ210L3JvbGUnXSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn1cbiJdfQ==