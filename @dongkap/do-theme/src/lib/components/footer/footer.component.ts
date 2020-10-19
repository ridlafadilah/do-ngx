import { Component } from '@angular/core';

@Component({
  selector: 'do-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
  <span class="created-by">© {{year}} {{ 'Dongkap' | translate }}</span>
  <a [routerLink]="'/app/user/terms'">{{ 'Terms & Conditions' | translate }}</a>
  <a [routerLink]="'/app/user/privacy-policy'">{{ 'Privacy Policy' | translate }}</a>
  `,
})
export class FooterComponent {
  public year: number = (new Date()).getFullYear();
}
