import { NgControl } from '@angular/forms';
import { formatDate } from '@angular/common';
import { Directive, Input } from '@angular/core';
import { DateFormat } from '@dongkap/do-core';
import { DoValidatorAccessor } from './do-validator-accessor.component';

@Directive()
export abstract class DoValueAccessor<T> extends DoValidatorAccessor {

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
            console.log(value);
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
