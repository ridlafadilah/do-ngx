import { __read } from "tslib";
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SwPush } from '@angular/service-worker';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbMediaBreakpointsService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { AUTH_INDEXED_DB, PROFILE_INDEXED_DB, USER_INFO, UserInfo, HTTP_SERVICE, API, OAUTH_INFO, LayoutService, } from '@dongkap/do-core';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sidebarService, themeService, layoutService, breakpointService, translate, router, userService, authIndexedDB, profileIndexedDB, http, api, oauthResource, swPush) {
        var _this = this;
        this.sidebarService = sidebarService;
        this.themeService = themeService;
        this.layoutService = layoutService;
        this.breakpointService = breakpointService;
        this.translate = translate;
        this.router = router;
        this.userService = userService;
        this.authIndexedDB = authIndexedDB;
        this.profileIndexedDB = profileIndexedDB;
        this.http = http;
        this.api = api;
        this.oauthResource = oauthResource;
        this.swPush = swPush;
        this.destroy$ = new Subject();
        this.userPictureOnly = false;
        this.themes = [
            {
                value: 'default',
                name: 'Light',
            },
            {
                value: 'dark',
                name: 'Dark',
            },
            {
                value: 'cosmic',
                name: 'Cosmic',
            },
            {
                value: 'corporate',
                name: 'Corporate',
            },
        ];
        this.currentTheme = 'default';
        this.userMenu = [];
        this.setMenu();
        this.translate.onTranslationChange.pipe(takeUntil(this.destroy$))
            .subscribe(function () {
            _this.setMenu();
        });
        Promise.all([
            this.profileIndexedDB.get('name'),
            this.profileIndexedDB.get('image-b64'),
        ]).then(function (value) {
            if (!_this.user) {
                _this.user = {
                    name: value[0],
                    picture: value[1],
                };
            }
        });
        if (this.swPush.isEnabled) {
            this.swPush.subscription.subscribe(function (subscription) {
                if (subscription === null) {
                    _this.swPush.requestSubscription({ serverPublicKey: _this.oauthResource.vapid })
                        .then(function (pushSubscription) {
                        var sub = JSON.parse(JSON.stringify(pushSubscription));
                        _this.http.HTTP_AUTH(_this.api['notification']['push-subscribe'], sub)
                            .subscribe(function (response) { });
                    });
                }
            });
            this.swPush.messages.subscribe(function (message) {
                var data = JSON.parse(message.notification.data);
                console.log(data);
            });
            this.swPush.notificationClicks.subscribe(function (_a) {
                var action = _a.action, notification = _a.notification;
                console.log(action);
                console.log(notification);
            });
        }
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentTheme = this.themeService.currentTheme;
        this.userService.getUser()
            .pipe(takeUntil(this.destroy$))
            .subscribe(function (user) { return _this.user = user; });
        var xl = this.breakpointService.getBreakpointsMap().xl;
        this.themeService.onMediaQueryChange()
            .pipe(map(function (_a) {
            var _b = __read(_a, 2), currentBreakpoint = _b[1];
            return currentBreakpoint.width < xl;
        }), takeUntil(this.destroy$))
            .subscribe(function (isLessThanXl) { return _this.userPictureOnly = isLessThanXl; });
        this.themeService.onThemeChange()
            .pipe(map(function (_a) {
            var name = _a.name;
            return name;
        }), takeUntil(this.destroy$))
            .subscribe(function (themeName) { return _this.currentTheme = themeName; });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    };
    HeaderComponent.prototype.setMenu = function () {
        var _this = this;
        this.userMenu = [];
        this.userMenu.push({ title: '' });
        this.authIndexedDB.getEnc('extras').then(function (value) {
            var extras = JSON.parse(value);
            if (extras) {
                extras.forEach(function (extra) {
                    _this.userMenu.push({ title: extra.title, link: extra.link });
                });
            }
            _this.translate.get('Logout').subscribe(function (result) {
                _this.userMenu.push({ title: result, link: '/auth/logout' });
            });
            _this.userMenu.splice(0, 1);
        });
    };
    HeaderComponent.prototype.changeTheme = function (themeName) {
        this.themeService.changeTheme(themeName);
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        this.sidebarService.toggle(true, 'menu-sidebar');
        this.layoutService.changeLayoutSize();
        return false;
    };
    HeaderComponent.prototype.navigateHome = function () {
        this.router.navigate(['/app/home']);
        return false;
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: NbSidebarService },
        { type: NbThemeService },
        { type: LayoutService },
        { type: NbMediaBreakpointsService },
        { type: TranslateService },
        { type: Router },
        { type: UserInfo, decorators: [{ type: Inject, args: [USER_INFO,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [AUTH_INDEXED_DB,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [PROFILE_INDEXED_DB,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
        { type: SwPush }
    ]; };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-header',
                    template: "<div class=\"header-container\">\n  <div class=\"logo-container\">\n    <a (click)=\"toggleSidebar()\" href=\"#\" class=\"sidebar-toggle\">\n      <nb-icon icon=\"menu-2-outline\"></nb-icon>\n    </a>\n    <a class=\"logo\" href=\"#\" (click)=\"navigateHome()\">\n      <nb-action class=\"icon-logo\" icon=\"home-outline\"></nb-action>\n      <span class=\"title-logo\">{{ 'Dongkap' | translate }}</span>\n    </a>\n  </div>\n</div>\n\n<div class=\"header-container\">\n  <nb-actions size=\"small\">\n\n    <nb-action class=\"control-item\">\n      <nb-search type=\"rotate-layout\"></nb-search>\n    </nb-action>\n    <nb-action class=\"control-item\" icon=\"bell-outline\"></nb-action>\n    <nb-action class=\"user-action\" >\n      <nb-user [nbContextMenu]=\"userMenu\"\n               [onlyPicture]=\"userPictureOnly\"\n               [name]=\"user?.name\"\n               [picture]=\"user?.picture\">\n      </nb-user>\n    </nb-action>\n  </nb-actions>\n</div>\n",
                    styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host{display:flex;justify-content:space-between;width:100%}.nb-theme-default :host .logo-container{display:flex;align-items:center}.nb-theme-default :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-default :host nb-user{cursor:pointer}.nb-theme-default :host ::ng-deep nb-search button{padding:0!important}.nb-theme-default :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-default :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-default :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-default :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-default :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-default :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-default :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-default :host .header-container .logo{border-right:1px solid #edf1f7}.nb-theme-default :host .icon-logo{display:none}@media (max-width:767.98px){.nb-theme-default :host .control-item{border:none;padding-left:5px}.nb-theme-default :host .user-action{border:none;padding:0}.nb-theme-default :host .title-logo{display:none}.nb-theme-default :host .icon-logo{display:unset}}@media (max-width:575.98px){.nb-theme-default :host nb-select{display:none}}.nb-theme-dark :host{display:flex;justify-content:space-between;width:100%}.nb-theme-dark :host .logo-container{display:flex;align-items:center}.nb-theme-dark :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-dark :host nb-user{cursor:pointer}.nb-theme-dark :host ::ng-deep nb-search button{padding:0!important}.nb-theme-dark :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-dark :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-dark :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-dark :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-dark :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-dark :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-dark :host .header-container .logo{border-left:1px solid #151a30}[dir=rtl] .nb-theme-dark :host .header-container .logo{border-right:1px solid #151a30}.nb-theme-dark :host .icon-logo{display:none}@media (max-width:767.98px){.nb-theme-dark :host .control-item{border:none;padding-left:5px}.nb-theme-dark :host .user-action{border:none;padding:0}.nb-theme-dark :host .title-logo{display:none}.nb-theme-dark :host .icon-logo{display:unset}}@media (max-width:575.98px){.nb-theme-dark :host nb-select{display:none}}.nb-theme-cosmic :host{display:flex;justify-content:space-between;width:100%}.nb-theme-cosmic :host .logo-container{display:flex;align-items:center}.nb-theme-cosmic :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-cosmic :host nb-user{cursor:pointer}.nb-theme-cosmic :host ::ng-deep nb-search button{padding:0!important}.nb-theme-cosmic :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-cosmic :host .header-container .sidebar-toggle{text-decoration:none;color:#b4b4db}[dir=ltr] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-cosmic :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-cosmic :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-cosmic :host .header-container .logo{border-left:1px solid #1b1b38}[dir=rtl] .nb-theme-cosmic :host .header-container .logo{border-right:1px solid #1b1b38}.nb-theme-cosmic :host .icon-logo{display:none}@media (max-width:767.98px){.nb-theme-cosmic :host .control-item{border:none;padding-left:5px}.nb-theme-cosmic :host .user-action{border:none;padding:0}.nb-theme-cosmic :host .title-logo{display:none}.nb-theme-cosmic :host .icon-logo{display:unset}}@media (max-width:575.98px){.nb-theme-cosmic :host nb-select{display:none}}.nb-theme-corporate :host{display:flex;justify-content:space-between;width:100%}.nb-theme-corporate :host .logo-container{display:flex;align-items:center}.nb-theme-corporate :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-corporate :host nb-user{cursor:pointer}.nb-theme-corporate :host ::ng-deep nb-search button{padding:0!important}.nb-theme-corporate :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-corporate :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-corporate :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-corporate :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-corporate :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-corporate :host .header-container .logo{border-right:1px solid #edf1f7}.nb-theme-corporate :host .icon-logo{display:none}@media (max-width:767.98px){.nb-theme-corporate :host .control-item{border:none;padding-left:5px}.nb-theme-corporate :host .user-action{border:none;padding:0}.nb-theme-corporate :host .title-logo{display:none}.nb-theme-corporate :host .icon-logo{display:unset}}@media (max-width:575.98px){.nb-theme-corporate :host nb-select{display:none}}"]
                },] }
    ];
    HeaderComponent.ctorParameters = function () { return [
        { type: NbSidebarService },
        { type: NbThemeService },
        { type: LayoutService },
        { type: NbMediaBreakpointsService },
        { type: TranslateService },
        { type: Router },
        { type: UserInfo, decorators: [{ type: Inject, args: [USER_INFO,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [AUTH_INDEXED_DB,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [PROFILE_INDEXED_DB,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
        { type: SwPush }
    ]; };
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLXRoZW1lLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUseUJBQXlCLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUNMLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsU0FBUyxFQUNULFFBQVEsRUFDUixZQUFZLEVBQ1osR0FBRyxFQUNILFVBQVUsRUFDVixhQUFhLEdBQ2QsTUFBTSxrQkFBa0IsQ0FBQztBQVMxQjtJQWtDRSx5QkFBb0IsY0FBZ0MsRUFDaEMsWUFBNEIsRUFDNUIsYUFBNEIsRUFDNUIsaUJBQTRDLEVBQzVDLFNBQTJCLEVBQzNCLE1BQWMsRUFDSyxXQUFxQixFQUNmLGFBQXlDLEVBQ3RDLGdCQUF5QyxFQUMvQyxJQUF3QixFQUNqQyxHQUFhLEVBQ04sYUFBb0MsRUFDeEQsTUFBYztRQVpsQyxpQkFpREM7UUFqRG1CLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQUNoQyxpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsc0JBQWlCLEdBQWpC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eUI7Z0JBRXpCLGdCQUFnQjtnQkFOaEIsTUFBTTtnQkFXYixRQUFRLHVCQXNESyxNQUFNLFNBQUMsU0FBUztnREFDaEIsTUFBTSxTQUFDLGVBQWU7Z0RBQ3RCLE1BQU0sU0FBQyxrQkFBa0I7Z0RBQ3pCLE1BQU0sU0FBQyxZQUFZO2dEQUNuQixNQUFNLFNBQUMsR0FBRztnREFDVixNQUFNLFNBQUMsVUFBVTtnQkFyRXZCLE1BQU07O0lBeUtmLHNCQUFDO0NBQUEsQUFqSkQsSUFpSkM7U0E1SVksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN3UHVzaCB9IGZyb20gJ0Bhbmd1bGFyL3NlcnZpY2Utd29ya2VyJztcbmltcG9ydCB7IG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmJNZWRpYUJyZWFrcG9pbnRzU2VydmljZSwgTmJTaWRlYmFyU2VydmljZSwgTmJUaGVtZVNlcnZpY2UgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBOYk1lbnVJdGVtIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHtcbiAgQVVUSF9JTkRFWEVEX0RCLFxuICBQUk9GSUxFX0lOREVYRURfREIsXG4gIFVTRVJfSU5GTyxcbiAgVXNlckluZm8sXG4gIEhUVFBfU0VSVklDRSxcbiAgQVBJLFxuICBPQVVUSF9JTkZPLFxuICBMYXlvdXRTZXJ2aWNlLFxufSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEluZGV4ZWREQkZhY3RvcnlTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBJbmRleGVkREJFbmNGYWN0b3J5U2VydmljZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgSHR0cEZhY3RvcnlTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBBUElNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQXBpQmFzZVJlc3BvbnNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBTZWN1cml0eVJlc291cmNlTW9kZWwgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8taGVhZGVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICB1c2VyUGljdHVyZU9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgdXNlcjogVXNlcjtcblxuICB0aGVtZXMgPSBbXG4gICAge1xuICAgICAgdmFsdWU6ICdkZWZhdWx0JyxcbiAgICAgIG5hbWU6ICdMaWdodCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWx1ZTogJ2RhcmsnLFxuICAgICAgbmFtZTogJ0RhcmsnLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6ICdjb3NtaWMnLFxuICAgICAgbmFtZTogJ0Nvc21pYycsXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWx1ZTogJ2NvcnBvcmF0ZScsXG4gICAgICBuYW1lOiAnQ29ycG9yYXRlJyxcbiAgICB9LFxuICBdO1xuXG4gIGN1cnJlbnRUaGVtZSA9ICdkZWZhdWx0JztcblxuICB1c2VyTWVudTogTmJNZW51SXRlbVtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzaWRlYmFyU2VydmljZTogTmJTaWRlYmFyU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB0aGVtZVNlcnZpY2U6IE5iVGhlbWVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGxheW91dFNlcnZpY2U6IExheW91dFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgYnJlYWtwb2ludFNlcnZpY2U6IE5iTWVkaWFCcmVha3BvaW50c1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBASW5qZWN0KFVTRVJfSU5GTykgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlckluZm8sXG4gICAgICAgICAgICAgIEBJbmplY3QoQVVUSF9JTkRFWEVEX0RCKSBwcml2YXRlIGF1dGhJbmRleGVkREI6IEluZGV4ZWREQkVuY0ZhY3RvcnlTZXJ2aWNlLFxuICAgICAgICAgICAgICBASW5qZWN0KFBST0ZJTEVfSU5ERVhFRF9EQikgcHJpdmF0ZSBwcm9maWxlSW5kZXhlZERCOiBJbmRleGVkREJGYWN0b3J5U2VydmljZSxcbiAgICAgICAgICAgICAgQEluamVjdChIVFRQX1NFUlZJQ0UpIHByaXZhdGUgaHR0cDogSHR0cEZhY3RvcnlTZXJ2aWNlLFxuICAgICAgICAgICAgICBASW5qZWN0KEFQSSkgcHJpdmF0ZSBhcGk6IEFQSU1vZGVsLFxuICAgICAgICAgICAgICBASW5qZWN0KE9BVVRIX0lORk8pIHByaXZhdGUgb2F1dGhSZXNvdXJjZTogU2VjdXJpdHlSZXNvdXJjZU1vZGVsLFxuICAgICAgICAgICAgICBwcml2YXRlIHN3UHVzaDogU3dQdXNoKSB7XG4gICAgICB0aGlzLnNldE1lbnUoKTtcbiAgICAgIHRoaXMudHJhbnNsYXRlLm9uVHJhbnNsYXRpb25DaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0TWVudSgpO1xuICAgICAgfSk7XG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucHJvZmlsZUluZGV4ZWREQi5nZXQoJ25hbWUnKSxcbiAgICAgICAgdGhpcy5wcm9maWxlSW5kZXhlZERCLmdldCgnaW1hZ2UtYjY0JyksXG4gICAgICBdKS50aGVuKCh2YWx1ZTogYW55W10pID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnVzZXIpIHtcbiAgICAgICAgICB0aGlzLnVzZXIgPSB7XG4gICAgICAgICAgICBuYW1lOiB2YWx1ZVswXSxcbiAgICAgICAgICAgIHBpY3R1cmU6IHZhbHVlWzFdLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuc3dQdXNoLmlzRW5hYmxlZCkge1xuICAgICAgICB0aGlzLnN3UHVzaC5zdWJzY3JpcHRpb24uc3Vic2NyaWJlKChzdWJzY3JpcHRpb246IFB1c2hTdWJzY3JpcHRpb24pID0+IHtcbiAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnN3UHVzaC5yZXF1ZXN0U3Vic2NyaXB0aW9uKHtzZXJ2ZXJQdWJsaWNLZXk6IHRoaXMub2F1dGhSZXNvdXJjZS52YXBpZH0pXG4gICAgICAgICAgICAgIC50aGVuKChwdXNoU3Vic2NyaXB0aW9uOiBQdXNoU3Vic2NyaXB0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ViOiBhbnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHB1c2hTdWJzY3JpcHRpb24pKTtcbiAgICAgICAgICAgICAgICB0aGlzLmh0dHAuSFRUUF9BVVRIKHRoaXMuYXBpWydub3RpZmljYXRpb24nXVsncHVzaC1zdWJzY3JpYmUnXSwgc3ViKVxuICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IEFwaUJhc2VSZXNwb25zZSkgPT4ge30pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zd1B1c2gubWVzc2FnZXMuc3Vic2NyaWJlKChtZXNzYWdlOiB7bm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb25PcHRpb25zfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGE6IGFueSA9IEpTT04ucGFyc2UobWVzc2FnZS5ub3RpZmljYXRpb24uZGF0YSk7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN3UHVzaC5ub3RpZmljYXRpb25DbGlja3Muc3Vic2NyaWJlKCh7YWN0aW9uLCBub3RpZmljYXRpb259KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhub3RpZmljYXRpb24pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY3VycmVudFRoZW1lID0gdGhpcy50aGVtZVNlcnZpY2UuY3VycmVudFRoZW1lO1xuICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0VXNlcigpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCh1c2VyOiBVc2VyKSA9PiB0aGlzLnVzZXIgPSB1c2VyKTtcblxuICAgIGNvbnN0IHsgeGwgfSA9IHRoaXMuYnJlYWtwb2ludFNlcnZpY2UuZ2V0QnJlYWtwb2ludHNNYXAoKTtcbiAgICB0aGlzLnRoZW1lU2VydmljZS5vbk1lZGlhUXVlcnlDaGFuZ2UoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoWywgY3VycmVudEJyZWFrcG9pbnRdKSA9PiBjdXJyZW50QnJlYWtwb2ludC53aWR0aCA8IHhsKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoaXNMZXNzVGhhblhsOiBib29sZWFuKSA9PiB0aGlzLnVzZXJQaWN0dXJlT25seSA9IGlzTGVzc1RoYW5YbCk7XG5cbiAgICB0aGlzLnRoZW1lU2VydmljZS5vblRoZW1lQ2hhbmdlKClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHsgbmFtZSB9KSA9PiBuYW1lKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSh0aGVtZU5hbWUgPT4gdGhpcy5jdXJyZW50VGhlbWUgPSB0aGVtZU5hbWUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBzZXRNZW51KCkge1xuICAgIHRoaXMudXNlck1lbnUgPSBbXTtcbiAgICB0aGlzLnVzZXJNZW51LnB1c2goeyB0aXRsZTogJycgfSk7XG4gICAgdGhpcy5hdXRoSW5kZXhlZERCLmdldEVuYygnZXh0cmFzJykudGhlbigodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZXh0cmFzOiBhbnlbXSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgaWYgKGV4dHJhcykge1xuICAgICAgICBleHRyYXMuZm9yRWFjaChleHRyYSA9PiB7XG4gICAgICAgICAgdGhpcy51c2VyTWVudS5wdXNoKHsgdGl0bGU6IGV4dHJhLnRpdGxlLCBsaW5rIDogZXh0cmEubGluayB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLnRyYW5zbGF0ZS5nZXQoJ0xvZ291dCcpLnN1YnNjcmliZSgocmVzdWx0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy51c2VyTWVudS5wdXNoKHsgdGl0bGU6IHJlc3VsdCwgbGluayA6ICcvYXV0aC9sb2dvdXQnIH0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnVzZXJNZW51LnNwbGljZSgwLCAxKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZVRoZW1lKHRoZW1lTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy50aGVtZVNlcnZpY2UuY2hhbmdlVGhlbWUodGhlbWVOYW1lKTtcbiAgfVxuXG4gIHRvZ2dsZVNpZGViYXIoKTogYm9vbGVhbiB7XG4gICAgdGhpcy5zaWRlYmFyU2VydmljZS50b2dnbGUodHJ1ZSwgJ21lbnUtc2lkZWJhcicpO1xuICAgIHRoaXMubGF5b3V0U2VydmljZS5jaGFuZ2VMYXlvdXRTaXplKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBuYXZpZ2F0ZUhvbWUoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL2hvbWUnXSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=