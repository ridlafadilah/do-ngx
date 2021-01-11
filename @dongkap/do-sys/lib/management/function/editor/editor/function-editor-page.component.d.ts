import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { BaseComponent } from '@dongkap/do-common';
import { FunctionMainPageComponent } from '../main/function-main-page.component';
import { FunctionExtraPageComponent } from '../extra/function-extra-page.component';
import { FunctionControlService } from '../../services/function-control.service';
export declare class FunctionEditorPageComponent extends BaseComponent<any> implements OnInit, OnDestroy {
    injector: Injector;
    private router;
    private functionControlService;
    loading: boolean;
    tab: string;
    title: string;
    protected destroy$: Subject<any>;
    mainMenu: FunctionMainPageComponent;
    extraMenu: FunctionExtraPageComponent;
    constructor(injector: Injector, router: Router, functionControlService: FunctionControlService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggleLoadingAnimation(event: any): void;
}
