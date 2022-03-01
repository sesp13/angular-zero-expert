import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = `https://restcountries.com/v2`;

  constructor(private http: HttpClient) {}

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url);
  }

  searchCountryByCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url);
  }

  searchCountryById(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
}
