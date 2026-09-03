import { ProjectImageInterface } from "./project_image.inteface";
import { ProjectTechnologyInterface } from "./project_technology.interface";

export interface ProjectInterface {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  client_Id: number;
  project_url?: string;
  repository_url?: string;
  cover_image_url: string;
  status: string;
  is_featured: boolean;
  is_active: boolean;
  display_order: number;
  view_count: number;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
  images: ProjectImageInterface[];
  project_technologies: ProjectTechnologyInterface[];
}
