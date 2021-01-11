import { __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NbButtonModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { DoBaseModule } from '../base/do-base.module';
import { DoButtonSubmitComponent } from './submit/do-button-submit.component';
export var BUTTON_COMPONENTS = [
    DoButtonSubmitComponent,
];
var DoButtonModule = /** @class */ (function () {
    function DoButtonModule() {
    }
    DoButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        NbButtonModule,
                        TranslateModule,
                        DoBaseModule,
                    ],
                    declarations: __spread(BUTTON_COMPONENTS),
                    exports: __spread(BUTTON_COMPONENTS, [
                        NbButtonModule,
                    ]),
                },] }
    ];
    return DoButtonModule;
}());
export { DoButtonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9idXR0b24vZG8tYnV0dG9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFOUUsTUFBTSxDQUFDLElBQU0saUJBQWlCLEdBQUc7SUFDL0IsdUJBQXVCO0NBQ3hCLENBQUM7QUFFRjtJQUFBO0lBZThCLENBQUM7O2dCQWY5QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxlQUFlO3dCQUNmLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxXQUNQLGlCQUFpQixDQUNyQjtvQkFDRCxPQUFPLFdBQ0YsaUJBQWlCO3dCQUNwQixjQUFjO3NCQUNmO2lCQUNGOztJQUM2QixxQkFBQztDQUFBLEFBZi9CLElBZStCO1NBQWxCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBOYkJ1dHRvbk1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEb0Jhc2VNb2R1bGUgfSBmcm9tICcuLi9iYXNlL2RvLWJhc2UubW9kdWxlJztcbmltcG9ydCB7IERvQnV0dG9uU3VibWl0Q29tcG9uZW50IH0gZnJvbSAnLi9zdWJtaXQvZG8tYnV0dG9uLXN1Ym1pdC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQlVUVE9OX0NPTVBPTkVOVFMgPSBbXG4gIERvQnV0dG9uU3VibWl0Q29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBOYkJ1dHRvbk1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgRG9CYXNlTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5CVVRUT05fQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLkJVVFRPTl9DT01QT05FTlRTLFxuICAgIE5iQnV0dG9uTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEb0J1dHRvbk1vZHVsZSB7IH1cbiJdfQ==