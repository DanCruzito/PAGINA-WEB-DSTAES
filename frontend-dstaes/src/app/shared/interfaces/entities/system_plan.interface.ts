import { SystemPlanPromotionInterface } from "./system_plan_promotion.interface";

export interface SystemPlanInterface {
  id: number;
  system_id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  billing_period: string;
  is_active: boolean;
  view_count: number;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
  system_plans_promotions: SystemPlanPromotionInterface[];
}
