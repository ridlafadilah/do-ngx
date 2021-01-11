import { Directive, Output, Input, EventEmitter, HostBinding, HostListener } from '@angular/core';
export class DragDropDirective {
    constructor() {
        this.onFileDropped = new EventEmitter();
        this.opacity = '0.7';
        this.background = '#f7f9fc';
        this.styleOpacity = '0.7';
    }
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#edf1f7';
        this.styleOpacity = '0.5';
        this.opacity = this.styleOpacity;
    }
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f7f9fc';
        this.styleOpacity = '0.7';
        this.opacity = this.styleOpacity;
    }
    ondrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f7f9fc';
        this.styleOpacity = '0.7';
        this.opacity = this.styleOpacity;
        const files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.onFileDropped.emit(files);
        }
    }
    onMouseOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f7f9fc';
        this.styleOpacity = '0.5';
        this.opacity = this.styleOpacity;
    }
    onMouseLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f7f9fc';
        this.styleOpacity = '0.7';
        this.opacity = this.styleOpacity;
    }
}
DragDropDirective.decorators = [
    { type: Directive, args: [{
                selector: '[doDragDrop]',
            },] }
];
DragDropDirective.propDecorators = {
    onFileDropped: [{ type: Output }],
    opacity: [{ type: Input }],
    background: [{ type: HostBinding, args: ['style.background-color',] }],
    styleOpacity: [{ type: HostBinding, args: ['style.opacity',] }],
    onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
    onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }],
    ondrop: [{ type: HostListener, args: ['drop', ['$event'],] }],
    onMouseOver: [{ type: HostListener, args: ['mouseover', ['$event'],] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1kcm9wLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9iYXNlL2RpcmVjdGl2ZS9kcmFnLWRyb3AuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtsRyxNQUFNLE9BQU8saUJBQWlCO0lBSDlCO1FBSWMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3pDLFlBQU8sR0FBVyxLQUFLLENBQUM7UUFFYSxlQUFVLEdBQUcsU0FBUyxDQUFDO1FBQ2hDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBOEM5RCxDQUFDO0lBNUN5QyxVQUFVLENBQUMsR0FBRztRQUNoRCxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUNyQyxDQUFDO0lBRTZDLFdBQVcsQ0FBQyxHQUFHO1FBQ3pELEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQixHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFFd0MsTUFBTSxDQUFDLEdBQUc7UUFDL0MsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDakMsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDckMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7SUFFNkMsV0FBVyxDQUFDLEdBQUc7UUFDekQsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDckMsQ0FBQztJQUU4QyxZQUFZLENBQUMsR0FBRztRQUMzRCxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUNyQyxDQUFDOzs7WUFwREosU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2FBQ3pCOzs7NEJBRUksTUFBTTtzQkFDTixLQUFLO3lCQUVMLFdBQVcsU0FBQyx3QkFBd0I7MkJBQ3BDLFdBQVcsU0FBQyxlQUFlO3lCQUUzQixZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOzBCQVFuQyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO3FCQVFwQyxZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDOzBCQVkvQixZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOzJCQVFwQyxZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2RvRHJhZ0Ryb3BdJyxcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BEaXJlY3RpdmUge1xuICAgIEBPdXRwdXQoKSBvbkZpbGVEcm9wcGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQElucHV0KCkgb3BhY2l0eTogc3RyaW5nID0gJzAuNyc7XG5cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmJhY2tncm91bmQtY29sb3InKSBwdWJsaWMgYmFja2dyb3VuZCA9ICcjZjdmOWZjJztcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLm9wYWNpdHknKSBwdWJsaWMgc3R5bGVPcGFjaXR5ID0gJzAuNyc7XG5cbiAgICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pIG9uRHJhZ092ZXIoZXZ0KSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9ICcjZWRmMWY3JztcbiAgICAgICAgdGhpcy5zdHlsZU9wYWNpdHkgPSAnMC41JztcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gdGhpcy5zdHlsZU9wYWNpdHk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSkgcHVibGljIG9uRHJhZ0xlYXZlKGV2dCkge1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSAnI2Y3ZjlmYyc7XG4gICAgICAgIHRoaXMuc3R5bGVPcGFjaXR5ID0gJzAuNyc7XG4gICAgICAgIHRoaXMub3BhY2l0eSA9IHRoaXMuc3R5bGVPcGFjaXR5O1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKSBwdWJsaWMgb25kcm9wKGV2dCkge1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSAnI2Y3ZjlmYyc7XG4gICAgICAgIHRoaXMuc3R5bGVPcGFjaXR5ID0gJzAuNyc7XG4gICAgICAgIHRoaXMub3BhY2l0eSA9IHRoaXMuc3R5bGVPcGFjaXR5O1xuICAgICAgICBjb25zdCBmaWxlcyA9IGV2dC5kYXRhVHJhbnNmZXIuZmlsZXM7XG4gICAgICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm9uRmlsZURyb3BwZWQuZW1pdChmaWxlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZW92ZXInLCBbJyRldmVudCddKSBwdWJsaWMgb25Nb3VzZU92ZXIoZXZ0KSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9ICcjZjdmOWZjJztcbiAgICAgICAgdGhpcy5zdHlsZU9wYWNpdHkgPSAnMC41JztcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gdGhpcy5zdHlsZU9wYWNpdHk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScsIFsnJGV2ZW50J10pIHB1YmxpYyBvbk1vdXNlTGVhdmUoZXZ0KSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9ICcjZjdmOWZjJztcbiAgICAgICAgdGhpcy5zdHlsZU9wYWNpdHkgPSAnMC43JztcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gdGhpcy5zdHlsZU9wYWNpdHk7XG4gICAgfVxuXG59XG4iXX0=