import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  private debounceTimer?: NodeJS.Timeout;

  constructor(private placesService: PlacesService) {}

  onQueryChanged(value: string) {
    // Clear timeout until we leave writting
    if (this.debounceTimer) clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.placesService.getPlacesByQuery(value);
    }, 300);
  }
}
