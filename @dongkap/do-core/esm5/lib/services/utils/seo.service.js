import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { NB_DOCUMENT } from '@nebular/theme';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
var SeoService = /** @class */ (function () {
    function SeoService(router, document, platformId) {
        this.router = router;
        this.destroy$ = new Subject();
        this.isBrowser = isPlatformBrowser(platformId);
        this.dom = document;
        if (this.isBrowser) {
            this.createCanonicalTag();
        }
    }
    SeoService.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    SeoService.prototype.createCanonicalTag = function () {
        this.linkCanonical = this.dom.createElement('link');
        this.linkCanonical.setAttribute('rel', 'canonical');
        this.dom.head.appendChild(this.linkCanonical);
        this.linkCanonical.setAttribute('href', this.getCanonicalUrl());
    };
    SeoService.prototype.trackCanonicalChanges = function () {
        var _this = this;
        if (!this.isBrowser) {
            return;
        }
        this.router.events.pipe(filter(function (event) { return event instanceof NavigationEnd; }), takeUntil(this.destroy$))
            .subscribe(function () {
            _this.linkCanonical.setAttribute('href', _this.getCanonicalUrl());
        });
    };
    SeoService.prototype.getCanonicalUrl = function () {
        return this.dom.location.origin + this.dom.location.pathname;
    };
    SeoService.ctorParameters = function () { return [
        { type: Router },
        { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    SeoService.decorators = [
        { type: Injectable }
    ];
    SeoService.ctorParameters = function () { return [
        { type: Router },
        { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return SeoService;
}());
export { SeoService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VvLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3V0aWxzL3Nlby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0I7SUFRRSxvQkFDVSxNQUFjLEVBQ0QsUUFBUSxFQUNSLFVBQVU7UUFGdkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQU5QLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBVTlDLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUM7UUFFcEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUVELGdDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELHVDQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCwwQ0FBcUIsR0FBckI7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDckIsTUFBTSxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxZQUFZLGFBQWEsRUFBOUIsQ0FBOEIsQ0FBQyxFQUNqRCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QjthQUNFLFNBQVMsQ0FBQztZQUNULEtBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUNsRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxvQ0FBZSxHQUF2QjtRQUNFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztJQUMvRCxDQUFDOztnQkF4Q2lCLE1BQU07Z0RBQ3JCLE1BQU0sU0FBQyxXQUFXO2dEQUNsQixNQUFNLFNBQUMsV0FBVzs7O2dCQVh0QixVQUFVOzs7Z0JBTGEsTUFBTTtnREFlekIsTUFBTSxTQUFDLFdBQVc7Z0RBQ2xCLE1BQU0sU0FBQyxXQUFXOztJQXVDdkIsaUJBQUM7Q0FBQSxBQWxERCxJQWtEQztTQWpEWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBQTEFURk9STV9JRCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTkJfRE9DVU1FTlQgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlb1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIHJlYWRvbmx5IGRvbTogRG9jdW1lbnQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgaXNCcm93c2VyOiBib29sZWFuO1xuICBwcml2YXRlIGxpbmtDYW5vbmljYWw6IEhUTUxMaW5rRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIEBJbmplY3QoTkJfRE9DVU1FTlQpIGRvY3VtZW50LFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQsXG4gICkge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gICAgdGhpcy5kb20gPSBkb2N1bWVudDtcblxuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5jcmVhdGVDYW5vbmljYWxUYWcoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBjcmVhdGVDYW5vbmljYWxUYWcoKSB7XG4gICAgdGhpcy5saW5rQ2Fub25pY2FsID0gdGhpcy5kb20uY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIHRoaXMubGlua0Nhbm9uaWNhbC5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdjYW5vbmljYWwnKTtcbiAgICB0aGlzLmRvbS5oZWFkLmFwcGVuZENoaWxkKHRoaXMubGlua0Nhbm9uaWNhbCk7XG4gICAgdGhpcy5saW5rQ2Fub25pY2FsLnNldEF0dHJpYnV0ZSgnaHJlZicsIHRoaXMuZ2V0Q2Fub25pY2FsVXJsKCkpO1xuICB9XG5cbiAgdHJhY2tDYW5vbmljYWxDaGFuZ2VzKCkge1xuICAgIGlmICghdGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcbiAgICAgIGZpbHRlcigoZXZlbnQpID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMubGlua0Nhbm9uaWNhbC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB0aGlzLmdldENhbm9uaWNhbFVybCgpKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYW5vbmljYWxVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kb20ubG9jYXRpb24ub3JpZ2luICsgdGhpcy5kb20ubG9jYXRpb24ucGF0aG5hbWU7XG4gIH1cbn1cbiJdfQ==