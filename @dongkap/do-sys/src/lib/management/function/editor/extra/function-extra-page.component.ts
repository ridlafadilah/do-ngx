import { Component, Injector, TemplateRef, ViewEncapsulation } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { TreeMode } from 'tree-ngx';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { ApiBaseResponse, ResponseCode } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-common';
import { FunctionControlService } from '../../services/function-control.service';

@Component({
  selector: 'do-function-extra-page',
  styleUrls: ['./function-extra-page.component.scss'],
  templateUrl: './function-extra-page.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class FunctionExtraPageComponent extends BaseFormComponent<any> implements OnInit, OnDestroy {

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

  ngOnDestroy(): void {}

  loadDataMenu(): Observable<any> {
    return this.http.HTTP_AUTH(
      this.api['security']['get-function-menus'], null, null, null,
      ['extra', this.functionControlService.getRole().authority]).pipe(map((response: any) => {
        this.nodeItems = [];
        this.nodeItems = [...this.nodeItems, ...response];
      }));
  }

  onSelect(datas: any) {
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
    (super.onSubmit(this.datas, 'security', 'post-functions')  as Observable<ApiBaseResponse>)
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
          this.loadDataMenu().subscribe();
        }
        ref.close();
      });
  }

}
