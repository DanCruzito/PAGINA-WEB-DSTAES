import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiIcon } from "../../../../shared/ui/ui-icon/ui-icon";

@Component({
  selector: 'landing-section-start-features',
  imports: [UiIcon],
  templateUrl: './landing-section-start-features.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingSectionStartFeatures { }
