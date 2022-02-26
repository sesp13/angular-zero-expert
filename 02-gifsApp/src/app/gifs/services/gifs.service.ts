import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';
@Injectable({
  providedIn: 'root'
})
export class GifsService {
  // Requires the secret environment file setted
  private apiKey: string = environment?.gifToken ?? "";
  private serviceUrl = `https://api.giphy.com/v1/gifs`;
  private _historial: string[] = [];

  public results: Gif[] = [];

  get historial(): string[] {
    // Do this kind of return to break reference
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    // Get historial from localstorage
    const historial = localStorage.getItem('historial');
    if (historial)
      this._historial = JSON.parse(historial);

    // Load Results
    const results = localStorage.getItem('results');
    if (results)
      this.results = JSON.parse(results);
  }

  searchGifs(query: string): void {
    query = query.trim().toLowerCase();
    // Dont allow empty spaces
    if (query.length == 0) return;
    // Only unique  items
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      // Limit just to 10 entries
      this._historial = this._historial.splice(0, 10);
      // Save historial on local
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    // Set query params required for the request
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query)
      .set('limit', '10');

    this.http.get<SearchGifsResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((response) => {
        this.results = response.data;
        // Save the last results on local
        localStorage.setItem('results', JSON.stringify(this.results));
      });
  }
}
