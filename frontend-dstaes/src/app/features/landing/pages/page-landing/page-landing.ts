import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LandingHeader } from "../../components/landing-header/landing-header";

@Component({
  selector: 'page-landing',
  imports: [LandingHeader],
  templateUrl: './page-landing.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLanding { }
