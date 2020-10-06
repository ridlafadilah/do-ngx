import { Component, Injector, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { BaseComponent } from '@dongkap/do-common';
import { MainMenuPageComponent } from '../main/main-menu-page.component';
import { ExtraMenuPageComponent } from '../extra/extra-menu-page.component';

@Component({
  selector: 'do-menu-list-page',
  styleUrls: ['./menu-list-page.component.scss'],
  templateUrl: './menu-list-page.component.html',
})
export class MenuListPageComponent extends BaseComponent<any> implements OnInit, OnDestroy {

  public loading: boolean = false;
  public tab: string = 'main';

  @ViewChild('mainMenu', { static: true }) mainMenu: MainMenuPageComponent;
  @ViewChild('extraMenu', { static: true }) extraMenu: ExtraMenuPageComponent;

  constructor(public injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {}

  toggleLoadingAnimation(event: any) {
    this.tab = event.tabId;
    this.loading = true;
    if (this.tab === 'main') {
      this.mainMenu.loadDataMenu().subscribe(() => {
        this.loading = false;
      });
    } else {
      this.extraMenu.loadDataMenu().subscribe(() => {
        this.loading = false;
      });
    }
  }

}
