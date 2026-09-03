export interface SystemInterface {
  id: number;
  slug: string;
  name: string;
  short_description: string;
  description: string;
  image: string;
  status: string;
  is_active: boolean;
  view_count: number;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
