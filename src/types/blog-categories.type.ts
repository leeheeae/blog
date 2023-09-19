export type TypeBlogCategories = {
  id: number;
  name: string;
  depth?: {
    id: number;
    name: string;
  }[];
}[];
