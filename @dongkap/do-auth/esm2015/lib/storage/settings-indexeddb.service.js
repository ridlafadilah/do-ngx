import { Injectable, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { oauthInfoModels, TypeDataOauth } from '@dongkap/do-core';
import { IndexedDBService } from '@dongkap/do-storage';
import * as i0 from "@angular/core";
export class SettingsIndexedDBService extends IndexedDBService {
    constructor(injector) {
        super(injector, 'do-core', 1, '#do-settings');
        this.translate = injector.get(TranslateService);
    }
    loginStorage(response) {
        oauthInfoModels.forEach(data => {
            if (response[data.key]) {
                if (data.type === TypeDataOauth.SETTINGS) {
                    this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                    if (data.key === 'locale') {
                        this.translate.getTranslation(response[data.key]).subscribe((lang) => {
                            this.translate.use(response[data.key]);
                            this.translate.setTranslation(response[data.key], lang, true);
                        });
                    }
                }
            }
        });
    }
}
SettingsIndexedDBService.ctorParameters = () => [
    { type: Injector }
];
SettingsIndexedDBService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SettingsIndexedDBService_Factory() { return new SettingsIndexedDBService(i0.ɵɵinject(i0.INJECTOR)); }, token: SettingsIndexedDBService, providedIn: "root" });
SettingsIndexedDBService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
SettingsIndexedDBService.ctorParameters = () => [
    { type: Injector }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MtaW5kZXhlZGRiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1hdXRoLyIsInNvdXJjZXMiOlsibGliL3N0b3JhZ2Uvc2V0dGluZ3MtaW5kZXhlZGRiLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBMkIsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDM0YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBSXZELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxnQkFBNkI7SUFJekUsWUFBWSxRQUFrQjtRQUM1QixLQUFLLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVNLFlBQVksQ0FBQyxRQUFhO1FBQy9CLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN0QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLFFBQVEsRUFBRTtvQkFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2pHLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQUU7d0JBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTs0QkFDeEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDaEUsQ0FBQyxDQUFDLENBQUM7cUJBQ0o7aUJBQ0Y7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBbkJxQixRQUFROzs7O1lBTC9CLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRyxNQUFNLEVBQUM7OztZQU5aLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgb2F1dGhJbmZvTW9kZWxzLCBJbmRleGVkREJGYWN0b3J5U2VydmljZSwgVHlwZURhdGFPYXV0aCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgSW5kZXhlZERCU2VydmljZSB9IGZyb20gJ0Bkb25na2FwL2RvLXN0b3JhZ2UnO1xuaW1wb3J0IHsgU2V0dGluZ3NJREIgfSBmcm9tICcuLi9tb2RlbHMvc2V0dGluZ3Muc2NoZW1hJztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW4gOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzSW5kZXhlZERCU2VydmljZSBleHRlbmRzIEluZGV4ZWREQlNlcnZpY2U8U2V0dGluZ3NJREI+IGltcGxlbWVudHMgSW5kZXhlZERCRmFjdG9yeVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIHN1cGVyKGluamVjdG9yLCAnZG8tY29yZScsIDEsICcjZG8tc2V0dGluZ3MnKTtcbiAgICB0aGlzLnRyYW5zbGF0ZSA9IGluamVjdG9yLmdldChUcmFuc2xhdGVTZXJ2aWNlKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dpblN0b3JhZ2UocmVzcG9uc2U6IGFueSk6IHZvaWQge1xuICAgIG9hdXRoSW5mb01vZGVscy5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlW2RhdGEua2V5XSkge1xuICAgICAgICBpZiAoZGF0YS50eXBlID09PSBUeXBlRGF0YU9hdXRoLlNFVFRJTkdTKSB7XG4gICAgICAgICAgdGhpcy5wdXQoZGF0YS5rZXksIGRhdGEuc3RyaW5nID8gcmVzcG9uc2VbZGF0YS5rZXldIDogSlNPTi5zdHJpbmdpZnkocmVzcG9uc2VbZGF0YS5rZXldKSkudGhlbigpO1xuICAgICAgICAgIGlmIChkYXRhLmtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlLmdldFRyYW5zbGF0aW9uKHJlc3BvbnNlW2RhdGEua2V5XSkuc3Vic2NyaWJlKChsYW5nOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGUudXNlKHJlc3BvbnNlW2RhdGEua2V5XSk7XG4gICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlLnNldFRyYW5zbGF0aW9uKHJlc3BvbnNlW2RhdGEua2V5XSwgbGFuZywgdHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=