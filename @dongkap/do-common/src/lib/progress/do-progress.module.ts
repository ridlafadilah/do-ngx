import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

export const PROGRESS_COMPONENTS = [
];

@NgModule({
  imports: [
    FormsModule,
  ],
  declarations: [
    ...PROGRESS_COMPONENTS,
  ],
  exports: [
    ...PROGRESS_COMPONENTS,
  ],
})
export class DoProgressModule { }
