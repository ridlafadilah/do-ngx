import { NgModule } from '@angular/core';

import { NgxBaseModule } from './base/ngx-base.module';
import { NgxCalendarModule } from './calendar/ngx-calendar.module';
import { NgxChartsGraphModule } from './charts/ngx-charts-graph.module';
import { NgxCheckBoxModule } from './checkbox/ngx-checkbox.module';
import { NgxEditorModule } from './editor/ngx-editor.module';
import { NgxInputModule } from './input/ngx-input.module';
import { NgxMapsModule } from './maps/ngx-maps.module';
import { NgxProgressModule } from './progress/ngx-progress.module';
import { NgxRadioModule } from './radio/ngx-radio.module';
import { NgxSelectModule } from './select/ngx-select.module';
import { NgxSpinnerModule } from './spinner/ngx-spinner.module';
import { NgxTableModule } from './table/ngx-table.module';
import { NgxDatePickerModule } from './datepicker/ngx-datepicker.module';
import { NgxButtonModule } from './button/ngx-button.module';
import { NgxImageModule } from './image/ngx-image.module';
import { NgxTreeModule } from './tree/ngx-tree.module';
import { NgxLabelModule } from './label/ngx-label.module';

const modules = [
  NgxBaseModule,
  NgxInputModule,
  NgxButtonModule,
  NgxDatePickerModule,
  NgxCheckBoxModule,
  NgxRadioModule,
  NgxEditorModule,
  NgxCalendarModule,
  NgxChartsGraphModule,
  NgxMapsModule,
  NgxProgressModule,
  NgxSelectModule,
  NgxSpinnerModule,
  NgxTableModule,
  NgxImageModule,
  NgxTreeModule,
  NgxLabelModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
  ],
})
export class NgxCommonModule {}
