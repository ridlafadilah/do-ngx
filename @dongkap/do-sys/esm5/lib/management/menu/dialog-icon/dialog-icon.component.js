import { Component } from '@angular/core';
import { NbDialogRef, NbIconLibraries } from '@nebular/theme';
var DialogIconComponent = /** @class */ (function () {
    function DialogIconComponent(ref, iconsLibrary) {
        this.ref = ref;
        this.evaIcons = [];
        this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
            .filter(function (icon) { return icon.indexOf('outline') !== -1; });
    }
    DialogIconComponent.prototype.choose = function (icon) {
        this.ref.close(icon);
    };
    DialogIconComponent.ctorParameters = function () { return [
        { type: NbDialogRef },
        { type: NbIconLibraries }
    ]; };
    DialogIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-dialog-icon',
                    template: "<nb-card>\n  <nb-card-header>\n    {{ 'Choose Icon' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <nb-icon *ngFor=\"let icon of evaIcons\" class=\"choose-icon\" (click)=\"choose(icon)\" [icon]=\"icon\" pack=\"eva\"></nb-icon>\n  </nb-card-body>\n</nb-card>\n",
                    styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host .choose-icon{margin:.75rem;cursor:pointer}.nb-theme-dark :host .choose-icon{margin:.75rem;cursor:pointer}.nb-theme-cosmic :host .choose-icon{margin:.75rem;cursor:pointer}.nb-theme-corporate :host .choose-icon{margin:.75rem;cursor:pointer}"]
                },] }
    ];
    DialogIconComponent.ctorParameters = function () { return [
        { type: NbDialogRef },
        { type: NbIconLibraries }
    ]; };
    return DialogIconComponent;
}());
export { DialogIconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tc3lzLyIsInNvdXJjZXMiOlsibGliL21hbmFnZW1lbnQvbWVudS9kaWFsb2ctaWNvbi9kaWFsb2ctaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlEO0lBU0UsNkJBQXNCLEdBQXFDLEVBQUUsWUFBNkI7UUFBcEUsUUFBRyxHQUFILEdBQUcsQ0FBa0M7UUFGcEQsYUFBUSxHQUFVLEVBQUUsQ0FBQztRQUcxQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDakUsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxvQ0FBTSxHQUFOLFVBQU8sSUFBWTtRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDOztnQkFQMEIsV0FBVztnQkFBcUMsZUFBZTs7O2dCQVQzRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsMlJBQXlDOztpQkFFMUM7OztnQkFOUSxXQUFXO2dCQUFFLGVBQWU7O0lBbUJyQywwQkFBQztDQUFBLEFBakJELElBaUJDO1NBWlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYkRpYWxvZ1JlZiwgTmJJY29uTGlicmFyaWVzIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1kaWFsb2ctaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWljb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGlhbG9nLWljb24uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nSWNvbkNvbXBvbmVudCB7XG5cbiAgcHVibGljIGV2YUljb25zOiBhbnlbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWY6IE5iRGlhbG9nUmVmPERpYWxvZ0ljb25Db21wb25lbnQ+LCBpY29uc0xpYnJhcnk6IE5iSWNvbkxpYnJhcmllcykge1xuICAgIHRoaXMuZXZhSWNvbnMgPSBBcnJheS5mcm9tKGljb25zTGlicmFyeS5nZXRQYWNrKCdldmEnKS5pY29ucy5rZXlzKCkpXG4gICAgICAuZmlsdGVyKGljb24gPT4gaWNvbi5pbmRleE9mKCdvdXRsaW5lJykgIT09IC0xKTtcbiAgfVxuXG4gIGNob29zZShpY29uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJlZi5jbG9zZShpY29uKTtcbiAgfVxufVxuIl19