import { Component } from '@angular/core';

@Component({
  selector: 'do-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
  <span class="created-by">© {{year}} <b><a href="#" target="_blank">{{ 'Dongkap' | translate }}</a></b></span>
  `,
})
export class FooterComponent {
  public year: number = (new Date()).getFullYear();
}
