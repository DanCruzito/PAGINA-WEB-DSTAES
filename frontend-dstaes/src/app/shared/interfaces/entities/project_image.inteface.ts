export interface ProjectImageInterface {
  id: number;
  project_id: number;
  image: string;
  alt_text: string;
  display_order: number;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
