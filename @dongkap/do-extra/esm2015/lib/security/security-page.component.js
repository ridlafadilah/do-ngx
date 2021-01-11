import { Component, Injector } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { NbDialogService } from '@nebular/theme';
import { ResponseCode, OAUTH_INFO, EncryptionService } from '@dongkap/do-core';
import { AuthIndexedDBService, AuthTokenService } from '@dongkap/do-auth';
import { BaseFormComponent } from '@dongkap/do-common';
import { DeactivatedPromptComponent } from './prompt/deactivated-prompt.component';
import { DeactivatedProviderPromptComponent } from './prompt/deactivated-provider-prompt.component';
export class SecurityPageComponent extends BaseFormComponent {
    constructor(injector, dialogService, authIndexedDB) {
        super(injector, {
            'password': [],
        });
        this.injector = injector;
        this.dialogService = dialogService;
        this.authIndexedDB = authIndexedDB;
        this.authProvider = true;
        this.enc = injector.get(EncryptionService);
        this.oauthResource = injector.get(OAUTH_INFO);
        this.authToken = injector.get(AuthTokenService);
        this.authIndexedDB.getEnc('provider').then((value) => {
            this.provider = {
                'value': value,
            };
            if (value === 'local') {
                this.authProvider = false;
            }
        });
    }
    onSubmit() {
        this.disabled = true;
        if (this.authProvider) {
            this.dialogService.open(DeactivatedProviderPromptComponent)
                .onClose.subscribe((email) => {
                if (email) {
                    this.disabled = true;
                    const data = {
                        'email': email,
                        'provider': this.provider['value'],
                    };
                    super.onSubmit(data, 'security', 'deactivated')
                        .pipe(takeUntil(this.destroy$))
                        .subscribe((response) => {
                        if (response) {
                            if (response.respStatusCode === ResponseCode.OK_SCR003.toString()) {
                                this.authToken.logout();
                            }
                        }
                    });
                }
                else {
                    this.disabled = false;
                }
            });
        }
        else {
            this.dialogService.open(DeactivatedPromptComponent)
                .onClose.subscribe((password) => {
                if (password) {
                    this.disabled = true;
                    const data = {
                        password: this.enc.encryptAES(this.oauthResource['aes_key'], password),
                    };
                    super.onSubmit(data, 'security', 'deactivated')
                        .pipe(takeUntil(this.destroy$))
                        .subscribe((response) => {
                        if (response) {
                            if (response.respStatusCode === ResponseCode.OK_SCR003.toString()) {
                                this.authToken.logout();
                            }
                        }
                    });
                }
                else {
                    this.disabled = false;
                }
            });
        }
    }
}
SecurityPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: NbDialogService },
    { type: AuthIndexedDBService }
];
SecurityPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-security-page',
                template: "<do-change-password-page *ngIf=\"!authProvider\"></do-change-password-page>\n<nb-card *ngIf=\"authProvider\">\n    <nb-card-body>\n        <div class=\"row\">\n            <nb-icon [status]=\"'info'\" [icon]=\"'google'\" class=\"icon-provider\"></nb-icon>\n            <p class=\"text-provider\">\n                {{ 'message.provider' | translate:provider}}\n            </p>\n        </div>\n    </nb-card-body>\n</nb-card>\n<nb-card>\n    <nb-card-body>\n        <div class=\"row\">\n            <div class=\"col-md-3 col-lg-3 col-xxxl-6\">\n                <button\n                    type=\"button\"\n                    status=\"danger\"\n                    size=\"large\"\n                    class=\"deactivated-button\"\n                    [disabled]=\"disabled\"\n                    (click)=\"onSubmit()\"\n                    nbButton>\n                    {{ 'Deactivate Account' | translate }}\n                </button>\n            </div>\n            <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n                <h6 class=\"text-danger deactivated-label\">\n                    {{ 'message.deactivated-account' | translate }}\n                </h6>\n            </div>\n        </div>\n    </nb-card-body>\n</nb-card>\n",
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host button.deactivated-button{width:100%;margin:.5rem 0}.nb-theme-default :host h6.deactivated-label{padding-top:10px;text-align:center}.nb-theme-default :host .icon-provider{margin:1rem 0 1rem 1.5rem}.nb-theme-default :host .text-provider{margin:1rem 1.5rem}@media (max-width:767.98px){.nb-theme-default :host .icon-provider{margin:1rem 0 1rem .5rem}.nb-theme-default :host .text-provider{margin:1rem 0 1rem .5rem}}.nb-theme-dark :host button.deactivated-button{width:100%;margin:.5rem 0}.nb-theme-dark :host h6.deactivated-label{padding-top:10px;text-align:center}.nb-theme-dark :host .icon-provider{margin:1rem 0 1rem 1.5rem}.nb-theme-dark :host .text-provider{margin:1rem 1.5rem}@media (max-width:767.98px){.nb-theme-dark :host .icon-provider{margin:1rem 0 1rem .5rem}.nb-theme-dark :host .text-provider{margin:1rem 0 1rem .5rem}}.nb-theme-cosmic :host button.deactivated-button{width:100%;margin:.5rem 0}.nb-theme-cosmic :host h6.deactivated-label{padding-top:10px;text-align:center}.nb-theme-cosmic :host .icon-provider{margin:1rem 0 1rem 1.5rem}.nb-theme-cosmic :host .text-provider{margin:1rem 1.5rem}@media (max-width:767.98px){.nb-theme-cosmic :host .icon-provider{margin:1rem 0 1rem .5rem}.nb-theme-cosmic :host .text-provider{margin:1rem 0 1rem .5rem}}.nb-theme-corporate :host button.deactivated-button{width:100%;margin:.5rem 0}.nb-theme-corporate :host h6.deactivated-label{padding-top:10px;text-align:center}.nb-theme-corporate :host .icon-provider{margin:1rem 0 1rem 1.5rem}.nb-theme-corporate :host .text-provider{margin:1rem 1.5rem}@media (max-width:767.98px){.nb-theme-corporate :host .icon-provider{margin:1rem 0 1rem .5rem}.nb-theme-corporate :host .text-provider{margin:1rem 0 1rem .5rem}}"]
            },] }
];
SecurityPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: NbDialogService },
    { type: AuthIndexedDBService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHktcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1leHRyYS8iLCJzb3VyY2VzIjpbImxpYi9zZWN1cml0eS9zZWN1cml0eS1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFDTCxZQUFZLEVBQ1osVUFBVSxFQUVWLGlCQUFpQixFQUNqQixNQUFNLGtCQUFrQixDQUFDO0FBRTNCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBT3BHLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxpQkFBc0I7SUFRL0QsWUFBbUIsUUFBa0IsRUFDM0IsYUFBOEIsRUFDOUIsYUFBbUM7UUFDM0MsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUNkLFVBQVUsRUFBRSxFQUFFO1NBQ2YsQ0FBQyxDQUFDO1FBTGMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQixrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBTHRDLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBU2xDLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxD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UUFBUSxFQUFFLGtCQUFrQjtnQkFFNUIsb3VDQUE2Qzs7YUFDOUM7OztZQXBCbUIsUUFBUTtZQUduQixlQUFlO1lBUWYsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTmJEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHtcbiAgUmVzcG9uc2VDb2RlLFxuICBPQVVUSF9JTkZPLFxuICBTZWN1cml0eVJlc291cmNlTW9kZWwsXG4gIEVuY3J5cHRpb25TZXJ2aWNlXG4gfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQXV0aEluZGV4ZWREQlNlcnZpY2UsIEF1dGhUb2tlblNlcnZpY2UgfSBmcm9tICdAZG9uZ2thcC9kby1hdXRoJztcbmltcG9ydCB7IEJhc2VGb3JtQ29tcG9uZW50IH0gZnJvbSAnQGRvbmdrYXAvZG8tY29tbW9uJztcbmltcG9ydCB7IERlYWN0aXZhdGVkUHJvbXB0Q29tcG9uZW50IH0gZnJvbSAnLi9wcm9tcHQvZGVhY3RpdmF0ZWQtcHJvbXB0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZWFjdGl2YXRlZFByb3ZpZGVyUHJvbXB0Q29tcG9uZW50IH0gZnJvbSAnLi9wcm9tcHQvZGVhY3RpdmF0ZWQtcHJvdmlkZXItcHJvbXB0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLXNlY3VyaXR5LXBhZ2UnLFxuICBzdHlsZVVybHM6IFsnLi9zZWN1cml0eS1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWN1cml0eS1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZvcm1Db21wb25lbnQ8YW55PiB7XG5cbiAgcHJpdmF0ZSBlbmM6IEVuY3J5cHRpb25TZXJ2aWNlO1xuICBwcml2YXRlIG9hdXRoUmVzb3VyY2U6IFNlY3VyaXR5UmVzb3VyY2VNb2RlbDtcbiAgcHJpdmF0ZSBhdXRoVG9rZW46IEF1dGhUb2tlblNlcnZpY2U7XG4gIHB1YmxpYyBhdXRoUHJvdmlkZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgcHJvdmlkZXI6IGFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogTmJEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aEluZGV4ZWREQjogQXV0aEluZGV4ZWREQlNlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3Rvciwge1xuICAgICAgJ3Bhc3N3b3JkJzogW10sXG4gICAgfSk7XG4gICAgdGhpcy5lbmMgPSBpbmplY3Rvci5nZXQoRW5jcnlwdGlvblNlcnZpY2UpO1xuICAgIHRoaXMub2F1dGhSZXNvdXJjZSA9IGluamVjdG9yLmdldChPQVVUSF9JTkZPKTtcbiAgICB0aGlzLmF1dGhUb2tlbiA9IGluamVjdG9yLmdldChBdXRoVG9rZW5TZXJ2aWNlKTtcbiAgICB0aGlzLmF1dGhJbmRleGVkREIuZ2V0RW5jKCdwcm92aWRlcicpLnRoZW4oKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMucHJvdmlkZXIgPSB7XG4gICAgICAgICd2YWx1ZSc6IHZhbHVlLFxuICAgICAgfTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gJ2xvY2FsJykge1xuICAgICAgICB0aGlzLmF1dGhQcm92aWRlciA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb25TdWJtaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgaWYgKHRoaXMuYXV0aFByb3ZpZGVyKSB7XG4gICAgICB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihEZWFjdGl2YXRlZFByb3ZpZGVyUHJvbXB0Q29tcG9uZW50KVxuICAgICAgICAub25DbG9zZS5zdWJzY3JpYmUoKGVtYWlsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBpZiAoZW1haWwpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgICAgICAgICAnZW1haWwnOiBlbWFpbCxcbiAgICAgICAgICAgICAgJ3Byb3ZpZGVyJzogdGhpcy5wcm92aWRlclsndmFsdWUnXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAoc3VwZXIub25TdWJtaXQoZGF0YSwgJ3NlY3VyaXR5JywgJ2RlYWN0aXZhdGVkJykgYXMgT2JzZXJ2YWJsZTxBcGlCYXNlUmVzcG9uc2U+KVxuICAgICAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXNwU3RhdHVzQ29kZSA9PT0gUmVzcG9uc2VDb2RlLk9LX1NDUjAwMy50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFRva2VuLmxvZ291dCgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihEZWFjdGl2YXRlZFByb21wdENvbXBvbmVudClcbiAgICAgICAgLm9uQ2xvc2Uuc3Vic2NyaWJlKChwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgaWYgKHBhc3N3b3JkKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGE6IGFueSA9IHtcbiAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuZW5jLmVuY3J5cHRBRVModGhpcy5vYXV0aFJlc291cmNlWydhZXNfa2V5J10sIHBhc3N3b3JkKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAoc3VwZXIub25TdWJtaXQoZGF0YSwgJ3NlY3VyaXR5JywgJ2RlYWN0aXZhdGVkJykgYXMgT2JzZXJ2YWJsZTxBcGlCYXNlUmVzcG9uc2U+KVxuICAgICAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXNwU3RhdHVzQ29kZSA9PT0gUmVzcG9uc2VDb2RlLk9LX1NDUjAwMy50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFRva2VuLmxvZ291dCgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=