import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NbIconModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { NgxBaseModule } from '../base/ngx-base.module';
import { NgxLabelTextComponent } from './ngx-label-text.component';

export const components = [
  NgxLabelTextComponent,
];

@NgModule({
  imports: [
    CommonModule,
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
export class NgxLabelModule { }
