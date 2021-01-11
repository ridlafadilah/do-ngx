import { __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NbInputModule, NbDatepickerModule } from '@nebular/theme';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { NbMomentDateModule } from '@nebular/moment';
import { TranslateModule } from '@ngx-translate/core';
import { DoBaseModule } from '../base/do-base.module';
import { DoDatePickerComponent } from './do-datepicker.component';
export var DATEPICKER_COMPONENTS = [
    DoDatePickerComponent,
];
var DoDatePickerModule = /** @class */ (function () {
    function DoDatePickerModule() {
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
                    declarations: __spread(DATEPICKER_COMPONENTS),
                    exports: __spread(DATEPICKER_COMPONENTS),
                },] }
    ];
    return DoDatePickerModule;
}());
export { DoDatePickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZGF0ZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb21tb24vIiwic291cmNlcyI6WyJsaWIvZGF0ZXBpY2tlci9kby1kYXRlcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWxFLE1BQU0sQ0FBQyxJQUFNLHFCQUFxQixHQUFHO0lBQ25DLHFCQUFxQjtDQUN0QixDQUFDO0FBRUY7SUFBQTtJQXNCa0MsQ0FBQzs7Z0JBdEJsQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixrQkFBa0I7d0JBQ2xCLG1CQUFtQixDQUFDLE9BQU8sQ0FBQzs0QkFDMUIsWUFBWSxFQUFFLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFOzRCQUM1QyxhQUFhLEVBQUUsRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUU7eUJBQzlDLENBQUM7d0JBQ0YsZUFBZTt3QkFDZixZQUFZO3FCQUNiO29CQUNELFlBQVksV0FDUCxxQkFBcUIsQ0FDekI7b0JBQ0QsT0FBTyxXQUNGLHFCQUFxQixDQUN6QjtpQkFDRjs7SUFDaUMseUJBQUM7Q0FBQSxBQXRCbkMsSUFzQm1DO1NBQXRCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOYklucHV0TW9kdWxlLCBOYkRhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBOYkRhdGVGbnNEYXRlTW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvZGF0ZS1mbnMnO1xuaW1wb3J0IHsgTmJNb21lbnREYXRlTW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvbW9tZW50JztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgRG9CYXNlTW9kdWxlIH0gZnJvbSAnLi4vYmFzZS9kby1iYXNlLm1vZHVsZSc7XG5pbXBvcnQgeyBEb0RhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RvLWRhdGVwaWNrZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IERBVEVQSUNLRVJfQ09NUE9ORU5UUyA9IFtcbiAgRG9EYXRlUGlja2VyQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5iSW5wdXRNb2R1bGUsXG4gICAgTmJEYXRlcGlja2VyTW9kdWxlLFxuICAgIE5iTW9tZW50RGF0ZU1vZHVsZSxcbiAgICBOYkRhdGVGbnNEYXRlTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgcGFyc2VPcHRpb25zOiB7IGF3YXJlT2ZVbmljb2RlVG9rZW5zOiB0cnVlIH0sXG4gICAgICBmb3JtYXRPcHRpb25zOiB7IGF3YXJlT2ZVbmljb2RlVG9rZW5zOiB0cnVlIH0sXG4gICAgfSksXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIERvQmFzZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uREFURVBJQ0tFUl9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uREFURVBJQ0tFUl9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEb0RhdGVQaWNrZXJNb2R1bGUgeyB9XG4iXX0=