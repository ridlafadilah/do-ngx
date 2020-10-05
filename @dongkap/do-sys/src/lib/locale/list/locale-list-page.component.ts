import { Component, Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SelectionType } from '@swimlane/ngx-datatable';
import { HttpBaseModel, ApiBaseResponse } from '@dongkap/do-core';
import { BaseFilterComponent, DatatableColumn } from '@dongkap/do-common';
import { LocaleService } from '../services/locale.service';

@Component({
  selector: 'do-locale-list-page',
  styleUrls: ['./locale-list-page.component.scss'],
  templateUrl: './locale-list-page.component.html',
})
export class LocaleListPageComponent extends BaseFilterComponent<any> implements OnInit, OnDestroy {

  public apiPath: HttpBaseModel;
  public selectionType: SelectionType = SelectionType.single;
  public columns: DatatableColumn[] = [
    { name: 'Language Code', prop: 'localeCode', width: 125, frozenLeft: true },
    { name: 'Language', prop: 'identifier', width: 275, frozenLeft: true },
    { name: 'Icon', prop: 'icon', width: 75, frozenLeft: true, type: 'icon' },
    { name: 'System Default Language', prop: 'localeDefault', width: 175, frozenLeft: true },
    { name: 'Created', prop: 'createdBy' },
    { name: 'Created Date', prop: 'createdDate' },
    { name: 'Modified', prop: 'modifiedBy' },
    { name: 'Modified Date', prop: 'modifiedDate' },
    { name: 'Active', prop: 'active' },
  ];
  public expanded: boolean = false;

  constructor(public injector: Injector, private router: Router, private localeService: LocaleService) {
    super(injector, {
      'localeCode': [],
      'identifier': [],
    });
    this.apiPath = this.api['master']['datatable-locale'];
    this.filters = [
      { controlName: 'localeCode', type: 'input' },
      { controlName: 'identifier', type: 'input' }];
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {}

  onAddGroup(): void {
    this.router.navigate(['/app/sysconf/i18n', 'add']);
  }

  onViewDetail(data): void {
    this.localeService.setLocale(data);
    this.router.navigate(['/app/sysconf/i18n', 'edit']);
  }

  onReset(): void {
    this.router.navigate(['/app/sysconf/i18n']);
  }

  back(): boolean {
    this.router.navigate(['/app/sysconf/i18n']);
    return false;
  }

}
