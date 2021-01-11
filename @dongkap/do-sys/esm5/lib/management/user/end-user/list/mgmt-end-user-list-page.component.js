import { __extends } from "tslib";
import { Component, Injector } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { BaseFilterComponent } from '@dongkap/do-common';
import { ManagementUserService } from '../../services/mgmt-user.service';
var MgmtEndUserListPageComponent = /** @class */ (function (_super) {
    __extends(MgmtEndUserListPageComponent, _super);
    function MgmtEndUserListPageComponent(injector, router, userService) {
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
            authority: 'ROLE_END',
        };
        return _this;
    }
    MgmtEndUserListPageComponent.prototype.ngOnInit = function () { };
    MgmtEndUserListPageComponent.prototype.onViewDetail = function (data) {
        this.userService.setUser(data);
        this.router.navigate(['/app/mgmt/user/end/detail']);
    };
    MgmtEndUserListPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: ManagementUserService }
    ]; };
    MgmtEndUserListPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-mgmt-end-user-list-page',
                    template: "<do-page-outlet [header]=\"'header.user-management'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [add]=\"false\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'username'\"\n            [label]=\"'Username'\"\n            formControlName=\"username\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'name'\"\n            [label]=\"'Name'\"\n            formControlName=\"name\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'phoneNumber'\"\n            [label]=\"'Phone Number'\"\n            formControlName=\"phoneNumber\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n",
                    styles: [""]
                },] }
    ];
    MgmtEndUserListPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: ManagementUserService }
    ]; };
    return MgmtEndUserListPageComponent;
}(BaseFilterComponent));
export { MgmtEndUserListPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWdtdC1lbmQtdXNlci1saXN0LXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tc3lzLyIsInNvdXJjZXMiOlsibGliL21hbmFnZW1lbnQvdXNlci9lbmQtdXNlci9saXN0L21nbXQtZW5kLXVzZXItbGlzdC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFDMUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFekU7SUFLa0QsZ0RBQXdCO0lBaUJ4RSxzQ0FBbUIsUUFBa0IsRUFBVSxNQUFjLEVBQVUsV0FBa0M7UUFBekcsWUFDRSxrQkFBTSxRQUFRLEVBQUU7WUFDZCxVQUFVLEVBQUUsRUFBRTtZQUNkLE1BQU0sRUFBRSxFQUFFO1lBQ1YsYUFBYSxFQUFFLEVBQUU7U0FDbEIsQ0FBQyxTQVNIO1FBZGtCLGNBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsaUJBQVcsR0FBWCxXQUFXLENBQXVCO1FBZGxHLG1CQUFhLEdBQWtCLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDcEQsYUFBTyxHQUFzQjtZQUNsQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDcEUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDO1lBQzNELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtZQUM5RCxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDM0UsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7WUFDdEMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDN0MsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDeEMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDL0MsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7U0FDbkMsQ0FBQztRQUNLLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFRL0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdEQsS0FBSSxDQUFDLE9BQU8sR0FBRztZQUNiLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1lBQzFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1lBQ3RDLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1NBQUMsQ0FBQztRQUNqRCxLQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsU0FBUyxFQUFFLFVBQVU7U0FDdEIsQ0FBQzs7SUFDSixDQUFDO0lBRUQsK0NBQVEsR0FBUixjQUFrQixDQUFDO0lBRW5CLG1EQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Z0JBckI0QixRQUFRO2dCQUFrQixNQUFNO2dCQUF1QixxQkFBcUI7OztnQkF0QjFHLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUV0Qyw0b0NBQXVEOztpQkFDeEQ7OztnQkFabUIsUUFBUTtnQkFHbkIsTUFBTTtnQkFHTixxQkFBcUI7O0lBK0M5QixtQ0FBQztDQUFBLEFBN0NELENBS2tELG1CQUFtQixHQXdDcEU7U0F4Q1ksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWxlY3Rpb25UeXBlIH0gZnJvbSAnQHN3aW1sYW5lL25neC1kYXRhdGFibGUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBCYXNlTW9kZWwgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEJhc2VGaWx0ZXJDb21wb25lbnQsIERhdGF0YWJsZUNvbHVtbiB9IGZyb20gJ0Bkb25na2FwL2RvLWNvbW1vbic7XG5pbXBvcnQgeyBNYW5hZ2VtZW50VXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tZ210LXVzZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLW1nbXQtZW5kLXVzZXItbGlzdC1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWdtdC1lbmQtdXNlci1saXN0LXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL21nbXQtZW5kLXVzZXItbGlzdC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTWdtdEVuZFVzZXJMaXN0UGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGaWx0ZXJDb21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGFwaVBhdGg6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBzZWxlY3Rpb25UeXBlOiBTZWxlY3Rpb25UeXBlID0gU2VsZWN0aW9uVHlwZS5zaW5nbGU7XG4gIHB1YmxpYyBjb2x1bW5zOiBEYXRhdGFibGVDb2x1bW5bXSA9IFtcbiAgICB7IG5hbWU6ICdVc2VybmFtZScsIHByb3A6ICd1c2VybmFtZScsIHdpZHRoOiAxMjUsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdOYW1lJywgcHJvcDogJ25hbWUnLCB3aWR0aDogMjc1LCBmcm96ZW5MZWZ0OiB0cnVlfSxcbiAgICB7IG5hbWU6ICdFbWFpbCcsIHByb3A6ICdlbWFpbCcsIHdpZHRoOiAyMjUsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdQaG9uZSBOdW1iZXInLCBwcm9wOiAncGhvbmVOdW1iZXInLCB3aWR0aDogMTUwLCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnQ3JlYXRlZCcsIHByb3A6ICdjcmVhdGVkQnknIH0sXG4gICAgeyBuYW1lOiAnQ3JlYXRlZCBEYXRlJywgcHJvcDogJ2NyZWF0ZWREYXRlJyB9LFxuICAgIHsgbmFtZTogJ01vZGlmaWVkJywgcHJvcDogJ21vZGlmaWVkQnknIH0sXG4gICAgeyBuYW1lOiAnTW9kaWZpZWQgRGF0ZScsIHByb3A6ICdtb2RpZmllZERhdGUnIH0sXG4gICAgeyBuYW1lOiAnQWN0aXZlJywgcHJvcDogJ2FjdGl2ZScgfSxcbiAgXTtcbiAgcHVibGljIGV4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c2VyU2VydmljZTogTWFuYWdlbWVudFVzZXJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsIHtcbiAgICAgICd1c2VybmFtZSc6IFtdLFxuICAgICAgJ25hbWUnOiBbXSxcbiAgICAgICdwaG9uZU51bWJlcic6IFtdLFxuICAgIH0pO1xuICAgIHRoaXMuYXBpUGF0aCA9IHRoaXMuYXBpWydzZWN1cml0eSddWydkYXRhdGFibGUtdXNlciddO1xuICAgIHRoaXMuZmlsdGVycyA9IFtcbiAgICAgIHsgY29udHJvbE5hbWU6ICd1c2VybmFtZScsIHR5cGU6ICdpbnB1dCcgfSxcbiAgICAgIHsgY29udHJvbE5hbWU6ICduYW1lJywgdHlwZTogJ2lucHV0JyB9LFxuICAgICAgeyBjb250cm9sTmFtZTogJ3Bob25lTnVtYmVyJywgdHlwZTogJ2lucHV0JyB9XTtcbiAgICB0aGlzLmtleXdvcmQgPSB7XG4gICAgICBhdXRob3JpdHk6ICdST0xFX0VORCcsXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBvblZpZXdEZXRhaWwoZGF0YSk6IHZvaWQge1xuICAgIHRoaXMudXNlclNlcnZpY2Uuc2V0VXNlcihkYXRhKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvbWdtdC91c2VyL2VuZC9kZXRhaWwnXSk7XG4gIH1cblxufVxuIl19