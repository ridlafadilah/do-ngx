import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';
import { TinyMCEComponent } from './tiny-mce/tiny-mce.component';
import { CaldeiraKnabbenEditorComponent } from './ckeditor/ckeditor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DoBaseModule } from '../base/do-base.module';
import { MCECoreComponent } from './tiny-mce/mce-core.component';
import { DoTextareaComponent } from './textarea/textarea.component';
import { NbInputModule } from '@nebular/theme';

export const EDITOR_COMPONENTS = [
  MCECoreComponent,
  TinyMCEComponent,
  CaldeiraKnabbenEditorComponent,
  DoTextareaComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    TranslateModule,
    NbInputModule,
    DoBaseModule,
  ],
  declarations: [
    ...EDITOR_COMPONENTS,
  ],
  exports: [
    ...EDITOR_COMPONENTS,
  ],
})
export class DoEditorModule { }
