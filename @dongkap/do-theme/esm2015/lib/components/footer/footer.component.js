import { Component } from '@angular/core';
export class FooterComponent {
    constructor() {
        this.year = (new Date()).getFullYear();
    }
}
FooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-footer',
                template: `
  <span class="created-by">© {{year}} {{ 'Dongkap' | translate }}</span>
  <a [routerLink]="'/app/user/terms'">{{ 'message.terms-conditions' | translate }}</a>
  <a [routerLink]="'/app/user/privacy-policy'">{{ 'message.privacy-policy' | translate }}</a>
  `,
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host{width:100%;display:flex}.nb-theme-default :host a{padding:0 0 0 1rem;color:#8f9bb3;transition:color .1s ease-out}.nb-theme-default :host a:hover{color:#222b45}.nb-theme-dark :host{width:100%;display:flex}.nb-theme-dark :host a{padding:0 0 0 1rem;color:#8f9bb3;transition:color .1s ease-out}.nb-theme-dark :host a:hover{color:#fff}.nb-theme-cosmic :host{width:100%;display:flex}.nb-theme-cosmic :host a{padding:0 0 0 1rem;color:#b4b4db;transition:color .1s ease-out}.nb-theme-cosmic :host a:hover{color:#fff}.nb-theme-corporate :host{width:100%;display:flex}.nb-theme-corporate :host a{padding:0 0 0 1rem;color:#8f9bb3;transition:color .1s ease-out}.nb-theme-corporate :host a:hover{color:#222b45}"]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLXRoZW1lLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVcxQyxNQUFNLE9BQU8sZUFBZTtJQVQ1QjtRQVVTLFNBQUksR0FBVyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuRCxDQUFDOzs7WUFYQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBRXJCLFFBQVEsRUFBRTs7OztHQUlUOzthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWZvb3RlcicsXG4gIHN0eWxlVXJsczogWycuL2Zvb3Rlci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICA8c3BhbiBjbGFzcz1cImNyZWF0ZWQtYnlcIj7CqSB7e3llYXJ9fSB7eyAnRG9uZ2thcCcgfCB0cmFuc2xhdGUgfX08L3NwYW4+XG4gIDxhIFtyb3V0ZXJMaW5rXT1cIicvYXBwL3VzZXIvdGVybXMnXCI+e3sgJ21lc3NhZ2UudGVybXMtY29uZGl0aW9ucycgfCB0cmFuc2xhdGUgfX08L2E+XG4gIDxhIFtyb3V0ZXJMaW5rXT1cIicvYXBwL3VzZXIvcHJpdmFjeS1wb2xpY3knXCI+e3sgJ21lc3NhZ2UucHJpdmFjeS1wb2xpY3knIHwgdHJhbnNsYXRlIH19PC9hPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQge1xuICBwdWJsaWMgeWVhcjogbnVtYmVyID0gKG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCk7XG59XG4iXX0=