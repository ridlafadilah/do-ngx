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
import { TermsConditionsPageComponent } from './terms/terms-conditions-page.component';
import { PrivacyPolicyPageComponent } from './privacy-policy/privacy-policy-page.component';
import { DeactivatedProviderPromptComponent } from './security/prompt/deactivated-provider-prompt.component';

const EXTRA_COMPONENTS = [
  ExtraComponent,
  ChangePasswordPageComponent,
  DeactivatedPromptComponent,
  DeactivatedProviderPromptComponent,
  SecurityPageComponent,
  ProfilePageComponent,
  SystemPageComponent,
  SettingsPageComponent,
  HomePageComponent,
  TermsConditionsPageComponent,
  PrivacyPolicyPageComponent,
];

const EXTRA_ENTRY_COMPONENTS = [
  DeactivatedPromptComponent,
  DeactivatedProviderPromptComponent,
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
