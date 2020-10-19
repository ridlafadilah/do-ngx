import { Component, Inject } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { NbAuthSocialLink } from '@nebular/auth';
import { NbDialogService } from '@nebular/theme';
import {
  API,
  HTTP_SERVICE,
  OAUTH_INFO,
} from '@dongkap/do-core';
import { ApiBaseResponse } from '@dongkap/do-core';
import { APIModel } from '@dongkap/do-core';
import { HttpFactoryService } from '@dongkap/do-core';
import { SecurityResourceModel } from '@dongkap/do-core';
import { AuthTokenService } from '../../services/auth-token.service';
import { takeUntil } from 'rxjs/operators';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions.component';

@Component({
    selector: 'do-login-page',
    styleUrls: ['login-page.component.scss'],
    templateUrl: 'login-page.component.html',
})
export class LoginPageComponent implements OnDestroy {

  public responseError: any;
  public buttonLogin: boolean = false;
  private progressBar: number = 25;
  protected destroy$: Subject<any> = new Subject<any>();

  public form: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  private urlAuthorizeGoogle: string = this.httpBaseService.API(this.apiPath['auth']['authorize']) +
    '/google?redirect_uri=' +
    `${document.getElementsByTagName('base')[0].href}auth/callback`;

  public socialLinks: NbAuthSocialLink[] = [
    {
      url: this.urlAuthorizeGoogle,
      target: '_self',
      icon: 'google',
    }
  ];

  constructor(
    private router: Router,
    private dialogService: NbDialogService,
    private translate: TranslateService,
    private authTokenService: AuthTokenService,
    @Inject(API) private apiPath: APIModel,
    @Inject(HTTP_SERVICE) private httpBaseService: HttpFactoryService,
    @Inject(OAUTH_INFO)private oauthResource: SecurityResourceModel,
    route: ActivatedRoute) {
    if (route.snapshot.queryParams['error']) {
      console.log(route.snapshot.queryParams['error']);
      this.responseError = 'error.' + route.snapshot.queryParams['error'];
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

  public login() {
    if (!this.form.invalid) {
      document.querySelectorAll('.pace-done').forEach(pace => {
        pace.className = pace.className.replace('pace-done pace-done', 'pace-running');
        pace.className = pace.className.replace('pace-done', 'pace-running');
      });
      document.querySelectorAll('.pace-inactive').forEach(pace => {
        pace.className = pace.className.replace('pace-inactive pace-inactive', 'pace-active');
        pace.className = pace.className.replace('pace-inactive', 'pace-active');
      });
      const progressDOM = document.getElementsByClassName('pace-progress').item(0) as HTMLElement;
      if (this.progressBar < 35) {
        this.progressBar = 35;
        progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
        progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
        progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
      }
      this.buttonLogin = true;
      this.authTokenService.login(
        this.form.get('username').value,
        this.form.get('password').value)
        .then(() => {
          this.responseError = null;
          this.progressBar = 90;
          progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
          progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
          progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
          this.progressBar = 0;
          this.router.navigate(['/app/home']);
        })
        .catch((error: any) => {
          if (!(error instanceof HttpErrorResponse)) {
            const response: ApiBaseResponse = (<ApiBaseResponse> error);
            this.responseError = response.respStatusMessage[response.respStatusCode];
          }
          this.buttonLogin = false;
          this.progressBar = 85;
          progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
          progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
          progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
          document.querySelectorAll('.pace-running').forEach(pace => {
            pace.className = pace.className.replace('pace-running', 'pace-done');
          });
          document.querySelectorAll('.pace-active').forEach(pace => {
            pace.className = pace.className.replace('pace-active', 'pace-inactive');
          });
          this.progressBar = 0;
        });
      if (this.progressBar >= 35 && this.progressBar < 65) {
        this.progressBar = 65;
        progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
        progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
        progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
      }
    }
  }

  get hasErrorUsername(): boolean {
    return (
      this.form.controls['username'] &&
      this.form.controls['username'].invalid &&
      this.form.controls['username'].touched
    );
  }

  get hasSuccessUsername(): boolean {
    return (
      this.form.controls['username'] &&
      this.form.controls['username'].valid &&
      this.form.controls['username'].touched
    );
  }

  get hasErrorPassword(): boolean {
    return (
      this.form.controls['password'] &&
      this.form.controls['password'].invalid &&
      this.form.controls['password'].touched
    );
  }

  get hasSuccessPassword(): boolean {
    return (
      this.form.controls['password'] &&
      this.form.controls['password'].valid &&
      this.form.controls['password'].touched
    );
  }

  public onClickTermsConditions() {
    const data: any = {
      'parameterCode': 'TERMS_CONDITIONS.DONGKAP'
    };
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
      'Content-Type': 'application/json',
      'Accept-Language': this.translate.currentLang,
    });
    this.httpBaseService.HTTP_BASE(this.apiPath['openapi']['parameter'], data, httpHeaders)
    .pipe(takeUntil(this.destroy$))
    .subscribe((response: any) => {
      this.dialogService.open(TermsConditionsComponent, {
        context: {
          content: response['parameterValue'],
          action: 'Close',
        },
        });
    });
  }

}
