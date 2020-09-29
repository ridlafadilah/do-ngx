import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DoToastrService } from './services/do-toastr.service';

export const components = [
];

export const TOASTR_PROVIDERS = [
  DoToastrService,
];

@NgModule({
  imports: [
    FormsModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
})
export class DoToastrModule {
  static forRoot(): ModuleWithProviders<DoToastrModule> {
    return {
      ngModule: DoToastrModule,
      providers: [
        ...TOASTR_PROVIDERS,
      ],
    };
  }
}
