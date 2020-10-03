import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbButtonModule } from '@nebular/theme';

import { DoThemeModule } from '@dongkap/do-theme';
import { DoCommonModule } from '@dongkap/do-common';
import { ExerciseComponent } from './exercise.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbButtonModule,
    DoThemeModule,
    DoCommonModule,
  ],
  declarations: [
    ExerciseComponent,
  ],
})
export class DoExerciseModule { }
