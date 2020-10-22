import { Component, Injector, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
  protected destroy$: Subject<any> = new Subject<any>();

  @ViewChild('mainFunction', { static: true }) mainMenu: FunctionMainPageComponent;
  @ViewChild('extraFunction', { static: true }) extraMenu: FunctionExtraPageComponent;

  constructor(public injector: Injector, private router: Router, private functionControlService: FunctionControlService) {
    super(injector);
    if (functionControlService.getRole()) {
      this.title = functionControlService.getRole().description;
    } else {
      this.router.navigate(['/app/mgmt/function/control']);
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleLoadingAnimation(event: any) {
    if (!this.functionControlService.getRole()) {
      this.router.navigate(['/app/mgmt/function/control']);
      return;
    }
    this.tab = event.tabId;
    this.loading = true;
    if (this.tab === 'main') {
      this.mainMenu.loadDataMenu()
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.loading = false;
      });
    } else {
      this.extraMenu.loadDataMenu()
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.loading = false;
      });
    }
  }

}
