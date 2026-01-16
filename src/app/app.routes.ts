import { Routes } from '@angular/router';
import { AuthGuard } from './components/auth/guards/auth.guards';
import { LoginGuard } from './components/auth/guards/login.guards';

export const routes: Routes = [

  // 🔓 ROTA PÚBLICA
  {
    path: 'login',
    canActivate: [LoginGuard],
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
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
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
      }
    ]
  },

  // 🚫 FALLBACK
  {
    path: '**',
    redirectTo: 'login'
  }
];
