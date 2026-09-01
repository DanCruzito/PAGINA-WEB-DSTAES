import { afterNextRender, Component, ElementRef, inject, viewChild } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { ModalService } from '../../services/modal.service';

const modal_size_classes: Record<string, string> = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-4xl',
  xl: 'max-w-7xl',
};

@Component({
  selector: 'ui-modal',
  imports: [NgTemplateOutlet, NgClass],
  templateUrl: './ui-modal.html',
})
export class UiModal {
  modal_service = inject(ModalService);
  modal_el = viewChild.required<ElementRef<HTMLElement>>('modal_el');

  get placement_classes() {
    const p = this.modal_service.placement();
    const base = 'fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full';

    switch (p) {
      case 'top-left':
        return `${base} flex items-start justify-start`;
      case 'top-center':
        return `${base} flex items-start justify-center`;
      case 'top-right':
        return `${base} flex items-start justify-end`;
      case 'center-left':
        return `${base} flex items-center justify-start`;
      case 'center':
        return `${base} flex items-center justify-center`;
      case 'center-right':
        return `${base} flex items-center justify-end`;
      case 'bottom-left':
        return `${base} flex items-end justify-start`;
      case 'bottom-center':
        return `${base} flex items-end justify-center`;
      case 'bottom-right':
        return `${base} flex items-end justify-end`;
      default:
        return `${base} flex items-center justify-center`;
    }
  }

  get size_class() {
    return modal_size_classes[this.modal_service.size()] ?? modal_size_classes['sm'];
  }

  constructor() {
    afterNextRender(() => {
      this.modal_service.set_element(this.modal_el().nativeElement);
    });
  }
}
