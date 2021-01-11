import { __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DoToastrService } from './services/do-toastr.service';
export var TOASTR_COMPONENTS = [];
export var TOASTR_PROVIDERS = [
    DoToastrService,
];
var DoToastrModule = /** @class */ (function () {
    function DoToastrModule() {
    }
    DoToastrModule.forRoot = function () {
        return {
            ngModule: DoToastrModule,
            providers: __spread(TOASTR_PROVIDERS),
        };
    };
    DoToastrModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule,
                    ],
                    declarations: __spread(TOASTR_COMPONENTS),
                    exports: __spread(TOASTR_COMPONENTS),
                },] }
    ];
    return DoToastrModule;
}());
export { DoToastrModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tdG9hc3RyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi90b2FzdHIvZG8tdG9hc3RyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUvRCxNQUFNLENBQUMsSUFBTSxpQkFBaUIsR0FBRyxFQUNoQyxDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUc7SUFDOUIsZUFBZTtDQUNoQixDQUFDO0FBRUY7SUFBQTtJQW9CQSxDQUFDO0lBUlEsc0JBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLFdBQ0osZ0JBQWdCLENBQ3BCO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQW5CRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFdBQVc7cUJBQ1o7b0JBQ0QsWUFBWSxXQUNQLGlCQUFpQixDQUNyQjtvQkFDRCxPQUFPLFdBQ0YsaUJBQWlCLENBQ3JCO2lCQUNGOztJQVVELHFCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FUWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRG9Ub2FzdHJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kby10b2FzdHIuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBUT0FTVFJfQ09NUE9ORU5UUyA9IFtcbl07XG5cbmV4cG9ydCBjb25zdCBUT0FTVFJfUFJPVklERVJTID0gW1xuICBEb1RvYXN0clNlcnZpY2UsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLlRPQVNUUl9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uVE9BU1RSX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERvVG9hc3RyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxEb1RvYXN0ck1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRG9Ub2FzdHJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgLi4uVE9BU1RSX1BST1ZJREVSUyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19