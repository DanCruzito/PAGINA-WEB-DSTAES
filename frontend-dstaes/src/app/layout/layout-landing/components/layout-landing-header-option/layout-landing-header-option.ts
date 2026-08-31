import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'layout-landing-header-option',
  imports: [],
  templateUrl: './layout-landing-header-option.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutLandingHeaderOption {
  label = input<string>();
  slug = input<string>();
}
