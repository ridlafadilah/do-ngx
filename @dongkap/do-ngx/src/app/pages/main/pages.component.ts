import { Component, Inject, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NbMenuItem } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { AUTH_INDEXED_DB, IndexedDBEncFactoryService } from '@dongkap/do-core';

@Component({
  selector: 'do-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <do-one-column-layout>
      <nb-menu [items]="menus"></nb-menu>
      <router-outlet></router-outlet>
    </do-one-column-layout>
  `,
})
export class PagesComponent implements OnDestroy {

  public menus: NbMenuItem[] = [];
  private destroy$: Subject<any> = new Subject<any>();

  constructor(@Inject(AUTH_INDEXED_DB) private authIndexedDB: IndexedDBEncFactoryService,
    private translate: TranslateService) {
      this.setMenus();
      this.translate.onTranslationChange.pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.setMenus();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

  setMenus() {
    this.authIndexedDB.getEnc('menus').then((value: string) => {
      this.menus = JSON.parse(value);
    });
  }

}
