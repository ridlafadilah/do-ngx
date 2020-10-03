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
import { LanguageComponent } from './do-language.component';
import { LanguageListPageComponent } from './list/language-list-page.component';
import { DoLanguageRoutingModule } from './do-language-routing.module';
import { LanguageAddEditPageComponent } from './add-edit/language-add-edit-page.component';
import { LanguageService } from './services/language.service';
import { DialogFlagComponent } from './add-edit/dialog-flag/dialog-flag.component';

const components = [
  LanguageComponent,
  LanguageListPageComponent,
  LanguageAddEditPageComponent,
  DialogFlagComponent,
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
  DoLanguageRoutingModule,
];

const providers = [
  LanguageService,
];

const entryComponents = [
  DialogFlagComponent,
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
    ...entryComponents,
  ],
})
export class DoLanguageModule { }
