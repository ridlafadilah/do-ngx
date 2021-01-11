import { __extends } from "tslib";
import { Injectable, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { oauthInfoModels, TypeDataOauth } from '@dongkap/do-core';
import { IndexedDBService } from '@dongkap/do-storage';
import * as i0 from "@angular/core";
var SettingsIndexedDBService = /** @class */ (function (_super) {
    __extends(SettingsIndexedDBService, _super);
    function SettingsIndexedDBService(injector) {
        var _this = _super.call(this, injector, 'do-core', 1, '#do-settings') || this;
        _this.translate = injector.get(TranslateService);
        return _this;
    }
    SettingsIndexedDBService.prototype.loginStorage = function (response) {
        var _this = this;
        oauthInfoModels.forEach(function (data) {
            if (response[data.key]) {
                if (data.type === TypeDataOauth.SETTINGS) {
                    _this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                    if (data.key === 'locale') {
                        _this.translate.getTranslation(response[data.key]).subscribe(function (lang) {
                            _this.translate.use(response[data.key]);
                            _this.translate.setTranslation(response[data.key], lang, true);
                        });
                    }
                }
            }
        });
    };
    SettingsIndexedDBService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    SettingsIndexedDBService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SettingsIndexedDBService_Factory() { return new SettingsIndexedDBService(i0.ɵɵinject(i0.INJECTOR)); }, token: SettingsIndexedDBService, providedIn: "root" });
    SettingsIndexedDBService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    SettingsIndexedDBService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return SettingsIndexedDBService;
}(IndexedDBService));
export { SettingsIndexedDBService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MtaW5kZXhlZGRiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1hdXRoLyIsInNvdXJjZXMiOlsibGliL3N0b3JhZ2Uvc2V0dGluZ3MtaW5kZXhlZGRiLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQTJCLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzNGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUd2RDtJQUM4Qyw0Q0FBNkI7SUFJekUsa0NBQVksUUFBa0I7UUFBOUIsWUFDRSxrQkFBTSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsU0FFOUM7UUFEQyxLQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7SUFDbEQsQ0FBQztJQUVNLCtDQUFZLEdBQW5CLFVBQW9CLFFBQWE7UUFBakMsaUJBY0M7UUFiQyxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUMxQixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxhQUFhLENBQUMsUUFBUSxFQUFFO29CQUN4QyxLQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDakcsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBRTt3QkFDekIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQVM7NEJBQ3BFLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDdkMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ2hFLENBQUMsQ0FBQyxDQUFDO3FCQUNKO2lCQUNGO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQW5CcUIsUUFBUTs7OztnQkFML0IsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFHLE1BQU0sRUFBQzs7O2dCQU5aLFFBQVE7O21DQUE3QjtDQWdDQyxBQTFCRCxDQUM4QyxnQkFBZ0IsR0F5QjdEO1NBekJZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBvYXV0aEluZm9Nb2RlbHMsIEluZGV4ZWREQkZhY3RvcnlTZXJ2aWNlLCBUeXBlRGF0YU9hdXRoIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBJbmRleGVkREJTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tc3RvcmFnZSc7XG5pbXBvcnQgeyBTZXR0aW5nc0lEQiB9IGZyb20gJy4uL21vZGVscy9zZXR0aW5ncy5zY2hlbWEnO1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbiA6ICdyb290J30pXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NJbmRleGVkREJTZXJ2aWNlIGV4dGVuZHMgSW5kZXhlZERCU2VydmljZTxTZXR0aW5nc0lEQj4gaW1wbGVtZW50cyBJbmRleGVkREJGYWN0b3J5U2VydmljZSB7XG5cbiAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2U7XG5cbiAgY29uc3RydWN0b3IoaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsICdkby1jb3JlJywgMSwgJyNkby1zZXR0aW5ncycpO1xuICAgIHRoaXMudHJhbnNsYXRlID0gaW5qZWN0b3IuZ2V0KFRyYW5zbGF0ZVNlcnZpY2UpO1xuICB9XG5cbiAgcHVibGljIGxvZ2luU3RvcmFnZShyZXNwb25zZTogYW55KTogdm9pZCB7XG4gICAgb2F1dGhJbmZvTW9kZWxzLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2VbZGF0YS5rZXldKSB7XG4gICAgICAgIGlmIChkYXRhLnR5cGUgPT09IFR5cGVEYXRhT2F1dGguU0VUVElOR1MpIHtcbiAgICAgICAgICB0aGlzLnB1dChkYXRhLmtleSwgZGF0YS5zdHJpbmcgPyByZXNwb25zZVtkYXRhLmtleV0gOiBKU09OLnN0cmluZ2lmeShyZXNwb25zZVtkYXRhLmtleV0pKS50aGVuKCk7XG4gICAgICAgICAgaWYgKGRhdGEua2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0VHJhbnNsYXRpb24ocmVzcG9uc2VbZGF0YS5rZXldKS5zdWJzY3JpYmUoKGxhbmc6IGFueSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZS51c2UocmVzcG9uc2VbZGF0YS5rZXldKTtcbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGUuc2V0VHJhbnNsYXRpb24ocmVzcG9uc2VbZGF0YS5rZXldLCBsYW5nLCB0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==