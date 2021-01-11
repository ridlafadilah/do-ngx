import { EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DoValueAccessor } from '../../base/do-value-accessor.component';
export declare class DoInputBaseIconComponent extends DoValueAccessor<string> {
    locale: string;
    placeholder: string;
    minLength: number;
    maxLength: number;
    iconcursor: boolean;
    icon: string;
    type: 'text' | 'password' | 'number';
    clickIcon: EventEmitter<string>;
    focus: EventEmitter<any>;
    constructor(ngControl: NgControl, locale: string);
    onClickIcon(): void;
    onFocus(value: any): void;
}
