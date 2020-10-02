import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DoTreeComponent } from './do-tree.component';
import { DoTreeNodeComponent } from './do-tree-node.component';
import { TranslateModule } from '@ngx-translate/core';
import { DoBaseModule } from '../base/do-base.module';
import { NbIconModule } from '@nebular/theme';

export const TREE_COMPONENTS = [
  DoTreeComponent,
  DoTreeNodeComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbIconModule,
    TranslateModule,
    DoBaseModule,
  ],
  declarations: [
    ...TREE_COMPONENTS,
  ],
  exports: [
    ...TREE_COMPONENTS,
  ],
})
export class DoTreeModule {}
