import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DoValueAccessor } from '../../base/do-value-accessor.component';
export class DoInputCurrencyComponent extends DoValueAccessor {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.minLength = 0;
        this.maxLength = 100;
        this.prefix = 'Rp';
        this.decimalSeparator = '.';
        this.thousandsSeparator = ',';
        this.suffix = ',-';
        this.padding = 5;
    }
    writeValue(value) {
        this._value = value ? this.transform(value) : value;
        this.onChange(this.value);
        const control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsTouched();
            control.markAsDirty();
        }
    }
    transform(value) {
        const { val, frac } = this.toNumber(value);
        const v = val.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return this.prefix.concat(' ').concat(v).concat(frac).concat(this.suffix);
    }
    toNumber(value) {
        const [val = '', frac = ''] = (value || '').split(this.decimalSeparator);
        let fraction = '';
        if (frac) {
            if (parseInt(frac, 10) > 0) {
                fraction = this.decimalSeparator + this.pad(frac, this.padding).substring(0, this.padding);
            }
        }
        return { val: val, frac: fraction };
    }
    pad(val, size) {
        while (val.length < size)
            val = val + '0';
        return val;
    }
}
DoInputCurrencyComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
DoInputCurrencyComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-input-currency',
                template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"text\"\n      id=\"{{name}}\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled || skeleton\"\n      [ngClass]=\"{\n        'skeleton': skeleton,\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.toNumber)\"\n      (change)=\"onChange($event.target.toNumber)\"\n      (blur)=\"onTouched($event.target.toNumber)\"\n      [(ngModel)]=\"value\"\n      doCurrency\n      [prefix]=\"prefix\"\n      [decimal]=\"decimalSeparator\"\n      [thousand]=\"thousandsSeparator\"\n      [suffix]=\"suffix\"\n      [padding]=\"padding\"\n      #input nbInput fullWidth>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            },] }
];
DoInputCurrencyComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
DoInputCurrencyComponent.propDecorators = {
    placeholder: [{ type: Input }],
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    minLength: [{ type: Input }],
    maxLength: [{ type: Input }],
    prefix: [{ type: Input, args: ['prefix',] }],
    decimalSeparator: [{ type: Input, args: ['decimal',] }],
    thousandsSeparator: [{ type: Input, args: ['thousand',] }],
    suffix: [{ type: Input, args: ['suffix',] }],
    padding: [{ type: Input, args: ['padding',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8taW5wdXQtY3VycmVuY3kuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2lucHV0L2N1cnJlbmN5L2RvLWlucHV0LWN1cnJlbmN5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQVF6RSxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZUFBdUI7SUFZbkUsWUFBZ0MsU0FBb0IsRUFDeEIsTUFBYztRQUN4QyxLQUFLLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBREMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVhqQyxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixjQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ2hCLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFDckIscUJBQWdCLEdBQVcsR0FBRyxDQUFDO1FBQzlCLHVCQUFrQixHQUFXLEdBQUcsQ0FBQztRQUNuQyxXQUFNLEdBQVcsSUFBSSxDQUFDO1FBQ3JCLFlBQU8sR0FBVyxDQUFDLENBQUM7SUFLdEMsQ0FBQztJQUVNLFVBQVUsQ0FBQyxLQUFVO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDdkMsSUFBSSxPQUFPLEVBQUU7WUFDVCxPQUFPLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUNqQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEIsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFLO1FBQ2IsTUFBTSxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDeEUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ3BCLE1BQU0sQ0FBRSxHQUFHLEdBQUcsRUFBRSxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDMUUsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDMUIsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDNUY7U0FDRjtRQUNELE9BQU8sRUFBQyxHQUFHLEVBQUcsR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU8sR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJO1FBQ25CLE9BQU8sR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJO1lBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDMUMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7WUFwQzBDLFNBQVMsdUJBQXZDLFFBQVEsWUFBSSxJQUFJO3lDQUMxQixNQUFNLFNBQUMsU0FBUzs7O1lBbkJwQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFFN0IsMjVDQUFpRDtnQkFDakQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7WUFSUSxTQUFTLHVCQXFCSCxRQUFRLFlBQUksSUFBSTt5Q0FDMUIsTUFBTSxTQUFDLFNBQVM7OzswQkFabEIsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3FCQUNMLEtBQUssU0FBQyxRQUFROytCQUNkLEtBQUssU0FBQyxTQUFTO2lDQUNmLEtBQUssU0FBQyxVQUFVO3FCQUNoQixLQUFLLFNBQUMsUUFBUTtzQkFDZCxLQUFLLFNBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPcHRpb25hbCwgU2VsZiwgSW5qZWN0LCBMT0NBTEVfSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERvVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4uLy4uL2Jhc2UvZG8tdmFsdWUtYWNjZXNzb3IuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8taW5wdXQtY3VycmVuY3knLFxuICBzdHlsZVVybHM6IFsnLi9kby1pbnB1dC1jdXJyZW5jeS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZG8taW5wdXQtY3VycmVuY3kuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBEb0lucHV0Q3VycmVuY3lDb21wb25lbnQgZXh0ZW5kcyBEb1ZhbHVlQWNjZXNzb3I8c3RyaW5nPiB7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbExhYmVsOiBudW1iZXIgPSAzO1xuICBASW5wdXQoKSBjb2xJbnB1dDogbnVtYmVyID0gOTtcbiAgQElucHV0KCkgbWluTGVuZ3RoOiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBtYXhMZW5ndGg6IG51bWJlciA9IDEwMDtcbiAgQElucHV0KCdwcmVmaXgnKSBwcmVmaXg6IHN0cmluZyA9ICdScCc7XG4gIEBJbnB1dCgnZGVjaW1hbCcpIGRlY2ltYWxTZXBhcmF0b3I6IHN0cmluZyA9ICcuJztcbiAgQElucHV0KCd0aG91c2FuZCcpIHRob3VzYW5kc1NlcGFyYXRvcjogc3RyaW5nID0gJywnO1xuICBASW5wdXQoJ3N1ZmZpeCcpIHN1ZmZpeDogc3RyaW5nID0gJywtJztcbiAgQElucHV0KCdwYWRkaW5nJykgcGFkZGluZzogbnVtYmVyID0gNTtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2VsZigpIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwdWJsaWMgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihuZ0NvbnRyb2wsIGxvY2FsZSk7XG4gIH1cblxuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZSA/IHRoaXMudHJhbnNmb3JtKHZhbHVlKSA6IHZhbHVlO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMubmdDb250cm9sLmNvbnRyb2w7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgICBjb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgfVxuICB9XG5cbiAgdHJhbnNmb3JtKHZhbHVlKTogc3RyaW5nIHtcbiAgICBjb25zdCB7dmFsLCBmcmFjfSA9IHRoaXMudG9OdW1iZXIodmFsdWUpO1xuICAgIGNvbnN0IHYgPSB2YWwucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgdGhpcy50aG91c2FuZHNTZXBhcmF0b3IpO1xuICAgIHJldHVybiB0aGlzLnByZWZpeC5jb25jYXQoJyAnKS5jb25jYXQodikuY29uY2F0KGZyYWMpLmNvbmNhdCh0aGlzLnN1ZmZpeCk7XG4gIH1cblxuICB0b051bWJlcih2YWx1ZTogc3RyaW5nKToge3ZhbDogc3RyaW5nLCBmcmFjOiBzdHJpbmd9IHtcbiAgICBjb25zdCBbIHZhbCA9ICcnLCBmcmFjID0gJyddID0gKHZhbHVlIHx8ICcnKS5zcGxpdCh0aGlzLmRlY2ltYWxTZXBhcmF0b3IpO1xuICAgIGxldCBmcmFjdGlvbiA9ICcnO1xuICAgIGlmIChmcmFjKSB7XG4gICAgICBpZiAocGFyc2VJbnQoZnJhYywgMTApID4gMCkge1xuICAgICAgICBmcmFjdGlvbiA9IHRoaXMuZGVjaW1hbFNlcGFyYXRvciArIHRoaXMucGFkKGZyYWMsIHRoaXMucGFkZGluZykuc3Vic3RyaW5nKDAsIHRoaXMucGFkZGluZyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7dmFsIDogdmFsLCBmcmFjOiBmcmFjdGlvbn07XG4gIH1cblxuICBwcml2YXRlIHBhZCh2YWwsIHNpemUpOiBzdHJpbmcge1xuICAgIHdoaWxlICh2YWwubGVuZ3RoIDwgc2l6ZSkgdmFsID0gdmFsICsgJzAnO1xuICAgIHJldHVybiB2YWw7XG4gIH1cbn1cbiJdfQ==