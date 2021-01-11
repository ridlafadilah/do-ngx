import { Component, Input, ViewEncapsulation, Output, EventEmitter, ViewChild, } from '@angular/core';
import { DoDatatableCollapseComponent } from './collapse/do-datatable-collapse.component';
import { FormGroup } from '@angular/forms';
export class DoDatatableHeaderComponent {
    constructor() {
        this.header = true;
        this.footer = true;
        this.add = true;
        this.edit = true;
        this.delete = false;
        this.filter = true;
        this.onSearch = new EventEmitter();
        this.onFilter = new EventEmitter();
        this.onAdd = new EventEmitter();
        this.onDelete = new EventEmitter();
        this.showFilter = false;
        this.disabledButtonFilter = true;
    }
    ngOnDestroy() { }
    doSearch(search) {
        if (this.showFilter)
            this.doFilterFunnel();
        this.onSearch.emit(search);
    }
    doFilterFunnel() {
        this._search = undefined;
        this.collapse.toggle();
        this.showFilter = !this.showFilter;
        if (!this.showFilter) {
            this.formGroupFilter.reset();
        }
        else {
            this.formGroupFilter.valueChanges.subscribe(val => {
                this.disabledButtonFilter = false;
            });
        }
    }
    doFilter() {
        this.onFilter.emit(this.formGroupFilter.value);
    }
    doAdd() {
        this.onAdd.emit(true);
    }
    doDelete() {
        this.onDelete.emit(true);
    }
    onKeyDown(event) {
        if (event.key.toUpperCase() === 'ENTER') {
            this.doSearch(this._search);
        }
    }
    onFocusSearch() {
        if (this.showFilter)
            this.doFilterFunnel();
    }
}
DoDatatableHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-datatable-header',
                template: "<div class=\"header-datatable\" *ngIf=\"header\">\n    <div class=\"header-action\" *ngIf=\"add\">\n        <nb-icon\n            class=\"action-add\"\n            icon=\"file-add\"\n            (click)=\"doAdd()\">\n        </nb-icon>\n    </div>\n    <div class=\"header-action\" *ngIf=\"delete\">\n        <nb-icon\n            class=\"action-trash\"\n            icon=\"trash-2\"\n            (click)=\"doDelete()\">\n        </nb-icon>\n    </div>\n    <div class=\"header-filter\" *ngIf=\"filter\">\n        <do-input-base-icon\n            [name]=\"'_filter.datatable'\"\n            [placeholder]=\"'datatable.typesearch'\"\n            [iconcursor]=\"true\"\n            [(ngModel)]=\"_search\"\n            (clickIcon)=\"doSearch($event)\"\n            (keydown)=\"onKeyDown($event)\"\n            (focus)=\"onFocusSearch()\">\n        </do-input-base-icon>\n    </div>\n    <div class=\"filter-funnel\" *ngIf=\"filter && formGroupFilter\">\n        <nb-icon\n            class=\"filter-icon-funnel\"\n            [icon]=\"showFilter ? 'arrow-upward-outline' : 'funnel'\"\n            (click)=\"doFilterFunnel()\">\n        </nb-icon>\n    </div>\n</div>\n<div *ngIf=\"filter && formGroupFilter\" do-datatable-collapse #collapse>\n    <ng-content></ng-content>\n    <div class=\"form-group row\">\n        <div class=\"offset-sm-3 col-sm-9\">\n          <button\n            type=\"submit\"\n            status=\"primary\"\n            (click)=\"doFilter()\"\n            nbButton>\n            {{ 'Search' | translate}}\n          </button>\n        </div>\n    </div>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".header-datatable{width:100%;display:flex;padding-bottom:.3rem}.header-filter{width:100%}.filter-funnel{right:0;padding:10px 5px;cursor:pointer}.filter-icon-funnel:hover{color:#ffc94d}.header-action{left:0;padding:10px 5px;cursor:pointer}.action-add:hover{color:#598bff}.action-trash:hover{color:#ff708d}"]
            },] }
];
DoDatatableHeaderComponent.propDecorators = {
    header: [{ type: Input }],
    footer: [{ type: Input }],
    add: [{ type: Input }],
    edit: [{ type: Input }],
    delete: [{ type: Input }],
    filter: [{ type: Input }],
    formGroupFilter: [{ type: Input }],
    onSearch: [{ type: Output }],
    onFilter: [{ type: Output }],
    onAdd: [{ type: Output }],
    onDelete: [{ type: Output }],
    collapse: [{ type: ViewChild, args: ['collapse', { static: false },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZGF0YXRhYmxlLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb21tb24vIiwic291cmNlcyI6WyJsaWIvdGFibGUvbmd4L2hlYWRlci9kby1kYXRhdGFibGUtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxpQkFBaUIsRUFDakIsTUFBTSxFQUNOLFlBQVksRUFDWixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDMUYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUTNDLE1BQU0sT0FBTywwQkFBMEI7SUFOdkM7UUFPVyxXQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsUUFBRyxHQUFZLElBQUksQ0FBQztRQUNwQixTQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUV0QixhQUFRLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDNUQsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RELFVBQUssR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUMzRCxhQUFRLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFJakUsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1Qix5QkFBb0IsR0FBWSxJQUFJLENBQUM7SUE0QzlDLENBQUM7SUExQ0MsV0FBVyxLQUFVLENBQUM7SUFFdEIsUUFBUSxDQUFDLE1BQWM7UUFDckIsSUFBSSxJQUFJLENBQUMsVUFBVTtZQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM5QjthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNoRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBb0I7UUFDNUIsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLE9BQU8sRUFBRTtZQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxJQUFJLENBQUMsVUFBVTtZQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUM3QyxDQUFDOzs7WUFoRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBRS9CLCtqREFBbUQ7Z0JBQ25ELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7O3FCQUVFLEtBQUs7cUJBQ0wsS0FBSztrQkFDTCxLQUFLO21CQUNMLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLOzhCQUNMLEtBQUs7dUJBQ0wsTUFBTTt1QkFDTixNQUFNO29CQUNOLE1BQU07dUJBQ04sTUFBTTt1QkFDTixTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9EYXRhdGFibGVDb2xsYXBzZUNvbXBvbmVudCB9IGZyb20gJy4vY29sbGFwc2UvZG8tZGF0YXRhYmxlLWNvbGxhcHNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWRhdGF0YWJsZS1oZWFkZXInLFxuICBzdHlsZVVybHM6IFsnLi9kby1kYXRhdGFibGUtaGVhZGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kby1kYXRhdGFibGUtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRG9EYXRhdGFibGVIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBoZWFkZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBmb290ZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBhZGQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBlZGl0OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgZGVsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZpbHRlcjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGZvcm1Hcm91cEZpbHRlcjogRm9ybUdyb3VwO1xuICBAT3V0cHV0KCkgb25TZWFyY2g6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBvbkZpbHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uQWRkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBvbkRlbGV0ZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAVmlld0NoaWxkKCdjb2xsYXBzZScsIHtzdGF0aWM6IGZhbHNlfSkgY29sbGFwc2U6IERvRGF0YXRhYmxlQ29sbGFwc2VDb21wb25lbnQ7XG5cbiAgcHVibGljIF9zZWFyY2g6IHN0cmluZztcbiAgcHVibGljIHNob3dGaWx0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGRpc2FibGVkQnV0dG9uRmlsdGVyOiBib29sZWFuID0gdHJ1ZTtcblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHt9XG5cbiAgZG9TZWFyY2goc2VhcmNoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG93RmlsdGVyKSB0aGlzLmRvRmlsdGVyRnVubmVsKCk7XG4gICAgdGhpcy5vblNlYXJjaC5lbWl0KHNlYXJjaCk7XG4gIH1cblxuICBkb0ZpbHRlckZ1bm5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zZWFyY2ggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jb2xsYXBzZS50b2dnbGUoKTtcbiAgICB0aGlzLnNob3dGaWx0ZXIgPSAhdGhpcy5zaG93RmlsdGVyO1xuICAgIGlmICghdGhpcy5zaG93RmlsdGVyKSB7XG4gICAgICB0aGlzLmZvcm1Hcm91cEZpbHRlci5yZXNldCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm1Hcm91cEZpbHRlci52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbCA9PiB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWRCdXR0b25GaWx0ZXIgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRvRmlsdGVyKCk6IHZvaWQge1xuICAgIHRoaXMub25GaWx0ZXIuZW1pdCh0aGlzLmZvcm1Hcm91cEZpbHRlci52YWx1ZSk7XG4gIH1cblxuICBkb0FkZCgpOiB2b2lkIHtcbiAgICB0aGlzLm9uQWRkLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBkb0RlbGV0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLm9uRGVsZXRlLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdFTlRFUicpIHtcbiAgICAgIHRoaXMuZG9TZWFyY2godGhpcy5fc2VhcmNoKTtcbiAgICB9XG4gIH1cblxuICBvbkZvY3VzU2VhcmNoKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3dGaWx0ZXIpIHRoaXMuZG9GaWx0ZXJGdW5uZWwoKTtcbiAgfVxuXG59XG4iXX0=