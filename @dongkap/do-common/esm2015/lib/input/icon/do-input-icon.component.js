import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID, Output, EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DoValueAccessor } from '../../base/do-value-accessor.component';
export class DoInputIconComponent extends DoValueAccessor {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.minLength = 0;
        this.maxLength = 100;
        this.type = 'text';
        this.iconcursor = false;
        this.eva = false;
        this.icon = 'search-outline';
        this.clickIcon = new EventEmitter();
        this.focus = new EventEmitter();
    }
    onClickIcon() {
        if (this.iconcursor)
            this.clickIcon.emit(this.value);
    }
    onFocus(value) {
        this.focus.emit(value);
        this.onTouched(value);
    }
}
DoInputIconComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
DoInputIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-input-icon',
                template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}} input-group\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"{{type}}\"\n      id=\"{{name}}\"\n      [pattern]=\"pattern\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onFocus($event.target.value)\"\n      [(ngModel)]=\"value\"\n      #input nbInput fullWidth>\n      <div\n        class=\"xinput-icon\"\n        [ngStyle]=\"{\n          'cursor': iconcursor ? 'pointer' : 'unset'\n        }\">\n        <span class=\"{{icon}}\" *ngIf=\"!eva\"></span>\n        <nb-icon class=\"xinput-icon-hover\" icon=\"{{icon}}\" (click)=\"onClickIcon()\" *ngIf=\"eva\"></nb-icon>\n      </div>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: ["nb-icon{color:#8f9bb3}.xinput-icon{position:absolute;right:0;margin:.6rem 1.5rem 0 0}.xinput-icon-hover:hover{color:#598bff}"]
            },] }
];
DoInputIconComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
DoInputIconComponent.propDecorators = {
    placeholder: [{ type: Input }],
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    minLength: [{ type: Input }],
    maxLength: [{ type: Input }],
    type: [{ type: Input }],
    iconcursor: [{ type: Input }],
    eva: [{ type: Input }],
    icon: [{ type: Input }],
    clickIcon: [{ type: Output }],
    focus: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8taW5wdXQtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb21tb24vIiwic291cmNlcyI6WyJsaWIvaW5wdXQvaWNvbi9kby1pbnB1dC1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3SCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBUXpFLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxlQUF1QjtJQWE3RCxZQUFnQyxTQUFvQixFQUN4QixNQUFjO1FBQ3hDLEtBQUssQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFEQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBWmpDLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsU0FBSSxHQUFtQyxNQUFNLENBQUM7UUFDOUMsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixRQUFHLEdBQVksS0FBSyxDQUFDO1FBQ3JCLFNBQUksR0FBVyxnQkFBZ0IsQ0FBQztRQUMvQixjQUFTLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDN0QsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBSzdELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsVUFBVTtZQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQVU7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7WUFaMEMsU0FBUyx1QkFBdkMsUUFBUSxZQUFJLElBQUk7eUNBQzFCLE1BQU0sU0FBQyxTQUFTOzs7WUFwQnRCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFFekIsc21EQUE2QztnQkFDN0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7WUFSUSxTQUFTLHVCQXNCRCxRQUFRLFlBQUksSUFBSTt5Q0FDMUIsTUFBTSxTQUFDLFNBQVM7OzswQkFibEIsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO21CQUNMLEtBQUs7eUJBQ0wsS0FBSztrQkFDTCxLQUFLO21CQUNMLEtBQUs7d0JBQ0wsTUFBTTtvQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIE9wdGlvbmFsLCBTZWxmLCBJbmplY3QsIExPQ0FMRV9JRCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERvVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4uLy4uL2Jhc2UvZG8tdmFsdWUtYWNjZXNzb3IuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8taW5wdXQtaWNvbicsXG4gIHN0eWxlVXJsczogWycuL2RvLWlucHV0LWljb24uY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RvLWlucHV0LWljb24uY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBEb0lucHV0SWNvbkNvbXBvbmVudCBleHRlbmRzIERvVmFsdWVBY2Nlc3NvcjxzdHJpbmc+IHtcbiAgICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbExhYmVsOiBudW1iZXIgPSAzO1xuICAgIEBJbnB1dCgpIGNvbElucHV0OiBudW1iZXIgPSA5O1xuICAgIEBJbnB1dCgpIG1pbkxlbmd0aDogbnVtYmVyID0gMDtcbiAgICBASW5wdXQoKSBtYXhMZW5ndGg6IG51bWJlciA9IDEwMDtcbiAgICBASW5wdXQoKSB0eXBlOiAndGV4dCcgfCAncGFzc3dvcmQnIHwgJ251bWJlcicgPSAndGV4dCc7XG4gICAgQElucHV0KCkgaWNvbmN1cnNvcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGV2YTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGljb246IHN0cmluZyA9ICdzZWFyY2gtb3V0bGluZSc7XG4gICAgQE91dHB1dCgpIGNsaWNrSWNvbjogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBAT3V0cHV0KCkgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2VsZigpIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgICAgQEluamVjdChMT0NBTEVfSUQpIHB1YmxpYyBsb2NhbGU6IHN0cmluZykge1xuICAgICAgc3VwZXIobmdDb250cm9sLCBsb2NhbGUpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tJY29uKCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaWNvbmN1cnNvcikgdGhpcy5jbGlja0ljb24uZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICBvbkZvY3VzKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuZm9jdXMuZW1pdCh2YWx1ZSk7XG4gICAgICB0aGlzLm9uVG91Y2hlZCh2YWx1ZSk7XG4gICAgfVxufVxuIl19