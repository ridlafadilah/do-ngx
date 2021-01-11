import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NbIconModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { DoBaseModule } from '../base/do-base.module';
import { DoLabelTextComponent } from './do-label-text.component';
export const LABEL_COMPONENTS = [
    DoLabelTextComponent,
];
export class DoLabelModule {
}
DoLabelModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    NbIconModule,
                    TranslateModule,
                    DoBaseModule,
                ],
                declarations: [
                    ...LABEL_COMPONENTS,
                ],
                exports: [
                    ...LABEL_COMPONENTS,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbGFiZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2xhYmVsL2RvLWxhYmVsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVqRSxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRztJQUM5QixvQkFBb0I7Q0FDckIsQ0FBQztBQWdCRixNQUFNLE9BQU8sYUFBYTs7O1lBZHpCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO29CQUNaLGVBQWU7b0JBQ2YsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osR0FBRyxnQkFBZ0I7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxHQUFHLGdCQUFnQjtpQkFDcEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IE5iSWNvbk1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEb0Jhc2VNb2R1bGUgfSBmcm9tICcuLi9iYXNlL2RvLWJhc2UubW9kdWxlJztcbmltcG9ydCB7IERvTGFiZWxUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9kby1sYWJlbC10ZXh0LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBMQUJFTF9DT01QT05FTlRTID0gW1xuICBEb0xhYmVsVGV4dENvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTmJJY29uTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBEb0Jhc2VNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLkxBQkVMX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5MQUJFTF9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEb0xhYmVsTW9kdWxlIHsgfVxuIl19