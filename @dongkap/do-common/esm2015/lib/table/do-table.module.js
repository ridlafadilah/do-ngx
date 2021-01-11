import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NbIconModule, NbButtonModule } from '@nebular/theme';
import { DoBaseModule } from '../base/do-base.module';
import { DoInputModule } from '../input/do-input.module';
import { DoDatatableComponent } from './ngx/do-datatable.component';
import { DoDatatableHeaderComponent } from './ngx/header/do-datatable-header.component';
import { DoDatatableCollapseComponent } from './ngx/header/collapse/do-datatable-collapse.component';
import { DoDatatableBaseComponent } from './ngx/base/do-datatable-base.component';
import { DoButtonModule } from '../button/do-button.module';
export const TABLE_COMPONENTS = [
    DoDatatableComponent,
    DoDatatableBaseComponent,
    DoDatatableHeaderComponent,
    DoDatatableCollapseComponent,
];
export class DoTableModule {
}
DoTableModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    TranslateModule,
                    NbButtonModule,
                    NbIconModule,
                    NgxDatatableModule,
                    DoBaseModule,
                    DoInputModule,
                    DoButtonModule,
                ],
                declarations: [
                    ...TABLE_COMPONENTS,
                ],
                exports: [
                    ...TABLE_COMPONENTS,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tdGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3RhYmxlL2RvLXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNyRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFNUQsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUc7SUFDOUIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0NBQzdCLENBQUM7QUFzQkYsTUFBTSxPQUFPLGFBQWE7OztZQXBCekIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixlQUFlO29CQUNmLGNBQWM7b0JBQ2QsWUFBWTtvQkFDWixrQkFBa0I7b0JBQ2xCLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixjQUFjO2lCQUNmO2dCQUNELFlBQVksRUFBRTtvQkFDWixHQUFHLGdCQUFnQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLEdBQUcsZ0JBQWdCO2lCQUNwQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgTmd4RGF0YXRhYmxlTW9kdWxlIH0gZnJvbSAnQHN3aW1sYW5lL25neC1kYXRhdGFibGUnO1xuaW1wb3J0IHsgTmJJY29uTW9kdWxlLCBOYkJ1dHRvbk1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IERvQmFzZU1vZHVsZSB9IGZyb20gJy4uL2Jhc2UvZG8tYmFzZS5tb2R1bGUnO1xuaW1wb3J0IHsgRG9JbnB1dE1vZHVsZSB9IGZyb20gJy4uL2lucHV0L2RvLWlucHV0Lm1vZHVsZSc7XG5pbXBvcnQgeyBEb0RhdGF0YWJsZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4L2RvLWRhdGF0YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9EYXRhdGFibGVIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL25neC9oZWFkZXIvZG8tZGF0YXRhYmxlLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9EYXRhdGFibGVDb2xsYXBzZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4L2hlYWRlci9jb2xsYXBzZS9kby1kYXRhdGFibGUtY29sbGFwc2UuY29tcG9uZW50JztcbmltcG9ydCB7IERvRGF0YXRhYmxlQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4L2Jhc2UvZG8tZGF0YXRhYmxlLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IERvQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL2RvLWJ1dHRvbi5tb2R1bGUnO1xuXG5leHBvcnQgY29uc3QgVEFCTEVfQ09NUE9ORU5UUyA9IFtcbiAgRG9EYXRhdGFibGVDb21wb25lbnQsXG4gIERvRGF0YXRhYmxlQmFzZUNvbXBvbmVudCxcbiAgRG9EYXRhdGFibGVIZWFkZXJDb21wb25lbnQsXG4gIERvRGF0YXRhYmxlQ29sbGFwc2VDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIE5iQnV0dG9uTW9kdWxlLFxuICAgIE5iSWNvbk1vZHVsZSxcbiAgICBOZ3hEYXRhdGFibGVNb2R1bGUsXG4gICAgRG9CYXNlTW9kdWxlLFxuICAgIERvSW5wdXRNb2R1bGUsXG4gICAgRG9CdXR0b25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLlRBQkxFX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5UQUJMRV9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEb1RhYmxlTW9kdWxlIHsgfVxuIl19