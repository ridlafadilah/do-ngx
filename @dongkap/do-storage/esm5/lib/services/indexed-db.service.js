import { __awaiter, __generator } from "tslib";
import { Subject } from 'rxjs';
import * as idb from 'idb';
import { EncryptionService, OAUTH_INFO, } from '@dongkap/do-core';
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
                return [2 /*return*/, this.$dbPromise = idb.openDB(dbname, version)];
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
export { IndexedDBService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhlZC1kYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tc3RvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9pbmRleGVkLWRiLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0MsT0FBTyxLQUFLLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFDM0IsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixVQUFVLEdBQ1gsTUFBTSxrQkFBa0IsQ0FBQztBQUcxQjtJQUtFLDBCQUFZLFFBQWtCLEVBQUUsTUFBYyxFQUFFLE9BQWUsRUFBVSxTQUFjO1FBQWQsY0FBUyxHQUFULFNBQVMsQ0FBSztRQUNyRixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVZLHlDQUFjLEdBQTNCLFVBQTRCLE1BQWMsRUFBRSxPQUFlOzs7Z0JBQ3pELHNCQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBSSxNQUFNLEVBQUUsT0FBTyxDQUFDLEVBQUM7OztLQUN6RDtJQUVNLG1DQUFRLEdBQWY7UUFDRSxJQUFNLE9BQU8sR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFVO1lBQzdDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE9BQU8sQ0FBQyxZQUFZLEVBQUUs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QUFPLFNBQWEsRUFBQzs7OztLQUN4QjtJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQTVGRCxJQTRGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJREJQRGF0YWJhc2UsIFN0b3JlVmFsdWUsIFN0b3JlS2V5IH0gZnJvbSAnaWRiJztcbmltcG9ydCAqIGFzIGlkYiBmcm9tICdpZGInO1xuaW1wb3J0IHtcbiAgRW5jcnlwdGlvblNlcnZpY2UsXG4gIE9BVVRIX0lORk8sXG59IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgU2VjdXJpdHlSZXNvdXJjZU1vZGVsIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBJbmRleGVkREJTZXJ2aWNlPFQ+IHtcbiAgcHJvdGVjdGVkICRkYlByb21pc2U6IFByb21pc2U8SURCUERhdGFiYXNlPFQ+PjtcbiAgcHJvdGVjdGVkIGVuYzogRW5jcnlwdGlvblNlcnZpY2U7XG4gIHByb3RlY3RlZCBvYXV0aFJlc291cmNlOiBTZWN1cml0eVJlc291cmNlTW9kZWw7XG5cbiAgY29uc3RydWN0b3IoaW5qZWN0b3I6IEluamVjdG9yLCBkYm5hbWU6IHN0cmluZywgdmVyc2lvbjogbnVtYmVyLCBwcml2YXRlIHN0b3JlTmFtZTogYW55KSB7XG4gICAgdGhpcy5vcGVuU2Vzc2lvbklEQihkYm5hbWUsIHZlcnNpb24pO1xuICAgIHRoaXMuZW5jID0gaW5qZWN0b3IuZ2V0KEVuY3J5cHRpb25TZXJ2aWNlKTtcbiAgICB0aGlzLm9hdXRoUmVzb3VyY2UgPSBpbmplY3Rvci5nZXQoT0FVVEhfSU5GTyk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgb3BlblNlc3Npb25JREIoZGJuYW1lOiBzdHJpbmcsIHZlcnNpb246IG51bWJlcik6IFByb21pc2U8SURCUERhdGFiYXNlPFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuJGRiUHJvbWlzZSA9IGlkYi5vcGVuREI8VD4oZGJuYW1lLCB2ZXJzaW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBbGxPZigpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHJlc3VsdCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICB0aGlzLmdldEFsbFZhbCh0aGlzLnN0b3JlTmFtZSkudGhlbigodmFsdWU6IGFueSkgPT4ge1xuICAgICAgcmVzdWx0JC5uZXh0KHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0JC5hc09ic2VydmFibGUoKTtcbiAgfVxuICBwdWJsaWMgZ2V0T2Yoa2V5KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCByZXN1bHQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgdGhpcy5nZXRLZXlWYWwoa2V5LCB0aGlzLnN0b3JlTmFtZSkudGhlbigodmFsdWU6IGFueSkgPT4ge1xuICAgICAgcmVzdWx0JC5uZXh0KHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0JC5hc09ic2VydmFibGUoKTtcbiAgfVxuICBwdWJsaWMgcHV0T2Yoa2V5LCB2YWwpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHJlc3VsdCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICB0aGlzLnB1dEtleVZhbChrZXksIHZhbCwgdGhpcy5zdG9yZU5hbWUpLnRoZW4oKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIHJlc3VsdCQubmV4dCh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdCQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbiAgcHVibGljIHJlbW92ZU9mKGtleSk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIGNvbnN0IHJlc3VsdCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICB0aGlzLnJlbW92ZUtleVZhbChrZXksIHRoaXMuc3RvcmVOYW1lKS50aGVuKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICByZXN1bHQkLm5leHQodmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgcHVibGljIGdldEFsbCgpOiBQcm9taXNlPFN0b3JlVmFsdWU8VCwgYW55PltdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWxsVmFsKHRoaXMuc3RvcmVOYW1lKTtcbiAgfVxuICBwdWJsaWMgZ2V0KGtleSk6IFByb21pc2U8U3RvcmVWYWx1ZTxULCBhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0S2V5VmFsKHRoaXMuc3RvcmVOYW1lLCBrZXkpO1xuICB9XG4gIHB1YmxpYyBwdXQoa2V5LCB2YWwpOiBQcm9taXNlPFN0b3JlS2V5PFQsIGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5wdXRLZXlWYWwodGhpcy5zdG9yZU5hbWUsIGtleSwgdmFsKTtcbiAgfVxuICBwdWJsaWMgcmVtb3ZlKGtleSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnJlbW92ZUtleVZhbCh0aGlzLnN0b3JlTmFtZSwga2V5KTtcbiAgfVxuICBwdWJsaWMgY2xlYXJBbGwoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuY2xlYXJBbGxLZXlWYWwodGhpcy5zdG9yZU5hbWUpO1xuICB9XG4gIHB1YmxpYyBrZXlzKCk6IFByb21pc2U8U3RvcmVLZXk8VCwgYW55PltdPiB7XG4gICAgcmV0dXJuIHRoaXMua2V5c0tleVZhbCh0aGlzLnN0b3JlTmFtZSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZ2V0QWxsVmFsKHN0b3JlTmFtZTogYW55KTogUHJvbWlzZTxTdG9yZVZhbHVlPFQsIGFueT5bXT4ge1xuICAgIHJldHVybiAoYXdhaXQgdGhpcy4kZGJQcm9taXNlKS5nZXRBbGwoc3RvcmVOYW1lKTtcbiAgfVxuICBwdWJsaWMgYXN5bmMgZ2V0S2V5VmFsKHN0b3JlTmFtZTogYW55LCBrZXkpOiBQcm9taXNlPFN0b3JlVmFsdWU8VCwgYW55Pj4ge1xuICAgIHJldHVybiAoYXdhaXQgdGhpcy4kZGJQcm9taXNlKS5nZXQoc3RvcmVOYW1lLCBrZXkpO1xuICB9XG4gIHB1YmxpYyBhc3luYyBwdXRLZXlWYWwoc3RvcmVOYW1lOiBhbnksIGtleSwgdmFsKTogUHJvbWlzZTxTdG9yZUtleTxULCBhbnk+PiB7XG4gICAgcmV0dXJuIChhd2FpdCB0aGlzLiRkYlByb21pc2UpLnB1dChzdG9yZU5hbWUsIHZhbCwga2V5KTtcbiAgfVxuICBwdWJsaWMgYXN5bmMgcmVtb3ZlS2V5VmFsKHN0b3JlTmFtZTogYW55LCBrZXkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuJGRiUHJvbWlzZSkuZGVsZXRlKHN0b3JlTmFtZSwga2V5KTtcbiAgfVxuICBwdWJsaWMgYXN5bmMgY2xlYXJBbGxLZXlWYWwoc3RvcmVOYW1lOiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuJGRiUHJvbWlzZSkuY2xlYXIoc3RvcmVOYW1lKTtcbiAgfVxuICBwdWJsaWMgYXN5bmMga2V5c0tleVZhbChzdG9yZU5hbWU6IGFueSk6IFByb21pc2U8U3RvcmVLZXk8VCwgYW55PltdPiB7XG4gICAgcmV0dXJuIChhd2FpdCB0aGlzLiRkYlByb21pc2UpLmdldEFsbEtleXMoc3RvcmVOYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBhZGRBcnRpY2xlKHN0b3JlTmFtZTogYW55LCB2YWx1ZTogYW55KTogUHJvbWlzZTxTdG9yZUtleTxULCBhbnk+PiB7XG4gICAgICByZXR1cm4gKGF3YWl0IHRoaXMuJGRiUHJvbWlzZSkuYWRkKHN0b3JlTmFtZSwgdmFsdWUpO1xuICB9XG4gIHB1YmxpYyBhc3luYyBhZGRBbGxBcnRpY2xlKHN0b3JlTmFtZTogYW55LCB2YWx1ZXM6IGFueVtdKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICBjb25zdCB0eCA9IChhd2FpdCB0aGlzLiRkYlByb21pc2UpLnRyYW5zYWN0aW9uKHN0b3JlTmFtZSwgJ3JlYWR3cml0ZScpO1xuICAgICAgdmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgICB0eC5zdG9yZS5hZGQodmFsdWUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gYXdhaXQgdHguZG9uZTtcbiAgfVxufVxuIl19