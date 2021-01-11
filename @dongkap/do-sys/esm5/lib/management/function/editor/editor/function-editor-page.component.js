import { __extends } from "tslib";
import { Component, Injector, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from '@dongkap/do-common';
import { FunctionMainPageComponent } from '../main/function-main-page.component';
import { FunctionExtraPageComponent } from '../extra/function-extra-page.component';
import { FunctionControlService } from '../../services/function-control.service';
var FunctionEditorPageComponent = /** @class */ (function (_super) {
    __extends(FunctionEditorPageComponent, _super);
    function FunctionEditorPageComponent(injector, router, functionControlService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.router = router;
        _this.functionControlService = functionControlService;
        _this.loading = false;
        _this.tab = 'main';
        _this.destroy$ = new Subject();
        if (functionControlService.getRole()) {
            _this.title = functionControlService.getRole().description;
        }
        else {
            _this.router.navigate(['/app/mgmt/function/control']);
        }
        return _this;
    }
    FunctionEditorPageComponent.prototype.ngOnInit = function () {
    };
    FunctionEditorPageComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.next();
        this.destroy$.complete();
    };
    FunctionEditorPageComponent.prototype.toggleLoadingAnimation = function (event) {
        var _this = this;
        if (!this.functionControlService.getRole()) {
            this.router.navigate(['/app/mgmt/function/control']);
            return;
        }
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
    FunctionEditorPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: FunctionControlService }
    ]; };
    FunctionEditorPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-function-editor-page',
                    template: "<do-page-outlet [header]=\"'header.function-control'\" [param]=\"{value: title}\">\n  <nb-tabset fullWidth (changeTab)=\"toggleLoadingAnimation($event)\" pagecontent>\n    <nb-tab tabId=\"main\" tabTitle=\"{{'tab.main-menu' | translate}}\" [nbSpinner]=\"loading\" nbSpinnerStatus=\"info\" nbSpinnerSize=\"giant\">\n      <do-function-main-page #mainFunction></do-function-main-page>\n    </nb-tab>\n    <nb-tab tabId=\"extra\" tabTitle=\"{{'tab.extra-menu' | translate}}\" [lazyLoad]=\"true\" [nbSpinner]=\"loading\" nbSpinnerStatus=\"info\" nbSpinnerSize=\"giant\">\n      <do-function-extra-page #extraFunction></do-function-extra-page>\n    </nb-tab>\n  </nb-tabset>\n</do-page-outlet>\n",
                    styles: [".nb-theme-default :host nb-tab{flex:1;padding:1.5rem .25rem!important}.nb-theme-dark :host nb-tab{flex:1;padding:1.5rem .25rem!important}.nb-theme-cosmic :host nb-tab{flex:1;padding:1.5rem .25rem!important}.nb-theme-corporate :host nb-tab{flex:1;padding:1.5rem .25rem!important}"]
                },] }
    ];
    FunctionEditorPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: FunctionControlService }
    ]; };
    FunctionEditorPageComponent.propDecorators = {
        mainMenu: [{ type: ViewChild, args: ['mainFunction', { static: true },] }],
        extraMenu: [{ type: ViewChild, args: ['extraFunction', { static: true },] }]
    };
    return FunctionEditorPageComponent;
}(BaseComponent));
export { FunctionEditorPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24tZWRpdG9yLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tc3lzLyIsInNvdXJjZXMiOlsibGliL21hbmFnZW1lbnQvZnVuY3Rpb24vZWRpdG9yL2VkaXRvci9mdW5jdGlvbi1lZGl0b3ItcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRWpGO0lBS2lELCtDQUFrQjtJQVVqRSxxQ0FBbUIsUUFBa0IsRUFBVSxNQUFjLEVBQVUsc0JBQThDO1FBQXJILFlBQ0Usa0JBQU0sUUFBUSxDQUFDLFNBTWhCO1FBUGtCLGNBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQVI5RyxhQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFNBQUcsR0FBVyxNQUFNLENBQUM7UUFFbEIsY0FBUSxHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBT3BELElBQUksc0JBQXNCLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDcEMsS0FBSSxDQUFDLEtBQUssR0FBRyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUM7U0FDM0Q7YUFBTTtZQUNMLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1NBQ3REOztJQUNILENBQUM7SUFFRCw4Q0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELGlEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELDREQUFzQixHQUF0QixVQUF1QixLQUFVO1FBQWpDLGlCQW9CQztRQW5CQyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1lBQ3JELE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssTUFBTSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFO2lCQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDOUIsU0FBUyxDQUFDO2dCQUNULEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFO2lCQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDOUIsU0FBUyxDQUFDO2dCQUNULEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztnQkF0QzRCLFFBQVE7Z0JBQWtCLE1BQU07Z0JBQWtDLHNCQUFzQjs7O2dCQWZ0SCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFFbkMsOHJCQUFvRDs7aUJBQ3JEOzs7Z0JBZm1CLFFBQVE7Z0JBR25CLE1BQU07Z0JBTU4sc0JBQXNCOzs7MkJBYzVCLFNBQVMsU0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzRCQUMxQyxTQUFTLFNBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUEwQzlDLGtDQUFDO0NBQUEsQUF2REQsQ0FLaUQsYUFBYSxHQWtEN0Q7U0FsRFksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICdAZG9uZ2thcC9kby1jb21tb24nO1xuaW1wb3J0IHsgRnVuY3Rpb25NYWluUGFnZUNvbXBvbmVudCB9IGZyb20gJy4uL21haW4vZnVuY3Rpb24tbWFpbi1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGdW5jdGlvbkV4dHJhUGFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2V4dHJhL2Z1bmN0aW9uLWV4dHJhLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEZ1bmN0aW9uQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mdW5jdGlvbi1jb250cm9sLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1mdW5jdGlvbi1lZGl0b3ItcGFnZScsXG4gIHN0eWxlVXJsczogWycuL2Z1bmN0aW9uLWVkaXRvci1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9mdW5jdGlvbi1lZGl0b3ItcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uRWRpdG9yUGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgdGFiOiBzdHJpbmcgPSAnbWFpbic7XG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuICBwcm90ZWN0ZWQgZGVzdHJveSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBAVmlld0NoaWxkKCdtYWluRnVuY3Rpb24nLCB7IHN0YXRpYzogdHJ1ZSB9KSBtYWluTWVudTogRnVuY3Rpb25NYWluUGFnZUNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnZXh0cmFGdW5jdGlvbicsIHsgc3RhdGljOiB0cnVlIH0pIGV4dHJhTWVudTogRnVuY3Rpb25FeHRyYVBhZ2VDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBmdW5jdGlvbkNvbnRyb2xTZXJ2aWNlOiBGdW5jdGlvbkNvbnRyb2xTZXJ2aWNlKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IpO1xuICAgIGlmIChmdW5jdGlvbkNvbnRyb2xTZXJ2aWNlLmdldFJvbGUoKSkge1xuICAgICAgdGhpcy50aXRsZSA9IGZ1bmN0aW9uQ29udHJvbFNlcnZpY2UuZ2V0Um9sZSgpLmRlc2NyaXB0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvbWdtdC9mdW5jdGlvbi9jb250cm9sJ10pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHRvZ2dsZUxvYWRpbmdBbmltYXRpb24oZXZlbnQ6IGFueSkge1xuICAgIGlmICghdGhpcy5mdW5jdGlvbkNvbnRyb2xTZXJ2aWNlLmdldFJvbGUoKSkge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL21nbXQvZnVuY3Rpb24vY29udHJvbCddKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50YWIgPSBldmVudC50YWJJZDtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIGlmICh0aGlzLnRhYiA9PT0gJ21haW4nKSB7XG4gICAgICB0aGlzLm1haW5NZW51LmxvYWREYXRhTWVudSgpXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5leHRyYU1lbnUubG9hZERhdGFNZW51KClcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=