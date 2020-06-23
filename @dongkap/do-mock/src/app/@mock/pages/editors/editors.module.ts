import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { CKEditorModule } from 'ng2-ckeditor';

import { NgxThemeModule } from '@dongkap/ngx-theme';

import { EditorsRoutingModule, routedComponents } from './editors-routing.module';
import { TinyMCEComponent } from './tiny-mce/tiny-mce.component';

@NgModule({
  imports: [
    NbCardModule,
    NgxThemeModule,
    EditorsRoutingModule,
    CKEditorModule,
  ],
  declarations: [
    ...routedComponents,
    TinyMCEComponent,
  ],
})
export class EditorsModule { }
