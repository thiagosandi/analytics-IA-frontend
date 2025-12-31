import { Routes } from '@angular/router';
import { Loggin } from './loggin/loggin/loggin';
import { HomeComponent } from './home/home/home';

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