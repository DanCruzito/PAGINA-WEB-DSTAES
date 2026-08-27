import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiMode } from '../../../../shared/ui/ui-mode/ui-mode';
import { UiButton } from '../../../../shared/ui/ui-button/ui-button';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'dashboard-header',
  imports: [UiMode, UiButton, RouterLink],
  templateUrl: './dashboard-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardHeader { }
