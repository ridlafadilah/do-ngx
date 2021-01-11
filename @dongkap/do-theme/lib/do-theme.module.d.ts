import { ModuleWithProviders } from '@angular/core';
import { NbLayoutModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HeaderComponent } from './components/header/header.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { PluralPipe } from './pipes/plural.pipe';
import { RoundPipe } from './pipes/round.pipe';
import { OneColumnLayoutComponent } from './layouts/one-column/one-column.layout';
import { RouterModule } from '@angular/router';
export declare const NB_MODULES: (typeof RouterModule | typeof NbLayoutModule | typeof NbIconModule | typeof NbEvaIconsModule)[];
export declare const THEME_COMPONENTS: (typeof HeaderComponent | typeof OneColumnLayoutComponent)[];
export declare const THEME_PIPES: (typeof CapitalizePipe | typeof PluralPipe | typeof RoundPipe)[];
export declare class DoThemeModule {
    static forRoot(): ModuleWithProviders<DoThemeModule>;
}
