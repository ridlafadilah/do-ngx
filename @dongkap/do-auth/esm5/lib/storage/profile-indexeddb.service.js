import { __extends } from "tslib";
import { Injectable, Injector } from '@angular/core';
import { oauthInfoModels, TypeDataOauth } from '@dongkap/do-core';
import { IndexedDBService } from '@dongkap/do-storage';
import * as i0 from "@angular/core";
var ProfileIndexedDBService = /** @class */ (function (_super) {
    __extends(ProfileIndexedDBService, _super);
    function ProfileIndexedDBService(injector) {
        return _super.call(this, injector, 'do-core', 1, '#do-profile') || this;
    }
    ProfileIndexedDBService.prototype.loginStorage = function (response) {
        var _this = this;
        oauthInfoModels.forEach(function (data) {
            if (response[data.key]) {
                if (data.type === TypeDataOauth.PROFILE) {
                    _this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                }
            }
        });
    };
    ProfileIndexedDBService.prototype.logout = function () {
        var _this = this;
        oauthInfoModels.forEach(function (data) {
            if (data.type === TypeDataOauth.PROFILE) {
                _this.remove(data.key);
            }
        });
    };
    ProfileIndexedDBService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    ProfileIndexedDBService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProfileIndexedDBService_Factory() { return new ProfileIndexedDBService(i0.ɵɵinject(i0.INJECTOR)); }, token: ProfileIndexedDBService, providedIn: "root" });
    ProfileIndexedDBService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    ProfileIndexedDBService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return ProfileIndexedDBService;
}(IndexedDBService));
export { ProfileIndexedDBService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1pbmRleGVkZGIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWF1dGgvIiwic291cmNlcyI6WyJsaWIvc3RvcmFnZS9wcm9maWxlLWluZGV4ZWRkYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUEyQixhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMzRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFHdkQ7SUFDNkMsMkNBQTRCO0lBRXZFLGlDQUFZLFFBQWtCO2VBQzVCLGtCQUFNLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLGFBQWEsQ0FBQztJQUM5QyxDQUFDO0lBRU0sOENBQVksR0FBbkIsVUFBb0IsUUFBYTtRQUFqQyxpQkFRQztRQVBDLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQ3hCLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQyxPQUFPLEVBQUU7b0JBQ3ZDLEtBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNsRzthQUNGO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sd0NBQU0sR0FBYjtRQUFBLGlCQU1DO1FBTEMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7WUFDMUIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3ZDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFwQnFCLFFBQVE7Ozs7Z0JBSC9CLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRyxNQUFNLEVBQUM7OztnQkFMWixRQUFROztrQ0FBN0I7Q0E4QkMsQUF6QkQsQ0FDNkMsZ0JBQWdCLEdBd0I1RDtTQXhCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb2F1dGhJbmZvTW9kZWxzLCBJbmRleGVkREJGYWN0b3J5U2VydmljZSwgVHlwZURhdGFPYXV0aCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgSW5kZXhlZERCU2VydmljZSB9IGZyb20gJ0Bkb25na2FwL2RvLXN0b3JhZ2UnO1xuaW1wb3J0IHsgUHJvZmlsZUlEQiB9IGZyb20gJy4uL21vZGVscy9wcm9maWxlLnNjaGVtYSc7XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluIDogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBQcm9maWxlSW5kZXhlZERCU2VydmljZSBleHRlbmRzIEluZGV4ZWREQlNlcnZpY2U8UHJvZmlsZUlEQj4gaW1wbGVtZW50cyBJbmRleGVkREJGYWN0b3J5U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsICdkby1jb3JlJywgMSwgJyNkby1wcm9maWxlJyk7XG4gIH1cblxuICBwdWJsaWMgbG9naW5TdG9yYWdlKHJlc3BvbnNlOiBhbnkpOiB2b2lkIHtcbiAgICBvYXV0aEluZm9Nb2RlbHMuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlW2RhdGEua2V5XSkge1xuICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT09IFR5cGVEYXRhT2F1dGguUFJPRklMRSkge1xuICAgICAgICAgICAgdGhpcy5wdXQoZGF0YS5rZXksIGRhdGEuc3RyaW5nID8gcmVzcG9uc2VbZGF0YS5rZXldIDogSlNPTi5zdHJpbmdpZnkocmVzcG9uc2VbZGF0YS5rZXldKSkudGhlbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGxvZ291dCgpOiB2b2lkIHtcbiAgICBvYXV0aEluZm9Nb2RlbHMuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIGlmIChkYXRhLnR5cGUgPT09IFR5cGVEYXRhT2F1dGguUFJPRklMRSkge1xuICAgICAgICB0aGlzLnJlbW92ZShkYXRhLmtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufVxuIl19