import { __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { DoBaseModule } from './base/do-base.module';
import { DoCalendarModule } from './calendar/do-calendar.module';
import { DoChartsGraphModule } from './charts/do-charts-graph.module';
import { DoCheckBoxModule } from './checkbox/do-checkbox.module';
import { DoEditorModule } from './editor/do-editor.module';
import { DoInputModule } from './input/do-input.module';
import { DoMapsModule } from './maps/do-maps.module';
import { DoProgressModule } from './progress/do-progress.module';
import { DoRadioModule } from './radio/do-radio.module';
import { DoSelectModule } from './select/do-select.module';
import { DoSpinnerModule } from './spinner/do-spinner.module';
import { DoTableModule } from './table/do-table.module';
import { DoDatePickerModule } from './datepicker/do-datepicker.module';
import { DoButtonModule } from './button/do-button.module';
import { DoImageModule } from './image/do-image.module';
import { DoTreeModule } from './tree/do-tree.module';
import { DoLabelModule } from './label/do-label.module';
var COMMON_MODULES = [
    DoBaseModule,
    DoInputModule,
    DoButtonModule,
    DoDatePickerModule,
    DoCheckBoxModule,
    DoRadioModule,
    DoEditorModule,
    DoCalendarModule,
    DoChartsGraphModule,
    DoMapsModule,
    DoProgressModule,
    DoSelectModule,
    DoSpinnerModule,
    DoTableModule,
    DoImageModule,
    DoTreeModule,
    DoLabelModule,
];
var DoCommonModule = /** @class */ (function () {
    function DoCommonModule() {
    }
    DoCommonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: __spread(COMMON_MODULES),
                    exports: __spread(COMMON_MODULES),
                },] }
    ];
    return DoCommonModule;
}());
export { DoCommonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9kby1jb21tb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXhELElBQU0sY0FBYyxHQUFHO0lBQ3JCLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0NBQ2QsQ0FBQztBQUVGO0lBQUE7SUFTNkIsQ0FBQzs7Z0JBVDdCLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxXQUNGLGNBQWMsQ0FDbEI7b0JBQ0QsT0FBTyxXQUNGLGNBQWMsQ0FDbEI7aUJBQ0Y7O0lBQzRCLHFCQUFDO0NBQUEsQUFUOUIsSUFTOEI7U0FBakIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvQmFzZU1vZHVsZSB9IGZyb20gJy4vYmFzZS9kby1iYXNlLm1vZHVsZSc7XG5pbXBvcnQgeyBEb0NhbGVuZGFyTW9kdWxlIH0gZnJvbSAnLi9jYWxlbmRhci9kby1jYWxlbmRhci5tb2R1bGUnO1xuaW1wb3J0IHsgRG9DaGFydHNHcmFwaE1vZHVsZSB9IGZyb20gJy4vY2hhcnRzL2RvLWNoYXJ0cy1ncmFwaC5tb2R1bGUnO1xuaW1wb3J0IHsgRG9DaGVja0JveE1vZHVsZSB9IGZyb20gJy4vY2hlY2tib3gvZG8tY2hlY2tib3gubW9kdWxlJztcbmltcG9ydCB7IERvRWRpdG9yTW9kdWxlIH0gZnJvbSAnLi9lZGl0b3IvZG8tZWRpdG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBEb0lucHV0TW9kdWxlIH0gZnJvbSAnLi9pbnB1dC9kby1pbnB1dC5tb2R1bGUnO1xuaW1wb3J0IHsgRG9NYXBzTW9kdWxlIH0gZnJvbSAnLi9tYXBzL2RvLW1hcHMubW9kdWxlJztcbmltcG9ydCB7IERvUHJvZ3Jlc3NNb2R1bGUgfSBmcm9tICcuL3Byb2dyZXNzL2RvLXByb2dyZXNzLm1vZHVsZSc7XG5pbXBvcnQgeyBEb1JhZGlvTW9kdWxlIH0gZnJvbSAnLi9yYWRpby9kby1yYWRpby5tb2R1bGUnO1xuaW1wb3J0IHsgRG9TZWxlY3RNb2R1bGUgfSBmcm9tICcuL3NlbGVjdC9kby1zZWxlY3QubW9kdWxlJztcbmltcG9ydCB7IERvU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4vc3Bpbm5lci9kby1zcGlubmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBEb1RhYmxlTW9kdWxlIH0gZnJvbSAnLi90YWJsZS9kby10YWJsZS5tb2R1bGUnO1xuaW1wb3J0IHsgRG9EYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnLi9kYXRlcGlja2VyL2RvLWRhdGVwaWNrZXIubW9kdWxlJztcbmltcG9ydCB7IERvQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi9idXR0b24vZG8tYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBEb0ltYWdlTW9kdWxlIH0gZnJvbSAnLi9pbWFnZS9kby1pbWFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgRG9UcmVlTW9kdWxlIH0gZnJvbSAnLi90cmVlL2RvLXRyZWUubW9kdWxlJztcbmltcG9ydCB7IERvTGFiZWxNb2R1bGUgfSBmcm9tICcuL2xhYmVsL2RvLWxhYmVsLm1vZHVsZSc7XG5cbmNvbnN0IENPTU1PTl9NT0RVTEVTID0gW1xuICBEb0Jhc2VNb2R1bGUsXG4gIERvSW5wdXRNb2R1bGUsXG4gIERvQnV0dG9uTW9kdWxlLFxuICBEb0RhdGVQaWNrZXJNb2R1bGUsXG4gIERvQ2hlY2tCb3hNb2R1bGUsXG4gIERvUmFkaW9Nb2R1bGUsXG4gIERvRWRpdG9yTW9kdWxlLFxuICBEb0NhbGVuZGFyTW9kdWxlLFxuICBEb0NoYXJ0c0dyYXBoTW9kdWxlLFxuICBEb01hcHNNb2R1bGUsXG4gIERvUHJvZ3Jlc3NNb2R1bGUsXG4gIERvU2VsZWN0TW9kdWxlLFxuICBEb1NwaW5uZXJNb2R1bGUsXG4gIERvVGFibGVNb2R1bGUsXG4gIERvSW1hZ2VNb2R1bGUsXG4gIERvVHJlZU1vZHVsZSxcbiAgRG9MYWJlbE1vZHVsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtcbiAgICAuLi5DT01NT05fTU9EVUxFUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLkNPTU1PTl9NT0RVTEVTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEb0NvbW1vbk1vZHVsZSB7fVxuIl19