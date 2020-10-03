import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardChildService } from '@dongkap/do-auth';
import { LanguageComponent } from './do-language.component';
import { LanguageListPageComponent } from './list/language-list-page.component';
import { LanguageAddEditPageComponent } from './add-edit/language-add-edit-page.component';

const routes: Routes = [{
  path: '',
  component: LanguageComponent,
  canActivateChild: [AuthGuardChildService],
  children: [
    {
      path: '',
      component: LanguageListPageComponent,
      data: {
        code: '#SYSCONF-LANGUAGE-PAGE',
      },
    },
    {
      path: ':action',
      component: LanguageAddEditPageComponent,
      data: {
        code: '#SYSCONF-LANGUAGE-PAGE',
      },
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoLanguageRoutingModule {
}
