import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { of } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isLoggedIn = authService.isLoggedIn();
  if (!isLoggedIn) {
    console.log('authGuard: not logged in');
    return of(
      router.createUrlTree(['/login'], {
        queryParams: { returnUrl: router.url }
      })
    );
  }

  console.log('authGuard: logged in');
  return of(true);
};
