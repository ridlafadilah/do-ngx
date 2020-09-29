import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbButtonModule } from '@nebular/theme';

import { DoThemeModule } from '@dongkap/do-theme';
import { DoCommonModule } from '@dongkap/do-common';
import { ExerciseComponent } from './exercise.component';

const components = [
  ExerciseComponent,
];

const modules = [
  FormsModule,
  ReactiveFormsModule,
  NbCardModule,
  NbButtonModule,
  DoThemeModule,
  DoCommonModule,
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
