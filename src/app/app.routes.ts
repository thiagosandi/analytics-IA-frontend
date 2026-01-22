import { Routes } from '@angular/router';
import { AuthGuard } from './components/auth/guards/auth.guards';
import { LoginGuard } from './components/auth/guards/login.guards';

export const routes: Routes = [

  // 🔓 ROTA PÚBLICA
  {
    path: 'login',
    canActivate: [LoginGuard],
    data: { hideMenu: true },
    loadComponent: () =>
      import('./components/auth/loggin/loggin')
        .then(m => m.Loggin)
  },

  // 🔓 ROTA PÚBLICA
  {
    path: 'registrar',
    data: { hideMenu: true },
    loadComponent: () =>
      import('./components/auth/register/register')
        .then(m => m.RegisterComponent)
  },

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

  // 🔐 ÁREA AUTENTICADA
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      
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
