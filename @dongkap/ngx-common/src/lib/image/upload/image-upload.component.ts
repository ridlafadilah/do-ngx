import {
  Component,
  Inject,
  OnDestroy,
  Input,
  ViewEncapsulation,
  Optional,
  Self,
  LOCALE_ID,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxValueAccessor } from '../../base/ngx-value-accessor.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'do-image-upload',
  styleUrls: ['./image-upload.component.scss'],
  templateUrl: './image-upload.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ImageUploadComponent extends NgxValueAccessor<any> implements OnDestroy {
  @Output() onUpload: EventEmitter<any> = new EventEmitter<any>();
  @Output() onPreview: EventEmitter<any> = new EventEmitter<any>();
  @Input() image: string;
  @Input() height: number = 225;
  @Input() width: number = 225;
  @Input() radius: number = 0;
  @Input() buttonUpload: boolean = true;
  @Input() skeleton: boolean = false;
  @Input() set uploadFn(finish: boolean) {
    if (finish) {
      this.ngControl.control.markAsPristine();
      this.ngControl.control.markAsUntouched();
    }
  }
  public opacity: string = '0.5';
  public imageDefault: string = `${document.getElementsByTagName('base')[0].href}/assets/images/avatars/default.png`;

  constructor(@Optional() @Self() ngControl: NgControl,
    @Inject(LOCALE_ID) public locale: string,
    public dom: DomSanitizer) {
    super(ngControl, locale);
  }

  public writeValue(value: any): void {
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

  upload(files: any) {
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

  ngOnDestroy(): void {}

  onInit(): void {
    if (!this.image) {
      this.image = this.imageDefault;
    }
  }

}
