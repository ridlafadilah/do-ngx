import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
var CustomPreloadingStrategy = /** @class */ (function () {
    function CustomPreloadingStrategy() {
        this.preloadedModules = [];
    }
    CustomPreloadingStrategy.prototype.preload = function (route, load) {
        if (route.data && route.data['preload']) {
            this.preloadedModules.push(route.path);
            return load();
        }
        else {
            return EMPTY;
        }
    };
    CustomPreloadingStrategy.decorators = [
        { type: Injectable }
    ];
    return CustomPreloadingStrategy;
}());
export { CustomPreloadingStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZGluZy1zdHJhdGVneS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9wcmVsb2FkaW5nLXN0cmF0ZWd5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTdCO0lBQUE7UUFFRSxxQkFBZ0IsR0FBYSxFQUFFLENBQUM7SUFVbEMsQ0FBQztJQVJDLDBDQUFPLEdBQVAsVUFBUSxLQUFZLEVBQUUsSUFBMkI7UUFDL0MsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsT0FBTyxJQUFJLEVBQUUsQ0FBQztTQUNmO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7Z0JBWEYsVUFBVTs7SUFZWCwrQkFBQztDQUFBLEFBWkQsSUFZQztTQVhZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByZWxvYWRpbmdTdHJhdGVneSwgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRU1QVFkgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1c3RvbVByZWxvYWRpbmdTdHJhdGVneSBpbXBsZW1lbnRzIFByZWxvYWRpbmdTdHJhdGVneSB7XG4gIHByZWxvYWRlZE1vZHVsZXM6IHN0cmluZ1tdID0gW107XG5cbiAgcHJlbG9hZChyb3V0ZTogUm91dGUsIGxvYWQ6ICgpID0+IE9ic2VydmFibGU8YW55Pik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgaWYgKHJvdXRlLmRhdGEgJiYgcm91dGUuZGF0YVsncHJlbG9hZCddKSB7XG4gICAgICB0aGlzLnByZWxvYWRlZE1vZHVsZXMucHVzaChyb3V0ZS5wYXRoKTtcbiAgICAgIHJldHVybiBsb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBFTVBUWTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==