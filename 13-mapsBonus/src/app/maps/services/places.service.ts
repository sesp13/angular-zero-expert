import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PlacesApiClient } from '../api/placesApiClient';
import { Feature, PlacesResponse } from '../interfaces/places.interface';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  public userLocation?: [number, number];
  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];

  get isUserLocationReady(): boolean {
    return this.userLocation !== undefined;
  }

  constructor(private placesApi: PlacesApiClient) {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.userLocation = [coords.longitude, coords.latitude];
          resolve(this.userLocation);
        },
        (err) => {
          alert('The location could not be read');
          console.log(err);
          reject();
        }
      );
    });
  }

  getPlacesByQuery(query: string) {
    if (!this.userLocation) throw Error('No user location provided');
    this.isLoadingPlaces = true;
    this.placesApi
      .get<PlacesResponse>(`/${query}.json`, {
        params: {
          proximity: this.userLocation?.join(','),
        },
      })
      .subscribe((res) => {
        console.log(res.features[0]);
      });
  }
}
