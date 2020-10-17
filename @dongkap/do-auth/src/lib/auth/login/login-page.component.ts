import { Component } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NbAuthSocialLink } from '@nebular/auth';
import { ApiBaseResponse } from '@dongkap/do-core';
import { AuthTokenService } from '../../services/auth-token.service';
import { Subject } from 'rxjs';

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

  public socialLinks: NbAuthSocialLink[] = [
    {
      url: 'http://localhost:8085/do/oauth2/authorize/google?redirect_uri=http://localhost:4242/auth',
      target: '_self',
      icon: 'google',
    }
  ];

  constructor(private router: Router, private authTokenService: AuthTokenService) {}

  ngOnDestroy(): void {
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

}
