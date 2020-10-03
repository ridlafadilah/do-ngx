import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardChildService } from '@dongkap/do-auth';
import { ParameterComponent } from './do-parameter.component';
import { ParameterListGroupPageComponent } from './group/list-group/parameter-list-group-page.component';
import { ParameterAddGroupPageComponent } from './group/add-group/parameter-add-group-page.component';
import { ParameterListDetailPageComponent } from './detail/parameter-list-detail-page.component';
import { ParameterDoDetailPageComponent } from './detail/do/parameter-do-detail-page.component';

const routes: Routes = [{
  path: '',
  component: ParameterComponent,
  canActivateChild: [AuthGuardChildService],
  children: [
    {
      path: '',
      component: ParameterListGroupPageComponent,
      data: {
        code: '#SYSCONF-PARAMETER-PAGE',
      },
    },
    {
      path: 'group',
      component: ParameterListGroupPageComponent,
      data: {
        code: '#SYSCONF-PARAMETER-PAGE',
      },
    },
    {
      path: 'group/:action',
      component: ParameterAddGroupPageComponent,
      data: {
        code: '#SYSCONF-PARAMETER-PAGE',
      },
    },
    {
      path: 'detail',
      component: ParameterListDetailPageComponent,
      data: {
        code: '#SYSCONF-PARAMETER-PAGE',
      },
    },
    {
      path: 'detail/:action',
      component: ParameterDoDetailPageComponent,
      data: {
        code: '#SYSCONF-PARAMETER-PAGE',
      },
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoParameterRoutingModule {
}
