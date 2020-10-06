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
  selector: 'do-main-menu-page',
  styleUrls: ['./main-menu-page.component.scss'],
  templateUrl: './main-menu-page.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class MainMenuPageComponent extends BaseFormComponent<any> implements OnInit, OnDestroy {

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
  public apiSelectParent: HttpBaseModel;
  public apiPathLocale: HttpBaseModel;
  public isRoot: boolean = true;
  public isGroup: boolean = false;
  public loadLocale: boolean = false;

  constructor(public injector: Injector, private dialogService: NbDialogService) {
    super(injector,
      {
        'en-US': [],
        'id-ID': [],
        'root': [{
          value: [{ selected: true }],
          disabled: false,
        }],
        'code': [{
          value: 'N/A',
          disabled: false,
        }],
        'icon': [],
        'link': [{
          value: '#',
          disabled: false,
        }],
        'home': [{
          value: [{ selected: false }],
          disabled: false,
        }],
        'group': [{
          value: [{ selected: false }],
          disabled: false,
        }],
        'parent': [],
        'order': [],
      });
    this.apiSelectParent = this.api['master']['select-country'];
    this.http.HTTP_AUTH(this.api['master']['all-locale']).subscribe(response => {
      this.splitLocale(response);
      this.loadLocale = true;
      this.loadingForm = false;
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  onCheckedRoot(event: any) {
    this.isRoot = event[0].selected;
  }

  onCheckedGroup(event: any) {
    this.isGroup = event[0].selected;
  }

  loadDataMenu(): Observable<any> {
    this.loadingForm = true;
    return this.http.HTTP_AUTH(
      this.api['security']['get-tree-menus'], null, null, null,
      ['main']).pipe(map((response: any) => {
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
      this.isRoot = node.item['level'] === 0 ? true : false;
      this.isGroup = node.item['group'];
      this.allLocales.forEach(locale => {
        this.formGroup.get(locale.localeCode).setValue(node.item['i18n'][locale.localeCode]);
      });
      this.formGroup.get('group').setValue([{ selected: this.isGroup }]);
      this.formGroup.get('root').setValue([{ selected: this.isRoot }]);
      this.formGroup.get('home').setValue([{ selected: node.item['home'] }]);
      this.formGroup.get('code').setValue(node.item['code']);
      this.formGroup.get('link').setValue(node.item['link']);
      this.formGroup.get('icon').setValue(node.item['icon']);
      this.formGroup.get('order').setValue(node.item['ordering']);
      if (node.item['parentMenu'])
        this.formGroup.get('parent').setValue(node.item['parentMenu']['title']);
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
