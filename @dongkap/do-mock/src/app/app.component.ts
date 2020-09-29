/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { AnalyticsService, SeoService } from '@dongkap/do-core';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    private analytics: AnalyticsService,
    private seoService: SeoService,
    private translate: TranslateService,
    private themeService: NbThemeService,
    @Inject(LOCALE_ID) public locale: string) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
    this.translate.addLangs(['en-US', 'id-ID']);
    this.translate.setDefaultLang(this.locale);
    this.translate.use(this.locale);
    this.locale = this.translate.currentLang;
  }

  defaultTheme() {
    this.themeService.changeTheme('default');
  }
}
