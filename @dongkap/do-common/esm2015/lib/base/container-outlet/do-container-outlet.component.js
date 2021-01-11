import { Component, Input, ViewEncapsulation } from '@angular/core';
export class DoContainerOutletComponent {
    constructor() {
        this.label = '';
        this.colLabel = 3;
        this.colContent = 9;
        this.nolabel = false;
        this.required = false;
        this.hasErrors = false;
        this.errorMessages = [];
        this.skeleton = false;
    }
}
DoContainerOutletComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-container-outlet',
                template: "<div class=\"form-group row\">\n  <label\n    *ngIf=\"(!skeleton || nolabel);else labelskeleton\"\n    for=\"{{name}}\"\n    class=\"label col-sm-{{colLabel}} col-form-label\">\n    {{label | translate}}{{ (!nolabel) ? ((required) ? ' *' : '') : '' }}\n  </label>\n  <ng-template #labelskeleton>\n    <div class=\"col-sm-{{colLabel}}\">\n      <label\n        class=\"label col-form-label\"\n        [ngClass]=\"{\n          'label-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </label>\n    </div>\n  </ng-template>\n  <ng-content></ng-content>\n  <div class=\"offset-sm-{{colLabel}} col-sm-{{colContent}}\">\n    <do-warn-message *ngIf=\"!skeleton\" [warnMessage]=\"warnMessage\"></do-warn-message>\n    <do-error-message [hasErrors]=\"hasErrors\" [errorMessages]=\"errorMessages\" [param]=\"paramError\">\n    </do-error-message>\n  </div>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            },] }
];
DoContainerOutletComponent.propDecorators = {
    name: [{ type: Input }],
    label: [{ type: Input }],
    colLabel: [{ type: Input }],
    colContent: [{ type: Input }],
    nolabel: [{ type: Input }],
    required: [{ type: Input }],
    hasErrors: [{ type: Input }],
    errorMessages: [{ type: Input }],
    warnMessage: [{ type: Input }],
    paramError: [{ type: Input }],
    skeleton: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tY29udGFpbmVyLW91dGxldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb21tb24vIiwic291cmNlcyI6WyJsaWIvYmFzZS9jb250YWluZXItb3V0bGV0L2RvLWNvbnRhaW5lci1vdXRsZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXBFLE1BQU0sT0FBTywwQkFBMEI7SUFOdkM7UUFRYSxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixrQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUc3QixhQUFRLEdBQVksS0FBSyxDQUFDO0lBQ3ZDLENBQUM7OztZQWxCQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFFL0IsczNCQUFtRDtnQkFDbkQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7bUJBRUksS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tY29udGFpbmVyLW91dGxldCcsXG4gIHN0eWxlVXJsczogWycuL2RvLWNvbnRhaW5lci1vdXRsZXQuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RvLWNvbnRhaW5lci1vdXRsZXQuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBEb0NvbnRhaW5lck91dGxldENvbXBvbmVudCB7XG4gICAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoKSBjb2xMYWJlbDogbnVtYmVyID0gMztcbiAgICBASW5wdXQoKSBjb2xDb250ZW50OiBudW1iZXIgPSA5O1xuICAgIEBJbnB1dCgpIG5vbGFiZWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGhhc0Vycm9yczogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGVycm9yTWVzc2FnZXM6IHN0cmluZ1tdID0gW107XG4gICAgQElucHV0KCkgd2Fybk1lc3NhZ2U6IHN0cmluZztcbiAgICBASW5wdXQoKSBwYXJhbUVycm9yOiBhbnk7XG4gICAgQElucHV0KCkgc2tlbGV0b246IGJvb2xlYW4gPSBmYWxzZTtcbn1cbiJdfQ==