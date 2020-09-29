import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NbButtonModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { DoBaseModule } from '../base/do-base.module';
import { DoButtonSubmitComponent } from './submit/do-button-submit.component';

export const components = [
  DoButtonSubmitComponent,
];

@NgModule({
  imports: [
    CommonModule,
    NbButtonModule,
    TranslateModule,
    DoBaseModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
    NbButtonModule,
  ],
})
export class DoButtonModule { }
