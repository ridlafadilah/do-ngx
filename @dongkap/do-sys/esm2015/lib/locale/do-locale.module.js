import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule } from '@nebular/theme';
import { DoThemeModule } from '@dongkap/do-theme';
import { DoInputModule, DoCheckBoxModule, DoButtonModule, DoBaseModule, DoSelectModule, DoTableModule, } from '@dongkap/do-common';
import { LocaleComponent } from './do-locale.component';
import { LocaleListPageComponent } from './list/locale-list-page.component';
import { DoLocaleRoutingModule } from './do-locale-routing.module';
import { LocaleAddEditPageComponent } from './add-edit/locale-add-edit-page.component';
import { LocaleService } from './services/locale.service';
import { DialogFlagComponent } from './add-edit/dialog-flag/dialog-flag.component';
const components = [
    LocaleComponent,
    LocaleListPageComponent,
    LocaleAddEditPageComponent,
    DialogFlagComponent,
];
const modules = [
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbDialogModule.forChild(),
    DoThemeModule,
    DoInputModule,
    DoCheckBoxModule,
    DoButtonModule,
    DoBaseModule,
    DoSelectModule,
    DoTableModule,
    DoLocaleRoutingModule,
];
const providers = [
    LocaleService,
];
const entryComponents = [
    DialogFlagComponent,
];
export class DoLocaleModule {
}
DoLocaleModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ...modules,
                ],
                declarations: [
                    ...components,
                ],
                providers: [
                    ...providers,
                ],
                entryComponents: [
                    ...entryComponents,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbG9jYWxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9sb2NhbGUvZG8tbG9jYWxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFDTCxhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLGNBQWMsRUFDZCxZQUFZLEVBQ1osY0FBYyxFQUNkLGFBQWEsR0FDZCxNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN2RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFbkYsTUFBTSxVQUFVLEdBQUc7SUFDakIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsbUJBQW1CO0NBQ3BCLENBQUM7QUFFRixNQUFNLE9BQU8sR0FBRztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYyxDQUFDLFFBQVEsRUFBRTtJQUN6QixhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhO0lBQ2IscUJBQXFCO0NBQ3RCLENBQUM7QUFFRixNQUFNLFNBQVMsR0FBRztJQUNoQixhQUFhO0NBQ2QsQ0FBQztBQUVGLE1BQU0sZUFBZSxHQUFHO0lBQ3RCLG1CQUFtQjtDQUNwQixDQUFDO0FBZ0JGLE1BQU0sT0FBTyxjQUFjOzs7WUFkMUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxHQUFHLE9BQU87aUJBQ1g7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLEdBQUcsVUFBVTtpQkFDZDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsR0FBRyxTQUFTO2lCQUNiO2dCQUNELGVBQWUsRUFBRTtvQkFDZixHQUFHLGVBQWU7aUJBQ25CO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOYkNhcmRNb2R1bGUsIE5iQWxlcnRNb2R1bGUsIE5iSWNvbk1vZHVsZSwgTmJEaWFsb2dNb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBEb1RoZW1lTW9kdWxlIH0gZnJvbSAnQGRvbmdrYXAvZG8tdGhlbWUnO1xuaW1wb3J0IHtcbiAgRG9JbnB1dE1vZHVsZSxcbiAgRG9DaGVja0JveE1vZHVsZSxcbiAgRG9CdXR0b25Nb2R1bGUsXG4gIERvQmFzZU1vZHVsZSxcbiAgRG9TZWxlY3RNb2R1bGUsXG4gIERvVGFibGVNb2R1bGUsXG59IGZyb20gJ0Bkb25na2FwL2RvLWNvbW1vbic7XG5pbXBvcnQgeyBMb2NhbGVDb21wb25lbnQgfSBmcm9tICcuL2RvLWxvY2FsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9jYWxlTGlzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2xpc3QvbG9jYWxlLWxpc3QtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9Mb2NhbGVSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9kby1sb2NhbGUtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTG9jYWxlQWRkRWRpdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2FkZC1lZGl0L2xvY2FsZS1hZGQtZWRpdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2NhbGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9sb2NhbGUuc2VydmljZSc7XG5pbXBvcnQgeyBEaWFsb2dGbGFnQ29tcG9uZW50IH0gZnJvbSAnLi9hZGQtZWRpdC9kaWFsb2ctZmxhZy9kaWFsb2ctZmxhZy5jb21wb25lbnQnO1xuXG5jb25zdCBjb21wb25lbnRzID0gW1xuICBMb2NhbGVDb21wb25lbnQsXG4gIExvY2FsZUxpc3RQYWdlQ29tcG9uZW50LFxuICBMb2NhbGVBZGRFZGl0UGFnZUNvbXBvbmVudCxcbiAgRGlhbG9nRmxhZ0NvbXBvbmVudCxcbl07XG5cbmNvbnN0IG1vZHVsZXMgPSBbXG4gIEZvcm1zTW9kdWxlLFxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBOYkNhcmRNb2R1bGUsXG4gIE5iQWxlcnRNb2R1bGUsXG4gIE5iSWNvbk1vZHVsZSxcbiAgTmJEaWFsb2dNb2R1bGUuZm9yQ2hpbGQoKSxcbiAgRG9UaGVtZU1vZHVsZSxcbiAgRG9JbnB1dE1vZHVsZSxcbiAgRG9DaGVja0JveE1vZHVsZSxcbiAgRG9CdXR0b25Nb2R1bGUsXG4gIERvQmFzZU1vZHVsZSxcbiAgRG9TZWxlY3RNb2R1bGUsXG4gIERvVGFibGVNb2R1bGUsXG4gIERvTG9jYWxlUm91dGluZ01vZHVsZSxcbl07XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtcbiAgTG9jYWxlU2VydmljZSxcbl07XG5cbmNvbnN0IGVudHJ5Q29tcG9uZW50cyA9IFtcbiAgRGlhbG9nRmxhZ0NvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICAuLi5tb2R1bGVzLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICAuLi5wcm92aWRlcnMsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIC4uLmVudHJ5Q29tcG9uZW50cyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9Mb2NhbGVNb2R1bGUgeyB9XG4iXX0=