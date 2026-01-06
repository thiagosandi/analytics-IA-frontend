import { Routes } from '@angular/router';
import { AuthGuard } from './components/auth/guards/auth.guards';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // 🔓 ROTA PÚBLICA
  {
    path: 'login',
    loadComponent: () =>
      import('./components/loggin/loggin')
        .then(m => m.Loggin)
  },

  // 🔐 ÁREA AUTENTICADA
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
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
      }
    ]
  },

  // 🚫 FALLBACK
  {
    path: '**',
    redirectTo: 'login'
  }
];
