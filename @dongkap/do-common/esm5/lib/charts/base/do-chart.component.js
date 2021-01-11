import { Component, Input } from '@angular/core';
var DoChartComponent = /** @class */ (function () {
    function DoChartComponent() {
        this.options = {};
    }
    Object.defineProperty(DoChartComponent.prototype, "optionsFn", {
        set: function (options) {
            this.options = options;
        },
        enumerable: false,
        configurable: true
    });
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
    return DoChartComponent;
}());
export { DoChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NoYXJ0cy9iYXNlL2RvLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRDtJQUFBO1FBU2tCLFlBQU8sR0FBUSxFQUFFLENBQUM7SUFJcEMsQ0FBQztJQVBDLHNCQUFvQix1Q0FBUzthQUE3QixVQUE4QixPQUFZO1lBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLENBQUM7OztPQUFBOztnQkFSRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBRXBCLHNFQUF3Qzs7aUJBQ3pDOzs7NEJBRUUsS0FBSzswQkFHTCxLQUFLOztJQUlSLHVCQUFDO0NBQUEsQUFiRCxJQWFDO1NBUlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1jaGFydCcsXG4gIHN0eWxlVXJsczogWycuL2RvLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kby1jaGFydC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERvQ2hhcnRDb21wb25lbnQgIHtcbiAgQElucHV0KCkgcHVibGljIHNldCBvcHRpb25zRm4ob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuICBASW5wdXQoKSBwdWJsaWMgb3B0aW9uczogYW55ID0ge307XG4gIHB1YmxpYyBkYXRhOiBhbnk7XG4gIHB1YmxpYyB0eXBlOiAnYmFyJyB8ICdwaWUnIHwgJ2xpbmUnIHwgJ2hvcml6b250YWxCYXInIHwgJ3JhZGFyJztcblxufVxuIl19