import { Injector } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { BaseFormComponent } from '@dongkap/do-common';
import { FunctionControlService } from '../../services/function-control.service';
export declare class FunctionExtraPageComponent extends BaseFormComponent<any> implements OnInit {
    injector: Injector;
    private dialogService;
    private functionControlService;
    nodeItems: any[];
    options: any;
    title: string;
    private datas;
    constructor(injector: Injector, dialogService: NbDialogService, functionControlService: FunctionControlService);
    ngOnInit(): void;
    loadDataMenu(): Observable<any>;
    onSelect(datas: any): void;
    onSubmit(dialog: TemplateRef<any>): void;
    onSubmitDialog(ref: NbDialogRef<any>): void;
    private postFunction;
}
