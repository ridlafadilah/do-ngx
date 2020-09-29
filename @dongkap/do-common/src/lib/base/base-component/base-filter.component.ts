import { Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseFormComponent } from './base-form.component';
import { DatatableFilter, Keyword } from '../../table/models/datatable.model';

export abstract class BaseFilterComponent<T> extends BaseFormComponent<T> {

    public formGroupFilter: FormGroup;
    public filters: DatatableFilter[];
    public keyword: Keyword;
    public rows: any[] = [];

    constructor(
        public injector: Injector,
        filtersConfig?: {
            [key: string]: any;
        },
        controlsConfig?: {
            [key: string]: any;
        }) {
        super(injector, controlsConfig);
        if (filtersConfig)
            this.formGroupFilter = this.formBuilder.group(filtersConfig);
    }

    doFilterAdvanced(keyword: Keyword) {
      this.keyword = keyword;
    }

}
