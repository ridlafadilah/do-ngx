import { Component } from '@angular/core';
import { Location } from '@angular/common';
export class AuthComponent {
    constructor(location) {
        this.location = location;
    }
    back() {
        this.location.back();
        return false;
    }
    ngOnDestroy() {
        this.alive = false;
    }
}
AuthComponent.ctorParameters = () => [
    { type: Location }
];
AuthComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-auth',
                template: "<nb-layout>\n    <nb-layout-column>\n        <nb-card>\n            <nb-card-header>\n                <nav class=\"navigation\">\n                    <a href=\"#\" (click)=\"back()\" class=\"link back-link\" aria-label=\"Back\" tabindex=\"-1\">\n                        <nb-icon icon=\"arrow-back\"></nb-icon>\n                    </a>\n                </nav>\n            </nb-card-header>\n            <nb-card-body>\n                <do-auth-block>\n                    <router-outlet></router-outlet>\n                </do-auth-block>\n            </nb-card-body>\n        </nb-card>\n    </nb-layout-column>\n</nb-layout>",
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host nb-card{margin:0;height:calc(100vh - 2 * 2.5rem)}:host .navigation .link{display:inline-block;text-decoration:none}:host .navigation .link nb-icon{font-size:2rem;vertical-align:middle}:host .links nb-icon{font-size:2.5rem}:host nb-card-body{display:flex;width:100%}:host do-auth-block{margin:auto}:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}@media (max-width:767.98px){:host nb-card{border-radius:0;height:100vh}:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}}"]
            },] }
];
AuthComponent.ctorParameters = () => [
    { type: Location }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1hdXRoLyIsInNvdXJjZXMiOlsibGliL2xheW91dC9hdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU8zQyxNQUFNLE9BQU8sYUFBYTtJQU90QixZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQztJQUVuQyxJQUFJO1FBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7OztZQVQ2QixRQUFROzs7WUFaekMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUVuQiw4bkJBQWtDOzthQUNuQzs7O1lBTlEsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWF1dGgnLFxuICBzdHlsZVVybHM6IFsnYXV0aC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2F1dGguY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICAgIGFsaXZlOiBib29sZWFuO1xuICAgIHN1YnNjcmlwdGlvbjogYW55O1xuICAgIGF1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XG4gICAgdG9rZW46IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uKSB7fVxuXG4gICAgcHVibGljIGJhY2soKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWxpdmUgPSBmYWxzZTtcbiAgICB9XG5cbn1cbiJdfQ==