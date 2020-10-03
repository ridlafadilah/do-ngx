import { Component, Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SelectionType } from '@swimlane/ngx-datatable';
import { HttpBaseModel, ApiBaseResponse } from '@dongkap/do-core';
import { BaseFilterComponent, DatatableColumn } from '@dongkap/do-common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'do-language-list-page',
  styleUrls: ['./language-list-page.component.scss'],
  templateUrl: './language-list-page.component.html',
})
export class LanguageListPageComponent extends BaseFilterComponent<any> implements OnInit, OnDestroy {

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

  constructor(public injector: Injector, private router: Router, private languageService: LanguageService) {
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
    this.router.navigate(['/app/sysconf/language', 'add']);
  }

  onViewDetail(data): void {
    this.languageService.setLocale(data);
    this.router.navigate(['/app/sysconf/language', 'edit']);
  }

  onReset(): void {
    this.router.navigate(['/app/sysconf/language']);
  }

  back(): boolean {
    this.router.navigate(['/app/sysconf/parameter']);
    return false;
  }

  onSubmit(): void {
    (super.onSubmit(this.formGroup.value, 'master', 'post-language')  as Observable<ApiBaseResponse>);
  }

}
