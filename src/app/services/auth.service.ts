import { Injectable, inject, signal, computed } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User
} from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);

  private readonly TOKEN_KEY = 'token';

  private _token = signal<string | null> (
    localStorage.getItem(this.TOKEN_KEY)
  );

  isLoggedIn = computed(() => !!this._token());

  login(email: string, password: string) {
    localStorage.setItem(this.TOKEN_KEY, 'true');
    this._token.set('true');
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this._token.set(null);
    return signOut(this.auth);
  }

  get currentUser(): User | null {
    return this.auth.currentUser;
  }
}
