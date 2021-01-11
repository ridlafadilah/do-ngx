import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { TableColumn } from '@swimlane/ngx-datatable';
import { NbDialogService, NbDialogRef } from '@nebular/theme';
import { HttpBaseModel } from '@dongkap/do-core';
import { BaseFilterComponent } from '@dongkap/do-common';
import { ParameterService } from '../../services/parameter.service';
export declare class ParameterListGroupPageComponent extends BaseFilterComponent<any> implements OnInit {
    injector: Injector;
    private router;
    private parameterService;
    private dialogService;
    apiPath: HttpBaseModel;
    apiPathLocale: HttpBaseModel;
    apiPathDelete: HttpBaseModel;
    columns: TableColumn[];
    reload: boolean;
    private parameterGroupCodes;
    constructor(injector: Injector, router: Router, parameterService: ParameterService, dialogService: NbDialogService);
    ngOnInit(): void;
    onAddGroup(): void;
    onViewDetail(data: any): void;
    onDeleteGroup(data: any, dialog: TemplateRef<any>): void;
    onDelete(ref: NbDialogRef<any>): void;
}
