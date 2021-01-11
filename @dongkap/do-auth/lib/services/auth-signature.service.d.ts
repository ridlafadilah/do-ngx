import { HttpRequest } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { SecurityResourceModel } from '@dongkap/do-core';
import { EncryptionService } from '@dongkap/do-core';
import { AuthIndexedDBService } from '../storage/auth-indexeddb.service';
export declare class AuthSignatureService {
    private translate;
    private enc;
    private oauthResource;
    private authStorage;
    constructor(translate: TranslateService, enc: EncryptionService, oauthResource: SecurityResourceModel, authStorage: AuthIndexedDBService);
    signHeaders(req: HttpRequest<any>): Observable<HttpRequest<any>>;
    key(): Observable<string>;
    timestamp(): string;
    date(): string;
    signature(url: string): Observable<string>;
    private getPath;
}
