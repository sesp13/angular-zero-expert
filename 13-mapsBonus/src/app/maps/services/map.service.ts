import { Injectable } from '@angular/core';
import { LngLatBounds, LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
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

  constructor() {}

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
}
