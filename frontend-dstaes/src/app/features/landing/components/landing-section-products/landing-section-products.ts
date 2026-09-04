import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LandingWrapper } from "../landing-wrapper/landing-wrapper";

@Component({
  selector: 'landing-section-products',
  imports: [LandingWrapper],
  templateUrl: './landing-section-products.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingSectionProducts { }
