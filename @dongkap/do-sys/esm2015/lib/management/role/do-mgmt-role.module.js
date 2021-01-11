import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule } from '@nebular/theme';
import { DoThemeModule } from '@dongkap/do-theme';
import { DoInputModule, DoCheckBoxModule, DoButtonModule, DoBaseModule, DoSelectModule, DoTableModule, } from '@dongkap/do-common';
import { MgmtRoleComponent } from './do-mgmt-role.component';
import { DoMgmtRoleRoutingModule } from './do-mgmt-role-routing.module';
import { RoleListPageComponent } from './list/role-list-page.component';
import { RoleService } from './services/role.service';
import { RoleAddEditPageComponent } from './add-edit/role-add-edit-page.component';
const components = [
    MgmtRoleComponent,
    RoleListPageComponent,
    RoleAddEditPageComponent,
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
    DoMgmtRoleRoutingModule,
];
const providers = [
    RoleService,
];
export class DoMgmtRoleModule {
}
DoMgmtRoleModule.decorators = [
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWdtdC1yb2xlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9tYW5hZ2VtZW50L3JvbGUvZG8tbWdtdC1yb2xlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFDTCxhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLGNBQWMsRUFDZCxZQUFZLEVBQ1osY0FBYyxFQUNkLGFBQWEsR0FDZCxNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzdELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUVuRixNQUFNLFVBQVUsR0FBRztJQUNqQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHdCQUF3QjtDQUN6QixDQUFDO0FBRUYsTUFBTSxPQUFPLEdBQUc7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWMsQ0FBQyxRQUFRLEVBQUU7SUFDekIsYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLHVCQUF1QjtDQUN4QixDQUFDO0FBRUYsTUFBTSxTQUFTLEdBQUc7SUFDaEIsV0FBVztDQUNaLENBQUM7QUFhRixNQUFNLE9BQU8sZ0JBQWdCOzs7WUFYNUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxHQUFHLE9BQU87aUJBQ1g7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLEdBQUcsVUFBVTtpQkFDZDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsR0FBRyxTQUFTO2lCQUNiO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOYkNhcmRNb2R1bGUsIE5iQWxlcnRNb2R1bGUsIE5iSWNvbk1vZHVsZSwgTmJEaWFsb2dNb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBEb1RoZW1lTW9kdWxlIH0gZnJvbSAnQGRvbmdrYXAvZG8tdGhlbWUnO1xuaW1wb3J0IHtcbiAgRG9JbnB1dE1vZHVsZSxcbiAgRG9DaGVja0JveE1vZHVsZSxcbiAgRG9CdXR0b25Nb2R1bGUsXG4gIERvQmFzZU1vZHVsZSxcbiAgRG9TZWxlY3RNb2R1bGUsXG4gIERvVGFibGVNb2R1bGUsXG59IGZyb20gJ0Bkb25na2FwL2RvLWNvbW1vbic7XG5pbXBvcnQgeyBNZ210Um9sZUNvbXBvbmVudCB9IGZyb20gJy4vZG8tbWdtdC1yb2xlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb01nbXRSb2xlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vZG8tbWdtdC1yb2xlLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IFJvbGVMaXN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vbGlzdC9yb2xlLWxpc3QtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm9sZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3JvbGUuc2VydmljZSc7XG5pbXBvcnQgeyBSb2xlQWRkRWRpdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2FkZC1lZGl0L3JvbGUtYWRkLWVkaXQtcGFnZS5jb21wb25lbnQnO1xuXG5jb25zdCBjb21wb25lbnRzID0gW1xuICBNZ210Um9sZUNvbXBvbmVudCxcbiAgUm9sZUxpc3RQYWdlQ29tcG9uZW50LFxuICBSb2xlQWRkRWRpdFBhZ2VDb21wb25lbnQsXG5dO1xuXG5jb25zdCBtb2R1bGVzID0gW1xuICBGb3Jtc01vZHVsZSxcbiAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgTmJDYXJkTW9kdWxlLFxuICBOYkFsZXJ0TW9kdWxlLFxuICBOYkljb25Nb2R1bGUsXG4gIE5iRGlhbG9nTW9kdWxlLmZvckNoaWxkKCksXG4gIERvVGhlbWVNb2R1bGUsXG4gIERvSW5wdXRNb2R1bGUsXG4gIERvQ2hlY2tCb3hNb2R1bGUsXG4gIERvQnV0dG9uTW9kdWxlLFxuICBEb0Jhc2VNb2R1bGUsXG4gIERvU2VsZWN0TW9kdWxlLFxuICBEb1RhYmxlTW9kdWxlLFxuICBEb01nbXRSb2xlUm91dGluZ01vZHVsZSxcbl07XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtcbiAgUm9sZVNlcnZpY2UsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgLi4ubW9kdWxlcyxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uY29tcG9uZW50cyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLi4ucHJvdmlkZXJzLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEb01nbXRSb2xlTW9kdWxlIHsgfVxuIl19