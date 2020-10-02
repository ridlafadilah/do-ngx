import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NbIconModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { DoBaseModule } from '../base/do-base.module';
import { DoLabelTextComponent } from './do-label-text.component';

export const LABEL_COMPONENTS = [
  DoLabelTextComponent,
];

@NgModule({
  imports: [
    CommonModule,
    NbIconModule,
    TranslateModule,
    DoBaseModule,
  ],
  declarations: [
    ...LABEL_COMPONENTS,
  ],
  exports: [
    ...LABEL_COMPONENTS,
  ],
})
export class DoLabelModule { }
