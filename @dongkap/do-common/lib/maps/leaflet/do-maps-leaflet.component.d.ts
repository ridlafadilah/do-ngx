import { EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import * as L from 'leaflet';
import { LeafletModel } from '../models/leaflet.model';
export declare class DoMapsLeafletComponent implements OnInit {
    private map;
    private defaultLatLng;
    private zoom;
    height: number;
    options: {
        layers: L.TileLayer[];
        zoom: number;
        center: L.LatLng;
    };
    layers: any[];
    set markersFn(markers: LeafletModel[]);
    onMarkerClick: EventEmitter<LeafletModel>;
    ngOnInit(): void;
    markerClick(event: any): void;
    onMapReady(map: L.Map): void;
}
