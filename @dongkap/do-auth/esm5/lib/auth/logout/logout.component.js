import { Component } from '@angular/core';
import { AuthTokenService } from '../../services/auth-token.service';
var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authTokenService) {
        this.authTokenService = authTokenService;
        this.authTokenService.logout();
    }
    LogoutComponent.ctorParameters = function () { return [
        { type: AuthTokenService }
    ]; };
    LogoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-logout',
                    template: "<p class=\"sub-title\">{{ 'message.logout' | translate }}</p>\n<div class=\"spinner-area\" [nbSpinner]=\"true\" nbSpinnerSize=\"small\" nbSpinnerStatus=\"info\">",
                    styles: [".nb-theme-default :host .sub-title{margin:1rem}.nb-theme-default :host .spinner-area{height:22px}.nb-theme-default :host ::ng-deep nb-spinner{background:0 0!important}.nb-theme-dark :host .sub-title{margin:1rem}.nb-theme-dark :host .spinner-area{height:22px}.nb-theme-dark :host ::ng-deep nb-spinner{background:0 0!important}.nb-theme-cosmic :host .sub-title{margin:1rem}.nb-theme-cosmic :host .spinner-area{height:22px}.nb-theme-cosmic :host ::ng-deep nb-spinner{background:0 0!important}.nb-theme-corporate :host .sub-title{margin:1rem}.nb-theme-corporate :host .spinner-area{height:22px}.nb-theme-corporate :host ::ng-deep nb-spinner{background:0 0!important}"]
                },] }
    ];
    LogoutComponent.ctorParameters = function () { return [
        { type: AuthTokenService }
    ]; };
    return LogoutComponent;
}());
export { LogoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWF1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXJFO0lBT0kseUJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNuQyxDQUFDOztnQkFGcUMsZ0JBQWdCOzs7Z0JBUHpELFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFFckIsNktBQW9DOztpQkFDdkM7OztnQkFOUSxnQkFBZ0I7O0lBWXpCLHNCQUFDO0NBQUEsQUFWRCxJQVVDO1NBTFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFRva2VuU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGgtdG9rZW4uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZG8tbG9nb3V0JyxcbiAgICBzdHlsZVVybHM6IFsnbG9nb3V0LmNvbXBvbmVudC5zY3NzJ10sXG4gICAgdGVtcGxhdGVVcmw6ICdsb2dvdXQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dvdXRDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoVG9rZW5TZXJ2aWNlOiBBdXRoVG9rZW5TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuYXV0aFRva2VuU2VydmljZS5sb2dvdXQoKTtcbiAgICB9XG59XG4iXX0=