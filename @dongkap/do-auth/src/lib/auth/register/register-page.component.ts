import { Component, Inject } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiBaseResponse, OAUTH_INFO, SecurityResourceModel } from '@dongkap/do-core';
import { AuthTokenService } from '../../services/auth-token.service';

@Component({
    selector: 'do-register-page',
    styleUrls: ['register-page.component.scss'],
    templateUrl: 'register-page.component.html',
})
export class RegisterPageComponent implements OnDestroy {

  public responseError: any;
  public buttonRegister: boolean = false;
  private progressBar: number = 25;

  public form: FormGroup = new FormGroup({
    fullname: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
    recaptcha: new FormControl(),
    terms: new FormControl(),
  });

  constructor(private router: Router, private authTokenService: AuthTokenService) {
  }

  ngOnDestroy(): void {
  }

  public register() {
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
      this.buttonRegister = true;
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
            this.buttonRegister = false;
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

  resolved(captchaResponse: string) {
    console.log(`Resolved response token: ${captchaResponse}`);
   
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
