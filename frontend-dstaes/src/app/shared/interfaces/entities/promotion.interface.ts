export interface PromotionInterface {
  id: number;
  name: string;
  description: string;
  discount_type: string;
  discount_value: number;
  start_date: Date;
  end_date: Date;
  required_duration_months?: number;
  is_active: boolean;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
