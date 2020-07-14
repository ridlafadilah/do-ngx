import { Injector } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { ApiBaseResponse } from '@dongkap/ngx-core';
import { BaseComponent } from './base.component';
import { NgxToastrService } from '../../toastr/services/ngx-toastr.service';

export abstract class BaseFormComponent<T> extends BaseComponent<T> {

    protected toastr: NgxToastrService;
    protected submitSubject$ = new Subject<ApiBaseResponse>();
    protected destroy$: Subject<void> = new Subject<void>();
    public formGroup: FormGroup;
    public formBuilder: FormBuilder;
    public disabled: boolean = false;
    public loadingForm: boolean = false;

    constructor(
        public injector: Injector,
        controlsConfig?: {
            [key: string]: any;
        }) {
        super(injector);
        this.formBuilder = injector.get(FormBuilder);
        if (controlsConfig)
            this.formGroup = this.formBuilder.group(controlsConfig);
        this.toastr = injector.get(NgxToastrService);
    }

    onSubmit(body?: any, serviceName?: string, apiName?: string, disableToastr?: boolean): any {
        this.disabled = true;
        this.exec(serviceName, apiName, body ? body : this.formGroup.value)
            .subscribe(
                (success: ApiBaseResponse) => {
                    this.submitSubject$.next(success);
                    this.disabled = true;
                    if (!disableToastr)
                        this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
                },
                (error: ApiBaseResponse) => {
                    this.submitSubject$.next(error);
                    this.disabled = false;
                    if (!disableToastr)
                        this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
                },
            );
        return this.submitSubject$.asObservable();
    }

    onReset(): void {}

}
