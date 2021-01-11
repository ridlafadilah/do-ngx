import { OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { Validator } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
import { ControlValueAccessor } from '@angular/forms';
export declare abstract class DoValidatorAccessor implements ControlValueAccessor, Validator, OnInit {
    protected ngControl: NgControl;
    name: string;
    pattern: string;
    label: string;
    nolabel: boolean;
    disabled: boolean;
    required: boolean;
    paramError: any;
    warnMessage: string;
    onChange: (_: any) => void;
    onTouched: (_?: any) => void;
    protected onInit(): void;
    constructor(ngControl: NgControl);
    ngOnInit(): void;
    validate(c: AbstractControl): ValidationErrors;
    get hasErrors(): boolean;
    get hasSuccess(): boolean;
    get errorMessages(): string[];
    registerOnValidatorChange(fn: () => void): void;
    abstract writeValue(obj: any): void;
    abstract registerOnChange(fn: any): void;
    abstract registerOnTouched(fn: any): void;
    abstract setDisabledState?(isDisabled: boolean): void;
}
