import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardChildService } from '@dongkap/do-auth';
import { MgmtFunctionComponent } from './do-mgmt-function.component';
import { FunctionEditorPageComponent } from './editor/editor/function-editor-page.component';
import { FunctionListPageComponent } from './list/function-list-page.component';

const routes: Routes = [{
  path: '',
  component: MgmtFunctionComponent,
  canActivateChild: [AuthGuardChildService],
  children: [
    {
      path: '',
      component: FunctionListPageComponent,
      data: {
        code: '#MANAGEMENT-FUNCTION-CONTROL-PAGE',
      },
    },
    {
      path: ':action',
      component: FunctionEditorPageComponent,
      data: {
        code: '#MANAGEMENT-FUNCTION-CONTROL-PAGE',
      },
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoMgmtFunctionRoutingModule {
}
