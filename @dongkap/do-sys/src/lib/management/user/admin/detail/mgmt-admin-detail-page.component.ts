import { Component, Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiBaseResponse } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-common';
import { ManagementUserService } from '../../services/mgmt-user.service';

@Component({
  selector: 'do-mgmt-admin-detail-page',
  styleUrls: ['./mgmt-admin-detail-page.component.scss'],
  templateUrl: './mgmt-admin-detail-page.component.html',
})
export class MgmtAdminDetailPageComponent extends BaseFormComponent<any> implements OnInit, OnDestroy {

  public profile: any = {};
  public image: string;
  public imageDefault: string = `${document.getElementsByTagName('base')[0].href}/assets/images/avatars/default.png`;

  constructor(
    public injector: Injector,
    private userService: ManagementUserService) {
    super(injector);
  }

  ngOnInit(): void {
    this.onInit('security', 'get-profile-base');
  }

  ngOnDestroy(): void {}

  onInit(serviceName: string, apiName: string): void {
    this.loadingForm = true;
    const data: any = {
      username: this.userService.getUser().username,
    };
    this.exec(serviceName, apiName, data)
      .subscribe(
        (success: any) => {
          this.loadingForm = false;
          this.profile = success;
          if (success['image']) {
            this.image = success['image'];
          }
        },
        (error: HttpErrorResponse) => {
          this.loadingForm = true;
          const err: ApiBaseResponse = error['error'];
          if (err) {
            this.toastr.showI18n(err.respStatusMessage[err.respStatusCode], true, null, 'danger');
          } else {
            this.toastr.showI18n(err as any, true, null, 'danger');
          }
        },
      );
  }

}
