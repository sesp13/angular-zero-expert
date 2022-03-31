import { Component } from '@angular/core';
import { Feature } from '../../interfaces/places.interface';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  public selectedId: string = '';

  get isLoadingPlaces() {
    return this.placesService.isLoadingPlaces;
  }

  get places(): Feature[] {
    return this.placesService.places;
  }

  constructor(
    private placesService: PlacesService,
    private mapService: MapService
  ) {}

  flyTo(place: Feature) {
    const [lng, lat] = place.center;
    this.selectedId = place.id;
    this.mapService.flyTo({ lng, lat });
  }

  getDirections(place: Feature) {
    if (!this.placesService.userLocation)
      throw new Error('There is not user location');
    const start = this.placesService.userLocation!;
    const end = place.center as [number, number];
    this.mapService.getRouteBetweenPoints(start, end);
    // Clean places
    this.placesService.cleanPlaces();
  }
}
