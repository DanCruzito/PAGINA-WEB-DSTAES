import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutLandingHeaderLogo } from '../layout-landing-header-logo/layout-landing-header-logo';
import { UiMode } from "../../../../shared/ui/ui-mode/ui-mode";
import { UiButton } from "../../../../shared/ui/ui-button/ui-button";
import { RouterLink } from '@angular/router';
import { LayoutLandingHeaderIso } from "../layout-landing-header-iso/layout-landing-header-iso";

@Component({
  selector: 'layout-landing-header',
  imports: [LayoutLandingHeaderLogo, UiMode, UiButton, RouterLink, LayoutLandingHeaderIso],
  templateUrl: './layout-landing-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutLandingHeader { }
