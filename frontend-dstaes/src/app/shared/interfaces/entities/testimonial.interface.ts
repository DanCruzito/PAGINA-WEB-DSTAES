import { ClientInterface } from "./client.interface";

export interface TestimonialInterface {
  id: number;
  client_id: number;
  content: string;
  rating: number;
  Is_featured: boolean;
  is_active: boolean;
  display_order: number;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
  client: ClientInterface;
}
