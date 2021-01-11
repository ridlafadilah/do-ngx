import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
export class EqualValidator {
    constructor(validateEqual) {
        this.validateEqual = validateEqual;
    }
    validate(c) {
        const v = c.value;
        const e = c.root.get(this.validateEqual);
        if (e && v !== e.value && v) {
            return { equal: false };
        }
        return null;
    }
}
EqualValidator.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['doValidateEqual',] }] }
];
EqualValidator.decorators = [
    { type: Directive, args: [{
                selector: '[doValidateEqual][formControlName],[doValidateEqual][formControl],[doValidateEqual][ngModel]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true },
                ],
            },] }
];
EqualValidator.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['doValidateEqual',] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YWwtdmFsaWRhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9iYXNlL2RpcmVjdGl2ZS9lcXVhbC12YWxpZGF0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFVL0MsTUFBTSxPQUFPLGNBQWM7SUFFdkIsWUFBaUQsYUFBcUI7UUFBckIsa0JBQWEsR0FBYixhQUFhLENBQVE7SUFBRyxDQUFDO0lBRTFFLFFBQVEsQ0FBQyxDQUFrQjtRQUN2QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUV6QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDekIsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUMzQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozt5Q0FWWSxTQUFTLFNBQUMsaUJBQWlCOzs7WUFSM0MsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSw4RkFBOEY7Z0JBQ3hHLFNBQVMsRUFBRTtvQkFDUCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2lCQUN6RjthQUNKOzs7eUNBR2dCLFNBQVMsU0FBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYsIEF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMSURBVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbZG9WYWxpZGF0ZUVxdWFsXVtmb3JtQ29udHJvbE5hbWVdLFtkb1ZhbGlkYXRlRXF1YWxdW2Zvcm1Db250cm9sXSxbZG9WYWxpZGF0ZUVxdWFsXVtuZ01vZGVsXScsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogTkdfVkFMSURBVE9SUywgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXF1YWxWYWxpZGF0b3IpLCBtdWx0aTogdHJ1ZSB9LFxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIEVxdWFsVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcblxuICAgIGNvbnN0cnVjdG9yKEBBdHRyaWJ1dGUoJ2RvVmFsaWRhdGVFcXVhbCcpIHB1YmxpYyB2YWxpZGF0ZUVxdWFsOiBzdHJpbmcpIHt9XG5cbiAgICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcbiAgICAgICAgY29uc3QgdiA9IGMudmFsdWU7XG4gICAgICAgIGNvbnN0IGUgPSBjLnJvb3QuZ2V0KHRoaXMudmFsaWRhdGVFcXVhbCk7XG5cbiAgICAgICAgaWYgKGUgJiYgdiAhPT0gZS52YWx1ZSAmJiB2KSB7XG4gICAgICAgICAgICByZXR1cm4geyBlcXVhbDogZmFsc2UgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iXX0=