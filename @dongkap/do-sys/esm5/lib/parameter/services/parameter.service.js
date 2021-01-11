import { Injectable } from '@angular/core';
var ParameterService = /** @class */ (function () {
    function ParameterService() {
    }
    ParameterService.prototype.getParameter = function () {
        return this.parameter;
    };
    ParameterService.prototype.setParameter = function (parameter) {
        this.parameter = parameter;
    };
    ParameterService.prototype.getParameterGroup = function () {
        return this.parameterGroup;
    };
    ParameterService.prototype.setParameterGroup = function (parameterGroup) {
        this.parameterGroup = parameterGroup;
    };
    ParameterService.prototype.getLocales = function () {
        return this.locales;
    };
    ParameterService.prototype.setLocales = function (locales) {
        this.locales = locales;
    };
    ParameterService.decorators = [
        { type: Injectable }
    ];
    return ParameterService;
}());
export { ParameterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1zeXMvIiwic291cmNlcyI6WyJsaWIvcGFyYW1ldGVyL3NlcnZpY2VzL3BhcmFtZXRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0M7SUFBQTtJQStCQSxDQUFDO0lBeEJVLHVDQUFZLEdBQW5CO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFTSx1Q0FBWSxHQUFuQixVQUFvQixTQUF5QjtRQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBRU0sNENBQWlCLEdBQXhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLENBQUM7SUFFTSw0Q0FBaUIsR0FBeEIsVUFBeUIsY0FBbUM7UUFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDekMsQ0FBQztJQUVNLHFDQUFVLEdBQWpCO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxxQ0FBVSxHQUFqQixVQUFrQixPQUFzQjtRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDOztnQkE3QkosVUFBVTs7SUErQlgsdUJBQUM7Q0FBQSxBQS9CRCxJQStCQztTQTlCWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhbGVNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgUGFyYW1ldGVyR3JvdXBNb2RlbCwgUGFyYW1ldGVyTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvcGFyYW1ldGVyLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlclNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBwYXJhbWV0ZXI6IFBhcmFtZXRlck1vZGVsO1xuICAgIHByaXZhdGUgcGFyYW1ldGVyR3JvdXA6IFBhcmFtZXRlckdyb3VwTW9kZWw7XG4gICAgcHJpdmF0ZSBsb2NhbGVzOiBMb2NhbGVNb2RlbFtdO1xuXG4gICAgcHVibGljIGdldFBhcmFtZXRlcigpOiBQYXJhbWV0ZXJNb2RlbCB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UGFyYW1ldGVyKHBhcmFtZXRlcjogUGFyYW1ldGVyTW9kZWwpIHtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXIgPSBwYXJhbWV0ZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBhcmFtZXRlckdyb3VwKCk6IFBhcmFtZXRlckdyb3VwTW9kZWwge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJHcm91cDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UGFyYW1ldGVyR3JvdXAocGFyYW1ldGVyR3JvdXA6IFBhcmFtZXRlckdyb3VwTW9kZWwpIHtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJHcm91cCA9IHBhcmFtZXRlckdyb3VwO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMb2NhbGVzKCk6IExvY2FsZU1vZGVsW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRMb2NhbGVzKGxvY2FsZXM6IExvY2FsZU1vZGVsW10pIHtcbiAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICB9XG5cbn1cbiJdfQ==