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
import { MgmtFunctionComponent } from './do-mgmt-function.component';
import { DoMgmtFunctionRoutingModule } from './do-mgmt-function-routing.module';
import { FunctionListPageComponent } from './list/function-list-page.component';
import { FunctionControlService } from './services/function-control.service';

const components = [
  MgmtFunctionComponent,
  FunctionListPageComponent,
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
  DoMgmtFunctionRoutingModule,
];

const providers = [
  FunctionControlService,
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
export class DoMgmtFunctionModule { }
