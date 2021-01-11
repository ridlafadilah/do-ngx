import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';
import { ReplaySubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
var ParameterEditGroupCollapseComponent = /** @class */ (function () {
    function ParameterEditGroupCollapseComponent() {
        var _this = this;
        this.toggle = function () {
            _this.opened$.pipe(take(1)).subscribe(function (x) { return _this.openedSubject.next(!x); });
        };
        this.openedSubject = new ReplaySubject(1);
        this.openedSubject.next(false);
        this.opened$ = this.openedSubject.asObservable();
        this.openedState$ = this.opened$.pipe(map(function (x) { return x ? 'expanded' : 'collapsed'; }));
    }
    ParameterEditGroupCollapseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-parameter-edit-group-collapse, [do-parameter-edit-group-collapse]',
                    template: "<div class=\"row\"\n    [@openedState]=\"openedState$ | async\"\n    [ngClass]=\"openedState$ | async\">\n    <ng-content></ng-content>\n</div>",
                    animations: [
                        trigger('openedState', [
                            state('collapsed', style({
                                opacity: 0,
                                overflow: 'hidden',
                                height: '0px',
                                minHeight: '0',
                                padding: '0 0 0 1.25rem',
                            })),
                            state('expanded', style({
                                opacity: 1,
                                overflow: 'hidden',
                                height: '*',
                                padding: '0 1.25rem',
                            })),
                            transition('collapsed <=> expanded', animate('500ms ease-in-out')),
                        ]),
                    ],
                    styles: [""]
                },] }
    ];
    ParameterEditGroupCollapseComponent.ctorParameters = function () { return []; };
    return ParameterEditGroupCollapseComponent;
}());
export { ParameterEditGroupCollapseComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLWVkaXQtZ3JvdXAtY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tc3lzLyIsInNvdXJjZXMiOlsibGliL3BhcmFtZXRlci9ncm91cC9lZGl0LWdyb3VwL3BhcmFtZXRlci1lZGl0LWdyb3VwLWNvbGxhcHNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxPQUFPLEVBQ1AsVUFBVSxHQUNYLE1BQU0scUJBQXFCLENBQUM7QUFFN0IsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBOEJFO1FBQUEsaUJBS0M7UUFFRCxXQUFNLEdBQUc7WUFDUCxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUEzQixDQUEyQixDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUFBO1FBUkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUE1QixDQUE0QixDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDOztnQkFuQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzRUFBc0U7b0JBRWhGLDJKQUE2RDtvQkFDN0QsVUFBVSxFQUFFO3dCQUNWLE9BQU8sQ0FBQyxhQUFhLEVBQUU7NEJBQ3JCLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUN0QjtnQ0FDRSxPQUFPLEVBQUUsQ0FBQztnQ0FDVixRQUFRLEVBQUUsUUFBUTtnQ0FDbEIsTUFBTSxFQUFFLEtBQUs7Z0NBQ2IsU0FBUyxFQUFFLEdBQUc7Z0NBQ2QsT0FBTyxFQUFFLGVBQWU7NkJBQzNCLENBQUMsQ0FBQzs0QkFDSCxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FDckI7Z0NBQ0UsT0FBTyxFQUFFLENBQUM7Z0NBQ1YsUUFBUSxFQUFFLFFBQVE7Z0NBQ2xCLE1BQU0sRUFBRSxHQUFHO2dDQUNYLE9BQU8sRUFBRSxXQUFXOzZCQUN2QixDQUFDLENBQUM7NEJBQ0gsVUFBVSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO3lCQUNuRSxDQUFDO3FCQUNIOztpQkFDRjs7O0lBaUJELDBDQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0FoQlksbUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIGFuaW1hdGUsXG4gIHRyYW5zaXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLXBhcmFtZXRlci1lZGl0LWdyb3VwLWNvbGxhcHNlLCBbZG8tcGFyYW1ldGVyLWVkaXQtZ3JvdXAtY29sbGFwc2VdJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFyYW1ldGVyLWVkaXQtZ3JvdXAtY29sbGFwc2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhcmFtZXRlci1lZGl0LWdyb3VwLWNvbGxhcHNlLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ29wZW5lZFN0YXRlJywgW1xuICAgICAgc3RhdGUoJ2NvbGxhcHNlZCcsIHN0eWxlKFxuICAgICAgICB7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgaGVpZ2h0OiAnMHB4JyxcbiAgICAgICAgICBtaW5IZWlnaHQ6ICcwJyxcbiAgICAgICAgICBwYWRkaW5nOiAnMCAwIDAgMS4yNXJlbScsXG4gICAgICB9KSksXG4gICAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZShcbiAgICAgICAge1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgIGhlaWdodDogJyonLFxuICAgICAgICAgIHBhZGRpbmc6ICcwIDEuMjVyZW0nLFxuICAgICAgfSkpLFxuICAgICAgdHJhbnNpdGlvbignY29sbGFwc2VkIDw9PiBleHBhbmRlZCcsIGFuaW1hdGUoJzUwMG1zIGVhc2UtaW4tb3V0JykpLFxuICAgIF0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJFZGl0R3JvdXBDb2xsYXBzZUNvbXBvbmVudCB7XG4gIHByaXZhdGUgb3BlbmVkU3ViamVjdDogUmVwbGF5U3ViamVjdDxib29sZWFuPjtcbiAgb3BlbmVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgb3BlbmVkU3RhdGUkOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5vcGVuZWRTdWJqZWN0ID0gbmV3IFJlcGxheVN1YmplY3QoMSk7XG4gICAgdGhpcy5vcGVuZWRTdWJqZWN0Lm5leHQoZmFsc2UpO1xuICAgIHRoaXMub3BlbmVkJCA9IHRoaXMub3BlbmVkU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB0aGlzLm9wZW5lZFN0YXRlJCA9IHRoaXMub3BlbmVkJC5waXBlKG1hcCh4ID0+IHggPyAnZXhwYW5kZWQnIDogJ2NvbGxhcHNlZCcpKTtcbiAgfVxuXG4gIHRvZ2dsZSA9ICgpID0+IHtcbiAgICB0aGlzLm9wZW5lZCQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoeCA9PiB0aGlzLm9wZW5lZFN1YmplY3QubmV4dCgheCkpO1xuICB9XG5cbn1cbiJdfQ==