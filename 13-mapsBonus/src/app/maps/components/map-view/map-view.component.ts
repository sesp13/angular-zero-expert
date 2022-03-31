import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Map, Popup, Marker } from 'mapbox-gl';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapDiv') mapDivElement?: ElementRef;

  constructor(private placesServices: PlacesService) {}

  ngAfterViewInit(): void {
    // Init map
    const map = new Map({
      container: this.mapDivElement?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.placesServices.userLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    const popup = new Popup().setHTML(`
      <h6>Here I am </h6>
      <span> I'm in this place of the world </h6>
    `);

    new Marker({
      color: 'red',
    })
      .setLngLat(this.placesServices.userLocation!)
      .setPopup(popup)
      .addTo(map);
  }
}
