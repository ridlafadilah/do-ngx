import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageMaskService } from './services/storage-mask.service';
import { STORAGE_SERVICE } from './providers/storage.provider';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [],
  declarations: [],
})
export class DoStorageModule {
  static forRoot(): ModuleWithProviders<DoStorageModule> {
    return {
      ngModule: DoStorageModule,
      providers: [
        { provide: STORAGE_SERVICE, useClass: StorageMaskService },
      ],
    };
  }
}
