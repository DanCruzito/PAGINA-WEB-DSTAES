import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconValue } from '../../../../shared/ui/ui-icon/icons';
import { UiIcon } from "../../../../shared/ui/ui-icon/ui-icon";

@Component({
  selector: 'landing-section-service-icon',
  imports: [UiIcon],
  templateUrl: './landing-section-service-icon.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingSectionServiceIcon {
  name = input.required<IconValue>();
}
