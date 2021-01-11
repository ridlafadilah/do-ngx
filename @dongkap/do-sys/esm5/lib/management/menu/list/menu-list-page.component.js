import { __extends } from "tslib";
import { Component, Injector, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from '@dongkap/do-common';
import { MainMenuPageComponent } from '../main/main-menu-page.component';
import { ExtraMenuPageComponent } from '../extra/extra-menu-page.component';
var MenuListPageComponent = /** @class */ (function (_super) {
    __extends(MenuListPageComponent, _super);
    function MenuListPageComponent(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.loading = false;
        _this.tab = 'main';
        _this.destroy$ = new Subject();
        return _this;
    }
    MenuListPageComponent.prototype.ngOnInit = function () {
    };
    MenuListPageComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.next();
        this.destroy$.complete();
    };
    MenuListPageComponent.prototype.toggleLoadingAnimation = function (event) {
        var _this = this;
        this.tab = event.tabId;
        this.loading = true;
        if (this.tab === 'main') {
            this.mainMenu.loadDataMenu()
                .pipe(takeUntil(this.destroy$))
                .subscribe(function () {
                _this.loading = false;
            });
        }
        else {
            this.extraMenu.loadDataMenu()
                .pipe(takeUntil(this.destroy$))
                .subscribe(function () {
                _this.loading = false;
            });
        }
    };
    MenuListPageComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    MenuListPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-menu-list-page',
                    template: "<do-page-outlet [header]=\"'header.menu-management'\">\n  <nb-tabset fullWidth (changeTab)=\"toggleLoadingAnimation($event)\" pagecontent>\n    <nb-tab tabId=\"main\" tabTitle=\"{{'tab.main-menu' | translate}}\">\n      <do-main-menu-page #mainMenu></do-main-menu-page>\n    </nb-tab>\n    <nb-tab tabId=\"extra\" tabTitle=\"{{'tab.extra-menu' | translate}}\" [lazyLoad]=\"true\">\n      <do-extra-menu-page #extraMenu></do-extra-menu-page>\n    </nb-tab>\n  </nb-tabset>\n</do-page-outlet>\n",
                    styles: [".nb-theme-default :host nb-tab{flex:1;padding:1.5rem .25rem!important}.nb-theme-dark :host nb-tab{flex:1;padding:1.5rem .25rem!important}.nb-theme-cosmic :host nb-tab{flex:1;padding:1.5rem .25rem!important}.nb-theme-corporate :host nb-tab{flex:1;padding:1.5rem .25rem!important}"]
                },] }
    ];
    MenuListPageComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    MenuListPageComponent.propDecorators = {
        mainMenu: [{ type: ViewChild, args: ['mainMenu', { static: true },] }],
        extraMenu: [{ type: ViewChild, args: ['extraMenu', { static: true },] }]
    };
    return MenuListPageComponent;
}(BaseComponent));
export { MenuListPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1saXN0LXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tc3lzLyIsInNvdXJjZXMiOlsibGliL21hbmFnZW1lbnQvbWVudS9saXN0L21lbnUtbGlzdC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRy9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUU1RTtJQUsyQyx5Q0FBa0I7SUFTM0QsK0JBQW1CLFFBQWtCO1FBQXJDLFlBQ0Usa0JBQU0sUUFBUSxDQUFDLFNBQ2hCO1FBRmtCLGNBQVEsR0FBUixRQUFRLENBQVU7UUFQOUIsYUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixTQUFHLEdBQVcsTUFBTSxDQUFDO1FBQ2xCLGNBQVEsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQzs7SUFPdEQsQ0FBQztJQUVELHdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsMkNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsc0RBQXNCLEdBQXRCLFVBQXVCLEtBQVU7UUFBakMsaUJBZ0JDO1FBZkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxNQUFNLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUU7aUJBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUM5QixTQUFTLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUU7aUJBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUM5QixTQUFTLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O2dCQTdCNEIsUUFBUTs7O2dCQWR0QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFFN0Isd2ZBQThDOztpQkFDL0M7OztnQkFibUIsUUFBUTs7OzJCQW9CekIsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NEJBQ3RDLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQWlDMUMsNEJBQUM7Q0FBQSxBQTdDRCxDQUsyQyxhQUFhLEdBd0N2RDtTQXhDWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdG9yLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnQGRvbmdrYXAvZG8tY29tbW9uJztcbmltcG9ydCB7IE1haW5NZW51UGFnZUNvbXBvbmVudCB9IGZyb20gJy4uL21haW4vbWFpbi1tZW51LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEV4dHJhTWVudVBhZ2VDb21wb25lbnQgfSBmcm9tICcuLi9leHRyYS9leHRyYS1tZW51LXBhZ2UuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tbWVudS1saXN0LXBhZ2UnLFxuICBzdHlsZVVybHM6IFsnLi9tZW51LWxpc3QtcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVudS1saXN0LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNZW51TGlzdFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50PGFueT4gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHRhYjogc3RyaW5nID0gJ21haW4nO1xuICBwcm90ZWN0ZWQgZGVzdHJveSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBAVmlld0NoaWxkKCdtYWluTWVudScsIHsgc3RhdGljOiB0cnVlIH0pIG1haW5NZW51OiBNYWluTWVudVBhZ2VDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ2V4dHJhTWVudScsIHsgc3RhdGljOiB0cnVlIH0pIGV4dHJhTWVudTogRXh0cmFNZW51UGFnZUNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgdG9nZ2xlTG9hZGluZ0FuaW1hdGlvbihldmVudDogYW55KSB7XG4gICAgdGhpcy50YWIgPSBldmVudC50YWJJZDtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIGlmICh0aGlzLnRhYiA9PT0gJ21haW4nKSB7XG4gICAgICB0aGlzLm1haW5NZW51LmxvYWREYXRhTWVudSgpXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5leHRyYU1lbnUubG9hZERhdGFNZW51KClcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=