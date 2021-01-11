import { Injector, EventEmitter } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { NgSelectComponent } from '@ng-select/ng-select';
import { HttpFactoryService, HttpBaseModel } from '@dongkap/do-core';
import { SelectParamModel, SelectResponseModel } from './select.model';
import { DoValueAccessor } from '../base/do-value-accessor.component';
export declare class DoSelectComponent extends DoValueAccessor<any> implements OnDestroy {
    locale: string;
    injector: Injector;
    placeholder: string;
    colLabel: number;
    colInput: number;
    items: SelectResponseModel[];
    multiple: boolean;
    loading: boolean;
    addTag: boolean;
    closeOnSelect: boolean;
    clearable: boolean;
    searchable: boolean;
    hideSelected: boolean;
    minTermLength: number;
    maxTermLength: number;
    api: HttpBaseModel;
    limit: number;
    offsetNextLoad: number;
    queryParam: SelectParamModel[];
    onSelect: EventEmitter<any>;
    onClear: EventEmitter<boolean>;
    select: NgSelectComponent;
    contentTemplate: any;
    notFoundText: string;
    typeToSearchText: string;
    virtualScroll: boolean;
    paramSearch: any;
    typeahead$: Subject<string>;
    protected http: HttpFactoryService;
    private destroy$;
    private total;
    private totalRecord;
    private cdref;
    _value: any;
    get value(): any;
    set value(value: any);
    constructor(ngControl: NgControl, locale: string, injector: Injector);
    onInit(): void;
    ngOnDestroy(): void;
    onOpen(): void;
    onClose(): void;
    onScroll({ end }: {
        end: any;
    }, search: string): void;
    onScrollToEnd(search: string): void;
    doClear(): void;
    private reset;
    private fetchMore;
    private fetchSearch;
    private fetchNone;
    private getRequest;
    onKeyDown(event: KeyboardEvent, term: string): boolean;
}
