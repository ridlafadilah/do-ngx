import { Component, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from '@dongkap/do-common';
export class TermsConditionsPageComponent extends BaseComponent {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        const data = {
            'parameterCode': 'TERMS_CONDITIONS.DONGKAP'
        };
        this.http.HTTP_AUTH(this.api['master']['parameter'], data)
            .pipe(takeUntil(this.destroy$))
            .subscribe((response) => {
            this.content = response['parameterValue'];
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
}
TermsConditionsPageComponent.ctorParameters = () => [
    { type: Injector }
];
TermsConditionsPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-terms-conditions-page',
                template: "<!-- https://www.privacypolicyonline.com/live.php?token=c7NdqfNju6oyhdnlrnLPdskC3Pft3FuH -->\n<do-page-outlet [header]=\"'header.terms-conditions'\">\n  <div [innerHTML]=\"content\" pagecontent></div>\n</do-page-outlet>\n",
                styles: [""]
            },] }
];
TermsConditionsPageComponent.ctorParameters = () => [
    { type: Injector }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVybXMtY29uZGl0aW9ucy1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWV4dHJhLyIsInNvdXJjZXMiOlsibGliL3Rlcm1zL3Rlcm1zLWNvbmRpdGlvbnMtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBT25ELE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxhQUFrQjtJQUtsRSxZQUFtQixRQUFrQjtRQUNuQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFEQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBRjNCLGFBQVEsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQUl0RCxDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sSUFBSSxHQUFRO1lBQ2hCLGVBQWUsRUFBRSwwQkFBMEI7U0FDNUMsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDO2FBQ3pELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCLFNBQVMsQ0FBQyxDQUFDLFFBQWEsRUFBRSxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7WUFuQjRCLFFBQVE7OztZQVZ0QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFFcEMseU9BQXFEOzthQUN0RDs7O1lBWG1CLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLXRlcm1zLWNvbmRpdGlvbnMtcGFnZScsXG4gIHN0eWxlVXJsczogWycuL3Rlcm1zLWNvbmRpdGlvbnMtcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vdGVybXMtY29uZGl0aW9ucy1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGVybXNDb25kaXRpb25zUGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwdWJsaWMgY29udGVudDogc3RyaW5nO1xuICBwcm90ZWN0ZWQgZGVzdHJveSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgJ3BhcmFtZXRlckNvZGUnOiAnVEVSTVNfQ09ORElUSU9OUy5ET05HS0FQJ1xuICAgIH07XG4gICAgdGhpcy5odHRwLkhUVFBfQVVUSCh0aGlzLmFwaVsnbWFzdGVyJ11bJ3BhcmFtZXRlciddLCBkYXRhKVxuICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICB0aGlzLmNvbnRlbnQgPSByZXNwb25zZVsncGFyYW1ldGVyVmFsdWUnXTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95JC51bnN1YnNjcmliZSgpO1xuICB9XG5cbn1cbiJdfQ==