import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './app/components/home/home';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from './environments/environment';

bootstrapApplication(App, {
  providers: [
    ...appConfig.providers, // se já existir

    provideHttpClient(),

    provideFirebaseApp(() =>
      initializeApp(environment.firebase)
    ),

    provideAuth(() => getAuth())
  ]
}).catch(err => console.error(err));