export const available_icons = {
  sun: 'icon-[ri--sun-fill]',
  moon: 'icon-[ri--moon-fill]',
  arrow_left: 'icon-[ri--arrow-left-s-line]',
  arrow_right: 'icon-[ri--arrow-right-s-line]',
  arrow_up: 'icon-[ri--arrow-up-s-line]',
  arrow_down: 'icon-[ri--arrow-down-s-line]',


} as const;

export type IconValue = keyof typeof available_icons;
