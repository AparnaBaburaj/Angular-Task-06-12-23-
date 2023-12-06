import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { inject } from '@angular/core';

export const authenGuard: CanActivateFn = (route, state) => {
  const service=inject(AuthenticationService);
  const router=inject(Router);

if (service.isAuthenticatedUser()) {
  return true;
} else {
  // Redirect to the login page if not authenticated
  return false;
}

  
};
/*
  if (service.isAuthenticated.value) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }

  //return true;
*/