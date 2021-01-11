import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { ResponseCode } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-common';
export class ParameterAddGroupPageComponent extends BaseFormComponent {
    constructor(injector, router) {
        super(injector, {
            'parameterGroupCode': [],
            'parameterGroupName': [],
        });
        this.injector = injector;
        this.router = router;
    }
    ngOnInit() { }
    onReset() {
        this.router.navigate(['/app/sysconf/parameter']);
    }
    onSubmit() {
        super.onSubmit(this.formGroup.value, 'master', 'post-parameter-group')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_SCR009.toString()) {
                this.router.navigate(['/app/sysconf/parameter']);
            }
        });
    }
}
ParameterAddGroupPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router }
];
ParameterAddGroupPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-parameter-add-group-page',
                template: "<do-page-outlet [header]=\"'Add Parameter Group'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'parameterGroupCode'\"\n          [label]=\"'Parameter Group Code'\"\n          [required]=\"true\"\n          formControlName=\"parameterGroupCode\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'parameterGroupName'\"\n          [label]=\"'Parameter Group Name'\"\n          [required]=\"true\"\n          formControlName=\"parameterGroupName\">\n        </do-input-text>\n        <div class=\"form-group row\">\n          <div class=\"offset-sm-3 col-sm-9\">\n            <button\n              type=\"reset\"\n              status=\"danger\"\n              (click)=\"onReset()\"\n              class=\"reset-left\"\n              nbButton>\n              {{ 'Cancel' | translate}}\n            </button>\n            <button\n              type=\"submit\"\n              status=\"primary\"\n              (click)=\"onSubmit()\"\n              [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n              class=\"submit-right\"\n              nbButton>\n              {{ 'Add' | translate}}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</do-page-outlet>\n",
                styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}"]
            },] }
];
ParameterAddGroupPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLWFkZC1ncm91cC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9wYXJhbWV0ZXIvZ3JvdXAvYWRkLWdyb3VwL3BhcmFtZXRlci1hZGQtZ3JvdXAtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQW1CLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBT3ZELE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxpQkFBc0I7SUFFeEUsWUFBbUIsUUFBa0IsRUFBVSxNQUFjO1FBQzNELEtBQUssQ0FBQyxRQUFRLEVBQ1o7WUFDRSxvQkFBb0IsRUFBRSxFQUFFO1lBQ3hCLG9CQUFvQixFQUFFLEVBQUU7U0FDekIsQ0FBQyxDQUFDO1FBTFksYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7SUFNN0QsQ0FBQztJQUVELFFBQVEsS0FBVSxDQUFDO0lBRW5CLE9BQU87UUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsUUFBUTtRQUNMLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixDQUFrQzthQUNyRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDcEIsSUFBSSxRQUFRLENBQUMsY0FBYyxLQUFLLFlBQVksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO2FBQ2xEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzs7WUF0QjRCLFFBQVE7WUFBa0IsTUFBTTs7O1lBUDlELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUV2Qyw0MkNBQXdEOzthQUN6RDs7O1lBWm1CLFFBQVE7WUFFbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSwgUmVzcG9uc2VDb2RlIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBCYXNlRm9ybUNvbXBvbmVudCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLXBhcmFtZXRlci1hZGQtZ3JvdXAtcGFnZScsXG4gIHN0eWxlVXJsczogWycuL3BhcmFtZXRlci1hZGQtZ3JvdXAtcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFyYW1ldGVyLWFkZC1ncm91cC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyQWRkR3JvdXBQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZvcm1Db21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIHN1cGVyKGluamVjdG9yLFxuICAgICAge1xuICAgICAgICAncGFyYW1ldGVyR3JvdXBDb2RlJzogW10sXG4gICAgICAgICdwYXJhbWV0ZXJHcm91cE5hbWUnOiBbXSxcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gIG9uUmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL3N5c2NvbmYvcGFyYW1ldGVyJ10pO1xuICB9XG5cbiAgb25TdWJtaXQoKTogdm9pZCB7XG4gICAgKHN1cGVyLm9uU3VibWl0KHRoaXMuZm9ybUdyb3VwLnZhbHVlLCAnbWFzdGVyJywgJ3Bvc3QtcGFyYW1ldGVyLWdyb3VwJykgIGFzIE9ic2VydmFibGU8QXBpQmFzZVJlc3BvbnNlPilcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UucmVzcFN0YXR1c0NvZGUgPT09IFJlc3BvbnNlQ29kZS5PS19TQ1IwMDkudG9TdHJpbmcoKSkge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9zeXNjb25mL3BhcmFtZXRlciddKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxufVxuIl19