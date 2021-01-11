import { __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NbIconModule, NbButtonModule } from '@nebular/theme';
import { DoBaseModule } from '../base/do-base.module';
import { DoInputModule } from '../input/do-input.module';
import { DoDatatableComponent } from './ngx/do-datatable.component';
import { DoDatatableHeaderComponent } from './ngx/header/do-datatable-header.component';
import { DoDatatableCollapseComponent } from './ngx/header/collapse/do-datatable-collapse.component';
import { DoDatatableBaseComponent } from './ngx/base/do-datatable-base.component';
import { DoButtonModule } from '../button/do-button.module';
export var TABLE_COMPONENTS = [
    DoDatatableComponent,
    DoDatatableBaseComponent,
    DoDatatableHeaderComponent,
    DoDatatableCollapseComponent,
];
var DoTableModule = /** @class */ (function () {
    function DoTableModule() {
    }
    DoTableModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        TranslateModule,
                        NbButtonModule,
                        NbIconModule,
                        NgxDatatableModule,
                        DoBaseModule,
                        DoInputModule,
                        DoButtonModule,
                    ],
                    declarations: __spread(TABLE_COMPONENTS),
                    exports: __spread(TABLE_COMPONENTS),
                },] }
    ];
    return DoTableModule;
}());
export { DoTableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tdGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3RhYmxlL2RvLXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDcEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDckcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTVELE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFHO0lBQzlCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLDRCQUE0QjtDQUM3QixDQUFDO0FBRUY7SUFBQTtJQW9CNkIsQ0FBQzs7Z0JBcEI3QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxZQUFZO3dCQUNaLGtCQUFrQjt3QkFDbEIsWUFBWTt3QkFDWixhQUFhO3dCQUNiLGNBQWM7cUJBQ2Y7b0JBQ0QsWUFBWSxXQUNQLGdCQUFnQixDQUNwQjtvQkFDRCxPQUFPLFdBQ0YsZ0JBQWdCLENBQ3BCO2lCQUNGOztJQUM0QixvQkFBQztDQUFBLEFBcEI5QixJQW9COEI7U0FBakIsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IE5neERhdGF0YWJsZU1vZHVsZSB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcbmltcG9ydCB7IE5iSWNvbk1vZHVsZSwgTmJCdXR0b25Nb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBEb0Jhc2VNb2R1bGUgfSBmcm9tICcuLi9iYXNlL2RvLWJhc2UubW9kdWxlJztcbmltcG9ydCB7IERvSW5wdXRNb2R1bGUgfSBmcm9tICcuLi9pbnB1dC9kby1pbnB1dC5tb2R1bGUnO1xuaW1wb3J0IHsgRG9EYXRhdGFibGVDb21wb25lbnQgfSBmcm9tICcuL25neC9kby1kYXRhdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IERvRGF0YXRhYmxlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gvaGVhZGVyL2RvLWRhdGF0YWJsZS1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERvRGF0YXRhYmxlQ29sbGFwc2VDb21wb25lbnQgfSBmcm9tICcuL25neC9oZWFkZXIvY29sbGFwc2UvZG8tZGF0YXRhYmxlLWNvbGxhcHNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb0RhdGF0YWJsZUJhc2VDb21wb25lbnQgfSBmcm9tICcuL25neC9iYXNlL2RvLWRhdGF0YWJsZS1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb0J1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9kby1idXR0b24ubW9kdWxlJztcblxuZXhwb3J0IGNvbnN0IFRBQkxFX0NPTVBPTkVOVFMgPSBbXG4gIERvRGF0YXRhYmxlQ29tcG9uZW50LFxuICBEb0RhdGF0YWJsZUJhc2VDb21wb25lbnQsXG4gIERvRGF0YXRhYmxlSGVhZGVyQ29tcG9uZW50LFxuICBEb0RhdGF0YWJsZUNvbGxhcHNlQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBOYkJ1dHRvbk1vZHVsZSxcbiAgICBOYkljb25Nb2R1bGUsXG4gICAgTmd4RGF0YXRhYmxlTW9kdWxlLFxuICAgIERvQmFzZU1vZHVsZSxcbiAgICBEb0lucHV0TW9kdWxlLFxuICAgIERvQnV0dG9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5UQUJMRV9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uVEFCTEVfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9UYWJsZU1vZHVsZSB7IH1cbiJdfQ==