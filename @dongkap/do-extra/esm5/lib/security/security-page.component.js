import { __extends } from "tslib";
import { Component, Injector } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { NbDialogService } from '@nebular/theme';
import { ResponseCode, OAUTH_INFO, EncryptionService } from '@dongkap/do-core';
import { AuthIndexedDBService, AuthTokenService } from '@dongkap/do-auth';
import { BaseFormComponent } from '@dongkap/do-common';
import { DeactivatedPromptComponent } from './prompt/deactivated-prompt.component';
import { DeactivatedProviderPromptComponent } from './prompt/deactivated-provider-prompt.component';
var SecurityPageComponent = /** @class */ (function (_super) {
    __extends(SecurityPageComponent, _super);
    function SecurityPageComponent(injector, dialogService, authIndexedDB) {
        var _this = _super.call(this, injector, {
            'password': [],
        }) || this;
        _this.injector = injector;
        _this.dialogService = dialogService;
        _this.authIndexedDB = authIndexedDB;
        _this.authProvider = true;
        _this.enc = injector.get(EncryptionService);
        _this.oauthResource = injector.get(OAUTH_INFO);
        _this.authToken = injector.get(AuthTokenService);
        _this.authIndexedDB.getEnc('provider').then(function (value) {
            _this.provider = {
                'value': value,
            };
            if (value === 'local') {
                _this.authProvider = false;
            }
        });
        return _this;
    }
    SecurityPageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.disabled = true;
        if (this.authProvider) {
            this.dialogService.open(DeactivatedProviderPromptComponent)
                .onClose.subscribe(function (email) {
                if (email) {
                    _this.disabled = true;
                    var data = {
                        'email': email,
                        'provider': _this.provider['value'],
                    };
                    _super.prototype.onSubmit.call(_this, data, 'security', 'deactivated')
                        .pipe(takeUntil(_this.destroy$))
                        .subscribe(function (response) {
                        if (response) {
                            if (response.respStatusCode === ResponseCode.OK_SCR003.toString()) {
                                _this.authToken.logout();
                            }
                        }
                    });
                }
                else {
                    _this.disabled = false;
                }
            });
        }
        else {
            this.dialogService.open(DeactivatedPromptComponent)
                .onClose.subscribe(function (password) {
                if (password) {
                    _this.disabled = true;
                    var data = {
                        password: _this.enc.encryptAES(_this.oauthResource['aes_key'], password),
                    };
                    _super.prototype.onSubmit.call(_this, data, 'security', 'deactivated')
                        .pipe(takeUntil(_this.destroy$))
                        .subscribe(function (response) {
                        if (response) {
                            if (response.respStatusCode === ResponseCode.OK_SCR003.toString()) {
                                _this.authToken.logout();
                            }
                        }
                    });
                }
                else {
                    _this.disabled = false;
                }
            });
        }
    };
    SecurityPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: NbDialogService },
        { type: AuthIndexedDBService }
    ]; };
    SecurityPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-security-page',
                    template: "<do-change-password-page *ngIf=\"!authProvider\"></do-change-password-page>\n<nb-card *ngIf=\"authProvider\">\n    <nb-card-body>\n        <div class=\"row\">\n            <nb-icon [status]=\"'info'\" [icon]=\"'google'\" class=\"icon-provider\"></nb-icon>\n            <p class=\"text-provider\">\n                {{ 'message.provider' | translate:provider}}\n            </p>\n        </div>\n    </nb-card-body>\n</nb-card>\n<nb-card>\n    <nb-card-body>\n        <div class=\"row\">\n            <div class=\"col-md-3 col-lg-3 col-xxxl-6\">\n                <button\n                    type=\"button\"\n                    status=\"danger\"\n                    size=\"large\"\n                    class=\"deactivated-button\"\n                    [disabled]=\"disabled\"\n                    (click)=\"onSubmit()\"\n                    nbButton>\n                    {{ 'Deactivate Account' | translate }}\n                </button>\n            </div>\n            <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n                <h6 class=\"text-danger deactivated-label\">\n                    {{ 'message.deactivated-account' | translate }}\n                </h6>\n            </div>\n        </div>\n    </nb-card-body>\n</nb-card>\n",
                    styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host button.deactivated-button{width:100%;margin:.5rem 0}.nb-theme-default :host h6.deactivated-label{padding-top:10px;text-align:center}.nb-theme-default :host .icon-provider{margin:1rem 0 1rem 1.5rem}.nb-theme-default :host .text-provider{margin:1rem 1.5rem}@media (max-width:767.98px){.nb-theme-default :host .icon-provider{margin:1rem 0 1rem .5rem}.nb-theme-default :host .text-provider{margin:1rem 0 1rem .5rem}}.nb-theme-dark :host button.deactivated-button{width:100%;margin:.5rem 0}.nb-theme-dark :host h6.deactivated-label{padding-top:10px;text-align:center}.nb-theme-dark :host .icon-provider{margin:1rem 0 1rem 1.5rem}.nb-theme-dark :host .text-provider{margin:1rem 1.5rem}@media (max-width:767.98px){.nb-theme-dark :host .icon-provider{margin:1rem 0 1rem .5rem}.nb-theme-dark :host .text-provider{margin:1rem 0 1rem .5rem}}.nb-theme-cosmic :host button.deactivated-button{width:100%;margin:.5rem 0}.nb-theme-cosmic :host h6.deactivated-label{padding-top:10px;text-align:center}.nb-theme-cosmic :host .icon-provider{margin:1rem 0 1rem 1.5rem}.nb-theme-cosmic :host .text-provider{margin:1rem 1.5rem}@media (max-width:767.98px){.nb-theme-cosmic :host .icon-provider{margin:1rem 0 1rem .5rem}.nb-theme-cosmic :host .text-provider{margin:1rem 0 1rem .5rem}}.nb-theme-corporate :host button.deactivated-button{width:100%;margin:.5rem 0}.nb-theme-corporate :host h6.deactivated-label{padding-top:10px;text-align:center}.nb-theme-corporate :host .icon-provider{margin:1rem 0 1rem 1.5rem}.nb-theme-corporate :host .text-provider{margin:1rem 1.5rem}@media (max-width:767.98px){.nb-theme-corporate :host .icon-provider{margin:1rem 0 1rem .5rem}.nb-theme-corporate :host .text-provider{margin:1rem 0 1rem .5rem}}"]
                },] }
    ];
    SecurityPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: NbDialogService },
        { type: AuthIndexedDBService }
    ]; };
    return SecurityPageComponent;
}(BaseFormComponent));
export { SecurityPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHktcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1leHRyYS8iLCJzb3VyY2VzIjpbImxpYi9zZWN1cml0eS9zZWN1cml0eS1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsWUFBWSxFQUNaLFVBQVUsRUFFVixpQkFBaUIsRUFDakIsTUFBTSxrQkFBa0IsQ0FBQztBQUUzQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNuRixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUVwRztJQUsyQyx5Q0FBc0I7SUFRL0QsK0JBQW1CLFFBQWtCLEVBQzNCLGFBQThCLEVBQzlCLGFBQW1DO1FBRjdDLFlBR0Usa0JBQU0sUUFBUSxFQUFFO1lBQ2QsVUFBVSxFQUFFLEVBQUU7U0FDZixDQUFDLFNBWUg7UUFqQmtCLGNBQVEsR0FBUixRQUFRLENBQVU7UUFDM0IsbUJBQWEsR0FBYixhQUFhLENBQWlCO1FBQzlCLG1CQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUx0QyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQVNsQyxLQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMzQyxLQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENB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Qm1CLFFBQVE7Z0JBR25CLGVBQWU7Z0JBUWYsb0JBQW9COztJQXFGN0IsNEJBQUM7Q0FBQSxBQWhGRCxDQUsyQyxpQkFBaUIsR0EyRTNEO1NBM0VZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5iRGlhbG9nU2VydmljZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7XG4gIFJlc3BvbnNlQ29kZSxcbiAgT0FVVEhfSU5GTyxcbiAgU2VjdXJpdHlSZXNvdXJjZU1vZGVsLFxuICBFbmNyeXB0aW9uU2VydmljZVxuIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBBcGlCYXNlUmVzcG9uc2UgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEF1dGhJbmRleGVkREJTZXJ2aWNlLCBBdXRoVG9rZW5TZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tYXV0aCc7XG5pbXBvcnQgeyBCYXNlRm9ybUNvbXBvbmVudCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvbW1vbic7XG5pbXBvcnQgeyBEZWFjdGl2YXRlZFByb21wdENvbXBvbmVudCB9IGZyb20gJy4vcHJvbXB0L2RlYWN0aXZhdGVkLXByb21wdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGVhY3RpdmF0ZWRQcm92aWRlclByb21wdENvbXBvbmVudCB9IGZyb20gJy4vcHJvbXB0L2RlYWN0aXZhdGVkLXByb3ZpZGVyLXByb21wdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1zZWN1cml0eS1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VjdXJpdHktcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VjdXJpdHktcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5UGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGb3JtQ29tcG9uZW50PGFueT4ge1xuXG4gIHByaXZhdGUgZW5jOiBFbmNyeXB0aW9uU2VydmljZTtcbiAgcHJpdmF0ZSBvYXV0aFJlc291cmNlOiBTZWN1cml0eVJlc291cmNlTW9kZWw7XG4gIHByaXZhdGUgYXV0aFRva2VuOiBBdXRoVG9rZW5TZXJ2aWNlO1xuICBwdWJsaWMgYXV0aFByb3ZpZGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIHByb3ZpZGVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IE5iRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhJbmRleGVkREI6IEF1dGhJbmRleGVkREJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsIHtcbiAgICAgICdwYXNzd29yZCc6IFtdLFxuICAgIH0pO1xuICAgIHRoaXMuZW5jID0gaW5qZWN0b3IuZ2V0KEVuY3J5cHRpb25TZXJ2aWNlKTtcbiAgICB0aGlzLm9hdXRoUmVzb3VyY2UgPSBpbmplY3Rvci5nZXQoT0FVVEhfSU5GTyk7XG4gICAgdGhpcy5hdXRoVG9rZW4gPSBpbmplY3Rvci5nZXQoQXV0aFRva2VuU2VydmljZSk7XG4gICAgdGhpcy5hdXRoSW5kZXhlZERCLmdldEVuYygncHJvdmlkZXInKS50aGVuKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnByb3ZpZGVyID0ge1xuICAgICAgICAndmFsdWUnOiB2YWx1ZSxcbiAgICAgIH07XG4gICAgICBpZiAodmFsdWUgPT09ICdsb2NhbCcpIHtcbiAgICAgICAgdGhpcy5hdXRoUHJvdmlkZXIgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uU3VibWl0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmF1dGhQcm92aWRlcikge1xuICAgICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oRGVhY3RpdmF0ZWRQcm92aWRlclByb21wdENvbXBvbmVudClcbiAgICAgICAgLm9uQ2xvc2Uuc3Vic2NyaWJlKChlbWFpbDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgaWYgKGVtYWlsKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGE6IGFueSA9IHtcbiAgICAgICAgICAgICAgJ2VtYWlsJzogZW1haWwsXG4gICAgICAgICAgICAgICdwcm92aWRlcic6IHRoaXMucHJvdmlkZXJbJ3ZhbHVlJ10sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgKHN1cGVyLm9uU3VibWl0KGRhdGEsICdzZWN1cml0eScsICdkZWFjdGl2YXRlZCcpIGFzIE9ic2VydmFibGU8QXBpQmFzZVJlc3BvbnNlPilcbiAgICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzcFN0YXR1c0NvZGUgPT09IFJlc3BvbnNlQ29kZS5PS19TQ1IwMDMudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhUb2tlbi5sb2dvdXQoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oRGVhY3RpdmF0ZWRQcm9tcHRDb21wb25lbnQpXG4gICAgICAgIC5vbkNsb3NlLnN1YnNjcmliZSgocGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGlmIChwYXNzd29yZCkge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLmVuYy5lbmNyeXB0QUVTKHRoaXMub2F1dGhSZXNvdXJjZVsnYWVzX2tleSddLCBwYXNzd29yZCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgKHN1cGVyLm9uU3VibWl0KGRhdGEsICdzZWN1cml0eScsICdkZWFjdGl2YXRlZCcpIGFzIE9ic2VydmFibGU8QXBpQmFzZVJlc3BvbnNlPilcbiAgICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzcFN0YXR1c0NvZGUgPT09IFJlc3BvbnNlQ29kZS5PS19TQ1IwMDMudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhUb2tlbi5sb2dvdXQoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuIl19