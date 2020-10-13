import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SwPush } from '@angular/service-worker';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbMediaBreakpointsService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { NbMenuItem } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import {
  AUTH_INDEXED_DB,
  PROFILE_INDEXED_DB,
  USER_INFO,
  UserInfo,
  HTTP_SERVICE,
  API,
  OAUTH_INFO,
  LayoutService,
} from '@dongkap/do-core';
import { IndexedDBFactoryService } from '@dongkap/do-core';
import { IndexedDBEncFactoryService } from '@dongkap/do-core';
import { User } from '@dongkap/do-core';
import { HttpFactoryService } from '@dongkap/do-core';
import { APIModel } from '@dongkap/do-core';
import { ApiBaseResponse } from '@dongkap/do-core';
import { SecurityResourceModel } from '@dongkap/do-core';

@Component({
  selector: 'do-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<any> = new Subject<any>();
  userPictureOnly: boolean = false;
  user: User;

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  userMenu: NbMenuItem[] = [];

  constructor(private sidebarService: NbSidebarService,
              private themeService: NbThemeService,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              private translate: TranslateService,
              private router: Router,
              @Inject(USER_INFO) private userService: UserInfo,
              @Inject(AUTH_INDEXED_DB) private authIndexedDB: IndexedDBEncFactoryService,
              @Inject(PROFILE_INDEXED_DB) private profileIndexedDB: IndexedDBFactoryService,
              @Inject(HTTP_SERVICE) private http: HttpFactoryService,
              @Inject(API) private api: APIModel,
              @Inject(OAUTH_INFO) private oauthResource: SecurityResourceModel,
              private swPush: SwPush) {
      this.setMenu();
      this.translate.onTranslationChange.pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.setMenu();
      });
      Promise.all([
        this.profileIndexedDB.get('name'),
        this.profileIndexedDB.get('image-b64'),
      ]).then((value: any[]) => {
        this.user = {
          name: value[0],
          picture: value[1],
        };
      });
      if (this.swPush.isEnabled) {
        this.swPush.subscription.subscribe((subscription: PushSubscription) => {
          if (subscription === null) {
            this.swPush.requestSubscription({serverPublicKey: this.oauthResource.vapid})
              .then((pushSubscription: PushSubscription) => {
                const sub: any = JSON.parse(JSON.stringify(pushSubscription));
                this.http.HTTP_AUTH(this.api['notification']['push-subscribe'], sub)
                  .subscribe((response: ApiBaseResponse) => {});
            });
          }
        });
        this.swPush.messages.subscribe((message: {notification: NotificationOptions}) => {
          const data: any = JSON.parse(message.notification.data);
          console.log(data);
        });
        this.swPush.notificationClicks.subscribe(({action, notification}) => {
          console.log(action);
          console.log(notification);
        });
      }
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;
    this.userService.getUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe((user: User) => this.user = user);

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

  setMenu() {
    this.userMenu = [];
    this.userMenu.push({ title: '' });
    this.authIndexedDB.getEnc('extras').then((value: string) => {
      const extras: any[] = JSON.parse(value);
      if (extras) {
        extras.forEach(extra => {
          this.userMenu.push({ title: extra.title, link : extra.link });
        });
      }
      this.translate.get('Logout').subscribe((result: string) => {
        this.userMenu.push({ title: result, link : '/auth/logout' });
      });
      this.userMenu.splice(0, 1);
    });
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.router.navigate(['/app/home']);
    return false;
  }
}
