import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { UiIcon } from "../../../../shared/ui/ui-icon/ui-icon";
import { counter_increase } from '../../../../shared/helpers/counter-increase';

@Component({
  selector: 'landing-section-start-features',
  imports: [UiIcon],
  templateUrl: './landing-section-start-features.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingSectionStartFeatures {
  readonly projects = signal(0);

  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    const cancelCounters = [
      counter_increase(150, value => this.projects.set(value)),
      counter_increase(150, value => this.projects.set(value)),
      counter_increase(150, value => this.projects.set(value)),
      counter_increase(150, value => this.projects.set(value)),
    ];

    this.destroyRef.onDestroy(() => cancelCounters.forEach(cancel => cancel()));
  }
}
