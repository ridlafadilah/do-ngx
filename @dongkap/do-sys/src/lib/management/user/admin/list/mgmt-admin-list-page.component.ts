import { Component, Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { HttpBaseModel } from '@dongkap/do-core';
import { BaseFilterComponent, DatatableColumn } from '@dongkap/do-common';
import { ManagementUserService } from '../../services/mgmt-user.service';

@Component({
  selector: 'do-mgmt-admin-list-page',
  styleUrls: ['./mgmt-admin-list-page.component.scss'],
  templateUrl: './mgmt-admin-list-page.component.html',
})
export class MgmtAdminListPageComponent extends BaseFilterComponent<any> implements OnInit, OnDestroy {

  public apiPath: HttpBaseModel;
  public selectionType: SelectionType = SelectionType.single;
  public columns: DatatableColumn[] = [
    { name: 'Username', prop: 'username', width: 125, frozenLeft: true },
    { name: 'Name', prop: 'name', width: 275, frozenLeft: true},
    { name: 'Email', prop: 'email', width: 225, frozenLeft: true },
    { name: 'Phone Number', prop: 'phoneNumber', width: 150, frozenLeft: true },
    { name: 'Created', prop: 'createdBy' },
    { name: 'Created Date', prop: 'createdDate' },
    { name: 'Modified', prop: 'modifiedBy' },
    { name: 'Modified Date', prop: 'modifiedDate' },
    { name: 'Active', prop: 'active' },
  ];
  public expanded: boolean = false;

  constructor(public injector: Injector, private router: Router, private userService: ManagementUserService) {
    super(injector, {
      'username': [],
      'name': [],
      'phoneNumber': [],
    });
    this.apiPath = this.api['security']['datatable-user'];
    this.filters = [
      { controlName: 'username', type: 'input' },
      { controlName: 'name', type: 'input' },
      { controlName: 'phoneNumber', type: 'input' }];
    this.keyword = {
      authority: 'ROLE_ADMIN',
    };
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  onViewDetail(data): void {
    this.userService.setUser(data);
    this.router.navigate(['/app/mgmt/user/admin/detail']);
  }

}
