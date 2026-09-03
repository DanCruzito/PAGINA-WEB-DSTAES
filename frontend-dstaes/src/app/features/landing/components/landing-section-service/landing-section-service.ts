import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiCard } from "../../../../shared/ui/ui-card/ui-card";
import { UiIcon } from "../../../../shared/ui/ui-icon/ui-icon";
import { landing_page_info } from '../../../../shared/data/landing_page_info';
import { UiButton } from "../../../../shared/ui/ui-button/ui-button";

@Component({
  selector: 'landing-section-service',
  imports: [UiCard, UiIcon, UiButton],
  templateUrl: './landing-section-service.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingSectionService {
  services = landing_page_info.services;

}
