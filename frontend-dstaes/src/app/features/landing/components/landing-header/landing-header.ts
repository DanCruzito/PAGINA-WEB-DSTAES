import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiMode } from '../../../../shared/ui/ui-mode/ui-mode';
import { UiButton } from '../../../../shared/ui/ui-button/ui-button';

@Component({
  selector: 'landing-header',
  imports: [UiMode, UiButton],
  templateUrl: './landing-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingHeader { }
