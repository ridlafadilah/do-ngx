import { Component, Injector } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { BaseFilterComponent } from '@dongkap/do-common';
import { ManagementUserService } from '../../services/mgmt-user.service';
export class MgmtEndUserListPageComponent extends BaseFilterComponent {
    constructor(injector, router, userService) {
        super(injector, {
            'username': [],
            'name': [],
            'phoneNumber': [],
        });
        this.injector = injector;
        this.router = router;
        this.userService = userService;
        this.selectionType = SelectionType.single;
        this.columns = [
            { name: 'Username', prop: 'username', width: 125, frozenLeft: true },
            { name: 'Name', prop: 'name', width: 275, frozenLeft: true },
            { name: 'Email', prop: 'email', width: 225, frozenLeft: true },
            { name: 'Phone Number', prop: 'phoneNumber', width: 150, frozenLeft: true },
            { name: 'Created', prop: 'createdBy' },
            { name: 'Created Date', prop: 'createdDate' },
            { name: 'Modified', prop: 'modifiedBy' },
            { name: 'Modified Date', prop: 'modifiedDate' },
            { name: 'Active', prop: 'active' },
        ];
        this.expanded = false;
        this.apiPath = this.api['security']['datatable-user'];
        this.filters = [
            { controlName: 'username', type: 'input' },
            { controlName: 'name', type: 'input' },
            { controlName: 'phoneNumber', type: 'input' }
        ];
        this.keyword = {
            authority: 'ROLE_END',
        };
    }
    ngOnInit() { }
    onViewDetail(data) {
        this.userService.setUser(data);
        this.router.navigate(['/app/mgmt/user/end/detail']);
    }
}
MgmtEndUserListPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ManagementUserService }
];
MgmtEndUserListPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-mgmt-end-user-list-page',
                template: "<do-page-outlet [header]=\"'header.user-management'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [add]=\"false\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'username'\"\n            [label]=\"'Username'\"\n            formControlName=\"username\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'name'\"\n            [label]=\"'Name'\"\n            formControlName=\"name\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'phoneNumber'\"\n            [label]=\"'Phone Number'\"\n            formControlName=\"phoneNumber\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n",
                styles: [""]
            },] }
];
MgmtEndUserListPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ManagementUserService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWdtdC1lbmQtdXNlci1saXN0LXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tc3lzLyIsInNvdXJjZXMiOlsibGliL21hbmFnZW1lbnQvdXNlci9lbmQtdXNlci9saXN0L21nbXQtZW5kLXVzZXItbGlzdC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxtQkFBbUIsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQU96RSxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsbUJBQXdCO0lBaUJ4RSxZQUFtQixRQUFrQixFQUFVLE1BQWMsRUFBVSxXQUFrQztRQUN2RyxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ2QsVUFBVSxFQUFFLEVBQUU7WUFDZCxNQUFNLEVBQUUsRUFBRTtZQUNWLGFBQWEsRUFBRSxFQUFFO1NBQ2xCLENBQUMsQ0FBQztRQUxjLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQXVCO1FBZGxHLGtCQUFhLEdBQWtCLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDcEQsWUFBTyxHQUFzQjtZQUNsQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDcEUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDO1lBQzNELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtZQUM5RCxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDM0UsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7WUFDdEMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDN0MsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDeEMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDL0MsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7U0FDbkMsQ0FBQztRQUNLLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFRL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1lBQzFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1lBQ3RDLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1NBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsU0FBUyxFQUFFLFVBQVU7U0FDdEIsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRLEtBQVUsQ0FBQztJQUVuQixZQUFZLENBQUMsSUFBSTtRQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQXJCNEIsUUFBUTtZQUFrQixNQUFNO1lBQXVCLHFCQUFxQjs7O1lBdEIxRyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFFdEMsNG9DQUF1RDs7YUFDeEQ7OztZQVptQixRQUFRO1lBR25CLE1BQU07WUFHTixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlbGVjdGlvblR5cGUgfSBmcm9tICdAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cEJhc2VNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQmFzZUZpbHRlckNvbXBvbmVudCwgRGF0YXRhYmxlQ29sdW1uIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29tbW9uJztcbmltcG9ydCB7IE1hbmFnZW1lbnRVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21nbXQtdXNlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tbWdtdC1lbmQtdXNlci1saXN0LXBhZ2UnLFxuICBzdHlsZVVybHM6IFsnLi9tZ210LWVuZC11c2VyLWxpc3QtcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbWdtdC1lbmQtdXNlci1saXN0LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNZ210RW5kVXNlckxpc3RQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZpbHRlckNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgYXBpUGF0aDogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIHNlbGVjdGlvblR5cGU6IFNlbGVjdGlvblR5cGUgPSBTZWxlY3Rpb25UeXBlLnNpbmdsZTtcbiAgcHVibGljIGNvbHVtbnM6IERhdGF0YWJsZUNvbHVtbltdID0gW1xuICAgIHsgbmFtZTogJ1VzZXJuYW1lJywgcHJvcDogJ3VzZXJuYW1lJywgd2lkdGg6IDEyNSwgZnJvemVuTGVmdDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ05hbWUnLCBwcm9wOiAnbmFtZScsIHdpZHRoOiAyNzUsIGZyb3plbkxlZnQ6IHRydWV9LFxuICAgIHsgbmFtZTogJ0VtYWlsJywgcHJvcDogJ2VtYWlsJywgd2lkdGg6IDIyNSwgZnJvemVuTGVmdDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ1Bob25lIE51bWJlcicsIHByb3A6ICdwaG9uZU51bWJlcicsIHdpZHRoOiAxNTAsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdDcmVhdGVkJywgcHJvcDogJ2NyZWF0ZWRCeScgfSxcbiAgICB7IG5hbWU6ICdDcmVhdGVkIERhdGUnLCBwcm9wOiAnY3JlYXRlZERhdGUnIH0sXG4gICAgeyBuYW1lOiAnTW9kaWZpZWQnLCBwcm9wOiAnbW9kaWZpZWRCeScgfSxcbiAgICB7IG5hbWU6ICdNb2RpZmllZCBEYXRlJywgcHJvcDogJ21vZGlmaWVkRGF0ZScgfSxcbiAgICB7IG5hbWU6ICdBY3RpdmUnLCBwcm9wOiAnYWN0aXZlJyB9LFxuICBdO1xuICBwdWJsaWMgZXhwYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBNYW5hZ2VtZW50VXNlclNlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3Rvciwge1xuICAgICAgJ3VzZXJuYW1lJzogW10sXG4gICAgICAnbmFtZSc6IFtdLFxuICAgICAgJ3Bob25lTnVtYmVyJzogW10sXG4gICAgfSk7XG4gICAgdGhpcy5hcGlQYXRoID0gdGhpcy5hcGlbJ3NlY3VyaXR5J11bJ2RhdGF0YWJsZS11c2VyJ107XG4gICAgdGhpcy5maWx0ZXJzID0gW1xuICAgICAgeyBjb250cm9sTmFtZTogJ3VzZXJuYW1lJywgdHlwZTogJ2lucHV0JyB9LFxuICAgICAgeyBjb250cm9sTmFtZTogJ25hbWUnLCB0eXBlOiAnaW5wdXQnIH0sXG4gICAgICB7IGNvbnRyb2xOYW1lOiAncGhvbmVOdW1iZXInLCB0eXBlOiAnaW5wdXQnIH1dO1xuICAgIHRoaXMua2V5d29yZCA9IHtcbiAgICAgIGF1dGhvcml0eTogJ1JPTEVfRU5EJyxcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gIG9uVmlld0RldGFpbChkYXRhKTogdm9pZCB7XG4gICAgdGhpcy51c2VyU2VydmljZS5zZXRVc2VyKGRhdGEpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9tZ210L3VzZXIvZW5kL2RldGFpbCddKTtcbiAgfVxuXG59XG4iXX0=