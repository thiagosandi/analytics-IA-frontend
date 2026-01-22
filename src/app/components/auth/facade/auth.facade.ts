import { Injectable, inject, signal, computed } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { Router } from '@angular/router';
import { switchMap, tap, catchError, throwError } from 'rxjs';
@Injectable({ providedIn: 'root' })

export class AuthFacade {

    private authService = inject(AuthService);
    private router = inject(Router);

    private readonly TOKEN_KEY = 'token';

    private _token = signal<string | null>(
        localStorage.getItem(this.TOKEN_KEY)
    );

    isLoggedIn = computed(() => !!this._token());

    register(email: string, password: string) {
      return this.authService.register(email, password).pipe(
        switchMap(() => this.handleAuthSuccess()),
        catchError(err => {
          this.clearAuth();
          return throwError(() => err);
        })
      );
    }

    login(email: string, password: string) {
      return this.authService.login(email, password).pipe(
        switchMap(() => this.handleAuthSuccess()),
        catchError(err => {
          this.clearAuth();
          return throwError(() => err);
        })
      );
    }
    
    private clearAuth() {
      localStorage.removeItem(this.TOKEN_KEY);
      this._token.set(null);
    }

    private handleAuthSuccess() {
      return this.authService.getToken().pipe(
        tap(token => {
          if (!token) {
            this.clearAuth();
            return;
          }

          localStorage.setItem(this.TOKEN_KEY, token);
          this._token.set(token);
        }),
        tap(() => this.router.navigate(['/home']))
      );
    }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this._token.set(null);
    return this.authService.logout();
  }

  getToken(): string | null {
    return this._token();
  }
}
