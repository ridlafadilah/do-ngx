import { __read, __spread } from "tslib";
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
var components = [
    LocaleComponent,
    LocaleListPageComponent,
    LocaleAddEditPageComponent,
    DialogFlagComponent,
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
    DoLocaleRoutingModule,
];
var providers = [
    LocaleService,
];
var entryComponents = [
    DialogFlagComponent,
];
var DoLocaleModule = /** @class */ (function () {
    function DoLocaleModule() {
    }
    DoLocaleModule.decorators = [
        { type: NgModule, args: [{
                    imports: __spread(modules),
                    declarations: __spread(components),
                    providers: __spread(providers),
                    entryComponents: __spread(entryComponents),
                },] }
    ];
    return DoLocaleModule;
}());
export { DoLocaleModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbG9jYWxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9sb2NhbGUvZG8tbG9jYWxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsYUFBYSxFQUNiLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsWUFBWSxFQUNaLGNBQWMsRUFDZCxhQUFhLEdBQ2QsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDNUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdkYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRW5GLElBQU0sVUFBVSxHQUFHO0lBQ2pCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLG1CQUFtQjtDQUNwQixDQUFDO0FBRUYsSUFBTSxPQUFPLEdBQUc7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWMsQ0FBQyxRQUFRLEVBQUU7SUFDekIsYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLHFCQUFxQjtDQUN0QixDQUFDO0FBRUYsSUFBTSxTQUFTLEdBQUc7SUFDaEIsYUFBYTtDQUNkLENBQUM7QUFFRixJQUFNLGVBQWUsR0FBRztJQUN0QixtQkFBbUI7Q0FDcEIsQ0FBQztBQUVGO0lBQUE7SUFjOEIsQ0FBQzs7Z0JBZDlCLFFBQVEsU0FBQztvQkFDUixPQUFPLFdBQ0YsT0FBTyxDQUNYO29CQUNELFlBQVksV0FDUCxVQUFVLENBQ2Q7b0JBQ0QsU0FBUyxXQUNKLFNBQVMsQ0FDYjtvQkFDRCxlQUFlLFdBQ1YsZUFBZSxDQUNuQjtpQkFDRjs7SUFDNkIscUJBQUM7Q0FBQSxBQWQvQixJQWMrQjtTQUFsQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmJDYXJkTW9kdWxlLCBOYkFsZXJ0TW9kdWxlLCBOYkljb25Nb2R1bGUsIE5iRGlhbG9nTW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgRG9UaGVtZU1vZHVsZSB9IGZyb20gJ0Bkb25na2FwL2RvLXRoZW1lJztcbmltcG9ydCB7XG4gIERvSW5wdXRNb2R1bGUsXG4gIERvQ2hlY2tCb3hNb2R1bGUsXG4gIERvQnV0dG9uTW9kdWxlLFxuICBEb0Jhc2VNb2R1bGUsXG4gIERvU2VsZWN0TW9kdWxlLFxuICBEb1RhYmxlTW9kdWxlLFxufSBmcm9tICdAZG9uZ2thcC9kby1jb21tb24nO1xuaW1wb3J0IHsgTG9jYWxlQ29tcG9uZW50IH0gZnJvbSAnLi9kby1sb2NhbGUuY29tcG9uZW50JztcbmltcG9ydCB7IExvY2FsZUxpc3RQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9saXN0L2xvY2FsZS1saXN0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IERvTG9jYWxlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vZG8tbG9jYWxlLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IExvY2FsZUFkZEVkaXRQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9hZGQtZWRpdC9sb2NhbGUtYWRkLWVkaXQtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9jYWxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbG9jYWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGlhbG9nRmxhZ0NvbXBvbmVudCB9IGZyb20gJy4vYWRkLWVkaXQvZGlhbG9nLWZsYWcvZGlhbG9nLWZsYWcuY29tcG9uZW50JztcblxuY29uc3QgY29tcG9uZW50cyA9IFtcbiAgTG9jYWxlQ29tcG9uZW50LFxuICBMb2NhbGVMaXN0UGFnZUNvbXBvbmVudCxcbiAgTG9jYWxlQWRkRWRpdFBhZ2VDb21wb25lbnQsXG4gIERpYWxvZ0ZsYWdDb21wb25lbnQsXG5dO1xuXG5jb25zdCBtb2R1bGVzID0gW1xuICBGb3Jtc01vZHVsZSxcbiAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgTmJDYXJkTW9kdWxlLFxuICBOYkFsZXJ0TW9kdWxlLFxuICBOYkljb25Nb2R1bGUsXG4gIE5iRGlhbG9nTW9kdWxlLmZvckNoaWxkKCksXG4gIERvVGhlbWVNb2R1bGUsXG4gIERvSW5wdXRNb2R1bGUsXG4gIERvQ2hlY2tCb3hNb2R1bGUsXG4gIERvQnV0dG9uTW9kdWxlLFxuICBEb0Jhc2VNb2R1bGUsXG4gIERvU2VsZWN0TW9kdWxlLFxuICBEb1RhYmxlTW9kdWxlLFxuICBEb0xvY2FsZVJvdXRpbmdNb2R1bGUsXG5dO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbXG4gIExvY2FsZVNlcnZpY2UsXG5dO1xuXG5jb25zdCBlbnRyeUNvbXBvbmVudHMgPSBbXG4gIERpYWxvZ0ZsYWdDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgLi4ubW9kdWxlcyxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uY29tcG9uZW50cyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLi4ucHJvdmlkZXJzLFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAuLi5lbnRyeUNvbXBvbmVudHMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERvTG9jYWxlTW9kdWxlIHsgfVxuIl19