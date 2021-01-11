import { __extends } from "tslib";
import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { BaseFormComponent } from '@dongkap/do-common';
import { ManagementUserService } from '../../services/mgmt-user.service';
var MgmtAdminDetailPageComponent = /** @class */ (function (_super) {
    __extends(MgmtAdminDetailPageComponent, _super);
    function MgmtAdminDetailPageComponent(injector, router, userService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.router = router;
        _this.userService = userService;
        _this.profile = {};
        _this.imageDefault = document.getElementsByTagName('base')[0].href + "/assets/images/avatars/default.png";
        return _this;
    }
    MgmtAdminDetailPageComponent.prototype.ngOnInit = function () {
        this.onInit('security', 'get-profile-system-other');
    };
    MgmtAdminDetailPageComponent.prototype.onInit = function (serviceName, apiName) {
        var _this = this;
        if (!this.userService.getUser()) {
            this.router.navigate(['/app/mgmt/user/admin']);
            return;
        }
        this.loadingForm = true;
        var data = {
            username: this.userService.getUser().username,
        };
        this.exec(serviceName, apiName, data)
            .pipe(takeUntil(this.destroy$))
            .subscribe(function (success) {
            _this.loadingForm = false;
            _this.profile = success;
            if (success['image']) {
                _this.image = success['image'];
            }
        }, function (error) {
            _this.loadingForm = true;
            var err = error['error'];
            if (err) {
                _this.toastr.showI18n(err.respStatusMessage[err.respStatusCode], true, null, 'danger');
            }
            else {
                _this.toastr.showI18n(err, true, null, 'danger');
            }
        });
    };
    MgmtAdminDetailPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: ManagementUserService }
    ]; };
    MgmtAdminDetailPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-mgmt-admin-detail-page',
                    template: "<do-page-outlet [url]=\"'/app/mgmt/user/admin'\" [header]=\"'header.admin-profile'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n      <div class=\"photo-profile\"\n        [ngStyle]=\"{ \n          'background-image': 'url(' + (image? image: imageDefault) + ')'\n        }\">\n      </div>\n    </div>\n    <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n      <do-label-text\n        [label]=\"'Name'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.name\"\n        [skeleton]=\"loadingForm\">\n      </do-label-text>\n      <do-label-text\n        [label]=\"'Username'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.username\"\n        [skeleton]=\"loadingForm\">\n      </do-label-text>\n      <do-label-text\n        [label]=\"'Email'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.email\"\n        [skeleton]=\"loadingForm\">\n      </do-label-text>\n      <do-label-text\n        [label]=\"'Phone Number'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.phoneNumber\"\n        [skeleton]=\"loadingForm\">\n      </do-label-text>\n      <do-label-text\n        [label]=\"'Address'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.address\"\n        [skeleton]=\"loadingForm\">\n      </do-label-text>\n      <do-label-text\n        [label]=\"'Country'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.country\"\n        [skeleton]=\"loadingForm\">\n      </do-label-text>\n    </div>\n  </div>\n</do-page-outlet>\n",
                    styles: [".nb-theme-default :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-default :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-dark :host .split-row{border-bottom:1px solid #151a30;margin-bottom:1rem}.nb-theme-dark :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-cosmic :host .split-row{border-bottom:1px solid #1b1b38;margin-bottom:1rem}.nb-theme-cosmic :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-corporate :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-corporate :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}"]
                },] }
    ];
    MgmtAdminDetailPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: ManagementUserService }
    ]; };
    return MgmtAdminDetailPageComponent;
}(BaseFormComponent));
export { MgmtAdminDetailPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWdtdC1hZG1pbi1kZXRhaWwtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1zeXMvIiwic291cmNlcyI6WyJsaWIvbWFuYWdlbWVudC91c2VyL2FkbWluL2RldGFpbC9tZ210LWFkbWluLWRldGFpbC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUV6RTtJQUtrRCxnREFBc0I7SUFNdEUsc0NBQ1MsUUFBa0IsRUFDakIsTUFBYyxFQUNkLFdBQWtDO1FBSDVDLFlBSUUsa0JBQU0sUUFBUSxDQUFDLFNBQ2hCO1FBSlEsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQUNqQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsaUJBQVcsR0FBWCxXQUFXLENBQXVCO1FBUHJDLGFBQU8sR0FBUSxFQUFFLENBQUM7UUFFbEIsa0JBQVksR0FBYyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSx1Q0FBb0MsQ0FBQzs7SUFPbkgsQ0FBQztJQUVELCtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCw2Q0FBTSxHQUFOLFVBQU8sV0FBbUIsRUFBRSxPQUFlO1FBQTNDLGlCQTZCQztRQTVCQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztZQUMvQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFNLElBQUksR0FBUTtZQUNoQixRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRO1NBQzlDLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDO2FBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCLFNBQVMsQ0FDUixVQUFDLE9BQVk7WUFDWCxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDcEIsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDL0I7UUFDSCxDQUFDLEVBQ0QsVUFBQyxLQUF3QjtZQUN2QixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFNLEdBQUcsR0FBb0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVDLElBQUksR0FBRyxFQUFFO2dCQUNQLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQzthQUN2RjtpQkFBTTtnQkFDTCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQzthQUN4RDtRQUNILENBQUMsQ0FDRixDQUFDO0lBQ04sQ0FBQzs7Z0JBdkNrQixRQUFRO2dCQUNULE1BQU07Z0JBQ0QscUJBQXFCOzs7Z0JBZDdDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUVyQyw2cERBQXNEOztpQkFDdkQ7OztnQkFibUIsUUFBUTtnQkFHbkIsTUFBTTtnQkFJTixxQkFBcUI7O0lBdUQ5QixtQ0FBQztDQUFBLEFBckRELENBS2tELGlCQUFpQixHQWdEbEU7U0FoRFksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBcGlCYXNlUmVzcG9uc2UgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEJhc2VGb3JtQ29tcG9uZW50IH0gZnJvbSAnQGRvbmdrYXAvZG8tY29tbW9uJztcbmltcG9ydCB7IE1hbmFnZW1lbnRVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21nbXQtdXNlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tbWdtdC1hZG1pbi1kZXRhaWwtcGFnZScsXG4gIHN0eWxlVXJsczogWycuL21nbXQtYWRtaW4tZGV0YWlsLXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL21nbXQtYWRtaW4tZGV0YWlsLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNZ210QWRtaW5EZXRhaWxQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZvcm1Db21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIHByb2ZpbGU6IGFueSA9IHt9O1xuICBwdWJsaWMgaW1hZ2U6IHN0cmluZztcbiAgcHVibGljIGltYWdlRGVmYXVsdDogc3RyaW5nID0gYCR7ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Jhc2UnKVswXS5ocmVmfS9hc3NldHMvaW1hZ2VzL2F2YXRhcnMvZGVmYXVsdC5wbmdgO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBNYW5hZ2VtZW50VXNlclNlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm9uSW5pdCgnc2VjdXJpdHknLCAnZ2V0LXByb2ZpbGUtc3lzdGVtLW90aGVyJyk7XG4gIH1cblxuICBvbkluaXQoc2VydmljZU5hbWU6IHN0cmluZywgYXBpTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnVzZXJTZXJ2aWNlLmdldFVzZXIoKSkge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL21nbXQvdXNlci9hZG1pbiddKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5sb2FkaW5nRm9ybSA9IHRydWU7XG4gICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgdXNlcm5hbWU6IHRoaXMudXNlclNlcnZpY2UuZ2V0VXNlcigpLnVzZXJuYW1lLFxuICAgIH07XG4gICAgdGhpcy5leGVjKHNlcnZpY2VOYW1lLCBhcGlOYW1lLCBkYXRhKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHN1Y2Nlc3M6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZ0Zvcm0gPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnByb2ZpbGUgPSBzdWNjZXNzO1xuICAgICAgICAgIGlmIChzdWNjZXNzWydpbWFnZSddKSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlID0gc3VjY2Vzc1snaW1hZ2UnXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gdHJ1ZTtcbiAgICAgICAgICBjb25zdCBlcnI6IEFwaUJhc2VSZXNwb25zZSA9IGVycm9yWydlcnJvciddO1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVyci5yZXNwU3RhdHVzTWVzc2FnZVtlcnIucmVzcFN0YXR1c0NvZGVdLCB0cnVlLCBudWxsLCAnZGFuZ2VyJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVyciBhcyBhbnksIHRydWUsIG51bGwsICdkYW5nZXInKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICApO1xuICB9XG5cbn1cbiJdfQ==