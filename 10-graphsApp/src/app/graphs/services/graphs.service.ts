import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GraphsService {
  constructor(private http: HttpClient) {}

  getSocialMediaUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/graph');
  }

  getSocialMediaUsersRxjs(): Observable<any> {
    return this.getSocialMediaUsers().pipe(
      map((data) => {
        const labels = Object.keys(data);
        const values: any = Object.values(data);
        return { labels, values };
      })
    );
  }
}
