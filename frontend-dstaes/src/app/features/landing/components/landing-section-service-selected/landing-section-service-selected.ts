import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ServiceInterface } from '../../../../shared/interfaces/entities/service.interface';
import { UiCard } from "../../../../shared/ui/ui-card/ui-card";
import { UiButton } from "../../../../shared/ui/ui-button/ui-button";

@Component({
  selector: 'landing-section-service-selected',
  imports: [UiCard, UiButton],
  templateUrl: './landing-section-service-selected.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingSectionServiceSelected {
  service = input.required<ServiceInterface>();
}
