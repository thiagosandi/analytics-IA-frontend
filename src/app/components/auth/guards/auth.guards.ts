import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthFacade } from "../facade/auth.facade";
import { take, map } from 'rxjs/operators';
import { AuthService } from "../../../services/auth.service";

export const AuthGuard: CanActivateFn = () => {
  const authFacade = inject(AuthFacade);
  const router = inject(Router);

  if (authFacade.isLoggedIn()) {
    return true;
  }

  return router.createUrlTree(['/login']);
};