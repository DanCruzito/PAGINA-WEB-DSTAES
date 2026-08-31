import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { LayoutLandingHeader } from "../components/layout-landing-header/layout-landing-header";

@Component({
  selector: 'layout-landing',
  imports: [RouterOutlet, LayoutLandingHeader],
  templateUrl: './layout-landing.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutLanding { }
