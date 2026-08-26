export const available_icons = {
  sun: 'icon-[ri--sun-fill]',
  moon: 'icon-[ri--moon-fill]',

} as const;

export type IconValue = keyof typeof available_icons;
