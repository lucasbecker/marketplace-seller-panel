import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

import { AuthService } from '../services/auth';

export const loginGuard: CanActivateFn = async (_route, _state) => {
  const _router = inject(Router);
  const _authService = inject(AuthService);

  const token = _authService.getToken();

  if (!token) return true;

  try {
    await firstValueFrom(_authService.validateToken());
    return await _router.navigate(['/products']);
  } catch (err) {
    console.log(err);
    return true;
  }
};
