import { __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NbIconModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { DoBaseModule } from '../base/do-base.module';
import { DoLabelTextComponent } from './do-label-text.component';
export var LABEL_COMPONENTS = [
    DoLabelTextComponent,
];
var DoLabelModule = /** @class */ (function () {
    function DoLabelModule() {
    }
    DoLabelModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        NbIconModule,
                        TranslateModule,
                        DoBaseModule,
                    ],
                    declarations: __spread(LABEL_COMPONENTS),
                    exports: __spread(LABEL_COMPONENTS),
                },] }
    ];
    return DoLabelModule;
}());
export { DoLabelModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbGFiZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2xhYmVsL2RvLWxhYmVsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFakUsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUc7SUFDOUIsb0JBQW9CO0NBQ3JCLENBQUM7QUFFRjtJQUFBO0lBYzZCLENBQUM7O2dCQWQ3QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixlQUFlO3dCQUNmLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxXQUNQLGdCQUFnQixDQUNwQjtvQkFDRCxPQUFPLFdBQ0YsZ0JBQWdCLENBQ3BCO2lCQUNGOztJQUM0QixvQkFBQztDQUFBLEFBZDlCLElBYzhCO1NBQWpCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBOYkljb25Nb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRG9CYXNlTW9kdWxlIH0gZnJvbSAnLi4vYmFzZS9kby1iYXNlLm1vZHVsZSc7XG5pbXBvcnQgeyBEb0xhYmVsVGV4dENvbXBvbmVudCB9IGZyb20gJy4vZG8tbGFiZWwtdGV4dC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgTEFCRUxfQ09NUE9ORU5UUyA9IFtcbiAgRG9MYWJlbFRleHRDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE5iSWNvbk1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgRG9CYXNlTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5MQUJFTF9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uTEFCRUxfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9MYWJlbE1vZHVsZSB7IH1cbiJdfQ==