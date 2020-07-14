import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxToastrService } from './services/ngx-toastr.service';

export const components = [
];

export const TOASTR_PROVIDERS = [
  NgxToastrService,
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
export class NgxToastrModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NgxToastrModule,
      providers: [
        ...TOASTR_PROVIDERS,
      ],
    };
  }
}
