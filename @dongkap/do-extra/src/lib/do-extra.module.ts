import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbDialogModule, NbAlertModule, NbIconModule } from '@nebular/theme';
import { DoThemeModule } from '@dongkap/do-theme';
import {
  DoInputModule,
  DoButtonModule,
  DoBaseModule,
  DoCheckBoxModule,
  DoEditorModule,
  DoSelectModule,
  DoImageModule,
  DoDatePickerModule,
} from '@dongkap/do-common';
import { ChangePasswordPageComponent } from './password/change-password-page.component';
import { ExtraComponent } from './do-extra.component';
import { DoExtraRoutingModule } from './do-extra-routing.module';
import { ProfilePageComponent } from './profile/profile-page.component';
import { SettingsPageComponent } from './settings/settings-page.component';
import { SecurityPageComponent } from './security/security-page.component';
import { DeactivatedPromptComponent } from './security/prompt/deactivated-prompt.component';
import { HomePageComponent } from './home/home-page.component';
import { SystemPageComponent } from './system/system-page.component';

const EXTRA_COMPONENTS = [
  ExtraComponent,
  ChangePasswordPageComponent,
  DeactivatedPromptComponent,
  SecurityPageComponent,
  ProfilePageComponent,
  SystemPageComponent,
  SettingsPageComponent,
  HomePageComponent,
];

const EXTRA_ENTRY_COMPONENTS = [
  DeactivatedPromptComponent,
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
  DoEditorModule,
  DoSelectModule,
  DoDatePickerModule,
  DoImageModule,
  DoExtraRoutingModule,
];

@NgModule({
  imports: [
    ...modules,
  ],
  declarations: [
    ...EXTRA_COMPONENTS,
  ],
  entryComponents: [
    ...EXTRA_ENTRY_COMPONENTS,
  ],
})
export class DoExtraModule { }
