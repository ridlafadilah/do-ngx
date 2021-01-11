import { Component, Input } from '@angular/core';
export class DoChartComponent {
    constructor() {
        this.options = {};
    }
    set optionsFn(options) {
        this.options = options;
    }
}
DoChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-chart',
                template: "<div echarts [options]=\"options\" class=\"echart\"></div>",
                styles: [".nb-theme-default :host do-chart{display:block;height:28.875rem;width:100%}.nb-theme-default :host ::ng-deep .echart{height:100%;width:100%}.nb-theme-dark :host do-chart{display:block;height:28.875rem;width:100%}.nb-theme-dark :host ::ng-deep .echart{height:100%;width:100%}.nb-theme-cosmic :host do-chart{display:block;height:28.875rem;width:100%}.nb-theme-cosmic :host ::ng-deep .echart{height:100%;width:100%}.nb-theme-corporate :host do-chart{display:block;height:28.875rem;width:100%}.nb-theme-corporate :host ::ng-deep .echart{height:100%;width:100%}"]
            },] }
];
DoChartComponent.propDecorators = {
    optionsFn: [{ type: Input }],
    options: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NoYXJ0cy9iYXNlL2RvLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9qRCxNQUFNLE9BQU8sZ0JBQWdCO0lBTDdCO1FBU2tCLFlBQU8sR0FBUSxFQUFFLENBQUM7SUFJcEMsQ0FBQztJQVBDLElBQW9CLFNBQVMsQ0FBQyxPQUFZO1FBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7OztZQVJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFFcEIsc0VBQXdDOzthQUN6Qzs7O3dCQUVFLEtBQUs7c0JBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tY2hhcnQnLFxuICBzdHlsZVVybHM6IFsnLi9kby1jaGFydC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZG8tY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEb0NoYXJ0Q29tcG9uZW50ICB7XG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgb3B0aW9uc0ZuKG9wdGlvbnM6IGFueSkge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cbiAgQElucHV0KCkgcHVibGljIG9wdGlvbnM6IGFueSA9IHt9O1xuICBwdWJsaWMgZGF0YTogYW55O1xuICBwdWJsaWMgdHlwZTogJ2JhcicgfCAncGllJyB8ICdsaW5lJyB8ICdob3Jpem9udGFsQmFyJyB8ICdyYWRhcic7XG5cbn1cbiJdfQ==