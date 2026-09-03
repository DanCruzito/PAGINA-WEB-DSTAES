import { PromotionInterface } from "./promotion.interface";

export interface SystemPlanPromotionInterface {
  id: number;
  system_plan_id: number;
  promotion_id: number;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
  promotion: PromotionInterface;
}
