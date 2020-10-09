import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'do-page-outlet',
  styleUrls: ['./do-page-outlet.component.scss'],
  templateUrl: './do-page-outlet.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class DoPageOutletComponent {
  @Input() public header: string;
  @Input() public url: string;
  @Input() public width: number = 12;
  @Input() public dataSelect: any[];
  @Input() public selected: any;
  @Input() public param: any;
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
