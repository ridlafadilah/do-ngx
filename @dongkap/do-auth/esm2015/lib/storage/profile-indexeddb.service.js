import { Injectable, Injector } from '@angular/core';
import { oauthInfoModels, TypeDataOauth } from '@dongkap/do-core';
import { IndexedDBService } from '@dongkap/do-storage';
import * as i0 from "@angular/core";
export class ProfileIndexedDBService extends IndexedDBService {
    constructor(injector) {
        super(injector, 'do-core', 1, '#do-profile');
    }
    loginStorage(response) {
        oauthInfoModels.forEach(data => {
            if (response[data.key]) {
                if (data.type === TypeDataOauth.PROFILE) {
                    this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                }
            }
        });
    }
    logout() {
        oauthInfoModels.forEach(data => {
            if (data.type === TypeDataOauth.PROFILE) {
                this.remove(data.key);
            }
        });
    }
}
ProfileIndexedDBService.ctorParameters = () => [
    { type: Injector }
];
ProfileIndexedDBService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProfileIndexedDBService_Factory() { return new ProfileIndexedDBService(i0.ɵɵinject(i0.INJECTOR)); }, token: ProfileIndexedDBService, providedIn: "root" });
ProfileIndexedDBService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
ProfileIndexedDBService.ctorParameters = () => [
    { type: Injector }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1pbmRleGVkZGIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWF1dGgvIiwic291cmNlcyI6WyJsaWIvc3RvcmFnZS9wcm9maWxlLWluZGV4ZWRkYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQTJCLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzNGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUl2RCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsZ0JBQTRCO0lBRXZFLFlBQVksUUFBa0I7UUFDNUIsS0FBSyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSxZQUFZLENBQUMsUUFBYTtRQUMvQixlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNCLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQyxPQUFPLEVBQUU7b0JBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNsRzthQUNGO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sTUFBTTtRQUNYLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFwQnFCLFFBQVE7Ozs7WUFIL0IsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFHLE1BQU0sRUFBQzs7O1lBTFosUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBvYXV0aEluZm9Nb2RlbHMsIEluZGV4ZWREQkZhY3RvcnlTZXJ2aWNlLCBUeXBlRGF0YU9hdXRoIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBJbmRleGVkREJTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tc3RvcmFnZSc7XG5pbXBvcnQgeyBQcm9maWxlSURCIH0gZnJvbSAnLi4vbW9kZWxzL3Byb2ZpbGUuc2NoZW1hJztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW4gOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVJbmRleGVkREJTZXJ2aWNlIGV4dGVuZHMgSW5kZXhlZERCU2VydmljZTxQcm9maWxlSURCPiBpbXBsZW1lbnRzIEluZGV4ZWREQkZhY3RvcnlTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBzdXBlcihpbmplY3RvciwgJ2RvLWNvcmUnLCAxLCAnI2RvLXByb2ZpbGUnKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dpblN0b3JhZ2UocmVzcG9uc2U6IGFueSk6IHZvaWQge1xuICAgIG9hdXRoSW5mb01vZGVscy5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2VbZGF0YS5rZXldKSB7XG4gICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gVHlwZURhdGFPYXV0aC5QUk9GSUxFKSB7XG4gICAgICAgICAgICB0aGlzLnB1dChkYXRhLmtleSwgZGF0YS5zdHJpbmcgPyByZXNwb25zZVtkYXRhLmtleV0gOiBKU09OLnN0cmluZ2lmeShyZXNwb25zZVtkYXRhLmtleV0pKS50aGVuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbG9nb3V0KCk6IHZvaWQge1xuICAgIG9hdXRoSW5mb01vZGVscy5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgaWYgKGRhdGEudHlwZSA9PT0gVHlwZURhdGFPYXV0aC5QUk9GSUxFKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKGRhdGEua2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=