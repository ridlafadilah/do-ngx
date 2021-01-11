import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseFormComponent } from '@dongkap/do-common';
export declare class ParameterAddGroupPageComponent extends BaseFormComponent<any> implements OnInit {
    injector: Injector;
    private router;
    constructor(injector: Injector, router: Router);
    ngOnInit(): void;
    onReset(): void;
    onSubmit(): void;
}
