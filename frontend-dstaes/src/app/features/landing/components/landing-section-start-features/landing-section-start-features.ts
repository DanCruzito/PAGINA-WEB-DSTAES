import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { UiIcon } from "../../../../shared/ui/ui-icon/ui-icon";
import { counter_increase } from '../../../../shared/helpers/counter-increase';
import { landing_features } from '../../data/landing-features';

@Component({
  selector: 'landing-section-start-features',
  imports: [UiIcon],
  templateUrl: './landing-section-start-features.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingSectionStartFeatures {
  readonly landing_features = landing_features;
  readonly counter_values = signal<number[]>(
    landing_features.map(feature => feature.quantity ?? 0),
  );

  private readonly destroy_ref = inject(DestroyRef);

  constructor() {
    const cancel_counters = landing_features.flatMap((feature, index) =>
      feature.quantity === undefined
        ? []
        : [
          counter_increase(feature.quantity, value =>
            this.counter_values.update(values =>
              values.map((current, currentIndex) =>
                currentIndex === index ? value : current,
              ),
            ),
          ),
        ],
    );

    this.destroy_ref.onDestroy(() => cancel_counters.forEach(cancel => cancel()));
  }
}
