import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardHeader } from '../components/dashboard-header/dashboard-header';
import { DashboardSidebar } from "../components/dashboard-sidebar/dashboard-sidebar";

@Component({
  selector: 'layout-dashboard',
  imports: [DashboardHeader, RouterOutlet, DashboardSidebar],
  templateUrl: './layout-dashboard.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutDashboard { }
