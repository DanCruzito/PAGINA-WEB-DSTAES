import { Component, input, inject, booleanAttribute } from '@angular/core';
import { InputDirective } from '../ui-input/input.directive';
import { UiFieldControl } from '../ui-field/ui-field.directive';
import { FieldControllable } from '../ui-field/field-controllable';

@Component({
  selector: 'ui-checkbox',
  templateUrl: './ui-checkbox.html',
  imports: [],
  hostDirectives: [
    {
      directive: InputDirective,
      inputs: ['field', 'value'],
      outputs: ['valueChange'],
    },
  ],
})
export class UiCheckbox extends UiFieldControl implements FieldControllable {
  label = input<string>('');
  disabled = input(false, { transform: booleanAttribute });
  href = input<string | null>(null);
  helper = input<string | null>(null);
  readonly model = inject(InputDirective).adapter;

  get is_checked() {
    return this.model().get() === 'true';
  }

  get is_error() {
    return !!(this.field() && this.error_message() && this.field()!().touched());
  }

  toggle() {
    this.model().set(!this.is_checked ? 'true' : null);
    this.model().dirty();
    this.model().touched();
  }
}
