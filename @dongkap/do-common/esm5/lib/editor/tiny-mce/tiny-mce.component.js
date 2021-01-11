import { __extends } from "tslib";
import { Component, ViewEncapsulation, Input, Optional, Self, Inject, LOCALE_ID, ElementRef, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DoValueAccessor } from '../../base/do-value-accessor.component';
var TinyMCEComponent = /** @class */ (function (_super) {
    __extends(TinyMCEComponent, _super);
    function TinyMCEComponent(ngControl, locale, element) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.locale = locale;
        _this.element = element;
        _this.colLabel = 3;
        _this.colInput = 9;
        _this.plugins = ['link', 'paste', 'table'];
        _this.height = 320;
        _this.id = 'tinyMce';
        return _this;
    }
    TinyMCEComponent.prototype.editorChange = function (element) {
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
    };
    TinyMCEComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
        { type: ElementRef }
    ]; };
    TinyMCEComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-tiny-mce',
                    template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <do-mce-core\n      [id]=\"id\"\n      [name]=\"name\"\n      [required]=\"required\"\n      [readonly]=\"disabled\"\n      [plugins]=\"plugins\"\n      [height]=\"height\"\n      [value]=\"value\"\n      [(ngModel)]=\"value\"\n      (change)=\"onChange($event)\"\n      (focus)=\"onTouched($event)\"\n      (editorchange)=\"editorChange($event.target.contentAreaContainer)\"\n      (focus)=\"editorChange($event.target.contentAreaContainer)\"\n      (blur)=\"editorChange($event.target.contentAreaContainer)\">\n    </do-mce-core>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'skeleton': skeleton\n        }\"\n        [ngStyle]=\"{ \n          'width':  '100%',\n          'height':  height + 'px'\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".tox-edit-area.status-danger{border:1px solid #ff3d71!important;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #fde6e8}"]
                },] }
    ];
    TinyMCEComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
        { type: ElementRef }
    ]; };
    TinyMCEComponent.propDecorators = {
        placeholder: [{ type: Input }],
        colLabel: [{ type: Input }],
        colInput: [{ type: Input }],
        plugins: [{ type: Input }],
        height: [{ type: Input }],
        id: [{ type: Input }]
    };
    return TinyMCEComponent;
}(DoValueAccessor));
export { TinyMCEComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlueS1tY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2VkaXRvci90aW55LW1jZS90aW55LW1jZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLEtBQUssRUFDTCxRQUFRLEVBQ1IsSUFBSSxFQUNKLE1BQU0sRUFDTixTQUFTLEVBQ1QsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFekU7SUFNc0Msb0NBQXVCO0lBUTNELDBCQUFnQyxTQUFvQixFQUN4QixNQUFjLEVBQ2hDLE9BQW1CO1FBRjdCLFlBR0Usa0JBQU0sU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUN6QjtRQUgyQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hDLGFBQU8sR0FBUCxPQUFPLENBQVk7UUFScEIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGFBQU8sR0FBYSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0MsWUFBTSxHQUFXLEdBQUcsQ0FBQztRQUNyQixRQUFFLEdBQVcsU0FBUyxDQUFDOztJQU1oQyxDQUFDO0lBRUQsdUNBQVksR0FBWixVQUFhLE9BQWdCO1FBQzNCLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDckMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkU7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO1lBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7Z0JBQzFELE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUN4RixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QzthQUFNO1lBQ0wsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFBRTtnQkFDM0QsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDM0Y7U0FDRjtJQUNILENBQUM7O2dCQXBCMEMsU0FBUyx1QkFBdkMsUUFBUSxZQUFJLElBQUk7NkNBQzFCLE1BQU0sU0FBQyxTQUFTO2dCQUNBLFVBQVU7OztnQkFoQjlCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFFdkIsc3NDQUF3QztvQkFDeEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7O2dCQVJRLFNBQVMsdUJBaUJILFFBQVEsWUFBSSxJQUFJOzZDQUMxQixNQUFNLFNBQUMsU0FBUztnQkFwQm5CLFVBQVU7Ozs4QkFZVCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7cUJBQ0wsS0FBSzs7SUF1QlIsdUJBQUM7Q0FBQSxBQW5DRCxDQU1zQyxlQUFlLEdBNkJwRDtTQTdCWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG4gIEluamVjdCxcbiAgTE9DQUxFX0lELFxuICBFbGVtZW50UmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERvVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4uLy4uL2Jhc2UvZG8tdmFsdWUtYWNjZXNzb3IuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tdGlueS1tY2UnLFxuICBzdHlsZVVybHM6IFsnLi90aW55LW1jZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vdGlueS1tY2UuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBUaW55TUNFQ29tcG9uZW50IGV4dGVuZHMgRG9WYWx1ZUFjY2Vzc29yPHN0cmluZz4ge1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xMYWJlbDogbnVtYmVyID0gMztcbiAgQElucHV0KCkgY29sSW5wdXQ6IG51bWJlciA9IDk7XG4gIEBJbnB1dCgpIHBsdWdpbnM6IHN0cmluZ1tdID0gWydsaW5rJywgJ3Bhc3RlJywgJ3RhYmxlJ107XG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyID0gMzIwO1xuICBASW5wdXQoKSBpZDogc3RyaW5nID0gJ3RpbnlNY2UnO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTZWxmKCkgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgQEluamVjdChMT0NBTEVfSUQpIHB1YmxpYyBsb2NhbGU6IHN0cmluZyxcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihuZ0NvbnRyb2wsIGxvY2FsZSk7XG4gIH1cblxuICBlZGl0b3JDaGFuZ2UoZWxlbWVudDogRWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgZWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgZWxlbWVudCA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG94LWVkaXQtYXJlYScpLml0ZW0oMCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm5nQ29udHJvbC5pbnZhbGlkKSB7XG4gICAgICBpZiAoIWVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLmVuZHNXaXRoKCdzdGF0dXMtZGFuZ2VyJykpXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLmNvbmNhdCgnIHN0YXR1cy1kYW5nZXInKSk7XG4gICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLmVuZHNXaXRoKCdzdGF0dXMtZGFuZ2VyJykpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykucmVwbGFjZSgnc3RhdHVzLWRhbmdlcicsICcnKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=