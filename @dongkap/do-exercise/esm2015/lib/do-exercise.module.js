import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbButtonModule } from '@nebular/theme';
import { DoThemeModule } from '@dongkap/do-theme';
import { DoCommonModule } from '@dongkap/do-common';
import { DoExerciseRoutingModule } from './do-exercise-routing.module';
import { DoExerciseComponent } from './do-exercise.component';
import { ExerciseComponent } from './exercise.component';
export class DoExerciseModule {
}
DoExerciseModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule,
                    ReactiveFormsModule,
                    NbCardModule,
                    NbButtonModule,
                    DoThemeModule,
                    DoCommonModule,
                    DoExerciseRoutingModule,
                ],
                declarations: [
                    DoExerciseComponent,
                    ExerciseComponent,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZXhlcmNpc2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tZXhlcmNpc2UvIiwic291cmNlcyI6WyJsaWIvZG8tZXhlcmNpc2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQWlCekQsTUFBTSxPQUFPLGdCQUFnQjs7O1lBZjVCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxhQUFhO29CQUNiLGNBQWM7b0JBQ2QsdUJBQXVCO2lCQUN4QjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osbUJBQW1CO29CQUNuQixpQkFBaUI7aUJBQ2xCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOYkNhcmRNb2R1bGUsIE5iQnV0dG9uTW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuXG5pbXBvcnQgeyBEb1RoZW1lTW9kdWxlIH0gZnJvbSAnQGRvbmdrYXAvZG8tdGhlbWUnO1xuaW1wb3J0IHsgRG9Db21tb25Nb2R1bGUgfSBmcm9tICdAZG9uZ2thcC9kby1jb21tb24nO1xuaW1wb3J0IHsgRG9FeGVyY2lzZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2RvLWV4ZXJjaXNlLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IERvRXhlcmNpc2VDb21wb25lbnQgfSBmcm9tICcuL2RvLWV4ZXJjaXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeGVyY2lzZUNvbXBvbmVudCB9IGZyb20gJy4vZXhlcmNpc2UuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTmJDYXJkTW9kdWxlLFxuICAgIE5iQnV0dG9uTW9kdWxlLFxuICAgIERvVGhlbWVNb2R1bGUsXG4gICAgRG9Db21tb25Nb2R1bGUsXG4gICAgRG9FeGVyY2lzZVJvdXRpbmdNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIERvRXhlcmNpc2VDb21wb25lbnQsXG4gICAgRXhlcmNpc2VDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERvRXhlcmNpc2VNb2R1bGUgeyB9XG4iXX0=