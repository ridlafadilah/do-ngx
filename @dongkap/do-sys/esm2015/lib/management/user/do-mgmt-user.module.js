import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule } from '@nebular/theme';
import { DoThemeModule } from '@dongkap/do-theme';
import { DoInputModule, DoButtonModule, DoBaseModule, DoTableModule, DoLabelModule, } from '@dongkap/do-common';
import { DoMgmtUserRoutingModule } from './do-mgmt-user-routing.module';
import { MgmtUserComponent } from './do-mgmt-user.component';
import { ManagementUserService } from './services/mgmt-user.service';
import { MgmtEndUserListPageComponent } from './end-user/list/mgmt-end-user-list-page.component';
import { MgmtEndUserDetailPageComponent } from './end-user/detail/mgmt-end-user-detail-page.component';
import { MgmtAdminListPageComponent } from './admin/list/mgmt-admin-list-page.component';
import { MgmtAdminDetailPageComponent } from './admin/detail/mgmt-admin-detail-page.component';
const components = [
    MgmtUserComponent,
    MgmtEndUserListPageComponent,
    MgmtEndUserDetailPageComponent,
    MgmtAdminListPageComponent,
    MgmtAdminDetailPageComponent,
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
    DoButtonModule,
    DoBaseModule,
    DoTableModule,
    DoLabelModule,
    DoMgmtUserRoutingModule,
];
const providers = [
    ManagementUserService,
];
const entry_components = [];
export class DoMgmtUserModule {
}
DoMgmtUserModule.decorators = [
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
                    ...entry_components,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWdtdC11c2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9tYW5hZ2VtZW50L3VzZXIvZG8tbWdtdC11c2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFDTCxhQUFhLEVBQ2IsY0FBYyxFQUNkLFlBQVksRUFDWixhQUFhLEVBQ2IsYUFBYSxHQUNkLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDakcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDdkcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDekYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFFL0YsTUFBTSxVQUFVLEdBQUc7SUFDakIsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLDRCQUE0QjtDQUM3QixDQUFDO0FBRUYsTUFBTSxPQUFPLEdBQUc7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWMsQ0FBQyxRQUFRLEVBQUU7SUFDekIsYUFBYTtJQUNiLGFBQWE7SUFDYixjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0NBQ3hCLENBQUM7QUFFRixNQUFNLFNBQVMsR0FBRztJQUNoQixxQkFBcUI7Q0FDdEIsQ0FBQztBQUVGLE1BQU0sZ0JBQWdCLEdBQUcsRUFDeEIsQ0FBQztBQWdCRixNQUFNLE9BQU8sZ0JBQWdCOzs7WUFkNUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxHQUFHLE9BQU87aUJBQ1g7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLEdBQUcsVUFBVTtpQkFDZDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsR0FBRyxTQUFTO2lCQUNiO2dCQUNELGVBQWUsRUFBRTtvQkFDZixHQUFHLGdCQUFnQjtpQkFDcEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5iQ2FyZE1vZHVsZSwgTmJBbGVydE1vZHVsZSwgTmJJY29uTW9kdWxlLCBOYkRpYWxvZ01vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IERvVGhlbWVNb2R1bGUgfSBmcm9tICdAZG9uZ2thcC9kby10aGVtZSc7XG5pbXBvcnQge1xuICBEb0lucHV0TW9kdWxlLFxuICBEb0J1dHRvbk1vZHVsZSxcbiAgRG9CYXNlTW9kdWxlLFxuICBEb1RhYmxlTW9kdWxlLFxuICBEb0xhYmVsTW9kdWxlLFxufSBmcm9tICdAZG9uZ2thcC9kby1jb21tb24nO1xuaW1wb3J0IHsgRG9NZ210VXNlclJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2RvLW1nbXQtdXNlci1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBNZ210VXNlckNvbXBvbmVudCB9IGZyb20gJy4vZG8tbWdtdC11c2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYW5hZ2VtZW50VXNlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL21nbXQtdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IE1nbXRFbmRVc2VyTGlzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2VuZC11c2VyL2xpc3QvbWdtdC1lbmQtdXNlci1saXN0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE1nbXRFbmRVc2VyRGV0YWlsUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vZW5kLXVzZXIvZGV0YWlsL21nbXQtZW5kLXVzZXItZGV0YWlsLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE1nbXRBZG1pbkxpc3RQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9hZG1pbi9saXN0L21nbXQtYWRtaW4tbGlzdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZ210QWRtaW5EZXRhaWxQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9hZG1pbi9kZXRhaWwvbWdtdC1hZG1pbi1kZXRhaWwtcGFnZS5jb21wb25lbnQnO1xuXG5jb25zdCBjb21wb25lbnRzID0gW1xuICBNZ210VXNlckNvbXBvbmVudCxcbiAgTWdtdEVuZFVzZXJMaXN0UGFnZUNvbXBvbmVudCxcbiAgTWdtdEVuZFVzZXJEZXRhaWxQYWdlQ29tcG9uZW50LFxuICBNZ210QWRtaW5MaXN0UGFnZUNvbXBvbmVudCxcbiAgTWdtdEFkbWluRGV0YWlsUGFnZUNvbXBvbmVudCxcbl07XG5cbmNvbnN0IG1vZHVsZXMgPSBbXG4gIEZvcm1zTW9kdWxlLFxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBOYkNhcmRNb2R1bGUsXG4gIE5iQWxlcnRNb2R1bGUsXG4gIE5iSWNvbk1vZHVsZSxcbiAgTmJEaWFsb2dNb2R1bGUuZm9yQ2hpbGQoKSxcbiAgRG9UaGVtZU1vZHVsZSxcbiAgRG9JbnB1dE1vZHVsZSxcbiAgRG9CdXR0b25Nb2R1bGUsXG4gIERvQmFzZU1vZHVsZSxcbiAgRG9UYWJsZU1vZHVsZSxcbiAgRG9MYWJlbE1vZHVsZSxcbiAgRG9NZ210VXNlclJvdXRpbmdNb2R1bGUsXG5dO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbXG4gIE1hbmFnZW1lbnRVc2VyU2VydmljZSxcbl07XG5cbmNvbnN0IGVudHJ5X2NvbXBvbmVudHMgPSBbXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgLi4ubW9kdWxlcyxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uY29tcG9uZW50cyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLi4ucHJvdmlkZXJzLFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAuLi5lbnRyeV9jb21wb25lbnRzLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEb01nbXRVc2VyTW9kdWxlIHsgfVxuIl19