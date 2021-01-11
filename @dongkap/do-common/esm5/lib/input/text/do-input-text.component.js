import { __extends } from "tslib";
import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DoValueAccessor } from '../../base/do-value-accessor.component';
var DoInputTextComponent = /** @class */ (function (_super) {
    __extends(DoInputTextComponent, _super);
    function DoInputTextComponent(ngControl, locale) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.locale = locale;
        _this.colLabel = 3;
        _this.colInput = 9;
        _this.minLength = 0;
        _this.maxLength = 100;
        _this.min = 0;
        _this.max = 999;
        _this.step = 1;
        _this.capslock = false;
        _this.type = 'text';
        return _this;
    }
    DoInputTextComponent.prototype.onKeyUp = function (event) {
        if (this.capslock) {
            this.value = this.value.toUpperCase();
        }
    };
    DoInputTextComponent.prototype.onKeyDown = function (event) {
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
    };
    DoInputTextComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    DoInputTextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-input-text',
                    template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"{{type}}\"\n      id=\"{{name}}\"\n      [step]=\"step\"\n      [pattern]=\"pattern\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required),\n        'input-capslock': capslock\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onTouched($event.target.value)\"\n      (keydown)=\"onKeyDown($event)\"\n      (keypress)=\"onKeyUp($event)\"\n      [(ngModel)]=\"value\"\n      #input nbInput fullWidth>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".input-capslock{text-transform:uppercase}"]
                },] }
    ];
    DoInputTextComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
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
    return DoInputTextComponent;
}(DoValueAccessor));
export { DoInputTextComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8taW5wdXQtdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb21tb24vIiwic291cmNlcyI6WyJsaWIvaW5wdXQvdGV4dC9kby1pbnB1dC10ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFekU7SUFNMEMsd0NBQXVCO0lBWTdELDhCQUFnQyxTQUFvQixFQUN4QixNQUFjO1FBRDFDLFlBRUUsa0JBQU0sU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUN6QjtRQUYyQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBWGpDLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsU0FBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixTQUFHLEdBQVcsR0FBRyxDQUFDO1FBQ2xCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixVQUFJLEdBQW1DLE1BQU0sQ0FBQzs7SUFLdkQsQ0FBQztJQUVELHNDQUFPLEdBQVAsVUFBUSxLQUFvQjtRQUMxQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQUVELHdDQUFTLEdBQVQsVUFBVSxLQUFvQjtRQUM1QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzFCLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxHQUFHO2dCQUNqQyxPQUFPLEtBQUssQ0FBQztZQUNmLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHO2dCQUNyQyxPQUFPLEtBQUssQ0FBQztZQUNmLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHO2dCQUNwQyxPQUFPLEtBQUssQ0FBQztZQUNmLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDZCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ3ZDLElBQ0UsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3pGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxnQkFBZ0I7d0JBQy9FLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxnQkFBZ0I7d0JBQy9FLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxnQkFBZ0I7d0JBQy9FLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxjQUFjO3dCQUM3RSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLElBQUksY0FBYzt3QkFDN0UsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxJQUFJLGNBQWM7d0JBQzdFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLENBQUM7d0JBQ25DLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxNQUFNLENBQUM7d0JBQ3BDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxXQUFXLENBQUM7d0JBQ3pDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxZQUFZLENBQUMsRUFBRTt3QkFDMUMsT0FBTyxJQUFJLENBQUM7cUJBQ2Y7b0JBQ0QsT0FBTyxLQUFLLENBQUM7aUJBQ2Q7YUFDRjtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7O2dCQXpDMEMsU0FBUyx1QkFBdkMsUUFBUSxZQUFJLElBQUk7NkNBQzFCLE1BQU0sU0FBQyxTQUFTOzs7Z0JBbkJ0QixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBRXpCLGc5Q0FBNkM7b0JBQzdDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7OztnQkFSUSxTQUFTLHVCQXFCRCxRQUFRLFlBQUksSUFBSTs2Q0FDMUIsTUFBTSxTQUFDLFNBQVM7Ozs4QkFabEIsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7SUE2Q1YsMkJBQUM7Q0FBQSxBQTdERCxDQU0wQyxlQUFlLEdBdUR4RDtTQXZEWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT3B0aW9uYWwsIFNlbGYsIEluamVjdCwgTE9DQUxFX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEb1ZhbHVlQWNjZXNzb3IgfSBmcm9tICcuLi8uLi9iYXNlL2RvLXZhbHVlLWFjY2Vzc29yLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWlucHV0LXRleHQnLFxuICBzdHlsZVVybHM6IFsnLi9kby1pbnB1dC10ZXh0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kby1pbnB1dC10ZXh0LmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRG9JbnB1dFRleHRDb21wb25lbnQgZXh0ZW5kcyBEb1ZhbHVlQWNjZXNzb3I8c3RyaW5nPiB7XG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICBASW5wdXQoKSBjb2xMYWJlbDogbnVtYmVyID0gMztcbiAgICBASW5wdXQoKSBjb2xJbnB1dDogbnVtYmVyID0gOTtcbiAgICBASW5wdXQoKSBtaW5MZW5ndGg6IG51bWJlciA9IDA7XG4gICAgQElucHV0KCkgbWF4TGVuZ3RoOiBudW1iZXIgPSAxMDA7XG4gICAgQElucHV0KCkgbWluOiBudW1iZXIgPSAwO1xuICAgIEBJbnB1dCgpIG1heDogbnVtYmVyID0gOTk5O1xuICAgIEBJbnB1dCgpIHN0ZXA6IG51bWJlciA9IDE7XG4gICAgQElucHV0KCkgY2Fwc2xvY2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSB0eXBlOiAndGV4dCcgfCAncGFzc3dvcmQnIHwgJ251bWJlcicgPSAndGV4dCc7XG5cbiAgICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2VsZigpIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgICAgQEluamVjdChMT0NBTEVfSUQpIHB1YmxpYyBsb2NhbGU6IHN0cmluZykge1xuICAgICAgc3VwZXIobmdDb250cm9sLCBsb2NhbGUpO1xuICAgIH1cblxuICAgIG9uS2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLmNhcHNsb2NrKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBpZiAodGhpcy50eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdFJylcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnN0ZXAgPj0gMSAmJiBldmVudC5rZXkgPT09ICcuJylcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLm1pbiA+PSAwICYmIGV2ZW50LmtleSA9PT0gJy0nKVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGggPj0gdGhpcy5tYXhMZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgWydERUxFVEUnLCAnQkFDS1NQQUNFJywgJ1RBQicsICdFU0NBUEUnLCAnRU5URVInXS5pbmRleE9mKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpKSAhPT0gLTEgfHxcbiAgICAgICAgICAgICAgKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpID09PSAnQScgJiYgZXZlbnQuY3RybEtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IEN0cmwrQVxuICAgICAgICAgICAgICAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdDJyAmJiBldmVudC5jdHJsS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ3RybCtDXG4gICAgICAgICAgICAgIChldmVudC5rZXkudG9VcHBlckNhc2UoKSA9PT0gJ1gnICYmIGV2ZW50LmN0cmxLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDdHJsK1hcbiAgICAgICAgICAgICAgKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpID09PSAnQScgJiYgZXZlbnQubWV0YUtleSA9PT0gdHJ1ZSkgfHwgLy8gQ21kK0EgKE1hYylcbiAgICAgICAgICAgICAgKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpID09PSAnQycgJiYgZXZlbnQubWV0YUtleSA9PT0gdHJ1ZSkgfHwgLy8gQ21kK0MgKE1hYylcbiAgICAgICAgICAgICAgKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpID09PSAnWCcgJiYgZXZlbnQubWV0YUtleSA9PT0gdHJ1ZSkgfHwgLy8gQ21kK1ggKE1hYylcbiAgICAgICAgICAgICAgKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpID09PSAnRU5EJykgfHxcbiAgICAgICAgICAgICAgKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpID09PSAnSE9NRScpIHx8XG4gICAgICAgICAgICAgIChldmVudC5rZXkudG9VcHBlckNhc2UoKSA9PT0gJ0FSUk9XTEVGVCcpIHx8XG4gICAgICAgICAgICAgIChldmVudC5rZXkudG9VcHBlckNhc2UoKSA9PT0gJ0FSUk9XUklHSFQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxufVxuIl19