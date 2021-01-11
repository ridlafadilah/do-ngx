import { Component, Input, Output, EventEmitter, } from '@angular/core';
import * as L from 'leaflet';
// import 'style-loader!leaflet/dist/leaflet.css';
import { delay } from 'rxjs/operators';
var DoMapsLeafletComponent = /** @class */ (function () {
    function DoMapsLeafletComponent() {
        this.defaultLatLng = L.latLng({ lat: -2.3641701, lng: 117.7690927 });
        this.zoom = 4.5;
        this.height = 25;
        this.options = {
            layers: [
                L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Civilians Emergency Report' }),
            ],
            zoom: this.zoom,
            center: this.defaultLatLng,
        };
        this.layers = [];
        this.onMarkerClick = new EventEmitter();
    }
    Object.defineProperty(DoMapsLeafletComponent.prototype, "markersFn", {
        set: function (markers) {
            var _this = this;
            if (markers) {
                this.layers = [];
                markers.forEach(function (marker) {
                    _this.layers.push(L.marker(marker.mark, {
                        icon: L.icon({
                            iconUrl: document.getElementsByTagName('base')[0].href + "assets/map/marker-icon.png",
                            shadowUrl: document.getElementsByTagName('base')[0].href + "assets/map/marker-shadow.png",
                            iconSize: [27.5, 40],
                            iconAnchor: [20, 40],
                            popupAnchor: [0, -40],
                            className: marker.className,
                        }),
                        title: marker.title,
                        alt: marker.alt,
                    }).on('click', _this.markerClick.bind(_this)));
                });
            }
        },
        enumerable: false,
        configurable: true
    });
    DoMapsLeafletComponent.prototype.ngOnInit = function () {
    };
    DoMapsLeafletComponent.prototype.markerClick = function (event) {
        var latlng = event.latlng;
        var title = event.target.options.title;
        var alt = event.target.options.alt;
        this.onMarkerClick.emit({
            mark: latlng,
            title: title,
            alt: alt,
        });
        delay(200);
        this.map.setView([latlng.lat, latlng.lng], 15);
    };
    DoMapsLeafletComponent.prototype.onMapReady = function (map) {
        this.map = map;
    };
    DoMapsLeafletComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-maps-leaflet',
                    template: "<div\n  id=\"leafletmap\"\n  [ngStyle]=\"{\n    'height': height + 'rem'\n  }\"\n  leaflet\n  [leafletOptions]=\"options\"\n  [leafletLayers]=\"layers\"\n  (leafletMapReady)=\"onMapReady($event)\">\n</div>",
                    styles: [".nb-theme-default :host ::ng-deep .leaflet-bottom,.nb-theme-default :host ::ng-deep .leaflet-top{z-index:997}.nb-theme-default :host ::ng-deep .leaflet-container{width:100%;height:36.5625rem}.nb-theme-default :host ::ng-deep .pulse{-webkit-animation:1s ease-out infinite pulsate;animation:1s ease-out infinite pulsate;opacity:0}@-webkit-keyframes pulsate{0%,100%{opacity:0}50%{opacity:1}}.nb-theme-dark :host ::ng-deep .leaflet-bottom,.nb-theme-dark :host ::ng-deep .leaflet-top{z-index:997}.nb-theme-dark :host ::ng-deep .leaflet-container{width:100%;height:36.5625rem}.nb-theme-dark :host ::ng-deep .pulse{-webkit-animation:1s ease-out infinite pulsate;animation:1s ease-out infinite pulsate;opacity:0}.nb-theme-cosmic :host ::ng-deep .leaflet-bottom,.nb-theme-cosmic :host ::ng-deep .leaflet-top{z-index:997}.nb-theme-cosmic :host ::ng-deep .leaflet-container{width:100%;height:36.5625rem}.nb-theme-cosmic :host ::ng-deep .pulse{-webkit-animation:1s ease-out infinite pulsate;animation:1s ease-out infinite pulsate;opacity:0}.nb-theme-corporate :host ::ng-deep .leaflet-bottom,.nb-theme-corporate :host ::ng-deep .leaflet-top{z-index:997}.nb-theme-corporate :host ::ng-deep .leaflet-container{width:100%;height:36.5625rem}.nb-theme-corporate :host ::ng-deep .pulse{-webkit-animation:1s ease-out infinite pulsate;animation:1s ease-out infinite pulsate;opacity:0}@keyframes pulsate{0%,100%{opacity:0}50%{opacity:1}}"]
                },] }
    ];
    DoMapsLeafletComponent.propDecorators = {
        height: [{ type: Input }],
        options: [{ type: Input }],
        layers: [{ type: Input }],
        markersFn: [{ type: Input }],
        onMarkerClick: [{ type: Output }]
    };
    return DoMapsLeafletComponent;
}());
export { DoMapsLeafletComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWFwcy1sZWFmbGV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9tYXBzL2xlYWZsZXQvZG8tbWFwcy1sZWFmbGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sS0FBSyxDQUFDLE1BQU0sU0FBUyxDQUFDO0FBQzdCLGtEQUFrRDtBQUNsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHdkM7SUFBQTtRQVFVLGtCQUFhLEdBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUMxRSxTQUFJLEdBQVcsR0FBRyxDQUFDO1FBQ1gsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixZQUFPLEdBQUc7WUFDeEIsTUFBTSxFQUFFO2dCQUNOLENBQUMsQ0FBQyxTQUFTLENBQUMsbURBQW1ELEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSw0QkFBNEIsRUFBRSxDQUFDO2FBQzdIO1lBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhO1NBQzNCLENBQUM7UUFDYyxXQUFNLEdBQVUsRUFBRSxDQUFDO1FBb0JsQixrQkFBYSxHQUErQixJQUFJLFlBQVksRUFBZ0IsQ0FBQztJQXNCaEcsQ0FBQztJQXpDQyxzQkFBb0IsNkNBQVM7YUFBN0IsVUFBOEIsT0FBdUI7WUFBckQsaUJBa0JDO1lBakJDLElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNqQixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTTtvQkFDcEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO3dCQUNyQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQzs0QkFDWCxPQUFPLEVBQUssUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksK0JBQTRCOzRCQUNyRixTQUFTLEVBQUssUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksaUNBQThCOzRCQUN6RixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDOzRCQUNwQixVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDOzRCQUNwQixXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7NEJBQ3JCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUzt5QkFDNUIsQ0FBQzt3QkFDRixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7d0JBQ25CLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRztxQkFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQzs7O09BQUE7SUFHRCx5Q0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVNLDRDQUFXLEdBQWxCLFVBQW1CLEtBQUs7UUFDdEIsSUFBTSxNQUFNLEdBQWEsS0FBSyxDQUFDLE1BQWtCLENBQUM7UUFDbEQsSUFBTSxLQUFLLEdBQVcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ2pELElBQU0sR0FBRyxHQUFXLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztZQUN0QixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxLQUFLO1lBQ1osR0FBRyxFQUFFLEdBQUc7U0FDVCxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTSwyQ0FBVSxHQUFqQixVQUFrQixHQUFVO1FBQzFCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7O2dCQTFERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFFM0IseU5BQStDOztpQkFDaEQ7Ozt5QkFNRSxLQUFLOzBCQUNMLEtBQUs7eUJBT0wsS0FBSzs0QkFDTCxLQUFLO2dDQW1CTCxNQUFNOztJQXNCVCw2QkFBQztDQUFBLEFBNURELElBNERDO1NBdkRZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgKiBhcyBMIGZyb20gJ2xlYWZsZXQnO1xuLy8gaW1wb3J0ICdzdHlsZS1sb2FkZXIhbGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzJztcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTGVhZmxldE1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL2xlYWZsZXQubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1tYXBzLWxlYWZsZXQnLFxuICBzdHlsZVVybHM6IFsnLi9kby1tYXBzLWxlYWZsZXQuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RvLW1hcHMtbGVhZmxldC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERvTWFwc0xlYWZsZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgbWFwOiBMLk1hcDtcbiAgcHJpdmF0ZSBkZWZhdWx0TGF0TG5nOiBMLkxhdExuZyA9IEwubGF0TG5nKHsgbGF0OiAtMi4zNjQxNzAxLCBsbmc6IDExNy43NjkwOTI3IH0pO1xuICBwcml2YXRlIHpvb206IG51bWJlciA9IDQuNTtcbiAgQElucHV0KCkgcHVibGljIGhlaWdodDogbnVtYmVyID0gMjU7XG4gIEBJbnB1dCgpIHB1YmxpYyBvcHRpb25zID0ge1xuICAgIGxheWVyczogW1xuICAgICAgTC50aWxlTGF5ZXIoJ2h0dHA6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmcnLCB7IG1heFpvb206IDE4LCBhdHRyaWJ1dGlvbjogJ0NpdmlsaWFucyBFbWVyZ2VuY3kgUmVwb3J0JyB9KSxcbiAgICBdLFxuICAgIHpvb206IHRoaXMuem9vbSxcbiAgICBjZW50ZXI6IHRoaXMuZGVmYXVsdExhdExuZyxcbiAgfTtcbiAgQElucHV0KCkgcHVibGljIGxheWVyczogYW55W10gPSBbXTtcbiAgQElucHV0KCkgcHVibGljIHNldCBtYXJrZXJzRm4obWFya2VyczogTGVhZmxldE1vZGVsW10pIHtcbiAgICBpZiAobWFya2Vycykge1xuICAgICAgdGhpcy5sYXllcnMgPSBbXTtcbiAgICAgIG1hcmtlcnMuZm9yRWFjaChtYXJrZXIgPT4ge1xuICAgICAgICB0aGlzLmxheWVycy5wdXNoKEwubWFya2VyKG1hcmtlci5tYXJrLCB7XG4gICAgICAgICAgaWNvbjogTC5pY29uKHtcbiAgICAgICAgICAgIGljb25Vcmw6IGAke2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYXNlJylbMF0uaHJlZn1hc3NldHMvbWFwL21hcmtlci1pY29uLnBuZ2AsXG4gICAgICAgICAgICBzaGFkb3dVcmw6IGAke2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYXNlJylbMF0uaHJlZn1hc3NldHMvbWFwL21hcmtlci1zaGFkb3cucG5nYCxcbiAgICAgICAgICAgIGljb25TaXplOiBbMjcuNSwgNDBdLFxuICAgICAgICAgICAgaWNvbkFuY2hvcjogWzIwLCA0MF0sXG4gICAgICAgICAgICBwb3B1cEFuY2hvcjogWzAsIC00MF0sXG4gICAgICAgICAgICBjbGFzc05hbWU6IG1hcmtlci5jbGFzc05hbWUsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGl0bGU6IG1hcmtlci50aXRsZSxcbiAgICAgICAgICBhbHQ6IG1hcmtlci5hbHQsXG4gICAgICAgIH0pLm9uKCdjbGljaycsIHRoaXMubWFya2VyQ2xpY2suYmluZCh0aGlzKSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25NYXJrZXJDbGljazogRXZlbnRFbWl0dGVyPExlYWZsZXRNb2RlbD4gPSBuZXcgRXZlbnRFbWl0dGVyPExlYWZsZXRNb2RlbD4oKTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIHB1YmxpYyBtYXJrZXJDbGljayhldmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGxhdGxuZzogTC5MYXRMbmcgPSBldmVudC5sYXRsbmcgYXMgTC5MYXRMbmc7XG4gICAgY29uc3QgdGl0bGU6IHN0cmluZyA9IGV2ZW50LnRhcmdldC5vcHRpb25zLnRpdGxlO1xuICAgIGNvbnN0IGFsdDogc3RyaW5nID0gZXZlbnQudGFyZ2V0Lm9wdGlvbnMuYWx0O1xuICAgIHRoaXMub25NYXJrZXJDbGljay5lbWl0KHtcbiAgICAgIG1hcms6IGxhdGxuZyAsXG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBhbHQ6IGFsdCxcbiAgICB9KTtcbiAgICBkZWxheSgyMDApO1xuICAgIHRoaXMubWFwLnNldFZpZXcoW2xhdGxuZy5sYXQsIGxhdGxuZy5sbmddLCAxNSk7XG4gIH1cblxuICBwdWJsaWMgb25NYXBSZWFkeShtYXA6IEwuTWFwKTogdm9pZCB7XG4gICAgdGhpcy5tYXAgPSBtYXA7XG4gIH1cblxufVxuIl19