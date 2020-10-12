import { Component, Inject } from '@angular/core';
import { OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ValidatorFn,
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import {
  ApiBaseResponse,
  API,
  APIModel,
  EncryptionService,
  HttpFactoryService,
  HTTP_SERVICE,
  OAUTH_INFO,
  Pattern,
  SecurityResourceModel,
  ResponseCode,
} from '@dongkap/do-core';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, first, map, mapTo, switchMap } from 'rxjs/operators';

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
  public paramMsgUsername: any;
  public paramMsgEmail: any;
  public minlengthUsername: number = 4;
  public minlengthEmail: number = 5;

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
  private isCheckUsername: boolean = true;
  private isCheckEmail: boolean = true;

  constructor(private router: Router,
    private enc: EncryptionService,
    @Inject(HTTP_SERVICE)private httpBaseService: HttpFactoryService,
    @Inject(OAUTH_INFO)private oauthResource: SecurityResourceModel,
    @Inject(API)private apiPath: APIModel) {
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
    if (this.form.controls['fullname'].errors && this.form.controls['fullname'].invalid && this.form.controls['fullname'].touched) {
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
    if (this.form.controls['username'].errors && this.form.controls['username'].invalid && this.form.controls['username'].touched) {
      if (this.form.controls['username'].errors['required'])
        this.errorMsgUsername = 'error.username.required';
      else if (this.form.controls['username'].errors['not-available']) {
        this.errorMsgUsername = 'error.username.not-available';
        this.paramMsgUsername = {
          value: this.form.controls['username'].value,
        };
      } else if (this.form.controls['username'].errors['timeout'])
        this.errorMsgUsername = 'error.0';
      else if (this.form.controls['username'].errors['error'])
        this.errorMsgUsername = 'error.500';
      else
        this.errorMsgUsername = 'error.username.invalid';
    } else {
      if ((this.form.controls['username'].touched || this.form.controls['username'].dirty) && this.isCheckUsername) {
        this.isCheckUsername = false;
        this.form.controls['username'].setAsyncValidators([userValidator(this.oauthResource, this.httpBaseService, this.apiPath)]);
        this.form.controls['username'].updateValueAndValidity();
      }
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
    if (this.form.controls['email'].errors && this.form.controls['email'].invalid && this.form.controls['email'].touched) {
      if (this.form.controls['email'].errors['required'])
        this.errorMsgEmail = 'error.email.required';
      else if (this.form.controls['email'].errors['not-available']) {
        this.errorMsgEmail = 'error.email.not-available';
        this.paramMsgEmail = {
          value: this.form.controls['email'].value,
        };
      } else if (this.form.controls['email'].errors['timeout'])
        this.errorMsgEmail = 'error.0';
      else if (this.form.controls['email'].errors['error'])
        this.errorMsgEmail = 'error.500';
      else
        this.errorMsgEmail = 'error.email.invalid';
    } else {
      if ((this.form.controls['email'].touched || this.form.controls['email'].dirty) && this.isCheckEmail) {
        this.isCheckEmail = false;
        this.form.controls['email'].setAsyncValidators([userValidator(this.oauthResource, this.httpBaseService, this.apiPath)]);
        this.form.controls['email'].updateValueAndValidity();
      }
      this.errorMsgEmail = null;
    }
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
    if (this.form.controls['password'].errors && this.form.controls['password'].invalid && this.form.controls['password'].touched) {
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
    if (
      this.form.controls['confirmPassword'].errors &&
      this.form.controls['confirmPassword'].invalid &&
      this.form.controls['confirmPassword'].touched) {
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

  onKeyDownUsername(event: KeyboardEvent){
    if (event.key) {
      if (!event.key.match(/[!@#$%^&*()?":{}|<>\[\];\\=~`]/g)) {
        if (([
          'TAB',
          'ESCAPE',
          'ENTER',
          'HOME',
          'END',
          'ARROWLEFT',
          'ARROWRIGHT',
          'ARROWUP',
          'ARROWDOWN',
          'PAGEUP',
          'PAGEDOWN'].indexOf(event.key.toUpperCase()) === -1) &&
        !event.ctrlKey && !event.metaKey && !event.altKey)
            this.isCheckUsername = true;
      }
    }
  }

  onKeyDownEmail(event: KeyboardEvent){
    if (event.key) {
      if (!event.key.match(/[!#$%^&*()?":{}|<>\[\];\\=~`]/g)) {
        if (([
          'TAB',
          'ESCAPE',
          'ENTER',
          'HOME',
          'END',
          'ARROWLEFT',
          'ARROWRIGHT',
          'ARROWUP',
          'ARROWDOWN',
          'PAGEUP',
          'PAGEDOWN'].indexOf(event.key.toUpperCase()) === -1) &&
        !event.ctrlKey && !event.metaKey && !event.altKey)
          this.isCheckEmail = true;
      }
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

export function userValidator(
  oauthResource: SecurityResourceModel,
  httpBaseService: HttpFactoryService,
  apiPath: APIModel): AsyncValidatorFn {
  return (control: AbstractControl) => {
    if (!control.valueChanges) {
      return of(null);
    } else {
      return control.valueChanges.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(() => {
          const validatorSubject$: Subject<any> = new Subject<ApiBaseResponse>();
          const httpHeaders: HttpHeaders = new HttpHeaders({
            'Authorization': 'Basic ' + btoa(oauthResource['client_id'] + ':' + oauthResource['client_secret']),
            'Content-Type': 'application/json',
          });
          const data: any = {
            'user': control.value,
          };
          let dataValidator: any;
          if (control.value){
            httpBaseService.HTTP_BASE(apiPath['auth']['check-user'], data, httpHeaders).subscribe(
              (response: any) => {
                if (response['respStatusCode'] === ResponseCode.OK_SCR012.toString()) {
                  validatorSubject$.next(null);
                } else {
                  dataValidator = {
                    error: true,
                  };
                  validatorSubject$.next(dataValidator);
                }
              },
              (error: any) => {
                if (!(error instanceof HttpErrorResponse)) {
                  dataValidator = {
                    error: true,
                  };
                } else {
                  if (error.status === 302) {
                    dataValidator = {
                      'not-available': true,
                    };
                  } else {
                    dataValidator = {
                      timeout: true,
                    };
                  }
                }
                validatorSubject$.next(dataValidator);
              });
          }
          return validatorSubject$.asObservable();
        })).pipe(first());
    }
  };
}
