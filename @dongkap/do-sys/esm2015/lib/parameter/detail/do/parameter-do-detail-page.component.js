import { Component, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { ResponseCode, LocaleModel } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-common';
import { ParameterService } from '../../services/parameter.service';
import { ParameterModel, ParameterGroupModel } from '../../models/parameter.model';
export class ParameterDoDetailPageComponent extends BaseFormComponent {
    constructor(injector, router, parameterService, route) {
        super(injector, {
            'parameterCode': [],
            'en-US': [],
            'id-ID': [],
        });
        this.injector = injector;
        this.router = router;
        this.parameterService = parameterService;
        this.route = route;
        this.action = 'Add';
        this.parameter = new ParameterModel();
        this.parameterGroup = new ParameterGroupModel();
        this.allLocales = [];
        this.locales = [];
        this.localeDefault = new LocaleModel();
        this.isEdit = false;
        if (this.parameterService.getParameterGroup()) {
            this.parameterGroup = this.parameterService.getParameterGroup();
            if ((this.route.snapshot.params['action'] === 'edit')) {
                if (this.parameterService.getParameter()) {
                    this.action = 'Edit';
                    this.isEdit = true;
                    this.parameter = this.parameterService.getParameter();
                }
                else {
                    this.router.navigate(['/app/sysconf/parameter']);
                }
            }
            if (!this.parameterService.getLocales()) {
                this.apiPathLocale = this.api['master']['all-locale'];
                this.http.HTTP_AUTH(this.apiPathLocale).subscribe(response => {
                    this.parameterService.setLocales(response);
                    this.splitLocale(response);
                });
            }
            else {
                this.splitLocale(this.parameterService.getLocales());
            }
            if (this.isEdit) {
                this.formGroup.get('parameterCode').setValue(this.parameter.parameterCode);
                this.formGroup.get('parameterCode').disable({ emitEvent: true });
                this.apiPathParameterI18n = this.api['master']['all-parameter-i18n'];
                this.loadingForm = true;
                this.http.HTTP_AUTH(this.apiPathParameterI18n, {
                    'parameterCode': this.parameter.parameterCode,
                }).subscribe((response) => {
                    response.forEach(data => {
                        this.formGroup.get(data.locale).setValue(data.parameterValue);
                        this.loadingForm = false;
                    });
                });
            }
        }
        else {
            this.router.navigate(['/app/sysconf/parameter']);
        }
    }
    splitLocale(values) {
        this.allLocales = values;
        values.forEach(data => {
            if (data.localeDefault) {
                this.localeDefault = data;
            }
            else {
                this.locales.push(data);
            }
            this.formGroup.removeControl(data.localeCode);
            this.formGroup.addControl(data.localeCode, new FormControl());
        });
    }
    ngOnInit() { }
    onReset() {
        this.router.navigate(['/app/sysconf/parameter/detail']);
    }
    onSubmit() {
        const data = this.formGroup.value;
        if (this.isEdit)
            data.parameterCode = this.parameter.parameterCode;
        data.parameterGroupCode = this.parameterGroup.parameterGroupCode;
        data.parameterValues = {};
        this.allLocales.forEach(value => {
            data.parameterValues[value.localeCode] = this.formGroup.get(value.localeCode).value;
        });
        super.onSubmit(data, 'master', 'post-parameter-i18n')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_SCR009.toString()) {
                this.router.navigate(['/app/sysconf/parameter/detail']);
            }
        });
    }
}
ParameterDoDetailPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ParameterService },
    { type: ActivatedRoute }
];
ParameterDoDetailPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-parameter-do-detail-page',
                template: "<do-page-outlet [header]=\"action + ' Parameter'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'parameterCode'\"\n          [label]=\"'Parameter Code'\"\n          [required]=\"!isEdit\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"parameterCode\">\n        </do-input-text>\n        <div class=\"header\">\n          <div class=\"form-group row\">\n            <label\n              for=\"Parameter Value\"\n              class=\"label col-sm-3 col-form-label\"\n              *ngIf=\"!loadingForm; else labelskeleton\">\n              {{'Parameter Value' | translate}}\n            </label>\n            <ng-template #labelskeleton>\n              <div class=\"col-sm-3\">\n                <div\n                  [ngClass]=\"{\n                    'label-skeleton': true,\n                    'skeleton': loadingForm\n                  }\">\n                </div>\n              </div>\n            </ng-template>\n            <div class=\"col-sm-9\">\n              <do-input-icon *ngIf=\"localeDefault.localeCode\"\n                [name]=\"localeDefault.localeCode\"\n                [nolabel]=\"true\"\n                [required]=\"true\"\n                [colLabel]=\"0\"\n                [colInput]=\"12\"\n                [icon]=\"'flag-icon flag-icon-' + localeDefault.icon\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"{{localeDefault.localeCode}}\">\n              </do-input-icon>\n            </div>\n          </div>\n        </div>\n        <do-input-icon *ngFor=\"let i18n of locales\"\n          [name]=\"i18n.localeCode\"\n          [nolabel]=\"true\"\n          [icon]=\"'flag-icon flag-icon-'+ i18n.icon\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"{{i18n.localeCode}}\">\n        </do-input-icon>\n        <div class=\"form-group row\">\n          <div class=\"offset-sm-3 col-sm-9\" *ngIf=\"!loadingForm; else buttonskeleton\">\n            <button\n              type=\"reset\"\n              status=\"danger\"\n              (click)=\"onReset()\"\n              class=\"reset-left\"\n              nbButton>\n              {{ 'Cancel' | translate}}\n            </button>\n            <button\n              type=\"submit\"\n              status=\"primary\"\n              (click)=\"onSubmit()\"\n              [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n              class=\"submit-right\"\n              nbButton>\n              {{ action | translate}}\n            </button>\n          </div>\n          <ng-template #buttonskeleton>\n            <div class=\"offset-sm-3 col-sm-9\">\n              <div\n                [ngClass]=\"{\n                  'button-skeleton': true,\n                  'skeleton': loadingForm\n                }\">\n              </div>\n            </div>\n          </ng-template>\n        </div>\n      </form>\n    </div>\n  </div>\n</do-page-outlet>\n",
                styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}"]
            },] }
];
ParameterDoDetailPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ParameterService },
    { type: ActivatedRoute }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLWRvLWRldGFpbC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9wYXJhbWV0ZXIvZGV0YWlsL2RvL3BhcmFtZXRlci1kby1kZXRhaWwtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBa0MsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzdGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFPdkcsTUFBTSxPQUFPLDhCQUErQixTQUFRLGlCQUFzQjtJQVl4RSxZQUFtQixRQUFrQixFQUMzQixNQUFjLEVBQ2QsZ0JBQWtDLEVBQ2xDLEtBQXFCO1FBQzdCLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDZCxlQUFlLEVBQUUsRUFBRTtZQUNuQixPQUFPLEVBQUUsRUFBRTtZQUNYLE9BQU8sRUFBRSxFQUFFO1NBQ1osQ0FBQyxDQUFDO1FBUmMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQWJ4QixXQUFNLEdBQW1C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RTtZQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3RGLENBQUMsQ0FBQyxDQUFDO1FBQ0YsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixDQUFrQzthQUNwRixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDcEIsSUFBSSxRQUFRLENBQUMsY0FBYyxLQUFLLFlBQVksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO2FBQ3pEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzs7WUFsRjRCLFFBQVE7WUFDbkIsTUFBTTtZQUNJLGdCQUFnQjtZQUMzQixjQUFjOzs7WUFwQmhDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUV2QyxxL0ZBQXdEOzthQUN6RDs7O1lBZm1CLFFBQVE7WUFFbkIsTUFBTTtZQU1OLGdCQUFnQjtZQU5SLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBIdHRwQmFzZU1vZGVsLCBBcGlCYXNlUmVzcG9uc2UsIFJlc3BvbnNlQ29kZSwgTG9jYWxlTW9kZWwgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEJhc2VGb3JtQ29tcG9uZW50IH0gZnJvbSAnQGRvbmdrYXAvZG8tY29tbW9uJztcbmltcG9ydCB7IFBhcmFtZXRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wYXJhbWV0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQYXJhbWV0ZXJNb2RlbCwgUGFyYW1ldGVySTE4bk1vZGVsLCBQYXJhbWV0ZXJHcm91cE1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BhcmFtZXRlci5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLXBhcmFtZXRlci1kby1kZXRhaWwtcGFnZScsXG4gIHN0eWxlVXJsczogWycuL3BhcmFtZXRlci1kby1kZXRhaWwtcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFyYW1ldGVyLWRvLWRldGFpbC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyRG9EZXRhaWxQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZvcm1Db21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGFjdGlvbjogJ0FkZCcgfCAnRWRpdCcgPSAnQWRkJztcbiAgcHVibGljIHBhcmFtZXRlcjogUGFyYW1ldGVyTW9kZWwgPSBuZXcgUGFyYW1ldGVyTW9kZWwoKTtcbiAgcHVibGljIHBhcmFtZXRlckdyb3VwOiBQYXJhbWV0ZXJHcm91cE1vZGVsID0gbmV3IFBhcmFtZXRlckdyb3VwTW9kZWwoKTtcbiAgcHVibGljIGFsbExvY2FsZXM6IExvY2FsZU1vZGVsW10gPSBbXTtcbiAgcHVibGljIGxvY2FsZXM6IExvY2FsZU1vZGVsW10gPSBbXTtcbiAgcHVibGljIGxvY2FsZURlZmF1bHQ6IExvY2FsZU1vZGVsID0gbmV3IExvY2FsZU1vZGVsKCk7XG4gIHB1YmxpYyBpc0VkaXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGFwaVBhdGhQYXJhbWV0ZXJJMThuOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgYXBpUGF0aExvY2FsZTogSHR0cEJhc2VNb2RlbDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBwYXJhbWV0ZXJTZXJ2aWNlOiBQYXJhbWV0ZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsIHtcbiAgICAgICdwYXJhbWV0ZXJDb2RlJzogW10sXG4gICAgICAnZW4tVVMnOiBbXSxcbiAgICAgICdpZC1JRCc6IFtdLFxuICAgIH0pO1xuICAgIGlmICh0aGlzLnBhcmFtZXRlclNlcnZpY2UuZ2V0UGFyYW1ldGVyR3JvdXAoKSkge1xuICAgICAgdGhpcy5wYXJhbWV0ZXJHcm91cCA9IHRoaXMucGFyYW1ldGVyU2VydmljZS5nZXRQYXJhbWV0ZXJHcm91cCgpO1xuICAgICAgaWYgKCh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snYWN0aW9uJ10gPT09ICdlZGl0JykpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyYW1ldGVyU2VydmljZS5nZXRQYXJhbWV0ZXIoKSkge1xuICAgICAgICAgIHRoaXMuYWN0aW9uID0gJ0VkaXQnO1xuICAgICAgICAgIHRoaXMuaXNFZGl0ID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnBhcmFtZXRlciA9IHRoaXMucGFyYW1ldGVyU2VydmljZS5nZXRQYXJhbWV0ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9wYXJhbWV0ZXInXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5wYXJhbWV0ZXJTZXJ2aWNlLmdldExvY2FsZXMoKSkge1xuICAgICAgICB0aGlzLmFwaVBhdGhMb2NhbGUgPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ2FsbC1sb2NhbGUnXTtcbiAgICAgICAgdGhpcy5odHRwLkhUVFBfQVVUSCh0aGlzLmFwaVBhdGhMb2NhbGUpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgICAgdGhpcy5wYXJhbWV0ZXJTZXJ2aWNlLnNldExvY2FsZXMocmVzcG9uc2UpO1xuICAgICAgICAgIHRoaXMuc3BsaXRMb2NhbGUocmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3BsaXRMb2NhbGUodGhpcy5wYXJhbWV0ZXJTZXJ2aWNlLmdldExvY2FsZXMoKSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pc0VkaXQpIHtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdwYXJhbWV0ZXJDb2RlJykuc2V0VmFsdWUodGhpcy5wYXJhbWV0ZXIucGFyYW1ldGVyQ29kZSk7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgncGFyYW1ldGVyQ29kZScpLmRpc2FibGUoe2VtaXRFdmVudDogdHJ1ZX0pO1xuICAgICAgICB0aGlzLmFwaVBhdGhQYXJhbWV0ZXJJMThuID0gdGhpcy5hcGlbJ21hc3RlciddWydhbGwtcGFyYW1ldGVyLWkxOG4nXTtcbiAgICAgICAgdGhpcy5sb2FkaW5nRm9ybSA9IHRydWU7XG4gICAgICAgIHRoaXMuaHR0cC5IVFRQX0FVVEgodGhpcy5hcGlQYXRoUGFyYW1ldGVySTE4biwge1xuICAgICAgICAgICdwYXJhbWV0ZXJDb2RlJzogdGhpcy5wYXJhbWV0ZXIucGFyYW1ldGVyQ29kZSxcbiAgICAgICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZTogUGFyYW1ldGVySTE4bk1vZGVsW10pID0+IHtcbiAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KGRhdGEubG9jYWxlKS5zZXRWYWx1ZShkYXRhLnBhcmFtZXRlclZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ0Zvcm0gPSBmYWxzZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9zeXNjb25mL3BhcmFtZXRlciddKTtcbiAgICB9XG4gIH1cblxuICBzcGxpdExvY2FsZSh2YWx1ZXM6IExvY2FsZU1vZGVsW10pOiB2b2lkIHtcbiAgICB0aGlzLmFsbExvY2FsZXMgPSB2YWx1ZXM7XG4gICAgdmFsdWVzLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICBpZiAoZGF0YS5sb2NhbGVEZWZhdWx0KSB7XG4gICAgICAgIHRoaXMubG9jYWxlRGVmYXVsdCA9IGRhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvY2FsZXMucHVzaChkYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZm9ybUdyb3VwLnJlbW92ZUNvbnRyb2woZGF0YS5sb2NhbGVDb2RlKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmFkZENvbnRyb2woZGF0YS5sb2NhbGVDb2RlLCBuZXcgRm9ybUNvbnRyb2woKSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XG5cbiAgb25SZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9wYXJhbWV0ZXIvZGV0YWlsJ10pO1xuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgY29uc3QgZGF0YTogYW55ID0gdGhpcy5mb3JtR3JvdXAudmFsdWU7XG4gICAgaWYgKHRoaXMuaXNFZGl0KSBkYXRhLnBhcmFtZXRlckNvZGUgPSB0aGlzLnBhcmFtZXRlci5wYXJhbWV0ZXJDb2RlO1xuICAgIGRhdGEucGFyYW1ldGVyR3JvdXBDb2RlID0gdGhpcy5wYXJhbWV0ZXJHcm91cC5wYXJhbWV0ZXJHcm91cENvZGU7XG4gICAgZGF0YS5wYXJhbWV0ZXJWYWx1ZXMgPSB7fTtcbiAgICB0aGlzLmFsbExvY2FsZXMuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICBkYXRhLnBhcmFtZXRlclZhbHVlc1t2YWx1ZS5sb2NhbGVDb2RlXSA9IHRoaXMuZm9ybUdyb3VwLmdldCh2YWx1ZS5sb2NhbGVDb2RlKS52YWx1ZTtcbiAgICB9KTtcbiAgICAoc3VwZXIub25TdWJtaXQoZGF0YSwgJ21hc3RlcicsICdwb3N0LXBhcmFtZXRlci1pMThuJykgIGFzIE9ic2VydmFibGU8QXBpQmFzZVJlc3BvbnNlPilcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UucmVzcFN0YXR1c0NvZGUgPT09IFJlc3BvbnNlQ29kZS5PS19TQ1IwMDkudG9TdHJpbmcoKSkge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9zeXNjb25mL3BhcmFtZXRlci9kZXRhaWwnXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==