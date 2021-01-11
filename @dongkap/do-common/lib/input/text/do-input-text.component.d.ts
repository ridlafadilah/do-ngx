import { NgControl } from '@angular/forms';
import { DoValueAccessor } from '../../base/do-value-accessor.component';
export declare class DoInputTextComponent extends DoValueAccessor<string> {
    locale: string;
    placeholder: string;
    colLabel: number;
    colInput: number;
    minLength: number;
    maxLength: number;
    min: number;
    max: number;
    step: number;
    capslock: boolean;
    type: 'text' | 'password' | 'number';
    constructor(ngControl: NgControl, locale: string);
    onKeyUp(event: KeyboardEvent): void;
    onKeyDown(event: KeyboardEvent): boolean;
}
