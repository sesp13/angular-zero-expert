import { Injectable } from '@angular/core';
import {
  AnySourceData,
  LngLatBounds,
  LngLatLike,
  Map,
  Marker,
  Popup,
} from 'mapbox-gl';
import { DirectionsApiClient } from '../api';
import { DirectionsResponse, Route } from '../interfaces/directions.inteface';
import { Feature } from '../interfaces/places.interface';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private map?: Map;
  private markers: Marker[] = [];

  get isMapReady() {
    return this.map !== undefined;
  }

  constructor(private directionsApi: DirectionsApiClient) {}

  setMap(map: Map) {
    this.map = map;
  }

  flyTo(coords: LngLatLike) {
    if (!this.isMapReady) {
      throw new Error('The map is not ready');
    }
    this.map?.flyTo({
      zoom: 14,
      center: coords,
    });
  }

  createMarkersFromPlaces(places: Feature[], userLocation: [number, number]) {
    if (!this.map) throw new Error('The map is not ready');

    // Delete markers
    this.markers.forEach((marker) => marker.remove());

    const newMarkers = [];
    for (const place of places) {
      const [lng, lat] = place.center;
      const popUp = new Popup().setHTML(`
        <h6>${place.text}</h6>
        <span>${place.place_name}</span>
      `);

      const marker = new Marker()
        .setLngLat([lng, lat])
        .setPopup(popUp)
        .addTo(this.map);

      // Set markers
      newMarkers.push(marker);
    }

    if (places.length === 0) {
    }

    this.markers = newMarkers;

    if (places.length === 0) return;

    // Set map bounds to see all markers
    const bounds = new LngLatBounds();
    // Add user location
    bounds.extend(userLocation);
    this.markers.forEach((marker: Marker) => {
      bounds.extend(marker.getLngLat());
    });
    this.map.fitBounds(bounds, {
      padding: 200,
    });
  }

  getRouteBetweenPoints(start: [number, number], end: [number, number]) {
    this.directionsApi
      .get<DirectionsResponse>(`/${start.join(',')};${end.join(',')}`)
      .subscribe((res) => this.drawPolyLine(res.routes[0]));
  }

  private drawPolyLine(route: Route) {
    // console.log({
    //   kms: route.distance / 1000,
    //   duration: route.duration / 60,
    // });
    if (!this.map) throw new Error('No map loaded');
    const coords = route.geometry.coordinates;
    const bounds = new LngLatBounds();
    coords.forEach(([lng, lat]) => {
      bounds.extend([lng, lat]);
    });
    // Set bounds
    this.map.fitBounds(bounds, {
      padding: 200,
    });
    // Polyne
    const sourceData: AnySourceData = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: coords,
            },
          },
        ],
      },
    };

    // Clean layer and source to only have 1 route
    if (this.map.getLayer('RouteString')) {
      this.map.removeLayer('RouteString');
      this.map.removeSource('RouteString');
    }

    this.map.addSource('RouteString', sourceData);
    this.map.addLayer({
      id: 'RouteString',
      type: 'line',
      source: 'RouteString',
      layout: {
        'line-cap': 'round',
      },
      paint: {
        'line-color': 'green',
        'line-width': 3,
      },
    });
  }
}
