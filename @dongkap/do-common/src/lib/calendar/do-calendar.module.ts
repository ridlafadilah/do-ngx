import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

export const CALENDAR_COMPONENTS = [
];

@NgModule({
  imports: [
    FormsModule,
  ],
  declarations: [
    ...CALENDAR_COMPONENTS,
  ],
  exports: [
    ...CALENDAR_COMPONENTS,
  ],
})
export class DoCalendarModule { }
