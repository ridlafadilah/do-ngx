import { Component, Input, Optional, Self, Inject, LOCALE_ID } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DatePipe, formatDate } from '@angular/common';
import { NbCalendarSize, NbDateService } from '@nebular/theme';
import { DatePattern } from '@dongkap/do-core';
import { DoValueAccessor } from '../base/do-value-accessor.component';
export class DoDatePickerComponent extends DoValueAccessor {
    constructor(ngControl, dateService, locale, datePipe) {
        super(ngControl, locale);
        this.dateService = dateService;
        this.locale = locale;
        this.datePipe = datePipe;
        this.colLabel = 3;
        this.colInput = 9;
        this.size = NbCalendarSize.MEDIUM;
        this.pattern = DatePattern.SLASH;
    }
    writeValue(value) {
        if (value) {
            if (String(value).match(this.pattern)) {
                const dateParse = this.parse(value);
                if (!isNaN(Date.parse(dateParse))) {
                    this._value = new Date(dateParse);
                    this.onChange(value);
                }
            }
            const control = this.ngControl.control;
            if (control) {
                control.updateValueAndValidity();
                control.markAsUntouched();
                control.markAsPristine();
            }
        }
    }
    parse(value) {
        const year = String(value).split('/')[2];
        const month = String(value).split('/')[1];
        const day = String(value).split('/')[0];
        return year + '/' + month + '/' + day;
    }
}
DoDatePickerComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: NbDateService },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: DatePipe }
];
DoDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-datepicker',
                template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      id=\"{{name}}\"\n      [pattern]=\"pattern\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled || skeleton\"\n      [ngClass]=\"{\n        'skeleton': skeleton,\n        'status-danger': hasErrors,\n        'status-success': hasSuccess\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      [(ngModel)]=\"value\"\n      [nbDatepicker]=\"ngxdatepicker\"\n      #input nbInput fullWidth>\n      <nb-datepicker\n        [format]=\"format\"\n        [size]=\"size\"\n        [min]=\"min\"\n        [max]=\"max\"\n        #ngxdatepicker>\n      </nb-datepicker>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                styles: [""]
            },] }
];
DoDatePickerComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: NbDateService },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: DatePipe }
];
DoDatePickerComponent.propDecorators = {
    placeholder: [{ type: Input }],
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    size: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb21tb24vIiwic291cmNlcyI6WyJsaWIvZGF0ZXBpY2tlci9kby1kYXRlcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBT3RFLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxlQUFxQjtJQVE1RCxZQUFnQyxTQUFvQixFQUMzQyxXQUFnQyxFQUNiLE1BQWMsRUFDaEMsUUFBa0I7UUFDMUIsS0FBSyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUhsQixnQkFBVyxHQUFYLFdBQVcsQ0FBcUI7UUFDYixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFUbkIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLFNBQUksR0FBbUIsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQU9wRCxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUVNLFVBQVUsQ0FBQyxLQUFVO1FBQzFCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDckMsTUFBTSxTQUFTLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUU7b0JBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3RCO2FBQ0Y7WUFDRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUN2QyxJQUFJLE9BQU8sRUFBRTtnQkFDWCxPQUFPLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztnQkFDakMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMxQixPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDMUI7U0FDRjtJQUNILENBQUM7SUFFTyxLQUFLLENBQUMsS0FBVTtRQUN0QixNQUFNLElBQUksR0FBVyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sS0FBSyxHQUFXLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsTUFBTSxHQUFHLEdBQVcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxPQUFPLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDeEMsQ0FBQzs7O1lBL0IwQyxTQUFTLHVCQUF2QyxRQUFRLFlBQUksSUFBSTtZQUNQLGFBQWE7eUNBQ2hDLE1BQU0sU0FBQyxTQUFTO1lBQ0MsUUFBUTs7O1lBaEIvQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBRXpCLHkyQ0FBNkM7O2FBQzlDOzs7WUFWUSxTQUFTLHVCQW1CRCxRQUFRLFlBQUksSUFBSTtZQWpCUixhQUFhO3lDQW1CL0IsTUFBTSxTQUFDLFNBQVM7WUFwQmQsUUFBUTs7OzBCQVdaLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO2tCQUNMLEtBQUs7a0JBQ0wsS0FBSzttQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3B0aW9uYWwsIFNlbGYsIEluamVjdCwgTE9DQUxFX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEYXRlUGlwZSwgZm9ybWF0RGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOYkNhbGVuZGFyU2l6ZSwgTmJEYXRlU2VydmljZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IERhdGVQYXR0ZXJuIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBEb1ZhbHVlQWNjZXNzb3IgfSBmcm9tICcuLi9iYXNlL2RvLXZhbHVlLWFjY2Vzc29yLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWRhdGVwaWNrZXInLFxuICBzdHlsZVVybHM6IFsnLi9kby1kYXRlcGlja2VyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kby1kYXRlcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRG9EYXRlUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgRG9WYWx1ZUFjY2Vzc29yPERhdGU+IHtcbiAgICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbExhYmVsOiBudW1iZXIgPSAzO1xuICAgIEBJbnB1dCgpIGNvbElucHV0OiBudW1iZXIgPSA5O1xuICAgIEBJbnB1dCgpIG1pbjogRGF0ZTtcbiAgICBASW5wdXQoKSBtYXg6IERhdGU7XG4gICAgQElucHV0KCkgc2l6ZTogTmJDYWxlbmRhclNpemUgPSBOYkNhbGVuZGFyU2l6ZS5NRURJVU07XG5cbiAgICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2VsZigpIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgICAgcHVibGljIGRhdGVTZXJ2aWNlOiBOYkRhdGVTZXJ2aWNlPERhdGU+LFxuICAgICAgQEluamVjdChMT0NBTEVfSUQpIHB1YmxpYyBsb2NhbGU6IHN0cmluZyxcbiAgICAgIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlKSB7XG4gICAgICBzdXBlcihuZ0NvbnRyb2wsIGxvY2FsZSk7XG4gICAgICB0aGlzLnBhdHRlcm4gPSBEYXRlUGF0dGVybi5TTEFTSDtcbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgaWYgKFN0cmluZyh2YWx1ZSkubWF0Y2godGhpcy5wYXR0ZXJuKSkge1xuICAgICAgICAgIGNvbnN0IGRhdGVQYXJzZTogc3RyaW5nID0gdGhpcy5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgaWYgKCFpc05hTihEYXRlLnBhcnNlKGRhdGVQYXJzZSkpKSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IG5ldyBEYXRlKGRhdGVQYXJzZSk7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udHJvbCA9IHRoaXMubmdDb250cm9sLmNvbnRyb2w7XG4gICAgICAgIGlmIChjb250cm9sKSB7XG4gICAgICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgICAgY29udHJvbC5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgICAgICAgICBjb250cm9sLm1hcmtBc1ByaXN0aW5lKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHBhcnNlKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgICAgY29uc3QgeWVhcjogc3RyaW5nID0gU3RyaW5nKHZhbHVlKS5zcGxpdCgnLycpWzJdO1xuICAgICAgY29uc3QgbW9udGg6IHN0cmluZyA9IFN0cmluZyh2YWx1ZSkuc3BsaXQoJy8nKVsxXTtcbiAgICAgIGNvbnN0IGRheTogc3RyaW5nID0gU3RyaW5nKHZhbHVlKS5zcGxpdCgnLycpWzBdO1xuICAgICAgcmV0dXJuIHllYXIgKyAnLycgKyBtb250aCArICcvJyArIGRheTtcbiAgICB9XG59XG4iXX0=