import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GifsService {
  // Requires the secret environment file setted
  private apiKey: string = environment?.gifToken ?? "";
  private _historial: string[] = [];

  get historial(): string[] {
    // Do this kind of return to break reference
    return [...this._historial];
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
    }
  }

  constructor() {}
}
