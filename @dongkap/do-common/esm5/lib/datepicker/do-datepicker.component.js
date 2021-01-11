import { __extends } from "tslib";
import { Component, Input, Optional, Self, Inject, LOCALE_ID } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DatePipe, formatDate } from '@angular/common';
import { NbCalendarSize, NbDateService } from '@nebular/theme';
import { DatePattern } from '@dongkap/do-core';
import { DoValueAccessor } from '../base/do-value-accessor.component';
var DoDatePickerComponent = /** @class */ (function (_super) {
    __extends(DoDatePickerComponent, _super);
    function DoDatePickerComponent(ngControl, dateService, locale, datePipe) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.dateService = dateService;
        _this.locale = locale;
        _this.datePipe = datePipe;
        _this.colLabel = 3;
        _this.colInput = 9;
        _this.size = NbCalendarSize.MEDIUM;
        _this.pattern = DatePattern.SLASH;
        return _this;
    }
    DoDatePickerComponent.prototype.writeValue = function (value) {
        if (value) {
            if (String(value).match(this.pattern)) {
                var dateParse = this.parse(value);
                if (!isNaN(Date.parse(dateParse))) {
                    this._value = new Date(dateParse);
                    this.onChange(value);
                }
            }
            var control = this.ngControl.control;
            if (control) {
                control.updateValueAndValidity();
                control.markAsUntouched();
                control.markAsPristine();
            }
        }
    };
    DoDatePickerComponent.prototype.parse = function (value) {
        var year = String(value).split('/')[2];
        var month = String(value).split('/')[1];
        var day = String(value).split('/')[0];
        return year + '/' + month + '/' + day;
    };
    DoDatePickerComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: NbDateService },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
        { type: DatePipe }
    ]; };
    DoDatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-datepicker',
                    template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      id=\"{{name}}\"\n      [pattern]=\"pattern\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled || skeleton\"\n      [ngClass]=\"{\n        'skeleton': skeleton,\n        'status-danger': hasErrors,\n        'status-success': hasSuccess\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      [(ngModel)]=\"value\"\n      [nbDatepicker]=\"ngxdatepicker\"\n      #input nbInput fullWidth>\n      <nb-datepicker\n        [format]=\"format\"\n        [size]=\"size\"\n        [min]=\"min\"\n        [max]=\"max\"\n        #ngxdatepicker>\n      </nb-datepicker>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                    styles: [""]
                },] }
    ];
    DoDatePickerComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: NbDateService },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
        { type: DatePipe }
    ]; };
    DoDatePickerComponent.propDecorators = {
        placeholder: [{ type: Input }],
        colLabel: [{ type: Input }],
        colInput: [{ type: Input }],
        min: [{ type: Input }],
        max: [{ type: Input }],
        size: [{ type: Input }]
    };
    return DoDatePickerComponent;
}(DoValueAccessor));
export { DoDatePickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb21tb24vIiwic291cmNlcyI6WyJsaWIvZGF0ZXBpY2tlci9kby1kYXRlcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUV0RTtJQUsyQyx5Q0FBcUI7SUFRNUQsK0JBQWdDLFNBQW9CLEVBQzNDLFdBQWdDLEVBQ2IsTUFBYyxFQUNoQyxRQUFrQjtRQUg1QixZQUlFLGtCQUFNLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FFekI7UUFMUSxpQkFBVyxHQUFYLFdBQVcsQ0FBcUI7UUFDYixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hDLGNBQVEsR0FBUixRQUFRLENBQVU7UUFUbkIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLFVBQUksR0FBbUIsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQU9wRCxLQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7O0lBQ25DLENBQUM7SUFFTSwwQ0FBVSxHQUFqQixVQUFrQixLQUFVO1FBQzFCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDckMsSUFBTSxTQUFTLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUU7b0JBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3RCO2FBQ0Y7WUFDRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUN2QyxJQUFJLE9BQU8sRUFBRTtnQkFDWCxPQUFPLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztnQkFDakMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMxQixPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDMUI7U0FDRjtJQUNILENBQUM7SUFFTyxxQ0FBSyxHQUFiLFVBQWMsS0FBVTtRQUN0QixJQUFNLElBQUksR0FBVyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQU0sS0FBSyxHQUFXLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBTSxHQUFHLEdBQVcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxPQUFPLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDeEMsQ0FBQzs7Z0JBL0IwQyxTQUFTLHVCQUF2QyxRQUFRLFlBQUksSUFBSTtnQkFDUCxhQUFhOzZDQUNoQyxNQUFNLFNBQUMsU0FBUztnQkFDQyxRQUFROzs7Z0JBaEIvQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBRXpCLHkyQ0FBNkM7O2lCQUM5Qzs7O2dCQVZRLFNBQVMsdUJBbUJELFFBQVEsWUFBSSxJQUFJO2dCQWpCUixhQUFhOzZDQW1CL0IsTUFBTSxTQUFDLFNBQVM7Z0JBcEJkLFFBQVE7Ozs4QkFXWixLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSztzQkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7SUFrQ1YsNEJBQUM7Q0FBQSxBQTdDRCxDQUsyQyxlQUFlLEdBd0N6RDtTQXhDWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPcHRpb25hbCwgU2VsZiwgSW5qZWN0LCBMT0NBTEVfSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERhdGVQaXBlLCBmb3JtYXREYXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5iQ2FsZW5kYXJTaXplLCBOYkRhdGVTZXJ2aWNlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgRGF0ZVBhdHRlcm4gfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IERvVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4uL2Jhc2UvZG8tdmFsdWUtYWNjZXNzb3IuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tZGF0ZXBpY2tlcicsXG4gIHN0eWxlVXJsczogWycuL2RvLWRhdGVwaWNrZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RvLWRhdGVwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEb0RhdGVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBEb1ZhbHVlQWNjZXNzb3I8RGF0ZT4ge1xuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY29sTGFiZWw6IG51bWJlciA9IDM7XG4gICAgQElucHV0KCkgY29sSW5wdXQ6IG51bWJlciA9IDk7XG4gICAgQElucHV0KCkgbWluOiBEYXRlO1xuICAgIEBJbnB1dCgpIG1heDogRGF0ZTtcbiAgICBASW5wdXQoKSBzaXplOiBOYkNhbGVuZGFyU2l6ZSA9IE5iQ2FsZW5kYXJTaXplLk1FRElVTTtcblxuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTZWxmKCkgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgICBwdWJsaWMgZGF0ZVNlcnZpY2U6IE5iRGF0ZVNlcnZpY2U8RGF0ZT4sXG4gICAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHVibGljIGxvY2FsZTogc3RyaW5nLFxuICAgICAgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUpIHtcbiAgICAgIHN1cGVyKG5nQ29udHJvbCwgbG9jYWxlKTtcbiAgICAgIHRoaXMucGF0dGVybiA9IERhdGVQYXR0ZXJuLlNMQVNIO1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBpZiAoU3RyaW5nKHZhbHVlKS5tYXRjaCh0aGlzLnBhdHRlcm4pKSB7XG4gICAgICAgICAgY29uc3QgZGF0ZVBhcnNlOiBzdHJpbmcgPSB0aGlzLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgICBpZiAoIWlzTmFOKERhdGUucGFyc2UoZGF0ZVBhcnNlKSkpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gbmV3IERhdGUoZGF0ZVBhcnNlKTtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250cm9sID0gdGhpcy5uZ0NvbnRyb2wuY29udHJvbDtcbiAgICAgICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgICAgICBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgICBjb250cm9sLm1hcmtBc1VudG91Y2hlZCgpO1xuICAgICAgICAgIGNvbnRyb2wubWFya0FzUHJpc3RpbmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcGFyc2UodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgICBjb25zdCB5ZWFyOiBzdHJpbmcgPSBTdHJpbmcodmFsdWUpLnNwbGl0KCcvJylbMl07XG4gICAgICBjb25zdCBtb250aDogc3RyaW5nID0gU3RyaW5nKHZhbHVlKS5zcGxpdCgnLycpWzFdO1xuICAgICAgY29uc3QgZGF5OiBzdHJpbmcgPSBTdHJpbmcodmFsdWUpLnNwbGl0KCcvJylbMF07XG4gICAgICByZXR1cm4geWVhciArICcvJyArIG1vbnRoICsgJy8nICsgZGF5O1xuICAgIH1cbn1cbiJdfQ==