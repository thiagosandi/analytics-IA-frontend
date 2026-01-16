import { Injectable, inject, signal, computed } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { Router } from '@angular/router';
@Injectable({ providedIn: 'root' })

export class AuthFacade {

    private authService = inject(AuthService);
    private router = inject(Router);

    private readonly TOKEN_KEY = 'token';

    private _token = signal<string | null>(
        localStorage.getItem(this.TOKEN_KEY)
    );

    isLoggedIn = computed(() => !!this._token());

    login(email: string, password: string) {
        return this.authService.login(email, password).subscribe({
            next: (response) => {
          let token;
          this.authService.getToken().subscribe((token) => {
            if(!token){
               localStorage.removeItem(this.TOKEN_KEY);
                this._token.set(null);
                return;
            }
               localStorage.setItem(this.TOKEN_KEY, token);
               this._token.set(token);
               this.router.navigate(['/home']);
          }); 

          
        },
        error: () => {
          this._token.set(null);
          localStorage.removeItem(this.TOKEN_KEY);
        }
      });
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
