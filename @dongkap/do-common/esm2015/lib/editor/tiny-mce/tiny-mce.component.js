import { Component, ViewEncapsulation, Input, Optional, Self, Inject, LOCALE_ID, ElementRef, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DoValueAccessor } from '../../base/do-value-accessor.component';
export class TinyMCEComponent extends DoValueAccessor {
    constructor(ngControl, locale, element) {
        super(ngControl, locale);
        this.locale = locale;
        this.element = element;
        this.colLabel = 3;
        this.colInput = 9;
        this.plugins = ['link', 'paste', 'table'];
        this.height = 320;
        this.id = 'tinyMce';
    }
    editorChange(element) {
        if (!element) {
            element = this.element.nativeElement;
            element = element.getElementsByClassName('tox-edit-area').item(0);
        }
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
TinyMCEComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: ElementRef }
];
TinyMCEComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-tiny-mce',
                template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <do-mce-core\n      [id]=\"id\"\n      [name]=\"name\"\n      [required]=\"required\"\n      [readonly]=\"disabled\"\n      [plugins]=\"plugins\"\n      [height]=\"height\"\n      [value]=\"value\"\n      [(ngModel)]=\"value\"\n      (change)=\"onChange($event)\"\n      (focus)=\"onTouched($event)\"\n      (editorchange)=\"editorChange($event.target.contentAreaContainer)\"\n      (focus)=\"editorChange($event.target.contentAreaContainer)\"\n      (blur)=\"editorChange($event.target.contentAreaContainer)\">\n    </do-mce-core>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'skeleton': skeleton\n        }\"\n        [ngStyle]=\"{ \n          'width':  '100%',\n          'height':  height + 'px'\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: [".tox-edit-area.status-danger{border:1px solid #ff3d71!important;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #fde6e8}"]
            },] }
];
TinyMCEComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: ElementRef }
];
TinyMCEComponent.propDecorators = {
    placeholder: [{ type: Input }],
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    plugins: [{ type: Input }],
    height: [{ type: Input }],
    id: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlueS1tY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2VkaXRvci90aW55LW1jZS90aW55LW1jZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsS0FBSyxFQUNMLFFBQVEsRUFDUixJQUFJLEVBQ0osTUFBTSxFQUNOLFNBQVMsRUFDVCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQVF6RSxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsZUFBdUI7SUFRM0QsWUFBZ0MsU0FBb0IsRUFDeEIsTUFBYyxFQUNoQyxPQUFtQjtRQUMzQixLQUFLLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRkMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNoQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBUnBCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixZQUFPLEdBQWEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLFdBQU0sR0FBVyxHQUFHLENBQUM7UUFDckIsT0FBRSxHQUFXLFNBQVMsQ0FBQztJQU1oQyxDQUFDO0lBRUQsWUFBWSxDQUFDLE9BQWdCO1FBQzNCLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDckMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkU7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO1lBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7Z0JBQzFELE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUN4RixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QzthQUFNO1lBQ0wsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFBRTtnQkFDM0QsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDM0Y7U0FDRjtJQUNILENBQUM7OztZQXBCMEMsU0FBUyx1QkFBdkMsUUFBUSxZQUFJLElBQUk7eUNBQzFCLE1BQU0sU0FBQyxTQUFTO1lBQ0EsVUFBVTs7O1lBaEI5QixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBRXZCLHNzQ0FBd0M7Z0JBQ3hDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7O1lBUlEsU0FBUyx1QkFpQkgsUUFBUSxZQUFJLElBQUk7eUNBQzFCLE1BQU0sU0FBQyxTQUFTO1lBcEJuQixVQUFVOzs7MEJBWVQsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLO2lCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG4gIEluamVjdCxcbiAgTE9DQUxFX0lELFxuICBFbGVtZW50UmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERvVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4uLy4uL2Jhc2UvZG8tdmFsdWUtYWNjZXNzb3IuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tdGlueS1tY2UnLFxuICBzdHlsZVVybHM6IFsnLi90aW55LW1jZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vdGlueS1tY2UuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBUaW55TUNFQ29tcG9uZW50IGV4dGVuZHMgRG9WYWx1ZUFjY2Vzc29yPHN0cmluZz4ge1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xMYWJlbDogbnVtYmVyID0gMztcbiAgQElucHV0KCkgY29sSW5wdXQ6IG51bWJlciA9IDk7XG4gIEBJbnB1dCgpIHBsdWdpbnM6IHN0cmluZ1tdID0gWydsaW5rJywgJ3Bhc3RlJywgJ3RhYmxlJ107XG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyID0gMzIwO1xuICBASW5wdXQoKSBpZDogc3RyaW5nID0gJ3RpbnlNY2UnO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTZWxmKCkgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgQEluamVjdChMT0NBTEVfSUQpIHB1YmxpYyBsb2NhbGU6IHN0cmluZyxcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihuZ0NvbnRyb2wsIGxvY2FsZSk7XG4gIH1cblxuICBlZGl0b3JDaGFuZ2UoZWxlbWVudDogRWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgZWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgZWxlbWVudCA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG94LWVkaXQtYXJlYScpLml0ZW0oMCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm5nQ29udHJvbC5pbnZhbGlkKSB7XG4gICAgICBpZiAoIWVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLmVuZHNXaXRoKCdzdGF0dXMtZGFuZ2VyJykpXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLmNvbmNhdCgnIHN0YXR1cy1kYW5nZXInKSk7XG4gICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLmVuZHNXaXRoKCdzdGF0dXMtZGFuZ2VyJykpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykucmVwbGFjZSgnc3RhdHVzLWRhbmdlcicsICcnKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=