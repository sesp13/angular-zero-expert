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

  private setUser(res: AuthResponse): void {
    this._user = {
      name: res.name!,
      uid: res.uid!,
      email: res.email!,
    };
  }

  private setUserAndToken(res: AuthResponse): void {
    this.setUser(res);
    // Save token
    localStorage.setItem('token', res.token);
  }

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const body = { email, password };
    return this.http.post<AuthResponse>(`${this.authUrl}`, body).pipe(
      tap((res) => {
        if (res.ok) {
          this.setUserAndToken(res);
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
      map((res: AuthResponse) => {
        // Set user
        if (res.ok) {
          this.setUser(res);
        }
        return res.ok;
      }),
      catchError((res) => of(false))
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  // Returns a boolean with the operation result
  register(user: User): Observable<any> {
    return this.http.post<AuthResponse>(`${this.authUrl}/new`, user).pipe(
      tap((res: AuthResponse) => {
        if (res.ok) {
          this.setUserAndToken(res);
        }
      }),
      map((res: AuthResponse) => res.ok),
      catchError((err) => of(err?.error?.msg))
    );
  }
}
