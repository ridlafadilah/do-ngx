import { Component, Input, Optional, Self, Inject, LOCALE_ID } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NbCalendarSize, NbDateService } from '@nebular/theme';
import { DatePattern } from '@dongkap/do-core';
import { DoValueAccessor } from '../base/do-value-accessor.component';

@Component({
  selector: 'do-datepicker',
  styleUrls: ['./do-datepicker.component.scss'],
  templateUrl: './do-datepicker.component.html',
})
export class DoDatePickerComponent extends DoValueAccessor<Date> {
    @Input() placeholder: string;
    @Input() colLabel: number = 3;
    @Input() colInput: number = 9;
    @Input() min: Date;
    @Input() max: Date;
    @Input() size: NbCalendarSize = NbCalendarSize.MEDIUM;

    constructor(@Optional() @Self() ngControl: NgControl,
      public dateService: NbDateService<Date>,
      @Inject(LOCALE_ID) public locale: string) {
      super(ngControl, locale);
      this.pattern = DatePattern.SLASH;
    }

    public writeValue(value: any): void {
        this._value = new Date(value);
        this.onChange(this.value);
        const control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsTouched();
            control.markAsDirty();
        }
    }
}
