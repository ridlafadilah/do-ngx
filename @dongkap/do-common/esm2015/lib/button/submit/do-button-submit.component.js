import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class DoButtonSubmitComponent {
    constructor() {
        this.formGroupButton = new FormGroup({});
        this.disabledButton = false;
        this.colLabel = 3;
        this.colButton = 9;
        this.type = 'submit';
        this.status = 'primary';
        this.skeleton = false;
        this.onSubmit = new EventEmitter();
    }
    click(event) {
        this.onSubmit.emit(event);
    }
}
DoButtonSubmitComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-button-submit',
                template: "<div class=\"form-group row\">\n  <div class=\"offset-sm-{{colLabel}} col-sm-{{colButton}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <button\n      type=\"{{type}}\"\n      status=\"{{status}}\"\n      (click)=\"click($event)\"\n      [disabled]=\"formGroupButton.invalid || formGroupButton.pristine || disabledButton\"\n      nbButton>\n      {{ name | translate}}\n    </button>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"offset-sm-{{colLabel}} col-sm-{{colButton}}\">\n      <div\n        [ngClass]=\"{\n          'button-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            },] }
];
DoButtonSubmitComponent.propDecorators = {
    formGroupButton: [{ type: Input }],
    name: [{ type: Input }],
    disabledButton: [{ type: Input }],
    colLabel: [{ type: Input }],
    colButton: [{ type: Input }],
    type: [{ type: Input }],
    status: [{ type: Input }],
    skeleton: [{ type: Input }],
    onSubmit: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tYnV0dG9uLXN1Ym1pdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb21tb24vIiwic291cmNlcyI6WyJsaWIvYnV0dG9uL3N1Ym1pdC9kby1idXR0b24tc3VibWl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBcUMsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3SCxPQUFPLEVBQWEsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRdEQsTUFBTSxPQUFPLHVCQUF1QjtJQU5wQztRQU9hLG9CQUFlLEdBQWMsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFL0MsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLFNBQUksR0FBa0MsUUFBUSxDQUFDO1FBQy9DLFdBQU0sR0FBOEMsU0FBUyxDQUFDO1FBQzlELGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDekIsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBS3BFLENBQUM7SUFIVSxLQUFLLENBQUMsS0FBVTtRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUFuQkosU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBRTVCLHNxQkFBZ0Q7Z0JBQ2hELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OzhCQUVJLEtBQUs7bUJBQ0wsS0FBSzs2QkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzttQkFDTCxLQUFLO3FCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIE9wdGlvbmFsLCBTZWxmLCBJbmplY3QsIExPQ0FMRV9JRCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1idXR0b24tc3VibWl0JyxcbiAgc3R5bGVVcmxzOiBbJy4vZG8tYnV0dG9uLXN1Ym1pdC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZG8tYnV0dG9uLXN1Ym1pdC5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIERvQnV0dG9uU3VibWl0Q29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBmb3JtR3JvdXBCdXR0b246IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe30pO1xuICAgIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgICBASW5wdXQoKSBkaXNhYmxlZEJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGNvbExhYmVsOiBudW1iZXIgPSAzO1xuICAgIEBJbnB1dCgpIGNvbEJ1dHRvbjogbnVtYmVyID0gOTtcbiAgICBASW5wdXQoKSB0eXBlOiAnYnV0dG9uJyB8ICdzdWJtaXQnIHwgJ3Jlc2V0JyA9ICdzdWJtaXQnO1xuICAgIEBJbnB1dCgpIHN0YXR1czogJ3ByaW1hcnknIHwgJ2RhbmdlcicgfCAnd2FybmluZycgfCAnaW5mbycgPSAncHJpbWFyeSc7XG4gICAgQElucHV0KCkgc2tlbGV0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBAT3V0cHV0KCkgb25TdWJtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBwdWJsaWMgY2xpY2soZXZlbnQ6IGFueSkge1xuICAgICAgdGhpcy5vblN1Ym1pdC5lbWl0KGV2ZW50KTtcbiAgICB9XG59XG4iXX0=