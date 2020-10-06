import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbCardModule,
  NbAlertModule,
  NbIconModule,
  NbDialogModule,
  NbTabsetModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { TreeNgxModule } from 'tree-ngx';
import { DoThemeModule } from '@dongkap/do-theme';
import {
  DoInputModule,
  DoCheckBoxModule,
  DoButtonModule,
  DoBaseModule,
  DoSelectModule,
  DoTableModule,
} from '@dongkap/do-common';
import { MgmtMenuComponent } from './do-mgmt-menu.component';
import { MenuListPageComponent } from './list/menu-list-page.component';
import { DoMgmtMenuRoutingModule } from './do-mgmt-menu-routing.module';

const components = [
  MgmtMenuComponent,
  MenuListPageComponent,
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
  NbTabsetModule,
  NbSpinnerModule,
  TreeNgxModule,
  DoMgmtMenuRoutingModule,
];

const providers = [
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
export class DoMgmtMenuModule { }
