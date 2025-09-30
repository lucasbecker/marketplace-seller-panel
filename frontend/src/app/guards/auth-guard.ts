import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

import { AuthService } from '../services/auth';

export const authGuard: CanActivateFn = async (_route, _state) => {
  const _router = inject(Router);
  const _authService = inject(AuthService);

  const token = _authService.getToken();

  if (!token) {
    return await _router.navigate(['/login']);
  }

  try {
    await firstValueFrom(_authService.validateToken());
    return true;
  } catch (err) {
    console.log(err);
    return await _router.navigate(['/login']);
  }
};
