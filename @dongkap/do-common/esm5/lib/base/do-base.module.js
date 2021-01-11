import { __read, __spread } from "tslib";
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
export var BASE_COMPONENTS = [
    DoPageOutletComponent,
    DoContainerOutletComponent,
    DoWarnMessageComponent,
    DoErrorMessageComponent,
];
export var BASE_DIRECTIVES = [
    CurrencyMaskDirective,
    EqualValidator,
    NotEqualValidator,
    DragDropDirective,
];
var DoBaseModule = /** @class */ (function () {
    function DoBaseModule() {
    }
    DoBaseModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        TranslateModule,
                        NbCardModule,
                        NbIconModule,
                        NbSelectModule,
                        DoToastrModule.forRoot(),
                    ],
                    declarations: __spread(BASE_COMPONENTS, BASE_DIRECTIVES),
                    exports: __spread(BASE_COMPONENTS, BASE_DIRECTIVES, [
                        TranslateModule,
                    ]),
                },] }
    ];
    return DoBaseModule;
}());
export { DoBaseModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tYmFzZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb21tb24vIiwic291cmNlcyI6WyJsaWIvYmFzZS9kby1iYXNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNyRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXBFLE1BQU0sQ0FBQyxJQUFNLGVBQWUsR0FBRztJQUM3QixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0Qix1QkFBdUI7Q0FDeEIsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLGVBQWUsR0FBRztJQUM3QixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7Q0FDbEIsQ0FBQztBQUVGO0lBQUE7SUFvQjRCLENBQUM7O2dCQXBCNUIsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsZUFBZTt3QkFDZixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxjQUFjLENBQUMsT0FBTyxFQUFFO3FCQUN6QjtvQkFDRCxZQUFZLFdBQ1AsZUFBZSxFQUNmLGVBQWUsQ0FDbkI7b0JBQ0QsT0FBTyxXQUNGLGVBQWUsRUFDZixlQUFlO3dCQUNsQixlQUFlO3NCQUNoQjtpQkFDRjs7SUFDMkIsbUJBQUM7Q0FBQSxBQXBCN0IsSUFvQjZCO1NBQWhCLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOYkNhcmRNb2R1bGUsIE5iSWNvbk1vZHVsZSwgTmJTZWxlY3RNb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBEb1BhZ2VPdXRsZXRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2Utb3V0bGV0L2RvLXBhZ2Utb3V0bGV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb0NvbnRhaW5lck91dGxldENvbXBvbmVudCB9IGZyb20gJy4vY29udGFpbmVyLW91dGxldC9kby1jb250YWluZXItb3V0bGV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb1dhcm5NZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi93YXJuLW1lc3NhZ2UvZG8td2Fybi1tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb0Vycm9yTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vZXJyb3ItbWVzc2FnZS9kby1lcnJvci1tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXJyZW5jeU1hc2tEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9jdXJyZW5jeS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRXF1YWxWYWxpZGF0b3IgfSBmcm9tICcuL2RpcmVjdGl2ZS9lcXVhbC12YWxpZGF0b3IuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5vdEVxdWFsVmFsaWRhdG9yIH0gZnJvbSAnLi9kaXJlY3RpdmUvbm90LWVxdWFsLXZhbGlkYXRvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRG9Ub2FzdHJNb2R1bGUgfSBmcm9tICcuLi90b2FzdHIvZG8tdG9hc3RyLm1vZHVsZSc7XG5pbXBvcnQgeyBEcmFnRHJvcERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL2RyYWctZHJvcC5kaXJlY3RpdmUnO1xuXG5leHBvcnQgY29uc3QgQkFTRV9DT01QT05FTlRTID0gW1xuICBEb1BhZ2VPdXRsZXRDb21wb25lbnQsXG4gIERvQ29udGFpbmVyT3V0bGV0Q29tcG9uZW50LFxuICBEb1dhcm5NZXNzYWdlQ29tcG9uZW50LFxuICBEb0Vycm9yTWVzc2FnZUNvbXBvbmVudCxcbl07XG5cbmV4cG9ydCBjb25zdCBCQVNFX0RJUkVDVElWRVMgPSBbXG4gIEN1cnJlbmN5TWFza0RpcmVjdGl2ZSxcbiAgRXF1YWxWYWxpZGF0b3IsXG4gIE5vdEVxdWFsVmFsaWRhdG9yLFxuICBEcmFnRHJvcERpcmVjdGl2ZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIE5iQ2FyZE1vZHVsZSxcbiAgICBOYkljb25Nb2R1bGUsXG4gICAgTmJTZWxlY3RNb2R1bGUsXG4gICAgRG9Ub2FzdHJNb2R1bGUuZm9yUm9vdCgpLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5CQVNFX0NPTVBPTkVOVFMsXG4gICAgLi4uQkFTRV9ESVJFQ1RJVkVTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uQkFTRV9DT01QT05FTlRTLFxuICAgIC4uLkJBU0VfRElSRUNUSVZFUyxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERvQmFzZU1vZHVsZSB7IH1cbiJdfQ==