import { Component, Injector, Inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  PROFILE_INDEXED_DB,
  ResponseCode,
  USER_INFO,
  UserInfo,
  Pattern,
} from '@dongkap/do-core';
import { HttpBaseModel } from '@dongkap/do-core';
import { ApiBaseResponse } from '@dongkap/do-core';
import { IndexedDBFactoryService } from '@dongkap/do-core';
import { BaseFormComponent, SelectParamModel } from '@dongkap/do-common';
import { AuthIndexedDBService } from '@dongkap/do-auth';

@Component({
  selector: 'do-profile-page',
  styleUrls: ['./profile-page.component.scss'],
  templateUrl: './profile-page.component.html',
})
export class ProfilePageComponent extends BaseFormComponent<any> implements OnInit {

  public image: string;
  public formGroupImage: FormGroup;
  public uploadFinished: boolean;
  public patternEmail: string = Pattern.EMAIL;
  public patternPhoneNumber: string = Pattern.PHONE_NUMBER;
  public minLength: number = 5;
  public disabledUpload: boolean = false;
  public provider: string = 'local';

  public apiSelectGender: HttpBaseModel;
  public paramSelectGender: SelectParamModel[];

  public apiSelectCountry: HttpBaseModel;

  public apiSelectProvince: HttpBaseModel;
  public paramSelectProvince: SelectParamModel[];

  public apiSelectCity: HttpBaseModel;
  public paramSelectCity: SelectParamModel[];

  public apiSelectDistrict: HttpBaseModel;
  public paramSelectDistrict: SelectParamModel[];

  public apiSelectSubDistrict: HttpBaseModel;
  public paramSelectSubDistrict: SelectParamModel[];

  constructor(
    public injector: Injector,
    @Inject(USER_INFO) private userService: UserInfo,
    @Inject(PROFILE_INDEXED_DB) private profileIndexedDB: IndexedDBFactoryService,
    private authIndexedDB: AuthIndexedDBService) {
    super(injector,
      {
        'username': [{
          value: null,
          disabled: true,
        }],
        'name': [],
        'idNumber': [],
        'placeOfBirth': [],
        'dateOfBirth': [],
        'gender': [],
        'email': [],
        'phoneNumber': [],
        'address': [null, [Validators.minLength(5)]],
        'country': [],
        'province': [],
        'city': [],
        'district': [],
        'subDistrict': [],
      });
    this.formGroupImage = this.formBuilder.group({
      'image': [],
    });
    this.apiSelectGender = this.api['master']['select-parameter'];
    this.apiSelectCountry = this.api['master']['select-country'];
    this.apiSelectProvince = this.api['master']['select-province'];
    this.apiSelectCity = this.api['master']['select-city'];
    this.apiSelectDistrict = this.api['master']['select-district'];
    this.apiSelectSubDistrict = this.api['master']['select-subdistrict'];
    this.authIndexedDB.getEnc('provider').then((value: string) => {
      if (value !== 'local') {
        this.provider = value;
        this.formGroup.controls['email'].disable();
      }
    });
  }

  ngOnInit(): void {
    this.onInit('profile', 'get-profile');
    Promise.all([
      this.profileIndexedDB.get('image-b64'),
      this.profileIndexedDB.get('image'),
    ]).then((value: any[]) => {
      if (value[0])
        this.image = value[0];
      else
        this.image = value[1];
    });
    this.paramSelectGender = [{
      key: 'parameterGroupCode',
      value: 'GENDER',
    }];
    this.paramSelectProvince = [{
      key: 'country',
      value: 'undefined',
    }];
    this.paramSelectCity = [{
      key: 'province',
      value: 'undefined',
    }];
    this.paramSelectDistrict = [{
      key: 'city',
      value: 'undefined',
    }];
    this.paramSelectSubDistrict = [{
      key: 'district',
      value: 'undefined',
    }];
  }

  onInit(serviceName: string, apiName: string): void {
    this.loadingForm = true;
    this.exec(serviceName, apiName)
      .subscribe(
        (success: any) => {
          this.loadingForm = false;
          this.formGroup.controls['name'].setValue(success['name']);
          this.formGroup.controls['username'].setValue(success['username']);
          this.formGroup.controls['idNumber'].setValue(success['idNumber']);
          if (success['gender']) {
            this.formGroup.controls['gender'].setValue({
              label: success['gender'],
              value: success['genderCode']
            });
          }
          this.formGroup.controls['placeOfBirth'].setValue(success['placeOfBirth']);
          if (success['dateOfBirth']) this.formGroup.get('dateOfBirth').setValue(success['dateOfBirth']);
          this.formGroup.controls['email'].setValue(success['email']);
          if (success['address']) this.formGroup.controls['address'].setValue(success['address']);
          if (success['country']) {
            this.formGroup.controls['country'].setValue({
              label: success['country'],
              value: success['countryCode']
            });
            this.paramSelectProvince = [
              {
                key: 'country',
                value: success['countryCode'],
              },
            ];
          }
          if (success['province']) {
            this.formGroup.controls['province'].setValue({
              label: success['province'],
              value: success['provinceCode']
            });
            this.paramSelectCity = [
              {
                key: 'province',
                value: success['provinceCode'],
              },
            ];
          }
          if (success['city']) {
            this.formGroup.controls['city'].setValue({
              label: success['city'],
              value: success['cityCode']
            });
            this.paramSelectDistrict = [
              {
                key: 'city',
                value: success['cityCode'],
              },
            ];
          }
          if (success['district']) {
            this.formGroup.controls['district'].setValue({
              label: success['district'],
              value: success['districtCode']
            });
            this.paramSelectSubDistrict = [
              {
                key: 'district',
                value: success['districtCode'],
              },
            ];
          }
          if (success['subDistrict']) {
            this.formGroup.controls['subDistrict'].setValue({
              label: success['subDistrict'],
              value: success['subDistrictCode']
            });
          }
          if (success['phoneNumber']) this.formGroup.controls['phoneNumber'].setValue(success['phoneNumber']);
          if (success['mobileNumber']) this.formGroup.controls['mobileNumber'].setValue(success['mobileNumber']);
          this.authIndexedDB.getEnc('provider').then((value: string) => {
            if (value !== 'local') {
              this.provider = value;
              this.formGroup.controls['email'].disable();
            }
          });
          this.formGroup.markAsPristine();
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

  onSelectCountry(select: any): void {
    this.paramSelectProvince = [
      {
        key: 'country',
        value: select ? select.value : 'undefined',
      },
    ];
    this.onClearProvince();
  }
  onSelectProvince(select: any): void {
    this.paramSelectCity = [
      {
        key: 'province',
        value: select ? select.value : 'undefined',
      },
    ];
    this.onClearProvince();
  }
  onSelectCity(select: any): void {
    this.paramSelectDistrict = [
      {
        key: 'city',
        value: select ? select.value : 'undefined',
      },
    ];
    this.onClearCity();
  }
  onSelectDistrict(select: any): void {
    this.paramSelectSubDistrict = [
      {
        key: 'district',
        value: select ? select.value : 'undefined',
      },
    ];
    this.onClearDistrict();
  }

  onClearCountry(): void {
    this.formGroup.patchValue({
      'province': null,
      'city': null,
      'district': null,
      'subDistrict': null,
    });
  }
  onClearProvince(): void {
    this.formGroup.patchValue({
      'city': null,
      'district': null,
      'subDistrict': null,
    });
  }
  onClearCity(): void {
    this.formGroup.patchValue({
      'district': null,
      'subDistrict': null,
    });
  }
  onClearDistrict(): void {
    this.formGroup.patchValue({
      'subDistrict': null,
    });
  }

  uploadImage(file: any) {
    const data: FormData = new FormData();
    data.append('photo', file);
    this.formGroupImage.get('image').disable();
    this.exec('file', 'photo-profile', data).subscribe(
        (success: ApiBaseResponse) => {
          this.userService.updatePhotoUser(file, success.respStatusMessage['checksum']);
          this.uploadFinished = true;
          this.formGroupImage.markAsPristine();
          this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true, null, 'success');
        },
        (error: ApiBaseResponse) => {
          this.formGroupImage.get('image').enable();
          this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        },
    );
  }

  valueSelect(prop: string): string {
    if (this.formGroup.get(prop).value) {
      if (this.formGroup.get(prop).value.label) {
        return this.formGroup.get(prop).value.label;
      } else {
        return this.formGroup.get(prop).value;
      }
    } else {
      return null;
    }
  }

  valueSelectNonLabel(prop: string): string {
    if (this.formGroup.get(prop).value) {
      if (this.formGroup.get(prop).value.value) {
        return this.formGroup.get(prop).value.value;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  onSubmit() {
    const data: any = {
      name: this.formGroup.get('name').value,
      idNumber: this.formGroup.get('idNumber').value,
      placeOfBirth: this.formGroup.get('placeOfBirth').value,
      dateOfBirth: this.formGroup.get('dateOfBirth').value,
      gender: this.valueSelect('gender'),
      genderCode: this.valueSelectNonLabel('gender'),
      phoneNumber: this.formGroup.get('phoneNumber').value,
      address: this.formGroup.get('address').value,
      country: this.valueSelect('country'),
      countryCode: this.valueSelectNonLabel('country'),
      province: this.valueSelect('province'),
      provinceCode: this.valueSelectNonLabel('province'),
      city: this.valueSelect('city'),
      cityCode: this.valueSelectNonLabel('city'),
      district: this.valueSelect('district'),
      districtCode: this.valueSelectNonLabel('district'),
      subDistrict: this.valueSelect('subDistrict'),
      subDistrictCode: this.valueSelectNonLabel('subDistrict'),
    };
    if (this.provider === 'local') {
      data['email'] = this.formGroup.get('email').value;
    }
    (super.onSubmit(data, 'profile', 'change-profile') as Observable<ApiBaseResponse>)
            .pipe(takeUntil(this.destroy$))
            .subscribe((response: ApiBaseResponse) => {
              if (response) {
                switch (response.respStatusCode) {
                  case ResponseCode.ERR_SCR0008.toString():
                    this.formGroup.controls['email'].setErrors({
                      'email': true,
                    });
                    break;
                  case ResponseCode.ERR_SCR0007A.toString():
                    this.formGroup.controls['phoneNumber'].setErrors({
                      'error.pattern.phoneNumber': true,
                    });
                    break;
                  case ResponseCode.OK_SCR004.toString():
                    this.userService.updateNameUser(this.formGroup.get('name').value);
                    break;
                  default:
                    break;
                }
              }
            });
  }

}
