import { RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { USER_INFO, UserInfo } from '@dongkap/do-core';
import { AuthTokenService } from './auth-token.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private router: Router, private authTokenService: AuthTokenService,
        @Inject(USER_INFO) private authService: UserInfo) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const result$: Subject<boolean> = new Subject<boolean>();
        this.authTokenService.isLogin().then((value: boolean) => {
            result$.next(value);
            if (!value) {
                this.router.navigate(['/auth']);
            } else {
                if (state.url !== '/auth/logout') this.authService.loadPhotoUser();
            }
        });
        return result$.asObservable();
    }

}
