import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { OnInit } from '@angular/core';
import { TreeMode } from 'tree-ngx';

@Component({
  selector: 'do-tree',
  templateUrl: './do-tree.component.html',
  styleUrls: ['./do-tree.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoTreeComponent implements OnInit {
  @Input() public set nodeItemsFn(nodeItems: any) {
    this.nodeItems = nodeItems;
  }
  @Input() public nodeItems: any = [{}];
  @Input() public options: any = {
    mode: TreeMode.MultiSelect,
    checkboxes: true,
    alwaysEmitSelected: true
  };
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {}

  onSelectedItems(event: any) {
    this.onSelect.emit(event);
  }
}
