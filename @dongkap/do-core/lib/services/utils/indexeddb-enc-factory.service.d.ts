import { Observable } from 'rxjs';
import { IndexedDBFactoryService } from './indexeddb-factory.service';
import { StoreValue, StoreKey } from 'idb';
export interface IndexedDBEncFactoryService extends IndexedDBFactoryService {
    getEnc(key: any): Promise<StoreValue<any, any>>;
    putEnc(key: any, val: any): Promise<StoreKey<any, any>>;
    removeEnc(key: any): Promise<void>;
    getOfEnc(key: any): Observable<any>;
    putOfEnc(key: any, val: any): Observable<any>;
    removeOfEnc(key: any): Observable<void>;
}
