import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticatorService } from './authenticator.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authenticator = inject(AuthenticatorService);

  const router = inject(Router);

  if (authenticator.isConnected()) {
    return true;
  } else {
    router.navigate(["/home"]);
    return false;
  };
  
};
