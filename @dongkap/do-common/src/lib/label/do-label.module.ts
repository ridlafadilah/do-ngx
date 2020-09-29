import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NbIconModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { DoBaseModule } from '../base/do-base.module';
import { DoLabelTextComponent } from './do-label-text.component';

export const components = [
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
    ...components,
  ],
  exports: [
    ...components,
  ],
})
export class DoLabelModule { }
