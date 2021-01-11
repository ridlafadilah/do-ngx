import { __extends } from "tslib";
import { Component, Injector } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Pattern, EncryptionService, ResponseCode, OAUTH_INFO, } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-common';
var ChangePasswordPageComponent = /** @class */ (function (_super) {
    __extends(ChangePasswordPageComponent, _super);
    function ChangePasswordPageComponent(injector) {
        var _this = _super.call(this, injector, {
            'password': [],
            'newPassword': [],
            'confirmPassword': [],
        }) || this;
        _this.injector = injector;
        _this.passwordPattern = Pattern.PASSWORD_MEDIUM;
        _this.enc = injector.get(EncryptionService);
        _this.oauthResource = injector.get(OAUTH_INFO);
        return _this;
    }
    ChangePasswordPageComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = {
            password: this.enc.encryptAES(this.oauthResource['aes_key'], this.formGroup.get('password').value),
            newPassword: this.enc.encryptAES(this.oauthResource['aes_key'], this.formGroup.get('newPassword').value),
            confirmPassword: this.enc.encryptAES(this.oauthResource['aes_key'], this.formGroup.get('confirmPassword').value),
        };
        _super.prototype.onSubmit.call(this, data, 'security', 'change-password')
            .pipe(takeUntil(this.destroy$))
            .subscribe(function (response) {
            if (response) {
                switch (response.respStatusCode) {
                    case ResponseCode.ERR_SCR0002.toString():
                        _this.formGroup.controls['password'].setErrors({
                            'incorrect': true,
                        });
                        break;
                    case ResponseCode.ERR_SCR0006.toString():
                        _this.formGroup.controls['newPassword'].setErrors({
                            'equal': true,
                        });
                        break;
                    default:
                        break;
                }
            }
        });
    };
    ChangePasswordPageComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    ChangePasswordPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-change-password-page',
                    template: "<do-page-outlet [header]=\"'Change Password'\">\n  <form [formGroup]=\"formGroup\" pagecontent>\n    <do-input-text\n      [name]=\"'password'\"\n      [label]=\"'Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      formControlName=\"password\">\n    </do-input-text>\n    <do-input-text\n      [name]=\"'newPassword'\"\n      [label]=\"'New Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      [pattern]=\"passwordPattern\"\n      xaValidateNotEqual=\"password\"\n      formControlName=\"newPassword\">\n    </do-input-text>\n    <do-input-text\n      [name]=\"'confirmPassword'\"\n      [label]=\"'Confirm Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      xaValidateEqual=\"newPassword\"\n      formControlName=\"confirmPassword\">\n    </do-input-text>\n    <do-button-submit\n      [disabledButton]=\"disabled\"\n      (onSubmit)=\"onSubmit()\"\n      [name]=\"'Update Password'\"\n      [formGroupButton]=\"formGroup\">\n    </do-button-submit>\n  </form>\n</do-page-outlet>\n",
                    styles: [""]
                },] }
    ];
    ChangePasswordPageComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return ChangePasswordPageComponent;
}(BaseFormComponent));
export { ChangePasswordPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tZXh0cmEvIiwic291cmNlcyI6WyJsaWIvcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUNMLE9BQU8sRUFDUCxpQkFBaUIsRUFDakIsWUFBWSxFQUNaLFVBQVUsR0FFWCxNQUFNLGtCQUFrQixDQUFDO0FBRTFCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZEO0lBS2lELCtDQUFzQjtJQU1yRSxxQ0FBbUIsUUFBa0I7UUFBckMsWUFDRSxrQkFBTSxRQUFRLEVBQUU7WUFDZCxVQUFVLEVBQUUsRUFBRTtZQUNkLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLGlCQUFpQixFQUFFLEVBQUU7U0FDdEIsQ0FBQyxTQUdIO1FBUmtCLGNBQVEsR0FBUixRQUFRLENBQVU7UUFKckMscUJBQWUsR0FBVyxPQUFPLENBQUMsZUFBZSxDQUFDO1FBVWhELEtBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzNDLEtBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7SUFDaEQsQ0FBQztJQUVELDhDQUFRLEdBQVI7UUFBQSxpQkEwQkM7UUF6QkMsSUFBTSxJQUFJLEdBQVE7WUFDaEIsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ2xHLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUN4RyxlQUFlLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNqSCxDQUFDO1FBQ0QsaUJBQU0sUUFBUSxZQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsaUJBQWlCLENBQWlDO2FBQzNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCLFNBQVMsQ0FBQyxVQUFDLFFBQXlCO1lBQ25DLElBQUksUUFBUSxFQUFFO2dCQUNaLFFBQVEsUUFBUSxDQUFDLGNBQWMsRUFBRTtvQkFDL0IsS0FBSyxZQUFZLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTt3QkFDdEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDOzRCQUM1QyxXQUFXLEVBQUUsSUFBSTt5QkFDbEIsQ0FBQyxDQUFDO3dCQUNILE1BQU07b0JBQ1IsS0FBSyxZQUFZLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTt3QkFDdEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDOzRCQUMvQyxPQUFPLEVBQUUsSUFBSTt5QkFDZCxDQUFDLENBQUM7d0JBQ0gsTUFBTTtvQkFDUjt3QkFDRSxNQUFNO2lCQUNUO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNiLENBQUM7O2dCQXBDNEIsUUFBUTs7O2dCQVh0QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFFbkMsc2lDQUFvRDs7aUJBQ3JEOzs7Z0JBakJtQixRQUFROztJQThENUIsa0NBQUM7Q0FBQSxBQWpERCxDQUtpRCxpQkFBaUIsR0E0Q2pFO1NBNUNZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIFBhdHRlcm4sXG4gIEVuY3J5cHRpb25TZXJ2aWNlLFxuICBSZXNwb25zZUNvZGUsXG4gIE9BVVRIX0lORk8sXG4gIFNlY3VyaXR5UmVzb3VyY2VNb2RlbCxcbn0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBBcGlCYXNlUmVzcG9uc2UgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEJhc2VGb3JtQ29tcG9uZW50IH0gZnJvbSAnQGRvbmdrYXAvZG8tY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tY2hhbmdlLXBhc3N3b3JkLXBhZ2UnLFxuICBzdHlsZVVybHM6IFsnLi9jaGFuZ2UtcGFzc3dvcmQtcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhbmdlLXBhc3N3b3JkLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlRm9ybUNvbXBvbmVudDxhbnk+IHtcblxuICBwYXNzd29yZFBhdHRlcm46IHN0cmluZyA9IFBhdHRlcm4uUEFTU1dPUkRfTUVESVVNO1xuICBwcml2YXRlIGVuYzogRW5jcnlwdGlvblNlcnZpY2U7XG4gIHByaXZhdGUgb2F1dGhSZXNvdXJjZTogU2VjdXJpdHlSZXNvdXJjZU1vZGVsO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBzdXBlcihpbmplY3Rvciwge1xuICAgICAgJ3Bhc3N3b3JkJzogW10sXG4gICAgICAnbmV3UGFzc3dvcmQnOiBbXSxcbiAgICAgICdjb25maXJtUGFzc3dvcmQnOiBbXSxcbiAgICB9KTtcbiAgICB0aGlzLmVuYyA9IGluamVjdG9yLmdldChFbmNyeXB0aW9uU2VydmljZSk7XG4gICAgdGhpcy5vYXV0aFJlc291cmNlID0gaW5qZWN0b3IuZ2V0KE9BVVRIX0lORk8pO1xuICB9XG5cbiAgb25TdWJtaXQoKTogdm9pZCB7XG4gICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgcGFzc3dvcmQ6IHRoaXMuZW5jLmVuY3J5cHRBRVModGhpcy5vYXV0aFJlc291cmNlWydhZXNfa2V5J10sIHRoaXMuZm9ybUdyb3VwLmdldCgncGFzc3dvcmQnKS52YWx1ZSksXG4gICAgICBuZXdQYXNzd29yZDogdGhpcy5lbmMuZW5jcnlwdEFFUyh0aGlzLm9hdXRoUmVzb3VyY2VbJ2Flc19rZXknXSwgdGhpcy5mb3JtR3JvdXAuZ2V0KCduZXdQYXNzd29yZCcpLnZhbHVlKSxcbiAgICAgIGNvbmZpcm1QYXNzd29yZDogdGhpcy5lbmMuZW5jcnlwdEFFUyh0aGlzLm9hdXRoUmVzb3VyY2VbJ2Flc19rZXknXSwgdGhpcy5mb3JtR3JvdXAuZ2V0KCdjb25maXJtUGFzc3dvcmQnKS52YWx1ZSksXG4gICAgfTtcbiAgICAoc3VwZXIub25TdWJtaXQoZGF0YSwgJ3NlY3VyaXR5JywgJ2NoYW5nZS1wYXNzd29yZCcpIGFzIE9ic2VydmFibGU8QXBpQmFzZVJlc3BvbnNlPilcbiAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZXNwb25zZS5yZXNwU3RhdHVzQ29kZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBSZXNwb25zZUNvZGUuRVJSX1NDUjAwMDIudG9TdHJpbmcoKTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3Bhc3N3b3JkJ10uc2V0RXJyb3JzKHtcbiAgICAgICAgICAgICAgICAgICAgICAnaW5jb3JyZWN0JzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSBSZXNwb25zZUNvZGUuRVJSX1NDUjAwMDYudG9TdHJpbmcoKTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ25ld1Bhc3N3b3JkJ10uc2V0RXJyb3JzKHtcbiAgICAgICAgICAgICAgICAgICAgICAnZXF1YWwnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==