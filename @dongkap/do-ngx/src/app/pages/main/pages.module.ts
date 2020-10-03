import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { MiscellaneousModule } from '@dongkap/do-auth';
import { DoThemeModule } from '@dongkap/do-theme';
import { DoExtraModule } from '@dongkap/do-extra';
import { DoExerciseModule } from '@dongkap/do-exercise';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    DoThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    DoExtraModule,
    DoExerciseModule
  ],
  declarations: [
    PagesComponent
  ],
})
export class PagesModule {
}
