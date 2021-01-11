import { Component } from '@angular/core';
var DoMapsAgmComponent = /** @class */ (function () {
    function DoMapsAgmComponent() {
        this.lat = -2.3641701;
        this.lng = 117.7690927;
    }
    DoMapsAgmComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-maps-agm',
                    template: "<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>",
                    styles: [".nb-theme-default :host ::ng-deep agm-map{width:100%;height:36.5625rem}.nb-theme-dark :host ::ng-deep agm-map{width:100%;height:36.5625rem}.nb-theme-cosmic :host ::ng-deep agm-map{width:100%;height:36.5625rem}.nb-theme-corporate :host ::ng-deep agm-map{width:100%;height:36.5625rem}"]
                },] }
    ];
    return DoMapsAgmComponent;
}());
export { DoMapsAgmComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWFwcy1hZ20uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL21hcHMvYWdtL2RvLW1hcHMtYWdtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDO0lBQUE7UUFPRSxRQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDakIsUUFBRyxHQUFHLFdBQVcsQ0FBQztJQUVwQixDQUFDOztnQkFWQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBRXZCLDRJQUEyQzs7aUJBQzVDOztJQU1ELHlCQUFDO0NBQUEsQUFWRCxJQVVDO1NBTFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLW1hcHMtYWdtJyxcbiAgc3R5bGVVcmxzOiBbJy4vZG8tbWFwcy1hZ20uY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RvLW1hcHMtYWdtLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRG9NYXBzQWdtQ29tcG9uZW50IHtcblxuICBsYXQgPSAtMi4zNjQxNzAxO1xuICBsbmcgPSAxMTcuNzY5MDkyNztcblxufVxuIl19