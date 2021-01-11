import { NgControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NbCalendarSize, NbDateService } from '@nebular/theme';
import { DoValueAccessor } from '../base/do-value-accessor.component';
export declare class DoDatePickerComponent extends DoValueAccessor<Date> {
    dateService: NbDateService<Date>;
    locale: string;
    private datePipe;
    placeholder: string;
    colLabel: number;
    colInput: number;
    min: Date;
    max: Date;
    size: NbCalendarSize;
    constructor(ngControl: NgControl, dateService: NbDateService<Date>, locale: string, datePipe: DatePipe);
    writeValue(value: any): void;
    private parse;
}
