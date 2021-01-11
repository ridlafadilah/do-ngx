import { __read, __spread } from "tslib";
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
export var EDITOR_COMPONENTS = [
    MCECoreComponent,
    TinyMCEComponent,
    CaldeiraKnabbenEditorComponent,
    DoTextareaComponent,
];
var DoEditorModule = /** @class */ (function () {
    function DoEditorModule() {
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
                    declarations: __spread(EDITOR_COMPONENTS),
                    exports: __spread(EDITOR_COMPONENTS),
                },] }
    ];
    return DoEditorModule;
}());
export { DoEditorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZWRpdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9lZGl0b3IvZG8tZWRpdG9yLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0MsTUFBTSxDQUFDLElBQU0saUJBQWlCLEdBQUc7SUFDL0IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0NBQ3BCLENBQUM7QUFFRjtJQUFBO0lBaUI4QixDQUFDOztnQkFqQjlCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLFdBQ1AsaUJBQWlCLENBQ3JCO29CQUNELE9BQU8sV0FDRixpQkFBaUIsQ0FDckI7aUJBQ0Y7O0lBQzZCLHFCQUFDO0NBQUEsQUFqQi9CLElBaUIrQjtTQUFsQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENLRWRpdG9yTW9kdWxlIH0gZnJvbSAnbmcyLWNrZWRpdG9yJztcbmltcG9ydCB7IFRpbnlNQ0VDb21wb25lbnQgfSBmcm9tICcuL3RpbnktbWNlL3RpbnktbWNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxkZWlyYUtuYWJiZW5FZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2NrZWRpdG9yL2NrZWRpdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IERvQmFzZU1vZHVsZSB9IGZyb20gJy4uL2Jhc2UvZG8tYmFzZS5tb2R1bGUnO1xuaW1wb3J0IHsgTUNFQ29yZUNvbXBvbmVudCB9IGZyb20gJy4vdGlueS1tY2UvbWNlLWNvcmUuY29tcG9uZW50JztcbmltcG9ydCB7IERvVGV4dGFyZWFDb21wb25lbnQgfSBmcm9tICcuL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYklucHV0TW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuXG5leHBvcnQgY29uc3QgRURJVE9SX0NPTVBPTkVOVFMgPSBbXG4gIE1DRUNvcmVDb21wb25lbnQsXG4gIFRpbnlNQ0VDb21wb25lbnQsXG4gIENhbGRlaXJhS25hYmJlbkVkaXRvckNvbXBvbmVudCxcbiAgRG9UZXh0YXJlYUNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBDS0VkaXRvck1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgTmJJbnB1dE1vZHVsZSxcbiAgICBEb0Jhc2VNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLkVESVRPUl9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uRURJVE9SX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERvRWRpdG9yTW9kdWxlIHsgfVxuIl19