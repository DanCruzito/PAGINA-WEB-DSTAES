import { ChangeDetectionStrategy, Component } from '@angular/core';
import { dashboard_options } from '../../data/options';
import { DashboardSidebarItem } from '../dashboard-sidebar-item/dashboard-sidebar-item';

@Component({
  selector: 'dashboard-sidebar',
  imports: [DashboardSidebarItem],
  templateUrl: './dashboard-sidebar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardSidebar {
  readonly options = dashboard_options;
}
