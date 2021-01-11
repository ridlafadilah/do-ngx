import { EventEmitter } from '@angular/core';
import { ElementRef } from '@angular/core';
export declare class SearchInputComponent {
    input: ElementRef;
    search: EventEmitter<string>;
    isInputShown: boolean;
    showInput(): void;
    hideInput(): void;
    onInput(val: string): void;
}
