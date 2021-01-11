import { Component } from '@angular/core';
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.year = (new Date()).getFullYear();
    }
    FooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-footer',
                    template: "\n  <span class=\"created-by\">\u00A9 {{year}} {{ 'Dongkap' | translate }}</span>\n  <a [routerLink]=\"'/app/user/terms'\">{{ 'message.terms-conditions' | translate }}</a>\n  <a [routerLink]=\"'/app/user/privacy-policy'\">{{ 'message.privacy-policy' | translate }}</a>\n  ",
                    styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host{width:100%;display:flex}.nb-theme-default :host a{padding:0 0 0 1rem;color:#8f9bb3;transition:color .1s ease-out}.nb-theme-default :host a:hover{color:#222b45}.nb-theme-dark :host{width:100%;display:flex}.nb-theme-dark :host a{padding:0 0 0 1rem;color:#8f9bb3;transition:color .1s ease-out}.nb-theme-dark :host a:hover{color:#fff}.nb-theme-cosmic :host{width:100%;display:flex}.nb-theme-cosmic :host a{padding:0 0 0 1rem;color:#b4b4db;transition:color .1s ease-out}.nb-theme-cosmic :host a:hover{color:#fff}.nb-theme-corporate :host{width:100%;display:flex}.nb-theme-corporate :host a{padding:0 0 0 1rem;color:#8f9bb3;transition:color .1s ease-out}.nb-theme-corporate :host a:hover{color:#222b45}"]
                },] }
    ];
    return FooterComponent;
}());
export { FooterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLXRoZW1lLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQztJQUFBO1FBVVMsU0FBSSxHQUFXLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25ELENBQUM7O2dCQVhBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFFckIsUUFBUSxFQUFFLGtSQUlUOztpQkFDRjs7SUFHRCxzQkFBQztDQUFBLEFBWEQsSUFXQztTQUZZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tZm9vdGVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm9vdGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gIDxzcGFuIGNsYXNzPVwiY3JlYXRlZC1ieVwiPsKpIHt7eWVhcn19IHt7ICdEb25na2FwJyB8IHRyYW5zbGF0ZSB9fTwvc3Bhbj5cbiAgPGEgW3JvdXRlckxpbmtdPVwiJy9hcHAvdXNlci90ZXJtcydcIj57eyAnbWVzc2FnZS50ZXJtcy1jb25kaXRpb25zJyB8IHRyYW5zbGF0ZSB9fTwvYT5cbiAgPGEgW3JvdXRlckxpbmtdPVwiJy9hcHAvdXNlci9wcml2YWN5LXBvbGljeSdcIj57eyAnbWVzc2FnZS5wcml2YWN5LXBvbGljeScgfCB0cmFuc2xhdGUgfX08L2E+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCB7XG4gIHB1YmxpYyB5ZWFyOiBudW1iZXIgPSAobmV3IERhdGUoKSkuZ2V0RnVsbFllYXIoKTtcbn1cbiJdfQ==