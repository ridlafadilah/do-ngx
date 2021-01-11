import { Component, Input, ViewEncapsulation } from '@angular/core';
export class DoWarnMessageComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8td2Fybi1tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9iYXNlL3dhcm4tbWVzc2FnZS9kby13YXJuLW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXBFLE1BQU0sT0FBTyxzQkFBc0I7OztZQU5sQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFFM0IsMklBQStDO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7OzswQkFFSSxLQUFLO29CQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby13YXJuLW1lc3NhZ2UnLFxuICBzdHlsZVVybHM6IFsnLi9kby13YXJuLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RvLXdhcm4tbWVzc2FnZS5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIERvV2Fybk1lc3NhZ2VDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIHdhcm5NZXNzYWdlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgcGFyYW06IGFueTtcbn1cbiJdfQ==