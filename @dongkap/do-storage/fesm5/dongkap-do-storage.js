import { Inject, ɵɵdefineInjectable, ɵɵinject, Injectable, InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncryptionService, OAUTH_INFO } from '@dongkap/do-core';
import { __awaiter, __generator } from 'tslib';
import { Subject } from 'rxjs';
import { openDB } from 'idb';

var StorageMaskService = /** @class */ (function () {
    function StorageMaskService(enc, oauthResource) {
        this.enc = enc;
        this.oauthResource = oauthResource;
    }
    StorageMaskService.prototype.getSessionStorageEnc = function (key) {
        var keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        if (sessionStorage.getItem(keyEncrypted))
            return this.enc.decryptAES(this.oauthResource['aes_key'], sessionStorage.getItem(keyEncrypted));
        else
            return null;
    };
    StorageMaskService.prototype.setSessionStorageEnc = function (key, value) {
        var keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        var valueEncrypted = this.enc.encryptAES(this.oauthResource['aes_key'], value);
        sessionStorage.setItem(keyEncrypted, valueEncrypted);
    };
    StorageMaskService.prototype.removeSessionStorageEnc = function (key) {
        var keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        sessionStorage.removeItem(keyEncrypted);
    };
    StorageMaskService.prototype.getLocalStorageEnc = function (key) {
        var keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        if (localStorage.getItem(keyEncrypted))
            return this.enc.decryptAES(this.oauthResource['aes_key'], localStorage.getItem(keyEncrypted));
        else
            return null;
    };
    StorageMaskService.prototype.setLocalStorageEnc = function (key, value) {
        var keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        var valueEncrypted = this.enc.encryptAES(this.oauthResource['aes_key'], value);
        localStorage.setItem(keyEncrypted, valueEncrypted);
    };
    StorageMaskService.prototype.removeLocalStorageEnc = function (key) {
        var keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        localStorage.removeItem(keyEncrypted);
    };
    StorageMaskService.prototype.getSessionStorage = function (key) {
        return (key) ? sessionStorage.getItem(key) : null;
    };
    StorageMaskService.prototype.setSessionStorage = function (key, value) {
        sessionStorage.setItem(key, value);
    };
    StorageMaskService.prototype.removeSessionStorage = function (key) {
        sessionStorage.removeItem(key);
    };
    StorageMaskService.prototype.getLocalStorage = function (key) {
        return (key) ? localStorage.getItem(key) : null;
    };
    StorageMaskService.prototype.setLocalStorage = function (key, value) {
        localStorage.setItem(key, value);
    };
    StorageMaskService.prototype.removeLocalStorage = function (key) {
        localStorage.removeItem(key);
    };
    StorageMaskService.prototype.clearSessionStorage = function () {
        sessionStorage.clear();
    };
    StorageMaskService.prototype.clearLocalStorage = function () {
        localStorage.clear();
    };
    StorageMaskService.prototype.clearAll = function () {
        sessionStorage.clear();
        localStorage.clear();
    };
    StorageMaskService.ctorParameters = function () { return [
        { type: EncryptionService },
        { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] }
    ]; };
    StorageMaskService.ɵprov = ɵɵdefineInjectable({ factory: function StorageMaskService_Factory() { return new StorageMaskService(ɵɵinject(EncryptionService), ɵɵinject(OAUTH_INFO)); }, token: StorageMaskService, providedIn: "root" });
    StorageMaskService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    StorageMaskService.ctorParameters = function () { return [
        { type: EncryptionService },
        { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] }
    ]; };
    return StorageMaskService;
}());

var STORAGE_SERVICE = new InjectionToken('Storage Factory Service');

var DoStorageModule = /** @class */ (function () {
    function DoStorageModule() {
    }
    DoStorageModule.forRoot = function () {
        return {
            ngModule: DoStorageModule,
            providers: [
                { provide: STORAGE_SERVICE, useClass: StorageMaskService },
            ],
        };
    };
    DoStorageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    exports: [],
                    declarations: [],
                },] }
    ];
    return DoStorageModule;
}());

var IndexedDBService = /** @class */ (function () {
    function IndexedDBService(injector, dbname, version, storeName) {
        this.storeName = storeName;
        this.openSessionIDB(dbname, version);
        this.enc = injector.get(EncryptionService);
        this.oauthResource = injector.get(OAUTH_INFO);
    }
    IndexedDBService.prototype.openSessionIDB = function (dbname, version) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.$dbPromise = openDB(dbname, version)];
            });
        });
    };
    IndexedDBService.prototype.getAllOf = function () {
        var result$ = new Subject();
        this.getAllVal(this.storeName).then(function (value) {
            result$.next(value);
        });
        return result$.asObservable();
    };
    IndexedDBService.prototype.getOf = function (key) {
        var result$ = new Subject();
        this.getKeyVal(key, this.storeName).then(function (value) {
            result$.next(value);
        });
        return result$.asObservable();
    };
    IndexedDBService.prototype.putOf = function (key, val) {
        var result$ = new Subject();
        this.putKeyVal(key, val, this.storeName).then(function (value) {
            result$.next(value);
        });
        return result$.asObservable();
    };
    IndexedDBService.prototype.removeOf = function (key) {
        var result$ = new Subject();
        this.removeKeyVal(key, this.storeName).then(function (value) {
            result$.next(value);
        });
        return result$.asObservable();
    };
    IndexedDBService.prototype.getAll = function () {
        return this.getAllVal(this.storeName);
    };
    IndexedDBService.prototype.get = function (key) {
        return this.getKeyVal(this.storeName, key);
    };
    IndexedDBService.prototype.put = function (key, val) {
        return this.putKeyVal(this.storeName, key, val);
    };
    IndexedDBService.prototype.remove = function (key) {
        return this.removeKeyVal(this.storeName, key);
    };
    IndexedDBService.prototype.clearAll = function () {
        return this.clearAllKeyVal(this.storeName);
    };
    IndexedDBService.prototype.keys = function () {
        return this.keysKeyVal(this.storeName);
    };
    IndexedDBService.prototype.getAllVal = function (storeName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, (_a.sent()).getAll(storeName)];
                }
            });
        });
    };
    IndexedDBService.prototype.getKeyVal = function (storeName, key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, (_a.sent()).get(storeName, key)];
                }
            });
        });
    };
    IndexedDBService.prototype.putKeyVal = function (storeName, key, val) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, (_a.sent()).put(storeName, val, key)];
                }
            });
        });
    };
    IndexedDBService.prototype.removeKeyVal = function (storeName, key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, (_a.sent()).delete(storeName, key)];
                }
            });
        });
    };
    IndexedDBService.prototype.clearAllKeyVal = function (storeName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, (_a.sent()).clear(storeName)];
                }
            });
        });
    };
    IndexedDBService.prototype.keysKeyVal = function (storeName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, (_a.sent()).getAllKeys(storeName)];
                }
            });
        });
    };
    IndexedDBService.prototype.addArticle = function (storeName, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, (_a.sent()).add(storeName, value)];
                }
            });
        });
    };
    IndexedDBService.prototype.addAllArticle = function (storeName, values) {
        return __awaiter(this, void 0, void 0, function () {
            var tx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$dbPromise];
                    case 1:
                        tx = (_a.sent()).transaction(storeName, 'readwrite');
                        values.forEach(function (value) {
                            tx.store.add(value);
                        });
                        return [4 /*yield*/, tx.done];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return IndexedDBService;
}());

/*
 * Public API Surface of do-storage
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DoStorageModule, IndexedDBService, STORAGE_SERVICE, StorageMaskService as ɵa };
//# sourceMappingURL=dongkap-do-storage.js.map
