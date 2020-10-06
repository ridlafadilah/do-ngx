import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TreeMode } from 'tree-ngx';
import { BaseComponent } from '@dongkap/do-common';

@Component({
  selector: 'do-menu-list-page',
  styleUrls: ['./menu-list-page.component.scss'],
  templateUrl: './menu-list-page.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class MenuListPageComponent extends BaseComponent<any> implements OnInit, OnDestroy {

  public loading: boolean = false;
  public tab: string = 'main';
  public nodeItemsMain: any = [];
  public nodeItemsExtra: any = [];
  public options: any = {
    mode: TreeMode.MultiSelect,
    checkboxes: true,
    alwaysEmitSelected: true
  };

  constructor(public injector: Injector, private router: Router) {
    super(injector);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {}

  toggleLoadingAnimation(event: any) {
    this.tab = event.tabId;
    this.loading = true;
    this.http.HTTP_AUTH(
      this.api['security']['get-tree-menus'], null, null, null,
      [this.tab]).subscribe((response: any) => {
        if (this.tab === 'main') {
          this.nodeItemsMain = [];
          this.nodeItemsMain = [...this.nodeItemsMain, ...response];
        } else {
          this.nodeItemsExtra = [];
          this.nodeItemsExtra = [...this.nodeItemsExtra, ...response];
        }
        this.loading = false;
      });
  }

  onSelectedItems(event: any) {
  }

}
