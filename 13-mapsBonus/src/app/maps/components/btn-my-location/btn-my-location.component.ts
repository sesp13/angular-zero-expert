import { Component, OnInit } from '@angular/core';
import { MapsService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.scss'],
})
export class BtnMyLocationComponent {
  constructor(
    private mapService: MapsService,
    private placesService: PlacesService
  ) {}

  goToMyLocation() {
    if (!this.placesService.isUserLocationReady)
      throw Error('There is not user location');
    if (!this.mapService.isMapReady) throw Error('The map is not ready');
    this.mapService.flyTo(this.placesService.userLocation!);
  }
}
