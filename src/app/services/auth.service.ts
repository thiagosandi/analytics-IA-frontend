import { Injectable, inject, signal, computed } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User
} from '@angular/fire/auth';
import { firstValueFrom, from, Observable, of, switchMap } from 'rxjs';
import { authState } from '@angular/fire/auth';
  import { setLogLevel, LogLevel } from "@angular/fire";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);

  value = signal(0);

  firstName = signal('Thiago');

  finalName = computed(() => this.firstName() + ': ' + this.value());

  increase() {
    this.value.update(v => v + 1);
  }

  constructor() {
    setLogLevel(LogLevel.VERBOSE);
  }
  
  login(email: string, password: string) {
    return from(
    signInWithEmailAndPassword(this.auth, email, password)
    );
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  getToken(): Observable<string | null> {
  return authState(this.auth).pipe(
    switchMap(user =>
      user ? from(user.getIdToken()) : of(null)
    )
  );
}

  get currentUser(): User | null {
    return this.auth.currentUser;
  }
}

