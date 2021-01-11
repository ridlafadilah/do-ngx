import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DoValueAccessor } from '../../base/do-value-accessor.component';
export class DoInputTextComponent extends DoValueAccessor {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.minLength = 0;
        this.maxLength = 100;
        this.min = 0;
        this.max = 999;
        this.step = 1;
        this.capslock = false;
        this.type = 'text';
    }
    onKeyUp(event) {
        if (this.capslock) {
            this.value = this.value.toUpperCase();
        }
    }
    onKeyDown(event) {
        if (this.type === 'number') {
            if (event.key.toUpperCase() === 'E')
                return false;
            if (this.step >= 1 && event.key === '.')
                return false;
            if (this.min >= 0 && event.key === '-')
                return false;
            if (this.value) {
                if (this.value.length >= this.maxLength) {
                    if (['DELETE', 'BACKSPACE', 'TAB', 'ESCAPE', 'ENTER'].indexOf(event.key.toUpperCase()) !== -1 ||
                        (event.key.toUpperCase() === 'A' && event.ctrlKey === true) || // Allow: Ctrl+A
                        (event.key.toUpperCase() === 'C' && event.ctrlKey === true) || // Allow: Ctrl+C
                        (event.key.toUpperCase() === 'X' && event.ctrlKey === true) || // Allow: Ctrl+X
                        (event.key.toUpperCase() === 'A' && event.metaKey === true) || // Cmd+A (Mac)
                        (event.key.toUpperCase() === 'C' && event.metaKey === true) || // Cmd+C (Mac)
                        (event.key.toUpperCase() === 'X' && event.metaKey === true) || // Cmd+X (Mac)
                        (event.key.toUpperCase() === 'END') ||
                        (event.key.toUpperCase() === 'HOME') ||
                        (event.key.toUpperCase() === 'ARROWLEFT') ||
                        (event.key.toUpperCase() === 'ARROWRIGHT')) {
                        return true;
                    }
                    return false;
                }
            }
            return true;
        }
        return true;
    }
}
DoInputTextComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
DoInputTextComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-input-text',
                template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"{{type}}\"\n      id=\"{{name}}\"\n      [step]=\"step\"\n      [pattern]=\"pattern\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required),\n        'input-capslock': capslock\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onTouched($event.target.value)\"\n      (keydown)=\"onKeyDown($event)\"\n      (keypress)=\"onKeyUp($event)\"\n      [(ngModel)]=\"value\"\n      #input nbInput fullWidth>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: [".input-capslock{text-transform:uppercase}"]
            },] }
];
DoInputTextComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
DoInputTextComponent.propDecorators = {
    placeholder: [{ type: Input }],
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    minLength: [{ type: Input }],
    maxLength: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    step: [{ type: Input }],
    capslock: [{ type: Input }],
    type: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8taW5wdXQtdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb21tb24vIiwic291cmNlcyI6WyJsaWIvaW5wdXQvdGV4dC9kby1pbnB1dC10ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQVF6RSxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsZUFBdUI7SUFZN0QsWUFBZ0MsU0FBb0IsRUFDeEIsTUFBYztRQUN4QyxLQUFLLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBREMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVhqQyxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixjQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLFFBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsUUFBRyxHQUFXLEdBQUcsQ0FBQztRQUNsQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsU0FBSSxHQUFtQyxNQUFNLENBQUM7SUFLdkQsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFvQjtRQUMxQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFvQjtRQUM1QixJQUFJLElBQUksQ0FB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ZXdFbmNhcHN1bGF0aW9uLCBPcHRpb25hbCwgU2VsZiwgSW5qZWN0LCBMT0NBTEVfSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERvVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4uLy4uL2Jhc2UvZG8tdmFsdWUtYWNjZXNzb3IuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8taW5wdXQtdGV4dCcsXG4gIHN0eWxlVXJsczogWycuL2RvLWlucHV0LXRleHQuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RvLWlucHV0LXRleHQuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBEb0lucHV0VGV4dENvbXBvbmVudCBleHRlbmRzIERvVmFsdWVBY2Nlc3NvcjxzdHJpbmc+IHtcbiAgICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbExhYmVsOiBudW1iZXIgPSAzO1xuICAgIEBJbnB1dCgpIGNvbElucHV0OiBudW1iZXIgPSA5O1xuICAgIEBJbnB1dCgpIG1pbkxlbmd0aDogbnVtYmVyID0gMDtcbiAgICBASW5wdXQoKSBtYXhMZW5ndGg6IG51bWJlciA9IDEwMDtcbiAgICBASW5wdXQoKSBtaW46IG51bWJlciA9IDA7XG4gICAgQElucHV0KCkgbWF4OiBudW1iZXIgPSA5OTk7XG4gICAgQElucHV0KCkgc3RlcDogbnVtYmVyID0gMTtcbiAgICBASW5wdXQoKSBjYXBzbG9jazogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHR5cGU6ICd0ZXh0JyB8ICdwYXNzd29yZCcgfCAnbnVtYmVyJyA9ICd0ZXh0JztcblxuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTZWxmKCkgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHVibGljIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgICBzdXBlcihuZ0NvbnRyb2wsIGxvY2FsZSk7XG4gICAgfVxuXG4gICAgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgaWYgKHRoaXMuY2Fwc2xvY2spIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGlmIChldmVudC5rZXkudG9VcHBlckNhc2UoKSA9PT0gJ0UnKVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuc3RlcCA+PSAxICYmIGV2ZW50LmtleSA9PT0gJy4nKVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMubWluID49IDAgJiYgZXZlbnQua2V5ID09PSAnLScpXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCA+PSB0aGlzLm1heExlbmd0aCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBbJ0RFTEVURScsICdCQUNLU1BBQ0UnLCAnVEFCJywgJ0VTQ0FQRScsICdFTlRFUiddLmluZGV4T2YoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkpICE9PSAtMSB8fFxuICAgICAgICAgICAgICAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdBJyAmJiBldmVudC5jdHJsS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ3RybCtBXG4gICAgICAgICAgICAgIChldmVudC5rZXkudG9VcHBlckNhc2UoKSA9PT0gJ0MnICYmIGV2ZW50LmN0cmxLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDdHJsK0NcbiAgICAgICAgICAgICAgKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpID09PSAnWCcgJiYgZXZlbnQuY3RybEtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IEN0cmwrWFxuICAgICAgICAgICAgICAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdBJyAmJiBldmVudC5tZXRhS2V5ID09PSB0cnVlKSB8fCAvLyBDbWQrQSAoTWFjKVxuICAgICAgICAgICAgICAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdDJyAmJiBldmVudC5tZXRhS2V5ID09PSB0cnVlKSB8fCAvLyBDbWQrQyAoTWFjKVxuICAgICAgICAgICAgICAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdYJyAmJiBldmVudC5tZXRhS2V5ID09PSB0cnVlKSB8fCAvLyBDbWQrWCAoTWFjKVxuICAgICAgICAgICAgICAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdFTkQnKSB8fFxuICAgICAgICAgICAgICAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdIT01FJykgfHxcbiAgICAgICAgICAgICAgKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpID09PSAnQVJST1dMRUZUJykgfHxcbiAgICAgICAgICAgICAgKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpID09PSAnQVJST1dSSUdIVCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG59XG4iXX0=