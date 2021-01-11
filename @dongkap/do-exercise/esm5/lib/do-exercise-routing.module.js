import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DoExerciseComponent } from './do-exercise.component';
import { ExerciseComponent } from './exercise.component';
var routes = [
    {
        path: '',
        component: DoExerciseComponent,
        children: [
            {
                path: 'exercise',
                component: ExerciseComponent,
            },
        ],
    },
];
var DoExerciseRoutingModule = /** @class */ (function () {
    function DoExerciseRoutingModule() {
    }
    DoExerciseRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] }
    ];
    return DoExerciseRoutingModule;
}());
export { DoExerciseRoutingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZXhlcmNpc2Utcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1leGVyY2lzZS8iLCJzb3VyY2VzIjpbImxpYi9kby1leGVyY2lzZS1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV6RCxJQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLG1CQUFtQjtRQUM5QixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLGlCQUFpQjthQUM3QjtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBRUY7SUFBQTtJQUtBLENBQUM7O2dCQUxBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCOztJQUVELDhCQUFDO0NBQUEsQUFMRCxJQUtDO1NBRFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgRG9FeGVyY2lzZUNvbXBvbmVudCB9IGZyb20gJy4vZG8tZXhlcmNpc2UuY29tcG9uZW50JztcbmltcG9ydCB7IEV4ZXJjaXNlQ29tcG9uZW50IH0gZnJvbSAnLi9leGVyY2lzZS5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogRG9FeGVyY2lzZUNvbXBvbmVudCxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnZXhlcmNpc2UnLFxuICAgICAgICBjb21wb25lbnQ6IEV4ZXJjaXNlQ29tcG9uZW50LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIERvRXhlcmNpc2VSb3V0aW5nTW9kdWxlIHtcbn1cbiJdfQ==