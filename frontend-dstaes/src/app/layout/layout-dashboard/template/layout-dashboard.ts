import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardHeader } from '../../../features/dashboard/components/dashoboard-header/dashboard-header';

@Component({
  selector: 'layout-dashboard',
  imports: [DashboardHeader, RouterOutlet],
  templateUrl: './layout-dashboard.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutDashboard { }
