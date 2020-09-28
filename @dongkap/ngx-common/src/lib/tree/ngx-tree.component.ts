import {
  Component,
  Input,
  EventEmitter,
  Output,
  ContentChild,
  ViewEncapsulation,
  ContentChildren,
  TemplateRef,
  QueryList,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
  AfterContentInit,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NgxTreeNodeComponent } from './ngx-tree-node.component';
import { TreeNode } from './tree-node.model';

@Component({
  selector: 'do-tree',
  templateUrl: './ngx-tree.component.html',
  styleUrls: ['./ngx-tree.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxTreeComponent implements AfterContentInit, OnDestroy {
  @Input() nodes: TreeNode[];

  @Input('template')
  _templateInput: TemplateRef<any>;

  @Input() icons = {
    collapse: 'plus-circle',
    expand: 'minus-circle',
  };

  @ContentChild(TemplateRef, { static: true })
  _templateQuery: TemplateRef<any>;

  @ContentChildren(NgxTreeNodeComponent) readonly nodeElms: QueryList<NgxTreeNodeComponent>;

  @Output() expand = new EventEmitter();
  @Output() collapse = new EventEmitter();
  @Output() activate = new EventEmitter();
  @Output() deactivate = new EventEmitter();
  @Output() selectNode = new EventEmitter();

  get hasOneLeaf(): boolean {
    return (this.nodes && this.nodes.length === 1) || this.nodeElms.length === 1;
  }

  get template(): TemplateRef<any> {
    return this._templateInput || this._templateQuery;
  }

  private readonly _destroy$ = new Subject<void>();

  constructor(private readonly _cdr: ChangeDetectorRef) {}

  ngAfterContentInit() {
    this.nodeElms.changes.pipe(takeUntil(this._destroy$)).subscribe(() => this._cdr.markForCheck());
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
