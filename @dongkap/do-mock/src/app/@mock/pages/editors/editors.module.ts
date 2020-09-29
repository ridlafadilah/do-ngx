import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { CKEditorModule } from 'ng2-ckeditor';

import { DoThemeModule } from '@dongkap/do-theme';

import { EditorsRoutingModule, routedComponents } from './editors-routing.module';
import { TinyMCEComponent } from './tiny-mce/tiny-mce.component';

@NgModule({
  imports: [
    NbCardModule,
    DoThemeModule,
    EditorsRoutingModule,
    CKEditorModule,
  ],
  declarations: [
    ...routedComponents,
    TinyMCEComponent,
  ],
})
export class EditorsModule { }
