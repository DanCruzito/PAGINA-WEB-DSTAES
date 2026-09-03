export interface ClientInterface {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company_name: string;
  address: string;
  is_active: boolean;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
