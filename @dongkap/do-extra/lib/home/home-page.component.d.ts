import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { IndexedDBFactoryService } from '@dongkap/do-core';
export declare class HomePageComponent implements OnInit, OnDestroy {
    private profileIndexedDB;
    name: Promise<string>;
    constructor(profileIndexedDB: IndexedDBFactoryService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
