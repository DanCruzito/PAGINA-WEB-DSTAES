import { Component, input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'ui-card',
  templateUrl: './ui-card.html',
  imports: [],
})
export class UiCard {
  divided = input(true, { transform: booleanAttribute });
  unwrap = input(false, { transform: booleanAttribute });
  hoverable = input(false, { transform: booleanAttribute });
}
