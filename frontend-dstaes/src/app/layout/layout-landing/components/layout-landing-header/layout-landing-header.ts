import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { LayoutLandingHeaderLogo } from '../layout-landing-header-logo/layout-landing-header-logo';
import { UiMode } from "../../../../shared/ui/ui-mode/ui-mode";
import { UiButton } from "../../../../shared/ui/ui-button/ui-button";
import { RouterLink } from '@angular/router';
import { LayoutLandingHeaderIso } from "../layout-landing-header-iso/layout-landing-header-iso";
import { LayoutLandingHeaderOption } from '../layout-landing-header-option/layout-landing-header-option';
import { landing_options } from '../../data/options';

@Component({
  selector: 'layout-landing-header',
  imports: [LayoutLandingHeaderLogo, UiMode, UiButton, RouterLink, LayoutLandingHeaderIso, LayoutLandingHeaderOption],
  templateUrl: './layout-landing-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutLandingHeader {
  options = signal(landing_options);
}
