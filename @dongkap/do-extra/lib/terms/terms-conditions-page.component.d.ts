import { Injector } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BaseComponent } from '@dongkap/do-common';
export declare class TermsConditionsPageComponent extends BaseComponent<any> implements OnInit, OnDestroy {
    injector: Injector;
    content: string;
    protected destroy$: Subject<any>;
    constructor(injector: Injector);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
