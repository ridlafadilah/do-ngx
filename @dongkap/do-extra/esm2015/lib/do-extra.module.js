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
const EXTRA_COMPONENTS = [
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
const EXTRA_ENTRY_COMPONENTS = [
    DeactivatedPromptComponent,
    DeactivatedProviderPromptComponent,
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
    DoEditorModule,
    DoSelectModule,
    DoDatePickerModule,
    DoImageModule,
    DoExtraRoutingModule,
];
export class DoExtraModule {
}
DoExtraModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ...modules,
                ],
                declarations: [
                    ...EXTRA_COMPONENTS,
                ],
                entryComponents: [
                    ...EXTRA_ENTRY_COMPONENTS,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZXh0cmEubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tZXh0cmEvIiwic291cmNlcyI6WyJsaWIvZG8tZXh0cmEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUNMLGFBQWEsRUFDYixjQUFjLEVBQ2QsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsY0FBYyxFQUNkLGFBQWEsRUFDYixrQkFBa0IsR0FDbkIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDM0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDNUYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdkYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDNUYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFFN0csTUFBTSxnQkFBZ0IsR0FBRztJQUN2QixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQixrQ0FBa0M7SUFDbEMscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsMEJBQTBCO0NBQzNCLENBQUM7QUFFRixNQUFNLHNCQUFzQixHQUFHO0lBQzdCLDBCQUEwQjtJQUMxQixrQ0FBa0M7Q0FDbkMsQ0FBQztBQUVGLE1BQU0sT0FBTyxHQUFHO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjLENBQUMsUUFBUSxFQUFFO0lBQ3pCLGFBQWE7SUFDYixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxZQUFZO0lBQ1osY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG9CQUFvQjtDQUNyQixDQUFDO0FBYUYsTUFBTSxPQUFPLGFBQWE7OztZQVh6QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLEdBQUcsT0FBTztpQkFDWDtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osR0FBRyxnQkFBZ0I7aUJBQ3BCO2dCQUNELGVBQWUsRUFBRTtvQkFDZixHQUFHLHNCQUFzQjtpQkFDMUI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5iQ2FyZE1vZHVsZSwgTmJEaWFsb2dNb2R1bGUsIE5iQWxlcnRNb2R1bGUsIE5iSWNvbk1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IERvVGhlbWVNb2R1bGUgfSBmcm9tICdAZG9uZ2thcC9kby10aGVtZSc7XG5pbXBvcnQge1xuICBEb0lucHV0TW9kdWxlLFxuICBEb0J1dHRvbk1vZHVsZSxcbiAgRG9CYXNlTW9kdWxlLFxuICBEb0NoZWNrQm94TW9kdWxlLFxuICBEb0VkaXRvck1vZHVsZSxcbiAgRG9TZWxlY3RNb2R1bGUsXG4gIERvSW1hZ2VNb2R1bGUsXG4gIERvRGF0ZVBpY2tlck1vZHVsZSxcbn0gZnJvbSAnQGRvbmdrYXAvZG8tY29tbW9uJztcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEV4dHJhQ29tcG9uZW50IH0gZnJvbSAnLi9kby1leHRyYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9FeHRyYVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2RvLWV4dHJhLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IFByb2ZpbGVQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9maWxlL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2V0dGluZ3NQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9zZXR0aW5ncy9zZXR0aW5ncy1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWN1cml0eVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3NlY3VyaXR5L3NlY3VyaXR5LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IERlYWN0aXZhdGVkUHJvbXB0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWN1cml0eS9wcm9tcHQvZGVhY3RpdmF0ZWQtcHJvbXB0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFN5c3RlbVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3N5c3RlbS9zeXN0ZW0tcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGVybXNDb25kaXRpb25zUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vdGVybXMvdGVybXMtY29uZGl0aW9ucy1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml2YWN5UG9saWN5UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3ktcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGVhY3RpdmF0ZWRQcm92aWRlclByb21wdENvbXBvbmVudCB9IGZyb20gJy4vc2VjdXJpdHkvcHJvbXB0L2RlYWN0aXZhdGVkLXByb3ZpZGVyLXByb21wdC5jb21wb25lbnQnO1xuXG5jb25zdCBFWFRSQV9DT01QT05FTlRTID0gW1xuICBFeHRyYUNvbXBvbmVudCxcbiAgQ2hhbmdlUGFzc3dvcmRQYWdlQ29tcG9uZW50LFxuICBEZWFjdGl2YXRlZFByb21wdENvbXBvbmVudCxcbiAgRGVhY3RpdmF0ZWRQcm92aWRlclByb21wdENvbXBvbmVudCxcbiAgU2VjdXJpdHlQYWdlQ29tcG9uZW50LFxuICBQcm9maWxlUGFnZUNvbXBvbmVudCxcbiAgU3lzdGVtUGFnZUNvbXBvbmVudCxcbiAgU2V0dGluZ3NQYWdlQ29tcG9uZW50LFxuICBIb21lUGFnZUNvbXBvbmVudCxcbiAgVGVybXNDb25kaXRpb25zUGFnZUNvbXBvbmVudCxcbiAgUHJpdmFjeVBvbGljeVBhZ2VDb21wb25lbnQsXG5dO1xuXG5jb25zdCBFWFRSQV9FTlRSWV9DT01QT05FTlRTID0gW1xuICBEZWFjdGl2YXRlZFByb21wdENvbXBvbmVudCxcbiAgRGVhY3RpdmF0ZWRQcm92aWRlclByb21wdENvbXBvbmVudCxcbl07XG5cbmNvbnN0IG1vZHVsZXMgPSBbXG4gIEZvcm1zTW9kdWxlLFxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBOYkNhcmRNb2R1bGUsXG4gIE5iQWxlcnRNb2R1bGUsXG4gIE5iSWNvbk1vZHVsZSxcbiAgTmJEaWFsb2dNb2R1bGUuZm9yQ2hpbGQoKSxcbiAgRG9UaGVtZU1vZHVsZSxcbiAgRG9JbnB1dE1vZHVsZSxcbiAgRG9DaGVja0JveE1vZHVsZSxcbiAgRG9CdXR0b25Nb2R1bGUsXG4gIERvQmFzZU1vZHVsZSxcbiAgRG9FZGl0b3JNb2R1bGUsXG4gIERvU2VsZWN0TW9kdWxlLFxuICBEb0RhdGVQaWNrZXJNb2R1bGUsXG4gIERvSW1hZ2VNb2R1bGUsXG4gIERvRXh0cmFSb3V0aW5nTW9kdWxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIC4uLm1vZHVsZXMsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLkVYVFJBX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIC4uLkVYVFJBX0VOVFJZX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERvRXh0cmFNb2R1bGUgeyB9XG4iXX0=