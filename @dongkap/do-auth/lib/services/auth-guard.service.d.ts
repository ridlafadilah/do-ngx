import { RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInfo } from '@dongkap/do-core';
import { AuthTokenService } from './auth-token.service';
export declare class AuthGuardService implements CanActivate {
    private router;
    private authTokenService;
    private authService;
    constructor(router: Router, authTokenService: AuthTokenService, authService: UserInfo);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>;
}
