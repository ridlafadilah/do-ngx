import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreKey } from 'idb';
import { IndexedDBEncFactoryService } from '@dongkap/do-core';
import { IndexedDBService } from '@dongkap/do-storage';
import { AuthIDB } from '../models/auth.schema';
export declare class AuthIndexedDBService extends IndexedDBService<AuthIDB> implements IndexedDBEncFactoryService {
    constructor(injector: Injector);
    getEnc(key: any, storeName?: any): Promise<AuthIDB['#do-auth']['value']>;
    putEnc(key: any, val: any, storeName?: any): Promise<StoreKey<AuthIDB, any>>;
    removeEnc(key: any, storeName?: any): Promise<void>;
    getOfEnc(key: any, storeName?: any): Observable<any>;
    putOfEnc(key: any, val: any, storeName?: any): Observable<any>;
    removeOfEnc(key: any, storeName?: any): Observable<void>;
    loginStorage(response: any): void;
    logout(): void;
    isLogin(): Promise<boolean>;
}
