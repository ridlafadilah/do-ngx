import { OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { APIModel } from '@dongkap/do-core';
import { HttpFactoryService } from '@dongkap/do-core';
import { SecurityResourceModel } from '@dongkap/do-core';
import { DoToastrService } from '@dongkap/do-common';
export declare class RequestForgotPageComponent implements OnDestroy {
    private router;
    private toastr;
    private translate;
    private httpBaseService;
    private oauthResource;
    private apiPath;
    responseError: any;
    buttonForgotPassword: boolean;
    private progressBar;
    patternEmail: string;
    form: FormGroup;
    protected destroy$: Subject<any>;
    constructor(router: Router, toastr: DoToastrService, translate: TranslateService, httpBaseService: HttpFactoryService, oauthResource: SecurityResourceModel, apiPath: APIModel);
    ngOnDestroy(): void;
    forgotPassword(): void;
    get hasErrorEmail(): boolean;
    get hasSuccessEmail(): boolean;
}
