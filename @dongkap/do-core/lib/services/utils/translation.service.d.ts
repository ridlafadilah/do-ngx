import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export declare class TranslationService extends TranslateHttpLoader {
    constructor(http: HttpClient, prefix?: string, suffix?: string);
    getTranslation(lang: string): Observable<any>;
}
