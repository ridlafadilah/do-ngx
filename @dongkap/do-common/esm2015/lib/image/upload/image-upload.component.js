import { Component, Inject, Input, ViewEncapsulation, Optional, Self, LOCALE_ID, Output, EventEmitter, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DoValueAccessor } from '../../base/do-value-accessor.component';
import { DomSanitizer } from '@angular/platform-browser';
export class ImageUploadComponent extends DoValueAccessor {
    constructor(ngControl, locale, dom) {
        super(ngControl, locale);
        this.locale = locale;
        this.dom = dom;
        this.onUpload = new EventEmitter();
        this.onPreview = new EventEmitter();
        this.height = 225;
        this.width = 225;
        this.radius = 0;
        this.buttonUpload = true;
        this.skeleton = false;
        this.opacity = '0.5';
        this.imageDefault = `${document.getElementsByTagName('base')[0].href}/assets/images/avatars/default.png`;
    }
    set uploadFn(finish) {
        if (finish) {
            this.ngControl.control.markAsPristine();
            this.ngControl.control.markAsUntouched();
        }
    }
    writeValue(value) {
        if (value instanceof File) {
            this.opacity = '0.8';
            this.image = URL.createObjectURL(value);
            this._value = value;
        }
        this.onChange(this.value);
        const control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsTouched();
            control.markAsDirty();
        }
    }
    upload(files) {
        this.opacity = '0.8';
        for (let index = 0; index < files.length; index++) {
            this.value = files[index];
        }
        this.image = URL.createObjectURL(this.value);
        this.onPreview.emit(this.value);
    }
    doUpload() {
        this.onUpload.emit(this.value);
    }
    ngOnDestroy() { }
    onInit() {
        if (!this.image) {
            this.image = this.imageDefault;
        }
    }
}
ImageUploadComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: DomSanitizer }
];
ImageUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-image-upload',
                template: "<div class=\"body-upload\">\n  <div *ngIf=\"!skeleton; else contentskeleton\"\n    class=\"upload-container\"\n    (click)=\"img.click()\"\n    doDragDrop\n    [opacity]=\"opacity\"\n    (onFileDropped)=\"upload($event)\"\n    [ngStyle]=\"{ \n      'background-image': 'url(' + (image? image: imageDefault) + ')',\n      'height':  height + 'px',\n      'width':  width + 'px',\n      'border-radius':  radius + '%'\n    }\">\n    <input\n      hidden\n      type=\"file\"\n      accept=\"image/png, image/jpeg, image/jpg\"\n      (change)=\"upload($event.target.files)\"\n      #img>\n  </div>\n  <ng-template #contentskeleton>\n    <div\n      class=\"upload-container\"\n      [ngStyle]=\"{ \n        'background-image': 'url(' + image + ')',\n        'height':  height + 'px',\n        'width':  width + 'px',\n        'border-radius':  radius + '%'\n      }\">\n    </div>\n  </ng-template>\n  <button *ngIf=\"buttonUpload\"\n    class=\"upload-bg\"\n    [size]=\"'small'\"\n    [shape]=\"'round'\"\n    [status]=\"'primary'\"\n    [disabled]=\"ngControl.pristine || disabled\"\n    (click)=\"doUpload()\"\n    nbButton\n    [ngStyle]=\"{ \n      'top': 'calc('+height+'px + 0.157rem)'\n    }\">\n    <nb-icon class=\"upload-icon\" icon=\"cloud-upload-outline\" pack=\"eva\"></nb-icon>\n    {{ 'Upload' | translate}}\n  </button>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".upload-container{background-repeat:no-repeat;background-color:#f7f9fc;background-size:cover;margin:20px auto;border:2px dashed #d9dde5}.upload-container:hover{cursor:pointer}.body-upload{padding:15px}.upload-bg{position:absolute;left:50%;transform:translate(-50%);z-index:2}.nb-theme-default [nbButton].appearance-filled.status-primary[disabled]{background-color:#edf1f7;border-color:transparent;color:rgba(143,155,179,.48)}.upload-icon{font-size:5rem}"]
            },] }
];
ImageUploadComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: DomSanitizer }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9pbWFnZS91cGxvYWQvaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixLQUFLLEVBQ0wsaUJBQWlCLEVBQ2pCLFFBQVEsRUFDUixJQUFJLEVBQ0osU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFRekQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGVBQW9CO0lBa0I1RCxZQUFnQyxTQUFvQixFQUN4QixNQUFjLEVBQ2pDLEdBQWlCO1FBQ3hCLEtBQUssQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFGQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2pDLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFuQmhCLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0RCxjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFeEQsV0FBTSxHQUFXLEdBQUcsQ0FBQztRQUNyQixVQUFLLEdBQVcsR0FBRyxDQUFDO1FBQ3BCLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQU81QixZQUFPLEdBQVcsS0FBSyxDQUFDO1FBQ3hCLGlCQUFZLEdBQVcsR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxvQ0FBb0MsQ0FBQztJQU1uSCxDQUFDO0lBYkQsSUFBYSxRQUFRLENBQUMsTUFBZTtRQUNuQyxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztJQVVNLFVBQVUsQ0FBQyxLQUFVO1FBQzFCLElBQUksS0FBSyxZQUFZLElBQUksRUFBRTtZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUN2QyxJQUFJLE9BQU8sRUFBRTtZQUNULE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN4QixPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQVU7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxXQUFXLEtBQVUsQ0FBQztJQUV0QixNQUFNO1FBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDaEM7SUFDSCxDQUFDOzs7WUF4QzBDLFNBQVMsdUJBQXZDLFFBQVEsWUFBSSxJQUFJO3lDQUMxQixNQUFNLFNBQUMsU0FBUztZQUNMLFlBQVk7OztZQTFCM0IsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBRTNCLDAwQ0FBNEM7Z0JBQzVDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7O1lBVFEsU0FBUyx1QkE0QkgsUUFBUSxZQUFJLElBQUk7eUNBQzFCLE1BQU0sU0FBQyxTQUFTO1lBM0JaLFlBQVk7Ozt1QkFTbEIsTUFBTTt3QkFDTixNQUFNO29CQUNOLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBPcHRpb25hbCxcbiAgU2VsZixcbiAgTE9DQUxFX0lELFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERvVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4uLy4uL2Jhc2UvZG8tdmFsdWUtYWNjZXNzb3IuY29tcG9uZW50JztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1pbWFnZS11cGxvYWQnLFxuICBzdHlsZVVybHM6IFsnLi9pbWFnZS11cGxvYWQuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlVXBsb2FkQ29tcG9uZW50IGV4dGVuZHMgRG9WYWx1ZUFjY2Vzc29yPGFueT4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBAT3V0cHV0KCkgb25VcGxvYWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvblByZXZpZXc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBJbnB1dCgpIGltYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyID0gMjI1O1xuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyID0gMjI1O1xuICBASW5wdXQoKSByYWRpdXM6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGJ1dHRvblVwbG9hZDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHNrZWxldG9uOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNldCB1cGxvYWRGbihmaW5pc2g6IGJvb2xlYW4pIHtcbiAgICBpZiAoZmluaXNoKSB7XG4gICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLm1hcmtBc1ByaXN0aW5lKCk7XG4gICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLm1hcmtBc1VudG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgb3BhY2l0eTogc3RyaW5nID0gJzAuNSc7XG4gIHB1YmxpYyBpbWFnZURlZmF1bHQ6IHN0cmluZyA9IGAke2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYXNlJylbMF0uaHJlZn0vYXNzZXRzL2ltYWdlcy9hdmF0YXJzL2RlZmF1bHQucG5nYDtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2VsZigpIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwdWJsaWMgbG9jYWxlOiBzdHJpbmcsXG4gICAgcHVibGljIGRvbTogRG9tU2FuaXRpemVyKSB7XG4gICAgc3VwZXIobmdDb250cm9sLCBsb2NhbGUpO1xuICB9XG5cbiAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEZpbGUpIHtcbiAgICAgIHRoaXMub3BhY2l0eSA9ICcwLjgnO1xuICAgICAgdGhpcy5pbWFnZSA9IFVSTC5jcmVhdGVPYmplY3RVUkwodmFsdWUpO1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5uZ0NvbnRyb2wuY29udHJvbDtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgICBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICB9XG4gIH1cblxuICB1cGxvYWQoZmlsZXM6IGFueSkge1xuICAgIHRoaXMub3BhY2l0eSA9ICcwLjgnO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmaWxlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMudmFsdWUgPSBmaWxlc1tpbmRleF07XG4gICAgfVxuICAgIHRoaXMuaW1hZ2UgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMudmFsdWUpO1xuICAgIHRoaXMub25QcmV2aWV3LmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cblxuICBkb1VwbG9hZCgpIHtcbiAgICB0aGlzLm9uVXBsb2FkLmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHt9XG5cbiAgb25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pbWFnZSkge1xuICAgICAgdGhpcy5pbWFnZSA9IHRoaXMuaW1hZ2VEZWZhdWx0O1xuICAgIH1cbiAgfVxuXG59XG4iXX0=