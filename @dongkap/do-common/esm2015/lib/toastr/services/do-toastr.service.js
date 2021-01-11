import { Injectable } from '@angular/core';
// import 'style-loader!angular2-toaster/toaster.css';
import { NbGlobalPhysicalPosition, NbToastrService, } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
export class DoToastrService {
    constructor(toastrService, translate) {
        this.toastrService = toastrService;
        this.translate = translate;
        this.status = 'success';
        this.position = NbGlobalPhysicalPosition.TOP_RIGHT;
        this.duration = 5000;
        this.hasIcon = true;
        this.destroyByClick = true;
        this.preventDuplicates = false;
    }
    show(content, title, status, position, duration, hasIcon, destroyByClick) {
        if (!title)
            title = this.title(status);
        this.build(content, title, status, position, duration, hasIcon, destroyByClick);
    }
    showI18n(content, contentHasI18n, title, status, position, duration, hasIcon, destroyByClick) {
        if (!title)
            title = this.title(status);
        this.translate.get(title).subscribe((resultTitle) => {
            title = resultTitle;
            if (contentHasI18n) {
                this.build(content, title, status, position, duration, hasIcon, destroyByClick);
            }
            else {
                this.translate.get(content).subscribe((resultContent) => {
                    this.build(resultContent, title, status, position, duration, hasIcon, destroyByClick);
                });
            }
        });
    }
    build(content, title, status, position, duration, hasIcon, destroyByClick) {
        this.toastrService.show(content, title, {
            status: status ? status : this.status,
            position: position ? position : this.position,
            duration: duration ? duration : this.duration,
            hasIcon: hasIcon ? hasIcon : this.hasIcon,
            destroyByClick: destroyByClick ? destroyByClick : this.destroyByClick,
            preventDuplicates: this.preventDuplicates,
        });
    }
    title(status) {
        let title = 'Success';
        switch (status) {
            case 'primary':
                title = 'Notification';
                break;
            case 'warning':
                title = 'Warning';
                break;
            case 'danger':
                title = 'Failure';
                break;
            case 'info':
                title = 'Information';
                break;
            default:
                break;
        }
        return title;
    }
}
DoToastrService.ctorParameters = () => [
    { type: NbToastrService },
    { type: TranslateService }
];
DoToastrService.decorators = [
    { type: Injectable }
];
DoToastrService.ctorParameters = () => [
    { type: NbToastrService },
    { type: TranslateService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tdG9hc3RyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb21tb24vIiwic291cmNlcyI6WyJsaWIvdG9hc3RyL3NlcnZpY2VzL2RvLXRvYXN0ci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0Msc0RBQXNEO0FBQ3RELE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsZUFBZSxHQUNoQixNQUFNLGdCQUFnQixDQUFDO0FBR3hCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR3ZELE1BQU0sT0FBTyxlQUFlO0lBRTFCLFlBQ1UsYUFBOEIsRUFDOUIsU0FBMkI7UUFEM0Isa0JBQWEsR0FBYixhQUFhLENBQWlCO1FBQzlCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBRTdCLFdBQU0sR0FBc0IsU0FBUyxDQUFDO1FBQ3RDLGFBQVEsR0FBcUIsd0JBQXdCLENBQUMsU0FBUyxDQUFDO1FBQ2hFLGFBQVEsR0FBVyxJQUFJLENBQUM7UUFDeEIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixtQkFBYyxHQUFZLElBQUksQ0FBQztRQUMvQixzQkFBaUIsR0FBWSxLQUFLLENBQUM7SUFQSCxDQUFDO0lBU2xDLElBQUksQ0FDVCxPQUFlLEVBQ2YsS0FBYyxFQUNkLE1BQTBCLEVBQzFCLFFBQTJCLEVBQzNCLFFBQWlCLEVBQ2pCLE9BQWlCLEVBQ2pCLGNBQXdCO1FBQ3hCLElBQUksQ0FBQyxLQUFLO1lBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRU0sUUFBUSxDQUNiLE9BQWUsRUFDZixjQUF3QixFQUN4QixLQUFjLEVBQ2QsTUFBMEIsRUFDMUIsUUFBMkIsRUFDM0IsUUFBaUIsRUFDakIsT0FBaUIsRUFDakIsY0FBd0I7UUFDeEIsSUFBSSxDQUFDLEtBQUs7WUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFtQixFQUFFLEVBQUU7WUFDMUQsS0FBSyxHQUFHLFdBQVcsQ0FBQztZQUNwQixJQUFJLGNBQWMsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQzthQUNqRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxhQUFxQixFQUFFLEVBQUU7b0JBQzlELElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBQ3hGLENBQUMsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxLQUFLLENBQ1gsT0FBZSxFQUNmLEtBQWEsRUFDYixNQUF5QixFQUN6QixRQUEwQixFQUMxQixRQUFnQixFQUNoQixPQUFnQixFQUNoQixjQUF1QjtRQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFO1lBQ3RDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDckMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUM3QyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQzdDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDekMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYztZQUNyRSxpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1NBQzFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxLQUFLLENBQUMsTUFBeUI7UUFDckMsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLFFBQVEsTUFBTSxFQUFFO1lBQ2QsS0FBSyxTQUFTO2dCQUNaLEtBQUssR0FBRyxjQUFjLENBQUM7Z0JBQ3ZCLE1BQU07WUFDUixLQUFLLFNBQVM7Z0JBQ1osS0FBSyxHQUFHLFNBQVMsQ0FBQztnQkFDbEIsTUFBTTtZQUNSLEtBQUssUUFBUTtnQkFDWCxLQUFLLEdBQUcsU0FBUyxDQUFDO2dCQUNsQixNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUNULEtBQUssR0FBRyxhQUFhLENBQUM7Z0JBQ3RCLE1BQU07WUFDUjtnQkFDRSxNQUFNO1NBQ1Q7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQWpGd0IsZUFBZTtZQUNuQixnQkFBZ0I7OztZQUx0QyxVQUFVOzs7WUFOVCxlQUFlO1lBSVIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBpbXBvcnQgJ3N0eWxlLWxvYWRlciFhbmd1bGFyMi10b2FzdGVyL3RvYXN0ZXIuY3NzJztcbmltcG9ydCB7XG4gIE5iR2xvYmFsUGh5c2ljYWxQb3NpdGlvbixcbiAgTmJUb2FzdHJTZXJ2aWNlLFxufSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBOYkdsb2JhbFBvc2l0aW9uIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgTmJDb21wb25lbnRTdGF0dXMgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb1RvYXN0clNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdG9hc3RyU2VydmljZTogTmJUb2FzdHJTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7fVxuXG4gIHByaXZhdGUgc3RhdHVzOiBOYkNvbXBvbmVudFN0YXR1cyA9ICdzdWNjZXNzJztcbiAgcHJpdmF0ZSBwb3NpdGlvbjogTmJHbG9iYWxQb3NpdGlvbiA9IE5iR2xvYmFsUGh5c2ljYWxQb3NpdGlvbi5UT1BfUklHSFQ7XG4gIHByaXZhdGUgZHVyYXRpb246IG51bWJlciA9IDUwMDA7XG4gIHByaXZhdGUgaGFzSWNvbjogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgZGVzdHJveUJ5Q2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIHByZXZlbnREdXBsaWNhdGVzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIHNob3coXG4gICAgY29udGVudDogc3RyaW5nLFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIHN0YXR1cz86IE5iQ29tcG9uZW50U3RhdHVzLFxuICAgIHBvc2l0aW9uPzogTmJHbG9iYWxQb3NpdGlvbixcbiAgICBkdXJhdGlvbj86IG51bWJlcixcbiAgICBoYXNJY29uPzogYm9vbGVhbixcbiAgICBkZXN0cm95QnlDbGljaz86IGJvb2xlYW4pIHtcbiAgICBpZiAoIXRpdGxlKSB0aXRsZSA9IHRoaXMudGl0bGUoc3RhdHVzKTtcbiAgICB0aGlzLmJ1aWxkKGNvbnRlbnQsIHRpdGxlLCBzdGF0dXMsIHBvc2l0aW9uLCBkdXJhdGlvbiwgaGFzSWNvbiwgZGVzdHJveUJ5Q2xpY2spO1xuICB9XG5cbiAgcHVibGljIHNob3dJMThuKFxuICAgIGNvbnRlbnQ6IHN0cmluZyxcbiAgICBjb250ZW50SGFzSTE4bj86IGJvb2xlYW4sXG4gICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgc3RhdHVzPzogTmJDb21wb25lbnRTdGF0dXMsXG4gICAgcG9zaXRpb24/OiBOYkdsb2JhbFBvc2l0aW9uLFxuICAgIGR1cmF0aW9uPzogbnVtYmVyLFxuICAgIGhhc0ljb24/OiBib29sZWFuLFxuICAgIGRlc3Ryb3lCeUNsaWNrPzogYm9vbGVhbikge1xuICAgIGlmICghdGl0bGUpIHRpdGxlID0gdGhpcy50aXRsZShzdGF0dXMpO1xuICAgIHRoaXMudHJhbnNsYXRlLmdldCh0aXRsZSkuc3Vic2NyaWJlKChyZXN1bHRUaXRsZTogc3RyaW5nKSA9PiB7XG4gICAgICB0aXRsZSA9IHJlc3VsdFRpdGxlO1xuICAgICAgaWYgKGNvbnRlbnRIYXNJMThuKSB7XG4gICAgICAgIHRoaXMuYnVpbGQoY29udGVudCwgdGl0bGUsIHN0YXR1cywgcG9zaXRpb24sIGR1cmF0aW9uLCBoYXNJY29uLCBkZXN0cm95QnlDbGljayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZS5nZXQoY29udGVudCkuc3Vic2NyaWJlKChyZXN1bHRDb250ZW50OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICB0aGlzLmJ1aWxkKHJlc3VsdENvbnRlbnQsIHRpdGxlLCBzdGF0dXMsIHBvc2l0aW9uLCBkdXJhdGlvbiwgaGFzSWNvbiwgZGVzdHJveUJ5Q2xpY2spO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGQoXG4gICAgY29udGVudDogc3RyaW5nLFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgc3RhdHVzOiBOYkNvbXBvbmVudFN0YXR1cyxcbiAgICBwb3NpdGlvbjogTmJHbG9iYWxQb3NpdGlvbixcbiAgICBkdXJhdGlvbjogbnVtYmVyLFxuICAgIGhhc0ljb246IGJvb2xlYW4sXG4gICAgZGVzdHJveUJ5Q2xpY2s6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnRvYXN0clNlcnZpY2Uuc2hvdyhjb250ZW50LCB0aXRsZSwge1xuICAgICAgc3RhdHVzOiBzdGF0dXMgPyBzdGF0dXMgOiB0aGlzLnN0YXR1cyxcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbiA/IHBvc2l0aW9uIDogdGhpcy5wb3NpdGlvbixcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiA/IGR1cmF0aW9uIDogdGhpcy5kdXJhdGlvbixcbiAgICAgIGhhc0ljb246IGhhc0ljb24gPyBoYXNJY29uIDogdGhpcy5oYXNJY29uLFxuICAgICAgZGVzdHJveUJ5Q2xpY2s6IGRlc3Ryb3lCeUNsaWNrID8gZGVzdHJveUJ5Q2xpY2sgOiB0aGlzLmRlc3Ryb3lCeUNsaWNrLFxuICAgICAgcHJldmVudER1cGxpY2F0ZXM6IHRoaXMucHJldmVudER1cGxpY2F0ZXMsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHRpdGxlKHN0YXR1czogTmJDb21wb25lbnRTdGF0dXMpIHtcbiAgICBsZXQgdGl0bGUgPSAnU3VjY2Vzcyc7XG4gICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgIGNhc2UgJ3ByaW1hcnknOlxuICAgICAgICB0aXRsZSA9ICdOb3RpZmljYXRpb24nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICB0aXRsZSA9ICdXYXJuaW5nJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYW5nZXInOlxuICAgICAgICB0aXRsZSA9ICdGYWlsdXJlJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpbmZvJzpcbiAgICAgICAgdGl0bGUgPSAnSW5mb3JtYXRpb24nO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxufVxuIl19