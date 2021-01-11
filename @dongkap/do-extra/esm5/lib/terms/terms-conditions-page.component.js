import { __extends } from "tslib";
import { Component, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from '@dongkap/do-common';
var TermsConditionsPageComponent = /** @class */ (function (_super) {
    __extends(TermsConditionsPageComponent, _super);
    function TermsConditionsPageComponent(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.destroy$ = new Subject();
        return _this;
    }
    TermsConditionsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var data = {
            'parameterCode': 'TERMS_CONDITIONS.DONGKAP'
        };
        this.http.HTTP_AUTH(this.api['master']['parameter'], data)
            .pipe(takeUntil(this.destroy$))
            .subscribe(function (response) {
            _this.content = response['parameterValue'];
        });
    };
    TermsConditionsPageComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    };
    TermsConditionsPageComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    TermsConditionsPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-terms-conditions-page',
                    template: "<!-- https://www.privacypolicyonline.com/live.php?token=c7NdqfNju6oyhdnlrnLPdskC3Pft3FuH -->\n<do-page-outlet [header]=\"'header.terms-conditions'\">\n  <div [innerHTML]=\"content\" pagecontent></div>\n</do-page-outlet>\n",
                    styles: [""]
                },] }
    ];
    TermsConditionsPageComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return TermsConditionsPageComponent;
}(BaseComponent));
export { TermsConditionsPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVybXMtY29uZGl0aW9ucy1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWV4dHJhLyIsInNvdXJjZXMiOlsibGliL3Rlcm1zL3Rlcm1zLWNvbmRpdGlvbnMtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3BELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRDtJQUtrRCxnREFBa0I7SUFLbEUsc0NBQW1CLFFBQWtCO1FBQXJDLFlBQ0Usa0JBQU0sUUFBUSxDQUFDLFNBQ2hCO1FBRmtCLGNBQVEsR0FBUixRQUFRLENBQVU7UUFGM0IsY0FBUSxHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDOztJQUl0RCxDQUFDO0lBRUQsK0NBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkMsSUFBTSxJQUFJLEdBQVE7WUFDaEIsZUFBZSxFQUFFLDBCQUEwQjtTQUM1QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUM7YUFDekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUyxDQUFDLFVBQUMsUUFBYTtZQUN2QixLQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGtEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Z0JBbkI0QixRQUFROzs7Z0JBVnRDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUVwQyx5T0FBcUQ7O2lCQUN0RDs7O2dCQVhtQixRQUFROztJQXNDNUIsbUNBQUM7Q0FBQSxBQS9CRCxDQUtrRCxhQUFhLEdBMEI5RDtTQTFCWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLXRlcm1zLWNvbmRpdGlvbnMtcGFnZScsXG4gIHN0eWxlVXJsczogWycuL3Rlcm1zLWNvbmRpdGlvbnMtcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vdGVybXMtY29uZGl0aW9ucy1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGVybXNDb25kaXRpb25zUGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwdWJsaWMgY29udGVudDogc3RyaW5nO1xuICBwcm90ZWN0ZWQgZGVzdHJveSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgJ3BhcmFtZXRlckNvZGUnOiAnVEVSTVNfQ09ORElUSU9OUy5ET05HS0FQJ1xuICAgIH07XG4gICAgdGhpcy5odHRwLkhUVFBfQVVUSCh0aGlzLmFwaVsnbWFzdGVyJ11bJ3BhcmFtZXRlciddLCBkYXRhKVxuICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICB0aGlzLmNvbnRlbnQgPSByZXNwb25zZVsncGFyYW1ldGVyVmFsdWUnXTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95JC51bnN1YnNjcmliZSgpO1xuICB9XG5cbn1cbiJdfQ==