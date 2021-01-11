import { Component, Input, ViewEncapsulation } from '@angular/core';
var DoErrorMessageComponent = /** @class */ (function () {
    function DoErrorMessageComponent() {
        this.hasErrors = false;
        this.errorMessages = [];
    }
    DoErrorMessageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-error-message',
                    template: "<div *ngIf=\"hasErrors\">\n  <div *ngFor=\"let message of errorMessages\">\n    <span class=\"caption status-danger\">{{message | translate:param}}</span>\n  </div>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                },] }
    ];
    DoErrorMessageComponent.propDecorators = {
        hasErrors: [{ type: Input }],
        errorMessages: [{ type: Input }],
        param: [{ type: Input }]
    };
    return DoErrorMessageComponent;
}());
export { DoErrorMessageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb21tb24vIiwic291cmNlcyI6WyJsaWIvYmFzZS9lcnJvci1tZXNzYWdlL2RvLWVycm9yLW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBFO0lBQUE7UUFPYSxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGtCQUFhLEdBQWEsRUFBRSxDQUFDO0lBRTFDLENBQUM7O2dCQVZBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUU1Qix3TEFBZ0Q7b0JBQ2hELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs0QkFFSSxLQUFLO2dDQUNMLEtBQUs7d0JBQ0wsS0FBSzs7SUFDViw4QkFBQztDQUFBLEFBVkQsSUFVQztTQUpZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWVycm9yLW1lc3NhZ2UnLFxuICBzdHlsZVVybHM6IFsnLi9kby1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kby1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRG9FcnJvck1lc3NhZ2VDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGhhc0Vycm9yczogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGVycm9yTWVzc2FnZXM6IHN0cmluZ1tdID0gW107XG4gICAgQElucHV0KCkgcGFyYW06IGFueTtcbn1cbiJdfQ==