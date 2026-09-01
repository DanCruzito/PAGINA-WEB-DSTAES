import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LandingSectionStartCarousel } from "../landing-section-start-carousel/landing-section-start-carousel";
import { UiButton } from "../../../../shared/ui/ui-button/ui-button";
import { LandingCarouselService } from '../../services/landing-carousel.service';
import { UiIcon } from "../../../../shared/ui/ui-icon/ui-icon";
import { LandingSectionStartFeatures } from "../landing-section-start-features/landing-section-start-features";

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
  public carousel_service = inject(LandingCarouselService);
}
