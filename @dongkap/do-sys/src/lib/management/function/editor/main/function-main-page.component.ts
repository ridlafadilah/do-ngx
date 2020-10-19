import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { TreeMode } from 'tree-ngx';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { ApiBaseResponse, ResponseCode } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-common';
import { FunctionControlService } from '../../services/function-control.service';

@Component({
  selector: 'do-function-main-page',
  styleUrls: ['./function-main-page.component.scss'],
  templateUrl: './function-main-page.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class FunctionMainPageComponent extends BaseFormComponent<any> implements OnInit {

  public nodeItems: any[] = [];
  public options: any = {
    mode: TreeMode.MultiSelect,
    checkboxes: true,
    alwaysEmitSelected: true,
  };
  public title: string = null;
  private datas: any[] = [];

  constructor(
    public injector: Injector,
    private dialogService: NbDialogService,
    private functionControlService: FunctionControlService) {
    super(injector);
  }

  ngOnInit(): void {}

  loadDataMenu(): Observable<any> {
    this.disabled = true;
    return this.http.HTTP_AUTH(
      this.api['security']['get-function-menus'], null, null, null,
      ['main', this.functionControlService.getRole().authority]).pipe(map((response: any) => {
        this.datas = [];
        this.nodeItems = [];
        this.nodeItems = [...this.nodeItems, ...response];
      }));
  }

  onSelect(datas: any[]) {
    if (this.datas.length > 0 && this.datas.length !== datas.length)
      this.disabled = false;
    this.datas = [];
    this.datas = [...this.datas, ...datas];
  }

  onSubmit(dialog: TemplateRef<any>) {
    this.dialogService.open(
      dialog,
      { context: 'alert.edit' });
  }

  onSubmitDialog(ref: NbDialogRef<any>) {
    this.postFunction(ref);
  }

  private postFunction(ref?: NbDialogRef<any>) {
    const data: any = {
      type: 'main',
    };
    const menus: any[] = [];
    data['authority'] = this.functionControlService.getRole().authority;
    this.datas.forEach(val => {
      menus.push(val['id']);
      if (val['parentMenu']['id']) {
        if (!menus.includes(val['parentMenu']['id'])) {
          menus.push(val['parentMenu']['id']);
        }
      }
    });
    data['menus'] = menus;
    (super.onSubmit(data, 'security', 'post-functions')  as Observable<ApiBaseResponse>)
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
          this.loadDataMenu().subscribe();
        }
        ref.close();
      });
  }

}
