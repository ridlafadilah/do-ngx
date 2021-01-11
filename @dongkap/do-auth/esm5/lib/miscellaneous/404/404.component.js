import { Component } from '@angular/core';
import { Location } from '@angular/common';
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(location) {
        this.location = location;
    }
    PageNotFoundComponent.prototype.goToHome = function () {
        this.location.back();
        return;
    };
    PageNotFoundComponent.ctorParameters = function () { return [
        { type: Location }
    ]; };
    PageNotFoundComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-404',
                    template: "<div class=\"flex-centered\">\n  <h2 class=\"title\">404</h2>\n  <h2 class=\"title\">Page Not Found</h2>\n  <small class=\"sub-title\">The page you were looking for doesn't exist</small>\n  <button nbButton fullWidth (click)=\"goToHome()\" type=\"button\" class=\"home-button\">\n    Take me home\n  </button>\n</div>\n",
                    styles: [".flex-centered{margin:auto}nb-card-body{display:flex}.title{text-align:center}.sub-title{text-align:center;display:block;margin-bottom:3rem}.home-button{margin-bottom:2rem}"]
                },] }
    ];
    PageNotFoundComponent.ctorParameters = function () { return [
        { type: Location }
    ]; };
    return PageNotFoundComponent;
}());
export { PageNotFoundComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDA0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWF1dGgvIiwic291cmNlcyI6WyJsaWIvbWlzY2VsbGFuZW91cy80MDQvNDA0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQztJQU9FLCtCQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3RDLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixPQUFPO0lBQ1QsQ0FBQzs7Z0JBTjZCLFFBQVE7OztnQkFQdkMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxRQUFRO29CQUVsQiwyVUFBbUM7O2lCQUNwQzs7O2dCQU5RLFFBQVE7O0lBZ0JqQiw0QkFBQztDQUFBLEFBZEQsSUFjQztTQVRZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby00MDQnLFxuICBzdHlsZVVybHM6IFsnLi80MDQuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuLzQwNC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VOb3RGb3VuZENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24pIHtcbiAgfVxuXG4gIGdvVG9Ib21lKCkge1xuICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19