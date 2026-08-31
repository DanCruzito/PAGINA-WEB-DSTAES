import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  effect,
  inject,
  viewChildren,
} from '@angular/core';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { LandingCarouselService } from '../../services/landing-carousel.service';

gsap.registerPlugin(CSSPlugin);

@Component({
  selector: 'app-landing-section-start-carousel',
  imports: [],
  templateUrl: './landing-section-start-carousel.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingSectionStartCarousel {

  readonly carousel_service = inject(LandingCarouselService);
  readonly current_index = this.carousel_service.current_index;
  readonly slide_elements = viewChildren<ElementRef<HTMLDivElement>>('slide_card');


  constructor() {
    effect(() => {
      this.update_cards();
    });
  }

  next(): void {
    this.carousel_service.next();
  }

  prev(): void {
    this.carousel_service.previous();
  }

  go_to(index: number): void {
    this.carousel_service.set_current_index(index);
  }

  private calculate_x(distance: number, diff: number, element_width: number): number {
    if (distance === 0) return 0;

    const base_x = element_width * 0.9 * diff;
    if (distance === 1) return base_x;

    const adjustment = (distance - 1) * 0.1 * element_width;
    return diff > 0 ? base_x - adjustment : base_x + adjustment;
  }

  private calculate_z(distance: number, element_width: number): number {
    if (distance === 0) return 0;
    if (distance === 1) return -element_width * (1 / 3);

    return -element_width * (0.33 + (distance - 1) * 0.67);
  }

  private update_cards(): void {
    if (typeof window === 'undefined') return;

    const cards = this.slide_elements();
    if (!cards.length) return;

    const max_visible = 2;

    const tl = gsap.timeline({
      defaults: {
        duration: 0.7,
        ease: 'power3.out',
      },
    });

    cards.forEach((element, index) => {

      const items_length = this.carousel_service.items_length();
      const raw_diff =
        (index - this.current_index() + items_length) % items_length;
      const diff =
        raw_diff > items_length / 2 ? raw_diff - items_length : raw_diff;

      const distance = Math.abs(diff);
      const is_visible = distance <= max_visible;

      const element_width = element.nativeElement.offsetWidth;
      const rotate_by_distance = 40;

      tl.to(
        element.nativeElement,
        {
          x: this.calculate_x(distance, diff, element_width),
          z: this.calculate_z(distance, element_width),
          rotateY: diff === 0 ? 0 : diff > 0 ? rotate_by_distance : -rotate_by_distance,
          rotateX: 0,
          opacity: is_visible ? 1 : 0,
          visibility: is_visible ? 'visible' : 'hidden',
          zIndex: 100 - distance,
          overwrite: true,
        },
        0
      );
    });
  }
}
