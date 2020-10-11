import { Component } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiBaseResponse, Pattern } from '@dongkap/do-core';

@Component({
    selector: 'do-forgot-page',
    styleUrls: ['forgot-page.component.scss'],
    templateUrl: 'forgot-page.component.html',
})
export class ForgotPageComponent implements OnDestroy {

  public responseError: any;
  public buttonForgotPassword: boolean = false;
  private progressBar: number = 25;

  public patternEmail: string = Pattern.EMAIL;

  public form: FormGroup = new FormGroup({
    email: new FormControl(),
  });

  constructor(private router: Router) {}

  ngOnDestroy(): void {
  }

  public forgotPassword() {
    if (!this.form.invalid) {
      console.log(this.form.value);
    }
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

}
