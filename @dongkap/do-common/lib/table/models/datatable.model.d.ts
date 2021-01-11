import { TableColumn } from '@swimlane/ngx-datatable';
export declare class Page {
    count: number;
    pageSize: number;
    limit: number;
    offset: number;
}
export interface Sort {
    [name: string]: string[];
}
export interface Keyword {
    [name: string]: string;
}
export interface DatatableColumn extends TableColumn {
    prefix?: string;
    type?: 'text' | 'html' | 'icon' | 'button' | 'prefix' | 'custom';
    button?: string;
    buttonStatus?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
}
export declare class DatatableParamModel {
    key: string;
    value: any;
}
export declare class DatatableFilter {
    controlName: string;
    type?: 'input' | 'datepicker' | 'select' | 'checkbox' | 'radio';
}
