import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'layout-auth',
  imports: [RouterOutlet],
  templateUrl: './layout-auth.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutAuth { }
