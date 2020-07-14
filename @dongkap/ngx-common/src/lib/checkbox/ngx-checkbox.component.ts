import { Component, Input, Optional, Self, Inject, LOCALE_ID, EventEmitter, Output } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxValueAccessor } from '../base/ngx-value-accessor.component';
import { CheckboxModel } from './checkbox.model';

@Component({
  selector: 'ngx-checkbox',
  styleUrls: ['./ngx-checkbox.component.scss'],
  templateUrl: './ngx-checkbox.component.html',
})
export class NgxCheckboxComponent extends NgxValueAccessor<CheckboxModel[]> {
    @Input() colLabel: number = 3;
    @Input() colInput: number = 9;
    @Input() data: CheckboxModel[];
    @Output() onChecked: EventEmitter<any> = new EventEmitter<any>();

    constructor(@Optional() @Self() ngControl: NgControl,
      @Inject(LOCALE_ID) public locale: string) {
      super(ngControl, locale);
    }

    onCheckedChange() {
      if (!this.value) {
        this.value = this.data;
      }
      if (Array.isArray(this.value).valueOf()) {
        let isChecked: boolean = false;
        Array.from(this.value).forEach((value: CheckboxModel) => {
          if (value.selected) {
            isChecked = value.selected;
          }
        });
        if (this.required) {
          if (!isChecked) {
            this.ngControl.control.setErrors({
              'required': true,
            });
          } else {
            this.ngControl.control.setErrors(null);
          }
        }
        this.ngControl.control.markAsTouched();
        this.ngControl.control.markAsDirty();
      }
      this.onChecked.emit(this.value);
    }
}
