import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/auth-response.interface';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private authUrl: string = `${this.baseUrl}/auth`;
  private _user?: User;

  get user() {
    return { ...this._user };
  }

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const body = { email, password };
    return this.http.post<AuthResponse>(`${this.authUrl}`, body).pipe(
      tap((res) => {
        if (res.ok) {
          this._user = {
            name: res.name!,
            uid: res.uid!,
          };
          // Save token
          localStorage.setItem('token', res.token);
        }
      }),
      map((res) => res.ok),
      catchError((err) => of(err?.error?.msg))
    );
  }

  checkToken(): Observable<boolean> {
    const url = `${this.authUrl}/renew`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') ?? ''
    );
    return this.http.get<AuthResponse>(url, { headers }).pipe(
      map((result: AuthResponse) => {
        // Set user
        if (result.ok) {
          this._user = {
            name: result.name!,
            uid: result.uid!,
          };
        }
        return result.ok;
      }),
      catchError((result) => of(false))
    );
  }

  logout() {
    localStorage.removeItem('token');
  }
}
