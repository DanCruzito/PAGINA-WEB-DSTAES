import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProjectInterface } from '../../../../shared/interfaces/entities/project.interface';
import { UiBadge } from "../../../../shared/ui/ui-badge/ui-badge";

@Component({
  selector: 'landing-section-portfolio-card',
  imports: [UiBadge],
  templateUrl: './landing-section-portfolio-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingSectionPortfolioCard {
  project = input.required<ProjectInterface>();
}
