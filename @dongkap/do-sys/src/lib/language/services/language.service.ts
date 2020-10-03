import { Injectable } from '@angular/core';
import { LocaleModel } from '../models/locale.model';

@Injectable()
export class LanguageService {

    private locale: LocaleModel;

    public getLocale(): LocaleModel {
        return this.locale;
    }

    public setLocale(locale: LocaleModel) {
        this.locale = locale;
    }

}
