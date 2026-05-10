import { imageNames } from "./productName";

export type ProductCategory =
  | "Jewellery"
  | "Keychains"
  | "Photo Frames"
  | "Pooja Platters"
  | "Rakhi"
  | "Varmala Preservation";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  image: string;
  url: string;
  alt: string;
}

const IMAGE_NAME = "Image";
const ALT_TEXT = "Handmade Resin Art - Kcraftify Art Studio";

const createProducts = (
  categoryFolder: string,
  category: ProductCategory,
  startId: number
): Product[] => {
  const count = Object.keys(imageNames[categoryFolder as keyof typeof imageNames]).length;
  return Array.from({ length: count }, (_, index) => {
    const id = (startId + index).toString();
    return {
      id,
      name: (imageNames[categoryFolder as keyof typeof imageNames] as Record<number, string>)[index + 1] || `${IMAGE_NAME} ${id}`,
      category,
      image: `/images/${categoryFolder}/${index + 1}.webp`,
      url: `/product/${id}`,
      alt: ALT_TEXT,
    };
  });
};

const categoryData = [
  { folder: "jewellery", category: "Jewellery" as ProductCategory },
  { folder: "keychains", category: "Keychains" as ProductCategory },
  { folder: "photoframes", category: "Photo Frames" as ProductCategory },
  { folder: "poojaplatter", category: "Pooja Platters" as ProductCategory },
  { folder: "rakhi", category: "Rakhi" as ProductCategory },
  { folder: "varmalapreservation", category: "Varmala Preservation" as ProductCategory },
];

let idCounter = 1;
export const products: Product[] = categoryData.flatMap(({ folder, category }) => {
  const prods = createProducts(folder, category, idCounter);
  idCounter += prods.length;
  return prods;
});
