import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionType } from '@swimlane/ngx-datatable';
import { HttpBaseModel } from '@dongkap/do-core';
import { BaseFilterComponent, DatatableColumn } from '@dongkap/do-common';
import { FunctionControlService } from '../services/function-control.service';
export declare class FunctionListPageComponent extends BaseFilterComponent<any> implements OnInit {
    injector: Injector;
    private router;
    private functionControlService;
    apiPath: HttpBaseModel;
    selectionType: SelectionType;
    columns: DatatableColumn[];
    expanded: boolean;
    constructor(injector: Injector, router: Router, functionControlService: FunctionControlService);
    ngOnInit(): void;
    onViewDetail(data: any): void;
}
