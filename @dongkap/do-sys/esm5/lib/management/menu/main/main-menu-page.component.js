import { __extends, __read, __spread } from "tslib";
import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, takeUntil } from 'rxjs/operators';
import { TreeMode } from 'tree-ngx';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { LocaleModel, ResponseCode } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-common';
import { DialogIconComponent } from '../dialog-icon/dialog-icon.component';
var MainMenuPageComponent = /** @class */ (function (_super) {
    __extends(MainMenuPageComponent, _super);
    function MainMenuPageComponent(injector, dialogService) {
        var _this = _super.call(this, injector, {
            'id': [],
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
        _this.apiSelectParent = _this.api['security']['select-main-menus'];
        _this.isRoot = true;
        _this.isGroup = false;
        return _this;
    }
    Object.defineProperty(MainMenuPageComponent.prototype, "isRoot", {
        get: function () { return this.root; },
        set: function (root) {
            this.root = root;
            if (root) {
                this.formGroup.get('icon').enable();
                this.formGroup.get('parent').disable();
                this.formGroup.get('parent').setValue(null);
            }
            else {
                this.formGroup.get('icon').disable();
                this.formGroup.get('icon').setValue(null);
                this.formGroup.get('parent').enable();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainMenuPageComponent.prototype, "isGroup", {
        get: function () { return this.group; },
        set: function (group) {
            this.group = group;
            if (group) {
                this.formGroup.get('root').disable();
                this.formGroup.get('home').disable();
                this.formGroup.get('code').disable();
                this.formGroup.get('link').disable();
                this.formGroup.get('icon').disable();
                this.formGroup.get('parent').disable();
                this.formGroup.get('root').setValue([{ selected: false }]);
                this.formGroup.get('home').setValue([{ selected: false }]);
                this.formGroup.get('code').setValue('N/A');
                this.formGroup.get('link').setValue('#');
                this.formGroup.get('icon').setValue(null);
                this.formGroup.get('parent').setValue(null);
            }
            else {
                this.formGroup.get('root').enable();
                this.formGroup.get('home').enable();
                this.formGroup.get('code').enable();
                this.formGroup.get('link').enable();
                if (this.isRoot)
                    this.formGroup.get('icon').enable();
                if (!this.isRoot)
                    this.formGroup.get('parent').enable();
            }
        },
        enumerable: false,
        configurable: true
    });
    MainMenuPageComponent.prototype.ngOnInit = function () { };
    MainMenuPageComponent.prototype.onCheckedRoot = function (event) {
        this.isRoot = event[0].selected;
    };
    MainMenuPageComponent.prototype.onCheckedGroup = function (event) {
        this.isGroup = event[0].selected;
    };
    MainMenuPageComponent.prototype.loadDataMenu = function () {
        var _this = this;
        if (!this.loadLocale) {
            this.loadingForm = true;
            this.http.HTTP_AUTH(this.api['master']['all-locale']).subscribe(function (response) {
                _this.splitLocale(response);
                _this.loadLocale = true;
                _this.loadingForm = false;
            });
        }
        return this.http.HTTP_AUTH(this.api['security']['get-tree-menus'], null, null, null, ['main']).pipe(map(function (response) {
            _this.nodeItems = [];
            _this.nodeItems = __spread(_this.nodeItems, response);
            _this.onReset();
            if (_this.loadLocale)
                _this.loadingForm = false;
        }));
    };
    MainMenuPageComponent.prototype.splitLocale = function (values) {
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
    MainMenuPageComponent.prototype.onSearchIcon = function () {
        var _this = this;
        this.dialogService.open(DialogIconComponent)
            .onClose.subscribe(function (icon) {
            _this.formGroup.get('icon').setValue(icon);
            _this.formGroup.get('icon').markAsDirty();
        });
    };
    MainMenuPageComponent.prototype.onSelectNode = function (node) {
        var _this = this;
        if (node.item) {
            this.action = 'Edit';
            this.dialogAction = this.action;
            this.isRoot = node.item['level'] === 0 ? true : false;
            this.isGroup = node.item['group'];
            this.allLocales.forEach(function (locale) {
                _this.formGroup.get(locale.localeCode).setValue(node.item['i18n'][locale.localeCode]);
                if (locale.localeDefault) {
                    _this.title = node.item['i18n'][locale.localeCode];
                }
            });
            this.formGroup.get('group').setValue([{ selected: this.isGroup }]);
            this.formGroup.get('root').setValue([{ selected: this.isRoot }]);
            this.formGroup.get('home').setValue([{ selected: node.item['home'] }]);
            this.formGroup.get('id').setValue(node['id']);
            this.formGroup.get('code').setValue(node.item['code']);
            this.formGroup.get('link').setValue(node.item['link']);
            this.formGroup.get('icon').setValue(node.item['icon']);
            this.formGroup.get('order').setValue(node.item['ordering']);
            if (node.item['parentMenu'])
                this.formGroup.get('parent').setValue({
                    label: node.item['parentMenu']['title'],
                    value: node.item['parentMenu']['id'],
                });
        }
    };
    MainMenuPageComponent.prototype.onDeleteTree = function (node, context, dialog) {
        this.dialogAction = 'Delete';
        this.node = node;
        this.context = context;
        this.dialogService.open(dialog, { context: 'alert.delete' });
    };
    MainMenuPageComponent.prototype.onSubmit = function (dialog) {
        var _this = this;
        var id = null;
        var code = 'N/A';
        var icon = null;
        var link = '#';
        var type = 'main';
        var ordering = 0;
        var home = false;
        var group = false;
        var level = 1;
        var leaf = true;
        var i18n = {};
        var parentMenu = null;
        if (this.formGroup.get('id').value)
            id = this.formGroup.get('id').value;
        if (this.formGroup.get('code').value)
            code = this.formGroup.get('code').value;
        if (this.formGroup.get('icon').value)
            icon = this.formGroup.get('icon').value;
        if (this.formGroup.get('link').value)
            link = this.formGroup.get('link').value;
        if (this.formGroup.get('order').value)
            ordering = +this.formGroup.get('order').value;
        if (this.formGroup.get('home').value) {
            if (this.formGroup.get('home').value[0]['selected']) {
                home = true;
            }
        }
        if (this.formGroup.get('root').value) {
            if (this.formGroup.get('root').value[0]['selected']) {
                level = 0;
                leaf = false;
            }
        }
        this.allLocales.forEach(function (locale) {
            i18n[locale.localeCode] = _this.formGroup.get(locale.localeCode).value;
        });
        if (this.formGroup.get('parent').value) {
            if (this.formGroup.get('parent').value['value']) {
                parentMenu = {
                    id: this.formGroup.get('parent').value['value'],
                };
            }
        }
        if (this.formGroup.get('group').value) {
            if (this.formGroup.get('group').value[0]['selected']) {
                group = true;
                home = false;
                leaf = false;
                level = 0;
                parentMenu = null;
            }
        }
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
    MainMenuPageComponent.prototype.onSubmitDialog = function (ref) {
        if (this.dialogAction === 'Delete') {
            this.deleteTreeMenu(ref);
        }
        else {
            this.postMenu(ref);
        }
    };
    MainMenuPageComponent.prototype.onReset = function () {
        var _this = this;
        this.disabled = false;
        this.isRoot = true;
        this.isGroup = false;
        this.title = null;
        this.action = 'Add';
        this.allLocales.forEach(function (locale) {
            _this.formGroup.get(locale.localeCode).setValue(null);
        });
        this.formGroup.get('group').setValue([{ selected: this.isGroup }]);
        this.formGroup.get('root').setValue([{ selected: this.isRoot }]);
        this.formGroup.get('home').setValue([{ selected: false }]);
        this.formGroup.get('id').setValue(null);
        this.formGroup.get('code').setValue('N/A');
        this.formGroup.get('link').setValue('#');
        this.formGroup.get('icon').setValue(null);
        this.formGroup.get('order').setValue(null);
        this.formGroup.get('parent').setValue(null);
    };
    MainMenuPageComponent.prototype.deleteTreeMenu = function (ref) {
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
    MainMenuPageComponent.prototype.postMenu = function (ref) {
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
    MainMenuPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: NbDialogService }
    ]; };
    MainMenuPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-main-menu-page',
                    template: "<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n    <tree-ngx\n      [nodeItems]=\"nodeItems\"\n      [options]=\"options\"\n      #treeMain>\n      <ng-template #nodeNameTemplate let-node=\"node\" let-context=\"context\">\n        <span\n          class=\"node-action\"\n          [ngClass]=\"{\n            'node-action': !node.item.group,\n            'node-action-group': node.item.group\n          }\"\n          [class.active]=\"context.active\"\n          (click)=\"onSelectNode(node)\">\n          {{node.name}}\n        </span>\n        <span class=\"tree-action\">\n          <nb-icon\n              class=\"action-trash\"\n              icon=\"close-square-outline\"\n              (click)=\"onDeleteTree(node, context, dialogprocess)\">\n          </nb-icon>\n        </span>\n      </ng-template>\n    </tree-ngx>\n  </div>\n  <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n    <form [formGroup]=\"formGroup\">\n      <div class=\"row\">\n        <label\n          for=\"Title\"\n          class=\"label col-sm-3 col-form-label\"\n          *ngIf=\"!loadingForm; else labelskeleton\">\n          {{'Title' | translate}}\n        </label>\n        <ng-template #labelskeleton>\n          <div class=\"col-sm-3\">\n            <div\n              [ngClass]=\"{\n                'label-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n        <div class=\"col-sm-9\" *ngIf=\"loadLocale; else inputSkeleton\">\n          <do-input-icon\n            [name]=\"localeDefault.localeCode\"\n            [nolabel]=\"true\"\n            [required]=\"true\"\n            [colLabel]=\"0\"\n            [colInput]=\"12\"\n            [icon]=\"'flag-icon flag-icon-' + localeDefault.icon\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"{{localeDefault.localeCode}}\">\n          </do-input-icon>\n        </div>\n        <ng-template #inputSkeleton>\n          <div class=\"col-sm-9\">\n            <div\n              [ngClass]=\"{\n                'input-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n      </div>\n      <do-input-icon *ngFor=\"let i18n of locales\"\n        [name]=\"i18n.localeCode\"\n        [nolabel]=\"true\"\n        [icon]=\"'flag-icon flag-icon-'+ i18n.icon\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"{{i18n.localeCode}}\">\n      </do-input-icon>\n      <do-checkbox\n        [name]=\"'group'\"\n        [label]=\"'Group'\"\n        [skeleton]=\"loadingForm\"\n        [warnMessage]=\"'warn.group-menu'\"\n        (onChecked)=\"onCheckedGroup($event)\"\n        formControlName=\"group\">\n      </do-checkbox>\n      <do-checkbox\n        [name]=\"'root'\"\n        [label]=\"'Root'\"\n        [skeleton]=\"loadingForm\"\n        (onChecked)=\"onCheckedRoot($event)\"\n        formControlName=\"root\"\n        *ngIf=\"!isGroup\">\n      </do-checkbox>\n      <do-checkbox\n        [name]=\"'home'\"\n        [label]=\"'Home'\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"home\"\n        *ngIf=\"!isGroup\">\n      </do-checkbox>\n      <do-input-text\n        [name]=\"'code'\"\n        [label]=\"'Code'\"\n        [capslock]=\"true\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"code\"\n        *ngIf=\"!isGroup\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'link'\"\n        [label]=\"'Link'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"link\"\n        *ngIf=\"!isGroup\">\n      </do-input-text>\n      <do-input-icon\n        [name]=\"'icon'\"\n        [label]=\"'Icon'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        [icon]=\"'search-outline'\"\n        [iconcursor]=\"true\"\n        [eva]=\"true\"\n        (clickIcon)=\"onSearchIcon()\"\n        formControlName=\"icon\"\n        *ngIf=\"(isRoot && !isGroup)\">\n      </do-input-icon>\n      <do-select\n        [name]=\"'parent'\"\n        [label]=\"'Parent Menu'\"\n        [api]=\"apiSelectParent\"\n        [searchable]=\"false\"\n        [skeleton]=\"loadingForm\"\n        [required]=\"true\"\n        formControlName=\"parent\"\n        *ngIf=\"(!isRoot && !isGroup)\">\n      </do-select>\n      <do-input-text\n        [name]=\"'order'\"\n        [label]=\"'Order'\"\n        [required]=\"true\"\n        [type]=\"'number'\"\n        [max]=\"999\"\n        [maxLength]=\"3\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"order\">\n      </do-input-text>\n      <div class=\"form-group row\">\n        <div class=\"offset-sm-3 col-sm-9\" *ngIf=\"!loadingForm; else buttonSkeleton\">\n          <button\n            type=\"button\"\n            status=\"danger\"\n            (click)=\"onReset()\"\n            class=\"reset-left\"\n            nbButton>\n            {{ 'Reset' | translate}}\n          </button>\n          <button\n            type=\"submit\"\n            status=\"primary\"\n            (click)=\"onSubmit(dialogprocess)\"\n            [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n            class=\"submit-right\"\n            nbButton>\n            {{ action | translate}}\n          </button>\n        </div>\n        <ng-template #buttonSkeleton>\n          <div class=\"offset-sm-3 col-sm-9\">\n            <div\n              [ngClass]=\"{\n                'button-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </form>\n  </div>\n</div>\n\n<ng-template #dialogprocess let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"{{dialogAction === 'Delete' ? 'danger' : 'warning'}}\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <div class=\"row\">\n        <button\n          type=\"reset\"\n          status=\"danger\"\n          (click)=\"ref.close()\"\n          class=\"reset-left-dialog\"\n          nbButton>\n          {{ 'Cancel' | translate}}\n        </button>\n        <button\n          type=\"submit\"\n          status=\"primary\"\n          (click)=\"onSubmitDialog(ref)\"\n          [disabled]=\"disabled\"\n          class=\"submit-right-dialog\"\n          nbButton>\n          {{ dialogAction | translate}}\n        </button>\n      </div>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".tree-ngx{display:flex;flex:1 1 auto;flex-direction:column;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.node{display:flex;flex:1 1 auto;flex-direction:column}.node-children{display:flex;flex:1 1 auto}.node-name{display:inline-block;padding:5px 0 5px 7px}.node-name.markSelected{padding:5px 0 5px 2px;border-left:5px solid #269}.node-name .active{cursor:pointer}.node-offset{display:flex;margin-left:20px}.node-icon-wrapper{position:relative;display:inline-block;width:25px;height:17px;top:1px;left:6px}.node-icon-wrapper.disabled{cursor:default}.collapsable{cursor:pointer}.node-container{display:inline-block}.nodeDisabled{opacity:.6}.node-checkbox:disabled{cursor:auto}.collapsible-wrapper{display:flex;overflow:hidden}.collapsible-wrapper:after{content:'';height:25px;transition:height .3s linear,max-height linear .3s;max-height:0}.collapsible{transition:margin-bottom .3s cubic-bezier(0,0,0,1);margin-bottom:0;max-height:1000000px}.collapsible-wrapper.collapsed>.collapsible{margin-bottom:-20000px;transition:margin-bottom .3s cubic-bezier(1,0,1,1),visibility .3s,max-height .3s;visibility:hidden;max-height:0}.collapsible-wrapper.collapsed:after{height:0;transition:height .3s linear;max-height:25px}.arrow-down{position:absolute;width:0;height:0;left:3px;top:6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #455a64}.arrow-down.collapse-empty{border-top:7px solid #ccc}.arrow-right{position:absolute;width:0;height:0;left:8px;top:3px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #455a64}.node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.node-action-group{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#8f9bb3;border-radius:0;cursor:pointer}.node-action-group:hover{background-color:transparent;color:#598bff;cursor:pointer}.tree-action{margin-left:.5rem;cursor:pointer}.action-trash:hover{color:#ff708d}.reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}.reset-left-dialog{margin-left:1rem;margin-right:.5rem}.submit-right-dialog{margin-left:.5rem}"]
                },] }
    ];
    MainMenuPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: NbDialogService }
    ]; };
    return MainMenuPageComponent;
}(BaseFormComponent));
export { MainMenuPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1tZW51LXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tc3lzLyIsInNvdXJjZXMiOlsibGliL21hbmFnZW1lbnQvbWVudS9tYWluL21haW4tbWVudS1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNwQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBa0MsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzdGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTNFO0lBTTJDLHlDQUFzQjtJQStEL0QsK0JBQW1CLFFBQWtCLEVBQVUsYUFBOEI7UUFBN0UsWUFDRSxrQkFBTSxRQUFRLEVBQ1o7WUFDRSxJQUFJLEVBQUUsRUFBRTtZQUNSLE9BQU8sRUFBRSxFQUFFO1lBQ1gsT0FBTyxFQUFFLEVBQUU7WUFDWCxNQUFNLEVBQUUsQ0FBQztvQkFDUCxLQUFLLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztvQkFDM0IsUUFBUSxFQUFFLEtBQUs7aUJBQ2hCLENBQUM7WUFDRixNQUFNLEVBQUUsQ0FBQztvQkFDUCxLQUFLLEVBQUUsS0FBSztvQkFDWixRQUFRLEVBQUUsS0FBSztpQkFDaEIsQ0FBQztZQUNGLE1BQU0s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QUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFFdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzNELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM3QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JB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QUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsVUFBQSxRQUFRO1lBQ2pCLElBQUksUUFBUSxDQUFDLGNBQWMsS0FBSyxZQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUNsRSxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUM1QixLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUNELElBQUksS0FBSSxDQUFDLE1BQU0sS0FBSyxNQUFNO2dCQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O2dCQTVQNEIsUUFBUTtnQkFBeUIsZUFBZTs7O2dCQXJFOUUsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBRTdCLHc5TUFBOEM7b0JBQzlDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7OztnQkFqQm1CLFFBQVE7Z0JBT04sZUFBZTs7SUF3VXJDLDRCQUFDO0NBQUEsQUFuVUQsQ0FNMkMsaUJBQWlCLEdBNlQzRDtTQTdUWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdG9yLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRyZWVNb2RlIH0gZnJvbSAndHJlZS1uZ3gnO1xuaW1wb3J0IHsgTmJEaWFsb2dSZWYsIE5iRGlhbG9nU2VydmljZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSwgSHR0cEJhc2VNb2RlbCwgTG9jYWxlTW9kZWwsIFJlc3BvbnNlQ29kZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQmFzZUZvcm1Db21wb25lbnQgfSBmcm9tICdAZG9uZ2thcC9kby1jb21tb24nO1xuaW1wb3J0IHsgRGlhbG9nSWNvbkNvbXBvbmVudCB9IGZyb20gJy4uL2RpYWxvZy1pY29uL2RpYWxvZy1pY29uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLW1haW4tbWVudS1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWFpbi1tZW51LXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL21haW4tbWVudS1wYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTWFpbk1lbnVQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZvcm1Db21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIG5vZGVJdGVtczogYW55ID0gW107XG4gIHB1YmxpYyBvcHRpb25zOiBhbnkgPSB7XG4gICAgbW9kZTogVHJlZU1vZGUuTm9TZWxlY3QsXG4gICAgY2hlY2tib3hlczogZmFsc2UsXG4gICAgYWx3YXlzRW1pdFNlbGVjdGVkOiB0cnVlXG4gIH07XG4gIHB1YmxpYyBhbGxMb2NhbGVzOiBMb2NhbGVNb2RlbFtdID0gW107XG4gIHB1YmxpYyBsb2NhbGVzOiBMb2NhbGVNb2RlbFtdID0gW107XG4gIHB1YmxpYyBsb2NhbGVEZWZhdWx0OiBMb2NhbGVNb2RlbCA9IG5ldyBMb2NhbGVNb2RlbCgpO1xuICBwdWJsaWMgYWN0aW9uOiAnQWRkJyB8ICdFZGl0JyA9ICdBZGQnO1xuICBwdWJsaWMgZGlhbG9nQWN0aW9uOiAnRWRpdCcgfCAnRGVsZXRlJyA9ICdFZGl0JztcbiAgcHVibGljIGFwaVNlbGVjdFBhcmVudDogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIGFwaVBhdGhMb2NhbGU6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyByb290OiBib29sZWFuO1xuICBwdWJsaWMgZ3JvdXA6IGJvb2xlYW47XG4gIHB1YmxpYyBsb2FkTG9jYWxlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBkYXRhOiBhbnk7XG4gIHByaXZhdGUgY29udGV4dDogYW55O1xuICBwcml2YXRlIG5vZGU6IGFueTtcblxuICBwdWJsaWMgc2V0IGlzUm9vdChyb290OiBib29sZWFuKSB7XG4gICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICBpZiAocm9vdCkge1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdpY29uJykuZW5hYmxlKCk7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3BhcmVudCcpLmRpc2FibGUoKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgncGFyZW50Jykuc2V0VmFsdWUobnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnaWNvbicpLmRpc2FibGUoKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnaWNvbicpLnNldFZhbHVlKG51bGwpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdwYXJlbnQnKS5lbmFibGUoKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBpc1Jvb3QoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnJvb3Q7IH1cbiAgcHVibGljIHNldCBpc0dyb3VwKGdyb3VwOiBib29sZWFuKSB7XG4gICAgdGhpcy5ncm91cCA9IGdyb3VwO1xuICAgIGlmIChncm91cCkge1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdyb290JykuZGlzYWJsZSgpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdob21lJykuZGlzYWJsZSgpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdjb2RlJykuZGlzYWJsZSgpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdsaW5rJykuZGlzYWJsZSgpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdpY29uJykuZGlzYWJsZSgpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdwYXJlbnQnKS5kaXNhYmxlKCk7XG5cbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgncm9vdCcpLnNldFZhbHVlKFt7IHNlbGVjdGVkOiBmYWxzZSB9XSk7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2hvbWUnKS5zZXRWYWx1ZShbeyBzZWxlY3RlZDogZmFsc2UgfV0pO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdjb2RlJykuc2V0VmFsdWUoJ04vQScpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdsaW5rJykuc2V0VmFsdWUoJyMnKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnaWNvbicpLnNldFZhbHVlKG51bGwpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdwYXJlbnQnKS5zZXRWYWx1ZShudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdyb290JykuZW5hYmxlKCk7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2hvbWUnKS5lbmFibGUoKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnY29kZScpLmVuYWJsZSgpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdsaW5rJykuZW5hYmxlKCk7XG4gICAgICBpZiAodGhpcy5pc1Jvb3QpIHRoaXMuZm9ybUdyb3VwLmdldCgnaWNvbicpLmVuYWJsZSgpO1xuICAgICAgaWYgKCF0aGlzLmlzUm9vdCkgdGhpcy5mb3JtR3JvdXAuZ2V0KCdwYXJlbnQnKS5lbmFibGUoKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBpc0dyb3VwKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5ncm91cDsgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgZGlhbG9nU2VydmljZTogTmJEaWFsb2dTZXJ2aWNlKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsXG4gICAgICB7XG4gICAgICAgICdpZCc6IFtdLFxuICAgICAgICAnZW4tVVMnOiBbXSxcbiAgICAgICAgJ2lkLUlEJzogW10sXG4gICAgICAgICdyb290JzogW3tcbiAgICAgICAgICB2YWx1ZTogW3sgc2VsZWN0ZWQ6IHRydWUgfV0sXG4gICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICB9XSxcbiAgICAgICAgJ2NvZGUnOiBbe1xuICAgICAgICAgIHZhbHVlOiAnTi9BJyxcbiAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIH1dLFxuICAgICAgICAnaWNvbic6IFtdLFxuICAgICAgICAnbGluayc6IFt7XG4gICAgICAgICAgdmFsdWU6ICcjJyxcbiAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIH1dLFxuICAgICAgICAnaG9tZSc6IFt7XG4gICAgICAgICAgdmFsdWU6IFt7IHNlbGVjdGVkOiBmYWxzZSB9XSxcbiAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIH1dLFxuICAgICAgICAnZ3JvdXAnOiBbe1xuICAgICAgICAgIHZhbHVlOiBbeyBzZWxlY3RlZDogZmFsc2UgfV0sXG4gICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICB9XSxcbiAgICAgICAgJ3BhcmVudCc6IFtdLFxuICAgICAgICAnb3JkZXInOiBbXSxcbiAgICAgIH0pO1xuICAgIHRoaXMuYXBpU2VsZWN0UGFyZW50ID0gdGhpcy5hcGlbJ3NlY3VyaXR5J11bJ3NlbGVjdC1tYWluLW1lbnVzJ107XG4gICAgdGhpcy5pc1Jvb3QgPSB0cnVlO1xuICAgIHRoaXMuaXNHcm91cCA9IGZhbHNlO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gIG9uQ2hlY2tlZFJvb3QoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuaXNSb290ID0gZXZlbnRbMF0uc2VsZWN0ZWQ7XG4gIH1cblxuICBvbkNoZWNrZWRHcm91cChldmVudDogYW55KSB7XG4gICAgdGhpcy5pc0dyb3VwID0gZXZlbnRbMF0uc2VsZWN0ZWQ7XG4gIH1cblxuICBsb2FkRGF0YU1lbnUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBpZiAoIXRoaXMubG9hZExvY2FsZSkge1xuICAgICAgdGhpcy5sb2FkaW5nRm9ybSA9IHRydWU7XG4gICAgICB0aGlzLmh0dHAuSFRUUF9BVVRIKHRoaXMuYXBpWydtYXN0ZXInXVsnYWxsLWxvY2FsZSddKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLnNwbGl0TG9jYWxlKHJlc3BvbnNlKTtcbiAgICAgICAgdGhpcy5sb2FkTG9jYWxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sb2FkaW5nRm9ybSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAuSFRUUF9BVVRIKFxuICAgICAgdGhpcy5hcGlbJ3NlY3VyaXR5J11bJ2dldC10cmVlLW1lbnVzJ10sIG51bGwsIG51bGwsIG51bGwsXG4gICAgICBbJ21haW4nXSkucGlwZShtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5ub2RlSXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5ub2RlSXRlbXMgPSBbLi4udGhpcy5ub2RlSXRlbXMsIC4uLnJlc3BvbnNlXTtcbiAgICAgICAgdGhpcy5vblJlc2V0KCk7XG4gICAgICAgIGlmICh0aGlzLmxvYWRMb2NhbGUpIHRoaXMubG9hZGluZ0Zvcm0gPSBmYWxzZTtcbiAgICAgIH0pKTtcbiAgfVxuXG4gIHNwbGl0TG9jYWxlKHZhbHVlczogTG9jYWxlTW9kZWxbXSk6IHZvaWQge1xuICAgIHRoaXMuYWxsTG9jYWxlcyA9IHZhbHVlcztcbiAgICB2YWx1ZXMuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIGlmIChkYXRhLmxvY2FsZURlZmF1bHQpIHtcbiAgICAgICAgdGhpcy5sb2NhbGVEZWZhdWx0ID0gZGF0YTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9jYWxlcy5wdXNoKGRhdGEpO1xuICAgICAgfVxuICAgICAgdGhpcy5mb3JtR3JvdXAucmVtb3ZlQ29udHJvbChkYXRhLmxvY2FsZUNvZGUpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbChkYXRhLmxvY2FsZUNvZGUsIG5ldyBGb3JtQ29udHJvbCgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uU2VhcmNoSWNvbigpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihEaWFsb2dJY29uQ29tcG9uZW50KVxuICAgICAgLm9uQ2xvc2Uuc3Vic2NyaWJlKChpY29uOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdpY29uJykuc2V0VmFsdWUoaWNvbik7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnaWNvbicpLm1hcmtBc0RpcnR5KCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uU2VsZWN0Tm9kZShub2RlOiBhbnkpIHtcbiAgICBpZiAobm9kZS5pdGVtKSB7XG4gICAgICB0aGlzLmFjdGlvbiA9ICdFZGl0JztcbiAgICAgIHRoaXMuZGlhbG9nQWN0aW9uID0gdGhpcy5hY3Rpb247XG4gICAgICB0aGlzLmlzUm9vdCA9IG5vZGUuaXRlbVsnbGV2ZWwnXSA9PT0gMCA/IHRydWUgOiBmYWxzZTtcbiAgICAgIHRoaXMuaXNHcm91cCA9IG5vZGUuaXRlbVsnZ3JvdXAnXTtcbiAgICAgIHRoaXMuYWxsTG9jYWxlcy5mb3JFYWNoKGxvY2FsZSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldChsb2NhbGUubG9jYWxlQ29kZSkuc2V0VmFsdWUobm9kZS5pdGVtWydpMThuJ11bbG9jYWxlLmxvY2FsZUNvZGVdKTtcbiAgICAgICAgaWYgKGxvY2FsZS5sb2NhbGVEZWZhdWx0KSB7XG4gICAgICAgICAgdGhpcy50aXRsZSA9IG5vZGUuaXRlbVsnaTE4biddW2xvY2FsZS5sb2NhbGVDb2RlXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2dyb3VwJykuc2V0VmFsdWUoW3sgc2VsZWN0ZWQ6IHRoaXMuaXNHcm91cCB9XSk7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3Jvb3QnKS5zZXRWYWx1ZShbeyBzZWxlY3RlZDogdGhpcy5pc1Jvb3QgfV0pO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdob21lJykuc2V0VmFsdWUoW3sgc2VsZWN0ZWQ6IG5vZGUuaXRlbVsnaG9tZSddIH1dKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnaWQnKS5zZXRWYWx1ZShub2RlWydpZCddKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnY29kZScpLnNldFZhbHVlKG5vZGUuaXRlbVsnY29kZSddKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnbGluaycpLnNldFZhbHVlKG5vZGUuaXRlbVsnbGluayddKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnaWNvbicpLnNldFZhbHVlKG5vZGUuaXRlbVsnaWNvbiddKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnb3JkZXInKS5zZXRWYWx1ZShub2RlLml0ZW1bJ29yZGVyaW5nJ10pO1xuICAgICAgaWYgKG5vZGUuaXRlbVsncGFyZW50TWVudSddKVxuICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3BhcmVudCcpLnNldFZhbHVlKHtcbiAgICAgICAgICBsYWJlbDogbm9kZS5pdGVtWydwYXJlbnRNZW51J11bJ3RpdGxlJ10sXG4gICAgICAgICAgdmFsdWU6IG5vZGUuaXRlbVsncGFyZW50TWVudSddWydpZCddLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvbkRlbGV0ZVRyZWUobm9kZTogYW55LCBjb250ZXh0OiBhbnksIGRpYWxvZzogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIHRoaXMuZGlhbG9nQWN0aW9uID0gJ0RlbGV0ZSc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKFxuICAgICAgZGlhbG9nLFxuICAgICAgeyBjb250ZXh0OiAnYWxlcnQuZGVsZXRlJyB9KTtcbiAgfVxuXG4gIG9uU3VibWl0KGRpYWxvZzogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGxldCBpZDogc3RyaW5nID0gbnVsbDtcbiAgICBsZXQgY29kZTogc3RyaW5nID0gJ04vQSc7XG4gICAgbGV0IGljb246IHN0cmluZyA9IG51bGw7XG4gICAgbGV0IGxpbms6IHN0cmluZyA9ICcjJztcbiAgICBjb25zdCB0eXBlOiBzdHJpbmcgPSAnbWFpbic7XG4gICAgbGV0IG9yZGVyaW5nOiBudW1iZXIgPSAwO1xuICAgIGxldCBob21lOiBib29sZWFuID0gZmFsc2U7XG4gICAgbGV0IGdyb3VwOiBib29sZWFuID0gZmFsc2U7XG4gICAgbGV0IGxldmVsOiBudW1iZXIgPSAxO1xuICAgIGxldCBsZWFmOiBib29sZWFuID0gdHJ1ZTtcbiAgICBjb25zdCBpMThuOiBhbnkgPSB7fTtcbiAgICBsZXQgcGFyZW50TWVudTogYW55ID0gbnVsbDtcbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuZ2V0KCdpZCcpLnZhbHVlKSBpZCA9IHRoaXMuZm9ybUdyb3VwLmdldCgnaWQnKS52YWx1ZTtcbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuZ2V0KCdjb2RlJykudmFsdWUpIGNvZGUgPSB0aGlzLmZvcm1Hcm91cC5nZXQoJ2NvZGUnKS52YWx1ZTtcbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuZ2V0KCdpY29uJykudmFsdWUpIGljb24gPSB0aGlzLmZvcm1Hcm91cC5nZXQoJ2ljb24nKS52YWx1ZTtcbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuZ2V0KCdsaW5rJykudmFsdWUpIGxpbmsgPSB0aGlzLmZvcm1Hcm91cC5nZXQoJ2xpbmsnKS52YWx1ZTtcbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuZ2V0KCdvcmRlcicpLnZhbHVlKSBvcmRlcmluZyA9ICt0aGlzLmZvcm1Hcm91cC5nZXQoJ29yZGVyJykudmFsdWU7XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldCgnaG9tZScpLnZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5mb3JtR3JvdXAuZ2V0KCdob21lJykudmFsdWVbMF1bJ3NlbGVjdGVkJ10pIHtcbiAgICAgICAgaG9tZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5nZXQoJ3Jvb3QnKS52YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldCgncm9vdCcpLnZhbHVlWzBdWydzZWxlY3RlZCddKSB7XG4gICAgICAgIGxldmVsID0gMDtcbiAgICAgICAgbGVhZiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFsbExvY2FsZXMuZm9yRWFjaChsb2NhbGUgPT4ge1xuICAgICAgaTE4bltsb2NhbGUubG9jYWxlQ29kZV0gPSB0aGlzLmZvcm1Hcm91cC5nZXQobG9jYWxlLmxvY2FsZUNvZGUpLnZhbHVlO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5nZXQoJ3BhcmVudCcpLnZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5mb3JtR3JvdXAuZ2V0KCdwYXJlbnQnKS52YWx1ZVsndmFsdWUnXSkge1xuICAgICAgICBwYXJlbnRNZW51ID0ge1xuICAgICAgICAgIGlkOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ3BhcmVudCcpLnZhbHVlWyd2YWx1ZSddLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuZ2V0KCdncm91cCcpLnZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5mb3JtR3JvdXAuZ2V0KCdncm91cCcpLnZhbHVlWzBdWydzZWxlY3RlZCddKSB7XG4gICAgICAgIGdyb3VwID0gdHJ1ZTtcbiAgICAgICAgaG9tZSA9IGZhbHNlO1xuICAgICAgICBsZWFmID0gZmFsc2U7XG4gICAgICAgIGxldmVsID0gMDtcbiAgICAgICAgcGFyZW50TWVudSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgICdpZCc6IGlkLFxuICAgICAgJ2NvZGUnOiBjb2RlLFxuICAgICAgJ2ljb24nOiBpY29uLFxuICAgICAgJ2xpbmsnOiBsaW5rLFxuICAgICAgJ3R5cGUnOiB0eXBlLFxuICAgICAgJ2xldmVsJzogbGV2ZWwsXG4gICAgICAnb3JkZXJpbmcnOiBvcmRlcmluZyxcbiAgICAgICdob21lJzogaG9tZSxcbiAgICAgICdncm91cCc6IGdyb3VwLFxuICAgICAgJ2xlYWYnOiBsZWFmLFxuICAgICAgJ2kxOG4nOiBpMThuLFxuICAgICAgJ3BhcmVudE1lbnUnOiBwYXJlbnRNZW51LFxuICAgIH07XG4gICAgaWYgKHRoaXMuYWN0aW9uID09PSAnRWRpdCcpIHtcbiAgICAgIHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKFxuICAgICAgICBkaWFsb2csXG4gICAgICAgIHsgY29udGV4dDogJ2FsZXJ0LmVkaXQnIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvc3RNZW51KCk7XG4gICAgfVxuICB9XG5cbiAgb25TdWJtaXREaWFsb2cocmVmOiBOYkRpYWxvZ1JlZjxhbnk+KSB7XG4gICAgaWYgKHRoaXMuZGlhbG9nQWN0aW9uID09PSAnRGVsZXRlJykge1xuICAgICAgdGhpcy5kZWxldGVUcmVlTWVudShyZWYpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvc3RNZW51KHJlZik7XG4gICAgfVxuICB9XG5cbiAgb25SZXNldCgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc1Jvb3QgPSB0cnVlO1xuICAgIHRoaXMuaXNHcm91cCA9IGZhbHNlO1xuICAgIHRoaXMudGl0bGUgPSBudWxsO1xuICAgIHRoaXMuYWN0aW9uID0gJ0FkZCc7XG4gICAgdGhpcy5hbGxMb2NhbGVzLmZvckVhY2gobG9jYWxlID0+IHtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldChsb2NhbGUubG9jYWxlQ29kZSkuc2V0VmFsdWUobnVsbCk7XG4gICAgfSk7XG4gICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdncm91cCcpLnNldFZhbHVlKFt7IHNlbGVjdGVkOiB0aGlzLmlzR3JvdXAgfV0pO1xuICAgIHRoaXMuZm9ybUdyb3VwLmdldCgncm9vdCcpLnNldFZhbHVlKFt7IHNlbGVjdGVkOiB0aGlzLmlzUm9vdCB9XSk7XG4gICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdob21lJykuc2V0VmFsdWUoW3sgc2VsZWN0ZWQ6IGZhbHNlIH1dKTtcbiAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2lkJykuc2V0VmFsdWUobnVsbCk7XG4gICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdjb2RlJykuc2V0VmFsdWUoJ04vQScpO1xuICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnbGluaycpLnNldFZhbHVlKCcjJyk7XG4gICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdpY29uJykuc2V0VmFsdWUobnVsbCk7XG4gICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdvcmRlcicpLnNldFZhbHVlKG51bGwpO1xuICAgIHRoaXMuZm9ybUdyb3VwLmdldCgncGFyZW50Jykuc2V0VmFsdWUobnVsbCk7XG4gIH1cblxuICBwcml2YXRlIGRlbGV0ZVRyZWVNZW51KHJlZjogTmJEaWFsb2dSZWY8YW55Pikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuaHR0cC5IVFRQX0FVVEgodGhpcy5hcGlbJ3NlY3VyaXR5J11bJ2RlbGV0ZS1tZW51J10sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW3RoaXMubm9kZVsnaWQnXV0pLnN1YnNjcmliZShcbiAgICAgIChzdWNjZXNzOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmVmLmNsb3NlKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5kZWxldGUoKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihzdWNjZXNzLnJlc3BTdGF0dXNNZXNzYWdlW3N1Y2Nlc3MucmVzcFN0YXR1c0NvZGVdLCB0cnVlKTtcbiAgICAgICAgdGhpcy5sb2FkRGF0YU1lbnUoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZ0Zvcm0gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgKGVycm9yOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihlcnJvci5yZXNwU3RhdHVzTWVzc2FnZVtlcnJvci5yZXNwU3RhdHVzQ29kZV0sIHRydWUsIG51bGwsICdkYW5nZXInKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcG9zdE1lbnUocmVmPzogTmJEaWFsb2dSZWY8YW55Pikge1xuICAgIChzdXBlci5vblN1Ym1pdCh0aGlzLmRhdGEsICdzZWN1cml0eScsICdwb3N0LW1lbnVzJykgIGFzIE9ic2VydmFibGU8QXBpQmFzZVJlc3BvbnNlPilcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UucmVzcFN0YXR1c0NvZGUgPT09IFJlc3BvbnNlQ29kZS5PS19ERUZBVUxULnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICB0aGlzLmxvYWREYXRhTWVudSgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gZmFsc2U7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uID09PSAnRWRpdCcpIHJlZi5jbG9zZSgpO1xuICAgICAgfSk7XG4gIH1cblxufVxuIl19