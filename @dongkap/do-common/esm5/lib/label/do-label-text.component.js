import { Component, Input, ViewEncapsulation } from '@angular/core';
var DoLabelTextComponent = /** @class */ (function () {
    function DoLabelTextComponent() {
        this.colLabel = 3;
        this.colContent = 9;
        this.skeleton = false;
        this.content = '';
        this.label = '';
        this.nolabel = false;
        this.required = false;
    }
    DoLabelTextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-label-text',
                    template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colContent\"\n  [required]=\"required\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colContent}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <span class=\"label-content\">{{content | translate}}</span>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colContent}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".label-content{color:#777c86;font-family:Open Sans,sans-serif;font-size:.75rem;font-weight:600}"]
                },] }
    ];
    DoLabelTextComponent.ctorParameters = function () { return []; };
    DoLabelTextComponent.propDecorators = {
        colLabel: [{ type: Input }],
        colContent: [{ type: Input }],
        skeleton: [{ type: Input }],
        name: [{ type: Input }],
        content: [{ type: Input }],
        label: [{ type: Input }],
        nolabel: [{ type: Input }],
        required: [{ type: Input }],
        paramError: [{ type: Input }]
    };
    return DoLabelTextComponent;
}());
export { DoLabelTextComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbGFiZWwtdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb21tb24vIiwic291cmNlcyI6WyJsaWIvbGFiZWwvZG8tbGFiZWwtdGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEU7SUFrQkk7UUFWUyxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixhQUFRLEdBQVksS0FBSyxDQUFDO0lBR3BCLENBQUM7O2dCQWxCbkIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUV6Qiwwb0JBQTZDO29CQUM3QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7OzJCQUdJLEtBQUs7NkJBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOztJQUdWLDJCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FiWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1sYWJlbC10ZXh0JyxcbiAgc3R5bGVVcmxzOiBbJy4vZG8tbGFiZWwtdGV4dC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZG8tbGFiZWwtdGV4dC5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIERvTGFiZWxUZXh0Q29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpIGNvbExhYmVsOiBudW1iZXIgPSAzO1xuICAgIEBJbnB1dCgpIGNvbENvbnRlbnQ6IG51bWJlciA9IDk7XG4gICAgQElucHV0KCkgc2tlbGV0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY29udGVudDogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIG5vbGFiZWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHBhcmFtRXJyb3I6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkge31cbn1cbiJdfQ==