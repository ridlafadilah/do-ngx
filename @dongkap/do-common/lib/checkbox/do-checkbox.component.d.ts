import { EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DoValueAccessor } from '../base/do-value-accessor.component';
import { CheckboxModel } from './checkbox.model';
export declare class DoCheckboxComponent extends DoValueAccessor<CheckboxModel[]> {
    locale: string;
    colLabel: number;
    colInput: number;
    data: CheckboxModel[];
    onChecked: EventEmitter<any>;
    constructor(ngControl: NgControl, locale: string);
    onCheckedChange(): void;
}
