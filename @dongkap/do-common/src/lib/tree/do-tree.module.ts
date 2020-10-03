import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NbIconModule } from '@nebular/theme';
import { TreeNgxModule } from 'tree-ngx';

import { DoTreeComponent } from './do-tree.component';
import { DoBaseModule } from '../base/do-base.module';

export const TREE_COMPONENTS = [
  DoTreeComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbIconModule,
    TranslateModule,
    TreeNgxModule,
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
