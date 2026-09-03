export interface HomeImageInterface {
  id: number;
  title: string;
  image: string;
  description: string;
  highlight: boolean;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
