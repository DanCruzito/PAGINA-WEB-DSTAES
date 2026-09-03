export interface SocialLinkInterface {
  id: number;
  company_id: number;
  platform: string;
  url: string;
  icon: string;
  display_order: number;
  is_active: boolean;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
