import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { HttpBaseModel } from '@dongkap/do-core';
import { BaseFilterComponent, DatatableColumn } from '@dongkap/do-common';
import { ManagementUserService } from '../../services/mgmt-user.service';
export declare class MgmtEndUserListPageComponent extends BaseFilterComponent<any> implements OnInit {
    injector: Injector;
    private router;
    private userService;
    apiPath: HttpBaseModel;
    selectionType: SelectionType;
    columns: DatatableColumn[];
    expanded: boolean;
    constructor(injector: Injector, router: Router, userService: ManagementUserService);
    ngOnInit(): void;
    onViewDetail(data: any): void;
}
