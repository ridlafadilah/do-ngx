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
export class DoBaseModule {
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
                declarations: [
                    ...BASE_COMPONENTS,
                    ...BASE_DIRECTIVES,
                ],
                exports: [
                    ...BASE_COMPONENTS,
                    ...BASE_DIRECTIVES,
                    TranslateModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tYmFzZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb21tb24vIiwic291cmNlcyI6WyJsaWIvYmFzZS9kby1iYXNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFcEUsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHO0lBQzdCLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtDQUN4QixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHO0lBQzdCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtDQUNsQixDQUFDO0FBc0JGLE1BQU0sT0FBTyxZQUFZOzs7WUFwQnhCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLGVBQWU7b0JBQ2YsWUFBWTtvQkFDWixZQUFZO29CQUNaLGNBQWM7b0JBQ2QsY0FBYyxDQUFDLE9BQU8sRUFBRTtpQkFDekI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLEdBQUcsZUFBZTtvQkFDbEIsR0FBRyxlQUFlO2lCQUNuQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsR0FBRyxlQUFlO29CQUNsQixHQUFHLGVBQWU7b0JBQ2xCLGVBQWU7aUJBQ2hCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOYkNhcmRNb2R1bGUsIE5iSWNvbk1vZHVsZSwgTmJTZWxlY3RNb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBEb1BhZ2VPdXRsZXRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2Utb3V0bGV0L2RvLXBhZ2Utb3V0bGV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb0NvbnRhaW5lck91dGxldENvbXBvbmVudCB9IGZyb20gJy4vY29udGFpbmVyLW91dGxldC9kby1jb250YWluZXItb3V0bGV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb1dhcm5NZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi93YXJuLW1lc3NhZ2UvZG8td2Fybi1tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb0Vycm9yTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vZXJyb3ItbWVzc2FnZS9kby1lcnJvci1tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXJyZW5jeU1hc2tEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9jdXJyZW5jeS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRXF1YWxWYWxpZGF0b3IgfSBmcm9tICcuL2RpcmVjdGl2ZS9lcXVhbC12YWxpZGF0b3IuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5vdEVxdWFsVmFsaWRhdG9yIH0gZnJvbSAnLi9kaXJlY3RpdmUvbm90LWVxdWFsLXZhbGlkYXRvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRG9Ub2FzdHJNb2R1bGUgfSBmcm9tICcuLi90b2FzdHIvZG8tdG9hc3RyLm1vZHVsZSc7XG5pbXBvcnQgeyBEcmFnRHJvcERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL2RyYWctZHJvcC5kaXJlY3RpdmUnO1xuXG5leHBvcnQgY29uc3QgQkFTRV9DT01QT05FTlRTID0gW1xuICBEb1BhZ2VPdXRsZXRDb21wb25lbnQsXG4gIERvQ29udGFpbmVyT3V0bGV0Q29tcG9uZW50LFxuICBEb1dhcm5NZXNzYWdlQ29tcG9uZW50LFxuICBEb0Vycm9yTWVzc2FnZUNvbXBvbmVudCxcbl07XG5cbmV4cG9ydCBjb25zdCBCQVNFX0RJUkVDVElWRVMgPSBbXG4gIEN1cnJlbmN5TWFza0RpcmVjdGl2ZSxcbiAgRXF1YWxWYWxpZGF0b3IsXG4gIE5vdEVxdWFsVmFsaWRhdG9yLFxuICBEcmFnRHJvcERpcmVjdGl2ZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIE5iQ2FyZE1vZHVsZSxcbiAgICBOYkljb25Nb2R1bGUsXG4gICAgTmJTZWxlY3RNb2R1bGUsXG4gICAgRG9Ub2FzdHJNb2R1bGUuZm9yUm9vdCgpLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5CQVNFX0NPTVBPTkVOVFMsXG4gICAgLi4uQkFTRV9ESVJFQ1RJVkVTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uQkFTRV9DT01QT05FTlRTLFxuICAgIC4uLkJBU0VfRElSRUNUSVZFUyxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERvQmFzZU1vZHVsZSB7IH1cbiJdfQ==