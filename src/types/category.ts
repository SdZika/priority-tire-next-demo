export interface Category {
  name: string;
  url_key: string;
  product_count: number;
  children?: Category[];
}
        
export interface CategoriesData {
  categories: {
    items: Category[];
  };
}