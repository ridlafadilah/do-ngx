import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { delay, shareReplay, debounceTime } from 'rxjs/operators';
var LayoutService = /** @class */ (function () {
    function LayoutService() {
        this.layoutSize$ = new Subject();
        this.layoutSizeChange$ = this.layoutSize$.pipe(shareReplay({ refCount: true }));
    }
    LayoutService.prototype.changeLayoutSize = function () {
        this.layoutSize$.next();
    };
    LayoutService.prototype.onChangeLayoutSize = function () {
        return this.layoutSizeChange$.pipe(delay(1));
    };
    LayoutService.prototype.onSafeChangeLayoutSize = function () {
        return this.layoutSizeChange$.pipe(debounceTime(350));
    };
    LayoutService.decorators = [
        { type: Injectable }
    ];
    return LayoutService;
}());
export { LayoutService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3V0aWxzL2xheW91dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRTtJQUFBO1FBR1ksZ0JBQVcsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzVCLHNCQUFpQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUNqRCxXQUFXLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FDaEMsQ0FBQztJQWVKLENBQUM7SUFiQyx3Q0FBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCwwQ0FBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELDhDQUFzQixHQUF0QjtRQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FDaEMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUNsQixDQUFDO0lBQ0osQ0FBQzs7Z0JBcEJGLFVBQVU7O0lBcUJYLG9CQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FwQlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5LCBzaGFyZVJlcGxheSwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGF5b3V0U2VydmljZSB7XG5cbiAgcHJvdGVjdGVkIGxheW91dFNpemUkID0gbmV3IFN1YmplY3QoKTtcbiAgcHJvdGVjdGVkIGxheW91dFNpemVDaGFuZ2UkID0gdGhpcy5sYXlvdXRTaXplJC5waXBlKFxuICAgIHNoYXJlUmVwbGF5KHsgcmVmQ291bnQ6IHRydWUgfSksXG4gICk7XG5cbiAgY2hhbmdlTGF5b3V0U2l6ZSgpIHtcbiAgICB0aGlzLmxheW91dFNpemUkLm5leHQoKTtcbiAgfVxuXG4gIG9uQ2hhbmdlTGF5b3V0U2l6ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmxheW91dFNpemVDaGFuZ2UkLnBpcGUoZGVsYXkoMSkpO1xuICB9XG5cbiAgb25TYWZlQ2hhbmdlTGF5b3V0U2l6ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmxheW91dFNpemVDaGFuZ2UkLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMzUwKSxcbiAgICApO1xuICB9XG59XG4iXX0=