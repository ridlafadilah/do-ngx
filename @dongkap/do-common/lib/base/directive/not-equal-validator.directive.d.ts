import { AbstractControl } from '@angular/forms';
import { Validator } from '@angular/forms';
export declare class NotEqualValidator implements Validator {
    validateNotEqual: string;
    constructor(validateNotEqual: string);
    validate(c: AbstractControl): {
        [key: string]: any;
    };
}
