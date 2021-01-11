import { NgControl } from '@angular/forms';
import { DoValueAccessor } from '../../base/do-value-accessor.component';
export declare class DoInputCurrencyComponent extends DoValueAccessor<string> {
    locale: string;
    placeholder: string;
    colLabel: number;
    colInput: number;
    minLength: number;
    maxLength: number;
    prefix: string;
    decimalSeparator: string;
    thousandsSeparator: string;
    suffix: string;
    padding: number;
    constructor(ngControl: NgControl, locale: string);
    writeValue(value: any): void;
    transform(value: any): string;
    toNumber(value: string): {
        val: string;
        frac: string;
    };
    private pad;
}
