import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Pattern } from '@dongkap/do-core';
var DeactivatedProviderPromptComponent = /** @class */ (function () {
    function DeactivatedProviderPromptComponent(ref) {
        this.ref = ref;
        this.disabled = false;
        this.patternEmail = Pattern.EMAIL;
        this.form = new FormGroup({
            email: new FormControl(),
        });
    }
    DeactivatedProviderPromptComponent.prototype.submit = function () {
        this.disabled = true;
        this.ref.close(this.form.get('email').value);
    };
    DeactivatedProviderPromptComponent.ctorParameters = function () { return [
        { type: NbDialogRef }
    ]; };
    DeactivatedProviderPromptComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-deactivated-provider-prompt',
                    template: "<nb-card>\n  <nb-card-header>\n    <h6 class=\"text-danger deactivated-label\">\n        {{ 'Deactivate Account' | translate }}\n    </h6>\n  </nb-card-header>\n  <nb-card-body>\n    <form [formGroup]=\"form\" aria-labelledby=\"title\">\n    <p>\n      {{ 'message.deactivate-form' | translate }}\n    </p>\n    <p>\n      {{ 'message.input-email' | translate }}\n    </p>\n    <input\n      [formControlName]=\"'email'\"\n      type=\"text\"\n      [required]=\"true\"\n      [pattern]=\"patternEmail\"\n      nbInput\n      class=\"deactivated-email\"\n      placeholder=\"Email\">\n    </form>\n  </nb-card-body>\n  <nb-card-footer>\n    <button\n      type=\"submit\"\n      status=\"danger\"\n      size=\"large\"\n      class=\"deactivated-button\"\n      [disabled]=\"!form.valid || disabled\"\n      (click)=\"submit()\"\n      nbButton>\n      {{ 'message.button-deactivate' | translate }}\n    </button>\n  </nb-card-footer>\n</nb-card>\n",
                    styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host input.deactivated-email{max-width:unset;width:100%}.nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.deactivated-button{width:100%}.nb-theme-dark :host input.deactivated-email{max-width:unset;width:100%}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.deactivated-button{width:100%}.nb-theme-cosmic :host input.deactivated-email{max-width:unset;width:100%}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.deactivated-button{width:100%}.nb-theme-corporate :host input.deactivated-email{max-width:unset;width:100%}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.deactivated-button{width:100%}@media (max-width:767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.deactivated-button{font-size:.6rem}.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.deactivated-button{font-size:.6rem}.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.deactivated-button{font-size:.6rem}.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.deactivated-button{font-size:.6rem}}"]
                },] }
    ];
    DeactivatedProviderPromptComponent.ctorParameters = function () { return [
        { type: NbDialogRef }
    ]; };
    return DeactivatedProviderPromptComponent;
}());
export { DeactivatedProviderPromptComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhY3RpdmF0ZWQtcHJvdmlkZXItcHJvbXB0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWV4dHJhLyIsInNvdXJjZXMiOlsibGliL3NlY3VyaXR5L3Byb21wdC9kZWFjdGl2YXRlZC1wcm92aWRlci1wcm9tcHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTNDO0lBY0UsNENBQXNCLEdBQW9EO1FBQXBELFFBQUcsR0FBSCxHQUFHLENBQWlEO1FBUG5FLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsaUJBQVksR0FBVyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBRXJDLFNBQUksR0FBYyxJQUFJLFNBQVMsQ0FBQztZQUNyQyxLQUFLLEVBQUUsSUFBSSxXQUFXLEVBQUU7U0FDekIsQ0FBQyxDQUFDO0lBR0gsQ0FBQztJQUVELG1EQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkFOMEIsV0FBVzs7O2dCQWR2QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsZzhCQUF5RDs7aUJBRTFEOzs7Z0JBUFEsV0FBVzs7SUF3QnBCLHlDQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FoQlksa0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmJEaWFsb2dSZWYgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBQYXR0ZXJuIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWRlYWN0aXZhdGVkLXByb3ZpZGVyLXByb21wdCcsXG4gIHRlbXBsYXRlVXJsOiAnZGVhY3RpdmF0ZWQtcHJvdmlkZXItcHJvbXB0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RlYWN0aXZhdGVkLXByb3ZpZGVyLXByb21wdC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEZWFjdGl2YXRlZFByb3ZpZGVyUHJvbXB0Q29tcG9uZW50IHtcblxuICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHBhdHRlcm5FbWFpbDogc3RyaW5nID0gUGF0dGVybi5FTUFJTDtcblxuICBwdWJsaWMgZm9ybTogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgZW1haWw6IG5ldyBGb3JtQ29udHJvbCgpLFxuICB9KTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVmOiBOYkRpYWxvZ1JlZjxEZWFjdGl2YXRlZFByb3ZpZGVyUHJvbXB0Q29tcG9uZW50Pikge1xuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMucmVmLmNsb3NlKHRoaXMuZm9ybS5nZXQoJ2VtYWlsJykudmFsdWUpO1xuICB9XG59XG4iXX0=