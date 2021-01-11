import { Component, Inject } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
;
import { Idle } from '@ng-idle/core';
import { API, HTTP_SERVICE, OAUTH_INFO } from '@dongkap/do-core';
import { AuthIndexedDBService } from '../../storage/auth-indexeddb.service';
import { ProfileIndexedDBService } from '../../storage/profile-indexeddb.service';
import { SettingsIndexedDBService } from '../../storage/settings-indexeddb.service';
export class OAuth2CallbackComponent {
    constructor(router, route, httpBaseService, oauthResource, apiPath, authIndexedDB, profileIndexedDB, settingsIndexedDB, idle) {
        this.router = router;
        this.httpBaseService = httpBaseService;
        this.oauthResource = oauthResource;
        this.apiPath = apiPath;
        this.authIndexedDB = authIndexedDB;
        this.profileIndexedDB = profileIndexedDB;
        this.settingsIndexedDB = settingsIndexedDB;
        this.idle = idle;
        this.destroy$ = new Subject();
        if (route.snapshot.queryParams['access_token']) {
            this.extractToken(route.snapshot.queryParams['access_token']);
        }
        else if (route.snapshot.queryParams['error']) {
            this.router.navigate(['/auth'], { queryParams: { error: route.snapshot.queryParams['error'] } });
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.next();
        this.destroy$.complete();
    }
    extractToken(accessToken) {
        return this.httpBaseService.
            HTTP_BASE(this.apiPath['auth']['extract-token'], this.getAuthBody(accessToken).toString(), this.getAuthHeader())
            .pipe(takeUntil(this.destroy$))
            .toPromise()
            .then((response) => {
            this.idle.setIdle(+response['expires_in']);
            this.idle.watch();
            /* console.log('[DONGKAP] Session Idle Start'); */
            /* console.log('[DONGKAP] Session Timeout in ' + response['expires_in'] + ' seconds'); */
            this.authIndexedDB.loginStorage(response);
            this.profileIndexedDB.loginStorage(response);
            this.settingsIndexedDB.loginStorage(response);
            this.router.navigate(['/app/home']);
        })
            .catch((error) => {
            this.router.navigate(['/auth']);
        });
    }
    getAuthBody(accessToken) {
        const body = new URLSearchParams();
        body.append('access_token', accessToken);
        return body;
    }
    getAuthHeader() {
        return new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' +
                btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
            'Accept': 'application/json',
        });
    }
}
OAuth2CallbackComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
    { type: AuthIndexedDBService },
    { type: ProfileIndexedDBService },
    { type: SettingsIndexedDBService },
    { type: Idle }
];
OAuth2CallbackComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-oauth2-callback',
                template: "<p class=\"sub-title\">{{ 'message.callback' | translate }}</p>\n<div class=\"spinner-area\" [nbSpinner]=\"true\" nbSpinnerSize=\"small\" nbSpinnerStatus=\"info\">",
                styles: [".nb-theme-default :host .sub-title{margin:1rem}.nb-theme-default :host .spinner-area{height:22px}.nb-theme-default :host ::ng-deep nb-spinner{background:0 0!important}.nb-theme-dark :host .sub-title{margin:1rem}.nb-theme-dark :host .spinner-area{height:22px}.nb-theme-dark :host ::ng-deep nb-spinner{background:0 0!important}.nb-theme-cosmic :host .sub-title{margin:1rem}.nb-theme-cosmic :host .spinner-area{height:22px}.nb-theme-cosmic :host ::ng-deep nb-spinner{background:0 0!important}.nb-theme-corporate :host .sub-title{margin:1rem}.nb-theme-corporate :host .spinner-area{height:22px}.nb-theme-corporate :host ::ng-deep nb-spinner{background:0 0!important}"]
            },] }
];
OAuth2CallbackComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
    { type: AuthIndexedDBService },
    { type: ProfileIndexedDBService },
    { type: SettingsIndexedDBService },
    { type: Idle }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2F1dGgyLWNhbGxiYWNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWF1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC9vYXV0aDIvb2F1dGgyLWNhbGxiYWNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFnQixNQUFNLHNCQUFzQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQTtBQUM5QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFBQSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckMsT0FBTyxFQUFFLEdBQUcsRUFBZ0MsWUFBWSxFQUFFLFVBQVUsRUFBeUIsTUFBTSxrQkFBa0IsQ0FBQztBQUN0SCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQU9wRixNQUFNLE9BQU8sdUJBQXVCO0lBSWxDLFlBQ1UsTUFBYyxFQUN0QixLQUFxQixFQUNRLGVBQW1DLEVBQ3JDLGFBQW9DLEVBQzNDLE9BQWlCLEVBQzdCLGFBQW1DLEVBQ25DLGdCQUF5QyxFQUN6QyxpQkFBMkMsRUFDM0MsSUFBVTtRQVJWLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFTyxvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFDckMsa0JBQWEsR0FBYixhQUFhLENBQXVCO1FBQzNDLFlBQU8sR0FBUCxPQUFPLENBQVU7UUFDN0Is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QUMsQ0FBQztJQUNQLENBQUM7OztZQXpEbUIsTUFBTTtZQUNmLGNBQWM7NENBQ3BCLE1BQU0sU0FBQyxZQUFZOzRDQUNuQixNQUFNLFNBQUMsVUFBVTs0Q0FDakIsTUFBTSxTQUFDLEdBQUc7WUFDWSxvQkFBb0I7WUFDakIsdUJBQXVCO1lBQ3RCLHdCQUF3QjtZQUNyQyxJQUFJOzs7WUFsQnJCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUU5QiwrS0FBNkM7O2FBQzlDOzs7WUFid0IsTUFBTTtZQUF0QixjQUFjOzRDQXFCbEIsTUFBTSxTQUFDLFlBQVk7NENBQ25CLE1BQU0sU0FBQyxVQUFVOzRDQUNqQixNQUFNLFNBQUMsR0FBRztZQWxCTixvQkFBb0I7WUFDcEIsdUJBQXVCO1lBQ3ZCLHdCQUF3QjtZQUp4QixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7O1xuaW1wb3J0IHsgSWRsZSB9IGZyb20gJ0BuZy1pZGxlL2NvcmUnO1xuaW1wb3J0IHsgQVBJLCBBUElNb2RlbCwgSHR0cEZhY3RvcnlTZXJ2aWNlLCBIVFRQX1NFUlZJQ0UsIE9BVVRIX0lORk8sIFNlY3VyaXR5UmVzb3VyY2VNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQXV0aEluZGV4ZWREQlNlcnZpY2UgfSBmcm9tICcuLi8uLi9zdG9yYWdlL2F1dGgtaW5kZXhlZGRiLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZmlsZUluZGV4ZWREQlNlcnZpY2UgfSBmcm9tICcuLi8uLi9zdG9yYWdlL3Byb2ZpbGUtaW5kZXhlZGRiLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2V0dGluZ3NJbmRleGVkREJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc3RvcmFnZS9zZXR0aW5ncy1pbmRleGVkZGIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLW9hdXRoMi1jYWxsYmFjaycsXG4gIHN0eWxlVXJsczogWydvYXV0aDItY2FsbGJhY2suY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdvYXV0aDItY2FsbGJhY2suY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBPQXV0aDJDYWxsYmFja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgcHJvdGVjdGVkIGRlc3Ryb3kkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgQEluamVjdChIVFRQX1NFUlZJQ0UpcHJpdmF0ZSBodHRwQmFzZVNlcnZpY2U6IEh0dHBGYWN0b3J5U2VydmljZSxcbiAgICBASW5qZWN0KE9BVVRIX0lORk8pcHJpdmF0ZSBvYXV0aFJlc291cmNlOiBTZWN1cml0eVJlc291cmNlTW9kZWwsXG4gICAgQEluamVjdChBUEkpcHJpdmF0ZSBhcGlQYXRoOiBBUElNb2RlbCxcbiAgICBwcml2YXRlIGF1dGhJbmRleGVkREI6IEF1dGhJbmRleGVkREJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcHJvZmlsZUluZGV4ZWREQjogUHJvZmlsZUluZGV4ZWREQlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXR0aW5nc0luZGV4ZWREQjogU2V0dGluZ3NJbmRleGVkREJTZXJ2aWNlLFxuICAgIHByaXZhdGUgaWRsZTogSWRsZSkge1xuICAgIGlmIChyb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1snYWNjZXNzX3Rva2VuJ10pIHtcbiAgICAgIHRoaXMuZXh0cmFjdFRva2VuKHJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zWydhY2Nlc3NfdG9rZW4nXSk7XG4gICAgfSBlbHNlIGlmIChyb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1snZXJyb3InXSkge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXV0aCddLCB7IHF1ZXJ5UGFyYW1zOiB7IGVycm9yOiByb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1snZXJyb3InXSB9fSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdFRva2VuKGFjY2Vzc1Rva2VuOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwQmFzZVNlcnZpY2UuXG4gICAgSFRUUF9CQVNFKHRoaXMuYXBpUGF0aFsnYXV0aCddWydleHRyYWN0LXRva2VuJ10sXG4gICAgICAgIHRoaXMuZ2V0QXV0aEJvZHkoYWNjZXNzVG9rZW4pLnRvU3RyaW5nKCksXG4gICAgICAgIHRoaXMuZ2V0QXV0aEhlYWRlcigpKVxuICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pZGxlLnNldElkbGUoK3Jlc3BvbnNlWydleHBpcmVzX2luJ10pO1xuICAgICAgICAgICAgICAgIHRoaXMuaWRsZS53YXRjaCgpO1xuICAgICAgICAgICAgICAgIC8qIGNvbnNvbGUubG9nKCdbRE9OR0tBUF0gU2Vzc2lvbiBJZGxlIFN0YXJ0Jyk7ICovXG4gICAgICAgICAgICAgICAgLyogY29uc29sZS5sb2coJ1tET05HS0FQXSBTZXNzaW9uIFRpbWVvdXQgaW4gJyArIHJlc3BvbnNlWydleHBpcmVzX2luJ10gKyAnIHNlY29uZHMnKTsgKi9cbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhJbmRleGVkREIubG9naW5TdG9yYWdlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2ZpbGVJbmRleGVkREIubG9naW5TdG9yYWdlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzSW5kZXhlZERCLmxvZ2luU3RvcmFnZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL2hvbWUnXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgnXSk7XG4gICAgICAgICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QXV0aEJvZHkoYWNjZXNzVG9rZW46IHN0cmluZyk6IFVSTFNlYXJjaFBhcmFtcyB7XG4gICAgY29uc3QgYm9keSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBib2R5LmFwcGVuZCgnYWNjZXNzX3Rva2VuJywgYWNjZXNzVG9rZW4pO1xuICAgIHJldHVybiBib2R5O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBdXRoSGVhZGVyKCk6IEh0dHBIZWFkZXJzIHtcbiAgICByZXR1cm4gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyAnICtcbiAgICAgICAgICAgIGJ0b2EodGhpcy5vYXV0aFJlc291cmNlWydjbGllbnRfaWQnXSArICc6JyArIHRoaXMub2F1dGhSZXNvdXJjZVsnY2xpZW50X3NlY3JldCddKSxcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcbn1cbn1cbiJdfQ==