import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
var SearchInputComponent = /** @class */ (function () {
    function SearchInputComponent() {
        this.search = new EventEmitter();
        this.isInputShown = false;
    }
    SearchInputComponent.prototype.showInput = function () {
        this.isInputShown = true;
        this.input.nativeElement.focus();
    };
    SearchInputComponent.prototype.hideInput = function () {
        this.isInputShown = false;
    };
    SearchInputComponent.prototype.onInput = function (val) {
        this.search.emit(val);
    };
    SearchInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-search-input',
                    template: "\n    <i class=\"control-icon ion ion-ios-search\"\n       (click)=\"showInput()\"></i>\n    <input placeholder=\"Type your search request here...\"\n           #input\n           [class.hidden]=\"!isInputShown\"\n           (blur)=\"hideInput()\"\n           (input)=\"onInput($event)\">\n  ",
                    styles: [":host{display:flex;align-items:center}:host i.control-icon::before{font-size:2.3rem}:host i.control-icon:hover{cursor:pointer}:host input{border:none;outline:0;margin-left:1rem;width:15rem;transition:width .2s}:host input.hidden{width:0;margin:0}:host ::ng-deep search-input input{background:0 0}"]
                },] }
    ];
    SearchInputComponent.propDecorators = {
        input: [{ type: ViewChild, args: ['input', { static: true },] }],
        search: [{ type: Output }]
    };
    return SearchInputComponent;
}());
export { SearchInputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLXRoZW1lLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2VhcmNoLWlucHV0L3NlYXJjaC1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDO0lBQUE7UUFnQlksV0FBTSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRXBFLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBY3ZCLENBQUM7SUFaQyx3Q0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELHdDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsc0NBQU8sR0FBUCxVQUFRLEdBQVc7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Z0JBL0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUUzQixRQUFRLEVBQUUsc1NBUVQ7O2lCQUNGOzs7d0JBRUUsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7eUJBRW5DLE1BQU07O0lBZ0JULDJCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0FuQlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLXNlYXJjaC1pbnB1dCcsXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpIGNsYXNzPVwiY29udHJvbC1pY29uIGlvbiBpb24taW9zLXNlYXJjaFwiXG4gICAgICAgKGNsaWNrKT1cInNob3dJbnB1dCgpXCI+PC9pPlxuICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBzZWFyY2ggcmVxdWVzdCBoZXJlLi4uXCJcbiAgICAgICAgICAgI2lucHV0XG4gICAgICAgICAgIFtjbGFzcy5oaWRkZW5dPVwiIWlzSW5wdXRTaG93blwiXG4gICAgICAgICAgIChibHVyKT1cImhpZGVJbnB1dCgpXCJcbiAgICAgICAgICAgKGlucHV0KT1cIm9uSW5wdXQoJGV2ZW50KVwiPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hJbnB1dENvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0JywgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgQE91dHB1dCgpIHNlYXJjaDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBpc0lucHV0U2hvd24gPSBmYWxzZTtcblxuICBzaG93SW5wdXQoKSB7XG4gICAgdGhpcy5pc0lucHV0U2hvd24gPSB0cnVlO1xuICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgaGlkZUlucHV0KCkge1xuICAgIHRoaXMuaXNJbnB1dFNob3duID0gZmFsc2U7XG4gIH1cblxuICBvbklucHV0KHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWFyY2guZW1pdCh2YWwpO1xuICB9XG59XG4iXX0=