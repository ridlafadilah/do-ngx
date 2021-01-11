import { Directive, Input } from '@angular/core';
import { NgControl, Validators, } from '@angular/forms';
var DoValidatorAccessor = /** @class */ (function () {
    function DoValidatorAccessor(ngControl) {
        this.ngControl = ngControl;
        this.label = '';
        this.nolabel = false;
        this.disabled = false;
        this.required = false;
        this.onChange = function (_) { };
        this.onTouched = function (_) { };
        ngControl && (ngControl.valueAccessor = this);
    }
    DoValidatorAccessor.prototype.onInit = function () { };
    DoValidatorAccessor.prototype.ngOnInit = function () {
        this.onInit();
        var control = this.ngControl.control;
        var validators = control.validator ? [control.validator] : [];
        if (this.ngControl.control.errors) {
            this.required = this.ngControl.control.errors['required'];
        }
        if (this.required) {
            validators.push(Validators.required);
        }
        if (this.pattern) {
            validators.push(Validators.pattern(this.pattern));
        }
        control.setValidators(validators);
        control.updateValueAndValidity();
    };
    DoValidatorAccessor.prototype.validate = function (c) {
        var validators = [];
        if (this.required) {
            validators.push(Validators.required);
        }
        if (this.pattern) {
            validators.push(Validators.pattern(this.pattern));
        }
        return validators;
    };
    Object.defineProperty(DoValidatorAccessor.prototype, "hasErrors", {
        get: function () {
            return (!this.disabled &&
                this.ngControl.control &&
                this.ngControl.control.invalid &&
                this.ngControl.touched);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DoValidatorAccessor.prototype, "hasSuccess", {
        get: function () {
            return (!this.disabled &&
                this.ngControl.control &&
                this.ngControl.control.valid &&
                this.ngControl.touched);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DoValidatorAccessor.prototype, "errorMessages", {
        get: function () {
            var _this = this;
            var errors = [];
            if (this.ngControl.errors)
                Object.keys(this.ngControl.errors).forEach(function (property) {
                    switch (property) {
                        case 'required':
                            errors.push('error.required');
                            break;
                        case 'email':
                            errors.push('error.pattern.email');
                            break;
                        case 'minlength':
                            errors.push('error.minlength');
                            break;
                        default:
                            errors.push('error.'.concat(property).concat('.').concat(_this.name));
                            break;
                    }
                });
            return errors;
        },
        enumerable: false,
        configurable: true
    });
    DoValidatorAccessor.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    DoValidatorAccessor.ctorParameters = function () { return [
        { type: NgControl }
    ]; };
    DoValidatorAccessor.decorators = [
        { type: Directive }
    ];
    DoValidatorAccessor.ctorParameters = function () { return [
        { type: NgControl }
    ]; };
    DoValidatorAccessor.propDecorators = {
        name: [{ type: Input }],
        pattern: [{ type: Input }],
        label: [{ type: Input }],
        nolabel: [{ type: Input }],
        disabled: [{ type: Input }],
        required: [{ type: Input }],
        paramError: [{ type: Input }],
        warnMessage: [{ type: Input }]
    };
    return DoValidatorAccessor;
}());
export { DoValidatorAccessor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tdmFsaWRhdG9yLWFjY2Vzc29yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9iYXNlL2RvLXZhbGlkYXRvci1hY2Nlc3Nvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUNILFNBQVMsRUFDVCxVQUFVLEdBQ2IsTUFBTSxnQkFBZ0IsQ0FBQztBQU94QjtJQWVJLDZCQUFzQixTQUFvQjtRQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBVmpDLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHNUIsYUFBUSxHQUFHLFVBQUMsQ0FBTSxJQUFNLENBQUMsQ0FBQztRQUMxQixjQUFTLEdBQUcsVUFBQyxDQUFPLElBQU0sQ0FBQyxDQUFDO1FBSS9CLFNBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUpTLG9DQUFNLEdBQWhCLGNBQTBCLENBQUM7SUFNcEIsc0NBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVkLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLElBQU0sVUFBVSxHQUFrQixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQy9FLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNB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MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7O0lBc0ZWLDBCQUFDO0NBQUEsQUFoR0QsSUFnR0M7U0EvRnFCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBOZ0NvbnRyb2wsXG4gICAgVmFsaWRhdG9ycyxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERvVmFsaWRhdG9yQWNjZXNzb3IgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yLCBPbkluaXQge1xuXG4gICAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHBhdHRlcm46IHN0cmluZztcbiAgICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgbm9sYWJlbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBwYXJhbUVycm9yOiBhbnk7XG4gICAgQElucHV0KCkgd2Fybk1lc3NhZ2U6IHN0cmluZztcbiAgICBwdWJsaWMgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgICBwdWJsaWMgb25Ub3VjaGVkID0gKF8/OiBhbnkpID0+IHt9O1xuICAgIHByb3RlY3RlZCBvbkluaXQoKTogdm9pZCB7fVxuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIG5nQ29udHJvbDogTmdDb250cm9sKSB7XG4gICAgICAgIG5nQ29udHJvbCAmJiAobmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Jbml0KCk7XG5cbiAgICAgICAgY29uc3QgY29udHJvbCA9IHRoaXMubmdDb250cm9sLmNvbnRyb2w7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRvcnM6IFZhbGlkYXRvckZuW10gPSBjb250cm9sLnZhbGlkYXRvciA/IFtjb250cm9sLnZhbGlkYXRvcl0gOiBbXTtcbiAgICAgICAgaWYgKHRoaXMubmdDb250cm9sLmNvbnRyb2wuZXJyb3JzKSB7XG4gICAgICAgICAgICB0aGlzLnJlcXVpcmVkID0gdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5lcnJvcnNbJ3JlcXVpcmVkJ107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmVxdWlyZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5wYXR0ZXJuKHRoaXMucGF0dGVybikpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRyb2wuc2V0VmFsaWRhdG9ycyh2YWxpZGF0b3JzKTtcbiAgICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRvcnM6IFZhbGlkYXRvckZuW10gPSBbXTtcbiAgICAgICAgaWYgKHRoaXMucmVxdWlyZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5wYXR0ZXJuKHRoaXMucGF0dGVybikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWxpZGF0b3JzO1xuICAgIH1cblxuICAgIGdldCBoYXNFcnJvcnMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhdGhpcy5kaXNhYmxlZCAmJlxuICAgICAgICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbCAmJlxuICAgICAgICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5pbnZhbGlkICYmXG4gICAgICAgICAgICB0aGlzLm5nQ29udHJvbC50b3VjaGVkXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0IGhhc1N1Y2Nlc3MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhdGhpcy5kaXNhYmxlZCAmJlxuICAgICAgICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbCAmJlxuICAgICAgICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWxpZCAmJlxuICAgICAgICAgICAgdGhpcy5uZ0NvbnRyb2wudG91Y2hlZFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldCBlcnJvck1lc3NhZ2VzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBpZiAodGhpcy5uZ0NvbnRyb2wuZXJyb3JzKVxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5uZ0NvbnRyb2wuZXJyb3JzKS5mb3JFYWNoKHByb3BlcnR5ID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlcXVpcmVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKCdlcnJvci5yZXF1aXJlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKCdlcnJvci5wYXR0ZXJuLmVtYWlsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbWlubGVuZ3RoJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKCdlcnJvci5taW5sZW5ndGgnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goJ2Vycm9yLicuY29uY2F0KHByb3BlcnR5KS5jb25jYXQoJy4nKS5jb25jYXQodGhpcy5uYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVycm9ycztcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZDtcbiAgICBhYnN0cmFjdCByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkO1xuICAgIGFic3RyYWN0IHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkO1xuICAgIGFic3RyYWN0IHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xufVxuIl19