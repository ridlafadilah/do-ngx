import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
export class DeactivatedPromptComponent {
    constructor(ref) {
        this.ref = ref;
        this.disabled = false;
    }
    submit(password) {
        this.disabled = true;
        this.ref.close(password);
    }
}
DeactivatedPromptComponent.ctorParameters = () => [
    { type: NbDialogRef }
];
DeactivatedPromptComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-deactivated-prompt',
                template: "<nb-card>\n  <nb-card-header>\n    <h6 class=\"text-danger deactivated-label\">\n        {{ 'Deactivate Account' | translate }}\n    </h6>\n  </nb-card-header>\n  <nb-card-body>\n    <p>\n      {{ 'message.deactivate-form' | translate }}\n    </p>\n    <p>\n      {{ 'message.input-password' | translate }}\n    </p>\n    <input\n      [(ngModel)]=\"password\"\n      type=\"password\"\n      nbInput\n      class=\"deactivated-password\"\n      placeholder=\"{{ 'Password' | translate }}\">\n  </nb-card-body>\n  <nb-card-footer>\n    <button\n      type=\"submit\"\n      status=\"danger\"\n      size=\"large\"\n      class=\"deactivated-button\"\n      [disabled]=\"!password || disabled\"\n      (click)=\"submit(password)\"\n      nbButton>\n      {{ 'message.button-deactivate' | translate }}\n    </button>\n  </nb-card-footer>\n</nb-card>\n",
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.deactivated-button{width:100%}.nb-theme-dark :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.deactivated-button{width:100%}.nb-theme-cosmic :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.deactivated-button{width:100%}.nb-theme-corporate :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.deactivated-button{width:100%}@media (max-width:767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.deactivated-button{font-size:.6rem}.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.deactivated-button{font-size:.6rem}.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.deactivated-button{font-size:.6rem}.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.deactivated-button{font-size:.6rem}}"]
            },] }
];
DeactivatedPromptComponent.ctorParameters = () => [
    { type: NbDialogRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhY3RpdmF0ZWQtcHJvbXB0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWV4dHJhLyIsInNvdXJjZXMiOlsibGliL3NlY3VyaXR5L3Byb21wdC9kZWFjdGl2YXRlZC1wcm9tcHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzdDLE1BQU0sT0FBTywwQkFBMEI7SUFLckMsWUFBc0IsR0FBNEM7UUFBNUMsUUFBRyxHQUFILEdBQUcsQ0FBeUM7UUFIM0QsYUFBUSxHQUFZLEtBQUssQ0FBQztJQUlqQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFFBQVE7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7WUFOMEIsV0FBVzs7O1lBVnZDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyw2MUJBQWdEOzthQUVqRDs7O1lBTlEsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmJEaWFsb2dSZWYgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWRlYWN0aXZhdGVkLXByb21wdCcsXG4gIHRlbXBsYXRlVXJsOiAnZGVhY3RpdmF0ZWQtcHJvbXB0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RlYWN0aXZhdGVkLXByb21wdC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEZWFjdGl2YXRlZFByb21wdENvbXBvbmVudCB7XG5cbiAgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWY6IE5iRGlhbG9nUmVmPERlYWN0aXZhdGVkUHJvbXB0Q29tcG9uZW50Pikge1xuICB9XG5cbiAgc3VibWl0KHBhc3N3b3JkKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5yZWYuY2xvc2UocGFzc3dvcmQpO1xuICB9XG59XG4iXX0=