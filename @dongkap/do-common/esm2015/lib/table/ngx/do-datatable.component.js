import { Component, Input, ViewEncapsulation, Inject, LOCALE_ID, Injector, ChangeDetectorRef, ViewChild, ChangeDetectionStrategy, EventEmitter, Output, } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject, of } from 'rxjs';
import { catchError, map, takeUntil } from 'rxjs/operators';
import { ColumnMode, SelectionType, SortType, DatatableComponent } from '@swimlane/ngx-datatable';
import { HTTP_SERVICE } from '@dongkap/do-core';
import { LayoutService } from '@dongkap/do-core';
export class DoDatatableComponent {
    constructor(locale, layout, injector) {
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
    set filterFn(keyword) {
        this.keywordParam = keyword;
        this._keyword = keyword;
        this.count = 0;
        this.offset = 0;
    }
    set filterDoFetchFn(keyword) {
        if (keyword) {
            this.keywordParam = keyword;
            this._keyword = keyword;
        }
        this.count = 0;
        this.offset = 0;
        this.fetch();
    }
    set reloadFn(reload) {
        if (reload) {
            this.count = 0;
            this.offset = 0;
            this.fetch();
        }
    }
    ngOnInit() {
        if (this.startWithOpenData) {
            this.fetch();
        }
        this.layout.onChangeLayoutSize().pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.datatable.recalculate();
            this.cdref.detectChanges();
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    doSearch(search) {
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
    }
    doFilter(search) {
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
            this.filters.forEach(filter => {
                switch (filter.type) {
                    case 'input':
                    case 'datepicker':
                    case 'radio':
                        this._keyword[filter.controlName] = search[filter.controlName];
                        break;
                    case 'select':
                        this._keyword[filter.controlName] = search[filter.controlName].label;
                        break;
                    case 'checkbox':
                        this._keyword[filter.controlName] = search[filter.controlName].name;
                        break;
                    default:
                        break;
                }
            });
            this.count = 0;
            this.offset = 0;
            this.fetch();
        }
    }
    doAdd(add) {
        this.onAdd.emit(add);
    }
    doEdit(row) {
        this.onEdit.emit(row);
    }
    doDelete() {
        this.onDelete.emit(this.selected);
    }
    onKeyDown(event) {
        if (event.key.toUpperCase() === 'ENTER') {
            this.doSearch(this._search);
        }
    }
    fetch() {
        if (this.api) {
            this.externalPaging = true;
            this.externalSorting = true;
            this.getRequest().subscribe(rows => {
                this.rows = rows;
                this.cdref.detectChanges();
            });
        }
    }
    setPage(page) {
        this.pageOffset = page.offset * this.limit;
        this.fetch();
    }
    onSort(order) {
        if (order) {
            if (Array.isArray(order.sorts)) {
                order.sorts.forEach(sort => {
                    if (sort['dir'] === 'asc') {
                        this.sort = { asc: [sort['prop']] };
                    }
                    else {
                        this.sort = { desc: [sort['prop']] };
                    }
                });
            }
        }
        this.fetch();
    }
    onSelect({ selected }) {
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
    }
    onClickButton(event) {
        this.onButtonCell.emit(event);
    }
    getRequest() {
        const body = {
            offset: this.pageOffset,
            limit: this.limit,
            keyword: this._keyword,
            order: this.sort,
        };
        this.loadingIndicator = true;
        return this.http.HTTP_AUTH(this.api, body)
            .pipe(map((response) => {
            this.count = Number(response.totalRecord);
            this.loadingIndicator = false;
            return response['data'];
        }), catchError(() => {
            this.loadingIndicator = false;
            this.count = 0;
            return of([]);
        }));
    }
}
DoDatatableComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: LayoutService },
    { type: Injector }
];
DoDatatableComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-datatable',
                template: "<do-datatable-header\n    [header]=\"header\"\n    [add]=\"add\"\n    [delete]=\"isDelete\"\n    [filter]=\"filter\"\n    [formGroupFilter]=\"formGroupFilter\"\n    (onSearch)=\"doSearch($event)\"\n    (onFilter)=\"doFilter($event)\"\n    (onAdd)=\"doAdd($event)\"\n    (onDelete)=\"doDelete()\">\n    <ng-content></ng-content>\n</do-datatable-header>\n<do-datatable-base\n    [rows]=\"rows\"\n    [columns]=\"columns\"\n    [selected]=\"selected\"\n    [limit]=\"limit\"\n    [count]=\"count\"\n    [offset]=\"offset\"\n    [externalPaging]=\"externalPaging\"\n    [externalSorting]=\"externalSorting\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [scrollbarH]=\"scrollbarH\"\n    [scrollbarV]=\"scrollbarV\"\n    [reorderable]=\"reorderable\"\n    [sortType]=\"sortType\"\n    [messages]=\"messages\"\n    [selectionType]=\"selectionType\"\n    [columnMode]=\"columnMode\"\n    [headerHeight]=\"headerHeight\"\n    [footerHeight]=\"footerHeight\"\n    [rowHeight]=\"rowHeight\"\n    [header]=\"header\"\n    [column]=\"column\"\n    [footer]=\"footer\"\n    [add]=\"add\"\n    [edit]=\"edit\"\n    [delete]=\"delete\"\n    [filter]=\"filter\"\n    [startWithOpenData]=\"startWithOpenData\"\n    (page)=\"setPage($event)\"\n    (sort)=\"onSort($event)\"\n    (select)=\"onSelect($event)\"\n    (activate)=\"doEdit($event)\"\n    (onButtonCell)=\"onClickButton($event)\">\n</do-datatable-base>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
DoDatatableComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: LayoutService },
    { type: Injector }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZGF0YXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS9uZ3gvZG8tZGF0YXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxpQkFBaUIsRUFDakIsTUFBTSxFQUNOLFNBQVMsRUFDVCxRQUFRLEVBQ1IsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsWUFBWSxFQUNaLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEcsT0FBTyxFQUFFLFlBQVksRUFBcUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNuRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFVakQsTUFBTSxPQUFPLG9CQUFvQjtJQXdFL0IsWUFBc0MsTUFBYyxFQUMxQyxNQUFxQixFQUN0QixRQUFrQjtRQUZXLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDMUMsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBekVsQixTQUFJLEdBQVUsRUFBRSxDQUFDO1FBQ2pCLFlBQU8sR0FBc0IsRUFBRSxDQUFDO1FBQ2hDLFlBQU8sR0FBc0IsRUFBRSxDQUFDO1FBQ2hDLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFDckIsVUFBSyxHQUF1QixFQUFFLENBQUM7UUFDL0IsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBQ2pDLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsYUFBUSxHQUFhLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFFckMsa0JBQWEsR0FBa0IsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUN0RCxlQUFVLEdBQWUsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUMxQyxpQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUN2QixpQkFBWSxHQUFRLE1BQU0sQ0FBQztRQUMzQixjQUFTLEdBQThDLE1BQU0sQ0FBQztRQUM5RCxXQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixRQUFHLEdBQVksSUFBSSxDQUFDO1FBQ3BCLFNBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixXQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLHNCQUFpQixHQUFZLElBQUksQ0FBQztRQUNsQyxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUc1QixVQUFLLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFDM0QsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BELGFBQVEsR0FBd0IsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUMxRCxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdEQsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RELGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUEwQjdELGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFekIsYUFBUSxHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBRTVDLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFPN0IsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFyQ0QsSUFBYSxRQUFRLENBQUMsT0FBZ0I7UUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBQ0QsSUFBYSxlQUFlLENBQUMsT0FBZ0I7UUFDM0MsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNELElBQWEsUUFBUSxDQUFDLE1BQWU7UUFDbkMsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQWtCRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQzdFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBYztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQ2hDO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHO2dCQUNkLE1BQU0sRUFBRSxNQUFNO2FBQ2YsQ0FBQztTQUNIO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQVc7UUFDbEIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVCO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUNuQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzthQUNwQjtZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUM1QixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7b0JBQ25CLEtBQUssT0FBTyxDQUFDO29CQUNiLEtBQUssWUFBWSxDQUFDO29CQUNsQixLQUFLLE9BQU87d0JBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDL0QsTUFBTTtvQkFDUixLQUFLLFFBQVE7d0JBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUM7d0JBQ3JFLE1BQU07b0JBQ1IsS0FBSyxVQUFVO3dCQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNwRSxNQUFNO29CQUNSO3dCQUNFLE1BQU07aUJBQ1Q7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLEdBQVk7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFRO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFvQjtRQUM1QixJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssT0FBTyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM1QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFVO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBVTtRQUNmLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDOUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3pCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssRUFBRTt3QkFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUM7cUJBQ3JDO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxJQUFJLEVBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDO3FCQUN0QztnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7UUFDRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFO1FBQ25CLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMzQixJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixJQUFJLElBQUksQ0FBQyxNQUFNO29CQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQ3ZCO1lBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FDMUI7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTyxVQUFVO1FBQ2hCLE1BQU0sSUFBSSxHQUFRO1lBQ2hCLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVTtZQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsT0FBTyxFQUFHLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNqQixDQUFDO1FBQ0YsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO2FBQ3ZDLElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTtZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUM5QixPQUFnQixRQUFRLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDcEMsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7O3lDQTVKWSxNQUFNLFNBQUMsU0FBUztZQUNYLGFBQWE7WUFDWixRQUFROzs7WUFqRjVCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFFeEIsbzRDQUE0QztnQkFDNUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7O3lDQXlFYyxNQUFNLFNBQUMsU0FBUztZQWxGdEIsYUFBYTtZQWRwQixRQUFROzs7bUJBeUJQLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLOytCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSztrQkFDTCxLQUFLO21CQUNMLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLO2tCQUNMLEtBQUs7Z0NBQ0wsS0FBSzswQkFDTCxLQUFLOzhCQUNMLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxNQUFNO3FCQUNOLE1BQU07dUJBQ04sTUFBTTt1QkFDTixNQUFNO3VCQUNOLE1BQU07MkJBQ04sTUFBTTt3QkFDTixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQzt1QkFDdEMsS0FBSzs4QkFNTCxLQUFLO3VCQVNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgSW5qZWN0LFxuICBMT0NBTEVfSUQsXG4gIEluamVjdG9yLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0NoaWxkLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbHVtbk1vZGUsIFNlbGVjdGlvblR5cGUsIFNvcnRUeXBlLCBEYXRhdGFibGVDb21wb25lbnQgfSBmcm9tICdAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZSc7XG5pbXBvcnQgeyBIVFRQX1NFUlZJQ0UsIEh0dHBGYWN0b3J5U2VydmljZSwgSHR0cEJhc2VNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgTGF5b3V0U2VydmljZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgUGFnZSwgU29ydCwgS2V5d29yZCwgRGF0YXRhYmxlRmlsdGVyLCBEYXRhdGFibGVDb2x1bW4gfSBmcm9tICcuLi9tb2RlbHMvZGF0YXRhYmxlLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tZGF0YXRhYmxlJyxcbiAgc3R5bGVVcmxzOiBbJy4vZG8tZGF0YXRhYmxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kby1kYXRhdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRG9EYXRhdGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHJvd3M6IGFueVtdID0gW107XG4gIEBJbnB1dCgpIGNvbHVtbnM6IERhdGF0YWJsZUNvbHVtbltdID0gW107XG4gIEBJbnB1dCgpIGZpbHRlcnM6IERhdGF0YWJsZUZpbHRlcltdID0gW107XG4gIEBJbnB1dCgpIHNlbGVjdGVkOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBsaW1pdDogbnVtYmVyIHwgdW5kZWZpbmVkID0gMTA7XG4gIEBJbnB1dCgpIGNvdW50OiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBvZmZzZXQ6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGV4dGVybmFsUGFnaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGV4dGVybmFsU29ydGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBsb2FkaW5nSW5kaWNhdG9yOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNjcm9sbGJhckg6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBzY3JvbGxiYXJWOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJlb3JkZXJhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgc29ydFR5cGU6IFNvcnRUeXBlID0gU29ydFR5cGUuc2luZ2xlO1xuICBASW5wdXQoKSBtZXNzYWdlczogYW55O1xuICBASW5wdXQoKSBzZWxlY3Rpb25UeXBlOiBTZWxlY3Rpb25UeXBlID0gU2VsZWN0aW9uVHlwZS5jaGVja2JveDtcbiAgQElucHV0KCkgY29sdW1uTW9kZTogQ29sdW1uTW9kZSA9IENvbHVtbk1vZGUuZm9yY2U7XG4gIEBJbnB1dCgpIGhlYWRlckhlaWdodDogYW55ID0gNDA7XG4gIEBJbnB1dCgpIGZvb3RlckhlaWdodDogYW55ID0gJ2F1dG8nO1xuICBASW5wdXQoKSByb3dIZWlnaHQ6IG51bWJlciB8ICdhdXRvJyB8ICgocm93PzogYW55KSA9PiBudW1iZXIpID0gJ2F1dG8nO1xuICBASW5wdXQoKSBoZWFkZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBjb2x1bW46IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBmb290ZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBhZGQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBlZGl0OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgZGVsZXRlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgZmlsdGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgYXBpOiBIdHRwQmFzZU1vZGVsO1xuICBASW5wdXQoKSBzdGFydFdpdGhPcGVuRGF0YTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGZpbHRlckV2ZW50OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZvcm1Hcm91cEZpbHRlcjogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBzb3J0OiBTb3J0O1xuICBAT3V0cHV0KCkgb25BZGQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIG9uRWRpdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uRGVsZXRlOiBFdmVudEVtaXR0ZXI8YW55W10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcbiAgQE91dHB1dCgpIG9uU2VhcmNoOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25GaWx0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvbkJ1dHRvbkNlbGw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBWaWV3Q2hpbGQoJ2RhdGF0YWJsZScsIHtzdGF0aWM6IGZhbHNlfSkgZGF0YXRhYmxlOiBEYXRhdGFibGVDb21wb25lbnQ7XG4gIEBJbnB1dCgpIHNldCBmaWx0ZXJGbihrZXl3b3JkOiBLZXl3b3JkKSB7XG4gICAgdGhpcy5rZXl3b3JkUGFyYW0gPSBrZXl3b3JkO1xuICAgIHRoaXMuX2tleXdvcmQgPSBrZXl3b3JkO1xuICAgIHRoaXMuY291bnQgPSAwO1xuICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgfVxuICBASW5wdXQoKSBzZXQgZmlsdGVyRG9GZXRjaEZuKGtleXdvcmQ6IEtleXdvcmQpIHtcbiAgICBpZiAoa2V5d29yZCkge1xuICAgICAgdGhpcy5rZXl3b3JkUGFyYW0gPSBrZXl3b3JkO1xuICAgICAgdGhpcy5fa2V5d29yZCA9IGtleXdvcmQ7XG4gICAgfVxuICAgIHRoaXMuY291bnQgPSAwO1xuICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICB0aGlzLmZldGNoKCk7XG4gIH1cbiAgQElucHV0KCkgc2V0IHJlbG9hZEZuKHJlbG9hZDogYm9vbGVhbikge1xuICAgIGlmIChyZWxvYWQpIHtcbiAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgICAgdGhpcy5mZXRjaCgpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMga2V5d29yZFBhcmFtOiBLZXl3b3JkO1xuICBwdWJsaWMgX2tleXdvcmQ6IEtleXdvcmQ7XG4gIHB1YmxpYyBpc0RlbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgaHR0cDogSHR0cEZhY3RvcnlTZXJ2aWNlO1xuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgY2RyZWY6IENoYW5nZURldGVjdG9yUmVmO1xuICBwcml2YXRlIHBhZ2VPZmZzZXQ6IG51bWJlciA9IDA7XG5cbiAgcHJvdGVjdGVkIF9zZWFyY2g6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgcHVibGljIGxvY2FsZTogc3RyaW5nLFxuICAgIHByaXZhdGUgbGF5b3V0OiBMYXlvdXRTZXJ2aWNlLFxuICAgIHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICB0aGlzLmh0dHAgPSBpbmplY3Rvci5nZXQoSFRUUF9TRVJWSUNFKTtcbiAgICB0aGlzLmNkcmVmID0gaW5qZWN0b3IuZ2V0KENoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0YXJ0V2l0aE9wZW5EYXRhKSB7XG4gICAgICB0aGlzLmZldGNoKCk7XG4gICAgfVxuICAgIHRoaXMubGF5b3V0Lm9uQ2hhbmdlTGF5b3V0U2l6ZSgpLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5kYXRhdGFibGUucmVjYWxjdWxhdGUoKTtcbiAgICAgIHRoaXMuY2RyZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBkb1NlYXJjaChzZWFyY2g6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMub25TZWFyY2guZW1pdChzZWFyY2gpO1xuICAgIGlmICh0aGlzLmtleXdvcmRQYXJhbSkge1xuICAgICAgdGhpcy5fa2V5d29yZCA9IHRoaXMua2V5d29yZFBhcmFtO1xuICAgICAgdGhpcy5fa2V5d29yZFsnX2FsbCddID0gc2VhcmNoO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9rZXl3b3JkID0ge1xuICAgICAgICAnX2FsbCc6IHNlYXJjaCxcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMuY291bnQgPSAwO1xuICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICB0aGlzLmZldGNoKCk7XG4gIH1cblxuICBkb0ZpbHRlcihzZWFyY2g6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZpbHRlckV2ZW50KSB7XG4gICAgICB0aGlzLm9uRmlsdGVyLmVtaXQoc2VhcmNoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMua2V5d29yZFBhcmFtKSB7XG4gICAgICAgIHRoaXMuX2tleXdvcmQgPSB0aGlzLmtleXdvcmRQYXJhbTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2tleXdvcmQgPSB7fTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICAgIHN3aXRjaCAoZmlsdGVyLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgICAgY2FzZSAnZGF0ZXBpY2tlcic6XG4gICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgdGhpcy5fa2V5d29yZFtmaWx0ZXIuY29udHJvbE5hbWVdID0gc2VhcmNoW2ZpbHRlci5jb250cm9sTmFtZV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICAgICAgdGhpcy5fa2V5d29yZFtmaWx0ZXIuY29udHJvbE5hbWVdID0gc2VhcmNoW2ZpbHRlci5jb250cm9sTmFtZV0ubGFiZWw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICB0aGlzLl9rZXl3b3JkW2ZpbHRlci5jb250cm9sTmFtZV0gPSBzZWFyY2hbZmlsdGVyLmNvbnRyb2xOYW1lXS5uYW1lO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgICAgdGhpcy5mZXRjaCgpO1xuICAgIH1cbiAgfVxuXG4gIGRvQWRkKGFkZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMub25BZGQuZW1pdChhZGQpO1xuICB9XG5cbiAgZG9FZGl0KHJvdzogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkVkaXQuZW1pdChyb3cpO1xuICB9XG5cbiAgZG9EZWxldGUoKTogdm9pZCB7XG4gICAgdGhpcy5vbkRlbGV0ZS5lbWl0KHRoaXMuc2VsZWN0ZWQpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpID09PSAnRU5URVInKSB7XG4gICAgICB0aGlzLmRvU2VhcmNoKHRoaXMuX3NlYXJjaCk7XG4gICAgfVxuICB9XG5cbiAgZmV0Y2goKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXBpKSB7XG4gICAgICB0aGlzLmV4dGVybmFsUGFnaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZXh0ZXJuYWxTb3J0aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZ2V0UmVxdWVzdCgpLnN1YnNjcmliZShyb3dzID0+IHtcbiAgICAgICAgdGhpcy5yb3dzID0gcm93cztcbiAgICAgICAgdGhpcy5jZHJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzZXRQYWdlKHBhZ2U6IFBhZ2UpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2VPZmZzZXQgPSBwYWdlLm9mZnNldCAqIHRoaXMubGltaXQ7XG4gICAgdGhpcy5mZXRjaCgpO1xuICB9XG5cbiAgb25Tb3J0KG9yZGVyOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAob3JkZXIpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9yZGVyLnNvcnRzKSkge1xuICAgICAgICBvcmRlci5zb3J0cy5mb3JFYWNoKHNvcnQgPT4ge1xuICAgICAgICAgIGlmIChzb3J0WydkaXInXSA9PT0gJ2FzYycpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydCA9IHsgYXNjIDogW3NvcnRbJ3Byb3AnXV19O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNvcnQgPSB7IGRlc2MgOiBbc29ydFsncHJvcCddXX07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5mZXRjaCgpO1xuICB9XG5cbiAgb25TZWxlY3QoeyBzZWxlY3RlZCB9KTogdm9pZCB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0ZWQpKSB7XG4gICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAodGhpcy5kZWxldGUpIHRoaXMuaXNEZWxldGUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc0RlbGV0ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzRGVsZXRlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgb25DbGlja0J1dHRvbihldmVudCk6IHZvaWQge1xuICAgIHRoaXMub25CdXR0b25DZWxsLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSZXF1ZXN0KCk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICBjb25zdCBib2R5OiBhbnkgPSB7XG4gICAgICBvZmZzZXQ6IHRoaXMucGFnZU9mZnNldCxcbiAgICAgIGxpbWl0OiB0aGlzLmxpbWl0LFxuICAgICAga2V5d29yZCA6IHRoaXMuX2tleXdvcmQsXG4gICAgICBvcmRlcjogdGhpcy5zb3J0LFxuICAgIH07XG4gICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5odHRwLkhUVFBfQVVUSCh0aGlzLmFwaSwgYm9keSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmNvdW50ID0gTnVtYmVyKHJlc3BvbnNlLnRvdGFsUmVjb3JkKTtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gKDxhbnlbXT4gcmVzcG9uc2VbJ2RhdGEnXSk7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgICAgICByZXR1cm4gb2YoW10pO1xuICAgICAgICB9KSk7XG4gIH1cblxufVxuIl19