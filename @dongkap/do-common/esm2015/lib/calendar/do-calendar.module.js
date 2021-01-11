import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
export const CALENDAR_COMPONENTS = [];
export class DoCalendarModule {
}
DoCalendarModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule,
                ],
                declarations: [
                    ...CALENDAR_COMPONENTS,
                ],
                exports: [
                    ...CALENDAR_COMPONENTS,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NhbGVuZGFyL2RvLWNhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRyxFQUNsQyxDQUFDO0FBYUYsTUFBTSxPQUFPLGdCQUFnQjs7O1lBWDVCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsV0FBVztpQkFDWjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osR0FBRyxtQkFBbUI7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxHQUFHLG1CQUFtQjtpQkFDdkI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IENBTEVOREFSX0NPTVBPTkVOVFMgPSBbXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLkNBTEVOREFSX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5DQUxFTkRBUl9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEb0NhbGVuZGFyTW9kdWxlIHsgfVxuIl19