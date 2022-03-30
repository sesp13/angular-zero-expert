import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  get isUserLocationReady() {
    return this.placesService.isUserLocationReady;
  }

  constructor(private placesService: PlacesService) {}
}
