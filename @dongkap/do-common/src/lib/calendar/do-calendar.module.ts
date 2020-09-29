import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

export const components = [
];

@NgModule({
  imports: [
    FormsModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
})
export class DoCalendarModule { }
