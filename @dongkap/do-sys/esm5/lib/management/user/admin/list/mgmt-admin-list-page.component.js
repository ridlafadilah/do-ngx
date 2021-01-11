import { __extends } from "tslib";
import { Component, Injector } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { BaseFilterComponent } from '@dongkap/do-common';
import { ManagementUserService } from '../../services/mgmt-user.service';
var MgmtAdminListPageComponent = /** @class */ (function (_super) {
    __extends(MgmtAdminListPageComponent, _super);
    function MgmtAdminListPageComponent(injector, router, userService) {
        var _this = _super.call(this, injector, {
            'username': [],
            'name': [],
            'phoneNumber': [],
        }) || this;
        _this.injector = injector;
        _this.router = router;
        _this.userService = userService;
        _this.selectionType = SelectionType.single;
        _this.columns = [
            { name: 'Username', prop: 'username', width: 125, frozenLeft: true },
            { name: 'Name', prop: 'name', width: 275, frozenLeft: true },
            { name: 'Email', prop: 'email', width: 225, frozenLeft: true },
            { name: 'Phone Number', prop: 'phoneNumber', width: 150, frozenLeft: true },
            { name: 'Created', prop: 'createdBy' },
            { name: 'Created Date', prop: 'createdDate' },
            { name: 'Modified', prop: 'modifiedBy' },
            { name: 'Modified Date', prop: 'modifiedDate' },
            { name: 'Active', prop: 'active' },
        ];
        _this.expanded = false;
        _this.apiPath = _this.api['security']['datatable-user'];
        _this.filters = [
            { controlName: 'username', type: 'input' },
            { controlName: 'name', type: 'input' },
            { controlName: 'phoneNumber', type: 'input' }
        ];
        _this.keyword = {
            authority: 'ROLE_ADMIN',
        };
        return _this;
    }
    MgmtAdminListPageComponent.prototype.ngOnInit = function () { };
    MgmtAdminListPageComponent.prototype.onViewDetail = function (data) {
        this.userService.setUser(data);
        this.router.navigate(['/app/mgmt/user/admin/detail']);
    };
    MgmtAdminListPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: ManagementUserService }
    ]; };
    MgmtAdminListPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-mgmt-admin-list-page',
                    template: "<do-page-outlet [header]=\"'header.admin-management'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [add]=\"false\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'username'\"\n            [label]=\"'Username'\"\n            formControlName=\"username\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'name'\"\n            [label]=\"'Name'\"\n            formControlName=\"name\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'phoneNumber'\"\n            [label]=\"'Phone Number'\"\n            formControlName=\"phoneNumber\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n",
                    styles: [""]
                },] }
    ];
    MgmtAdminListPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: ManagementUserService }
    ]; };
    return MgmtAdminListPageComponent;
}(BaseFilterComponent));
export { MgmtAdminListPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWdtdC1hZG1pbi1saXN0LXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tc3lzLyIsInNvdXJjZXMiOlsibGliL21hbmFnZW1lbnQvdXNlci9hZG1pbi9saXN0L21nbXQtYWRtaW4tbGlzdC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFDMUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFekU7SUFLZ0QsOENBQXdCO0lBaUJ0RSxvQ0FBbUIsUUFBa0IsRUFBVSxNQUFjLEVBQVUsV0FBa0M7UUFBekcsWUFDRSxrQkFBTSxRQUFRLEVBQUU7WUFDZCxVQUFVLEVBQUUsRUFBRTtZQUNkLE1BQU0sRUFBRSxFQUFFO1lBQ1YsYUFBYSxFQUFFLEVBQUU7U0FDbEIsQ0FBQyxTQVNIO1FBZGtCLGNBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsaUJBQVcsR0FBWCxXQUFXLENBQXVCO1FBZGxHLG1CQUFhLEdBQWtCLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDcEQsYUFBTyxHQUFzQjtZQUNsQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDcEUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDO1lBQzNELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtZQUM5RCxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDM0UsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7WUFDdEMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDN0MsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDeEMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDL0MsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7U0FDbkMsQ0FBQztRQUNLLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFRL0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdEQsS0FBSSxDQUFDLE9BQU8sR0FBRztZQUNiLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1lBQzFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1lBQ3RDLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1NBQUMsQ0FBQztRQUNqRCxLQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsU0FBUyxFQUFFLFlBQVk7U0FDeEIsQ0FBQzs7SUFDSixDQUFDO0lBRUQsNkNBQVEsR0FBUixjQUFrQixDQUFDO0lBRW5CLGlEQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Z0JBckI0QixRQUFRO2dCQUFrQixNQUFNO2dCQUF1QixxQkFBcUI7OztnQkF0QjFHLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUVuQyw2b0NBQW9EOztpQkFDckQ7OztnQkFabUIsUUFBUTtnQkFHbkIsTUFBTTtnQkFHTixxQkFBcUI7O0lBK0M5QixpQ0FBQztDQUFBLEFBN0NELENBS2dELG1CQUFtQixHQXdDbEU7U0F4Q1ksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWxlY3Rpb25UeXBlIH0gZnJvbSAnQHN3aW1sYW5lL25neC1kYXRhdGFibGUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBCYXNlTW9kZWwgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEJhc2VGaWx0ZXJDb21wb25lbnQsIERhdGF0YWJsZUNvbHVtbiB9IGZyb20gJ0Bkb25na2FwL2RvLWNvbW1vbic7XG5pbXBvcnQgeyBNYW5hZ2VtZW50VXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tZ210LXVzZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLW1nbXQtYWRtaW4tbGlzdC1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWdtdC1hZG1pbi1saXN0LXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL21nbXQtYWRtaW4tbGlzdC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTWdtdEFkbWluTGlzdFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlRmlsdGVyQ29tcG9uZW50PGFueT4gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBhcGlQYXRoOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgc2VsZWN0aW9uVHlwZTogU2VsZWN0aW9uVHlwZSA9IFNlbGVjdGlvblR5cGUuc2luZ2xlO1xuICBwdWJsaWMgY29sdW1uczogRGF0YXRhYmxlQ29sdW1uW10gPSBbXG4gICAgeyBuYW1lOiAnVXNlcm5hbWUnLCBwcm9wOiAndXNlcm5hbWUnLCB3aWR0aDogMTI1LCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnTmFtZScsIHByb3A6ICduYW1lJywgd2lkdGg6IDI3NSwgZnJvemVuTGVmdDogdHJ1ZX0sXG4gICAgeyBuYW1lOiAnRW1haWwnLCBwcm9wOiAnZW1haWwnLCB3aWR0aDogMjI1LCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnUGhvbmUgTnVtYmVyJywgcHJvcDogJ3Bob25lTnVtYmVyJywgd2lkdGg6IDE1MCwgZnJvemVuTGVmdDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ0NyZWF0ZWQnLCBwcm9wOiAnY3JlYXRlZEJ5JyB9LFxuICAgIHsgbmFtZTogJ0NyZWF0ZWQgRGF0ZScsIHByb3A6ICdjcmVhdGVkRGF0ZScgfSxcbiAgICB7IG5hbWU6ICdNb2RpZmllZCcsIHByb3A6ICdtb2RpZmllZEJ5JyB9LFxuICAgIHsgbmFtZTogJ01vZGlmaWVkIERhdGUnLCBwcm9wOiAnbW9kaWZpZWREYXRlJyB9LFxuICAgIHsgbmFtZTogJ0FjdGl2ZScsIHByb3A6ICdhY3RpdmUnIH0sXG4gIF07XG4gIHB1YmxpYyBleHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgdXNlclNlcnZpY2U6IE1hbmFnZW1lbnRVc2VyU2VydmljZSkge1xuICAgIHN1cGVyKGluamVjdG9yLCB7XG4gICAgICAndXNlcm5hbWUnOiBbXSxcbiAgICAgICduYW1lJzogW10sXG4gICAgICAncGhvbmVOdW1iZXInOiBbXSxcbiAgICB9KTtcbiAgICB0aGlzLmFwaVBhdGggPSB0aGlzLmFwaVsnc2VjdXJpdHknXVsnZGF0YXRhYmxlLXVzZXInXTtcbiAgICB0aGlzLmZpbHRlcnMgPSBbXG4gICAgICB7IGNvbnRyb2xOYW1lOiAndXNlcm5hbWUnLCB0eXBlOiAnaW5wdXQnIH0sXG4gICAgICB7IGNvbnRyb2xOYW1lOiAnbmFtZScsIHR5cGU6ICdpbnB1dCcgfSxcbiAgICAgIHsgY29udHJvbE5hbWU6ICdwaG9uZU51bWJlcicsIHR5cGU6ICdpbnB1dCcgfV07XG4gICAgdGhpcy5rZXl3b3JkID0ge1xuICAgICAgYXV0aG9yaXR5OiAnUk9MRV9BRE1JTicsXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBvblZpZXdEZXRhaWwoZGF0YSk6IHZvaWQge1xuICAgIHRoaXMudXNlclNlcnZpY2Uuc2V0VXNlcihkYXRhKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvbWdtdC91c2VyL2FkbWluL2RldGFpbCddKTtcbiAgfVxuXG59XG4iXX0=