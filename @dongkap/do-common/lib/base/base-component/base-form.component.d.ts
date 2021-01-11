import { Injector } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { ApiBaseResponse } from '@dongkap/do-core';
import { BaseComponent } from './base.component';
import { DoToastrService } from '../../toastr/services/do-toastr.service';
export declare abstract class BaseFormComponent<T> extends BaseComponent<T> implements OnDestroy {
    injector: Injector;
    protected toastr: DoToastrService;
    protected submitSubject$: Subject<ApiBaseResponse>;
    protected destroy$: Subject<any>;
    formGroup: FormGroup;
    formBuilder: FormBuilder;
    disabled: boolean;
    loadingForm: boolean;
    constructor(injector: Injector, controlsConfig?: {
        [key: string]: any;
    });
    ngOnDestroy(): void;
    onSubmit(body?: any, serviceName?: string, apiName?: string, disableToastr?: boolean): any;
    onDestroy(): void;
    onReset(): void;
}
