import { Component, Input, ViewEncapsulation } from '@angular/core';
var DoWarnMessageComponent = /** @class */ (function () {
    function DoWarnMessageComponent() {
    }
    DoWarnMessageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-warn-message',
                    template: "<div *ngIf=\"warnMessage\">\n    <span class=\"caption status-warning warn-message\">{{warnMessage | translate}}</span>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".warn-message{font-style:italic}"]
                },] }
    ];
    DoWarnMessageComponent.propDecorators = {
        warnMessage: [{ type: Input }],
        param: [{ type: Input }]
    };
    return DoWarnMessageComponent;
}());
export { DoWarnMessageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8td2Fybi1tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9iYXNlL3dhcm4tbWVzc2FnZS9kby13YXJuLW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBFO0lBQUE7SUFTQSxDQUFDOztnQkFUQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFFM0IsMklBQStDO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7OEJBRUksS0FBSzt3QkFDTCxLQUFLOztJQUNWLDZCQUFDO0NBQUEsQUFURCxJQVNDO1NBSFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8td2Fybi1tZXNzYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vZG8td2Fybi1tZXNzYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kby13YXJuLW1lc3NhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBEb1dhcm5NZXNzYWdlQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSB3YXJuTWVzc2FnZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHBhcmFtOiBhbnk7XG59XG4iXX0=