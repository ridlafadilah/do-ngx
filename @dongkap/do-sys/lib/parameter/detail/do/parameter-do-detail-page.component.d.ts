import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpBaseModel, LocaleModel } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-common';
import { ParameterService } from '../../services/parameter.service';
import { ParameterModel, ParameterGroupModel } from '../../models/parameter.model';
export declare class ParameterDoDetailPageComponent extends BaseFormComponent<any> implements OnInit {
    injector: Injector;
    private router;
    private parameterService;
    private route;
    action: 'Add' | 'Edit';
    parameter: ParameterModel;
    parameterGroup: ParameterGroupModel;
    allLocales: LocaleModel[];
    locales: LocaleModel[];
    localeDefault: LocaleModel;
    isEdit: boolean;
    apiPathParameterI18n: HttpBaseModel;
    apiPathLocale: HttpBaseModel;
    constructor(injector: Injector, router: Router, parameterService: ParameterService, route: ActivatedRoute);
    splitLocale(values: LocaleModel[]): void;
    ngOnInit(): void;
    onReset(): void;
    onSubmit(): void;
}
