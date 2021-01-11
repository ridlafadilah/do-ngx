import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { DoBaseModule } from '../base/do-base.module';
import { DoSelectComponent } from './do-select.component';
import { ContentSelectDirective } from './directive/content-select.directive';
export const SELECT_COMPONENTS = [
    DoSelectComponent,
];
export const SELECT_DIRECTIVES = [
    ContentSelectDirective,
];
export class DoSelectModule {
}
DoSelectModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    NgSelectModule,
                    TranslateModule,
                    DoBaseModule,
                ],
                declarations: [
                    ...SELECT_COMPONENTS,
                    ...SELECT_DIRECTIVES,
                ],
                exports: [
                    ...SELECT_COMPONENTS,
                    ...SELECT_DIRECTIVES,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tc2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3QvZG8tc2VsZWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFOUUsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUc7SUFDL0IsaUJBQWlCO0NBQ2xCLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRztJQUMvQixzQkFBc0I7Q0FDdkIsQ0FBQztBQW9CRixNQUFNLE9BQU8sY0FBYzs7O1lBbEIxQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWixHQUFHLGlCQUFpQjtvQkFDcEIsR0FBRyxpQkFBaUI7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxHQUFHLGlCQUFpQjtvQkFDcEIsR0FBRyxpQkFBaUI7aUJBQ3JCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBOZ1NlbGVjdE1vZHVsZSB9IGZyb20gJ0BuZy1zZWxlY3Qvbmctc2VsZWN0JztcbmltcG9ydCB7IERvQmFzZU1vZHVsZSB9IGZyb20gJy4uL2Jhc2UvZG8tYmFzZS5tb2R1bGUnO1xuaW1wb3J0IHsgRG9TZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2RvLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGVudFNlbGVjdERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL2NvbnRlbnQtc2VsZWN0LmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBTRUxFQ1RfQ09NUE9ORU5UUyA9IFtcbiAgRG9TZWxlY3RDb21wb25lbnQsXG5dO1xuXG5leHBvcnQgY29uc3QgU0VMRUNUX0RJUkVDVElWRVMgPSBbXG4gIENvbnRlbnRTZWxlY3REaXJlY3RpdmUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTmdTZWxlY3RNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIERvQmFzZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uU0VMRUNUX0NPTVBPTkVOVFMsXG4gICAgLi4uU0VMRUNUX0RJUkVDVElWRVMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5TRUxFQ1RfQ09NUE9ORU5UUyxcbiAgICAuLi5TRUxFQ1RfRElSRUNUSVZFUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9TZWxlY3RNb2R1bGUgeyB9XG4iXX0=