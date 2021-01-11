import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { EncryptionService } from '@dongkap/do-core';
import { AuthTokenService } from './auth-token.service';
import { AuthIndexedDBService } from '../storage/auth-indexeddb.service';
var AuthGuardChildService = /** @class */ (function () {
    function AuthGuardChildService(router, authTokenService, enc, storage) {
        this.router = router;
        this.authTokenService = authTokenService;
        this.enc = enc;
        this.storage = storage;
    }
    AuthGuardChildService.prototype.canActivateChild = function (route, state) {
        var _this = this;
        var result$ = new Subject();
        this.authTokenService.isLogin().then(function (value) {
            result$.next(value);
            if (route.data) {
                Promise.all([
                    _this.storage.getEnc('menus'),
                    _this.storage.getEnc('extras'),
                ]).then(function (strg) {
                    if (!(strg[0].includes(route.data['code']) || strg[1].includes(route.data['code']))) {
                        _this.router.navigate(['/app/home']);
                    }
                    return result$.asObservable();
                });
            }
            if (!value) {
                _this.router.navigate(['/auth']);
            }
        });
        return result$.asObservable();
    };
    AuthGuardChildService.ctorParameters = function () { return [
        { type: Router },
        { type: AuthTokenService },
        { type: EncryptionService },
        { type: AuthIndexedDBService }
    ]; };
    AuthGuardChildService.decorators = [
        { type: Injectable }
    ];
    AuthGuardChildService.ctorParameters = function () { return [
        { type: Router },
        { type: AuthTokenService },
        { type: EncryptionService },
        { type: AuthIndexedDBService }
    ]; };
    return AuthGuardChildService;
}());
export { AuthGuardChildService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ndWFyZC1jaGlsZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoLWd1YXJkLWNoaWxkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHekMsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUV6RTtJQUVJLCtCQUNZLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsR0FBc0IsRUFDdEIsT0FBNkI7UUFIN0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBc0I7SUFBRyxDQUFDO0lBRTdDLGdEQUFnQixHQUFoQixVQUFpQixLQUE2QixFQUFFLEtBQTBCO1FBQTFFLGlCQW9CQztRQW5CRyxJQUFNLE9BQU8sR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUN6RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBYztZQUNoRCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BCLElBQUksS0FBSyxDQUFDLElBQUksRUFBRTtnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDO29CQUNSLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztvQkFDNUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO2lCQUNoQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBYztvQkFDbkIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDakYsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3FCQUN2QztvQkFDRCxPQUFPLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDbEMsQ0FBQyxDQUFDLENBQUM7YUFDTjtZQUNELElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ25DO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNsQyxDQUFDOztnQkF6Qm1CLE1BQU07Z0JBQ0ksZ0JBQWdCO2dCQUM3QixpQkFBaUI7Z0JBQ2Isb0JBQW9COzs7Z0JBTjVDLFVBQVU7OztnQkFSRixNQUFNO2dCQUtOLGdCQUFnQjtnQkFEaEIsaUJBQWlCO2dCQUVqQixvQkFBb0I7O0lBZ0M3Qiw0QkFBQztDQUFBLEFBOUJELElBOEJDO1NBN0JZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGVDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBFbmNyeXB0aW9uU2VydmljZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQXV0aFRva2VuU2VydmljZSB9IGZyb20gJy4vYXV0aC10b2tlbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhJbmRleGVkREJTZXJ2aWNlIH0gZnJvbSAnLi4vc3RvcmFnZS9hdXRoLWluZGV4ZWRkYi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZENoaWxkU2VydmljZSBpbXBsZW1lbnRzIENhbkFjdGl2YXRlQ2hpbGQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGF1dGhUb2tlblNlcnZpY2U6IEF1dGhUb2tlblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZW5jOiBFbmNyeXB0aW9uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBzdG9yYWdlOiBBdXRoSW5kZXhlZERCU2VydmljZSkge31cblxuICAgIGNhbkFjdGl2YXRlQ2hpbGQocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgICAgICB0aGlzLmF1dGhUb2tlblNlcnZpY2UuaXNMb2dpbigpLnRoZW4oKHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICByZXN1bHQkLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgaWYgKHJvdXRlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXRFbmMoJ21lbnVzJyksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXRFbmMoJ2V4dHJhcycpLFxuICAgICAgICAgICAgICAgIF0pLnRoZW4oKHN0cmc6IHN0cmluZ1tdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHN0cmdbMF0uaW5jbHVkZXMocm91dGUuZGF0YVsnY29kZSddKSB8fCBzdHJnWzFdLmluY2x1ZGVzKHJvdXRlLmRhdGFbJ2NvZGUnXSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvaG9tZSddKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0JC5hc09ic2VydmFibGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hdXRoJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCQuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG59XG4iXX0=