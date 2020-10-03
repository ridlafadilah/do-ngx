import { Injectable } from '@angular/core';
import { IDBPDatabase, IDBPTransaction } from 'idb';
import * as idb from 'idb';

@Injectable()
export class IndexedDBDistributionService {

  constructor() {
    this.createIDBStore();
  }

  public async createIDBStore(): Promise<any> {
    await idb.openDB<any>('do-core', 1, {
      async upgrade(db: IDBPDatabase<any>, oldVersion: number, newVersion: number, transaction: IDBPTransaction<any>) {
        db.createObjectStore('#do-auth');
        db.createObjectStore('#do-profile');
        db.createObjectStore('#do-settings');
      },
    });
    /* await idb.openDB<any>('do-finance', 1, {
      async upgrade(db: IDBPDatabase<any>, oldVersion: number, newVersion: number, transaction: IDBPTransaction<any>) {
        db.createObjectStore('#do-finance');
      },
    }); */
  }

}
