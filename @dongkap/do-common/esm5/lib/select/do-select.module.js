import { __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { DoBaseModule } from '../base/do-base.module';
import { DoSelectComponent } from './do-select.component';
import { ContentSelectDirective } from './directive/content-select.directive';
export var SELECT_COMPONENTS = [
    DoSelectComponent,
];
export var SELECT_DIRECTIVES = [
    ContentSelectDirective,
];
var DoSelectModule = /** @class */ (function () {
    function DoSelectModule() {
    }
    DoSelectModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgSelectModule,
                        TranslateModule,
                        DoBaseModule,
                    ],
                    declarations: __spread(SELECT_COMPONENTS, SELECT_DIRECTIVES),
                    exports: __spread(SELECT_COMPONENTS, SELECT_DIRECTIVES),
                },] }
    ];
    return DoSelectModule;
}());
export { DoSelectModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tc2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3QvZG8tc2VsZWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTlFLE1BQU0sQ0FBQyxJQUFNLGlCQUFpQixHQUFHO0lBQy9CLGlCQUFpQjtDQUNsQixDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0saUJBQWlCLEdBQUc7SUFDL0Isc0JBQXNCO0NBQ3ZCLENBQUM7QUFFRjtJQUFBO0lBa0I4QixDQUFDOztnQkFsQjlCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxXQUNQLGlCQUFpQixFQUNqQixpQkFBaUIsQ0FDckI7b0JBQ0QsT0FBTyxXQUNGLGlCQUFpQixFQUNqQixpQkFBaUIsQ0FDckI7aUJBQ0Y7O0lBQzZCLHFCQUFDO0NBQUEsQUFsQi9CLElBa0IrQjtTQUFsQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgTmdTZWxlY3RNb2R1bGUgfSBmcm9tICdAbmctc2VsZWN0L25nLXNlbGVjdCc7XG5pbXBvcnQgeyBEb0Jhc2VNb2R1bGUgfSBmcm9tICcuLi9iYXNlL2RvLWJhc2UubW9kdWxlJztcbmltcG9ydCB7IERvU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9kby1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRlbnRTZWxlY3REaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9jb250ZW50LXNlbGVjdC5kaXJlY3RpdmUnO1xuXG5leHBvcnQgY29uc3QgU0VMRUNUX0NPTVBPTkVOVFMgPSBbXG4gIERvU2VsZWN0Q29tcG9uZW50LFxuXTtcblxuZXhwb3J0IGNvbnN0IFNFTEVDVF9ESVJFQ1RJVkVTID0gW1xuICBDb250ZW50U2VsZWN0RGlyZWN0aXZlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5nU2VsZWN0TW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBEb0Jhc2VNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLlNFTEVDVF9DT01QT05FTlRTLFxuICAgIC4uLlNFTEVDVF9ESVJFQ1RJVkVTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uU0VMRUNUX0NPTVBPTkVOVFMsXG4gICAgLi4uU0VMRUNUX0RJUkVDVElWRVMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERvU2VsZWN0TW9kdWxlIHsgfVxuIl19