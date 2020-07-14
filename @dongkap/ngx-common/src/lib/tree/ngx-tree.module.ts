import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxTreeComponent } from './ngx-tree.component';
import { NgxTreeNodeComponent } from './ngx-tree-node.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgxBaseModule } from '../base/ngx-base.module';
import { NbIconModule } from '@nebular/theme';

export const components = [
  NgxTreeComponent,
  NgxTreeNodeComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbIconModule,
    TranslateModule,
    NgxBaseModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
})
export class NgxTreeModule {}
