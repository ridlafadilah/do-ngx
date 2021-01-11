import { Component, Injector } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Pattern, EncryptionService, ResponseCode, OAUTH_INFO, } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-common';
export class ChangePasswordPageComponent extends BaseFormComponent {
    constructor(injector) {
        super(injector, {
            'password': [],
            'newPassword': [],
            'confirmPassword': [],
        });
        this.injector = injector;
        this.passwordPattern = Pattern.PASSWORD_MEDIUM;
        this.enc = injector.get(EncryptionService);
        this.oauthResource = injector.get(OAUTH_INFO);
    }
    onSubmit() {
        const data = {
            password: this.enc.encryptAES(this.oauthResource['aes_key'], this.formGroup.get('password').value),
            newPassword: this.enc.encryptAES(this.oauthResource['aes_key'], this.formGroup.get('newPassword').value),
            confirmPassword: this.enc.encryptAES(this.oauthResource['aes_key'], this.formGroup.get('confirmPassword').value),
        };
        super.onSubmit(data, 'security', 'change-password')
            .pipe(takeUntil(this.destroy$))
            .subscribe((response) => {
            if (response) {
                switch (response.respStatusCode) {
                    case ResponseCode.ERR_SCR0002.toString():
                        this.formGroup.controls['password'].setErrors({
                            'incorrect': true,
                        });
                        break;
                    case ResponseCode.ERR_SCR0006.toString():
                        this.formGroup.controls['newPassword'].setErrors({
                            'equal': true,
                        });
                        break;
                    default:
                        break;
                }
            }
        });
    }
}
ChangePasswordPageComponent.ctorParameters = () => [
    { type: Injector }
];
ChangePasswordPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-change-password-page',
                template: "<do-page-outlet [header]=\"'Change Password'\">\n  <form [formGroup]=\"formGroup\" pagecontent>\n    <do-input-text\n      [name]=\"'password'\"\n      [label]=\"'Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      formControlName=\"password\">\n    </do-input-text>\n    <do-input-text\n      [name]=\"'newPassword'\"\n      [label]=\"'New Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      [pattern]=\"passwordPattern\"\n      xaValidateNotEqual=\"password\"\n      formControlName=\"newPassword\">\n    </do-input-text>\n    <do-input-text\n      [name]=\"'confirmPassword'\"\n      [label]=\"'Confirm Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      xaValidateEqual=\"newPassword\"\n      formControlName=\"confirmPassword\">\n    </do-input-text>\n    <do-button-submit\n      [disabledButton]=\"disabled\"\n      (onSubmit)=\"onSubmit()\"\n      [name]=\"'Update Password'\"\n      [formGroupButton]=\"formGroup\">\n    </do-button-submit>\n  </form>\n</do-page-outlet>\n",
                styles: [""]
            },] }
];
ChangePasswordPageComponent.ctorParameters = () => [
    { type: Injector }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tZXh0cmEvIiwic291cmNlcyI6WyJsaWIvcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsT0FBTyxFQUNQLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osVUFBVSxHQUVYLE1BQU0sa0JBQWtCLENBQUM7QUFFMUIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFPdkQsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGlCQUFzQjtJQU1yRSxZQUFtQixRQUFrQjtRQUNuQyxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ2QsVUFBVSxFQUFFLEVBQUU7WUFDZCxhQUFhLEVBQUUsRUFBRTtZQUNqQixpQkFBaUIsRUFBRSxFQUFFO1NBQ3RCLENBQUMsQ0FBQztRQUxjLGFBQVEsR0FBUixRQUFRLENBQVU7UUFKckMsb0JBQWUsR0FBVyxPQUFPLENBQUMsZUFBZSxDQUFDO1FBVWhELElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sSUFBSSxHQUFRO1lBQ2hCLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNsRyxXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDeEcsZUFBZSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDakgsQ0FBQztRQUNELEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsQ0FBaUM7YUFDM0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUyxDQUFDLENBQUMsUUFBeUIsRUFBRSxFQUFFO1lBQ3ZDLElBQUksUUFBUSxFQUFFO2dCQUNaLFFBQVEsUUFBUSxDQUFDLGNBQWMsRUFBRTtvQkFDL0IsS0FBSyxZQUFZLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTt3QkFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDOzRCQUM1QyxXQUFXLEVBQUUsSUFBSTt5QkFDbEIsQ0FBQyxDQUFDO3dCQUNILE1BQU07b0JBQ1IsS0FBSyxZQUFZLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTt3QkFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDOzRCQUMvQyxPQUFPLEVBQUUsSUFBSTt5QkFDZCxDQUFDLENBQUM7d0JBQ0gsTUFBTTtvQkFDUjt3QkFDRSxNQUFNO2lCQUNUO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNiLENBQUM7OztZQXBDNEIsUUFBUTs7O1lBWHRDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUVuQyxzaUNBQW9EOzthQUNyRDs7O1lBakJtQixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgUGF0dGVybixcbiAgRW5jcnlwdGlvblNlcnZpY2UsXG4gIFJlc3BvbnNlQ29kZSxcbiAgT0FVVEhfSU5GTyxcbiAgU2VjdXJpdHlSZXNvdXJjZU1vZGVsLFxufSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQmFzZUZvcm1Db21wb25lbnQgfSBmcm9tICdAZG9uZ2thcC9kby1jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1jaGFuZ2UtcGFzc3dvcmQtcGFnZScsXG4gIHN0eWxlVXJsczogWycuL2NoYW5nZS1wYXNzd29yZC1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFuZ2UtcGFzc3dvcmQtcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkUGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGb3JtQ29tcG9uZW50PGFueT4ge1xuXG4gIHBhc3N3b3JkUGF0dGVybjogc3RyaW5nID0gUGF0dGVybi5QQVNTV09SRF9NRURJVU07XG4gIHByaXZhdGUgZW5jOiBFbmNyeXB0aW9uU2VydmljZTtcbiAgcHJpdmF0ZSBvYXV0aFJlc291cmNlOiBTZWN1cml0eVJlc291cmNlTW9kZWw7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIHN1cGVyKGluamVjdG9yLCB7XG4gICAgICAncGFzc3dvcmQnOiBbXSxcbiAgICAgICduZXdQYXNzd29yZCc6IFtdLFxuICAgICAgJ2NvbmZpcm1QYXNzd29yZCc6IFtdLFxuICAgIH0pO1xuICAgIHRoaXMuZW5jID0gaW5qZWN0b3IuZ2V0KEVuY3J5cHRpb25TZXJ2aWNlKTtcbiAgICB0aGlzLm9hdXRoUmVzb3VyY2UgPSBpbmplY3Rvci5nZXQoT0FVVEhfSU5GTyk7XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICBwYXNzd29yZDogdGhpcy5lbmMuZW5jcnlwdEFFUyh0aGlzLm9hdXRoUmVzb3VyY2VbJ2Flc19rZXknXSwgdGhpcy5mb3JtR3JvdXAuZ2V0KCdwYXNzd29yZCcpLnZhbHVlKSxcbiAgICAgIG5ld1Bhc3N3b3JkOiB0aGlzLmVuYy5lbmNyeXB0QUVTKHRoaXMub2F1dGhSZXNvdXJjZVsnYWVzX2tleSddLCB0aGlzLmZvcm1Hcm91cC5nZXQoJ25ld1Bhc3N3b3JkJykudmFsdWUpLFxuICAgICAgY29uZmlybVBhc3N3b3JkOiB0aGlzLmVuYy5lbmNyeXB0QUVTKHRoaXMub2F1dGhSZXNvdXJjZVsnYWVzX2tleSddLCB0aGlzLmZvcm1Hcm91cC5nZXQoJ2NvbmZpcm1QYXNzd29yZCcpLnZhbHVlKSxcbiAgICB9O1xuICAgIChzdXBlci5vblN1Ym1pdChkYXRhLCAnc2VjdXJpdHknLCAnY2hhbmdlLXBhc3N3b3JkJykgYXMgT2JzZXJ2YWJsZTxBcGlCYXNlUmVzcG9uc2U+KVxuICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc3BvbnNlLnJlc3BTdGF0dXNDb2RlKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIFJlc3BvbnNlQ29kZS5FUlJfU0NSMDAwMi50b1N0cmluZygpOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1sncGFzc3dvcmQnXS5zZXRFcnJvcnMoe1xuICAgICAgICAgICAgICAgICAgICAgICdpbmNvcnJlY3QnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIFJlc3BvbnNlQ29kZS5FUlJfU0NSMDAwNi50b1N0cmluZygpOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snbmV3UGFzc3dvcmQnXS5zZXRFcnJvcnMoe1xuICAgICAgICAgICAgICAgICAgICAgICdlcXVhbCc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gIH1cblxufVxuIl19