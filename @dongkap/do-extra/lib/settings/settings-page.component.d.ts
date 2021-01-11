import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { IndexedDBEncFactoryService } from '@dongkap/do-core';
import { HttpBaseModel } from '@dongkap/do-core';
import { IndexedDBFactoryService } from '@dongkap/do-core';
import { CheckboxModel, BaseFormComponent } from '@dongkap/do-common';
export declare class SettingsPageComponent extends BaseFormComponent<any> implements OnInit {
    injector: Injector;
    private translate;
    private themeService;
    private settingsIndexedDB;
    private authIndexedDB;
    apiSelectLocale: HttpBaseModel;
    localeIcon: string;
    private localeCode;
    private localeIdentifier;
    dataTheme: CheckboxModel[];
    constructor(injector: Injector, translate: TranslateService, themeService: NbThemeService, settingsIndexedDB: IndexedDBFactoryService, authIndexedDB: IndexedDBEncFactoryService);
    ngOnInit(): void;
    onInit(serviceName: string, apiName: string): void;
    onSubmit(): void;
    changeTheme(dark: boolean): void;
}
