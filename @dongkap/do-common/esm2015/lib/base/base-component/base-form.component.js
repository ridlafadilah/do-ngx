import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { BaseComponent } from './base.component';
import { DoToastrService } from '../../toastr/services/do-toastr.service';
export class BaseFormComponent extends BaseComponent {
    constructor(injector, controlsConfig) {
        super(injector);
        this.injector = injector;
        this.submitSubject$ = new Subject();
        this.destroy$ = new Subject();
        this.disabled = false;
        this.loadingForm = false;
        this.formBuilder = injector.get(FormBuilder);
        if (controlsConfig)
            this.formGroup = this.formBuilder.group(controlsConfig);
        this.toastr = injector.get(DoToastrService);
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
        this.onDestroy();
    }
    onSubmit(body, serviceName, apiName, disableToastr) {
        this.disabled = true;
        this.exec(serviceName, apiName, body ? body : this.formGroup.value)
            .subscribe((success) => {
            this.submitSubject$.next(success);
            this.formGroup.markAsPristine();
            this.disabled = false;
            if (!disableToastr)
                this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
        }, (error) => {
            this.submitSubject$.next(error);
            this.disabled = false;
            if (!disableToastr)
                this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
        return this.submitSubject$.asObservable();
    }
    onDestroy() { }
    onReset() { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9iYXNlL2Jhc2UtY29tcG9uZW50L2Jhc2UtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFhLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUUxRSxNQUFNLE9BQWdCLGlCQUFxQixTQUFRLGFBQWdCO0lBVS9ELFlBQ1csUUFBa0IsRUFDekIsY0FFQztRQUNELEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUpULGFBQVEsR0FBUixRQUFRLENBQVU7UUFSbkIsbUJBQWMsR0FBRyxJQUFJLE9BQU8sRUFBbUIsQ0FBQztRQUNoRCxhQUFRLEdBQWlCLElBQUksT0FBTyxFQUFPLENBQUM7UUFHL0MsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQVFoQyxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0MsSUFBSSxjQUFjO1lBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBVSxFQUFFLFdBQW9CLEVBQUUsT0FBZ0IsRUFBRSxhQUF1QjtRQUNoRixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO2FBQzlELFNBQVMsQ0FDTixDQUFDLE9BQXdCLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxhQUFhO2dCQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEYsQ0FBQyxFQUNELENBQUMsS0FBc0IsRUFBRSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxhQUFhO2dCQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNsRyxDQUFDLENBQ0osQ0FBQztRQUNOLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRUQsU0FBUyxLQUFTLENBQUM7SUFFbkIsT0FBTyxLQUFVLENBQUM7Q0FFckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXBpQmFzZVJlc3BvbnNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb1RvYXN0clNlcnZpY2UgfSBmcm9tICcuLi8uLi90b2FzdHIvc2VydmljZXMvZG8tdG9hc3RyLnNlcnZpY2UnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUZvcm1Db21wb25lbnQ8VD4gZXh0ZW5kcyBCYXNlQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICAgIHByb3RlY3RlZCB0b2FzdHI6IERvVG9hc3RyU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgc3VibWl0U3ViamVjdCQgPSBuZXcgU3ViamVjdDxBcGlCYXNlUmVzcG9uc2U+KCk7XG4gICAgcHJvdGVjdGVkIGRlc3Ryb3kkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgcHVibGljIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICAgIHB1YmxpYyBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXI7XG4gICAgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGxvYWRpbmdGb3JtOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGluamVjdG9yOiBJbmplY3RvcixcbiAgICAgICAgY29udHJvbHNDb25maWc/OiB7XG4gICAgICAgICAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gICAgICAgIH0pIHtcbiAgICAgICAgc3VwZXIoaW5qZWN0b3IpO1xuICAgICAgICB0aGlzLmZvcm1CdWlsZGVyID0gaW5qZWN0b3IuZ2V0KEZvcm1CdWlsZGVyKTtcbiAgICAgICAgaWYgKGNvbnRyb2xzQ29uZmlnKVxuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKGNvbnRyb2xzQ29uZmlnKTtcbiAgICAgICAgdGhpcy50b2FzdHIgPSBpbmplY3Rvci5nZXQoRG9Ub2FzdHJTZXJ2aWNlKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xuICAgICAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgICAgIHRoaXMuZGVzdHJveSQudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdChib2R5PzogYW55LCBzZXJ2aWNlTmFtZT86IHN0cmluZywgYXBpTmFtZT86IHN0cmluZywgZGlzYWJsZVRvYXN0cj86IGJvb2xlYW4pOiBhbnkge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5leGVjKHNlcnZpY2VOYW1lLCBhcGlOYW1lLCBib2R5ID8gYm9keSA6IHRoaXMuZm9ybUdyb3VwLnZhbHVlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoc3VjY2VzczogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0U3ViamVjdCQubmV4dChzdWNjZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAubWFya0FzUHJpc3RpbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRpc2FibGVUb2FzdHIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihzdWNjZXNzLnJlc3BTdGF0dXNNZXNzYWdlW3N1Y2Nlc3MucmVzcFN0YXR1c0NvZGVdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnJvcjogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0U3ViamVjdCQubmV4dChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkaXNhYmxlVG9hc3RyKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oZXJyb3IucmVzcFN0YXR1c01lc3NhZ2VbZXJyb3IucmVzcFN0YXR1c0NvZGVdLCB0cnVlLCBudWxsLCAnZGFuZ2VyJyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aGlzLnN1Ym1pdFN1YmplY3QkLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpOiB2b2lke31cblxuICAgIG9uUmVzZXQoKTogdm9pZCB7fVxuXG59XG4iXX0=