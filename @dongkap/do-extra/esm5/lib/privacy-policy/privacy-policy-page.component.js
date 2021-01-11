import { __extends } from "tslib";
import { Component, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from '@dongkap/do-common';
var PrivacyPolicyPageComponent = /** @class */ (function (_super) {
    __extends(PrivacyPolicyPageComponent, _super);
    function PrivacyPolicyPageComponent(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.destroy$ = new Subject();
        return _this;
    }
    PrivacyPolicyPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var data = {
            'parameterCode': 'PRIVACY_POLICY.DONGKAP'
        };
        this.http.HTTP_AUTH(this.api['master']['parameter'], data)
            .pipe(takeUntil(this.destroy$))
            .subscribe(function (response) {
            _this.content = response['parameterValue'];
        });
    };
    PrivacyPolicyPageComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    };
    PrivacyPolicyPageComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    PrivacyPolicyPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-privacy-policy-page-page',
                    template: "<!-- https://www.privacypolicyonline.com/live.php?token=XnC0EXuhJuJgyXGsOZNL33fGEGwzLvlU -->\n<do-page-outlet [header]=\"'header.privacy-policy'\">\n  <div [innerHTML]=\"content\" pagecontent></div>\n</do-page-outlet>\n",
                    styles: [""]
                },] }
    ];
    PrivacyPolicyPageComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return PrivacyPolicyPageComponent;
}(BaseComponent));
export { PrivacyPolicyPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpdmFjeS1wb2xpY3ktcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1leHRyYS8iLCJzb3VyY2VzIjpbImxpYi9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5EO0lBS2dELDhDQUFrQjtJQUtoRSxvQ0FBbUIsUUFBa0I7UUFBckMsWUFDRSxrQkFBTSxRQUFRLENBQUMsU0FDaEI7UUFGa0IsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQUYzQixjQUFRLEdBQWlCLElBQUksT0FBTyxFQUFPLENBQUM7O0lBSXRELENBQUM7SUFFRCw2Q0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSQyxJQUFNLElBQUksR0FBUTtZQUNoQixlQUFlLEVBQUUsd0JBQXdCO1NBQzFDLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQzthQUN6RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsVUFBQyxRQUFhO1lBQ3ZCLEtBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0RBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QixDQUFDOztnQkFuQjRCLFFBQVE7OztnQkFWdEMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBRXZDLHVPQUFtRDs7aUJBQ3BEOzs7Z0JBWG1CLFFBQVE7O0lBc0M1QixpQ0FBQztDQUFBLEFBL0JELENBS2dELGFBQWEsR0EwQjVEO1NBMUJZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnQGRvbmdrYXAvZG8tY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tcHJpdmFjeS1wb2xpY3ktcGFnZS1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJpdmFjeS1wb2xpY3ktcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJpdmFjeS1wb2xpY3ktcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFByaXZhY3lQb2xpY3lQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBjb250ZW50OiBzdHJpbmc7XG4gIHByb3RlY3RlZCBkZXN0cm95JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBzdXBlcihpbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICAncGFyYW1ldGVyQ29kZSc6ICdQUklWQUNZX1BPTElDWS5ET05HS0FQJ1xuICAgIH07XG4gICAgdGhpcy5odHRwLkhUVFBfQVVUSCh0aGlzLmFwaVsnbWFzdGVyJ11bJ3BhcmFtZXRlciddLCBkYXRhKVxuICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICB0aGlzLmNvbnRlbnQgPSByZXNwb25zZVsncGFyYW1ldGVyVmFsdWUnXTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95JC51bnN1YnNjcmliZSgpO1xuICB9XG5cbn1cbiJdfQ==