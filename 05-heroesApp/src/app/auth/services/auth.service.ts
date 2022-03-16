import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.baseUrl;
  private _auth?: Auth;

  get auth(): Auth | undefined {
    return this._auth;
  }

  constructor(private http: HttpClient) {}

  verifyAuth(): Observable<boolean> {
    if (!localStorage.getItem('token')) {
      return of(false);
    }
    return this.http.get<Auth>(`${this.baseUrl}/users/1`).pipe(
      map((result: Auth) => {
        this._auth = result;
        return true;
      })
    );
  }

  login() {
    return this.http.get<Auth>(`${this.baseUrl}/users/1`).pipe(
      tap((user: Auth) => (this._auth = user)),
      tap((user: Auth) => localStorage.setItem('token', user.id))
    );
  }

  logout() {
    localStorage.removeItem('token');
    this._auth = undefined;
  }
}
