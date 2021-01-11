import { EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DoValueAccessor } from '../../base/do-value-accessor.component';
export declare class DoInputIconComponent extends DoValueAccessor<string> {
    locale: string;
    placeholder: string;
    colLabel: number;
    colInput: number;
    minLength: number;
    maxLength: number;
    type: 'text' | 'password' | 'number';
    iconcursor: boolean;
    eva: boolean;
    icon: string;
    clickIcon: EventEmitter<string>;
    focus: EventEmitter<any>;
    constructor(ngControl: NgControl, locale: string);
    onClickIcon(): void;
    onFocus(value: any): void;
}
