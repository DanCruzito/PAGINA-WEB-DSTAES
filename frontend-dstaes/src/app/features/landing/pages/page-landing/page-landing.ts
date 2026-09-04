import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LandingSectionStartCarousel } from '../../components/landing-section-start-carousel/landing-section-start-carousel';
import { LandingSectionStart } from "../../components/landing-section-start/landing-section-start";
import { LandingSectionService } from "../../components/landing-section-service/landing-section-service";
import { LandingSectionPortfolio } from "../../components/landing-section-portfolio/landing-section-portfolio";
import { LandingSectionProducts } from "../../components/landing-section-products/landing-section-products";

@Component({
  selector: 'page-landing',
  imports: [LandingSectionStart, LandingSectionService, LandingSectionPortfolio, LandingSectionProducts],
  templateUrl: './page-landing.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLanding { }
