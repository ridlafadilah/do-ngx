import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID, Injector, ChangeDetectorRef, Output, EventEmitter, ViewChild, ContentChild, TemplateRef, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subject, of } from 'rxjs';
import { switchMap, catchError, map, takeUntil } from 'rxjs/operators';
import { NgSelectComponent } from '@ng-select/ng-select';
import { HTTP_SERVICE, HttpMethod } from '@dongkap/do-core';
import { DoValueAccessor } from '../base/do-value-accessor.component';
import { ContentSelectDirective } from './directive/content-select.directive';
export class DoSelectComponent extends DoValueAccessor {
    constructor(ngControl, locale, injector) {
        super(ngControl, locale);
        this.locale = locale;
        this.injector = injector;
        this.colLabel = 3;
        this.colInput = 9;
        this.items = [];
        this.multiple = false;
        this.loading = false;
        this.addTag = false;
        this.closeOnSelect = true;
        this.clearable = true;
        this.searchable = true;
        this.hideSelected = true;
        this.minTermLength = 2;
        this.maxTermLength = 50;
        this.limit = 50;
        this.offsetNextLoad = this.limit - 35;
        this.onSelect = new EventEmitter();
        this.onClear = new EventEmitter();
        this.notFoundText = 'select.notfound';
        this.typeToSearchText = 'select.typesearch';
        this.virtualScroll = true;
        this.paramSearch = { value: this.minTermLength };
        this.typeahead$ = new Subject();
        this.destroy$ = new Subject();
        this.total = 0;
        this.totalRecord = 0;
        this.http = injector.get(HTTP_SERVICE);
        this.cdref = injector.get(ChangeDetectorRef);
    }
    get value() { return this._value; }
    set value(value) {
        if (this._value !== value) {
            this._value = value;
            this.onChange(value);
            this.onSelect.emit(value);
            const control = this.ngControl.control;
            if (control) {
                control.updateValueAndValidity();
                control.markAsTouched();
                control.markAsDirty();
            }
        }
    }
    onInit() {
        this.paramSearch = { value: this.minTermLength };
        if (this.api) {
            this.fetchSearch().subscribe((items) => {
                this.fetchMore(items);
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
        this.typeahead$.next(null);
        this.typeahead$.complete();
        this.typeahead$.unsubscribe();
    }
    onOpen() {
        if (this.api) {
            if (this.loading)
                return;
            this.total = 0;
            this.items = [];
            if (!this.searchable) {
                this.fetchNone().subscribe((items) => {
                    this.fetchMore(items);
                });
            }
        }
    }
    onClose() {
        if (this.api) {
            this.reset();
        }
    }
    onScroll({ end }, search) {
        if (!this.loading) {
            if ((Number(end) + this.offsetNextLoad) >= this.total && this.total > 0 && this.total < this.totalRecord) {
                if (this.searchable && search) {
                    this.typeahead$.next(search);
                }
                else {
                    this.fetchNone().subscribe((items) => {
                        this.fetchMore(items);
                    });
                }
            }
        }
    }
    onScrollToEnd(search) {
        if (!this.loading) {
            if (this.total < this.totalRecord) {
                if (this.searchable && search) {
                    this.typeahead$.next(search);
                }
                else {
                    this.fetchNone().subscribe((items) => {
                        this.fetchMore(items);
                    });
                }
            }
        }
    }
    doClear() {
        this.onClear.emit(true);
    }
    reset() {
        this.total = 0;
        this.items = [];
        this.loading = false;
    }
    fetchMore(items) {
        this.items = [...this.items, ...items];
        this.cdref.detectChanges();
        this.loading = false;
    }
    fetchSearch() {
        return this.typeahead$.pipe(switchMap((term) => {
            if (term) {
                if (term.length > this.maxTermLength) {
                    return of([]);
                }
                return this.getRequest(this.total, term);
            }
            else
                return of([]);
        })).pipe(takeUntil(this.destroy$));
    }
    fetchNone() {
        return this.getRequest(this.total).pipe(takeUntil(this.destroy$));
    }
    getRequest(offset, search) {
        let body;
        if (this.api.method === HttpMethod.POST) {
            body = {
                offset: offset ? offset : 0,
                limit: this.limit,
                keyword: {
                    _label: search,
                },
            };
            if (this.queryParam) {
                this.queryParam.forEach((result) => {
                    body['keyword'][result.key] = result.value;
                });
            }
        }
        this.loading = true;
        return this.http.HTTP_AUTH(this.api, body)
            .pipe(map((response) => {
            this.totalRecord = Number(response.totalRecord);
            this.total = this.total + Number(response.totalFiltered);
            return response['data'];
        }), catchError(() => of([])));
    }
    onKeyDown(event, term) {
        if (event.key) {
            if (['DELETE', 'BACKSPACE', 'TAB', 'ESCAPE', 'ENTER', 'DECIMAL POINT', 'PERIOD', 'DASH'].indexOf(event.key.toUpperCase()) !== -1 ||
                (event.key.toUpperCase() === 'A' && event.ctrlKey === true) || // Allow: Ctrl+A
                (event.key.toUpperCase() === 'C' && event.ctrlKey === true) || // Allow: Ctrl+C
                (event.key.toUpperCase() === 'V' && event.ctrlKey === true) || // Allow: Ctrl+V
                (event.key.toUpperCase() === 'X' && event.ctrlKey === true) || // Allow: Ctrl+X
                (event.key.toUpperCase() === 'A' && event.metaKey === true) || // Cmd+A (Mac)
                (event.key.toUpperCase() === 'C' && event.metaKey === true) || // Cmd+C (Mac)
                (event.key.toUpperCase() === 'V' && event.metaKey === true) || // Cmd+V (Mac)
                (event.key.toUpperCase() === 'X' && event.metaKey === true) || // Cmd+X (Mac)
                (event.key.toUpperCase() === 'END') ||
                (event.key.toUpperCase() === 'HOME') ||
                (event.key.toUpperCase() === 'ARROWLEFT') ||
                (event.key.toUpperCase() === 'ARROWRIGHT') ||
                (event.key.toUpperCase() === 'ARROWDOWN') ||
                (event.key.toUpperCase() === 'ARROWUP') || (!event.key.match(/[!@#$%^&*()?":{}|<>\[\];\\=~`]/g))) {
                if (!(event.ctrlKey === true ||
                    event.metaKey === true ||
                    event.altKey === true ||
                    (event.key.toUpperCase() === 'END') ||
                    (event.key.toUpperCase() === 'HOME') ||
                    (event.key.toUpperCase() === 'ARROWLEFT') ||
                    (event.key.toUpperCase() === 'ARROWRIGHT') ||
                    (event.key.toUpperCase() === 'ARROWDOWN') ||
                    (event.key.toUpperCase() === 'ARROWUP'))) {
                    this.reset();
                }
                if (term) {
                    if (term.length > this.maxTermLength) {
                        return false;
                    }
                }
                return true;
            }
        }
        return false;
    }
}
DoSelectComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: Injector }
];
DoSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-select',
                template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <ng-select\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [items]=\"items\"\n      [typeahead]=\"typeahead$\"\n      [multiple]=\"multiple\"\n      [loading]=\"loading\"\n      [notFoundText]=\"notFoundText | translate\"\n      [addTag]=\"addTag\"\n      [closeOnSelect]=\"closeOnSelect\"\n      [clearable]=\"required? false: clearable\"\n      [searchable]=\"searchable\"\n      [hideSelected]=\"hideSelected\"\n      [minTermLength]=\"minTermLength\"\n      [virtualScroll]=\"virtualScroll\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      (keydown)=\"onKeyDown($event, select.searchTerm)\"\n      (scroll)=\"onScroll($event, select.searchTerm)\"\n      (scrollToEnd)=\"onScrollToEnd(select.searchTerm)\"\n      (open)=\"onOpen()\"\n      (close)=\"onClose()\"\n      (clear)=\"doClear()\"\n      (change)=\"onChange($event)\"\n      (focus)=\"onTouched($event)\"\n      (blur)=\"onTouched($event)\"\n      [(ngModel)]=\"value\"\n      [ngClass]=\"{'required': required}\"\n      appendTo=\"body\"\n      typeToSearchText=\"{{typeToSearchText | translate:paramSearch}}\"\n      #select>\n        <ng-template *ngIf=\"contentTemplate\" ng-label-tmp let-item=\"item\">\n          <ng-container *ngTemplateOutlet=\"contentTemplate; context: {$implicit: item}\"></ng-container>\n        </ng-template>\n        <ng-template *ngIf=\"contentTemplate\" ng-option-tmp let-item=\"item\">\n          <ng-container *ngTemplateOutlet=\"contentTemplate; context: {$implicit: item}\"></ng-container>\n        </ng-template>\n    </ng-select>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: ["ng-select.ng-invalid.ng-touched .ng-select-container{border-color:#ff3d71}ng-select.ng-invalid.ng-touched:focus{border-color:#ff3d71;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #fde6e8}ng-select.ng-valid.ng-touched.required .ng-select-container{border-color:#00d68f}ng-select.ng-valid.ng-touched.required:focus{border-color:#00d68f;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #e4e9f2}body{font-size:1rem;font-weight:400;line-height:1.5;position:relative;font-family:Open Sans,sans-serif}.ng-select .ng-select-container{border-radius:.25rem;line-height:1.5rem;align-items:center;background-color:#f7f9fc;color:#1a2138;font-family:Open Sans,sans-serif;border:1px solid #edf1f7}"]
            },] }
];
DoSelectComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: Injector }
];
DoSelectComponent.propDecorators = {
    placeholder: [{ type: Input }],
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    items: [{ type: Input }],
    multiple: [{ type: Input }],
    loading: [{ type: Input }],
    addTag: [{ type: Input }],
    closeOnSelect: [{ type: Input }],
    clearable: [{ type: Input }],
    searchable: [{ type: Input }],
    hideSelected: [{ type: Input }],
    minTermLength: [{ type: Input }],
    maxTermLength: [{ type: Input }],
    api: [{ type: Input }],
    limit: [{ type: Input }],
    offsetNextLoad: [{ type: Input }],
    queryParam: [{ type: Input }],
    onSelect: [{ type: Output }],
    onClear: [{ type: Output }],
    select: [{ type: ViewChild, args: ['select', { static: false },] }],
    contentTemplate: [{ type: ContentChild, args: [ContentSelectDirective, { static: false, read: TemplateRef },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3QvZG8tc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxpQkFBaUIsRUFDakIsUUFBUSxFQUNSLElBQUksRUFDSixNQUFNLEVBQ04sU0FBUyxFQUNULFFBQVEsRUFDUixpQkFBaUIsRUFDakIsTUFBTSxFQUNOLFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBc0IsWUFBWSxFQUFpQixVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFROUUsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGVBQW9CO0lBa0R2RCxZQUFnQyxTQUFvQixFQUN4QixNQUFjLEVBQ2pDLFFBQWtCO1FBQ3pCLEtBQUssQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFGQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2pDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFsRGxCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsYUFBUSxHQUFXLENB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LEtBQUs7dUJBQ0wsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLOzRCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLO2tCQUNMLEtBQUs7b0JBQ0wsS0FBSzs2QkFDTCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsTUFBTTtzQkFDTixNQUFNO3FCQUNOLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOzhCQUNuQyxZQUFZLFNBQUMsc0JBQXNCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG4gIEluamVjdCxcbiAgTE9DQUxFX0lELFxuICBJbmplY3RvcixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBWaWV3Q2hpbGQsXG4gIENvbnRlbnRDaGlsZCxcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBjYXRjaEVycm9yLCBtYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5nU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnQG5nLXNlbGVjdC9uZy1zZWxlY3QnO1xuaW1wb3J0IHsgSHR0cEZhY3RvcnlTZXJ2aWNlLCBIVFRQX1NFUlZJQ0UsIEh0dHBCYXNlTW9kZWwsIEh0dHBNZXRob2QgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IFNlbGVjdFBhcmFtTW9kZWwsIFNlbGVjdFJlc3BvbnNlTW9kZWwgfSBmcm9tICcuL3NlbGVjdC5tb2RlbCc7XG5pbXBvcnQgeyBEb1ZhbHVlQWNjZXNzb3IgfSBmcm9tICcuLi9iYXNlL2RvLXZhbHVlLWFjY2Vzc29yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250ZW50U2VsZWN0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUvY29udGVudC1zZWxlY3QuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tc2VsZWN0JyxcbiAgc3R5bGVVcmxzOiBbJy4vZG8tc2VsZWN0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kby1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBEb1NlbGVjdENvbXBvbmVudCBleHRlbmRzIERvVmFsdWVBY2Nlc3Nvcjxhbnk+IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbExhYmVsOiBudW1iZXIgPSAzO1xuICAgIEBJbnB1dCgpIGNvbElucHV0OiBudW1iZXIgPSA5O1xuICAgIEBJbnB1dCgpIGl0ZW1zOiBTZWxlY3RSZXNwb25zZU1vZGVsW10gPSBbXTtcbiAgICBASW5wdXQoKSBtdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBhZGRUYWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBjbG9zZU9uU2VsZWN0OiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBjbGVhcmFibGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIHNlYXJjaGFibGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGhpZGVTZWxlY3RlZDogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgbWluVGVybUxlbmd0aDogbnVtYmVyID0gMjtcbiAgICBASW5wdXQoKSBtYXhUZXJtTGVuZ3RoOiBudW1iZXIgPSA1MDtcbiAgICBASW5wdXQoKSBhcGk6IEh0dHBCYXNlTW9kZWw7XG4gICAgQElucHV0KCkgbGltaXQ6IG51bWJlciA9IDUwO1xuICAgIEBJbnB1dCgpIG9mZnNldE5leHRMb2FkOiBudW1iZXIgPSB0aGlzLmxpbWl0IC0gMzU7XG4gICAgQElucHV0KCkgcXVlcnlQYXJhbTogU2VsZWN0UGFyYW1Nb2RlbFtdO1xuICAgIEBPdXRwdXQoKSBvblNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgb25DbGVhcjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgIEBWaWV3Q2hpbGQoJ3NlbGVjdCcsIHtzdGF0aWM6IGZhbHNlfSkgc2VsZWN0OiBOZ1NlbGVjdENvbXBvbmVudDtcbiAgICBAQ29udGVudENoaWxkKENvbnRlbnRTZWxlY3REaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZn0pIGNvbnRlbnRUZW1wbGF0ZTtcbiAgICBwdWJsaWMgbm90Rm91bmRUZXh0OiBzdHJpbmcgPSAnc2VsZWN0Lm5vdGZvdW5kJztcbiAgICBwdWJsaWMgdHlwZVRvU2VhcmNoVGV4dDogc3RyaW5nID0gJ3NlbGVjdC50eXBlc2VhcmNoJztcbiAgICBwdWJsaWMgdmlydHVhbFNjcm9sbDogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIHBhcmFtU2VhcmNoOiBhbnkgPSB7IHZhbHVlOiB0aGlzLm1pblRlcm1MZW5ndGggfTtcbiAgICBwdWJsaWMgdHlwZWFoZWFkJDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwRmFjdG9yeVNlcnZpY2U7XG4gICAgcHJpdmF0ZSBkZXN0cm95JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIHByaXZhdGUgdG90YWw6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB0b3RhbFJlY29yZDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNkcmVmOiBDaGFuZ2VEZXRlY3RvclJlZjtcbiAgICBwdWJsaWMgX3ZhbHVlOiBhbnk7XG5cbiAgICBnZXQgdmFsdWUoKTogYW55IHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgICAgdGhpcy5vblNlbGVjdC5lbWl0KHZhbHVlKTtcbiAgICAgICAgICBjb25zdCBjb250cm9sID0gdGhpcy5uZ0NvbnRyb2wuY29udHJvbDtcbiAgICAgICAgICBpZiAoY29udHJvbCkge1xuICAgICAgICAgICAgICBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICAgICAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNlbGYoKSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwdWJsaWMgbG9jYWxlOiBzdHJpbmcsXG4gICAgICBwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgICBzdXBlcihuZ0NvbnRyb2wsIGxvY2FsZSk7XG4gICAgICB0aGlzLmh0dHAgPSBpbmplY3Rvci5nZXQoSFRUUF9TRVJWSUNFKTtcbiAgICAgIHRoaXMuY2RyZWYgPSBpbmplY3Rvci5nZXQoQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuICAgIH1cblxuICAgIG9uSW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMucGFyYW1TZWFyY2ggPSB7IHZhbHVlOiB0aGlzLm1pblRlcm1MZW5ndGggfTtcbiAgICAgIGlmICh0aGlzLmFwaSkge1xuICAgICAgICB0aGlzLmZldGNoU2VhcmNoKCkuc3Vic2NyaWJlKChpdGVtczogU2VsZWN0UmVzcG9uc2VNb2RlbFtdKSA9PiB7XG4gICAgICAgICAgdGhpcy5mZXRjaE1vcmUoaXRlbXMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICAgIHRoaXMuZGVzdHJveSQudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMudHlwZWFoZWFkJC5uZXh0KG51bGwpO1xuICAgICAgdGhpcy50eXBlYWhlYWQkLmNvbXBsZXRlKCk7XG4gICAgICB0aGlzLnR5cGVhaGVhZCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBvbk9wZW4oKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5hcGkpIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZykgcmV0dXJuO1xuICAgICAgICB0aGlzLnRvdGFsID0gMDtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICBpZiAoIXRoaXMuc2VhcmNoYWJsZSkge1xuICAgICAgICAgIHRoaXMuZmV0Y2hOb25lKCkuc3Vic2NyaWJlKChpdGVtczogU2VsZWN0UmVzcG9uc2VNb2RlbFtdKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZldGNoTW9yZShpdGVtcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsb3NlKCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuYXBpKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvblNjcm9sbCh7IGVuZCB9LCBzZWFyY2g6IHN0cmluZyk6IHZvaWQge1xuICAgICAgaWYgKCF0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgaWYgKChOdW1iZXIoZW5kKSArIHRoaXMub2Zmc2V0TmV4dExvYWQpID49IHRoaXMudG90YWwgJiYgdGhpcy50b3RhbCA+IDAgICYmIHRoaXMudG90YWwgPCB0aGlzLnRvdGFsUmVjb3JkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VhcmNoYWJsZSAmJiBzZWFyY2gpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZWFoZWFkJC5uZXh0KHNlYXJjaCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hOb25lKCkuc3Vic2NyaWJlKChpdGVtczogU2VsZWN0UmVzcG9uc2VNb2RlbFtdKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZmV0Y2hNb3JlKGl0ZW1zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uU2Nyb2xsVG9FbmQoc2VhcmNoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy5sb2FkaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnRvdGFsIDwgdGhpcy50b3RhbFJlY29yZCkge1xuICAgICAgICAgIGlmICh0aGlzLnNlYXJjaGFibGUgJiYgc2VhcmNoKSB7XG4gICAgICAgICAgICB0aGlzLnR5cGVhaGVhZCQubmV4dChzZWFyY2gpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZldGNoTm9uZSgpLnN1YnNjcmliZSgoaXRlbXM6IFNlbGVjdFJlc3BvbnNlTW9kZWxbXSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmZldGNoTW9yZShpdGVtcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBkb0NsZWFyKCk6IHZvaWQge1xuICAgICAgdGhpcy5vbkNsZWFyLmVtaXQodHJ1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldCgpOiB2b2lkIHtcbiAgICAgIHRoaXMudG90YWwgPSAwO1xuICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmZXRjaE1vcmUoaXRlbXM6IFNlbGVjdFJlc3BvbnNlTW9kZWxbXSk6IHZvaWQge1xuICAgICAgdGhpcy5pdGVtcyA9IFsuLi50aGlzLml0ZW1zLCAuLi5pdGVtc107XG4gICAgICB0aGlzLmNkcmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmV0Y2hTZWFyY2goKTogT2JzZXJ2YWJsZTxTZWxlY3RSZXNwb25zZU1vZGVsW10+IHtcbiAgICAgIHJldHVybiB0aGlzLnR5cGVhaGVhZCQucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKCh0ZXJtOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBpZiAodGVybSkge1xuICAgICAgICAgICAgaWYgKHRlcm0ubGVuZ3RoID4gdGhpcy5tYXhUZXJtTGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSZXF1ZXN0KHRoaXMudG90YWwsIHRlcm0pO1xuICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgfSkpLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZldGNoTm9uZSgpOiBPYnNlcnZhYmxlPFNlbGVjdFJlc3BvbnNlTW9kZWxbXT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVxdWVzdCh0aGlzLnRvdGFsKS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSZXF1ZXN0KG9mZnNldD86IG51bWJlciwgc2VhcmNoPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxTZWxlY3RSZXNwb25zZU1vZGVsW10+IHtcbiAgICAgIGxldCBib2R5OiBhbnk7XG4gICAgICBpZiAodGhpcy5hcGkubWV0aG9kID09PSBIdHRwTWV0aG9kLlBPU1QpIHtcbiAgICAgICAgYm9keSA9IHtcbiAgICAgICAgICBvZmZzZXQ6IG9mZnNldCA/IG9mZnNldCA6IDAsXG4gICAgICAgICAgbGltaXQ6IHRoaXMubGltaXQsXG4gICAgICAgICAga2V5d29yZCA6IHtcbiAgICAgICAgICAgIF9sYWJlbDogc2VhcmNoLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLnF1ZXJ5UGFyYW0pIHtcbiAgICAgICAgICB0aGlzLnF1ZXJ5UGFyYW0uZm9yRWFjaCgocmVzdWx0OiBTZWxlY3RQYXJhbU1vZGVsKSA9PiB7XG4gICAgICAgICAgICBib2R5WydrZXl3b3JkJ11bcmVzdWx0LmtleV0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLkhUVFBfQVVUSCh0aGlzLmFwaSwgYm9keSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvdGFsUmVjb3JkID0gTnVtYmVyKHJlc3BvbnNlLnRvdGFsUmVjb3JkKTtcbiAgICAgICAgICAgIHRoaXMudG90YWwgPSB0aGlzLnRvdGFsICsgTnVtYmVyKHJlc3BvbnNlLnRvdGFsRmlsdGVyZWQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlWydkYXRhJ10gYXMgU2VsZWN0UmVzcG9uc2VNb2RlbFtdO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YoW10pKSk7XG4gICAgfVxuXG4gICAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50LCB0ZXJtOiBzdHJpbmcpIHtcbiAgICAgIGlmIChldmVudC5rZXkpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIFsnREVMRVRFJywgJ0JBQ0tTUEFDRScsICdUQUInLCAnRVNDQVBFJywgJ0VOVEVSJywgJ0RFQ0lNQUwgUE9JTlQnLCAnUEVSSU9EJywgJ0RBU0gnXS5pbmRleE9mKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpKSAhPT0gLTEgfHxcbiAgICAgICAgICAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdBJyAmJiBldmVudC5jdHJsS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ3RybCtBXG4gICAgICAgICAgKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpID09PSAnQycgJiYgZXZlbnQuY3RybEtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IEN0cmwrQ1xuICAgICAgICAgIChldmVudC5rZXkudG9VcHBlckNhc2UoKSA9PT0gJ1YnICYmIGV2ZW50LmN0cmxLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDdHJsK1ZcbiAgICAgICAgICAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdYJyAmJiBldmVudC5jdHJsS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ3RybCtYXG4gICAgICAgICAgKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpID09PSAnQScgJiYgZXZlbnQubWV0YUtleSA9PT0gdHJ1ZSkgfHwgLy8gQ21kK0EgKE1hYylcbiAgICAgICAgICAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdDJyAmJiBldmVudC5tZXRhS2V5ID09PSB0cnVlKSB8fCAvLyBDbWQrQyAoTWFjKVxuICAgICAgICAgIChldmVudC5rZXkudG9VcHBlckNhc2UoKSA9PT0gJ1YnICYmIGV2ZW50Lm1ldGFLZXkgPT09IHRydWUpIHx8IC8vIENtZCtWIChNYWMpXG4gICAgICAgICAgKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpID09PSAnWCcgJiYgZXZlbnQubWV0YUtleSA9PT0gdHJ1ZSkgfHwgLy8gQ21kK1ggKE1hYylcbiAgICAgICAgICAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdFTkQnKSB8fFxuICAgICAgICAgIChldmVudC5rZXkudG9VcHBlckNhc2UoKSA9PT0gJ0hPTUUnKSB8fFxuICAgICAgICAgIChldmVudC5rZXkudG9VcHBlckNhc2UoKSA9PT0gJ0FSUk9XTEVGVCcpIHx8XG4gICAgICAgICAgKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpID09PSAnQVJST1dSSUdIVCcpIHx8XG4gICAgICAgICAgKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpID09PSAnQVJST1dET1dOJykgfHxcbiAgICAgICAgICAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdBUlJPV1VQJykgfHwgKCFldmVudC5rZXkubWF0Y2goL1shQCMkJV4mKigpP1wiOnt9fDw+XFxbXFxdO1xcXFw9fmBdL2cpKSkge1xuICAgICAgICAgICAgaWYgKCEoZXZlbnQuY3RybEtleSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgICBldmVudC5tZXRhS2V5ID09PSB0cnVlIHx8XG4gICAgICAgICAgICAgIGV2ZW50LmFsdEtleSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgICAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdFTkQnKSB8fFxuICAgICAgICAgICAgICAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdIT01FJykgfHxcbiAgICAgICAgICAgICAgKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpID09PSAnQVJST1dMRUZUJykgfHxcbiAgICAgICAgICAgICAgKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpID09PSAnQVJST1dSSUdIVCcpIHx8XG4gICAgICAgICAgICAgIChldmVudC5rZXkudG9VcHBlckNhc2UoKSA9PT0gJ0FSUk9XRE9XTicpIHx8XG4gICAgICAgICAgICAgIChldmVudC5rZXkudG9VcHBlckNhc2UoKSA9PT0gJ0FSUk9XVVAnKSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRlcm0pIHtcbiAgICAgICAgICAgICAgaWYgKHRlcm0ubGVuZ3RoID4gdGhpcy5tYXhUZXJtTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxufVxuIl19