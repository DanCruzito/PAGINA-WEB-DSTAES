import { booleanAttribute, ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { IconValue } from '../ui-icon/icons';
import { UiIcon } from '../ui-icon/ui-icon';
import { ButtonSize, ui_button_sizes } from './ui-button-sizes';
import { UiButtonVariants, ui_button_variants } from './ui-button-variants';

@Component({
    selector: 'ui-button',
    imports: [UiIcon],
    templateUrl: './ui-button.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiButton {
    typebutton = input<'submit' | 'button' | 'reset'>('button');
    labelbutton = input<string | null>(null);
    idbutton = input<string>();
    icon = input<IconValue | null>(null);
    variant = input<UiButtonVariants>('default');
    rounded = input(false, { transform: booleanAttribute });
    size = input<ButtonSize>('md');
    block = input(false, { transform: booleanAttribute });
    outline = input(false, { transform: booleanAttribute });
    disabled = input(false, { transform: booleanAttribute });
    is_spinning = input(false, { transform: booleanAttribute });
    soft = input(false, { transform: booleanAttribute });

    protected readonly disabled_classes = computed(() =>
        this.disabled() ? 'cursor-not-allowed opacity-50' : '',
    );

    protected get button_classes() {
        const variant = ui_button_variants[this.variant()] ?? ui_button_variants.default;
        const size = ui_button_sizes[this.size()] ?? ui_button_sizes.md;

        const classes = [
            'box-border font-medium leading-5 rounded-base focus:outline-none cursor-pointer focus:ring-4 flex flex-row items-center justify-center transition-colors',
            variant.background,
            variant.text,
            variant.border,
            variant.hover,
            variant.focus,
            variant.shadow,
            size.text,
            !this.labelbutton() && this.icon() ? size.p : `${size.px} ${size.py}`,
            this.block() ? 'w-full' : '',
            this.rounded() ? 'rounded-full' : '',
            this.outline() ? variant.outline ?? '' : '',
            this.soft() ? variant.soft ?? '' : '',
        ];

        return classes.filter(Boolean).join(' ');
    }
}
