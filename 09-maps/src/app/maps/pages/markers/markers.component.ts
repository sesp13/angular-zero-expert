import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {
  MarkerColor,
  MarkerPosition,
} from 'src/app/interfaces/marker-color.interface';

@Component({
  selector: 'app-markers',
  templateUrl: './markers.component.html',
  styleUrls: ['./markers.component.scss'],
})
export class MarkersComponent implements AfterViewInit {
  @ViewChild('map') mapDiv?: ElementRef;
  map?: mapboxgl.Map;
  zoomLevel?: number = 15;
  center: [number, number] = [-75.59135456031214, 6.165118441365262];

  // Markers arr
  markers: MarkerColor[] = [];
  markersPositions: [number, number][] = [];

  constructor() {}

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.mapDiv?.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
    });
    this.readMarkersLocalStorage();
  }

  addMarker(): void {
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    const newMarker = new mapboxgl.Marker({
      draggable: true,
      color,
    })
      .setLngLat(this.center)
      .addTo(this.map!);

    this.markers.push({ color, marker: newMarker });
    this.saveMarkersLocalStorage();

    // Listen to the movements
    newMarker.on('dragend', () => {
      this.saveMarkersLocalStorage();
    });
  }

  goMarker(marker: mapboxgl.Marker): void {
    this.map?.flyTo({
      center: marker.getLngLat(),
      zoom: this.zoomLevel,
    });
  }

  saveMarkersLocalStorage() {
    const markersArr: MarkerPosition[] = [];
    this.markers.forEach((markerColor: MarkerColor) => {
      const color = markerColor.color;
      const { lng, lat } = markerColor.marker!.getLngLat();
      markersArr.push({
        color,
        center: [lng, lat],
      });
    });
    //Save
    localStorage.setItem('markers', JSON.stringify(markersArr));
  }

  readMarkersLocalStorage() {
    const markersSaved = localStorage.getItem('markers');
    if (!markersSaved) {
      return;
    }
    const markersArr: MarkerPosition[] = JSON.parse(markersSaved);
    markersArr.forEach((position: MarkerPosition) => {
      const marker: mapboxgl.Marker = new mapboxgl.Marker({
        draggable: true,
        color: position.color,
      })
        .setLngLat(position.center)
        .addTo(this.map!);

      // Listen to the movements
      marker.on('dragend', () => {
        this.saveMarkersLocalStorage();
      });

      // Set current marker
      this.markers.push({ color: position.color, marker });
    });
  }

  deleteMarker(i: number) {
    this.markers[i]?.marker.remove();
    this.markers.splice(i, 1);
    this.saveMarkersLocalStorage();
  }
}
