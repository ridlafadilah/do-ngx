import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './layout/auth.component';
import { LoginPageComponent } from './auth/login/login-page.component';
import { UnauthorizeGuardService } from './services/unauth-guard.service';
import { LogoutComponent } from './auth/logout/logout.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [
    {
      path: '',
      component: LoginPageComponent,
      canActivate: [UnauthorizeGuardService],
    },
    {
      path: 'login',
      component: LoginPageComponent,
      canActivate: [UnauthorizeGuardService],
    },
    {
      path: 'logout',
      component: LogoutComponent,
      canActivate: [AuthGuardService],
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoAuthRoutingModule {
}
