import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { UiCard } from "../../../../shared/ui/ui-card/ui-card";
import { ServiceInterface } from '../../../../shared/interfaces/entities/service.interface';
import { LandingSectionServiceIcon } from "../landing-section-service-icon/landing-section-service-icon";

@Component({
  selector: 'landing-section-service-option',
  imports: [UiCard, LandingSectionServiceIcon],
  templateUrl: './landing-section-service-option.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingSectionServiceOption {
  option = input.required<ServiceInterface>()
}
