import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NbInputModule, NbIconModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { DoBaseModule } from '../base/do-base.module';
import { DoInputTextComponent } from './text/do-input-text.component';
import { DoInputCurrencyComponent } from './currency/do-input-currency.component';
import { DoInputIconComponent } from './icon/do-input-icon.component';
import { DoInputBaseIconComponent } from './icon/do-input-base-icon.component';

export const INPUT_COMPONENTS = [
  DoInputTextComponent,
  DoInputBaseIconComponent,
  DoInputIconComponent,
  DoInputCurrencyComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    NbIconModule,
    TranslateModule,
    DoBaseModule,
  ],
  declarations: [
    ...INPUT_COMPONENTS,
  ],
  exports: [
    ...INPUT_COMPONENTS,
    NbInputModule,
  ],
})
export class DoInputModule { }
