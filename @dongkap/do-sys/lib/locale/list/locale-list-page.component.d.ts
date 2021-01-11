import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionType } from '@swimlane/ngx-datatable';
import { HttpBaseModel } from '@dongkap/do-core';
import { BaseFilterComponent, DatatableColumn } from '@dongkap/do-common';
import { LocaleService } from '../services/locale.service';
export declare class LocaleListPageComponent extends BaseFilterComponent<any> implements OnInit {
    injector: Injector;
    private router;
    private localeService;
    apiPath: HttpBaseModel;
    selectionType: SelectionType;
    columns: DatatableColumn[];
    expanded: boolean;
    constructor(injector: Injector, router: Router, localeService: LocaleService);
    ngOnInit(): void;
    onAddGroup(): void;
    onViewDetail(data: any): void;
    onReset(): void;
    back(): boolean;
}
