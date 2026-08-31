import { computed, Injectable, signal } from '@angular/core';
import { landing_carousel } from '../data/landing-carousel';

@Injectable({ providedIn: 'root' })
export class LandingCarouselService {
  readonly current_index = signal(0);
  readonly items = landing_carousel;

  readonly items_length = computed(() => this.items.length);

  set_current_index(index: number): void {
    this.current_index.set(index);
  }

  next(): void {
    this.current_index.update((value) => (value + 1) % this.items_length());
  }

  previous(): void {
    this.current_index.update((value) => (value - 1 + this.items_length()) % this.items_length());
  }
}
