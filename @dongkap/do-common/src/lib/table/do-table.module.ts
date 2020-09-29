import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NbIconModule, NbButtonModule } from '@nebular/theme';
import { DoBaseModule } from '../base/do-base.module';
import { DoInputModule } from '../input/do-input.module';
import { DoDatatableComponent } from './ngx/do-datatable.component';
import { DoDatatableHeaderComponent } from './ngx/header/do-datatable-header.component';
import { DoDatatableCollapseComponent } from './ngx/header/collapse/do-datatable-collapse.component';
import { DoDatatableBaseComponent } from './ngx/base/do-datatable-base.component';
import { DoButtonModule } from '../button/do-button.module';

export const components = [
  DoDatatableComponent,
  DoDatatableBaseComponent,
  DoDatatableHeaderComponent,
  DoDatatableCollapseComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NbButtonModule,
    NbIconModule,
    NgxDatatableModule,
    DoBaseModule,
    DoInputModule,
    DoButtonModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
})
export class DoTableModule { }
