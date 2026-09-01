import { IconValue } from '../../../shared/ui/ui-icon/icons';

export interface DashboardOption {
  icon: IconValue;
  label: string;
  goto: string;
}

export const dashboard_options: DashboardOption[] = [
  { icon: 'cube', label: 'Inicio', goto: '/dashboard' },
  { icon: 'star', label: 'Pagos', goto: '/dashboard/payments' },
  { icon: 'people', label: 'Roles', goto: '/dashboard/roles' },
  { icon: 'people', label: 'Usuarios', goto: '/dashboard/users' },
  { icon: 'headphone', label: 'Mensajes', goto: '/dashboard/messages' },
  { icon: 'cube', label: 'Compañía', goto: '/dashboard/company' },
  { icon: 'cube', label: 'Contenido', goto: '/dashboard/settings' },
  { icon: 'star', label: 'R. Sociales', goto: '/dashboard/social' },
  { icon: 'cube', label: 'Servicios', goto: '/dashboard/services' },
  { icon: 'cube', label: 'Paquetes', goto: '/dashboard/packages' },
];
