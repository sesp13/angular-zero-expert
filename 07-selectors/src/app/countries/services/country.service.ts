import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { CountrySmall } from '../interfaces/country-small.inteface';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private baseUrl: string = 'https://restcountries.com/v3.1';
  private _regions: string[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  get regions(): string[] {
    return [...this._regions];
  }
  constructor(private http: HttpClient) {}

  getCountriesByRegion(region: string): Observable<CountrySmall[]> {
    return this.http.get<CountrySmall[]>(
      `${this.baseUrl}/region/${region}?fields=cca3,name`
    );
  }

  getCountryByCode(code: string): Observable<Country[] | null> {
    if (code == '') {
      return of(null);
    }
    return this.http.get<Country[]>(`${this.baseUrl}/alpha/${code}`);
  }

  getCountrySmallByCode(code: string): Observable<CountrySmall | null> {
    if (code == '') {
      return of(null);
    }
    return this.http.get<CountrySmall>(
      `${this.baseUrl}/alpha/${code}?fields=cca3,name`
    );
  }

  getCountriesByCodes(codes: string[]): Observable<(CountrySmall | null)[]> {
    if (!codes) {
      return of([]);
    }
    const requests: Observable<CountrySmall | null>[] = [];
    codes.forEach((code: string) => {
      requests.push(this.getCountrySmallByCode(code));
    });
    // Subscribe to all the observables at the same time!
    return combineLatest(requests);
  }
}
