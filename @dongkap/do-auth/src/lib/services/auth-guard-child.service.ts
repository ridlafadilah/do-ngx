import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { CanActivateChild } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { EncryptionService } from '@dongkap/do-core';
import { AuthTokenService } from './auth-token.service';
import { AuthIndexedDBService } from '../storage/auth-indexeddb.service';

@Injectable()
export class AuthGuardChildService implements CanActivateChild {
    constructor(
        private router: Router,
        private authTokenService: AuthTokenService,
        private enc: EncryptionService,
        private storage: AuthIndexedDBService) {}

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const result$: Subject<boolean> = new Subject<boolean>();
        this.authTokenService.isLogin().then((value: boolean) => {
            result$.next(value);
            if (route.data) {
                Promise.all([
                    this.storage.getEnc('menus'),
                    this.storage.getEnc('extras'),
                ]).then((strg: string[]) => {
                    if (!(strg[0].includes(route.data['code']) || strg[1].includes(route.data['code']))) {
                        this.router.navigate(['/app/home']);
                    }
                    return result$.asObservable();
                });
            }
            if (!value) {
                this.router.navigate(['/auth']);
            }
        });
        return result$.asObservable();
    }

}
