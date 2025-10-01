import { Routes } from '@angular/router';

import { authGuard } from './guards/auth-guard';
import { loginGuard } from './guards/login-guard';

import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Products } from './pages/products/products';
import { NewProduct } from './pages/new-product/new-product';

export const routes: Routes = [
  {
    path: 'login',
    title: 'Login',
    component: Login,
    canActivate: [loginGuard],
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: Layout,
    canActivateChild: [authGuard],
    children: [
      {
        path: 'products',
        component: Products,
      },
      {
        path: 'products/new',
        component: NewProduct,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];
