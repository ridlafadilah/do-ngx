import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxBaseModule } from '../base/ngx-base.module';
import { NgxSelectComponent } from './ngx-select.component';
import { ContentSelectDirective } from './directive/content-select.directive';

export const components = [
  NgxSelectComponent,
];

export const directives = [
  ContentSelectDirective,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    TranslateModule,
    NgxBaseModule,
  ],
  declarations: [
    ...components,
    ...directives,
  ],
  exports: [
    ...components,
    ...directives,
  ],
})
export class NgxSelectModule { }
