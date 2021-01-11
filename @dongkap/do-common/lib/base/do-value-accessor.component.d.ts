import { NgControl } from '@angular/forms';
import { DoValidatorAccessor } from './do-validator-accessor.component';
export declare abstract class DoValueAccessor<T> extends DoValidatorAccessor {
    ngControl: NgControl;
    locale: string;
    format: string;
    skeleton: boolean;
    protected _value: any;
    defaultValue: any;
    constructor(ngControl: NgControl, locale: string);
    get value(): T;
    set value(value: T);
    writeValue(value: T): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
}
