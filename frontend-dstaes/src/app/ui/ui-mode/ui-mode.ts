import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ToggleThemeService } from '../../services/toggle-theme.service';
import { UiButton } from '../ui-button/ui-button';

@Component({
  selector: 'ui-mode',
  imports: [UiButton],
  templateUrl: './ui-mode.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiMode {
  protected readonly theme_service = inject(ToggleThemeService);
  protected readonly icon = computed(() =>
    this.theme_service.mode() === 'dark' ? 'sun' : 'moon',
  );
}
