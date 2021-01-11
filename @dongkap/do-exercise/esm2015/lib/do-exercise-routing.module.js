import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DoExerciseComponent } from './do-exercise.component';
import { ExerciseComponent } from './exercise.component';
const routes = [
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
export class DoExerciseRoutingModule {
}
DoExerciseRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZXhlcmNpc2Utcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1leGVyY2lzZS8iLCJzb3VyY2VzIjpbImxpYi9kby1leGVyY2lzZS1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV6RCxNQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLG1CQUFtQjtRQUM5QixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLGlCQUFpQjthQUM3QjtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBTUYsTUFBTSxPQUFPLHVCQUF1Qjs7O1lBSm5DLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBEb0V4ZXJjaXNlQ29tcG9uZW50IH0gZnJvbSAnLi9kby1leGVyY2lzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXhlcmNpc2VDb21wb25lbnQgfSBmcm9tICcuL2V4ZXJjaXNlLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBEb0V4ZXJjaXNlQ29tcG9uZW50LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdleGVyY2lzZScsXG4gICAgICAgIGNvbXBvbmVudDogRXhlcmNpc2VDb21wb25lbnQsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9FeGVyY2lzZVJvdXRpbmdNb2R1bGUge1xufVxuIl19