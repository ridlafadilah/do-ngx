import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCheckboxModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DoBaseModule } from '../base/do-base.module';
import { DoCheckboxComponent } from './do-checkbox.component';

export const CHECKBOX_COMPONENTS = [
  DoCheckboxComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbCheckboxModule,
    TranslateModule,
    DoBaseModule,
  ],
  declarations: [
    ...CHECKBOX_COMPONENTS,
  ],
  exports: [
    ...CHECKBOX_COMPONENTS,
    NbCheckboxModule,
  ],
})
export class DoCheckBoxModule { }
