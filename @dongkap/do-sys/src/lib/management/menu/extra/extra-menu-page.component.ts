import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TreeMode } from 'tree-ngx';
import { NbDialogService } from '@nebular/theme';
import { HttpBaseModel, LocaleModel } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-common';
import { DialogIconComponent } from '../dialog-icon/dialog-icon.component';

@Component({
  selector: 'do-extra-menu-page',
  styleUrls: ['./extra-menu-page.component.scss'],
  templateUrl: './extra-menu-page.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ExtraMenuPageComponent extends BaseFormComponent<any> implements OnInit, OnDestroy {

  public nodeItems: any = [];
  public options: any = {
    mode: TreeMode.NoSelect,
    checkboxes: false,
    alwaysEmitSelected: true
  };
  public allLocales: LocaleModel[] = [];
  public locales: LocaleModel[] = [];
  public localeDefault: LocaleModel = new LocaleModel();
  public action: 'Add' | 'Edit' = 'Add';
  public apiPathLocale: HttpBaseModel;
  public loadLocale: boolean = false;

  constructor(public injector: Injector, private dialogService: NbDialogService) {
    super(injector,
      {
        'en-US': [],
        'id-ID': [],
        'code': [{
          value: 'N/A',
          disabled: false,
        }],
        'link': [{
          value: '#',
          disabled: false,
        }],
        'order': [],
      });
    this.http.HTTP_AUTH(this.api['master']['all-locale']).subscribe(response => {
      this.splitLocale(response);
      this.loadLocale = true;
      this.loadingForm = false;
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  loadDataMenu(): Observable<any> {
    this.loadingForm = true;
    return this.http.HTTP_AUTH(
      this.api['security']['get-tree-menus'], null, null, null,
      ['extra']).pipe(map((response: any) => {
          this.nodeItems = [];
          this.nodeItems = [...this.nodeItems, ...response];
          if (this.loadLocale) this.loadingForm = false;
      }));
  }

  splitLocale(values: LocaleModel[]): void {
    this.allLocales = values;
    values.forEach(data => {
      if (data.localeDefault) {
        this.localeDefault = data;
      } else {
        this.locales.push(data);
      }
      this.formGroup.removeControl(data.localeCode);
      this.formGroup.addControl(data.localeCode, new FormControl());
    });
  }

  onSearchIcon(): void {
    this.dialogService.open(DialogIconComponent)
      .onClose.subscribe((icon: string) => {
        this.formGroup.get('icon').setValue(icon);
        this.formGroup.get('icon').markAsDirty();
      });
  }

  onSelectNode(node: any) {
    if (node.item) {
      this.action = 'Edit';
      this.allLocales.forEach(locale => {
        this.formGroup.get(locale.localeCode).setValue(node.item['i18n'][locale.localeCode]);
      });
      this.formGroup.get('code').setValue(node.item['code']);
      this.formGroup.get('link').setValue(node.item['link']);
      this.formGroup.get('order').setValue(node.item['ordering']);
    }
  }

  onDeleteTree(node: any, context: any) {
    context.delete();
    console.log(node);
  }

  onSubmit() {
  }

  onReset() {
    super.onReset();
    this.action = 'Add';
  }

}
