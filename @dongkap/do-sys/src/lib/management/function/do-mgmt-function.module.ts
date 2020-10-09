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
import { DoThemeModule } from '@dongkap/do-theme';
import {
  DoInputModule,
  DoCheckBoxModule,
  DoButtonModule,
  DoBaseModule,
  DoSelectModule,
  DoTableModule,
  DoTreeModule,
} from '@dongkap/do-common';
import { MgmtFunctionComponent } from './do-mgmt-function.component';
import { DoMgmtFunctionRoutingModule } from './do-mgmt-function-routing.module';
import { FunctionListPageComponent } from './list/function-list-page.component';
import { FunctionControlService } from './services/function-control.service';
import { FunctionEditorPageComponent } from './editor/editor/function-editor-page.component';
import { FunctionMainPageComponent } from './editor/main/function-main-page.component';
import { FunctionExtraPageComponent } from './editor/extra/function-extra-page.component';

const components = [
  MgmtFunctionComponent,
  FunctionListPageComponent,
  FunctionEditorPageComponent,
  FunctionMainPageComponent,
  FunctionExtraPageComponent,
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
  DoTreeModule,
  NbTabsetModule,
  NbSpinnerModule,
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
