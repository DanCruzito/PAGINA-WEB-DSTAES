import { IconValue } from '../../ui/ui-icon/icons';
export interface ServiceInterface {
  id: number;
  slug: string;
  title: string;
  short_description: string;
  description: string;
  icon: IconValue;
  image: string;
  is_featured: boolean;
  is_active: boolean;
  display_order: number;
  view_count: number;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
