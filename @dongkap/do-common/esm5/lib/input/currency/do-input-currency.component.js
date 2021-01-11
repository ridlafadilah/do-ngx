import { __extends, __read } from "tslib";
import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DoValueAccessor } from '../../base/do-value-accessor.component';
var DoInputCurrencyComponent = /** @class */ (function (_super) {
    __extends(DoInputCurrencyComponent, _super);
    function DoInputCurrencyComponent(ngControl, locale) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.locale = locale;
        _this.colLabel = 3;
        _this.colInput = 9;
        _this.minLength = 0;
        _this.maxLength = 100;
        _this.prefix = 'Rp';
        _this.decimalSeparator = '.';
        _this.thousandsSeparator = ',';
        _this.suffix = ',-';
        _this.padding = 5;
        return _this;
    }
    DoInputCurrencyComponent.prototype.writeValue = function (value) {
        this._value = value ? this.transform(value) : value;
        this.onChange(this.value);
        var control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsTouched();
            control.markAsDirty();
        }
    };
    DoInputCurrencyComponent.prototype.transform = function (value) {
        var _a = this.toNumber(value), val = _a.val, frac = _a.frac;
        var v = val.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return this.prefix.concat(' ').concat(v).concat(frac).concat(this.suffix);
    };
    DoInputCurrencyComponent.prototype.toNumber = function (value) {
        var _a = __read((value || '').split(this.decimalSeparator), 2), _b = _a[0], val = _b === void 0 ? '' : _b, _c = _a[1], frac = _c === void 0 ? '' : _c;
        var fraction = '';
        if (frac) {
            if (parseInt(frac, 10) > 0) {
                fraction = this.decimalSeparator + this.pad(frac, this.padding).substring(0, this.padding);
            }
        }
        return { val: val, frac: fraction };
    };
    DoInputCurrencyComponent.prototype.pad = function (val, size) {
        while (val.length < size)
            val = val + '0';
        return val;
    };
    DoInputCurrencyComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    DoInputCurrencyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-input-currency',
                    template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"text\"\n      id=\"{{name}}\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled || skeleton\"\n      [ngClass]=\"{\n        'skeleton': skeleton,\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.toNumber)\"\n      (change)=\"onChange($event.target.toNumber)\"\n      (blur)=\"onTouched($event.target.toNumber)\"\n      [(ngModel)]=\"value\"\n      doCurrency\n      [prefix]=\"prefix\"\n      [decimal]=\"decimalSeparator\"\n      [thousand]=\"thousandsSeparator\"\n      [suffix]=\"suffix\"\n      [padding]=\"padding\"\n      #input nbInput fullWidth>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                },] }
    ];
    DoInputCurrencyComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    DoInputCurrencyComponent.propDecorators = {
        placeholder: [{ type: Input }],
        colLabel: [{ type: Input }],
        colInput: [{ type: Input }],
        minLength: [{ type: Input }],
        maxLength: [{ type: Input }],
        prefix: [{ type: Input, args: ['prefix',] }],
        decimalSeparator: [{ type: Input, args: ['decimal',] }],
        thousandsSeparator: [{ type: Input, args: ['thousand',] }],
        suffix: [{ type: Input, args: ['suffix',] }],
        padding: [{ type: Input, args: ['padding',] }]
    };
    return DoInputCurrencyComponent;
}(DoValueAccessor));
export { DoInputCurrencyComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8taW5wdXQtY3VycmVuY3kuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2lucHV0L2N1cnJlbmN5L2RvLWlucHV0LWN1cnJlbmN5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFekU7SUFNOEMsNENBQXVCO0lBWW5FLGtDQUFnQyxTQUFvQixFQUN4QixNQUFjO1FBRDFDLFlBRUUsa0JBQU0sU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUN6QjtRQUYyQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBWGpDLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFDaEIsWUFBTSxHQUFXLElBQUksQ0FBQztRQUNyQixzQkFBZ0IsR0FBVyxHQUFHLENBQUM7UUFDOUIsd0JBQWtCLEdBQVcsR0FBRyxDQUFDO1FBQ25DLFlBQU0sR0FBVyxJQUFJLENBQUM7UUFDckIsYUFBTyxHQUFXLENBQUMsQ0FBQzs7SUFLdEMsQ0FBQztJQUVNLDZDQUFVLEdBQWpCLFVBQWtCLEtBQVU7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUN2QyxJQUFJLE9BQU8sRUFBRTtZQUNULE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN4QixPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsNENBQVMsR0FBVCxVQUFVLEtBQUs7UUFDUCxJQUFBLEtBQWMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBakMsR0FBRyxTQUFBLEVBQUUsSUFBSSxVQUF3QixDQUFDO1FBQ3pDLElBQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDeEUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELDJDQUFRLEdBQVIsVUFBUyxLQUFhO1FBQ2QsSUFBQSxLQUFBLE9BQXlCLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBQSxFQUFqRSxVQUFRLEVBQVIsR0FBRyxtQkFBRyxFQUFFLEtBQUEsRUFBRSxVQUFTLEVBQVQsSUFBSSxtQkFBRyxFQUFFLEtBQThDLENBQUM7UUFDMUUsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDMUIsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDNUY7U0FDRjtRQUNELE9BQU8sRUFBQyxHQUFHLEVBQUcsR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU8sc0NBQUcsR0FBWCxVQUFZLEdBQUcsRUFBRSxJQUFJO1FBQ25CLE9BQU8sR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJO1lBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDMUMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztnQkFwQzBDLFNBQVMsdUJBQXZDLFFBQVEsWUFBSSxJQUFJOzZDQUMxQixNQUFNLFNBQUMsU0FBUzs7O2dCQW5CcEIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBRTdCLDI1Q0FBaUQ7b0JBQ2pELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7OztnQkFSUSxTQUFTLHVCQXFCSCxRQUFRLFlBQUksSUFBSTs2Q0FDMUIsTUFBTSxTQUFDLFNBQVM7Ozs4QkFabEIsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLO3lCQUNMLEtBQUssU0FBQyxRQUFRO21DQUNkLEtBQUssU0FBQyxTQUFTO3FDQUNmLEtBQUssU0FBQyxVQUFVO3lCQUNoQixLQUFLLFNBQUMsUUFBUTswQkFDZCxLQUFLLFNBQUMsU0FBUzs7SUF1Q2xCLCtCQUFDO0NBQUEsQUF2REQsQ0FNOEMsZUFBZSxHQWlENUQ7U0FqRFksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIE9wdGlvbmFsLCBTZWxmLCBJbmplY3QsIExPQ0FMRV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRG9WYWx1ZUFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vYmFzZS9kby12YWx1ZS1hY2Nlc3Nvci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1pbnB1dC1jdXJyZW5jeScsXG4gIHN0eWxlVXJsczogWycuL2RvLWlucHV0LWN1cnJlbmN5LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kby1pbnB1dC1jdXJyZW5jeS5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIERvSW5wdXRDdXJyZW5jeUNvbXBvbmVudCBleHRlbmRzIERvVmFsdWVBY2Nlc3NvcjxzdHJpbmc+IHtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgY29sTGFiZWw6IG51bWJlciA9IDM7XG4gIEBJbnB1dCgpIGNvbElucHV0OiBudW1iZXIgPSA5O1xuICBASW5wdXQoKSBtaW5MZW5ndGg6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIG1heExlbmd0aDogbnVtYmVyID0gMTAwO1xuICBASW5wdXQoJ3ByZWZpeCcpIHByZWZpeDogc3RyaW5nID0gJ1JwJztcbiAgQElucHV0KCdkZWNpbWFsJykgZGVjaW1hbFNlcGFyYXRvcjogc3RyaW5nID0gJy4nO1xuICBASW5wdXQoJ3Rob3VzYW5kJykgdGhvdXNhbmRzU2VwYXJhdG9yOiBzdHJpbmcgPSAnLCc7XG4gIEBJbnB1dCgnc3VmZml4Jykgc3VmZml4OiBzdHJpbmcgPSAnLC0nO1xuICBASW5wdXQoJ3BhZGRpbmcnKSBwYWRkaW5nOiBudW1iZXIgPSA1O1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTZWxmKCkgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgQEluamVjdChMT0NBTEVfSUQpIHB1YmxpYyBsb2NhbGU6IHN0cmluZykge1xuICAgIHN1cGVyKG5nQ29udHJvbCwgbG9jYWxlKTtcbiAgfVxuXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlID8gdGhpcy50cmFuc2Zvcm0odmFsdWUpIDogdmFsdWU7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5uZ0NvbnRyb2wuY29udHJvbDtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgICBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICB9XG4gIH1cblxuICB0cmFuc2Zvcm0odmFsdWUpOiBzdHJpbmcge1xuICAgIGNvbnN0IHt2YWwsIGZyYWN9ID0gdGhpcy50b051bWJlcih2YWx1ZSk7XG4gICAgY29uc3QgdiA9IHZhbC5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCB0aGlzLnRob3VzYW5kc1NlcGFyYXRvcik7XG4gICAgcmV0dXJuIHRoaXMucHJlZml4LmNvbmNhdCgnICcpLmNvbmNhdCh2KS5jb25jYXQoZnJhYykuY29uY2F0KHRoaXMuc3VmZml4KTtcbiAgfVxuXG4gIHRvTnVtYmVyKHZhbHVlOiBzdHJpbmcpOiB7dmFsOiBzdHJpbmcsIGZyYWM6IHN0cmluZ30ge1xuICAgIGNvbnN0IFsgdmFsID0gJycsIGZyYWMgPSAnJ10gPSAodmFsdWUgfHwgJycpLnNwbGl0KHRoaXMuZGVjaW1hbFNlcGFyYXRvcik7XG4gICAgbGV0IGZyYWN0aW9uID0gJyc7XG4gICAgaWYgKGZyYWMpIHtcbiAgICAgIGlmIChwYXJzZUludChmcmFjLCAxMCkgPiAwKSB7XG4gICAgICAgIGZyYWN0aW9uID0gdGhpcy5kZWNpbWFsU2VwYXJhdG9yICsgdGhpcy5wYWQoZnJhYywgdGhpcy5wYWRkaW5nKS5zdWJzdHJpbmcoMCwgdGhpcy5wYWRkaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt2YWwgOiB2YWwsIGZyYWM6IGZyYWN0aW9ufTtcbiAgfVxuXG4gIHByaXZhdGUgcGFkKHZhbCwgc2l6ZSk6IHN0cmluZyB7XG4gICAgd2hpbGUgKHZhbC5sZW5ndGggPCBzaXplKSB2YWwgPSB2YWwgKyAnMCc7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxufVxuIl19