import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NbInputModule, NbDatepickerModule } from '@nebular/theme';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { NbMomentDateModule } from '@nebular/moment';
import { TranslateModule } from '@ngx-translate/core';
import { DoBaseModule } from '../base/do-base.module';
import { DoDatePickerComponent } from './do-datepicker.component';
export const DATEPICKER_COMPONENTS = [
    DoDatePickerComponent,
];
export class DoDatePickerModule {
}
DoDatePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    NbInputModule,
                    NbDatepickerModule,
                    NbMomentDateModule,
                    NbDateFnsDateModule.forRoot({
                        parseOptions: { awareOfUnicodeTokens: true },
                        formatOptions: { awareOfUnicodeTokens: true },
                    }),
                    TranslateModule,
                    DoBaseModule,
                ],
                declarations: [
                    ...DATEPICKER_COMPONENTS,
                ],
                exports: [
                    ...DATEPICKER_COMPONENTS,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZGF0ZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb21tb24vIiwic291cmNlcyI6WyJsaWIvZGF0ZXBpY2tlci9kby1kYXRlcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbEUsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUc7SUFDbkMscUJBQXFCO0NBQ3RCLENBQUM7QUF3QkYsTUFBTSxPQUFPLGtCQUFrQjs7O1lBdEI5QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGFBQWE7b0JBQ2Isa0JBQWtCO29CQUNsQixrQkFBa0I7b0JBQ2xCLG1CQUFtQixDQUFDLE9BQU8sQ0FBQzt3QkFDMUIsWUFBWSxFQUFFLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFO3dCQUM1QyxhQUFhLEVBQUUsRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUU7cUJBQzlDLENBQUM7b0JBQ0YsZUFBZTtvQkFDZixZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWixHQUFHLHFCQUFxQjtpQkFDekI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLEdBQUcscUJBQXFCO2lCQUN6QjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5iSW5wdXRNb2R1bGUsIE5iRGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IE5iRGF0ZUZuc0RhdGVNb2R1bGUgfSBmcm9tICdAbmVidWxhci9kYXRlLWZucyc7XG5pbXBvcnQgeyBOYk1vbWVudERhdGVNb2R1bGUgfSBmcm9tICdAbmVidWxhci9tb21lbnQnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBEb0Jhc2VNb2R1bGUgfSBmcm9tICcuLi9iYXNlL2RvLWJhc2UubW9kdWxlJztcbmltcG9ydCB7IERvRGF0ZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZG8tZGF0ZXBpY2tlci5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgREFURVBJQ0tFUl9DT01QT05FTlRTID0gW1xuICBEb0RhdGVQaWNrZXJDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTmJJbnB1dE1vZHVsZSxcbiAgICBOYkRhdGVwaWNrZXJNb2R1bGUsXG4gICAgTmJNb21lbnREYXRlTW9kdWxlLFxuICAgIE5iRGF0ZUZuc0RhdGVNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBwYXJzZU9wdGlvbnM6IHsgYXdhcmVPZlVuaWNvZGVUb2tlbnM6IHRydWUgfSxcbiAgICAgIGZvcm1hdE9wdGlvbnM6IHsgYXdhcmVPZlVuaWNvZGVUb2tlbnM6IHRydWUgfSxcbiAgICB9KSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgRG9CYXNlTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5EQVRFUElDS0VSX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5EQVRFUElDS0VSX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERvRGF0ZVBpY2tlck1vZHVsZSB7IH1cbiJdfQ==