import { ChangeDetectionStrategy, Component } from '@angular/core';

import { UiButton } from '../../../../shared/ui/ui-button/ui-button';
import { UiCard } from '../../../../shared/ui/ui-card/ui-card';
import { UiCheckbox } from '../../../../shared/ui/ui-checkbox/ui-checkbox';
import { UiInput } from '../../../../shared/ui/ui-input/ui-input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'page-login',
  imports: [UiCard, UiInput, UiCheckbox, UiButton, RouterLink],
  templateUrl: './page-login.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLogin { }
