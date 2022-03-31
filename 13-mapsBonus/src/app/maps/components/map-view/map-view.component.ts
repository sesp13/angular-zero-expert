import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import mapboxgl from 'mapbox-gl';
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
    new mapboxgl.Map({
      container: this.mapDivElement?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.placesServices.userLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
    });
  }
}
