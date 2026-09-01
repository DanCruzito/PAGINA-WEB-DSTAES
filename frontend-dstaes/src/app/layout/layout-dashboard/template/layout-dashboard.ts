import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardHeader } from '../components/dashboard-header/dashboard-header';

@Component({
  selector: 'layout-dashboard',
  imports: [DashboardHeader, RouterOutlet],
  templateUrl: './layout-dashboard.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutDashboard { }
