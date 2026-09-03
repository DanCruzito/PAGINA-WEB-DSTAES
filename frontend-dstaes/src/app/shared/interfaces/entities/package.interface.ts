import { FeatureInterface } from "./feature.interface";

export interface PackageInterface {
  id: number;
  slug: string;
  name: string;
  short_description: string;
  description: string;
  price: number;
  currency: string;
  Is_featured: boolean;
  is_active: boolean;
  display_order: number;
  view_count: number;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
  features: FeatureInterface[];
}
