import { NgControl } from '@angular/forms';
import { DoValueAccessor } from '../base/do-value-accessor.component';
import { RadioModel } from './radio.model';
export declare class DoRadioComponent extends DoValueAccessor<any> {
    locale: string;
    placeholder: string;
    colLabel: number;
    colInput: number;
    data: RadioModel[];
    constructor(ngControl: NgControl, locale: string);
    onInit(): void;
}
