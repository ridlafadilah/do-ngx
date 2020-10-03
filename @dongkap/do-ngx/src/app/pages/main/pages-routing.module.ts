import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomePageComponent } from '@dongkap/do-extra';
import { ExerciseComponent } from '@dongkap/do-exercise';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      component: HomePageComponent,
    },
    {
      path: 'mgmt/user',
      loadChildren: () => import('../sys/sys-mgmt-user-wrapper.module')
        .then(m => m.SysMgmtUserWrapperModule),
    },
    {
      path: 'sysconf/parameter',
      loadChildren: () => import('../sys/sys-parameter-wrapper.module')
        .then(m => m.SysParameterWrapperModule),
    },
    {
      path: 'sysconf/language',
      loadChildren: () => import('../sys/sys-language-wrapper.module')
        .then(m => m.SysLanguageWrapperModule),
    },
    {
      path: 'user',
      loadChildren: () => import('../extra/extra-wrapper.module')
        .then(m => m.ExtraWrapperModule),
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      // Exercise Page To Be Delete
      path: 'exercise',
      component: ExerciseComponent,
    },
    {
      path: '**',
      redirectTo: '/miscellaneous/404',
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
