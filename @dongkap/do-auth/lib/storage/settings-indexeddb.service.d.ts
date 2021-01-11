import { Injector } from '@angular/core';
import { IndexedDBFactoryService } from '@dongkap/do-core';
import { IndexedDBService } from '@dongkap/do-storage';
import { SettingsIDB } from '../models/settings.schema';
export declare class SettingsIndexedDBService extends IndexedDBService<SettingsIDB> implements IndexedDBFactoryService {
    private translate;
    constructor(injector: Injector);
    loginStorage(response: any): void;
}
