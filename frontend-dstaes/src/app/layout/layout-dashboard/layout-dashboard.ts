import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardHeader } from '../../features/dashboard/components/dashoboard-header/dashboard-header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'layout-dashboard',
  imports: [DashboardHeader, RouterOutlet],
  templateUrl: './layout-dashboard.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutDashboard { }
