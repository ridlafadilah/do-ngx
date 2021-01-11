import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { BaseComponent } from '@dongkap/do-common';
import { MainMenuPageComponent } from '../main/main-menu-page.component';
import { ExtraMenuPageComponent } from '../extra/extra-menu-page.component';
export declare class MenuListPageComponent extends BaseComponent<any> implements OnInit, OnDestroy {
    injector: Injector;
    loading: boolean;
    tab: string;
    protected destroy$: Subject<any>;
    mainMenu: MainMenuPageComponent;
    extraMenu: ExtraMenuPageComponent;
    constructor(injector: Injector);
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggleLoadingAnimation(event: any): void;
}
