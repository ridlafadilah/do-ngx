import { __awaiter, __extends, __generator } from "tslib";
import { Injectable, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { oauthInfo, oauthInfoModels, TypeDataOauth } from '@dongkap/do-core';
import { IndexedDBService } from '@dongkap/do-storage';
import * as i0 from "@angular/core";
var AuthIndexedDBService = /** @class */ (function (_super) {
    __extends(AuthIndexedDBService, _super);
    function AuthIndexedDBService(injector) {
        return _super.call(this, injector, 'do-core', 1, '#do-auth') || this;
    }
    AuthIndexedDBService.prototype.getEnc = function (key, storeName) {
        return __awaiter(this, void 0, void 0, function () {
            var keyEncrypted;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
                        return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, ((_a.sent()).get(storeName ? storeName : '#do-auth', keyEncrypted)).then(function (value) {
                            return _this.enc.decryptAES(_this.oauthResource['aes_key'], value);
                        })];
                }
            });
        });
    };
    AuthIndexedDBService.prototype.putEnc = function (key, val, storeName) {
        return __awaiter(this, void 0, void 0, function () {
            var keyEncrypted, valueEncrypted;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
                        valueEncrypted = this.enc.encryptAES(this.oauthResource['aes_key'], val);
                        return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, (_a.sent()).put(storeName ? storeName : '#do-auth', valueEncrypted, keyEncrypted)];
                }
            });
        });
    };
    AuthIndexedDBService.prototype.removeEnc = function (key, storeName) {
        return __awaiter(this, void 0, void 0, function () {
            var keyEncrypted;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
                        return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, (_a.sent()).delete(storeName ? storeName : '#do-auth', keyEncrypted)];
                }
            });
        });
    };
    AuthIndexedDBService.prototype.getOfEnc = function (key, storeName) {
        var result$ = new Subject();
        this.getEnc(key, storeName).then(function (value) {
            result$.next(value);
        });
        return result$.asObservable();
    };
    AuthIndexedDBService.prototype.putOfEnc = function (key, val, storeName) {
        var result$ = new Subject();
        this.putEnc(key, val, storeName).then(function (value) {
            result$.next(value);
        });
        return result$.asObservable();
    };
    AuthIndexedDBService.prototype.removeOfEnc = function (key, storeName) {
        var result$ = new Subject();
        this.removeEnc(key, storeName).then(function (value) {
            result$.next(value);
        });
        return result$.asObservable();
    };
    AuthIndexedDBService.prototype.loginStorage = function (response) {
        var _this = this;
        oauthInfoModels.forEach(function (data) {
            if (response[data.key]) {
                if (data.type === TypeDataOauth.OAUTH) {
                    if (data.enc) {
                        _this.putEnc(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                    }
                    else {
                        _this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                    }
                }
            }
        });
    };
    AuthIndexedDBService.prototype.logout = function () {
        var _this = this;
        oauthInfoModels.forEach(function (data) {
            if (data.enc) {
                if (data.type === TypeDataOauth.OAUTH) {
                    _this.removeEnc(data.key).then();
                }
            }
        });
    };
    AuthIndexedDBService.prototype.isLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getEnc(oauthInfo.access_token)];
                    case 1:
                        if (_a.sent())
                            return [2 /*return*/, true];
                        oauthInfoModels.forEach(function (data) {
                            _this.removeEnc(data.key).then();
                        });
                        return [2 /*return*/, false];
                }
            });
        });
    };
    AuthIndexedDBService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    AuthIndexedDBService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthIndexedDBService_Factory() { return new AuthIndexedDBService(i0.ɵɵinject(i0.INJECTOR)); }, token: AuthIndexedDBService, providedIn: "root" });
    AuthIndexedDBService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    AuthIndexedDBService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return AuthIndexedDBService;
}(IndexedDBService));
export { AuthIndexedDBService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1pbmRleGVkZGIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWF1dGgvIiwic291cmNlcyI6WyJsaWIvc3RvcmFnZS9hdXRoLWluZGV4ZWRkYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUE4QixhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN6RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFHdkQ7SUFDMEMsd0NBQXlCO0lBRWpFLDhCQUFZLFFBQWtCO2VBQzFCLGtCQUFNLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQztJQUM3QyxDQUFDO0lBRVkscUNBQU0sR0FBbkIsVUFBb0IsR0FBRyxFQUFFLFNBQWU7Ozs7Ozs7d0JBQ2hDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDakYscUJBQU0sSUFBSSxDQUFDLFVBQVUsRUFBQTs0QkFBOUIsc0JBQU8sQ0FBQyxDQUFDLFNBQXFCLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQVU7NEJBQ3JHLE9BQU8sS0FBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzt3QkFDbkUsQ0FBQyxDQUFDLEVBQUM7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LEtBQUssRUFBQzs7OztLQUNoQjs7Z0JBekVxQixRQUFROzs7O2dCQUgvQixVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUcsTUFBTSxFQUFDOzs7Z0JBUFosUUFBUTs7K0JBQTdCO0NBcUZDLEFBOUVELENBQzBDLGdCQUFnQixHQTZFekQ7U0E3RVksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN0b3JlS2V5IH0gZnJvbSAnaWRiJztcbmltcG9ydCB7IG9hdXRoSW5mbywgb2F1dGhJbmZvTW9kZWxzLCBJbmRleGVkREJFbmNGYWN0b3J5U2VydmljZSwgVHlwZURhdGFPYXV0aCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgSW5kZXhlZERCU2VydmljZSB9IGZyb20gJ0Bkb25na2FwL2RvLXN0b3JhZ2UnO1xuaW1wb3J0IHsgQXV0aElEQiB9IGZyb20gJy4uL21vZGVscy9hdXRoLnNjaGVtYSc7XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluIDogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBBdXRoSW5kZXhlZERCU2VydmljZSBleHRlbmRzIEluZGV4ZWREQlNlcnZpY2U8QXV0aElEQj4gaW1wbGVtZW50cyBJbmRleGVkREJFbmNGYWN0b3J5U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgICBzdXBlcihpbmplY3RvciwgJ2RvLWNvcmUnLCAxLCAnI2RvLWF1dGgnKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRFbmMoa2V5LCBzdG9yZU5hbWU/OiBhbnkpOiBQcm9taXNlPEF1dGhJREJbJyNkby1hdXRoJ11bJ3ZhbHVlJ10+IHtcbiAgICBjb25zdCBrZXlFbmNyeXB0ZWQgPSB0aGlzLmVuYy5nZXRIbWFjU2hhMjU2KHRoaXMub2F1dGhSZXNvdXJjZVsncHJpdmF0ZV9rZXknXSwga2V5LCB0cnVlKTtcbiAgICByZXR1cm4gKChhd2FpdCB0aGlzLiRkYlByb21pc2UpLmdldChzdG9yZU5hbWUgPyBzdG9yZU5hbWUgOiAnI2RvLWF1dGgnLCBrZXlFbmNyeXB0ZWQpKS50aGVuKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5lbmMuZGVjcnlwdEFFUyh0aGlzLm9hdXRoUmVzb3VyY2VbJ2Flc19rZXknXSwgdmFsdWUpO1xuICAgIH0pO1xuICB9XG4gIHB1YmxpYyBhc3luYyBwdXRFbmMoa2V5LCB2YWwsIHN0b3JlTmFtZT86IGFueSk6IFByb21pc2U8U3RvcmVLZXk8QXV0aElEQiwgYW55Pj4ge1xuICAgIGNvbnN0IGtleUVuY3J5cHRlZCA9IHRoaXMuZW5jLmdldEhtYWNTaGEyNTYodGhpcy5vYXV0aFJlc291cmNlWydwcml2YXRlX2tleSddLCBrZXksIHRydWUpO1xuICAgIGNvbnN0IHZhbHVlRW5jcnlwdGVkID0gdGhpcy5lbmMuZW5jcnlwdEFFUyh0aGlzLm9hdXRoUmVzb3VyY2VbJ2Flc19rZXknXSwgdmFsKTtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuJGRiUHJvbWlzZSkucHV0KHN0b3JlTmFtZSA/IHN0b3JlTmFtZSA6ICcjZG8tYXV0aCcsIHZhbHVlRW5jcnlwdGVkLCBrZXlFbmNyeXB0ZWQpO1xuICB9XG4gIHB1YmxpYyBhc3luYyByZW1vdmVFbmMoa2V5LCBzdG9yZU5hbWU/OiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBrZXlFbmNyeXB0ZWQgPSB0aGlzLmVuYy5nZXRIbWFjU2hhMjU2KHRoaXMub2F1dGhSZXNvdXJjZVsncHJpdmF0ZV9rZXknXSwga2V5LCB0cnVlKTtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuJGRiUHJvbWlzZSkuZGVsZXRlKHN0b3JlTmFtZSA/IHN0b3JlTmFtZSA6ICcjZG8tYXV0aCcsIGtleUVuY3J5cHRlZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0T2ZFbmMoa2V5LCBzdG9yZU5hbWU/OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHJlc3VsdCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICB0aGlzLmdldEVuYyhrZXksIHN0b3JlTmFtZSkudGhlbigodmFsdWU6IGFueSkgPT4ge1xuICAgICAgcmVzdWx0JC5uZXh0KHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0JC5hc09ic2VydmFibGUoKTtcbiAgfVxuICBwdWJsaWMgcHV0T2ZFbmMoa2V5LCB2YWwsIHN0b3JlTmFtZT86IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcmVzdWx0JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIHRoaXMucHV0RW5jKGtleSwgdmFsLCBzdG9yZU5hbWUpLnRoZW4oKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIHJlc3VsdCQubmV4dCh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdCQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbiAgcHVibGljIHJlbW92ZU9mRW5jKGtleSwgc3RvcmVOYW1lPzogYW55KTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgY29uc3QgcmVzdWx0JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIHRoaXMucmVtb3ZlRW5jKGtleSwgc3RvcmVOYW1lKS50aGVuKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICByZXN1bHQkLm5leHQodmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgcHVibGljIGxvZ2luU3RvcmFnZShyZXNwb25zZTogYW55KTogdm9pZCB7XG4gICAgb2F1dGhJbmZvTW9kZWxzLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2VbZGF0YS5rZXldKSB7XG4gICAgICAgIGlmIChkYXRhLnR5cGUgPT09IFR5cGVEYXRhT2F1dGguT0FVVEgpIHtcbiAgICAgICAgICBpZiAoZGF0YS5lbmMpIHtcbiAgICAgICAgICAgIHRoaXMucHV0RW5jKGRhdGEua2V5LCBkYXRhLnN0cmluZyA/IHJlc3BvbnNlW2RhdGEua2V5XSA6IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlW2RhdGEua2V5XSkpLnRoZW4oKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wdXQoZGF0YS5rZXksIGRhdGEuc3RyaW5nID8gcmVzcG9uc2VbZGF0YS5rZXldIDogSlNPTi5zdHJpbmdpZnkocmVzcG9uc2VbZGF0YS5rZXldKSkudGhlbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGxvZ291dCgpOiB2b2lkIHtcbiAgICBvYXV0aEluZm9Nb2RlbHMuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIGlmIChkYXRhLmVuYykge1xuICAgICAgICBpZiAoZGF0YS50eXBlID09PSBUeXBlRGF0YU9hdXRoLk9BVVRIKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVFbmMoZGF0YS5rZXkpLnRoZW4oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGlzTG9naW4oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICBpZiAoYXdhaXQgdGhpcy5nZXRFbmMob2F1dGhJbmZvLmFjY2Vzc190b2tlbikpXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBvYXV0aEluZm9Nb2RlbHMuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVFbmMoZGF0YS5rZXkpLnRoZW4oKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn1cbiJdfQ==