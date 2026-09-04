import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LandingWrapper } from "../landing-wrapper/landing-wrapper";
import { LandingSectionPortfolioCard } from "../landing-section-portfolio-card/landing-section-portfolio-card";
import { LandingDataService } from '../../services/landing-data.service';

@Component({
  selector: 'landing-section-portfolio',
  imports: [LandingWrapper, LandingSectionPortfolioCard],
  templateUrl: './landing-section-portfolio.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingSectionPortfolio {
  landing_data_service = inject(LandingDataService)

  projects = this.landing_data_service.data.projects;
}
