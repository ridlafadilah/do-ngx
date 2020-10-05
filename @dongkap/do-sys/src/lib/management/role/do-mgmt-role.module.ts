import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule } from '@nebular/theme';
import { DoThemeModule } from '@dongkap/do-theme';
import {
  DoInputModule,
  DoCheckBoxModule,
  DoButtonModule,
  DoBaseModule,
  DoSelectModule,
  DoTableModule,
} from '@dongkap/do-common';
import { MgmtRoleComponent } from './do-mgmt-role.component';
import { DoMgmtRoleRoutingModule } from './do-mgmt-role-routing.module';
import { RoleListPageComponent } from './list/role-list-page.component';
import { RoleService } from './services/role.service';
import { RoleAddEditPageComponent } from './add-edit/role-add-edit-page.component';

const components = [
  MgmtRoleComponent,
  RoleListPageComponent,
  RoleAddEditPageComponent,
];

const modules = [
  FormsModule,
  ReactiveFormsModule,
  NbCardModule,
  NbAlertModule,
  NbIconModule,
  NbDialogModule.forChild(),
  DoThemeModule,
  DoInputModule,
  DoCheckBoxModule,
  DoButtonModule,
  DoBaseModule,
  DoSelectModule,
  DoTableModule,
  DoMgmtRoleRoutingModule,
];

const providers = [
  RoleService,
];

@NgModule({
  imports: [
    ...modules,
  ],
  declarations: [
    ...components,
  ],
  providers: [
    ...providers,
  ],
})
export class DoMgmtRoleModule { }
