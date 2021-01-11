import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { signatureHeader, OAUTH_INFO } from '@dongkap/do-core';
import { AuthSignatureService } from './auth-signature.service';
var HttpInterceptorSignatureService = /** @class */ (function () {
    function HttpInterceptorSignatureService(authSignature, oauthResource) {
        this.authSignature = authSignature;
        this.oauthResource = oauthResource;
        this.destroy$ = new Subject();
    }
    HttpInterceptorSignatureService.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    };
    HttpInterceptorSignatureService.prototype.intercept = function (req, next) {
        if (req.headers) {
            if (req.headers.has(signatureHeader.mark) && this.oauthResource.signature) {
                return this.authSignature.signHeaders(req).pipe(switchMap(function (value) {
                    return next.handle(value);
                }));
            }
        }
        return next.handle(req).pipe(takeUntil(this.destroy$));
    };
    HttpInterceptorSignatureService.ctorParameters = function () { return [
        { type: AuthSignatureService },
        { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] }
    ]; };
    HttpInterceptorSignatureService.decorators = [
        { type: Injectable }
    ];
    HttpInterceptorSignatureService.ctorParameters = function () { return [
        { type: AuthSignatureService },
        { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] }
    ]; };
    return HttpInterceptorSignatureService;
}());
export { HttpInterceptorSignatureService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1pbnRlcmNlcHRvci1zaWduYXR1cmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWF1dGgvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaHR0cC1pbnRlcmNlcHRvci1zaWduYXR1cmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBeUIsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFaEU7SUFHSSx5Q0FBb0IsYUFBbUMsRUFDdkIsYUFBb0M7UUFEaEQsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQUU1RCxhQUFRLEdBQWlCLElBQUksT0FBTyxFQUFPLENBQUM7SUFGbUIsQ0FBQztJQUl4RSxxREFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSxtREFBUyxHQUFoQixVQUFpQixHQUFxQixFQUFFLElBQWlCO1FBQ3JELElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTtZQUNiLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFO2dCQUN2RSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUF1QjtvQkFDOUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QixDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ1A7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7O2dCQXBCa0Msb0JBQW9CO2dEQUNsRCxNQUFNLFNBQUMsVUFBVTs7O2dCQUp6QixVQUFVOzs7Z0JBRkYsb0JBQW9CO2dEQU1wQixNQUFNLFNBQUMsVUFBVTs7SUFxQjFCLHNDQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0F4QlksK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdCwgSHR0cEhhbmRsZXIsIEh0dHBFdmVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3ksIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBzaWduYXR1cmVIZWFkZXIsIFNlY3VyaXR5UmVzb3VyY2VNb2RlbCwgT0FVVEhfSU5GTyB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQXV0aFNpZ25hdHVyZVNlcnZpY2UgfSBmcm9tICcuL2F1dGgtc2lnbmF0dXJlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHR0cEludGVyY2VwdG9yU2lnbmF0dXJlU2VydmljZSBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciwgT25EZXN0cm95IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNpZ25hdHVyZTogQXV0aFNpZ25hdHVyZVNlcnZpY2UsXG4gICAgICAgIEBJbmplY3QoT0FVVEhfSU5GTykgcHJpdmF0ZSBvYXV0aFJlc291cmNlOiBTZWN1cml0eVJlc291cmNlTW9kZWwpIHt9XG5cbiAgICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICAgIHRoaXMuZGVzdHJveSQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgICAgIGlmIChyZXEuaGVhZGVycykge1xuICAgICAgICAgICAgaWYgKHJlcS5oZWFkZXJzLmhhcyhzaWduYXR1cmVIZWFkZXIubWFyaykgJiYgdGhpcy5vYXV0aFJlc291cmNlLnNpZ25hdHVyZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dGhTaWduYXR1cmUuc2lnbkhlYWRlcnMocmVxKS5waXBlKHN3aXRjaE1hcCgodmFsdWU6IEh0dHBSZXF1ZXN0PGFueT4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSkucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpO1xuICAgIH1cblxufVxuIl19