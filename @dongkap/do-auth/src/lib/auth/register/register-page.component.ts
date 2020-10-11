import { Component, Injector } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiBaseResponse, EncryptionService, OAUTH_INFO, Pattern, SecurityResourceModel } from '@dongkap/do-core';

@Component({
    selector: 'do-register-page',
    styleUrls: ['register-page.component.scss'],
    templateUrl: 'register-page.component.html',
})
export class RegisterPageComponent implements OnDestroy {

  public patternFullname: string = Pattern.FULLNAME;
  public patternUsername: string = Pattern.USERNAME;
  public patternEmail: string = Pattern.EMAIL;
  public patternPassword: string = Pattern.PASSWORD_MEDIUM;
  public errorMsgFullname: string;
  public errorMsgUsername: string;
  public errorMsgEmail: string;
  public errorMsgPassword: string;
  public errorMsgConfirmPassword: string;

  public form: FormGroup = new FormGroup({
    fullname: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
    terms: new FormControl(),
    recaptcha: new FormControl(),
  });

  public responseError: any;
  public buttonRegister: boolean = false;
  private progressBar: number = 25;
  private enc: EncryptionService;
  private oauthResource: SecurityResourceModel;

  constructor(private router: Router, public injector: Injector) {
    this.enc = injector.get(EncryptionService);
    this.oauthResource = injector.get(OAUTH_INFO);
  }

  ngOnDestroy(): void {
  }

  public register() {
    if (!this.form.invalid) {
      const data: any = this.form.value;
      data['password'] = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['password'].value);
      data['confirmPassword'] = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['confirmPassword'].value);
      console.log(data);
    }
  }

  get hasErrorFullname(): boolean {
    if (this.form.controls['fullname'].errors && this.form.controls['fullname'].invalid) {
      if (this.form.controls['fullname'].errors['required'])
        this.errorMsgFullname = 'error.fullname.required';
      else
        this.errorMsgFullname = 'error.fullname.invalid';
    } else {
      this.errorMsgFullname = null;
    }
    return (
      this.form.controls['fullname'] &&
      this.form.controls['fullname'].invalid &&
      this.form.controls['fullname'].touched
    );
  }

  get hasSuccessFullname(): boolean {
    return (
      this.form.controls['fullname'] &&
      this.form.controls['fullname'].valid &&
      this.form.controls['fullname'].touched
    );
  }

  get hasErrorUsername(): boolean {
    if (this.form.controls['username'].errors && this.form.controls['username'].invalid) {
      if (this.form.controls['username'].errors['required'])
        this.errorMsgUsername = 'error.username.required';
      else
        this.errorMsgUsername = 'error.username.invalid';
    } else {
      this.errorMsgUsername = null;
    }
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

  get hasErrorEmail(): boolean {
    return (
      this.form.controls['email'] &&
      this.form.controls['email'].invalid &&
      this.form.controls['email'].touched
    );
  }

  get hasSuccessEmail(): boolean {
    return (
      this.form.controls['email'] &&
      this.form.controls['email'].valid &&
      this.form.controls['email'].touched
    );
  }

  get hasErrorPassword(): boolean {
    if (this.form.controls['password'].errors && this.form.controls['password'].invalid) {
      this.errorMsgPassword = 'error.pattern.Password';
    } else {
      this.errorMsgPassword = null;
    }
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

  get hasErrorConfirmPassword(): boolean {
    if (this.form.controls['confirmPassword'].errors && this.form.controls['confirmPassword'].invalid) {
      this.errorMsgConfirmPassword = 'error.equal.confirmPassword-register';
    } else {
      if (this.form.controls['password'].value !== this.form.controls['confirmPassword'].value) {
        this.errorMsgConfirmPassword = 'error.equal.confirmPassword-register';
        this.form.controls['confirmPassword'].setValidators([confirmPasswordValidator(this.form)]);
        this.form.controls['confirmPassword'].updateValueAndValidity();
      } else {
        this.errorMsgConfirmPassword = null;
      }
    }
    return (
      this.form.controls['confirmPassword'] &&
      this.form.controls['confirmPassword'].invalid &&
      this.form.controls['confirmPassword'].touched
    );
  }

  get hasSuccessConfirmPassword(): boolean {
    return (
      this.form.controls['confirmPassword'] &&
      this.form.controls['confirmPassword'].valid &&
      this.form.controls['confirmPassword'].touched
    );
  }

  onCheckedChange(){
    if (!this.form.controls['terms'].value) {
      this.form.controls['terms'].setValue(null);
    }
  }

}

export function confirmPasswordValidator(form: FormGroup): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (form.controls) {
      if (form.controls['password'].value !== form.controls['confirmPassword'].value)
          return { equal: true };
    }
    return null;
  };
}
