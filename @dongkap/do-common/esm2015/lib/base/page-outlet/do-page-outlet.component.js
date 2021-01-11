import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
export class DoPageOutletComponent {
    constructor(router) {
        this.router = router;
        this.width = 12;
        this.selectChange = new EventEmitter();
    }
    back() {
        this.router.navigate([this.url]);
        return false;
    }
    onChangeSelect(event) {
        this.selected = event;
        this.selectChange.emit(event);
    }
}
DoPageOutletComponent.ctorParameters = () => [
    { type: Router }
];
DoPageOutletComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-page-outlet',
                template: "<div class=\"row\">\n  <div class=\"col-lg-{{width}}\">\n    <nb-card>\n      <nb-card-header>\n        <nav class=\"navigation\">\n            <a href=\"#\" (click)=\"back()\" class=\"link back-link\" aria-label=\"Back\" *ngIf=\"url\">\n                <nb-icon icon=\"arrow-back\"></nb-icon>\n            </a>\n            {{header | translate:param}}\n        </nav>\n        <nb-select *ngIf=\"dataSelect\" [selected]=\"selected\" (selectedChange)=\"onChangeSelect($event)\">\n          <nb-option *ngFor=\"let data of dataSelect\" [value]=\"data\">{{ data }}</nb-option>\n        </nb-select>\n      </nb-card-header>\n      <nb-card-body>\n        <ng-content select=\"[pagecontent]\"></ng-content>        \n      </nb-card-body>\n      <ng-content select=\"[pagefooter]\"></ng-content>\n    </nb-card>\n  </div>\n</div>\n    ",
                encapsulation: ViewEncapsulation.None,
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */nb-card-header{display:flex;align-items:center;justify-content:space-between;padding-top:.5rem;padding-bottom:.5rem}.skeleton{-webkit-animation:1.7s linear infinite loading;animation:1.7s linear infinite loading;border-radius:.25rem;background:#dedfe1;background-image:linear-gradient(to right,#dedfe1 0,#f2f3f5 20%,#dedfe1 40%,#dedfe1 100%)}@-webkit-keyframes loading{0%{background-position:-100px}100%{background-position:380px}}@keyframes loading{0%{background-position:-100px}100%{background-position:380px}}.navigation .link{display:inline-block}.navigation .link nb-icon{color:#36f;font-size:1.25rem;vertical-align:middle;margin-right:.25rem}.input-skeleton,.label-skeleton{width:100%;height:2.5rem;line-height:1.5rem;padding:.4375rem 1.125rem}.button-skeleton{width:50%;height:2.5rem;line-height:1rem;padding:.625rem 1.125rem}"]
            },] }
];
DoPageOutletComponent.ctorParameters = () => [
    { type: Router }
];
DoPageOutletComponent.propDecorators = {
    header: [{ type: Input }],
    url: [{ type: Input }],
    width: [{ type: Input }],
    dataSelect: [{ type: Input }],
    selected: [{ type: Input }],
    param: [{ type: Input }],
    selectChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tcGFnZS1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2Jhc2UvcGFnZS1vdXRsZXQvZG8tcGFnZS1vdXRsZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUXpDLE1BQU0sT0FBTyxxQkFBcUI7SUFTaEMsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFObEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUlsQixpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRXRDLENBQUM7SUFFL0IsSUFBSTtRQUNULElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU0sY0FBYyxDQUFDLEtBQVU7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBVjJCLE1BQU07OztZQWZuQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFFMUIsNDBCQUE4QztnQkFDOUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7WUFQUSxNQUFNOzs7cUJBU1osS0FBSztrQkFDTCxLQUFLO29CQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO29CQUNMLEtBQUs7MkJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tcGFnZS1vdXRsZXQnLFxuICBzdHlsZVVybHM6IFsnLi9kby1wYWdlLW91dGxldC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZG8tcGFnZS1vdXRsZXQuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBEb1BhZ2VPdXRsZXRDb21wb25lbnQge1xuICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyB1cmw6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIHdpZHRoOiBudW1iZXIgPSAxMjtcbiAgQElucHV0KCkgcHVibGljIGRhdGFTZWxlY3Q6IGFueVtdO1xuICBASW5wdXQoKSBwdWJsaWMgc2VsZWN0ZWQ6IGFueTtcbiAgQElucHV0KCkgcHVibGljIHBhcmFtOiBhbnk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgcHVibGljIGJhY2soKTogYm9vbGVhbiB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMudXJsXSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHVibGljIG9uQ2hhbmdlU2VsZWN0KGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gZXZlbnQ7XG4gICAgdGhpcy5zZWxlY3RDaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cblxufVxuIl19