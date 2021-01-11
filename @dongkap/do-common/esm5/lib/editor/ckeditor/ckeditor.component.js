import { __extends } from "tslib";
import { Component, Inject, Input, ViewEncapsulation, Optional, Self, LOCALE_ID, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DoValueAccessor } from '../../base/do-value-accessor.component';
var CaldeiraKnabbenEditorComponent = /** @class */ (function (_super) {
    __extends(CaldeiraKnabbenEditorComponent, _super);
    function CaldeiraKnabbenEditorComponent(ngControl, locale) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.locale = locale;
        _this.colLabel = 3;
        _this.colInput = 9;
        _this.minLength = 0;
        _this.maxLength = 100;
        _this.height = 320;
        _this.config = {
            skin: 'bootstrapck',
            height: _this.height,
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
            removeButtons: "Source,Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,\n                    PasteText,PasteFromWord,Undo,Redo,Find,Replace,SelectAll,Scayt,\n                    Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,\n                    HiddenField,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,\n                    Outdent,Indent,CreateDiv,Blockquote,BidiLtr,BidiRtl,Language,Unlink,\n                    Anchor,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,\n                    Iframe,Maximize,ShowBlocks,About",
        };
        return _this;
    }
    CaldeiraKnabbenEditorComponent.prototype.editorChange = function (element) {
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
    };
    CaldeiraKnabbenEditorComponent.prototype.ngOnDestroy = function () { };
    CaldeiraKnabbenEditorComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    CaldeiraKnabbenEditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-ckeditor',
                    template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <ckeditor\n        [config]=\"config\"\n        [readonly]=\"disabled\"\n        [required]=\"required\"\n        [(ngModel)]=\"value\"\n        (change)=\"onChange($event)\"\n        (blur)=\"onTouched($event)\"\n        (blur)=\"editorChange($event.editor.ui.contentsElement)\"\n        (focus)=\"editorChange($event.editor.ui.contentsElement)\"\n        (editorChange)=\"editorChange($event.editor.ui.contentsElement)\"\n        debounce=\"500\"\n        #ckeditor>\n    </ckeditor>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'skeleton': skeleton\n        }\"\n        [ngStyle]=\"{ \n          'width':  '100%',\n          'height':  height + 'px'\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".cke_contents.status-danger{border:1px solid #ff3d71!important;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #fde6e8}"]
                },] }
    ];
    CaldeiraKnabbenEditorComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    CaldeiraKnabbenEditorComponent.propDecorators = {
        placeholder: [{ type: Input }],
        colLabel: [{ type: Input }],
        colInput: [{ type: Input }],
        minLength: [{ type: Input }],
        maxLength: [{ type: Input }],
        height: [{ type: Input }],
        config: [{ type: Input }]
    };
    return CaldeiraKnabbenEditorComponent;
}(DoValueAccessor));
export { CaldeiraKnabbenEditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2tlZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2VkaXRvci9ja2VkaXRvci9ja2VkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFDTCxpQkFBaUIsRUFDakIsUUFBUSxFQUNSLElBQUksRUFDSixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV6RTtJQU1vRCxrREFBdUI7SUF3Q3pFLHdDQUFnQyxTQUFvQixFQUN4QixNQUFjO1FBRDFDLFlBRUUsa0JBQU0sU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUN6QjtRQUYyQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBdkNqQyxjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixlQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLFlBQU0sR0FBVyxHQUFHLENBQUM7UUFDckIsWUFBTSxHQUFRO1lBQ3JCLElBQUksRUFBRSxhQUFhO1lBQ25CLE1BQU0sRUFBRSxLQUFJLENBQUMsTUFBTTtZQUVuQixjQUFjLEVBQUUsS0FBSztZQUNyQixxQkFBcUIsRUFBRSxJQUFJO1lBQzNCLFVBQVUsRUFBRSxvREFBb0Q7WUFDaEUsYUFBYSxFQUFFO2dCQUNiLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxFQUFFO2dCQUM5RCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FB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bXBvbmVudCxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIE9wdGlvbmFsLFxuICBTZWxmLFxuICBMT0NBTEVfSUQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEb1ZhbHVlQWNjZXNzb3IgfSBmcm9tICcuLi8uLi9iYXNlL2RvLXZhbHVlLWFjY2Vzc29yLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWNrZWRpdG9yJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2tlZGl0b3IuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2NrZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZGVpcmFLbmFiYmVuRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgRG9WYWx1ZUFjY2Vzc29yPHN0cmluZz4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xMYWJlbDogbnVtYmVyID0gMztcbiAgQElucHV0KCkgY29sSW5wdXQ6IG51bWJlciA9IDk7XG4gIEBJbnB1dCgpIG1pbkxlbmd0aDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgbWF4TGVuZ3RoOiBudW1iZXIgPSAxMDA7XG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyID0gMzIwO1xuICBASW5wdXQoKSBjb25maWc6IGFueSA9IHtcbiAgICBza2luOiAnYm9vdHN0cmFwY2snLFxuICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG5cbiAgICBhbGxvd2VkQ29udGVudDogZmFsc2UsXG4gICAgZm9yY2VQYXN0ZUFzUGxhaW5UZXh0OiB0cnVlLFxuICAgIGZvbnRfbmFtZXM6ICdPcGVuIFNhbnM7c2Fucy1zZXJpZjtBcmlhbDtUaW1lcyBOZXcgUm9tYW47VmVyZGFuYScsXG4gICAgdG9vbGJhckdyb3VwczogW1xuICAgICAgeyBuYW1lOiAnZG9jdW1lbnQnLCBncm91cHM6IFsnbW9kZScsICdkb2N1bWVudCcsICdkb2N0b29scyddIH0sXG4gICAgICB7IG5hbWU6ICdjbGlwYm9hcmQnLCBncm91cHM6IFsnY2xpcGJvYXJkJywgJ3VuZG8nXSB9LFxuICAgICAgeyBuYW1lOiAnZWRpdGluZycsIGdyb3VwczogWydmaW5kJywgJ3NlbGVjdGlvbicsICdzcGVsbGNoZWNrZXInLCAnZWRpdGluZyddIH0sXG4gICAgICB7IG5hbWU6ICdmb3JtcycsIGdyb3VwczogWydmb3JtcyddIH0sXG4gICAgICAnLycsXG4gICAgICB7IG5hbWU6ICdiYXNpY3N0eWxlcycsIGdyb3VwczogWydiYXNpY3N0eWxlcycsICdjbGVhbnVwJ10gfSxcbiAgICAgIHsgbmFtZTogJ3BhcmFncmFwaCcsIGdyb3VwczogWydsaXN0JywgJ2luZGVudCcsICdibG9ja3MnLCAnYWxpZ24nLCAnYmlkaScsICdwYXJhZ3JhcGgnXSB9LFxuICAgICAgeyBuYW1lOiAnbGlua3MnLCBncm91cHM6IFsnbGlua3MnXSB9LFxuICAgICAgeyBuYW1lOiAnaW5zZXJ0JywgZ3JvdXBzOiBbJ2luc2VydCddIH0sXG4gICAgICAnLycsXG4gICAgICB7IG5hbWU6ICdzdHlsZXMnLCBncm91cHM6IFsnc3R5bGVzJ10gfSxcbiAgICAgIHsgbmFtZTogJ2NvbG9ycycsIGdyb3VwczogWydjb2xvcnMnXSB9LFxuICAgICAgeyBuYW1lOiAndG9vbHMnLCBncm91cHM6IFsndG9vbHMnXSB9LFxuICAgICAgeyBuYW1lOiAnb3RoZXJzJywgZ3JvdXBzOiBbJ290aGVycyddIH0sXG4gICAgICB7IG5hbWU6ICdhYm91dCcsIGdyb3VwczogWydhYm91dCddIH0sXG4gICAgXSxcbiAgICByZW1vdmVCdXR0b25zOiBgU291cmNlLFNhdmUsTmV3UGFnZSxQcmV2aWV3LFByaW50LFRlbXBsYXRlcyxDdXQsQ29weSxQYXN0ZSxcbiAgICAgICAgICAgICAgICAgICAgUGFzdGVUZXh0LFBhc3RlRnJvbVdvcmQsVW5kbyxSZWRvLEZpbmQsUmVwbGFjZSxTZWxlY3RBbGwsU2NheXQsXG4gICAgICAgICAgICAgICAgICAgIEZvcm0sQ2hlY2tib3gsUmFkaW8sVGV4dEZpZWxkLFRleHRhcmVhLFNlbGVjdCxCdXR0b24sSW1hZ2VCdXR0b24sXG4gICAgICAgICAgICAgICAgICAgIEhpZGRlbkZpZWxkLFN0cmlrZSxTdWJzY3JpcHQsU3VwZXJzY3JpcHQsQ29weUZvcm1hdHRpbmcsUmVtb3ZlRm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICBPdXRkZW50LEluZGVudCxDcmVhdGVEaXYsQmxvY2txdW90ZSxCaWRpTHRyLEJpZGlSdGwsTGFuZ3VhZ2UsVW5saW5rLFxuICAgICAgICAgICAgICAgICAgICBBbmNob3IsSW1hZ2UsRmxhc2gsVGFibGUsSG9yaXpvbnRhbFJ1bGUsU21pbGV5LFNwZWNpYWxDaGFyLFBhZ2VCcmVhayxcbiAgICAgICAgICAgICAgICAgICAgSWZyYW1lLE1heGltaXplLFNob3dCbG9ja3MsQWJvdXRgLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTZWxmKCkgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgQEluamVjdChMT0NBTEVfSUQpIHB1YmxpYyBsb2NhbGU6IHN0cmluZykge1xuICAgIHN1cGVyKG5nQ29udHJvbCwgbG9jYWxlKTtcbiAgfVxuXG4gIGVkaXRvckNoYW5nZShlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGlmICh0aGlzLm5nQ29udHJvbC5pbnZhbGlkKSB7XG4gICAgICAgIGlmICghZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuZW5kc1dpdGgoJ3N0YXR1cy1kYW5nZXInKSlcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBlbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5jb25jYXQoJyBzdGF0dXMtZGFuZ2VyJykpO1xuICAgICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5lbmRzV2l0aCgnc3RhdHVzLWRhbmdlcicpKSB7XG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykucmVwbGFjZSgnc3RhdHVzLWRhbmdlcicsICcnKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHt9XG5cbn1cbiJdfQ==