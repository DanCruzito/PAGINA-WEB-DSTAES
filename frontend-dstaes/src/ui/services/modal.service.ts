import { Injectable, signal, TemplateRef } from '@angular/core';
import { Modal } from 'flowbite';
import type { ModalOptions, InstanceOptions } from 'flowbite';

export type ModalPlacement = 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center' | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
export type ModalBackdrop = 'static' | 'dynamic';
export type ModalSize = 'sm' | 'md' | 'lg' | 'xl';

interface ModalContentSection {
  template?: TemplateRef<any>;
}

interface ModalOptionsExtended {
  content?: ModalContentSection;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modal_instance: Modal | null = null;
  options = signal<ModalOptionsExtended>({});

  modal_el = signal<HTMLElement | null>(null);

  placement = signal<ModalPlacement>('center');
  backdrop = signal<ModalBackdrop>('dynamic');
  closable = signal(true);
  size = signal<ModalSize>('sm');

  is_open = signal(false);

  show_content = signal(false);

  private _on_show_callback: (() => void) | null = null;
  private _on_hide_callback: (() => void) | null = null;
  private _on_toggle_callback: (() => void) | null = null;

  init_modal(): void {
    const modal_options: ModalOptions = {
      placement: this.placement(),
      backdrop: this.backdrop(),
      closable: this.closable(),
      onShow: () => {
        this.is_open.set(true);
        this._on_show_callback?.();
      },
      onHide: () => {
        this.is_open.set(false);
        this._on_hide_callback?.();
      },
      onToggle: () => {
        this._on_toggle_callback?.();
      },
    };

    const instance_options: InstanceOptions = {
      id: 'global-modal',
      override: true,
    };
    this.modal_instance = new Modal(this.modal_el(), modal_options, instance_options);
  }

  configure(config: {
    placement?: ModalPlacement;
    backdrop?: ModalBackdrop;
    closable?: boolean;
    size?: ModalSize;
    on_show?: () => void;
    on_hide?: () => void;
    on_toggle?: () => void;
  }): void {
    if (config.placement !== undefined) this.placement.set(config.placement);
    if (config.backdrop !== undefined) this.backdrop.set(config.backdrop);
    if (config.closable !== undefined) this.closable.set(config.closable);
    if (config.size !== undefined) this.size.set(config.size);
    if (config.on_show !== undefined) {
      this._on_show_callback = config.on_show;
      this.modal_instance?.updateOnShow(config.on_show);
    }
    if (config.on_hide !== undefined) {
      this._on_hide_callback = config.on_hide;
      this.modal_instance?.updateOnHide(config.on_hide);
    }
    if (config.on_toggle !== undefined) {
      this._on_toggle_callback = config.on_toggle;
      this.modal_instance?.updateOnToggle(config.on_toggle);
    }
  }

  on_show(callback: () => void): void {
    this._on_show_callback = callback;
    this.modal_instance?.updateOnShow(callback);
  }

  on_hide(callback: () => void): void {
    this._on_hide_callback = callback;
    this.modal_instance?.updateOnHide(callback);
  }

  on_toggle(callback: () => void): void {
    this._on_toggle_callback = callback;
    this.modal_instance?.updateOnToggle(callback);
  }

  open(): void {
    this.modal_instance?.show();
  }

  close(): void {
    this.modal_instance?.hide();
  }

  toggle(): void {
    this.modal_instance?.toggle();
  }

  is_visible(): boolean {
    return this.modal_instance?.isVisible() ?? false;
  }

  async set_content(template: TemplateRef<any> | null): Promise<void> {
    this.options.update((options) => ({
      ...options,
      content: {
        template: template || undefined,
      },
    }));
    this.show_content.set(!!template);
    await new Promise((resolve) => setTimeout(resolve, 10));
    this.init_modal();
  }

  set_element(el: HTMLElement): void {
    this.modal_el.set(el);
  }

  async open_with_content(config: {
    template: TemplateRef<any>;
    placement?: ModalPlacement;
    backdrop?: ModalBackdrop;
    closable?: boolean;
    size?: ModalSize;
  }): Promise<void> {
    this.configure({
      placement: config.placement,
      backdrop: config.backdrop,
      closable: config.closable,
      size: config.size,
    });
    await this.set_content(config.template);
    this.open();
  }
}
