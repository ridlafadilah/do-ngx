import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthResult, NbAuthService } from '@nebular/auth';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'do-oauth2-callback',
  template: '',
})
export class OAuth2CallbackComponent implements OnDestroy {

  private destroy$ = new Subject<void>();

  constructor(private router: Router) {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
