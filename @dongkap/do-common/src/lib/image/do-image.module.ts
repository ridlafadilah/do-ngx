import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DoBaseModule } from '../base/do-base.module';
import { ImageUploadComponent } from './upload/image-upload.component';
import { NbButtonModule, NbIconModule } from '@nebular/theme';

export const IMAGE_COMPONENTS = [
  ImageUploadComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbIconModule,
    DoBaseModule,
  ],
  declarations: [
    ...IMAGE_COMPONENTS,
  ],
  exports: [
    ...IMAGE_COMPONENTS,
  ],
})
export class DoImageModule { }
