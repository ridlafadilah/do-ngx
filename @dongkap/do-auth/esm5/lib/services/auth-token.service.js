import { __awaiter, __generator } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { HTTP_SERVICE, signatureHeader, API, OAUTH_INFO, oauthInfo } from '@dongkap/do-core';
import { AuthIndexedDBService } from '../storage/auth-indexeddb.service';
import { ProfileIndexedDBService } from '../storage/profile-indexeddb.service';
import { SettingsIndexedDBService } from '../storage/settings-indexeddb.service';
var AuthTokenService = /** @class */ (function () {
    function AuthTokenService(httpBaseService, oauthResource, apiPath, router, authIndexedDB, profileIndexedDB, settingsIndexedDB, idle) {
        var _this = this;
        this.httpBaseService = httpBaseService;
        this.oauthResource = oauthResource;
        this.apiPath = apiPath;
        this.router = router;
        this.authIndexedDB = authIndexedDB;
        this.profileIndexedDB = profileIndexedDB;
        this.settingsIndexedDB = settingsIndexedDB;
        this.idle = idle;
        this.destroy$ = new Subject();
        idle.setIdle(oauthResource['session_idle']);
        idle.setTimeout(oauthResource['session_timeout']);
        idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
        idle.onTimeout.subscribe(function () {
            /* console.log('[DONGKAP] Session Timeout'); */
            _this.logout();
        });
        idle.onIdleEnd.subscribe(function () {
            /* console.log('[DONGKAP] Session Idle End'); */
        });
    }
    AuthTokenService.prototype.ngOnDestroy = function () {
        clearInterval(this.timer);
        this.destroy$.next(true);
        this.destroy$.next();
        this.destroy$.complete();
    };
    AuthTokenService.prototype.login = function (username, password) {
        var _this = this;
        this.authIndexedDB.logout();
        return this.httpBaseService.
            HTTP_BASE(this.apiPath['auth']['token'], this.getAuthBody(username, password).toString(), this.getAuthHeader())
            .pipe(takeUntil(this.destroy$))
            .toPromise()
            .then(function (response) {
            _this.idle.setIdle(+response['expires_in']);
            _this.idle.watch();
            /* console.log('[DONGKAP] Session Idle Start'); */
            /* console.log('[DONGKAP] Session Timeout in ' + response['expires_in'] + ' seconds'); */
            _this.authIndexedDB.loginStorage(response);
            _this.profileIndexedDB.loginStorage(response);
            _this.settingsIndexedDB.loginStorage(response);
        });
    };
    AuthTokenService.prototype.refresh = function () {
        var _this = this;
        return this.getBodyRefresh().pipe(switchMap(function (body) {
            return _this.httpBaseService.
                HTTP_BASE(_this.apiPath['auth']['token'], body, _this.getAuthHeader())
                .pipe(takeUntil(_this.destroy$))
                .pipe(map(function (response) {
                _this.idle.setIdle(response['expires_in']);
                _this.authIndexedDB.logout();
                _this.authIndexedDB.loginStorage(response);
            }));
        }));
    };
    AuthTokenService.prototype.logout = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.doLogout();
        }, 5000);
        this.httpBaseService.HTTP_AUTH(this.apiPath['security']['revoke'])
            .pipe(takeUntil(this.destroy$))
            .subscribe(function () {
            _this.doLogout();
        });
    };
    AuthTokenService.prototype.doLogout = function () {
        this.authIndexedDB.logout();
        this.profileIndexedDB.logout();
        clearInterval(this.timer);
        this.idle.stop();
        this.router.navigate(['/auth']);
    };
    AuthTokenService.prototype.isLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authIndexedDB.isLogin()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthTokenService.prototype.oauthHeaders = function (request) {
        var result$ = new Subject();
        var httpHeaders = request.headers ? request.headers : new HttpHeaders();
        httpHeaders = httpHeaders.has(signatureHeader.authorization) ?
            httpHeaders.delete(signatureHeader.authorization) : httpHeaders;
        Promise.all([
            this.authIndexedDB.getEnc(oauthInfo.token_type),
            this.authIndexedDB.getEnc(oauthInfo.access_token)
        ])
            .then(function (value) {
            httpHeaders = httpHeaders.set(signatureHeader.authorization, value[0] + ' ' + value[1]);
            result$.next(request.clone({ headers: httpHeaders }));
        });
        return result$.asObservable();
    };
    AuthTokenService.prototype.getAuthHeader = function () {
        return new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' +
                btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
            'Accept': 'application/json',
        });
    };
    AuthTokenService.prototype.getAuthBody = function (username, password) {
        var body = new URLSearchParams();
        body.append('client_id', this.oauthResource['client_id']);
        body.append('grant_type', this.oauthResource['grant_type']);
        body.append('username', username);
        body.append('password', password);
        return body;
    };
    AuthTokenService.prototype.getBodyRefresh = function () {
        var _this = this;
        var result$ = new Subject();
        this.authIndexedDB.getEnc(oauthInfo.refresh_token).then(function (value) {
            var body = new URLSearchParams();
            body.append('client_id', _this.oauthResource['client_id']);
            body.append('grant_type', 'refresh_token');
            body.append('refresh_token', value);
            result$.next(body.toString());
        });
        return result$.asObservable();
    };
    AuthTokenService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
        { type: Router },
        { type: AuthIndexedDBService },
        { type: ProfileIndexedDBService },
        { type: SettingsIndexedDBService },
        { type: Idle }
    ]; };
    AuthTokenService.decorators = [
        { type: Injectable }
    ];
    AuthTokenService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
        { type: Router },
        { type: AuthIndexedDBService },
        { type: ProfileIndexedDBService },
        { type: SettingsIndexedDBService },
        { type: Idle }
    ]; };
    return AuthTokenService;
}());
export { AuthTokenService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC10b2tlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoLXRva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQTZCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQ0gsWUFBWSxFQUFZLGVBQWUsRUFDbkIsR0FBRyxFQUNBLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUVqRjtJQU1JLDBCQUF5QyxlQUFtQyxFQUM3QyxhQUFvQyxFQUMzQyxPQUFpQixFQUM3QixNQUFjLEVBQ2QsYUFBbUMsRUFDbkMsZ0JBQXlDLEVBQ3pDLGlCQUEyQyxFQUMzQyxJQUFVO1FBUHRCLGlCQWtCQztRQWxCd0Msb0JBQWUsR0FBZixlQUFlLENBQW9CO1FBQzdDLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQUMzQyxZQUFPLEdBQVAsT0FBTyxDQUFVO1FBQzdCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFD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QixNQUFNLFNBQUMsR0FBRztnQkFDSyxNQUFNO2dCQUNDLG9CQUFvQjtnQkFDakIsdUJBQXVCO2dCQUN0Qix3QkFBd0I7Z0JBQ3JDLElBQUk7OztnQkFiekIsVUFBVTs7O2dEQU1NLE1BQU0sU0FBQyxZQUFZO2dEQUMzQixNQUFNLFNBQUMsVUFBVTtnREFDakIsTUFBTSxTQUFDLEdBQUc7Z0JBcEJWLE1BQU07Z0JBUU4sb0JBQW9CO2dCQUNwQix1QkFBdUI7Z0JBQ3ZCLHdCQUF3QjtnQkFQeEIsSUFBSTs7SUFnSmIsdUJBQUM7Q0FBQSxBQXZJRCxJQXVJQztTQXRJWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElkbGUsIERFRkFVTFRfSU5URVJSVVBUU09VUkNFUyB9IGZyb20gJ0BuZy1pZGxlL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBIVFRQX1NFUlZJQ0UsIEFQSU1vZGVsLCBzaWduYXR1cmVIZWFkZXIsXG4gICAgSHR0cEZhY3RvcnlTZXJ2aWNlLCBBUEksXG4gICAgU2VjdXJpdHlSZXNvdXJjZU1vZGVsLCBPQVVUSF9JTkZPLCBvYXV0aEluZm8gfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEF1dGhJbmRleGVkREJTZXJ2aWNlIH0gZnJvbSAnLi4vc3RvcmFnZS9hdXRoLWluZGV4ZWRkYi5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2ZpbGVJbmRleGVkREJTZXJ2aWNlIH0gZnJvbSAnLi4vc3RvcmFnZS9wcm9maWxlLWluZGV4ZWRkYi5zZXJ2aWNlJztcbmltcG9ydCB7IFNldHRpbmdzSW5kZXhlZERCU2VydmljZSB9IGZyb20gJy4uL3N0b3JhZ2Uvc2V0dGluZ3MtaW5kZXhlZGRiLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFRva2VuU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgICBwcml2YXRlIHRpbWVyOiBhbnk7XG4gICAgcHJvdGVjdGVkIGRlc3Ryb3kkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KEhUVFBfU0VSVklDRSlwcml2YXRlIGh0dHBCYXNlU2VydmljZTogSHR0cEZhY3RvcnlTZXJ2aWNlLFxuICAgICAgICBASW5qZWN0KE9BVVRIX0lORk8pcHJpdmF0ZSBvYXV0aFJlc291cmNlOiBTZWN1cml0eVJlc291cmNlTW9kZWwsXG4gICAgICAgIEBJbmplY3QoQVBJKXByaXZhdGUgYXBpUGF0aDogQVBJTW9kZWwsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgYXV0aEluZGV4ZWREQjogQXV0aEluZGV4ZWREQlNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcHJvZmlsZUluZGV4ZWREQjogUHJvZmlsZUluZGV4ZWREQlNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgc2V0dGluZ3NJbmRleGVkREI6IFNldHRpbmdzSW5kZXhlZERCU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBpZGxlOiBJZGxlKSB7XG4gICAgICAgIGlkbGUuc2V0SWRsZShvYXV0aFJlc291cmNlWydzZXNzaW9uX2lkbGUnXSk7XG4gICAgICAgIGlkbGUuc2V0VGltZW91dChvYXV0aFJlc291cmNlWydzZXNzaW9uX3RpbWVvdXQnXSk7XG4gICAgICAgIGlkbGUuc2V0SW50ZXJydXB0cyhERUZBVUxUX0lOVEVSUlVQVFNPVVJDRVMpO1xuICAgICAgICBpZGxlLm9uVGltZW91dC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgLyogY29uc29sZS5sb2coJ1tET05HS0FQXSBTZXNzaW9uIFRpbWVvdXQnKTsgKi9cbiAgICAgICAgICAgIHRoaXMubG9nb3V0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZGxlLm9uSWRsZUVuZC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgLyogY29uc29sZS5sb2coJ1tET05HS0FQXSBTZXNzaW9uIElkbGUgRW5kJyk7ICovXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgICAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ2luKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICB0aGlzLmF1dGhJbmRleGVkREIubG9nb3V0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBCYXNlU2VydmljZS5cbiAgICAgICAgSFRUUF9CQVNFKHRoaXMuYXBpUGF0aFsnYXV0aCddWyd0b2tlbiddLFxuICAgICAgICAgICAgdGhpcy5nZXRBdXRoQm9keSh1c2VybmFtZSwgcGFzc3dvcmQpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICB0aGlzLmdldEF1dGhIZWFkZXIoKSlcbiAgICAgICAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8YW55PikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGUuc2V0SWRsZSgrcmVzcG9uc2VbJ2V4cGlyZXNfaW4nXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZS53YXRjaCgpO1xuICAgICAgICAgICAgICAgICAgICAvKiBjb25zb2xlLmxvZygnW0RPTkdLQVBdIFNlc3Npb24gSWRsZSBTdGFydCcpOyAqL1xuICAgICAgICAgICAgICAgICAgICAvKiBjb25zb2xlLmxvZygnW0RPTkdLQVBdIFNlc3Npb24gVGltZW91dCBpbiAnICsgcmVzcG9uc2VbJ2V4cGlyZXNfaW4nXSArICcgc2Vjb25kcycpOyAqL1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhJbmRleGVkREIubG9naW5TdG9yYWdlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9maWxlSW5kZXhlZERCLmxvZ2luU3RvcmFnZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3NJbmRleGVkREIubG9naW5TdG9yYWdlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVmcmVzaCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCb2R5UmVmcmVzaCgpLnBpcGUoc3dpdGNoTWFwKChib2R5OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHBCYXNlU2VydmljZS5cbiAgICAgICAgICAgIEhUVFBfQkFTRSh0aGlzLmFwaVBhdGhbJ2F1dGgnXVsndG9rZW4nXSxcbiAgICAgICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QXV0aEhlYWRlcigpKVxuICAgICAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgICAgICAgICAucGlwZShtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlLnNldElkbGUocmVzcG9uc2VbJ2V4cGlyZXNfaW4nXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aEluZGV4ZWREQi5sb2dvdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoSW5kZXhlZERCLmxvZ2luU3RvcmFnZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ291dCgpIHtcbiAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZG9Mb2dvdXQoKTtcbiAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgIHRoaXMuaHR0cEJhc2VTZXJ2aWNlLkhUVFBfQVVUSCh0aGlzLmFwaVBhdGhbJ3NlY3VyaXR5J11bJ3Jldm9rZSddKVxuICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kb0xvZ291dCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkb0xvZ291dCgpIHtcbiAgICAgICAgdGhpcy5hdXRoSW5kZXhlZERCLmxvZ291dCgpO1xuICAgICAgICB0aGlzLnByb2ZpbGVJbmRleGVkREIubG9nb3V0KCk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgICAgIHRoaXMuaWRsZS5zdG9wKCk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgnXSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGlzTG9naW4oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF1dGhJbmRleGVkREIuaXNMb2dpbigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvYXV0aEhlYWRlcnMocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8SHR0cFJlcXVlc3Q8YW55Pj4ge1xuICAgICAgICBjb25zdCByZXN1bHQkOiBTdWJqZWN0PEh0dHBSZXF1ZXN0PGFueT4+ID0gbmV3IFN1YmplY3Q8SHR0cFJlcXVlc3Q8YW55Pj4oKTtcbiAgICAgICAgbGV0IGh0dHBIZWFkZXJzOiBIdHRwSGVhZGVycyA9IHJlcXVlc3QuaGVhZGVycyA/IHJlcXVlc3QuaGVhZGVycyA6IG5ldyBIdHRwSGVhZGVycygpO1xuICAgICAgICBodHRwSGVhZGVycyA9IGh0dHBIZWFkZXJzLmhhcyhzaWduYXR1cmVIZWFkZXIuYXV0aG9yaXphdGlvbikgP1xuICAgICAgICAgICAgICAgICAgICAgICAgaHR0cEhlYWRlcnMuZGVsZXRlKHNpZ25hdHVyZUhlYWRlci5hdXRob3JpemF0aW9uKSA6IGh0dHBIZWFkZXJzO1xuICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLmF1dGhJbmRleGVkREIuZ2V0RW5jKG9hdXRoSW5mby50b2tlbl90eXBlKSxcbiAgICAgICAgICAgIHRoaXMuYXV0aEluZGV4ZWREQi5nZXRFbmMob2F1dGhJbmZvLmFjY2Vzc190b2tlbildKVxuICAgICAgICAudGhlbigodmFsdWU6IHN0cmluZ1tdKSA9PiB7XG4gICAgICAgICAgICBodHRwSGVhZGVycyA9IGh0dHBIZWFkZXJzLnNldChzaWduYXR1cmVIZWFkZXIuYXV0aG9yaXphdGlvbiwgdmFsdWVbMF0gKyAnICcgKyB2YWx1ZVsxXSk7XG4gICAgICAgICAgICByZXN1bHQkLm5leHQocmVxdWVzdC5jbG9uZSh7IGhlYWRlcnM6IGh0dHBIZWFkZXJzIH0pKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQkLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0QXV0aEhlYWRlcigpOiBIdHRwSGVhZGVycyB7XG4gICAgICAgIHJldHVybiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgJyArXG4gICAgICAgICAgICAgICAgYnRvYSh0aGlzLm9hdXRoUmVzb3VyY2VbJ2NsaWVudF9pZCddICsgJzonICsgdGhpcy5vYXV0aFJlc291cmNlWydjbGllbnRfc2VjcmV0J10pLFxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRBdXRoQm9keSh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgICAgICAgY29uc3QgYm9keSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgYm9keS5hcHBlbmQoJ2NsaWVudF9pZCcsIHRoaXMub2F1dGhSZXNvdXJjZVsnY2xpZW50X2lkJ10pO1xuICAgICAgICBib2R5LmFwcGVuZCgnZ3JhbnRfdHlwZScsIHRoaXMub2F1dGhSZXNvdXJjZVsnZ3JhbnRfdHlwZSddKTtcbiAgICAgICAgYm9keS5hcHBlbmQoJ3VzZXJuYW1lJywgdXNlcm5hbWUpO1xuICAgICAgICBib2R5LmFwcGVuZCgncGFzc3dvcmQnLCBwYXNzd29yZCk7XG4gICAgICAgIHJldHVybiBib2R5O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Qm9keVJlZnJlc2goKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0JDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICAgICAgICB0aGlzLmF1dGhJbmRleGVkREIuZ2V0RW5jKG9hdXRoSW5mby5yZWZyZXNoX3Rva2VuKS50aGVuKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBib2R5OiBVUkxTZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICAgICAgICBib2R5LmFwcGVuZCgnY2xpZW50X2lkJywgdGhpcy5vYXV0aFJlc291cmNlWydjbGllbnRfaWQnXSk7XG4gICAgICAgICAgICBib2R5LmFwcGVuZCgnZ3JhbnRfdHlwZScsICdyZWZyZXNoX3Rva2VuJyk7XG4gICAgICAgICAgICBib2R5LmFwcGVuZCgncmVmcmVzaF90b2tlbicsIHZhbHVlKTtcbiAgICAgICAgICAgIHJlc3VsdCQubmV4dChib2R5LnRvU3RyaW5nKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCQuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG59XG4iXX0=