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
export const INPUT_COMPONENTS = [
    DoInputTextComponent,
    DoInputBaseIconComponent,
    DoInputIconComponent,
    DoInputCurrencyComponent,
];
export class DoInputModule {
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
                declarations: [
                    ...INPUT_COMPONENTS,
                ],
                exports: [
                    ...INPUT_COMPONENTS,
                    NbInputModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8taW5wdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2lucHV0L2RvLWlucHV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRS9FLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHO0lBQzlCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtDQUN6QixDQUFDO0FBb0JGLE1BQU0sT0FBTyxhQUFhOzs7WUFsQnpCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsYUFBYTtvQkFDYixZQUFZO29CQUNaLGVBQWU7b0JBQ2YsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osR0FBRyxnQkFBZ0I7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxHQUFHLGdCQUFnQjtvQkFDbkIsYUFBYTtpQkFDZDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBOYklucHV0TW9kdWxlLCBOYkljb25Nb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRG9CYXNlTW9kdWxlIH0gZnJvbSAnLi4vYmFzZS9kby1iYXNlLm1vZHVsZSc7XG5pbXBvcnQgeyBEb0lucHV0VGV4dENvbXBvbmVudCB9IGZyb20gJy4vdGV4dC9kby1pbnB1dC10ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb0lucHV0Q3VycmVuY3lDb21wb25lbnQgfSBmcm9tICcuL2N1cnJlbmN5L2RvLWlucHV0LWN1cnJlbmN5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb0lucHV0SWNvbkNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi9kby1pbnB1dC1pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb0lucHV0QmFzZUljb25Db21wb25lbnQgfSBmcm9tICcuL2ljb24vZG8taW5wdXQtYmFzZS1pY29uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBJTlBVVF9DT01QT05FTlRTID0gW1xuICBEb0lucHV0VGV4dENvbXBvbmVudCxcbiAgRG9JbnB1dEJhc2VJY29uQ29tcG9uZW50LFxuICBEb0lucHV0SWNvbkNvbXBvbmVudCxcbiAgRG9JbnB1dEN1cnJlbmN5Q29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5iSW5wdXRNb2R1bGUsXG4gICAgTmJJY29uTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBEb0Jhc2VNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLklOUFVUX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5JTlBVVF9DT01QT05FTlRTLFxuICAgIE5iSW5wdXRNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERvSW5wdXRNb2R1bGUgeyB9XG4iXX0=