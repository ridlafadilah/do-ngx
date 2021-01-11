import { Injectable, Inject } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { of, combineLatest } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { signatureHeader, OAUTH_INFO, oauthInfo } from '@dongkap/do-core';
import { DateFormat, EncryptionService } from '@dongkap/do-core';
import { AuthIndexedDBService } from '../storage/auth-indexeddb.service';
var AuthSignatureService = /** @class */ (function () {
    function AuthSignatureService(translate, enc, oauthResource, authStorage) {
        this.translate = translate;
        this.enc = enc;
        this.oauthResource = oauthResource;
        this.authStorage = authStorage;
    }
    AuthSignatureService.prototype.signHeaders = function (req) {
        var _this = this;
        return combineLatest([
            this.key(),
            this.signature(this.getPath(req.url)),
        ]).pipe(take(1), switchMap(function (value) {
            if (signatureHeader.signature) {
                var httpHeaders_1 = req.headers ? req.headers : new HttpHeaders();
                httpHeaders_1.keys().forEach(function (key) {
                    if (key === signatureHeader.key)
                        httpHeaders_1 = httpHeaders_1.delete(signatureHeader.key);
                    if (key === signatureHeader.timestamp)
                        httpHeaders_1 = httpHeaders_1.delete(signatureHeader.timestamp);
                    if (key === signatureHeader.signature)
                        httpHeaders_1 = httpHeaders_1.delete(signatureHeader.signature);
                });
                httpHeaders_1 = httpHeaders_1.set(signatureHeader.key, value[0]);
                httpHeaders_1 = httpHeaders_1.set(signatureHeader.timestamp, _this.timestamp());
                httpHeaders_1 = httpHeaders_1.set(signatureHeader.signature, value[1]);
                return of(req.clone({ headers: httpHeaders_1 }));
            }
            return of(req);
        }));
    };
    AuthSignatureService.prototype.key = function () {
        return this.authStorage.getOfEnc(oauthInfo.public_key);
    };
    AuthSignatureService.prototype.timestamp = function () {
        return Math.floor(new Date().getTime() / 1000).toString();
    };
    AuthSignatureService.prototype.date = function () {
        return new DatePipe(this.translate.currentLang).transform(new Date(), DateFormat.DATE);
    };
    AuthSignatureService.prototype.signature = function (url) {
        var _this = this;
        return combineLatest([
            this.key(),
            this.authStorage.getOfEnc(oauthInfo.access_token),
        ]).pipe(take(1), switchMap(function (value) {
            var key = value[0] + ':' +
                _this.timestamp() + ':' +
                // this.date() + ':' +
                url + ':' +
                value[1];
            return of(_this.enc.getHmacSha256(_this.oauthResource['private_key'], key));
        }));
    };
    AuthSignatureService.prototype.getPath = function (url) {
        return '/' + url
            .replace(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*(:[0-9]{1,5})?(\/).*?/g, '');
    };
    AuthSignatureService.ctorParameters = function () { return [
        { type: TranslateService },
        { type: EncryptionService },
        { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
        { type: AuthIndexedDBService }
    ]; };
    AuthSignatureService.decorators = [
        { type: Injectable }
    ];
    AuthSignatureService.ctorParameters = function () { return [
        { type: TranslateService },
        { type: EncryptionService },
        { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
        { type: AuthIndexedDBService }
    ]; };
    return AuthSignatureService;
}());
export { AuthSignatureService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1zaWduYXR1cmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWF1dGgvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXV0aC1zaWduYXR1cmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsV0FBVyxFQUFlLE1BQU0sc0JBQXNCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBeUIsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pHLE9BQU8sRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUV6RTtJQUdJLDhCQUNZLFNBQTJCLEVBQzNCLEdBQXNCLEVBQ0YsYUFBb0MsRUFDeEQsV0FBaUM7UUFIakMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDRixrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7UUFDeEQsZ0JBQVcsR0FBWCxXQUFXLENBQXNCO0lBQUcsQ0FBQztJQUUxQywwQ0FBVyxHQUFsQixVQUFtQixHQUFxQjtRQUF4QyxpQkF3QkM7UUF2QkcsT0FBTyxhQUFhLENBQUM7WUFDakIsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNWLElBQUksQ0FBQyxTQUFTLENB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RyxDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFTyxzQ0FBTyxHQUFmLFVBQWdCLEdBQVc7UUFDdkIsT0FBTyxHQUFHLEdBQUcsR0FBRzthQUNmLE9BQU8sQ0FBQyw2R0FBNkcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoSSxDQUFDOztnQkE5RHNCLGdCQUFnQjtnQkFDdEIsaUJBQWlCO2dEQUM3QixNQUFNLFNBQUMsVUFBVTtnQkFDRyxvQkFBb0I7OztnQkFQaEQsVUFBVTs7O2dCQVJGLGdCQUFnQjtnQkFLSixpQkFBaUI7Z0RBUzdCLE1BQU0sU0FBQyxVQUFVO2dCQVJqQixvQkFBb0I7O0lBc0U3QiwyQkFBQztDQUFBLEFBcEVELElBb0VDO1NBbkVZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHNpZ25hdHVyZUhlYWRlciwgU2VjdXJpdHlSZXNvdXJjZU1vZGVsLCBPQVVUSF9JTkZPLCBvYXV0aEluZm8gfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IERhdGVGb3JtYXQsIEVuY3J5cHRpb25TZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBBdXRoSW5kZXhlZERCU2VydmljZSB9IGZyb20gJy4uL3N0b3JhZ2UvYXV0aC1pbmRleGVkZGIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2lnbmF0dXJlU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZW5jOiBFbmNyeXB0aW9uU2VydmljZSxcbiAgICAgICAgQEluamVjdChPQVVUSF9JTkZPKSBwcml2YXRlIG9hdXRoUmVzb3VyY2U6IFNlY3VyaXR5UmVzb3VyY2VNb2RlbCxcbiAgICAgICAgcHJpdmF0ZSBhdXRoU3RvcmFnZTogQXV0aEluZGV4ZWREQlNlcnZpY2UpIHt9XG5cbiAgICBwdWJsaWMgc2lnbkhlYWRlcnMocmVxOiBIdHRwUmVxdWVzdDxhbnk+KTogT2JzZXJ2YWJsZTxIdHRwUmVxdWVzdDxhbnk+PiB7XG4gICAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgICAgIHRoaXMua2V5KCksXG4gICAgICAgICAgICB0aGlzLnNpZ25hdHVyZSh0aGlzLmdldFBhdGgocmVxLnVybCkpLFxuICAgICAgICBdKS5waXBlKFxuICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgIHN3aXRjaE1hcCgodmFsdWU6IHN0cmluZ1tdKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2lnbmF0dXJlSGVhZGVyLnNpZ25hdHVyZSkge1xuICAgICAgICAgICAgICAgIGxldCBodHRwSGVhZGVyczogSHR0cEhlYWRlcnMgPSByZXEuaGVhZGVycyA/IHJlcS5oZWFkZXJzIDogbmV3IEh0dHBIZWFkZXJzKCk7XG4gICAgICAgICAgICAgICAgaHR0cEhlYWRlcnMua2V5cygpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IHNpZ25hdHVyZUhlYWRlci5rZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICBodHRwSGVhZGVycyA9IGh0dHBIZWFkZXJzLmRlbGV0ZShzaWduYXR1cmVIZWFkZXIua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gc2lnbmF0dXJlSGVhZGVyLnRpbWVzdGFtcClcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0dHBIZWFkZXJzID0gaHR0cEhlYWRlcnMuZGVsZXRlKHNpZ25hdHVyZUhlYWRlci50aW1lc3RhbXApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBzaWduYXR1cmVIZWFkZXIuc2lnbmF0dXJlKVxuICAgICAgICAgICAgICAgICAgICAgICAgaHR0cEhlYWRlcnMgPSBodHRwSGVhZGVycy5kZWxldGUoc2lnbmF0dXJlSGVhZGVyLnNpZ25hdHVyZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaHR0cEhlYWRlcnMgPSBodHRwSGVhZGVycy5zZXQoc2lnbmF0dXJlSGVhZGVyLmtleSwgdmFsdWVbMF0pO1xuICAgICAgICAgICAgICAgIGh0dHBIZWFkZXJzID0gaHR0cEhlYWRlcnMuc2V0KHNpZ25hdHVyZUhlYWRlci50aW1lc3RhbXAsIHRoaXMudGltZXN0YW1wKCkpO1xuICAgICAgICAgICAgICAgIGh0dHBIZWFkZXJzID0gaHR0cEhlYWRlcnMuc2V0KHNpZ25hdHVyZUhlYWRlci5zaWduYXR1cmUsIHZhbHVlWzFdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YocmVxLmNsb25lKHsgaGVhZGVyczogaHR0cEhlYWRlcnMgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9mKHJlcSk7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBwdWJsaWMga2V5KCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhTdG9yYWdlLmdldE9mRW5jKG9hdXRoSW5mby5wdWJsaWNfa2V5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGltZXN0YW1wKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCkudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gbmV3IERhdGVQaXBlKHRoaXMudHJhbnNsYXRlLmN1cnJlbnRMYW5nKS50cmFuc2Zvcm0obmV3IERhdGUoKSwgRGF0ZUZvcm1hdC5EQVRFKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2lnbmF0dXJlKHVybDogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICAgICAgdGhpcy5rZXkoKSxcbiAgICAgICAgICAgIHRoaXMuYXV0aFN0b3JhZ2UuZ2V0T2ZFbmMob2F1dGhJbmZvLmFjY2Vzc190b2tlbiksXG4gICAgICAgIF0pLnBpcGUoXG4gICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgc3dpdGNoTWFwKCh2YWx1ZTogc3RyaW5nW10pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHZhbHVlWzBdICsgJzonICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZXN0YW1wKCkgKyAnOicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5kYXRlKCkgKyAnOicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsICsgJzonICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlWzFdO1xuICAgICAgICAgICAgcmV0dXJuIG9mKHRoaXMuZW5jLmdldEhtYWNTaGEyNTYodGhpcy5vYXV0aFJlc291cmNlWydwcml2YXRlX2tleSddLCBrZXkpKTtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UGF0aCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnLycgKyB1cmxcbiAgICAgICAgLnJlcGxhY2UoL14oaHR0cDpcXC9cXC93d3dcXC58aHR0cHM6XFwvXFwvd3d3XFwufGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcLyk/W2EtejAtOV0rKFtcXC1cXC5dezF9W2EtejAtOV0rKSooOlswLTldezEsNX0pPyhcXC8pLio/L2csICcnKTtcbiAgICB9XG5cbn1cbiJdfQ==