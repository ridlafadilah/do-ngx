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
      path: 'mgmt/role',
      loadChildren: () => import('../sys/sys-mgmt-role-wrapper.module')
        .then(m => m.SysMgmtRoleWrapperModule),
    },
    {
      path: 'mgmt/menu',
      loadChildren: () => import('../sys/sys-mgmt-menu-wrapper.module')
        .then(m => m.SysMgmtMenuWrapperModule),
    },
    {
      path: 'mgmt/function/control',
      loadChildren: () => import('../sys/sys-mgmt-function-wrapper.module')
        .then(m => m.SysMgmtFunctionWrapperModule),
    },
    {
      path: 'sysconf/parameter',
      loadChildren: () => import('../sys/sys-parameter-wrapper.module')
        .then(m => m.SysParameterWrapperModule),
    },
    {
      path: 'sysconf/i18n',
      loadChildren: () => import('../sys/sys-locale-wrapper.module')
        .then(m => m.SysLocaleWrapperModule),
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
