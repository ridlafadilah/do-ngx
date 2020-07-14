import {
  Component,
  ViewEncapsulation,
  Input,
  Optional,
  Self,
  Inject,
  LOCALE_ID,
  ElementRef,
} from '@angular/core';
import { NgxValueAccessor } from '../../base/ngx-value-accessor.component';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'ngx-tiny-mce',
  styleUrls: ['./tiny-mce.component.scss'],
  templateUrl: './tiny-mce.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class TinyMCEComponent extends NgxValueAccessor<string> {
  @Input() placeholder: string;
  @Input() colLabel: number = 3;
  @Input() colInput: number = 9;
  @Input() plugins: string[] = ['link', 'paste', 'table'];
  @Input() height: number = 320;

  constructor(@Optional() @Self() ngControl: NgControl,
    @Inject(LOCALE_ID) public locale: string,
    private element: ElementRef) {
    super(ngControl, locale);
  }

  editorChange(element: Element) {
    if (!element) {
      element = this.element.nativeElement;
      element = element.getElementsByClassName('mce-edit-area').item(0);
    }
    if (this.ngControl.invalid) {
      if (!element.getAttribute('class').endsWith('status-danger'))
        element.setAttribute('class', element.getAttribute('class').concat(' status-danger'));
      this.ngControl.control.markAsTouched();
    } else {
      if (element.getAttribute('class').endsWith('status-danger')) {
        element.setAttribute('class', element.getAttribute('class').replace('status-danger', ''));
      }
    }
  }
}
