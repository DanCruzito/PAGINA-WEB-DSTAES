export type UiBadgeVariants = 'brand' | 'alternative' | 'gray' | 'danger' | 'success' | 'warning';

interface UiBadgeColorInterface {
  background: string;
  text: string;
  border: string;
  dot: string;
  dismiss_hover: string;
}

export const ui_badge_variants: { [key in UiBadgeVariants]: UiBadgeColorInterface } = {
  brand: {
    background: 'bg-brand-softer',
    text: 'text-fg-brand-strong',
    border: 'border border-brand-subtle',
    dot: 'bg-fg-brand-strong',
    dismiss_hover: 'hover:bg-brand-soft',
  },
  alternative: {
    background: 'bg-neutral-primary-soft',
    text: 'text-heading',
    border: 'border border-default',
    dot: 'bg-heading',
    dismiss_hover: 'hover:bg-neutral-tertiary',
  },
  gray: {
    background: 'bg-neutral-secondary-medium',
    text: 'text-heading',
    border: 'border border-default-medium',
    dot: 'bg-heading',
    dismiss_hover: 'hover:bg-neutral-quaternary',
  },
  danger: {
    background: 'bg-danger-soft',
    text: 'text-fg-danger-strong',
    border: 'border border-danger-subtle',
    dot: 'bg-fg-danger-strong',
    dismiss_hover: 'hover:bg-danger-medium',
  },
  success: {
    background: 'bg-success-soft',
    text: 'text-fg-success-strong',
    border: 'border border-success-subtle',
    dot: 'bg-fg-success-strong',
    dismiss_hover: 'hover:bg-success-medium',
  },
  warning: {
    background: 'bg-warning-soft',
    text: 'text-fg-warning',
    border: 'border border-warning-subtle',
    dot: 'bg-fg-warning',
    dismiss_hover: 'hover:bg-warning-medium',
  },
};
