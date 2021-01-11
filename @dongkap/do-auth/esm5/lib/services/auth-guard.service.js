import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { USER_INFO, UserInfo } from '@dongkap/do-core';
import { AuthTokenService } from './auth-token.service';
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, authTokenService, authService) {
        this.router = router;
        this.authTokenService = authTokenService;
        this.authService = authService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        var result$ = new Subject();
        this.authTokenService.isLogin().then(function (value) {
            result$.next(value);
            if (!value) {
                _this.router.navigate(['/auth']);
            }
            else {
                if (state.url !== '/auth/logout')
                    _this.authService.loadPhotoUser();
            }
        });
        return result$.asObservable();
    };
    AuthGuardService.ctorParameters = function () { return [
        { type: Router },
        { type: AuthTokenService },
        { type: UserInfo, decorators: [{ type: Inject, args: [USER_INFO,] }] }
    ]; };
    AuthGuardService.decorators = [
        { type: Injectable }
    ];
    AuthGuardService.ctorParameters = function () { return [
        { type: Router },
        { type: AuthTokenService },
        { type: UserInfo, decorators: [{ type: Inject, args: [USER_INFO,] }] }
    ]; };
    return AuthGuardService;
}());
export { AuthGuardService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoLWd1YXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDtJQUVJLDBCQUFvQixNQUFjLEVBQVUsZ0JBQWtDLEVBQy9DLFdBQXFCO1FBRGhDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQy9DLGdCQUFXLEdBQVgsV0FBVyxDQUFVO0lBQUcsQ0FBQztJQUV4RCxzQ0FBVyxHQUFYLFVBQVksS0FBNkIsRUFBRSxLQUEwQjtRQUFyRSxpQkFXQztRQVZHLElBQU0sT0FBTyxHQUFxQixJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQ3pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFjO1lBQ2hELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDUixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDbkM7aUJBQU07Z0JBQ0gsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLGNBQWM7b0JBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN0RTtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Z0JBZDJCLE1BQU07Z0JBQTRCLGdCQUFnQjtnQkFDbEMsUUFBUSx1QkFBL0MsTUFBTSxTQUFDLFNBQVM7OztnQkFIeEIsVUFBVTs7O2dCQVJGLE1BQU07Z0JBTU4sZ0JBQWdCO2dCQURMLFFBQVEsdUJBTW5CLE1BQU0sU0FBQyxTQUFTOztJQWV6Qix1QkFBQztDQUFBLEFBbEJELElBa0JDO1NBakJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBVU0VSX0lORk8sIFVzZXJJbmZvIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBBdXRoVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLXRva2VuLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkU2VydmljZSBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGF1dGhUb2tlblNlcnZpY2U6IEF1dGhUb2tlblNlcnZpY2UsXG4gICAgICAgIEBJbmplY3QoVVNFUl9JTkZPKSBwcml2YXRlIGF1dGhTZXJ2aWNlOiBVc2VySW5mbykge31cblxuICAgIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgICAgICBjb25zdCByZXN1bHQkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICAgICAgdGhpcy5hdXRoVG9rZW5TZXJ2aWNlLmlzTG9naW4oKS50aGVuKCh2YWx1ZTogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgcmVzdWx0JC5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hdXRoJ10pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUudXJsICE9PSAnL2F1dGgvbG9nb3V0JykgdGhpcy5hdXRoU2VydmljZS5sb2FkUGhvdG9Vc2VyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0JC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbn1cbiJdfQ==