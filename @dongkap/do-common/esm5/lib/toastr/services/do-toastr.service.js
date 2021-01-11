import { Injectable } from '@angular/core';
// import 'style-loader!angular2-toaster/toaster.css';
import { NbGlobalPhysicalPosition, NbToastrService, } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
var DoToastrService = /** @class */ (function () {
    function DoToastrService(toastrService, translate) {
        this.toastrService = toastrService;
        this.translate = translate;
        this.status = 'success';
        this.position = NbGlobalPhysicalPosition.TOP_RIGHT;
        this.duration = 5000;
        this.hasIcon = true;
        this.destroyByClick = true;
        this.preventDuplicates = false;
    }
    DoToastrService.prototype.show = function (content, title, status, position, duration, hasIcon, destroyByClick) {
        if (!title)
            title = this.title(status);
        this.build(content, title, status, position, duration, hasIcon, destroyByClick);
    };
    DoToastrService.prototype.showI18n = function (content, contentHasI18n, title, status, position, duration, hasIcon, destroyByClick) {
        var _this = this;
        if (!title)
            title = this.title(status);
        this.translate.get(title).subscribe(function (resultTitle) {
            title = resultTitle;
            if (contentHasI18n) {
                _this.build(content, title, status, position, duration, hasIcon, destroyByClick);
            }
            else {
                _this.translate.get(content).subscribe(function (resultContent) {
                    _this.build(resultContent, title, status, position, duration, hasIcon, destroyByClick);
                });
            }
        });
    };
    DoToastrService.prototype.build = function (content, title, status, position, duration, hasIcon, destroyByClick) {
        this.toastrService.show(content, title, {
            status: status ? status : this.status,
            position: position ? position : this.position,
            duration: duration ? duration : this.duration,
            hasIcon: hasIcon ? hasIcon : this.hasIcon,
            destroyByClick: destroyByClick ? destroyByClick : this.destroyByClick,
            preventDuplicates: this.preventDuplicates,
        });
    };
    DoToastrService.prototype.title = function (status) {
        var title = 'Success';
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
    };
    DoToastrService.ctorParameters = function () { return [
        { type: NbToastrService },
        { type: TranslateService }
    ]; };
    DoToastrService.decorators = [
        { type: Injectable }
    ];
    DoToastrService.ctorParameters = function () { return [
        { type: NbToastrService },
        { type: TranslateService }
    ]; };
    return DoToastrService;
}());
export { DoToastrService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tdG9hc3RyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb21tb24vIiwic291cmNlcyI6WyJsaWIvdG9hc3RyL3NlcnZpY2VzL2RvLXRvYXN0ci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0Msc0RBQXNEO0FBQ3RELE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsZUFBZSxHQUNoQixNQUFNLGdCQUFnQixDQUFDO0FBR3hCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZEO0lBR0UseUJBQ1UsYUFBOEIsRUFDOUIsU0FBMkI7UUFEM0Isa0JBQWEsR0FBYixhQUFhLENBQWlCO1FBQzlCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBRTdCLFdBQU0sR0FBc0IsU0FBUyxDQUFDO1FBQ3RDLGFBQVEsR0FBcUIsd0JBQXdCLENBQUMsU0FBUyxDQUFDO1FBQ2hFLGFBQVEsR0FBVyxJQUFJLENBQUM7UUFDeEIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixtQkFBYyxHQUFZLElBQUksQ0FBQztRQUMvQixzQkFBaUIsR0FBWSxLQUFLLENBQUM7SUFQSCxDQUFDO0lBU2xDLDhCQUFJLEdBQVgsVUFDRSxPQUFlLEVBQ2YsS0FBYyxFQUNkLE1BQTBCLEVBQzFCLFFBQTJCLEVBQzNCLFFBQWlCLEVBQ2pCLE9BQWlCLEVBQ2pCLGNBQXdCO1FBQ3hCLElBQUksQ0FBQyxLQUFLO1lBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRU0sa0NBQVEsR0FBZixVQUNFLE9BQWUsRUFDZixjQUF3QixFQUN4QixLQUFjLEVBQ2QsTUFBMEIsRUFDMUIsUUFBMkIsRUFDM0IsUUFBaUIsRUFDakIsT0FBaUIsRUFDakIsY0FBd0I7UUFSMUIsaUJBb0JDO1FBWEMsSUFBSSxDQUFDLEtBQUs7WUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxXQUFtQjtZQUN0RCxLQUFLLEdBQUcsV0FBVyxDQUFDO1lBQ3BCLElBQUksY0FBYyxFQUFFO2dCQUNsQixLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQ2pGO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLGFBQXFCO29CQUMxRCxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO2dCQUN4RixDQUFDLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sK0JBQUssR0FBYixVQUNFLE9BQWUsRUFDZixLQUFhLEVBQ2IsTUFBeUIsRUFDekIsUUFBMEIsRUFDMUIsUUFBZ0IsRUFDaEIsT0FBZ0IsRUFDaEIsY0FBdUI7UUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRTtZQUN0QyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ3JDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFDN0MsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUM3QyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQ3pDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWM7WUFDckUsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtTQUMxQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sK0JBQUssR0FBYixVQUFjLE1BQXlCO1FBQ3JDLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUN0QixRQUFRLE1BQU0sRUFBRTtZQUNkLEtBQUssU0FBUztnQkFDWixLQUFLLEdBQUcsY0FBYyxDQUFDO2dCQUN2QixNQUFNO1lBQ1IsS0FBSyxTQUFTO2dCQUNaLEtBQUssR0FBRyxTQUFTLENBQUM7Z0JBQ2xCLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsS0FBSyxHQUFHLFNBQVMsQ0FBQztnQkFDbEIsTUFBTTtZQUNSLEtBQUssTUFBTTtnQkFDVCxLQUFLLEdBQUcsYUFBYSxDQUFDO2dCQUN0QixNQUFNO1lBQ1I7Z0JBQ0UsTUFBTTtTQUNUO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkFqRndCLGVBQWU7Z0JBQ25CLGdCQUFnQjs7O2dCQUx0QyxVQUFVOzs7Z0JBTlQsZUFBZTtnQkFJUixnQkFBZ0I7O0lBeUZ6QixzQkFBQztDQUFBLEFBdkZELElBdUZDO1NBdEZZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIGltcG9ydCAnc3R5bGUtbG9hZGVyIWFuZ3VsYXIyLXRvYXN0ZXIvdG9hc3Rlci5jc3MnO1xuaW1wb3J0IHtcbiAgTmJHbG9iYWxQaHlzaWNhbFBvc2l0aW9uLFxuICBOYlRvYXN0clNlcnZpY2UsXG59IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IE5iR2xvYmFsUG9zaXRpb24gfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBOYkNvbXBvbmVudFN0YXR1cyB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvVG9hc3RyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0b2FzdHJTZXJ2aWNlOiBOYlRvYXN0clNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UpIHt9XG5cbiAgcHJpdmF0ZSBzdGF0dXM6IE5iQ29tcG9uZW50U3RhdHVzID0gJ3N1Y2Nlc3MnO1xuICBwcml2YXRlIHBvc2l0aW9uOiBOYkdsb2JhbFBvc2l0aW9uID0gTmJHbG9iYWxQaHlzaWNhbFBvc2l0aW9uLlRPUF9SSUdIVDtcbiAgcHJpdmF0ZSBkdXJhdGlvbjogbnVtYmVyID0gNTAwMDtcbiAgcHJpdmF0ZSBoYXNJY29uOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBkZXN0cm95QnlDbGljazogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgcHJldmVudER1cGxpY2F0ZXM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgc2hvdyhcbiAgICBjb250ZW50OiBzdHJpbmcsXG4gICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgc3RhdHVzPzogTmJDb21wb25lbnRTdGF0dXMsXG4gICAgcG9zaXRpb24/OiBOYkdsb2JhbFBvc2l0aW9uLFxuICAgIGR1cmF0aW9uPzogbnVtYmVyLFxuICAgIGhhc0ljb24/OiBib29sZWFuLFxuICAgIGRlc3Ryb3lCeUNsaWNrPzogYm9vbGVhbikge1xuICAgIGlmICghdGl0bGUpIHRpdGxlID0gdGhpcy50aXRsZShzdGF0dXMpO1xuICAgIHRoaXMuYnVpbGQoY29udGVudCwgdGl0bGUsIHN0YXR1cywgcG9zaXRpb24sIGR1cmF0aW9uLCBoYXNJY29uLCBkZXN0cm95QnlDbGljayk7XG4gIH1cblxuICBwdWJsaWMgc2hvd0kxOG4oXG4gICAgY29udGVudDogc3RyaW5nLFxuICAgIGNvbnRlbnRIYXNJMThuPzogYm9vbGVhbixcbiAgICB0aXRsZT86IHN0cmluZyxcbiAgICBzdGF0dXM/OiBOYkNvbXBvbmVudFN0YXR1cyxcbiAgICBwb3NpdGlvbj86IE5iR2xvYmFsUG9zaXRpb24sXG4gICAgZHVyYXRpb24/OiBudW1iZXIsXG4gICAgaGFzSWNvbj86IGJvb2xlYW4sXG4gICAgZGVzdHJveUJ5Q2xpY2s/OiBib29sZWFuKSB7XG4gICAgaWYgKCF0aXRsZSkgdGl0bGUgPSB0aGlzLnRpdGxlKHN0YXR1cyk7XG4gICAgdGhpcy50cmFuc2xhdGUuZ2V0KHRpdGxlKS5zdWJzY3JpYmUoKHJlc3VsdFRpdGxlOiBzdHJpbmcpID0+IHtcbiAgICAgIHRpdGxlID0gcmVzdWx0VGl0bGU7XG4gICAgICBpZiAoY29udGVudEhhc0kxOG4pIHtcbiAgICAgICAgdGhpcy5idWlsZChjb250ZW50LCB0aXRsZSwgc3RhdHVzLCBwb3NpdGlvbiwgZHVyYXRpb24sIGhhc0ljb24sIGRlc3Ryb3lCeUNsaWNrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlLmdldChjb250ZW50KS5zdWJzY3JpYmUoKHJlc3VsdENvbnRlbnQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHRoaXMuYnVpbGQocmVzdWx0Q29udGVudCwgdGl0bGUsIHN0YXR1cywgcG9zaXRpb24sIGR1cmF0aW9uLCBoYXNJY29uLCBkZXN0cm95QnlDbGljayk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZChcbiAgICBjb250ZW50OiBzdHJpbmcsXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBzdGF0dXM6IE5iQ29tcG9uZW50U3RhdHVzLFxuICAgIHBvc2l0aW9uOiBOYkdsb2JhbFBvc2l0aW9uLFxuICAgIGR1cmF0aW9uOiBudW1iZXIsXG4gICAgaGFzSWNvbjogYm9vbGVhbixcbiAgICBkZXN0cm95QnlDbGljazogYm9vbGVhbikge1xuICAgIHRoaXMudG9hc3RyU2VydmljZS5zaG93KGNvbnRlbnQsIHRpdGxlLCB7XG4gICAgICBzdGF0dXM6IHN0YXR1cyA/IHN0YXR1cyA6IHRoaXMuc3RhdHVzLFxuICAgICAgcG9zaXRpb246IHBvc2l0aW9uID8gcG9zaXRpb24gOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uID8gZHVyYXRpb24gOiB0aGlzLmR1cmF0aW9uLFxuICAgICAgaGFzSWNvbjogaGFzSWNvbiA/IGhhc0ljb24gOiB0aGlzLmhhc0ljb24sXG4gICAgICBkZXN0cm95QnlDbGljazogZGVzdHJveUJ5Q2xpY2sgPyBkZXN0cm95QnlDbGljayA6IHRoaXMuZGVzdHJveUJ5Q2xpY2ssXG4gICAgICBwcmV2ZW50RHVwbGljYXRlczogdGhpcy5wcmV2ZW50RHVwbGljYXRlcyxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdGl0bGUoc3RhdHVzOiBOYkNvbXBvbmVudFN0YXR1cykge1xuICAgIGxldCB0aXRsZSA9ICdTdWNjZXNzJztcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgY2FzZSAncHJpbWFyeSc6XG4gICAgICAgIHRpdGxlID0gJ05vdGlmaWNhdGlvbic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnd2FybmluZyc6XG4gICAgICAgIHRpdGxlID0gJ1dhcm5pbmcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Rhbmdlcic6XG4gICAgICAgIHRpdGxlID0gJ0ZhaWx1cmUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICB0aXRsZSA9ICdJbmZvcm1hdGlvbic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG59XG4iXX0=