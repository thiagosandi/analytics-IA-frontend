import { Injectable, inject, signal, computed } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User
} from '@angular/fire/auth';
import { firstValueFrom } from 'rxjs';
import { authState } from '@angular/fire/auth';
  import { setLogLevel, LogLevel } from "@angular/fire";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);

  ngOnInit() {
    setLogLevel(LogLevel.VERBOSE);
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  async getToken(): Promise<string | null> {
    const user = await firstValueFrom(authState(this.auth));
    return user ? user.getIdToken() : null;
  }

  get currentUser(): User | null {
    return this.auth.currentUser;
  }
}

