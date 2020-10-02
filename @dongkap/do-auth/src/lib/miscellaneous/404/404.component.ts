import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'do-404',
  styleUrls: ['./404.component.scss'],
  templateUrl: './404.component.html',
})
export class PageNotFoundComponent {

  constructor(private location: Location) {
  }

  goToHome() {
    this.location.back();
    return;
  }
}
