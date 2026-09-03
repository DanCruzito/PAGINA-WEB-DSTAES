import { booleanAttribute, Component, input } from '@angular/core';
import { ui_badge_variants, UiBadgeVariants } from './ui-badge-variants';
import { IconValue } from '../ui-icon/icons';
import { UiIcon } from '../ui-icon/ui-icon';

@Component({
  selector: 'ui-badge',
  imports: [UiIcon],
  templateUrl: './ui-badge.html',
})
export class UiBadge {
  _label = input<string | null>(null);
  variant = input<UiBadgeVariants>('brand');
  bordered = input(false, { transform: booleanAttribute });
  large = input(false, { transform: booleanAttribute });
  pill = input(false, { transform: booleanAttribute });
  icon = input<IconValue | null>(null);
  dot = input(false, { transform: booleanAttribute });
  on_dismiss = input<(() => void) | null>(null);

  protected get variant_classes() {
    const variant = ui_badge_variants[this.variant()];
    return {
      background: variant.background,
      text: variant.text,
      bordered: this.bordered() ? variant.border : '',
      dot: this.dot() ? variant.dot : '',
      size: this.large() ? 'px-2 py-1 text-sm' : 'px-1.5 py-0.5 text-xs',
      pill: this.pill() ? 'rounded-full' : 'rounded',
      dismiss_hover: variant.dismiss_hover,
    };
  }
}
