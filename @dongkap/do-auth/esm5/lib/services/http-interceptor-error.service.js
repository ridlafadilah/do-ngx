import { __extends } from "tslib";
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
var HttpInterceptorErrorService = /** @class */ (function (_super) {
    __extends(HttpInterceptorErrorService, _super);
    function HttpInterceptorErrorService(translate, authToken, authStorage, authSignature) {
        var _this = _super.call(this, translate, authToken, authStorage, authSignature) || this;
        _this.translate = translate;
        _this.authToken = authToken;
        _this.authStorage = authStorage;
        _this.authSignature = authSignature;
        _this.destroy$ = new Subject();
        return _this;
    }
    HttpInterceptorErrorService.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    };
    HttpInterceptorErrorService.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(catchError(function (error) {
            if (error instanceof HttpErrorResponse) {
                return _this.errorHandler(error, req, next);
            }
            else {
                return throwError(error);
            }
        })).pipe(takeUntil(this.destroy$));
    };
    HttpInterceptorErrorService.ctorParameters = function () { return [
        { type: TranslateService },
        { type: AuthTokenService },
        { type: AuthIndexedDBService },
        { type: AuthSignatureService }
    ]; };
    HttpInterceptorErrorService.decorators = [
        { type: Injectable }
    ];
    HttpInterceptorErrorService.ctorParameters = function () { return [
        { type: TranslateService },
        { type: AuthTokenService },
        { type: AuthIndexedDBService },
        { type: AuthSignatureService }
    ]; };
    return HttpInterceptorErrorService;
}(HttpErrorHandler));
export { HttpInterceptorErrorService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1pbnRlcmNlcHRvci1lcnJvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9odHRwLWludGVyY2VwdG9yLWVycm9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBd0QsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRyxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXpFO0lBQ2lELCtDQUFnQjtJQUU3RCxxQ0FDVyxTQUEyQixFQUMzQixTQUEyQixFQUMzQixXQUFpQyxFQUNqQyxhQUFtQztRQUo5QyxZQUtJLGtCQUFNLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGFBQWEsQ0FBQyxTQUMxRDtRQUxVLGVBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLGVBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLGlCQUFXLEdBQVgsV0FBVyxDQUFzQjtRQUNqQyxtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFJdEMsY0FBUSxHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDOztJQUZwRCxDQUFDO0lBSUQsaURBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsK0NBQVMsR0FBVCxVQUFVLEdBQXFCLEVBQUUsSUFBaUI7UUFBbEQsaUJBU0M7UUFSRyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUN4QixVQUFVLENBQUMsVUFBQSxLQUFLO1lBQ1osSUFBSSxLQUFLLFlBQVksaUJBQWlCLEVBQUU7Z0JBQ3BDLE9BQU8sS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzlDO2lCQUFNO2dCQUNILE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzVCO1FBQ1QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7O2dCQXhCcUIsZ0JBQWdCO2dCQUNoQixnQkFBZ0I7Z0JBQ2Qsb0JBQW9CO2dCQUNsQixvQkFBb0I7OztnQkFQakQsVUFBVTs7O2dCQU5GLGdCQUFnQjtnQkFFaEIsZ0JBQWdCO2dCQUVoQixvQkFBb0I7Z0JBRHBCLG9CQUFvQjs7SUFpQzdCLGtDQUFDO0NBQUEsQUE5QkQsQ0FDaUQsZ0JBQWdCLEdBNkJoRTtTQTdCWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0LCBIdHRwSGFuZGxlciwgSHR0cEV2ZW50LCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEVycm9ySGFuZGxlciB9IGZyb20gJy4vaHR0cC1lcnJvci5oYW5kbGVyJztcbmltcG9ydCB7IEF1dGhUb2tlblNlcnZpY2UgfSBmcm9tICcuL2F1dGgtdG9rZW4uc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2lnbmF0dXJlU2VydmljZSB9IGZyb20gJy4vYXV0aC1zaWduYXR1cmUuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoSW5kZXhlZERCU2VydmljZSB9IGZyb20gJy4uL3N0b3JhZ2UvYXV0aC1pbmRleGVkZGIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIdHRwSW50ZXJjZXB0b3JFcnJvclNlcnZpY2UgZXh0ZW5kcyBIdHRwRXJyb3JIYW5kbGVyIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yLCBPbkRlc3Ryb3kge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBhdXRoVG9rZW46IEF1dGhUb2tlblNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBhdXRoU3RvcmFnZTogQXV0aEluZGV4ZWREQlNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBhdXRoU2lnbmF0dXJlOiBBdXRoU2lnbmF0dXJlU2VydmljZSkge1xuICAgICAgICBzdXBlcih0cmFuc2xhdGUsIGF1dGhUb2tlbiwgYXV0aFN0b3JhZ2UsIGF1dGhTaWduYXR1cmUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVzdHJveSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xuICAgICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgICAgdGhpcy5kZXN0cm95JC51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKS5waXBlKFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JIYW5kbGVyKGVycm9yLCByZXEsIG5leHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0pKS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSk7XG4gICAgfVxuXG59XG4iXX0=