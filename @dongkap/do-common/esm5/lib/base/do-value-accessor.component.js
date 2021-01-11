import { __extends } from "tslib";
import { NgControl } from '@angular/forms';
import { formatDate } from '@angular/common';
import { Directive, Input } from '@angular/core';
import { DateFormat } from '@dongkap/do-core';
import { DoValidatorAccessor } from './do-validator-accessor.component';
var DoValueAccessor = /** @class */ (function (_super) {
    __extends(DoValueAccessor, _super);
    function DoValueAccessor(ngControl, locale) {
        var _this = _super.call(this, ngControl) || this;
        _this.ngControl = ngControl;
        _this.locale = locale;
        _this.format = DateFormat.DATE;
        _this.skeleton = false;
        return _this;
    }
    Object.defineProperty(DoValueAccessor.prototype, "value", {
        get: function () { return this._value; },
        set: function (value) {
            if (this._value !== value) {
                this._value = value;
                if (value instanceof Date)
                    this.onChange(formatDate(value, this.format, this.locale));
                else
                    this.onChange(value);
                var control = this.ngControl.control;
                if (control) {
                    control.updateValueAndValidity();
                    control.markAsTouched();
                    control.markAsDirty();
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    DoValueAccessor.prototype.writeValue = function (value) {
        this._value = value;
        this.onChange(this.value);
        var control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsUntouched();
            control.markAsPristine();
        }
    };
    DoValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DoValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    DoValueAccessor.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
    DoValueAccessor.ctorParameters = function () { return [
        { type: NgControl },
        { type: String }
    ]; };
    DoValueAccessor.decorators = [
        { type: Directive }
    ];
    DoValueAccessor.ctorParameters = function () { return [
        { type: NgControl },
        { type: String }
    ]; };
    DoValueAccessor.propDecorators = {
        format: [{ type: Input }],
        skeleton: [{ type: Input }]
    };
    return DoValueAccessor;
}(DoValidatorAccessor));
export { DoValueAccessor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tdmFsdWUtYWNjZXNzb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2Jhc2UvZG8tdmFsdWUtYWNjZXNzb3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUV4RTtJQUNpRCxtQ0FBbUI7SUFPaEUseUJBQW1CLFNBQW9CLEVBQVMsTUFBYztRQUE5RCxZQUNJLGtCQUFNLFNBQVMsQ0FBQyxTQUNuQjtRQUZrQixlQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVMsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUxyRCxZQUFNLEdBQVcsVUFBVSxDQUFDLElBQUksQ0FBQztRQUNqQyxjQUFRLEdBQVksS0FBSyxDQUFDOztJQU1uQyxDQUFDO0lBRUQsc0JBQUksa0NBQUs7YUFBVCxjQUFpQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBRXRDLFVBQVUsS0FBUTtZQUNkLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixJQUFJLEtBQUssWUFBWSxJQUFJO29CQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7b0JBRTNELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO2dCQUN2QyxJQUFJLE9BQU8sRUFBRTtvQkFDVCxPQUFPLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztvQkFDakMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUN4QixPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQ3pCO2FBQ0o7UUFDTCxDQUFDOzs7T0FoQnFDO0lBa0IvQixvQ0FBVSxHQUFqQixVQUFrQixLQUFRO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLElBQUksT0FBTyxFQUFFO1lBQ1QsT0FBTyxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDakMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFFRCwwQ0FBZ0IsR0FBaEIsVUFBaUIsRUFBTyxJQUFVLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2RCwyQ0FBaUIsR0FBakIsVUFBa0IsRUFBTyxJQUFVLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RCwwQ0FBZ0IsR0FBaEIsVUFBa0IsVUFBbUIsSUFBVSxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7O2dCQW5DOUMsU0FBUzs7OztnQkFSMUMsU0FBUzs7O2dCQU5ELFNBQVM7Ozs7eUJBU2IsS0FBSzsyQkFDTCxLQUFLOztJQXlDVixzQkFBQztDQUFBLEFBN0NELENBQ2lELG1CQUFtQixHQTRDbkU7U0E1Q3FCLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGb3JtYXQgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IERvVmFsaWRhdG9yQWNjZXNzb3IgfSBmcm9tICcuL2RvLXZhbGlkYXRvci1hY2Nlc3Nvci5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEb1ZhbHVlQWNjZXNzb3I8VD4gZXh0ZW5kcyBEb1ZhbGlkYXRvckFjY2Vzc29yIHtcblxuICAgIEBJbnB1dCgpIGZvcm1hdDogc3RyaW5nID0gRGF0ZUZvcm1hdC5EQVRFO1xuICAgIEBJbnB1dCgpIHNrZWxldG9uOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIF92YWx1ZTogYW55O1xuICAgIHB1YmxpYyBkZWZhdWx0VmFsdWU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCwgcHVibGljIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5nQ29udHJvbCk7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCk6IFQgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH1cblxuICAgIHNldCB2YWx1ZSh2YWx1ZTogVCkge1xuICAgICAgICBpZiAodGhpcy5fdmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSlcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKGZvcm1hdERhdGUodmFsdWUsIHRoaXMuZm9ybWF0LCB0aGlzLmxvY2FsZSkpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgY29udHJvbCA9IHRoaXMubmdDb250cm9sLmNvbnRyb2w7XG4gICAgICAgICAgICBpZiAoY29udHJvbCkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBUKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLm5nQ29udHJvbC5jb250cm9sO1xuICAgICAgICBpZiAoY29udHJvbCkge1xuICAgICAgICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgICAgICBjb250cm9sLm1hcmtBc1VudG91Y2hlZCgpO1xuICAgICAgICAgICAgY29udHJvbC5tYXJrQXNQcmlzdGluZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7IHRoaXMub25DaGFuZ2UgPSBmbjsgfVxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxuICAgIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHsgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7IH1cblxufVxuIl19