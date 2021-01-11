import { DoPageOutletComponent } from './page-outlet/do-page-outlet.component';
import { DoContainerOutletComponent } from './container-outlet/do-container-outlet.component';
import { DoWarnMessageComponent } from './warn-message/do-warn-message.component';
import { DoErrorMessageComponent } from './error-message/do-error-message.component';
import { CurrencyMaskDirective } from './directive/currency.directive';
import { EqualValidator } from './directive/equal-validator.directive';
import { NotEqualValidator } from './directive/not-equal-validator.directive';
import { DragDropDirective } from './directive/drag-drop.directive';
export declare const BASE_COMPONENTS: (typeof DoPageOutletComponent | typeof DoContainerOutletComponent | typeof DoWarnMessageComponent | typeof DoErrorMessageComponent)[];
export declare const BASE_DIRECTIVES: (typeof CurrencyMaskDirective | typeof EqualValidator | typeof NotEqualValidator | typeof DragDropDirective)[];
export declare class DoBaseModule {
}
