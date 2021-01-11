import { __read } from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf, BehaviorSubject } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { NbLayoutDirectionService, NbLayoutDirection } from '@nebular/theme';
var StateService = /** @class */ (function () {
    function StateService(directionService) {
        var _this = this;
        this.layouts = [
            {
                name: 'One Column',
                icon: 'nb-layout-default',
                id: 'one-column',
                selected: true,
            },
            {
                name: 'Two Column',
                icon: 'nb-layout-two-column',
                id: 'two-column',
            },
            {
                name: 'Center Column',
                icon: 'nb-layout-centre',
                id: 'center-column',
            },
        ];
        this.sidebars = [
            {
                name: 'Sidebar at layout start',
                icon: 'nb-layout-sidebar-left',
                id: 'start',
                selected: true,
            },
            {
                name: 'Sidebar at layout end',
                icon: 'nb-layout-sidebar-right',
                id: 'end',
            },
        ];
        this.layoutState$ = new BehaviorSubject(this.layouts[0]);
        this.sidebarState$ = new BehaviorSubject(this.sidebars[0]);
        this.alive = true;
        directionService.onDirectionChange()
            .pipe(takeWhile(function () { return _this.alive; }))
            .subscribe(function (direction) { return _this.updateSidebarIcons(direction); });
        this.updateSidebarIcons(directionService.getDirection());
    }
    StateService.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    StateService.prototype.updateSidebarIcons = function (direction) {
        var _a = __read(this.sidebars, 2), startSidebar = _a[0], endSidebar = _a[1];
        var isLtr = direction === NbLayoutDirection.LTR;
        var startIconClass = isLtr ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right';
        var endIconClass = isLtr ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
        startSidebar.icon = startIconClass;
        endSidebar.icon = endIconClass;
    };
    StateService.prototype.setLayoutState = function (state) {
        this.layoutState$.next(state);
    };
    StateService.prototype.getLayoutStates = function () {
        return observableOf(this.layouts);
    };
    StateService.prototype.onLayoutState = function () {
        return this.layoutState$.asObservable();
    };
    StateService.prototype.setSidebarState = function (state) {
        this.sidebarState$.next(state);
    };
    StateService.prototype.getSidebarStates = function () {
        return observableOf(this.sidebars);
    };
    StateService.prototype.onSidebarState = function () {
        return this.sidebarState$.asObservable();
    };
    StateService.ctorParameters = function () { return [
        { type: NbLayoutDirectionService }
    ]; };
    StateService.decorators = [
        { type: Injectable }
    ];
    StateService.ctorParameters = function () { return [
        { type: NbLayoutDirectionService }
    ]; };
    return StateService;
}());
export { StateService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdXRpbHMvc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBZ0IsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3RTtJQXlDRSxzQkFBWSxnQkFBMEM7UUFBdEQsaUJBTUM7UUE1Q1MsWUFBTyxHQUFRO1lBQ3ZCO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QixFQUFFLEVBQUUsWUFBWTtnQkFDaEIsUUFBUSxFQUFFLElBQUk7YUFDZjtZQUNEO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixJQUFJLEVBQUUsc0JBQXNCO2dCQUM1QixFQUFFLEVBQUUsWUFBWTthQUNqQjtZQUNEO2dCQUNFLElBQUksRUFBRSxlQUFlO2dCQUNyQixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixFQUFFLEVBQUUsZUFBZTthQUNwQjtTQUNGLENBQUM7UUFFUSxhQUFRLEdBQVE7WUFDeEI7Z0JBQ0UsSUFBSSxFQUFFLHlCQUF5QjtnQkFDL0IsSUFBSSxFQUFFLHdCQUF3QjtnQkFDOUIsRUFBRSxFQUFFLE9BQU87Z0JBQ1gsUUFBUSxFQUFFLElBQUk7YUFDZjtZQUNEO2dCQUNFLElBQUksRUFBRSx1QkFBdUI7Z0JBQzdCLElBQUksRUFBRSx5QkFBeUI7Z0JBQy9CLEVBQUUsRUFBRSxLQUFLO2FBQ1Y7U0FDRixDQUFDO1FBRVEsaUJBQVksR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFaEUsVUFBSyxHQUFHLElBQUksQ0FBQztRQUdYLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFO2FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxDQUFDLENBQUM7YUFDakMsU0FBUyxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRU8seUNBQWtCLEdBQTFCLFVBQTJCLFNBQTRCO1FBQy9DLElBQUEsS0FBQSxPQUErQixJQUFJLENBQUMsUUFBUSxJQUFBLEVBQTFDLFlBQVksUUFBQSxFQUFFLFVBQVUsUUFBa0IsQ0FBQztRQUNuRCxJQUFNLEtBQUssR0FBRyxTQUFTLEtBQUssaUJBQWlCLENBQUMsR0FBRyxDQUFDO1FBQ2xELElBQU0sY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLHlCQUF5QixDQUFDO1FBQ3BGLElBQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDO1FBQ2xGLFlBQVksQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO1FBQ25DLFVBQVUsQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxxQ0FBYyxHQUFkLFVBQWUsS0FBVTtRQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsc0NBQWUsR0FBZjtRQUNFLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsb0NBQWEsR0FBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsc0NBQWUsR0FBZixVQUFnQixLQUFVO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCx1Q0FBZ0IsR0FBaEI7UUFDRSxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHFDQUFjLEdBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7Z0JBM0M2Qix3QkFBd0I7OztnQkF6Q3ZELFVBQVU7OztnQkFGRix3QkFBd0I7O0lBdUZqQyxtQkFBQztDQUFBLEFBckZELElBcUZDO1NBcEZZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG9mIGFzIG9ic2VydmFibGVPZiwgIE9ic2VydmFibGUsICBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTmJMYXlvdXREaXJlY3Rpb25TZXJ2aWNlLCBOYkxheW91dERpcmVjdGlvbiB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0YXRlU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgcHJvdGVjdGVkIGxheW91dHM6IGFueSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnT25lIENvbHVtbicsXG4gICAgICBpY29uOiAnbmItbGF5b3V0LWRlZmF1bHQnLFxuICAgICAgaWQ6ICdvbmUtY29sdW1uJyxcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1R3byBDb2x1bW4nLFxuICAgICAgaWNvbjogJ25iLWxheW91dC10d28tY29sdW1uJyxcbiAgICAgIGlkOiAndHdvLWNvbHVtbicsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ2VudGVyIENvbHVtbicsXG4gICAgICBpY29uOiAnbmItbGF5b3V0LWNlbnRyZScsXG4gICAgICBpZDogJ2NlbnRlci1jb2x1bW4nLFxuICAgIH0sXG4gIF07XG5cbiAgcHJvdGVjdGVkIHNpZGViYXJzOiBhbnkgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ1NpZGViYXIgYXQgbGF5b3V0IHN0YXJ0JyxcbiAgICAgIGljb246ICduYi1sYXlvdXQtc2lkZWJhci1sZWZ0JyxcbiAgICAgIGlkOiAnc3RhcnQnLFxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnU2lkZWJhciBhdCBsYXlvdXQgZW5kJyxcbiAgICAgIGljb246ICduYi1sYXlvdXQtc2lkZWJhci1yaWdodCcsXG4gICAgICBpZDogJ2VuZCcsXG4gICAgfSxcbiAgXTtcblxuICBwcm90ZWN0ZWQgbGF5b3V0U3RhdGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLmxheW91dHNbMF0pO1xuICBwcm90ZWN0ZWQgc2lkZWJhclN0YXRlJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5zaWRlYmFyc1swXSk7XG5cbiAgYWxpdmUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKGRpcmVjdGlvblNlcnZpY2U6IE5iTGF5b3V0RGlyZWN0aW9uU2VydmljZSkge1xuICAgIGRpcmVjdGlvblNlcnZpY2Uub25EaXJlY3Rpb25DaGFuZ2UoKVxuICAgICAgLnBpcGUodGFrZVdoaWxlKCgpID0+IHRoaXMuYWxpdmUpKVxuICAgICAgLnN1YnNjcmliZShkaXJlY3Rpb24gPT4gdGhpcy51cGRhdGVTaWRlYmFySWNvbnMoZGlyZWN0aW9uKSk7XG5cbiAgICB0aGlzLnVwZGF0ZVNpZGViYXJJY29ucyhkaXJlY3Rpb25TZXJ2aWNlLmdldERpcmVjdGlvbigpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuYWxpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU2lkZWJhckljb25zKGRpcmVjdGlvbjogTmJMYXlvdXREaXJlY3Rpb24pIHtcbiAgICBjb25zdCBbIHN0YXJ0U2lkZWJhciwgZW5kU2lkZWJhciBdID0gdGhpcy5zaWRlYmFycztcbiAgICBjb25zdCBpc0x0ciA9IGRpcmVjdGlvbiA9PT0gTmJMYXlvdXREaXJlY3Rpb24uTFRSO1xuICAgIGNvbnN0IHN0YXJ0SWNvbkNsYXNzID0gaXNMdHIgPyAnbmItbGF5b3V0LXNpZGViYXItbGVmdCcgOiAnbmItbGF5b3V0LXNpZGViYXItcmlnaHQnO1xuICAgIGNvbnN0IGVuZEljb25DbGFzcyA9IGlzTHRyID8gJ25iLWxheW91dC1zaWRlYmFyLXJpZ2h0JyA6ICduYi1sYXlvdXQtc2lkZWJhci1sZWZ0JztcbiAgICBzdGFydFNpZGViYXIuaWNvbiA9IHN0YXJ0SWNvbkNsYXNzO1xuICAgIGVuZFNpZGViYXIuaWNvbiA9IGVuZEljb25DbGFzcztcbiAgfVxuXG4gIHNldExheW91dFN0YXRlKHN0YXRlOiBhbnkpOiBhbnkge1xuICAgIHRoaXMubGF5b3V0U3RhdGUkLm5leHQoc3RhdGUpO1xuICB9XG5cbiAgZ2V0TGF5b3V0U3RhdGVzKCk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMubGF5b3V0cyk7XG4gIH1cblxuICBvbkxheW91dFN0YXRlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMubGF5b3V0U3RhdGUkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgc2V0U2lkZWJhclN0YXRlKHN0YXRlOiBhbnkpOiBhbnkge1xuICAgIHRoaXMuc2lkZWJhclN0YXRlJC5uZXh0KHN0YXRlKTtcbiAgfVxuXG4gIGdldFNpZGViYXJTdGF0ZXMoKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIHJldHVybiBvYnNlcnZhYmxlT2YodGhpcy5zaWRlYmFycyk7XG4gIH1cblxuICBvblNpZGViYXJTdGF0ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnNpZGViYXJTdGF0ZSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbn1cbiJdfQ==