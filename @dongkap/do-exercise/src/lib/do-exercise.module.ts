import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbButtonModule } from '@nebular/theme';

import { DoThemeModule } from '@dongkap/do-theme';
import { DoCommonModule } from '@dongkap/do-common';
import { DoExerciseRoutingModule } from './do-exercise-routing.module';
import { DoExerciseComponent } from './do-exercise.component';
import { ExerciseComponent } from './exercise.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbButtonModule,
    DoThemeModule,
    DoCommonModule,
    DoExerciseRoutingModule,
  ],
  declarations: [
    DoExerciseComponent,
    ExerciseComponent,
  ],
})
export class DoExerciseModule { }
