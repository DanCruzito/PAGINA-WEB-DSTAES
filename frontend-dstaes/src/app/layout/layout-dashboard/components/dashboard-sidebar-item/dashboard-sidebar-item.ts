import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UiIcon } from '../../../../shared/ui/ui-icon/ui-icon';
import { IconValue } from '../../../../shared/ui/ui-icon/icons';

@Component({
  selector: 'dashboard-sidebar-item',
  imports: [UiIcon, RouterLink],
  templateUrl: './dashboard-sidebar-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardSidebarItem {

  icon = input.required<IconValue>();
  label = input.required<string>();
  goto = input.required<string>();

}
