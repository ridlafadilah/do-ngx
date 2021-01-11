import { __extends } from "tslib";
import { Component, Inject, Input, ViewEncapsulation, Optional, Self, LOCALE_ID, Output, EventEmitter, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DoValueAccessor } from '../../base/do-value-accessor.component';
import { DomSanitizer } from '@angular/platform-browser';
var ImageUploadComponent = /** @class */ (function (_super) {
    __extends(ImageUploadComponent, _super);
    function ImageUploadComponent(ngControl, locale, dom) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.locale = locale;
        _this.dom = dom;
        _this.onUpload = new EventEmitter();
        _this.onPreview = new EventEmitter();
        _this.height = 225;
        _this.width = 225;
        _this.radius = 0;
        _this.buttonUpload = true;
        _this.skeleton = false;
        _this.opacity = '0.5';
        _this.imageDefault = document.getElementsByTagName('base')[0].href + "/assets/images/avatars/default.png";
        return _this;
    }
    Object.defineProperty(ImageUploadComponent.prototype, "uploadFn", {
        set: function (finish) {
            if (finish) {
                this.ngControl.control.markAsPristine();
                this.ngControl.control.markAsUntouched();
            }
        },
        enumerable: false,
        configurable: true
    });
    ImageUploadComponent.prototype.writeValue = function (value) {
        if (value instanceof File) {
            this.opacity = '0.8';
            this.image = URL.createObjectURL(value);
            this._value = value;
        }
        this.onChange(this.value);
        var control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsTouched();
            control.markAsDirty();
        }
    };
    ImageUploadComponent.prototype.upload = function (files) {
        this.opacity = '0.8';
        for (var index = 0; index < files.length; index++) {
            this.value = files[index];
        }
        this.image = URL.createObjectURL(this.value);
        this.onPreview.emit(this.value);
    };
    ImageUploadComponent.prototype.doUpload = function () {
        this.onUpload.emit(this.value);
    };
    ImageUploadComponent.prototype.ngOnDestroy = function () { };
    ImageUploadComponent.prototype.onInit = function () {
        if (!this.image) {
            this.image = this.imageDefault;
        }
    };
    ImageUploadComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
        { type: DomSanitizer }
    ]; };
    ImageUploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-image-upload',
                    template: "<div class=\"body-upload\">\n  <div *ngIf=\"!skeleton; else contentskeleton\"\n    class=\"upload-container\"\n    (click)=\"img.click()\"\n    doDragDrop\n    [opacity]=\"opacity\"\n    (onFileDropped)=\"upload($event)\"\n    [ngStyle]=\"{ \n      'background-image': 'url(' + (image? image: imageDefault) + ')',\n      'height':  height + 'px',\n      'width':  width + 'px',\n      'border-radius':  radius + '%'\n    }\">\n    <input\n      hidden\n      type=\"file\"\n      accept=\"image/png, image/jpeg, image/jpg\"\n      (change)=\"upload($event.target.files)\"\n      #img>\n  </div>\n  <ng-template #contentskeleton>\n    <div\n      class=\"upload-container\"\n      [ngStyle]=\"{ \n        'background-image': 'url(' + image + ')',\n        'height':  height + 'px',\n        'width':  width + 'px',\n        'border-radius':  radius + '%'\n      }\">\n    </div>\n  </ng-template>\n  <button *ngIf=\"buttonUpload\"\n    class=\"upload-bg\"\n    [size]=\"'small'\"\n    [shape]=\"'round'\"\n    [status]=\"'primary'\"\n    [disabled]=\"ngControl.pristine || disabled\"\n    (click)=\"doUpload()\"\n    nbButton\n    [ngStyle]=\"{ \n      'top': 'calc('+height+'px + 0.157rem)'\n    }\">\n    <nb-icon class=\"upload-icon\" icon=\"cloud-upload-outline\" pack=\"eva\"></nb-icon>\n    {{ 'Upload' | translate}}\n  </button>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".upload-container{background-repeat:no-repeat;background-color:#f7f9fc;background-size:cover;margin:20px auto;border:2px dashed #d9dde5}.upload-container:hover{cursor:pointer}.body-upload{padding:15px}.upload-bg{position:absolute;left:50%;transform:translate(-50%);z-index:2}.nb-theme-default [nbButton].appearance-filled.status-primary[disabled]{background-color:#edf1f7;border-color:transparent;color:rgba(143,155,179,.48)}.upload-icon{font-size:5rem}"]
                },] }
    ];
    ImageUploadComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
        { type: DomSanitizer }
    ]; };
    ImageUploadComponent.propDecorators = {
        onUpload: [{ type: Output }],
        onPreview: [{ type: Output }],
        image: [{ type: Input }],
        height: [{ type: Input }],
        width: [{ type: Input }],
        radius: [{ type: Input }],
        buttonUpload: [{ type: Input }],
        skeleton: [{ type: Input }],
        uploadFn: [{ type: Input }]
    };
    return ImageUploadComponent;
}(DoValueAccessor));
export { ImageUploadComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9pbWFnZS91cGxvYWQvaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sS0FBSyxFQUNMLGlCQUFpQixFQUNqQixRQUFRLEVBQ1IsSUFBSSxFQUNKLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpEO0lBTTBDLHdDQUFvQjtJQWtCNUQsOEJBQWdDLFNBQW9CLEVBQ3hCLE1BQWMsRUFDakMsR0FBaUI7UUFGMUIsWUFHRSxrQkFBTSxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQ3pCO1FBSDJCLFlBQU0sR0FBTixNQUFNLENBQVE7UUFDakMsU0FBRyxHQUFILEdBQUcsQ0FBYztRQW5CaEIsY0FBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RELGVBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV4RCxZQUFNLEdBQVcsR0FBRyxDQUFDO1FBQ3JCLFdBQUssR0FBVyxHQUFHLENBQUM7UUFDcEIsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixjQUFRLEdBQVksS0FBSyxDQUFDO1FBTzVCLGFBQU8sR0FBVyxLQUFLLENBQUM7UUFDeEIsa0JBQVksR0FBYyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSx1Q0FBb0MsQ0FBQzs7SUFNbkgsQ0FBQztJQWJELHNCQUFhLDBDQUFRO2FBQXJCLFVBQXNCLE1BQWU7WUFDbkMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQzFDO1FBQ0gsQ0FBQzs7O09BQUE7SUFVTSx5Q0FBVSxHQUFqQixVQUFrQixLQUFVO1FBQzFCLElBQUksS0FBSyxZQUFZLElBQUksRUFBRTtZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUN2QyxJQUFJLE9BQU8sRUFBRTtZQUNULE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN4QixPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQscUNBQU0sR0FBTixVQUFPLEtBQVU7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCwwQ0FBVyxHQUFYLGNBQXFCLENBQUM7SUFFdEIscUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7Z0JBeEMwQyxTQUFTLHVCQUF2QyxRQUFRLFlBQUksSUFBSTs2Q0FDMUIsTUFBTSxTQUFDLFNBQVM7Z0JBQ0wsWUFBWTs7O2dCQTFCM0IsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBRTNCLDAwQ0FBNEM7b0JBQzVDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7OztnQkFUUSxTQUFTLHVCQTRCSCxRQUFRLFlBQUksSUFBSTs2Q0FDMUIsTUFBTSxTQUFDLFNBQVM7Z0JBM0JaLFlBQVk7OzsyQkFTbEIsTUFBTTs0QkFDTixNQUFNO3dCQUNOLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7K0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7O0lBbURSLDJCQUFDO0NBQUEsQUFsRUQsQ0FNMEMsZUFBZSxHQTREeEQ7U0E1RFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbmplY3QsXG4gIElucHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG4gIExPQ0FMRV9JRCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEb1ZhbHVlQWNjZXNzb3IgfSBmcm9tICcuLi8uLi9iYXNlL2RvLXZhbHVlLWFjY2Vzc29yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8taW1hZ2UtdXBsb2FkJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS11cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZENvbXBvbmVudCBleHRlbmRzIERvVmFsdWVBY2Nlc3Nvcjxhbnk+IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQE91dHB1dCgpIG9uVXBsb2FkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25QcmV2aWV3OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBASW5wdXQoKSBpbWFnZTogc3RyaW5nO1xuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlciA9IDIyNTtcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlciA9IDIyNTtcbiAgQElucHV0KCkgcmFkaXVzOiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBidXR0b25VcGxvYWQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBza2VsZXRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzZXQgdXBsb2FkRm4oZmluaXNoOiBib29sZWFuKSB7XG4gICAgaWYgKGZpbmlzaCkge1xuICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNQcmlzdGluZSgpO1xuICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIG9wYWNpdHk6IHN0cmluZyA9ICcwLjUnO1xuICBwdWJsaWMgaW1hZ2VEZWZhdWx0OiBzdHJpbmcgPSBgJHtkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYmFzZScpWzBdLmhyZWZ9L2Fzc2V0cy9pbWFnZXMvYXZhdGFycy9kZWZhdWx0LnBuZ2A7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNlbGYoKSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHVibGljIGxvY2FsZTogc3RyaW5nLFxuICAgIHB1YmxpYyBkb206IERvbVNhbml0aXplcikge1xuICAgIHN1cGVyKG5nQ29udHJvbCwgbG9jYWxlKTtcbiAgfVxuXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGaWxlKSB7XG4gICAgICB0aGlzLm9wYWNpdHkgPSAnMC44JztcbiAgICAgIHRoaXMuaW1hZ2UgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHZhbHVlKTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMubmdDb250cm9sLmNvbnRyb2w7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgICBjb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgfVxuICB9XG5cbiAgdXBsb2FkKGZpbGVzOiBhbnkpIHtcbiAgICB0aGlzLm9wYWNpdHkgPSAnMC44JztcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmlsZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLnZhbHVlID0gZmlsZXNbaW5kZXhdO1xuICAgIH1cbiAgICB0aGlzLmltYWdlID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLm9uUHJldmlldy5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgZG9VcGxvYWQoKSB7XG4gICAgdGhpcy5vblVwbG9hZC5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7fVxuXG4gIG9uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaW1hZ2UpIHtcbiAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLmltYWdlRGVmYXVsdDtcbiAgICB9XG4gIH1cblxufVxuIl19