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

@NgModule({
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
})
export class DoChartsGraphModule { }
