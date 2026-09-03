import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UiCard } from "../../../../shared/ui/ui-card/ui-card";
import { LandingDataService } from '../../services/landing-data.service';
import { UiBadge } from "../../../../shared/ui/ui-badge/ui-badge";

@Component({
  selector: 'landing-section-technology',
  imports: [UiCard, UiBadge],
  templateUrl: './landing-section-technology.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingSectionTechnology {
  landing_data_service = inject(LandingDataService)

  technologies = this.landing_data_service.data.technologies;

}
