import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'landing-wrapper',
  imports: [],
  templateUrl: './landing-wrapper.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingWrapper {
  title = input.required<string>();
}
