import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LandingSectionStartCarousel } from '../../components/landing-section-start-carousel/landing-section-start-carousel';
import { LandingSectionStart } from "../../components/landing-section-start/landing-section-start";

@Component({
  selector: 'page-landing',
  imports: [LandingSectionStart],
  templateUrl: './page-landing.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLanding { }
