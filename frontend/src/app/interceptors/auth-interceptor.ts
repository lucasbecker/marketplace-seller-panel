import { inject } from '@angular/core';
import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { AuthService } from '../services/auth';

export const authInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const _authService = inject(AuthService);

  const token = _authService.getToken();

  if (token) {
    const newReq = req.clone({ headers: req.headers.append('Authorization', `Bearer ${token}`) });

    return next(newReq);
  }

  return next(req);
};
