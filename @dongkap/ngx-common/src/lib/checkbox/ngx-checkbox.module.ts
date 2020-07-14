import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCheckboxModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxBaseModule } from '../base/ngx-base.module';
import { NgxCheckboxComponent } from './ngx-checkbox.component';

export const components = [
  NgxCheckboxComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbCheckboxModule,
    TranslateModule,
    NgxBaseModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
    NbCheckboxModule,
  ],
})
export class NgxCheckBoxModule { }
