import { Pipe } from '@angular/core';
var PluralPipe = /** @class */ (function () {
    function PluralPipe() {
    }
    PluralPipe.prototype.transform = function (input, label, pluralLabel) {
        if (pluralLabel === void 0) { pluralLabel = ''; }
        input = input || 0;
        return input === 1
            ? input + " " + label
            : pluralLabel
                ? input + " " + pluralLabel
                : input + " " + label + "s";
    };
    PluralPipe.decorators = [
        { type: Pipe, args: [{ name: 'ngxPlural' },] }
    ];
    return PluralPipe;
}());
export { PluralPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1cmFsLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9wbHVyYWwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRDtJQUFBO0lBV0EsQ0FBQztJQVJDLDhCQUFTLEdBQVQsVUFBVSxLQUFhLEVBQUUsS0FBYSxFQUFFLFdBQXdCO1FBQXhCLDRCQUFBLEVBQUEsZ0JBQXdCO1FBQzlELEtBQUssR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ25CLE9BQU8sS0FBSyxLQUFLLENBQUM7WUFDaEIsQ0FBQyxDQUFJLEtBQUssU0FBSSxLQUFPO1lBQ3JCLENBQUMsQ0FBQyxXQUFXO2dCQUNYLENBQUMsQ0FBSSxLQUFLLFNBQUksV0FBYTtnQkFDM0IsQ0FBQyxDQUFJLEtBQUssU0FBSSxLQUFLLE1BQUcsQ0FBQztJQUM3QixDQUFDOztnQkFWRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOztJQVczQixpQkFBQztDQUFBLEFBWEQsSUFXQztTQVZZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ25neFBsdXJhbCcgfSlcbmV4cG9ydCBjbGFzcyBQbHVyYWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKGlucHV0OiBudW1iZXIsIGxhYmVsOiBzdHJpbmcsIHBsdXJhbExhYmVsOiBzdHJpbmcgPSAnJyk6IHN0cmluZyB7XG4gICAgaW5wdXQgPSBpbnB1dCB8fCAwO1xuICAgIHJldHVybiBpbnB1dCA9PT0gMVxuICAgICAgPyBgJHtpbnB1dH0gJHtsYWJlbH1gXG4gICAgICA6IHBsdXJhbExhYmVsXG4gICAgICAgID8gYCR7aW5wdXR9ICR7cGx1cmFsTGFiZWx9YFxuICAgICAgICA6IGAke2lucHV0fSAke2xhYmVsfXNgO1xuICB9XG59XG4iXX0=