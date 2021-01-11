import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';
import { TinyMCEComponent } from './tiny-mce/tiny-mce.component';
import { CaldeiraKnabbenEditorComponent } from './ckeditor/ckeditor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DoBaseModule } from '../base/do-base.module';
import { MCECoreComponent } from './tiny-mce/mce-core.component';
import { DoTextareaComponent } from './textarea/textarea.component';
import { NbInputModule } from '@nebular/theme';
export const EDITOR_COMPONENTS = [
    MCECoreComponent,
    TinyMCEComponent,
    CaldeiraKnabbenEditorComponent,
    DoTextareaComponent,
];
export class DoEditorModule {
}
DoEditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CKEditorModule,
                    TranslateModule,
                    NbInputModule,
                    DoBaseModule,
                ],
                declarations: [
                    ...EDITOR_COMPONENTS,
                ],
                exports: [
                    ...EDITOR_COMPONENTS,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZWRpdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9lZGl0b3IvZG8tZWRpdG9yLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvQyxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRztJQUMvQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixtQkFBbUI7Q0FDcEIsQ0FBQztBQW1CRixNQUFNLE9BQU8sY0FBYzs7O1lBakIxQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixhQUFhO29CQUNiLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLEdBQUcsaUJBQWlCO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsR0FBRyxpQkFBaUI7aUJBQ3JCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ0tFZGl0b3JNb2R1bGUgfSBmcm9tICduZzItY2tlZGl0b3InO1xuaW1wb3J0IHsgVGlueU1DRUNvbXBvbmVudCB9IGZyb20gJy4vdGlueS1tY2UvdGlueS1tY2UuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGRlaXJhS25hYmJlbkVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vY2tlZGl0b3IvY2tlZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgRG9CYXNlTW9kdWxlIH0gZnJvbSAnLi4vYmFzZS9kby1iYXNlLm1vZHVsZSc7XG5pbXBvcnQgeyBNQ0VDb3JlQ29tcG9uZW50IH0gZnJvbSAnLi90aW55LW1jZS9tY2UtY29yZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9UZXh0YXJlYUNvbXBvbmVudCB9IGZyb20gJy4vdGV4dGFyZWEvdGV4dGFyZWEuY29tcG9uZW50JztcbmltcG9ydCB7IE5iSW5wdXRNb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5cbmV4cG9ydCBjb25zdCBFRElUT1JfQ09NUE9ORU5UUyA9IFtcbiAgTUNFQ29yZUNvbXBvbmVudCxcbiAgVGlueU1DRUNvbXBvbmVudCxcbiAgQ2FsZGVpcmFLbmFiYmVuRWRpdG9yQ29tcG9uZW50LFxuICBEb1RleHRhcmVhQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENLRWRpdG9yTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBOYklucHV0TW9kdWxlLFxuICAgIERvQmFzZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uRURJVE9SX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5FRElUT1JfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9FZGl0b3JNb2R1bGUgeyB9XG4iXX0=