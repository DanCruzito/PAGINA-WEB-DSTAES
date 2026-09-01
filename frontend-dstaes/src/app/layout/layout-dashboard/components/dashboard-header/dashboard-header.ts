import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { UiButton } from '../../../../shared/ui/ui-button/ui-button';
import { UiMode } from '../../../../shared/ui/ui-mode/ui-mode';
import { ImageIso } from "../../../../shared/components/image-iso/image-iso";
import { ImageLogo } from "../../../../shared/components/image-logo/image-logo";

@Component({
  selector: 'dashboard-header',
  imports: [UiMode, UiButton, RouterLink, ImageIso, ImageLogo],
  templateUrl: './dashboard-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardHeader { }
