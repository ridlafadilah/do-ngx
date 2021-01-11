import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
export class SearchInputComponent {
    constructor() {
        this.search = new EventEmitter();
        this.isInputShown = false;
    }
    showInput() {
        this.isInputShown = true;
        this.input.nativeElement.focus();
    }
    hideInput() {
        this.isInputShown = false;
    }
    onInput(val) {
        this.search.emit(val);
    }
}
SearchInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-search-input',
                template: `
    <i class="control-icon ion ion-ios-search"
       (click)="showInput()"></i>
    <input placeholder="Type your search request here..."
           #input
           [class.hidden]="!isInputShown"
           (blur)="hideInput()"
           (input)="onInput($event)">
  `,
                styles: [":host{display:flex;align-items:center}:host i.control-icon::before{font-size:2.3rem}:host i.control-icon:hover{cursor:pointer}:host input{border:none;outline:0;margin-left:1rem;width:15rem;transition:width .2s}:host input.hidden{width:0;margin:0}:host ::ng-deep search-input input{background:0 0}"]
            },] }
];
SearchInputComponent.propDecorators = {
    input: [{ type: ViewChild, args: ['input', { static: true },] }],
    search: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLXRoZW1lLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2VhcmNoLWlucHV0L3NlYXJjaC1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBZTNDLE1BQU0sT0FBTyxvQkFBb0I7SUFiakM7UUFnQlksV0FBTSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRXBFLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBY3ZCLENBQUM7SUFaQyxTQUFTO1FBQ1AsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQVc7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7O1lBL0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUUzQixRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7O2FBQ0Y7OztvQkFFRSxTQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtxQkFFbkMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1zZWFyY2gtaW5wdXQnLFxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2gtaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aSBjbGFzcz1cImNvbnRyb2wtaWNvbiBpb24gaW9uLWlvcy1zZWFyY2hcIlxuICAgICAgIChjbGljayk9XCJzaG93SW5wdXQoKVwiPjwvaT5cbiAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgc2VhcmNoIHJlcXVlc3QgaGVyZS4uLlwiXG4gICAgICAgICAgICNpbnB1dFxuICAgICAgICAgICBbY2xhc3MuaGlkZGVuXT1cIiFpc0lucHV0U2hvd25cIlxuICAgICAgICAgICAoYmx1cik9XCJoaWRlSW5wdXQoKVwiXG4gICAgICAgICAgIChpbnB1dCk9XCJvbklucHV0KCRldmVudClcIj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoSW5wdXRDb21wb25lbnQge1xuICBAVmlld0NoaWxkKCdpbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0OiBFbGVtZW50UmVmO1xuXG4gIEBPdXRwdXQoKSBzZWFyY2g6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgaXNJbnB1dFNob3duID0gZmFsc2U7XG5cbiAgc2hvd0lucHV0KCkge1xuICAgIHRoaXMuaXNJbnB1dFNob3duID0gdHJ1ZTtcbiAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIGhpZGVJbnB1dCgpIHtcbiAgICB0aGlzLmlzSW5wdXRTaG93biA9IGZhbHNlO1xuICB9XG5cbiAgb25JbnB1dCh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuc2VhcmNoLmVtaXQodmFsKTtcbiAgfVxufVxuIl19