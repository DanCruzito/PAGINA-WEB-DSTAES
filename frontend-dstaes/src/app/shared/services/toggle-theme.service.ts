import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToggleThemeService {
    private readonly document = inject(DOCUMENT);
    private readonly platformId = inject(PLATFORM_ID);
    private readonly isBrowser = isPlatformBrowser(this.platformId);

    readonly mode = signal<'light' | 'dark'>(this.getInitialMode());

    private getInitialMode(): 'light' | 'dark' {
        if (!this.isBrowser) {
            return 'light';
        }

        const storedTheme = localStorage.getItem('color-theme');
        if (storedTheme === 'light' || storedTheme === 'dark') {
            return storedTheme;
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    initialize(): void {
        if (!this.isBrowser) {
            return;
        }

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDark = localStorage.getItem('color-theme') === 'dark' ||
            (!localStorage.getItem('color-theme') && prefersDark);

        this.document.documentElement.classList.toggle('dark', isDark);
        this.mode.set(isDark ? 'dark' : 'light');
    }

    toggle(): void {
        if (!this.isBrowser) {
            return;
        }

        const isDark = !this.document.documentElement.classList.contains('dark');
        this.document.documentElement.classList.toggle('dark', isDark);
        localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
        this.mode.set(isDark ? 'dark' : 'light');
    }
}
