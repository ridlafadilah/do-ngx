import { RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { EncryptionService } from '@dongkap/do-core';
import { AuthTokenService } from './auth-token.service';
import { AuthIndexedDBService } from '../storage/auth-indexeddb.service';
export declare class AuthGuardChildService implements CanActivateChild {
    private router;
    private authTokenService;
    private enc;
    private storage;
    constructor(router: Router, authTokenService: AuthTokenService, enc: EncryptionService, storage: AuthIndexedDBService);
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>;
}
