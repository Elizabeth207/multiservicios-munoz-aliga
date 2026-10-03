export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  categoryId: string;
  features?: string[];
}
