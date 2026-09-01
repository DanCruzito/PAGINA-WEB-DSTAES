import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { UiButton } from '../../../../shared/ui/ui-button/ui-button';
import { UiMode } from '../../../../shared/ui/ui-mode/ui-mode';

@Component({
  selector: 'dashboard-header',
  imports: [UiMode, UiButton, RouterLink],
  templateUrl: './dashboard-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardHeader { }
