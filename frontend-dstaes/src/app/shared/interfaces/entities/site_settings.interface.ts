export interface SiteSettingsInterface {
  id: number;
  company_id: number;
  primary_color: string;
  secondary_color: string;
  title: string;
  subtitle: string;
  image: string;
  seo_tittle: string;
  seo_description: string;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
