import { Component, Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiBaseResponse, ResponseCode, HttpBaseModel } from '@dongkap/do-core';
import { BaseFormComponent, CheckboxModel } from '@dongkap/do-common';
import { RoleModel } from '../models/role.model';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'do-language-add-edit-page',
  styleUrls: ['./role-add-edit-page.component.scss'],
  templateUrl: './role-add-edit-page.component.html',
})
export class RoleAddEditPageComponent extends BaseFormComponent<any> implements OnInit, OnDestroy {

  public action: 'Add' | 'Edit' = 'Add';
  public apiSelectLanguage: HttpBaseModel;
  public dataDefault: CheckboxModel[] = [
    {
      selected: false,
    },
  ];
  constructor(public injector: Injector,
    private router: Router,
    private route: ActivatedRoute,
    private roleService: RoleService) {
    super(injector,
      {
        'authority': [],
        'description': [],
      });
    if ((this.route.snapshot.params['action'] === 'edit')) {
      this.action = 'Edit';
    }
    this.apiSelectLanguage = this.api['master']['select-language'];
    if (this.roleService.getRole() && (this.route.snapshot.params['action'] === 'edit')) {
      this.formGroup.get('authority').setValue(this.roleService.getRole().authority);
      this.formGroup.get('description').setValue(this.roleService.getRole().description);
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  onReset(): void {
    this.router.navigate(['/app/mgmt/role']);
  }

  onSubmit(): void {
    const data: RoleModel = {
      authority: this.formGroup.get('authority').value,
      description: this.formGroup.get('description').value,
    };
    (super.onSubmit(data, 'security', 'post-role')  as Observable<ApiBaseResponse>)
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
          this.router.navigate(['/app/mgmt/role']);
        }
      });
  }

}
