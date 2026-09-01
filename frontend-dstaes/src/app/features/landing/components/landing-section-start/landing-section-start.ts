import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LandingSectionStartCarousel } from "../landing-section-start-carousel/landing-section-start-carousel";
import { UiButton } from "../../../../shared/ui/ui-button/ui-button";
import { LandingCarouselService } from '../../services/landing-carousel.service';

@Component({
  selector: 'landing-section-start',
  imports: [LandingSectionStartCarousel, UiButton],
  templateUrl: './landing-section-start.html',
  host: {
    class: 'block w-full'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingSectionStart {
  public carousel_service = inject(LandingCarouselService);
}
