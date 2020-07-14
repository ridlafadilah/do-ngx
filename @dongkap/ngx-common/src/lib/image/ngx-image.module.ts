import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxBaseModule } from '../base/ngx-base.module';
import { ImageUploadComponent } from './upload/image-upload.component';
import { NbButtonModule, NbIconModule } from '@nebular/theme';

export const components = [
  ImageUploadComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbIconModule,
    NgxBaseModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
})
export class NgxImageModule { }
