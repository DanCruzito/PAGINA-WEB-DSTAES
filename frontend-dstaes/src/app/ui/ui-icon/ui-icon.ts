import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { available_icons, IconValue } from './icons';

@Component({
    selector: 'ui-icon',
    imports: [NgClass],
    templateUrl: './ui-icon.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiIcon {
    icon = input.required<IconValue>();
    available_icons = available_icons;
}
