import { NgModule } from '@angular/core';

import { DoBaseModule } from './base/do-base.module';
import { DoCalendarModule } from './calendar/do-calendar.module';
import { DoChartsGraphModule } from './charts/do-charts-graph.module';
import { DoCheckBoxModule } from './checkbox/do-checkbox.module';
import { DoEditorModule } from './editor/do-editor.module';
import { DoInputModule } from './input/do-input.module';
import { DoMapsModule } from './maps/do-maps.module';
import { DoProgressModule } from './progress/do-progress.module';
import { DoRadioModule } from './radio/do-radio.module';
import { DoSelectModule } from './select/do-select.module';
import { DoSpinnerModule } from './spinner/do-spinner.module';
import { DoTableModule } from './table/do-table.module';
import { DoDatePickerModule } from './datepicker/do-datepicker.module';
import { DoButtonModule } from './button/do-button.module';
import { DoImageModule } from './image/do-image.module';
import { DoTreeModule } from './tree/do-tree.module';
import { DoLabelModule } from './label/do-label.module';

const COMMON_MODULES = [
  DoBaseModule,
  DoInputModule,
  DoButtonModule,
  DoDatePickerModule,
  DoCheckBoxModule,
  DoRadioModule,
  DoEditorModule,
  DoCalendarModule,
  DoChartsGraphModule,
  DoMapsModule,
  DoProgressModule,
  DoSelectModule,
  DoSpinnerModule,
  DoTableModule,
  DoImageModule,
  DoTreeModule,
  DoLabelModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...COMMON_MODULES,
  ],
  exports: [
    ...COMMON_MODULES,
  ],
})
export class DoCommonModule {}
