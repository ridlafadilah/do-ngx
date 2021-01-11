import { __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCheckboxModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DoBaseModule } from '../base/do-base.module';
import { DoCheckboxComponent } from './do-checkbox.component';
export var CHECKBOX_COMPONENTS = [
    DoCheckboxComponent,
];
var DoCheckBoxModule = /** @class */ (function () {
    function DoCheckBoxModule() {
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
                    declarations: __spread(CHECKBOX_COMPONENTS),
                    exports: __spread(CHECKBOX_COMPONENTS, [
                        NbCheckboxModule,
                    ]),
                },] }
    ];
    return DoCheckBoxModule;
}());
export { DoCheckBoxModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tY2hlY2tib3gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NoZWNrYm94L2RvLWNoZWNrYm94Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUc7SUFDakMsbUJBQW1CO0NBQ3BCLENBQUM7QUFFRjtJQUFBO0lBaUJnQyxDQUFDOztnQkFqQmhDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQixlQUFlO3dCQUNmLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxXQUNQLG1CQUFtQixDQUN2QjtvQkFDRCxPQUFPLFdBQ0YsbUJBQW1CO3dCQUN0QixnQkFBZ0I7c0JBQ2pCO2lCQUNGOztJQUMrQix1QkFBQztDQUFBLEFBakJqQyxJQWlCaUM7U0FBcEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmJDaGVja2JveE1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IERvQmFzZU1vZHVsZSB9IGZyb20gJy4uL2Jhc2UvZG8tYmFzZS5tb2R1bGUnO1xuaW1wb3J0IHsgRG9DaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vZG8tY2hlY2tib3guY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENIRUNLQk9YX0NPTVBPTkVOVFMgPSBbXG4gIERvQ2hlY2tib3hDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTmJDaGVja2JveE1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgRG9CYXNlTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5DSEVDS0JPWF9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uQ0hFQ0tCT1hfQ09NUE9ORU5UUyxcbiAgICBOYkNoZWNrYm94TW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEb0NoZWNrQm94TW9kdWxlIHsgfVxuIl19