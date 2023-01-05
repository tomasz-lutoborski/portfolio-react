export interface DataItem {
  id: string;
  image: string;
  title: string;
  views: string;
  published: string;
}

export interface Data {
  section: string;
  channel: string;
  items: DataItem[];
}
