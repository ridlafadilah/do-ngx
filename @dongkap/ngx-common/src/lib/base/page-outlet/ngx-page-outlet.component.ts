import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-page-outlet',
  styleUrls: ['./ngx-page-outlet.component.scss'],
  templateUrl: './ngx-page-outlet.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class NgxPageOutletComponent {
  @Input() public header: string;
  @Input() public url: string;
  @Input() public width: number = 12;
  @Input() public dataSelect: any[];
  @Input() public selected: any;
  @Output() public selectChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) {}

  public back(): boolean {
    this.router.navigate([this.url]);
    return false;
  }

  public onChangeSelect(event: any) {
    this.selected = event;
    this.selectChange.emit(event);
  }

}
