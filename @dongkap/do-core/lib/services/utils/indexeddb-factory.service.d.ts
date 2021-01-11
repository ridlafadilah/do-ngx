import { Observable } from 'rxjs';
import { StoreValue, StoreKey, IDBPDatabase } from 'idb';
export interface IndexedDBFactoryService {
    openSessionIDB(dbname: string, version: number): Promise<IDBPDatabase<any>>;
    getAllOf(): Observable<any>;
    getOf(key: any): Observable<any>;
    putOf(key: any, val: any): Observable<any>;
    removeOf(key: any): Observable<void>;
    getAll(): Promise<StoreValue<any, any>[]>;
    get(key: any): Promise<StoreValue<any, any>>;
    put(key: any, val: any): Promise<StoreKey<any, any>>;
    remove(key: any): Promise<void>;
    clearAll(): Promise<void>;
    keys(): Promise<StoreKey<any, any>[]>;
    getAllVal(storeName: any): Promise<StoreValue<any, any>[]>;
    getKeyVal(storeName: any, key: any): Promise<StoreValue<any, any>>;
    putKeyVal(storeName: any, key: any, val: any): Promise<StoreKey<any, any>>;
    removeKeyVal(storeName: any, key: any): Promise<void>;
    clearAllKeyVal(storeName: any): Promise<void>;
    keysKeyVal(storeName: any): Promise<StoreKey<any, any>[]>;
    addArticle(storeName: any, value: any): Promise<StoreKey<any, any>>;
    addAllArticle(storeName: any, values: any[]): Promise<void>;
}
