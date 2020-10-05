import { Component, Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NbDialogService } from '@nebular/theme';
import { ApiBaseResponse, ResponseCode, HttpBaseModel } from '@dongkap/do-core';
import { BaseFormComponent, CheckboxModel } from '@dongkap/do-common';
import { LocaleModel } from '../models/locale.model';
import { LanguageService } from '../services/language.service';
import { DialogFlagComponent } from './dialog-flag/dialog-flag.component';

@Component({
  selector: 'do-language-add-edit-page',
  styleUrls: ['./language-add-edit-page.component.scss'],
  templateUrl: './language-add-edit-page.component.html',
})
export class LanguageAddEditPageComponent extends BaseFormComponent<any> implements OnInit, OnDestroy {

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
    private languageService: LanguageService,
    private dialogService: NbDialogService) {
    super(injector,
      {
        'language': [],
        'icon': [],
        'default': [],
      });
    if ((this.route.snapshot.params['action'] === 'edit')) {
      this.action = 'Edit';
    }
    this.apiSelectLanguage = this.api['master']['select-language'];
    if (this.languageService.getLocale() && (this.route.snapshot.params['action'] === 'edit')) {
      if (this.languageService.getLocale().localeDefault) {
        this.formGroup.get('default').setValue([{
          selected: true,
        }]);
        this.formGroup.get('default').disable();
      } else {
        this.formGroup.get('default').setValue([{
          selected: false,
        }]);
      }
      this.formGroup.get('icon').setValue(this.languageService.getLocale().icon);
      this.formGroup.get('language').setValue(this.languageService.getLocale().identifier);
      this.formGroup.get('language').disable();
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  onSearchFlag(): void {
    this.dialogService.open(DialogFlagComponent)
      .onClose.subscribe((flagIcon: string) => {
        this.formGroup.get('icon').setValue(flagIcon);
        this.formGroup.get('icon').markAsDirty();
      });
  }

  onReset(): void {
    this.router.navigate(['/app/sysconf/language']);
  }

  onSubmit(): void {
    const localeDefault: CheckboxModel[] = this.formGroup.get('default').value;
    const data: LocaleModel = {
      icon: this.formGroup.get('icon').value,
      localeDefault: (localeDefault ? true : false),
      localeCode: this.formGroup.get('language').value['value'] ?
                  this.formGroup.get('language').value['value'] : this.languageService.getLocale().localeCode,
      identifier: this.formGroup.get('language').value['label'] ?
                  this.formGroup.get('language').value['label'] : this.languageService.getLocale().identifier,
      localeEnabled: true,
    };
    (super.onSubmit(data, 'master', 'post-locale')  as Observable<ApiBaseResponse>)
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        if (response.respStatusCode === ResponseCode.OK_SCR010.toString()) {
          this.router.navigate(['/app/sysconf/language']);
        }
      });
  }

}
