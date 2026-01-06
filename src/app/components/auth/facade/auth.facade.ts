import { Injectable, inject, signal, computed } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
@Injectable({ providedIn: 'root' })

export class AuthFacade {

    private authService = inject(AuthService);

    private readonly TOKEN_KEY = 'token';

    private _token = signal<string | null>(
        localStorage.getItem(this.TOKEN_KEY)
    );

    isLoggedIn = computed(() => !!this._token());

    login(email: string, password: string) {
        localStorage.setItem(this.TOKEN_KEY, 'true');
        this._token.set('true');
        this.authService.login(email, password);
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
