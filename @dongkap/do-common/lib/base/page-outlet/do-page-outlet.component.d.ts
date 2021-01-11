import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
export declare class DoPageOutletComponent {
    private router;
    header: string;
    url: string;
    width: number;
    dataSelect: any[];
    selected: any;
    param: any;
    selectChange: EventEmitter<any>;
    constructor(router: Router);
    back(): boolean;
    onChangeSelect(event: any): void;
}
