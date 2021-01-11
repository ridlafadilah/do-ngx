import { __extends } from "tslib";
import { Component, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { ResponseCode, LocaleModel } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-common';
import { ParameterService } from '../../services/parameter.service';
import { ParameterModel, ParameterGroupModel } from '../../models/parameter.model';
var ParameterDoDetailPageComponent = /** @class */ (function (_super) {
    __extends(ParameterDoDetailPageComponent, _super);
    function ParameterDoDetailPageComponent(injector, router, parameterService, route) {
        var _this = _super.call(this, injector, {
            'parameterCode': [],
            'en-US': [],
            'id-ID': [],
        }) || this;
        _this.injector = injector;
        _this.router = router;
        _this.parameterService = parameterService;
        _this.route = route;
        _this.action = 'Add';
        _this.parameter = new ParameterModel();
        _this.parameterGroup = new ParameterGroupModel();
        _this.allLocales = [];
        _this.locales = [];
        _this.localeDefault = new LocaleModel();
        _this.isEdit = false;
        if (_this.parameterService.getParameterGroup()) {
            _this.parameterGroup = _this.parameterService.getParameterGroup();
            if ((_this.route.snapshot.params['action'] === 'edit')) {
                if (_this.parameterService.getParameter()) {
                    _this.action = 'Edit';
                    _this.isEdit = true;
                    _this.parameter = _this.parameterService.getParameter();
                }
                else {
                    _this.router.navigate(['/app/sysconf/parameter']);
                }
            }
            if (!_this.parameterService.getLocales()) {
                _this.apiPathLocale = _this.api['master']['all-locale'];
                _this.http.HTTP_AUTH(_this.apiPathLocale).subscribe(function (response) {
                    _this.parameterService.setLocales(response);
                    _this.splitLocale(response);
                });
            }
            else {
                _this.splitLocale(_this.parameterService.getLocales());
            }
            if (_this.isEdit) {
                _this.formGroup.get('parameterCode').setValue(_this.parameter.parameterCode);
                _this.formGroup.get('parameterCode').disable({ emitEvent: true });
                _this.apiPathParameterI18n = _this.api['master']['all-parameter-i18n'];
                _this.loadingForm = true;
                _this.http.HTTP_AUTH(_this.apiPathParameterI18n, {
                    'parameterCode': _this.parameter.parameterCode,
                }).subscribe(function (response) {
                    response.forEach(function (data) {
                        _this.formGroup.get(data.locale).setValue(data.parameterValue);
                        _this.loadingForm = false;
                    });
                });
            }
        }
        else {
            _this.router.navigate(['/app/sysconf/parameter']);
        }
        return _this;
    }
    ParameterDoDetailPageComponent.prototype.splitLocale = function (values) {
        var _this = this;
        this.allLocales = values;
        values.forEach(function (data) {
            if (data.localeDefault) {
                _this.localeDefault = data;
            }
            else {
                _this.locales.push(data);
            }
            _this.formGroup.removeControl(data.localeCode);
            _this.formGroup.addControl(data.localeCode, new FormControl());
        });
    };
    ParameterDoDetailPageComponent.prototype.ngOnInit = function () { };
    ParameterDoDetailPageComponent.prototype.onReset = function () {
        this.router.navigate(['/app/sysconf/parameter/detail']);
    };
    ParameterDoDetailPageComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = this.formGroup.value;
        if (this.isEdit)
            data.parameterCode = this.parameter.parameterCode;
        data.parameterGroupCode = this.parameterGroup.parameterGroupCode;
        data.parameterValues = {};
        this.allLocales.forEach(function (value) {
            data.parameterValues[value.localeCode] = _this.formGroup.get(value.localeCode).value;
        });
        _super.prototype.onSubmit.call(this, data, 'master', 'post-parameter-i18n')
            .pipe(takeUntil(this.destroy$))
            .subscribe(function (response) {
            if (response.respStatusCode === ResponseCode.OK_SCR009.toString()) {
                _this.router.navigate(['/app/sysconf/parameter/detail']);
            }
        });
    };
    ParameterDoDetailPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: ParameterService },
        { type: ActivatedRoute }
    ]; };
    ParameterDoDetailPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-parameter-do-detail-page',
                    template: "<do-page-outlet [header]=\"action + ' Parameter'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'parameterCode'\"\n          [label]=\"'Parameter Code'\"\n          [required]=\"!isEdit\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"parameterCode\">\n        </do-input-text>\n        <div class=\"header\">\n          <div class=\"form-group row\">\n            <label\n              for=\"Parameter Value\"\n              class=\"label col-sm-3 col-form-label\"\n              *ngIf=\"!loadingForm; else labelskeleton\">\n              {{'Parameter Value' | translate}}\n            </label>\n            <ng-template #labelskeleton>\n              <div class=\"col-sm-3\">\n                <div\n                  [ngClass]=\"{\n                    'label-skeleton': true,\n                    'skeleton': loadingForm\n                  }\">\n                </div>\n              </div>\n            </ng-template>\n            <div class=\"col-sm-9\">\n              <do-input-icon *ngIf=\"localeDefault.localeCode\"\n                [name]=\"localeDefault.localeCode\"\n                [nolabel]=\"true\"\n                [required]=\"true\"\n                [colLabel]=\"0\"\n                [colInput]=\"12\"\n                [icon]=\"'flag-icon flag-icon-' + localeDefault.icon\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"{{localeDefault.localeCode}}\">\n              </do-input-icon>\n            </div>\n          </div>\n        </div>\n        <do-input-icon *ngFor=\"let i18n of locales\"\n          [name]=\"i18n.localeCode\"\n          [nolabel]=\"true\"\n          [icon]=\"'flag-icon flag-icon-'+ i18n.icon\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"{{i18n.localeCode}}\">\n        </do-input-icon>\n        <div class=\"form-group row\">\n          <div class=\"offset-sm-3 col-sm-9\" *ngIf=\"!loadingForm; else buttonskeleton\">\n            <button\n              type=\"reset\"\n              status=\"danger\"\n              (click)=\"onReset()\"\n              class=\"reset-left\"\n              nbButton>\n              {{ 'Cancel' | translate}}\n            </button>\n            <button\n              type=\"submit\"\n              status=\"primary\"\n              (click)=\"onSubmit()\"\n              [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n              class=\"submit-right\"\n              nbButton>\n              {{ action | translate}}\n            </button>\n          </div>\n          <ng-template #buttonskeleton>\n            <div class=\"offset-sm-3 col-sm-9\">\n              <div\n                [ngClass]=\"{\n                  'button-skeleton': true,\n                  'skeleton': loadingForm\n                }\">\n              </div>\n            </div>\n          </ng-template>\n        </div>\n      </form>\n    </div>\n  </div>\n</do-page-outlet>\n",
                    styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}"]
                },] }
    ];
    ParameterDoDetailPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: ParameterService },
        { type: ActivatedRoute }
    ]; };
    return ParameterDoDetailPageComponent;
}(BaseFormComponent));
export { ParameterDoDetailPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLWRvLWRldGFpbC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9wYXJhbWV0ZXIvZGV0YWlsL2RvL3BhcmFtZXRlci1kby1kZXRhaWwtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQWtDLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM3RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXZHO0lBS29ELGtEQUFzQjtJQVl4RSx3Q0FBbUIsUUFBa0IsRUFDM0IsTUFBYyxFQUNkLGdCQUFrQyxFQUNsQyxLQUFxQjtRQUgvQixZQUlFLGtCQUFNLFFBQVEsRUFBRTtZQUNkLGVBQWUsRUFBRSxFQUFFO1lBQ25CLE9BQU8sRUFBRSxFQUFFO1lBQ1gsT0FBTyxFQUFFLEVBQUU7U0FDWixDQUFDLFNBc0NIO1FBOUNrQixjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQzNCLFlBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFdBQUssR0FBTCxLQUFLLENBQWdCO1FBYnhCLFlBQU0sR0FBbUIsS0FBSyxDQUFDO1FBQy9CLGVBQVMsR0FBbUIsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUNqRCxvQkFBYyxHQUF3QixJQUFJLG1CQUFtQixFQUFFLENBQUM7UUFDaEUsZ0JBQVUsR0FBa0IsRUFBRSxDQUFDO1FBQy9CLGFBQU8sR0FBa0IsRUFBRSxDQUFDO1FBQzVCLG1CQUFhLEdBQWdCLElBQUksV0FBVyxFQUFFLENBQUM7UUFDL0MsWUFBTSxHQUFZLEtBQUssQ0FBQztRQWE3QixJQUFJLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFO1lBQzdDLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDaEUsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxNQUFNLENBQUMsRUFBRTtnQkFDckQsSUFBSSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLEVBQUU7b0JBQ3hDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO29CQUNyQixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDbkIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQ3ZEO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO2lCQUNsRDthQUNGO1lBQ0QsSUFBSSxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsRUFBRTtnQkFDdkMsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN0RCxLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtvQkFDeEQsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDM0MsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDN0IsQ0FBQyxDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO2FBQ3REO1lBQ0QsSUFBSSxLQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzRSxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztnQkFDL0QsS0FBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDckUsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxvQkFBb0IsRUFBRTtvQkFDN0MsZUFBZSxFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYTtpQkFDOUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQThCO29CQUMxQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTt3QkFDbkIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7d0JBQzlELEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO29CQUMzQixDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7YUFBTTtZQUNMLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1NBQ2xEOztJQUNILENBQUM7SUFFRCxvREFBVyxHQUFYLFVBQVksTUFBcUI7UUFBakMsaUJBV0M7UUFWQyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUNqQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2FBQzNCO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pCO1lBQ0QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlEQUFRLEdBQVIsY0FBa0IsQ0FBQztJQUVuQixnREFBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELGlEQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRDLElBQU0sSUFBSSxHQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQ3ZDLElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBQ25FLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDO1FBQ2pFLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztZQUMzQixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3RGLENBQUMsQ0FBQyxDQUFDO1FBQ0YsaUJBQU0sUUFBUSxZQUFDLElBQUksRUFBRSxRQUFRLEVBQUUscUJBQXFCLENBQWtDO2FBQ3BGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCLFNBQVMsQ0FBQyxVQUFBLFFBQVE7WUFDakIsSUFBSSxRQUFRLENBQUMsY0FBYyxLQUFLLFlBQVksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQ2pFLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO2FBQ3pEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztnQkFsRjRCLFFBQVE7Z0JBQ25CLE1BQU07Z0JBQ0ksZ0JBQWdCO2dCQUMzQixjQUFjOzs7Z0JBcEJoQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtvQkFFdkMscS9GQUF3RDs7aUJBQ3pEOzs7Z0JBZm1CLFFBQVE7Z0JBRW5CLE1BQU07Z0JBTU4sZ0JBQWdCO2dCQU5SLGNBQWM7O0lBOEcvQixxQ0FBQztDQUFBLEFBckdELENBS29ELGlCQUFpQixHQWdHcEU7U0FoR1ksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSHR0cEJhc2VNb2RlbCwgQXBpQmFzZVJlc3BvbnNlLCBSZXNwb25zZUNvZGUsIExvY2FsZU1vZGVsIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBCYXNlRm9ybUNvbXBvbmVudCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvbW1vbic7XG5pbXBvcnQgeyBQYXJhbWV0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcGFyYW1ldGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFyYW1ldGVyTW9kZWwsIFBhcmFtZXRlckkxOG5Nb2RlbCwgUGFyYW1ldGVyR3JvdXBNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9wYXJhbWV0ZXIubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1wYXJhbWV0ZXItZG8tZGV0YWlsLXBhZ2UnLFxuICBzdHlsZVVybHM6IFsnLi9wYXJhbWV0ZXItZG8tZGV0YWlsLXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhcmFtZXRlci1kby1kZXRhaWwtcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlckRvRGV0YWlsUGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGb3JtQ29tcG9uZW50PGFueT4gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBhY3Rpb246ICdBZGQnIHwgJ0VkaXQnID0gJ0FkZCc7XG4gIHB1YmxpYyBwYXJhbWV0ZXI6IFBhcmFtZXRlck1vZGVsID0gbmV3IFBhcmFtZXRlck1vZGVsKCk7XG4gIHB1YmxpYyBwYXJhbWV0ZXJHcm91cDogUGFyYW1ldGVyR3JvdXBNb2RlbCA9IG5ldyBQYXJhbWV0ZXJHcm91cE1vZGVsKCk7XG4gIHB1YmxpYyBhbGxMb2NhbGVzOiBMb2NhbGVNb2RlbFtdID0gW107XG4gIHB1YmxpYyBsb2NhbGVzOiBMb2NhbGVNb2RlbFtdID0gW107XG4gIHB1YmxpYyBsb2NhbGVEZWZhdWx0OiBMb2NhbGVNb2RlbCA9IG5ldyBMb2NhbGVNb2RlbCgpO1xuICBwdWJsaWMgaXNFZGl0OiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBhcGlQYXRoUGFyYW1ldGVySTE4bjogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIGFwaVBhdGhMb2NhbGU6IEh0dHBCYXNlTW9kZWw7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcGFyYW1ldGVyU2VydmljZTogUGFyYW1ldGVyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIHN1cGVyKGluamVjdG9yLCB7XG4gICAgICAncGFyYW1ldGVyQ29kZSc6IFtdLFxuICAgICAgJ2VuLVVTJzogW10sXG4gICAgICAnaWQtSUQnOiBbXSxcbiAgICB9KTtcbiAgICBpZiAodGhpcy5wYXJhbWV0ZXJTZXJ2aWNlLmdldFBhcmFtZXRlckdyb3VwKCkpIHtcbiAgICAgIHRoaXMucGFyYW1ldGVyR3JvdXAgPSB0aGlzLnBhcmFtZXRlclNlcnZpY2UuZ2V0UGFyYW1ldGVyR3JvdXAoKTtcbiAgICAgIGlmICgodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2FjdGlvbiddID09PSAnZWRpdCcpKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmFtZXRlclNlcnZpY2UuZ2V0UGFyYW1ldGVyKCkpIHtcbiAgICAgICAgICB0aGlzLmFjdGlvbiA9ICdFZGl0JztcbiAgICAgICAgICB0aGlzLmlzRWRpdCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5wYXJhbWV0ZXIgPSB0aGlzLnBhcmFtZXRlclNlcnZpY2UuZ2V0UGFyYW1ldGVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL3N5c2NvbmYvcGFyYW1ldGVyJ10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMucGFyYW1ldGVyU2VydmljZS5nZXRMb2NhbGVzKCkpIHtcbiAgICAgICAgdGhpcy5hcGlQYXRoTG9jYWxlID0gdGhpcy5hcGlbJ21hc3RlciddWydhbGwtbG9jYWxlJ107XG4gICAgICAgIHRoaXMuaHR0cC5IVFRQX0FVVEgodGhpcy5hcGlQYXRoTG9jYWxlKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHRoaXMucGFyYW1ldGVyU2VydmljZS5zZXRMb2NhbGVzKHJlc3BvbnNlKTtcbiAgICAgICAgICB0aGlzLnNwbGl0TG9jYWxlKHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNwbGl0TG9jYWxlKHRoaXMucGFyYW1ldGVyU2VydmljZS5nZXRMb2NhbGVzKCkpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXNFZGl0KSB7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgncGFyYW1ldGVyQ29kZScpLnNldFZhbHVlKHRoaXMucGFyYW1ldGVyLnBhcmFtZXRlckNvZGUpO1xuICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3BhcmFtZXRlckNvZGUnKS5kaXNhYmxlKHtlbWl0RXZlbnQ6IHRydWV9KTtcbiAgICAgICAgdGhpcy5hcGlQYXRoUGFyYW1ldGVySTE4biA9IHRoaXMuYXBpWydtYXN0ZXInXVsnYWxsLXBhcmFtZXRlci1pMThuJ107XG4gICAgICAgIHRoaXMubG9hZGluZ0Zvcm0gPSB0cnVlO1xuICAgICAgICB0aGlzLmh0dHAuSFRUUF9BVVRIKHRoaXMuYXBpUGF0aFBhcmFtZXRlckkxOG4sIHtcbiAgICAgICAgICAncGFyYW1ldGVyQ29kZSc6IHRoaXMucGFyYW1ldGVyLnBhcmFtZXRlckNvZGUsXG4gICAgICAgIH0pLnN1YnNjcmliZSgocmVzcG9uc2U6IFBhcmFtZXRlckkxOG5Nb2RlbFtdKSA9PiB7XG4gICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldChkYXRhLmxvY2FsZSkuc2V0VmFsdWUoZGF0YS5wYXJhbWV0ZXJWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gZmFsc2U7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9wYXJhbWV0ZXInXSk7XG4gICAgfVxuICB9XG5cbiAgc3BsaXRMb2NhbGUodmFsdWVzOiBMb2NhbGVNb2RlbFtdKTogdm9pZCB7XG4gICAgdGhpcy5hbGxMb2NhbGVzID0gdmFsdWVzO1xuICAgIHZhbHVlcy5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgaWYgKGRhdGEubG9jYWxlRGVmYXVsdCkge1xuICAgICAgICB0aGlzLmxvY2FsZURlZmF1bHQgPSBkYXRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2NhbGVzLnB1c2goZGF0YSk7XG4gICAgICB9XG4gICAgICB0aGlzLmZvcm1Hcm91cC5yZW1vdmVDb250cm9sKGRhdGEubG9jYWxlQ29kZSk7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKGRhdGEubG9jYWxlQ29kZSwgbmV3IEZvcm1Db250cm9sKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gIG9uUmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL3N5c2NvbmYvcGFyYW1ldGVyL2RldGFpbCddKTtcbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGNvbnN0IGRhdGE6IGFueSA9IHRoaXMuZm9ybUdyb3VwLnZhbHVlO1xuICAgIGlmICh0aGlzLmlzRWRpdCkgZGF0YS5wYXJhbWV0ZXJDb2RlID0gdGhpcy5wYXJhbWV0ZXIucGFyYW1ldGVyQ29kZTtcbiAgICBkYXRhLnBhcmFtZXRlckdyb3VwQ29kZSA9IHRoaXMucGFyYW1ldGVyR3JvdXAucGFyYW1ldGVyR3JvdXBDb2RlO1xuICAgIGRhdGEucGFyYW1ldGVyVmFsdWVzID0ge307XG4gICAgdGhpcy5hbGxMb2NhbGVzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgZGF0YS5wYXJhbWV0ZXJWYWx1ZXNbdmFsdWUubG9jYWxlQ29kZV0gPSB0aGlzLmZvcm1Hcm91cC5nZXQodmFsdWUubG9jYWxlQ29kZSkudmFsdWU7XG4gICAgfSk7XG4gICAgKHN1cGVyLm9uU3VibWl0KGRhdGEsICdtYXN0ZXInLCAncG9zdC1wYXJhbWV0ZXItaTE4bicpICBhcyBPYnNlcnZhYmxlPEFwaUJhc2VSZXNwb25zZT4pXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3BTdGF0dXNDb2RlID09PSBSZXNwb25zZUNvZGUuT0tfU0NSMDA5LnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9wYXJhbWV0ZXIvZGV0YWlsJ10pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG59XG4iXX0=