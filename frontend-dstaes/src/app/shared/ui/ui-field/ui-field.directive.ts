import { AfterContentInit, AfterViewInit, computed, Directive, input, InputSignal, model } from '@angular/core';
import { Field } from '@angular/forms/signals';
import { create_field_error } from './field-computed-values';

@Directive()
export class UiFieldControl implements AfterContentInit {
  id_from_label?: string;
  id_value: string | null = null;
  field = input<Field<any, string | number>>();
  value = model<string | number | any | null>(null);

  idfield = input<string | undefined>();
  error_message = computed(() => {
    const field = this.field();
    return field
      ? create_field_error(this.field as InputSignal<Field<any, string | number>>)()
      : null;
  });

  set_value(target: EventTarget) {
    return (target as HTMLInputElement).value;
  }

  ngAfterContentInit() {
    if (this.id_from_label) {
      this.id_value = this.id_from_label;
    } else if (this.idfield()) {
      this.id_value = this.idfield()!;
    } else {
      this.id_value = null;
    }
  }
}
