import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
var EqualValidator = /** @class */ (function () {
    function EqualValidator(validateEqual) {
        this.validateEqual = validateEqual;
    }
    EqualValidator.prototype.validate = function (c) {
        var v = c.value;
        var e = c.root.get(this.validateEqual);
        if (e && v !== e.value && v) {
            return { equal: false };
        }
        return null;
    };
    EqualValidator.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Attribute, args: ['doValidateEqual',] }] }
    ]; };
    EqualValidator.decorators = [
        { type: Directive, args: [{
                    selector: '[doValidateEqual][formControlName],[doValidateEqual][formControl],[doValidateEqual][ngModel]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef(function () { return EqualValidator; }), multi: true },
                    ],
                },] }
    ];
    EqualValidator.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Attribute, args: ['doValidateEqual',] }] }
    ]; };
    return EqualValidator;
}());
export { EqualValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YWwtdmFsaWRhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9iYXNlL2RpcmVjdGl2ZS9lcXVhbC12YWxpZGF0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJL0M7SUFRSSx3QkFBaUQsYUFBcUI7UUFBckIsa0JBQWEsR0FBYixhQUFhLENBQVE7SUFBRyxDQUFDO0lBRTFFLGlDQUFRLEdBQVIsVUFBUyxDQUFrQjtRQUN2QixJQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2xCLElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUV6QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDekIsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUMzQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7OzZDQVZZLFNBQVMsU0FBQyxpQkFBaUI7OztnQkFSM0MsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSw4RkFBOEY7b0JBQ3hHLFNBQVMsRUFBRTt3QkFDUCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsY0FBYyxFQUFkLENBQWMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7cUJBQ3pGO2lCQUNKOzs7NkNBR2dCLFNBQVMsU0FBQyxpQkFBaUI7O0lBVzVDLHFCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FiWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2RvVmFsaWRhdGVFcXVhbF1bZm9ybUNvbnRyb2xOYW1lXSxbZG9WYWxpZGF0ZUVxdWFsXVtmb3JtQ29udHJvbF0sW2RvVmFsaWRhdGVFcXVhbF1bbmdNb2RlbF0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEVxdWFsVmFsaWRhdG9yKSwgbXVsdGk6IHRydWUgfSxcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBFcXVhbFZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihAQXR0cmlidXRlKCdkb1ZhbGlkYXRlRXF1YWwnKSBwdWJsaWMgdmFsaWRhdGVFcXVhbDogc3RyaW5nKSB7fVxuXG4gICAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgICAgIGNvbnN0IHYgPSBjLnZhbHVlO1xuICAgICAgICBjb25zdCBlID0gYy5yb290LmdldCh0aGlzLnZhbGlkYXRlRXF1YWwpO1xuXG4gICAgICAgIGlmIChlICYmIHYgIT09IGUudmFsdWUgJiYgdikge1xuICAgICAgICAgICAgcmV0dXJuIHsgZXF1YWw6IGZhbHNlIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIl19