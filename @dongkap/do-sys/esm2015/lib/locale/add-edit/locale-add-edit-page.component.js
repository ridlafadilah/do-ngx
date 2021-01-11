import { Component, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { NbDialogService } from '@nebular/theme';
import { ResponseCode } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-common';
import { LocaleService } from '../services/locale.service';
import { DialogFlagComponent } from './dialog-flag/dialog-flag.component';
export class LocaleAddEditPageComponent extends BaseFormComponent {
    constructor(injector, router, route, localeService, dialogService) {
        super(injector, {
            'language': [],
            'icon': [],
            'default': [],
        });
        this.injector = injector;
        this.router = router;
        this.route = route;
        this.localeService = localeService;
        this.dialogService = dialogService;
        this.action = 'Add';
        this.dataDefault = [
            {
                selected: false,
            },
        ];
        if (this.localeService.getLocale() || (this.route.snapshot.params['action'] === 'add')) {
            if ((this.route.snapshot.params['action'] === 'edit')) {
                this.action = 'Edit';
            }
            this.apiSelectLanguage = this.api['master']['select-language'];
            if (this.localeService.getLocale() && (this.route.snapshot.params['action'] === 'edit')) {
                if (this.localeService.getLocale().localeDefault) {
                    this.formGroup.get('default').setValue([{
                            selected: true,
                        }]);
                    this.formGroup.get('default').disable();
                }
                else {
                    this.formGroup.get('default').setValue([{
                            selected: false,
                        }]);
                }
                this.formGroup.get('icon').setValue(this.localeService.getLocale().icon);
                this.formGroup.get('language').setValue(this.localeService.getLocale().identifier);
                this.formGroup.get('language').disable();
            }
        }
        else {
            this.router.navigate(['/app/sysconf/i18n']);
        }
    }
    ngOnInit() { }
    onSearchFlag() {
        this.dialogService.open(DialogFlagComponent)
            .onClose.subscribe((flagIcon) => {
            this.formGroup.get('icon').setValue(flagIcon);
            this.formGroup.get('icon').markAsDirty();
        });
    }
    onReset() {
        this.router.navigate(['/app/sysconf/i18n']);
    }
    onSubmit() {
        const localeDefault = this.formGroup.get('default').value;
        const data = {
            icon: this.formGroup.get('icon').value,
            localeDefault: (localeDefault ? true : false),
            localeCode: this.formGroup.get('language').value['value'] ?
                this.formGroup.get('language').value['value'] : this.localeService.getLocale().localeCode,
            identifier: this.formGroup.get('language').value['label'] ?
                this.formGroup.get('language').value['label'] : this.localeService.getLocale().identifier,
            localeEnabled: true,
        };
        super.onSubmit(data, 'master', 'post-locale')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_SCR010.toString()) {
                this.router.navigate(['/app/sysconf/i18n']);
            }
        });
    }
}
LocaleAddEditPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ActivatedRoute },
    { type: LocaleService },
    { type: NbDialogService }
];
LocaleAddEditPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-locale-add-edit-page',
                template: "<do-page-outlet [header]=\"'header.'+action+'-i18n'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <do-select\n          [name]=\"'language'\"\n          [label]=\"'Language'\"\n          [required]=\"true\"\n          [api]=\"apiSelectLanguage\"\n          formControlName=\"language\">\n        </do-select>\n        <do-input-icon\n          [name]=\"'icon'\"\n          [label]=\"'Icon'\"\n          [required]=\"true\"\n          [icon]=\"'search-outline'\"\n          [iconcursor]=\"true\"\n          [eva]=\"true\"\n          (clickIcon)=\"onSearchFlag()\"\n          formControlName=\"icon\">\n        </do-input-icon>\n        <do-checkbox\n          [name]=\"'checkbox'\"\n          [label]=\"'System Default Language'\"\n          [data]=\"dataDefault\"\n          formControlName=\"default\">\n        </do-checkbox>\n        <div class=\"form-group row\">\n          <div class=\"offset-sm-3 col-sm-9\">\n            <button\n              type=\"reset\"\n              status=\"danger\"\n              (click)=\"onReset()\"\n              class=\"reset-left\"\n              nbButton>\n              {{ 'Cancel' | translate}}\n            </button>\n            <button\n              type=\"submit\"\n              status=\"primary\"\n              (click)=\"onSubmit()\"\n              [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n              class=\"submit-right\"\n              nbButton>\n              {{ action | translate}}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</do-page-outlet>\n",
                styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}"]
            },] }
];
LocaleAddEditPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ActivatedRoute },
    { type: LocaleService },
    { type: NbDialogService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLWFkZC1lZGl0LXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tc3lzLyIsInNvdXJjZXMiOlsibGliL2xvY2FsZS9hZGQtZWRpdC9sb2NhbGUtYWRkLWVkaXQtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBbUIsWUFBWSxFQUE4QixNQUFNLGtCQUFrQixDQUFDO0FBQzdGLE9BQU8sRUFBRSxpQkFBaUIsRUFBaUIsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFPMUUsTUFBTSxPQUFPLDBCQUEyQixTQUFRLGlCQUFzQjtJQVNwRSxZQUFtQixRQUFrQixFQUMzQixNQUFjLEVBQ2QsS0FBcUIsRUFDckIsYUFBNEIsRUFDNUIsYUFBOEI7UUFDdEMsS0FBSyxDQUFDLFFBQVEsRUFDWjtZQUNFLFVBQVUsRUFBRSxFQUFFO1lBQ2QsTUFBTSxFQUFFLEVBQUU7WUFDVixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUMsQ0FBQztRQVZZLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDM0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQVhqQyxXQUFNLEdBQW1C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WUFDTixhQUFhO1lBQ2IsZUFBZTs7O1lBbEJ6QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFFbkMseXBEQUFvRDs7YUFDckQ7OztZQWZtQixRQUFRO1lBRW5CLE1BQU07WUFBRSxjQUFjO1lBTXRCLGFBQWE7WUFIYixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5iRGlhbG9nU2VydmljZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSwgUmVzcG9uc2VDb2RlLCBIdHRwQmFzZU1vZGVsLCBMb2NhbGVNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQmFzZUZvcm1Db21wb25lbnQsIENoZWNrYm94TW9kZWwgfSBmcm9tICdAZG9uZ2thcC9kby1jb21tb24nO1xuaW1wb3J0IHsgTG9jYWxlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xvY2FsZS5zZXJ2aWNlJztcbmltcG9ydCB7IERpYWxvZ0ZsYWdDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy1mbGFnL2RpYWxvZy1mbGFnLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWxvY2FsZS1hZGQtZWRpdC1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9jYWxlLWFkZC1lZGl0LXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvY2FsZS1hZGQtZWRpdC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTG9jYWxlQWRkRWRpdFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlRm9ybUNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgYWN0aW9uOiAnQWRkJyB8ICdFZGl0JyA9ICdBZGQnO1xuICBwdWJsaWMgYXBpU2VsZWN0TGFuZ3VhZ2U6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBkYXRhRGVmYXVsdDogQ2hlY2tib3hNb2RlbFtdID0gW1xuICAgIHtcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICB9LFxuICBdO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBsb2NhbGVTZXJ2aWNlOiBMb2NhbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogTmJEaWFsb2dTZXJ2aWNlKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsXG4gICAgICB7XG4gICAgICAgICdsYW5ndWFnZSc6IFtdLFxuICAgICAgICAnaWNvbic6IFtdLFxuICAgICAgICAnZGVmYXVsdCc6IFtdLFxuICAgICAgfSk7XG4gICAgaWYgKHRoaXMubG9jYWxlU2VydmljZS5nZXRMb2NhbGUoKSB8fCAodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2FjdGlvbiddID09PSAnYWRkJykpIHtcbiAgICAgIGlmICgodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2FjdGlvbiddID09PSAnZWRpdCcpKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gJ0VkaXQnO1xuICAgICAgfVxuICAgICAgdGhpcy5hcGlTZWxlY3RMYW5ndWFnZSA9IHRoaXMuYXBpWydtYXN0ZXInXVsnc2VsZWN0LWxhbmd1YWdlJ107XG4gICAgICBpZiAodGhpcy5sb2NhbGVTZXJ2aWNlLmdldExvY2FsZSgpICYmICh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snYWN0aW9uJ10gPT09ICdlZGl0JykpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlU2VydmljZS5nZXRMb2NhbGUoKS5sb2NhbGVEZWZhdWx0KSB7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdkZWZhdWx0Jykuc2V0VmFsdWUoW3tcbiAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgICAgIH1dKTtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2RlZmF1bHQnKS5kaXNhYmxlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdkZWZhdWx0Jykuc2V0VmFsdWUoW3tcbiAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgICB9XSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdpY29uJykuc2V0VmFsdWUodGhpcy5sb2NhbGVTZXJ2aWNlLmdldExvY2FsZSgpLmljb24pO1xuICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2xhbmd1YWdlJykuc2V0VmFsdWUodGhpcy5sb2NhbGVTZXJ2aWNlLmdldExvY2FsZSgpLmlkZW50aWZpZXIpO1xuICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2xhbmd1YWdlJykuZGlzYWJsZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9pMThuJ10pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBvblNlYXJjaEZsYWcoKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oRGlhbG9nRmxhZ0NvbXBvbmVudClcbiAgICAgIC5vbkNsb3NlLnN1YnNjcmliZSgoZmxhZ0ljb246IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2ljb24nKS5zZXRWYWx1ZShmbGFnSWNvbik7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnaWNvbicpLm1hcmtBc0RpcnR5KCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uUmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL3N5c2NvbmYvaTE4biddKTtcbiAgfVxuXG4gIG9uU3VibWl0KCk6IHZvaWQge1xuICAgIGNvbnN0IGxvY2FsZURlZmF1bHQ6IENoZWNrYm94TW9kZWxbXSA9IHRoaXMuZm9ybUdyb3VwLmdldCgnZGVmYXVsdCcpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGE6IExvY2FsZU1vZGVsID0ge1xuICAgICAgaWNvbjogdGhpcy5mb3JtR3JvdXAuZ2V0KCdpY29uJykudmFsdWUsXG4gICAgICBsb2NhbGVEZWZhdWx0OiAobG9jYWxlRGVmYXVsdCA/IHRydWUgOiBmYWxzZSksXG4gICAgICBsb2NhbGVDb2RlOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ2xhbmd1YWdlJykudmFsdWVbJ3ZhbHVlJ10gP1xuICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdsYW5ndWFnZScpLnZhbHVlWyd2YWx1ZSddIDogdGhpcy5sb2NhbGVTZXJ2aWNlLmdldExvY2FsZSgpLmxvY2FsZUNvZGUsXG4gICAgICBpZGVudGlmaWVyOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ2xhbmd1YWdlJykudmFsdWVbJ2xhYmVsJ10gP1xuICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdsYW5ndWFnZScpLnZhbHVlWydsYWJlbCddIDogdGhpcy5sb2NhbGVTZXJ2aWNlLmdldExvY2FsZSgpLmlkZW50aWZpZXIsXG4gICAgICBsb2NhbGVFbmFibGVkOiB0cnVlLFxuICAgIH07XG4gICAgKHN1cGVyLm9uU3VibWl0KGRhdGEsICdtYXN0ZXInLCAncG9zdC1sb2NhbGUnKSAgYXMgT2JzZXJ2YWJsZTxBcGlCYXNlUmVzcG9uc2U+KVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5yZXNwU3RhdHVzQ29kZSA9PT0gUmVzcG9uc2VDb2RlLk9LX1NDUjAxMC50b1N0cmluZygpKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL3N5c2NvbmYvaTE4biddKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxufVxuIl19