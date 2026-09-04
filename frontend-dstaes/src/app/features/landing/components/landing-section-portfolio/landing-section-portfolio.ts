import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LandingWrapper } from "../landing-wrapper/landing-wrapper";

@Component({
  selector: 'landing-section-portfolio',
  imports: [LandingWrapper],
  templateUrl: './landing-section-portfolio.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingSectionPortfolio { }
