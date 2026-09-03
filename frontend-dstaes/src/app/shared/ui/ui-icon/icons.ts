export const available_icons = {
  sun: 'icon-[ri--sun-fill]',
  moon: 'icon-[ri--moon-fill]',
  arrow_left: 'icon-[ri--arrow-left-s-line]',
  arrow_right: 'icon-[ri--arrow-right-s-line]',
  arrow_up: 'icon-[ri--arrow-up-s-line]',
  arrow_down: 'icon-[ri--arrow-down-s-line]',
  cube: 'icon-[ri--box-3-fill]',
  people: 'icon-[ri--team-fill]',
  star: 'icon-[ri--star-fill]',
  headphone: 'icon-[ri--headphone-fill]',
  code: 'icon-[ri--code-fill]',
  smartphone: 'icon-[ri--smartphone-fill]',
  layout: 'icon-[ri--layout-fill]',
  cloud: 'icon-[ri--cloud-fill]',
  briefcase: 'icon-[ri--briefcase-fill]',

} as const;

export type IconValue = keyof typeof available_icons;
