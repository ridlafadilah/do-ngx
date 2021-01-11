import { Component, Injector, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from '@dongkap/do-common';
import { MainMenuPageComponent } from '../main/main-menu-page.component';
import { ExtraMenuPageComponent } from '../extra/extra-menu-page.component';
export class MenuListPageComponent extends BaseComponent {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.loading = false;
        this.tab = 'main';
        this.destroy$ = new Subject();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.next();
        this.destroy$.complete();
    }
    toggleLoadingAnimation(event) {
        this.tab = event.tabId;
        this.loading = true;
        if (this.tab === 'main') {
            this.mainMenu.loadDataMenu()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.loading = false;
            });
        }
        else {
            this.extraMenu.loadDataMenu()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.loading = false;
            });
        }
    }
}
MenuListPageComponent.ctorParameters = () => [
    { type: Injector }
];
MenuListPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-menu-list-page',
                template: "<do-page-outlet [header]=\"'header.menu-management'\">\n  <nb-tabset fullWidth (changeTab)=\"toggleLoadingAnimation($event)\" pagecontent>\n    <nb-tab tabId=\"main\" tabTitle=\"{{'tab.main-menu' | translate}}\">\n      <do-main-menu-page #mainMenu></do-main-menu-page>\n    </nb-tab>\n    <nb-tab tabId=\"extra\" tabTitle=\"{{'tab.extra-menu' | translate}}\" [lazyLoad]=\"true\">\n      <do-extra-menu-page #extraMenu></do-extra-menu-page>\n    </nb-tab>\n  </nb-tabset>\n</do-page-outlet>\n",
                styles: [".nb-theme-default :host nb-tab{flex:1;padding:1.5rem .25rem!important}.nb-theme-dark :host nb-tab{flex:1;padding:1.5rem .25rem!important}.nb-theme-cosmic :host nb-tab{flex:1;padding:1.5rem .25rem!important}.nb-theme-corporate :host nb-tab{flex:1;padding:1.5rem .25rem!important}"]
            },] }
];
MenuListPageComponent.ctorParameters = () => [
    { type: Injector }
];
MenuListPageComponent.propDecorators = {
    mainMenu: [{ type: ViewChild, args: ['mainMenu', { static: true },] }],
    extraMenu: [{ type: ViewChild, args: ['extraMenu', { static: true },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1saXN0LXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tc3lzLyIsInNvdXJjZXMiOlsibGliL21hbmFnZW1lbnQvbWVudS9saXN0L21lbnUtbGlzdC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBTzVFLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxhQUFrQjtJQVMzRCxZQUFtQixRQUFrQjtRQUNuQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFEQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBUDlCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsUUFBRyxHQUFXLE1BQU0sQ0FBQztRQUNsQixhQUFRLEdBQWlCLElBQUksT0FBTyxFQUFPLENBQUM7SUFPdEQsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsc0JBQXNCLENBQUMsS0FBVTtRQUMvQixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLE1BQU0sRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRTtpQkFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzlCLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUU7aUJBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUM5QixTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7WUE3QjRCLFFBQVE7OztZQWR0QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFFN0Isd2ZBQThDOzthQUMvQzs7O1lBYm1CLFFBQVE7Ozt1QkFvQnpCLFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3dCQUN0QyxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICdAZG9uZ2thcC9kby1jb21tb24nO1xuaW1wb3J0IHsgTWFpbk1lbnVQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFpbi9tYWluLW1lbnUtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXh0cmFNZW51UGFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2V4dHJhL2V4dHJhLW1lbnUtcGFnZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1tZW51LWxpc3QtcGFnZScsXG4gIHN0eWxlVXJsczogWycuL21lbnUtbGlzdC1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9tZW51LWxpc3QtcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVMaXN0UGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgdGFiOiBzdHJpbmcgPSAnbWFpbic7XG4gIHByb3RlY3RlZCBkZXN0cm95JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ21haW5NZW51JywgeyBzdGF0aWM6IHRydWUgfSkgbWFpbk1lbnU6IE1haW5NZW51UGFnZUNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnZXh0cmFNZW51JywgeyBzdGF0aWM6IHRydWUgfSkgZXh0cmFNZW51OiBFeHRyYU1lbnVQYWdlQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBzdXBlcihpbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICB0b2dnbGVMb2FkaW5nQW5pbWF0aW9uKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnRhYiA9IGV2ZW50LnRhYklkO1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgaWYgKHRoaXMudGFiID09PSAnbWFpbicpIHtcbiAgICAgIHRoaXMubWFpbk1lbnUubG9hZERhdGFNZW51KClcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmV4dHJhTWVudS5sb2FkRGF0YU1lbnUoKVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==