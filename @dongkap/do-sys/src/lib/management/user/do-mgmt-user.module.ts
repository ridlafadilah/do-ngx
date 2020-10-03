import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule } from '@nebular/theme';
import { DoThemeModule } from '@dongkap/do-theme';
import {
  DoInputModule,
  DoButtonModule,
  DoBaseModule,
  DoTableModule,
  DoLabelModule,
} from '@dongkap/do-common';
import { DoMgmtUserRoutingModule } from './do-mgmt-user-routing.module';
import { MgmtUserComponent } from './do-mgmt-user.component';
import { ManagementUserService } from './services/mgmt-user.service';
import { MgmtEndUserListPageComponent } from './end-user/list/mgmt-end-user-list-page.component';
import { MgmtEndUserDetailPageComponent } from './end-user/detail/mgmt-end-user-detail-page.component';
import { MgmtAdminListPageComponent } from './admin/list/mgmt-admin-list-page.component';
import { MgmtAdminDetailPageComponent } from './admin/detail/mgmt-admin-detail-page.component';

const components = [
  MgmtUserComponent,
  MgmtEndUserListPageComponent,
  MgmtEndUserDetailPageComponent,
  MgmtAdminListPageComponent,
  MgmtAdminDetailPageComponent,
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
  DoButtonModule,
  DoBaseModule,
  DoTableModule,
  DoLabelModule,
  DoMgmtUserRoutingModule,
];

const providers = [
  ManagementUserService,
];

const entry_components = [
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
  entryComponents: [
    ...entry_components,
  ],
})
export class DoMgmtUserModule { }
