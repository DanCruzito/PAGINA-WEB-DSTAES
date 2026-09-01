export type InputSize = 'sm' | 'md' | 'lg' | 'xl';

export interface InputSizeClasses {
  px: string;
  py: string;
  text: string;
}

export const input_sizes: Record<InputSize, InputSizeClasses> = {
  sm: { px: 'px-2.5', py: 'py-2', text: 'text-sm' },
  md: { px: 'px-3', py: 'py-2.5', text: 'text-sm' },
  lg: { px: 'px-3.5', py: 'py-3', text: 'text-base' },
  xl: { px: 'px-4', py: 'py-3.5', text: 'text-base' },
};
