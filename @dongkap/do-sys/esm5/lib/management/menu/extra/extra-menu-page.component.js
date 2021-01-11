import { __extends, __read, __spread } from "tslib";
import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, takeUntil } from 'rxjs/operators';
import { TreeMode } from 'tree-ngx';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { LocaleModel, ResponseCode } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-common';
import { DialogIconComponent } from '../dialog-icon/dialog-icon.component';
var ExtraMenuPageComponent = /** @class */ (function (_super) {
    __extends(ExtraMenuPageComponent, _super);
    function ExtraMenuPageComponent(injector, dialogService) {
        var _this = _super.call(this, injector, {
            'id': [],
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
        }) || this;
        _this.injector = injector;
        _this.dialogService = dialogService;
        _this.nodeItems = [];
        _this.options = {
            mode: TreeMode.NoSelect,
            checkboxes: false,
            alwaysEmitSelected: true
        };
        _this.allLocales = [];
        _this.locales = [];
        _this.localeDefault = new LocaleModel();
        _this.action = 'Add';
        _this.dialogAction = 'Edit';
        _this.loadLocale = false;
        _this.title = null;
        return _this;
    }
    ExtraMenuPageComponent.prototype.ngOnInit = function () { };
    ExtraMenuPageComponent.prototype.loadDataMenu = function () {
        var _this = this;
        if (!this.loadLocale) {
            this.loadingForm = true;
            this.http.HTTP_AUTH(this.api['master']['all-locale']).subscribe(function (response) {
                _this.splitLocale(response);
                _this.loadLocale = true;
                _this.loadingForm = false;
            });
        }
        return this.http.HTTP_AUTH(this.api['security']['get-tree-menus'], null, null, null, ['extra']).pipe(map(function (response) {
            _this.nodeItems = [];
            _this.nodeItems = __spread(_this.nodeItems, response);
            _this.onReset();
            if (_this.loadLocale)
                _this.loadingForm = false;
        }));
    };
    ExtraMenuPageComponent.prototype.splitLocale = function (values) {
        var _this = this;
        this.allLocales = values;
        values.forEach(function (data) {
            if (data.localeDefault) {
                _this.localeDefault = data;
            }
            else {
                _this.locales.push(data);
            }
            _this.formGroup.removeControl(data.localeCode);
            _this.formGroup.addControl(data.localeCode, new FormControl());
        });
    };
    ExtraMenuPageComponent.prototype.onSearchIcon = function () {
        var _this = this;
        this.dialogService.open(DialogIconComponent)
            .onClose.subscribe(function (icon) {
            _this.formGroup.get('icon').setValue(icon);
            _this.formGroup.get('icon').markAsDirty();
        });
    };
    ExtraMenuPageComponent.prototype.onSelectNode = function (node) {
        var _this = this;
        if (node.item) {
            this.action = 'Edit';
            this.dialogAction = this.action;
            this.allLocales.forEach(function (locale) {
                _this.formGroup.get(locale.localeCode).setValue(node.item['i18n'][locale.localeCode]);
            });
            this.formGroup.get('id').setValue(node['id']);
            this.formGroup.get('code').setValue(node.item['code']);
            this.formGroup.get('link').setValue(node.item['link']);
            this.formGroup.get('order').setValue(node.item['ordering']);
        }
    };
    ExtraMenuPageComponent.prototype.onDeleteTree = function (node, context, dialog) {
        this.dialogAction = 'Delete';
        this.node = node;
        this.context = context;
        this.dialogService.open(dialog, { context: 'alert.delete' });
    };
    ExtraMenuPageComponent.prototype.onSubmit = function (dialog) {
        var _this = this;
        var id = null;
        var code = 'N/A';
        var link = '#';
        var ordering = 0;
        var type = 'extra';
        var icon = null;
        var home = false;
        var group = false;
        var level = 0;
        var leaf = false;
        var i18n = {};
        var parentMenu = null;
        if (this.formGroup.get('id').value)
            id = this.formGroup.get('id').value;
        if (this.formGroup.get('code').value)
            code = this.formGroup.get('code').value;
        if (this.formGroup.get('link').value)
            link = this.formGroup.get('link').value;
        if (this.formGroup.get('order').value)
            ordering = +this.formGroup.get('order').value;
        this.allLocales.forEach(function (locale) {
            i18n[locale.localeCode] = _this.formGroup.get(locale.localeCode).value;
        });
        this.data = {
            'id': id,
            'code': code,
            'icon': icon,
            'link': link,
            'type': type,
            'level': level,
            'ordering': ordering,
            'home': home,
            'group': group,
            'leaf': leaf,
            'i18n': i18n,
            'parentMenu': parentMenu,
        };
        if (this.action === 'Edit') {
            this.dialogService.open(dialog, { context: 'alert.edit' });
        }
        else {
            this.postMenu();
        }
    };
    ExtraMenuPageComponent.prototype.onSubmitDialog = function (ref) {
        if (this.dialogAction === 'Delete') {
            this.deleteTreeMenu(ref);
        }
        else {
            this.postMenu(ref);
        }
    };
    ExtraMenuPageComponent.prototype.onReset = function () {
        var _this = this;
        this.disabled = false;
        this.title = null;
        this.action = 'Add';
        this.allLocales.forEach(function (locale) {
            _this.formGroup.get(locale.localeCode).setValue(null);
        });
        this.formGroup.get('id').setValue(null);
        this.formGroup.get('code').setValue('N/A');
        this.formGroup.get('link').setValue('#');
        this.formGroup.get('order').setValue(null);
    };
    ExtraMenuPageComponent.prototype.deleteTreeMenu = function (ref) {
        var _this = this;
        this.disabled = true;
        this.http.HTTP_AUTH(this.api['security']['delete-menu'], null, null, null, [this.node['id']]).subscribe(function (success) {
            ref.close();
            _this.context.delete();
            _this.disabled = false;
            _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
            _this.loadDataMenu().subscribe(function () {
                _this.loadingForm = false;
            });
        }, function (error) {
            _this.disabled = false;
            _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
    };
    ExtraMenuPageComponent.prototype.postMenu = function (ref) {
        var _this = this;
        _super.prototype.onSubmit.call(this, this.data, 'security', 'post-menus')
            .pipe(takeUntil(this.destroy$))
            .subscribe(function (response) {
            if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                _this.loadDataMenu().subscribe(function () {
                    _this.loadingForm = false;
                });
            }
            if (_this.action === 'Edit')
                ref.close();
        });
    };
    ExtraMenuPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: NbDialogService }
    ]; };
    ExtraMenuPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-extra-menu-page',
                    template: "<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n    <tree-ngx\n      [nodeItems]=\"nodeItems\"\n      [options]=\"options\"\n      #treeExtra>\n      <ng-template #nodeNameTemplate let-node=\"node\" let-context=\"context\">\n        <span\n          class=\"node-action\"\n          [class.active]=\"context.active\"\n          (click)=\"onSelectNode(node)\">\n          {{node.name}}\n        </span>\n        <span class=\"tree-action\">\n          <nb-icon\n              class=\"action-trash\"\n              icon=\"close-square-outline\"\n              (click)=\"onDeleteTree(node, context, dialogprocessextra)\">\n          </nb-icon>\n        </span>\n      </ng-template>\n    </tree-ngx>\n  </div>\n  <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n    <form [formGroup]=\"formGroup\">\n      <div class=\"row\">\n        <label\n          for=\"Title\"\n          class=\"label col-sm-3 col-form-label\"\n          *ngIf=\"!loadingForm; else labelskeleton\">\n          {{'Title' | translate}}\n        </label>\n        <ng-template #labelskeleton>\n          <div class=\"col-sm-3\">\n            <div\n              [ngClass]=\"{\n                'label-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n        <div class=\"col-sm-9\" *ngIf=\"loadLocale; else inputSkeleton\">\n          <do-input-icon\n            [name]=\"localeDefault.localeCode\"\n            [nolabel]=\"true\"\n            [required]=\"true\"\n            [colLabel]=\"0\"\n            [colInput]=\"12\"\n            [icon]=\"'flag-icon flag-icon-' + localeDefault.icon\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"{{localeDefault.localeCode}}\">\n          </do-input-icon>\n        </div>\n        <ng-template #inputSkeleton>\n          <div class=\"col-sm-9\">\n            <div\n              [ngClass]=\"{\n                'input-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n      </div>\n      <do-input-icon *ngFor=\"let i18n of locales\"\n        [name]=\"i18n.localeCode\"\n        [nolabel]=\"true\"\n        [icon]=\"'flag-icon flag-icon-'+ i18n.icon\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"{{i18n.localeCode}}\">\n      </do-input-icon>\n      <do-input-text\n        [name]=\"'code'\"\n        [label]=\"'Code'\"\n        [capslock]=\"true\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"code\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'link'\"\n        [label]=\"'Link'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"link\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'order'\"\n        [label]=\"'Order'\"\n        [required]=\"true\"\n        [type]=\"'number'\"\n        [max]=\"99\"\n        [maxLength]=\"2\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"order\">\n      </do-input-text>\n      <div class=\"form-group row\">\n        <div class=\"offset-sm-3 col-sm-9\" *ngIf=\"!loadingForm; else buttonSkeleton\">\n          <button\n            type=\"button\"\n            status=\"danger\"\n            (click)=\"onReset()\"\n            class=\"reset-left\"\n            nbButton>\n            {{ 'Reset' | translate}}\n          </button>\n          <button\n            type=\"submit\"\n            status=\"primary\"\n            (click)=\"onSubmit(dialogprocessextra)\"\n            [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n            class=\"submit-right\"\n            nbButton>\n            {{ action | translate}}\n          </button>\n        </div>\n        <ng-template #buttonSkeleton>\n          <div class=\"offset-sm-3 col-sm-9\">\n            <div\n              [ngClass]=\"{\n                'button-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </form>\n  </div>\n</div>\n\n<ng-template #dialogprocessextra let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"{{dialogAction === 'Delete' ? 'danger' : 'warning'}}\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <div class=\"row\">\n        <button\n          type=\"reset\"\n          status=\"danger\"\n          (click)=\"ref.close()\"\n          class=\"reset-left-dialog\"\n          nbButton>\n          {{ 'Cancel' | translate}}\n        </button>\n        <button\n          type=\"submit\"\n          status=\"primary\"\n          (click)=\"onSubmitDialog(ref)\"\n          [disabled]=\"disabled\"\n          class=\"submit-right-dialog\"\n          nbButton>\n          {{ dialogAction | translate}}\n        </button>\n      </div>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".tree-ngx{display:flex;flex:1 1 auto;flex-direction:column;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.node{display:flex;flex:1 1 auto;flex-direction:column}.node-children{display:flex;flex:1 1 auto}.node-name{display:inline-block;padding:5px 0 5px 7px}.node-name.markSelected{padding:5px 0 5px 2px;border-left:5px solid #269}.node-name .active{cursor:pointer}.node-offset{display:flex;margin-left:20px}.node-icon-wrapper{position:relative;display:inline-block;width:25px;height:17px;top:1px;left:6px}.node-icon-wrapper.disabled{cursor:default}.collapsable{cursor:pointer}.node-container{display:inline-block}.nodeDisabled{opacity:.6}.node-checkbox:disabled{cursor:auto}.collapsible-wrapper{display:flex;overflow:hidden}.collapsible-wrapper:after{content:'';height:25px;transition:height .3s linear,max-height linear .3s;max-height:0}.collapsible{transition:margin-bottom .3s cubic-bezier(0,0,0,1);margin-bottom:0;max-height:1000000px}.collapsible-wrapper.collapsed>.collapsible{margin-bottom:-20000px;transition:margin-bottom .3s cubic-bezier(1,0,1,1),visibility .3s,max-height .3s;visibility:hidden;max-height:0}.collapsible-wrapper.collapsed:after{height:0;transition:height .3s linear;max-height:25px}.arrow-down{position:absolute;width:0;height:0;left:3px;top:6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #455a64}.arrow-down.collapse-empty{border-top:7px solid #ccc}.arrow-right{position:absolute;width:0;height:0;left:8px;top:3px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #455a64}.node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.tree-action{margin-left:.5rem;cursor:pointer}.action-trash:hover{color:#ff708d}.reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}.reset-left-dialog{margin-left:1rem;margin-right:.5rem}.submit-right-dialog{margin-left:.5rem}"]
                },] }
    ];
    ExtraMenuPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: NbDialogService }
    ]; };
    return ExtraMenuPageComponent;
}(BaseFormComponent));
export { ExtraMenuPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0cmEtbWVudS1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9tYW5hZ2VtZW50L21lbnUvZXh0cmEvZXh0cmEtbWVudS1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNwQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBa0MsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzdGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTNFO0lBTTRDLDBDQUFzQjtJQW9CaEUsZ0NBQW1CLFFBQWtCLEVBQVUsYUFBOEI7UUFBN0UsWUFDRSxrQkFBTSxRQUFRLEVBQ1o7WUFDRSxJQUFJLEVBQUUsRUFBRTtZQUNSLE9BQU8sRUFBRSxFQUFFO1lBQ1gsT0FBTyxFQUFFLEVBQUU7WUFDWCxNQUFNLEVBQUUsQ0FBQztvQkFDUCxLQUFLLEVBQUUsS0FBSztvQkFDWixRQUFRLEVBQUUsS0FBSztpQkFDaEIsQ0FBQztZQUNGLE1BQU0sRUFBRSxDQUFDO29CQUNQLEtBQUssRUFBRSxHQUFHO29CQUNWLFFBQVEsRUFBRSxLQUFLO2lCQUNoQixDQUFDO1lBQ0YsT0FBTyxFQUFFLEVBQUU7U0FDWixDQUFDLFNBQ0w7UUFo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UyxDQUFDO29CQUM1QixLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUNELElBQUksS0FBSSxDQUFDLE1BQU0sS0FBSyxNQUFNO2dCQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O2dCQWxMNEIsUUFBUTtnQkFBeUIsZUFBZTs7O2dCQTFCOUUsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBRTlCLDI3SkFBK0M7b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7OztnQkFqQm1CLFFBQVE7Z0JBT04sZUFBZTs7SUFtTnJDLDZCQUFDO0NBQUEsQUE5TUQsQ0FNNEMsaUJBQWlCLEdBd001RDtTQXhNWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdG9yLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRyZWVNb2RlIH0gZnJvbSAndHJlZS1uZ3gnO1xuaW1wb3J0IHsgTmJEaWFsb2dSZWYsIE5iRGlhbG9nU2VydmljZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSwgSHR0cEJhc2VNb2RlbCwgTG9jYWxlTW9kZWwsIFJlc3BvbnNlQ29kZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQmFzZUZvcm1Db21wb25lbnQgfSBmcm9tICdAZG9uZ2thcC9kby1jb21tb24nO1xuaW1wb3J0IHsgRGlhbG9nSWNvbkNvbXBvbmVudCB9IGZyb20gJy4uL2RpYWxvZy1pY29uL2RpYWxvZy1pY29uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWV4dHJhLW1lbnUtcGFnZScsXG4gIHN0eWxlVXJsczogWycuL2V4dHJhLW1lbnUtcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZXh0cmEtbWVudS1wYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRXh0cmFNZW51UGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGb3JtQ29tcG9uZW50PGFueT4gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBub2RlSXRlbXM6IGFueSA9IFtdO1xuICBwdWJsaWMgb3B0aW9uczogYW55ID0ge1xuICAgIG1vZGU6IFRyZWVNb2RlLk5vU2VsZWN0LFxuICAgIGNoZWNrYm94ZXM6IGZhbHNlLFxuICAgIGFsd2F5c0VtaXRTZWxlY3RlZDogdHJ1ZVxuICB9O1xuICBwdWJsaWMgYWxsTG9jYWxlczogTG9jYWxlTW9kZWxbXSA9IFtdO1xuICBwdWJsaWMgbG9jYWxlczogTG9jYWxlTW9kZWxbXSA9IFtdO1xuICBwdWJsaWMgbG9jYWxlRGVmYXVsdDogTG9jYWxlTW9kZWwgPSBuZXcgTG9jYWxlTW9kZWwoKTtcbiAgcHVibGljIGFjdGlvbjogJ0FkZCcgfCAnRWRpdCcgPSAnQWRkJztcbiAgcHVibGljIGRpYWxvZ0FjdGlvbjogJ0VkaXQnIHwgJ0RlbGV0ZScgPSAnRWRpdCc7XG4gIHB1YmxpYyBhcGlQYXRoTG9jYWxlOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgbG9hZExvY2FsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgdGl0bGU6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgZGF0YTogYW55O1xuICBwcml2YXRlIGNvbnRleHQ6IGFueTtcbiAgcHJpdmF0ZSBub2RlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBOYkRpYWxvZ1NlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3RvcixcbiAgICAgIHtcbiAgICAgICAgJ2lkJzogW10sXG4gICAgICAgICdlbi1VUyc6IFtdLFxuICAgICAgICAnaWQtSUQnOiBbXSxcbiAgICAgICAgJ2NvZGUnOiBbe1xuICAgICAgICAgIHZhbHVlOiAnTi9BJyxcbiAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIH1dLFxuICAgICAgICAnbGluayc6IFt7XG4gICAgICAgICAgdmFsdWU6ICcjJyxcbiAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIH1dLFxuICAgICAgICAnb3JkZXInOiBbXSxcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gIGxvYWREYXRhTWVudSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGlmICghdGhpcy5sb2FkTG9jYWxlKSB7XG4gICAgICB0aGlzLmxvYWRpbmdGb3JtID0gdHJ1ZTtcbiAgICAgIHRoaXMuaHR0cC5IVFRQX0FVVEgodGhpcy5hcGlbJ21hc3RlciddWydhbGwtbG9jYWxlJ10pLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMuc3BsaXRMb2NhbGUocmVzcG9uc2UpO1xuICAgICAgICB0aGlzLmxvYWRMb2NhbGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5IVFRQX0FVVEgoXG4gICAgICB0aGlzLmFwaVsnc2VjdXJpdHknXVsnZ2V0LXRyZWUtbWVudXMnXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICAgIFsnZXh0cmEnXSkucGlwZShtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5ub2RlSXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5ub2RlSXRlbXMgPSBbLi4udGhpcy5ub2RlSXRlbXMsIC4uLnJlc3BvbnNlXTtcbiAgICAgICAgdGhpcy5vblJlc2V0KCk7XG4gICAgICAgIGlmICh0aGlzLmxvYWRMb2NhbGUpIHRoaXMubG9hZGluZ0Zvcm0gPSBmYWxzZTtcbiAgICAgIH0pKTtcbiAgfVxuXG4gIHNwbGl0TG9jYWxlKHZhbHVlczogTG9jYWxlTW9kZWxbXSk6IHZvaWQge1xuICAgIHRoaXMuYWxsTG9jYWxlcyA9IHZhbHVlcztcbiAgICB2YWx1ZXMuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIGlmIChkYXRhLmxvY2FsZURlZmF1bHQpIHtcbiAgICAgICAgdGhpcy5sb2NhbGVEZWZhdWx0ID0gZGF0YTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9jYWxlcy5wdXNoKGRhdGEpO1xuICAgICAgfVxuICAgICAgdGhpcy5mb3JtR3JvdXAucmVtb3ZlQ29udHJvbChkYXRhLmxvY2FsZUNvZGUpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbChkYXRhLmxvY2FsZUNvZGUsIG5ldyBGb3JtQ29udHJvbCgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uU2VhcmNoSWNvbigpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihEaWFsb2dJY29uQ29tcG9uZW50KVxuICAgICAgLm9uQ2xvc2Uuc3Vic2NyaWJlKChpY29uOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdpY29uJykuc2V0VmFsdWUoaWNvbik7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnaWNvbicpLm1hcmtBc0RpcnR5KCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uU2VsZWN0Tm9kZShub2RlOiBhbnkpIHtcbiAgICBpZiAobm9kZS5pdGVtKSB7XG4gICAgICB0aGlzLmFjdGlvbiA9ICdFZGl0JztcbiAgICAgIHRoaXMuZGlhbG9nQWN0aW9uID0gdGhpcy5hY3Rpb247XG4gICAgICB0aGlzLmFsbExvY2FsZXMuZm9yRWFjaChsb2NhbGUgPT4ge1xuICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQobG9jYWxlLmxvY2FsZUNvZGUpLnNldFZhbHVlKG5vZGUuaXRlbVsnaTE4biddW2xvY2FsZS5sb2NhbGVDb2RlXSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnaWQnKS5zZXRWYWx1ZShub2RlWydpZCddKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnY29kZScpLnNldFZhbHVlKG5vZGUuaXRlbVsnY29kZSddKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnbGluaycpLnNldFZhbHVlKG5vZGUuaXRlbVsnbGluayddKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnb3JkZXInKS5zZXRWYWx1ZShub2RlLml0ZW1bJ29yZGVyaW5nJ10pO1xuICAgIH1cbiAgfVxuXG4gIG9uRGVsZXRlVHJlZShub2RlOiBhbnksIGNvbnRleHQ6IGFueSwgZGlhbG9nOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgdGhpcy5kaWFsb2dBY3Rpb24gPSAnRGVsZXRlJztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oXG4gICAgICBkaWFsb2csXG4gICAgICB7IGNvbnRleHQ6ICdhbGVydC5kZWxldGUnIH0pO1xuICB9XG5cbiAgb25TdWJtaXQoZGlhbG9nOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgbGV0IGlkOiBzdHJpbmcgPSBudWxsO1xuICAgIGxldCBjb2RlOiBzdHJpbmcgPSAnTi9BJztcbiAgICBsZXQgbGluazogc3RyaW5nID0gJyMnO1xuICAgIGxldCBvcmRlcmluZzogbnVtYmVyID0gMDtcbiAgICBjb25zdCB0eXBlOiBzdHJpbmcgPSAnZXh0cmEnO1xuICAgIGNvbnN0IGljb246IHN0cmluZyA9IG51bGw7XG4gICAgY29uc3QgaG9tZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGNvbnN0IGdyb3VwOiBib29sZWFuID0gZmFsc2U7XG4gICAgY29uc3QgbGV2ZWw6IG51bWJlciA9IDA7XG4gICAgY29uc3QgbGVhZjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGNvbnN0IGkxOG46IGFueSA9IHt9O1xuICAgIGNvbnN0IHBhcmVudE1lbnU6IGFueSA9IG51bGw7XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldCgnaWQnKS52YWx1ZSkgaWQgPSB0aGlzLmZvcm1Hcm91cC5nZXQoJ2lkJykudmFsdWU7XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldCgnY29kZScpLnZhbHVlKSBjb2RlID0gdGhpcy5mb3JtR3JvdXAuZ2V0KCdjb2RlJykudmFsdWU7XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldCgnbGluaycpLnZhbHVlKSBsaW5rID0gdGhpcy5mb3JtR3JvdXAuZ2V0KCdsaW5rJykudmFsdWU7XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldCgnb3JkZXInKS52YWx1ZSkgb3JkZXJpbmcgPSArdGhpcy5mb3JtR3JvdXAuZ2V0KCdvcmRlcicpLnZhbHVlO1xuICAgIHRoaXMuYWxsTG9jYWxlcy5mb3JFYWNoKGxvY2FsZSA9PiB7XG4gICAgICBpMThuW2xvY2FsZS5sb2NhbGVDb2RlXSA9IHRoaXMuZm9ybUdyb3VwLmdldChsb2NhbGUubG9jYWxlQ29kZSkudmFsdWU7XG4gICAgfSk7XG4gICAgdGhpcy5kYXRhID0ge1xuICAgICAgJ2lkJzogaWQsXG4gICAgICAnY29kZSc6IGNvZGUsXG4gICAgICAnaWNvbic6IGljb24sXG4gICAgICAnbGluayc6IGxpbmssXG4gICAgICAndHlwZSc6IHR5cGUsXG4gICAgICAnbGV2ZWwnOiBsZXZlbCxcbiAgICAgICdvcmRlcmluZyc6IG9yZGVyaW5nLFxuICAgICAgJ2hvbWUnOiBob21lLFxuICAgICAgJ2dyb3VwJzogZ3JvdXAsXG4gICAgICAnbGVhZic6IGxlYWYsXG4gICAgICAnaTE4bic6IGkxOG4sXG4gICAgICAncGFyZW50TWVudSc6IHBhcmVudE1lbnUsXG4gICAgfTtcbiAgICBpZiAodGhpcy5hY3Rpb24gPT09ICdFZGl0Jykge1xuICAgICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oXG4gICAgICAgIGRpYWxvZyxcbiAgICAgICAgeyBjb250ZXh0OiAnYWxlcnQuZWRpdCcgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9zdE1lbnUoKTtcbiAgICB9XG4gIH1cblxuICBvblN1Ym1pdERpYWxvZyhyZWY6IE5iRGlhbG9nUmVmPGFueT4pIHtcbiAgICBpZiAodGhpcy5kaWFsb2dBY3Rpb24gPT09ICdEZWxldGUnKSB7XG4gICAgICB0aGlzLmRlbGV0ZVRyZWVNZW51KHJlZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9zdE1lbnUocmVmKTtcbiAgICB9XG4gIH1cblxuICBvblJlc2V0KCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnRpdGxlID0gbnVsbDtcbiAgICB0aGlzLmFjdGlvbiA9ICdBZGQnO1xuICAgIHRoaXMuYWxsTG9jYWxlcy5mb3JFYWNoKGxvY2FsZSA9PiB7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQobG9jYWxlLmxvY2FsZUNvZGUpLnNldFZhbHVlKG51bGwpO1xuICAgIH0pO1xuICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnaWQnKS5zZXRWYWx1ZShudWxsKTtcbiAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2NvZGUnKS5zZXRWYWx1ZSgnTi9BJyk7XG4gICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdsaW5rJykuc2V0VmFsdWUoJyMnKTtcbiAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ29yZGVyJykuc2V0VmFsdWUobnVsbCk7XG4gIH1cblxuICBwcml2YXRlIGRlbGV0ZVRyZWVNZW51KHJlZjogTmJEaWFsb2dSZWY8YW55Pikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuaHR0cC5IVFRQX0FVVEgodGhpcy5hcGlbJ3NlY3VyaXR5J11bJ2RlbGV0ZS1tZW51J10sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW3RoaXMubm9kZVsnaWQnXV0pLnN1YnNjcmliZShcbiAgICAgIChzdWNjZXNzOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmVmLmNsb3NlKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5kZWxldGUoKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihzdWNjZXNzLnJlc3BTdGF0dXNNZXNzYWdlW3N1Y2Nlc3MucmVzcFN0YXR1c0NvZGVdLCB0cnVlKTtcbiAgICAgICAgdGhpcy5sb2FkRGF0YU1lbnUoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZ0Zvcm0gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgKGVycm9yOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihlcnJvci5yZXNwU3RhdHVzTWVzc2FnZVtlcnJvci5yZXNwU3RhdHVzQ29kZV0sIHRydWUsIG51bGwsICdkYW5nZXInKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcG9zdE1lbnUocmVmPzogTmJEaWFsb2dSZWY8YW55Pikge1xuICAgIChzdXBlci5vblN1Ym1pdCh0aGlzLmRhdGEsICdzZWN1cml0eScsICdwb3N0LW1lbnVzJykgIGFzIE9ic2VydmFibGU8QXBpQmFzZVJlc3BvbnNlPilcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UucmVzcFN0YXR1c0NvZGUgPT09IFJlc3BvbnNlQ29kZS5PS19ERUZBVUxULnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICB0aGlzLmxvYWREYXRhTWVudSgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gZmFsc2U7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uID09PSAnRWRpdCcpIHJlZi5jbG9zZSgpO1xuICAgICAgfSk7XG4gIH1cblxufVxuIl19