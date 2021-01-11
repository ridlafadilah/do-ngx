import { __read, __spread } from "tslib";
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
var components = [
    MgmtRoleComponent,
    RoleListPageComponent,
    RoleAddEditPageComponent,
];
var modules = [
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
var providers = [
    RoleService,
];
var DoMgmtRoleModule = /** @class */ (function () {
    function DoMgmtRoleModule() {
    }
    DoMgmtRoleModule.decorators = [
        { type: NgModule, args: [{
                    imports: __spread(modules),
                    declarations: __spread(components),
                    providers: __spread(providers),
                },] }
    ];
    return DoMgmtRoleModule;
}());
export { DoMgmtRoleModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWdtdC1yb2xlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9tYW5hZ2VtZW50L3JvbGUvZG8tbWdtdC1yb2xlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsYUFBYSxFQUNiLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsWUFBWSxFQUNaLGNBQWMsRUFDZCxhQUFhLEdBQ2QsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFbkYsSUFBTSxVQUFVLEdBQUc7SUFDakIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQix3QkFBd0I7Q0FDekIsQ0FBQztBQUVGLElBQU0sT0FBTyxHQUFHO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjLENBQUMsUUFBUSxFQUFFO0lBQ3pCLGFBQWE7SUFDYixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYix1QkFBdUI7Q0FDeEIsQ0FBQztBQUVGLElBQU0sU0FBUyxHQUFHO0lBQ2hCLFdBQVc7Q0FDWixDQUFDO0FBRUY7SUFBQTtJQVdnQyxDQUFDOztnQkFYaEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sV0FDRixPQUFPLENBQ1g7b0JBQ0QsWUFBWSxXQUNQLFVBQVUsQ0FDZDtvQkFDRCxTQUFTLFdBQ0osU0FBUyxDQUNiO2lCQUNGOztJQUMrQix1QkFBQztDQUFBLEFBWGpDLElBV2lDO1NBQXBCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5iQ2FyZE1vZHVsZSwgTmJBbGVydE1vZHVsZSwgTmJJY29uTW9kdWxlLCBOYkRpYWxvZ01vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IERvVGhlbWVNb2R1bGUgfSBmcm9tICdAZG9uZ2thcC9kby10aGVtZSc7XG5pbXBvcnQge1xuICBEb0lucHV0TW9kdWxlLFxuICBEb0NoZWNrQm94TW9kdWxlLFxuICBEb0J1dHRvbk1vZHVsZSxcbiAgRG9CYXNlTW9kdWxlLFxuICBEb1NlbGVjdE1vZHVsZSxcbiAgRG9UYWJsZU1vZHVsZSxcbn0gZnJvbSAnQGRvbmdrYXAvZG8tY29tbW9uJztcbmltcG9ydCB7IE1nbXRSb2xlQ29tcG9uZW50IH0gZnJvbSAnLi9kby1tZ210LXJvbGUuY29tcG9uZW50JztcbmltcG9ydCB7IERvTWdtdFJvbGVSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9kby1tZ210LXJvbGUtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgUm9sZUxpc3RQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9saXN0L3JvbGUtbGlzdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb2xlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcm9sZS5zZXJ2aWNlJztcbmltcG9ydCB7IFJvbGVBZGRFZGl0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYWRkLWVkaXQvcm9sZS1hZGQtZWRpdC1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG4gIE1nbXRSb2xlQ29tcG9uZW50LFxuICBSb2xlTGlzdFBhZ2VDb21wb25lbnQsXG4gIFJvbGVBZGRFZGl0UGFnZUNvbXBvbmVudCxcbl07XG5cbmNvbnN0IG1vZHVsZXMgPSBbXG4gIEZvcm1zTW9kdWxlLFxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBOYkNhcmRNb2R1bGUsXG4gIE5iQWxlcnRNb2R1bGUsXG4gIE5iSWNvbk1vZHVsZSxcbiAgTmJEaWFsb2dNb2R1bGUuZm9yQ2hpbGQoKSxcbiAgRG9UaGVtZU1vZHVsZSxcbiAgRG9JbnB1dE1vZHVsZSxcbiAgRG9DaGVja0JveE1vZHVsZSxcbiAgRG9CdXR0b25Nb2R1bGUsXG4gIERvQmFzZU1vZHVsZSxcbiAgRG9TZWxlY3RNb2R1bGUsXG4gIERvVGFibGVNb2R1bGUsXG4gIERvTWdtdFJvbGVSb3V0aW5nTW9kdWxlLFxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuICBSb2xlU2VydmljZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICAuLi5tb2R1bGVzLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICAuLi5wcm92aWRlcnMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERvTWdtdFJvbGVNb2R1bGUgeyB9XG4iXX0=