import { Component, Inject, Input, ViewEncapsulation, Optional, Self, LOCALE_ID, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DoValueAccessor } from '../../base/do-value-accessor.component';
export class CaldeiraKnabbenEditorComponent extends DoValueAccessor {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.minLength = 0;
        this.maxLength = 100;
        this.height = 320;
        this.config = {
            skin: 'bootstrapck',
            height: this.height,
            allowedContent: false,
            forcePasteAsPlainText: true,
            font_names: 'Open Sans;sans-serif;Arial;Times New Roman;Verdana',
            toolbarGroups: [
                { name: 'document', groups: ['mode', 'document', 'doctools'] },
                { name: 'clipboard', groups: ['clipboard', 'undo'] },
                { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
                { name: 'forms', groups: ['forms'] },
                '/',
                { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
                { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
                { name: 'links', groups: ['links'] },
                { name: 'insert', groups: ['insert'] },
                '/',
                { name: 'styles', groups: ['styles'] },
                { name: 'colors', groups: ['colors'] },
                { name: 'tools', groups: ['tools'] },
                { name: 'others', groups: ['others'] },
                { name: 'about', groups: ['about'] },
            ],
            removeButtons: `Source,Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,
                    PasteText,PasteFromWord,Undo,Redo,Find,Replace,SelectAll,Scayt,
                    Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,
                    HiddenField,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,
                    Outdent,Indent,CreateDiv,Blockquote,BidiLtr,BidiRtl,Language,Unlink,
                    Anchor,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,
                    Iframe,Maximize,ShowBlocks,About`,
        };
    }
    editorChange(element) {
        if (element) {
            if (this.ngControl.invalid) {
                if (!element.getAttribute('class').endsWith('status-danger'))
                    element.setAttribute('class', element.getAttribute('class').concat(' status-danger'));
                this.ngControl.control.markAsTouched();
            }
            else {
                if (element.getAttribute('class').endsWith('status-danger')) {
                    element.setAttribute('class', element.getAttribute('class').replace('status-danger', ''));
                }
            }
        }
    }
    ngOnDestroy() { }
}
CaldeiraKnabbenEditorComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
CaldeiraKnabbenEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-ckeditor',
                template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <ckeditor\n        [config]=\"config\"\n        [readonly]=\"disabled\"\n        [required]=\"required\"\n        [(ngModel)]=\"value\"\n        (change)=\"onChange($event)\"\n        (blur)=\"onTouched($event)\"\n        (blur)=\"editorChange($event.editor.ui.contentsElement)\"\n        (focus)=\"editorChange($event.editor.ui.contentsElement)\"\n        (editorChange)=\"editorChange($event.editor.ui.contentsElement)\"\n        debounce=\"500\"\n        #ckeditor>\n    </ckeditor>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'skeleton': skeleton\n        }\"\n        [ngStyle]=\"{ \n          'width':  '100%',\n          'height':  height + 'px'\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: [".cke_contents.status-danger{border:1px solid #ff3d71!important;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #fde6e8}"]
            },] }
];
CaldeiraKnabbenEditorComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
CaldeiraKnabbenEditorComponent.propDecorators = {
    placeholder: [{ type: Input }],
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    minLength: [{ type: Input }],
    maxLength: [{ type: Input }],
    height: [{ type: Input }],
    config: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2tlZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2VkaXRvci9ja2VkaXRvci9ja2VkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sS0FBSyxFQUNMLGlCQUFpQixFQUNqQixRQUFRLEVBQ1IsSUFBSSxFQUNKLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBUXpFLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxlQUF1QjtJQXdDekUsWUFBZ0MsU0FBb0IsRUFDeEIsTUFBYztRQUN4QyxLQUFLLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBREMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXZDakMsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsY0FBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixXQUFNLEdBQVcsR0FBRyxDQUFDO1FBQ3JCLFdBQU0sR0FBUTtZQUNyQixJQUFJLEVBQUUsYUFBYTtZQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFFbkIsY0FBYyxFQUFFLEtBQUs7WUFDckIscUJBQXFCLEVBQUUsSUFBSTtZQUMzQixVQUFVLEVBQUUsb0RBQW9EO1lBQ2hFLGFBQWEsRUFBRTtnQkFDYixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsRUFBRTtnQkFDOUQsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDcEQsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLFNBQVMsQ0FBQyxFQUFFO2dCQUM3RSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3BDLEdBQUc7Z0JBQ0gsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsRUFBRTtnQkFDM0QsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLEVBQUU7Z0JBQ3pGLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDcEMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUN0QyxHQUFHO2dCQUNILEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDdEMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUN0QyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3BDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDdEMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2FBQ3JDO1lBQ0QsYUFBYSxFQUFFOzs7Ozs7cURBTWtDO1NBQ2xELENBQUM7SUFLRixDQUFDO0lBRUQsWUFBWSxDQUFDLE9BQWdCO1FBQzNCLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTtnQkFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztvQkFDMUQsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2dCQUN4RixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN4QztpQkFBTTtnQkFDTCxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFO29CQUMzRCxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDM0Y7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUVELFdBQVcsS0FBVSxDQUFDOzs7WUFuQnFCLFNBQVMsdUJBQXZDLFFBQVEsWUFBSSxJQUFJO3lDQUMxQixNQUFNLFNBQUMsU0FBUzs7O1lBL0NwQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBRXZCLHdwQ0FBd0M7Z0JBQ3hDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7O1lBUlEsU0FBUyx1QkFpREgsUUFBUSxZQUFJLElBQUk7eUNBQzFCLE1BQU0sU0FBQyxTQUFTOzs7MEJBeENsQixLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbmplY3QsXG4gIElucHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG4gIExPQ0FMRV9JRCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERvVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4uLy4uL2Jhc2UvZG8tdmFsdWUtYWNjZXNzb3IuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tY2tlZGl0b3InLFxuICBzdHlsZVVybHM6IFsnLi9ja2VkaXRvci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vY2tlZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxkZWlyYUtuYWJiZW5FZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBEb1ZhbHVlQWNjZXNzb3I8c3RyaW5nPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbExhYmVsOiBudW1iZXIgPSAzO1xuICBASW5wdXQoKSBjb2xJbnB1dDogbnVtYmVyID0gOTtcbiAgQElucHV0KCkgbWluTGVuZ3RoOiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBtYXhMZW5ndGg6IG51bWJlciA9IDEwMDtcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXIgPSAzMjA7XG4gIEBJbnB1dCgpIGNvbmZpZzogYW55ID0ge1xuICAgIHNraW46ICdib290c3RyYXBjaycsXG4gICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcblxuICAgIGFsbG93ZWRDb250ZW50OiBmYWxzZSxcbiAgICBmb3JjZVBhc3RlQXNQbGFpblRleHQ6IHRydWUsXG4gICAgZm9udF9uYW1lczogJ09wZW4gU2FucztzYW5zLXNlcmlmO0FyaWFsO1RpbWVzIE5ldyBSb21hbjtWZXJkYW5hJyxcbiAgICB0b29sYmFyR3JvdXBzOiBbXG4gICAgICB7IG5hbWU6ICdkb2N1bWVudCcsIGdyb3VwczogWydtb2RlJywgJ2RvY3VtZW50JywgJ2RvY3Rvb2xzJ10gfSxcbiAgICAgIHsgbmFtZTogJ2NsaXBib2FyZCcsIGdyb3VwczogWydjbGlwYm9hcmQnLCAndW5kbyddIH0sXG4gICAgICB7IG5hbWU6ICdlZGl0aW5nJywgZ3JvdXBzOiBbJ2ZpbmQnLCAnc2VsZWN0aW9uJywgJ3NwZWxsY2hlY2tlcicsICdlZGl0aW5nJ10gfSxcbiAgICAgIHsgbmFtZTogJ2Zvcm1zJywgZ3JvdXBzOiBbJ2Zvcm1zJ10gfSxcbiAgICAgICcvJyxcbiAgICAgIHsgbmFtZTogJ2Jhc2ljc3R5bGVzJywgZ3JvdXBzOiBbJ2Jhc2ljc3R5bGVzJywgJ2NsZWFudXAnXSB9LFxuICAgICAgeyBuYW1lOiAncGFyYWdyYXBoJywgZ3JvdXBzOiBbJ2xpc3QnLCAnaW5kZW50JywgJ2Jsb2NrcycsICdhbGlnbicsICdiaWRpJywgJ3BhcmFncmFwaCddIH0sXG4gICAgICB7IG5hbWU6ICdsaW5rcycsIGdyb3VwczogWydsaW5rcyddIH0sXG4gICAgICB7IG5hbWU6ICdpbnNlcnQnLCBncm91cHM6IFsnaW5zZXJ0J10gfSxcbiAgICAgICcvJyxcbiAgICAgIHsgbmFtZTogJ3N0eWxlcycsIGdyb3VwczogWydzdHlsZXMnXSB9LFxuICAgICAgeyBuYW1lOiAnY29sb3JzJywgZ3JvdXBzOiBbJ2NvbG9ycyddIH0sXG4gICAgICB7IG5hbWU6ICd0b29scycsIGdyb3VwczogWyd0b29scyddIH0sXG4gICAgICB7IG5hbWU6ICdvdGhlcnMnLCBncm91cHM6IFsnb3RoZXJzJ10gfSxcbiAgICAgIHsgbmFtZTogJ2Fib3V0JywgZ3JvdXBzOiBbJ2Fib3V0J10gfSxcbiAgICBdLFxuICAgIHJlbW92ZUJ1dHRvbnM6IGBTb3VyY2UsU2F2ZSxOZXdQYWdlLFByZXZpZXcsUHJpbnQsVGVtcGxhdGVzLEN1dCxDb3B5LFBhc3RlLFxuICAgICAgICAgICAgICAgICAgICBQYXN0ZVRleHQsUGFzdGVGcm9tV29yZCxVbmRvLFJlZG8sRmluZCxSZXBsYWNlLFNlbGVjdEFsbCxTY2F5dCxcbiAgICAgICAgICAgICAgICAgICAgRm9ybSxDaGVja2JveCxSYWRpbyxUZXh0RmllbGQsVGV4dGFyZWEsU2VsZWN0LEJ1dHRvbixJbWFnZUJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgSGlkZGVuRmllbGQsU3RyaWtlLFN1YnNjcmlwdCxTdXBlcnNjcmlwdCxDb3B5Rm9ybWF0dGluZyxSZW1vdmVGb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgIE91dGRlbnQsSW5kZW50LENyZWF0ZURpdixCbG9ja3F1b3RlLEJpZGlMdHIsQmlkaVJ0bCxMYW5ndWFnZSxVbmxpbmssXG4gICAgICAgICAgICAgICAgICAgIEFuY2hvcixJbWFnZSxGbGFzaCxUYWJsZSxIb3Jpem9udGFsUnVsZSxTbWlsZXksU3BlY2lhbENoYXIsUGFnZUJyZWFrLFxuICAgICAgICAgICAgICAgICAgICBJZnJhbWUsTWF4aW1pemUsU2hvd0Jsb2NrcyxBYm91dGAsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNlbGYoKSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHVibGljIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgc3VwZXIobmdDb250cm9sLCBsb2NhbGUpO1xuICB9XG5cbiAgZWRpdG9yQ2hhbmdlKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgaWYgKHRoaXMubmdDb250cm9sLmludmFsaWQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5lbmRzV2l0aCgnc3RhdHVzLWRhbmdlcicpKVxuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLmNvbmNhdCgnIHN0YXR1cy1kYW5nZXInKSk7XG4gICAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLmVuZHNXaXRoKCdzdGF0dXMtZGFuZ2VyJykpIHtcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBlbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5yZXBsYWNlKCdzdGF0dXMtZGFuZ2VyJywgJycpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge31cblxufVxuIl19