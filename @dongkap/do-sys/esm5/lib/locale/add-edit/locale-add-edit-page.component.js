import { __extends } from "tslib";
import { Component, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { NbDialogService } from '@nebular/theme';
import { ResponseCode } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-common';
import { LocaleService } from '../services/locale.service';
import { DialogFlagComponent } from './dialog-flag/dialog-flag.component';
var LocaleAddEditPageComponent = /** @class */ (function (_super) {
    __extends(LocaleAddEditPageComponent, _super);
    function LocaleAddEditPageComponent(injector, router, route, localeService, dialogService) {
        var _this = _super.call(this, injector, {
            'language': [],
            'icon': [],
            'default': [],
        }) || this;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.localeService = localeService;
        _this.dialogService = dialogService;
        _this.action = 'Add';
        _this.dataDefault = [
            {
                selected: false,
            },
        ];
        if (_this.localeService.getLocale() || (_this.route.snapshot.params['action'] === 'add')) {
            if ((_this.route.snapshot.params['action'] === 'edit')) {
                _this.action = 'Edit';
            }
            _this.apiSelectLanguage = _this.api['master']['select-language'];
            if (_this.localeService.getLocale() && (_this.route.snapshot.params['action'] === 'edit')) {
                if (_this.localeService.getLocale().localeDefault) {
                    _this.formGroup.get('default').setValue([{
                            selected: true,
                        }]);
                    _this.formGroup.get('default').disable();
                }
                else {
                    _this.formGroup.get('default').setValue([{
                            selected: false,
                        }]);
                }
                _this.formGroup.get('icon').setValue(_this.localeService.getLocale().icon);
                _this.formGroup.get('language').setValue(_this.localeService.getLocale().identifier);
                _this.formGroup.get('language').disable();
            }
        }
        else {
            _this.router.navigate(['/app/sysconf/i18n']);
        }
        return _this;
    }
    LocaleAddEditPageComponent.prototype.ngOnInit = function () { };
    LocaleAddEditPageComponent.prototype.onSearchFlag = function () {
        var _this = this;
        this.dialogService.open(DialogFlagComponent)
            .onClose.subscribe(function (flagIcon) {
            _this.formGroup.get('icon').setValue(flagIcon);
            _this.formGroup.get('icon').markAsDirty();
        });
    };
    LocaleAddEditPageComponent.prototype.onReset = function () {
        this.router.navigate(['/app/sysconf/i18n']);
    };
    LocaleAddEditPageComponent.prototype.onSubmit = function () {
        var _this = this;
        var localeDefault = this.formGroup.get('default').value;
        var data = {
            icon: this.formGroup.get('icon').value,
            localeDefault: (localeDefault ? true : false),
            localeCode: this.formGroup.get('language').value['value'] ?
                this.formGroup.get('language').value['value'] : this.localeService.getLocale().localeCode,
            identifier: this.formGroup.get('language').value['label'] ?
                this.formGroup.get('language').value['label'] : this.localeService.getLocale().identifier,
            localeEnabled: true,
        };
        _super.prototype.onSubmit.call(this, data, 'master', 'post-locale')
            .pipe(takeUntil(this.destroy$))
            .subscribe(function (response) {
            if (response.respStatusCode === ResponseCode.OK_SCR010.toString()) {
                _this.router.navigate(['/app/sysconf/i18n']);
            }
        });
    };
    LocaleAddEditPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: ActivatedRoute },
        { type: LocaleService },
        { type: NbDialogService }
    ]; };
    LocaleAddEditPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-locale-add-edit-page',
                    template: "<do-page-outlet [header]=\"'header.'+action+'-i18n'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <do-select\n          [name]=\"'language'\"\n          [label]=\"'Language'\"\n          [required]=\"true\"\n          [api]=\"apiSelectLanguage\"\n          formControlName=\"language\">\n        </do-select>\n        <do-input-icon\n          [name]=\"'icon'\"\n          [label]=\"'Icon'\"\n          [required]=\"true\"\n          [icon]=\"'search-outline'\"\n          [iconcursor]=\"true\"\n          [eva]=\"true\"\n          (clickIcon)=\"onSearchFlag()\"\n          formControlName=\"icon\">\n        </do-input-icon>\n        <do-checkbox\n          [name]=\"'checkbox'\"\n          [label]=\"'System Default Language'\"\n          [data]=\"dataDefault\"\n          formControlName=\"default\">\n        </do-checkbox>\n        <div class=\"form-group row\">\n          <div class=\"offset-sm-3 col-sm-9\">\n            <button\n              type=\"reset\"\n              status=\"danger\"\n              (click)=\"onReset()\"\n              class=\"reset-left\"\n              nbButton>\n              {{ 'Cancel' | translate}}\n            </button>\n            <button\n              type=\"submit\"\n              status=\"primary\"\n              (click)=\"onSubmit()\"\n              [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n              class=\"submit-right\"\n              nbButton>\n              {{ action | translate}}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</do-page-outlet>\n",
                    styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}"]
                },] }
    ];
    LocaleAddEditPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: ActivatedRoute },
        { type: LocaleService },
        { type: NbDialogService }
    ]; };
    return LocaleAddEditPageComponent;
}(BaseFormComponent));
export { LocaleAddEditPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLWFkZC1lZGl0LXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tc3lzLyIsInNvdXJjZXMiOlsibGliL2xvY2FsZS9hZGQtZWRpdC9sb2NhbGUtYWRkLWVkaXQtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQW1CLFlBQVksRUFBOEIsTUFBTSxrQkFBa0IsQ0FBQztBQUM3RixPQUFPLEVBQUUsaUJBQWlCLEVBQWlCLE1BQU0sb0JBQW9CLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTFFO0lBS2dELDhDQUFzQjtJQVNwRSxvQ0FBbUIsUUFBa0IsRUFDM0IsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLGFBQTRCLEVBQzVCLGFBQThCO1FBSnhDLFlBS0Usa0JBQU0sUUFBUSxFQUNaO1lBQ0UsVUFBVSxFQUFFLEVBQUU7WUFDZCxNQUFNLEVBQUUsRUFBRTtZQUNWLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQyxTQXdCTDtRQWxDa0IsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsbUJBQWEsR0FBYixhQUFhLENBQWlCO1FBWGpDLFlBQU0sR0FBbUIsS0FBSyxDQUFD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Z0JBQ25CLE1BQU07Z0JBQ1AsY0FBYztnQkFDTixhQUFhO2dCQUNiLGVBQWU7OztnQkFsQnpDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUVuQyx5cERBQW9EOztpQkFDckQ7OztnQkFmbUIsUUFBUTtnQkFFbkIsTUFBTTtnQkFBRSxjQUFjO2dCQU10QixhQUFhO2dCQUhiLGVBQWU7O0lBMEZ4QixpQ0FBQztDQUFBLEFBcEZELENBS2dELGlCQUFpQixHQStFaEU7U0EvRVksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5iRGlhbG9nU2VydmljZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSwgUmVzcG9uc2VDb2RlLCBIdHRwQmFzZU1vZGVsLCBMb2NhbGVNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQmFzZUZvcm1Db21wb25lbnQsIENoZWNrYm94TW9kZWwgfSBmcm9tICdAZG9uZ2thcC9kby1jb21tb24nO1xuaW1wb3J0IHsgTG9jYWxlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xvY2FsZS5zZXJ2aWNlJztcbmltcG9ydCB7IERpYWxvZ0ZsYWdDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy1mbGFnL2RpYWxvZy1mbGFnLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWxvY2FsZS1hZGQtZWRpdC1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9jYWxlLWFkZC1lZGl0LXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvY2FsZS1hZGQtZWRpdC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTG9jYWxlQWRkRWRpdFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlRm9ybUNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgYWN0aW9uOiAnQWRkJyB8ICdFZGl0JyA9ICdBZGQnO1xuICBwdWJsaWMgYXBpU2VsZWN0TGFuZ3VhZ2U6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBkYXRhRGVmYXVsdDogQ2hlY2tib3hNb2RlbFtdID0gW1xuICAgIHtcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICB9LFxuICBdO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBsb2NhbGVTZXJ2aWNlOiBMb2NhbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogTmJEaWFsb2dTZXJ2aWNlKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsXG4gICAgICB7XG4gICAgICAgICdsYW5ndWFnZSc6IFtdLFxuICAgICAgICAnaWNvbic6IFtdLFxuICAgICAgICAnZGVmYXVsdCc6IFtdLFxuICAgICAgfSk7XG4gICAgaWYgKHRoaXMubG9jYWxlU2VydmljZS5nZXRMb2NhbGUoKSB8fCAodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2FjdGlvbiddID09PSAnYWRkJykpIHtcbiAgICAgIGlmICgodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2FjdGlvbiddID09PSAnZWRpdCcpKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gJ0VkaXQnO1xuICAgICAgfVxuICAgICAgdGhpcy5hcGlTZWxlY3RMYW5ndWFnZSA9IHRoaXMuYXBpWydtYXN0ZXInXVsnc2VsZWN0LWxhbmd1YWdlJ107XG4gICAgICBpZiAodGhpcy5sb2NhbGVTZXJ2aWNlLmdldExvY2FsZSgpICYmICh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snYWN0aW9uJ10gPT09ICdlZGl0JykpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlU2VydmljZS5nZXRMb2NhbGUoKS5sb2NhbGVEZWZhdWx0KSB7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdkZWZhdWx0Jykuc2V0VmFsdWUoW3tcbiAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgICAgIH1dKTtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2RlZmF1bHQnKS5kaXNhYmxlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdkZWZhdWx0Jykuc2V0VmFsdWUoW3tcbiAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgICB9XSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdpY29uJykuc2V0VmFsdWUodGhpcy5sb2NhbGVTZXJ2aWNlLmdldExvY2FsZSgpLmljb24pO1xuICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2xhbmd1YWdlJykuc2V0VmFsdWUodGhpcy5sb2NhbGVTZXJ2aWNlLmdldExvY2FsZSgpLmlkZW50aWZpZXIpO1xuICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2xhbmd1YWdlJykuZGlzYWJsZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9pMThuJ10pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBvblNlYXJjaEZsYWcoKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oRGlhbG9nRmxhZ0NvbXBvbmVudClcbiAgICAgIC5vbkNsb3NlLnN1YnNjcmliZSgoZmxhZ0ljb246IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2ljb24nKS5zZXRWYWx1ZShmbGFnSWNvbik7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnaWNvbicpLm1hcmtBc0RpcnR5KCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uUmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL3N5c2NvbmYvaTE4biddKTtcbiAgfVxuXG4gIG9uU3VibWl0KCk6IHZvaWQge1xuICAgIGNvbnN0IGxvY2FsZURlZmF1bHQ6IENoZWNrYm94TW9kZWxbXSA9IHRoaXMuZm9ybUdyb3VwLmdldCgnZGVmYXVsdCcpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGE6IExvY2FsZU1vZGVsID0ge1xuICAgICAgaWNvbjogdGhpcy5mb3JtR3JvdXAuZ2V0KCdpY29uJykudmFsdWUsXG4gICAgICBsb2NhbGVEZWZhdWx0OiAobG9jYWxlRGVmYXVsdCA/IHRydWUgOiBmYWxzZSksXG4gICAgICBsb2NhbGVDb2RlOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ2xhbmd1YWdlJykudmFsdWVbJ3ZhbHVlJ10gP1xuICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdsYW5ndWFnZScpLnZhbHVlWyd2YWx1ZSddIDogdGhpcy5sb2NhbGVTZXJ2aWNlLmdldExvY2FsZSgpLmxvY2FsZUNvZGUsXG4gICAgICBpZGVudGlmaWVyOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ2xhbmd1YWdlJykudmFsdWVbJ2xhYmVsJ10gP1xuICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdsYW5ndWFnZScpLnZhbHVlWydsYWJlbCddIDogdGhpcy5sb2NhbGVTZXJ2aWNlLmdldExvY2FsZSgpLmlkZW50aWZpZXIsXG4gICAgICBsb2NhbGVFbmFibGVkOiB0cnVlLFxuICAgIH07XG4gICAgKHN1cGVyLm9uU3VibWl0KGRhdGEsICdtYXN0ZXInLCAncG9zdC1sb2NhbGUnKSAgYXMgT2JzZXJ2YWJsZTxBcGlCYXNlUmVzcG9uc2U+KVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5yZXNwU3RhdHVzQ29kZSA9PT0gUmVzcG9uc2VDb2RlLk9LX1NDUjAxMC50b1N0cmluZygpKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL3N5c2NvbmYvaTE4biddKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxufVxuIl19