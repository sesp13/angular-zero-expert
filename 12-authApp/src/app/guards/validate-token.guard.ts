import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ValidateTokenGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  checkToken(): Observable<boolean> {
    return this.authService.checkToken().pipe(
      tap((valid) => {
        if (!valid) {
          this.router.navigateByUrl('/auth');
        }
      })
    );
  }

  canActivate(): Observable<boolean> | boolean {
    return this.checkToken();
  }

  canLoad(): boolean | Observable<boolean> {
    return this.checkToken();
  }
}
