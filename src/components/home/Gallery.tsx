import { useState } from "react";
import {
  products,
  type Product,
  type ProductCategory,
} from "../../data/products";
import ProductCard from "./ProductCard";
import Lightbox from "./Lightbox";
import FadeIn from "../common/FadeIn";

const categories: (ProductCategory | "All")[] = [
  "All",
  "Coasters",
  "Wall Art",
  "Jewelry",
];

const Gallery = () => {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filtered: Product[] =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section
      id="gallery"
      className="px-4 py-14 bg-gradient-to-b from-black to-[#0f0f0f]"
    >
      <FadeIn>
        <div className="flex flex-col items-center gap-4 mb-6">
          <img
            src="/images/logo.webp"
            alt="Logo"
            className="w-25 h-25"
            loading="lazy"
            decoding="async"
          />
          <h2 className="text-2xl md:text-4xl font-serif tracking-wide text-white text-center mb-10">
            Our Collection
          </h2>
        </div>
      </FadeIn>

      {/* Filters */}
      <FadeIn delay={0.1}>
        <div className="flex gap-3 overflow-x-auto mb-6 items-center justify-center">
          {categories.map((cat) => (
            <button
              aria-label={cat}
              key={cat}
              name={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1 cursor-pointer rounded-full text-sm whitespace-nowrap ${active !== cat ? "hover:bg-[#D4AF37]/30" : ""}  ${
                active === cat
                  ? "bg-[#D4AF37] text-black"
                  : "border border-white/20 text-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Grid */}
      <FadeIn delay={0.2}>
        <div className="grid grid-cols-2 gap-3">
          {filtered.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>
      </FadeIn>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <Lightbox
          products={filtered}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </section>
  );
};

export default Gallery;
