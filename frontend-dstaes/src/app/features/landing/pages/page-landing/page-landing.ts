import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LandingSectionStartCarousel } from '../../components/landing-section-start-carousel/landing-section-start-carousel';
import { LandingSectionStart } from "../../components/landing-section-start/landing-section-start";
import { LandingSectionService } from "../../components/landing-section-service/landing-section-service";

@Component({
  selector: 'page-landing',
  imports: [LandingSectionStart, LandingSectionService],
  templateUrl: './page-landing.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLanding { }
