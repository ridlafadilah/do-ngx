import { __extends } from "tslib";
import { Component, Injector, ViewChild } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { BaseFilterComponent } from '@dongkap/do-common';
import { ParameterService } from '../services/parameter.service';
import { ParameterGroupModel } from '../models/parameter.model';
import { ParameterEditGroupCollapseComponent } from '../group/edit-group/parameter-edit-group-collapse.component';
var ParameterListDetailPageComponent = /** @class */ (function (_super) {
    __extends(ParameterListDetailPageComponent, _super);
    function ParameterListDetailPageComponent(injector, router, parameterService) {
        var _this = _super.call(this, injector, {
            'parameterCode': [],
        }, {
            'parameterGroupCode': [],
            'parameterGroupName': [],
        }) || this;
        _this.injector = injector;
        _this.router = router;
        _this.parameterService = parameterService;
        _this.selectionType = SelectionType.single;
        _this.columns = [
            { name: 'Parameter Code', prop: 'parameterCode', width: 350, frozenLeft: true },
            { name: 'Created', prop: 'createdBy' },
            { name: 'Created Date', prop: 'createdDate' },
            { name: 'Modified', prop: 'modifiedBy' },
            { name: 'Modified Date', prop: 'modifiedDate' },
            { name: 'Active', prop: 'active' },
        ];
        _this.parameterGroup = new ParameterGroupModel();
        _this.expanded = false;
        if (_this.parameterService.getParameterGroup()) {
            _this.apiPath = _this.api['master']['datatable-parameter'];
            _this.filters = [{ controlName: 'parameterCode', type: 'input' }];
            _this.parameterGroup = _this.parameterService.getParameterGroup();
            _this.keyword = {
                parameterGroupCode: _this.parameterGroup.parameterGroupCode,
            };
            _this.formGroup.get('parameterGroupCode').setValue(_this.parameterGroup.parameterGroupCode);
            _this.formGroup.get('parameterGroupName').setValue(_this.parameterGroup.parameterGroupName);
        }
        else {
            _this.router.navigate(['/app/sysconf/parameter']);
        }
        return _this;
    }
    ParameterListDetailPageComponent.prototype.ngOnInit = function () {
    };
    ParameterListDetailPageComponent.prototype.onAddGroup = function (event) {
        this.parameterService.setParameter(null);
        this.router.navigate(['/app/sysconf/parameter/detail', 'add']);
    };
    ParameterListDetailPageComponent.prototype.onViewDetail = function (data) {
        this.parameterService.setParameter({
            parameterGroupCode: data['parameterGroupCode'],
            parameterGroupName: data['parameterGroupName'],
            parameterCode: data['parameterCode'],
        });
        this.router.navigate(['/app/sysconf/parameter/detail', 'edit']);
    };
    ParameterListDetailPageComponent.prototype.onReset = function () {
        this.router.navigate(['/app/sysconf/parameter']);
    };
    ParameterListDetailPageComponent.prototype.back = function () {
        this.router.navigate(['/app/sysconf/parameter']);
        return false;
    };
    ParameterListDetailPageComponent.prototype.doExpanded = function () {
        this.collapse.toggle();
        this.expanded = !this.expanded;
    };
    ParameterListDetailPageComponent.prototype.onSubmit = function () {
        _super.prototype.onSubmit.call(this, this.formGroup.value, 'master', 'post-parameter-group');
    };
    ParameterListDetailPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: ParameterService }
    ]; };
    ParameterListDetailPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-parameter-list-detail-page',
                    template: "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n        <nav class=\"navigation\">\n            <a href=\"#\" (click)=\"back()\" class=\"link back-link\" aria-label=\"Back\">\n                <nb-icon icon=\"arrow-back\"></nb-icon>\n            </a>\n            {{'Edit Parameter Group' | translate}}\n            <div class=\"link back-link parameter-expanded\">\n              <nb-icon\n                  [icon]=\"expanded ? 'arrow-upward-outline' : 'arrow-downward-outline'\"\n                  (click)=\"doExpanded()\">\n              </nb-icon>\n            </div>\n        </nav>\n      </nb-card-header>\n      <div do-parameter-edit-group-collapse #collapseparameter>\n        <nb-card-body>\n          <div class=\"row\">\n            <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n              <form [formGroup]=\"formGroup\">\n                <do-input-text\n                  [name]=\"'parameterGroupName'\"\n                  [label]=\"'Parameter Group Name'\"\n                  [required]=\"true\"\n                  formControlName=\"parameterGroupName\">\n                </do-input-text>\n                <div class=\"form-group row\">\n                  <div class=\"offset-sm-3 col-sm-9\">\n                    <button\n                      type=\"reset\"\n                      status=\"danger\"\n                      (click)=\"onReset()\"\n                      class=\"reset-left\"\n                      nbButton>\n                      {{ 'Cancel' | translate}}\n                    </button>\n                    <button\n                      type=\"submit\"\n                      status=\"primary\"\n                      (click)=\"onSubmit()\"\n                      [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n                      class=\"submit-right\"\n                      nbButton>\n                      {{ 'Edit' | translate}}\n                    </button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </nb-card-body>\n      </div>\n    </nb-card>\n  </div>\n</div>\n\n<do-page-outlet [url]=\"'/app/sysconf/parameter'\" [header]=\"'header.parameter'\" [param]=\"{value: parameterGroup.parameterGroupName}\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onAdd)=\"onAddGroup($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'parameterCode'\"\n            [label]=\"'Parameter Code'\"\n            formControlName=\"parameterCode\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n",
                    styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}.parameter-expanded{position:absolute;right:0;padding:0 1.75rem;cursor:pointer}"]
                },] }
    ];
    ParameterListDetailPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: ParameterService }
    ]; };
    ParameterListDetailPageComponent.propDecorators = {
        collapse: [{ type: ViewChild, args: ['collapseparameter', { static: false },] }]
    };
    return ParameterListDetailPageComponent;
}(BaseFilterComponent));
export { ParameterListDetailPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLWxpc3QtZGV0YWlsLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tc3lzLyIsInNvdXJjZXMiOlsibGliL3BhcmFtZXRlci9kZXRhaWwvcGFyYW1ldGVyLWxpc3QtZGV0YWlsLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0QsT0FBTyxFQUFlLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUVsSDtJQUtzRCxvREFBd0I7SUFnQjVFLDBDQUFtQixRQUFrQixFQUFVLE1BQWMsRUFBVSxnQkFBa0M7UUFBekcsWUFDRSxrQkFBTSxRQUFRLEVBQUU7WUFDZCxlQUFlLEVBQUUsRUFBRTtTQUNwQixFQUFFO1lBQ0Qsb0JBQW9CLEVBQUUsRUFBRTtZQUN4QixvQkFBb0IsRUFBRSxFQUFFO1NBQ3pCLENBQUMsU0FhSDtRQW5Ca0IsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLFlBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBYmxHLG1CQUFhLEdBQWtCLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDcEQsYUFBTyxHQUFrQjtZQUM5QixFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUss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RUQsbURBQVEsR0FBUjtRQUNHLGlCQUFNLFFBQVEsWUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsc0JBQXNCLENBQWtDLENBQUM7SUFDM0csQ0FBQzs7Z0JBdEQ0QixRQUFRO2dCQUFrQixNQUFNO2dCQUE0QixnQkFBZ0I7OztnQkFyQjFHLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCO29CQUV6QywyaEdBQTBEOztpQkFDM0Q7OztnQkFmbUIsUUFBUTtnQkFHbkIsTUFBTTtnQkFJTixnQkFBZ0I7OzsyQkF1QnRCLFNBQVMsU0FBQyxtQkFBbUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7O0lBMERqRCx1Q0FBQztDQUFBLEFBN0VELENBS3NELG1CQUFtQixHQXdFeEU7U0F4RVksZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYmxlQ29sdW1uLCBTZWxlY3Rpb25UeXBlIH0gZnJvbSAnQHN3aW1sYW5lL25neC1kYXRhdGFibGUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBCYXNlTW9kZWwsIEFwaUJhc2VSZXNwb25zZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQmFzZUZpbHRlckNvbXBvbmVudCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvbW1vbic7XG5pbXBvcnQgeyBQYXJhbWV0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcGFyYW1ldGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFyYW1ldGVyR3JvdXBNb2RlbCB9IGZyb20gJy4uL21vZGVscy9wYXJhbWV0ZXIubW9kZWwnO1xuaW1wb3J0IHsgUGFyYW1ldGVyRWRpdEdyb3VwQ29sbGFwc2VDb21wb25lbnQgfSBmcm9tICcuLi9ncm91cC9lZGl0LWdyb3VwL3BhcmFtZXRlci1lZGl0LWdyb3VwLWNvbGxhcHNlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLXBhcmFtZXRlci1saXN0LWRldGFpbC1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFyYW1ldGVyLWxpc3QtZGV0YWlsLXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhcmFtZXRlci1saXN0LWRldGFpbC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyTGlzdERldGFpbFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlRmlsdGVyQ29tcG9uZW50PGFueT4gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBhcGlQYXRoOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgc2VsZWN0aW9uVHlwZTogU2VsZWN0aW9uVHlwZSA9IFNlbGVjdGlvblR5cGUuc2luZ2xlO1xuICBwdWJsaWMgY29sdW1uczogVGFibGVDb2x1bW5bXSA9IFtcbiAgICB7IG5hbWU6ICdQYXJhbWV0ZXIgQ29kZScsIHByb3A6ICdwYXJhbWV0ZXJDb2RlJywgd2lkdGg6IDM1MCwgZnJvemVuTGVmdDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ0NyZWF0ZWQnLCBwcm9wOiAnY3JlYXRlZEJ5JyB9LFxuICAgIHsgbmFtZTogJ0NyZWF0ZWQgRGF0ZScsIHByb3A6ICdjcmVhdGVkRGF0ZScgfSxcbiAgICB7IG5hbWU6ICdNb2RpZmllZCcsIHByb3A6ICdtb2RpZmllZEJ5JyB9LFxuICAgIHsgbmFtZTogJ01vZGlmaWVkIERhdGUnLCBwcm9wOiAnbW9kaWZpZWREYXRlJyB9LFxuICAgIHsgbmFtZTogJ0FjdGl2ZScsIHByb3A6ICdhY3RpdmUnIH0sXG4gIF07XG4gIHB1YmxpYyBwYXJhbWV0ZXJHcm91cDogUGFyYW1ldGVyR3JvdXBNb2RlbCA9IG5ldyBQYXJhbWV0ZXJHcm91cE1vZGVsKCk7XG4gIHB1YmxpYyBleHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCdjb2xsYXBzZXBhcmFtZXRlcicsIHtzdGF0aWM6IGZhbHNlfSkgY29sbGFwc2U6IFBhcmFtZXRlckVkaXRHcm91cENvbGxhcHNlQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGFyYW1ldGVyU2VydmljZTogUGFyYW1ldGVyU2VydmljZSkge1xuICAgIHN1cGVyKGluamVjdG9yLCB7XG4gICAgICAncGFyYW1ldGVyQ29kZSc6IFtdLFxuICAgIH0sIHtcbiAgICAgICdwYXJhbWV0ZXJHcm91cENvZGUnOiBbXSxcbiAgICAgICdwYXJhbWV0ZXJHcm91cE5hbWUnOiBbXSxcbiAgICB9KTtcbiAgICBpZiAodGhpcy5wYXJhbWV0ZXJTZXJ2aWNlLmdldFBhcmFtZXRlckdyb3VwKCkpIHtcbiAgICAgIHRoaXMuYXBpUGF0aCA9IHRoaXMuYXBpWydtYXN0ZXInXVsnZGF0YXRhYmxlLXBhcmFtZXRlciddO1xuICAgICAgdGhpcy5maWx0ZXJzID0gW3sgY29udHJvbE5hbWU6ICdwYXJhbWV0ZXJDb2RlJywgdHlwZTogJ2lucHV0JyB9XTtcbiAgICAgIHRoaXMucGFyYW1ldGVyR3JvdXAgPSB0aGlzLnBhcmFtZXRlclNlcnZpY2UuZ2V0UGFyYW1ldGVyR3JvdXAoKTtcbiAgICAgIHRoaXMua2V5d29yZCA9IHtcbiAgICAgICAgcGFyYW1ldGVyR3JvdXBDb2RlOiB0aGlzLnBhcmFtZXRlckdyb3VwLnBhcmFtZXRlckdyb3VwQ29kZSxcbiAgICAgIH07XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3BhcmFtZXRlckdyb3VwQ29kZScpLnNldFZhbHVlKHRoaXMucGFyYW1ldGVyR3JvdXAucGFyYW1ldGVyR3JvdXBDb2RlKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgncGFyYW1ldGVyR3JvdXBOYW1lJykuc2V0VmFsdWUodGhpcy5wYXJhbWV0ZXJHcm91cC5wYXJhbWV0ZXJHcm91cE5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9wYXJhbWV0ZXInXSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBvbkFkZEdyb3VwKGV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5wYXJhbWV0ZXJTZXJ2aWNlLnNldFBhcmFtZXRlcihudWxsKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9wYXJhbWV0ZXIvZGV0YWlsJywgJ2FkZCddKTtcbiAgfVxuXG4gIG9uVmlld0RldGFpbChkYXRhKTogdm9pZCB7XG4gICAgdGhpcy5wYXJhbWV0ZXJTZXJ2aWNlLnNldFBhcmFtZXRlcih7XG4gICAgICBwYXJhbWV0ZXJHcm91cENvZGU6IGRhdGFbJ3BhcmFtZXRlckdyb3VwQ29kZSddLFxuICAgICAgcGFyYW1ldGVyR3JvdXBOYW1lOiBkYXRhWydwYXJhbWV0ZXJHcm91cE5hbWUnXSxcbiAgICAgIHBhcmFtZXRlckNvZGU6IGRhdGFbJ3BhcmFtZXRlckNvZGUnXSxcbiAgICB9KTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9wYXJhbWV0ZXIvZGV0YWlsJywgJ2VkaXQnXSk7XG4gIH1cblxuICBvblJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9zeXNjb25mL3BhcmFtZXRlciddKTtcbiAgfVxuXG4gIGJhY2soKTogYm9vbGVhbiB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL3N5c2NvbmYvcGFyYW1ldGVyJ10pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGRvRXhwYW5kZWQoKTogdm9pZCB7XG4gICAgdGhpcy5jb2xsYXBzZS50b2dnbGUoKTtcbiAgICB0aGlzLmV4cGFuZGVkID0gIXRoaXMuZXhwYW5kZWQ7XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICAoc3VwZXIub25TdWJtaXQodGhpcy5mb3JtR3JvdXAudmFsdWUsICdtYXN0ZXInLCAncG9zdC1wYXJhbWV0ZXItZ3JvdXAnKSAgYXMgT2JzZXJ2YWJsZTxBcGlCYXNlUmVzcG9uc2U+KTtcbiAgfVxuXG59XG4iXX0=