import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { of, from } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';
import { Pattern } from '@dongkap/do-core';
import { SettingsIndexedDBService } from '../storage/settings-indexeddb.service';
var AuthLanguageService = /** @class */ (function () {
    function AuthLanguageService(locale, settingsIndexedDB) {
        this.locale = locale;
        this.settingsIndexedDB = settingsIndexedDB;
    }
    AuthLanguageService.prototype.getLocale = function (req) {
        var _this = this;
        return from(this.settingsIndexedDB.get('locale')).pipe(take(1), switchMap(function (value) {
            var httpHeaders = req.headers ? req.headers : new HttpHeaders();
            var localeCode = value ?
                (value.match(new RegExp(Pattern.LOCALE, 'g')) ?
                    value :
                    _this.locale) : _this.locale;
            httpHeaders = httpHeaders.append('Accept-Language', localeCode);
            return of(req.clone({ headers: httpHeaders }));
        }));
    };
    AuthLanguageService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
        { type: SettingsIndexedDBService }
    ]; };
    AuthLanguageService.decorators = [
        { type: Injectable }
    ];
    AuthLanguageService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
        { type: SettingsIndexedDBService }
    ]; };
    return AuthLanguageService;
}());
export { AuthLanguageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1sYW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1hdXRoLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2F1dGgtbGFuZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFlLE1BQU0sc0JBQXNCLENBQUM7QUFDaEUsT0FBTyxFQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFakY7SUFHSSw2QkFBdUMsTUFBYyxFQUN6QyxpQkFBMkM7UUFEaEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN6QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTBCO0lBQUcsQ0FBQztJQUUzRCx1Q0FBUyxHQUFULFVBQVUsR0FBcUI7UUFBL0IsaUJBY0M7UUFiRyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNsRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsU0FBUyxDQUFDLFVBQUMsS0FBVTtZQUNyQixJQUFJLFdBQVcsR0FBZ0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQztZQUM3RSxJQUFNLFVBQVUsR0FBVyxLQUFLLENBQUMsQ0FBQztnQkFDbEMsQ0FDSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5QyxLQUFLLENBQUMsQ0FBQztvQkFDUCxLQUFJLENBQUMsTUFBTSxDQUNkLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUM7WUFDaEIsV0FBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDaEUsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7OzZDQWpCWSxNQUFNLFNBQUMsU0FBUztnQkFDRSx3QkFBd0I7OztnQkFKMUQsVUFBVTs7OzZDQUdNLE1BQU0sU0FBQyxTQUFTO2dCQUx4Qix3QkFBd0I7O0lBd0JqQywwQkFBQztDQUFBLEFBdEJELElBc0JDO1NBckJZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgTE9DQUxFX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgZnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGF0dGVybiB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgU2V0dGluZ3NJbmRleGVkREJTZXJ2aWNlIH0gZnJvbSAnLi4vc3RvcmFnZS9zZXR0aW5ncy1pbmRleGVkZGIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoTGFuZ3VhZ2VTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIGxvY2FsZTogc3RyaW5nLFxuICAgICAgICBwcml2YXRlIHNldHRpbmdzSW5kZXhlZERCOiBTZXR0aW5nc0luZGV4ZWREQlNlcnZpY2UpIHt9XG5cbiAgICBnZXRMb2NhbGUocmVxOiBIdHRwUmVxdWVzdDxhbnk+KTogT2JzZXJ2YWJsZTxIdHRwUmVxdWVzdDxhbnk+PiB7XG4gICAgICAgIHJldHVybiBmcm9tKHRoaXMuc2V0dGluZ3NJbmRleGVkREIuZ2V0KCdsb2NhbGUnKSkucGlwZShcbiAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGxldCBodHRwSGVhZGVyczogSHR0cEhlYWRlcnMgPSByZXEuaGVhZGVycyA/IHJlcS5oZWFkZXJzIDogbmV3IEh0dHBIZWFkZXJzKCk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbGVDb2RlOiBzdHJpbmcgPSB2YWx1ZSA/XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgdmFsdWUubWF0Y2gobmV3IFJlZ0V4cChQYXR0ZXJuLkxPQ0FMRSwgJ2cnKSkgP1xuICAgICAgICAgICAgICAgIHZhbHVlIDpcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgKSA6IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgaHR0cEhlYWRlcnMgPSBodHRwSGVhZGVycy5hcHBlbmQoJ0FjY2VwdC1MYW5ndWFnZScsIGxvY2FsZUNvZGUpO1xuICAgICAgICAgICAgcmV0dXJuIG9mKHJlcS5jbG9uZSh7IGhlYWRlcnM6IGh0dHBIZWFkZXJzIH0pKTtcbiAgICAgICAgfSkpO1xuICAgIH1cblxufVxuIl19