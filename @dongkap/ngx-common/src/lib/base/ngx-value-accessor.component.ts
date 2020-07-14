import { NgControl } from '@angular/forms';
import { formatDate } from '@angular/common';
import { Input } from '@angular/core';
import { DateFormat } from '@dongkap/ngx-core';
import { NgxValidatorAccessor } from './ngx-validator-accessor.component';

export abstract class NgxValueAccessor<T> extends NgxValidatorAccessor {

    @Input() format: string = DateFormat.DATE;
    @Input() skeleton: boolean = false;
    protected _value: any;
    public defaultValue: any;

    constructor(public ngControl: NgControl, public locale: string) {
        super(ngControl);
    }

    get value(): T { return this._value; }

    set value(value: T) {
        if (this._value !== value) {
            this._value = value;
            if (value instanceof Date)
                this.onChange(formatDate(value, this.format, this.locale));
            else
                this.onChange(value);
            const control = this.ngControl.control;
            if (control) {
                control.updateValueAndValidity();
                control.markAsTouched();
                control.markAsDirty();
            }
        }
    }

    public writeValue(value: T): void {
        this._value = value;
        this.onChange(this.value);
        const control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsUntouched();
            control.markAsPristine();
        }
    }

    registerOnChange(fn: any): void { this.onChange = fn; }
    registerOnTouched(fn: any): void { this.onTouched = fn; }
    setDisabledState?(isDisabled: boolean): void { this.disabled = isDisabled; }

}
