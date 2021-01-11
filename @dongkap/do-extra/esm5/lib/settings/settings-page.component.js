import { __extends } from "tslib";
import { Component, Injector, Inject } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { AUTH_INDEXED_DB, SETTINGS_INDEXED_DB, ResponseCode, } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-common';
var SettingsPageComponent = /** @class */ (function (_super) {
    __extends(SettingsPageComponent, _super);
    function SettingsPageComponent(injector, translate, themeService, settingsIndexedDB, authIndexedDB) {
        var _this = _super.call(this, injector, {
            'locale': [],
            'theme': [],
        }) || this;
        _this.injector = injector;
        _this.translate = translate;
        _this.themeService = themeService;
        _this.settingsIndexedDB = settingsIndexedDB;
        _this.authIndexedDB = authIndexedDB;
        _this.dataTheme = [
            {
                selected: false,
            },
        ];
        _this.apiSelectLocale = _this.api['master']['select-all-locale'];
        return _this;
    }
    SettingsPageComponent.prototype.ngOnInit = function () {
        this.onInit('security', 'get-settings');
    };
    SettingsPageComponent.prototype.onInit = function (serviceName, apiName) {
        var _this = this;
        this.loadingForm = true;
        this.exec(serviceName, apiName)
            .subscribe(function (success) {
            _this.loadingForm = false;
            _this.localeCode = success['localeCode'];
            _this.localeIdentifier = success['localeIdentifier'];
            _this.localeIcon = success['localeIcon'] ? success['localeIcon'] : '';
            _this.formGroup.controls['locale'].setValue(_this.localeIdentifier);
            var darkMode = [{
                    selected: false,
                }];
            if (success['theme'] === 'dark') {
                darkMode = [{
                        selected: true,
                    }];
            }
            _this.formGroup.controls['theme'].setValue(darkMode);
            _this.formGroup.markAsPristine();
        }, function (error) {
            _this.loadingForm = true;
            if (error.respStatusMessage)
                _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
    };
    SettingsPageComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.formGroup.get('locale').value['value']) {
            this.localeCode = this.formGroup.get('locale').value['value'];
            this.localeIdentifier = this.formGroup.get('locale').value['label'];
            this.localeIcon = this.formGroup.get('locale').value['icon'];
        }
        var theme = this.formGroup.get('theme').value;
        var data = {
            'localeCode': this.localeCode,
            'localeIdentifier': this.localeIdentifier,
            'localeIcon': this.localeIcon,
            'theme': theme[0].selected ? 'dark' : 'default',
        };
        this.disabled = true;
        Promise.all([
            this.settingsIndexedDB.get('locale'),
            this.settingsIndexedDB.get('theme'),
        ]).then(function (current) {
            if ((current[0] !== _this.localeCode) || (current[1] !== data['theme'])) {
                _this.exec('security', 'change-settings', data).subscribe(function (success) {
                    if (success) {
                        if (success.respStatusCode === ResponseCode.OK_SCR002.toString()) {
                            if (theme) {
                                _this.changeTheme(theme[0].selected);
                            }
                            if (current[0] !== _this.localeCode) {
                                _this.settingsIndexedDB.put('locale', _this.localeCode).then(function () {
                                    _this.http.HTTP_AUTH(_this.api['security']['get-menus']).subscribe(function (menus) {
                                        Promise.all([
                                            _this.authIndexedDB.putEnc('menus', JSON.stringify(menus['main'])),
                                            _this.authIndexedDB.putEnc('extras', JSON.stringify(menus['extra'])),
                                        ]).then(function () {
                                            _this.translate.getTranslation(_this.localeCode).subscribe(function (lang) {
                                                _this.translate.use(_this.localeCode);
                                                _this.translate.setTranslation(_this.localeCode, lang, true);
                                                _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
                                                _this.disabled = false;
                                                _this.formGroup.markAsPristine();
                                            });
                                        });
                                    }, function (error) {
                                        _this.toastr.showI18n('error.translate', false, null, 'warning');
                                    });
                                });
                            }
                        }
                    }
                }, function (error) {
                    _this.disabled = false;
                    _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
                });
            }
        });
    };
    SettingsPageComponent.prototype.changeTheme = function (dark) {
        var theme = dark ? 'dark' : 'default';
        this.settingsIndexedDB.put('theme', theme).then();
        this.themeService.changeTheme(theme);
    };
    SettingsPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: TranslateService },
        { type: NbThemeService },
        { type: undefined, decorators: [{ type: Inject, args: [SETTINGS_INDEXED_DB,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [AUTH_INDEXED_DB,] }] }
    ]; };
    SettingsPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-settings-page',
                    template: "<do-page-outlet [header]=\"'Settings'\">\n  <form [formGroup]=\"formGroup\" pagecontent>\n    <do-select\n      [name]=\"'locale'\"\n      [label]=\"'label.language'\"\n      [required]=\"true\"\n      [searchable]=\"false\"\n      [skeleton]=\"loadingForm\"\n      [api]=\"apiSelectLocale\"\n      formControlName=\"locale\">\n      <div *doContentSelect=\"let item\">\n        <span class=\"{{item.icon ? item.icon : localeIcon}}\"></span>\n        <span class=\"label-select\">{{item.label ? item.label : item}}</span>\n      </div>\n    </do-select>\n    <do-checkbox\n      [name]=\"'checkbox'\"\n      [label]=\"'label.dark-mode'\"\n      [data]=\"dataTheme\"\n      [skeleton]=\"loadingForm\"\n      formControlName=\"theme\">\n    </do-checkbox>\n    <do-button-submit\n      (onSubmit)=\"onSubmit()\"\n      [name]=\"'Update Settings'\"\n      [formGroupButton]=\"formGroup\"\n      [disabledButton]=\"disabled\"\n      [skeleton]=\"loadingForm\">\n    </do-button-submit>\n  </form>\n</do-page-outlet>\n",
                    styles: [".label-select{padding-left:.5rem}"]
                },] }
    ];
    SettingsPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: TranslateService },
        { type: NbThemeService },
        { type: undefined, decorators: [{ type: Inject, args: [SETTINGS_INDEXED_DB,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [AUTH_INDEXED_DB,] }] }
    ]; };
    return SettingsPageComponent;
}(BaseFormComponent));
export { SettingsPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1leHRyYS8iLCJzb3VyY2VzIjpbImxpYi9zZXR0aW5ncy9zZXR0aW5ncy1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBRUwsZUFBZSxFQUNmLG1CQUFtQixFQUNuQixZQUFZLEdBQ2IsTUFBTSxrQkFBa0IsQ0FBQztBQUkxQixPQUFPLEVBQWlCLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEU7SUFLMkMseUNBQXNCO0lBWS9ELCtCQUNTLFFBQWtCLEVBQ2pCLFNBQTJCLEVBQzNCLFlBQTRCLEVBQ0MsaUJBQTBDLEVBQzlDLGFBQXlDO1FBTDVFLFlBTUksa0JBQU0sUUFBUSxFQUFFO1lBQ2QsUUFBUSxFQUFFLEVBQUU7WUFDWixPQUFPLEVBQUUsRUFBRTtTQUNaLENBQUMsU0FFSDtRQVZNLGNBQVEsR0FBUixRQUFRLENBQVU7UUFDakIsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0Isa0JBQVksR0FBWixZQUFZLENBQWdCO1FBQ0MsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUF5QjtRQUM5QyxtQkFBYSxHQUFiLGFBQWEsQ0FBNEI7UUFYckUsZUFBUyxHQUFvQjtZQUNsQztnQkFDRSxRQUFRLEVBQUUsS0FBSzthQUNoQjtTQUNGLENBQUM7UUFZRSxLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7SUFDakUsQ0FBQztJQUVILHdDQUFRLEdBQVI7UUFD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QUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUM5RixDQUFDLENBQ0YsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsMkNBQVcsR0FBWCxVQUFZLElBQWE7UUFDdkIsSUFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDOztnQkE5R2tCLFFBQVE7Z0JBQ04sZ0JBQWdCO2dCQUNiLGNBQWM7Z0RBQ25DLE1BQU0sU0FBQyxtQkFBbUI7Z0RBQzFCLE1BQU0sU0FBQyxlQUFlOzs7Z0JBdEIxQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFFNUIsaWdDQUE2Qzs7aUJBQzlDOzs7Z0JBbkJtQixRQUFRO2dCQUduQixnQkFBZ0I7Z0JBRGhCLGNBQWM7Z0RBa0NsQixNQUFNLFNBQUMsbUJBQW1CO2dEQUMxQixNQUFNLFNBQUMsZUFBZTs7SUE0RzNCLDRCQUFDO0NBQUEsQUFsSUQsQ0FLMkMsaUJBQWlCLEdBNkgzRDtTQTdIWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdG9yLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmJUaGVtZVNlcnZpY2UgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQge1xuICBJbmRleGVkREJFbmNGYWN0b3J5U2VydmljZSxcbiAgQVVUSF9JTkRFWEVEX0RCLFxuICBTRVRUSU5HU19JTkRFWEVEX0RCLFxuICBSZXNwb25zZUNvZGUsXG59IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgSHR0cEJhc2VNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQXBpQmFzZVJlc3BvbnNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBJbmRleGVkREJGYWN0b3J5U2VydmljZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQ2hlY2tib3hNb2RlbCwgQmFzZUZvcm1Db21wb25lbnQgfSBmcm9tICdAZG9uZ2thcC9kby1jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1zZXR0aW5ncy1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2V0dGluZ3MtcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZ3MtcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzUGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGb3JtQ29tcG9uZW50PGFueT4gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBhcGlTZWxlY3RMb2NhbGU6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBsb2NhbGVJY29uOiBzdHJpbmc7XG4gIHByaXZhdGUgbG9jYWxlQ29kZTogYW55O1xuICBwcml2YXRlIGxvY2FsZUlkZW50aWZpZXI6IGFueTtcbiAgcHVibGljIGRhdGFUaGVtZTogQ2hlY2tib3hNb2RlbFtdID0gW1xuICAgIHtcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0aGVtZVNlcnZpY2U6IE5iVGhlbWVTZXJ2aWNlLFxuICAgIEBJbmplY3QoU0VUVElOR1NfSU5ERVhFRF9EQikgcHJpdmF0ZSBzZXR0aW5nc0luZGV4ZWREQjogSW5kZXhlZERCRmFjdG9yeVNlcnZpY2UsXG4gICAgQEluamVjdChBVVRIX0lOREVYRURfREIpIHByaXZhdGUgYXV0aEluZGV4ZWREQjogSW5kZXhlZERCRW5jRmFjdG9yeVNlcnZpY2UpIHtcbiAgICAgIHN1cGVyKGluamVjdG9yLCB7XG4gICAgICAgICdsb2NhbGUnOiBbXSxcbiAgICAgICAgJ3RoZW1lJzogW10sXG4gICAgICB9KTtcbiAgICAgIHRoaXMuYXBpU2VsZWN0TG9jYWxlID0gdGhpcy5hcGlbJ21hc3RlciddWydzZWxlY3QtYWxsLWxvY2FsZSddO1xuICAgIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm9uSW5pdCgnc2VjdXJpdHknLCAnZ2V0LXNldHRpbmdzJyk7XG4gIH1cblxuXG4gIG9uSW5pdChzZXJ2aWNlTmFtZTogc3RyaW5nLCBhcGlOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmdGb3JtID0gdHJ1ZTtcbiAgICB0aGlzLmV4ZWMoc2VydmljZU5hbWUsIGFwaU5hbWUpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoc3VjY2VzczogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nRm9ybSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMubG9jYWxlQ29kZSA9IHN1Y2Nlc3NbJ2xvY2FsZUNvZGUnXTtcbiAgICAgICAgICB0aGlzLmxvY2FsZUlkZW50aWZpZXIgPSBzdWNjZXNzWydsb2NhbGVJZGVudGlmaWVyJ107XG4gICAgICAgICAgdGhpcy5sb2NhbGVJY29uID0gc3VjY2Vzc1snbG9jYWxlSWNvbiddID8gc3VjY2Vzc1snbG9jYWxlSWNvbiddIDogJyc7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ2xvY2FsZSddLnNldFZhbHVlKHRoaXMubG9jYWxlSWRlbnRpZmllcik7XG4gICAgICAgICAgbGV0IGRhcmtNb2RlOiBDaGVja2JveE1vZGVsW10gPSBbe1xuICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgIH1dO1xuICAgICAgICAgIGlmIChzdWNjZXNzWyd0aGVtZSddID09PSAnZGFyaycpIHtcbiAgICAgICAgICAgIGRhcmtNb2RlID0gW3tcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgICB9XTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3RoZW1lJ10uc2V0VmFsdWUoZGFya01vZGUpO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLm1hcmtBc1ByaXN0aW5lKCk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcjogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nRm9ybSA9IHRydWU7XG4gICAgICAgICAgaWYgKGVycm9yLnJlc3BTdGF0dXNNZXNzYWdlKVxuICAgICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oZXJyb3IucmVzcFN0YXR1c01lc3NhZ2VbZXJyb3IucmVzcFN0YXR1c0NvZGVdLCB0cnVlLCBudWxsLCAnZGFuZ2VyJyk7XG4gICAgICAgIH0sXG4gICAgICApO1xuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldCgnbG9jYWxlJykudmFsdWVbJ3ZhbHVlJ10pIHtcbiAgICAgIHRoaXMubG9jYWxlQ29kZSA9IHRoaXMuZm9ybUdyb3VwLmdldCgnbG9jYWxlJykudmFsdWVbJ3ZhbHVlJ107XG4gICAgICB0aGlzLmxvY2FsZUlkZW50aWZpZXIgPSB0aGlzLmZvcm1Hcm91cC5nZXQoJ2xvY2FsZScpLnZhbHVlWydsYWJlbCddO1xuICAgICAgdGhpcy5sb2NhbGVJY29uID0gdGhpcy5mb3JtR3JvdXAuZ2V0KCdsb2NhbGUnKS52YWx1ZVsnaWNvbiddO1xuICAgIH1cbiAgICBjb25zdCB0aGVtZTogQ2hlY2tib3hNb2RlbFtdID0gdGhpcy5mb3JtR3JvdXAuZ2V0KCd0aGVtZScpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGE6IGFueSA9IHtcbiAgICAgICdsb2NhbGVDb2RlJzogdGhpcy5sb2NhbGVDb2RlLFxuICAgICAgJ2xvY2FsZUlkZW50aWZpZXInOiB0aGlzLmxvY2FsZUlkZW50aWZpZXIsXG4gICAgICAnbG9jYWxlSWNvbic6IHRoaXMubG9jYWxlSWNvbixcbiAgICAgICd0aGVtZSc6IHRoZW1lWzBdLnNlbGVjdGVkID8gJ2RhcmsnIDogJ2RlZmF1bHQnLFxuICAgIH07XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5zZXR0aW5nc0luZGV4ZWREQi5nZXQoJ2xvY2FsZScpLFxuICAgICAgdGhpcy5zZXR0aW5nc0luZGV4ZWREQi5nZXQoJ3RoZW1lJyksXG4gICAgXSkudGhlbigoY3VycmVudDogYW55W10pID0+IHtcbiAgICAgIGlmICgoY3VycmVudFswXSAhPT0gdGhpcy5sb2NhbGVDb2RlKSB8fCAoY3VycmVudFsxXSAhPT0gZGF0YVsndGhlbWUnXSkpIHtcbiAgICAgICAgdGhpcy5leGVjKCdzZWN1cml0eScsICdjaGFuZ2Utc2V0dGluZ3MnLCBkYXRhKS5zdWJzY3JpYmUoXG4gICAgICAgICAgKHN1Y2Nlc3M6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MucmVzcFN0YXR1c0NvZGUgPT09IFJlc3BvbnNlQ29kZS5PS19TQ1IwMDIudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGVtZSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VUaGVtZSh0aGVtZVswXS5zZWxlY3RlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50WzBdICE9PSB0aGlzLmxvY2FsZUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3NJbmRleGVkREIucHV0KCdsb2NhbGUnLCB0aGlzLmxvY2FsZUNvZGUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmh0dHAuSFRUUF9BVVRIKHRoaXMuYXBpWydzZWN1cml0eSddWydnZXQtbWVudXMnXSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAgIChtZW51czogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aEluZGV4ZWREQi5wdXRFbmMoJ21lbnVzJywgSlNPTi5zdHJpbmdpZnkobWVudXNbJ21haW4nXSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhJbmRleGVkREIucHV0RW5jKCdleHRyYXMnLCBKU09OLnN0cmluZ2lmeShtZW51c1snZXh0cmEnXSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlLmdldFRyYW5zbGF0aW9uKHRoaXMubG9jYWxlQ29kZSkuc3Vic2NyaWJlKChsYW5nOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZS51c2UodGhpcy5sb2NhbGVDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZS5zZXRUcmFuc2xhdGlvbih0aGlzLmxvY2FsZUNvZGUsIGxhbmcsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKHN1Y2Nlc3MucmVzcFN0YXR1c01lc3NhZ2Vbc3VjY2Vzcy5yZXNwU3RhdHVzQ29kZV0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5tYXJrQXNQcmlzdGluZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKCdlcnJvci50cmFuc2xhdGUnLCBmYWxzZSwgbnVsbCwgJ3dhcm5pbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgKGVycm9yOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihlcnJvci5yZXNwU3RhdHVzTWVzc2FnZVtlcnJvci5yZXNwU3RhdHVzQ29kZV0sIHRydWUsIG51bGwsICdkYW5nZXInKTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlVGhlbWUoZGFyazogYm9vbGVhbikge1xuICAgIGNvbnN0IHRoZW1lOiBzdHJpbmcgPSBkYXJrID8gJ2RhcmsnIDogJ2RlZmF1bHQnO1xuICAgIHRoaXMuc2V0dGluZ3NJbmRleGVkREIucHV0KCd0aGVtZScsIHRoZW1lKS50aGVuKCk7XG4gICAgdGhpcy50aGVtZVNlcnZpY2UuY2hhbmdlVGhlbWUodGhlbWUpO1xuICB9XG5cbn1cbiJdfQ==