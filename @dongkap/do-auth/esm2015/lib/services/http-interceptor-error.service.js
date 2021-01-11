import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Subject } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { HttpErrorHandler } from './http-error.handler';
import { AuthTokenService } from './auth-token.service';
import { AuthSignatureService } from './auth-signature.service';
import { AuthIndexedDBService } from '../storage/auth-indexeddb.service';
export class HttpInterceptorErrorService extends HttpErrorHandler {
    constructor(translate, authToken, authStorage, authSignature) {
        super(translate, authToken, authStorage, authSignature);
        this.translate = translate;
        this.authToken = authToken;
        this.authStorage = authStorage;
        this.authSignature = authSignature;
        this.destroy$ = new Subject();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    intercept(req, next) {
        return next.handle(req).pipe(catchError(error => {
            if (error instanceof HttpErrorResponse) {
                return this.errorHandler(error, req, next);
            }
            else {
                return throwError(error);
            }
        })).pipe(takeUntil(this.destroy$));
    }
}
HttpInterceptorErrorService.ctorParameters = () => [
    { type: TranslateService },
    { type: AuthTokenService },
    { type: AuthIndexedDBService },
    { type: AuthSignatureService }
];
HttpInterceptorErrorService.decorators = [
    { type: Injectable }
];
HttpInterceptorErrorService.ctorParameters = () => [
    { type: TranslateService },
    { type: AuthTokenService },
    { type: AuthIndexedDBService },
    { type: AuthSignatureService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1pbnRlcmNlcHRvci1lcnJvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9odHRwLWludGVyY2VwdG9yLWVycm9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF3RCxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9HLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHekUsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGdCQUFnQjtJQUU3RCxZQUNXLFNBQTJCLEVBQzNCLFNBQTJCLEVBQzNCLFdBQWlDLEVBQ2pDLGFBQW1DO1FBQzFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUpqRCxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7UUFDakMsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBSXRDLGFBQVEsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQUZwRCxDQUFDO0lBSUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQXFCLEVBQUUsSUFBaUI7UUFDOUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDeEIsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2YsSUFBSSxLQUFLLFlBQVksaUJBQWlCLEVBQUU7Z0JBQ3BDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzlDO2lCQUFNO2dCQUNILE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzVCO1FBQ1QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQXhCcUIsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNkLG9CQUFvQjtZQUNsQixvQkFBb0I7OztZQVBqRCxVQUFVOzs7WUFORixnQkFBZ0I7WUFFaEIsZ0JBQWdCO1lBRWhCLG9CQUFvQjtZQURwQixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0LCBIdHRwSGFuZGxlciwgSHR0cEV2ZW50LCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEVycm9ySGFuZGxlciB9IGZyb20gJy4vaHR0cC1lcnJvci5oYW5kbGVyJztcbmltcG9ydCB7IEF1dGhUb2tlblNlcnZpY2UgfSBmcm9tICcuL2F1dGgtdG9rZW4uc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2lnbmF0dXJlU2VydmljZSB9IGZyb20gJy4vYXV0aC1zaWduYXR1cmUuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoSW5kZXhlZERCU2VydmljZSB9IGZyb20gJy4uL3N0b3JhZ2UvYXV0aC1pbmRleGVkZGIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIdHRwSW50ZXJjZXB0b3JFcnJvclNlcnZpY2UgZXh0ZW5kcyBIdHRwRXJyb3JIYW5kbGVyIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yLCBPbkRlc3Ryb3kge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBhdXRoVG9rZW46IEF1dGhUb2tlblNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBhdXRoU3RvcmFnZTogQXV0aEluZGV4ZWREQlNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBhdXRoU2lnbmF0dXJlOiBBdXRoU2lnbmF0dXJlU2VydmljZSkge1xuICAgICAgICBzdXBlcih0cmFuc2xhdGUsIGF1dGhUb2tlbiwgYXV0aFN0b3JhZ2UsIGF1dGhTaWduYXR1cmUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVzdHJveSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xuICAgICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgICAgdGhpcy5kZXN0cm95JC51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKS5waXBlKFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JIYW5kbGVyKGVycm9yLCByZXEsIG5leHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0pKS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSk7XG4gICAgfVxuXG59XG4iXX0=