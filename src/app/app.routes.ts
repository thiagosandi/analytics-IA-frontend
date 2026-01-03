import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { TipsComponent } from './components/tips/tips';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/loggin/loggin')
        .then(m => m.Loggin)
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home')
        .then(m => m.HomeComponent)
  },
   {
    path: 'tips',
    loadComponent: () =>
      import('./components/tips/tips')
        .then(m => m.TipsComponent)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];