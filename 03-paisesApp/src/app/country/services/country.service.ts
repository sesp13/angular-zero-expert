import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = `https://restcountries.com/v2`;

  constructor(private http: HttpClient) { }

  searchCountry(term: string): Observable<any> {
    const url = `${this.apiUrl}/name/${term}`
    return this.http.get(url)
  }
}
