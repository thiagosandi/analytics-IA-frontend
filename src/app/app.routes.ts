import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { Loggin } from './components/loggin/loggin';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Loggin
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];