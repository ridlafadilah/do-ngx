import { Component } from '@angular/core';
export class OneColumnLayoutComponent {
}
OneColumnLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-one-column-layout',
                template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <do-header></do-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <do-footer></do-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}"]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lLWNvbHVtbi5sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXRzL29uZS1jb2x1bW4vb25lLWNvbHVtbi5sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXlCMUMsTUFBTSxPQUFPLHdCQUF3Qjs7O1lBdkJwQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFFaEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQlQ7O2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tb25lLWNvbHVtbi1sYXlvdXQnLFxuICBzdHlsZVVybHM6IFsnLi9vbmUtY29sdW1uLmxheW91dC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5iLWxheW91dCB3aW5kb3dNb2RlPlxuICAgICAgPG5iLWxheW91dC1oZWFkZXIgZml4ZWQ+XG4gICAgICAgIDxkby1oZWFkZXI+PC9kby1oZWFkZXI+XG4gICAgICA8L25iLWxheW91dC1oZWFkZXI+XG5cbiAgICAgIDxuYi1zaWRlYmFyIGNsYXNzPVwibWVudS1zaWRlYmFyXCIgdGFnPVwibWVudS1zaWRlYmFyXCIgcmVzcG9uc2l2ZT5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibmItbWVudVwiPjwvbmctY29udGVudD5cbiAgICAgIDwvbmItc2lkZWJhcj5cblxuICAgICAgPG5iLWxheW91dC1jb2x1bW4+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInJvdXRlci1vdXRsZXRcIj48L25nLWNvbnRlbnQ+XG4gICAgICA8L25iLWxheW91dC1jb2x1bW4+XG5cbiAgICAgIDxuYi1sYXlvdXQtZm9vdGVyIGZpeGVkPlxuICAgICAgICA8ZG8tZm9vdGVyPjwvZG8tZm9vdGVyPlxuICAgICAgPC9uYi1sYXlvdXQtZm9vdGVyPlxuICAgIDwvbmItbGF5b3V0PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBPbmVDb2x1bW5MYXlvdXRDb21wb25lbnQge31cbiJdfQ==