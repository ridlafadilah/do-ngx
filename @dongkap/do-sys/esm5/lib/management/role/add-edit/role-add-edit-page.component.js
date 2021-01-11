import { __extends } from "tslib";
import { Component, Injector } from '@angular/core';
;
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { ResponseCode } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-common';
import { RoleService } from '../services/role.service';
var RoleAddEditPageComponent = /** @class */ (function (_super) {
    __extends(RoleAddEditPageComponent, _super);
    function RoleAddEditPageComponent(injector, router, route, roleService) {
        var _this = _super.call(this, injector, {
            'authority': [],
            'description': [],
        }) || this;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.roleService = roleService;
        _this.action = 'Add';
        _this.dataDefault = [
            {
                selected: false,
            },
        ];
        if ((_this.route.snapshot.params['action'] === 'edit')) {
            _this.action = 'Edit';
            if (!_this.roleService.getRole()) {
                _this.router.navigate(['/app/mgmt/role']);
            }
        }
        if (_this.roleService.getRole() && (_this.route.snapshot.params['action'] === 'edit')) {
            _this.formGroup.get('authority').setValue(_this.roleService.getRole().authority);
            _this.formGroup.get('description').setValue(_this.roleService.getRole().description);
        }
        return _this;
    }
    RoleAddEditPageComponent.prototype.ngOnInit = function () { };
    RoleAddEditPageComponent.prototype.onReset = function () {
        this.router.navigate(['/app/mgmt/role']);
    };
    RoleAddEditPageComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = {
            authority: this.formGroup.get('authority').value,
            description: this.formGroup.get('description').value,
        };
        _super.prototype.onSubmit.call(this, data, 'security', 'post-role')
            .pipe(takeUntil(this.destroy$))
            .subscribe(function (response) {
            if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                _this.router.navigate(['/app/mgmt/role']);
            }
        });
    };
    RoleAddEditPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: ActivatedRoute },
        { type: RoleService }
    ]; };
    RoleAddEditPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-language-add-edit-page',
                    template: "<do-page-outlet [header]=\"'header.'+action+'-role'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'authority'\"\n          [label]=\"'Authority'\"\n          [required]=\"true\"\n          formControlName=\"authority\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'description'\"\n          [label]=\"'Description'\"\n          [required]=\"true\"\n          formControlName=\"description\">\n        </do-input-text>\n        <div class=\"form-group row\">\n          <div class=\"offset-sm-3 col-sm-9\">\n            <button\n              type=\"reset\"\n              status=\"danger\"\n              (click)=\"onReset()\"\n              class=\"reset-left\"\n              nbButton>\n              {{ 'Cancel' | translate}}\n            </button>\n            <button\n              type=\"submit\"\n              status=\"primary\"\n              (click)=\"onSubmit()\"\n              [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n              class=\"submit-right\"\n              nbButton>\n              {{ action | translate}}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</do-page-outlet>\n",
                    styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}"]
                },] }
    ];
    RoleAddEditPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: ActivatedRoute },
        { type: RoleService }
    ]; };
    return RoleAddEditPageComponent;
}(BaseFormComponent));
export { RoleAddEditPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS1hZGQtZWRpdC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9tYW5hZ2VtZW50L3JvbGUvYWRkLWVkaXQvcm9sZS1hZGQtZWRpdC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDYixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBbUIsWUFBWSxFQUFhLE1BQU0sa0JBQWtCLENBQUM7QUFDNUUsT0FBTyxFQUFFLGlCQUFpQixFQUFpQixNQUFNLG9CQUFvQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV2RDtJQUs4Qyw0Q0FBc0I7SUFRbEUsa0NBQW1CLFFBQWtCLEVBQzNCLE1BQWMsRUFDZCxLQUFxQixFQUNyQixXQUF3QjtRQUhsQyxZQUlFLGtCQUFNLFFBQVEsRUFDWjtZQUNFLFdBQVcsRUFBRSxFQUFFO1lBQ2YsYUFBYSxFQUFFLEVBQUU7U0FDbEIsQ0FBQyxTQVdMO1FBbkJrQixjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQzNCLFlBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVQzQixZQUFNLEdBQW1CLEtBQUssQ0FBQztRQUMvQixpQkFBVyxHQUFvQjtZQUNwQztnQkFDRSxRQUFRLEVBQUUsS0FBSzthQUNoQjtTQUNGLENBQUM7UUFVQSxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxFQUFFO1lBQ3JELEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUMvQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQzthQUMxQztTQUNGO1FBQ0QsSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxFQUFFO1lBQ25GLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQy9FLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3BGOztJQUNILENBQUM7SUFFRCwyQ0FBUSxHQUFSLGNBQWtCLENBQUM7SUFFbkIsMENBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQUEsaUJBWUM7UUFYQyxJQUFNLElBQUksR0FBYztZQUN0QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSztZQUNoRCxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSztTQUNyRCxDQUFDO1FBQ0QsaUJBQU0sUUFBUSxZQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFrQzthQUM1RSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsVUFBQSxRQUFRO1lBQ2pCLElBQUksUUFBUSxDQUFDLGNBQWMsS0FBSyxZQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUNsRSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQzthQUMxQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7Z0JBdkM0QixRQUFRO2dCQUNuQixNQUFNO2dCQUNQLGNBQWM7Z0JBQ1IsV0FBVzs7O2dCQWhCbkMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBRXJDLDR6Q0FBa0Q7O2lCQUNuRDs7O2dCQWJtQixRQUFRO2dCQUVuQixNQUFNO2dCQUFFLGNBQWM7Z0JBS3RCLFdBQVc7O0lBd0RwQiwrQkFBQztDQUFBLEFBdERELENBSzhDLGlCQUFpQixHQWlEOUQ7U0FqRFksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7O1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBcGlCYXNlUmVzcG9uc2UsIFJlc3BvbnNlQ29kZSwgUm9sZU1vZGVsIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBCYXNlRm9ybUNvbXBvbmVudCwgQ2hlY2tib3hNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvbW1vbic7XG5pbXBvcnQgeyBSb2xlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3JvbGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWxhbmd1YWdlLWFkZC1lZGl0LXBhZ2UnLFxuICBzdHlsZVVybHM6IFsnLi9yb2xlLWFkZC1lZGl0LXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3JvbGUtYWRkLWVkaXQtcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFJvbGVBZGRFZGl0UGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGb3JtQ29tcG9uZW50PGFueT4gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBhY3Rpb246ICdBZGQnIHwgJ0VkaXQnID0gJ0FkZCc7XG4gIHB1YmxpYyBkYXRhRGVmYXVsdDogQ2hlY2tib3hNb2RlbFtdID0gW1xuICAgIHtcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICB9LFxuICBdO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb2xlU2VydmljZTogUm9sZVNlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3RvcixcbiAgICAgIHtcbiAgICAgICAgJ2F1dGhvcml0eSc6IFtdLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiBbXSxcbiAgICAgIH0pO1xuICAgIGlmICgodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2FjdGlvbiddID09PSAnZWRpdCcpKSB7XG4gICAgICB0aGlzLmFjdGlvbiA9ICdFZGl0JztcbiAgICAgIGlmICghdGhpcy5yb2xlU2VydmljZS5nZXRSb2xlKCkpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL21nbXQvcm9sZSddKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMucm9sZVNlcnZpY2UuZ2V0Um9sZSgpICYmICh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snYWN0aW9uJ10gPT09ICdlZGl0JykpIHtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnYXV0aG9yaXR5Jykuc2V0VmFsdWUodGhpcy5yb2xlU2VydmljZS5nZXRSb2xlKCkuYXV0aG9yaXR5KTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnZGVzY3JpcHRpb24nKS5zZXRWYWx1ZSh0aGlzLnJvbGVTZXJ2aWNlLmdldFJvbGUoKS5kZXNjcmlwdGlvbik7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gIG9uUmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL21nbXQvcm9sZSddKTtcbiAgfVxuXG4gIG9uU3VibWl0KCk6IHZvaWQge1xuICAgIGNvbnN0IGRhdGE6IFJvbGVNb2RlbCA9IHtcbiAgICAgIGF1dGhvcml0eTogdGhpcy5mb3JtR3JvdXAuZ2V0KCdhdXRob3JpdHknKS52YWx1ZSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ2Rlc2NyaXB0aW9uJykudmFsdWUsXG4gICAgfTtcbiAgICAoc3VwZXIub25TdWJtaXQoZGF0YSwgJ3NlY3VyaXR5JywgJ3Bvc3Qtcm9sZScpICBhcyBPYnNlcnZhYmxlPEFwaUJhc2VSZXNwb25zZT4pXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3BTdGF0dXNDb2RlID09PSBSZXNwb25zZUNvZGUuT0tfREVGQVVMVC50b1N0cmluZygpKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL21nbXQvcm9sZSddKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxufVxuIl19