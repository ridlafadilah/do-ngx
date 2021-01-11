import { __extends } from "tslib";
import { Component, Input, Optional, Self, Inject, LOCALE_ID, EventEmitter, Output } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DoValueAccessor } from '../base/do-value-accessor.component';
var DoCheckboxComponent = /** @class */ (function (_super) {
    __extends(DoCheckboxComponent, _super);
    function DoCheckboxComponent(ngControl, locale) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.locale = locale;
        _this.colLabel = 3;
        _this.colInput = 9;
        _this.onChecked = new EventEmitter();
        return _this;
    }
    DoCheckboxComponent.prototype.onCheckedChange = function () {
        if (!this.value) {
            this.value = this.data;
        }
        if (Array.isArray(this.value).valueOf()) {
            var isChecked_1 = false;
            Array.from(this.value).forEach(function (value) {
                if (value.selected) {
                    isChecked_1 = value.selected;
                }
            });
            if (this.required) {
                if (!isChecked_1) {
                    this.ngControl.control.setErrors({
                        'required': true,
                    });
                }
                else {
                    this.ngControl.control.setErrors(null);
                }
            }
            this.ngControl.control.markAsTouched();
            this.ngControl.control.markAsDirty();
        }
        this.onChecked.emit(this.value);
    };
    DoCheckboxComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    DoCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-checkbox',
                    template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <nb-checkbox\n      [ngClass]=\"{\n        'status-danger': hasErrors\n      }\"\n      *ngFor=\"let item of (value || data)\"\n      [disabled]=\"item.disabled || disabled\"\n      [checked]=\"item.selected\"\n      [(ngModel)]=\"item.selected\"\n      (change)=\"onCheckedChange()\">\n      {{item.name | translate}}\n    </nb-checkbox>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                    styles: [""]
                },] }
    ];
    DoCheckboxComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    DoCheckboxComponent.propDecorators = {
        colLabel: [{ type: Input }],
        colInput: [{ type: Input }],
        data: [{ type: Input }],
        onChecked: [{ type: Output }]
    };
    return DoCheckboxComponent;
}(DoValueAccessor));
export { DoCheckboxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NoZWNrYm94L2RvLWNoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUd0RTtJQUt5Qyx1Q0FBZ0M7SUFNckUsNkJBQWdDLFNBQW9CLEVBQ3hCLE1BQWM7UUFEMUMsWUFFRSxrQkFBTSxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQ3pCO1FBRjJCLFlBQU0sR0FBTixNQUFNLENBQVE7UUFOakMsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLGVBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7SUFLakUsQ0FBQztJQUVELDZDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUN4QjtRQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxXQUFTLEdBQVksS0FBSyxDQUFDO1lBQy9CLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQW9CO2dCQUNsRCxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7b0JBQ2xCLFdBQVMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO2lCQUM1QjtZQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsV0FBUyxFQUFFO29CQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQzt3QkFDL0IsVUFBVSxFQUFFLElBQUk7cUJBQ2pCLENBQUMsQ0FBQztpQkFDSjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3hDO2FBQ0Y7WUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkE3QjBDLFNBQVMsdUJBQXZDLFFBQVEsWUFBSSxJQUFJOzZDQUMxQixNQUFNLFNBQUMsU0FBUzs7O2dCQVp0QixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBRXZCLG0rQkFBMkM7O2lCQUM1Qzs7O2dCQVJRLFNBQVMsdUJBZUQsUUFBUSxZQUFJLElBQUk7NkNBQzFCLE1BQU0sU0FBQyxTQUFTOzs7MkJBTmxCLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLE1BQU07O0lBZ0NYLDBCQUFDO0NBQUEsQUF6Q0QsQ0FLeUMsZUFBZSxHQW9DdkQ7U0FwQ1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3B0aW9uYWwsIFNlbGYsIEluamVjdCwgTE9DQUxFX0lELCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRG9WYWx1ZUFjY2Vzc29yIH0gZnJvbSAnLi4vYmFzZS9kby12YWx1ZS1hY2Nlc3Nvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2tib3hNb2RlbCB9IGZyb20gJy4vY2hlY2tib3gubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1jaGVja2JveCcsXG4gIHN0eWxlVXJsczogWycuL2RvLWNoZWNrYm94LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kby1jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERvQ2hlY2tib3hDb21wb25lbnQgZXh0ZW5kcyBEb1ZhbHVlQWNjZXNzb3I8Q2hlY2tib3hNb2RlbFtdPiB7XG4gICAgQElucHV0KCkgY29sTGFiZWw6IG51bWJlciA9IDM7XG4gICAgQElucHV0KCkgY29sSW5wdXQ6IG51bWJlciA9IDk7XG4gICAgQElucHV0KCkgZGF0YTogQ2hlY2tib3hNb2RlbFtdO1xuICAgIEBPdXRwdXQoKSBvbkNoZWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2VsZigpIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgICAgQEluamVjdChMT0NBTEVfSUQpIHB1YmxpYyBsb2NhbGU6IHN0cmluZykge1xuICAgICAgc3VwZXIobmdDb250cm9sLCBsb2NhbGUpO1xuICAgIH1cblxuICAgIG9uQ2hlY2tlZENoYW5nZSgpIHtcbiAgICAgIGlmICghdGhpcy52YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5kYXRhO1xuICAgICAgfVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkudmFsdWVPZigpKSB7XG4gICAgICAgIGxldCBpc0NoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgQXJyYXkuZnJvbSh0aGlzLnZhbHVlKS5mb3JFYWNoKCh2YWx1ZTogQ2hlY2tib3hNb2RlbCkgPT4ge1xuICAgICAgICAgIGlmICh2YWx1ZS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgaXNDaGVja2VkID0gdmFsdWUuc2VsZWN0ZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMucmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAoIWlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5zZXRFcnJvcnMoe1xuICAgICAgICAgICAgICAncmVxdWlyZWQnOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wuc2V0RXJyb3JzKG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5vbkNoZWNrZWQuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB9XG59XG4iXX0=