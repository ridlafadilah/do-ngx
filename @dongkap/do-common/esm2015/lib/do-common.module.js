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
const COMMON_MODULES = [
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
export class DoCommonModule {
}
DoCommonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    ...COMMON_MODULES,
                ],
                exports: [
                    ...COMMON_MODULES,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9kby1jb21tb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFeEQsTUFBTSxjQUFjLEdBQUc7SUFDckIsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7Q0FDZCxDQUFDO0FBV0YsTUFBTSxPQUFPLGNBQWM7OztZQVQxQixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRTtvQkFDUCxHQUFHLGNBQWM7aUJBQ2xCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxHQUFHLGNBQWM7aUJBQ2xCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb0Jhc2VNb2R1bGUgfSBmcm9tICcuL2Jhc2UvZG8tYmFzZS5tb2R1bGUnO1xuaW1wb3J0IHsgRG9DYWxlbmRhck1vZHVsZSB9IGZyb20gJy4vY2FsZW5kYXIvZG8tY2FsZW5kYXIubW9kdWxlJztcbmltcG9ydCB7IERvQ2hhcnRzR3JhcGhNb2R1bGUgfSBmcm9tICcuL2NoYXJ0cy9kby1jaGFydHMtZ3JhcGgubW9kdWxlJztcbmltcG9ydCB7IERvQ2hlY2tCb3hNb2R1bGUgfSBmcm9tICcuL2NoZWNrYm94L2RvLWNoZWNrYm94Lm1vZHVsZSc7XG5pbXBvcnQgeyBEb0VkaXRvck1vZHVsZSB9IGZyb20gJy4vZWRpdG9yL2RvLWVkaXRvci5tb2R1bGUnO1xuaW1wb3J0IHsgRG9JbnB1dE1vZHVsZSB9IGZyb20gJy4vaW5wdXQvZG8taW5wdXQubW9kdWxlJztcbmltcG9ydCB7IERvTWFwc01vZHVsZSB9IGZyb20gJy4vbWFwcy9kby1tYXBzLm1vZHVsZSc7XG5pbXBvcnQgeyBEb1Byb2dyZXNzTW9kdWxlIH0gZnJvbSAnLi9wcm9ncmVzcy9kby1wcm9ncmVzcy5tb2R1bGUnO1xuaW1wb3J0IHsgRG9SYWRpb01vZHVsZSB9IGZyb20gJy4vcmFkaW8vZG8tcmFkaW8ubW9kdWxlJztcbmltcG9ydCB7IERvU2VsZWN0TW9kdWxlIH0gZnJvbSAnLi9zZWxlY3QvZG8tc2VsZWN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBEb1NwaW5uZXJNb2R1bGUgfSBmcm9tICcuL3NwaW5uZXIvZG8tc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgRG9UYWJsZU1vZHVsZSB9IGZyb20gJy4vdGFibGUvZG8tdGFibGUubW9kdWxlJztcbmltcG9ydCB7IERvRGF0ZVBpY2tlck1vZHVsZSB9IGZyb20gJy4vZGF0ZXBpY2tlci9kby1kYXRlcGlja2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBEb0J1dHRvbk1vZHVsZSB9IGZyb20gJy4vYnV0dG9uL2RvLWJ1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgRG9JbWFnZU1vZHVsZSB9IGZyb20gJy4vaW1hZ2UvZG8taW1hZ2UubW9kdWxlJztcbmltcG9ydCB7IERvVHJlZU1vZHVsZSB9IGZyb20gJy4vdHJlZS9kby10cmVlLm1vZHVsZSc7XG5pbXBvcnQgeyBEb0xhYmVsTW9kdWxlIH0gZnJvbSAnLi9sYWJlbC9kby1sYWJlbC5tb2R1bGUnO1xuXG5jb25zdCBDT01NT05fTU9EVUxFUyA9IFtcbiAgRG9CYXNlTW9kdWxlLFxuICBEb0lucHV0TW9kdWxlLFxuICBEb0J1dHRvbk1vZHVsZSxcbiAgRG9EYXRlUGlja2VyTW9kdWxlLFxuICBEb0NoZWNrQm94TW9kdWxlLFxuICBEb1JhZGlvTW9kdWxlLFxuICBEb0VkaXRvck1vZHVsZSxcbiAgRG9DYWxlbmRhck1vZHVsZSxcbiAgRG9DaGFydHNHcmFwaE1vZHVsZSxcbiAgRG9NYXBzTW9kdWxlLFxuICBEb1Byb2dyZXNzTW9kdWxlLFxuICBEb1NlbGVjdE1vZHVsZSxcbiAgRG9TcGlubmVyTW9kdWxlLFxuICBEb1RhYmxlTW9kdWxlLFxuICBEb0ltYWdlTW9kdWxlLFxuICBEb1RyZWVNb2R1bGUsXG4gIERvTGFiZWxNb2R1bGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBpbXBvcnRzOiBbXG4gICAgLi4uQ09NTU9OX01PRFVMRVMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5DT01NT05fTU9EVUxFUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9Db21tb25Nb2R1bGUge31cbiJdfQ==