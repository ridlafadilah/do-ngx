import { ModuleWithProviders } from '@angular/core';
import { DoToastrService } from './services/do-toastr.service';
export declare const TOASTR_COMPONENTS: any[];
export declare const TOASTR_PROVIDERS: (typeof DoToastrService)[];
export declare class DoToastrModule {
    static forRoot(): ModuleWithProviders<DoToastrModule>;
}
