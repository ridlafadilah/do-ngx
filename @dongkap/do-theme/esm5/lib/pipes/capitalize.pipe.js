import { Pipe } from '@angular/core';
var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (input) {
        return input && input.length
            ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
            : input;
    };
    CapitalizePipe.decorators = [
        { type: Pipe, args: [{ name: 'ngxCapitalize' },] }
    ];
    return CapitalizePipe;
}());
export { CapitalizePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwaXRhbGl6ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tdGhlbWUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvY2FwaXRhbGl6ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUFRQSxDQUFDO0lBTEMsa0NBQVMsR0FBVCxVQUFVLEtBQWE7UUFDckIsT0FBTyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU07WUFDMUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2hFLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDWixDQUFDOztnQkFQRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFOztJQVEvQixxQkFBQztDQUFBLEFBUkQsSUFRQztTQVBZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ25neENhcGl0YWxpemUnIH0pXG5leHBvcnQgY2xhc3MgQ2FwaXRhbGl6ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0oaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGlucHV0ICYmIGlucHV0Lmxlbmd0aFxuICAgICAgPyAoaW5wdXQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBpbnB1dC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpKVxuICAgICAgOiBpbnB1dDtcbiAgfVxufVxuIl19