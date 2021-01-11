import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SettingsIndexedDBService } from '../storage/settings-indexeddb.service';
export declare class AuthLanguageService {
    private locale;
    private settingsIndexedDB;
    constructor(locale: string, settingsIndexedDB: SettingsIndexedDBService);
    getLocale(req: HttpRequest<any>): Observable<HttpRequest<any>>;
}
