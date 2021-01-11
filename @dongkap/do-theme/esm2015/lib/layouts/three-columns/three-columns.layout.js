import { Component } from '@angular/core';
export class ThreeColumnsLayoutComponent {
}
ThreeColumnsLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-three-columns-layout',
                template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <do-header></do-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column class="small">
      </nb-layout-column>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-column class="small">
      </nb-layout-column>

      <nb-layout-footer fixed>
        <do-footer></do-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}"]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyZWUtY29sdW1ucy5sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXRzL3RocmVlLWNvbHVtbnMvdGhyZWUtY29sdW1ucy5sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQStCMUMsTUFBTSxPQUFPLDJCQUEyQjs7O1lBN0J2QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFFbkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3QlQ7O2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tdGhyZWUtY29sdW1ucy1sYXlvdXQnLFxuICBzdHlsZVVybHM6IFsnLi90aHJlZS1jb2x1bW5zLmxheW91dC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5iLWxheW91dCB3aW5kb3dNb2RlPlxuICAgICAgPG5iLWxheW91dC1oZWFkZXIgZml4ZWQ+XG4gICAgICAgIDxkby1oZWFkZXI+PC9kby1oZWFkZXI+XG4gICAgICA8L25iLWxheW91dC1oZWFkZXI+XG5cbiAgICAgIDxuYi1zaWRlYmFyIGNsYXNzPVwibWVudS1zaWRlYmFyXCIgdGFnPVwibWVudS1zaWRlYmFyXCIgcmVzcG9uc2l2ZT5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibmItbWVudVwiPjwvbmctY29udGVudD5cbiAgICAgIDwvbmItc2lkZWJhcj5cblxuICAgICAgPG5iLWxheW91dC1jb2x1bW4gY2xhc3M9XCJzbWFsbFwiPlxuICAgICAgPC9uYi1sYXlvdXQtY29sdW1uPlxuXG4gICAgICA8bmItbGF5b3V0LWNvbHVtbj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwicm91dGVyLW91dGxldFwiPjwvbmctY29udGVudD5cbiAgICAgIDwvbmItbGF5b3V0LWNvbHVtbj5cblxuICAgICAgPG5iLWxheW91dC1jb2x1bW4gY2xhc3M9XCJzbWFsbFwiPlxuICAgICAgPC9uYi1sYXlvdXQtY29sdW1uPlxuXG4gICAgICA8bmItbGF5b3V0LWZvb3RlciBmaXhlZD5cbiAgICAgICAgPGRvLWZvb3Rlcj48L2RvLWZvb3Rlcj5cbiAgICAgIDwvbmItbGF5b3V0LWZvb3Rlcj5cbiAgICA8L25iLWxheW91dD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVGhyZWVDb2x1bW5zTGF5b3V0Q29tcG9uZW50IHt9XG4iXX0=