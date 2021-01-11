import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
var NotEqualValidator = /** @class */ (function () {
    function NotEqualValidator(validateNotEqual) {
        this.validateNotEqual = validateNotEqual;
    }
    NotEqualValidator.prototype.validate = function (c) {
        var v = c.value;
        var e = c.root.get(this.validateNotEqual);
        if (e && v === e.value && v) {
            return { equal: true };
        }
        return null;
    };
    NotEqualValidator.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Attribute, args: ['doValidateNotEqual',] }] }
    ]; };
    NotEqualValidator.decorators = [
        { type: Directive, args: [{
                    selector: '[doValidateNotEqual][formControlName],[doValidateNotEqual][formControl],[doValidateNotEqual][ngModel]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef(function () { return NotEqualValidator; }), multi: true },
                    ],
                },] }
    ];
    NotEqualValidator.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Attribute, args: ['doValidateNotEqual',] }] }
    ]; };
    return NotEqualValidator;
}());
export { NotEqualValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWVxdWFsLXZhbGlkYXRvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb21tb24vIiwic291cmNlcyI6WyJsaWIvYmFzZS9kaXJlY3RpdmUvbm90LWVxdWFsLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUkvQztJQVFJLDJCQUFvRCxnQkFBd0I7UUFBeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFRO0lBQUcsQ0FBQztJQUVoRixvQ0FBUSxHQUFSLFVBQVMsQ0FBa0I7UUFDdkIsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNsQixJQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUU1QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDekIsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUMxQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7OzZDQVZZLFNBQVMsU0FBQyxvQkFBb0I7OztnQkFSOUMsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSx1R0FBdUc7b0JBQ2pILFNBQVMsRUFBRTt3QkFDUCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsaUJBQWlCLEVBQWpCLENBQWlCLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO3FCQUM1RjtpQkFDSjs7OzZDQUdnQixTQUFTLFNBQUMsb0JBQW9COztJQVcvQyx3QkFBQztDQUFBLEFBbkJELElBbUJDO1NBYlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2RvVmFsaWRhdGVOb3RFcXVhbF1bZm9ybUNvbnRyb2xOYW1lXSxbZG9WYWxpZGF0ZU5vdEVxdWFsXVtmb3JtQ29udHJvbF0sW2RvVmFsaWRhdGVOb3RFcXVhbF1bbmdNb2RlbF0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdEVxdWFsVmFsaWRhdG9yKSwgbXVsdGk6IHRydWUgfSxcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3RFcXVhbFZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihAQXR0cmlidXRlKCdkb1ZhbGlkYXRlTm90RXF1YWwnKSBwdWJsaWMgdmFsaWRhdGVOb3RFcXVhbDogc3RyaW5nKSB7fVxuXG4gICAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgICAgIGNvbnN0IHYgPSBjLnZhbHVlO1xuICAgICAgICBjb25zdCBlID0gYy5yb290LmdldCh0aGlzLnZhbGlkYXRlTm90RXF1YWwpO1xuXG4gICAgICAgIGlmIChlICYmIHYgPT09IGUudmFsdWUgJiYgdikge1xuICAgICAgICAgICAgcmV0dXJuIHsgZXF1YWw6IHRydWUgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iXX0=