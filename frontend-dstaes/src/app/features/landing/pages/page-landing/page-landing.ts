import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LayoutLanding } from "../../../../layout/layout-landing/layout-landing";

@Component({
  selector: 'page-landing',
  imports: [LayoutLanding],
  templateUrl: './page-landing.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLanding { }
