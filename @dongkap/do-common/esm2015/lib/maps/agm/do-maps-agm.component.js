import { Component } from '@angular/core';
export class DoMapsAgmComponent {
    constructor() {
        this.lat = -2.3641701;
        this.lng = 117.7690927;
    }
}
DoMapsAgmComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-maps-agm',
                template: "<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>",
                styles: [".nb-theme-default :host ::ng-deep agm-map{width:100%;height:36.5625rem}.nb-theme-dark :host ::ng-deep agm-map{width:100%;height:36.5625rem}.nb-theme-cosmic :host ::ng-deep agm-map{width:100%;height:36.5625rem}.nb-theme-corporate :host ::ng-deep agm-map{width:100%;height:36.5625rem}"]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWFwcy1hZ20uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL21hcHMvYWdtL2RvLW1hcHMtYWdtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzFDLE1BQU0sT0FBTyxrQkFBa0I7SUFML0I7UUFPRSxRQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDakIsUUFBRyxHQUFHLFdBQVcsQ0FBQztJQUVwQixDQUFDOzs7WUFWQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBRXZCLDRJQUEyQzs7YUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tbWFwcy1hZ20nLFxuICBzdHlsZVVybHM6IFsnLi9kby1tYXBzLWFnbS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZG8tbWFwcy1hZ20uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEb01hcHNBZ21Db21wb25lbnQge1xuXG4gIGxhdCA9IC0yLjM2NDE3MDE7XG4gIGxuZyA9IDExNy43NjkwOTI3O1xuXG59XG4iXX0=