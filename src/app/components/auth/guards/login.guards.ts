import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthFacade } from '../facade/auth.facade';

export const LoginGuard: CanActivateFn = () => {
  const authFacade = inject(AuthFacade);
  const router = inject(Router);

  if (authFacade.isLoggedIn()) {
    return router.createUrlTree(['/home']);
  }

  return true;
};