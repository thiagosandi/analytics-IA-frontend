import { Routes } from '@angular/router';

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
    loadChildren: () =>
      import('./components/tips/tips.routes')
        .then(m => m.TIPS_ROUTES)
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/dashboard-central/dashboard-central.routes')
        .then(m => m.DASHBOARD_CENTRAL_ROUTES)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];