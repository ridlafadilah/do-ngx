import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NbIconModule, NbButtonModule } from '@nebular/theme';
import { NgxBaseModule } from '../base/ngx-base.module';
import { NgxInputModule } from '../input/ngx-input.module';
import { NgxDatatableComponent } from './ngx/ngx-datatable.component';
import { NgxDatatableHeaderComponent } from './ngx/header/ngx-datatable-header.component';
import { NgxDatatableCollapseComponent } from './ngx/header/collapse/ngx-datatable-collapse.component';
import { NgxDatatableBaseComponent } from './ngx/base/ngx-datatable-base.component';
import { NgxButtonModule } from '../button/ngx-button.module';

export const components = [
  NgxDatatableComponent,
  NgxDatatableBaseComponent,
  NgxDatatableHeaderComponent,
  NgxDatatableCollapseComponent,
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
    NgxBaseModule,
    NgxInputModule,
    NgxButtonModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
})
export class NgxTableModule { }
