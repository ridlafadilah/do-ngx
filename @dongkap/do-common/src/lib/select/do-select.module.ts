import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { DoBaseModule } from '../base/do-base.module';
import { DoSelectComponent } from './do-select.component';
import { ContentSelectDirective } from './directive/content-select.directive';

export const components = [
  DoSelectComponent,
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
    DoBaseModule,
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
export class DoSelectModule { }
