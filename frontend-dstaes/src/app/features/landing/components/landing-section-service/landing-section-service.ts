import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiCard } from "../../../../shared/ui/ui-card/ui-card";
import { UiIcon } from "../../../../shared/ui/ui-icon/ui-icon";

@Component({
  selector: 'landing-section-service',
  imports: [UiCard, UiIcon],
  templateUrl: './landing-section-service.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingSectionService { }
