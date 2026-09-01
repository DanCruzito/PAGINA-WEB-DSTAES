import { Routes } from '@angular/router';
import { PageLanding } from './features/landing/pages/page-landing/page-landing';
import { PageDashboard } from './features/dashboard/pages/page-dashboard/page-dashboard';
import { LayoutLanding } from './layout/layout-landing/template/layout-landing';
import { LayoutDashboard } from './layout/layout-dashboard/template/layout-dashboard';
import { LayoutAuth } from './layout/layout-auth/template/layout-auth';
import { PageLogin } from './features/login/pages/page-login/page-login';

export const routes: Routes = [
  {
    path: '',
    component: LayoutLanding,
    children: [
      { path: '', component: PageLanding }
    ]
  },
  {
    path: 'dashboard',
    component: LayoutDashboard,
    children: [
      { path: '', component: PageDashboard }
    ]
  },
  {
    path: 'auth',
    component: LayoutAuth,
    children: [
      { path: '', component: PageLogin }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  },
];
