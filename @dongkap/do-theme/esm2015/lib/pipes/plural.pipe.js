import { Pipe } from '@angular/core';
export class PluralPipe {
    transform(input, label, pluralLabel = '') {
        input = input || 0;
        return input === 1
            ? `${input} ${label}`
            : pluralLabel
                ? `${input} ${pluralLabel}`
                : `${input} ${label}s`;
    }
}
PluralPipe.decorators = [
    { type: Pipe, args: [{ name: 'ngxPlural' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1cmFsLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9wbHVyYWwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUdwRCxNQUFNLE9BQU8sVUFBVTtJQUVyQixTQUFTLENBQUMsS0FBYSxFQUFFLEtBQWEsRUFBRSxjQUFzQixFQUFFO1FBQzlELEtBQUssR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ25CLE9BQU8sS0FBSyxLQUFLLENBQUM7WUFDaEIsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLEtBQUssRUFBRTtZQUNyQixDQUFDLENBQUMsV0FBVztnQkFDWCxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksV0FBVyxFQUFFO2dCQUMzQixDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUM7SUFDN0IsQ0FBQzs7O1lBVkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAnbmd4UGx1cmFsJyB9KVxuZXhwb3J0IGNsYXNzIFBsdXJhbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0oaW5wdXQ6IG51bWJlciwgbGFiZWw6IHN0cmluZywgcGx1cmFsTGFiZWw6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcbiAgICBpbnB1dCA9IGlucHV0IHx8IDA7XG4gICAgcmV0dXJuIGlucHV0ID09PSAxXG4gICAgICA/IGAke2lucHV0fSAke2xhYmVsfWBcbiAgICAgIDogcGx1cmFsTGFiZWxcbiAgICAgICAgPyBgJHtpbnB1dH0gJHtwbHVyYWxMYWJlbH1gXG4gICAgICAgIDogYCR7aW5wdXR9ICR7bGFiZWx9c2A7XG4gIH1cbn1cbiJdfQ==