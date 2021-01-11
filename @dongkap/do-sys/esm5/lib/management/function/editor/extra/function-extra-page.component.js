import { __extends, __read, __spread } from "tslib";
import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { map, takeUntil } from 'rxjs/operators';
import { TreeMode } from 'tree-ngx';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { ResponseCode } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-common';
import { FunctionControlService } from '../../services/function-control.service';
var FunctionExtraPageComponent = /** @class */ (function (_super) {
    __extends(FunctionExtraPageComponent, _super);
    function FunctionExtraPageComponent(injector, dialogService, functionControlService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.dialogService = dialogService;
        _this.functionControlService = functionControlService;
        _this.nodeItems = [];
        _this.options = {
            mode: TreeMode.MultiSelect,
            checkboxes: true,
            alwaysEmitSelected: true,
        };
        _this.title = null;
        _this.datas = [];
        return _this;
    }
    FunctionExtraPageComponent.prototype.ngOnInit = function () { };
    FunctionExtraPageComponent.prototype.loadDataMenu = function () {
        var _this = this;
        this.disabled = true;
        return this.http.HTTP_AUTH(this.api['security']['get-function-menus'], null, null, null, ['extra', this.functionControlService.getRole().authority]).pipe(map(function (response) {
            _this.datas = [];
            _this.nodeItems = [];
            _this.nodeItems = __spread(_this.nodeItems, response);
        }));
    };
    FunctionExtraPageComponent.prototype.onSelect = function (datas) {
        if (this.datas.length > 0 && this.datas.length !== datas.length)
            this.disabled = false;
        this.datas = [];
        this.datas = __spread(this.datas, datas);
    };
    FunctionExtraPageComponent.prototype.onSubmit = function (dialog) {
        this.dialogService.open(dialog, { context: 'alert.edit' });
    };
    FunctionExtraPageComponent.prototype.onSubmitDialog = function (ref) {
        this.postFunction(ref);
    };
    FunctionExtraPageComponent.prototype.postFunction = function (ref) {
        var _this = this;
        var data = {
            type: 'extra',
        };
        var menus = [];
        data['authority'] = this.functionControlService.getRole().authority;
        this.datas.forEach(function (val) {
            menus.push(val['id']);
            if (val['parentMenu']['id']) {
                if (!menus.includes(val['parentMenu']['id'])) {
                    menus.push(val['parentMenu']['id']);
                }
            }
        });
        data['menus'] = menus;
        _super.prototype.onSubmit.call(this, data, 'security', 'post-functions')
            .pipe(takeUntil(this.destroy$))
            .subscribe(function (response) {
            if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                _this.loadDataMenu().subscribe();
            }
            ref.close();
        });
    };
    FunctionExtraPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: NbDialogService },
        { type: FunctionControlService }
    ]; };
    FunctionExtraPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-function-extra-page',
                    template: "<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n    <div class=\"row save-function\">\n      <button\n        [size]=\"'medium'\"\n        [shape]=\"'rectangle'\"\n        [status]=\"'danger'\"\n        [appearance]=\"'ghost'\"\n        (click)=\"loadDataMenu().subscribe()\"\n        nbButton>\n        <nb-icon [status]=\"'danger'\" icon=\"corner-up-left\" pack=\"eva\"></nb-icon>\n        {{'Reset' | translate}}\n      </button>\n      <button\n        [size]=\"'medium'\"\n        [shape]=\"'rectangle'\"\n        [status]=\"'primary'\"\n        [appearance]=\"'ghost'\"\n        [disabled]=\"disabled\"\n        [ngClass]=\"{\n          'submit-right': true\n        }\"\n        (click)=\"onSubmit(dialogprocess)\"\n        nbButton>\n        <nb-icon [status]=\"(disabled ? 'basic' : 'primary')\" icon=\"save\" pack=\"eva\"></nb-icon>\n        {{'Save' | translate}}\n      </button>\n    </div>\n    <tree-ngx\n      (selectedItems)=\"onSelect($event)\"\n      [nodeItems]=\"nodeItems\"\n      [options]=\"options\"\n      #treeExtra>\n      <ng-template #nodeNameTemplate let-node=\"node\" let-context=\"context\">\n        <span\n          class=\"node-action\"\n          [ngClass]=\"{\n            'node-action': !node.item.group\n          }\">\n          {{node.name}}\n        </span>\n      </ng-template>\n    </tree-ngx>\n  </div>\n</div>\n\n<ng-template #dialogprocess let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"{{'warning'}}\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <div class=\"row\">\n        <button\n          type=\"reset\"\n          status=\"danger\"\n          (click)=\"ref.close()\"\n          class=\"reset-left-dialog\"\n          nbButton>\n          {{ 'Cancel' | translate}}\n        </button>\n        <button\n          type=\"submit\"\n          status=\"primary\"\n          (click)=\"onSubmitDialog(ref)\"\n          [disabled]=\"disabled\"\n          class=\"submit-right-dialog\"\n          nbButton>\n          {{ 'Submit' | translate}}\n        </button>\n      </div>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".tree-ngx{display:flex;flex:1 1 auto;flex-direction:column;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.node{display:flex;flex:1 1 auto;flex-direction:column}.node-children{display:flex;flex:1 1 auto}.node-name{display:inline-block;padding:5px 0 5px 7px}.node-name.markSelected{padding:5px 0 5px 2px;border-left:5px solid #269}.node-name .active{cursor:pointer}.node-offset{display:flex;margin-left:20px}.node-icon-wrapper{position:relative;display:inline-block;width:25px;height:17px;top:1px;left:6px}.node-icon-wrapper.disabled{cursor:default}.collapsable{cursor:pointer}.node-container{display:inline-block}.nodeDisabled{opacity:.6}.node-checkbox:disabled{cursor:auto}.collapsible-wrapper{display:flex;overflow:hidden}.collapsible-wrapper:after{content:'';height:25px;transition:height .3s linear,max-height linear .3s;max-height:0}.collapsible{transition:margin-bottom .3s cubic-bezier(0,0,0,1);margin-bottom:0;max-height:1000000px}.collapsible-wrapper.collapsed>.collapsible{margin-bottom:-20000px;transition:margin-bottom .3s cubic-bezier(1,0,1,1),visibility .3s,max-height .3s;visibility:hidden;max-height:0}.collapsible-wrapper.collapsed:after{height:0;transition:height .3s linear;max-height:25px}.arrow-down{position:absolute;width:0;height:0;left:3px;top:6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #455a64}.arrow-down.collapse-empty{border-top:7px solid #ccc}.arrow-right{position:absolute;width:0;height:0;left:8px;top:3px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #455a64}.node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0}.tree-action{margin-left:.5rem}.reset-left{margin-right:.25rem}.submit-right{margin-left:.5rem}.reset-left-dialog{margin-left:1rem;margin-right:.5rem}.submit-right-dialog{margin-left:.5rem}.save-function{margin:0 0 1rem 2rem}"]
                },] }
    ];
    FunctionExtraPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: NbDialogService },
        { type: FunctionControlService }
    ]; };
    return FunctionExtraPageComponent;
}(BaseFormComponent));
export { FunctionExtraPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24tZXh0cmEtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1zeXMvIiwic291cmNlcyI6WyJsaWIvbWFuYWdlbWVudC9mdW5jdGlvbi9lZGl0b3IvZXh0cmEvZnVuY3Rpb24tZXh0cmEtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXZFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNwQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBbUIsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFakY7SUFNZ0QsOENBQXNCO0lBV3BFLG9DQUNTLFFBQWtCLEVBQ2pCLGFBQThCLEVBQzlCLHNCQUE4QztRQUh4RCxZQUlFLGtCQUFNLFFBQVEsQ0FBQyxTQUNoQjtRQUpRLGNBQVEsR0FBUixRQUFRLENBQVU7UUFDakIsbUJBQWEsR0FBYixhQUFhLENBQWlCO1FBQzlCLDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFaakQsZUFBUyxHQUFVLEVBQUUsQ0FBQztRQUN0QixhQUFPLEdBQVE7WUFDcEIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxXQUFXO1lBQzFCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGtCQUFrQixFQUFFLElBQUk7U0FDekIsQ0FBQztRQUNLLFdBQUssR0FBVyxJQUFJLENBQUM7UUFDcEIsV0FBSyxHQUFVLEVBQUUsQ0FB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RCxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O2dCQTNEa0IsUUFBUTtnQkFDRixlQUFlO2dCQUNOLHNCQUFzQjs7O2dCQXBCekQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBRWxDLCtxRUFBbUQ7b0JBQ25ELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7OztnQkFoQm1CLFFBQVE7Z0JBTU4sZUFBZTtnQkFHNUIsc0JBQXNCOztJQWlGL0IsaUNBQUM7Q0FBQSxBQS9FRCxDQU1nRCxpQkFBaUIsR0F5RWhFO1NBekVZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRyZWVNb2RlIH0gZnJvbSAndHJlZS1uZ3gnO1xuaW1wb3J0IHsgTmJEaWFsb2dSZWYsIE5iRGlhbG9nU2VydmljZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSwgUmVzcG9uc2VDb2RlIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBCYXNlRm9ybUNvbXBvbmVudCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvbW1vbic7XG5pbXBvcnQgeyBGdW5jdGlvbkNvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZnVuY3Rpb24tY29udHJvbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tZnVuY3Rpb24tZXh0cmEtcGFnZScsXG4gIHN0eWxlVXJsczogWycuL2Z1bmN0aW9uLWV4dHJhLXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2Z1bmN0aW9uLWV4dHJhLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBGdW5jdGlvbkV4dHJhUGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGb3JtQ29tcG9uZW50PGFueT4gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBub2RlSXRlbXM6IGFueVtdID0gW107XG4gIHB1YmxpYyBvcHRpb25zOiBhbnkgPSB7XG4gICAgbW9kZTogVHJlZU1vZGUuTXVsdGlTZWxlY3QsXG4gICAgY2hlY2tib3hlczogdHJ1ZSxcbiAgICBhbHdheXNFbWl0U2VsZWN0ZWQ6IHRydWUsXG4gIH07XG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBkYXRhczogYW55W10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogTmJEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgZnVuY3Rpb25Db250cm9sU2VydmljZTogRnVuY3Rpb25Db250cm9sU2VydmljZSkge1xuICAgIHN1cGVyKGluamVjdG9yKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBsb2FkRGF0YU1lbnUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5odHRwLkhUVFBfQVVUSChcbiAgICAgIHRoaXMuYXBpWydzZWN1cml0eSddWydnZXQtZnVuY3Rpb24tbWVudXMnXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICAgIFsnZXh0cmEnLCB0aGlzLmZ1bmN0aW9uQ29udHJvbFNlcnZpY2UuZ2V0Um9sZSgpLmF1dGhvcml0eV0pLnBpcGUobWFwKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuZGF0YXMgPSBbXTtcbiAgICAgICAgdGhpcy5ub2RlSXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5ub2RlSXRlbXMgPSBbLi4udGhpcy5ub2RlSXRlbXMsIC4uLnJlc3BvbnNlXTtcbiAgICAgIH0pKTtcbiAgfVxuXG4gIG9uU2VsZWN0KGRhdGFzOiBhbnkpIHtcbiAgICBpZiAodGhpcy5kYXRhcy5sZW5ndGggPiAwICYmIHRoaXMuZGF0YXMubGVuZ3RoICE9PSBkYXRhcy5sZW5ndGgpXG4gICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5kYXRhcyA9IFtdO1xuICAgIHRoaXMuZGF0YXMgPSBbLi4udGhpcy5kYXRhcywgLi4uZGF0YXNdO1xuICB9XG5cbiAgb25TdWJtaXQoZGlhbG9nOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oXG4gICAgICBkaWFsb2csXG4gICAgICB7IGNvbnRleHQ6ICdhbGVydC5lZGl0JyB9KTtcbiAgfVxuXG4gIG9uU3VibWl0RGlhbG9nKHJlZjogTmJEaWFsb2dSZWY8YW55Pikge1xuICAgIHRoaXMucG9zdEZ1bmN0aW9uKHJlZik7XG4gIH1cblxuICBwcml2YXRlIHBvc3RGdW5jdGlvbihyZWY/OiBOYkRpYWxvZ1JlZjxhbnk+KSB7XG4gICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgdHlwZTogJ2V4dHJhJyxcbiAgICB9O1xuICAgIGNvbnN0IG1lbnVzOiBhbnlbXSA9IFtdO1xuICAgIGRhdGFbJ2F1dGhvcml0eSddID0gdGhpcy5mdW5jdGlvbkNvbnRyb2xTZXJ2aWNlLmdldFJvbGUoKS5hdXRob3JpdHk7XG4gICAgdGhpcy5kYXRhcy5mb3JFYWNoKHZhbCA9PiB7XG4gICAgICBtZW51cy5wdXNoKHZhbFsnaWQnXSk7XG4gICAgICBpZiAodmFsWydwYXJlbnRNZW51J11bJ2lkJ10pIHtcbiAgICAgICAgaWYgKCFtZW51cy5pbmNsdWRlcyh2YWxbJ3BhcmVudE1lbnUnXVsnaWQnXSkpIHtcbiAgICAgICAgICBtZW51cy5wdXNoKHZhbFsncGFyZW50TWVudSddWydpZCddKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGRhdGFbJ21lbnVzJ10gPSBtZW51cztcbiAgICAoc3VwZXIub25TdWJtaXQoZGF0YSwgJ3NlY3VyaXR5JywgJ3Bvc3QtZnVuY3Rpb25zJykgIGFzIE9ic2VydmFibGU8QXBpQmFzZVJlc3BvbnNlPilcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UucmVzcFN0YXR1c0NvZGUgPT09IFJlc3BvbnNlQ29kZS5PS19ERUZBVUxULnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICB0aGlzLmxvYWREYXRhTWVudSgpLnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJlZi5jbG9zZSgpO1xuICAgICAgfSk7XG4gIH1cblxufVxuIl19