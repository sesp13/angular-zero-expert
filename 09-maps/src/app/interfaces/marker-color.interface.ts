import * as mapboxgl from 'mapbox-gl';

export interface MarkerColor {
  color: string;
  marker: mapboxgl.Marker;
}

export interface MarkerPosition {
  color: string;
  center: [number, number];
}