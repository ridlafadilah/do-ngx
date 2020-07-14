import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[ngxValidateNotEqual][formControlName],[ngxValidateNotEqual][formControl],[ngxValidateNotEqual][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => NotEqualValidator), multi: true },
    ],
})
export class NotEqualValidator implements Validator {

    constructor(@Attribute('ngxValidateNotEqual') public validateNotEqual: string) {}

    validate(c: AbstractControl): { [key: string]: any } {
        const v = c.value;
        const e = c.root.get(this.validateNotEqual);

        if (e && v === e.value && v) {
            return { equal: true };
        }
        return null;
    }
}
