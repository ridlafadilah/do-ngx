import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

export const SPINNER_COMPONENTS = [
];

@NgModule({
  imports: [
    FormsModule,
  ],
  declarations: [
    ...SPINNER_COMPONENTS,
  ],
  exports: [
    ...SPINNER_COMPONENTS,
  ],
})
export class DoSpinnerModule { }
