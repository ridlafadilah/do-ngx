import { Component, Injector, ViewChild } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { BaseFilterComponent } from '@dongkap/do-common';
import { ParameterService } from '../services/parameter.service';
import { ParameterGroupModel } from '../models/parameter.model';
import { ParameterEditGroupCollapseComponent } from '../group/edit-group/parameter-edit-group-collapse.component';
export class ParameterListDetailPageComponent extends BaseFilterComponent {
    constructor(injector, router, parameterService) {
        super(injector, {
            'parameterCode': [],
        }, {
            'parameterGroupCode': [],
            'parameterGroupName': [],
        });
        this.injector = injector;
        this.router = router;
        this.parameterService = parameterService;
        this.selectionType = SelectionType.single;
        this.columns = [
            { name: 'Parameter Code', prop: 'parameterCode', width: 350, frozenLeft: true },
            { name: 'Created', prop: 'createdBy' },
            { name: 'Created Date', prop: 'createdDate' },
            { name: 'Modified', prop: 'modifiedBy' },
            { name: 'Modified Date', prop: 'modifiedDate' },
            { name: 'Active', prop: 'active' },
        ];
        this.parameterGroup = new ParameterGroupModel();
        this.expanded = false;
        if (this.parameterService.getParameterGroup()) {
            this.apiPath = this.api['master']['datatable-parameter'];
            this.filters = [{ controlName: 'parameterCode', type: 'input' }];
            this.parameterGroup = this.parameterService.getParameterGroup();
            this.keyword = {
                parameterGroupCode: this.parameterGroup.parameterGroupCode,
            };
            this.formGroup.get('parameterGroupCode').setValue(this.parameterGroup.parameterGroupCode);
            this.formGroup.get('parameterGroupName').setValue(this.parameterGroup.parameterGroupName);
        }
        else {
            this.router.navigate(['/app/sysconf/parameter']);
        }
    }
    ngOnInit() {
    }
    onAddGroup(event) {
        this.parameterService.setParameter(null);
        this.router.navigate(['/app/sysconf/parameter/detail', 'add']);
    }
    onViewDetail(data) {
        this.parameterService.setParameter({
            parameterGroupCode: data['parameterGroupCode'],
            parameterGroupName: data['parameterGroupName'],
            parameterCode: data['parameterCode'],
        });
        this.router.navigate(['/app/sysconf/parameter/detail', 'edit']);
    }
    onReset() {
        this.router.navigate(['/app/sysconf/parameter']);
    }
    back() {
        this.router.navigate(['/app/sysconf/parameter']);
        return false;
    }
    doExpanded() {
        this.collapse.toggle();
        this.expanded = !this.expanded;
    }
    onSubmit() {
        super.onSubmit(this.formGroup.value, 'master', 'post-parameter-group');
    }
}
ParameterListDetailPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ParameterService }
];
ParameterListDetailPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-parameter-list-detail-page',
                template: "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n        <nav class=\"navigation\">\n            <a href=\"#\" (click)=\"back()\" class=\"link back-link\" aria-label=\"Back\">\n                <nb-icon icon=\"arrow-back\"></nb-icon>\n            </a>\n            {{'Edit Parameter Group' | translate}}\n            <div class=\"link back-link parameter-expanded\">\n              <nb-icon\n                  [icon]=\"expanded ? 'arrow-upward-outline' : 'arrow-downward-outline'\"\n                  (click)=\"doExpanded()\">\n              </nb-icon>\n            </div>\n        </nav>\n      </nb-card-header>\n      <div do-parameter-edit-group-collapse #collapseparameter>\n        <nb-card-body>\n          <div class=\"row\">\n            <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n              <form [formGroup]=\"formGroup\">\n                <do-input-text\n                  [name]=\"'parameterGroupName'\"\n                  [label]=\"'Parameter Group Name'\"\n                  [required]=\"true\"\n                  formControlName=\"parameterGroupName\">\n                </do-input-text>\n                <div class=\"form-group row\">\n                  <div class=\"offset-sm-3 col-sm-9\">\n                    <button\n                      type=\"reset\"\n                      status=\"danger\"\n                      (click)=\"onReset()\"\n                      class=\"reset-left\"\n                      nbButton>\n                      {{ 'Cancel' | translate}}\n                    </button>\n                    <button\n                      type=\"submit\"\n                      status=\"primary\"\n                      (click)=\"onSubmit()\"\n                      [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n                      class=\"submit-right\"\n                      nbButton>\n                      {{ 'Edit' | translate}}\n                    </button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </nb-card-body>\n      </div>\n    </nb-card>\n  </div>\n</div>\n\n<do-page-outlet [url]=\"'/app/sysconf/parameter'\" [header]=\"'header.parameter'\" [param]=\"{value: parameterGroup.parameterGroupName}\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onAdd)=\"onAddGroup($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'parameterCode'\"\n            [label]=\"'Parameter Code'\"\n            formControlName=\"parameterCode\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n",
                styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}.parameter-expanded{position:absolute;right:0;padding:0 1.75rem;cursor:pointer}"]
            },] }
];
ParameterListDetailPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ParameterService }
];
ParameterListDetailPageComponent.propDecorators = {
    collapse: [{ type: ViewChild, args: ['collapseparameter', { static: false },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLWxpc3QtZGV0YWlsLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tc3lzLyIsInNvdXJjZXMiOlsibGliL3BhcmFtZXRlci9kZXRhaWwvcGFyYW1ldGVyLWxpc3QtZGV0YWlsLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRCxPQUFPLEVBQWUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBT2xILE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSxtQkFBd0I7SUFnQjVFLFlBQW1CLFFBQWtCLEVBQVUsTUFBYyxFQUFVLGdCQUFrQztRQUN2RyxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ2QsZUFBZSxFQUFFLEVBQUU7U0FDcEIsRUFBRTtZQUNELG9CQUFvQixFQUFFLEVBQUU7WUFDeEIsb0JBQW9CLEVBQUUsRUFBRTtTQUN6QixDQUFDLENBQUM7UUFOYyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFibEcsa0JBQWEsR0FBa0IsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUNwRCxZQUFPLEdBQWtCO1lBQzlCLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxlQUFl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USxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsQ0FBa0MsQ0FBQztJQUMzRyxDQUFDOzs7WUF0RDRCLFFBQVE7WUFBa0IsTUFBTTtZQUE0QixnQkFBZ0I7OztZQXJCMUcsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBRXpDLDJoR0FBMEQ7O2FBQzNEOzs7WUFmbUIsUUFBUTtZQUduQixNQUFNO1lBSU4sZ0JBQWdCOzs7dUJBdUJ0QixTQUFTLFNBQUMsbUJBQW1CLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYmxlQ29sdW1uLCBTZWxlY3Rpb25UeXBlIH0gZnJvbSAnQHN3aW1sYW5lL25neC1kYXRhdGFibGUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBCYXNlTW9kZWwsIEFwaUJhc2VSZXNwb25zZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQmFzZUZpbHRlckNvbXBvbmVudCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvbW1vbic7XG5pbXBvcnQgeyBQYXJhbWV0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcGFyYW1ldGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFyYW1ldGVyR3JvdXBNb2RlbCB9IGZyb20gJy4uL21vZGVscy9wYXJhbWV0ZXIubW9kZWwnO1xuaW1wb3J0IHsgUGFyYW1ldGVyRWRpdEdyb3VwQ29sbGFwc2VDb21wb25lbnQgfSBmcm9tICcuLi9ncm91cC9lZGl0LWdyb3VwL3BhcmFtZXRlci1lZGl0LWdyb3VwLWNvbGxhcHNlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLXBhcmFtZXRlci1saXN0LWRldGFpbC1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFyYW1ldGVyLWxpc3QtZGV0YWlsLXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhcmFtZXRlci1saXN0LWRldGFpbC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyTGlzdERldGFpbFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlRmlsdGVyQ29tcG9uZW50PGFueT4gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBhcGlQYXRoOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgc2VsZWN0aW9uVHlwZTogU2VsZWN0aW9uVHlwZSA9IFNlbGVjdGlvblR5cGUuc2luZ2xlO1xuICBwdWJsaWMgY29sdW1uczogVGFibGVDb2x1bW5bXSA9IFtcbiAgICB7IG5hbWU6ICdQYXJhbWV0ZXIgQ29kZScsIHByb3A6ICdwYXJhbWV0ZXJDb2RlJywgd2lkdGg6IDM1MCwgZnJvemVuTGVmdDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ0NyZWF0ZWQnLCBwcm9wOiAnY3JlYXRlZEJ5JyB9LFxuICAgIHsgbmFtZTogJ0NyZWF0ZWQgRGF0ZScsIHByb3A6ICdjcmVhdGVkRGF0ZScgfSxcbiAgICB7IG5hbWU6ICdNb2RpZmllZCcsIHByb3A6ICdtb2RpZmllZEJ5JyB9LFxuICAgIHsgbmFtZTogJ01vZGlmaWVkIERhdGUnLCBwcm9wOiAnbW9kaWZpZWREYXRlJyB9LFxuICAgIHsgbmFtZTogJ0FjdGl2ZScsIHByb3A6ICdhY3RpdmUnIH0sXG4gIF07XG4gIHB1YmxpYyBwYXJhbWV0ZXJHcm91cDogUGFyYW1ldGVyR3JvdXBNb2RlbCA9IG5ldyBQYXJhbWV0ZXJHcm91cE1vZGVsKCk7XG4gIHB1YmxpYyBleHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCdjb2xsYXBzZXBhcmFtZXRlcicsIHtzdGF0aWM6IGZhbHNlfSkgY29sbGFwc2U6IFBhcmFtZXRlckVkaXRHcm91cENvbGxhcHNlQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGFyYW1ldGVyU2VydmljZTogUGFyYW1ldGVyU2VydmljZSkge1xuICAgIHN1cGVyKGluamVjdG9yLCB7XG4gICAgICAncGFyYW1ldGVyQ29kZSc6IFtdLFxuICAgIH0sIHtcbiAgICAgICdwYXJhbWV0ZXJHcm91cENvZGUnOiBbXSxcbiAgICAgICdwYXJhbWV0ZXJHcm91cE5hbWUnOiBbXSxcbiAgICB9KTtcbiAgICBpZiAodGhpcy5wYXJhbWV0ZXJTZXJ2aWNlLmdldFBhcmFtZXRlckdyb3VwKCkpIHtcbiAgICAgIHRoaXMuYXBpUGF0aCA9IHRoaXMuYXBpWydtYXN0ZXInXVsnZGF0YXRhYmxlLXBhcmFtZXRlciddO1xuICAgICAgdGhpcy5maWx0ZXJzID0gW3sgY29udHJvbE5hbWU6ICdwYXJhbWV0ZXJDb2RlJywgdHlwZTogJ2lucHV0JyB9XTtcbiAgICAgIHRoaXMucGFyYW1ldGVyR3JvdXAgPSB0aGlzLnBhcmFtZXRlclNlcnZpY2UuZ2V0UGFyYW1ldGVyR3JvdXAoKTtcbiAgICAgIHRoaXMua2V5d29yZCA9IHtcbiAgICAgICAgcGFyYW1ldGVyR3JvdXBDb2RlOiB0aGlzLnBhcmFtZXRlckdyb3VwLnBhcmFtZXRlckdyb3VwQ29kZSxcbiAgICAgIH07XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3BhcmFtZXRlckdyb3VwQ29kZScpLnNldFZhbHVlKHRoaXMucGFyYW1ldGVyR3JvdXAucGFyYW1ldGVyR3JvdXBDb2RlKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgncGFyYW1ldGVyR3JvdXBOYW1lJykuc2V0VmFsdWUodGhpcy5wYXJhbWV0ZXJHcm91cC5wYXJhbWV0ZXJHcm91cE5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9wYXJhbWV0ZXInXSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBvbkFkZEdyb3VwKGV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5wYXJhbWV0ZXJTZXJ2aWNlLnNldFBhcmFtZXRlcihudWxsKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9wYXJhbWV0ZXIvZGV0YWlsJywgJ2FkZCddKTtcbiAgfVxuXG4gIG9uVmlld0RldGFpbChkYXRhKTogdm9pZCB7XG4gICAgdGhpcy5wYXJhbWV0ZXJTZXJ2aWNlLnNldFBhcmFtZXRlcih7XG4gICAgICBwYXJhbWV0ZXJHcm91cENvZGU6IGRhdGFbJ3BhcmFtZXRlckdyb3VwQ29kZSddLFxuICAgICAgcGFyYW1ldGVyR3JvdXBOYW1lOiBkYXRhWydwYXJhbWV0ZXJHcm91cE5hbWUnXSxcbiAgICAgIHBhcmFtZXRlckNvZGU6IGRhdGFbJ3BhcmFtZXRlckNvZGUnXSxcbiAgICB9KTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9wYXJhbWV0ZXIvZGV0YWlsJywgJ2VkaXQnXSk7XG4gIH1cblxuICBvblJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9zeXNjb25mL3BhcmFtZXRlciddKTtcbiAgfVxuXG4gIGJhY2soKTogYm9vbGVhbiB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL3N5c2NvbmYvcGFyYW1ldGVyJ10pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGRvRXhwYW5kZWQoKTogdm9pZCB7XG4gICAgdGhpcy5jb2xsYXBzZS50b2dnbGUoKTtcbiAgICB0aGlzLmV4cGFuZGVkID0gIXRoaXMuZXhwYW5kZWQ7XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICAoc3VwZXIub25TdWJtaXQodGhpcy5mb3JtR3JvdXAudmFsdWUsICdtYXN0ZXInLCAncG9zdC1wYXJhbWV0ZXItZ3JvdXAnKSAgYXMgT2JzZXJ2YWJsZTxBcGlCYXNlUmVzcG9uc2U+KTtcbiAgfVxuXG59XG4iXX0=