import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardChildService } from '@dongkap/do-auth';
import { LocaleComponent } from './do-locale.component';
import { LocaleListPageComponent } from './list/locale-list-page.component';
import { LocaleAddEditPageComponent } from './add-edit/locale-add-edit-page.component';
var ɵ0 = {
    code: '#SYSCONF-I18N-PAGE',
}, ɵ1 = {
    code: '#SYSCONF-I18N-PAGE',
};
var routes = [{
        path: '',
        component: LocaleComponent,
        canActivateChild: [AuthGuardChildService],
        children: [
            {
                path: '',
                component: LocaleListPageComponent,
                data: ɵ0,
            },
            {
                path: ':action',
                component: LocaleAddEditPageComponent,
                data: ɵ1,
            },
        ],
    }];
var DoLocaleRoutingModule = /** @class */ (function () {
    function DoLocaleRoutingModule() {
    }
    DoLocaleRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] }
    ];
    return DoLocaleRoutingModule;
}());
export { DoLocaleRoutingModule };
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbG9jYWxlLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tc3lzLyIsInNvdXJjZXMiOlsibGliL2xvY2FsZS9kby1sb2NhbGUtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO1NBVTNFO0lBQ0osSUFBSSxFQUFFLG9CQUFvQjtDQUMzQixPQUtLO0lBQ0osSUFBSSxFQUFFLG9CQUFvQjtDQUMzQjtBQWpCUCxJQUFNLE1BQU0sR0FBVyxDQUFDO1FBQ3RCLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLGVBQWU7UUFDMUIsZ0JBQWdCLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztRQUN6QyxRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixTQUFTLEVBQUUsdUJBQXVCO2dCQUNsQyxJQUFJLElBRUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLFNBQVMsRUFBRSwwQkFBMEI7Z0JBQ3JDLElBQUksSUFFSDthQUNGO1NBQ0Y7S0FDRixDQUFDLENBQUM7QUFFSDtJQUFBO0lBS0EsQ0FBQzs7Z0JBTEEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEI7O0lBRUQsNEJBQUM7Q0FBQSxBQUxELElBS0M7U0FEWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkQ2hpbGRTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tYXV0aCc7XG5pbXBvcnQgeyBMb2NhbGVDb21wb25lbnQgfSBmcm9tICcuL2RvLWxvY2FsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9jYWxlTGlzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2xpc3QvbG9jYWxlLWxpc3QtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9jYWxlQWRkRWRpdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2FkZC1lZGl0L2xvY2FsZS1hZGQtZWRpdC1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW3tcbiAgcGF0aDogJycsXG4gIGNvbXBvbmVudDogTG9jYWxlQ29tcG9uZW50LFxuICBjYW5BY3RpdmF0ZUNoaWxkOiBbQXV0aEd1YXJkQ2hpbGRTZXJ2aWNlXSxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBwYXRoOiAnJyxcbiAgICAgIGNvbXBvbmVudDogTG9jYWxlTGlzdFBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjU1lTQ09ORi1JMThOLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICc6YWN0aW9uJyxcbiAgICAgIGNvbXBvbmVudDogTG9jYWxlQWRkRWRpdFBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjU1lTQ09ORi1JMThOLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxufV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBEb0xvY2FsZVJvdXRpbmdNb2R1bGUge1xufVxuIl19