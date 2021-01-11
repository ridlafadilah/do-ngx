import { __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartModule } from 'angular2-chartjs';
import { DoChartComponent } from './base/do-chart.component';
import * as echarts from 'echarts';
export var CHART_COMPONENTS = [
    DoChartComponent,
];
var DoChartsGraphModule = /** @class */ (function () {
    function DoChartsGraphModule() {
    }
    DoChartsGraphModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        NgxChartsModule,
                        ChartModule,
                        NgxEchartsModule.forRoot({
                            echarts: echarts,
                        }),
                    ],
                    declarations: __spread(CHART_COMPONENTS),
                    exports: __spread(CHART_COMPONENTS),
                },] }
    ];
    return DoChartsGraphModule;
}());
export { DoChartsGraphModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tY2hhcnRzLWdyYXBoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9jaGFydHMvZG8tY2hhcnRzLWdyYXBoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sS0FBSyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBRW5DLE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFHO0lBQzlCLGdCQUFnQjtDQUNqQixDQUFDO0FBRUY7SUFBQTtJQWlCbUMsQ0FBQzs7Z0JBakJuQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxlQUFlO3dCQUNmLFdBQVc7d0JBQ1gsZ0JBQWdCLENBQUMsT0FBTyxDQUFDOzRCQUN2QixPQUFPLFNBQUE7eUJBQ1IsQ0FBQztxQkFDSDtvQkFDRCxZQUFZLFdBQ1AsZ0JBQWdCLENBQ3BCO29CQUNELE9BQU8sV0FDRixnQkFBZ0IsQ0FDcEI7aUJBQ0Y7O0lBQ2tDLDBCQUFDO0NBQUEsQUFqQnBDLElBaUJvQztTQUF2QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4Q2hhcnRzTW9kdWxlIH0gZnJvbSAnQHN3aW1sYW5lL25neC1jaGFydHMnO1xuaW1wb3J0IHsgTmd4RWNoYXJ0c01vZHVsZSB9IGZyb20gJ25neC1lY2hhcnRzJztcbmltcG9ydCB7IENoYXJ0TW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItY2hhcnRqcyc7XG5pbXBvcnQgeyBEb0NoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9iYXNlL2RvLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBlY2hhcnRzIGZyb20gJ2VjaGFydHMnO1xuXG5leHBvcnQgY29uc3QgQ0hBUlRfQ09NUE9ORU5UUyA9IFtcbiAgRG9DaGFydENvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTmd4Q2hhcnRzTW9kdWxlLFxuICAgIENoYXJ0TW9kdWxlLFxuICAgIE5neEVjaGFydHNNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBlY2hhcnRzLFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5DSEFSVF9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uQ0hBUlRfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9DaGFydHNHcmFwaE1vZHVsZSB7IH1cbiJdfQ==