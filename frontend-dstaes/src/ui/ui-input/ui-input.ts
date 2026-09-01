import { Component, input, inject, booleanAttribute } from '@angular/core';

import { InputDirective } from '../ui-input/input.directive';
import { FieldControllable } from '../ui-field/field-controllable';
import { input_sizes, InputSize } from '../ui-types';
import { UiFieldControl } from '../ui-field/ui-field.directive';

@Component({
  selector: 'ui-input',
  templateUrl: './ui-input.html',
  providers: [
    {
      provide: FieldControllable,
      useExisting: UiInput,
    },
  ],
  hostDirectives: [
    {
      directive: InputDirective,
      inputs: ['field', 'value'],
      outputs: ['valueChange'],
    },
  ],
})
export class UiInput extends UiFieldControl implements FieldControllable {
  private readonly inputDirective = inject(InputDirective<string | number>);
  readonly model = inject(InputDirective<string | number>).adapter;

  placeholder = input<string>('');
  fieldtype = input<'text' | 'password' | 'tel' | 'url' | 'search'>('text');
  size = input<InputSize>('md');
  readonly = input(false, { transform: booleanAttribute });
  disabled = input(false, { transform: booleanAttribute });

  get size_classes() {
    const s = input_sizes[this.size()] ?? input_sizes.md;
    return [s.px, s.py, s.text].join(' ');
  }
}
