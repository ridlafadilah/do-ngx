import { Component, Input, ViewEncapsulation, Output, EventEmitter, ViewChild, } from '@angular/core';
import { DoDatatableCollapseComponent } from './collapse/do-datatable-collapse.component';
import { FormGroup } from '@angular/forms';
var DoDatatableHeaderComponent = /** @class */ (function () {
    function DoDatatableHeaderComponent() {
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
    DoDatatableHeaderComponent.prototype.ngOnDestroy = function () { };
    DoDatatableHeaderComponent.prototype.doSearch = function (search) {
        if (this.showFilter)
            this.doFilterFunnel();
        this.onSearch.emit(search);
    };
    DoDatatableHeaderComponent.prototype.doFilterFunnel = function () {
        var _this = this;
        this._search = undefined;
        this.collapse.toggle();
        this.showFilter = !this.showFilter;
        if (!this.showFilter) {
            this.formGroupFilter.reset();
        }
        else {
            this.formGroupFilter.valueChanges.subscribe(function (val) {
                _this.disabledButtonFilter = false;
            });
        }
    };
    DoDatatableHeaderComponent.prototype.doFilter = function () {
        this.onFilter.emit(this.formGroupFilter.value);
    };
    DoDatatableHeaderComponent.prototype.doAdd = function () {
        this.onAdd.emit(true);
    };
    DoDatatableHeaderComponent.prototype.doDelete = function () {
        this.onDelete.emit(true);
    };
    DoDatatableHeaderComponent.prototype.onKeyDown = function (event) {
        if (event.key.toUpperCase() === 'ENTER') {
            this.doSearch(this._search);
        }
    };
    DoDatatableHeaderComponent.prototype.onFocusSearch = function () {
        if (this.showFilter)
            this.doFilterFunnel();
    };
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
    return DoDatatableHeaderComponent;
}());
export { DoDatatableHeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZGF0YXRhYmxlLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb21tb24vIiwic291cmNlcyI6WyJsaWIvdGFibGUvbmd4L2hlYWRlci9kby1kYXRhdGFibGUtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxpQkFBaUIsRUFDakIsTUFBTSxFQUNOLFlBQVksRUFDWixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDMUYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBQUE7UUFPVyxXQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsUUFBRyxHQUFZLElBQUksQ0FBQztRQUNwQixTQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUV0QixhQUFRLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDNUQsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RELFVBQUssR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUMzRCxhQUFRLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFJakUsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1Qix5QkFBb0IsR0FBWSxJQUFJLENBQUM7SUE0QzlDLENBQUM7SUExQ0MsZ0RBQVcsR0FBWCxjQUFxQixDQUFDO0lBRXRCLDZDQUFRLEdBQVIsVUFBUyxNQUFjO1FBQ3JCLElBQUksSUFBSSxDQUFDLFVBQVU7WUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELG1EQUFjLEdBQWQ7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM5QjthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztnQkFDN0MsS0FBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELDZDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCwwQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELDZDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsOENBQVMsR0FBVCxVQUFVLEtBQW9CO1FBQzVCLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxPQUFPLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBRUQsa0RBQWEsR0FBYjtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVU7WUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDN0MsQ0FBQzs7Z0JBaEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUUvQiwrakRBQW1EO29CQUNuRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7eUJBRUUsS0FBSzt5QkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7a0NBQ0wsS0FBSzsyQkFDTCxNQUFNOzJCQUNOLE1BQU07d0JBQ04sTUFBTTsyQkFDTixNQUFNOzJCQUNOLFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOztJQWdEeEMsaUNBQUM7Q0FBQSxBQWxFRCxJQWtFQztTQTVEWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvRGF0YXRhYmxlQ29sbGFwc2VDb21wb25lbnQgfSBmcm9tICcuL2NvbGxhcHNlL2RvLWRhdGF0YWJsZS1jb2xsYXBzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1kYXRhdGFibGUtaGVhZGVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vZG8tZGF0YXRhYmxlLWhlYWRlci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZG8tZGF0YXRhYmxlLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIERvRGF0YXRhYmxlSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQElucHV0KCkgaGVhZGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgZm9vdGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgYWRkOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgZWRpdDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGRlbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBmaWx0ZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBmb3JtR3JvdXBGaWx0ZXI6IEZvcm1Hcm91cDtcbiAgQE91dHB1dCgpIG9uU2VhcmNoOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgb25GaWx0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvbkFkZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgb25EZWxldGU6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQFZpZXdDaGlsZCgnY29sbGFwc2UnLCB7c3RhdGljOiBmYWxzZX0pIGNvbGxhcHNlOiBEb0RhdGF0YWJsZUNvbGxhcHNlQ29tcG9uZW50O1xuXG4gIHB1YmxpYyBfc2VhcmNoOiBzdHJpbmc7XG4gIHB1YmxpYyBzaG93RmlsdGVyOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBkaXNhYmxlZEJ1dHRvbkZpbHRlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7fVxuXG4gIGRvU2VhcmNoKHNlYXJjaDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvd0ZpbHRlcikgdGhpcy5kb0ZpbHRlckZ1bm5lbCgpO1xuICAgIHRoaXMub25TZWFyY2guZW1pdChzZWFyY2gpO1xuICB9XG5cbiAgZG9GaWx0ZXJGdW5uZWwoKTogdm9pZCB7XG4gICAgdGhpcy5fc2VhcmNoID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY29sbGFwc2UudG9nZ2xlKCk7XG4gICAgdGhpcy5zaG93RmlsdGVyID0gIXRoaXMuc2hvd0ZpbHRlcjtcbiAgICBpZiAoIXRoaXMuc2hvd0ZpbHRlcikge1xuICAgICAgdGhpcy5mb3JtR3JvdXBGaWx0ZXIucmVzZXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtR3JvdXBGaWx0ZXIudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWwgPT4ge1xuICAgICAgICB0aGlzLmRpc2FibGVkQnV0dG9uRmlsdGVyID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkb0ZpbHRlcigpOiB2b2lkIHtcbiAgICB0aGlzLm9uRmlsdGVyLmVtaXQodGhpcy5mb3JtR3JvdXBGaWx0ZXIudmFsdWUpO1xuICB9XG5cbiAgZG9BZGQoKTogdm9pZCB7XG4gICAgdGhpcy5vbkFkZC5lbWl0KHRydWUpO1xuICB9XG5cbiAgZG9EZWxldGUoKTogdm9pZCB7XG4gICAgdGhpcy5vbkRlbGV0ZS5lbWl0KHRydWUpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpID09PSAnRU5URVInKSB7XG4gICAgICB0aGlzLmRvU2VhcmNoKHRoaXMuX3NlYXJjaCk7XG4gICAgfVxuICB9XG5cbiAgb25Gb2N1c1NlYXJjaCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG93RmlsdGVyKSB0aGlzLmRvRmlsdGVyRnVubmVsKCk7XG4gIH1cblxufVxuIl19