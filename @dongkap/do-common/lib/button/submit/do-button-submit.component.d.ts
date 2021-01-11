import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class DoButtonSubmitComponent {
    formGroupButton: FormGroup;
    name: string;
    disabledButton: boolean;
    colLabel: number;
    colButton: number;
    type: 'button' | 'submit' | 'reset';
    status: 'primary' | 'danger' | 'warning' | 'info';
    skeleton: boolean;
    onSubmit: EventEmitter<any>;
    click(event: any): void;
}
