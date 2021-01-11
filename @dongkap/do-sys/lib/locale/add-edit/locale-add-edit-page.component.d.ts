import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { HttpBaseModel } from '@dongkap/do-core';
import { BaseFormComponent, CheckboxModel } from '@dongkap/do-common';
import { LocaleService } from '../services/locale.service';
export declare class LocaleAddEditPageComponent extends BaseFormComponent<any> implements OnInit {
    injector: Injector;
    private router;
    private route;
    private localeService;
    private dialogService;
    action: 'Add' | 'Edit';
    apiSelectLanguage: HttpBaseModel;
    dataDefault: CheckboxModel[];
    constructor(injector: Injector, router: Router, route: ActivatedRoute, localeService: LocaleService, dialogService: NbDialogService);
    ngOnInit(): void;
    onSearchFlag(): void;
    onReset(): void;
    onSubmit(): void;
}
