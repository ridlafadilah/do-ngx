import { Inject, ɵɵdefineInjectable, ɵɵinject, Injectable, InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncryptionService, OAUTH_INFO } from '@dongkap/do-core';
import { __awaiter } from 'tslib';
import { Subject } from 'rxjs';
import { openDB } from 'idb';

class StorageMaskService {
    constructor(enc, oauthResource) {
        this.enc = enc;
        this.oauthResource = oauthResource;
    }
    getSessionStorageEnc(key) {
        const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        if (sessionStorage.getItem(keyEncrypted))
            return this.enc.decryptAES(this.oauthResource['aes_key'], sessionStorage.getItem(keyEncrypted));
        else
            return null;
    }
    setSessionStorageEnc(key, value) {
        const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        const valueEncrypted = this.enc.encryptAES(this.oauthResource['aes_key'], value);
        sessionStorage.setItem(keyEncrypted, valueEncrypted);
    }
    removeSessionStorageEnc(key) {
        const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        sessionStorage.removeItem(keyEncrypted);
    }
    getLocalStorageEnc(key) {
        const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        if (localStorage.getItem(keyEncrypted))
            return this.enc.decryptAES(this.oauthResource['aes_key'], localStorage.getItem(keyEncrypted));
        else
            return null;
    }
    setLocalStorageEnc(key, value) {
        const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        const valueEncrypted = this.enc.encryptAES(this.oauthResource['aes_key'], value);
        localStorage.setItem(keyEncrypted, valueEncrypted);
    }
    removeLocalStorageEnc(key) {
        const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        localStorage.removeItem(keyEncrypted);
    }
    getSessionStorage(key) {
        return (key) ? sessionStorage.getItem(key) : null;
    }
    setSessionStorage(key, value) {
        sessionStorage.setItem(key, value);
    }
    removeSessionStorage(key) {
        sessionStorage.removeItem(key);
    }
    getLocalStorage(key) {
        return (key) ? localStorage.getItem(key) : null;
    }
    setLocalStorage(key, value) {
        localStorage.setItem(key, value);
    }
    removeLocalStorage(key) {
        localStorage.removeItem(key);
    }
    clearSessionStorage() {
        sessionStorage.clear();
    }
    clearLocalStorage() {
        localStorage.clear();
    }
    clearAll() {
        sessionStorage.clear();
        localStorage.clear();
    }
}
StorageMaskService.ctorParameters = () => [
    { type: EncryptionService },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] }
];
StorageMaskService.ɵprov = ɵɵdefineInjectable({ factory: function StorageMaskService_Factory() { return new StorageMaskService(ɵɵinject(EncryptionService), ɵɵinject(OAUTH_INFO)); }, token: StorageMaskService, providedIn: "root" });
StorageMaskService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
StorageMaskService.ctorParameters = () => [
    { type: EncryptionService },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] }
];

const STORAGE_SERVICE = new InjectionToken('Storage Factory Service');

class DoStorageModule {
    static forRoot() {
        return {
            ngModule: DoStorageModule,
            providers: [
                { provide: STORAGE_SERVICE, useClass: StorageMaskService },
            ],
        };
    }
}
DoStorageModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                exports: [],
                declarations: [],
            },] }
];

class IndexedDBService {
    constructor(injector, dbname, version, storeName) {
        this.storeName = storeName;
        this.openSessionIDB(dbname, version);
        this.enc = injector.get(EncryptionService);
        this.oauthResource = injector.get(OAUTH_INFO);
    }
    openSessionIDB(dbname, version) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.$dbPromise = openDB(dbname, version);
        });
    }
    getAllOf() {
        const result$ = new Subject();
        this.getAllVal(this.storeName).then((value) => {
            result$.next(value);
        });
        return result$.asObservable();
    }
    getOf(key) {
        const result$ = new Subject();
        this.getKeyVal(key, this.storeName).then((value) => {
            result$.next(value);
        });
        return result$.asObservable();
    }
    putOf(key, val) {
        const result$ = new Subject();
        this.putKeyVal(key, val, this.storeName).then((value) => {
            result$.next(value);
        });
        return result$.asObservable();
    }
    removeOf(key) {
        const result$ = new Subject();
        this.removeKeyVal(key, this.storeName).then((value) => {
            result$.next(value);
        });
        return result$.asObservable();
    }
    getAll() {
        return this.getAllVal(this.storeName);
    }
    get(key) {
        return this.getKeyVal(this.storeName, key);
    }
    put(key, val) {
        return this.putKeyVal(this.storeName, key, val);
    }
    remove(key) {
        return this.removeKeyVal(this.storeName, key);
    }
    clearAll() {
        return this.clearAllKeyVal(this.storeName);
    }
    keys() {
        return this.keysKeyVal(this.storeName);
    }
    getAllVal(storeName) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).getAll(storeName);
        });
    }
    getKeyVal(storeName, key) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).get(storeName, key);
        });
    }
    putKeyVal(storeName, key, val) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).put(storeName, val, key);
        });
    }
    removeKeyVal(storeName, key) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).delete(storeName, key);
        });
    }
    clearAllKeyVal(storeName) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).clear(storeName);
        });
    }
    keysKeyVal(storeName) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).getAllKeys(storeName);
        });
    }
    addArticle(storeName, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).add(storeName, value);
        });
    }
    addAllArticle(storeName, values) {
        return __awaiter(this, void 0, void 0, function* () {
            const tx = (yield this.$dbPromise).transaction(storeName, 'readwrite');
            values.forEach((value) => {
                tx.store.add(value);
            });
            return yield tx.done;
        });
    }
}

/*
 * Public API Surface of do-storage
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DoStorageModule, IndexedDBService, STORAGE_SERVICE, StorageMaskService as ɵa };
//# sourceMappingURL=dongkap-do-storage.js.map
