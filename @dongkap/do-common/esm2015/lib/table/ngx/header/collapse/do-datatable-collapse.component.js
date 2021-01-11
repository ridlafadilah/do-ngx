import { Component, } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';
import { ReplaySubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
export class DoDatatableCollapseComponent {
    constructor() {
        this.toggle = () => {
            this.opened$.pipe(take(1)).subscribe(x => this.openedSubject.next(!x));
        };
        this.openedSubject = new ReplaySubject(1);
        this.openedSubject.next(false);
        this.opened$ = this.openedSubject.asObservable();
        this.openedState$ = this.opened$.pipe(map(x => x ? 'expanded' : 'collapsed'));
    }
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
DoDatatableCollapseComponent.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZGF0YXRhYmxlLWNvbGxhcHNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS9uZ3gvaGVhZGVyL2NvbGxhcHNlL2RvLWRhdGF0YWJsZS1jb2xsYXBzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsT0FBTyxFQUNQLEtBQUssRUFDTCxLQUFLLEVBQ0wsT0FBTyxFQUNQLFVBQVUsR0FDWCxNQUFNLHFCQUFxQixDQUFDO0FBRTdCLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQTRCM0MsTUFBTSxPQUFPLDRCQUE0QjtJQUt2QztRQU9BLFdBQU0sR0FBRyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUFBO1FBUkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDOzs7WUFwQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnREFBZ0Q7Z0JBRTFELDZJQUFxRDtnQkFDckQsVUFBVSxFQUFFO29CQUNWLE9BQU8sQ0FBQyxhQUFhLEVBQUU7d0JBQ3JCLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUN0Qjs0QkFDRSxPQUFPLEVBQUUsQ0FBQzs0QkFDVixRQUFRLEVBQUUsUUFBUTs0QkFDbEIsTUFBTSxFQUFFLEtBQUs7NEJBQ2IsU0FBUyxFQUFFLEdBQUc7NEJBQ2QsT0FBTyxFQUFFLGNBQWM7eUJBQzFCLENBQUMsQ0FBQzt3QkFDSCxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FDckI7NEJBQ0UsT0FBTyxFQUFFLENBQUM7NEJBQ1YsUUFBUSxFQUFFLFFBQVE7NEJBQ2xCLE1BQU0sRUFBRSxHQUFHOzRCQUNYLE9BQU8sRUFBRSx3QkFBd0I7NEJBQ2pDLGVBQWUsRUFBRSxtQkFBbUI7eUJBQ3ZDLENBQUMsQ0FBQzt3QkFDSCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7cUJBQ25FLENBQUM7aUJBQ0g7O2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIHRyaWdnZXIsXG4gIHN0YXRlLFxuICBzdHlsZSxcbiAgYW5pbWF0ZSxcbiAgdHJhbnNpdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tZGF0YXRhYmxlLWNvbGxhcHNlLCBbZG8tZGF0YXRhYmxlLWNvbGxhcHNlXScsXG4gIHN0eWxlVXJsczogWycuL2RvLWRhdGF0YWJsZS1jb2xsYXBzZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZG8tZGF0YXRhYmxlLWNvbGxhcHNlLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ29wZW5lZFN0YXRlJywgW1xuICAgICAgc3RhdGUoJ2NvbGxhcHNlZCcsIHN0eWxlKFxuICAgICAgICB7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgaGVpZ2h0OiAnMHB4JyxcbiAgICAgICAgICBtaW5IZWlnaHQ6ICcwJyxcbiAgICAgICAgICBwYWRkaW5nOiAnMCAwIDAgMC41cmVtJyxcbiAgICAgIH0pKSxcbiAgICAgIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKFxuICAgICAgICB7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgaGVpZ2h0OiAnKicsXG4gICAgICAgICAgcGFkZGluZzogJzEuNXJlbSAwIDAuNXJlbSAwLjVyZW0nLFxuICAgICAgICAgICdib3JkZXItYm90dG9tJzogJzFweCBzb2xpZCAjZDFkNGQ3JyxcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2NvbGxhcHNlZCA8PT4gZXhwYW5kZWQnLCBhbmltYXRlKCc1MDBtcyBlYXNlLWluLW91dCcpKSxcbiAgICBdKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9EYXRhdGFibGVDb2xsYXBzZUNvbXBvbmVudCB7XG4gIHByaXZhdGUgb3BlbmVkU3ViamVjdDogUmVwbGF5U3ViamVjdDxib29sZWFuPjtcbiAgb3BlbmVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgb3BlbmVkU3RhdGUkOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5vcGVuZWRTdWJqZWN0ID0gbmV3IFJlcGxheVN1YmplY3QoMSk7XG4gICAgdGhpcy5vcGVuZWRTdWJqZWN0Lm5leHQoZmFsc2UpO1xuICAgIHRoaXMub3BlbmVkJCA9IHRoaXMub3BlbmVkU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB0aGlzLm9wZW5lZFN0YXRlJCA9IHRoaXMub3BlbmVkJC5waXBlKG1hcCh4ID0+IHggPyAnZXhwYW5kZWQnIDogJ2NvbGxhcHNlZCcpKTtcbiAgfVxuXG4gIHRvZ2dsZSA9ICgpID0+IHtcbiAgICB0aGlzLm9wZW5lZCQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoeCA9PiB0aGlzLm9wZW5lZFN1YmplY3QubmV4dCgheCkpO1xuICB9XG5cbn1cbiJdfQ==