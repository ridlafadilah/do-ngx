import { Component } from '@angular/core';
import { NbDialogRef, NbIconLibraries } from '@nebular/theme';
export class DialogIconComponent {
    constructor(ref, iconsLibrary) {
        this.ref = ref;
        this.evaIcons = [];
        this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
            .filter(icon => icon.indexOf('outline') !== -1);
    }
    choose(icon) {
        this.ref.close(icon);
    }
}
DialogIconComponent.ctorParameters = () => [
    { type: NbDialogRef },
    { type: NbIconLibraries }
];
DialogIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-dialog-icon',
                template: "<nb-card>\n  <nb-card-header>\n    {{ 'Choose Icon' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <nb-icon *ngFor=\"let icon of evaIcons\" class=\"choose-icon\" (click)=\"choose(icon)\" [icon]=\"icon\" pack=\"eva\"></nb-icon>\n  </nb-card-body>\n</nb-card>\n",
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host .choose-icon{margin:.75rem;cursor:pointer}.nb-theme-dark :host .choose-icon{margin:.75rem;cursor:pointer}.nb-theme-cosmic :host .choose-icon{margin:.75rem;cursor:pointer}.nb-theme-corporate :host .choose-icon{margin:.75rem;cursor:pointer}"]
            },] }
];
DialogIconComponent.ctorParameters = () => [
    { type: NbDialogRef },
    { type: NbIconLibraries }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tc3lzLyIsInNvdXJjZXMiOlsibGliL21hbmFnZW1lbnQvbWVudS9kaWFsb2ctaWNvbi9kaWFsb2ctaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzlELE1BQU0sT0FBTyxtQkFBbUI7SUFJOUIsWUFBc0IsR0FBcUMsRUFBRSxZQUE2QjtRQUFwRSxRQUFHLEdBQUgsR0FBRyxDQUFrQztRQUZwRCxhQUFRLEdBQVUsRUFBRSxDQUFDO1FBRzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7OztZQVAwQixXQUFXO1lBQXFDLGVBQWU7OztZQVQzRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsMlJBQXlDOzthQUUxQzs7O1lBTlEsV0FBVztZQUFFLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5iRGlhbG9nUmVmLCBOYkljb25MaWJyYXJpZXMgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWRpYWxvZy1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkaWFsb2ctaWNvbi5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dJY29uQ29tcG9uZW50IHtcblxuICBwdWJsaWMgZXZhSWNvbnM6IGFueVtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlZjogTmJEaWFsb2dSZWY8RGlhbG9nSWNvbkNvbXBvbmVudD4sIGljb25zTGlicmFyeTogTmJJY29uTGlicmFyaWVzKSB7XG4gICAgdGhpcy5ldmFJY29ucyA9IEFycmF5LmZyb20oaWNvbnNMaWJyYXJ5LmdldFBhY2soJ2V2YScpLmljb25zLmtleXMoKSlcbiAgICAgIC5maWx0ZXIoaWNvbiA9PiBpY29uLmluZGV4T2YoJ291dGxpbmUnKSAhPT0gLTEpO1xuICB9XG5cbiAgY2hvb3NlKGljb246IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucmVmLmNsb3NlKGljb24pO1xuICB9XG59XG4iXX0=