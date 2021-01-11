import { RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthTokenService } from './auth-token.service';
export declare class UnauthorizeGuardService implements CanActivate {
    private router;
    private authTokenService;
    constructor(router: Router, authTokenService: AuthTokenService);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>;
}
