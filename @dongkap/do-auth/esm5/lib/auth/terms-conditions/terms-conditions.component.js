import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
var TermsConditionsComponent = /** @class */ (function () {
    function TermsConditionsComponent(ref) {
        this.ref = ref;
        this.action = 'Agree';
    }
    TermsConditionsComponent.prototype.submit = function () {
        this.ref.close(true);
    };
    TermsConditionsComponent.ctorParameters = function () { return [
        { type: NbDialogRef }
    ]; };
    TermsConditionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-terms-conditions',
                    template: "<nb-card [size]=\"'medium'\">\n  <nb-card-header>\n    <h2>\n      <strong>\n        {{ 'header.terms-conditions' | translate }}\n      </strong>\n    </h2>\n  </nb-card-header>\n  <nb-card-body>\n    <div [innerHTML]=\"content\"></div>\n  </nb-card-body>\n  <nb-card-footer>\n    <button\n      type=\"submit\"\n      status=\"primary\"\n      size=\"large\"\n      class=\"terms-button\"\n      (click)=\"submit()\"\n      nbButton>\n      {{ action | translate }}\n    </button>\n  </nb-card-footer>\n</nb-card>\n",
                    styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.terms-button{width:100%}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.terms-button{width:100%}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.terms-button{width:100%}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.terms-button{width:100%}@media (max-width:767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.terms-button{font-size:.6rem}.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.terms-button{font-size:.6rem}.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.terms-button{font-size:.6rem}.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.terms-button{font-size:.6rem}}"]
                },] }
    ];
    TermsConditionsComponent.ctorParameters = function () { return [
        { type: NbDialogRef }
    ]; };
    TermsConditionsComponent.propDecorators = {
        content: [{ type: Input }],
        action: [{ type: Input }]
    };
    return TermsConditionsComponent;
}());
export { TermsConditionsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVybXMtY29uZGl0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGgvdGVybXMtY29uZGl0aW9ucy90ZXJtcy1jb25kaXRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0M7SUFVRSxrQ0FBc0IsR0FBMEM7UUFBMUMsUUFBRyxHQUFILEdBQUcsQ0FBdUM7UUFGdkQsV0FBTSxHQUFzQixPQUFPLENBQUM7SUFHN0MsQ0FBQztJQUVELHlDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDOztnQkFMMEIsV0FBVzs7O2dCQVZ2QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsZ2hCQUE4Qzs7aUJBRS9DOzs7Z0JBTlEsV0FBVzs7OzBCQVNqQixLQUFLO3lCQUNMLEtBQUs7O0lBUVIsK0JBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQVhZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5iRGlhbG9nUmVmIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby10ZXJtcy1jb25kaXRpb25zJyxcbiAgdGVtcGxhdGVVcmw6ICd0ZXJtcy1jb25kaXRpb25zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rlcm1zLWNvbmRpdGlvbnMuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGVybXNDb25kaXRpb25zQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBjb250ZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFjdGlvbjogJ0FncmVlJyB8ICdDbG9zZScgPSAnQWdyZWUnO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWY6IE5iRGlhbG9nUmVmPFRlcm1zQ29uZGl0aW9uc0NvbXBvbmVudD4pIHtcbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICB0aGlzLnJlZi5jbG9zZSh0cnVlKTtcbiAgfVxufVxuIl19