import { __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbDialogModule, NbAlertModule, NbIconModule } from '@nebular/theme';
import { DoThemeModule } from '@dongkap/do-theme';
import { DoInputModule, DoButtonModule, DoBaseModule, DoCheckBoxModule, DoEditorModule, DoSelectModule, DoImageModule, DoDatePickerModule, } from '@dongkap/do-common';
import { ChangePasswordPageComponent } from './password/change-password-page.component';
import { ExtraComponent } from './do-extra.component';
import { DoExtraRoutingModule } from './do-extra-routing.module';
import { ProfilePageComponent } from './profile/profile-page.component';
import { SettingsPageComponent } from './settings/settings-page.component';
import { SecurityPageComponent } from './security/security-page.component';
import { DeactivatedPromptComponent } from './security/prompt/deactivated-prompt.component';
import { HomePageComponent } from './home/home-page.component';
import { SystemPageComponent } from './system/system-page.component';
import { TermsConditionsPageComponent } from './terms/terms-conditions-page.component';
import { PrivacyPolicyPageComponent } from './privacy-policy/privacy-policy-page.component';
import { DeactivatedProviderPromptComponent } from './security/prompt/deactivated-provider-prompt.component';
var EXTRA_COMPONENTS = [
    ExtraComponent,
    ChangePasswordPageComponent,
    DeactivatedPromptComponent,
    DeactivatedProviderPromptComponent,
    SecurityPageComponent,
    ProfilePageComponent,
    SystemPageComponent,
    SettingsPageComponent,
    HomePageComponent,
    TermsConditionsPageComponent,
    PrivacyPolicyPageComponent,
];
var EXTRA_ENTRY_COMPONENTS = [
    DeactivatedPromptComponent,
    DeactivatedProviderPromptComponent,
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
    DoEditorModule,
    DoSelectModule,
    DoDatePickerModule,
    DoImageModule,
    DoExtraRoutingModule,
];
var DoExtraModule = /** @class */ (function () {
    function DoExtraModule() {
    }
    DoExtraModule.decorators = [
        { type: NgModule, args: [{
                    imports: __spread(modules),
                    declarations: __spread(EXTRA_COMPONENTS),
                    entryComponents: __spread(EXTRA_ENTRY_COMPONENTS),
                },] }
    ];
    return DoExtraModule;
}());
export { DoExtraModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZXh0cmEubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tZXh0cmEvIiwic291cmNlcyI6WyJsaWIvZG8tZXh0cmEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFDTCxhQUFhLEVBQ2IsY0FBYyxFQUNkLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsY0FBYyxFQUNkLGNBQWMsRUFDZCxhQUFhLEVBQ2Isa0JBQWtCLEdBQ25CLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBRTdHLElBQU0sZ0JBQWdCLEdBQUc7SUFDdkIsY0FBYztJQUNkLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsa0NBQWtDO0lBQ2xDLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLDBCQUEwQjtDQUMzQixDQUFDO0FBRUYsSUFBTSxzQkFBc0IsR0FBRztJQUM3QiwwQkFBMEI7SUFDMUIsa0NBQWtDO0NBQ25DLENBQUM7QUFFRixJQUFNLE9BQU8sR0FBRztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYyxDQUFDLFFBQVEsRUFBRTtJQUN6QixhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixvQkFBb0I7Q0FDckIsQ0FBQztBQUVGO0lBQUE7SUFXNkIsQ0FBQzs7Z0JBWDdCLFFBQVEsU0FBQztvQkFDUixPQUFPLFdBQ0YsT0FBTyxDQUNYO29CQUNELFlBQVksV0FDUCxnQkFBZ0IsQ0FDcEI7b0JBQ0QsZUFBZSxXQUNWLHNCQUFzQixDQUMxQjtpQkFDRjs7SUFDNEIsb0JBQUM7Q0FBQSxBQVg5QixJQVc4QjtTQUFqQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmJDYXJkTW9kdWxlLCBOYkRpYWxvZ01vZHVsZSwgTmJBbGVydE1vZHVsZSwgTmJJY29uTW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgRG9UaGVtZU1vZHVsZSB9IGZyb20gJ0Bkb25na2FwL2RvLXRoZW1lJztcbmltcG9ydCB7XG4gIERvSW5wdXRNb2R1bGUsXG4gIERvQnV0dG9uTW9kdWxlLFxuICBEb0Jhc2VNb2R1bGUsXG4gIERvQ2hlY2tCb3hNb2R1bGUsXG4gIERvRWRpdG9yTW9kdWxlLFxuICBEb1NlbGVjdE1vZHVsZSxcbiAgRG9JbWFnZU1vZHVsZSxcbiAgRG9EYXRlUGlja2VyTW9kdWxlLFxufSBmcm9tICdAZG9uZ2thcC9kby1jb21tb24nO1xuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXh0cmFDb21wb25lbnQgfSBmcm9tICcuL2RvLWV4dHJhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb0V4dHJhUm91dGluZ01vZHVsZSB9IGZyb20gJy4vZG8tZXh0cmEtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZmlsZVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGUvcHJvZmlsZS1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZXR0aW5nc1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL3NldHRpbmdzL3NldHRpbmdzLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFNlY3VyaXR5UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vc2VjdXJpdHkvc2VjdXJpdHktcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGVhY3RpdmF0ZWRQcm9tcHRDb21wb25lbnQgfSBmcm9tICcuL3NlY3VyaXR5L3Byb21wdC9kZWFjdGl2YXRlZC1wcm9tcHQuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3lzdGVtUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vc3lzdGVtL3N5c3RlbS1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXJtc0NvbmRpdGlvbnNQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90ZXJtcy90ZXJtcy1jb25kaXRpb25zLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFByaXZhY3lQb2xpY3lQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZWFjdGl2YXRlZFByb3ZpZGVyUHJvbXB0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWN1cml0eS9wcm9tcHQvZGVhY3RpdmF0ZWQtcHJvdmlkZXItcHJvbXB0LmNvbXBvbmVudCc7XG5cbmNvbnN0IEVYVFJBX0NPTVBPTkVOVFMgPSBbXG4gIEV4dHJhQ29tcG9uZW50LFxuICBDaGFuZ2VQYXNzd29yZFBhZ2VDb21wb25lbnQsXG4gIERlYWN0aXZhdGVkUHJvbXB0Q29tcG9uZW50LFxuICBEZWFjdGl2YXRlZFByb3ZpZGVyUHJvbXB0Q29tcG9uZW50LFxuICBTZWN1cml0eVBhZ2VDb21wb25lbnQsXG4gIFByb2ZpbGVQYWdlQ29tcG9uZW50LFxuICBTeXN0ZW1QYWdlQ29tcG9uZW50LFxuICBTZXR0aW5nc1BhZ2VDb21wb25lbnQsXG4gIEhvbWVQYWdlQ29tcG9uZW50LFxuICBUZXJtc0NvbmRpdGlvbnNQYWdlQ29tcG9uZW50LFxuICBQcml2YWN5UG9saWN5UGFnZUNvbXBvbmVudCxcbl07XG5cbmNvbnN0IEVYVFJBX0VOVFJZX0NPTVBPTkVOVFMgPSBbXG4gIERlYWN0aXZhdGVkUHJvbXB0Q29tcG9uZW50LFxuICBEZWFjdGl2YXRlZFByb3ZpZGVyUHJvbXB0Q29tcG9uZW50LFxuXTtcblxuY29uc3QgbW9kdWxlcyA9IFtcbiAgRm9ybXNNb2R1bGUsXG4gIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIE5iQ2FyZE1vZHVsZSxcbiAgTmJBbGVydE1vZHVsZSxcbiAgTmJJY29uTW9kdWxlLFxuICBOYkRpYWxvZ01vZHVsZS5mb3JDaGlsZCgpLFxuICBEb1RoZW1lTW9kdWxlLFxuICBEb0lucHV0TW9kdWxlLFxuICBEb0NoZWNrQm94TW9kdWxlLFxuICBEb0J1dHRvbk1vZHVsZSxcbiAgRG9CYXNlTW9kdWxlLFxuICBEb0VkaXRvck1vZHVsZSxcbiAgRG9TZWxlY3RNb2R1bGUsXG4gIERvRGF0ZVBpY2tlck1vZHVsZSxcbiAgRG9JbWFnZU1vZHVsZSxcbiAgRG9FeHRyYVJvdXRpbmdNb2R1bGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgLi4ubW9kdWxlcyxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uRVhUUkFfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgLi4uRVhUUkFfRU5UUllfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9FeHRyYU1vZHVsZSB7IH1cbiJdfQ==