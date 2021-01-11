import { Component, Input, ViewEncapsulation } from '@angular/core';
export class DoErrorMessageComponent {
    constructor() {
        this.hasErrors = false;
        this.errorMessages = [];
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb21tb24vIiwic291cmNlcyI6WyJsaWIvYmFzZS9lcnJvci1tZXNzYWdlL2RvLWVycm9yLW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXBFLE1BQU0sT0FBTyx1QkFBdUI7SUFOcEM7UUFPYSxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGtCQUFhLEdBQWEsRUFBRSxDQUFDO0lBRTFDLENBQUM7OztZQVZBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUU1Qix3TEFBZ0Q7Z0JBQ2hELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7O3dCQUVJLEtBQUs7NEJBQ0wsS0FBSztvQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tZXJyb3ItbWVzc2FnZScsXG4gIHN0eWxlVXJsczogWycuL2RvLWVycm9yLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RvLWVycm9yLW1lc3NhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBEb0Vycm9yTWVzc2FnZUNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgaGFzRXJyb3JzOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgZXJyb3JNZXNzYWdlczogc3RyaW5nW10gPSBbXTtcbiAgICBASW5wdXQoKSBwYXJhbTogYW55O1xufVxuIl19