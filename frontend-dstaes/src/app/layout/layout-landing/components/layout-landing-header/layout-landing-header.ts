import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImageIso } from '../../../../shared/components/image-iso/image-iso';
import { ImageLogo } from '../../../../shared/components/image-logo/image-logo';
import { UiButton } from '../../../../shared/ui/ui-button/ui-button';
import { UiMode } from '../../../../shared/ui/ui-mode/ui-mode';
import { landing_options } from '../../data/options';
import { LayoutLandingHeaderOption } from '../layout-landing-header-option/layout-landing-header-option';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'layout-landing-header',
  imports: [
    ImageLogo,
    UiMode,
    UiButton,
    RouterLink,
    ImageIso,
    LayoutLandingHeaderOption,
  ],
  templateUrl: './layout-landing-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutLandingHeader implements AfterViewInit, OnDestroy {
  options = signal(landing_options);
  active_slug = signal('start');
  is_scrolled = signal(false);

  private readonly section_order = landing_options.map((option) => option.slug);
  private triggers: ScrollTrigger[] = [];

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') return;

    this.triggers = [
      ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        end: 'max',
        onUpdate: (self) => {
          this.is_scrolled.set(self.scroll() > 0);
        },
      }),
    ];

    this.section_order.forEach((slug) => {
      const section = document.getElementById(slug);
      if (!section) return;

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top 20%',
        end: 'bottom 20%',
        onToggle: (self) => {
          if (self.isActive) {
            this.active_slug.set(slug);
          }
        },
        onUpdate: (self) => {
          if (self.isActive) {
            this.active_slug.set(slug);
          }
        },

      });

      this.triggers.push(trigger);
    });

    this.syncActiveSection();
  }

  ngOnDestroy(): void {
    this.triggers.forEach((trigger) => trigger.kill());
    this.triggers = [];
  }

  private syncActiveSection(): void {
    let active = 'start';

    for (let index = this.section_order.length - 1; index >= 0; index -= 1) {
      const slug = this.section_order[index];
      const section = document.getElementById(slug);

      if (!section) continue;

      const rect = section.getBoundingClientRect();
      if (rect.top <= 180 && rect.bottom > 180) {
        active = slug;
        break;
      }
    }

    this.active_slug.set(active);
    this.is_scrolled.set(window.scrollY > 0);
  }
}
