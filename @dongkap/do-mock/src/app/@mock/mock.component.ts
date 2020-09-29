import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-mock',
  styleUrls: ['mock.component.scss'],
  template: `
    <do-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </do-one-column-layout>
  `,
})
export class MockComponent {

  menu = MENU_ITEMS;
}
