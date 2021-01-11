import { __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NbInputModule, NbIconModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { DoBaseModule } from '../base/do-base.module';
import { DoInputTextComponent } from './text/do-input-text.component';
import { DoInputCurrencyComponent } from './currency/do-input-currency.component';
import { DoInputIconComponent } from './icon/do-input-icon.component';
import { DoInputBaseIconComponent } from './icon/do-input-base-icon.component';
export var INPUT_COMPONENTS = [
    DoInputTextComponent,
    DoInputBaseIconComponent,
    DoInputIconComponent,
    DoInputCurrencyComponent,
];
var DoInputModule = /** @class */ (function () {
    function DoInputModule() {
    }
    DoInputModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NbInputModule,
                        NbIconModule,
                        TranslateModule,
                        DoBaseModule,
                    ],
                    declarations: __spread(INPUT_COMPONENTS),
                    exports: __spread(INPUT_COMPONENTS, [
                        NbInputModule,
                    ]),
                },] }
    ];
    return DoInputModule;
}());
export { DoInputModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8taW5wdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2lucHV0L2RvLWlucHV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUUvRSxNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FBRztJQUM5QixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQix3QkFBd0I7Q0FDekIsQ0FBQztBQUVGO0lBQUE7SUFrQjZCLENBQUM7O2dCQWxCN0IsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixZQUFZO3FCQUNiO29CQUNELFlBQVksV0FDUCxnQkFBZ0IsQ0FDcEI7b0JBQ0QsT0FBTyxXQUNGLGdCQUFnQjt3QkFDbkIsYUFBYTtzQkFDZDtpQkFDRjs7SUFDNEIsb0JBQUM7Q0FBQSxBQWxCOUIsSUFrQjhCO1NBQWpCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IE5iSW5wdXRNb2R1bGUsIE5iSWNvbk1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEb0Jhc2VNb2R1bGUgfSBmcm9tICcuLi9iYXNlL2RvLWJhc2UubW9kdWxlJztcbmltcG9ydCB7IERvSW5wdXRUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi90ZXh0L2RvLWlucHV0LXRleHQuY29tcG9uZW50JztcbmltcG9ydCB7IERvSW5wdXRDdXJyZW5jeUNvbXBvbmVudCB9IGZyb20gJy4vY3VycmVuY3kvZG8taW5wdXQtY3VycmVuY3kuY29tcG9uZW50JztcbmltcG9ydCB7IERvSW5wdXRJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uL2RvLWlucHV0LWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IERvSW5wdXRCYXNlSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi9kby1pbnB1dC1iYXNlLWljb24uY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IElOUFVUX0NPTVBPTkVOVFMgPSBbXG4gIERvSW5wdXRUZXh0Q29tcG9uZW50LFxuICBEb0lucHV0QmFzZUljb25Db21wb25lbnQsXG4gIERvSW5wdXRJY29uQ29tcG9uZW50LFxuICBEb0lucHV0Q3VycmVuY3lDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTmJJbnB1dE1vZHVsZSxcbiAgICBOYkljb25Nb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIERvQmFzZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uSU5QVVRfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLklOUFVUX0NPTVBPTkVOVFMsXG4gICAgTmJJbnB1dE1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9JbnB1dE1vZHVsZSB7IH1cbiJdfQ==