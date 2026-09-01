import { afterNextRender, AfterViewInit, ChangeDetectionStrategy, Component, computed, effect, ElementRef, inject, viewChild } from '@angular/core';
import { LandingSectionStartCarousel } from "../landing-section-start-carousel/landing-section-start-carousel";
import { UiButton } from "../../../../shared/ui/ui-button/ui-button";
import { LandingCarouselService } from '../../services/landing-carousel.service';
import { UiIcon } from "../../../../shared/ui/ui-icon/ui-icon";
import { LandingSectionStartFeatures } from "../landing-section-start-features/landing-section-start-features";
import { gsap } from 'gsap';


@Component({
  selector: 'landing-section-start',
  imports: [LandingSectionStartCarousel, UiButton, UiIcon, LandingSectionStartFeatures],
  templateUrl: './landing-section-start.html',
  host: {
    class: 'block w-full'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingSectionStart {
  public readonly carousel_service = inject(LandingCarouselService);
  readonly text_block = viewChild<ElementRef<HTMLDivElement>>('textBlock');
  readonly current_item = computed(() => {
    const index = this.carousel_service.current_index();
    return this.carousel_service.items[index] ?? this.carousel_service.items[0];
  });

  constructor() {
    effect(() => {
      if (typeof window === 'undefined') return;
      this.current_item();

      queueMicrotask(() => {
        const el = this.text_block();

        if (!el) return;

        gsap.fromTo(
          el.nativeElement,
          { opacity: 0, x: 10, duration: 0.4, ease: 'power2.out' },
          { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
        );
      });
    });
  }


  get_highlighted_segments(text: string, highlights: string[] = []): Array<{ text: string; highlighted: boolean }> {
    if (!text || !highlights.length) {
      return [{ text, highlighted: false }];
    }

    const normalized_highlights = highlights
      .filter((value) => value && value.trim().length > 0)
      .sort((a, b) => b.length - a.length)
      .map((value) => this.escape_regex(value));

    if (!normalized_highlights.length) {
      return [{ text, highlighted: false }];
    }

    const regex = new RegExp(`(${normalized_highlights.join('|')})`, 'gi');
    return text
      .split(regex)
      .filter((segment) => segment !== '')
      .map((segment) => ({
        text: segment,
        highlighted: normalized_highlights.some((highlight) =>
          segment.toLowerCase() === highlight.toLowerCase().replace(/\\/g, '')
        ),
      }));
  }

  private escape_regex(value: string): string {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}
