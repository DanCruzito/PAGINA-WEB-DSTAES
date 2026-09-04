import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LandingSectionServiceOption } from "../landing-section-service-option/landing-section-service-option";
import { LandingSectionServiceSelected } from "../landing-section-service-selected/landing-section-service-selected";
import { LandingSectionTechnology } from "../landing-section-technology/landing-section-technology";
import { LandingDataService } from '../../services/landing-data.service';
import { LandingWrapper } from "../landing-wrapper/landing-wrapper";

@Component({
  selector: 'landing-section-service',
  imports: [LandingSectionServiceOption, LandingSectionServiceSelected, LandingSectionTechnology, LandingWrapper],
  templateUrl: './landing-section-service.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingSectionService {
  landing_page_service = inject(LandingDataService);

  services = this.landing_page_service.data.services;

}
