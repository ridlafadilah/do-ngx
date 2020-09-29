import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { DoErrorMessageComponent } from './error-message/do-error-message.component';
import { DoPageOutletComponent } from './page-outlet/do-page-outlet.component';
import { NbCardModule, NbIconModule, NbSelectModule } from '@nebular/theme';
import { DoContainerOutletComponent } from './container-outlet/do-container-outlet.component';
import { CurrencyMaskDirective } from './directive/currency.directive';
import { EqualValidator } from './directive/equal-validator.directive';
import { NotEqualValidator } from './directive/not-equal-validator.directive';
import { DoToastrModule } from '../toastr/do-toastr.module';
import { DragDropDirective } from './directive/drag-drop.directive';

export const components = [
  DoPageOutletComponent,
  DoContainerOutletComponent,
  DoErrorMessageComponent,
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
    DoToastrModule.forRoot(),
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
export class DoBaseModule { }
