import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardChildService } from '@dongkap/do-auth';
import { MgmtUserComponent } from './do-mgmt-user.component';
import { MgmtEndUserListPageComponent } from './end-user/list/mgmt-end-user-list-page.component';
import { MgmtEndUserDetailPageComponent } from './end-user/detail/mgmt-end-user-detail-page.component';
import { MgmtAdminListPageComponent } from './admin/list/mgmt-admin-list-page.component';
import { MgmtAdminDetailPageComponent } from './admin/detail/mgmt-admin-detail-page.component';

const routes: Routes = [{
  path: '',
  component: MgmtUserComponent,
  canActivateChild: [AuthGuardChildService],
  children: [
    {
      path: 'end',
      component: MgmtEndUserListPageComponent,
      data: {
        code: '#MANAGEMENT-END-USER-PAGE',
      },
    },
    {
      path: 'end/detail',
      component: MgmtEndUserDetailPageComponent,
      data: {
        code: '#MANAGEMENT-END-USER-PAGE',
      },
    },
    {
      path: 'admin',
      component: MgmtAdminListPageComponent,
      data: {
        code: '#MANAGEMENT-ADMIN-PAGE',
      },
    },
    {
      path: 'admin/detail',
      component: MgmtAdminDetailPageComponent,
      data: {
        code: '#MANAGEMENT-ADMIN-PAGE',
      },
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoMgmtUserRoutingModule {
}
