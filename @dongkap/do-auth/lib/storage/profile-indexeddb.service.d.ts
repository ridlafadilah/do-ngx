import { Injector } from '@angular/core';
import { IndexedDBFactoryService } from '@dongkap/do-core';
import { IndexedDBService } from '@dongkap/do-storage';
import { ProfileIDB } from '../models/profile.schema';
export declare class ProfileIndexedDBService extends IndexedDBService<ProfileIDB> implements IndexedDBFactoryService {
    constructor(injector: Injector);
    loginStorage(response: any): void;
    logout(): void;
}
