import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToggleThemeService } from './shared/services/toggle-theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly theme_service = inject(ToggleThemeService);
  protected readonly title = signal('frontend-dstaes');

  constructor() {
    this.theme_service.initialize();
  }
}
