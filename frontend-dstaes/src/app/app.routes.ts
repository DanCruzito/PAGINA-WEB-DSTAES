import { Routes } from '@angular/router';
import { PageLanding } from './features/landing/pages/page-landing/page-landing';
import { PageDashboard } from './features/dashboard/pages/page-dashboard/page-dashboard';
import { LayoutLanding } from './layout/layout-landing/layout-landing';
import { LayoutDashboard } from './layout/layout-dashboard/layout-dashboard';

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
    path: '**',
    redirectTo: ''
  },
];
