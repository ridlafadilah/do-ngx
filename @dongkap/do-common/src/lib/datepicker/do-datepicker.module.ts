import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NbInputModule, NbDatepickerModule } from '@nebular/theme';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { NbMomentDateModule } from '@nebular/moment';
import { TranslateModule } from '@ngx-translate/core';
import { DoBaseModule } from '../base/do-base.module';
import { DoDatePickerComponent } from './do-datepicker.component';

export const DATEPICKER_COMPONENTS = [
  DoDatePickerComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    NbDatepickerModule,
    NbMomentDateModule,
    NbDateFnsDateModule.forRoot({
      parseOptions: { awareOfUnicodeTokens: true },
      formatOptions: { awareOfUnicodeTokens: true },
    }),
    TranslateModule,
    DoBaseModule,
  ],
  declarations: [
    ...DATEPICKER_COMPONENTS,
  ],
  exports: [
    ...DATEPICKER_COMPONENTS,
  ],
})
export class DoDatePickerModule { }
