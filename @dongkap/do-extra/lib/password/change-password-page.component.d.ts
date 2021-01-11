import { Injector } from '@angular/core';
import { BaseFormComponent } from '@dongkap/do-common';
export declare class ChangePasswordPageComponent extends BaseFormComponent<any> {
    injector: Injector;
    passwordPattern: string;
    private enc;
    private oauthResource;
    constructor(injector: Injector);
    onSubmit(): void;
}
