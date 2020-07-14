import {
  Component,
  Input,
  ViewEncapsulation,
  Optional,
  Self,
  Inject,
  LOCALE_ID,
  Injector,
  ChangeDetectorRef,
  OnDestroy,
  Output,
  EventEmitter,
  ViewChild,
  ContentChild,
  TemplateRef,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxValueAccessor } from '../base/ngx-value-accessor.component';
import { Observable, Subject, of } from 'rxjs';
import { switchMap, catchError, map, takeUntil } from 'rxjs/operators';
import { HttpFactoryService, HTTP_SERVICE, HttpBaseModel, HttpMethod } from '@dongkap/ngx-core';
import { SelectParamModel, SelectResponseModel } from './select.model';
import { NgSelectComponent } from '@ng-select/ng-select';
import { ContentSelectDirective } from './directive/content-select.directive';

@Component({
  selector: 'ngx-select',
  styleUrls: ['./ngx-select.component.scss'],
  templateUrl: './ngx-select.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class NgxSelectComponent extends NgxValueAccessor<any> implements OnDestroy {
    @Input() placeholder: string;
    @Input() colLabel: number = 3;
    @Input() colInput: number = 9;
    @Input() items: SelectResponseModel[] = [];
    @Input() multiple: boolean = false;
    @Input() loading: boolean = false;
    @Input() addTag: boolean = false;
    @Input() closeOnSelect: boolean = true;
    @Input() clearable: boolean = true;
    @Input() searchable: boolean = true;
    @Input() hideSelected: boolean = true;
    @Input() minTermLength: number = 2;
    @Input() maxTermLength: number = 50;
    @Input() api: HttpBaseModel;
    @Input() limit: number = 50;
    @Input() offsetNextLoad: number = this.limit - 35;
    @Input() queryParam: SelectParamModel[];
    @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();
    @Output() onClear: EventEmitter<boolean> = new EventEmitter<boolean>();
    @ViewChild('select', {static: false}) select: NgSelectComponent;
    @ContentChild(ContentSelectDirective, {static: false, read: TemplateRef}) contentTemplate;
    public notFoundText: string = 'select.notfound';
    public typeToSearchText: string = 'select.typesearch';
    public virtualScroll: boolean = true;
    public paramSearch: any = { value: this.minTermLength };
    public typeahead$: Subject<string> = new Subject<string>();
    protected http: HttpFactoryService;
    private destroy$: Subject<any> = new Subject<any>();
    private total: number = 0;
    private totalRecord: number = 0;
    private cdref: ChangeDetectorRef;
    public _value: any;

    get value(): any { return this._value; }

    set value(value: any) {
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

    constructor(@Optional() @Self() ngControl: NgControl,
      @Inject(LOCALE_ID) public locale: string,
      public injector: Injector) {
      super(ngControl, locale);
      this.http = injector.get(HTTP_SERVICE);
      this.cdref = injector.get(ChangeDetectorRef);
    }

    onInit(): void {
      this.paramSearch = { value: this.minTermLength };
      if (this.api) {
        this.fetchSearch().subscribe((items: SelectResponseModel[]) => {
          this.fetchMore(items);
        });
      }
    }

    ngOnDestroy(): void {
      this.destroy$.next(true);
      this.destroy$.complete();
      this.destroy$.unsubscribe();
      this.typeahead$.next(null);
      this.typeahead$.complete();
      this.typeahead$.unsubscribe();
    }

    onOpen(): void {
      if (this.api) {
        if (this.loading) return;
        this.total = 0;
        this.items = [];
        if (!this.searchable) {
          this.fetchNone().subscribe((items: SelectResponseModel[]) => {
            this.fetchMore(items);
          });
        }
      }
    }

    onClose(): void {
      if (this.api) {
        this.reset();
      }
    }

    onScroll({ end }, search: string): void {
      if (!this.loading) {
        if ((Number(end) + this.offsetNextLoad) >= this.total && this.total > 0  && this.total < this.totalRecord) {
          if (this.searchable && search) {
            this.typeahead$.next(search);
          } else {
            this.fetchNone().subscribe((items: SelectResponseModel[]) => {
              this.fetchMore(items);
            });
          }
        }
      }
    }

    onScrollToEnd(search: string): void {
      if (!this.loading) {
        if (this.total < this.totalRecord) {
          if (this.searchable && search) {
            this.typeahead$.next(search);
          } else {
            this.fetchNone().subscribe((items: SelectResponseModel[]) => {
              this.fetchMore(items);
            });
          }
        }
      }
    }

    doClear(): void {
      this.onClear.emit(true);
    }

    private reset(): void {
      this.total = 0;
      this.items = [];
      this.loading = false;
    }

    private fetchMore(items: SelectResponseModel[]): void {
      this.items = [...this.items, ...items];
      this.cdref.detectChanges();
      this.loading = false;
    }

    private fetchSearch(): Observable<SelectResponseModel[]> {
      return this.typeahead$.pipe(
        switchMap((term: string) => {
          if (term) {
            if (term.length > this.maxTermLength) {
              return of([]);
            }
            return this.getRequest(this.total, term);
          } else
            return of([]);
        })).pipe(takeUntil(this.destroy$));
    }

    private fetchNone(): Observable<SelectResponseModel[]> {
      return this.getRequest(this.total).pipe(takeUntil(this.destroy$));
    }

    private getRequest(offset?: number, search?: string): Observable<SelectResponseModel[]> {
      let body: any;
      if (this.api.method === HttpMethod.POST) {
        body = {
          offset: offset ? offset : 0,
          limit: this.limit,
          keyword : {
            _label: search,
          },
        };
        if (this.queryParam) {
          this.queryParam.forEach((result: SelectParamModel) => {
            body['keyword'][result.key] = result.value;
          });
        }
      }
      this.loading = true;
      return this.http.HTTP_AUTH(this.api, body)
        .pipe(
          map((response: any) => {
            this.totalRecord = Number(response.totalRecord);
            this.total = this.total + Number(response.totalFiltered);
            return (<SelectResponseModel[]> response['data']);
          }),
          catchError(() => of([])));
    }

    onKeyDown(event: KeyboardEvent, term: string) {
      if (
          [46, 8, 27, 13, 32, 110, 190, 189, 16, 20, 18, 222, 191].indexOf(event.keyCode) !== -1 ||
          (event.keyCode === 65 && event.ctrlKey === true) || // Allow: Ctrl+A
          (event.keyCode === 67 && event.ctrlKey === true) || // Allow: Ctrl+C
          (event.keyCode === 86 && event.ctrlKey === true) || // Allow: Ctrl+V
          (event.keyCode === 88 && event.ctrlKey === true) || // Allow: Ctrl+X
          (event.keyCode === 65 && event.metaKey === true) || // Cmd+A (Mac)
          (event.keyCode === 67 && event.metaKey === true) || // Cmd+C (Mac)
          (event.keyCode === 86 && event.metaKey === true) || // Cmd+V (Mac)
          (event.keyCode === 88 && event.metaKey === true) || // Cmd+X (Mac)
          (event.keyCode >= 35 && event.keyCode <= 39) || // Home, End, Left, Right
          (event.keyCode >= 65 && event.keyCode <= 90) ||
          (!event.shiftKey && (event.keyCode >= 48 && event.keyCode <= 57)) ||
          (event.keyCode >= 96 && event.keyCode <= 105)) {
          if (((!event.ctrlKey && !event.altKey && !event.metaKey) &&
              (([46, 8, 32].indexOf(event.keyCode) !== -1) ||
              (event.keyCode >= 65 && event.keyCode <= 90) ||
              (event.keyCode >= 48 && event.keyCode <= 57) ||
              (event.keyCode >= 96 && event.keyCode <= 105))) ||
              ((event.ctrlKey || event.metaKey) && event.keyCode === 90) ||
              ((event.ctrlKey || event.metaKey) && event.keyCode === 89)) {
            this.reset();
          }
          if (term) {
            if (term.length > this.maxTermLength) {
              return false;
            }
          }
          return true;
      }
      return false;
    }

}
