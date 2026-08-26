import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiButton } from '../../../../ui/ui-button/ui-button';
import { UiMode } from '../../../../ui/ui-mode/ui-mode';

@Component({
  selector: 'landing-header',
  imports: [UiMode, UiButton],
  templateUrl: './landing-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingHeader { }
