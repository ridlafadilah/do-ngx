import { Component, Input, Optional, Self, Inject, LOCALE_ID } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NbCalendarSize, NbDateService } from '@nebular/theme';
import { DatePattern } from '@dongkap/do-core';
import { DoValueAccessor } from '../base/do-value-accessor.component';
import { DatePipe } from '@angular/common';

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
      @Inject(LOCALE_ID) public locale: string,
      private datePipe: DatePipe) {
      super(ngControl, locale);
      this.pattern = DatePattern.SLASH;
    }

    public writeValue(value: any): void {
      if (String(value).match(this.pattern)) {
        const dateParse: string = this.parse(value);
        if (!isNaN(Date.parse(dateParse))) {
          this._value = new Date(dateParse);
          this.onChange(this.value);
        }
      }
      const control = this.ngControl.control;
      if (control) {
        control.updateValueAndValidity();
        control.markAsTouched();
        control.markAsDirty();
      }
    }

    private parse(value: any): string {
      const year: string = String(value).split('/')[2];
      const month: string = String(value).split('/')[1];
      const day: string = String(value).split('/')[0];
      return year + '/' + month + '/' + day;
    }
}
