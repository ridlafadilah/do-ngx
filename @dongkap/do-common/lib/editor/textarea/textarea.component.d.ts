import { OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DoValueAccessor } from '../../base/do-value-accessor.component';
export declare class DoTextareaComponent extends DoValueAccessor<string> implements OnDestroy {
    locale: string;
    placeholder: string;
    colLabel: number;
    colInput: number;
    minLength: number;
    maxLength: number;
    height: number;
    constructor(ngControl: NgControl, locale: string);
    onInit(): void;
    ngOnDestroy(): void;
}
