import { Inject, Injectable } from '@angular/core';
import { EncryptionService, OAUTH_INFO, } from '@dongkap/do-core';
import * as i0 from "@angular/core";
import * as i1 from "@dongkap/do-core";
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
    StorageMaskService.ɵprov = i0.ɵɵdefineInjectable({ factory: function StorageMaskService_Factory() { return new StorageMaskService(i0.ɵɵinject(i1.EncryptionService), i0.ɵɵinject(i1.OAUTH_INFO)); }, token: StorageMaskService, providedIn: "root" });
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
export { StorageMaskService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS1tYXNrLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1zdG9yYWdlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3N0b3JhZ2UtbWFzay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFDSCxpQkFBaUIsRUFDakIsVUFBVSxHQUNiLE1BQU0sa0JBQWtCLENBQUM7OztBQUkxQjtJQUtJLDRCQUFzQixHQUFzQixFQUNaLGFBQW9DO1FBRDlDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ1osa0JBQWEsR0FBYixhQUFhLENBQXVCO0lBQUcsQ0FBQztJQUVqRSxpREFBb0IsR0FBM0IsVUFBNEIsR0FBVztRQUNuQyxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxRixJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7O1lBRWhHLE9BQU8sSUFBSSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxpREFBb0IsR0FBM0IsVUFBNEIsR0FBVyxFQUFFLEtBQWE7UUFDbEQsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUYsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMs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LENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLDhDQUFpQixHQUF4QjtRQUNJLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU0scUNBQVEsR0FBZjtRQUNJLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Z0JBNUUwQixpQkFBaUI7Z0RBQ3ZDLE1BQU0sU0FBQyxVQUFVOzs7O2dCQU56QixVQUFVLFNBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzs7Z0JBUkcsaUJBQWlCO2dEQVlaLE1BQU0sU0FBQyxVQUFVOzs2QkFkMUI7Q0EyRkMsQUFuRkQsSUFtRkM7U0FoRlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIEVuY3J5cHRpb25TZXJ2aWNlLFxuICAgIE9BVVRIX0lORk8sXG59IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgU2VjdXJpdHlSZXNvdXJjZU1vZGVsIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBTdG9yYWdlRmFjdG9yeVNlcnZpY2UgfSBmcm9tICcuL3N0b3JhZ2UtZmFjdG9yeS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmFnZU1hc2tTZXJ2aWNlIGltcGxlbWVudHMgU3RvcmFnZUZhY3RvcnlTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbmM6IEVuY3J5cHRpb25TZXJ2aWNlLFxuICAgICAgICBASW5qZWN0KE9BVVRIX0lORk8pIHByaXZhdGUgb2F1dGhSZXNvdXJjZTogU2VjdXJpdHlSZXNvdXJjZU1vZGVsKSB7fVxuXG4gICAgcHVibGljIGdldFNlc3Npb25TdG9yYWdlRW5jKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3Qga2V5RW5jcnlwdGVkID0gdGhpcy5lbmMuZ2V0SG1hY1NoYTI1Nih0aGlzLm9hdXRoUmVzb3VyY2VbJ3ByaXZhdGVfa2V5J10sIGtleSwgdHJ1ZSk7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleUVuY3J5cHRlZCkpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbmMuZGVjcnlwdEFFUyh0aGlzLm9hdXRoUmVzb3VyY2VbJ2Flc19rZXknXSwgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXlFbmNyeXB0ZWQpKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFNlc3Npb25TdG9yYWdlRW5jKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGtleUVuY3J5cHRlZCA9IHRoaXMuZW5jLmdldEhtYWNTaGEyNTYodGhpcy5vYXV0aFJlc291cmNlWydwcml2YXRlX2tleSddLCBrZXksIHRydWUpO1xuICAgICAgICBjb25zdCB2YWx1ZUVuY3J5cHRlZCA9IHRoaXMuZW5jLmVuY3J5cHRBRVModGhpcy5vYXV0aFJlc291cmNlWydhZXNfa2V5J10sIHZhbHVlKTtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXlFbmNyeXB0ZWQsIHZhbHVlRW5jcnlwdGVkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlU2Vzc2lvblN0b3JhZ2VFbmMoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qga2V5RW5jcnlwdGVkID0gdGhpcy5lbmMuZ2V0SG1hY1NoYTI1Nih0aGlzLm9hdXRoUmVzb3VyY2VbJ3ByaXZhdGVfa2V5J10sIGtleSwgdHJ1ZSk7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oa2V5RW5jcnlwdGVkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TG9jYWxTdG9yYWdlRW5jKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3Qga2V5RW5jcnlwdGVkID0gdGhpcy5lbmMuZ2V0SG1hY1NoYTI1Nih0aGlzLm9hdXRoUmVzb3VyY2VbJ3ByaXZhdGVfa2V5J10sIGtleSwgdHJ1ZSk7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXlFbmNyeXB0ZWQpKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW5jLmRlY3J5cHRBRVModGhpcy5vYXV0aFJlc291cmNlWydhZXNfa2V5J10sIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleUVuY3J5cHRlZCkpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TG9jYWxTdG9yYWdlRW5jKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGtleUVuY3J5cHRlZCA9IHRoaXMuZW5jLmdldEhtYWNTaGEyNTYodGhpcy5vYXV0aFJlc291cmNlWydwcml2YXRlX2tleSddLCBrZXksIHRydWUpO1xuICAgICAgICBjb25zdCB2YWx1ZUVuY3J5cHRlZCA9IHRoaXMuZW5jLmVuY3J5cHRBRVModGhpcy5vYXV0aFJlc291cmNlWydhZXNfa2V5J10sIHZhbHVlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5RW5jcnlwdGVkLCB2YWx1ZUVuY3J5cHRlZCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUxvY2FsU3RvcmFnZUVuYyhrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBrZXlFbmNyeXB0ZWQgPSB0aGlzLmVuYy5nZXRIbWFjU2hhMjU2KHRoaXMub2F1dGhSZXNvdXJjZVsncHJpdmF0ZV9rZXknXSwga2V5LCB0cnVlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5RW5jcnlwdGVkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U2Vzc2lvblN0b3JhZ2Uoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKGtleSkgPyBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleSkgOiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRTZXNzaW9uU3RvcmFnZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVTZXNzaW9uU3RvcmFnZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldExvY2FsU3RvcmFnZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAoa2V5KSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgOiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRMb2NhbFN0b3JhZ2Uoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUxvY2FsU3RvcmFnZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhclNlc3Npb25TdG9yYWdlKCk6IHZvaWQge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckxvY2FsU3RvcmFnZSgpOiB2b2lkIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyQWxsKCk6IHZvaWQge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICB9XG5cbn1cbiJdfQ==