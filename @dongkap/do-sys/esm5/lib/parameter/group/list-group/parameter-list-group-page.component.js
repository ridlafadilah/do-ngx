import { __extends } from "tslib";
import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { NbDialogService, NbDialogRef } from '@nebular/theme';
import { BaseFilterComponent } from '@dongkap/do-common';
import { ParameterService } from '../../services/parameter.service';
var ParameterListGroupPageComponent = /** @class */ (function (_super) {
    __extends(ParameterListGroupPageComponent, _super);
    function ParameterListGroupPageComponent(injector, router, parameterService, dialogService) {
        var _this = _super.call(this, injector, {
            'parameterGroupCode': [],
            'parameterGroupName': [],
        }) || this;
        _this.injector = injector;
        _this.router = router;
        _this.parameterService = parameterService;
        _this.dialogService = dialogService;
        _this.columns = [
            { name: 'Parameter Group Code', prop: 'parameterGroupCode', width: 220, frozenLeft: true },
            { name: 'Parameter Group Name', prop: 'parameterGroupName', width: 200, frozenLeft: true },
            { name: 'Created', prop: 'createdBy' },
            { name: 'Created Date', prop: 'createdDate' },
            { name: 'Modified', prop: 'modifiedBy' },
            { name: 'Modified Date', prop: 'modifiedDate' },
            { name: 'Active', prop: 'active' },
        ];
        _this.reload = false;
        _this.filters = [
            { controlName: 'parameterGroupCode', type: 'input' },
            { controlName: 'parameterGroupName', type: 'input' }
        ];
        _this.apiPath = _this.api['master']['datatable-parameter-group'];
        _this.apiPathLocale = _this.api['master']['all-locale'];
        _this.apiPathDelete = _this.api['master']['delete-parameter-group'];
        return _this;
    }
    ParameterListGroupPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.HTTP_AUTH(this.apiPathLocale).subscribe(function (value) {
            _this.parameterService.setLocales(value);
        });
    };
    ParameterListGroupPageComponent.prototype.onAddGroup = function () {
        this.router.navigate(['/app/sysconf/parameter/group', 'add']);
    };
    ParameterListGroupPageComponent.prototype.onViewDetail = function (data) {
        this.parameterService.setParameterGroup({
            parameterGroupCode: data['parameterGroupCode'],
            parameterGroupName: data['parameterGroupName'],
        });
        this.router.navigate(['/app/sysconf/parameter/detail']);
    };
    ParameterListGroupPageComponent.prototype.onDeleteGroup = function (data, dialog) {
        var _this = this;
        this.parameterGroupCodes = [];
        data.forEach(function (value) {
            _this.parameterGroupCodes.push(value.parameterGroupCode);
        });
        this.dialogService.open(dialog, { context: 'alert.delete' });
    };
    ParameterListGroupPageComponent.prototype.onDelete = function (ref) {
        var _this = this;
        this.disabled = true;
        this.http.HTTP_AUTH(this.apiPathDelete, this.parameterGroupCodes)
            .pipe(takeUntil(this.destroy$))
            .subscribe(function (success) {
            ref.close();
            _this.disabled = false;
            _this.reload = true;
            _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
        }, function (error) {
            _this.disabled = false;
            _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
    };
    ParameterListGroupPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: ParameterService },
        { type: NbDialogService }
    ]; };
    ParameterListGroupPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-parameter-list-group-page',
                    template: "<do-page-outlet [header]=\"'Parameter Group'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [reloadFn]=\"reload\"\n        (onAdd)=\"onAddGroup()\"\n        (onEdit)=\"onViewDetail($event)\"\n        (onDelete)=\"onDeleteGroup($event, dialogdelete)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'parameterGroupCode'\"\n            [label]=\"'Parameter Group Code'\"\n            formControlName=\"parameterGroupCode\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'parameterGroupName'\"\n            [label]=\"'Parameter Group Name'\"\n            formControlName=\"parameterGroupName\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n\n<ng-template #dialogdelete let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <div class=\"row\">\n        <button\n          type=\"reset\"\n          status=\"danger\"\n          (click)=\"ref.close()\"\n          class=\"reset-left\"\n          nbButton>\n          {{ 'Cancel' | translate}}\n        </button>\n        <button\n          type=\"submit\"\n          status=\"primary\"\n          (click)=\"onDelete(ref)\"\n          [disabled]=\"disabled\"\n          class=\"submit-right\"\n          nbButton>\n          {{ 'Delete' | translate}}\n        </button>\n      </div>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>",
                    styles: [".reset-left{margin-left:1rem;margin-right:.5rem}.submit-right{margin-left:.5rem}"]
                },] }
    ];
    ParameterListGroupPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: ParameterService },
        { type: NbDialogService }
    ]; };
    return ParameterListGroupPageComponent;
}(BaseFilterComponent));
export { ParameterListGroupPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLWxpc3QtZ3JvdXAtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1zeXMvIiwic291cmNlcyI6WyJsaWIvcGFyYW1ldGVyL2dyb3VwL2xpc3QtZ3JvdXAvcGFyYW1ldGVyLWxpc3QtZ3JvdXAtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVwRTtJQUtxRCxtREFBd0I7SUFpQjNFLHlDQUFtQixRQUFrQixFQUMzQixNQUFjLEVBQ2QsZ0JBQWtDLEVBQ2xDLGFBQThCO1FBSHhDLFlBSUUsa0JBQU0sUUFBUSxFQUFFO1lBQ2Qsb0JBQW9CLEVBQUUsRUFBRTtZQUN4QixvQkFBb0IsRUFBRSxFQUFFO1NBQ3pCLENBQUMsU0FPSDtRQWRrQixjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQzNCLFlBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFhLEdBQWIsYUFBYSxDQUFpQjtRQWZqQyxhQUFPLEdBQWtCO1lBQzlCLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDMUYsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtZQUMxRixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtZQUN0QyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUM3QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUN4QyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUMvQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtTQUNuQyxDQUFDO1FBQ0ssWUFBTSxHQUFZLEtBQUssQ0FBQztRQVc3QixLQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUNwRCxFQUFFLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1NBQUMsQ0FBQztRQUN4RCxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUMvRCxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEQsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUM7O0lBQ3BFLENBQUM7SUFFRCxrREFBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUNyRCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9EQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLDhCQUE4QixFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELHNEQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDO1lBQ3RDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUM5QyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUM7U0FDL0MsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELHVEQUFhLEdBQWIsVUFBYyxJQUFJLEVBQUUsTUFBd0I7UUFBNUMsaUJBUUM7UUFQQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO1lBQ2hCLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDckIsTUFBTSxFQUNOLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGtEQUFRLEdBQVIsVUFBUyxHQUFxQjtRQUE5QixpQkFnQkM7UUFmQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQzthQUM5RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQ1IsVUFBQyxPQUF3QjtZQUN2QixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDWixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hGLENBQUMsRUFDRCxVQUFDLEtBQXNCO1lBQ3JCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM1RixDQUFDLENBQ0osQ0FBQztJQUNKLENBQUM7O2dCQTVENEIsUUFBUTtnQkFDbkIsTUFBTTtnQkFDSSxnQkFBZ0I7Z0JBQ25CLGVBQWU7OztnQkF6QnpDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUV4Qyw0d0RBQXlEOztpQkFDMUQ7OztnQkFmbUIsUUFBUTtnQkFHbkIsTUFBTTtnQkFNTixnQkFBZ0I7Z0JBSGhCLGVBQWU7O0lBeUZ4QixzQ0FBQztDQUFBLEFBcEZELENBS3FELG1CQUFtQixHQStFdkU7U0EvRVksK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRhYmxlQ29sdW1uIH0gZnJvbSAnQHN3aW1sYW5lL25neC1kYXRhdGFibGUnO1xuaW1wb3J0IHsgTmJEaWFsb2dTZXJ2aWNlLCBOYkRpYWxvZ1JlZiB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IEh0dHBCYXNlTW9kZWwsIEFwaUJhc2VSZXNwb25zZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQmFzZUZpbHRlckNvbXBvbmVudCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvbW1vbic7XG5pbXBvcnQgeyBQYXJhbWV0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcGFyYW1ldGVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1wYXJhbWV0ZXItbGlzdC1ncm91cC1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFyYW1ldGVyLWxpc3QtZ3JvdXAtcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFyYW1ldGVyLWxpc3QtZ3JvdXAtcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlckxpc3RHcm91cFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlRmlsdGVyQ29tcG9uZW50PGFueT4gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBhcGlQYXRoOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgYXBpUGF0aExvY2FsZTogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIGFwaVBhdGhEZWxldGU6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBjb2x1bW5zOiBUYWJsZUNvbHVtbltdID0gW1xuICAgIHsgbmFtZTogJ1BhcmFtZXRlciBHcm91cCBDb2RlJywgcHJvcDogJ3BhcmFtZXRlckdyb3VwQ29kZScsIHdpZHRoOiAyMjAsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdQYXJhbWV0ZXIgR3JvdXAgTmFtZScsIHByb3A6ICdwYXJhbWV0ZXJHcm91cE5hbWUnLCB3aWR0aDogMjAwLCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnQ3JlYXRlZCcsIHByb3A6ICdjcmVhdGVkQnknIH0sXG4gICAgeyBuYW1lOiAnQ3JlYXRlZCBEYXRlJywgcHJvcDogJ2NyZWF0ZWREYXRlJyB9LFxuICAgIHsgbmFtZTogJ01vZGlmaWVkJywgcHJvcDogJ21vZGlmaWVkQnknIH0sXG4gICAgeyBuYW1lOiAnTW9kaWZpZWQgRGF0ZScsIHByb3A6ICdtb2RpZmllZERhdGUnIH0sXG4gICAgeyBuYW1lOiAnQWN0aXZlJywgcHJvcDogJ2FjdGl2ZScgfSxcbiAgXTtcbiAgcHVibGljIHJlbG9hZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHBhcmFtZXRlckdyb3VwQ29kZXM6IGFueVtdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHBhcmFtZXRlclNlcnZpY2U6IFBhcmFtZXRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBOYkRpYWxvZ1NlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3Rvciwge1xuICAgICAgJ3BhcmFtZXRlckdyb3VwQ29kZSc6IFtdLFxuICAgICAgJ3BhcmFtZXRlckdyb3VwTmFtZSc6IFtdLFxuICAgIH0pO1xuICAgIHRoaXMuZmlsdGVycyA9IFtcbiAgICAgIHsgY29udHJvbE5hbWU6ICdwYXJhbWV0ZXJHcm91cENvZGUnLCB0eXBlOiAnaW5wdXQnIH0sXG4gICAgICB7IGNvbnRyb2xOYW1lOiAncGFyYW1ldGVyR3JvdXBOYW1lJywgdHlwZTogJ2lucHV0JyB9XTtcbiAgICB0aGlzLmFwaVBhdGggPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ2RhdGF0YWJsZS1wYXJhbWV0ZXItZ3JvdXAnXTtcbiAgICB0aGlzLmFwaVBhdGhMb2NhbGUgPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ2FsbC1sb2NhbGUnXTtcbiAgICB0aGlzLmFwaVBhdGhEZWxldGUgPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ2RlbGV0ZS1wYXJhbWV0ZXItZ3JvdXAnXTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaHR0cC5IVFRQX0FVVEgodGhpcy5hcGlQYXRoTG9jYWxlKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgdGhpcy5wYXJhbWV0ZXJTZXJ2aWNlLnNldExvY2FsZXModmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgb25BZGRHcm91cCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9wYXJhbWV0ZXIvZ3JvdXAnLCAnYWRkJ10pO1xuICB9XG5cbiAgb25WaWV3RGV0YWlsKGRhdGEpOiB2b2lkIHtcbiAgICB0aGlzLnBhcmFtZXRlclNlcnZpY2Uuc2V0UGFyYW1ldGVyR3JvdXAoe1xuICAgICAgcGFyYW1ldGVyR3JvdXBDb2RlOiBkYXRhWydwYXJhbWV0ZXJHcm91cENvZGUnXSxcbiAgICAgIHBhcmFtZXRlckdyb3VwTmFtZTogZGF0YVsncGFyYW1ldGVyR3JvdXBOYW1lJ10sXG4gICAgfSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL3N5c2NvbmYvcGFyYW1ldGVyL2RldGFpbCddKTtcbiAgfVxuXG4gIG9uRGVsZXRlR3JvdXAoZGF0YSwgZGlhbG9nOiBUZW1wbGF0ZVJlZjxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5wYXJhbWV0ZXJHcm91cENvZGVzID0gW107XG4gICAgZGF0YS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgIHRoaXMucGFyYW1ldGVyR3JvdXBDb2Rlcy5wdXNoKHZhbHVlLnBhcmFtZXRlckdyb3VwQ29kZSk7XG4gICAgfSk7XG4gICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oXG4gICAgICBkaWFsb2csXG4gICAgICB7IGNvbnRleHQ6ICdhbGVydC5kZWxldGUnIH0pO1xuICB9XG5cbiAgb25EZWxldGUocmVmOiBOYkRpYWxvZ1JlZjxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5odHRwLkhUVFBfQVVUSCh0aGlzLmFwaVBhdGhEZWxldGUsIHRoaXMucGFyYW1ldGVyR3JvdXBDb2RlcylcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChzdWNjZXNzOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICByZWYuY2xvc2UoKTtcbiAgICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5yZWxvYWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKHN1Y2Nlc3MucmVzcFN0YXR1c01lc3NhZ2Vbc3VjY2Vzcy5yZXNwU3RhdHVzQ29kZV0sIHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3I6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihlcnJvci5yZXNwU3RhdHVzTWVzc2FnZVtlcnJvci5yZXNwU3RhdHVzQ29kZV0sIHRydWUsIG51bGwsICdkYW5nZXInKTtcbiAgICAgICAgfSxcbiAgICApO1xuICB9XG5cbn1cbiJdfQ==