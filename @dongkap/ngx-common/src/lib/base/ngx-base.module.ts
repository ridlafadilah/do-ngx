import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgxErrorMessageComponent } from './error-message/ngx-error-message.component';
import { NgxPageOutletComponent } from './page-outlet/ngx-page-outlet.component';
import { NbCardModule, NbIconModule, NbSelectModule } from '@nebular/theme';
import { NgxContainerOutletComponent } from './container-outlet/ngx-container-outlet.component';
import { CurrencyMaskDirective } from './directive/currency.directive';
import { EqualValidator } from './directive/equal-validator.directive';
import { NotEqualValidator } from './directive/not-equal-validator.directive';
import { NgxToastrModule } from '../toastr/ngx-toastr.module';
import { DragDropDirective } from './directive/drag-drop.directive';

export const components = [
  NgxPageOutletComponent,
  NgxContainerOutletComponent,
  NgxErrorMessageComponent,
];

export const directives = [
  CurrencyMaskDirective,
  EqualValidator,
  NotEqualValidator,
  DragDropDirective,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    NbCardModule,
    NbIconModule,
    NbSelectModule,
    NgxToastrModule.forRoot(),
  ],
  declarations: [
    ...components,
    ...directives,
  ],
  exports: [
    ...components,
    ...directives,
    TranslateModule,
  ],
})
export class NgxBaseModule { }
