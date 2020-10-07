import { Component, Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SelectionType } from '@swimlane/ngx-datatable';
import { HttpBaseModel, ApiBaseResponse } from '@dongkap/do-core';
import { BaseFilterComponent, DatatableColumn } from '@dongkap/do-common';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'do-role-list-page',
  styleUrls: ['./role-list-page.component.scss'],
  templateUrl: './role-list-page.component.html',
})
export class RoleListPageComponent extends BaseFilterComponent<any> implements OnInit, OnDestroy {

  public apiPath: HttpBaseModel;
  public selectionType: SelectionType = SelectionType.single;
  public columns: DatatableColumn[] = [
    { name: 'Authority', prop: 'authority', width: 150, frozenLeft: true },
    { name: 'Description', prop: 'description', width: 275, frozenLeft: true },
    { name: 'Created', prop: 'createdBy' },
    { name: 'Created Date', prop: 'createdDate' },
    { name: 'Modified', prop: 'modifiedBy' },
    { name: 'Modified Date', prop: 'modifiedDate' },
    { name: 'Active', prop: 'active' },
  ];
  public expanded: boolean = false;

  constructor(public injector: Injector, private router: Router, private roleService: RoleService) {
    super(injector, {
      'authority': [],
      'description': [],
    });
    this.apiPath = this.api['security']['datatable-role'];
    this.filters = [
      { controlName: 'authority', type: 'input' },
      { controlName: 'description', type: 'input' }];
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {}

  onAddGroup(): void {
    this.router.navigate(['/app/mgmt/role', 'add']);
  }

  onViewDetail(data): void {
    this.roleService.setRole(data);
    this.router.navigate(['/app/mgmt/role', 'edit']);
  }

  onReset(): void {
    this.router.navigate(['/app/mgmt/role']);
  }

  back(): boolean {
    this.router.navigate(['/app/mgmt/role']);
    return false;
  }

}