import { Component, Input, ViewEncapsulation, Inject, LOCALE_ID, Injector, ChangeDetectorRef, ViewChild, ChangeDetectionStrategy, EventEmitter, Output, } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject, of } from 'rxjs';
import { catchError, map, takeUntil } from 'rxjs/operators';
import { ColumnMode, SelectionType, SortType, DatatableComponent } from '@swimlane/ngx-datatable';
import { HTTP_SERVICE } from '@dongkap/do-core';
import { LayoutService } from '@dongkap/do-core';
var DoDatatableComponent = /** @class */ (function () {
    function DoDatatableComponent(locale, layout, injector) {
        this.locale = locale;
        this.layout = layout;
        this.injector = injector;
        this.rows = [];
        this.columns = [];
        this.filters = [];
        this.selected = [];
        this.limit = 10;
        this.count = 0;
        this.offset = 0;
        this.externalPaging = false;
        this.externalSorting = false;
        this.loadingIndicator = false;
        this.scrollbarH = true;
        this.scrollbarV = false;
        this.reorderable = true;
        this.sortType = SortType.single;
        this.selectionType = SelectionType.checkbox;
        this.columnMode = ColumnMode.force;
        this.headerHeight = 40;
        this.footerHeight = 'auto';
        this.rowHeight = 'auto';
        this.header = true;
        this.column = true;
        this.footer = true;
        this.add = true;
        this.edit = true;
        this.delete = true;
        this.filter = true;
        this.startWithOpenData = true;
        this.filterEvent = false;
        this.onAdd = new EventEmitter();
        this.onEdit = new EventEmitter();
        this.onDelete = new EventEmitter();
        this.onSearch = new EventEmitter();
        this.onFilter = new EventEmitter();
        this.onButtonCell = new EventEmitter();
        this.isDelete = false;
        this.destroy$ = new Subject();
        this.pageOffset = 0;
        this.http = injector.get(HTTP_SERVICE);
        this.cdref = injector.get(ChangeDetectorRef);
    }
    Object.defineProperty(DoDatatableComponent.prototype, "filterFn", {
        set: function (keyword) {
            this.keywordParam = keyword;
            this._keyword = keyword;
            this.count = 0;
            this.offset = 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DoDatatableComponent.prototype, "filterDoFetchFn", {
        set: function (keyword) {
            if (keyword) {
                this.keywordParam = keyword;
                this._keyword = keyword;
            }
            this.count = 0;
            this.offset = 0;
            this.fetch();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DoDatatableComponent.prototype, "reloadFn", {
        set: function (reload) {
            if (reload) {
                this.count = 0;
                this.offset = 0;
                this.fetch();
            }
        },
        enumerable: false,
        configurable: true
    });
    DoDatatableComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.startWithOpenData) {
            this.fetch();
        }
        this.layout.onChangeLayoutSize().pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.datatable.recalculate();
            _this.cdref.detectChanges();
        });
    };
    DoDatatableComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    };
    DoDatatableComponent.prototype.doSearch = function (search) {
        this.onSearch.emit(search);
        if (this.keywordParam) {
            this._keyword = this.keywordParam;
            this._keyword['_all'] = search;
        }
        else {
            this._keyword = {
                '_all': search,
            };
        }
        this.count = 0;
        this.offset = 0;
        this.fetch();
    };
    DoDatatableComponent.prototype.doFilter = function (search) {
        var _this = this;
        if (this.filterEvent) {
            this.onFilter.emit(search);
        }
        else {
            if (this.keywordParam) {
                this._keyword = this.keywordParam;
            }
            else {
                this._keyword = {};
            }
            this.filters.forEach(function (filter) {
                switch (filter.type) {
                    case 'input':
                    case 'datepicker':
                    case 'radio':
                        _this._keyword[filter.controlName] = search[filter.controlName];
                        break;
                    case 'select':
                        _this._keyword[filter.controlName] = search[filter.controlName].label;
                        break;
                    case 'checkbox':
                        _this._keyword[filter.controlName] = search[filter.controlName].name;
                        break;
                    default:
                        break;
                }
            });
            this.count = 0;
            this.offset = 0;
            this.fetch();
        }
    };
    DoDatatableComponent.prototype.doAdd = function (add) {
        this.onAdd.emit(add);
    };
    DoDatatableComponent.prototype.doEdit = function (row) {
        this.onEdit.emit(row);
    };
    DoDatatableComponent.prototype.doDelete = function () {
        this.onDelete.emit(this.selected);
    };
    DoDatatableComponent.prototype.onKeyDown = function (event) {
        if (event.key.toUpperCase() === 'ENTER') {
            this.doSearch(this._search);
        }
    };
    DoDatatableComponent.prototype.fetch = function () {
        var _this = this;
        if (this.api) {
            this.externalPaging = true;
            this.externalSorting = true;
            this.getRequest().subscribe(function (rows) {
                _this.rows = rows;
                _this.cdref.detectChanges();
            });
        }
    };
    DoDatatableComponent.prototype.setPage = function (page) {
        this.pageOffset = page.offset * this.limit;
        this.fetch();
    };
    DoDatatableComponent.prototype.onSort = function (order) {
        var _this = this;
        if (order) {
            if (Array.isArray(order.sorts)) {
                order.sorts.forEach(function (sort) {
                    if (sort['dir'] === 'asc') {
                        _this.sort = { asc: [sort['prop']] };
                    }
                    else {
                        _this.sort = { desc: [sort['prop']] };
                    }
                });
            }
        }
        this.fetch();
    };
    DoDatatableComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        if (Array.isArray(selected)) {
            if (selected.length > 0) {
                if (this.delete)
                    this.isDelete = true;
            }
            else {
                this.isDelete = false;
            }
            this.selected = selected;
        }
        else {
            this.isDelete = false;
        }
    };
    DoDatatableComponent.prototype.onClickButton = function (event) {
        this.onButtonCell.emit(event);
    };
    DoDatatableComponent.prototype.getRequest = function () {
        var _this = this;
        var body = {
            offset: this.pageOffset,
            limit: this.limit,
            keyword: this._keyword,
            order: this.sort,
        };
        this.loadingIndicator = true;
        return this.http.HTTP_AUTH(this.api, body)
            .pipe(map(function (response) {
            _this.count = Number(response.totalRecord);
            _this.loadingIndicator = false;
            return response['data'];
        }), catchError(function () {
            _this.loadingIndicator = false;
            _this.count = 0;
            return of([]);
        }));
    };
    DoDatatableComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
        { type: LayoutService },
        { type: Injector }
    ]; };
    DoDatatableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-datatable',
                    template: "<do-datatable-header\n    [header]=\"header\"\n    [add]=\"add\"\n    [delete]=\"isDelete\"\n    [filter]=\"filter\"\n    [formGroupFilter]=\"formGroupFilter\"\n    (onSearch)=\"doSearch($event)\"\n    (onFilter)=\"doFilter($event)\"\n    (onAdd)=\"doAdd($event)\"\n    (onDelete)=\"doDelete()\">\n    <ng-content></ng-content>\n</do-datatable-header>\n<do-datatable-base\n    [rows]=\"rows\"\n    [columns]=\"columns\"\n    [selected]=\"selected\"\n    [limit]=\"limit\"\n    [count]=\"count\"\n    [offset]=\"offset\"\n    [externalPaging]=\"externalPaging\"\n    [externalSorting]=\"externalSorting\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [scrollbarH]=\"scrollbarH\"\n    [scrollbarV]=\"scrollbarV\"\n    [reorderable]=\"reorderable\"\n    [sortType]=\"sortType\"\n    [messages]=\"messages\"\n    [selectionType]=\"selectionType\"\n    [columnMode]=\"columnMode\"\n    [headerHeight]=\"headerHeight\"\n    [footerHeight]=\"footerHeight\"\n    [rowHeight]=\"rowHeight\"\n    [header]=\"header\"\n    [column]=\"column\"\n    [footer]=\"footer\"\n    [add]=\"add\"\n    [edit]=\"edit\"\n    [delete]=\"delete\"\n    [filter]=\"filter\"\n    [startWithOpenData]=\"startWithOpenData\"\n    (page)=\"setPage($event)\"\n    (sort)=\"onSort($event)\"\n    (select)=\"onSelect($event)\"\n    (activate)=\"doEdit($event)\"\n    (onButtonCell)=\"onClickButton($event)\">\n</do-datatable-base>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                },] }
    ];
    DoDatatableComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
        { type: LayoutService },
        { type: Injector }
    ]; };
    DoDatatableComponent.propDecorators = {
        rows: [{ type: Input }],
        columns: [{ type: Input }],
        filters: [{ type: Input }],
        selected: [{ type: Input }],
        limit: [{ type: Input }],
        count: [{ type: Input }],
        offset: [{ type: Input }],
        externalPaging: [{ type: Input }],
        externalSorting: [{ type: Input }],
        loadingIndicator: [{ type: Input }],
        scrollbarH: [{ type: Input }],
        scrollbarV: [{ type: Input }],
        reorderable: [{ type: Input }],
        sortType: [{ type: Input }],
        messages: [{ type: Input }],
        selectionType: [{ type: Input }],
        columnMode: [{ type: Input }],
        headerHeight: [{ type: Input }],
        footerHeight: [{ type: Input }],
        rowHeight: [{ type: Input }],
        header: [{ type: Input }],
        column: [{ type: Input }],
        footer: [{ type: Input }],
        add: [{ type: Input }],
        edit: [{ type: Input }],
        delete: [{ type: Input }],
        filter: [{ type: Input }],
        api: [{ type: Input }],
        startWithOpenData: [{ type: Input }],
        filterEvent: [{ type: Input }],
        formGroupFilter: [{ type: Input }],
        sort: [{ type: Input }],
        onAdd: [{ type: Output }],
        onEdit: [{ type: Output }],
        onDelete: [{ type: Output }],
        onSearch: [{ type: Output }],
        onFilter: [{ type: Output }],
        onButtonCell: [{ type: Output }],
        datatable: [{ type: ViewChild, args: ['datatable', { static: false },] }],
        filterFn: [{ type: Input }],
        filterDoFetchFn: [{ type: Input }],
        reloadFn: [{ type: Input }]
    };
    return DoDatatableComponent;
}());
export { DoDatatableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZGF0YXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS9uZ3gvZG8tZGF0YXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxpQkFBaUIsRUFDakIsTUFBTSxFQUNOLFNBQVMsRUFDVCxRQUFRLEVBQ1IsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsWUFBWSxFQUNaLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEcsT0FBTyxFQUFFLFlBQVksRUFBcUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNuRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHakQ7SUErRUUsOEJBQXNDLE1BQWMsRUFDMUMsTUFBcUIsRUFDdEIsUUFBa0I7UUFGVyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQzFDLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQXpFbEIsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUNqQixZQUFPLEdBQXNCLEVBQUUsQ0FBQztRQUNoQyxZQUFPLEdBQXNCLEVBQUUsQ0FBQztRQUNoQyxhQUFRLEdBQVUsRUFBRSxDQUFDO1FBQ3JCLFVBQUssR0FBdUIsRUFBRSxDQUFDO1FBQy9CLFVB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S0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSztzQkFDTCxLQUFLO29DQUNMLEtBQUs7OEJBQ0wsS0FBSztrQ0FDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsTUFBTTt5QkFDTixNQUFNOzJCQUNOLE1BQU07MkJBQ04sTUFBTTsyQkFDTixNQUFNOytCQUNOLE1BQU07NEJBQ04sU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7MkJBQ3RDLEtBQUs7a0NBTUwsS0FBSzsyQkFTTCxLQUFLOztJQStLUiwyQkFBQztDQUFBLEFBN09ELElBNk9DO1NBdE9ZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBJbmplY3QsXG4gIExPQ0FMRV9JRCxcbiAgSW5qZWN0b3IsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBWaWV3Q2hpbGQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29sdW1uTW9kZSwgU2VsZWN0aW9uVHlwZSwgU29ydFR5cGUsIERhdGF0YWJsZUNvbXBvbmVudCB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcbmltcG9ydCB7IEhUVFBfU0VSVklDRSwgSHR0cEZhY3RvcnlTZXJ2aWNlLCBIdHRwQmFzZU1vZGVsIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBQYWdlLCBTb3J0LCBLZXl3b3JkLCBEYXRhdGFibGVGaWx0ZXIsIERhdGF0YWJsZUNvbHVtbiB9IGZyb20gJy4uL21vZGVscy9kYXRhdGFibGUubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1kYXRhdGFibGUnLFxuICBzdHlsZVVybHM6IFsnLi9kby1kYXRhdGFibGUuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RvLWRhdGF0YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBEb0RhdGF0YWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcm93czogYW55W10gPSBbXTtcbiAgQElucHV0KCkgY29sdW1uczogRGF0YXRhYmxlQ29sdW1uW10gPSBbXTtcbiAgQElucHV0KCkgZmlsdGVyczogRGF0YXRhYmxlRmlsdGVyW10gPSBbXTtcbiAgQElucHV0KCkgc2VsZWN0ZWQ6IGFueVtdID0gW107XG4gIEBJbnB1dCgpIGxpbWl0OiBudW1iZXIgfCB1bmRlZmluZWQgPSAxMDtcbiAgQElucHV0KCkgY291bnQ6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIG9mZnNldDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgZXh0ZXJuYWxQYWdpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZXh0ZXJuYWxTb3J0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxvYWRpbmdJbmRpY2F0b3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgc2Nyb2xsYmFySDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHNjcm9sbGJhclY6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgcmVvcmRlcmFibGU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBzb3J0VHlwZTogU29ydFR5cGUgPSBTb3J0VHlwZS5zaW5nbGU7XG4gIEBJbnB1dCgpIG1lc3NhZ2VzOiBhbnk7XG4gIEBJbnB1dCgpIHNlbGVjdGlvblR5cGU6IFNlbGVjdGlvblR5cGUgPSBTZWxlY3Rpb25UeXBlLmNoZWNrYm94O1xuICBASW5wdXQoKSBjb2x1bW5Nb2RlOiBDb2x1bW5Nb2RlID0gQ29sdW1uTW9kZS5mb3JjZTtcbiAgQElucHV0KCkgaGVhZGVySGVpZ2h0OiBhbnkgPSA0MDtcbiAgQElucHV0KCkgZm9vdGVySGVpZ2h0OiBhbnkgPSAnYXV0byc7XG4gIEBJbnB1dCgpIHJvd0hlaWdodDogbnVtYmVyIHwgJ2F1dG8nIHwgKChyb3c/OiBhbnkpID0+IG51bWJlcikgPSAnYXV0byc7XG4gIEBJbnB1dCgpIGhlYWRlcjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGNvbHVtbjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGZvb3RlcjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGFkZDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGVkaXQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBkZWxldGU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBmaWx0ZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBhcGk6IEh0dHBCYXNlTW9kZWw7XG4gIEBJbnB1dCgpIHN0YXJ0V2l0aE9wZW5EYXRhOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgZmlsdGVyRXZlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZm9ybUdyb3VwRmlsdGVyOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIHNvcnQ6IFNvcnQ7XG4gIEBPdXRwdXQoKSBvbkFkZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgb25FZGl0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25EZWxldGU6IEV2ZW50RW1pdHRlcjxhbnlbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xuICBAT3V0cHV0KCkgb25TZWFyY2g6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvbkZpbHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uQnV0dG9uQ2VsbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQFZpZXdDaGlsZCgnZGF0YXRhYmxlJywge3N0YXRpYzogZmFsc2V9KSBkYXRhdGFibGU6IERhdGF0YWJsZUNvbXBvbmVudDtcbiAgQElucHV0KCkgc2V0IGZpbHRlckZuKGtleXdvcmQ6IEtleXdvcmQpIHtcbiAgICB0aGlzLmtleXdvcmRQYXJhbSA9IGtleXdvcmQ7XG4gICAgdGhpcy5fa2V5d29yZCA9IGtleXdvcmQ7XG4gICAgdGhpcy5jb3VudCA9IDA7XG4gICAgdGhpcy5vZmZzZXQgPSAwO1xuICB9XG4gIEBJbnB1dCgpIHNldCBmaWx0ZXJEb0ZldGNoRm4oa2V5d29yZDogS2V5d29yZCkge1xuICAgIGlmIChrZXl3b3JkKSB7XG4gICAgICB0aGlzLmtleXdvcmRQYXJhbSA9IGtleXdvcmQ7XG4gICAgICB0aGlzLl9rZXl3b3JkID0ga2V5d29yZDtcbiAgICB9XG4gICAgdGhpcy5jb3VudCA9IDA7XG4gICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgIHRoaXMuZmV0Y2goKTtcbiAgfVxuICBASW5wdXQoKSBzZXQgcmVsb2FkRm4ocmVsb2FkOiBib29sZWFuKSB7XG4gICAgaWYgKHJlbG9hZCkge1xuICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgICB0aGlzLmZldGNoKCk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBrZXl3b3JkUGFyYW06IEtleXdvcmQ7XG4gIHB1YmxpYyBfa2V5d29yZDogS2V5d29yZDtcbiAgcHVibGljIGlzRGVsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gIHByb3RlY3RlZCBodHRwOiBIdHRwRmFjdG9yeVNlcnZpY2U7XG4gIHByaXZhdGUgZGVzdHJveSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBjZHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWY7XG4gIHByaXZhdGUgcGFnZU9mZnNldDogbnVtYmVyID0gMDtcblxuICBwcm90ZWN0ZWQgX3NlYXJjaDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0lEKSBwdWJsaWMgbG9jYWxlOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBsYXlvdXQ6IExheW91dFNlcnZpY2UsXG4gICAgcHVibGljIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIHRoaXMuaHR0cCA9IGluamVjdG9yLmdldChIVFRQX1NFUlZJQ0UpO1xuICAgIHRoaXMuY2RyZWYgPSBpbmplY3Rvci5nZXQoQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RhcnRXaXRoT3BlbkRhdGEpIHtcbiAgICAgIHRoaXMuZmV0Y2goKTtcbiAgICB9XG4gICAgdGhpcy5sYXlvdXQub25DaGFuZ2VMYXlvdXRTaXplKCkucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmRhdGF0YWJsZS5yZWNhbGN1bGF0ZSgpO1xuICAgICAgdGhpcy5jZHJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZGVzdHJveSQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGRvU2VhcmNoKHNlYXJjaDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5vblNlYXJjaC5lbWl0KHNlYXJjaCk7XG4gICAgaWYgKHRoaXMua2V5d29yZFBhcmFtKSB7XG4gICAgICB0aGlzLl9rZXl3b3JkID0gdGhpcy5rZXl3b3JkUGFyYW07XG4gICAgICB0aGlzLl9rZXl3b3JkWydfYWxsJ10gPSBzZWFyY2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2tleXdvcmQgPSB7XG4gICAgICAgICdfYWxsJzogc2VhcmNoLFxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5jb3VudCA9IDA7XG4gICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgIHRoaXMuZmV0Y2goKTtcbiAgfVxuXG4gIGRvRmlsdGVyKHNlYXJjaDogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZmlsdGVyRXZlbnQpIHtcbiAgICAgIHRoaXMub25GaWx0ZXIuZW1pdChzZWFyY2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5rZXl3b3JkUGFyYW0pIHtcbiAgICAgICAgdGhpcy5fa2V5d29yZCA9IHRoaXMua2V5d29yZFBhcmFtO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fa2V5d29yZCA9IHt9O1xuICAgICAgfVxuICAgICAgdGhpcy5maWx0ZXJzLmZvckVhY2goZmlsdGVyID0+IHtcbiAgICAgICAgc3dpdGNoIChmaWx0ZXIudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgICBjYXNlICdkYXRlcGlja2VyJzpcbiAgICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgICB0aGlzLl9rZXl3b3JkW2ZpbHRlci5jb250cm9sTmFtZV0gPSBzZWFyY2hbZmlsdGVyLmNvbnRyb2xOYW1lXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgICB0aGlzLl9rZXl3b3JkW2ZpbHRlci5jb250cm9sTmFtZV0gPSBzZWFyY2hbZmlsdGVyLmNvbnRyb2xOYW1lXS5sYWJlbDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgIHRoaXMuX2tleXdvcmRbZmlsdGVyLmNvbnRyb2xOYW1lXSA9IHNlYXJjaFtmaWx0ZXIuY29udHJvbE5hbWVdLm5hbWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgICB0aGlzLmZldGNoKCk7XG4gICAgfVxuICB9XG5cbiAgZG9BZGQoYWRkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5vbkFkZC5lbWl0KGFkZCk7XG4gIH1cblxuICBkb0VkaXQocm93OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uRWRpdC5lbWl0KHJvdyk7XG4gIH1cblxuICBkb0RlbGV0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLm9uRGVsZXRlLmVtaXQodGhpcy5zZWxlY3RlZCk7XG4gIH1cblxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdFTlRFUicpIHtcbiAgICAgIHRoaXMuZG9TZWFyY2godGhpcy5fc2VhcmNoKTtcbiAgICB9XG4gIH1cblxuICBmZXRjaCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hcGkpIHtcbiAgICAgIHRoaXMuZXh0ZXJuYWxQYWdpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5leHRlcm5hbFNvcnRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5nZXRSZXF1ZXN0KCkuc3Vic2NyaWJlKHJvd3MgPT4ge1xuICAgICAgICB0aGlzLnJvd3MgPSByb3dzO1xuICAgICAgICB0aGlzLmNkcmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNldFBhZ2UocGFnZTogUGFnZSk6IHZvaWQge1xuICAgIHRoaXMucGFnZU9mZnNldCA9IHBhZ2Uub2Zmc2V0ICogdGhpcy5saW1pdDtcbiAgICB0aGlzLmZldGNoKCk7XG4gIH1cblxuICBvblNvcnQob3JkZXI6IGFueSk6IHZvaWQge1xuICAgIGlmIChvcmRlcikge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3JkZXIuc29ydHMpKSB7XG4gICAgICAgIG9yZGVyLnNvcnRzLmZvckVhY2goc29ydCA9PiB7XG4gICAgICAgICAgaWYgKHNvcnRbJ2RpciddID09PSAnYXNjJykge1xuICAgICAgICAgICAgdGhpcy5zb3J0ID0geyBhc2MgOiBbc29ydFsncHJvcCddXX07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc29ydCA9IHsgZGVzYyA6IFtzb3J0Wydwcm9wJ11dfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmZldGNoKCk7XG4gIH1cblxuICBvblNlbGVjdCh7IHNlbGVjdGVkIH0pOiB2b2lkIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RlZCkpIHtcbiAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmICh0aGlzLmRlbGV0ZSkgdGhpcy5pc0RlbGV0ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzRGVsZXRlID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNEZWxldGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrQnV0dG9uKGV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5vbkJ1dHRvbkNlbGwuZW1pdChldmVudCk7XG4gIH1cblxuICBwcml2YXRlIGdldFJlcXVlc3QoKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIGNvbnN0IGJvZHk6IGFueSA9IHtcbiAgICAgIG9mZnNldDogdGhpcy5wYWdlT2Zmc2V0LFxuICAgICAgbGltaXQ6IHRoaXMubGltaXQsXG4gICAgICBrZXl3b3JkIDogdGhpcy5fa2V5d29yZCxcbiAgICAgIG9yZGVyOiB0aGlzLnNvcnQsXG4gICAgfTtcbiAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzLmh0dHAuSFRUUF9BVVRIKHRoaXMuYXBpLCBib2R5KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuY291bnQgPSBOdW1iZXIocmVzcG9uc2UudG90YWxSZWNvcmQpO1xuICAgICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiAoPGFueVtdPiByZXNwb25zZVsnZGF0YSddKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgIH0pKTtcbiAgfVxuXG59XG4iXX0=