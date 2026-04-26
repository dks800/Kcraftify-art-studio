export type ProductCategory = "Coasters" | "Wall Art" | "Jewelry";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  image: string;
  alt: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Ocean Blue Coaster",
    category: "Coasters",
    image: "https://picsum.photos/400/400?random=1",
    alt: "Handmade resin coaster set - Kcraftify Art Studio",
  },
  {
    id: "2",
    name: "Golden Wave Wall Art",
    category: "Wall Art",
    image: "https://picsum.photos/400/400?random=2",
    alt: "Handmade resin coaster set - Kcraftify Art Studio",
  },
  {
    id: "3",
    name: "Emerald Resin Pendant",
    category: "Jewelry",
    image: "https://picsum.photos/400/400?random=3",
    alt: "Handmade resin coaster set - Kcraftify Art Studio",
  },
  {
    id: "4",
    name: "Luxury Marble Coaster",
    category: "Coasters",
    image: "https://picsum.photos/400/400?random=4",
    alt: "Handmade resin coaster set - Kcraftify Art Studio",
  },
];
