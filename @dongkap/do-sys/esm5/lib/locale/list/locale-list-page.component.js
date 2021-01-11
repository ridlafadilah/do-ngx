import { __extends } from "tslib";
import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionType } from '@swimlane/ngx-datatable';
import { BaseFilterComponent } from '@dongkap/do-common';
import { LocaleService } from '../services/locale.service';
var LocaleListPageComponent = /** @class */ (function (_super) {
    __extends(LocaleListPageComponent, _super);
    function LocaleListPageComponent(injector, router, localeService) {
        var _this = _super.call(this, injector, {
            'localeCode': [],
            'identifier': [],
        }) || this;
        _this.injector = injector;
        _this.router = router;
        _this.localeService = localeService;
        _this.selectionType = SelectionType.single;
        _this.columns = [
            { name: 'Language Code', prop: 'localeCode', width: 125, frozenLeft: true },
            { name: 'Language', prop: 'identifier', width: 275, frozenLeft: true },
            { name: 'Icon', prop: 'icon', width: 75, frozenLeft: true, type: 'icon' },
            { name: 'System Default Language', prop: 'localeDefault', width: 175, frozenLeft: true },
            { name: 'Created', prop: 'createdBy' },
            { name: 'Created Date', prop: 'createdDate' },
            { name: 'Modified', prop: 'modifiedBy' },
            { name: 'Modified Date', prop: 'modifiedDate' },
            { name: 'Active', prop: 'active' },
        ];
        _this.expanded = false;
        _this.apiPath = _this.api['master']['datatable-locale'];
        _this.filters = [
            { controlName: 'localeCode', type: 'input' },
            { controlName: 'identifier', type: 'input' }
        ];
        return _this;
    }
    LocaleListPageComponent.prototype.ngOnInit = function () {
    };
    LocaleListPageComponent.prototype.onAddGroup = function () {
        this.router.navigate(['/app/sysconf/i18n', 'add']);
    };
    LocaleListPageComponent.prototype.onViewDetail = function (data) {
        this.localeService.setLocale(data);
        this.router.navigate(['/app/sysconf/i18n', 'edit']);
    };
    LocaleListPageComponent.prototype.onReset = function () {
        this.router.navigate(['/app/sysconf/i18n']);
    };
    LocaleListPageComponent.prototype.back = function () {
        this.router.navigate(['/app/sysconf/i18n']);
        return false;
    };
    LocaleListPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: LocaleService }
    ]; };
    LocaleListPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-locale-list-page',
                    template: "<do-page-outlet [header]=\"'i18n'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onAdd)=\"onAddGroup()\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'localeCode'\"\n            [label]=\"'Locale Code'\"\n            formControlName=\"localeCode\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'identifier'\"\n            [label]=\"'Identifier'\"\n            formControlName=\"identifier\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n",
                    styles: [""]
                },] }
    ];
    LocaleListPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: LocaleService }
    ]; };
    return LocaleListPageComponent;
}(BaseFilterComponent));
export { LocaleListPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLWxpc3QtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1zeXMvIiwic291cmNlcyI6WyJsaWIvbG9jYWxlL2xpc3QvbG9jYWxlLWxpc3QtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUzRDtJQUs2QywyQ0FBd0I7SUFpQm5FLGlDQUFtQixRQUFrQixFQUFVLE1BQWMsRUFBVSxhQUE0QjtRQUFuRyxZQUNFLGtCQUFNLFFBQVEsRUFBRTtZQUNkLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFlBQVksRUFBRSxFQUFFO1NBQ2pCLENBQUMsU0FLSDtRQVRrQixjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBZDVGLG1CQUFhLEdBQWtCLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDcEQsYUFBTyxHQUFzQjtZQUNsQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDM0UsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO1lBQ3RFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO1lBQ3pFLEVBQUUsSUFBSSxFQUFFLHlCQUF5QixFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO1lBQ3hGLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQ3RDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQzdDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQ3hDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO1lBQy9DLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO1NBQ25DLENBQUM7UUFDSyxjQUFRLEdBQVksS0FBSyxDQUFDO1FBTy9CLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RELEtBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUM1QyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtTQUFDLENBQUM7O0lBQ2xELENBQUM7SUFFRCwwQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDRDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELDhDQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCx5Q0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELHNDQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUM1QyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dCQTlCNEIsUUFBUTtnQkFBa0IsTUFBTTtnQkFBeUIsYUFBYTs7O2dCQXRCcEcsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBRS9CLDArQkFBZ0Q7O2lCQUNqRDs7O2dCQVptQixRQUFRO2dCQUVuQixNQUFNO2dCQUlOLGFBQWE7O0lBd0R0Qiw4QkFBQztDQUFBLEFBdERELENBSzZDLG1CQUFtQixHQWlEL0Q7U0FqRFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2VsZWN0aW9uVHlwZSB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcbmltcG9ydCB7IEh0dHBCYXNlTW9kZWwgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEJhc2VGaWx0ZXJDb21wb25lbnQsIERhdGF0YWJsZUNvbHVtbiB9IGZyb20gJ0Bkb25na2FwL2RvLWNvbW1vbic7XG5pbXBvcnQgeyBMb2NhbGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbG9jYWxlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1sb2NhbGUtbGlzdC1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9jYWxlLWxpc3QtcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9jYWxlLWxpc3QtcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIExvY2FsZUxpc3RQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZpbHRlckNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgYXBpUGF0aDogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIHNlbGVjdGlvblR5cGU6IFNlbGVjdGlvblR5cGUgPSBTZWxlY3Rpb25UeXBlLnNpbmdsZTtcbiAgcHVibGljIGNvbHVtbnM6IERhdGF0YWJsZUNvbHVtbltdID0gW1xuICAgIHsgbmFtZTogJ0xhbmd1YWdlIENvZGUnLCBwcm9wOiAnbG9jYWxlQ29kZScsIHdpZHRoOiAxMjUsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdMYW5ndWFnZScsIHByb3A6ICdpZGVudGlmaWVyJywgd2lkdGg6IDI3NSwgZnJvemVuTGVmdDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ0ljb24nLCBwcm9wOiAnaWNvbicsIHdpZHRoOiA3NSwgZnJvemVuTGVmdDogdHJ1ZSwgdHlwZTogJ2ljb24nIH0sXG4gICAgeyBuYW1lOiAnU3lzdGVtIERlZmF1bHQgTGFuZ3VhZ2UnLCBwcm9wOiAnbG9jYWxlRGVmYXVsdCcsIHdpZHRoOiAxNzUsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdDcmVhdGVkJywgcHJvcDogJ2NyZWF0ZWRCeScgfSxcbiAgICB7IG5hbWU6ICdDcmVhdGVkIERhdGUnLCBwcm9wOiAnY3JlYXRlZERhdGUnIH0sXG4gICAgeyBuYW1lOiAnTW9kaWZpZWQnLCBwcm9wOiAnbW9kaWZpZWRCeScgfSxcbiAgICB7IG5hbWU6ICdNb2RpZmllZCBEYXRlJywgcHJvcDogJ21vZGlmaWVkRGF0ZScgfSxcbiAgICB7IG5hbWU6ICdBY3RpdmUnLCBwcm9wOiAnYWN0aXZlJyB9LFxuICBdO1xuICBwdWJsaWMgZXhwYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGxvY2FsZVNlcnZpY2U6IExvY2FsZVNlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3Rvciwge1xuICAgICAgJ2xvY2FsZUNvZGUnOiBbXSxcbiAgICAgICdpZGVudGlmaWVyJzogW10sXG4gICAgfSk7XG4gICAgdGhpcy5hcGlQYXRoID0gdGhpcy5hcGlbJ21hc3RlciddWydkYXRhdGFibGUtbG9jYWxlJ107XG4gICAgdGhpcy5maWx0ZXJzID0gW1xuICAgICAgeyBjb250cm9sTmFtZTogJ2xvY2FsZUNvZGUnLCB0eXBlOiAnaW5wdXQnIH0sXG4gICAgICB7IGNvbnRyb2xOYW1lOiAnaWRlbnRpZmllcicsIHR5cGU6ICdpbnB1dCcgfV07XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG9uQWRkR3JvdXAoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL3N5c2NvbmYvaTE4bicsICdhZGQnXSk7XG4gIH1cblxuICBvblZpZXdEZXRhaWwoZGF0YSk6IHZvaWQge1xuICAgIHRoaXMubG9jYWxlU2VydmljZS5zZXRMb2NhbGUoZGF0YSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL3N5c2NvbmYvaTE4bicsICdlZGl0J10pO1xuICB9XG5cbiAgb25SZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9pMThuJ10pO1xuICB9XG5cbiAgYmFjaygpOiBib29sZWFuIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9pMThuJ10pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG59XG4iXX0=