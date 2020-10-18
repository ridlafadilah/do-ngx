import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthIndexedDBService } from '../../storage/auth-indexeddb.service';

@Component({
  selector: 'do-oauth2-callback',
  template: '',
})
export class OAuth2CallbackComponent implements OnDestroy {

  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    route: ActivatedRoute,
    authIndexedDB: AuthIndexedDBService) {
    if (route.snapshot.queryParams['access_token']) {
      console.log(route.snapshot.queryParams['access_token']);
      authIndexedDB.putEnc('access_token', route.snapshot.queryParams['access_token']);
      this.router.navigate(['/app/home']);
    } else if (route.snapshot.queryParams['error']) {
      console.log(route.snapshot.queryParams['error']);
      this.router.navigate(['/auth'], { queryParams: { error: route.snapshot.queryParams['error'] }});
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
