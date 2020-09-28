import { Component, Input } from '@angular/core';

@Component({
  selector: 'do-chart',
  styleUrls: ['./ngx-chart.component.scss'],
  templateUrl: './ngx-chart.component.html',
})
export class NgxChartComponent  {
  @Input() public set optionsFn(options: any) {
    this.options = options;
  }
  @Input() public options: any = {};
  public data: any;
  public type: 'bar' | 'pie' | 'line' | 'horizontalBar' | 'radar';

}
