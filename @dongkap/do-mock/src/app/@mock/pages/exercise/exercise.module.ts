import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbButtonModule } from '@nebular/theme';

import { NgxThemeModule } from '@dongkap/ngx-theme';
import { NgxCommonModule } from '@dongkap/ngx-common';
import { ExerciseComponent } from './exercise.component';

const components = [
  ExerciseComponent,
];

const modules = [
  FormsModule,
  ReactiveFormsModule,
  NbCardModule,
  NbButtonModule,
  NgxThemeModule,
  NgxCommonModule,
];

@NgModule({
  imports: [
    ...modules,
  ],
  declarations: [
    ...components,
  ],
})
export class ExerciseModule { }
