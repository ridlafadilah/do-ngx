import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbIconModule, NbSelectModule } from '@nebular/theme';
import { DoPageOutletComponent } from './page-outlet/do-page-outlet.component';
import { DoContainerOutletComponent } from './container-outlet/do-container-outlet.component';
import { DoWarnMessageComponent } from './warn-message/do-warn-message.component';
import { DoErrorMessageComponent } from './error-message/do-error-message.component';
import { CurrencyMaskDirective } from './directive/currency.directive';
import { EqualValidator } from './directive/equal-validator.directive';
import { NotEqualValidator } from './directive/not-equal-validator.directive';
import { DoToastrModule } from '../toastr/do-toastr.module';
import { DragDropDirective } from './directive/drag-drop.directive';

export const BASE_COMPONENTS = [
  DoPageOutletComponent,
  DoContainerOutletComponent,
  DoWarnMessageComponent,
  DoErrorMessageComponent,
];

export const BASE_DIRECTIVES = [
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
    ...BASE_COMPONENTS,
    ...BASE_DIRECTIVES,
  ],
  exports: [
    ...BASE_COMPONENTS,
    ...BASE_DIRECTIVES,
    TranslateModule,
  ],
})
export class DoBaseModule { }
