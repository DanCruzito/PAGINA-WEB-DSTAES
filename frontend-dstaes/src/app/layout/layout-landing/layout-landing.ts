import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LandingHeader } from '../../features/landing/components/landing-header/landing-header';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'layout-landing',
  imports: [LandingHeader, RouterOutlet],
  templateUrl: './layout-landing.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutLanding { }
