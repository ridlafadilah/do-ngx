import { NbToastrService } from '@nebular/theme';
import { NbGlobalPosition } from '@nebular/theme';
import { NbComponentStatus } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
export declare class DoToastrService {
    private toastrService;
    private translate;
    constructor(toastrService: NbToastrService, translate: TranslateService);
    private status;
    private position;
    private duration;
    private hasIcon;
    private destroyByClick;
    private preventDuplicates;
    show(content: string, title?: string, status?: NbComponentStatus, position?: NbGlobalPosition, duration?: number, hasIcon?: boolean, destroyByClick?: boolean): void;
    showI18n(content: string, contentHasI18n?: boolean, title?: string, status?: NbComponentStatus, position?: NbGlobalPosition, duration?: number, hasIcon?: boolean, destroyByClick?: boolean): void;
    private build;
    private title;
}
