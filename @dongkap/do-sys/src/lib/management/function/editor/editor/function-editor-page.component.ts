import { Component, Injector, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { BaseComponent } from '@dongkap/do-common';
import { FunctionMainPageComponent } from '../main/function-main-page.component';
import { FunctionExtraPageComponent } from '../extra/function-extra-page.component';
import { FunctionControlService } from '../../services/function-control.service';

@Component({
  selector: 'do-function-editor-page',
  styleUrls: ['./function-editor-page.component.scss'],
  templateUrl: './function-editor-page.component.html',
})
export class FunctionEditorPageComponent extends BaseComponent<any> implements OnInit, OnDestroy {

  public loading: boolean = false;
  public tab: string = 'main';
  public title: string;

  @ViewChild('mainFunction', { static: true }) mainMenu: FunctionMainPageComponent;
  @ViewChild('extraFunction', { static: true }) extraMenu: FunctionExtraPageComponent;

  constructor(public injector: Injector, functionControlService: FunctionControlService) {
    super(injector);
    this.title = functionControlService.getRole().description;
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
