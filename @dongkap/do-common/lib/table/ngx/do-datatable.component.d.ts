import { Injector, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ColumnMode, SelectionType, SortType, DatatableComponent } from '@swimlane/ngx-datatable';
import { HttpFactoryService, HttpBaseModel } from '@dongkap/do-core';
import { LayoutService } from '@dongkap/do-core';
import { Page, Sort, Keyword, DatatableFilter, DatatableColumn } from '../models/datatable.model';
export declare class DoDatatableComponent implements OnInit, OnDestroy {
    locale: string;
    private layout;
    injector: Injector;
    rows: any[];
    columns: DatatableColumn[];
    filters: DatatableFilter[];
    selected: any[];
    limit: number | undefined;
    count: number;
    offset: number;
    externalPaging: boolean;
    externalSorting: boolean;
    loadingIndicator: boolean;
    scrollbarH: boolean;
    scrollbarV: boolean;
    reorderable: boolean;
    sortType: SortType;
    messages: any;
    selectionType: SelectionType;
    columnMode: ColumnMode;
    headerHeight: any;
    footerHeight: any;
    rowHeight: number | 'auto' | ((row?: any) => number);
    header: boolean;
    column: boolean;
    footer: boolean;
    add: boolean;
    edit: boolean;
    delete: boolean;
    filter: boolean;
    api: HttpBaseModel;
    startWithOpenData: boolean;
    filterEvent: boolean;
    formGroupFilter: FormGroup;
    sort: Sort;
    onAdd: EventEmitter<boolean>;
    onEdit: EventEmitter<any>;
    onDelete: EventEmitter<any[]>;
    onSearch: EventEmitter<any>;
    onFilter: EventEmitter<any>;
    onButtonCell: EventEmitter<any>;
    datatable: DatatableComponent;
    set filterFn(keyword: Keyword);
    set filterDoFetchFn(keyword: Keyword);
    set reloadFn(reload: boolean);
    keywordParam: Keyword;
    _keyword: Keyword;
    isDelete: boolean;
    protected http: HttpFactoryService;
    private destroy$;
    private cdref;
    private pageOffset;
    protected _search: string;
    constructor(locale: string, layout: LayoutService, injector: Injector);
    ngOnInit(): void;
    ngOnDestroy(): void;
    doSearch(search: string): void;
    doFilter(search: any): void;
    doAdd(add: boolean): void;
    doEdit(row: any): void;
    doDelete(): void;
    onKeyDown(event: KeyboardEvent): void;
    fetch(): void;
    setPage(page: Page): void;
    onSort(order: any): void;
    onSelect({ selected }: {
        selected: any;
    }): void;
    onClickButton(event: any): void;
    private getRequest;
}
