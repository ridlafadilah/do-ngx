import { EventEmitter } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { DoDatatableCollapseComponent } from './collapse/do-datatable-collapse.component';
import { FormGroup } from '@angular/forms';
export declare class DoDatatableHeaderComponent implements OnDestroy {
    header: boolean;
    footer: boolean;
    add: boolean;
    edit: boolean;
    delete: boolean;
    filter: boolean;
    formGroupFilter: FormGroup;
    onSearch: EventEmitter<string>;
    onFilter: EventEmitter<any>;
    onAdd: EventEmitter<boolean>;
    onDelete: EventEmitter<boolean>;
    collapse: DoDatatableCollapseComponent;
    _search: string;
    showFilter: boolean;
    disabledButtonFilter: boolean;
    ngOnDestroy(): void;
    doSearch(search: string): void;
    doFilterFunnel(): void;
    doFilter(): void;
    doAdd(): void;
    doDelete(): void;
    onKeyDown(event: KeyboardEvent): void;
    onFocusSearch(): void;
}
