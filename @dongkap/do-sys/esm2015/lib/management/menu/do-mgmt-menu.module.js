import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule, NbTabsetModule, NbSpinnerModule, } from '@nebular/theme';
import { TreeNgxModule } from 'tree-ngx';
import { DoThemeModule } from '@dongkap/do-theme';
import { DoInputModule, DoCheckBoxModule, DoButtonModule, DoBaseModule, DoSelectModule, DoTableModule, } from '@dongkap/do-common';
import { MgmtMenuComponent } from './do-mgmt-menu.component';
import { MenuListPageComponent } from './list/menu-list-page.component';
import { DoMgmtMenuRoutingModule } from './do-mgmt-menu-routing.module';
import { MainMenuPageComponent } from './main/main-menu-page.component';
import { ExtraMenuPageComponent } from './extra/extra-menu-page.component';
import { DialogIconComponent } from './dialog-icon/dialog-icon.component';
const components = [
    MgmtMenuComponent,
    MenuListPageComponent,
    MainMenuPageComponent,
    ExtraMenuPageComponent,
    DialogIconComponent,
];
const entryComponents = [
    DialogIconComponent,
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
    NbTabsetModule,
    NbSpinnerModule,
    TreeNgxModule,
    DoMgmtMenuRoutingModule,
];
const providers = [];
export class DoMgmtMenuModule {
}
DoMgmtMenuModule.decorators = [
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
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWdtdC1tZW51Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9tYW5hZ2VtZW50L21lbnUvZG8tbWdtdC1tZW51Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQ0wsWUFBWSxFQUNaLGFBQWEsRUFDYixZQUFZLEVBQ1osY0FBYyxFQUNkLGNBQWMsRUFDZCxlQUFlLEdBQ2hCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUNMLGFBQWEsRUFDYixnQkFBZ0IsRUFDaEIsY0FBYyxFQUNkLFlBQVksRUFDWixjQUFjLEVBQ2QsYUFBYSxHQUNkLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFMUUsTUFBTSxVQUFVLEdBQUc7SUFDakIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtDQUNwQixDQUFDO0FBRUYsTUFBTSxlQUFlLEdBQUc7SUFDdEIsbUJBQW1CO0NBQ3BCLENBQUM7QUFFRixNQUFNLE9BQU8sR0FBRztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYyxDQUFDLFFBQVEsRUFBRTtJQUN6QixhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhO0lBQ2IsY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0NBQ3hCLENBQUM7QUFFRixNQUFNLFNBQVMsR0FBRyxFQUNqQixDQUFDO0FBZ0JGLE1BQU0sT0FBTyxnQkFBZ0I7OztZQWQ1QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLEdBQUcsT0FBTztpQkFDWDtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osR0FBRyxVQUFVO2lCQUNkO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxHQUFHLFNBQVM7aUJBQ2I7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLEdBQUcsZUFBZTtpQkFDbkI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIE5iQ2FyZE1vZHVsZSxcbiAgTmJBbGVydE1vZHVsZSxcbiAgTmJJY29uTW9kdWxlLFxuICBOYkRpYWxvZ01vZHVsZSxcbiAgTmJUYWJzZXRNb2R1bGUsXG4gIE5iU3Bpbm5lck1vZHVsZSxcbn0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgVHJlZU5neE1vZHVsZSB9IGZyb20gJ3RyZWUtbmd4JztcbmltcG9ydCB7IERvVGhlbWVNb2R1bGUgfSBmcm9tICdAZG9uZ2thcC9kby10aGVtZSc7XG5pbXBvcnQge1xuICBEb0lucHV0TW9kdWxlLFxuICBEb0NoZWNrQm94TW9kdWxlLFxuICBEb0J1dHRvbk1vZHVsZSxcbiAgRG9CYXNlTW9kdWxlLFxuICBEb1NlbGVjdE1vZHVsZSxcbiAgRG9UYWJsZU1vZHVsZSxcbn0gZnJvbSAnQGRvbmdrYXAvZG8tY29tbW9uJztcbmltcG9ydCB7IE1nbXRNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9kby1tZ210LW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IE1lbnVMaXN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vbGlzdC9tZW51LWxpc3QtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9NZ210TWVudVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2RvLW1nbXQtbWVudS1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBNYWluTWVudVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL21haW4vbWFpbi1tZW51LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEV4dHJhTWVudVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2V4dHJhL2V4dHJhLW1lbnUtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlhbG9nSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nLWljb24vZGlhbG9nLWljb24uY29tcG9uZW50JztcblxuY29uc3QgY29tcG9uZW50cyA9IFtcbiAgTWdtdE1lbnVDb21wb25lbnQsXG4gIE1lbnVMaXN0UGFnZUNvbXBvbmVudCxcbiAgTWFpbk1lbnVQYWdlQ29tcG9uZW50LFxuICBFeHRyYU1lbnVQYWdlQ29tcG9uZW50LFxuICBEaWFsb2dJY29uQ29tcG9uZW50LFxuXTtcblxuY29uc3QgZW50cnlDb21wb25lbnRzID0gW1xuICBEaWFsb2dJY29uQ29tcG9uZW50LFxuXTtcblxuY29uc3QgbW9kdWxlcyA9IFtcbiAgRm9ybXNNb2R1bGUsXG4gIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIE5iQ2FyZE1vZHVsZSxcbiAgTmJBbGVydE1vZHVsZSxcbiAgTmJJY29uTW9kdWxlLFxuICBOYkRpYWxvZ01vZHVsZS5mb3JDaGlsZCgpLFxuICBEb1RoZW1lTW9kdWxlLFxuICBEb0lucHV0TW9kdWxlLFxuICBEb0NoZWNrQm94TW9kdWxlLFxuICBEb0J1dHRvbk1vZHVsZSxcbiAgRG9CYXNlTW9kdWxlLFxuICBEb1NlbGVjdE1vZHVsZSxcbiAgRG9UYWJsZU1vZHVsZSxcbiAgTmJUYWJzZXRNb2R1bGUsXG4gIE5iU3Bpbm5lck1vZHVsZSxcbiAgVHJlZU5neE1vZHVsZSxcbiAgRG9NZ210TWVudVJvdXRpbmdNb2R1bGUsXG5dO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgLi4ubW9kdWxlcyxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uY29tcG9uZW50cyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLi4ucHJvdmlkZXJzLFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAuLi5lbnRyeUNvbXBvbmVudHMsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRG9NZ210TWVudU1vZHVsZSB7IH1cbiJdfQ==