import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ILoginResponse } from '../interfaces/login-response';
import { IAuthResponse } from '../interfaces/auth-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _apiUrl = 'http://localhost:3000/api';

  private readonly _httpClient = inject(HttpClient);

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    return localStorage.setItem('token', token);
  }

  clearToken() {
    return localStorage.removeItem('token');
  }

  validateToken() {
    return this._httpClient.get<IAuthResponse>(`${this._apiUrl}/protected`);
  }

  login(email: string, password: string) {
    return this._httpClient.post<ILoginResponse>(`${this._apiUrl}/auth/login`, {
      email,
      password,
    });
  }
}
