import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToggleThemeService } from './services/toggle-theme.service';
import { UiMode } from './ui/ui-mode/ui-mode';
//import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UiMode],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly theme_service = inject(ToggleThemeService);
  protected readonly title = signal('frontend-dstaes');

  constructor() {
    this.theme_service.initialize();
    //initFlowbite();
  }
}
