import { Injectable } from '@angular/core';
import { of as observableOf, BehaviorSubject } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { NbLayoutDirectionService, NbLayoutDirection } from '@nebular/theme';
export class StateService {
    constructor(directionService) {
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
            .pipe(takeWhile(() => this.alive))
            .subscribe(direction => this.updateSidebarIcons(direction));
        this.updateSidebarIcons(directionService.getDirection());
    }
    ngOnDestroy() {
        this.alive = false;
    }
    updateSidebarIcons(direction) {
        const [startSidebar, endSidebar] = this.sidebars;
        const isLtr = direction === NbLayoutDirection.LTR;
        const startIconClass = isLtr ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right';
        const endIconClass = isLtr ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
        startSidebar.icon = startIconClass;
        endSidebar.icon = endIconClass;
    }
    setLayoutState(state) {
        this.layoutState$.next(state);
    }
    getLayoutStates() {
        return observableOf(this.layouts);
    }
    onLayoutState() {
        return this.layoutState$.asObservable();
    }
    setSidebarState(state) {
        this.sidebarState$.next(state);
    }
    getSidebarStates() {
        return observableOf(this.sidebars);
    }
    onSidebarState() {
        return this.sidebarState$.asObservable();
    }
}
StateService.ctorParameters = () => [
    { type: NbLayoutDirectionService }
];
StateService.decorators = [
    { type: Injectable }
];
StateService.ctorParameters = () => [
    { type: NbLayoutDirectionService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdXRpbHMvc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxFQUFFLElBQUksWUFBWSxFQUFnQixlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzdFLE1BQU0sT0FBTyxZQUFZO0lBd0N2QixZQUFZLGdCQUEwQztRQXRDNUMsWUFBTyxHQUFRO1lBQ3ZCO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QixFQUFFLEVBQUUsWUFBWTtnQkFDaEIsUUFBUSxFQUFFLElBQUk7YUFDZjtZQUNEO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixJQUFJLEVBQUUsc0JBQXNCO2dCQUM1QixFQUFFLEVBQUUsWUFBWTthQUNqQjtZQUNEO2dCQUNFLElBQUksRUFBRSxlQUFlO2dCQUNyQixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixFQUFFLEVBQUUsZUFBZTthQUNwQjtTQUNGLENBQUM7UUFFUSxhQUFRLEdBQVE7WUFDeEI7Z0JBQ0UsSUFBSSxFQUFFLHlCQUF5QjtnQkFDL0IsSUFBSSxFQUFFLHdCQUF3QjtnQkFDOUIsRUFBRSxFQUFFLE9BQU87Z0JBQ1gsUUFBUSxFQUFFLElBQUk7YUFDZjtZQUNEO2dCQUNFLElBQUksRUFBRSx1QkFBdUI7Z0JBQzdCLElBQUksRUFBRSx5QkFBeUI7Z0JBQy9CLEVBQUUsRUFBRSxLQUFLO2FBQ1Y7U0FDRixDQUFDO1FBRVEsaUJBQVksR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFaEUsVUFBSyxHQUFHLElBQUksQ0FBQztRQUdYLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFO2FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2pDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVPLGtCQUFrQixDQUFDLFNBQTRCO1FBQ3JELE1BQU0sQ0FBRSxZQUFZLEVBQUUsVUFBVSxDQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuRCxNQUFNLEtBQUssR0FBRyxTQUFTLEtBQUssaUJBQWlCLENBQUMsR0FBRyxDQUFDO1FBQ2xELE1BQU0sY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLHlCQUF5QixDQUFDO1FBQ3BGLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDO1FBQ2xGLFlBQVksQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO1FBQ25DLFVBQVUsQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxjQUFjLENBQUMsS0FBVTtRQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsZUFBZTtRQUNiLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQVU7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGdCQUFnQjtRQUNkLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQyxDQUFDOzs7WUEzQzZCLHdCQUF3Qjs7O1lBekN2RCxVQUFVOzs7WUFGRix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG9mIGFzIG9ic2VydmFibGVPZiwgIE9ic2VydmFibGUsICBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTmJMYXlvdXREaXJlY3Rpb25TZXJ2aWNlLCBOYkxheW91dERpcmVjdGlvbiB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0YXRlU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgcHJvdGVjdGVkIGxheW91dHM6IGFueSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnT25lIENvbHVtbicsXG4gICAgICBpY29uOiAnbmItbGF5b3V0LWRlZmF1bHQnLFxuICAgICAgaWQ6ICdvbmUtY29sdW1uJyxcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1R3byBDb2x1bW4nLFxuICAgICAgaWNvbjogJ25iLWxheW91dC10d28tY29sdW1uJyxcbiAgICAgIGlkOiAndHdvLWNvbHVtbicsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ2VudGVyIENvbHVtbicsXG4gICAgICBpY29uOiAnbmItbGF5b3V0LWNlbnRyZScsXG4gICAgICBpZDogJ2NlbnRlci1jb2x1bW4nLFxuICAgIH0sXG4gIF07XG5cbiAgcHJvdGVjdGVkIHNpZGViYXJzOiBhbnkgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ1NpZGViYXIgYXQgbGF5b3V0IHN0YXJ0JyxcbiAgICAgIGljb246ICduYi1sYXlvdXQtc2lkZWJhci1sZWZ0JyxcbiAgICAgIGlkOiAnc3RhcnQnLFxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnU2lkZWJhciBhdCBsYXlvdXQgZW5kJyxcbiAgICAgIGljb246ICduYi1sYXlvdXQtc2lkZWJhci1yaWdodCcsXG4gICAgICBpZDogJ2VuZCcsXG4gICAgfSxcbiAgXTtcblxuICBwcm90ZWN0ZWQgbGF5b3V0U3RhdGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLmxheW91dHNbMF0pO1xuICBwcm90ZWN0ZWQgc2lkZWJhclN0YXRlJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5zaWRlYmFyc1swXSk7XG5cbiAgYWxpdmUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKGRpcmVjdGlvblNlcnZpY2U6IE5iTGF5b3V0RGlyZWN0aW9uU2VydmljZSkge1xuICAgIGRpcmVjdGlvblNlcnZpY2Uub25EaXJlY3Rpb25DaGFuZ2UoKVxuICAgICAgLnBpcGUodGFrZVdoaWxlKCgpID0+IHRoaXMuYWxpdmUpKVxuICAgICAgLnN1YnNjcmliZShkaXJlY3Rpb24gPT4gdGhpcy51cGRhdGVTaWRlYmFySWNvbnMoZGlyZWN0aW9uKSk7XG5cbiAgICB0aGlzLnVwZGF0ZVNpZGViYXJJY29ucyhkaXJlY3Rpb25TZXJ2aWNlLmdldERpcmVjdGlvbigpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuYWxpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU2lkZWJhckljb25zKGRpcmVjdGlvbjogTmJMYXlvdXREaXJlY3Rpb24pIHtcbiAgICBjb25zdCBbIHN0YXJ0U2lkZWJhciwgZW5kU2lkZWJhciBdID0gdGhpcy5zaWRlYmFycztcbiAgICBjb25zdCBpc0x0ciA9IGRpcmVjdGlvbiA9PT0gTmJMYXlvdXREaXJlY3Rpb24uTFRSO1xuICAgIGNvbnN0IHN0YXJ0SWNvbkNsYXNzID0gaXNMdHIgPyAnbmItbGF5b3V0LXNpZGViYXItbGVmdCcgOiAnbmItbGF5b3V0LXNpZGViYXItcmlnaHQnO1xuICAgIGNvbnN0IGVuZEljb25DbGFzcyA9IGlzTHRyID8gJ25iLWxheW91dC1zaWRlYmFyLXJpZ2h0JyA6ICduYi1sYXlvdXQtc2lkZWJhci1sZWZ0JztcbiAgICBzdGFydFNpZGViYXIuaWNvbiA9IHN0YXJ0SWNvbkNsYXNzO1xuICAgIGVuZFNpZGViYXIuaWNvbiA9IGVuZEljb25DbGFzcztcbiAgfVxuXG4gIHNldExheW91dFN0YXRlKHN0YXRlOiBhbnkpOiBhbnkge1xuICAgIHRoaXMubGF5b3V0U3RhdGUkLm5leHQoc3RhdGUpO1xuICB9XG5cbiAgZ2V0TGF5b3V0U3RhdGVzKCk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMubGF5b3V0cyk7XG4gIH1cblxuICBvbkxheW91dFN0YXRlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMubGF5b3V0U3RhdGUkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgc2V0U2lkZWJhclN0YXRlKHN0YXRlOiBhbnkpOiBhbnkge1xuICAgIHRoaXMuc2lkZWJhclN0YXRlJC5uZXh0KHN0YXRlKTtcbiAgfVxuXG4gIGdldFNpZGViYXJTdGF0ZXMoKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIHJldHVybiBvYnNlcnZhYmxlT2YodGhpcy5zaWRlYmFycyk7XG4gIH1cblxuICBvblNpZGViYXJTdGF0ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnNpZGViYXJTdGF0ZSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbn1cbiJdfQ==