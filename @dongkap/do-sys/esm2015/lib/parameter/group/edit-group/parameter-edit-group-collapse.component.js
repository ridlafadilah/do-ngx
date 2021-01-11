import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';
import { ReplaySubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
export class ParameterEditGroupCollapseComponent {
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
ParameterEditGroupCollapseComponent.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLWVkaXQtZ3JvdXAtY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tc3lzLyIsInNvdXJjZXMiOlsibGliL3BhcmFtZXRlci9ncm91cC9lZGl0LWdyb3VwL3BhcmFtZXRlci1lZGl0LWdyb3VwLWNvbGxhcHNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxPQUFPLEVBQ1AsVUFBVSxHQUNYLE1BQU0scUJBQXFCLENBQUM7QUFFN0IsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBMkIzQyxNQUFNLE9BQU8sbUNBQW1DO0lBSzlDO1FBT0EsV0FBTSxHQUFHLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RSxDQUFDLENBQUE7UUFSQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7OztZQW5DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNFQUFzRTtnQkFFaEYsMkpBQTZEO2dCQUM3RCxVQUFVLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLGFBQWEsRUFBRTt3QkFDckIsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQ3RCOzRCQUNFLE9BQU8sRUFBRSxDQUFDOzRCQUNWLFFBQVEsRUFBRSxRQUFROzRCQUNsQixNQUFNLEVBQUUsS0FBSzs0QkFDYixTQUFTLEVBQUUsR0FBRzs0QkFDZCxPQUFPLEVBQUUsZUFBZTt5QkFDM0IsQ0FBQyxDQUFDO3dCQUNILEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUNyQjs0QkFDRSxPQUFPLEVBQUUsQ0FBQzs0QkFDVixRQUFRLEVBQUUsUUFBUTs0QkFDbEIsTUFBTSxFQUFFLEdBQUc7NEJBQ1gsT0FBTyxFQUFFLFdBQVc7eUJBQ3ZCLENBQUMsQ0FBQzt3QkFDSCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7cUJBQ25FLENBQUM7aUJBQ0g7O2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIHRyaWdnZXIsXG4gIHN0YXRlLFxuICBzdHlsZSxcbiAgYW5pbWF0ZSxcbiAgdHJhbnNpdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tcGFyYW1ldGVyLWVkaXQtZ3JvdXAtY29sbGFwc2UsIFtkby1wYXJhbWV0ZXItZWRpdC1ncm91cC1jb2xsYXBzZV0nLFxuICBzdHlsZVVybHM6IFsnLi9wYXJhbWV0ZXItZWRpdC1ncm91cC1jb2xsYXBzZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFyYW1ldGVyLWVkaXQtZ3JvdXAtY29sbGFwc2UuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignb3BlbmVkU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoXG4gICAgICAgIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICBoZWlnaHQ6ICcwcHgnLFxuICAgICAgICAgIG1pbkhlaWdodDogJzAnLFxuICAgICAgICAgIHBhZGRpbmc6ICcwIDAgMCAxLjI1cmVtJyxcbiAgICAgIH0pKSxcbiAgICAgIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKFxuICAgICAgICB7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgaGVpZ2h0OiAnKicsXG4gICAgICAgICAgcGFkZGluZzogJzAgMS4yNXJlbScsXG4gICAgICB9KSksXG4gICAgICB0cmFuc2l0aW9uKCdjb2xsYXBzZWQgPD0+IGV4cGFuZGVkJywgYW5pbWF0ZSgnNTAwbXMgZWFzZS1pbi1vdXQnKSksXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlckVkaXRHcm91cENvbGxhcHNlQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBvcGVuZWRTdWJqZWN0OiBSZXBsYXlTdWJqZWN0PGJvb2xlYW4+O1xuICBvcGVuZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBvcGVuZWRTdGF0ZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm9wZW5lZFN1YmplY3QgPSBuZXcgUmVwbGF5U3ViamVjdCgxKTtcbiAgICB0aGlzLm9wZW5lZFN1YmplY3QubmV4dChmYWxzZSk7XG4gICAgdGhpcy5vcGVuZWQkID0gdGhpcy5vcGVuZWRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIHRoaXMub3BlbmVkU3RhdGUkID0gdGhpcy5vcGVuZWQkLnBpcGUobWFwKHggPT4geCA/ICdleHBhbmRlZCcgOiAnY29sbGFwc2VkJykpO1xuICB9XG5cbiAgdG9nZ2xlID0gKCkgPT4ge1xuICAgIHRoaXMub3BlbmVkJC5waXBlKHRha2UoMSkpLnN1YnNjcmliZSh4ID0+IHRoaXMub3BlbmVkU3ViamVjdC5uZXh0KCF4KSk7XG4gIH1cblxufVxuIl19