import { Component, Input, Output, EventEmitter, } from '@angular/core';
import * as L from 'leaflet';
// import 'style-loader!leaflet/dist/leaflet.css';
import { delay } from 'rxjs/operators';
export class DoMapsLeafletComponent {
    constructor() {
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
    set markersFn(markers) {
        if (markers) {
            this.layers = [];
            markers.forEach(marker => {
                this.layers.push(L.marker(marker.mark, {
                    icon: L.icon({
                        iconUrl: `${document.getElementsByTagName('base')[0].href}assets/map/marker-icon.png`,
                        shadowUrl: `${document.getElementsByTagName('base')[0].href}assets/map/marker-shadow.png`,
                        iconSize: [27.5, 40],
                        iconAnchor: [20, 40],
                        popupAnchor: [0, -40],
                        className: marker.className,
                    }),
                    title: marker.title,
                    alt: marker.alt,
                }).on('click', this.markerClick.bind(this)));
            });
        }
    }
    ngOnInit() {
    }
    markerClick(event) {
        const latlng = event.latlng;
        const title = event.target.options.title;
        const alt = event.target.options.alt;
        this.onMarkerClick.emit({
            mark: latlng,
            title: title,
            alt: alt,
        });
        delay(200);
        this.map.setView([latlng.lat, latlng.lng], 15);
    }
    onMapReady(map) {
        this.map = map;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWFwcy1sZWFmbGV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9tYXBzL2xlYWZsZXQvZG8tbWFwcy1sZWFmbGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sS0FBSyxDQUFDLE1BQU0sU0FBUyxDQUFDO0FBQzdCLGtEQUFrRDtBQUNsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRdkMsTUFBTSxPQUFPLHNCQUFzQjtJQUxuQztRQVFVLGtCQUFhLEdBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUMxRSxTQUFJLEdBQVcsR0FBRyxDQUFDO1FBQ1gsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixZQUFPLEdBQUc7WUFDeEIsTUFBTSxFQUFFO2dCQUNOLENBQUMsQ0FBQyxTQUFTLENBQUMsbURBQW1ELEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSw0QkFBNEIsRUFBRSxDQUFDO2FBQzdIO1lBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhO1NBQzNCLENBQUM7UUFDYyxXQUFNLEdBQVUsRUFBRSxDQUFDO1FBb0JsQixrQkFBYSxHQUErQixJQUFJLFlBQVksRUFBZ0IsQ0FBQztJQXNCaEcsQ0FBQztJQXpDQyxJQUFvQixTQUFTLENBQUMsT0FBdUI7UUFDbkQsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNqQixPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7b0JBQ3JDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNYLE9BQU8sRUFBRSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLDRCQUE0Qjt3QkFDckYsU0FBUyxFQUFFLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksOEJBQThCO3dCQUN6RixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO3dCQUNwQixVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO3dCQUNwQixXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7d0JBQ3JCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztxQkFDNUIsQ0FBQztvQkFDRixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7b0JBQ25CLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRztpQkFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBR0QsUUFBUTtJQUNSLENBQUM7SUFFTSxXQUFXLENBQUMsS0FBSztRQUN0QixNQUFNLE1BQU0sR0FBYSxLQUFLLENBQUMsTUFBa0IsQ0FBQztRQUNsRCxNQUFNLEtBQUssR0FBVyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDakQsTUFBTSxHQUFHLEdBQVcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3RCLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLEtBQUs7WUFDWixHQUFHLEVBQUUsR0FBRztTQUNULENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVNLFVBQVUsQ0FBQyxHQUFVO1FBQzFCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7OztZQTFERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFFM0IseU5BQStDOzthQUNoRDs7O3FCQU1FLEtBQUs7c0JBQ0wsS0FBSztxQkFPTCxLQUFLO3dCQUNMLEtBQUs7NEJBbUJMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0ICogYXMgTCBmcm9tICdsZWFmbGV0Jztcbi8vIGltcG9ydCAnc3R5bGUtbG9hZGVyIWxlYWZsZXQvZGlzdC9sZWFmbGV0LmNzcyc7XG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IExlYWZsZXRNb2RlbCB9IGZyb20gJy4uL21vZGVscy9sZWFmbGV0Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tbWFwcy1sZWFmbGV0JyxcbiAgc3R5bGVVcmxzOiBbJy4vZG8tbWFwcy1sZWFmbGV0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kby1tYXBzLWxlYWZsZXQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEb01hcHNMZWFmbGV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIG1hcDogTC5NYXA7XG4gIHByaXZhdGUgZGVmYXVsdExhdExuZzogTC5MYXRMbmcgPSBMLmxhdExuZyh7IGxhdDogLTIuMzY0MTcwMSwgbG5nOiAxMTcuNzY5MDkyNyB9KTtcbiAgcHJpdmF0ZSB6b29tOiBudW1iZXIgPSA0LjU7XG4gIEBJbnB1dCgpIHB1YmxpYyBoZWlnaHQ6IG51bWJlciA9IDI1O1xuICBASW5wdXQoKSBwdWJsaWMgb3B0aW9ucyA9IHtcbiAgICBsYXllcnM6IFtcbiAgICAgIEwudGlsZUxheWVyKCdodHRwOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJywgeyBtYXhab29tOiAxOCwgYXR0cmlidXRpb246ICdDaXZpbGlhbnMgRW1lcmdlbmN5IFJlcG9ydCcgfSksXG4gICAgXSxcbiAgICB6b29tOiB0aGlzLnpvb20sXG4gICAgY2VudGVyOiB0aGlzLmRlZmF1bHRMYXRMbmcsXG4gIH07XG4gIEBJbnB1dCgpIHB1YmxpYyBsYXllcnM6IGFueVtdID0gW107XG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgbWFya2Vyc0ZuKG1hcmtlcnM6IExlYWZsZXRNb2RlbFtdKSB7XG4gICAgaWYgKG1hcmtlcnMpIHtcbiAgICAgIHRoaXMubGF5ZXJzID0gW107XG4gICAgICBtYXJrZXJzLmZvckVhY2gobWFya2VyID0+IHtcbiAgICAgICAgdGhpcy5sYXllcnMucHVzaChMLm1hcmtlcihtYXJrZXIubWFyaywge1xuICAgICAgICAgIGljb246IEwuaWNvbih7XG4gICAgICAgICAgICBpY29uVXJsOiBgJHtkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYmFzZScpWzBdLmhyZWZ9YXNzZXRzL21hcC9tYXJrZXItaWNvbi5wbmdgLFxuICAgICAgICAgICAgc2hhZG93VXJsOiBgJHtkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYmFzZScpWzBdLmhyZWZ9YXNzZXRzL21hcC9tYXJrZXItc2hhZG93LnBuZ2AsXG4gICAgICAgICAgICBpY29uU2l6ZTogWzI3LjUsIDQwXSxcbiAgICAgICAgICAgIGljb25BbmNob3I6IFsyMCwgNDBdLFxuICAgICAgICAgICAgcG9wdXBBbmNob3I6IFswLCAtNDBdLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBtYXJrZXIuY2xhc3NOYW1lLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRpdGxlOiBtYXJrZXIudGl0bGUsXG4gICAgICAgICAgYWx0OiBtYXJrZXIuYWx0LFxuICAgICAgICB9KS5vbignY2xpY2snLCB0aGlzLm1hcmtlckNsaWNrLmJpbmQodGhpcykpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBAT3V0cHV0KCkgcHVibGljIG9uTWFya2VyQ2xpY2s6IEV2ZW50RW1pdHRlcjxMZWFmbGV0TW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcjxMZWFmbGV0TW9kZWw+KCk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBwdWJsaWMgbWFya2VyQ2xpY2soZXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBsYXRsbmc6IEwuTGF0TG5nID0gZXZlbnQubGF0bG5nIGFzIEwuTGF0TG5nO1xuICAgIGNvbnN0IHRpdGxlOiBzdHJpbmcgPSBldmVudC50YXJnZXQub3B0aW9ucy50aXRsZTtcbiAgICBjb25zdCBhbHQ6IHN0cmluZyA9IGV2ZW50LnRhcmdldC5vcHRpb25zLmFsdDtcbiAgICB0aGlzLm9uTWFya2VyQ2xpY2suZW1pdCh7XG4gICAgICBtYXJrOiBsYXRsbmcgLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgYWx0OiBhbHQsXG4gICAgfSk7XG4gICAgZGVsYXkoMjAwKTtcbiAgICB0aGlzLm1hcC5zZXRWaWV3KFtsYXRsbmcubGF0LCBsYXRsbmcubG5nXSwgMTUpO1xuICB9XG5cbiAgcHVibGljIG9uTWFwUmVhZHkobWFwOiBMLk1hcCk6IHZvaWQge1xuICAgIHRoaXMubWFwID0gbWFwO1xuICB9XG5cbn1cbiJdfQ==