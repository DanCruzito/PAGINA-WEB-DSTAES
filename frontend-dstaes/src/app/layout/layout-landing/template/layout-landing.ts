import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { LandingHeader } from '../../../features/landing/components/landing-header/landing-header';

@Component({
  selector: 'layout-landing',
  imports: [LandingHeader, RouterOutlet],
  templateUrl: './layout-landing.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutLanding { }
