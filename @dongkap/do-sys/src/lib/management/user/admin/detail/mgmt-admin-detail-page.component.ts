import { Component, Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { ApiBaseResponse } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-common';
import { ManagementUserService } from '../../services/mgmt-user.service';

@Component({
  selector: 'do-mgmt-admin-detail-page',
  styleUrls: ['./mgmt-admin-detail-page.component.scss'],
  templateUrl: './mgmt-admin-detail-page.component.html',
})
export class MgmtAdminDetailPageComponent extends BaseFormComponent<any> implements OnInit {

  public profile: any = {};
  public image: string;
  public imageDefault: string = `${document.getElementsByTagName('base')[0].href}/assets/images/avatars/default.png`;

  constructor(
    public injector: Injector,
    private router: Router,
    private userService: ManagementUserService) {
    super(injector);
  }

  ngOnInit(): void {
    this.onInit('security', 'get-profile-system-other');
  }

  onInit(serviceName: string, apiName: string): void {
    if (!this.userService.getUser()) {
      this.router.navigate(['/app/mgmt/user/admin']);
      return;
    }
    this.loadingForm = true;
    const data: any = {
      username: this.userService.getUser().username,
    };
    this.exec(serviceName, apiName, data)
      .pipe(takeUntil(this.destroy$))
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
