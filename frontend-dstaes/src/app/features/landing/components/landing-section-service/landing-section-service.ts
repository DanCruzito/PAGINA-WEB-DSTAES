import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiCard } from "../../../../shared/ui/ui-card/ui-card";
import { UiIcon } from "../../../../shared/ui/ui-icon/ui-icon";
import { landing_page_info } from '../../../../shared/data/landing_page_info';
import { UiButton } from "../../../../shared/ui/ui-button/ui-button";
import { LandingSectionServiceOption } from "../landing-section-service-option/landing-section-service-option";
import { LandingSectionServiceSelected } from "../landing-section-service-selected/landing-section-service-selected";

@Component({
  selector: 'landing-section-service',
  imports: [LandingSectionServiceOption, LandingSectionServiceSelected],
  templateUrl: './landing-section-service.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingSectionService {
  services = landing_page_info.services;

}
