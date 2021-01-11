import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartModule } from 'angular2-chartjs';
import { DoChartComponent } from './base/do-chart.component';
import * as echarts from 'echarts';
export const CHART_COMPONENTS = [
    DoChartComponent,
];
export class DoChartsGraphModule {
}
DoChartsGraphModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    NgxChartsModule,
                    ChartModule,
                    NgxEchartsModule.forRoot({
                        echarts,
                    }),
                ],
                declarations: [
                    ...CHART_COMPONENTS,
                ],
                exports: [
                    ...CHART_COMPONENTS,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tY2hhcnRzLWdyYXBoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9jaGFydHMvZG8tY2hhcnRzLWdyYXBoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxLQUFLLE9BQU8sTUFBTSxTQUFTLENBQUM7QUFFbkMsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUc7SUFDOUIsZ0JBQWdCO0NBQ2pCLENBQUM7QUFtQkYsTUFBTSxPQUFPLG1CQUFtQjs7O1lBakIvQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxlQUFlO29CQUNmLFdBQVc7b0JBQ1gsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO3dCQUN2QixPQUFPO3FCQUNSLENBQUM7aUJBQ0g7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLEdBQUcsZ0JBQWdCO2lCQUNwQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsR0FBRyxnQkFBZ0I7aUJBQ3BCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4Q2hhcnRzTW9kdWxlIH0gZnJvbSAnQHN3aW1sYW5lL25neC1jaGFydHMnO1xuaW1wb3J0IHsgTmd4RWNoYXJ0c01vZHVsZSB9IGZyb20gJ25neC1lY2hhcnRzJztcbmltcG9ydCB7IENoYXJ0TW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItY2hhcnRqcyc7XG5pbXBvcnQgeyBEb0NoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9iYXNlL2RvLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBlY2hhcnRzIGZyb20gJ2VjaGFydHMnO1xuXG5leHBvcnQgY29uc3QgQ0hBUlRfQ09NUE9ORU5UUyA9IFtcbiAgRG9DaGFydENvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTmd4Q2hhcnRzTW9kdWxlLFxuICAgIENoYXJ0TW9kdWxlLFxuICAgIE5neEVjaGFydHNNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBlY2hhcnRzLFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5DSEFSVF9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uQ0hBUlRfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9DaGFydHNHcmFwaE1vZHVsZSB7IH1cbiJdfQ==