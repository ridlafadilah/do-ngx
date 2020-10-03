import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoExerciseComponent } from './do-exercise.component';
import { ExerciseComponent } from './exercise.component';

const routes: Routes = [
  {
    path: '',
    component: DoExerciseComponent,
    children: [
      {
        path: 'exercise',
        component: ExerciseComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoExerciseRoutingModule {
}
