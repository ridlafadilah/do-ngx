import { ElementRef, EventEmitter } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Environment } from '@dongkap/do-core';
export declare class MCECoreComponent implements OnDestroy, AfterViewInit, ControlValueAccessor {
    private host;
    envi: Environment;
    plugins: string[];
    height: number;
    id: string;
    readonly: boolean;
    _value: any;
    change: EventEmitter<any>;
    editorchange: EventEmitter<any>;
    focus: EventEmitter<any>;
    blur: EventEmitter<any>;
    onChange: (_: any) => void;
    onTouched: (_?: any) => void;
    editor: any;
    constructor(host: ElementRef, envi: Environment);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    get value(): any;
    set value(value: any);
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
