import { __extends } from "tslib";
import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID, Output, EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DoValueAccessor } from '../../base/do-value-accessor.component';
var DoInputBaseIconComponent = /** @class */ (function (_super) {
    __extends(DoInputBaseIconComponent, _super);
    function DoInputBaseIconComponent(ngControl, locale) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.locale = locale;
        _this.minLength = 0;
        _this.maxLength = 100;
        _this.iconcursor = false;
        _this.icon = 'search-outline';
        _this.type = 'text';
        _this.clickIcon = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DoInputBaseIconComponent.prototype.onClickIcon = function () {
        if (this.iconcursor)
            this.clickIcon.emit(this.value);
    };
    DoInputBaseIconComponent.prototype.onFocus = function (value) {
        this.focus.emit(value);
        this.onTouched(value);
    };
    DoInputBaseIconComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    DoInputBaseIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-input-base-icon',
                    template: "<div class=\"input-group\">\n  <input\n    type=\"{{type}}\"\n    id=\"{{name}}\"\n    [pattern]=\"pattern\"\n    [minLength]=\"minLength\"\n    [maxLength]=\"maxLength\"\n    [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [ngClass]=\"{\n      'status-danger': hasErrors,\n      'status-success': hasSuccess\n    }\"\n    (input)=\"onChange($event.target.value)\"\n    (change)=\"onChange($event.target.value)\"\n    (blur)=\"onTouched($event.target.value)\"\n    (focus)=\"onFocus($event.target.value)\"\n    [(ngModel)]=\"value\"\n    #input nbInput fullWidth>\n  <div\n    class=\"input-icon\"\n    [ngStyle]=\"{\n      'cursor': iconcursor ? 'pointer' : 'unset'\n    }\">\n    <nb-icon class=\"input-icon-hover\" icon=\"{{icon}}\" (click)=\"onClickIcon()\"></nb-icon>\n  </div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["nb-icon{color:#8f9bb3}.input-icon{position:absolute;right:0;padding:10px}.input-icon-hover:hover{color:#598bff}"]
                },] }
    ];
    DoInputBaseIconComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    DoInputBaseIconComponent.propDecorators = {
        placeholder: [{ type: Input }],
        minLength: [{ type: Input }],
        maxLength: [{ type: Input }],
        iconcursor: [{ type: Input }],
        icon: [{ type: Input }],
        type: [{ type: Input }],
        clickIcon: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return DoInputBaseIconComponent;
}(DoValueAccessor));
export { DoInputBaseIconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8taW5wdXQtYmFzZS1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9pbnB1dC9pY29uL2RvLWlucHV0LWJhc2UtaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFekU7SUFNOEMsNENBQXVCO0lBVWpFLGtDQUFnQyxTQUFvQixFQUN4QixNQUFjO1FBRDFDLFlBRUUsa0JBQU0sU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUN6QjtRQUYyQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBVGpDLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixVQUFJLEdBQVcsZ0JBQWdCLENBQUM7UUFDaEMsVUFBSSxHQUFtQyxNQUFNLENBQUM7UUFDN0MsZUFBUyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzdELFdBQUssR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7SUFLN0QsQ0FBQztJQUVELDhDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVO1lBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCwwQ0FBTyxHQUFQLFVBQVEsS0FBVTtRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7O2dCQVowQyxTQUFTLHVCQUF2QyxRQUFRLFlBQUksSUFBSTs2Q0FDMUIsTUFBTSxTQUFDLFNBQVM7OztnQkFqQnRCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUU5QixrM0JBQWtEO29CQUNsRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7Z0JBUlEsU0FBUyx1QkFtQkQsUUFBUSxZQUFJLElBQUk7NkNBQzFCLE1BQU0sU0FBQyxTQUFTOzs7OEJBVmxCLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzZCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLE1BQU07d0JBQ04sTUFBTTs7SUFlWCwrQkFBQztDQUFBLEFBN0JELENBTThDLGVBQWUsR0F1QjVEO1NBdkJZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPcHRpb25hbCwgU2VsZiwgSW5qZWN0LCBMT0NBTEVfSUQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEb1ZhbHVlQWNjZXNzb3IgfSBmcm9tICcuLi8uLi9iYXNlL2RvLXZhbHVlLWFjY2Vzc29yLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWlucHV0LWJhc2UtaWNvbicsXG4gIHN0eWxlVXJsczogWycuL2RvLWlucHV0LWJhc2UtaWNvbi5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZG8taW5wdXQtYmFzZS1pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRG9JbnB1dEJhc2VJY29uQ29tcG9uZW50IGV4dGVuZHMgRG9WYWx1ZUFjY2Vzc29yPHN0cmluZz4ge1xuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbWluTGVuZ3RoOiBudW1iZXIgPSAwO1xuICAgIEBJbnB1dCgpIG1heExlbmd0aDogbnVtYmVyID0gMTAwO1xuICAgIEBJbnB1dCgpIGljb25jdXJzb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmcgPSAnc2VhcmNoLW91dGxpbmUnO1xuICAgIEBJbnB1dCgpIHR5cGU6ICd0ZXh0JyB8ICdwYXNzd29yZCcgfCAnbnVtYmVyJyA9ICd0ZXh0JztcbiAgICBAT3V0cHV0KCkgY2xpY2tJY29uOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAgIEBPdXRwdXQoKSBmb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTZWxmKCkgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHVibGljIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgICBzdXBlcihuZ0NvbnRyb2wsIGxvY2FsZSk7XG4gICAgfVxuXG4gICAgb25DbGlja0ljb24oKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5pY29uY3Vyc29yKSB0aGlzLmNsaWNrSWNvbi5lbWl0KHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIG9uRm9jdXModmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5mb2N1cy5lbWl0KHZhbHVlKTtcbiAgICAgIHRoaXMub25Ub3VjaGVkKHZhbHVlKTtcbiAgICB9XG59XG4iXX0=