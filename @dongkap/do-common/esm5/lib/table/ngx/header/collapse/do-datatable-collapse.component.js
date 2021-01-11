import { Component, } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';
import { ReplaySubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
var DoDatatableCollapseComponent = /** @class */ (function () {
    function DoDatatableCollapseComponent() {
        var _this = this;
        this.toggle = function () {
            _this.opened$.pipe(take(1)).subscribe(function (x) { return _this.openedSubject.next(!x); });
        };
        this.openedSubject = new ReplaySubject(1);
        this.openedSubject.next(false);
        this.opened$ = this.openedSubject.asObservable();
        this.openedState$ = this.opened$.pipe(map(function (x) { return x ? 'expanded' : 'collapsed'; }));
    }
    DoDatatableCollapseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-datatable-collapse, [do-datatable-collapse]',
                    template: "<div\n    [@openedState]=\"openedState$ | async\"\n    [ngClass]=\"openedState$ | async\">\n    <ng-content></ng-content>\n</div>",
                    animations: [
                        trigger('openedState', [
                            state('collapsed', style({
                                opacity: 0,
                                overflow: 'hidden',
                                height: '0px',
                                minHeight: '0',
                                padding: '0 0 0 0.5rem',
                            })),
                            state('expanded', style({
                                opacity: 1,
                                overflow: 'hidden',
                                height: '*',
                                padding: '1.5rem 0 0.5rem 0.5rem',
                                'border-bottom': '1px solid #d1d4d7',
                            })),
                            transition('collapsed <=> expanded', animate('500ms ease-in-out')),
                        ]),
                    ],
                    styles: [""]
                },] }
    ];
    DoDatatableCollapseComponent.ctorParameters = function () { return []; };
    return DoDatatableCollapseComponent;
}());
export { DoDatatableCollapseComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZGF0YXRhYmxlLWNvbGxhcHNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS9uZ3gvaGVhZGVyL2NvbGxhcHNlL2RvLWRhdGF0YWJsZS1jb2xsYXBzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsT0FBTyxFQUNQLEtBQUssRUFDTCxLQUFLLEVBQ0wsT0FBTyxFQUNQLFVBQVUsR0FDWCxNQUFNLHFCQUFxQixDQUFDO0FBRTdCLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQStCRTtRQUFBLGlCQUtDO1FBRUQsV0FBTSxHQUFHO1lBQ1AsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1FBQ3pFLENBQUMsQ0FBQTtRQVJDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQzs7Z0JBcENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0RBQWdEO29CQUUxRCw2SUFBcUQ7b0JBQ3JELFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQUMsYUFBYSxFQUFFOzRCQUNyQixLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FDdEI7Z0NBQ0UsT0FBTyxFQUFFLENBQUM7Z0NBQ1YsUUFBUSxFQUFFLFFBQVE7Z0NBQ2xCLE1BQU0sRUFBRSxLQUFLO2dDQUNiLFNBQVMsRUFBRSxHQUFHO2dDQUNkLE9BQU8sRUFBRSxjQUFjOzZCQUMxQixDQUFDLENBQUM7NEJBQ0gsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQ3JCO2dDQUNFLE9BQU8sRUFBRSxDQUFDO2dDQUNWLFFBQVEsRUFBRSxRQUFRO2dDQUNsQixNQUFNLEVBQUUsR0FBRztnQ0FDWCxPQUFPLEVBQUUsd0JBQXdCO2dDQUNqQyxlQUFlLEVBQUUsbUJBQW1COzZCQUN2QyxDQUFDLENBQUM7NEJBQ0gsVUFBVSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO3lCQUNuRSxDQUFDO3FCQUNIOztpQkFDRjs7O0lBaUJELG1DQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0FoQlksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIGFuaW1hdGUsXG4gIHRyYW5zaXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWRhdGF0YWJsZS1jb2xsYXBzZSwgW2RvLWRhdGF0YWJsZS1jb2xsYXBzZV0nLFxuICBzdHlsZVVybHM6IFsnLi9kby1kYXRhdGFibGUtY29sbGFwc2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RvLWRhdGF0YWJsZS1jb2xsYXBzZS5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdvcGVuZWRTdGF0ZScsIFtcbiAgICAgIHN0YXRlKCdjb2xsYXBzZWQnLCBzdHlsZShcbiAgICAgICAge1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgIGhlaWdodDogJzBweCcsXG4gICAgICAgICAgbWluSGVpZ2h0OiAnMCcsXG4gICAgICAgICAgcGFkZGluZzogJzAgMCAwIDAuNXJlbScsXG4gICAgICB9KSksXG4gICAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZShcbiAgICAgICAge1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgIGhlaWdodDogJyonLFxuICAgICAgICAgIHBhZGRpbmc6ICcxLjVyZW0gMCAwLjVyZW0gMC41cmVtJyxcbiAgICAgICAgICAnYm9yZGVyLWJvdHRvbSc6ICcxcHggc29saWQgI2QxZDRkNycsXG4gICAgICB9KSksXG4gICAgICB0cmFuc2l0aW9uKCdjb2xsYXBzZWQgPD0+IGV4cGFuZGVkJywgYW5pbWF0ZSgnNTAwbXMgZWFzZS1pbi1vdXQnKSksXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERvRGF0YXRhYmxlQ29sbGFwc2VDb21wb25lbnQge1xuICBwcml2YXRlIG9wZW5lZFN1YmplY3Q6IFJlcGxheVN1YmplY3Q8Ym9vbGVhbj47XG4gIG9wZW5lZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIG9wZW5lZFN0YXRlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMub3BlbmVkU3ViamVjdCA9IG5ldyBSZXBsYXlTdWJqZWN0KDEpO1xuICAgIHRoaXMub3BlbmVkU3ViamVjdC5uZXh0KGZhbHNlKTtcbiAgICB0aGlzLm9wZW5lZCQgPSB0aGlzLm9wZW5lZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgdGhpcy5vcGVuZWRTdGF0ZSQgPSB0aGlzLm9wZW5lZCQucGlwZShtYXAoeCA9PiB4ID8gJ2V4cGFuZGVkJyA6ICdjb2xsYXBzZWQnKSk7XG4gIH1cblxuICB0b2dnbGUgPSAoKSA9PiB7XG4gICAgdGhpcy5vcGVuZWQkLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKHggPT4gdGhpcy5vcGVuZWRTdWJqZWN0Lm5leHQoIXgpKTtcbiAgfVxuXG59XG4iXX0=