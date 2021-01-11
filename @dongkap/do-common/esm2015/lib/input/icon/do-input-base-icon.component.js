import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID, Output, EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DoValueAccessor } from '../../base/do-value-accessor.component';
export class DoInputBaseIconComponent extends DoValueAccessor {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.minLength = 0;
        this.maxLength = 100;
        this.iconcursor = false;
        this.icon = 'search-outline';
        this.type = 'text';
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
DoInputBaseIconComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
DoInputBaseIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-input-base-icon',
                template: "<div class=\"input-group\">\n  <input\n    type=\"{{type}}\"\n    id=\"{{name}}\"\n    [pattern]=\"pattern\"\n    [minLength]=\"minLength\"\n    [maxLength]=\"maxLength\"\n    [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [ngClass]=\"{\n      'status-danger': hasErrors,\n      'status-success': hasSuccess\n    }\"\n    (input)=\"onChange($event.target.value)\"\n    (change)=\"onChange($event.target.value)\"\n    (blur)=\"onTouched($event.target.value)\"\n    (focus)=\"onFocus($event.target.value)\"\n    [(ngModel)]=\"value\"\n    #input nbInput fullWidth>\n  <div\n    class=\"input-icon\"\n    [ngStyle]=\"{\n      'cursor': iconcursor ? 'pointer' : 'unset'\n    }\">\n    <nb-icon class=\"input-icon-hover\" icon=\"{{icon}}\" (click)=\"onClickIcon()\"></nb-icon>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["nb-icon{color:#8f9bb3}.input-icon{position:absolute;right:0;padding:10px}.input-icon-hover:hover{color:#598bff}"]
            },] }
];
DoInputBaseIconComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8taW5wdXQtYmFzZS1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9pbnB1dC9pY29uL2RvLWlucHV0LWJhc2UtaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQVF6RSxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZUFBdUI7SUFVakUsWUFBZ0MsU0FBb0IsRUFDeEIsTUFBYztRQUN4QyxLQUFLLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBREMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVRqQyxjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixTQUFJLEdBQVcsZ0JBQWdCLENBQUM7UUFDaEMsU0FBSSxHQUFtQyxNQUFNLENBQUM7UUFDN0MsY0FBUyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzdELFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUs3RCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFVBQVU7WUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFVO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7O1lBWjBDLFNBQVMsdUJBQXZDLFFBQVEsWUFBSSxJQUFJO3lDQUMxQixNQUFNLFNBQUMsU0FBUzs7O1lBakJ0QixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFFOUIsazNCQUFrRDtnQkFDbEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7WUFSUSxTQUFTLHVCQW1CRCxRQUFRLFlBQUksSUFBSTt5Q0FDMUIsTUFBTSxTQUFDLFNBQVM7OzswQkFWbEIsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzttQkFDTCxLQUFLO21CQUNMLEtBQUs7d0JBQ0wsTUFBTTtvQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIE9wdGlvbmFsLCBTZWxmLCBJbmplY3QsIExPQ0FMRV9JRCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERvVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4uLy4uL2Jhc2UvZG8tdmFsdWUtYWNjZXNzb3IuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8taW5wdXQtYmFzZS1pY29uJyxcbiAgc3R5bGVVcmxzOiBbJy4vZG8taW5wdXQtYmFzZS1pY29uLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kby1pbnB1dC1iYXNlLWljb24uY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBEb0lucHV0QmFzZUljb25Db21wb25lbnQgZXh0ZW5kcyBEb1ZhbHVlQWNjZXNzb3I8c3RyaW5nPiB7XG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICBASW5wdXQoKSBtaW5MZW5ndGg6IG51bWJlciA9IDA7XG4gICAgQElucHV0KCkgbWF4TGVuZ3RoOiBudW1iZXIgPSAxMDA7XG4gICAgQElucHV0KCkgaWNvbmN1cnNvcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGljb246IHN0cmluZyA9ICdzZWFyY2gtb3V0bGluZSc7XG4gICAgQElucHV0KCkgdHlwZTogJ3RleHQnIHwgJ3Bhc3N3b3JkJyB8ICdudW1iZXInID0gJ3RleHQnO1xuICAgIEBPdXRwdXQoKSBjbGlja0ljb246IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICAgQE91dHB1dCgpIGZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNlbGYoKSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwdWJsaWMgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICAgIHN1cGVyKG5nQ29udHJvbCwgbG9jYWxlKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrSWNvbigpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmljb25jdXJzb3IpIHRoaXMuY2xpY2tJY29uLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgb25Gb2N1cyh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmZvY3VzLmVtaXQodmFsdWUpO1xuICAgICAgdGhpcy5vblRvdWNoZWQodmFsdWUpO1xuICAgIH1cbn1cbiJdfQ==