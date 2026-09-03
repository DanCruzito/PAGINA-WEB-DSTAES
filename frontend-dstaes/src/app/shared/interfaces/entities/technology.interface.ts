export interface TechnologyInterface {
  id: number;
  name: string;
  icon: string;
  website_url: string;
  is_active: boolean;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
