import { OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Idle } from '@ng-idle/core';
import { APIModel, HttpFactoryService, SecurityResourceModel } from '@dongkap/do-core';
import { AuthIndexedDBService } from '../../storage/auth-indexeddb.service';
import { ProfileIndexedDBService } from '../../storage/profile-indexeddb.service';
import { SettingsIndexedDBService } from '../../storage/settings-indexeddb.service';
export declare class OAuth2CallbackComponent implements OnDestroy {
    private router;
    private httpBaseService;
    private oauthResource;
    private apiPath;
    private authIndexedDB;
    private profileIndexedDB;
    private settingsIndexedDB;
    private idle;
    protected destroy$: Subject<any>;
    constructor(router: Router, route: ActivatedRoute, httpBaseService: HttpFactoryService, oauthResource: SecurityResourceModel, apiPath: APIModel, authIndexedDB: AuthIndexedDBService, profileIndexedDB: ProfileIndexedDBService, settingsIndexedDB: SettingsIndexedDBService, idle: Idle);
    ngOnDestroy(): void;
    private extractToken;
    private getAuthBody;
    private getAuthHeader;
}
