import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NbButtonModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { NgxBaseModule } from '../base/ngx-base.module';
import { NgxButtonSubmitComponent } from './submit/ngx-button-submit.component';

export const components = [
  NgxButtonSubmitComponent,
];

@NgModule({
  imports: [
    CommonModule,
    NbButtonModule,
    TranslateModule,
    NgxBaseModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
    NbButtonModule,
  ],
})
export class NgxButtonModule { }
