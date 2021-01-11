import { __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DoBaseModule } from '../base/do-base.module';
import { ImageUploadComponent } from './upload/image-upload.component';
import { NbButtonModule, NbIconModule } from '@nebular/theme';
export var IMAGE_COMPONENTS = [
    ImageUploadComponent,
];
var DoImageModule = /** @class */ (function () {
    function DoImageModule() {
    }
    DoImageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NbButtonModule,
                        NbIconModule,
                        DoBaseModule,
                    ],
                    declarations: __spread(IMAGE_COMPONENTS),
                    exports: __spread(IMAGE_COMPONENTS),
                },] }
    ];
    return DoImageModule;
}());
export { DoImageModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8taW1hZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2ltYWdlL2RvLWltYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlELE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFHO0lBQzlCLG9CQUFvQjtDQUNyQixDQUFDO0FBRUY7SUFBQTtJQWdCNkIsQ0FBQzs7Z0JBaEI3QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGNBQWM7d0JBQ2QsWUFBWTt3QkFDWixZQUFZO3FCQUNiO29CQUNELFlBQVksV0FDUCxnQkFBZ0IsQ0FDcEI7b0JBQ0QsT0FBTyxXQUNGLGdCQUFnQixDQUNwQjtpQkFDRjs7SUFDNEIsb0JBQUM7Q0FBQSxBQWhCOUIsSUFnQjhCO1NBQWpCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRG9CYXNlTW9kdWxlIH0gZnJvbSAnLi4vYmFzZS9kby1iYXNlLm1vZHVsZSc7XG5pbXBvcnQgeyBJbWFnZVVwbG9hZENvbXBvbmVudCB9IGZyb20gJy4vdXBsb2FkL2ltYWdlLXVwbG9hZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJCdXR0b25Nb2R1bGUsIE5iSWNvbk1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcblxuZXhwb3J0IGNvbnN0IElNQUdFX0NPTVBPTkVOVFMgPSBbXG4gIEltYWdlVXBsb2FkQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5iQnV0dG9uTW9kdWxlLFxuICAgIE5iSWNvbk1vZHVsZSxcbiAgICBEb0Jhc2VNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLklNQUdFX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5JTUFHRV9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEb0ltYWdlTW9kdWxlIHsgfVxuIl19