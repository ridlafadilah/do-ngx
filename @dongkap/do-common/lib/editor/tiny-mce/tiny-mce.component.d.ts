import { ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DoValueAccessor } from '../../base/do-value-accessor.component';
export declare class TinyMCEComponent extends DoValueAccessor<string> {
    locale: string;
    private element;
    placeholder: string;
    colLabel: number;
    colInput: number;
    plugins: string[];
    height: number;
    id: string;
    constructor(ngControl: NgControl, locale: string, element: ElementRef);
    editorChange(element: Element): void;
}
