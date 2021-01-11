import { __extends } from "tslib";
import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID, Output, EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DoValueAccessor } from '../../base/do-value-accessor.component';
var DoInputIconComponent = /** @class */ (function (_super) {
    __extends(DoInputIconComponent, _super);
    function DoInputIconComponent(ngControl, locale) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.locale = locale;
        _this.colLabel = 3;
        _this.colInput = 9;
        _this.minLength = 0;
        _this.maxLength = 100;
        _this.type = 'text';
        _this.iconcursor = false;
        _this.eva = false;
        _this.icon = 'search-outline';
        _this.clickIcon = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DoInputIconComponent.prototype.onClickIcon = function () {
        if (this.iconcursor)
            this.clickIcon.emit(this.value);
    };
    DoInputIconComponent.prototype.onFocus = function (value) {
        this.focus.emit(value);
        this.onTouched(value);
    };
    DoInputIconComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    DoInputIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-input-icon',
                    template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}} input-group\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"{{type}}\"\n      id=\"{{name}}\"\n      [pattern]=\"pattern\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onFocus($event.target.value)\"\n      [(ngModel)]=\"value\"\n      #input nbInput fullWidth>\n      <div\n        class=\"xinput-icon\"\n        [ngStyle]=\"{\n          'cursor': iconcursor ? 'pointer' : 'unset'\n        }\">\n        <span class=\"{{icon}}\" *ngIf=\"!eva\"></span>\n        <nb-icon class=\"xinput-icon-hover\" icon=\"{{icon}}\" (click)=\"onClickIcon()\" *ngIf=\"eva\"></nb-icon>\n      </div>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["nb-icon{color:#8f9bb3}.xinput-icon{position:absolute;right:0;margin:.6rem 1.5rem 0 0}.xinput-icon-hover:hover{color:#598bff}"]
                },] }
    ];
    DoInputIconComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
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
    return DoInputIconComponent;
}(DoValueAccessor));
export { DoInputIconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8taW5wdXQtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb21tb24vIiwic291cmNlcyI6WyJsaWIvaW5wdXQvaWNvbi9kby1pbnB1dC1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV6RTtJQU0wQyx3Q0FBdUI7SUFhN0QsOEJBQWdDLFNBQW9CLEVBQ3hCLE1BQWM7UUFEMUMsWUFFRSxrQkFBTSxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQ3pCO1FBRjJCLFlBQU0sR0FBTixNQUFNLENBQVE7UUFaakMsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixVQUFJLEdBQW1DLE1BQU0sQ0FBQztRQUM5QyxnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixTQUFHLEdBQVksS0FBSyxDQUFDO1FBQ3JCLFVBQUksR0FBVyxnQkFBZ0IsQ0FBQztRQUMvQixlQUFTLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDN0QsV0FBSyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDOztJQUs3RCxDQUFDO0lBRUQsMENBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVU7WUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELHNDQUFPLEdBQVAsVUFBUSxLQUFVO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Z0JBWjBDLFNBQVMsdUJBQXZDLFFBQVEsWUFBSSxJQUFJOzZDQUMxQixNQUFNLFNBQUMsU0FBUzs7O2dCQXBCdEIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUV6QixzbURBQTZDO29CQUM3QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7Z0JBUlEsU0FBUyx1QkFzQkQsUUFBUSxZQUFJLElBQUk7NkNBQzFCLE1BQU0sU0FBQyxTQUFTOzs7OEJBYmxCLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSzt1QkFDTCxLQUFLOzZCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLE1BQU07d0JBQ04sTUFBTTs7SUFlWCwyQkFBQztDQUFBLEFBaENELENBTTBDLGVBQWUsR0EwQnhEO1NBMUJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPcHRpb25hbCwgU2VsZiwgSW5qZWN0LCBMT0NBTEVfSUQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEb1ZhbHVlQWNjZXNzb3IgfSBmcm9tICcuLi8uLi9iYXNlL2RvLXZhbHVlLWFjY2Vzc29yLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWlucHV0LWljb24nLFxuICBzdHlsZVVybHM6IFsnLi9kby1pbnB1dC1pY29uLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kby1pbnB1dC1pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRG9JbnB1dEljb25Db21wb25lbnQgZXh0ZW5kcyBEb1ZhbHVlQWNjZXNzb3I8c3RyaW5nPiB7XG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICBASW5wdXQoKSBjb2xMYWJlbDogbnVtYmVyID0gMztcbiAgICBASW5wdXQoKSBjb2xJbnB1dDogbnVtYmVyID0gOTtcbiAgICBASW5wdXQoKSBtaW5MZW5ndGg6IG51bWJlciA9IDA7XG4gICAgQElucHV0KCkgbWF4TGVuZ3RoOiBudW1iZXIgPSAxMDA7XG4gICAgQElucHV0KCkgdHlwZTogJ3RleHQnIHwgJ3Bhc3N3b3JkJyB8ICdudW1iZXInID0gJ3RleHQnO1xuICAgIEBJbnB1dCgpIGljb25jdXJzb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBldmE6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmcgPSAnc2VhcmNoLW91dGxpbmUnO1xuICAgIEBPdXRwdXQoKSBjbGlja0ljb246IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICAgQE91dHB1dCgpIGZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNlbGYoKSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwdWJsaWMgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICAgIHN1cGVyKG5nQ29udHJvbCwgbG9jYWxlKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrSWNvbigpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmljb25jdXJzb3IpIHRoaXMuY2xpY2tJY29uLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgb25Gb2N1cyh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmZvY3VzLmVtaXQodmFsdWUpO1xuICAgICAgdGhpcy5vblRvdWNoZWQodmFsdWUpO1xuICAgIH1cbn1cbiJdfQ==