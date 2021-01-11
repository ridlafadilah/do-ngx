import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCheckboxModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DoBaseModule } from '../base/do-base.module';
import { DoCheckboxComponent } from './do-checkbox.component';
export const CHECKBOX_COMPONENTS = [
    DoCheckboxComponent,
];
export class DoCheckBoxModule {
}
DoCheckBoxModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    NbCheckboxModule,
                    TranslateModule,
                    DoBaseModule,
                ],
                declarations: [
                    ...CHECKBOX_COMPONENTS,
                ],
                exports: [
                    ...CHECKBOX_COMPONENTS,
                    NbCheckboxModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tY2hlY2tib3gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NoZWNrYm94L2RvLWNoZWNrYm94Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRztJQUNqQyxtQkFBbUI7Q0FDcEIsQ0FBQztBQW1CRixNQUFNLE9BQU8sZ0JBQWdCOzs7WUFqQjVCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLEdBQUcsbUJBQW1CO2lCQUN2QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsR0FBRyxtQkFBbUI7b0JBQ3RCLGdCQUFnQjtpQkFDakI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5iQ2hlY2tib3hNb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBEb0Jhc2VNb2R1bGUgfSBmcm9tICcuLi9iYXNlL2RvLWJhc2UubW9kdWxlJztcbmltcG9ydCB7IERvQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL2RvLWNoZWNrYm94LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDSEVDS0JPWF9DT01QT05FTlRTID0gW1xuICBEb0NoZWNrYm94Q29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5iQ2hlY2tib3hNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIERvQmFzZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uQ0hFQ0tCT1hfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLkNIRUNLQk9YX0NPTVBPTkVOVFMsXG4gICAgTmJDaGVja2JveE1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9DaGVja0JveE1vZHVsZSB7IH1cbiJdfQ==