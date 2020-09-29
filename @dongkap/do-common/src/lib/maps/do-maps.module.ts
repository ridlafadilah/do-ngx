import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NbCardModule } from '@nebular/theme';
import { DoMapsLeafletComponent } from './leaflet/do-maps-leaflet.component';
import { DoMapsAgmComponent } from './agm/do-maps-agm.component';

export const components = [
  DoMapsLeafletComponent,
  DoMapsAgmComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB3ctAGo_z3FNOVWquijMGBgesM1XlRa-Y',
      libraries: ['places'],
    }),
    LeafletModule.forRoot(),
    NbCardModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
})
export class DoMapsModule { }
