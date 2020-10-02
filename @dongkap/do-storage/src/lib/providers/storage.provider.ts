import { InjectionToken } from '@angular/core';
import { StorageFactoryService } from '../services/storage-factory.service';

export const STORAGE_SERVICE: InjectionToken<StorageFactoryService> =
new InjectionToken<StorageFactoryService>('Storage Factory Service');
