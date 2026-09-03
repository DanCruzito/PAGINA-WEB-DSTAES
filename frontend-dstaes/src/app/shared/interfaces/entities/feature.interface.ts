export interface FeatureInterface {
  id: number;
  package_id: number;
  title: string;
  description: string;
  is_included: boolean;
  display_order: number;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
