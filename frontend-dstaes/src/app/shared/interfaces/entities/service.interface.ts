export interface Service {
  id: number;
  slug: string;
  title: string;
  short_description: string;
  description: string;
  icon: string;
  image: string;
  is_featured: boolean;
  is_active: boolean;
  display_order: number;
  view_count: number;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
