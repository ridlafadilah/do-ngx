import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NbInputModule, NbIconModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { NgxBaseModule } from '../base/ngx-base.module';
import { NgxInputTextComponent } from './text/ngx-input-text.component';
import { NgxInputCurrencyComponent } from './currency/ngx-input-currency.component';
import { NgxInputIconComponent } from './icon/ngx-input-icon.component';
import { NgxInputBaseIconComponent } from './icon/ngx-input-base-icon.component';

export const components = [
  NgxInputTextComponent,
  NgxInputBaseIconComponent,
  NgxInputIconComponent,
  NgxInputCurrencyComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    NbIconModule,
    TranslateModule,
    NgxBaseModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
    NbInputModule,
  ],
})
export class NgxInputModule { }
