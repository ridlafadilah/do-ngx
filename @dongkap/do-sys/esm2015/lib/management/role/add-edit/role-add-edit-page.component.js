import { Component, Injector } from '@angular/core';
;
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { ResponseCode } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-common';
import { RoleService } from '../services/role.service';
export class RoleAddEditPageComponent extends BaseFormComponent {
    constructor(injector, router, route, roleService) {
        super(injector, {
            'authority': [],
            'description': [],
        });
        this.injector = injector;
        this.router = router;
        this.route = route;
        this.roleService = roleService;
        this.action = 'Add';
        this.dataDefault = [
            {
                selected: false,
            },
        ];
        if ((this.route.snapshot.params['action'] === 'edit')) {
            this.action = 'Edit';
            if (!this.roleService.getRole()) {
                this.router.navigate(['/app/mgmt/role']);
            }
        }
        if (this.roleService.getRole() && (this.route.snapshot.params['action'] === 'edit')) {
            this.formGroup.get('authority').setValue(this.roleService.getRole().authority);
            this.formGroup.get('description').setValue(this.roleService.getRole().description);
        }
    }
    ngOnInit() { }
    onReset() {
        this.router.navigate(['/app/mgmt/role']);
    }
    onSubmit() {
        const data = {
            authority: this.formGroup.get('authority').value,
            description: this.formGroup.get('description').value,
        };
        super.onSubmit(data, 'security', 'post-role')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                this.router.navigate(['/app/mgmt/role']);
            }
        });
    }
}
RoleAddEditPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ActivatedRoute },
    { type: RoleService }
];
RoleAddEditPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-language-add-edit-page',
                template: "<do-page-outlet [header]=\"'header.'+action+'-role'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'authority'\"\n          [label]=\"'Authority'\"\n          [required]=\"true\"\n          formControlName=\"authority\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'description'\"\n          [label]=\"'Description'\"\n          [required]=\"true\"\n          formControlName=\"description\">\n        </do-input-text>\n        <div class=\"form-group row\">\n          <div class=\"offset-sm-3 col-sm-9\">\n            <button\n              type=\"reset\"\n              status=\"danger\"\n              (click)=\"onReset()\"\n              class=\"reset-left\"\n              nbButton>\n              {{ 'Cancel' | translate}}\n            </button>\n            <button\n              type=\"submit\"\n              status=\"primary\"\n              (click)=\"onSubmit()\"\n              [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n              class=\"submit-right\"\n              nbButton>\n              {{ action | translate}}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</do-page-outlet>\n",
                styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}"]
            },] }
];
RoleAddEditPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ActivatedRoute },
    { type: RoleService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS1hZGQtZWRpdC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9tYW5hZ2VtZW50L3JvbGUvYWRkLWVkaXQvcm9sZS1hZGQtZWRpdC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNiLENBQUM7QUFDeEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFtQixZQUFZLEVBQWEsTUFBTSxrQkFBa0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUJBQWlCLEVBQWlCLE1BQU0sb0JBQW9CLENBQUM7QUFDdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBT3ZELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxpQkFBc0I7SUFRbEUsWUFBbUIsUUFBa0IsRUFDM0IsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLFdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxRQUFRLEVBQ1o7WUFDRSxXQUFXLEVBQUUsRUFBRTtZQUNmLGFBQWEsRUFBRSxFQUFFO1NBQ2xCLENBQUMsQ0FBQztRQVJZLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDM0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBVDNCLFdBQU0sR0FBbUIsS0FBSyxDQUFDO1FBQy9CLGdCQUFXLEdBQW9CO1lBQ3BDO2dCQUNFLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1NBQ0YsQ0FBQztRQVVBLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssTUFBTSxDQUFDLEVBQUU7WUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2FBQzFDO1NBQ0Y7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssTUFBTSxDQUFDLEVBQUU7WUFDbkYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDL0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDcEY7SUFDSCxDQUFDO0lBRUQsUUFBUSxLQUFVLENBQUM7SUFFbkIsT0FBTztRQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxJQUFJLEdBQWM7WUFDdEIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUs7WUFDaEQsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUs7U0FDckQsQ0FBQztRQUNELEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQWtDO2FBQzVFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQixJQUFJLFFBQVEsQ0FBQyxjQUFjLEtBQUssWUFBWSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7YUFDMUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7OztZQXZDNEIsUUFBUTtZQUNuQixNQUFNO1lBQ1AsY0FBYztZQUNSLFdBQVc7OztZQWhCbkMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBRXJDLDR6Q0FBa0Q7O2FBQ25EOzs7WUFibUIsUUFBUTtZQUVuQixNQUFNO1lBQUUsY0FBYztZQUt0QixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7O1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBcGlCYXNlUmVzcG9uc2UsIFJlc3BvbnNlQ29kZSwgUm9sZU1vZGVsIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBCYXNlRm9ybUNvbXBvbmVudCwgQ2hlY2tib3hNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvbW1vbic7XG5pbXBvcnQgeyBSb2xlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3JvbGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWxhbmd1YWdlLWFkZC1lZGl0LXBhZ2UnLFxuICBzdHlsZVVybHM6IFsnLi9yb2xlLWFkZC1lZGl0LXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3JvbGUtYWRkLWVkaXQtcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFJvbGVBZGRFZGl0UGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGb3JtQ29tcG9uZW50PGFueT4gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBhY3Rpb246ICdBZGQnIHwgJ0VkaXQnID0gJ0FkZCc7XG4gIHB1YmxpYyBkYXRhRGVmYXVsdDogQ2hlY2tib3hNb2RlbFtdID0gW1xuICAgIHtcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICB9LFxuICBdO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb2xlU2VydmljZTogUm9sZVNlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3RvcixcbiAgICAgIHtcbiAgICAgICAgJ2F1dGhvcml0eSc6IFtdLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiBbXSxcbiAgICAgIH0pO1xuICAgIGlmICgodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2FjdGlvbiddID09PSAnZWRpdCcpKSB7XG4gICAgICB0aGlzLmFjdGlvbiA9ICdFZGl0JztcbiAgICAgIGlmICghdGhpcy5yb2xlU2VydmljZS5nZXRSb2xlKCkpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL21nbXQvcm9sZSddKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMucm9sZVNlcnZpY2UuZ2V0Um9sZSgpICYmICh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snYWN0aW9uJ10gPT09ICdlZGl0JykpIHtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnYXV0aG9yaXR5Jykuc2V0VmFsdWUodGhpcy5yb2xlU2VydmljZS5nZXRSb2xlKCkuYXV0aG9yaXR5KTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnZGVzY3JpcHRpb24nKS5zZXRWYWx1ZSh0aGlzLnJvbGVTZXJ2aWNlLmdldFJvbGUoKS5kZXNjcmlwdGlvbik7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gIG9uUmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL21nbXQvcm9sZSddKTtcbiAgfVxuXG4gIG9uU3VibWl0KCk6IHZvaWQge1xuICAgIGNvbnN0IGRhdGE6IFJvbGVNb2RlbCA9IHtcbiAgICAgIGF1dGhvcml0eTogdGhpcy5mb3JtR3JvdXAuZ2V0KCdhdXRob3JpdHknKS52YWx1ZSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ2Rlc2NyaXB0aW9uJykudmFsdWUsXG4gICAgfTtcbiAgICAoc3VwZXIub25TdWJtaXQoZGF0YSwgJ3NlY3VyaXR5JywgJ3Bvc3Qtcm9sZScpICBhcyBPYnNlcnZhYmxlPEFwaUJhc2VSZXNwb25zZT4pXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3BTdGF0dXNDb2RlID09PSBSZXNwb25zZUNvZGUuT0tfREVGQVVMVC50b1N0cmluZygpKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL21nbXQvcm9sZSddKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxufVxuIl19